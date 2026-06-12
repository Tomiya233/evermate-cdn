var Ke=Object.defineProperty;var Je=(e,t,a)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var w=(e,t,a)=>Je(e,typeof t!="symbol"?t+"":t,a);import{d as Ae,c as Ce,i as _e,a as et,s as pe,v as tt,n as at,b as G,f as ie,p as v,e as fe,g as q,h as F,j as O,k as nt,l as it,m as rt,o as st,q as ot,r as ct,t as lt,u as ut,w as dt,x as yt,y as ht,z as pt,A as ft,B as vt,C as mt,D as kt}from"./vendor-BBARYNQ8.js";import{o as bt,w as M,g as N,a as oe,b as je,s as C,c as g,t as m,u as V,d as ce,e as Se,f as Te,h as B,F as gt,i as Ve,j as ze,r as j,k as L,n as Mt,l as qe,m as xt}from"./vendor-vue-B5lybA45.js";function Ee(e){return oe()?(je(e),!0):!1}const wt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ot=e=>e!=null,At=Object.prototype.toString,X=e=>At.call(e)==="[object Object]",K=()=>{};function D(e){return Array.isArray(e)?e:[e]}function Ct(e){return N()}function jt(e,t){Ct()&&bt(e,t)}function St(e,t,a){return M(e,t,{...a,immediate:!0})}const Le=wt?window:void 0;function $(e){var t;const a=m(e);return(t=a==null?void 0:a.$el)!=null?t:a}function A(...e){const t=[],a=()=>{t.forEach(s=>s()),t.length=0},n=(s,c,h,l)=>(s.addEventListener(c,h,l),()=>s.removeEventListener(c,h,l)),i=g(()=>{const s=D(m(e[0])).filter(c=>c!=null);return s.every(c=>typeof c!="string")?s:void 0}),r=St(()=>{var s,c;return[(c=(s=i.value)==null?void 0:s.map(h=>$(h)))!=null?c:[Le].filter(h=>h!=null),D(m(i.value?e[1]:e[0])),D(V(i.value?e[2]:e[1])),m(i.value?e[3]:e[2])]},([s,c,h,l])=>{if(a(),!(s!=null&&s.length)||!(c!=null&&c.length)||!(h!=null&&h.length))return;const d=X(l)?{...l}:l;t.push(...s.flatMap(f=>c.flatMap(y=>h.map(p=>n(f,y,p,d)))))},{flush:"post"}),o=()=>{r(),a()};return Ee(a),o}function Tt(){const e=C(!1),t=N();return t&&ce(()=>{e.value=!0},t),e}function Vt(e){const t=Tt();return g(()=>(t.value,!!e()))}function zt(e,t,a={}){const{root:n,rootMargin:i="0px",threshold:r=0,window:o=Le,immediate:s=!0}=a,c=Vt(()=>o&&"IntersectionObserver"in o),h=g(()=>{const p=m(e);return D(p).map($).filter(Ot)});let l=K;const d=C(s),f=c.value?M(()=>[h.value,$(n),d.value],([p,k])=>{if(l(),!d.value||!p.length)return;const x=new IntersectionObserver(t,{root:$(k),rootMargin:i,threshold:r});p.forEach(z=>z&&x.observe(z)),l=()=>{x.disconnect(),l=K}},{immediate:s,flush:"post"}):K,y=()=>{l(),f(),d.value=!1};return Ee(y),{isSupported:c,isActive:d,pause(){l(),d.value=!1},resume(){d.value=!0},stop:y}}const S={},J={};class qt{constructor(){w(this,"subscriptions",new Set)}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,a,n){if(this.subscriptions.size)for(const i of this.subscriptions)i(t,a,n)}clear(){this.subscriptions.clear()}}function ve(e){return!Number.isNaN(Number.parseFloat(e))}class Et{constructor(t){w(this,"current");w(this,"prev");w(this,"timeDelta",0);w(this,"lastUpdated",0);w(this,"updateSubscribers",new qt);w(this,"stopAnimation");w(this,"canTrackVelocity",!1);w(this,"updateAndNotify",t=>{this.prev=this.current,this.current=t;const{delta:a,timestamp:n}=nt();this.lastUpdated!==n&&(this.timeDelta=a,this.lastUpdated=n),pe.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)});w(this,"scheduleVelocityCheck",()=>pe.postRender(this.velocityCheck));w(this,"velocityCheck",({timestamp:t})=>{this.canTrackVelocity||(this.canTrackVelocity=ve(this.current)),t!==this.lastUpdated&&(this.prev=this.current)});this.prev=this.current=t,this.canTrackVelocity=ve(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?tt(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(a=>{const{stop:n}=t(a);this.stopAnimation=n}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Lt(e){return new Et(e)}const{isArray:It}=Array;function Ht(){const e=j({}),t=n=>{const i=r=>{e.value[r]&&(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};n?It(n)?n.forEach(i):i(n):Object.keys(e.value).forEach(i)},a=(n,i,r)=>{if(e.value[n])return e.value[n];const o=Lt(i);return o.onChange(s=>r[n]=s),e.value[n]=o,o};return jt(t),{motionValues:e,get:a,stop:t}}function Pt(e){return Array.isArray(e)}function E(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function _(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function $t(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function ee(){return{type:"keyframes",ease:"linear",duration:300}}function Rt(e){return{type:"keyframes",duration:800,values:e}}const me={default:$t,x:E,y:E,z:E,rotate:E,rotateX:E,rotateY:E,rotateZ:E,scaleX:_,scaleY:_,scale:_,backgroundColor:ee,color:ee,opacity:ee};function Ie(e,t){let a;return Pt(t)?a=Rt:a=me[e]||me.default,{to:t,...a(t)}}const ke={...at,transform:Math.round},He={color:O,backgroundColor:O,outlineColor:O,fill:O,stroke:O,borderColor:O,borderTopColor:O,borderRightColor:O,borderBottomColor:O,borderLeftColor:O,borderWidth:v,borderTopWidth:v,borderRightWidth:v,borderBottomWidth:v,borderLeftWidth:v,borderRadius:v,radius:v,borderTopLeftRadius:v,borderTopRightRadius:v,borderBottomRightRadius:v,borderBottomLeftRadius:v,width:v,maxWidth:v,height:v,maxHeight:v,size:v,top:v,right:v,bottom:v,left:v,padding:v,paddingTop:v,paddingRight:v,paddingBottom:v,paddingLeft:v,margin:v,marginTop:v,marginRight:v,marginBottom:v,marginLeft:v,rotate:q,rotateX:q,rotateY:q,rotateZ:q,scale:F,scaleX:F,scaleY:F,scaleZ:F,skew:q,skewX:q,skewY:q,distance:v,translateX:v,translateY:v,translateZ:v,x:v,y:v,z:v,perspective:v,transformPerspective:v,opacity:G,originX:fe,originY:fe,originZ:v,zIndex:ke,filter:ie,WebkitFilter:ie,fillOpacity:G,strokeOpacity:G,numOctaves:ke},le=e=>He[e];function re(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function Bt(e,t){let a=le(e);return a!==ie&&(a=Ce),a.getAnimatableNone?a.getAnimatableNone(t):void 0}const Nt={linear:kt,easeIn:mt,easeInOut:vt,easeOut:ft,circIn:pt,circInOut:ht,circOut:yt,backIn:dt,backInOut:ut,backOut:lt,anticipate:ct,bounceIn:ot,bounceInOut:st,bounceOut:rt};function be(e){if(Array.isArray(e)){const[t,a,n,i]=e;return it(t,a,n,i)}else if(typeof e=="string")return Nt[e];return e}function Wt(e){return Array.isArray(e)&&typeof e[0]!="number"}function ge(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Ce.test(t)&&!t.startsWith("url("))}function Ft(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function Dt({ease:e,times:t,delay:a,...n}){const i={...n};return t&&(i.offset=t),e&&(i.ease=Wt(e)?e.map(be):be(e)),a&&(i.elapsed=-a),i}function Ut(e,t,a){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),Ft(t),Xt(e)||(e={...e,...Ie(a,t.to)}),{...t,...Dt(e)}}function Xt({delay:e,repeat:t,repeatType:a,repeatDelay:n,from:i,...r}){return!!Object.keys(r).length}function Yt(e,t){return e[t]||e.default||e}function Zt(e,t,a,n,i){const r=Yt(n,e);let o=r.from===null||r.from===void 0?t.get():r.from;const s=ge(e,a);o==="none"&&s&&typeof a=="string"&&(o=Bt(e,a));const c=ge(e,o);function h(d){const f={from:o,to:a,velocity:n.velocity?n.velocity:t.getVelocity(),onUpdate:y=>t.set(y)};return r.type==="inertia"||r.type==="decay"?_e({...f,...r}):et({...Ut(r,f,e),onUpdate:y=>{f.onUpdate(y),r.onUpdate&&r.onUpdate(y)},onComplete:()=>{i&&i(),d&&d()}})}function l(d){return t.set(a),i&&i(),d&&d(),{stop:()=>{}}}return!c||!s||r.type===!1?l:h}function Qt(){const{motionValues:e,stop:t,get:a}=Ht();return{motionValues:e,stop:t,push:(i,r,o,s={},c)=>{const h=o[i],l=a(i,h,o);if(s&&s.immediate){l.set(r);return}const d=Zt(i,l,r,s,c);l.start(d)}}}function Gt(e,t={},{motionValues:a,push:n,stop:i}=Qt()){const r=V(t),o=j(!1);M(a,d=>{o.value=Object.values(d).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const s=d=>{if(!r||!r[d])throw new Error(`The variant ${d} does not exist.`);return r[d]},c=d=>{typeof d=="string"&&(d=s(d));const f=Object.entries(d).map(([p,k])=>{if(p!=="transition")return new Promise(x=>n(p,k,e,d.transition||Ie(p,d[p]),x))}).filter(Boolean);async function y(){var p,k;await Promise.all(f),(k=(p=d.transition)==null?void 0:p.onComplete)==null||k.call(p)}return Promise.all([y()])};return{isAnimating:o,apply:c,set:d=>{const f=X(d)?d:s(d);Object.entries(f).forEach(([y,p])=>{y!=="transition"&&n(y,p,e,{immediate:!0})})},leave:async d=>{let f;if(r&&(r.leave&&(f=r.leave),!r.leave&&r.initial&&(f=r.initial)),!f){d();return}await c(f),d()},stop:i}}const ue=typeof window<"u",Kt=()=>ue&&(window.onpointerdown===null||(S==null?void 0:S.TEST)),Jt=()=>ue&&(window.ontouchstart===null||(S==null?void 0:S.TEST)),_t=()=>ue&&(window.onmousedown===null||(S==null?void 0:S.TEST));function ea({target:e,state:t,variants:a,apply:n}){const i=V(a),r=j(!1),o=j(!1),s=j(!1),c=g(()=>{let l=[...Object.keys(t.value||{})];return i&&(i.hovered&&(l=[...l,...Object.keys(i.hovered)]),i.tapped&&(l=[...l,...Object.keys(i.tapped)]),i.focused&&(l=[...l,...Object.keys(i.focused)])),l}),h=g(()=>{const l={};Object.assign(l,t.value),r.value&&i.hovered&&Object.assign(l,i.hovered),o.value&&i.tapped&&Object.assign(l,i.tapped),s.value&&i.focused&&Object.assign(l,i.focused);for(const d in l)c.value.includes(d)||delete l[d];return l});i.hovered&&(A(e,"mouseenter",()=>r.value=!0),A(e,"mouseleave",()=>{r.value=!1,o.value=!1})),i.tapped&&(_t()&&(A(e,"mousedown",()=>o.value=!0),A(e,"mouseup",()=>o.value=!1)),Kt()&&(A(e,"pointerdown",()=>o.value=!0),A(e,"pointerup",()=>o.value=!1)),Jt()&&(A(e,"touchstart",()=>o.value=!0),A(e,"touchend",()=>o.value=!1))),i.focused&&(A(e,"focus",()=>s.value=!0),A(e,"blur",()=>s.value=!1)),M([r,o,s],()=>{n(h.value)})}function ta({set:e,target:t,variants:a,variant:n}){const i=V(a);M(()=>t,()=>{i&&(i.initial&&(e("initial"),n.value="initial"),i.enter&&(n.value="enter"))},{immediate:!0,flush:"pre"})}function aa({state:e,apply:t}){M(e,a=>{a&&t(a)},{immediate:!0})}function Pe({target:e,variants:t,variant:a}){const n=V(t);n&&(n.visible||n.visibleOnce)&&zt(e,([{isIntersecting:i}])=>{n.visible?i?a.value="visible":a.value="initial":n.visibleOnce&&(i&&a.value!=="visibleOnce"?a.value="visibleOnce":a.value||(a.value="initial"))})}function na(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&ta(e),t.syncVariants&&aa(e),t.visibilityHooks&&Pe(e),t.eventListeners&&ea(e)}function $e(e={}){const t=L({...e}),a=j({});return M(t,()=>{const n={};for(const[i,r]of Object.entries(t)){const o=le(i),s=re(r,o);n[i]=s}a.value=n},{immediate:!0,deep:!0}),{state:t,style:a}}function de(e,t){M(()=>$(e),a=>{a&&t(a)},{immediate:!0})}const ia={x:"translateX",y:"translateY",z:"translateZ"};function Re(e={},t=!0){const a=L({...e}),n=j("");return M(a,i=>{let r="",o=!1;if(t&&(i.x||i.y||i.z)){const s=[i.x||0,i.y||0,i.z||0].map(c=>re(c,v)).join(",");r+=`translate3d(${s}) `,o=!0}for(const[s,c]of Object.entries(i)){if(t&&(s==="x"||s==="y"||s==="z"))continue;const h=le(s),l=re(c,h);r+=`${ia[s]||s}(${l}) `}t&&!o&&(r+="translateZ(0px) "),n.value=r.trim()},{immediate:!0,deep:!0}),{state:a,transform:n}}const ra=["","X","Y","Z"],sa=["perspective","translate","scale","rotate","skew"],Be=["transformPerspective","x","y","z"];sa.forEach(e=>{ra.forEach(t=>{const a=e+t;Be.push(a)})});const oa=new Set(Be);function ye(e){return oa.has(e)}const ca=new Set(["originX","originY","originZ"]);function Ne(e){return ca.has(e)}function la(e){const t={},a={};return Object.entries(e).forEach(([n,i])=>{ye(n)||Ne(n)?t[n]=i:a[n]=i}),{transform:t,style:a}}function Z(e){const{transform:t,style:a}=la(e),{transform:n}=Re(t),{style:i}=$e(a);return n.value&&(i.value.transform=n.value),i.value}function ua(e,t){let a,n;const{state:i,style:r}=$e();return de(e,o=>{n=o;for(const s of Object.keys(He))o.style[s]===null||o.style[s]===""||ye(s)||Ne(s)||(i[s]=o.style[s]);a&&Object.entries(a).forEach(([s,c])=>o.style[s]=c),t&&t(i)}),M(r,o=>{if(!n){a=o;return}for(const s in o)n.style[s]=o[s]},{immediate:!0}),{style:i}}function da(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const a=n=>n.endsWith("px")||n.endsWith("deg")?Number.parseFloat(n):Number.isNaN(Number(n))?Number(n):n;return t.reduce((n,i)=>{if(!i)return n;const[r,o]=i.split("("),c=o.split(",").map(l=>a(l.endsWith(")")?l.replace(")",""):l.trim())),h=c.length===1?c[0]:c;return{...n,[r]:h}},{})}function ya(e,t){Object.entries(da(t)).forEach(([a,n])=>{const i=["x","y","z"];if(a==="translate3d"){if(n===0){i.forEach(r=>e[r]=0);return}n.forEach((r,o)=>e[i[o]]=r);return}if(n=Number.parseFloat(`${n}`),a==="translateX"){e.x=n;return}if(a==="translateY"){e.y=n;return}if(a==="translateZ"){e.z=n;return}e[a]=n})}function ha(e,t){let a,n;const{state:i,transform:r}=Re();return de(e,o=>{n=o,o.style.transform&&ya(i,o.style.transform),a&&(o.style.transform=a),t&&t(i)}),M(r,o=>{if(!n){a=o;return}n.style.transform=o},{immediate:!0}),{transform:i}}function pa(e){return Object.entries(e)}function fa(e,t){const a=L({}),n=o=>Object.entries(o).forEach(([s,c])=>a[s]=c),{style:i}=ua(e,n),{transform:r}=ha(e,n);return M(a,o=>{pa(o).forEach(([s,c])=>{const h=ye(s)?r:i;h[s]&&h[s]===c||(h[s]=c)})},{immediate:!0,deep:!0}),de(e,()=>t),{motionProperties:a,style:i,transform:r}}function va(e={}){const t=V(e),a=j();return{state:g(()=>{if(a.value)return t[a.value]}),variant:a}}function We(e,t={},a){const{motionProperties:n}=fa(e),{variant:i,state:r}=va(t),o=Gt(n,t),s={target:e,variant:i,variants:t,state:r,motionProperties:n,...o};return na(s,a),s}const Fe=["delay","duration"],ma=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused",...Fe];function ka(e){return Fe.includes(e)}function ba(e,t){const a=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};if(a){a.variants&&X(a.variants)&&(t.value={...t.value,...a.variants});for(let n of ma)if(!(!a||!a[n])){if(ka(n)&&typeof a[n]=="number"){for(const i of["enter","visible","visibleOnce"]){const r=t.value[i];r!=null&&(r.transition??(r.transition={}),r.transition[n]=a[n])}continue}if(X(a[n])){const i=a[n];n==="visible-once"&&(n="visibleOnce"),t.value[n]=i}}}}function te(e,t=!1){return{created:(i,r,o)=>{const s=r.value&&typeof r.value=="string"?r.value:o.key;s&&J[s]&&J[s].stop();const c=t?structuredClone(Ve(e)||{}):e||{},h=j(c);typeof r.value=="object"&&(h.value=r.value),ba(o,h);const d=We(i,h,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});i.motionInstance=d,s&&(J[s]=d)},mounted:(i,r,o)=>{i.motionInstance&&Pe(i.motionInstance)},getSSRProps(i,r){let{initial:o}=i.value||r&&(r==null?void 0:r.props)||{};o=V(o);const s=Ae({},(e==null?void 0:e.initial)||{},o||{});return!s||Object.keys(s).length===0?void 0:{style:Z(s)}}}}const ga={initial:{opacity:0},enter:{opacity:1}},Ma={initial:{opacity:0},visible:{opacity:1}},xa={initial:{opacity:0},visibleOnce:{opacity:1}},wa={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Oa={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Aa={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Ca={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},ja={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Sa={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Ta={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Va={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},za={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},qa={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Ea={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},La={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Ia={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Ha={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Pa={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},$a={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},Ra={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Ba={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Na={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Wa={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Fa={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Da={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Ua={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Xa={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Ya={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Za={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Qa={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Y={__proto__:null,fade:ga,fadeVisible:Ma,fadeVisibleOnce:xa,pop:wa,popVisible:Oa,popVisibleOnce:Aa,rollBottom:Ia,rollLeft:Ca,rollRight:Ta,rollTop:qa,rollVisibleBottom:Ha,rollVisibleLeft:ja,rollVisibleOnceBottom:Pa,rollVisibleOnceLeft:Sa,rollVisibleOnceRight:za,rollVisibleOnceTop:La,rollVisibleRight:Va,rollVisibleTop:Ea,slideBottom:Ya,slideLeft:$a,slideRight:Na,slideTop:Da,slideVisibleBottom:Za,slideVisibleLeft:Ra,slideVisibleOnceBottom:Qa,slideVisibleOnceLeft:Ba,slideVisibleOnceRight:Fa,slideVisibleOnceTop:Xa,slideVisibleRight:Wa,slideVisibleTop:Ua};function Ga(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",a="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",n=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(n,i=>a.charAt(t.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/-{2,}/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const De=Symbol(""),Ue={preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function Ka(e){return Object.prototype.toString.call(e)==="[object Object]"}function se(e){if(Array.isArray(e))return e.map(se);if(Ka(e)){const t={};for(const a in e)t[a]=se(e[a]);return t}return e}function Xe(e){const t=L({}),a=ze(De,{}),n=g(()=>e.preset==null?{}:a!=null&&e.preset in a?structuredClone(Ve(a)[e.preset]):e.preset in Y?structuredClone(Y[e.preset]):{}),i=g(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused}));function r(c,h){for(const l of["delay","duration"]){if(h[l]==null)continue;const d=Number.parseInt(h[l]);for(const f of["enter","visible","visibleOnce"]){const y=c[f];y!=null&&(y.transition??(y.transition={}),y.transition[l]=d)}}return c}const o=g(()=>{const c=Ae({},i.value,n.value,e.variants||{});return r({...c},e)});function s(c,h,l){var f;c.props??(c.props={}),(f=c.props).style??(f.style={}),c.props.style={...c.props.style,...l};const d=r(se(o.value),c.props);return c.props.onVnodeMounted=({el:y})=>{t[h]=We(y,d)},c.props.onVnodeUpdated=({el:y})=>{const p=Z(t[h].state);for(const[k,x]of Object.entries(p))y.style[k]=x},c}return{motionConfig:o,setNodeInstance:s}}const Ja=Se({name:"Motion",props:{...Ue,is:{type:[String,Object],default:"div"}},setup(e){const t=Te(),{motionConfig:a,setNodeInstance:n}=Xe(e);return()=>{const i=Z(a.value.initial||{}),r=B(e.is,void 0,t);return n(r,0,i),r}}}),_a=Se({name:"MotionGroup",props:{...Ue,is:{type:[String,Object],required:!1}},setup(e){const t=Te(),{motionConfig:a,setNodeInstance:n}=Xe(e);return()=>{var o;const i=Z(a.value.initial||{}),r=((o=t.default)==null?void 0:o.call(t))||[];for(let s=0;s<r.length;s++){const c=r[s];c.type===gt&&Array.isArray(c.children)?c.children.forEach(function h(l,d){if(l!=null){if(Array.isArray(l)){h(l,d);return}typeof l=="object"&&n(l,d,i)}}):n(c,s,i)}return e.is?B(e.is,void 0,r):r}}}),jn={install(e,t){if(e.directive("motion",te()),!t||t&&!t.excludePresets)for(const a in Y){const n=Y[a];e.directive(`motion-${Ga(a)}`,te(n,!0))}if(t&&t.directives)for(const a in t.directives){const n=t.directives[a];n.initial,e.directive(`motion-${a}`,te(n,!0))}e.provide(De,t==null?void 0:t.directives),e.component("Motion",Ja),e.component("MotionGroup",_a)}};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=e=>e==="";/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=(...e)=>e.filter((t,a,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===a).join(" ").trim();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,n)=>n?n.toUpperCase():a.toLowerCase());/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=e=>{const t=an(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=({name:e,iconNode:t,absoluteStrokeWidth:a,"absolute-stroke-width":n,strokeWidth:i,"stroke-width":r,size:o=H.width,color:s=H.stroke,...c},{slots:h})=>B("svg",{...H,...c,width:o,height:o,stroke:s,"stroke-width":Me(a)||Me(n)||a===!0||n===!0?Number(i||r||H["stroke-width"])*24/Number(o):i||r||H["stroke-width"],class:tn("lucide",c.class,...e?[`lucide-${xe(nn(e))}-icon`,`lucide-${xe(e)}`]:["lucide-icon"]),...!h.default&&!en(c)&&{"aria-hidden":"true"}},[...t.map(l=>B(...l)),...h.default?[h.default()]:[]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,t)=>(a,{slots:n,attrs:i})=>B(rn,{...i,...a,iconNode:t,name:e},n);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=u("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=u("alarm-clock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=u("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=u("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=u("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=u("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=u("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=u("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=u("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=u("calendar-check",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=u("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=u("camera",[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=u("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=u("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=u("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=u("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=u("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=u("circle-user",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=u("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=u("circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=u("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=u("coins",[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=u("contact",[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=u("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=u("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=u("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=u("crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=u("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=u("film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=u("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=u("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=u("gift",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=u("hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=u("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=u("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=u("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=u("id-card",[["path",{d:"M16 10h2",key:"8sgtl7"}],["path",{d:"M16 14h2",key:"epxaof"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0",key:"n6f512"}],["circle",{cx:"9",cy:"11",r:"2",key:"yxgjnd"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=u("image-plus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=u("image-up",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=u("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=u("inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=u("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=u("key-round",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=u("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=u("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=u("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=u("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=u("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=u("megaphone",[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=u("message-circle",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=u("message-square-reply",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"m10 8-3 3 3 3",key:"fp6dz7"}],["path",{d:"M17 14v-1a2 2 0 0 0-2-2H7",key:"1tkjnz"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=u("package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=u("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=u("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=u("pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=u("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=u("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=u("qr-code",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=u("radio",[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=u("refresh-ccw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=u("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=u("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=u("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=u("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=u("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=u("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=u("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=u("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=u("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=u("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=u("sliders-horizontal",[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=u("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=u("smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=u("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=u("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=u("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=u("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=u("type",[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=u("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=u("user-check",[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=u("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=u("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=u("wallet-cards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=u("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=u("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=u("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function sn(e,t){return oe()?(je(e,t),!0):!1}const ae=new WeakMap,on=(...e)=>{var t;const a=e[0],n=(t=N())===null||t===void 0?void 0:t.proxy,i=n??oe();if(i==null&&!qe())throw new Error("injectLocal must be called in setup");return i&&ae.has(i)&&a in ae.get(i)?ae.get(i)[a]:ze(...e)},cn=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ln=Object.prototype.toString,un=e=>ln.call(e)==="[object Object]";function dn(e,t=!1,a="Timeout"){return new Promise((n,i)=>{t?setTimeout(i,e,a):setTimeout(n,e)})}function Ye(e){return e}function yn(e,t){var a;if(typeof e=="number")return e+t;const n=((a=e.match(/^-?\d+\.?\d*/))===null||a===void 0?void 0:a[0])||"",i=e.slice(n.length),r=Number.parseFloat(n)+t;return Number.isNaN(r)?e:r+i}function R(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function ne(e){return Array.isArray(e)?e:[e]}function hn(e){return N()}function pn(e,t=!0,a){hn()?ce(e,a):t?e():Mt(e)}function fn(e,t,a){return M(e,t,{...a,immediate:!0})}const Q=cn?window:void 0;function vn(e){var t;const a=m(e);return(t=a==null?void 0:a.$el)!==null&&t!==void 0?t:a}function U(...e){const t=(n,i,r,o)=>(n.addEventListener(i,r,o),()=>n.removeEventListener(i,r,o)),a=g(()=>{const n=ne(m(e[0])).filter(i=>i!=null);return n.every(i=>typeof i!="string")?n:void 0});return fn(()=>{var n,i;return[(n=(i=a.value)===null||i===void 0?void 0:i.map(r=>vn(r)))!==null&&n!==void 0?n:[Q].filter(r=>r!=null),ne(m(a.value?e[1]:e[0])),ne(V(a.value?e[2]:e[1])),m(a.value?e[3]:e[2])]},([n,i,r,o],s,c)=>{if(!(n!=null&&n.length)||!(i!=null&&i.length)||!(r!=null&&r.length))return;const h=un(o)?{...o}:o,l=n.flatMap(d=>i.flatMap(f=>r.map(y=>t(d,f,y,h))));c(()=>{l.forEach(d=>d())})},{flush:"post"})}function mn(){const e=C(!1),t=N();return t&&ce(()=>{e.value=!0},t),e}function kn(e){const t=mn();return g(()=>(t.value,!!e()))}const bn=Symbol("vueuse-ssr-width");function Ze(){const e=qe()?on(bn,null):null;return typeof e=="number"?e:void 0}function P(e,t={}){const{window:a=Q,ssrWidth:n=Ze()}=t,i=kn(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function"),r=C(typeof n=="number"),o=C(),s=C(!1),c=h=>{s.value=h.matches};return xt(()=>{if(r.value){r.value=!i.value,s.value=m(e).split(",").some(h=>{const l=h.includes("not all"),d=h.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),f=h.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let y=!!(d||f);return d&&y&&(y=n>=R(d[1])),f&&y&&(y=n<=R(f[1])),l?!y:y});return}i.value&&(o.value=a.matchMedia(m(e)),s.value=o.value.matches)}),U(o,"change",c,{passive:!0}),g(()=>s.value)}const sr={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function or(e,t={}){function a(y,p){let k=m(e[m(y)]);return p!=null&&(k=yn(k,p)),typeof k=="number"&&(k=`${k}px`),k}const{window:n=Q,strategy:i="min-width",ssrWidth:r=Ze()}=t,o=typeof r=="number",s=o?C(!1):{value:!0};o&&pn(()=>s.value=!!n);function c(y,p){return!s.value&&o?y==="min"?r>=R(p):r<=R(p):n?n.matchMedia(`(${y}-width: ${p})`).matches:!1}const h=y=>P(()=>`(min-width: ${a(y)})`,t),l=y=>P(()=>`(max-width: ${a(y)})`,t),d=Object.keys(e).reduce((y,p)=>(Object.defineProperty(y,p,{get:()=>i==="min-width"?h(p):l(p),enumerable:!0,configurable:!0}),y),{});function f(){const y=Object.keys(e).map(p=>[p,d[p],R(a(p))]).sort((p,k)=>p[2]-k[2]);return g(()=>y.filter(([,p])=>p.value).map(([p])=>p))}return Object.assign(d,{greaterOrEqual:h,smallerOrEqual:l,greater(y){return P(()=>`(min-width: ${a(y,.1)})`,t)},smaller(y){return P(()=>`(max-width: ${a(y,-.1)})`,t)},between(y,p){return P(()=>`(min-width: ${a(y)}) and (max-width: ${a(p,-.1)})`,t)},isGreater(y){return c("min",a(y,.1))},isGreaterOrEqual(y){return c("min",a(y))},isSmaller(y){return c("max",a(y,-.1))},isSmallerOrEqual(y){return c("max",a(y))},isInBetween(y,p){return c("min",a(y))&&c("max",a(p,-.1))},current:f,active(){const y=f();return g(()=>y.value.length===0?"":y.value.at(i==="min-width"?-1:0))}})}function cr(e,t={}){const{threshold:a=50,onSwipe:n,onSwipeEnd:i,onSwipeStart:r,passive:o=!0}=t,s=L({x:0,y:0}),c=L({x:0,y:0}),h=g(()=>s.x-c.x),l=g(()=>s.y-c.y),{max:d,abs:f}=Math,y=g(()=>d(f(h.value),f(l.value))>=a),p=C(!1),k=g(()=>y.value?f(h.value)>f(l.value)?h.value>0?"left":"right":l.value>0?"up":"down":"none"),x=b=>[b.touches[0].clientX,b.touches[0].clientY],z=(b,T)=>{s.x=b,s.y=T},he=(b,T)=>{c.x=b,c.y=T},I={passive:o,capture:!o},Qe=b=>{p.value&&(i==null||i(b,k.value)),p.value=!1},Ge=[U(e,"touchstart",b=>{if(b.touches.length!==1)return;const[T,W]=x(b);z(T,W),he(T,W),r==null||r(b)},I),U(e,"touchmove",b=>{if(b.touches.length!==1)return;const[T,W]=x(b);he(T,W),I.capture&&!I.passive&&Math.abs(h.value)>Math.abs(l.value)&&b.preventDefault(),!p.value&&y.value&&(p.value=!0),p.value&&(n==null||n(b))},I),U(e,["touchend","touchcancel"],Qe,I)];return{isSwiping:p,direction:k,coordsStart:s,coordsEnd:c,lengthX:h,lengthY:l,stop:()=>Ge.forEach(b=>b())}}const lr=Object.assign({},{linear:Ye},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});function gn([e,t,a,n]){const i=(l,d)=>1-3*d+3*l,r=(l,d)=>3*d-6*l,o=l=>3*l,s=(l,d,f)=>((i(d,f)*l+r(d,f))*l+o(d))*l,c=(l,d,f)=>3*i(d,f)*l*l+2*r(d,f)*l+o(d),h=l=>{let d=l;for(let f=0;f<4;++f){const y=c(d,e,a);if(y===0)return d;const p=s(d,e,a)-l;d-=p/y}return d};return l=>e===t&&a===n?l:s(h(l),t,n)}function we(e,t,a){return e+a*(t-e)}function Mn(e,t,a){const n=m(e),i=m(t);if(typeof n=="number"&&typeof i=="number")return we(n,i,a);if(Array.isArray(n)&&Array.isArray(i))return n.map((r,o)=>we(r,m(i[o]),a));throw new TypeError("Unknown transition type, specify an interpolation function.")}function Oe(e){var t;return typeof e=="function"?e:(t=m(e))!==null&&t!==void 0?t:Ye}function xn(e,t,a,n={}){var i;const{window:r=Q}=n,o=m(t),s=m(a),c=(i=m(n.duration))!==null&&i!==void 0?i:1e3,h=Date.now(),l=Date.now()+c,d=typeof n.interpolation=="function"?n.interpolation:Mn,f=typeof n.easing<"u"?Oe(n.easing):Oe(n.transition),y=typeof f=="function"?f:gn(f);return new Promise(p=>{e.value=o;const k=()=>{var x;if(!((x=n.abort)===null||x===void 0)&&x.call(n)){p();return}const z=Date.now();e.value=d(o,s,y((z-h)/c)),z<l?r==null||r.requestAnimationFrame(k):(e.value=s,p())};k()})}function ur(e,t={}){let a=0;const n=()=>{const r=m(e);return typeof t.interpolation>"u"&&Array.isArray(r)?r.map(m):r},i=C(n());return M(n,async r=>{var o,s;if(m(t.disabled))return;const c=++a;t.delay&&await dn(m(t.delay)),c===a&&((o=t.onStarted)===null||o===void 0||o.call(t),await xn(i,i.value,r,{...t,abort:()=>{var h;return c!==a||((h=t.abort)===null||h===void 0?void 0:h.call(t))}}),(s=t.onFinished)===null||s===void 0||s.call(t))},{deep:!0}),M(()=>m(t.disabled),r=>{r&&(a++,i.value=n())}),sn(()=>{a++}),g(()=>m(t.disabled)?n():i.value)}export{Ti as $,Vn as A,Hn as B,Xn as C,ui as D,Tn as E,Zn as F,ri as G,li as H,fi as I,ji as J,vi as K,ki as L,wi as M,ci as N,Pi as O,Vi as P,zi as Q,Li as R,Yi as S,Gi as T,er as U,$n as V,ar as W,ir as X,Ei as Y,rr as Z,Ci as _,Dn as a,pi as a0,$i as a1,ii as a2,Mi as a3,En as a4,Pn as a5,Ai as a6,Kn as a7,Ji as a8,qn as a9,Jn as aA,ni as aB,In as aa,Qn as ab,Ri as ac,qi as ad,Ln as ae,ur as af,lr as ag,Xi as ah,Fi as ai,ei as aj,Oi as ak,si as al,Nn as am,Ii as an,Ni as ao,Hi as ap,_i as aq,Si as ar,cr as as,or as at,sr as au,Ki as av,ai as aw,ti as ax,Wn as ay,Fn as az,Ui as b,bi as c,zn as d,Wi as e,gi as f,tr as g,Gn as h,Un as i,mi as j,_n as k,di as l,xi as m,Di as n,Bi as o,jn as p,nr as q,Yn as r,Sn as s,oi as t,Bn as u,Rn as v,hi as w,Qi as x,yi as y,Zi as z};
