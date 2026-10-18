import test from 'node:test';
import assert from 'node:assert/strict';
import { floodFill, pushHistory, undo, redo, validSave } from '../src/core.js';
test('fill stays inside a black border and does not reach a disconnected white region',()=>{
 const data=new Uint8ClampedArray(5*3*4).fill(255);
 for(let y=0;y<3;y++) data.set([0,0,0,255],(y*5+2)*4);
 assert.equal(floodFill(data,5,3,0,1,'#ff0000'),true);
 assert.deepEqual([...data.slice(0,4)],[255,0,0,255]);
 assert.deepEqual([...data.slice(12,16)],[255,255,255,255]);
 assert.deepEqual([...data.slice(8,12)],[0,0,0,255]);
 assert.equal(floodFill(data,5,3,0,1,'#ff0000'),false);
 assert.equal(floodFill(data,5,3,-1,0,'#00ff00'),false);
});
test('undo restores the previous drawing and branching discards redo',()=>{
 let h={past:[],present:'A',future:[]};
 h=pushHistory(h,'B');h=pushHistory(h,'C');h=undo(h);
 assert.equal(h.present,'B');assert.equal(redo(h).present,'C');
 h=pushHistory(h,'D');assert.deepEqual(h.future,[]);assert.equal(undo(h).present,'B');
 assert.equal(undo({past:[],present:'A',future:[]}).present,'A');
});
test('saved drawing validation rejects malformed data and accepts a usable canvas snapshot',()=>{
 assert.equal(validSave({version:1,raster:'data:image/png;base64,AAAA',stickers:[],effects:[],title:'Mon dessin'}),true);
 assert.equal(validSave({version:1,raster:'javascript:bad',stickers:[],effects:[]}),false);
 assert.equal(validSave({version:1,raster:'data:image/png;base64,AAAA',stickers:[{x:NaN}],effects:[]}),false);
 assert.equal(validSave(null),false);
});
