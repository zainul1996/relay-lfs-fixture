# relay-lfs-fixture

Minimal project with a Git LFS-tracked asset for the Relay live corpus.

Checks:

```bash
git lfs ls-files
npm test
```

`assets/data.bin` is stored in Git LFS. The manifest in `src/manifest.mjs` lists
the tracked assets, and the Node test reads the checked-out payload.
