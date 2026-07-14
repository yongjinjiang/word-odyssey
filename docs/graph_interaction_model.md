# Word Odyssey: Graph Interaction Model

## Authority of this document

This document is authoritative for views, spatial behavior, navigation, progressive revelation, and visual simplification. Formal node and edge meanings belong to [Node and Edge States](node_and_edge_states.md). Prototype choices and their validation tests belong to [Prototype Decisions](prototype_decisions.md).

## The child’s mental model

- A Chinese word or short phrase is a place.
- The large bright word is where I am.
- A relationship is a kind of path I can reveal.
- Bright nearby words are places I can go now.
- Dim words are places I have seen or visited but cannot reach through the current action.
- My journey stays on the map.
- I can pull back to see my forest and move closer to continue.

The interface teaches this through use, not graph vocabulary.

## Bilingual presentation hierarchy

Simplified Chinese remains the visual identity of every ordinary learning node in Prototype 1. A node may reveal:

1. Chinese characters, always primary;
2. pinyin, available by default in local exploration but visually secondary;
3. one concise English gloss, shown on demand or when the term is first introduced.

English support does not become a separate graph node in Prototype 1. This keeps the child navigating Chinese relationships rather than switching into an English vocabulary forest. Whether later versions should support true cross-language translation nodes is unresolved in [Prototype Decisions](prototype_decisions.md).

## Adventure View

Adventure View is authoritative for the next local decision. It shows:

- one Current word;
- three to six Available words after a relationship is selected;
- nearby Visited and Seen history at reduced emphasis;
- compact relationship controls;
- optional new-region invitations at the periphery;
- controls for zoom and Map View.

Current and Available nodes remain readable and comfortably tappable regardless of forest size.

## Relationship selection and focus movement

Selecting a relationship filters paths from Current but does not move the child. Selecting an Available destination moves focus.

Prototype 1 resets the relationship after every move. The traversed edge receives a brief directional emphasis, then becomes path history. The former Current becomes Visited and inactive, even for a reciprocal relationship. If the child chooses the reciprocal relationship again, the former node can reappear as Available.

This rule and its validation evidence are maintained in [Prototype Decisions](prototype_decisions.md), rather than duplicated here.

## Progressive revelation

Adventure View includes only material relevant to the journey:

- Current;
- Available destinations;
- nearby Visited nodes;
- nearby Seen-but-unvisited nodes;
- story words already introduced;
- minimal context needed to understand the local area.

Unrevealed vocabulary remains hidden. New nodes feel discovered; old nodes feel recognized when they reactivate.

## Spatial organization

### Local coherence

Nodes revealed through direct relationships appear close enough to form a readable neighborhood. Repeated exploration creates a recognizable region.

### Stability

Previously placed nodes should not jump arbitrarily. Minor reflow may prevent overlap, but the child should recognize places already encountered.

### Separate regions

A new-region invitation opens far enough away to feel like another expedition. It does not receive a semantic edge from the prior region unless a real semantic relationship is later revealed.

### New story words

Prototype 1 uses this placement order:

1. If a clear semantic home already exists in an explored region, place the new story word near that region.
2. Otherwise place it along the narrative bridge between regions active in the current beat.
3. If neither applies, place it just beyond the active region as a new point of mystery.

Its first connection is Narrative, not Semantic. Its location remains stable after the beat so the child can return to it.

## What remains visible as the forest grows

Prototype 1 uses an attention hierarchy rather than shrinking every node equally.

### In Adventure View

- Current and Available: full labels, full tap targets.
- Immediate Visited neighbors and the recent path: readable labels.
- Nearby Seen nodes: dim labels or compact marks.
- Older or distant history: simplified dots or small clusters.
- Unrevealed nodes: hidden.

### In Map View

- regions and actual traversed path spines remain visible;
- Current, anchors, selected node, and region entry points retain labels;
- most individual Seen nodes become unlabeled marks;
- dense distant history becomes a cluster with a count or simple visual mass;
- ordinary inactive semantic edges are hidden;
- Narrative and Traversed histories remain visually distinct.

### In Story View

- anchors, the active story words, active regions, and current Narrative route dominate;
- prior story routes and explored regions remain quiet context;
- unrelated local candidates and ordinary semantic edges disappear;
- new story words appear without causing the entire map to re-layout.

These defaults should be overturned if children lose track of a word they just saw, cannot find the active story stars, or interpret clusters as tappable vocabulary.

## Zoom and pan

- Zoom in supports local exploration.
- Zoom out reveals routes and regions.
- Pan allows inspection without changing Current.
- An explicit Map button prevents gesture knowledge from being required.

Detail changes with scale. Current, anchors, and active story words remain identifiable at every supported scale.

At reduced scale, English glosses disappear before pinyin, and pinyin disappears before Chinese characters. Current and Available retain enough support to remain understandable.

## Map View

Map View is for orientation, reflection, and returning to known places. In Prototype 1, “whole forest” means the forest revealed in the current session, not the entire language graph.

Prototype 1 navigation rules:

- A Visited node may be tapped to return directly and become Current.
- A Seen-but-unvisited node may be selected for a brief preview, but cannot become Current directly.
- The preview may show where it was encountered and offer a route back to the relevant Visited node.
- Returning to a Visited node does not fabricate a semantic edge from the previous Current node.

This preserves the meaning of “visited.” The child test should overturn it if children repeatedly tap Seen nodes expecting entry and become frustrated, or if the restriction discourages curiosity without improving route comprehension.

## New-region invitations

Peripheral recommendations are portals, not neighbors. They may use a card, picture, or character portrait rather than an ordinary vocabulary-node treatment. Their purpose is to add variety and personal meaning, not to imply a language relationship.

## Accessibility

Color never carries meaning alone. Important distinctions combine a small set of cues:

- brightness and contrast;
- size;
- outline or glow;
- line style;
- icon or short label;
- restrained motion;
- optional audio.

## Interaction invariants

1. Exactly one node is Current during local exploration.
2. Only Available nodes can be chosen as the next semantic move.
3. Selecting a relationship does not itself move focus.
4. Selecting an Available node records a traversal.
5. Revealed nodes do not silently become Unrevealed.
6. Visited and Seen remain distinguishable.
7. Region portals do not create false semantic edges.
8. Narrative, Semantic, and Traversed connections remain distinct.
9. Current and Available remain readable in interactive views.
10. Every transition makes the new Current obvious.

The exact screen realization is illustrated in [First Playable Experience](first_playable_experience.md).
