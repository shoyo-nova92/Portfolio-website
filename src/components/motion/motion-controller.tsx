"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const targets = "[data-reveal], [data-sequence]";

/** Motion only enhances visible server HTML; a failed/disabled script hides nothing. */
export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.querySelector<HTMLElement>("main");
    if (!main) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let routeAnimation: Animation | undefined;
    let disposed = false;
    const known = new WeakSet<Element>();

    function settleElement(element: HTMLElement) {
      element.dataset.motionState = "settled";
      observer?.unobserve(element);
    }

    function settleAll() {
      routeAnimation?.cancel();
      observer?.disconnect();
      main!.querySelectorAll<HTMLElement>(targets).forEach(settleElement);
    }

    function discover() {
      main!.querySelectorAll<HTMLElement>(targets).forEach(element => {
        if (known.has(element)) return;
        known.add(element);
        const delay = Math.min(2, Math.max(0, Number(element.dataset.revealDelay) || 0));
        element.style.setProperty("--reveal-delay", `${delay * 60}ms`);
        if (preference.matches || !observer) {
          settleElement(element);
        } else if (!element.dataset.motionState) {
          observer.observe(element);
        }
      });
    }

    function onPreferenceChange() {
      // Once settled, the existing page stays still if the preference changes back.
      // A new route can receive its own finite entrance and sequences.
      if (preference.matches) settleAll();
    }

    function onFocus(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      let element = event.target.closest<HTMLElement>(targets);
      while (element && main!.contains(element)) {
        settleElement(element);
        element.querySelectorAll<HTMLElement>(targets).forEach(settleElement);
        element = element.parentElement?.closest<HTMLElement>(targets) ?? null;
      }
    }

    // One initialization frame lets the committed route's server DOM arrive.
    const frame = requestAnimationFrame(() => {
      if (disposed) return;
      if ("IntersectionObserver" in window && !preference.matches) {
        observer = new IntersectionObserver(entries => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const element = entry.target as HTMLElement;
            element.dataset.motionState = "entered";
            observer?.unobserve(element);
          }
        }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
      }
      discover();
      const route = main.querySelector<HTMLElement>(".route-frame") ?? main;
      if (!preference.matches && typeof route.animate === "function") {
        routeAnimation = route.animate([
          { opacity: 0.72, transform: "translateY(8px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 340, easing: "cubic-bezier(.22,1,.36,1)" });
      }
    });

    // Next may stream a route after the pathname commits. Only observe inserted
    // nodes, never our own data attributes or style updates.
    const mutations = new MutationObserver(discover);
    mutations.observe(main, { childList: true, subtree: true });
    preference.addEventListener("change", onPreferenceChange);
    main.addEventListener("focusin", onFocus);
    window.addEventListener("beforeprint", settleAll);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      routeAnimation?.cancel();
      observer?.disconnect();
      mutations.disconnect();
      preference.removeEventListener("change", onPreferenceChange);
      main.removeEventListener("focusin", onFocus);
      window.removeEventListener("beforeprint", settleAll);
    };
  }, [pathname]);

  return null;
}
