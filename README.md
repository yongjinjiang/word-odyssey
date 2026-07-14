# Word Odyssey — Prototype 1

An iPad-landscape visual interaction prototype for the deterministic ten-minute **雾林谜踪** experience. It uses curated local data only—no backend, accounts, analytics, graph database, or live AI.

## Run locally

```bash
pnpm install
pnpm dev
```

Open the local URL at a landscape viewport of at least **1024 × 700** (the design target is iPad landscape).

## Scripted route

1. Choose **勇敢** and **雾林谜踪**, then enter the forest.
2. Select **近义词** → **英勇**. Reselect **近义词** → **勇猛**.
3. Select **反义词** → **胆怯**.
4. Open **地图 Map View**. Tap dim **无畏** to preview it, then tap visited **胆怯** to return.
5. Choose the **地图** portal. Notice that the camera moves to a separate region without a semantic edge.
6. Select **相关词** → **线索**. Then **常用搭配** → **神秘线索**.
7. Open Map View and choose story stars. Select **勇敢**, **神秘线索**, and preset explorer **凯**.
8. Continue to the second story beat, then tap the glowing **低语** star. The story auto-pauses.
9. Select **近义词** → **耳语**, then choose **继续故事 Resume**.
10. Choose **加入意外** → **发光的罗盘** → **让它出现**.
11. Select **寻找说话的人** to see the final journey map.

## Verification

```bash
pnpm lint
pnpm test
pnpm build
```

## GitHub Pages deployment

The production build uses the repository base path `/word-odyssey/`; local development remains available at the root URL shown by Vite.

Pushes to `main` run tests and lint, build the app, and deploy `dist` through GitHub Actions. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The published prototype is expected at:

https://yongjinjiang.github.io/word-odyssey/

The final map’s legend distinguishes Semantic (solid), Traversed (segmented), and Narrative (dotted violet) connections. Current, Available, Visited, Seen, and Unrevealed states combine brightness with outline, shape, iconography, line style, and motion rather than color alone.

## Product notes and deviations

See [IMPLEMENTATION_NOTES.md](IMPLEMENTATION_NOTES.md) for architecture, asset placeholders, content reconciliation, and deliberate Prototype 1 deviations.
