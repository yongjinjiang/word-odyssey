# Word Odyssey: Node and Edge States

## Authority of this document

This document is the canonical glossary and state-transition reference. Other documents should link here instead of redefining states. Visual styling remains provisional; state meaning is authoritative.

## Independent node dimensions

A node can carry one status from each dimension. Separating dimensions prevents “bright,” “visited,” and “in the story” from becoming contradictory concepts.

## Prototype 1 learning-node content

An ordinary learning node represents a Simplified Chinese word or meaningful short phrase. Chinese characters are primary. Pinyin and a concise English gloss are support layers on the same node, not separate English nodes. Character/identity nodes remain a different node category.

## Discovery status

Discovery status persists within the journey.

### Unrevealed

The child has never been shown the node. It is hidden in ordinary play.

### Seen

The node has appeared as a possible destination or story word but has never been Current. When inactive, it remains fainter than Visited.

### Visited

The node has been Current at least once. It retains a durable discovered marker and may appear in path history and Map View.

## Interaction status

### Current

The single focus of Adventure View. Relationship choices originate here. Current is always also Visited.

### Available

A valid next semantic destination under the selected relationship. It is readable, tappable, and less dominant than Current. Its underlying discovery status remains known.

### Inactive

Visible but not eligible as the next semantic move. Its appearance reflects whether it is Seen or Visited.

### Recommended portal

An optional invitation to begin another region or add a story ingredient. It is not an ordinary semantic neighbor and does not create a Semantic edge when chosen.

## Narrative status

### Anchor

A child-confirmed word or character the story promises to use meaningfully.

### Active story word

A meaningful word or phrase lit in the current beat. It can be tapped to auto-pause and explore.

### Story-introduced

A node first revealed by the story. It begins Seen, not Visited, and initially has a Narrative connection rather than an assumed Semantic edge.

### Character or identity node

A child avatar, friend, pet, or fictional character. It may be an Anchor or story participant but is visually and conceptually distinct from vocabulary.

## Visual precedence

When dimensions overlap, the current task takes priority:

1. Current
2. Available or Active story word
3. Anchor
4. Visited inactive
5. Seen inactive
6. Unrevealed

Secondary status may remain visible through a ring, badge, shape, or subtle marker. For example, a Visited node that becomes Available looks Available while retaining a visited cue.

## Connection types

### Semantic

A Chinese-language fact such as 近义词 Similar, 反义词 Opposite, 相关词 Related, or 常用搭配 Common combinations. It may be reciprocal or directional. English gloss access is not a Semantic edge in Prototype 1.

### Traversed

A Semantic edge the child actually traveled. It records direction and sequence of travel even when the underlying relationship is reciprocal.

### Narrative

A connection created by story sequence or participation. It can join distant words, characters, and regions but never masquerades as a verified language fact.

### Region-origin

Optional provenance showing which portal opened a region. It is neither Semantic nor Narrative and may disappear after the region is established.

## Connection interaction states

- **Hidden:** unnecessary in the current view.
- **Inactive:** visible context but not an available move.
- **Available:** connects Current to an Available destination.
- **Traversing:** brief directional animation after a choice.
- **Traversed history:** durable record of an actual move.
- **Narrative active:** current story connection synchronized with word lighting.
- **Narrative history:** quieter connection from an earlier beat.

Relationship types use color plus at least one redundant cue such as line style, icon, direction, or short label.

## Path history

Path history records actions, not every displayed edge. A move preserves:

- origin and destination;
- chosen relationship;
- direction traveled;
- order in the journey;
- region;
- whether the move began during ordinary exploration or a story pause.

The visible route may simplify at distance, but it should remain reconstructable.

## Region states

- **Emerging:** a starting point and first few discoveries.
- **Established:** enough connected exploration to feel recognizable and supply story material.
- **Inactive region:** retained quietly while another area is active.
- **Story-active region:** contains an Anchor or word in the current beat.

A region is an emergent visual cluster, not necessarily a formal category the child must understand.

## Canonical transitions

### Reveal but do not choose

```text
Unrevealed → Seen + Available → Seen + Inactive
```

### Choose a destination

```text
Seen or Visited + Available → Visited + Current
Former Current → Visited + Inactive
Available edge → Traversing → Traversed history
Relationship control → reset
```

For reciprocal relationships, the former Current does not stay Available after reset. It becomes Available if the child selects the reciprocal relationship again.

### Introduce and explore a story word

```text
Unrevealed → Seen + Story-introduced + Active story word
Tap → auto-pause → Visited + Current
```

### Return through Map View

```text
Visited + Inactive → Visited + Current
```

This adds no Semantic or Traversed edge from the previously Current node. A Seen node can be previewed but not entered directly in Prototype 1.

## Prototype-dependent visual questions

Exact colors, shapes, animation timing, clustering marks, bilingual label expansion, and identity-node styling require visual prototypes and child testing. The decision register is [Prototype Decisions](prototype_decisions.md), and comprehension tests are in [Child Test Plan](child_test_plan.md).
