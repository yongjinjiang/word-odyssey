# Word Odyssey: Core Game Loop

## Authority of this document

This document is authoritative for the order and continuity of child actions in a session. Exact state meanings belong to [Node and Edge States](node_and_edge_states.md); spatial and view behavior belongs to [Graph Interaction Model](graph_interaction_model.md); story selection and lighting rules belong to [Story Generation Experience](story_generation_experience.md).

## Session structure

The experience alternates between two mutually reinforcing modes:

1. **Explore:** choose semantic paths and grow distinct regions.
2. **Story:** choose anchors, watch the story illuminate the forest, and direct or interrupt it.

The child may move between them repeatedly:

```text
Choose a word and world
→ explore a local path
→ open another region
→ choose anchors
→ receive one short story beat
→ direct or tap a story word
→ explore from that word
→ resume with new material
```

## 1. Choose a starting point

The child chooses:

- one starting word from a small visual set;
- one story world or mood.

The selected word becomes Current. The theme influences later tone and imagery but does not restrict every word to one category.

## 2. Explore a region

### Orient

Adventure View presents one unmistakable Current node, a small neighborhood, and only relationship controls relevant to that word.

### Choose a relationship

The child chooses a Simplified Chinese-language path type such as **近义词 Similar**, **反义词 Opposite**, **相关词 Related**, or **常用搭配 Common combinations**. English meaning and pinyin are support controls, not ordinary semantic destinations in Prototype 1. The exact set is recorded in [Prototype Decisions](prototype_decisions.md).

### Reveal destinations

The system reveals a limited set of Available destinations. Available nodes and edges use the selected relationship’s visual language while Current remains unique.

### Move

The child taps one Available node. It becomes Current, the traversed edge joins path history, and the view recenters smoothly.

**Prototype 1 rule:** the relationship control resets after every move. This makes each move an intentional new choice and prevents unexpected candidate changes. The former Current becomes Visited and inactive. For a reciprocal relationship, it becomes Available again only if the child selects that relationship from the new Current node. See [Prototype Decisions](prototype_decisions.md) for the test that may overturn this default.

### Grow the region

Repeated moves form a spatially coherent cluster. The forest keeps the route and encountered nodes visible at an appropriate level of detail; it does not keep every node full-sized. Growth and simplification rules are defined in [Graph Interaction Model](graph_interaction_model.md).

## 3. Open another region

After meaningful local exploration, optional peripheral invitations appear. They may be words, pictures, animals, characters, places, objects, or feelings.

Choosing one opens a separate region. It does not create a false semantic edge to the previous Current node.

Story readiness is flexible:

- one region plus a character may support a very simple story;
- two regions are sufficient for Prototype 1;
- three regions can be a standard richer invitation;
- additional regions can support longer play.

The system may suggest another region, but never forces the child to leave the current one.

## 4. Choose story anchors

When enough material exists, “Start story” becomes available. The child chooses one or more anchor words, preferably across regions, and may add a character.

The child can review, remove, or replace anchors before confirming. Every confirmed anchor must be used meaningfully or clearly set up by the story.

## 5. Receive a story beat

Story View pulls back, darkens the forest, preserves the explored regions, and highlights anchors. The story advances one or two sentences at a time.

Meaningful words illuminate in synchronization with the sentence. Exact selection and placement rules are defined in [Story Generation Experience](story_generation_experience.md).

## 6. Direct or pause

After each beat, the child may:

- continue;
- choose a next action;
- add a character, animal, object, place, feeling, problem, or surprise;
- tap any lit explorable story word.

**Prototype 1 rule:** tapping a lit story word automatically pauses the story and enters exploration. An explicit Pause control also remains available.

## 7. Explore from a story word

The tapped word becomes Current in Adventure View. Story state remains preserved. The child explores through the same relationship loop and may create another path or region.

## 8. Resume the story

The child returns to Story View. New discoveries become eligible material, while established characters, events, goals, anchors, and tone remain continuous.

## Session ending

A session can end at a natural chapter pause. The child sees a concise record of:

- routes traveled;
- regions discovered;
- anchors used;
- story so far;
- an invitation to continue or begin another odyssey.

## Loop guardrails

- Do not require a tutorial before the first meaningful tap.
- Do not show every relationship or destination at once.
- Do not treat free exploration as a wrong answer.
- Do not force story mode at a fixed region count.
- Do not generate a complete story without child participation.
- Do not let animation obscure a state change.
- Do not let recommendations overpower the current action.
- Do not confuse narrative connections with language facts.

The concrete ten-minute realization of this loop is specified in [First Playable Experience](first_playable_experience.md).
