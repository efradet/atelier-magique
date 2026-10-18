import {floodFill,pushHistory,undo,redo} from './core';
import {drawSticker,drawEffects,drawTemplate} from './assets';
export const WIDTH=960,HEIGHT=640;
export class DrawingEngine {
 constructor(canvas,onChange){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.base=document.createElement('canvas');this.base.width=WIDTH;this.base.height=HEIGHT;this.b=this.base.getContext('2d',{willReadFrequently:true});this.b.fillStyle='white';this.b.fillRect(0,0,WIDTH,HEIGHT);this.hasArt=false;this.stickers=[];this.effects=[];this.title='Mon petit chef-d’œuvre';this.selected=null;this.onChange=onChange;this.tool='brush';this.color='#a78bda';this.size=10;this.play=true;this.dirty=true;this.history={past:[],present:this.snapshot(),future:[]};this.tick=this.tick.bind(this);this.raf=requestAnimationFrame(this.tick);}
 snapshot(){return {version:1,hasArt:this.hasArt,title:this.title,raster:this.base.toDataURL('image/png'),stickers:structuredClone(this.stickers),effects:structuredClone(this.effects)};}
 commit(){const snap=this.snapshot();this.history=pushHistory(this.history,snap);this.dirty=true;this.onChange(snap,this);}
 async restore(s,notify=true){this.restoring=true;try{const img=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=()=>rej(new Error('Dessin illisible'));i.src=s.raster;});this.b.clearRect(0,0,WIDTH,HEIGHT);this.b.drawImage(img,0,0,WIDTH,HEIGHT);this.stickers=structuredClone(s.stickers);this.effects=structuredClone(s.effects);this.title=s.title;this.hasArt=s.hasArt??true;this.selected=null;this.dirty=true;if(notify)this.onChange(s,this);}finally{this.restoring=false;}}
 async historyStep(direction){if(this.restoring)return;const next=direction==='undo'?undo(this.history):redo(this.history);if(next===this.history)return;await this.restore(next.present,false);this.history=next;this.onChange(next.present,this);}
 tick(t){if(this.dirty||(this.play&&this.effects.length)){this.render(this.ctx,this.play?t:0,true);this.dirty=false;}this.raf=requestAnimationFrame(this.tick);}
 dispose(){cancelAnimationFrame(this.raf);}
 render(ctx,t=0,selection=false){ctx.clearRect(0,0,WIDTH,HEIGHT);ctx.drawImage(this.base,0,0);this.stickers.forEach(s=>drawSticker(ctx,s));drawEffects(ctx,this.effects,t);if(selection&&this.selected){const s=this.stickers.find(s=>s.id===this.selected);if(s){ctx.save();ctx.strokeStyle='#9168ce';ctx.lineWidth=2;ctx.setLineDash([7,5]);ctx.strokeRect(s.x-s.size/2-5,s.y-s.size/2-5,s.size+10,s.size+10);ctx.restore();}}}
 position(e){const r=this.canvas.getBoundingClientRect();return {x:Math.max(0,Math.min(WIDTH-1,(e.clientX-r.left)*WIDTH/r.width)),y:Math.max(0,Math.min(HEIGHT-1,(e.clientY-r.top)*HEIGHT/r.height))};}
 down(e){if(this.restoring||this.gesture)return;const p=this.position(e);this.canvas.setPointerCapture(e.pointerId);this.pointer=e.pointerId;
  if(this.tool==='move'){const hit=[...this.stickers].reverse().find(s=>Math.abs(s.x-p.x)<=s.size/2&&Math.abs(s.y-p.y)<=s.size/2);this.selected=hit?.id??null;this.gesture=hit?{type:'move',id:hit.id,offset:{x:p.x-hit.x,y:p.y-hit.y},changed:false}:null;this.dirty=true;this.onChange(null,this);return;}
  this.selected=null;if(this.tool==='fill'){const data=this.b.getImageData(0,0,WIDTH,HEIGHT);if(floodFill(data.data,WIDTH,HEIGHT,p.x,p.y,this.color)){this.b.putImageData(data,0,0);this.hasArt=true;this.commit();}return;}
  this.gesture={type:this.tool,last:p,changed:true};if(['sparkle','star','heart'].includes(this.tool)){this.addEffect(p);}else{this.stroke(p,p);}this.dirty=true;
 }
 move(e){if(!this.gesture||e.pointerId!==this.pointer)return;const p=this.position(e),g=this.gesture;
  if(g.type==='move'){const s=this.stickers.find(s=>s.id===g.id);s.x=Math.max(s.size/2,Math.min(WIDTH-s.size/2,p.x-g.offset.x));s.y=Math.max(s.size/2,Math.min(HEIGHT-s.size/2,p.y-g.offset.y));g.changed=true;}
  else if(['sparkle','star','heart'].includes(g.type)){if(Math.hypot(p.x-g.last.x,p.y-g.last.y)<18)return;this.addEffect(p);g.last=p;}
  else{this.stroke(g.last,p);g.last=p;}this.dirty=true;
 }
 up(e){if(e.pointerId!==this.pointer)return;const g=this.gesture;this.gesture=null;if(this.canvas.hasPointerCapture(e.pointerId))this.canvas.releasePointerCapture(e.pointerId);if(g?.changed)this.commit();}
 stroke(a,b){this.hasArt=true;this.b.strokeStyle=this.tool==='eraser'?'#ffffff':this.color;this.b.fillStyle=this.b.strokeStyle;this.b.lineWidth=this.size*(this.tool==='eraser'?2:1);this.b.lineCap='round';this.b.lineJoin='round';if(a.x===b.x&&a.y===b.y){this.b.beginPath();this.b.arc(a.x,a.y,this.b.lineWidth/2,0,Math.PI*2);this.b.fill();}else{this.b.beginPath();this.b.moveTo(a.x,a.y);this.b.lineTo(b.x,b.y);this.b.stroke();}}
 addEffect(p){if(this.effects.length>=2000)return;this.effects.push({x:p.x,y:p.y,kind:this.tool,size:this.size*.7+5,color:this.color,phase:Math.random()*Math.PI*2});}
 addSticker(kind){if(this.stickers.length>=250)return;const count=this.stickers.length;const s={id:crypto.randomUUID(),kind,x:480+(count%5-2)*28,y:320+(count%3-1)*22,size:125};this.stickers.push(s);this.selected=s.id;this.tool='move';this.commit();}
 resize(size){const s=this.stickers.find(s=>s.id===this.selected);if(s){s.size=size;s.x=Math.max(size/2,Math.min(WIDTH-size/2,s.x));s.y=Math.max(size/2,Math.min(HEIGHT-size/2,s.y));this.dirty=true;}}
 deleteSelected(){this.stickers=this.stickers.filter(s=>s.id!==this.selected);this.selected=null;this.commit();}
 clearEffects(){this.effects=[];this.commit();}
 fresh(template){this.hasArt=!!template;this.stickers=[];this.effects=[];this.selected=null;this.title=template?({cat:'Mon chat à colorier',garden:'Mon jardin enchanté',rainbow:'Mon arc-en-ciel'})[template]:'Mon petit chef-d’œuvre';drawTemplate(this.b,template);this.commit();}
}
