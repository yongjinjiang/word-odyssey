# Prototype 1 implementation plan

## Architecture

A single Vite + React page with an explicit local state machine. Curated vocabulary and deterministic story beats live in local modules. CSS handles the forest atmosphere, node states, connection styles, and motion. There is no backend, account, AI, analytics, or durable persistence.

## Interaction sequence

1. Opening choice: select 勇敢 and 雾林谜踪.
2. Adventure View: traverse 勇敢 → 英勇 → 勇猛 → 胆怯, with relationship reset after every move.
3. Map View: preview Seen 无畏, return through Visited 胆怯, then open the independent 地图 region.
4. Traverse 地图 → 线索 → 神秘线索, select two anchors and preset avatar 凯.
5. Story View: illuminate meaningful words; tap 低语 to pause, explore 低语 → 耳语, and resume the preserved story.
6. Add 发光的罗盘, choose the next action, and finish on a journey map with semantic/traversed/narrative distinctions.

## Content reconciliation

- Standardized all multi-syllable pinyin with word spacing.
- Standardized the 无畏 preview to “You saw it among words similar to 英勇.” The source’s Chinese preview line incorrectly mentions 大胆 while its English line and route context identify 英勇.

## Initial assets

The forest, mist, stars, compass, map, path lines, and avatar are tasteful CSS/icon placeholders so the interaction can be tested without delaying on final illustration. Future art can replace these without changing the state model.

## Deliberate deviations

- Pan/zoom is represented by Adventure/Map camera transitions rather than free-form gestures; explicit controls remain discoverable for the first child test.
- Audio narration is omitted from Prototype 1 because the product documents list it as optional and the interaction test does not require it.
- The opening currently enables only 勇敢 and 雾林谜踪. Other starting words and worlds remain visible as clearly disabled “Coming later” previews; the prototype no longer accepts and ignores them.
- All displayed anchor and preset-avatar choices are functional through deterministic local story templates. All three surprise ingredients and final directions also produce distinct local outcomes.
- Node coordinates are shared immutable world-space data. Adventure and Map views render actual recorded Traversed edges, active Semantic candidate edges, and story-owned Narrative edges from that data.
