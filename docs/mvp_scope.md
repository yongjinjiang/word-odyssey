# Word Odyssey: MVP Scope

## Authority of this document

This document is authoritative for what the first MVP includes, excludes, and must prove. The exact ten-minute realization is [First Playable Experience](first_playable_experience.md). Acceptance is observed through [Child Test Plan](child_test_plan.md). Product rules come from the other linked documents rather than being redefined here.

## MVP objective

Answer one product question:

> Will a child enjoy choosing semantic paths, growing more than one word region, and using selected words to co-direct a story that lights up the same forest?

The MVP is a product-experience experiment, not a complete curriculum, scalable content platform, or production system.

## Owner-decided direction and remaining assumptions

The project owner has decided:

- approximately 12 years old;
- English is the learner’s native/stronger language at approximately U.S. Grade 7 reading level;
- Chinese proficiency is approximately Chinese elementary-school Grade 3;
- Chinese is the target language and English is support/scaffolding;
- Prototype 1 is optimized only for iPad in landscape orientation; iPhone support is not required.
- Prototype 1 uses Simplified Chinese;
- Prototype 1 uses nicknames and preset avatars, not real names or personal photos;
- family-selected values or faith-informed themes are outside Prototype 1, though explicit opt-in research may occur later.

The first playable additionally assumes:

- two explored regions and two anchors are enough to offer Story View;
- a 10–15 minute observed session;
- the defaults recorded in [Prototype Decisions](prototype_decisions.md).

Only the latter assumptions remain test scaffolding.

## Differentiating 11-step loop

The MVP must include all eleven steps:

1. The child chooses one Chinese starting word and one story theme.
2. The Chinese word becomes Current in a small, partially hidden forest, with pinyin and concise English support available.
3. The child chooses one of a few relationship types.
4. Three to six matching words and their paths become Available.
5. The child selects a word; focus moves, the relationship resets, the path is recorded, and old possibilities become inactive.
6. After several moves, the child accepts a picture or word portal that opens a separate region without a false Semantic edge.
7. After exploring two regions, the child confirms two anchor words and optionally a preset-avatar character.
8. The forest darkens into Story View and advances one or two sentences.
9. Up to four meaningful language nodes light, normally including no more than two newly introduced explorable words.
10. The child taps a lit word to auto-pause, explores at least one Semantic relationship from it, and resumes the preserved story.
11. The child adds or chooses one next-story ingredient and sees the next beat reflect that direction.

If a step is removed, the MVP no longer tests the complete differentiating idea.

## Included experience

### Entry and local exploration

- 4–6 Chinese starting choices and 3 age-appropriate story themes.
- Current, Available, Visited, Seen, and Unrevealed states as defined in [Node and Edge States](node_and_edge_states.md).
- A small child-readable relationship set.
- 3–6 Available destinations per ordinary choice, with 8 as a hard prototype ceiling.
- Focus movement, relationship reset, reciprocal re-selection behavior, and path history.
- Progressive revelation, basic pan/zoom, and Map View.
- Attention-based simplification as the forest grows.

### Multiple regions and story setup

- Optional word or picture portals.
- At least two separate regions.
- Anchor review and confirmation.
- One preset-avatar character with optional nickname.

### Incremental story

- Darkened Story View with anchors and explored regions retained.
- One- or two-sentence beats.
- Meaningful word-selection and spatial-placement rules from [Story Generation Experience](story_generation_experience.md).
- Distinct Semantic, Traversed, and Narrative connections.
- Direct story-word auto-pause and explicit Pause.
- One semantic exploration from a story word and continuity on Resume.
- One director’s-toolbox choice reflected in the next beat.

### Session close

- A concise map of routes, regions, anchors, and Narrative history.
- Story-so-far summary.
- Continue, revisit, or Finish for now.

## Content boundary

Use a small, curated, connected Simplified Chinese vocabulary world appropriate to roughly Chinese elementary-school Grade 3, while keeping themes and decisions interesting to a 12-year-old. Include enough familiar language for independent navigation and enough supported novelty to make exploration worthwhile. Quality and linguistic validity matter more than node count.

Prototype relationship candidates:

- 近义词 Similar
- 反义词 Opposite
- 相关词 Related
- 常用搭配 Common combinations

Pinyin and concise English meaning are support controls, not graph relationships. The final Chinese labels and examples depend on child comprehension tests.

## Explicitly deferred

- comprehensive dictionary coverage;
- curriculum maps and formal proficiency progression;
- mastery scoring, spaced repetition, and parent analytics;
- pronunciation grading;
- multiplayer, sharing, and social identity;
- full avatar creation, real names, and personal-photo support;
- generated images for every beat;
- long chapters and complex world lore;
- points, streaks, inventory, and reward economy;
- unrestricted child free text;
- global view of the entire language graph;
- automatic promotion of AI-generated relationships into language truth;
- family-selectable values or faith-informed themes in Prototype 1; explicit opt-in research may occur later;
- all technical architecture and implementation choices.

## Concrete acceptance criteria

The MVP is ready for the first cohort when a single child can complete the scenario in [First Playable Experience](first_playable_experience.md) without a scripted adult walkthrough, and the prototype visibly preserves every canonical state and connection distinction.

The product direction is promising when the cohort meets the **Success threshold** in [Child Test Plan](child_test_plan.md), including:

- at least 4 of 5 complete a Chinese semantic move with no more than a neutral prompt;
- at least 4 of 5 identify Current and Available;
- at least 3 of 5 distinguish Visited from Seen;
- at least 4 of 5 explain the selected Chinese relationship in English or by example;
- at least 4 of 5 open a second region and select meaningful Chinese anchors;
- at least 4 of 5 notice Chinese sentence-to-star correspondence;
- at least 3 of 5 understand the story gist before needing a full English sentence translation;
- at least 3 of 5 intentionally auto-pause on a Chinese story word;
- at least 4 of 5 Resume and deliberately direct the next beat;
- at least 4 of 5 recall or recognize one explored Chinese word later in the session;
- at least 4 of 5 want to continue, replay, or propose what should happen next.

Concern and failure thresholds in the test plan control whether the team tunes one interaction or redesigns the loop before expanding scope.

## Product risks to monitor

The test plan should actively look for these risks:

- the forest looks like a technical graph rather than a world;
- persistent history becomes clutter;
- state meanings are too subtle or numerous;
- relationship selection feels like a disguised quiz;
- the AI takes over or ignores anchors;
- story combinations become incoherent or unsafe;
- animation spectacle overwhelms attention to language;
- identity features create privacy risk;
- scope expands before the core loop is proven.

## Owner-decision status

The previously listed owner-direction questions are resolved in [Prototype Decisions](prototype_decisions.md). Learner-testing questions remain open. Technical architecture should not be selected as part of this product-definition phase.
