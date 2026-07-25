import { describe, expect, it } from 'vitest';
import { anchorChoices, candidates, COORDS, DIRECTOR_OUTCOMES, edgeMatchesHistory, pauseState, recordTraversal, resumeState, storyBeat, storyExploreWord, storyReady } from './state.js';

describe('prototype truth regressions', () => {
  it('supports the canonical semantic routes and no false portal edge', () => {
    expect(candidates('英勇', 'similar')).toContain('勇敢');
    expect(candidates('胆怯', 'related')).not.toContain('地图');
    expect(candidates('低语', 'similar')).toContain('耳语');
  });

  it('never strands the learner after selecting an available destination', () => {
    const routes = [
      ['勇敢', 'similar'],
      ['勇猛', 'opposite'],
      ['地图', 'related'],
      ['线索', 'collocation'],
      ['低语', 'similar'],
    ];

    for (const [from, relation] of routes) {
      for (const destination of candidates(from, relation)) {
        expect(
          Object.keys({ similar: 1, opposite: 1, related: 1, collocation: 1 })
            .some(nextRelation => candidates(destination, nextRelation).length > 0),
          `${from} → ${destination} should offer another relation`,
        ).toBe(true);
      }
    }
  });

  it('lets the learner continue from 无畏 through similar or opposite words', () => {
    expect(candidates('无畏', 'similar')).toContain('勇敢');
    expect(candidates('无畏', 'opposite')).toContain('胆怯');
  });

  it('rotates a truthful subset across playthroughs without losing reciprocal return', () => {
    const firstJourney = candidates('勇敢', 'similar', 0);
    const nextJourney = candidates('勇敢', 'similar', 1);

    expect(firstJourney).toHaveLength(3);
    expect(nextJourney).toHaveLength(3);
    expect(nextJourney).not.toEqual(firstJourney);
    expect(candidates('英勇', 'similar', 2, '勇敢')).toContain('勇敢');
  });

  it('gives illuminated story words several meaningful exploration consequences', () => {
    const storyWords = ['雾', '低语', '石桥', '耳语', '罗盘', '信', '脚印'];

    for (const word of storyWords) {
      const routes = ['similar', 'opposite', 'related', 'collocation']
        .flatMap(relation => candidates(word, relation, 0));
      expect(new Set(routes).size, `${word} should branch meaningfully`).toBeGreaterThanOrEqual(3);
    }

    expect(candidates('石桥', 'related')).toEqual(expect.arrayContaining(['河流', '道路']));
    expect(candidates('罗盘', 'related')).toEqual(expect.arrayContaining(['方向', '北方']));
    expect(candidates('脚印', 'related')).toEqual(expect.arrayContaining(['动物', '线索']));
  });

  it('feeds newly explored story words into a bounded, varied anchor deal', () => {
    const visited = ['勇敢', '英勇', '地图', '线索', '低语', '耳语', '石桥', '迷路', '消息'];
    const storyDiscoveries = ['低语', '耳语', '石桥', '迷路', '消息'];
    const first = anchorChoices(visited, 0, ['勇敢', '低语'], storyDiscoveries);
    const next = anchorChoices(visited, 1, ['勇敢', '低语'], storyDiscoveries);

    expect(first.courage).toContain('勇敢');
    expect(first.story).toContain('低语');
    expect(first.story.every(word => ['低语', '耳语', '石桥', '迷路', '消息'].includes(word))).toBe(true);
    expect(first.story.length).toBeGreaterThanOrEqual(3);
    expect(first.story.length).toBeLessThanOrEqual(4);
    expect(next.story).not.toEqual(first.story);
  });

  it('keeps words revealed from a story exploration together even across semantic regions', () => {
    const discovered = ['勇敢', '地图', '线索', '雾', '迷路', '山谷', '方向'];
    const choices = anchorChoices(discovered, 0, [], ['雾', '迷路', '山谷', '方向']);

    expect(choices.story).toEqual(expect.arrayContaining(['雾', '迷路', '山谷', '方向']));
    expect(choices.map).not.toContain('山谷');
    expect(choices.map).not.toContain('方向');
  });

  it('starts header exploration from a meaningful word in the current story beat', () => {
    expect(storyExploreWord({
      beat: 0,
      anchors: ['勇敢', '线索'],
      avatar: '凯',
      ingredient: '发光的罗盘',
      variation: 0,
    })).toBe('雾');
    expect(storyExploreWord({
      beat: 1,
      anchors: ['勇敢', '线索'],
      avatar: '凯',
      ingredient: '发光的罗盘',
      variation: 0,
    })).toBe('低语');
  });

  it('grows a new curated layer after each first map choice', () => {
    const firstLayer = new Set(candidates('地图', 'related'));

    for (const destination of firstLayer) {
      const nextLayer = candidates(destination, 'related').filter(word => word !== '地图');
      expect(nextLayer.length, `${destination} should reveal more map words`).toBeGreaterThanOrEqual(3);
      expect(nextLayer.some(word => !firstLayer.has(word))).toBe(true);
    }
  });

  it('unlocks story building after exploring any word in the second island', () => {
    expect(storyReady(['勇敢', '地图'], true)).toBe(false);
    expect(storyReady(['勇敢', '地图', '路线'], true)).toBe(true);
    expect(storyReady(['勇敢', '地图', '线索'], true)).toBe(true);
    expect(storyReady(['勇敢', '地图', '路线'], false)).toBe(false);
  });

  it('uses selected anchors and avatar in deterministic story content', () => {
    const beat = storyBeat({ beat:0, anchors:['英勇','线索'], avatar:'岚' });
    expect(beat.zh).toContain('岚');
    expect(beat.zh).toContain('线索');
    expect(beat.words).toContain('线索');
  });

  it('pause and resume preserve an exact beat unless a story-word transition advances it', () => {
    expect(resumeState(pauseState(1))).toEqual({ paused:false, beat:1 });
    expect(resumeState(pauseState(1, 2))).toEqual({ paused:false, beat:2 });
  });

  it('gives every enabled director branch a distinct outcome', () => {
    expect(Object.keys(DIRECTOR_OUTCOMES)).toHaveLength(3);
    expect(new Set(Object.values(DIRECTOR_OUTCOMES)).size).toBe(3);
  });

  it('keeps stable coordinates across moves', () => {
    const before = COORDS.勇敢;
    recordTraversal([], '勇敢', '英勇', 'similar');
    expect(COORDS.勇敢).toBe(before);
    expect(Object.isFrozen(COORDS)).toBe(true);
  });

  it('renders traversed edges from recorded path truth', () => {
    const history = recordTraversal([], '勇敢', '英勇', 'similar');
    expect(edgeMatchesHistory({from:'勇敢',to:'英勇',relation:'similar'}, history)).toBe(true);
    expect(edgeMatchesHistory({from:'胆怯',to:'地图',relation:'related'}, history)).toBe(false);
  });
});
