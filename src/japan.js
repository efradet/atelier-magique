// Illustrations originales, volontairement simples pour les petites mains.
const svg = body => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><g stroke="#71594f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;
export const JAPAN_STICKERS = [
  {id:'nara-deer',name:'Daim de Nara',svg:svg(`<path d="M43 30L35 10m2 9-10-4M77 30l8-20m-3 10 11-5" fill="none"/><path d="M35 42Q7 46 11 23q23-2 30 14M79 37q11-17 30-14 4 23-24 19" fill="#cda078"/><ellipse cx="60" cy="64" rx="33" ry="39" fill="#d9ad80"/><path d="M37 80q23-25 46 0-3 24-23 24T37 80" fill="#fff0d5"/><ellipse cx="60" cy="79" rx="7" ry="5" fill="#73564d"/><path d="M60 84v5m-6 0q6 7 12 0" fill="none"/><g fill="#544840" stroke="none"><ellipse cx="44" cy="62" rx="3" ry="5"/><ellipse cx="76" cy="62" rx="3" ry="5"/></g><g fill="#fff3da" stroke="none"><ellipse cx="48" cy="40" rx="4" ry="6"/><ellipse cx="70" cy="40" rx="4" ry="6"/><ellipse cx="60" cy="49" rx="3" ry="4"/></g>`)},
  {id:'japan-temple',name:'Temple japonais',svg:svg(`<path d="M27 57h66v45H27Z" fill="#e7b394"/><path d="M21 100h78v10H21Z" fill="#d5c6b2"/><path d="M49 74h22v26H49Z" fill="#b38e7e"/><path d="M34 70h8v16h-8ZM78 70h8v16h-8Z" fill="#fff0cd"/><path d="M37 34h46v23H37Z" fill="#e7b394"/><path d="M17 56q18-5 28-21h30q10 16 28 21l-4 7H21Z" fill="#91b8aa"/><path d="M25 31q22-3 35-20 13 17 35 20l-4 7H29Z" fill="#91b8aa"/><path d="M60 8v8M34 63v36m52-36v36" fill="none"/>`)},
  {id:'torii',name:'Torii',svg:svg(`<path d="M27 33h12v76H25ZM81 33h12l2 76H81Z" fill="#e99b8e"/><path d="M14 20q46 13 92 0l-2 12q-44 12-88 0Z" fill="#d97973"/><path d="M18 46h84v10H18Z" fill="#eb9e8c"/><path d="M55 34h10v14H55Z" fill="#e4be74"/><path d="M22 108h20m36 0h20" stroke="#ad8b75"/>`)},
  {id:'sakura',name:'Fleur de sakura',svg:svg(`<g fill="#f4b9d0" stroke="#ce8cab">${Array.from({length:5},(_,i)=>`<path d="M60 59Q31 44 39 20L52 24 60 12Q86 28 60 59Z" transform="rotate(${i*72} 60 59)"/>`).join('')}</g><circle cx="60" cy="59" r="10" fill="#ffe3a2" stroke="#dcb669"/><g stroke="#dfad70"><path d="M60 59v-17m0 17 16-5m-16 5 10 14m-10-14-10 14m10-14-16-5"/></g>`)},
  {id:'fuji',name:'Mont Fuji',svg:svg(`<circle cx="89" cy="25" r="14" fill="#efb7b0" stroke="none"/><path d="M9 98L50 27h20l41 71Z" fill="#a5bcd8" stroke="#7f91b3"/><path d="M50 27h20l14 25-14-6-10 10-10-10-14 6Z" fill="#fffaf2" stroke="#7f91b3"/><path d="M8 100q26-8 52 0t52 0" fill="none" stroke="#a0c8b6" stroke-width="7"/>`)},
  {id:'lantern',name:'Lanterne',svg:svg(`<path d="M60 5v10m0 85v12" fill="none"/><rect x="43" y="13" width="34" height="9" rx="3" fill="#e6c693"/><ellipse cx="60" cy="60" rx="34" ry="39" fill="#f0b0aa" stroke="#bc837e"/><path d="M32 40h56M27 55h66M27 70h66M34 85h52" stroke="#d68f8c"/><path d="M52 23q-13 37 0 74m16-74q13 37 0 74" fill="none" stroke="#d68f8c"/><rect x="43" y="97" width="34" height="8" rx="3" fill="#e6c693"/>`)},
  {id:'koi',name:'Carpe koï',svg:svg(`<path d="M82 61l26-23-4 24 4 24Z" fill="#f1bd9c"/><path d="M47 39l13-16 13 20M48 82l14 14 12-18" fill="#dca493"/><ellipse cx="51" cy="62" rx="38" ry="25" fill="#fff5df"/><path d="M38 39q-5 25 12 27 18 0 9 20 27-5 27-24-2-20-28-24Z" fill="#ed9e86" stroke="none"/><circle cx="26" cy="58" r="3" fill="#68584e"/><path d="M13 66l-6 3m5-8-6-3" fill="none"/><path d="M55 63l12 11-15 3" fill="#f7d6bb"/>`)},
  {id:'onigiri',name:'Onigiri',svg:svg(`<path d="M49 19q11-12 22 0l35 62q12 22-12 23H26Q2 103 14 81Z" fill="#fff9e9" stroke="#c9b9a0"/><rect x="45" y="72" width="30" height="32" rx="3" fill="#7a9182" stroke="#637e70"/><circle cx="39" cy="61" r="3" fill="#65574f"/><circle cx="81" cy="61" r="3" fill="#65574f"/><path d="M55 63q5 6 10 0" fill="none"/><path d="M31 72h9m40 0h9" stroke="#efb1bc" stroke-width="5"/>`)}
].map(s=>({...s,category:'Japon'}));

export const JAPAN_TEMPLATES = [
  {id:'nara',name:'Les daims de Nara',emoji:'🦌',title:'Les daims et le temple de Nara'},
  {id:'fuji-sakura',name:'Le mont Fuji et les sakura',emoji:'🌸',title:'Mon printemps au Japon'},
  {id:'japan-garden',name:'Le jardin japonais',emoji:'⛩️',title:'Mon jardin japonais'}
];

export function drawJapanTemplate(ctx,type){
  if(!JAPAN_TEMPLATES.some(t=>t.id===type))return;
  const shape=d=>{const p=new Path2D(d);ctx.fill(p);ctx.stroke(p);};
  const line=d=>ctx.stroke(new Path2D(d));
  const ellipse=(x,y,rx,ry)=>{ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill();ctx.stroke();};
  const at=(x,y,s,draw)=>{ctx.save();ctx.translate(x,y);ctx.scale(s,s);draw();ctx.restore();};
  const cloud=(x,y,s)=>at(x,y,s,()=>shape('M0 30Q-10 5 17 5Q28-22 47 0Q74-10 78 15Q100 37 67 40H16Q-3 42 0 30Z'));
  const blossom=(x,y,s)=>at(x,y,s,()=>{for(let i=0;i<5;i++){ctx.save();ctx.rotate(i*Math.PI*2/5);shape('M0 0Q-27-12-16-35L-4-31 3-42Q28-20 0 0Z');ctx.restore();}ellipse(0,0,7,7);});
  const temple=()=>{
    shape('M25 275H365V295H25Z');shape('M45 145H345V275H45Z');
    shape('M77 55H313V145H77Z');
    shape('M20 140Q80 130 108 84H282Q310 130 370 140L355 158H35Z');
    shape('M45 54Q140 43 195 0Q250 43 345 54L329 72H61Z');
    shape('M161 196H229V275H161Z');line('M195 198V274');
    for(const x of [70,265]){shape(`M${x} 185h50v54h-50Z`);line(`M${x+25} 185v54M${x} 211h50`);}
    for(const x of [48,133,252,338])shape(`M${x} 159h9v116h-9Z`);
    shape('M173 85h44v37h-44Z');line('M195 87v33');
    line('M60 280H330M60 289H330');
  };
  const deer=()=>{
    shape('M42 153L37 224H58L68 163M129 158L140 224H161L151 147');
    shape('M151 118Q184 102 178 130L153 141Z');
    ellipse(98,137,70,43);
    shape('M30 112L20 70Q14 35 52 32Q92 32 89 75L73 123Q55 140 30 112Z');
    shape('M27 47Q-15 41-10 13Q22 10 38 39Z');
    shape('M77 44Q113 11 130 24Q124 56 85 59Z');
    line('M44 34L39 5 26-12M39 7L51-8M69 34L77 1 92-10M77 1L68-12');
    ellipse(52,91,25,18);ellipse(49,84,6,4);
    ellipse(37,65,3,5);ellipse(69,65,3,5);line('M48 91v6m-5 0q5 7 12 0');
    for(const [x,y] of [[95,123],[119,114],[140,132],[112,144],[85,144]])ellipse(x,y,5,7);
    line('M38 214h20M139 214h20');
  };
  const torii=()=>{
    shape('M38 35H57L51 245H30ZM203 35H222L230 245H209Z');
    shape('M5 0Q130 28 255 0L250 25Q130 49 10 25Z');
    shape('M20 65H240V82H20Z');shape('M119 39H141V66H119Z');
    shape('M24 245H60V255H24ZM200 245H237V255H200Z');
  };
  ctx.save();ctx.strokeStyle='#65556e';ctx.lineWidth=4;ctx.fillStyle='white';
  if(type==='nara'){
    cloud(120,77,1.1);cloud(366,47,.8);ellipse(817,88,33,33);
    line('M24 443Q140 411 270 437M390 448Q640 411 930 452');
    at(493,135,1.06,temple);
    at(158,250,1.35,deer);at(487,420,.65,deer);
    shape('M778 536q-2-19 14-23 13 5 10 22 17-6 23 8-12 15-29 8-12 15-26 1Z');
    for(const x of [71,718,868])line(`M${x} 563l-6-16m6 16 8-21m-8 21 19-11`);
    line('M188 580Q410 604 661 578');
  }
  if(type==='fuji-sakura'){
    ellipse(714,119,48,48);cloud(135,97,1);cloud(414,65,.85);
    shape('M187 446L429 145H513L754 446Z');
    shape('M429 145H513L588 239 523 222 475 268 427 223 354 239Z');
    shape('M28 450Q240 424 475 450T932 450V611H28Z');
    line('M239 490q81-16 161 0M517 532q96-17 188 0M94 570q86-17 173 0');
    shape('M776 472L787 262 724 198 735 181 802 233 863 144 882 156 816 267 804 472Z');
    for(const [x,y,s] of [[700,184,1.2],[779,155,1.35],[862,127,1.2],[894,210,1.15],[820,233,1.1]])blossom(x,y,s);
    blossom(147,530,.65);blossom(787,565,.6);
  }
  if(type==='japan-garden'){
    cloud(75,65,1);cloud(754,68,1);ellipse(680,115,35,35);
    at(337,133,1.05,torii);
    shape('M120 473Q129 414 325 430Q485 394 704 439Q875 477 805 557Q677 619 442 576Q204 609 120 535Z');
    shape('M337 476Q475 374 617 476L617 501Q475 408 337 501Z');
    line('M341 473V438Q477 335 613 438V473M385 409V445M430 387V421M478 380V414M525 388V421M570 410V447');
    ellipse(234,492,43,23);shape('M274 493l28-24-3 28 3 23Z');ellipse(213,487,3,3);line('M235 471q-13 21 8 40');
    ellipse(688,535,40,21);shape('M649 535l-27-23 4 26-4 18Z');ellipse(708,530,3,3);line('M681 516q14 20-7 38');
    shape('M123 399h85v17h-85ZM145 337h40v62h-40ZM126 327l39-28 39 28Z');shape('M139 327h52v40h-52Z');ellipse(165,346,7,10);
    for(const [x,y,s] of [[760,281,1],[830,327,.8],[104,211,.85]])blossom(x,y,s);
  }
  ctx.restore();
}
