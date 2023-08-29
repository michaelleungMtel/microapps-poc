(self.webpackChunkweb_host=self.webpackChunkweb_host||[]).push([[46],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},8926:function(e){function t(e,t,n,r,o,i,s){try{var a=e[i](s),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var s=e.apply(n,r);function a(e){t(s,o,i,a,u,"next",e)}function u(e){t(s,o,i,a,u,"throw",e)}a(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,n){var r=n(2858),o=n(3884),i=n(379),s=n(521);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},561:function(e,t,n){"use strict";n.r(t),n.d(t,{Chunk:function(){return l},ChunkManager:function(){return d}});var r=n(4798),o=n(7187),i=n.n(o),s=n(6774),a=n.n(s);class u{constructor(e,t,n){this.type=e,this.error=n,this.target={src:t}}}class l{static fromDevServer(e){return`${n.p}${n.u(e)}`}static fromFileSystem(e){return n.u(`file:///${e}`)}static fromRemote(e,t={}){return t.excludeExtension?e:n.u(e)}}const c="Repack.ChunkManager.Cache.v2.release";class f{forceRemoteChunkResolution=!1;eventEmitter=new(i());constructor(e){this.nativeModule=e}configure(e){var t;this.storage=e.storage,this.forceRemoteChunkResolution=null!==(t=e.forceRemoteChunkResolution)&&void 0!==t&&t,this.resolveRemoteChunk=e.resolveRemoteChunk,__repack__.loadChunkCallback.push=((e,...t)=>(this.eventEmitter.emit("loaded",t[0]),e(...t))).bind(null,__repack__.loadChunkCallback.push.bind(__repack__.loadChunkCallback))}async initCache(){if(!this.cache){var e,t;const n=JSON.parse(null!==(e=await(null===(t=this.storage)||void 0===t?void 0:t.getItem(c)))&&void 0!==e?e:"{}");this.cache=null!=n?n:void 0}}async saveCache(){var e;await(null===(e=this.storage)||void 0===e?void 0:e.setItem(c,JSON.stringify(this.cache)))}async resolveChunk(e,t){var r,o;await this.initCache();let i,s,u,c,f="GET",d=!1,h=!1,p=3e4;if(null!==(r=n.g.__CHUNKS__)&&void 0!==r&&null!==(o=r.local)&&void 0!==o&&o.includes(e)&&!this.forceRemoteChunkResolution)i=l.fromFileSystem(e);else{var m,v,y;if(!this.resolveRemoteChunk)throw new Error("No remote chunk resolver was provided. Did you forget to add `ChunkManager.configure({ resolveRemoteChunk: ... })`?");const n=await this.resolveRemoteChunk(e,t);if(h=null!==(m=n.absolute)&&void 0!==m?m:h,p=null!==(v=n.timeout)&&void 0!==v?v:p,f=null!==(y=n.method)&&void 0!==y?y:f,i=l.fromRemote(n.url,{excludeExtension:n.excludeExtension}),n.query instanceof URLSearchParams?s=n.query.toString():"string"==typeof n.query?s=n.query:n.query&&(s=Object.entries(n.query).reduce(((e,[t,n])=>[...e,`${t}=${n}`]),[]).join("&")),n.headers instanceof Headers?n.headers.forEach(((e,t)=>{var n;c=null!==(n=c)&&void 0!==n?n:{},c[t.toLowerCase()]=e})):n.headers&&(c=Object.entries(n.headers).reduce(((e,[t,n])=>({...e,[t.toLowerCase()]:n})),{})),n.body instanceof FormData){const e={};n.body.forEach(((t,n)=>{"string"==typeof t?e[n]=t:console.warn("ChunkManager.resolveChunk does not support File as FormData key in body")})),u=JSON.stringify(e)}else if(n.body instanceof URLSearchParams){const e={};n.body.forEach(((t,n)=>{e[n]=t})),u=JSON.stringify(e)}else{var _;u=null!==(_=n.body)&&void 0!==_?_:void 0}}return this.cache[e]&&this.cache[e].url===i&&this.cache[e].query===s&&a()(this.cache[e].headers,c)&&this.cache[e].body===u||(d=!0,this.cache[e]={url:i,method:f,query:s,body:u,headers:c,timeout:p,absolute:h},await this.saveCache()),{...this.cache[e],fetch:d}}async loadChunk(e,t){let n;try{n=await this.resolveChunk(e,t)}catch(t){throw console.error("ChunkManager.resolveChunk error:",t.message),new u("resolution",e,t)}try{const t=new Promise((t=>{this.eventEmitter.once("loaded",(n=>{n===e&&t()}))}));await this.nativeModule.loadChunk(e,n),await t}catch(e){const{message:t,code:r}=e;throw console.error("ChunkManager.loadChunk invocation failed:",t,r?`[${r}]`:"",n),new u("load",n.url,e)}}async preloadChunk(e,t){let n;try{n=await this.resolveChunk(e,t)}catch(t){throw console.error("ChunkManager.resolveChunk error:",t.message),new u("resolution",e,t)}try{await this.nativeModule.preloadChunk(e,n)}catch(e){const{message:t,code:r}=e;throw console.error("ChunkManager.preloadChunk invocation failed:",t,r?`[${r}]`:"",n),new u("load",n.url,e)}}async invalidateChunks(e=[]){try{await this.initCache();const t=null!=e?e:Object.keys(this.cache.urls);for(const e of t)delete this.cache[e];await this.saveCache(),await this.nativeModule.invalidateChunks(t)}catch(e){const{message:t,code:n}=e;throw console.error("ChunkManager.invalidateChunks invocation failed:",t,n?`[${n}]`:""),e}}}class d{static backend=new f(r.NativeModules.ChunkManager);static configure(e){d.backend.configure(e)}static async resolveChunk(e,t){return d.backend.resolveChunk(e,t)}static async loadChunk(e,t){return d.backend.loadChunk(e,t)}static async preloadChunk(e){return d.backend.preloadChunk(e)}static async invalidateChunks(e=[]){return d.backend.invalidateChunks(e)}}},2890:function(e,t,n){var r=n(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(3038)),i=r(n(3264)),s=(n(4798),n(8691)),a="/Users/michaelleung/Documents/GitHub/microapps-poc/WebHost/src/App.js";function u(e){var t=e.system,n=e.system,r=n.remote,o=n.url,u=n.module;if(!(t&&r&&o&&u))return i.default.createElement("h2",{__self:this,__source:{fileName:a,lineNumber:12,columnNumber:12}},"No system specified");var l=i.default.lazy((0,s.loadComponent)(r,"default",u,o));return i.default.createElement(i.default.Suspense,{fallback:"Loading MicroApp...",__self:this,__source:{fileName:a,lineNumber:18,columnNumber:5}},i.default.createElement(l,{__self:this,__source:{fileName:a,lineNumber:19,columnNumber:7}}))}t.default=function(){var e=i.default.useState({}),t=(0,o.default)(e,2),n=t[0],r=t[1];return i.default.createElement("div",{style:{fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},__self:this,__source:{fileName:a,lineNumber:44,columnNumber:5}},i.default.createElement("h1",{__self:this,__source:{fileName:a,lineNumber:50,columnNumber:7}},"Dynamic System Host"),i.default.createElement("h2",{__self:this,__source:{fileName:a,lineNumber:51,columnNumber:7}},"Web Host App"),i.default.createElement("p",{__self:this,__source:{fileName:a,lineNumber:52,columnNumber:7}},"The Dynamic System will take advantage Module Federation"," ",i.default.createElement("strong",{__self:this,__source:{fileName:a,lineNumber:54,columnNumber:9}},"remotes")," and ",i.default.createElement("strong",{__self:this,__source:{fileName:a,lineNumber:54,columnNumber:38}},"exposes"),". It will not load any components or modules that have been loaded already."),i.default.createElement("button",{onClick:function(){r({remote:"app1",url:"http://localhost:9000/app1.container.bundle?platform=web",module:"./App.js"})},__self:this,__source:{fileName:a,lineNumber:57,columnNumber:7}},"Load App 1"),i.default.createElement("button",{onClick:function(){r({remote:"app2",url:"http://localhost:9001/app2.container.bundle?platform=web",module:"./App.js"})},__self:this,__source:{fileName:a,lineNumber:58,columnNumber:7}},"Load App 2"),i.default.createElement("div",{style:{marginTop:"2em"},__self:this,__source:{fileName:a,lineNumber:59,columnNumber:7}},i.default.createElement(u,{system:n,__self:this,__source:{fileName:a,lineNumber:60,columnNumber:9}})))}},46:function(e,t,n){var r=n(5318);n(561);var o=r(n(2890)),i=r(n(3264));r(n(2181)).default.render(i.default.createElement(o.default,{__self:this,__source:{fileName:"/Users/michaelleung/Documents/GitHub/microapps-poc/WebHost/src/bootstrap.js",lineNumber:6,columnNumber:17}}),document.getElementById("root"))},4980:function(e,t,n){var r=n(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.getOrLoadRemote=void 0;var o=r(n(8926));t.getOrLoadRemote=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return new Promise((function(i,s){if(window[e])i();else{var a=document.querySelector('[data-webpack="'+e+'"]'),u=function(){var r=(0,o.default)((function*(r){var o;!window[e]||null!=(o=window[e])&&o.__initialized||(yield window[e].init(n.S[t]),window[e].__initialized=!0),i()}));return function(e){return r.apply(this,arguments)}}();if(a)a.onload=u,a.onerror=s;else if(r){var l=document,c=l.createElement("script");c.type="text/javascript",c.setAttribute("data-webpack",""+e),c.async=!0,c.onerror=s,c.onload=u,c.src=r,l.getElementsByTagName("head")[0].appendChild(c)}else s("Cannot Find Remote "+e+" to inject")}}))}},8691:function(e,t,n){var r=n(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.loadComponent=void 0;var o,i=r(n(8926)),s=n(4980);window.__repack__={loadChunkCallback:[],loadChunk:(o=(0,i.default)((function*(e,t,n,r,o){if(void 0!==n&&void 0!==r)try{yield(0,s.getOrLoadRemote)(o.toString()+"@"+r.toString(),"default",e)}catch(e){console.error(e),t(e)}})),function(e,t,n,r,i){return o.apply(this,arguments)})},t.loadComponent=function(e,t,n,r){return(0,i.default)((function*(){yield(0,s.getOrLoadRemote)(e,t,r);var o=window[e];return(yield o.get(n))()}))}},7187:function(e){"use strict";var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}m(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&m(e,"error",t,{once:!0})}(e,o)}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function l(e,t,n,r){var o,i,s,l;if(a(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"==typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=u(e))>0&&s.length>o&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,l=c,console&&console.warn&&console.warn(l)}return e}function c(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=c.bind(r);return o.listener=n,r.wrapFn=o,o}function d(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):p(o,o.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function m(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){r.once&&e.removeEventListener(t,o),n(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return u(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var u=i[e];if(void 0===u)return!1;if("function"==typeof u)r(u,this,t);else{var l=u.length,c=p(u,l);for(n=0;n<l;++n)r(c[n],this,t)}return!0},i.prototype.addListener=function(e,t){return l(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return l(this,e,t,!0)},i.prototype.once=function(e,t){return a(t),this.on(e,f(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,f(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,r,o,i,s;if(a(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},i.prototype.listeners=function(e){return d(this,e,!0)},i.prototype.rawListeners=function(e){return d(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},i.prototype.listenerCount=h,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},6774:function(e){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var l=i[u];if(!a(l))return!1;var c=e[l],f=t[l];if(!1===(o=n?n.call(r,c,f,l):void 0)||void 0===o&&c!==f)return!1}return!0}}}]);