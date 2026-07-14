# Word Odyssey: First Playable Experience

## Authority of this document

This is the canonical concrete scenario for Prototype 1. It translates the product rules into one complete ten-minute experience. It is a testable reference, not a permanent content script.

## Primary learner persona

The project owner has decided the initial test audience:

- **Persona:** Jordan, a fictional 12-year-old learner
- **Stronger language:** English, approximately U.S. Grade 7 reading level
- **Target language:** Chinese, approximately Chinese elementary-school Grade 3 proficiency
- **Language direction:** English-supported learning of Chinese
- **Writing system:** Simplified Chinese
- **Device:** iPad in landscape orientation only
- **Play context:** individual 10–15 minute session with an adult observer nearby but not teaching
- **Interests assumed for this scenario:** mystery, exploration, meaningful choices, and restrained humor

The exact interest profile varies by learner. The experience should respect a 12-year-old’s maturity even while keeping the Chinese linguistically accessible.

## Bilingual presentation convention

Chinese words and meaningful short phrases are the explorable nodes.

```text
勇敢
yǒng gǎn
brave
```

- Chinese characters are always primary.
- Pinyin is a smaller secondary line in Adventure View.
- A concise English gloss appears on first introduction or on tap.
- Story sentences appear in Chinese first.
- An **English help** control can reveal a sentence translation on demand.
- English glosses are not separate graph nodes in Prototype 1.

## View vocabulary

### Adventure View

The local exploration view. One Chinese term is Current; a relationship reveals Available Chinese destinations.

```text
┌────────────────────────────────────────────────────┐
│  地图 Map                                新区域 ✦ │
│                                                    │
│         seen        [ 勇敢 ]        visited       │
│                     yǒng gǎn                       │
│                       brave                        │
│                                                    │
│  近义词       反义词       相关词       常用搭配  │
│  Similar      Opposite     Related      Common     │
└────────────────────────────────────────────────────┘
```

### Map View

The revealed session forest. Visited nodes can be returned to; Seen nodes can be previewed but not entered directly.

```text
┌────────────────────────────────────────────────────┐
│  返回探索 Back                                     │
│                                                    │
│   [勇敢区域]  · · · · · · ·    [地图区域]         │
│   勇敢—英勇—勇猛—胆怯          地图—线索—神秘线索 │
│                                                    │
│                 开始故事 Start Story ✦            │
└────────────────────────────────────────────────────┘
```

### Story View

The wide, darkened forest. Chinese anchors and meaningful story words light like stars.

```text
┌────────────────────────────────────────────────────┐
│      ✦ 勇敢                    ✦ 神秘线索          │
│                 ··· ✦ 低语 ···                    │
│                                                    │
│  线索上写着：“找到会低语的石桥。”                │
│  [English help]                                    │
│                                                    │
│  暂停 Pause   继续 Continue   加入意外 Add surprise│
└────────────────────────────────────────────────────┘
```

## Ten-minute play session

### 0:00–0:30 — Choose a Chinese starting word and world

The opening presents five illustrated Chinese words:

```text
勇敢        地图        闪电        秘密        迷路
yǒnggǎn    dìtú        shǎndiàn    mìmì        mílù
brave       map         lightning   secret      get lost
```

Three age-appropriate story worlds appear:

```text
雾林谜踪             太空失联             校园密室
Fog Forest Mystery   Lost in Space         Locked-Room at School
```

Jordan taps **勇敢** and **雾林谜踪**.

**Visual response:** 勇敢 grows into a glowing Chinese node. Its English gloss fades to a support layer rather than remaining equally prominent.

**Intended response:** curiosity and ownership, without the screen feeling like a vocabulary test or a young child’s game.

**Hypothesis:** selection should take under 30 seconds. Asking “Which answer is correct?” indicates evaluative framing.

### 0:30–1:20 — First relationship choice

Adventure View shows **勇敢** as Current. Jordan taps:

```text
近义词
Similar meaning
```

Four Chinese destinations light:

```text
英勇        勇猛        无畏        大胆
yīngyǒng   yǒngměng    wúwèi      dàdǎn
heroic      brave/fierce fearless   bold
```

Jordan taps **英勇**.

**Visual response:** the 近义词 path grows toward 英勇. 英勇 becomes Current. 勇敢 becomes Visited, the 勇敢→英勇 route settles into Traversed history, and the relationship resets.

**Language note:** the set contains near-synonyms with different usage, not claims of perfect interchangeability. Short example support may clarify distinctions on tap.

**Intended response:** “I chose a kind of Chinese relationship and traveled through it.”

### 1:20–2:10 — Reciprocal relationship without automatic persistence

With **英勇** Current, Jordan selects **近义词** again. **勇敢** becomes Available again alongside **勇猛**, **无畏**, and **大胆**. Jordan chooses **勇猛**.

**Visual response:** 勇敢 is Available only because the reciprocal relation was reselected. After the move it returns to Visited inactive. The path reads:

```text
勇敢 → 英勇 → 勇猛
```

**Intended response:** recognition of a reversible relationship without forcing a grammar explanation.

### 2:10–2:50 — Change relationship type

With **勇猛** Current, Jordan selects:

```text
反义词
Opposite meaning
```

Three accessible contrasts appear:

```text
胆怯        怯懦        胆小
dǎnqiè     qiènuò      dǎnxiǎo
timid       cowardly     timid/cowardly
```

Jordan chooses **胆怯**.

**Visual response:** 反义词 uses a distinct line style and color. The earlier 近义词 paths remain quiet Traversed history.

**Intended response:** discovery that a new relationship reveals a different Chinese neighborhood.

### 2:50–3:20 — Brief Map View comprehension check

Jordan opens Map View. The first region shows 勇敢, 英勇, 勇猛, and 胆怯 with labels. Previously shown but unchosen **无畏** appears as a dim Seen node.

Jordan taps 无畏. A preview shows:

```text
无畏  wúwèi  fearless
你在“大胆”的近义词中见过它。
You saw it among words similar to 英勇.
```

It does not become Current. Jordan taps the Visited node 胆怯 and returns to Adventure View.

**Intended response:** “This is the Chinese territory I uncovered.”

**Recovery evidence:** repeated attempts to enter 无畏 directly would challenge the preview-only Seen rule.

### 3:20–4:00 — Open a second region

Three visually mature portals appear at the edge:

```text
🗺 地图 map      🧭 罗盘 compass      🔐 密码 code
```

Jordan chooses **地图**.

**Visual response:** the camera glides across a dark gap to a new 地图 node. No Semantic edge connects 胆怯 to 地图. The earlier region remains faintly visible.

**Intended response:** the scale of the world expands; this is another expedition, not a random answer.

### 4:00–4:50 — Explore the map region

With **地图** Current, Jordan selects **相关词 Related**:

```text
路线        方向        地点        线索
lùxiàn     fāngxiàng   dìdiǎn      xiànsuǒ
route       direction   location     clue
```

Jordan chooses **线索**. After reset, Jordan selects **常用搭配 Common combinations**:

```text
寻找线索          发现线索          重要线索          神秘线索
search for clues  discover a clue  important clue    mysterious clue
```

Jordan chooses **神秘线索**.

**Visual response:** 地图 → 线索 → 神秘线索 forms a second region. The short phrase remains one meaningful node rather than being split mechanically.

**Intended response:** the Chinese vocabulary already feels useful for a mystery.

### 4:50–5:30 — Choose anchors and a character

“开始故事 Start Story” begins to glow. Map View asks:

```text
选择两个故事星词
Choose two story stars
```

Jordan selects **勇敢** and **神秘线索**. A preset character tray offers age-neutral explorer avatars. Jordan chooses **凯 Kai**, a fictional nickname/avatar. Prototype 1 does not request a real name or personal photo.

Confirmation shows:

```text
勇敢 + 神秘线索 + 凯
开始故事 Start Story
```

**Visual response:** the two anchors receive persistent star rings.

**Intended response:** authorship—these Chinese choices will matter.

**Timing hypothesis:** first story begins around five minutes. Earlier boredom suggests reducing exploration; a story that feels unearned suggests adding one meaningful move.

### 5:30–6:20 — The first two short beats light the forest

The forest darkens. Chinese appears first:

> 凯拿着旧地图，走进了雾中的森林。地图背面藏着一条神秘线索。

Optional support:

```text
Kǎi názhe jiù dìtú, zǒujìnle wùzhōng de sēnlín. Dìtú bèimiàn cángzhe yì tiáo shénmì xiànsuǒ.
Kai carried an old map into the foggy forest. A mysterious clue was hidden on the back of the map.
```

地图 reactivates as a previously explored word. 神秘线索 pulses as an anchor. **雾** appears as one new Story-introduced word near the forest setting.

After a short Continue opportunity, the next beat appears:

> 他告诉自己要勇敢。线索上写着：“找到会低语的石桥。”

勇敢 pulses as an anchor. **低语** and **石桥** appear as new explorable nodes along the Narrative bridge between the two regions.

**Visual response:** stars illuminate in sentence order. Narrative lines look different from 近义词 and 反义词 paths.

**Intended response:** recognition and intrigue—the learner’s Chinese regions are becoming one mystery.

**Quantity hypothesis:** no more than four language nodes are lit at once and no more than two are new in one beat segment.

### 6:20–7:20 — Tap a Chinese story word to auto-pause

Jordan taps glowing **低语** without pressing Pause first.

Narration stops immediately. Adventure View centers on:

```text
低语
dī yǔ
whisper / speak in a low voice
```

A visible “故事已暂停 Story paused” marker and **继续故事 Resume** control remain.

Jordan chooses **近义词 Similar**:

```text
耳语        小声说        轻声说        悄悄说
ěryǔ       xiǎoshēng shuō qīngshēng shuō qiāoqiāo shuō
whisper     speak quietly   speak softly   say secretly/quietly
```

Jordan selects **耳语**. The Semantic Traversed edge 低语 → 耳语 remains distinct from the Narrative edge that first introduced 低语.

**Intended response:** immediate reward for curiosity and a meaningful Chinese distinction.

### 7:20–8:00 — Resume with the new word in context

Jordan taps **继续故事 Resume**. The story returns to the same moment and reuses the explored word:

> 凯走到石桥边，听见有人在耳语：“别踩左边那块松动的石头。”

Optional English help:

> Kai reached the stone bridge and heard someone whisper, “Don’t step on the loose stone on the left.”

耳语 reactivates. **松动** may receive a tappable gloss but is not lit in this beat, keeping the visual focus controlled.

**Intended response:** payoff—the word just explored now helps the learner understand the story.

### 8:00–8:40 — Direct a more mature story surprise

The director’s toolbox offers:

```text
加入人物 Add character
加入意外 Add surprise
决定下一步 Choose the next move
```

Jordan chooses **加入意外** and selects:

```text
发光的罗盘
fāguāng de luópán
a glowing compass
```

**Visual response:** 罗盘 enters as an object/story ingredient, not a childlike mascot.

**Intended response:** strategic control and anticipation.

### 8:40–9:30 — Story beat 2 reflects the choice

The next beat appears:

> 树根旁的罗盘突然发出蓝光，地图上的路线也变了。

**罗盘** is the one new explorable word. **路线**, previously Seen in the map region, reactivates in its stable location.

The story asks:

```text
凯下一步应该做什么？
What should Kai do next?

跟着蓝光       检查地图       寻找说话的人
Follow the light Check the map   Find the speaker
```

**Intended response:** the learner sees that their directed choice changed both the story and the Chinese forest.

### 9:30–10:00 — Chapter pause

Jordan selects **寻找说话的人**. The choice is saved as the next direction. The experience offers:

```text
继续故事       查看地图       暂时结束
Continue        View map        Finish for now
```

If Jordan finishes, the map highlights:

- the 勇敢 and 地图 regions;
- 勇敢 and 神秘线索 anchors;
- the Narrative route through 雾, 低语, and 石桥;
- the Semantic route 低语 → 耳语;
- the chosen next direction.

**Intended response:** completion without finality—this Chinese adventure is waiting.

## Timing and quantity hypotheses

| Element | Prototype 1 hypothesis |
|---|---|
| Chinese starting words | 4–6 |
| Story themes | 3, written for 12-year-old interests |
| Available destinations | Usually 3–6, maximum 8 |
| English gloss | First introduction or on demand |
| Pinyin | Secondary in Adventure View; reduced in Map/Story View |
| Time to first semantic move | Under 60 seconds |
| Moves in first region | 3–4 |
| Moves in second region | 2–3 |
| Time to first story | 4–6 minutes |
| Story readiness | 2 regions + 2 anchors |
| Beat length | 1–2 short Chinese sentences or one short quotation |
| New explorable Chinese words per beat | 1–2 |
| Lit language nodes at once | Maximum 4 |
| Direction opportunities | At least once every 1–2 beats |

## Failure cases and graceful recovery

| Failure | Graceful recovery | What to observe |
|---|---|---|
| Learner reads only English glosses | Fade gloss after first reveal; keep a quick English-help action | Whether Chinese characters regain attention or comprehension collapses |
| Learner reads only pinyin | Reduce pinyin in Visited nodes and story text; restore instantly on request | Whether this supports character recognition or creates frustration |
| Chinese relationship label is unclear | Keep Chinese primary with a small English subtitle and one example | Whether the problem is terminology or relationship logic |
| Near-synonym membership feels wrong | Offer a short contrast example and record the disputed pair | Whether content curation, not interaction, caused the issue |
| Learner taps a dim node | Respond softly and point toward its preview or valid route | Whether inactive is understood rather than perceived as broken |
| Learner expects relationship persistence | Keep the last icon faintly remembered and make reselection one tap | Frequency and annoyance |
| Learner tries to enter Seen from Map | Show preview and route back; never ignore the tap | Whether preview satisfies curiosity |
| Learner ignores second-region portals | Continue exploration; re-offer with a clearer “new location” treatment | Whether concept or presentation is the problem |
| Learner cannot choose anchors | Suggest two recent-interest words but require confirmation | Whether suggestion supports or steals ownership |
| Chinese story is too difficult | Reveal pinyin, then a concise English translation, without replacing the Chinese sentence | Which scaffold restores comprehension |
| Chinese story feels too young | Offer a more complex mystery choice without increasing language difficulty | Whether thematic maturity can be separated from linguistic level |
| Story generation takes time | Keep anchors pulsing and show “故事正在连接词语…” / “The story is connecting your words…” | Whether waiting remains connected to action |
| Auto-pause surprises the learner | Show “故事已暂停—探索这个词” and persistent Resume | Whether accidental taps exceed intentional taps |
| Learner selects unsafe content | Offer safe alternatives preserving the intended mystery or excitement | Whether redirection feels respectful |
| Learner stops early | Offer Finish for now and show the Chinese map created so far | Whether even a short session feels owned |

## What this experience must prove

The first playable succeeds only if the learner understands and enjoys the full cycle while attending primarily to Chinese: semantic choice, visible travel, multiple regions, anchor ownership, Chinese story illumination, direct story-word exploration, continuity on resume, and deliberate story direction.

The observational protocol is defined in [Child Test Plan](child_test_plan.md).
