import { describe, expect, it } from 'vitest';
import { candidates, COORDS, DIRECTOR_OUTCOMES, edgeMatchesHistory, pauseState, recordTraversal, resumeState, storyBeat } from './state.js';

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

  it('grows a new curated layer after each first map choice', () => {
    const firstLayer = new Set(candidates('地图', 'related'));

    for (const destination of firstLayer) {
      const nextLayer = candidates(destination, 'related').filter(word => word !== '地图');
      expect(nextLayer.length, `${destination} should reveal more map words`).toBeGreaterThanOrEqual(3);
      expect(nextLayer.some(word => !firstLayer.has(word))).toBe(true);
    }
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
