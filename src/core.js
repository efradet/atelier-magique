export function floodFill(data,w,h,x,y,hex) {
 x=Math.floor(x);y=Math.floor(y);
 if(x<0||y<0||x>=w||y>=h)return false;
 const start=y*w+x, p=start*4, target=[...data.slice(p,p+4)];
 const color=[parseInt(hex.slice(1,3),16),parseInt(hex.slice(3,5),16),parseInt(hex.slice(5,7),16),255];
 if(target.every((v,i)=>Math.abs(v-color[i])<4))return false;
 const seen=new Uint8Array(w*h), queue=new Int32Array(w*h);let head=0,tail=0;queue[tail++]=start;seen[start]=1;
 const matches=(i)=>target.every((v,c)=>Math.abs(data[i*4+c]-v)<=45);
 while(head<tail){const i=queue[head++];if(!matches(i))continue;data.set(color,i*4);
  const xx=i%w;const neighbors=[];if(xx>0)neighbors.push(i-1);if(xx<w-1)neighbors.push(i+1);if(i>=w)neighbors.push(i-w);if(i<w*(h-1))neighbors.push(i+w);
  for(const n of neighbors)if(!seen[n]){seen[n]=1;queue[tail++]=n;}
 }return true;
}
export function pushHistory(h,value){return {past:[...h.past,h.present].slice(-25),present:value,future:[]};}
export function undo(h){if(!h.past.length)return h;return {past:h.past.slice(0,-1),present:h.past.at(-1),future:[h.present,...h.future]};}
export function redo(h){if(!h.future.length)return h;return {past:[...h.past,h.present],present:h.future[0],future:h.future.slice(1)};}
export function validSave(s){return !!(s&&s.version===1&&typeof s.title==='string'&&s.title.length<=100&&typeof s.raster==='string'&&s.raster.startsWith('data:image/png;base64,')&&s.raster.length<12000000&&Array.isArray(s.stickers)&&s.stickers.length<=250&&s.stickers.every(o=>typeof o.kind==='string'&&Number.isFinite(o.x)&&Number.isFinite(o.y)&&Number.isFinite(o.size)&&o.size>0&&o.size<=320)&&Array.isArray(s.effects)&&s.effects.length<=2000&&s.effects.every(o=>['sparkle','star','heart'].includes(o.kind)&&Number.isFinite(o.x)&&Number.isFinite(o.y)&&Number.isFinite(o.size)&&Number.isFinite(o.phase)&&/^#[0-9a-f]{6}$/i.test(o.color)) );}
