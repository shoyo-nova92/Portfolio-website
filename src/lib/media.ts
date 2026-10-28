import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

/** Only call with author-controlled public paths, never request input. */
export function publicAssetExists(asset: string) {
  return existsSync(path.join(process.cwd(), "public", asset.replace(/^\//, "")));
}
