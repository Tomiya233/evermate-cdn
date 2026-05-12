var Ke=Object.defineProperty;var Je=(e,t,n)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>Je(e,typeof t!="symbol"?t+"":t,n);import{d as Ae,c as Ce,i as _e,a as et,s as pe,v as tt,n as nt,b as G,f as ie,p as m,e as fe,g as q,h as W,j as O,k as at,l as it,m as rt,o as st,q as ot,r as ct,t as lt,u as ut,w as dt,x as yt,y as ht,z as pt,A as ft,B as mt,C as vt,D as kt}from"./vendor-BBARYNQ8.js";import{o as bt,w as M,g as B,a as oe,b as je,s as C,c as g,t as v,u as V,d as ce,e as Se,f as Te,h as R,F as gt,i as Ve,j as ze,r as j,k as L,n as Mt,l as qe,m as xt}from"./vendor-vue-CmODgGhp.js";function Ee(e){return oe()?(je(e),!0):!1}const wt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ot=e=>e!=null,At=Object.prototype.toString,X=e=>At.call(e)==="[object Object]",K=()=>{};function D(e){return Array.isArray(e)?e:[e]}function Ct(e){return B()}function jt(e,t){Ct()&&bt(e,t)}function St(e,t,n){return M(e,t,{...n,immediate:!0})}const Le=wt?window:void 0;function H(e){var t;const n=v(e);return(t=n==null?void 0:n.$el)!=null?t:n}function A(...e){const t=[],n=()=>{t.forEach(s=>s()),t.length=0},a=(s,c,h,l)=>(s.addEventListener(c,h,l),()=>s.removeEventListener(c,h,l)),i=g(()=>{const s=D(v(e[0])).filter(c=>c!=null);return s.every(c=>typeof c!="string")?s:void 0}),r=St(()=>{var s,c;return[(c=(s=i.value)==null?void 0:s.map(h=>H(h)))!=null?c:[Le].filter(h=>h!=null),D(v(i.value?e[1]:e[0])),D(V(i.value?e[2]:e[1])),v(i.value?e[3]:e[2])]},([s,c,h,l])=>{if(n(),!(s!=null&&s.length)||!(c!=null&&c.length)||!(h!=null&&h.length))return;const u=X(l)?{...l}:l;t.push(...s.flatMap(f=>c.flatMap(d=>h.map(p=>a(f,d,p,u)))))},{flush:"post"}),o=()=>{r(),n()};return Ee(n),o}function Tt(){const e=C(!1),t=B();return t&&ce(()=>{e.value=!0},t),e}function Vt(e){const t=Tt();return g(()=>(t.value,!!e()))}function zt(e,t,n={}){const{root:a,rootMargin:i="0px",threshold:r=0,window:o=Le,immediate:s=!0}=n,c=Vt(()=>o&&"IntersectionObserver"in o),h=g(()=>{const p=v(e);return D(p).map(H).filter(Ot)});let l=K;const u=C(s),f=c.value?M(()=>[h.value,H(a),u.value],([p,k])=>{if(l(),!u.value||!p.length)return;const x=new IntersectionObserver(t,{root:H(k),rootMargin:i,threshold:r});p.forEach(z=>z&&x.observe(z)),l=()=>{x.disconnect(),l=K}},{immediate:s,flush:"post"}):K,d=()=>{l(),f(),u.value=!1};return Ee(d),{isSupported:c,isActive:u,pause(){l(),u.value=!1},resume(){u.value=!0},stop:d}}const S={},J={};class qt{constructor(){w(this,"subscriptions",new Set)}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,a){if(this.subscriptions.size)for(const i of this.subscriptions)i(t,n,a)}clear(){this.subscriptions.clear()}}function me(e){return!Number.isNaN(Number.parseFloat(e))}class Et{constructor(t){w(this,"current");w(this,"prev");w(this,"timeDelta",0);w(this,"lastUpdated",0);w(this,"updateSubscribers",new qt);w(this,"stopAnimation");w(this,"canTrackVelocity",!1);w(this,"updateAndNotify",t=>{this.prev=this.current,this.current=t;const{delta:n,timestamp:a}=at();this.lastUpdated!==a&&(this.timeDelta=n,this.lastUpdated=a),pe.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)});w(this,"scheduleVelocityCheck",()=>pe.postRender(this.velocityCheck));w(this,"velocityCheck",({timestamp:t})=>{this.canTrackVelocity||(this.canTrackVelocity=me(this.current)),t!==this.lastUpdated&&(this.prev=this.current)});this.prev=this.current=t,this.canTrackVelocity=me(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?tt(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:a}=t(n);this.stopAnimation=a}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Lt(e){return new Et(e)}const{isArray:It}=Array;function Pt(){const e=j({}),t=a=>{const i=r=>{e.value[r]&&(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};a?It(a)?a.forEach(i):i(a):Object.keys(e.value).forEach(i)},n=(a,i,r)=>{if(e.value[a])return e.value[a];const o=Lt(i);return o.onChange(s=>r[a]=s),e.value[a]=o,o};return jt(t),{motionValues:e,get:n,stop:t}}function $t(e){return Array.isArray(e)}function E(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function _(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function Ht(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function ee(){return{type:"keyframes",ease:"linear",duration:300}}function Nt(e){return{type:"keyframes",duration:800,values:e}}const ve={default:Ht,x:E,y:E,z:E,rotate:E,rotateX:E,rotateY:E,rotateZ:E,scaleX:_,scaleY:_,scale:_,backgroundColor:ee,color:ee,opacity:ee};function Ie(e,t){let n;return $t(t)?n=Nt:n=ve[e]||ve.default,{to:t,...n(t)}}const ke={...nt,transform:Math.round},Pe={color:O,backgroundColor:O,outlineColor:O,fill:O,stroke:O,borderColor:O,borderTopColor:O,borderRightColor:O,borderBottomColor:O,borderLeftColor:O,borderWidth:m,borderTopWidth:m,borderRightWidth:m,borderBottomWidth:m,borderLeftWidth:m,borderRadius:m,radius:m,borderTopLeftRadius:m,borderTopRightRadius:m,borderBottomRightRadius:m,borderBottomLeftRadius:m,width:m,maxWidth:m,height:m,maxHeight:m,size:m,top:m,right:m,bottom:m,left:m,padding:m,paddingTop:m,paddingRight:m,paddingBottom:m,paddingLeft:m,margin:m,marginTop:m,marginRight:m,marginBottom:m,marginLeft:m,rotate:q,rotateX:q,rotateY:q,rotateZ:q,scale:W,scaleX:W,scaleY:W,scaleZ:W,skew:q,skewX:q,skewY:q,distance:m,translateX:m,translateY:m,translateZ:m,x:m,y:m,z:m,perspective:m,transformPerspective:m,opacity:G,originX:fe,originY:fe,originZ:m,zIndex:ke,filter:ie,WebkitFilter:ie,fillOpacity:G,strokeOpacity:G,numOctaves:ke},le=e=>Pe[e];function re(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function Rt(e,t){let n=le(e);return n!==ie&&(n=Ce),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Bt={linear:kt,easeIn:vt,easeInOut:mt,easeOut:ft,circIn:pt,circInOut:ht,circOut:yt,backIn:dt,backInOut:ut,backOut:lt,anticipate:ct,bounceIn:ot,bounceInOut:st,bounceOut:rt};function be(e){if(Array.isArray(e)){const[t,n,a,i]=e;return it(t,n,a,i)}else if(typeof e=="string")return Bt[e];return e}function Ft(e){return Array.isArray(e)&&typeof e[0]!="number"}function ge(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Ce.test(t)&&!t.startsWith("url("))}function Wt(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function Dt({ease:e,times:t,delay:n,...a}){const i={...a};return t&&(i.offset=t),e&&(i.ease=Ft(e)?e.map(be):be(e)),n&&(i.elapsed=-n),i}function Ut(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),Wt(t),Xt(e)||(e={...e,...Ie(n,t.to)}),{...t,...Dt(e)}}function Xt({delay:e,repeat:t,repeatType:n,repeatDelay:a,from:i,...r}){return!!Object.keys(r).length}function Yt(e,t){return e[t]||e.default||e}function Zt(e,t,n,a,i){const r=Yt(a,e);let o=r.from===null||r.from===void 0?t.get():r.from;const s=ge(e,n);o==="none"&&s&&typeof n=="string"&&(o=Rt(e,n));const c=ge(e,o);function h(u){const f={from:o,to:n,velocity:a.velocity?a.velocity:t.getVelocity(),onUpdate:d=>t.set(d)};return r.type==="inertia"||r.type==="decay"?_e({...f,...r}):et({...Ut(r,f,e),onUpdate:d=>{f.onUpdate(d),r.onUpdate&&r.onUpdate(d)},onComplete:()=>{i&&i(),u&&u()}})}function l(u){return t.set(n),i&&i(),u&&u(),{stop:()=>{}}}return!c||!s||r.type===!1?l:h}function Qt(){const{motionValues:e,stop:t,get:n}=Pt();return{motionValues:e,stop:t,push:(i,r,o,s={},c)=>{const h=o[i],l=n(i,h,o);if(s&&s.immediate){l.set(r);return}const u=Zt(i,l,r,s,c);l.start(u)}}}function Gt(e,t={},{motionValues:n,push:a,stop:i}=Qt()){const r=V(t),o=j(!1);M(n,u=>{o.value=Object.values(u).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const s=u=>{if(!r||!r[u])throw new Error(`The variant ${u} does not exist.`);return r[u]},c=u=>{typeof u=="string"&&(u=s(u));const f=Object.entries(u).map(([p,k])=>{if(p!=="transition")return new Promise(x=>a(p,k,e,u.transition||Ie(p,u[p]),x))}).filter(Boolean);async function d(){var p,k;await Promise.all(f),(k=(p=u.transition)==null?void 0:p.onComplete)==null||k.call(p)}return Promise.all([d()])};return{isAnimating:o,apply:c,set:u=>{const f=X(u)?u:s(u);Object.entries(f).forEach(([d,p])=>{d!=="transition"&&a(d,p,e,{immediate:!0})})},leave:async u=>{let f;if(r&&(r.leave&&(f=r.leave),!r.leave&&r.initial&&(f=r.initial)),!f){u();return}await c(f),u()},stop:i}}const ue=typeof window<"u",Kt=()=>ue&&(window.onpointerdown===null||(S==null?void 0:S.TEST)),Jt=()=>ue&&(window.ontouchstart===null||(S==null?void 0:S.TEST)),_t=()=>ue&&(window.onmousedown===null||(S==null?void 0:S.TEST));function en({target:e,state:t,variants:n,apply:a}){const i=V(n),r=j(!1),o=j(!1),s=j(!1),c=g(()=>{let l=[...Object.keys(t.value||{})];return i&&(i.hovered&&(l=[...l,...Object.keys(i.hovered)]),i.tapped&&(l=[...l,...Object.keys(i.tapped)]),i.focused&&(l=[...l,...Object.keys(i.focused)])),l}),h=g(()=>{const l={};Object.assign(l,t.value),r.value&&i.hovered&&Object.assign(l,i.hovered),o.value&&i.tapped&&Object.assign(l,i.tapped),s.value&&i.focused&&Object.assign(l,i.focused);for(const u in l)c.value.includes(u)||delete l[u];return l});i.hovered&&(A(e,"mouseenter",()=>r.value=!0),A(e,"mouseleave",()=>{r.value=!1,o.value=!1})),i.tapped&&(_t()&&(A(e,"mousedown",()=>o.value=!0),A(e,"mouseup",()=>o.value=!1)),Kt()&&(A(e,"pointerdown",()=>o.value=!0),A(e,"pointerup",()=>o.value=!1)),Jt()&&(A(e,"touchstart",()=>o.value=!0),A(e,"touchend",()=>o.value=!1))),i.focused&&(A(e,"focus",()=>s.value=!0),A(e,"blur",()=>s.value=!1)),M([r,o,s],()=>{a(h.value)})}function tn({set:e,target:t,variants:n,variant:a}){const i=V(n);M(()=>t,()=>{i&&(i.initial&&(e("initial"),a.value="initial"),i.enter&&(a.value="enter"))},{immediate:!0,flush:"pre"})}function nn({state:e,apply:t}){M(e,n=>{n&&t(n)},{immediate:!0})}function $e({target:e,variants:t,variant:n}){const a=V(t);a&&(a.visible||a.visibleOnce)&&zt(e,([{isIntersecting:i}])=>{a.visible?i?n.value="visible":n.value="initial":a.visibleOnce&&(i&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function an(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&tn(e),t.syncVariants&&nn(e),t.visibilityHooks&&$e(e),t.eventListeners&&en(e)}function He(e={}){const t=L({...e}),n=j({});return M(t,()=>{const a={};for(const[i,r]of Object.entries(t)){const o=le(i),s=re(r,o);a[i]=s}n.value=a},{immediate:!0,deep:!0}),{state:t,style:n}}function de(e,t){M(()=>H(e),n=>{n&&t(n)},{immediate:!0})}const rn={x:"translateX",y:"translateY",z:"translateZ"};function Ne(e={},t=!0){const n=L({...e}),a=j("");return M(n,i=>{let r="",o=!1;if(t&&(i.x||i.y||i.z)){const s=[i.x||0,i.y||0,i.z||0].map(c=>re(c,m)).join(",");r+=`translate3d(${s}) `,o=!0}for(const[s,c]of Object.entries(i)){if(t&&(s==="x"||s==="y"||s==="z"))continue;const h=le(s),l=re(c,h);r+=`${rn[s]||s}(${l}) `}t&&!o&&(r+="translateZ(0px) "),a.value=r.trim()},{immediate:!0,deep:!0}),{state:n,transform:a}}const sn=["","X","Y","Z"],on=["perspective","translate","scale","rotate","skew"],Re=["transformPerspective","x","y","z"];on.forEach(e=>{sn.forEach(t=>{const n=e+t;Re.push(n)})});const cn=new Set(Re);function ye(e){return cn.has(e)}const ln=new Set(["originX","originY","originZ"]);function Be(e){return ln.has(e)}function un(e){const t={},n={};return Object.entries(e).forEach(([a,i])=>{ye(a)||Be(a)?t[a]=i:n[a]=i}),{transform:t,style:n}}function Z(e){const{transform:t,style:n}=un(e),{transform:a}=Ne(t),{style:i}=He(n);return a.value&&(i.value.transform=a.value),i.value}function dn(e,t){let n,a;const{state:i,style:r}=He();return de(e,o=>{a=o;for(const s of Object.keys(Pe))o.style[s]===null||o.style[s]===""||ye(s)||Be(s)||(i[s]=o.style[s]);n&&Object.entries(n).forEach(([s,c])=>o.style[s]=c),t&&t(i)}),M(r,o=>{if(!a){n=o;return}for(const s in o)a.style[s]=o[s]},{immediate:!0}),{style:i}}function yn(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=a=>a.endsWith("px")||a.endsWith("deg")?Number.parseFloat(a):Number.isNaN(Number(a))?Number(a):a;return t.reduce((a,i)=>{if(!i)return a;const[r,o]=i.split("("),c=o.split(",").map(l=>n(l.endsWith(")")?l.replace(")",""):l.trim())),h=c.length===1?c[0]:c;return{...a,[r]:h}},{})}function hn(e,t){Object.entries(yn(t)).forEach(([n,a])=>{const i=["x","y","z"];if(n==="translate3d"){if(a===0){i.forEach(r=>e[r]=0);return}a.forEach((r,o)=>e[i[o]]=r);return}if(a=Number.parseFloat(`${a}`),n==="translateX"){e.x=a;return}if(n==="translateY"){e.y=a;return}if(n==="translateZ"){e.z=a;return}e[n]=a})}function pn(e,t){let n,a;const{state:i,transform:r}=Ne();return de(e,o=>{a=o,o.style.transform&&hn(i,o.style.transform),n&&(o.style.transform=n),t&&t(i)}),M(r,o=>{if(!a){n=o;return}a.style.transform=o},{immediate:!0}),{transform:i}}function fn(e){return Object.entries(e)}function mn(e,t){const n=L({}),a=o=>Object.entries(o).forEach(([s,c])=>n[s]=c),{style:i}=dn(e,a),{transform:r}=pn(e,a);return M(n,o=>{fn(o).forEach(([s,c])=>{const h=ye(s)?r:i;h[s]&&h[s]===c||(h[s]=c)})},{immediate:!0,deep:!0}),de(e,()=>t),{motionProperties:n,style:i,transform:r}}function vn(e={}){const t=V(e),n=j();return{state:g(()=>{if(n.value)return t[n.value]}),variant:n}}function Fe(e,t={},n){const{motionProperties:a}=mn(e),{variant:i,state:r}=vn(t),o=Gt(a,t),s={target:e,variant:i,variants:t,state:r,motionProperties:a,...o};return an(s,n),s}const We=["delay","duration"],kn=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused",...We];function bn(e){return We.includes(e)}function gn(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};if(n){n.variants&&X(n.variants)&&(t.value={...t.value,...n.variants});for(let a of kn)if(!(!n||!n[a])){if(bn(a)&&typeof n[a]=="number"){for(const i of["enter","visible","visibleOnce"]){const r=t.value[i];r!=null&&(r.transition??(r.transition={}),r.transition[a]=n[a])}continue}if(X(n[a])){const i=n[a];a==="visible-once"&&(a="visibleOnce"),t.value[a]=i}}}}function te(e,t=!1){return{created:(i,r,o)=>{const s=r.value&&typeof r.value=="string"?r.value:o.key;s&&J[s]&&J[s].stop();const c=t?structuredClone(Ve(e)||{}):e||{},h=j(c);typeof r.value=="object"&&(h.value=r.value),gn(o,h);const u=Fe(i,h,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});i.motionInstance=u,s&&(J[s]=u)},mounted:(i,r,o)=>{i.motionInstance&&$e(i.motionInstance)},getSSRProps(i,r){let{initial:o}=i.value||r&&(r==null?void 0:r.props)||{};o=V(o);const s=Ae({},(e==null?void 0:e.initial)||{},o||{});return!s||Object.keys(s).length===0?void 0:{style:Z(s)}}}}const Mn={initial:{opacity:0},enter:{opacity:1}},xn={initial:{opacity:0},visible:{opacity:1}},wn={initial:{opacity:0},visibleOnce:{opacity:1}},On={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},An={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Cn={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},jn={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Sn={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Tn={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Vn={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},zn={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},qn={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},En={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Ln={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},In={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Pn={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},$n={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Hn={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Nn={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},Rn={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Bn={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Fn={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Wn={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Dn={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Un={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Xn={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Yn={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Zn={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Qn={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Gn={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Y={__proto__:null,fade:Mn,fadeVisible:xn,fadeVisibleOnce:wn,pop:On,popVisible:An,popVisibleOnce:Cn,rollBottom:Pn,rollLeft:jn,rollRight:Vn,rollTop:En,rollVisibleBottom:$n,rollVisibleLeft:Sn,rollVisibleOnceBottom:Hn,rollVisibleOnceLeft:Tn,rollVisibleOnceRight:qn,rollVisibleOnceTop:In,rollVisibleRight:zn,rollVisibleTop:Ln,slideBottom:Zn,slideLeft:Nn,slideRight:Fn,slideTop:Un,slideVisibleBottom:Qn,slideVisibleLeft:Rn,slideVisibleOnceBottom:Gn,slideVisibleOnceLeft:Bn,slideVisibleOnceRight:Dn,slideVisibleOnceTop:Yn,slideVisibleRight:Wn,slideVisibleTop:Xn};function Kn(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",a=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(a,i=>n.charAt(t.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/-{2,}/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const De=Symbol(""),Ue={preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function Jn(e){return Object.prototype.toString.call(e)==="[object Object]"}function se(e){if(Array.isArray(e))return e.map(se);if(Jn(e)){const t={};for(const n in e)t[n]=se(e[n]);return t}return e}function Xe(e){const t=L({}),n=ze(De,{}),a=g(()=>e.preset==null?{}:n!=null&&e.preset in n?structuredClone(Ve(n)[e.preset]):e.preset in Y?structuredClone(Y[e.preset]):{}),i=g(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused}));function r(c,h){for(const l of["delay","duration"]){if(h[l]==null)continue;const u=Number.parseInt(h[l]);for(const f of["enter","visible","visibleOnce"]){const d=c[f];d!=null&&(d.transition??(d.transition={}),d.transition[l]=u)}}return c}const o=g(()=>{const c=Ae({},i.value,a.value,e.variants||{});return r({...c},e)});function s(c,h,l){var f;c.props??(c.props={}),(f=c.props).style??(f.style={}),c.props.style={...c.props.style,...l};const u=r(se(o.value),c.props);return c.props.onVnodeMounted=({el:d})=>{t[h]=Fe(d,u)},c.props.onVnodeUpdated=({el:d})=>{const p=Z(t[h].state);for(const[k,x]of Object.entries(p))d.style[k]=x},c}return{motionConfig:o,setNodeInstance:s}}const _n=Se({name:"Motion",props:{...Ue,is:{type:[String,Object],default:"div"}},setup(e){const t=Te(),{motionConfig:n,setNodeInstance:a}=Xe(e);return()=>{const i=Z(n.value.initial||{}),r=R(e.is,void 0,t);return a(r,0,i),r}}}),ea=Se({name:"MotionGroup",props:{...Ue,is:{type:[String,Object],required:!1}},setup(e){const t=Te(),{motionConfig:n,setNodeInstance:a}=Xe(e);return()=>{var o;const i=Z(n.value.initial||{}),r=((o=t.default)==null?void 0:o.call(t))||[];for(let s=0;s<r.length;s++){const c=r[s];c.type===gt&&Array.isArray(c.children)?c.children.forEach(function h(l,u){if(l!=null){if(Array.isArray(l)){h(l,u);return}typeof l=="object"&&a(l,u,i)}}):a(c,s,i)}return e.is?R(e.is,void 0,r):r}}}),ja={install(e,t){if(e.directive("motion",te()),!t||t&&!t.excludePresets)for(const n in Y){const a=Y[n];e.directive(`motion-${Kn(n)}`,te(a,!0))}if(t&&t.directives)for(const n in t.directives){const a=t.directives[n];a.initial,e.directive(`motion-${n}`,te(a,!0))}e.provide(De,t==null?void 0:t.directives),e.component("Motion",_n),e.component("MotionGroup",ea)}};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=e=>e==="";/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=(...e)=>e.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase());/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=e=>{const t=aa(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=({name:e,iconNode:t,absoluteStrokeWidth:n,"absolute-stroke-width":a,strokeWidth:i,"stroke-width":r,size:o=P.width,color:s=P.stroke,...c},{slots:h})=>R("svg",{...P,...c,width:o,height:o,stroke:s,"stroke-width":Me(n)||Me(a)||n===!0||a===!0?Number(i||r||P["stroke-width"])*24/Number(o):i||r||P["stroke-width"],class:na("lucide",c.class,...e?[`lucide-${xe(ia(e))}-icon`,`lucide-${xe(e)}`]:["lucide-icon"]),...!h.default&&!ta(c)&&{"aria-hidden":"true"}},[...t.map(l=>R(...l)),...h.default?[h.default()]:[]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(e,t)=>(n,{slots:a,attrs:i})=>R(ra,{...i,...n,iconNode:t,name:e},a);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=y("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=y("alarm-clock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=y("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=y("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=y("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=y("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=y("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=y("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=y("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=y("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=y("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=y("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=y("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=y("circle-user",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=y("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=y("circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=y("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=y("coins",[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=y("contact",[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=y("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=y("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=y("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=y("crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=y("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=y("film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=y("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=y("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=y("gift",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=y("hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=y("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=y("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=y("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=y("id-card",[["path",{d:"M16 10h2",key:"8sgtl7"}],["path",{d:"M16 14h2",key:"epxaof"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0",key:"n6f512"}],["circle",{cx:"9",cy:"11",r:"2",key:"yxgjnd"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=y("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=y("inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=y("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=y("key-round",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=y("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=y("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=y("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=y("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=y("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=y("megaphone",[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=y("message-circle",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=y("message-square-reply",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"m10 8-3 3 3 3",key:"fp6dz7"}],["path",{d:"M17 14v-1a2 2 0 0 0-2-2H7",key:"1tkjnz"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=y("package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=y("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=y("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=y("pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=y("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=y("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=y("qr-code",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=y("radio",[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=y("refresh-ccw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=y("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=y("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=y("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=y("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=y("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=y("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=y("sliders-horizontal",[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=y("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=y("smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=y("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=y("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=y("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=y("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=y("type",[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=y("user-check",[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=y("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=y("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=y("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=y("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=y("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function sa(e,t){return oe()?(je(e,t),!0):!1}const ne=new WeakMap,oa=(...e)=>{var t;const n=e[0],a=(t=B())===null||t===void 0?void 0:t.proxy,i=a??oe();if(i==null&&!qe())throw new Error("injectLocal must be called in setup");return i&&ne.has(i)&&n in ne.get(i)?ne.get(i)[n]:ze(...e)},ca=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const la=Object.prototype.toString,ua=e=>la.call(e)==="[object Object]";function da(e,t=!1,n="Timeout"){return new Promise((a,i)=>{t?setTimeout(i,e,n):setTimeout(a,e)})}function Ye(e){return e}function ya(e,t){var n;if(typeof e=="number")return e+t;const a=((n=e.match(/^-?\d+\.?\d*/))===null||n===void 0?void 0:n[0])||"",i=e.slice(a.length),r=Number.parseFloat(a)+t;return Number.isNaN(r)?e:r+i}function N(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function ae(e){return Array.isArray(e)?e:[e]}function ha(e){return B()}function pa(e,t=!0,n){ha()?ce(e,n):t?e():Mt(e)}function fa(e,t,n){return M(e,t,{...n,immediate:!0})}const Q=ca?window:void 0;function ma(e){var t;const n=v(e);return(t=n==null?void 0:n.$el)!==null&&t!==void 0?t:n}function U(...e){const t=(a,i,r,o)=>(a.addEventListener(i,r,o),()=>a.removeEventListener(i,r,o)),n=g(()=>{const a=ae(v(e[0])).filter(i=>i!=null);return a.every(i=>typeof i!="string")?a:void 0});return fa(()=>{var a,i;return[(a=(i=n.value)===null||i===void 0?void 0:i.map(r=>ma(r)))!==null&&a!==void 0?a:[Q].filter(r=>r!=null),ae(v(n.value?e[1]:e[0])),ae(V(n.value?e[2]:e[1])),v(n.value?e[3]:e[2])]},([a,i,r,o],s,c)=>{if(!(a!=null&&a.length)||!(i!=null&&i.length)||!(r!=null&&r.length))return;const h=ua(o)?{...o}:o,l=a.flatMap(u=>i.flatMap(f=>r.map(d=>t(u,f,d,h))));c(()=>{l.forEach(u=>u())})},{flush:"post"})}function va(){const e=C(!1),t=B();return t&&ce(()=>{e.value=!0},t),e}function ka(e){const t=va();return g(()=>(t.value,!!e()))}const ba=Symbol("vueuse-ssr-width");function Ze(){const e=qe()?oa(ba,null):null;return typeof e=="number"?e:void 0}function $(e,t={}){const{window:n=Q,ssrWidth:a=Ze()}=t,i=ka(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),r=C(typeof a=="number"),o=C(),s=C(!1),c=h=>{s.value=h.matches};return xt(()=>{if(r.value){r.value=!i.value,s.value=v(e).split(",").some(h=>{const l=h.includes("not all"),u=h.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),f=h.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let d=!!(u||f);return u&&d&&(d=a>=N(u[1])),f&&d&&(d=a<=N(f[1])),l?!d:d});return}i.value&&(o.value=n.matchMedia(v(e)),s.value=o.value.matches)}),U(o,"change",c,{passive:!0}),g(()=>s.value)}const Zi={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function Qi(e,t={}){function n(d,p){let k=v(e[v(d)]);return p!=null&&(k=ya(k,p)),typeof k=="number"&&(k=`${k}px`),k}const{window:a=Q,strategy:i="min-width",ssrWidth:r=Ze()}=t,o=typeof r=="number",s=o?C(!1):{value:!0};o&&pa(()=>s.value=!!a);function c(d,p){return!s.value&&o?d==="min"?r>=N(p):r<=N(p):a?a.matchMedia(`(${d}-width: ${p})`).matches:!1}const h=d=>$(()=>`(min-width: ${n(d)})`,t),l=d=>$(()=>`(max-width: ${n(d)})`,t),u=Object.keys(e).reduce((d,p)=>(Object.defineProperty(d,p,{get:()=>i==="min-width"?h(p):l(p),enumerable:!0,configurable:!0}),d),{});function f(){const d=Object.keys(e).map(p=>[p,u[p],N(n(p))]).sort((p,k)=>p[2]-k[2]);return g(()=>d.filter(([,p])=>p.value).map(([p])=>p))}return Object.assign(u,{greaterOrEqual:h,smallerOrEqual:l,greater(d){return $(()=>`(min-width: ${n(d,.1)})`,t)},smaller(d){return $(()=>`(max-width: ${n(d,-.1)})`,t)},between(d,p){return $(()=>`(min-width: ${n(d)}) and (max-width: ${n(p,-.1)})`,t)},isGreater(d){return c("min",n(d,.1))},isGreaterOrEqual(d){return c("min",n(d))},isSmaller(d){return c("max",n(d,-.1))},isSmallerOrEqual(d){return c("max",n(d))},isInBetween(d,p){return c("min",n(d))&&c("max",n(p,-.1))},current:f,active(){const d=f();return g(()=>d.value.length===0?"":d.value.at(i==="min-width"?-1:0))}})}function Gi(e,t={}){const{threshold:n=50,onSwipe:a,onSwipeEnd:i,onSwipeStart:r,passive:o=!0}=t,s=L({x:0,y:0}),c=L({x:0,y:0}),h=g(()=>s.x-c.x),l=g(()=>s.y-c.y),{max:u,abs:f}=Math,d=g(()=>u(f(h.value),f(l.value))>=n),p=C(!1),k=g(()=>d.value?f(h.value)>f(l.value)?h.value>0?"left":"right":l.value>0?"up":"down":"none"),x=b=>[b.touches[0].clientX,b.touches[0].clientY],z=(b,T)=>{s.x=b,s.y=T},he=(b,T)=>{c.x=b,c.y=T},I={passive:o,capture:!o},Qe=b=>{p.value&&(i==null||i(b,k.value)),p.value=!1},Ge=[U(e,"touchstart",b=>{if(b.touches.length!==1)return;const[T,F]=x(b);z(T,F),he(T,F),r==null||r(b)},I),U(e,"touchmove",b=>{if(b.touches.length!==1)return;const[T,F]=x(b);he(T,F),I.capture&&!I.passive&&Math.abs(h.value)>Math.abs(l.value)&&b.preventDefault(),!p.value&&d.value&&(p.value=!0),p.value&&(a==null||a(b))},I),U(e,["touchend","touchcancel"],Qe,I)];return{isSwiping:p,direction:k,coordsStart:s,coordsEnd:c,lengthX:h,lengthY:l,stop:()=>Ge.forEach(b=>b())}}const Ki=Object.assign({},{linear:Ye},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});function ga([e,t,n,a]){const i=(l,u)=>1-3*u+3*l,r=(l,u)=>3*u-6*l,o=l=>3*l,s=(l,u,f)=>((i(u,f)*l+r(u,f))*l+o(u))*l,c=(l,u,f)=>3*i(u,f)*l*l+2*r(u,f)*l+o(u),h=l=>{let u=l;for(let f=0;f<4;++f){const d=c(u,e,n);if(d===0)return u;const p=s(u,e,n)-l;u-=p/d}return u};return l=>e===t&&n===a?l:s(h(l),t,a)}function we(e,t,n){return e+n*(t-e)}function Ma(e,t,n){const a=v(e),i=v(t);if(typeof a=="number"&&typeof i=="number")return we(a,i,n);if(Array.isArray(a)&&Array.isArray(i))return a.map((r,o)=>we(r,v(i[o]),n));throw new TypeError("Unknown transition type, specify an interpolation function.")}function Oe(e){var t;return typeof e=="function"?e:(t=v(e))!==null&&t!==void 0?t:Ye}function xa(e,t,n,a={}){var i;const{window:r=Q}=a,o=v(t),s=v(n),c=(i=v(a.duration))!==null&&i!==void 0?i:1e3,h=Date.now(),l=Date.now()+c,u=typeof a.interpolation=="function"?a.interpolation:Ma,f=typeof a.easing<"u"?Oe(a.easing):Oe(a.transition),d=typeof f=="function"?f:ga(f);return new Promise(p=>{e.value=o;const k=()=>{var x;if(!((x=a.abort)===null||x===void 0)&&x.call(a)){p();return}const z=Date.now();e.value=u(o,s,d((z-h)/c)),z<l?r==null||r.requestAnimationFrame(k):(e.value=s,p())};k()})}function Ji(e,t={}){let n=0;const a=()=>{const r=v(e);return typeof t.interpolation>"u"&&Array.isArray(r)?r.map(v):r},i=C(a());return M(a,async r=>{var o,s;if(v(t.disabled))return;const c=++n;t.delay&&await da(v(t.delay)),c===n&&((o=t.onStarted)===null||o===void 0||o.call(t),await xa(i,i.value,r,{...t,abort:()=>{var h;return c!==n||((h=t.abort)===null||h===void 0?void 0:h.call(t))}}),(s=t.onFinished)===null||s===void 0||s.call(t))},{deep:!0}),M(()=>v(t.disabled),r=>{r&&(n++,i.value=a())}),sa(()=>{n++}),g(()=>v(t.disabled)?a():i.value)}export{Ci as $,za as A,Ia as B,Fa as C,wi as D,ci as E,Vi as F,ei as G,ri as H,li as I,fi as J,ui as K,yi as L,vi as M,qa as N,ti as O,Oi as P,Ai as Q,Si as R,$i as S,Ri as T,Wi as U,Ya as V,Ui as W,Xi as X,La as Y,Yi as Z,Ua as _,Ra as a,Ea as a0,Ji as a1,Ki as a2,Pi as a3,Ei as a4,Pa as a5,Da as a6,Ga as a7,ki as a8,ni as a9,bi as aa,Fi as ab,xi as ac,Gi as ad,Qi as ae,Zi as af,Bi as ag,oi as ah,Ja as ai,Ka as aj,Ha as ak,Na as al,Ti as am,Za as an,Ta as ao,_a as ap,Ii as b,hi as c,qi as d,pi as e,Di as f,Xa as g,Ba as h,di as i,Qa as j,mi as k,Li as l,zi as m,Va as n,ja as o,Wa as p,Sa as q,ai as r,Ni as s,Hi as t,si as u,ii as v,ji as w,$a as x,Mi as y,gi as z};
