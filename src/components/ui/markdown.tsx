import { Fragment } from "react";

function inline(text: string) {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    return link ? <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer">{link[1]}</a> : <Fragment key={index}>{part}</Fragment>;
  });
}

/** Restricted local Markdown; raw HTML and executable schemes are never evaluated. */
export function Markdown({ body }: { body: string }) {
  return <div className="prose">{body.split(/\n\s*\n/).map((block, index) => {
    if (block.startsWith("### ")) return <h3 key={index}>{block.slice(4)}</h3>;
    if (block.startsWith("## ")) return <h2 key={index}>{block.slice(3)}</h2>;
    if (block.startsWith("- ")) return <ul key={index}>{block.split("\n").map((line, i) => <li key={i}>{line.replace(/^- /, "")}</li>)}</ul>;
    if (block.startsWith("> ")) return <blockquote key={index}>{block.replace(/^> /gm, "")}</blockquote>;
    return <p key={index}>{inline(block)}</p>;
  })}</div>;
}
