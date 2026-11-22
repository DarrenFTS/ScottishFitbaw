/* Scottish Fitbaw League — shared code. Generated; edit freely. */
const BONUS = [
  {player:'Callum', p3:['Aberdeen','pending'],  bottom:['St.Mirren','pending'], champ:['Partick','pending'],     l1:['Ross County','pending'], l2:['Clyde','pending'],          lc:['Celtic','pending'],  sc:['Rangers','pending'], cc:['Raith','pending'],          sack:['Craig MacLeish (St.Mirren)','wrong'], sixes:['Dundee Utd','wrong']},
  {player:'Darren', p3:['Hibs','pending'],      bottom:['Kilmarnock','pending'], champ:['Dunfermline','pending'], l1:['Ross County','pending'], l2:['Spartans','pending'],       lc:['Falkirk','pending'], sc:['Celtic','pending'],  cc:['Raith Rovers','pending'],   sack:['Wouter Vrancken (Hearts)','wrong'],   sixes:['Hibernian','wrong']},
  {player:'Dean',   p3:['Hearts','pending'],    bottom:['Kilmarnock','pending'], champ:['Livingston','pending'],  l1:['Ross County','pending'], l2:['Clyde','pending'],          lc:['Rangers','pending'], sc:['Celtic','pending'],  cc:['Ross County','pending'],    sack:['Neil McCann (Kilmarnock)','wrong'],   sixes:['Celtic','correct']},
  {player:'Jamie',  p3:['Hearts','pending'],    bottom:['Kilmarnock','pending'], champ:['Livingston','pending'],  l1:['Airdrie','pending'],     l2:['Clyde','pending'],          lc:['Celtic','pending'],  sc:['Hearts','pending'],  cc:['Dunfermline','pending'],    sack:['Darian Mackinnon (Hamilton)','wrong'],sixes:['Motherwell','wrong']},
  {player:'Roger',  p3:['Hearts','pending'],    bottom:['St.Johnstone','pending'], champ:['Dunfermline','pending'], l1:['Hamilton','pending'],    l2:['Stirling Albion','pending'], lc:['Celtic','pending'],  sc:['Celtic','pending'],  cc:['Raith Rovers','pending'],   sack:['Craig McLeish (St.Mirren)','wrong'],  sixes:['Rangers','wrong']},
  {player:'Scott',  p3:['Hearts','pending'],    bottom:['St.Johnstone','pending'], champ:['Livingston','pending'],  l1:['Ross County','pending'], l2:['East Fife','pending'],      lc:['Rangers','pending'], sc:['Hearts','pending'],  cc:['Partick Thistle','pending'], sack:['John Rankin (Airdrie)','wrong'],      sixes:['Hearts','wrong']},
  {player:'Steve',  p3:['Hearts','pending'],    bottom:['Kilmarnock','pending'], champ:['Livingston','pending'],  l1:['Ross County','pending'], l2:['Kelty','pending'],          lc:['Rangers','pending'], sc:['Celtic','pending'],  cc:['Ross County','pending'],    sack:['Neil McCann (Kilmarnock)','wrong'],   sixes:['Celtic','correct']},
  {player:'Davie',  p3:['Hearts','pending'],    bottom:['Dundee','pending'], champ:['Dunfermline','pending'], l1:['Ross County','pending'], l2:['Spartans','pending'],       lc:['Celtic','pending'],  sc:['Celtic','pending'],  cc:['Dunfermline','pending'],    sack:['Steven Pressley (Dundee)','wrong'],   sixes:['Aberdeen','wrong']},
  {player:'Rhys',   p3:['Aberdeen','pending'],  bottom:['Kilmarnock','pending'], champ:['Livingston','pending'],  l1:['Montrose','pending'],    l2:['Kelty','pending'],          lc:['Rangers','pending'], sc:['Celtic','pending'],  cc:['Dunfermline','pending'],    sack:['Steven Pressley (Dundee)','wrong'],   sixes:['Celtic','correct']},
  {player:'Stevie', p3:['Hearts','pending'],    bottom:['St.Johnstone','pending'], champ:['Livingston','pending'],  l1:['Ross County','pending'], l2:['East Fife','pending'],      lc:['Rangers','pending'], sc:['Rangers','pending'], cc:['Livingston','pending'],     sack:["Martin O'Neill (Celtic)",'wrong'],    sixes:['Rangers','wrong']},
];
const TEAMS = [
  {team:'DRAW', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'St. Johnstone', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'East Kilbride', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Hearts', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Inverness', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Spartans', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Rangers', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Partick Th', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Hibs', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Celtic', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Alloa', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Raith', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Motherwell', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'QOS', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Stenhousemuir', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Arbroath', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Ross Co', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Falkirk', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Hamilton', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Aberdeen', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Kilmarnock', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Peterhead', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'St.Mirren', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Dunfermline', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Ayr', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Livingston', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Morton', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Kelty', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Annan', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'East Fife', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Edinburgh', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Dundee Utd', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Airdrie', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Dundee', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Clyde', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Elgin', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Cove', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Stirling Albion', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
  {team:'Montrose', total:0, Callum:0,Darren:0,Davie:0,Dean:0,Jamie:0,Roger:0,Rhys:0,Scott:0,Steve:0,Stevie:0},
];
const FALLBACK = {
  league:[
    {player:'Callum',played:0,home:0,draw:0,away:0,cs:0,bonus:0},
    {player:'Darren',played:0,home:0,draw:0,away:0,cs:0,bonus:0},
    {player:'Dean',  played:0,home:0,draw:0,away:0,cs:0,bonus:0},
    {player:'Jamie', played:0,home:0,draw:0,away:0,cs:0,bonus:0},
    {player:'Roger',played:0,home:0,draw:0,away:0,cs:0,bonus:0},
    {player:'Scott', played:0,home:0,draw:0,away:0,cs:0,bonus:0},
    {player:'Steve', played:0,home:0,draw:0,away:0,cs:0,bonus:0},
    {player:'Davie', played:0,home:0,draw:0,away:0,cs:0,bonus:0},
    {player:'Rhys',  played:0,home:0,draw:0,away:0,cs:0,bonus:0},
    {player:'Stevie',played:0,home:0,draw:0,away:0,cs:0,bonus:0},
  ],
  weeks:[
    {week:1,selections:[
      {player:'Callum',selection:'',score:'',bonus:0,pts:0},
      {player:'Darren',selection:'',score:'',bonus:0,pts:0},
      {player:'Dean',  selection:'',score:'',bonus:0,pts:0},
      {player:'Jamie', selection:'',score:'',bonus:0,pts:0},
      {player:'Roger', selection:'',score:'',bonus:0,pts:0},
      {player:'Scott', selection:'',score:'',bonus:0,pts:0},
      {player:'Steve', selection:'',score:'',bonus:0,pts:0},
      {player:'Davie', selection:'',score:'',bonus:0,pts:0},
      {player:'Rhys',  selection:'',score:'',bonus:0,pts:0},
      {player:'Stevie',selection:'',score:'',bonus:0,pts:0},
    ]}
  ],
  teams:[]
};

const RULES_HTML = `  <div class="section-title">Competition Rules</div>
  <div style="max-width:700px;">
    <div style="background:var(--panel);border:1px solid var(--border);border-radius:10px;padding:28px 32px;margin-bottom:20px;">

      <div style="margin-bottom:24px;">
        <div style="font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:0.12em;color:var(--gold);margin-bottom:12px;">&#127942; League Table Order</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
          <li style="display:flex;gap:12px;align-items:flex-start;">
            <span style="color:var(--green-light);font-size:1.1rem;flex-shrink:0;">&#9658;</span>
            <span style="font-size:0.97rem;line-height:1.5;">The table is always ordered by <strong style="color:var(--gold);">total points</strong>. Where players are level on points, the tiebreaker order is: <strong style="color:var(--gold);">Correct Scores &rsaquo; Draws &rsaquo; Away Wins &rsaquo; Home Wins &rsaquo; Bonus Points</strong></span>
          </li>
          <li style="display:flex;gap:12px;align-items:flex-start;">
            <span style="color:var(--green-light);font-size:1.1rem;flex-shrink:0;">&#9658;</span>
            <span style="font-size:0.97rem;line-height:1.5;">If all tiebreakers are also equal, players share the same position. The next player below them takes the position after the shared group (e.g. four players tied 5th means the next player is 9th)</span>
          </li>
        </ul>

        <div style="font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:0.12em;color:var(--gold);margin-bottom:12px;">&#9200; Weekly Picks</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;">
          <li style="display:flex;gap:12px;align-items:flex-start;">
            <span style="color:var(--green-light);font-size:1.1rem;flex-shrink:0;">&#9658;</span>
            <span style="font-size:0.97rem;line-height:1.5;">Picks must be submitted between <strong style="color:var(--gold);">Friday 00:00</strong> and <strong style="color:var(--gold);">Saturday 14:59</strong></span>
          </li>
          <li style="display:flex;gap:12px;align-items:flex-start;">
            <span style="color:var(--green-light);font-size:1.1rem;flex-shrink:0;">&#9658;</span>
            <span style="font-size:0.97rem;line-height:1.5;">If no pick is submitted you <strong style="color:var(--gold);">pass</strong> that week &mdash; no points awarded</span>
          </li>
          <li style="display:flex;gap:12px;align-items:flex-start;">
            <span style="color:var(--green-light);font-size:1.1rem;flex-shrink:0;">&#9658;</span>
            <span style="font-size:0.97rem;line-height:1.5;">Maximum of <strong style="color:var(--gold);">6 picks per team</strong> over the season &mdash; draw picks are unlimited</span>
          </li>
          <li style="display:flex;gap:12px;align-items:flex-start;">
            <span style="color:var(--green-light);font-size:1.1rem;flex-shrink:0;">&#9658;</span>
            <span style="font-size:0.97rem;line-height:1.5;">Your weekly picked result <strong style="color:var(--gold);">cannot be the same team or result</strong> as another player who picked before you &mdash; you cannot pick the same game but a different winner</span>
          </li>
        </ul>
      </div>

      <div style="border-top:1px solid var(--border);padding-top:24px;margin-bottom:24px;">
        <div style="font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:0.12em;color:var(--gold);margin-bottom:12px;">&#127942; Points System</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;">
          <div style="background:rgba(125,216,125,0.1);border:1px solid rgba(125,216,125,0.25);border-radius:8px;padding:14px 16px;text-align:center;">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:2rem;color:var(--home);line-height:1;">1 pt</div>
            <div style="font-size:0.82rem;color:var(--text-dim);margin-top:4px;">Home Win</div>
          </div>
          <div style="background:rgba(128,196,255,0.1);border:1px solid rgba(128,196,255,0.25);border-radius:8px;padding:14px 16px;text-align:center;">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:2rem;color:var(--away);line-height:1;">2 pts</div>
            <div style="font-size:0.82rem;color:var(--text-dim);margin-top:4px;">Away Win</div>
          </div>
          <div style="background:rgba(224,192,96,0.1);border:1px solid rgba(224,192,96,0.25);border-radius:8px;padding:14px 16px;text-align:center;">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:2rem;color:var(--draw);line-height:1;">3 pts</div>
            <div style="font-size:0.82rem;color:var(--text-dim);margin-top:4px;">Draw</div>
          </div>
          <div style="background:rgba(255,159,96,0.1);border:1px solid rgba(255,159,96,0.25);border-radius:8px;padding:14px 16px;text-align:center;">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:2rem;color:var(--cs);line-height:1;">5 pts</div>
            <div style="font-size:0.82rem;color:var(--text-dim);margin-top:4px;">Correct Score</div>
          </div>
        </div>
      </div>

      <div style="border-top:1px solid var(--border);padding-top:24px;">
        <div style="font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:0.12em;color:var(--gold);margin-bottom:12px;">&#11088; Bonus Rounds</div>
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <span style="color:var(--green-light);font-size:1.1rem;flex-shrink:0;">&#9658;</span>
          <span style="font-size:0.97rem;line-height:1.5;">Bonus rounds will be announced <strong style="color:var(--gold);">ad hoc</strong> for cup competitions throughout the season</span>
        </div>
      </div>

    </div>
  </div>`;


/* ================================================================
   Scottish Fitbaw League — shared app code (public + admin)
   ================================================================ */
const PLAYERS = ['Callum','Darren','Davie','Dean','Jamie','Roger','Rhys','Scott','Steve','Stevie'];
const PCOL = {Callum:'#2a78d6',Darren:'#eb6834',Davie:'#1baf7a',Dean:'#8a74f0',Jamie:'#e0b020',Roger:'#d6477a',Rhys:'#35b6c9',Scott:'#9fcf3a',Steve:'#c08a5a',Stevie:'#aab4bf'};
const SEASON = '2026/27';

const HALL_OF_FAME = [
  {season:'2021/22', champion:'Scott Gourlay'},
  {season:'2022/23', champion:'Jamie Young'},
  {season:'2023/24', champion:'Roger Gardiner'},
  {season:'2024/25', champion:'Roger Gardiner'},
  {season:'2025/26', champion:'Darren Summers'},
  {season:'2026/27', champion:'???', current:true},
];

const TEAM_COLS = {
  'celtic':['#1f9d55','CEL'],'rangers':['#1d4ed8','RAN'],'hearts':['#8c1c2f','HRT'],'hibs':['#0f8a4b','HIB'],'hibernian':['#0f8a4b','HIB'],
  'aberdeen':['#d62828','ABD'],'dundee utd':['#e07a10','DUN'],'dundee':['#1e3a8a','DUN'],'motherwell':['#c9a000','MOT'],'kilmarnock':['#2b5cb8','KIL'],
  'st. johnstone':['#2563c9','STJ'],'st.johnstone':['#2563c9','STJ'],'st. mirren':['#222','STM'],'st.mirren':['#222','STM'],'livingston':['#c9a000','LIV'],
  'falkirk':['#7a1f2b','FAL'],'dunfermline':['#444','DNF'],'partick th':['#c0a000','PAR'],'partick':['#c0a000','PAR'],'ross co':['#1d3f9a','ROS'],'ross county':['#1d3f9a','ROS'],
  'raith':['#4a4a4a','RAI'],'raith rovers':['#4a4a4a','RAI'],'hamilton':['#c0392b','HAM'],'airdrie':['#2563c9','AIR'],'queen of the south':['#2563c9','QOS'],'qos':['#2563c9','QOS'],
  'ayr':['#555','AYR'],'morton':['#3a6fc6','MOR'],'arbroath':['#8a1c2b','ARB'],'inverness':['#2f6fb0','INV'],'cove':['#d87000','COV'],'clyde':['#444','CLY'],
  'spartans':['#c0a000','SPA'],'kelty':['#c0392b','KEL'],'annan':['#c9a000','ANN'],'east fife':['#c9a000','EFI'],'montrose':['#7a1f2b','MON'],'peterhead':['#2563c9','PET'],
  'alloa':['#c9a000','ALL'],'stenhousemuir':['#7a1f2b','STE'],'elgin':['#c0392b','ELG'],'stirling albion':['#c0392b','STI'],'edinburgh':['#555','EDI'],'east kilbride':['#555','EKB'],
  'draw':['#8a8f98','DRW']
};
function teamChip(name, big){
  if(!name) return '';
  const k=String(name).toLowerCase().trim();
  let hit=TEAM_COLS[k];
  if(!hit){ const key=Object.keys(TEAM_COLS).find(x=>x.length>3&&(k.startsWith(x)||x.startsWith(k))); hit=key?TEAM_COLS[key]:null; }
  const col=hit?hit[0]:'#6b7280', ab=hit?hit[1]:k.slice(0,3).toUpperCase();
  return `<span class="tc${big?' lg':''}" style="background:${col}">${ab}</span>`;
}
const esc = s => String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function calcPts(p){return (p.home||0)*1+(p.draw||0)*3+(p.away||0)*2+(p.cs||0)*5+(p.bonus||0);}

/* ---------- normalising a weekly selection record ---------- */
function pickInfo(r){
  if(!r) return {team:'',had:'',has:false};
  let had=r.had||'', team=r.team||'';
  const s=(r.selection||'').trim();
  if(!had && s){
    if(/^draw$/i.test(s)) had='D';
    else { const m=s.match(/^(.*)\s+([HA])$/); if(m){team=team||m[1];had=m[2];} else team=team||s; }
  }
  const has=!!(s && s!=='—' && s!=='-');
  return {team: had==='D'?'Draw':team, had, has};
}
function weekScored(w){ return (w.selections||[]).some(r=>(r.pts||0)>0 || (r.score && r.score!=='—' && r.score!=='')); }
function scoredWeeks(state){ return [...(state.weeks||[])].filter(weekScored).sort((a,b)=>a.week-b.week); }
function selOf(w,p){ return (w.selections||[]).find(s=>s.player===p); }

/* ---------- league ranking (tie-break rules) ---------- */
function tieKey(p){return [p.points,p.cs||0,p.draw||0,p.away||0,p.home||0,p.bonus||0];}
function rankRows(state){
  const rows=(state.league||[]).map(p=>({...p,points:calcPts(p)})).sort((a,b)=>{
    const x=tieKey(a),y=tieKey(b); for(let i=0;i<x.length;i++){ if(y[i]!==x[i]) return y[i]-x[i]; } return 0; });
  let rp=1;
  rows.forEach((p,i)=>{ if(i===0){p.pos=1;return;} const a=tieKey(p).join(),b=tieKey(rows[i-1]).join(); if(a===b){p.pos=rp;} else {rp=i+1;p.pos=rp;} });
  return rows;
}
function prevPositions(state, rows){
  const sw=scoredWeeks(state); if(sw.length<2) return null;
  const last=sw[sw.length-1];
  const prev=rows.map(p=>({player:p.player, pts:p.points-((selOf(last,p.player)||{}).pts||0)})).sort((a,b)=>b.pts-a.pts);
  const pos={}; let rp=1; prev.forEach((p,i)=>{ if(i>0 && p.pts!==prev[i-1].pts) rp=i+1; pos[p.player]=rp; });
  return pos;
}
function formOf(state,player,n=5){
  return scoredWeeks(state).slice(-n).map(w=>{
    const r=selOf(w,player), pi=pickInfo(r);
    let cls='', tip='Wk '+w.week+': no pick';
    if(r && pi.has){ const pts=r.pts||0; cls=pts>=5?'g':pts>0?'s':'z'; tip='Wk '+w.week+': '+r.selection+' — '+pts+' pts'; }
    return {cls,tip,week:w.week};
  });
}
function formDots(state,player){
  const f=formOf(state,player); while(f.length<5) f.unshift({cls:'',tip:'—'});
  return '<span class="form">'+f.map(d=>`<i class="fd ${d.cls}" title="${esc(d.tip)}"></i>`).join('')+'</span>';
}
function mvInfo(prevPos,p){
  if(!prevPos) return {cls:'same',txt:'–',n:0};
  const d=prevPos[p.player]-p.pos;
  return d>0?{cls:'up',txt:'▲'+d,n:d}:d<0?{cls:'down',txt:'▼'+(-d),n:d}:{cls:'same',txt:'–',n:0};
}
function winnerStars(name){
  const n=HALL_OF_FAME.filter(h=>!h.current && h.champion.split(' ')[0]===name).length;
  return n;
}
function streaks(state){
  const out={};
  PLAYERS.forEach(p=>{ let best=0,cur=0; scoredWeeks(state).forEach(w=>{const r=selOf(w,p); if(r&&pickInfo(r).has&&(r.pts||0)>0){cur++;best=Math.max(best,cur);}else cur=0;}); out[p]={best,cur}; });
  return out;
}
function playerStats(state,p){
  const L=(state.league||[]).find(x=>x.player===p)||{};
  const entries=scoredWeeks(state).map(w=>({week:w.week,r:selOf(w,p)})).filter(e=>e.r&&pickInfo(e.r).has);
  const hits=entries.filter(e=>(e.r.pts||0)>0).length;
  let best={pts:-1,week:0}; entries.forEach(e=>{ if((e.r.pts||0)>best.pts) best={pts:e.r.pts||0,week:e.week}; });
  return {L,entries,hits,rate:entries.length?Math.round(hits/entries.length*100):0,best:best.pts<0?{pts:0,week:0}:best};
}
function teamTotal(t){ return PLAYERS.reduce((a,p)=>a+(t[p]||0),0); }
function getTeams(state){ return (state.teams&&state.teams.length)?state.teams:JSON.parse(JSON.stringify(TEAMS)); }

/* ---------- deadline clock (UK time) ---------- */
function ukWall(d){
  const f=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',weekday:'short',year:'numeric',month:'numeric',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric',hourCycle:'h23'}).formatToParts(d);
  const g={}; f.forEach(x=>g[x.type]=x.value);
  const wd=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g.weekday);
  return {wd,ms:Date.UTC(+g.year,+g.month-1,+g.day,+g.hour,+g.minute,+g.second)};
}
function deadlineInfo(now){
  now=now||new Date(); const w=ukWall(now); const DAY=86400000;
  const midnight=w.ms-(w.ms%DAY);                 // wall-clock midnight today
  const satCut=(wd0)=>midnight+((6-wd0+7)%7)*DAY+(14*60+59)*60000+0; // Sat 14:59
  const open=(w.wd===5)||(w.wd===6&&w.ms<midnight+(14*60+59)*60000+60000);
  if(open){ return {open:true,remain:satCut(w.wd)-w.ms}; }
  const toFri=midnight+((5-w.wd+7)%7||7)*DAY; return {open:false,remain:toFri-w.ms};
}
function cdParts(ms){ ms=Math.max(0,ms); const s=Math.floor(ms/1000); return {d:Math.floor(s/86400),h:Math.floor(s%86400/3600),m:Math.floor(s%3600/60),s:s%60}; }
function openWeek(state){
  const ws=[...(state.weeks||[])].sort((a,b)=>b.week-a.week)[0];
  if(ws && !weekScored(ws) && ws.selections.some(r=>pickInfo(r).has)) return ws;
  return null;
}

/* =================================================================
   LEAGUE TAB
   ================================================================= */
function bannerHTML(state){
  const di=deadlineInfo(), ow=openWeek(state), sw=scoredWeeks(state);
  const nextWk=(Math.max(0,...(state.weeks||[]).map(w=>w.week)))+(ow?0:1)||1;
  let chips='';
  if(ow && di.open){
    chips='<div class="pickchips">'+PLAYERS.map(p=>{const r=selOf(ow,p),inn=r&&pickInfo(r).has;return `<span class="pk ${inn?'in':''}">${p}</span>`;}).join('')+'</div>';
  }
  const title=di.open?`Week ${nextWk} picks are OPEN`:`Week ${nextWk} picks open Friday 00:00`;
  const sub=di.open?'Deadline: Saturday 14:59':'Picks window: Friday 00:00 – Saturday 14:59';
  return `<div class="banner ${di.open?'':'closed'}" data-banner="1"><div><h3>⏱ ${title}</h3><div class="sub">${sub}</div></div><div class="cd" data-cd="1"></div>${chips}</div>`;
}
function tickBanner(root){
  const el=root.querySelector('[data-cd]'); if(!el) return;
  const upd=()=>{ const di=deadlineInfo(),c=cdParts(di.remain);
    el.innerHTML=[['d','days'],['h','hrs'],['m','min'],['s','sec']].map(([k,l])=>`<div><b>${String(c[k]).padStart(2,'0')}</b><span>${l}</span></div>`).join(''); };
  upd(); clearInterval(root.__tick); root.__tick=setInterval(()=>{ if(!document.body.contains(el)) {clearInterval(root.__tick);return;} upd(); },1000);
}

function reviewTiles(state,rows,prevPos){
  const sw=scoredWeeks(state); if(!sw.length) return '';
  const last=sw[sw.length-1];
  const scores=PLAYERS.map(p=>({p,pts:(selOf(last,p)||{}).pts||0}));
  const top=Math.max(...scores.map(s=>s.pts)); const topNames=scores.filter(s=>s.pts===top&&top>0).map(s=>s.p);
  let climber=null; if(prevPos){ rows.forEach(p=>{const m=mvInfo(prevPos,p); if(m.n>0&&(!climber||m.n>climber.n)) climber={p:p.player,n:m.n,pos:p.pos};}); }
  const st=streaks(state); let sp=null; PLAYERS.forEach(p=>{ if(st[p].best>0&&(!sp||st[p].best>sp.n)) sp={p,n:st[p].best,cur:st[p].cur}; });
  return `<div class="section-title">Week ${last.week} in review</div><div class="review-row">
   <div class="stat-card"><span class="emoji">🔥</span><div class="stat-card-label">Top score of the week</div><div class="stat-card-value">${topNames.length?topNames.join(' & '):'—'}</div><div class="stat-card-sub">${top>0?top+' points in Week '+last.week:'Nobody scored'}</div></div>
   <div class="stat-card"><span class="emoji">🚀</span><div class="stat-card-label">Biggest climber</div><div class="stat-card-value">${climber?climber.p:'—'}</div><div class="stat-card-sub">${climber?'up '+climber.n+' place'+(climber.n>1?'s':'')+' to '+climber.pos+ordSuffix(climber.pos):'No big movers'}</div></div>
   <div class="stat-card"><span class="emoji">📈</span><div class="stat-card-label">Longest scoring run</div><div class="stat-card-value">${sp?sp.p:'—'}</div><div class="stat-card-sub">${sp?sp.n+' week'+(sp.n>1?'s':'')+' in a row'+(sp.cur===sp.n?' · still going':''):'—'}</div></div>
  </div>`;
}
function ordSuffix(n){const v=n%100;return (v>=11&&v<=13)?'th':({1:'st',2:'nd',3:'rd'}[n%10]||'th');}

function renderLeague(state,pane,root){
  const rows=rankRows(state), prevPos=prevPositions(state,rows);
  const maxPts=rows[0]?Math.max(rows[0].points,1):1;
  const sw=scoredWeeks(state), wk=sw.length?sw[sw.length-1].week:0;
  const body=rows.map(p=>{
    const pc=p.pos===1?'pos-1':p.pos===2?'pos-2':p.pos===3?'pos-3':'pos-o', m=mvInfo(prevPos,p), st=winnerStars(p.player);
    return `<tr>
      <td style="white-space:nowrap"><span class="pos-badge ${pc}">${p.pos}</span> <span class="mv ${m.cls}">${m.txt}</span></td>
      <td style="text-align:left;white-space:nowrap"><span class="player-name">${esc(p.player)}</span>${st?`<span class="star" title="${st}x previous winner">${'&#9733;'.repeat(st)}</span>`:''}</td>
      <td>${formDots(state,p.player)}</td>
      <td>${p.played||0}</td>
      <td class="home-cell">${p.home||0}</td><td class="draw-cell">${p.draw||0}</td><td class="away-cell">${p.away||0}</td>
      <td class="cs-cell">${p.cs||0}</td><td class="bon-cell">${p.bonus||0}</td>
      <td><div class="pts-cell">${p.points}</div><div class="pts-bar-wrap"><div class="pts-bar" style="width:${Math.round(p.points/maxPts*100)}%"></div></div></td>
    </tr>`; }).join('');
  const leader=rows[0]||{},gap=rows.length>1?leader.points-rows[1].points:0;
  const totalCS=rows.reduce((a,p)=>a+(p.cs||0),0),totalD=rows.reduce((a,p)=>a+(p.draw||0),0);
  pane.innerHTML=`
   <div class="titlerow"><div class="section-title">Current Standings</div><button class="share-btn" data-share="1">📲 Share table</button></div>
   ${bannerHTML(state)}
   <div class="table-wrap"><table class="ftable league-table sticky-2"><thead><tr>
     <th>#</th><th style="text-align:left">Player</th><th title="Last 5 weeks">Form</th><th>Played</th>
     <th title="Home wins — 1pt">Home</th><th title="Draws — 3pts">Draw</th><th title="Away wins — 2pts">Away</th><th title="Correct scores — 5pts">CS</th><th>Bonus</th><th>Points</th>
   </tr></thead><tbody>${body}</tbody></table></div>
   <div class="legend-row"><span><i class="fd g"></i>5+ pts</span><span><i class="fd s"></i>Scored</span><span><i class="fd z"></i>Blank</span><span><i class="fd"></i>No pick</span><span>Form = last 5 weeks, oldest on the left</span><span><b class="mv up">▲</b> <b class="mv down">▼</b> places moved since last week</span></div>
   ${reviewTiles(state,rows,prevPos)}
   <div class="section-title">Points race</div>
   <div class="chart-card"><div class="chart-box"><canvas data-chart="1"></canvas></div><div class="legend" data-legend="1"></div><div class="caption">Cumulative points from weekly results. Tap a name to hide or show a line.</div></div>
   <div class="section-title">Season at a Glance</div>
   <div class="stats-grid">
     <div class="stat-card"><div class="stat-card-label">Weeks Played</div><div class="stat-card-value">${wk||leader.played||0}</div><div class="stat-card-sub">of the ${SEASON} season</div></div>
     <div class="stat-card"><div class="stat-card-label">Current Leader</div><div class="stat-card-value">${leader.points>0?esc(leader.player):'—'}</div><div class="stat-card-sub">${leader.points>0?leader.points+' points total':'Season not started'}</div></div>
     <div class="stat-card"><div class="stat-card-label">Leader's Gap</div><div class="stat-card-value">${leader.points>0?'+'+gap:'—'}</div><div class="stat-card-sub">pts ahead of 2nd place</div></div>
     <div class="stat-card"><div class="stat-card-label">Correct Scores</div><div class="stat-card-value">${totalCS}</div><div class="stat-card-sub">5-pointers in total</div></div>
     <div class="stat-card"><div class="stat-card-label">Draws Called</div><div class="stat-card-value">${totalD}</div><div class="stat-card-sub">3-pointers across all players</div></div>
     <div class="stat-card"><div class="stat-card-label">Players</div><div class="stat-card-value">${rows.length}</div><div class="stat-card-sub">competing this season</div></div>
   </div>`;
  tickBanner(pane); drawRace(state,pane,rows);
}

function chartTheme(){ const light=document.documentElement.dataset.theme==='light'; return {tick:light?'#4a5a4e':'#c4d2c4',grid:light?'rgba(19,38,26,.1)':'rgba(255,255,255,.09)'}; }
function drawRace(state,pane,rows){
  const cv=pane.querySelector('[data-chart]'), lg=pane.querySelector('[data-legend]');
  const sw=scoredWeeks(state);
  if(pane.__chart){pane.__chart.destroy();pane.__chart=null;}
  if(typeof Chart==='undefined'||!sw.length){ cv.parentNode.innerHTML='<div class="loading" style="padding:90px 10px;font-size:1.1rem">'+(sw.length?'Chart unavailable offline':'The points race starts after Week 1')+'</div>'; return; }
  const order=rows.map(r=>r.player);
  const sets=order.map(p=>{ let c=0; return {label:p,data:sw.map(w=>{c+=((selOf(w,p)||{}).pts||0);return c;}),borderColor:PCOL[p],backgroundColor:PCOL[p],borderWidth:2.5,pointRadius:3,pointHoverRadius:5,tension:.25}; });
  const th=chartTheme();
  pane.__chart=new Chart(cv,{type:'line',data:{labels:sw.map(w=>'Wk '+w.week),datasets:sets},options:{
    responsive:true,maintainAspectRatio:false,animation:false,interaction:{mode:'index',intersect:false},
    plugins:{legend:{display:false},tooltip:{itemSort:(a,b)=>b.parsed.y-a.parsed.y}},
    scales:{x:{ticks:{color:th.tick},grid:{color:th.grid}},y:{beginAtZero:true,ticks:{color:th.tick,precision:0},grid:{color:th.grid},title:{display:true,text:'Points',color:th.tick}}}}});
  lg.innerHTML=order.map((p,i)=>`<button data-i="${i}"><i style="background:${PCOL[p]}"></i>${esc(p)}</button>`).join('');
  lg.onclick=e=>{const b=e.target.closest('button');if(!b)return;const i=+b.dataset.i,ch=pane.__chart;const vis=ch.isDatasetVisible(i);ch.setDatasetVisibility(i,!vis);b.classList.toggle('off',vis);ch.update();};
}

/* =================================================================
   WEEKLY SELECTIONS
   ================================================================= */
function renderSelections(state,pane,root){
  const weeks=[...(state.weeks||[])].sort((a,b)=>b.week-a.week);
  pane.innerHTML=`<div class="section-title">Weekly Selections</div>
   <div class="notice">💡 Every player's pick, the final score, bonus points and points earned. Browse all weeks using the dropdown.</div>
   <div class="week-selector"><label>View Week:</label><select class="fsel" data-wsel="1">${weeks.length?weeks.map(w=>`<option value="${w.week}">Week ${w.week}</option>`).join(''):'<option>No weeks yet</option>'}</select></div>
   <div class="table-wrap"><table class="ftable sel-table sticky-1"><thead><tr><th style="text-align:left">Player</th><th style="text-align:left">Selection</th><th>Score</th><th>Bonus</th><th>Points</th></tr></thead><tbody data-wbody="1"></tbody></table></div>`;
  const sel=pane.querySelector('[data-wsel]'),tb=pane.querySelector('[data-wbody]');
  function draw(){
    const w=(state.weeks||[]).find(x=>x.week===parseInt(sel.value));
    if(!w){tb.innerHTML='<tr><td colspan="5" style="padding:32px;color:var(--dim)">No weekly selections yet — check back after Week 1!</td></tr>';return;}
    const scored=weekScored(w), top=Math.max(0,...w.selections.map(r=>r.pts||0));
    tb.innerHTML=w.selections.map(r=>{
      const pi=pickInfo(r),cls=(r.pts||0)>=5?'pts-high':(r.pts||0)>0?'pts-mid':'pts-zero';
      return `<tr><td style="text-align:left"><strong>${esc(r.player)}</strong> ${scored&&top>0&&r.pts===top?'🔥':''}</td>
        <td style="text-align:left">${pi.has?`<span class="tl">${teamChip(pi.team)}${esc(r.selection)}</span>`:'<span style="color:var(--dim);font-style:italic">'+(scored?'Passed':'Not yet selected')+'</span>'}</td>
        <td style="color:var(--dim)">${esc(r.score||'—')}</td>
        <td>${r.bonus>0?'<span class="pts-badge pts-mid">+'+r.bonus+'</span>':'—'}</td>
        <td>${!scored?'<span style="color:var(--dim);font-size:.85rem;font-style:italic">Pending</span>':'<span class="pts-badge '+cls+'">'+(r.pts||0)+' pts</span>'}</td></tr>`; }).join('');
  }
  sel.onchange=draw; if(weeks.length) sel.value=String(root.__wk&&weeks.find(w=>w.week===root.__wk)?root.__wk:weeks[0].week);
  sel.addEventListener('change',()=>{root.__wk=parseInt(sel.value);}); draw();
}

/* =================================================================
   SEASON PREDICTIONS
   ================================================================= */
const PRED_FIELDS=['p3','bottom','champ','l1','l2','lc','sc','cc','sack','sixes'];
function predPoints(b){ let pts=0,ok=0,pend=0; PRED_FIELDS.forEach(f=>{const s=b[f]&&b[f][1]; if(s==='correct'){ok++;pts+=(f==='p3'?45:5);} else if(s==='pending')pend++;}); return {pts,ok,pend}; }
function renderBonus(state,pane){
  const sc=BONUS.map(b=>({player:b.player,...predPoints(b)})).sort((a,b)=>b.pts-a.pts||b.ok-a.ok);
  const mx=Math.max(5,...sc.map(s=>s.pts));
  pane.innerHTML=`<div class="section-title">Season Predictions</div>
   <div class="panel"><div class="stat-card-label" style="margin-bottom:10px">Points from predictions so far <span style="text-transform:none;letter-spacing:0">(5 each · 3rd in the Premiership = 45)</span></div>
    ${sc.map(s=>`<div class="bar-row"><span><b style="color:var(--fg);font-size:1rem">${esc(s.player)}</b></span><div class="track"><div class="fill" style="width:${s.pts/mx*100}%"></div></div><b>${s.pts}</b></div>`).join('')}
    <div class="caption">${sc.map(s=>s.player+' '+s.ok+' ✓ / '+s.pend+' to play').join(' · ')}</div></div>
   <div class="bonus-legend"><span><span class="legend-dot legend-correct"></span>Correct (5 pts)</span><span><span class="legend-dot legend-wrong"></span>Incorrect</span><span><span class="legend-dot legend-pending"></span>Season in progress</span></div>
   <div class="table-wrap"><table class="ftable bonus-table sticky-1"><thead><tr><th style="text-align:left">Player</th>
     ${[['3rd Prem','45 pts'],['Bottom','5 pts'],['Champ','5 pts'],['League 1','5 pts'],['League 2','5 pts'],['League Cup','5 pts'],['Scottish Cup','5 pts'],['Challenge Cup','5 pts'],['1st Sacking','5 pts'],['Tennents Sixes','5 pts']].map(h=>`<th>${h[0]}<br><small style="color:var(--dim);font-size:.7rem">${h[1]}</small></th>`).join('')}
   </tr></thead><tbody>${BONUS.map(b=>`<tr><td style="text-align:left"><strong>${esc(b.player)}</strong></td>${PRED_FIELDS.map(f=>{const [v,s]=b[f];return `<td><span class="bc-${s}">${esc(v)}</span></td>`;}).join('')}</tr>`).join('')}</tbody></table></div>`;
}

/* =================================================================
   TEAMS PICKED  (+ pick tracker)
   ================================================================= */
function heatCls(v){if(!v)return 'heat-0';if(v>=6)return 'heat-6';if(v<=1)return 'heat-1';if(v<=2)return 'heat-2';if(v<=3)return 'heat-3';if(v<=4)return 'heat-4';return 'heat-5';}
function renderTeams(state,pane){
  const teams=getTeams(state).map(t=>({...t,total:teamTotal(t)}));
  const sorted=[...teams.filter(t=>t.total>0).sort((a,b)=>b.total-a.total),...teams.filter(t=>t.total===0)];
  const tr=PLAYERS.map(p=>{
    const rows=teams.filter(t=>(t[p]||0)>0&&t.team!=='DRAW');
    const made=teams.reduce((a,t)=>a+(t[p]||0),0), draws=(teams.find(t=>t.team==='DRAW')||{})[p]||0;
    const locked=rows.filter(t=>t[p]>=6), near=rows.filter(t=>t[p]===5);
    return `<div class="tr-card"><h4>${esc(p)}<small>${made} picks · ${draws} draw${draws===1?'':'s'}</small></h4>
      <div>${locked.map(t=>`<span class="lock">🔒 ${esc(t.team)} 6/6</span>`).join('')}${near.map(t=>`<span class="lock warn">${esc(t.team)} 5/6</span>`).join('')}${(!locked.length&&!near.length)?'<span style="font-size:.8rem;color:var(--dim)">No teams close to the limit</span>':''}</div></div>`; }).join('');
  pane.innerHTML=`<div class="section-title">Pick Tracker</div>
   <div class="notice">🔒 Max <strong>6 picks per team</strong> over the season (draws unlimited). A team shows as locked for a player once they've used all 6.</div>
   <div class="tracker">${tr}</div>
   <div class="section-title">Teams Picked This Season</div>
   <div class="table-wrap"><table class="ftable teams-table sticky-1"><thead><tr><th style="text-align:left">Team</th><th>Total</th>${PLAYERS.map(p=>`<th>${esc(p)}</th>`).join('')}</tr></thead>
   <tbody>${sorted.map(t=>`<tr><td style="text-align:left"><span class="tl">${teamChip(t.team)}${t.team==='DRAW'?'Draw':esc(t.team)}</span></td><td><strong>${t.total>0?t.total:'—'}</strong></td>
     ${PLAYERS.map(p=>{const v=t[p]||0;return `<td class="pick-cell ${heatCls(v)}">${v>0?(v>=6&&t.team!=='DRAW'?'🔒 '+v:v):'—'}</td>`;}).join('')}</tr>`).join('')}</tbody></table></div>`;
}

/* =================================================================
   STATS & AWARDS
   ================================================================= */
function renderStats(state,pane){
  const L=state.league||[]; const sw=scoredWeeks(state);
  const maxBy=(arr,f)=>{let b=null;arr.forEach(x=>{if(f(x)>0&&(!b||f(x)>f(b[0])))b=[x];else if(b&&f(x)===f(b[0])&&f(x)>0)b.push(x);});return b;};
  const names=b=>b?(b.length>2?b.length+' players tied':b.map(x=>x.player||x.p).join(' & ')):'—';
  const draw=maxBy(L,p=>p.draw||0), cs=maxBy(L,p=>p.cs||0), away=maxBy(L,p=>p.away||0), home=maxBy(L,p=>p.home||0);
  const teams=getTeams(state).filter(t=>t.team!=='DRAW').map(t=>({...t,total:teamTotal(t)})).sort((a,b)=>b.total-a.total);
  const st=streaks(state); const sk=maxBy(PLAYERS.map(p=>({p,n:st[p].best})),x=>x.n);
  let bigW=null; sw.forEach(w=>w.selections.forEach(r=>{ if((r.pts||0)>0&&(!bigW||r.pts>bigW.pts)) bigW={p:r.player,pts:r.pts,w:w.week}; }));
  const cons=PLAYERS.map(p=>({p,...playerStats(state,p)})).filter(x=>x.entries.length>=3).sort((a,b)=>b.rate-a.rate)[0];
  const card=(ico,lab,val,sub)=>`<div class="stat-card"><div class="award"><div class="ico">${ico}</div><div><div class="stat-card-label">${lab}</div><div class="stat-card-value">${val}</div><div class="stat-card-sub">${sub}</div></div></div></div>`;
  const dr=draw&&draw[0],c5=cs&&cs[0],aw=away&&away[0],ho=home&&home[0];
  pane.innerHTML=`<div class="section-title">Stats &amp; Awards</div><div class="stats-grid">
   ${card('🤝','Draw specialist',esc(names(draw)),dr?dr.draw+' draws called · '+dr.draw*3+' pts':'No draws yet')}
   ${card('🎯','Correct-score king',esc(names(cs)),c5?c5.cs+' correct scores · '+c5.cs*5+' pts':'None yet')}
   ${card('✈️','Best away picker',esc(names(away)),aw?aw.away+' away wins called':'—')}
   ${card('🏠','Best home picker',esc(names(home)),ho?ho.home+' home wins called':'—')}
   ${card('⭐','Most-picked team',teams[0]&&teams[0].total?esc(teams[0].team):'—',teams[0]&&teams[0].total?teams[0].total+' picks this season':'—')}
   ${card('🔥','Longest scoring run',sk?esc(names(sk)):'—',sk?sk[0].n+' weeks in a row':'—')}
   ${card('💥','Biggest week',bigW?esc(bigW.p):'—',bigW?bigW.pts+' pts in Week '+bigW.w:'—')}
   ${card('🧠','Best hit rate',cons?esc(cons.p):'—',cons?cons.rate+'% of picks scored ('+cons.hits+'/'+cons.entries.length+')':'Needs 3+ weeks')}
  </div>
  <div class="two">
   <div class="panel"><div class="section-title" style="font-size:1.15rem">Most picked teams</div>${teams.filter(t=>t.total>0).slice(0,8).map(t=>`<div class="bar-row"><span class="tl">${teamChip(t.team)}${esc(t.team)}</span><div class="track"><div class="fill" style="width:${t.total/teams[0].total*100}%"></div></div><b>${t.total}</b></div>`).join('')||'<div class="caption">No picks yet</div>'}</div>
   <div class="panel"><div class="section-title" style="font-size:1.15rem">Hit rate by player</div>${PLAYERS.map(p=>({p,...playerStats(state,p)})).sort((a,b)=>b.rate-a.rate).map(x=>`<div class="bar-row"><span>${esc(x.p)}</span><div class="track"><div class="fill" style="width:${x.rate}%"></div></div><b>${x.rate}%</b></div>`).join('')}<div class="caption">Share of picks that earned any points.</div></div>
  </div>`;
}

/* =================================================================
   PLAYER PROFILES
   ================================================================= */
function renderProfiles(state,pane,root){
  const p=root.__prof||PLAYERS[0]; root.__prof=p;
  const rows=rankRows(state), me=rows.find(r=>r.player===p)||{};
  const ps=playerStats(state,p), L=ps.L, teams=getTeams(state);
  const fav=teams.filter(t=>t.team!=='DRAW'&&(t[p]||0)>0).sort((a,b)=>b[p]-a[p]).slice(0,5);
  const h=L.home||0,d=L.draw||0,a=L.away||0,tot=Math.max(1,h+d+a);
  const hist=[...ps.entries].reverse();
  const stars=winnerStars(p);
  pane.innerHTML=`<div class="section-title">Player Profiles</div>
   <div class="chips">${PLAYERS.map(n=>`<button class="chip ${n===p?'active':''}" data-prof="${n}">${n}</button>`).join('')}</div>
   <div class="stats-grid">
    <div class="stat-card"><div class="stat-card-label">League position</div><div class="stat-card-value">${me.pos||'—'}${me.pos?ordSuffix(me.pos):''}</div><div class="stat-card-sub">${me.points||0} points${stars?' · '+stars+'× champion':''}</div></div>
    <div class="stat-card"><div class="stat-card-label">Hit rate</div><div class="stat-card-value">${ps.rate}%</div><div class="stat-card-sub">${ps.hits} of ${ps.entries.length} picks scored</div></div>
    <div class="stat-card"><div class="stat-card-label">Best week</div><div class="stat-card-value">${ps.best.pts}</div><div class="stat-card-sub">${ps.best.week?'Week '+ps.best.week:'—'}</div></div>
    <div class="stat-card"><div class="stat-card-label">Form</div><div class="stat-card-value" style="font-size:1.2rem;padding-top:8px">${formDots(state,p)}</div><div class="stat-card-sub">last 5 weeks</div></div>
   </div>
   <div class="two">
    <div class="panel"><div class="section-title" style="font-size:1.15rem">Home / Draw / Away split</div>
      <div class="splitbar"><span style="width:${h/tot*100}%;background:var(--home)"></span><span style="width:${d/tot*100}%;background:var(--draw)"></span><span style="width:${a/tot*100}%;background:var(--away)"></span></div>
      <div class="splitlegend"><span class="home-cell">Home ${h}</span><span class="draw-cell">Draw ${d}</span><span class="away-cell">Away ${a}</span><span class="cs-cell">Correct scores ${L.cs||0}</span><span class="bon-cell">Bonus ${L.bonus||0}</span></div></div>
    <div class="panel"><div class="section-title" style="font-size:1.15rem">Favourite teams</div>
      ${fav.length?fav.map(t=>`<div class="bar-row"><span class="tl">${teamChip(t.team)}${esc(t.team)}</span><div class="track"><div class="fill" style="width:${t[p]/fav[0][p]*100}%"></div></div><b>${t[p]}</b></div>`).join(''):'<div class="caption">No picks yet</div>'}</div>
   </div>
   <div class="section-title">Pick history</div>
   <div class="table-wrap"><table class="ftable sel-table"><thead><tr><th>Week</th><th style="text-align:left">Pick</th><th>Score</th><th>Points</th></tr></thead>
    <tbody>${hist.length?hist.map(e=>{const pi=pickInfo(e.r),cls=(e.r.pts||0)>=5?'pts-high':(e.r.pts||0)>0?'pts-mid':'pts-zero';return `<tr><td>${e.week}</td><td style="text-align:left"><span class="tl">${teamChip(pi.team)}${esc(e.r.selection)}</span></td><td style="color:var(--dim)">${esc(e.r.score||'—')}</td><td><span class="pts-badge ${cls}">${e.r.pts||0}</span></td></tr>`;}).join(''):'<tr><td colspan="4" style="padding:28px;color:var(--dim)">No picks yet</td></tr>'}</tbody></table></div>`;
  pane.querySelector('.chips').onclick=e=>{const b=e.target.closest('[data-prof]');if(!b)return;root.__prof=b.dataset.prof;renderProfiles(state,pane,root);};
}

/* =================================================================
   HEAD TO HEAD
   ================================================================= */
function renderH2H(state,pane,root){
  const [a,b]=root.__h2h||['Darren','Roger']; root.__h2h=[a,b];
  const A=(state.league||[]).find(x=>x.player===a)||{}, B=(state.league||[]).find(x=>x.player===b)||{};
  const opt=v=>PLAYERS.map(n=>`<option ${n===v?'selected':''}>${n}</option>`).join('');
  const mets=[['Points',calcPts(A),calcPts(B),'var(--gold)'],['Correct scores',A.cs||0,B.cs||0,'var(--cs)'],['Draws',A.draw||0,B.draw||0,'var(--draw)'],['Away wins',A.away||0,B.away||0,'var(--away)'],['Home wins',A.home||0,B.home||0,'var(--home)'],['Bonus',A.bonus||0,B.bonus||0,'var(--bon)']];
  const sw=scoredWeeks(state); let wa=0,wb=0,dr=0;
  const wrows=sw.map(w=>{const x=(selOf(w,a)||{}).pts||0,y=(selOf(w,b)||{}).pts||0; if(x>y)wa++;else if(y>x)wb++;else dr++; return {w:w.week,x,y,ra:selOf(w,a),rb:selOf(w,b)};}).reverse();
  pane.innerHTML=`<div class="section-title">Head to Head</div>
   <div class="week-selector"><select class="fsel" data-a>${opt(a)}</select><span style="font-family:'Bebas Neue';font-size:1.4rem;color:var(--gold)">VS</span><select class="fsel" data-b>${opt(b)}</select></div>
   <div class="panel">
    ${mets.map(m=>{const t=Math.max(1,m[1]+m[2]);return `<div class="vs"><div class="l val ${m[1]>m[2]?'win':''}">${m[1]}</div><div><div class="mid">${m[0]}</div><div class="vsbar"><div style="width:${m[1]/t*100}%;background:${m[3]};opacity:${m[1]>=m[2]?1:.4}"></div><div style="width:${m[2]/t*100}%;background:${m[3]};opacity:${m[2]>=m[1]?.55:.25}"></div></div></div><div class="val ${m[2]>m[1]?'win':''}">${m[2]}</div></div>`;}).join('')}
   </div>
   <div class="stats-grid"><div class="stat-card"><div class="stat-card-label">Weeks won by ${esc(a)}</div><div class="stat-card-value">${wa}</div></div><div class="stat-card"><div class="stat-card-label">Weeks level</div><div class="stat-card-value">${dr}</div></div><div class="stat-card"><div class="stat-card-label">Weeks won by ${esc(b)}</div><div class="stat-card-value">${wb}</div></div></div>
   <div class="table-wrap"><table class="ftable sel-table"><thead><tr><th>Week</th><th style="text-align:left">${esc(a)}</th><th>Pts</th><th style="text-align:left">${esc(b)}</th><th>Pts</th></tr></thead><tbody>
   ${wrows.length?wrows.map(r=>`<tr><td>${r.w}</td><td style="text-align:left">${esc((r.ra&&r.ra.selection)||'—')}</td><td class="${r.x>r.y?'pts-cell':''}">${r.x}</td><td style="text-align:left">${esc((r.rb&&r.rb.selection)||'—')}</td><td class="${r.y>r.x?'pts-cell':''}">${r.y}</td></tr>`).join(''):'<tr><td colspan="5" style="padding:28px;color:var(--dim)">No results yet</td></tr>'}</tbody></table></div>`;
  pane.querySelector('[data-a]').onchange=e=>{root.__h2h=[e.target.value,root.__h2h[1]];renderH2H(state,pane,root);};
  pane.querySelector('[data-b]').onchange=e=>{root.__h2h=[root.__h2h[0],e.target.value];renderH2H(state,pane,root);};
}

/* =================================================================
   HALL OF FAME (trophy cabinet)
   ================================================================= */
function renderWinners(state,pane){
  const done=HALL_OF_FAME.filter(h=>!h.current), tally={};
  done.forEach(h=>{tally[h.champion]=(tally[h.champion]||0)+1;});
  const medal=(h)=>h.second||h.third?`<div class="pl">${h.second?'🥈 '+esc(h.second):''} ${h.third?'🥉 '+esc(h.third):''}</div>`:'';
  pane.innerHTML=`<div class="section-title">Hall of Fame</div>
   <div class="honours">${Object.entries(tally).sort((a,b)=>b[1]-a[1]).map(([n,c])=>`<div class="h">🏆 ${esc(n)} ${c>1?'×'+c:''}</div>`).join('')}</div>
   <div class="pod">${HALL_OF_FAME.map(h=>`<div class="trophy ${h.current?'cur':''}"><div class="cup">🏆</div><div class="yr">${h.season}</div><div class="nm">${esc(h.champion)}</div>${h.current?'<div class="pl">Season in progress…</div>':'<div class="pl">Champion</div>'}${medal(h)}</div>`).join('')}</div>`;
}
function renderRules(state,pane){ pane.innerHTML='<div class="section-title">Competition Rules</div><div style="max-width:700px">'+RULES_HTML+'</div>'; }

/* =================================================================
   SHARE CARD  (whole league table → PNG)
   ================================================================= */
function loadImg(src){return new Promise(res=>{const i=new Image();i.onload=()=>res(i);i.onerror=()=>res(null);i.src=src;});}
function rr(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
async function buildShareCard(state,withLogo=true){
  try{ await Promise.all(['700 30px "Barlow Condensed"','400 30px "Bebas Neue"','400 20px "Barlow"'].map(f=>document.fonts.load(f))); }catch(e){}
  const rows=rankRows(state), prevPos=prevPositions(state,rows), sw=scoredWeeks(state), wk=sw.length?sw[sw.length-1].week:0;
  const W=1080, HEAD=270, ROWH=88, TOP=HEAD+70, H=TOP+rows.length*ROWH+130, S=2;
  const cv=document.createElement('canvas'); cv.width=W*S; cv.height=H*S; const c=cv.getContext('2d'); c.scale(S,S);
  const BEB='"Bebas Neue","Impact","Arial Narrow",sans-serif', BAR='"Barlow Condensed","Arial Narrow",sans-serif';
  let g=c.createLinearGradient(0,0,W,H); g.addColorStop(0,'#0a2e0a'); g.addColorStop(.5,'#0f4210'); g.addColorStop(1,'#08240a'); c.fillStyle=g; c.fillRect(0,0,W,H);
  c.fillStyle='rgba(0,0,0,.05)'; for(let x=0;x<W;x+=120) c.fillRect(x,0,60,H);
  // header
  let logo=null; if(withLogo){const el=document.querySelector('.header-logo'); if(el) logo=await loadImg(el.src);}
  if(logo){ c.save(); c.beginPath(); c.arc(130,125,82,0,Math.PI*2); c.clip(); c.drawImage(logo,48,43,164,164); c.restore(); c.strokeStyle='#f0c040'; c.lineWidth=4; c.beginPath(); c.arc(130,125,84,0,Math.PI*2); c.stroke(); }
  const hx=logo?250:60, maxW=W-hx-40; const fit=(txt,px,fam,wt)=>{let z=px;do{c.font=(wt||'')+' '+z+'px '+fam;z-=2;}while(c.measureText(txt).width>maxW&&z>16);};
  c.fillStyle='#fff'; c.textBaseline='alphabetic'; c.textAlign='left'; fit('SCOTTISH FITBAW LEAGUE',72,BEB); c.fillText('SCOTTISH FITBAW LEAGUE',hx,128);
  const sub='LEAGUE TABLE  ·  SEASON '+SEASON+(wk?'  ·  AFTER WEEK '+wk:''); c.fillStyle='#f0c040'; fit(sub,30,BAR,'700'); c.fillText(sub,hx+2,176);
  c.fillStyle='rgba(255,255,255,.6)'; c.font='500 24px '+BAR; c.fillText('Prediction league  ·  Est. 2021  ·  '+rows.length+' players',hx+2,214);
  // column headers
  const cx={pos:62,mv:104,name:170,form:412,P:600,H:660,D:716,A:772,CS:830,B:892};
  rr(c,30,HEAD,W-60,52,10); c.fillStyle='rgba(0,0,0,.5)'; c.fill();
  c.font='700 22px '+BAR; c.textAlign='center'; c.fillStyle='#f0c040'; c.fillText('#',cx.pos,HEAD+34);
  c.textAlign='left'; c.fillText('PLAYER',cx.name,HEAD+34); c.fillText('FORM',cx.form,HEAD+34);
  c.textAlign='center';
  [['P','P','#f0c040'],['H','H','#7dd87d'],['D','D','#e0c060'],['A','A','#80c4ff'],['CS','CS','#ff9f60'],['B','BON','#cc88ff']].forEach(([k,l,col])=>{c.fillStyle=col;c.fillText(l,cx[k],HEAD+34);});
  c.fillStyle='#f0c040'; c.textAlign='right'; c.fillText('PTS',W-52,HEAD+34);
  // rows
  rows.forEach((p,i)=>{
    const y=TOP+i*ROWH; const cy=y+ROWH/2;
    if(i%2===0){ c.fillStyle='rgba(255,255,255,.045)'; c.fillRect(30,y,W-60,ROWH); }
    if(p.pos===1){ c.fillStyle='rgba(240,192,64,.12)'; c.fillRect(30,y,W-60,ROWH); }
    const med=p.pos===1?'#f0c040':p.pos===2?'#c0c0c8':p.pos===3?'#cd7f32':'rgba(255,255,255,.14)';
    c.beginPath(); c.arc(cx.pos,cy,25,0,Math.PI*2); c.fillStyle=med; c.fill();
    c.fillStyle=p.pos<=2?'#000':'#fff'; c.font='700 30px '+BAR; c.textAlign='center'; c.textBaseline='middle'; c.fillText(String(p.pos),cx.pos,cy+1);
    const m=mvInfo(prevPos,p); c.textAlign='left'; c.font='700 24px '+BAR;
    c.fillStyle=m.cls==='up'?'#4eea6a':m.cls==='down'?'#ff6b6b':'rgba(255,255,255,.35)'; c.fillText(m.txt,cx.mv,cy+1);
    c.fillStyle='#fff'; c.font='700 40px '+BAR; c.fillText(p.player,cx.name,cy+1);
    const st=winnerStars(p.player); if(st){ const nw=c.measureText(p.player).width; c.fillStyle='#f0c040'; c.font='22px sans-serif'; c.fillText('★'.repeat(st),cx.name+nw+10,cy-3); }
    // form dots
    const f=formOf(state,p.player); while(f.length<5) f.unshift({cls:''});
    f.forEach((d,k)=>{ const dx=cx.form+11+k*30; c.beginPath(); c.arc(dx,cy,10,0,Math.PI*2);
      if(d.cls==='g'){c.fillStyle='#f0c040';c.fill();} else if(d.cls==='s'){c.fillStyle='#22aa22';c.fill();} else if(d.cls==='z'){c.fillStyle='rgba(255,255,255,.28)';c.fill();} else {c.strokeStyle='rgba(255,255,255,.3)';c.lineWidth=2;c.stroke();} });
    c.textAlign='center'; c.font='600 34px '+BAR;
    [['P',p.played||0,'#fff'],['H',p.home||0,'#7dd87d'],['D',p.draw||0,'#e0c060'],['A',p.away||0,'#80c4ff'],['CS',p.cs||0,'#ff9f60'],['B',p.bonus||0,'#cc88ff']].forEach(([k,v,col])=>{c.fillStyle=col;c.fillText(String(v),cx[k],cy+1);});
    c.textAlign='right'; c.fillStyle='#f0c040'; c.font='64px '+BEB; c.fillText(String(p.points),W-52,cy+3);
  });
  // footer
  const fy=TOP+rows.length*ROWH+34; c.textBaseline='alphabetic'; c.textAlign='left'; c.font='600 22px '+BAR;
  c.fillStyle='rgba(255,255,255,.6)'; c.fillText('H = home win 1pt   D = draw 3pts   A = away win 2pts   CS = correct score 5pts   BON = bonus',50,fy);
  [['#f0c040','5+ pts'],['#22aa22','scored'],['rgba(255,255,255,.28)','blank']].forEach(([col,l],k)=>{ const x=50+k*130; c.beginPath(); c.arc(x+8,fy+36,8,0,Math.PI*2); c.fillStyle=col; c.fill(); c.fillStyle='rgba(255,255,255,.6)'; c.fillText(l,x+24,fy+43); });
  c.textAlign='right'; c.fillStyle='rgba(255,255,255,.45)';
  const upd=state.updated?new Date(state.updated):new Date(); c.fillText('Updated '+upd.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}),W-50,fy+43);
  return cv;
}
function cardText(state){
  const rows=rankRows(state), sw=scoredWeeks(state), wk=sw.length?sw[sw.length-1].week:0;
  return '*Scottish Fitbaw League '+SEASON+'*'+(wk?' — after Week '+wk:'')+'\n'+rows.map(p=>p.pos+'. '+p.player+' — '+p.points+' pts').join('\n');
}
function ensureModal(){
  let m=document.getElementById('fb-modal'); if(m) return m;
  m=document.createElement('div'); m.id='fb-modal'; m.className='modal';
  m.innerHTML='<div class="modal-box"><img id="fb-card-img" alt="League table"><div class="modal-actions"><button class="btn btn-primary" id="fb-share">📲 Share</button><button class="btn btn-gold" id="fb-dl">⬇ Download</button><button class="btn" id="fb-wa" style="background:#25d366;color:#04230f">WhatsApp text</button><button class="btn" id="fb-close" style="background:rgba(255,255,255,.12);color:#fff">Close</button></div><div class="caption" id="fb-msg" style="color:rgba(255,255,255,.6);margin-top:10px"></div></div>';
  document.body.appendChild(m); m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open');}); m.querySelector('#fb-close').onclick=()=>m.classList.remove('open'); return m;
}
async function openShare(state){
  const m=ensureModal(), img=m.querySelector('#fb-card-img'), msg=m.querySelector('#fb-msg');
  m.classList.add('open'); msg.textContent='Building your league table image…'; img.removeAttribute('src');
  let cv=await buildShareCard(state,true), blob;
  const toBlob=c=>new Promise(r=>{try{c.toBlob(b=>r(b),'image/png');}catch(e){r(null);}});
  blob=await toBlob(cv); if(!blob){ cv=await buildShareCard(state,false); blob=await toBlob(cv); }
  const sw=scoredWeeks(state), wk=sw.length?sw[sw.length-1].week:0, fname='fitbaw-league'+(wk?'-week-'+wk:'')+'.png';
  const url=URL.createObjectURL(blob); img.src=url; msg.textContent='Tap Share → WhatsApp, or download the image and post it in the group.';
  const file=new File([blob],fname,{type:'image/png'});
  const canShare=navigator.canShare&&navigator.canShare({files:[file]});
  const sh=m.querySelector('#fb-share'); sh.style.display=canShare?'':'none';
  sh.onclick=async()=>{try{await navigator.share({files:[file],title:'Scottish Fitbaw League',text:cardText(state).split('\n')[0].replace(/\*/g,'')});}catch(e){}};
  m.querySelector('#fb-dl').onclick=()=>{const a=document.createElement('a');a.href=url;a.download=fname;document.body.appendChild(a);a.click();a.remove();};
  m.querySelector('#fb-wa').onclick=()=>window.open('https://wa.me/?text='+encodeURIComponent(cardText(state)),'_blank');
}

/* =================================================================
   MOUNT / THEME
   ================================================================= */
const TAB_DEFS=[['league','🏆 League Table'],['selections','📋 Weekly Selections'],['stats','📊 Stats & Awards'],['profiles','👤 Players'],['h2h','⚔️ Head to Head'],['bonus','⭐ Season Predictions'],['teams','⚽ Teams Picked'],['winners','🥇 Hall of Fame'],['rules','📖 Rules']];
const RENDER={league:renderLeague,selections:renderSelections,stats:renderStats,profiles:renderProfiles,h2h:renderH2H,bonus:renderBonus,teams:renderTeams,winners:renderWinners,rules:renderRules};
function mount(root,state,opts){
  opts=opts||{}; root.__state=state;
  const keep=root.__tab||'league';
  if(!root.__built){
    root.innerHTML='<div class="demo-flag" data-demo style="display:none">EXAMPLE DATA — this is a preview, not the live league</div><div class="tabs" data-tabs>'+TAB_DEFS.map(t=>`<button class="tab-btn" data-tab="${t[0]}">${t[1]}</button>`).join('')+'</div>'+TAB_DEFS.map(t=>`<div class="tab-content" data-pane="${t[0]}"></div>`).join('');
    root.__built=true;
    root.querySelector('[data-tabs]').addEventListener('click',e=>{const b=e.target.closest('.tab-btn');if(b)show(root,b.dataset.tab);});
    root.addEventListener('click',e=>{if(e.target.closest('[data-share]'))openShare(root.__state);});
  }
  root.querySelector('[data-demo]').style.display=state.demo?'block':'none';
  show(root,keep);
}
function show(root,tab){
  root.__tab=tab;
  root.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  root.querySelectorAll('.tab-content').forEach(p=>p.classList.toggle('active',p.dataset.pane===tab));
  const pane=root.querySelector(`[data-pane="${tab}"]`); RENDER[tab](root.__state,pane,root);
}
function setUpdated(el,state){
  if(!el) return; if(!state.updated){el.textContent='';return;}
  const d=new Date(state.updated); el.textContent='Last updated '+d.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})+' · '+d.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
}
function initTheme(btn,root){
  let t='dark'; try{t=localStorage.getItem('fb_theme')||'dark';}catch(e){}
  const apply=()=>{document.documentElement.dataset.theme=t; if(btn)btn.textContent=t==='dark'?'☀ Light':'🌙 Dark';};
  apply(); if(btn) btn.onclick=()=>{t=t==='dark'?'light':'dark'; try{localStorage.setItem('fb_theme',t);}catch(e){} apply(); if(root&&root.__state) show(root,root.__tab||'league');};
}
function loadState(url,cb){
  fetch(url+(url.includes('?')?'&':'?')+'t='+Date.now()).then(r=>r.ok?r.json():null).then(d=>cb(d||JSON.parse(JSON.stringify(FALLBACK)),!!d)).catch(()=>cb(JSON.parse(JSON.stringify(FALLBACK)),false));
}
window.Fitbaw={mount,show,setUpdated,initTheme,loadState,openShare};
