export const WORDS = {
  勇敢: ['yǒng gǎn', 'brave'], 英勇: ['yīng yǒng', 'heroic'], 勇猛: ['yǒng měng', 'brave / fierce'], 无畏: ['wú wèi', 'fearless'], 大胆: ['dà dǎn', 'bold'],
  胆怯: ['dǎn qiè', 'timid'], 怯懦: ['qiè nuò', 'cowardly'], 胆小: ['dǎn xiǎo', 'timid'], 地图: ['dì tú', 'map'], 路线: ['lù xiàn', 'route'],
  方向: ['fāng xiàng', 'direction'], 地点: ['dì diǎn', 'location'], 线索: ['xiàn suǒ', 'clue'], 寻找线索: ['xún zhǎo xiàn suǒ', 'search for clues'],
  发现线索: ['fā xiàn xiàn suǒ', 'discover a clue'], 重要线索: ['zhòng yào xiàn suǒ', 'important clue'], 神秘线索: ['shén mì xiàn suǒ', 'mysterious clue'],
  雾: ['wù', 'fog'], 低语: ['dī yǔ', 'whisper softly'], 石桥: ['shí qiáo', 'stone bridge'], 耳语: ['ěr yǔ', 'whisper'], 小声说: ['xiǎo shēng shuō', 'speak quietly'],
  轻声说: ['qīng shēng shuō', 'speak softly'], 悄悄说: ['qiāo qiāo shuō', 'say quietly'], 罗盘: ['luó pán', 'compass'], 信: ['xìn', 'letter'], 脚印: ['jiǎo yìn', 'footprints']
};

export const RELATIONS = {
  similar: ['近义词', 'Similar'], opposite: ['反义词', 'Opposite'], related: ['相关词', 'Related'], collocation: ['常用搭配', 'Common']
};

export const COORDS = Object.freeze({
  勇敢:{x:28,y:39,region:'courage'}, 英勇:{x:15,y:24,region:'courage'}, 勇猛:{x:36,y:18,region:'courage'}, 胆怯:{x:14,y:57,region:'courage'}, 无畏:{x:37,y:59,region:'courage'}, 大胆:{x:45,y:35,region:'courage'}, 怯懦:{x:25,y:68,region:'courage'}, 胆小:{x:7,y:42,region:'courage'},
  地图:{x:67,y:39,region:'map'}, 路线:{x:80,y:61,region:'map'}, 方向:{x:77,y:19,region:'map'}, 地点:{x:91,y:25,region:'map'}, 线索:{x:80,y:37,region:'map'}, 寻找线索:{x:66,y:62,region:'map'}, 发现线索:{x:74,y:72,region:'map'}, 重要线索:{x:90,y:67,region:'map'}, 神秘线索:{x:91,y:48,region:'map'},
  雾:{x:43,y:36,region:'story'}, 低语:{x:51,y:25,region:'story'}, 石桥:{x:58,y:43,region:'story'}, 耳语:{x:55,y:61,region:'story'}, 罗盘:{x:69,y:58,region:'story'}, 信:{x:63,y:25,region:'story'}, 脚印:{x:72,y:29,region:'story'}, 小声说:{x:43,y:67,region:'story'}, 轻声说:{x:62,y:71,region:'story'}, 悄悄说:{x:49,y:75,region:'story'}
});

export const candidates = (current, relation) => {
  if (relation === 'similar' && ['勇敢', '英勇', '勇猛'].includes(current)) return ['勇敢', '英勇', '勇猛', '无畏', '大胆'].filter(x => x !== current);
  if (relation === 'opposite' && current === '勇猛') return ['胆怯', '怯懦', '胆小'];
  if (relation === 'related' && current === '地图') return ['路线', '方向', '地点', '线索'];
  if (relation === 'collocation' && current === '线索') return ['寻找线索', '发现线索', '重要线索', '神秘线索'];
  if (relation === 'similar' && current === '低语') return ['耳语', '小声说', '轻声说', '悄悄说'];
  return [];
};

export const recordTraversal = (history, from, to, relation, origin='explore') =>
  [...history, { from, to, relation, origin, order: history.length + 1 }];

export const edgeMatchesHistory = (edge, history) => history.some(h => h.from === edge.from && h.to === edge.to && h.relation === edge.relation);

export const storyBeat = ({ beat, anchors, avatar, ingredient='发光的罗盘' }) => {
  const [first='勇敢', second='神秘线索'] = anchors;
  const object = ingredient === '藏起来的信' ? '信' : ingredient === '蓝色脚印' ? '脚印' : '罗盘';
  const objectLine = ingredient === '藏起来的信' ? `树根旁藏着一封旧信，地图上的路线也变了。` : ingredient === '蓝色脚印' ? `石桥旁突然出现蓝色脚印，地图上的路线也变了。` : `树根旁的罗盘突然发出蓝光，地图上的路线也变了。`;
  const beats = [
    { zh:`${avatar}拿着旧地图，走进了雾中的森林。地图背面写着“${second}”。`, en:`${avatar} carried an old map into the foggy forest. “${WORDS[second]?.[1] || second}” was written on the back.`, words:[...new Set(['地图',second,'雾'])] },
    { zh:`${avatar}想起了“${first}”这个词。线索上写着：“找到会低语的石桥。”`, en:`${avatar} remembered the word “${WORDS[first]?.[1] || first}.” The clue read: “Find the stone bridge that whispers.”`, words:[first,'低语','石桥'] },
    { zh:`${avatar}走到石桥边，听见有人在耳语：“别踩左边那块松动的石头。”`, en:`${avatar} reached the bridge and heard someone whisper: “Don’t step on the loose stone on the left.”`, words:['石桥','耳语'] },
    { zh:objectLine, en:'The new surprise changed the route on the map.', words:[object,'路线','地图'] }
  ];
  return beats[beat] || beats[0];
};

export const pauseState = (beat, targetBeat=beat) => ({ paused:true, pausedBeat:beat, resumeBeat:targetBeat });
export const resumeState = pause => ({ paused:false, beat:pause.resumeBeat });

export const DIRECTOR_OUTCOMES = Object.freeze({
  跟着蓝光:'凯决定跟着蓝光，走向森林更深处。',
  检查地图:'凯停下来检查地图，发现路线在缓慢移动。',
  寻找说话的人:'凯决定寻找说话的人，声音从石桥下传来。'
});
