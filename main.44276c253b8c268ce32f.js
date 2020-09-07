!function(t){function e(e){for(var a,n,c=e[0],r=e[1],l=e[2],u=0,h=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&h.push(s[n][0]),s[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);for(d&&d(e);h.length;)h.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,c=1;c<i.length;c++){var r=i[c];0!==s[r]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=i[0]))}return t}var a={},s={0:0},o=[];function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var c=window.webpackJsonp=window.webpackJsonp||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;o.push([121,1]),i()}({121:function(t,e,i){i(122),t.exports=i(321)},308:function(t,e,i){},309:function(t,e,i){var a=i(310),s=i(311),o=i(312),n=i(313),c=i(314),r=i(315),l=i(316),d=i(317),u=i(318),h=i(319),v=i(320),f='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"/> <meta name="viewport" content="width=device-width,initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="ie=edge"/> <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/> <title>Paint</title> </head> <body> <div class="toolbox left"> <div class="group commands"> <div class="item" data-command="undo" title="Undo"> <img src="'+a(s)+'"/> </div> <div class="item" data-command="download" title="Download"> <img src="'+a(o)+'"/> </div> </div> <div class="group tools"> <div class="item active" data-tool="line" title="Line Tool"> <img src="'+a(n)+'"/> </div> <div class="item" data-tool="rectangle" title="Rectangle Tool"> <img src="'+a(c)+'"/> </div> <div class="item" data-tool="circle" title="Circle Tool"> <img src="'+a(r)+'"/> </div> <div class="item" data-tool="triangle" title="Triangle Tool"> <img src="'+a(l)+'"/> </div> </div> <div class="group tools"> <div class="item" data-tool="pencil" title="Pencil Tool"> <img src="'+a(d)+'"/> </div> <div class="item" data-tool="brush" title="Brush Tool"> <img src="'+a(u)+'"/> </div> <div class="item" data-tool="paint-bucket" title="Paint Bucket Tool"> <img src="'+a(h)+'"/> </div> <div class="item" data-tool="eraser" title="Eraser Tool"> <img src="'+a(v)+'"/> </div> </div> <div class="group stroks pencil"> <div class="item active" data-line-width="1" title="1 Pixel"> <div class="stroke" style="width:1px;height:1px"></div> </div> <div class="item" data-line-width="2" title="2 Pixels"> <div class="stroke" style="width:2px;height:2px"></div> </div> <div class="item" data-line-width="3" title="3 Pixels"> <div class="stroke" style="width:3px;height:3px"></div> </div> <div class="item" data-line-width="4" title="4 Pixels"> <div class="stroke" style="width:4px;height:4px"></div> </div> <div class="item" data-line-width="5" title="5 Pixels"> <div class="stroke" style="width:5px;height:5px"></div> </div> </div> <div class="group stroks brush" style="display:none"> <div class="item active" data-brush-size="4" title="4 Pixels"> <div class="stroke" style="width:4px;height:4px"></div> </div> <div class="item" data-brush-size="8" title="8 Pixels"> <div class="stroke" style="width:8px;height:8px"></div> </div> <div class="item" data-brush-size="12" title="12 Pixels"> <div class="stroke" style="width:12px;height:12px"></div> </div> <div class="item" data-brush-size="16" title="16 Pixels"> <div class="stroke" style="width:16px;height:16px"></div> </div> <div class="item" data-brush-size="20" title="20 Pixels"> <div class="stroke" style="width:20px;height:20px"></div> </div> </div> </div> <canvas id="canvas" width="640" height="480"></canvas> <div class="toolbox right"> <div class="group colors"> <div class="item" data-color="#ffffff"> <div class="swatch" style="background-color:#fff"></div> </div> <div class="item active" data-color="#000000"> <div class="swatch" style="background-color:#000"></div> </div> <div class="item" data-color="#ff0000"> <div class="swatch" style="background-color:red"></div> </div> <div class="item" data-color="#00ff00"> <div class="swatch" style="background-color:#0f0"></div> </div> <div class="item" data-color="#0000ff"> <div class="swatch" style="background-color:#00f"></div> </div> <div class="item" data-color="#00ffff"> <div class="swatch" style="background-color:#0ff"></div> </div> <div class="item" data-color="#ff00ff"> <div class="swatch" style="background-color:#f0f"></div> </div> <div class="item" data-color="#ffff00"> <div class="swatch" style="background-color:#ff0"></div> </div> <div class="item" data-color="#c46f0f"> <div class="swatch" style="background-color:#c46f0f"></div> </div> <div class="item" data-color="#fd8f27"> <div class="swatch" style="background-color:#fd8f27"></div> </div> <div class="item" data-color="#0099ff"> <div class="swatch" style="background-color:#09f"></div> </div> <div class="item" data-color="#ff009d"> <div class="swatch" style="background-color:#ff009d"></div> </div> </div> </div> </body> </html> ';t.exports=f},311:function(t,e,i){"use strict";i.r(e),e.default=i.p+"0fdcaa487a2448b3aeafb1a496298b3c.png"},312:function(t,e,i){"use strict";i.r(e),e.default=i.p+"9454d4febfc4669a4ca2387b458fb949.png"},313:function(t,e,i){"use strict";i.r(e),e.default=i.p+"c3936bf67bfb951250738b798b4efb6e.png"},314:function(t,e,i){"use strict";i.r(e),e.default=i.p+"bb8c2fc3f4ae1280338c7485c100549f.png"},315:function(t,e,i){"use strict";i.r(e),e.default=i.p+"3fa6e36a7853ff551f15f610f967ea84.png"},316:function(t,e,i){"use strict";i.r(e),e.default=i.p+"5cb0ecad9ac5127a1056729322cbe1d5.png"},317:function(t,e,i){"use strict";i.r(e),e.default=i.p+"dc31d7b2dac02ab8a58119c6bdaa0bbb.png"},318:function(t,e,i){"use strict";i.r(e),e.default=i.p+"7fde82078da6137089ea4aaf0b21dc2b.png"},319:function(t,e,i){"use strict";i.r(e),e.default=i.p+"868a90133bf07cd6ee94d85b3b5fc671.png"},320:function(t,e,i){"use strict";i.r(e),e.default=i.p+"737cadab5b6406428ab35bc508a791ae.png"},321:function(t,e,i){"use strict";function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.r(e);var o=function(){var t,e,i;function o(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),s(this,"_x",void 0),s(this,"_y",void 0),this.x=t,this.y=e}return t=o,(e=[{key:"x",get:function(){return this._x},set:function(t){this._x=t}},{key:"y",get:function(){return this._y},set:function(t){this._y=t}}])&&a(t.prototype,e),i&&a(t,i),o}();function n(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i,a;return e=t,a=[{key:"getMouseCoordsOnCanvas",value:function(t,e){var i=t.getBoundingClientRect(),a=e.clientX-i.left,s=e.clientY-i.top;return new o(a,s)}},{key:"calcHypotenuse",value:function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}},{key:"hexToRgba",value:function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),255]:null}},{key:"getPixel",value:function(t,e,i){var a=t.getImageData(0,0,t.canvas.width,t.canvas.height);if(e<0||i<0||e>=a.width||i>=a.height)return[-1,-1,-1,-1];var s=4*(i*a.width+e);return[a.data[s+0],a.data[s+1],a.data[s+2],a.data[s+3]]}},{key:"setPixel",value:function(t,e,i,a){var s=t.getImageData(0,0,t.canvas.width,t.canvas.height),o=4*(i*s.width+e);s.data[o+0]=a[0],s.data[o+1]=a[1],s.data[o+2]=a[2],s.data[o+3]=a[0],t.putImageData(s,0,0)}},{key:"colorsMatch",value:function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}}],(i=null)&&n(e.prototype,i),a&&n(e,a),t}();function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)};function d(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}r(l,"TOOL_LINE","line"),r(l,"TOOL_RECTANGLE","rectangle"),r(l,"TOOL_CIRCLE","circle"),r(l,"TOOL_TRIANGLE","triangle"),r(l,"TOOL_PAINT_BUCKET","paint-bucket"),r(l,"TOOL_PENCIL","pencil"),r(l,"TOOL_BRUSH","brush"),r(l,"TOOL_ERASER","eraser");var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"canvas",void 0),u(this,"context",void 0),u(this,"undoStack",void 0),u(this,"undoLimit",void 0),u(this,"tool",void 0),u(this,"color",void 0),u(this,"_lineWidth",void 0),u(this,"_brushSize",void 0),u(this,"savedImage",void 0),u(this,"startPos",void 0),u(this,"currentPos",void 0),this.canvas=e,this.context=this.canvas.getContext("2d"),this.undoStack=[],this.undoLimit=3}var e,i,a;return e=t,(i=[{key:"init",value:function(){var t=this;this.canvas.onmousedown=function(e){return t.onMouseDown(e)}}},{key:"onMouseDown",value:function(t){var e=this;this.savedImage=this.context.getImageData(0,0,this.context.canvas.width,this.context.canvas.height),this.undoStack.length>=this.undoLimit&&this.undoStack.shift(),this.undoStack.push(this.savedImage),this.canvas.onmousemove=function(t){return e.onMouseMove(t)},document.onmouseup=function(t){return e.onMouseUp(t)},this.startPos=c.getMouseCoordsOnCanvas(this.canvas,t),this.tool===l.TOOL_PENCIL||this.tool===l.TOOL_BRUSH?(this.context.beginPath(),this.context.moveTo(this.startPos.x,this.startPos.y)):this.tool}},{key:"onMouseMove",value:function(t){switch(this.currentPos=c.getMouseCoordsOnCanvas(this.canvas,t),this.tool){case l.TOOL_LINE:case l.TOOL_RECTANGLE:case l.TOOL_CIRCLE:case l.TOOL_TRIANGLE:this.drawShape();break;case l.TOOL_PENCIL:this.drawFreeLine(this._lineWidth);break;case l.TOOL_BRUSH:this.drawFreeLine(this._brushSize)}}},{key:"onMouseUp",value:function(t){this.canvas.onmousemove=null,document.onmouseup=null}},{key:"drawShape",value:function(){if(this.context.putImageData(this.savedImage,0,0),this.context.beginPath(),this.context.lineWidth=this._lineWidth,l.TOOL_LINE===this.tool)this.context.moveTo(this.startPos.x,this.startPos.y),this.context.lineTo(this.currentPos.x,this.currentPos.y);else if(l.TOOL_RECTANGLE===this.tool)this.context.rect(this.startPos.x,this.startPos.y,this.currentPos.x-this.startPos.x,this.currentPos.y-this.startPos.y);else if(l.TOOL_CIRCLE===this.tool){var t=c.calcHypotenuse(this.startPos,this.currentPos);this.context.arc(this.startPos.x,this.startPos.y,t,0,2*Math.PI,!1)}else l.TOOL_TRIANGLE===this.tool&&(this.context.moveTo(this.startPos.x+(this.currentPos.x-this.startPos.x)/2,this.startPos.y),this.context.lineTo(this.startPos.x,this.currentPos.y),this.context.lineTo(this.currentPos.x,this.currentPos.y),this.context.closePath());this.context.stroke()}},{key:"drawFreeLine",value:function(t){this.context.lineWidth=t,this.context.lineTo(this.currentPos.x,this.currentPos.y),this.context.lineCap="round",this.context.lineJoin="round",this.context.stroke()}},{key:"undoPaint",value:function(){this.undoStack.length>0?(this.context.putImageData(this.undoStack[this.undoStack.length-1],0,0),this.undoStack.pop()):alert("No undo available")}},{key:"activeTool",set:function(t){this.tool=t}},{key:"selectedColor",set:function(t){this.color=t,this.context.fillStyle=this.color,this.context.strokeStyle=this.color}},{key:"lineWidth",set:function(t){this._lineWidth=t}},{key:"brushSize",set:function(t){this._brushSize=t}}])&&d(e.prototype,i),a&&d(e,a),t}(),v=(i(308),i(309),new h(document.querySelector("canvas")));v.activeTool=l.TOOL_LINE,v.lineWidth="1",v.brushSize="4",v.selectedColor="#000000",v.init(),document.querySelectorAll("[data-command]").forEach((function(t){t.addEventListener("click",(function(e){var i=t.getAttribute("data-command");if("undo"===i)v.undoPaint();else if("download"===i){var a=document.getElementById("canvas").toDataURL("image/png",1).replace("image/png","image/octet-stream"),s=document.createElement("a");s.download="my-image.png",s.href=a,s.click()}}))})),document.querySelectorAll("[data-tool]").forEach((function(t){t.addEventListener("click",(function(e){document.querySelector("[data-tool].active").classList.toggle("active"),t.classList.toggle("active");var i=t.getAttribute("data-tool");switch(v.activeTool=i,i){case l.TOOL_LINE:case l.TOOL_RECTANGLE:case l.TOOL_CIRCLE:case l.TOOL_TRIANGLE:case l.TOOL_PENCIL:document.querySelector(".group.pencil").style.display="block",document.querySelector(".group.brush").style.display="none";break;case l.TOOL_BRUSH:document.querySelector(".group.pencil").style.display="none",document.querySelector(".group.brush").style.display="block";break;default:document.querySelector(".group.pencil").style.display="none",document.querySelector(".group.brush").style.display="none"}}))})),document.querySelectorAll("[data-line-width]").forEach((function(t){t.addEventListener("click",(function(e){document.querySelector("[data-line-width].active").classList.toggle("active"),t.classList.toggle("active"),v.lineWidth=t.getAttribute("data-line-width")}))})),document.querySelectorAll("[data-brush-size]").forEach((function(t){t.addEventListener("click",(function(e){document.querySelector("[data-brush-size].active").classList.toggle("active"),t.classList.toggle("active"),v.brushSize=t.getAttribute("data-brush-size")}))})),document.querySelectorAll("[data-color]").forEach((function(t){t.addEventListener("click",(function(e){document.querySelector("[data-color].active").classList.toggle("active"),t.classList.toggle("active"),v.selectedColor=t.getAttribute("data-color")}))}))}});