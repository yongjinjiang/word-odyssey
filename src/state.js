export const WORDS = {
  勇敢: ['yǒng gǎn', 'brave'], 英勇: ['yīng yǒng', 'heroic'], 勇猛: ['yǒng měng', 'brave / fierce'], 无畏: ['wú wèi', 'fearless'], 大胆: ['dà dǎn', 'bold'],
  胆怯: ['dǎn qiè', 'timid'], 怯懦: ['qiè nuò', 'cowardly'], 胆小: ['dǎn xiǎo', 'timid'], 地图: ['dì tú', 'map'], 路线: ['lù xiàn', 'route'],
  方向: ['fāng xiàng', 'direction'], 地点: ['dì diǎn', 'location'], 线索: ['xiàn suǒ', 'clue'], 路径: ['lù jìng', 'path'], 道路: ['dào lù', 'road'], 旅程: ['lǚ chéng', 'journey'],
  北方: ['běi fāng', 'north'], 前方: ['qián fāng', 'ahead'], 出口: ['chū kǒu', 'exit'], 山谷: ['shān gǔ', 'valley'], 河流: ['hé liú', 'river'], 营地: ['yíng dì', 'camp'],
  证据: ['zhèng jù', 'evidence'], 谜题: ['mí tí', 'puzzle'], 秘密: ['mì mì', 'secret'], 寻找线索: ['xún zhǎo xiàn suǒ', 'search for clues'],
  发现线索: ['fā xiàn xiàn suǒ', 'discover a clue'], 重要线索: ['zhòng yào xiàn suǒ', 'important clue'], 神秘线索: ['shén mì xiàn suǒ', 'mysterious clue'],
  雾: ['wù', 'fog'], 低语: ['dī yǔ', 'whisper softly'], 石桥: ['shí qiáo', 'stone bridge'], 耳语: ['ěr yǔ', 'whisper'], 小声说: ['xiǎo shēng shuō', 'speak quietly'],
  轻声说: ['qīng shēng shuō', 'speak softly'], 悄悄说: ['qiāo qiāo shuō', 'say quietly'], 罗盘: ['luó pán', 'compass'], 信: ['xìn', 'letter'], 脚印: ['jiǎo yìn', 'footprints']
};

export const RELATIONS = {
  similar: ['近义词', 'Similar'], opposite: ['反义词', 'Opposite'], related: ['相关词', 'Related'], collocation: ['常用搭配', 'Common']
};

const COURAGE_WORDS = ['勇敢', '英勇', '勇猛', '无畏', '大胆'];
const TIMID_WORDS = ['胆怯', '怯懦', '胆小'];
const MAP_RELATED = Object.freeze({
  地图: ['路线', '方向', '地点', '线索'],
  路线: ['地图', '路径', '道路', '旅程'],
  路径: ['路线', '道路', '旅程'], 道路: ['路线', '路径', '旅程'], 旅程: ['路线', '路径', '道路'],
  方向: ['地图', '北方', '前方', '出口'],
  北方: ['方向', '前方', '出口'], 前方: ['方向', '北方', '出口'], 出口: ['方向', '北方', '前方'],
  地点: ['地图', '山谷', '河流', '营地'],
  山谷: ['地点', '河流', '营地'], 河流: ['地点', '山谷', '营地'], 营地: ['地点', '山谷', '河流'],
  线索: ['地图', '证据', '谜题', '秘密'],
  证据: ['线索', '谜题', '秘密'], 谜题: ['线索', '证据', '秘密'], 秘密: ['线索', '证据', '谜题'],
});
const CLUE_PHRASES = ['寻找线索', '发现线索', '重要线索', '神秘线索'];
const WHISPER_WORDS = ['低语', '耳语', '小声说', '轻声说', '悄悄说'];

export const COORDS = Object.freeze({
  勇敢:{x:28,y:39,region:'courage'}, 英勇:{x:15,y:24,region:'courage'}, 勇猛:{x:36,y:18,region:'courage'}, 胆怯:{x:14,y:57,region:'courage'}, 无畏:{x:37,y:59,region:'courage'}, 大胆:{x:45,y:35,region:'courage'}, 怯懦:{x:25,y:68,region:'courage'}, 胆小:{x:7,y:42,region:'courage'},
  地图:{x:67,y:39,region:'map'}, 路线:{x:80,y:61,region:'map'}, 方向:{x:77,y:19,region:'map'}, 地点:{x:91,y:25,region:'map'}, 线索:{x:80,y:37,region:'map'},
  路径:{x:68,y:78,region:'map'}, 道路:{x:82,y:82,region:'map'}, 旅程:{x:95,y:79,region:'map'}, 北方:{x:66,y:8,region:'map'}, 前方:{x:80,y:7,region:'map'}, 出口:{x:94,y:10,region:'map'},
  山谷:{x:96,y:34,region:'map'}, 河流:{x:97,y:51,region:'map'}, 营地:{x:97,y:66,region:'map'}, 证据:{x:70,y:50,region:'map'}, 谜题:{x:84,y:52,region:'map'}, 秘密:{x:88,y:72,region:'map'},
  寻找线索:{x:66,y:62,region:'map'}, 发现线索:{x:74,y:72,region:'map'}, 重要线索:{x:90,y:67,region:'map'}, 神秘线索:{x:91,y:48,region:'map'},
  雾:{x:43,y:36,region:'story'}, 低语:{x:51,y:25,region:'story'}, 石桥:{x:58,y:43,region:'story'}, 耳语:{x:55,y:61,region:'story'}, 罗盘:{x:69,y:58,region:'story'}, 信:{x:63,y:25,region:'story'}, 脚印:{x:72,y:29,region:'story'}, 小声说:{x:43,y:67,region:'story'}, 轻声说:{x:62,y:71,region:'story'}, 悄悄说:{x:49,y:75,region:'story'}
});

export const storyReady = (visited, hasMapRegion) =>
  hasMapRegion && visited.some(word => word !== '地图' && COORDS[word]?.region === 'map');

export const candidates = (current, relation) => {
  if (relation === 'similar' && COURAGE_WORDS.includes(current)) return COURAGE_WORDS.filter(x => x !== current);
  if (relation === 'similar' && TIMID_WORDS.includes(current)) return TIMID_WORDS.filter(x => x !== current);
  if (relation === 'opposite' && COURAGE_WORDS.includes(current)) return TIMID_WORDS;
  if (relation === 'opposite' && TIMID_WORDS.includes(current)) return COURAGE_WORDS;
  if (relation === 'related' && MAP_RELATED[current]) return MAP_RELATED[current];
  if (relation === 'collocation' && current === '线索') return ['寻找线索', '发现线索', '重要线索', '神秘线索'];
  if (relation === 'collocation' && CLUE_PHRASES.includes(current)) return ['线索'];
  if (relation === 'similar' && WHISPER_WORDS.includes(current)) return WHISPER_WORDS.filter(x => x !== current);
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
