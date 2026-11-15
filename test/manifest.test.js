import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { assetPaths } from "../src/manifest.mjs";

test("manifest lists the LFS assets", () => {
  assert.deepEqual(assetPaths, ["assets/data.bin", "assets/second.bin"]);
});

test("LFS asset is checked out", async () => {
  const payload = await readFile(new URL("../assets/data.bin", import.meta.url), "utf8");
  assert.match(payload, /relay lfs fixture payload/);
});

test("second LFS asset is checked out", async () => {
  const payload = await readFile(new URL("../assets/second.bin", import.meta.url), "utf8");
  assert.match(payload, /relay lfs fixture payload two/);
});
