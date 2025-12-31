(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const xf=!1;var xu=Array.isArray,z_=Array.prototype.indexOf,yu=Array.from,Cg=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Rg=Object.getOwnPropertyDescriptors,V_=Object.prototype,G_=Array.prototype,ed=Object.getPrototypeOf,bp=Object.isExtensible;function na(r){return typeof r=="function"}const ui=()=>{};function H_(r){return r()}function _c(r){for(var e=0;e<r.length;e++)r[e]()}function Ig(){var r,e,t=new Promise((n,i)=>{r=n,e=i});return{promise:t,resolve:r,reject:e}}const un=2,td=4,bu=8,Pg=1<<24,fr=16,dr=32,Fs=64,Mu=128,Mi=512,an=1024,zn=2048,Si=4096,$n=8192,sr=16384,nd=32768,cr=65536,Mp=1<<17,Lg=1<<18,Xo=1<<19,Dg=1<<20,rr=1<<25,ws=32768,yf=1<<21,id=1<<22,Dr=1<<23,ki=Symbol("$state"),Ng=Symbol("legacy props"),W_=Symbol(""),_o=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Su(r){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function X_(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function q_(r){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Y_(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function $_(r){throw new Error("https://svelte.dev/e/effect_orphan")}function Z_(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function K_(r){throw new Error("https://svelte.dev/e/props_invalid_value")}function j_(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function J_(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Q_(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ex(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const tx=1,nx=2,Ug=4,ix=8,rx=16,sx=1,ox=2,ax=4,lx=8,cx=16,ux=1,hx=2,rn=Symbol(),fx="http://www.w3.org/1999/xhtml",dx="http://www.w3.org/2000/svg",px="@attach";function mx(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function gx(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Og(r){return r===this.v}function Fg(r,e){return r!=r?e==e:r!==e||r!==null&&typeof r=="object"||typeof r=="function"}function Bg(r){return!Fg(r,this.v)}let qo=!1,vx=!1;function _x(){qo=!0}let It=null;function Eo(r){It=r}function vn(r){return kg().get(r)}function Vn(r,e){return kg().set(r,e),e}function Jn(r,e=!1,t){It={p:It,i:!1,c:null,e:null,s:r,x:null,l:qo&&!e?{s:null,u:null,$:[]}:null}}function Qn(r){var e=It,t=e.e;if(t!==null){e.e=null;for(var n of t)n0(n)}return r!==void 0&&(e.x=r),e.i=!0,It=e.p,r??{}}function tl(){return!qo||It!==null&&It.l===null}function kg(r){return It===null&&Su(),It.c??=new Map(xx(It)||void 0)}function xx(r){let e=r.p;for(;e!==null;){const t=e.c;if(t!==null)return t;e=e.p}return null}let fs=[];function zg(){var r=fs;fs=[],_c(r)}function Bs(r){if(fs.length===0&&!wa){var e=fs;queueMicrotask(()=>{e===fs&&zg()})}fs.push(r)}function yx(){for(;fs.length>0;)zg()}function Vg(r){var e=Mt;if(e===null)return _t.f|=Dr,r;if((e.f&nd)===0){if((e.f&Mu)===0)throw r;e.b.error(r)}else Ao(r,e)}function Ao(r,e){for(;e!==null;){if((e.f&Mu)!==0)try{e.b.error(r);return}catch(t){r=t}e=e.parent}throw r}const yl=new Set;let Nt=null,li=null,si=[],wu=null,bf=!1,wa=!1;class Ui{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#i=0;#n=0;#l=null;#s=new Set;#r=new Set;skipped_effects=new Set;is_fork=!1;is_deferred(){return this.is_fork||this.#n>0}process(e){si=[],this.apply();var t={parent:null,effect:null,effects:[],render_effects:[]};for(const n of e)this.#o(n,t);this.is_fork||this.#u(),this.is_deferred()?(this.#a(t.effects),this.#a(t.render_effects)):(Nt=null,Sp(t.render_effects),Sp(t.effects),this.#l?.resolve()),li=null}#o(e,t){e.f^=an;for(var n=e.first;n!==null;){var i=n.f,s=(i&(dr|Fs))!==0,o=s&&(i&an)!==0,a=o||(i&$n)!==0||this.skipped_effects.has(n);if((n.f&Mu)!==0&&n.b?.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[]}),!a&&n.fn!==null){s?n.f^=an:(i&td)!==0?t.effects.push(n):$o(n)&&((n.f&fr)!==0&&this.#s.add(n),Io(n));var l=n.first;if(l!==null){n=l;continue}}var c=n.parent;for(n=n.next;n===null&&c!==null;)c===t.effect&&(this.#a(t.effects),this.#a(t.render_effects),t=t.parent),n=c.next,c=c.parent}}#a(e){for(const t of e)(t.f&zn)!==0?this.#s.add(t):(t.f&Si)!==0&&this.#r.add(t),this.#c(t.deps),cn(t,an)}#c(e){if(e!==null)for(const t of e)(t.f&un)===0||(t.f&ws)===0||(t.f^=ws,this.#c(t.deps))}capture(e,t){this.previous.has(e)||this.previous.set(e,t),(e.f&Dr)===0&&(this.current.set(e,e.v),li?.set(e,e.v))}activate(){Nt=this,this.apply()}deactivate(){Nt===this&&(Nt=null,li=null)}flush(){if(this.activate(),si.length>0){if(Gg(),Nt!==null&&Nt!==this)return}else this.#i===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#t)e(this);this.#t.clear()}#u(){if(this.#n===0){for(const e of this.#e)e();this.#e.clear()}this.#i===0&&this.#h()}#h(){if(yl.size>1){this.previous.clear();var e=li,t=!0,n={parent:null,effect:null,effects:[],render_effects:[]};for(const s of yl){if(s===this){t=!1;continue}const o=[];for(const[l,c]of this.current){if(s.current.has(l))if(t&&c!==s.current.get(l))s.current.set(l,c);else continue;o.push(l)}if(o.length===0)continue;const a=[...s.current.keys()].filter(l=>!this.current.has(l));if(a.length>0){var i=si;si=[];const l=new Set,c=new Map;for(const u of o)Hg(u,a,l,c);if(si.length>0){Nt=s,s.apply();for(const u of si)s.#o(u,n);s.deactivate()}si=i}}Nt=null,li=e}this.committed=!0,yl.delete(this)}increment(e){this.#i+=1,e&&(this.#n+=1)}decrement(e){this.#i-=1,e&&(this.#n-=1),this.revive()}revive(){for(const e of this.#s)this.#r.delete(e),cn(e,zn),Ts(e);for(const e of this.#r)cn(e,Si),Ts(e);this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#l??=Ig()).promise}static ensure(){if(Nt===null){const e=Nt=new Ui;yl.add(Nt),wa||Ui.enqueue(()=>{Nt===e&&e.flush()})}return Nt}static enqueue(e){Bs(e)}apply(){}}function bx(r){var e=wa;wa=!0;try{for(var t;;){if(yx(),si.length===0&&(Nt?.flush(),si.length===0))return wu=null,t;Gg()}}finally{wa=e}}function Gg(){var r=_s;bf=!0;var e=null;try{var t=0;for(yc(!0);si.length>0;){var n=Ui.ensure();if(t++>1e3){var i,s;Mx()}n.process(si),Nr.clear()}}finally{bf=!1,yc(r),wu=null}}function Mx(){try{Z_()}catch(r){Ao(r,wu)}}let er=null;function Sp(r){var e=r.length;if(e!==0){for(var t=0;t<e;){var n=r[t++];if((n.f&(sr|$n))===0&&$o(n)&&(er=new Set,Io(n),n.deps===null&&n.first===null&&n.nodes===null&&(n.teardown===null&&n.ac===null?o0(n):n.fn=null),er?.size>0)){Nr.clear();for(const i of er){if((i.f&(sr|$n))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)er.has(o)&&(er.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(sr|$n))===0&&Io(l)}}er.clear()}}er=null}}function Hg(r,e,t,n){if(!t.has(r)&&(t.add(r),r.reactions!==null))for(const i of r.reactions){const s=i.f;(s&un)!==0?Hg(i,e,t,n):(s&(id|fr))!==0&&(s&zn)===0&&Wg(i,e,n)&&(cn(i,zn),Ts(i))}}function Wg(r,e,t){const n=t.get(r);if(n!==void 0)return n;if(r.deps!==null)for(const i of r.deps){if(e.includes(i))return!0;if((i.f&un)!==0&&Wg(i,e,t))return t.set(i,!0),!0}return t.set(r,!1),!1}function Ts(r){for(var e=wu=r;e.parent!==null;){e=e.parent;var t=e.f;if(bf&&e===Mt&&(t&fr)!==0&&(t&Lg)===0)return;if((t&(Fs|dr))!==0){if((t&an)===0)return;e.f^=an}}si.push(e)}function Xg(r){let e=0,t=Es(0),n;return()=>{Ro()&&(S(t),Eu(()=>(e===0&&(n=Qe(()=>r(()=>Ta(t)))),e+=1,()=>{Bs(()=>{e-=1,e===0&&(n?.(),n=void 0,Ta(t))})})))}}var Sx=cr|Xo|Mu;function wx(r,e,t){new Tx(r,e,t)}class Tx{parent;#e=!1;#t;#i=null;#n;#l;#s;#r=null;#o=null;#a=null;#c=null;#u=null;#h=0;#f=0;#p=!1;#d=null;#x=Xg(()=>(this.#d=Es(this.#h),()=>{this.#d=null}));constructor(e,t,n){this.#t=e,this.#n=t,this.#l=n,this.parent=Mt.b,this.#e=!!this.#n.pending,this.#s=Yo(()=>{Mt.b=this;{var i=this.#v();try{this.#r=Un(()=>n(i))}catch(s){this.error(s)}this.#f>0?this.#g():this.#e=!1}return()=>{this.#u?.remove()}},Sx)}#y(){try{this.#r=Un(()=>this.#l(this.#t))}catch(e){this.error(e)}this.#e=!1}#b(){const e=this.#n.pending;e&&(this.#o=Un(()=>e(this.#t)),Ui.enqueue(()=>{var t=this.#v();this.#r=this.#m(()=>(Ui.ensure(),Un(()=>this.#l(t)))),this.#f>0?this.#g():(vs(this.#o,()=>{this.#o=null}),this.#e=!1)}))}#v(){var e=this.#t;return this.#e&&(this.#u=or(),this.#t.before(this.#u),e=this.#u),e}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#m(e){var t=Mt,n=_t,i=It;Vi(this.#s),kn(this.#s),Eo(this.#s.ctx);try{return e()}catch(s){return Vg(s),null}finally{Vi(t),kn(n),Eo(i)}}#g(){const e=this.#n.pending;this.#r!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),c0(this.#r,this.#c)),this.#o===null&&(this.#o=Un(()=>e(this.#t)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#f+=e,this.#f===0&&(this.#e=!1,this.#o&&vs(this.#o,()=>{this.#o=null}),this.#c&&(this.#t.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#h+=e,this.#d&&Co(this.#d,this.#h)}get_effect_pending(){return this.#x(),S(this.#d)}error(e){var t=this.#n.onerror;let n=this.#n.failed;if(this.#p||!t&&!n)throw e;this.#r&&(ln(this.#r),this.#r=null),this.#o&&(ln(this.#o),this.#o=null),this.#a&&(ln(this.#a),this.#a=null);var i=!1,s=!1;const o=()=>{if(i){gx();return}i=!0,s&&ex(),Ui.ensure(),this.#h=0,this.#a!==null&&vs(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#r=this.#m(()=>(this.#p=!1,Un(()=>this.#l(this.#t)))),this.#f>0?this.#g():this.#e=!1};var a=_t;try{kn(null),s=!0,t?.(e,o),s=!1}catch(l){Ao(l,this.#s&&this.#s.parent)}finally{kn(a)}n&&Bs(()=>{this.#a=this.#m(()=>{Ui.ensure(),this.#p=!0;try{return Un(()=>{n(this.#t,()=>e,()=>o)})}catch(l){return Ao(l,this.#s.parent),null}finally{this.#p=!1}})})}}function qg(r,e,t,n){const i=tl()?nl:ut;if(t.length===0&&r.length===0){n(e.map(i));return}var s=Nt,o=Mt,a=Ex();function l(){Promise.all(t.map(c=>Ax(c))).then(c=>{a();try{n([...e.map(i),...c])}catch(u){(o.f&sr)===0&&Ao(u,o)}s?.deactivate(),xc()}).catch(c=>{Ao(c,o)})}r.length>0?Promise.all(r).then(()=>{a();try{return l()}finally{s?.deactivate(),xc()}}):l()}function Ex(){var r=Mt,e=_t,t=It,n=Nt;return function(s=!0){Vi(r),kn(e),Eo(t),s&&n?.activate()}}function xc(){Vi(null),kn(null),Eo(null)}function nl(r){var e=un|zn,t=_t!==null&&(_t.f&un)!==0?_t:null;return Mt!==null&&(Mt.f|=Xo),{ctx:It,deps:null,effects:null,equals:Og,f:e,fn:r,reactions:null,rv:0,v:rn,wv:0,parent:t??Mt,ac:null}}function Ax(r,e){let t=Mt;t===null&&X_();var n=t.b,i=void 0,s=Es(rn),o=!_t,a=new Map;return Ox(()=>{var l=Ig();i=l.promise;try{Promise.resolve(r()).then(l.resolve,l.reject).then(()=>{c===Nt&&c.committed&&c.deactivate(),xc()})}catch(f){l.reject(f),xc()}var c=Nt;if(o){var u=!n.is_pending();n.update_pending_count(1),c.increment(u),a.get(c)?.reject(_o),a.delete(c),a.set(c,l)}const h=(f,d=void 0)=>{if(c.activate(),d)d!==_o&&(s.f|=Dr,Co(s,d));else{(s.f&Dr)!==0&&(s.f^=Dr),Co(s,f);for(const[m,v]of a){if(a.delete(m),m===c)break;v.reject(_o)}}o&&(n.update_pending_count(-1),c.decrement(u))};l.promise.then(h,f=>h(null,f||"unknown"))}),rl(()=>{for(const l of a.values())l.reject(_o)}),new Promise(l=>{function c(u){function h(){u===i?l(s):c(i)}u.then(h,h)}c(i)})}function $t(r){const e=nl(r);return u0(e),e}function ut(r){const e=nl(r);return e.equals=Bg,e}function Yg(r){var e=r.effects;if(e!==null){r.effects=null;for(var t=0;t<e.length;t+=1)ln(e[t])}}function Cx(r){for(var e=r.parent;e!==null;){if((e.f&un)===0)return(e.f&sr)===0?e:null;e=e.parent}return null}function rd(r){var e,t=Mt;Vi(Cx(r));try{r.f&=~ws,Yg(r),e=p0(r)}finally{Vi(t)}return e}function $g(r){var e=rd(r);if(r.equals(e)||(Nt?.is_fork||(r.v=e),r.wv=f0()),!ks)if(li!==null)(Ro()||Nt?.is_fork)&&li.set(r,e);else{var t=(r.f&Mi)===0?Si:an;cn(r,t)}}let Mf=new Set;const Nr=new Map;let Zg=!1;function Es(r,e){var t={f:0,v:r,reactions:null,equals:Og,rv:0,wv:0};return t}function ri(r,e){const t=Es(r);return u0(t),t}function ze(r,e=!1,t=!0){const n=Es(r);return e||(n.equals=Bg),qo&&t&&It!==null&&It.l!==null&&(It.l.s??=[]).push(n),n}function Di(r,e){return de(r,Qe(()=>S(r))),e}function de(r,e,t=!1){_t!==null&&(!Oi||(_t.f&Mp)!==0)&&tl()&&(_t.f&(un|fr|id|Mp))!==0&&!ar?.includes(r)&&Q_();let n=t?xo(e):e;return Co(r,n)}function Co(r,e){if(!r.equals(e)){var t=r.v;ks?Nr.set(r,e):Nr.set(r,t),r.v=e;var n=Ui.ensure();n.capture(r,t),(r.f&un)!==0&&((r.f&zn)!==0&&rd(r),cn(r,(r.f&Mi)!==0?an:Si)),r.wv=f0(),Kg(r,zn),tl()&&Mt!==null&&(Mt.f&an)!==0&&(Mt.f&(dr|Fs))===0&&(ni===null?kx([r]):ni.push(r)),!n.is_fork&&Mf.size>0&&!Zg&&Rx()}return e}function Rx(){Zg=!1;var r=_s;yc(!0);const e=Array.from(Mf);try{for(const t of e)(t.f&an)!==0&&cn(t,Si),$o(t)&&Io(t)}finally{yc(r)}Mf.clear()}function Ta(r){de(r,r.v+1)}function Kg(r,e){var t=r.reactions;if(t!==null)for(var n=tl(),i=t.length,s=0;s<i;s++){var o=t[s],a=o.f;if(!(!n&&o===Mt)){var l=(a&zn)===0;if(l&&cn(o,e),(a&un)!==0){var c=o;li?.delete(c),(a&ws)===0&&(a&Mi&&(o.f|=ws),Kg(c,Si))}else l&&((a&fr)!==0&&er!==null&&er.add(o),Ts(o))}}}function xo(r){if(typeof r!="object"||r===null||ki in r)return r;const e=ed(r);if(e!==V_&&e!==G_)return r;var t=new Map,n=xu(r),i=ri(0),s=xs,o=a=>{if(xs===s)return a();var l=_t,c=xs;kn(null),Ap(s);var u=a();return kn(l),Ap(c),u};return n&&t.set("length",ri(r.length)),new Proxy(r,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&j_();var u=t.get(l);return u===void 0?u=o(()=>{var h=ri(c.value);return t.set(l,h),h}):de(u,c.value,!0),!0},deleteProperty(a,l){var c=t.get(l);if(c===void 0){if(l in a){const u=o(()=>ri(rn));t.set(l,u),Ta(i)}}else de(c,rn),Ta(i);return!0},get(a,l,c){if(l===ki)return r;var u=t.get(l),h=l in a;if(u===void 0&&(!h||Lr(a,l)?.writable)&&(u=o(()=>{var d=xo(h?a[l]:rn),m=ri(d);return m}),t.set(l,u)),u!==void 0){var f=S(u);return f===rn?void 0:f}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var u=t.get(l);u&&(c.value=S(u))}else if(c===void 0){var h=t.get(l),f=h?.v;if(h!==void 0&&f!==rn)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(a,l){if(l===ki)return!0;var c=t.get(l),u=c!==void 0&&c.v!==rn||Reflect.has(a,l);if(c!==void 0||Mt!==null&&(!u||Lr(a,l)?.writable)){c===void 0&&(c=o(()=>{var f=u?xo(a[l]):rn,d=ri(f);return d}),t.set(l,c));var h=S(c);if(h===rn)return!1}return u},set(a,l,c,u){var h=t.get(l),f=l in a;if(n&&l==="length")for(var d=c;d<h.v;d+=1){var m=t.get(d+"");m!==void 0?de(m,rn):d in a&&(m=o(()=>ri(rn)),t.set(d+"",m))}if(h===void 0)(!f||Lr(a,l)?.writable)&&(h=o(()=>ri(void 0)),de(h,xo(c)),t.set(l,h));else{f=h.v!==rn;var v=o(()=>xo(c));de(h,v)}var g=Reflect.getOwnPropertyDescriptor(a,l);if(g?.set&&g.set.call(u,c),!f){if(n&&typeof l=="string"){var p=t.get("length"),y=Number(l);Number.isInteger(y)&&y>=p.v&&de(p,y+1)}Ta(i)}return!0},ownKeys(a){S(i);var l=Reflect.ownKeys(a).filter(h=>{var f=t.get(h);return f===void 0||f.v!==rn});for(var[c,u]of t)u.v!==rn&&!(c in a)&&l.push(c);return l},setPrototypeOf(){J_()}})}function wp(r){try{if(r!==null&&typeof r=="object"&&ki in r)return r[ki]}catch{}return r}function Ix(r,e){return Object.is(wp(r),wp(e))}var Tp,jg,Jg,Qg;function Px(){if(Tp===void 0){Tp=window,jg=/Firefox/.test(navigator.userAgent);var r=Element.prototype,e=Node.prototype,t=Text.prototype;Jg=Lr(e,"firstChild").get,Qg=Lr(e,"nextSibling").get,bp(r)&&(r.__click=void 0,r.__className=void 0,r.__attributes=null,r.__style=void 0,r.__e=void 0),bp(t)&&(t.__t=void 0)}}function or(r=""){return document.createTextNode(r)}function Cr(r){return Jg.call(r)}function il(r){return Qg.call(r)}function dt(r,e){return Cr(r)}function bt(r,e=!1){{var t=Cr(r);return t instanceof Comment&&t.data===""?il(t):t}}function Ie(r,e=1,t=!1){let n=r;for(;e--;)n=il(n);return n}function Lx(r){r.textContent=""}function e0(){return!1}function Dx(r,e){if(e){const t=document.body;r.autofocus=!0,Bs(()=>{document.activeElement===t&&r.focus()})}}function sd(r){var e=_t,t=Mt;kn(null),Vi(null);try{return r()}finally{kn(e),Vi(t)}}function t0(r){Mt===null&&(_t===null&&$_(),Y_()),ks&&q_()}function Nx(r,e){var t=e.last;t===null?e.last=e.first=r:(t.next=r,r.prev=t,e.last=r)}function Ti(r,e,t){var n=Mt;n!==null&&(n.f&$n)!==0&&(r|=$n);var i={ctx:It,deps:null,nodes:null,f:r|zn|Mi,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{Io(i),i.f|=nd}catch(a){throw ln(i),a}else e!==null&&Ts(i);var s=i;if(t&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Xo)===0&&(s=s.first,(r&fr)!==0&&(r&cr)!==0&&s!==null&&(s.f|=cr)),s!==null&&(s.parent=n,n!==null&&Nx(s,n),_t!==null&&(_t.f&un)!==0&&(r&Fs)===0)){var o=_t;(o.effects??=[]).push(s)}return i}function Ro(){return _t!==null&&!Oi}function rl(r){const e=Ti(bu,null,!1);return cn(e,an),e.teardown=r,e}function ur(r){t0();var e=Mt.f,t=!_t&&(e&dr)!==0&&(e&nd)===0;if(t){var n=It;(n.e??=[]).push(r)}else return n0(r)}function n0(r){return Ti(td|Dg,r,!1)}function nn(r){return t0(),Ti(bu|Dg,r,!0)}function Ux(r){Ui.ensure();const e=Ti(Fs|Xo,r,!0);return(t={})=>new Promise(n=>{t.outro?vs(e,()=>{ln(e),n(void 0)}):(ln(e),n(void 0))})}function Tu(r){return Ti(td,r,!1)}function ft(r,e){var t=It,n={effect:null,ran:!1,deps:r};t.l.$.push(n),n.effect=Eu(()=>{r(),!n.ran&&(n.ran=!0,Qe(e))})}function zr(){var r=It;Eu(()=>{for(var e of r.l.$){e.deps();var t=e.effect;(t.f&an)!==0&&cn(t,Si),$o(t)&&Io(t),e.ran=!1}})}function Ox(r){return Ti(id|Xo,r,!0)}function Eu(r,e=0){return Ti(bu|e,r,!0)}function sn(r,e=[],t=[],n=[]){qg(n,e,t,i=>{Ti(bu,()=>r(...i.map(S)),!0)})}function Yo(r,e=0){var t=Ti(fr|e,r,!0);return t}function i0(r,e=0){var t=Ti(Pg|e,r,!0);return t}function Un(r){return Ti(dr|Xo,r,!0)}function r0(r){var e=r.teardown;if(e!==null){const t=ks,n=_t;Ep(!0),kn(null);try{e.call(null)}finally{Ep(t),kn(n)}}}function s0(r,e=!1){var t=r.first;for(r.first=r.last=null;t!==null;){const i=t.ac;i!==null&&sd(()=>{i.abort(_o)});var n=t.next;(t.f&Fs)!==0?t.parent=null:ln(t,e),t=n}}function Fx(r){for(var e=r.first;e!==null;){var t=e.next;(e.f&dr)===0&&ln(e),e=t}}function ln(r,e=!0){var t=!1;(e||(r.f&Lg)!==0)&&r.nodes!==null&&r.nodes.end!==null&&(Bx(r.nodes.start,r.nodes.end),t=!0),s0(r,e&&!t),bc(r,0),cn(r,sr);var n=r.nodes&&r.nodes.t;if(n!==null)for(const s of n)s.stop();r0(r);var i=r.parent;i!==null&&i.first!==null&&o0(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes=r.ac=null}function Bx(r,e){for(;r!==null;){var t=r===e?null:il(r);r.remove(),r=t}}function o0(r){var e=r.parent,t=r.prev,n=r.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===r&&(e.first=n),e.last===r&&(e.last=t))}function vs(r,e,t=!0){var n=[];a0(r,n,!0);var i=()=>{t&&ln(r),e&&e()},s=n.length;if(s>0){var o=()=>--s||i();for(var a of n)a.out(o)}else i()}function a0(r,e,t){if((r.f&$n)===0){r.f^=$n;var n=r.nodes&&r.nodes.t;if(n!==null)for(const a of n)(a.is_global||t)&&e.push(a);for(var i=r.first;i!==null;){var s=i.next,o=(i.f&cr)!==0||(i.f&dr)!==0&&(r.f&fr)!==0;a0(i,e,o?t:!1),i=s}}}function od(r){l0(r,!0)}function l0(r,e){if((r.f&$n)!==0){r.f^=$n,(r.f&an)===0&&(cn(r,zn),Ts(r));for(var t=r.first;t!==null;){var n=t.next,i=(t.f&cr)!==0||(t.f&dr)!==0;l0(t,i?e:!1),t=n}var s=r.nodes&&r.nodes.t;if(s!==null)for(const o of s)(o.is_global||e)&&o.in()}}function c0(r,e){if(r.nodes)for(var t=r.nodes.start,n=r.nodes.end;t!==null;){var i=t===n?null:il(t);e.append(t),t=i}}let _s=!1;function yc(r){_s=r}let ks=!1;function Ep(r){ks=r}let _t=null,Oi=!1;function kn(r){_t=r}let Mt=null;function Vi(r){Mt=r}let ar=null;function u0(r){_t!==null&&(ar===null?ar=[r]:ar.push(r))}let Mn=null,qn=0,ni=null;function kx(r){ni=r}let h0=1,Fa=0,xs=Fa;function Ap(r){xs=r}function f0(){return++h0}function $o(r){var e=r.f;if((e&zn)!==0)return!0;if(e&un&&(r.f&=~ws),(e&Si)!==0){var t=r.deps;if(t!==null)for(var n=t.length,i=0;i<n;i++){var s=t[i];if($o(s)&&$g(s),s.wv>r.wv)return!0}(e&Mi)!==0&&li===null&&cn(r,an)}return!1}function d0(r,e,t=!0){var n=r.reactions;if(n!==null&&!ar?.includes(r))for(var i=0;i<n.length;i++){var s=n[i];(s.f&un)!==0?d0(s,e,!1):e===s&&(t?cn(s,zn):(s.f&an)!==0&&cn(s,Si),Ts(s))}}function p0(r){var e=Mn,t=qn,n=ni,i=_t,s=ar,o=It,a=Oi,l=xs,c=r.f;Mn=null,qn=0,ni=null,_t=(c&(dr|Fs))===0?r:null,ar=null,Eo(r.ctx),Oi=!1,xs=++Fa,r.ac!==null&&(sd(()=>{r.ac.abort(_o)}),r.ac=null);try{r.f|=yf;var u=r.fn,h=u(),f=r.deps;if(Mn!==null){var d;if(bc(r,qn),f!==null&&qn>0)for(f.length=qn+Mn.length,d=0;d<Mn.length;d++)f[qn+d]=Mn[d];else r.deps=f=Mn;if(Ro()&&(r.f&Mi)!==0)for(d=qn;d<f.length;d++)(f[d].reactions??=[]).push(r)}else f!==null&&qn<f.length&&(bc(r,qn),f.length=qn);if(tl()&&ni!==null&&!Oi&&f!==null&&(r.f&(un|Si|zn))===0)for(d=0;d<ni.length;d++)d0(ni[d],r);return i!==null&&i!==r&&(Fa++,ni!==null&&(n===null?n=ni:n.push(...ni))),(r.f&Dr)!==0&&(r.f^=Dr),h}catch(m){return Vg(m)}finally{r.f^=yf,Mn=e,qn=t,ni=n,_t=i,ar=s,Eo(o),Oi=a,xs=l}}function zx(r,e){let t=e.reactions;if(t!==null){var n=z_.call(t,r);if(n!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[n]=t[i],t.pop())}}t===null&&(e.f&un)!==0&&(Mn===null||!Mn.includes(e))&&(cn(e,Si),(e.f&Mi)!==0&&(e.f^=Mi,e.f&=~ws),Yg(e),bc(e,0))}function bc(r,e){var t=r.deps;if(t!==null)for(var n=e;n<t.length;n++)zx(r,t[n])}function Io(r){var e=r.f;if((e&sr)===0){cn(r,an);var t=Mt,n=_s;Mt=r,_s=!0;try{(e&(fr|Pg))!==0?Fx(r):s0(r),r0(r);var i=p0(r);r.teardown=typeof i=="function"?i:null,r.wv=h0;var s;xf&&vx&&(r.f&zn)!==0&&r.deps}finally{_s=n,Mt=t}}}async function Vx(){await Promise.resolve(),bx()}function S(r){var e=r.f,t=(e&un)!==0;if(_t!==null&&!Oi){var n=Mt!==null&&(Mt.f&sr)!==0;if(!n&&!ar?.includes(r)){var i=_t.deps;if((_t.f&yf)!==0)r.rv<Fa&&(r.rv=Fa,Mn===null&&i!==null&&i[qn]===r?qn++:Mn===null?Mn=[r]:Mn.includes(r)||Mn.push(r));else{(_t.deps??=[]).push(r);var s=r.reactions;s===null?r.reactions=[_t]:s.includes(_t)||s.push(_t)}}}if(ks){if(Nr.has(r))return Nr.get(r);if(t){var o=r,a=o.v;return((o.f&an)===0&&o.reactions!==null||g0(o))&&(a=rd(o)),Nr.set(o,a),a}}else t&&(!li?.has(r)||Nt?.is_fork&&!Ro())&&(o=r,$o(o)&&$g(o),_s&&Ro()&&(o.f&Mi)===0&&m0(o));if(li?.has(r))return li.get(r);if((r.f&Dr)!==0)throw r.v;return r.v}function m0(r){if(r.deps!==null){r.f^=Mi;for(const e of r.deps)(e.reactions??=[]).push(r),(e.f&un)!==0&&(e.f&Mi)===0&&m0(e)}}function g0(r){if(r.v===rn)return!0;if(r.deps===null)return!1;for(const e of r.deps)if(Nr.has(e)||(e.f&un)!==0&&g0(e))return!0;return!1}function Qe(r){var e=Oi;try{return Oi=!0,r()}finally{Oi=e}}const Gx=-7169;function cn(r,e){r.f=r.f&Gx|e}function on(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(ki in r)Sf(r);else if(!Array.isArray(r))for(let e in r){const t=r[e];typeof t=="object"&&t&&ki in t&&Sf(t)}}}function Sf(r,e=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!e.has(r)){e.add(r),r instanceof Date&&r.getTime();for(let n in r)try{Sf(r[n],e)}catch{}const t=ed(r);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=Rg(t);for(let i in n){const s=n[i].get;if(s)try{s.call(r)}catch{}}}}}function Hx(r){return r.endsWith("capture")&&r!=="gotpointercapture"&&r!=="lostpointercapture"}const Wx=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Xx(r){return Wx.includes(r)}const qx={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Yx(r){return r=r.toLowerCase(),qx[r]??r}const $x=["touchstart","touchmove"];function Zx(r){return $x.includes(r)}const v0=new Set,wf=new Set;function _0(r,e,t,n={}){function i(s){if(n.capture||xa.call(e,s),!s.cancelBubble)return sd(()=>t?.call(this,s))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?Bs(()=>{e.addEventListener(r,i,n)}):e.addEventListener(r,i,n),i}function cs(r,e,t,n,i){var s={capture:n,passive:i},o=_0(r,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&rl(()=>{e.removeEventListener(r,o,s)})}function Kx(r){for(var e=0;e<r.length;e++)v0.add(r[e]);for(var t of wf)t(r)}let Cp=null;function xa(r){var e=this,t=e.ownerDocument,n=r.type,i=r.composedPath?.()||[],s=i[0]||r.target;Cp=r;var o=0,a=Cp===r&&r.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){r.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=i[o]||r.target,s!==e){Cg(r,"currentTarget",{configurable:!0,get(){return s||t}});var u=_t,h=Mt;kn(null),Vi(null);try{for(var f,d=[];s!==null;){var m=s.assignedSlot||s.parentNode||s.host||null;try{var v=s["__"+n];v!=null&&(!s.disabled||r.target===s)&&v.call(s,r)}catch(g){f?d.push(g):f=g}if(r.cancelBubble||m===e||m===null)break;s=m}if(f){for(let g of d)queueMicrotask(()=>{throw g});throw f}}finally{r.__root=e,delete r.currentTarget,kn(u),Vi(h)}}}function x0(r){var e=document.createElement("template");return e.innerHTML=r.replaceAll("<!>","<!---->"),e.content}function Ba(r,e){var t=Mt;t.nodes===null&&(t.nodes={start:r,end:e,a:null,t:null})}function lt(r,e){var t=(e&ux)!==0,n=(e&hx)!==0,i,s=!r.startsWith("<!>");return()=>{i===void 0&&(i=x0(s?r:"<!>"+r),t||(i=Cr(i)));var o=n||jg?document.importNode(i,!0):i.cloneNode(!0);if(t){var a=Cr(o),l=o.lastChild;Ba(a,l)}else Ba(o,o);return o}}function jx(r,e,t="svg"){var n=!r.startsWith("<!>"),i=`<${t}>${n?r:"<!>"+r}</${t}>`,s;return()=>{if(!s){var o=x0(i),a=Cr(o);for(s=document.createDocumentFragment();Cr(a);)s.appendChild(Cr(a))}var l=s.cloneNode(!0);{var c=Cr(l),u=l.lastChild;Ba(c,u)}return l}}function y0(r,e){return jx(r,e,"svg")}function On(){var r=document.createDocumentFragment(),e=document.createComment(""),t=or();return r.append(e,t),Ba(e,t),r}function We(r,e){r!==null&&r.before(e)}function tr(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??=r.nodeValue)&&(r.__t=t,r.nodeValue=t+"")}function Jx(r,e){return Qx(r,e)}const Ys=new Map;function Qx(r,{target:e,anchor:t,props:n={},events:i,context:s,intro:o=!0}){Px();var a=new Set,l=h=>{for(var f=0;f<h.length;f++){var d=h[f];if(!a.has(d)){a.add(d);var m=Zx(d);e.addEventListener(d,xa,{passive:m});var v=Ys.get(d);v===void 0?(document.addEventListener(d,xa,{passive:m}),Ys.set(d,1)):Ys.set(d,v+1)}}};l(yu(v0)),wf.add(l);var c=void 0,u=Ux(()=>{var h=t??e.appendChild(or());return wx(h,{pending:()=>{}},f=>{if(s){Jn({});var d=It;d.c=s}i&&(n.$$events=i),c=r(f,n)||{},s&&Qn()}),()=>{for(var f of a){e.removeEventListener(f,xa);var d=Ys.get(f);--d===0?(document.removeEventListener(f,xa),Ys.delete(f)):Ys.set(f,d)}wf.delete(l),h!==t&&h.parentNode?.removeChild(h)}});return ey.set(c,u),c}let ey=new WeakMap;class Au{anchor;#e=new Map;#t=new Map;#i=new Map;#n=new Set;#l=!0;constructor(e,t=!0){this.anchor=e,this.#l=t}#s=()=>{var e=Nt;if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)od(n),this.#n.delete(t);else{var i=this.#i.get(t);i&&(this.#t.set(t,i.effect),this.#i.delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,o]of this.#e){if(this.#e.delete(s),s===e)break;const a=this.#i.get(o);a&&(ln(a.effect),this.#i.delete(o))}for(const[s,o]of this.#t){if(s===t||this.#n.has(s))continue;const a=()=>{if(Array.from(this.#e.values()).includes(s)){var c=document.createDocumentFragment();c0(o,c),c.append(or()),this.#i.set(s,{effect:o,fragment:c})}else ln(o);this.#n.delete(s),this.#t.delete(s)};this.#l||!n?(this.#n.add(s),vs(o,a,!1)):a()}}};#r=e=>{this.#e.delete(e);const t=Array.from(this.#e.values());for(const[n,i]of this.#i)t.includes(n)||(ln(i.effect),this.#i.delete(n))};ensure(e,t){var n=Nt,i=e0();if(t&&!this.#t.has(e)&&!this.#i.has(e))if(i){var s=document.createDocumentFragment(),o=or();s.append(o),this.#i.set(e,{effect:Un(()=>t(o)),fragment:s})}else this.#t.set(e,Un(()=>t(this.anchor)));if(this.#e.set(n,e),i){for(const[a,l]of this.#t)a===e?n.skipped_effects.delete(l):n.skipped_effects.add(l);for(const[a,l]of this.#i)a===e?n.skipped_effects.delete(l.effect):n.skipped_effects.add(l.effect);n.oncommit(this.#s),n.ondiscard(this.#r)}else this.#s()}}function Ct(r,e,t=!1){var n=new Au(r),i=t?cr:0;function s(o,a){n.ensure(o,a)}Yo(()=>{var o=!1;e((a,l=!0)=>{o=!0,s(l,a)}),o||s(!1,null)},i)}function Mc(r,e){return e}function ty(r,e,t){for(var n=[],i=e.length,s,o=e.length,a=0;a<i;a++){let h=e[a];vs(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var f=r.outrogroups;Tf(yu(s.done)),f.delete(s),f.size===0&&(r.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=n.length===0&&t!==null;if(l){var c=t,u=c.parentNode;Lx(u),u.append(c),r.items.clear()}Tf(e,!l)}else s={pending:new Set(e),done:new Set},(r.outrogroups??=new Set).add(s)}function Tf(r,e=!0){for(var t=0;t<r.length;t++)ln(r[t],e)}var Rp;function Sc(r,e,t,n,i,s=null){var o=r,a=new Map,l=(e&Ug)!==0;if(l){var c=r;o=c.appendChild(or())}var u=null,h=ut(()=>{var p=t();return xu(p)?p:p==null?[]:yu(p)}),f,d=!0;function m(){g.fallback=u,ny(g,f,o,e,n),u!==null&&(f.length===0?(u.f&rr)===0?od(u):(u.f^=rr,ya(u,null,o)):vs(u,()=>{u=null}))}var v=Yo(()=>{f=S(h);for(var p=f.length,y=new Set,_=Nt,x=e0(),w=0;w<p;w+=1){var E=f[w],A=n(E,w),I=d?null:a.get(A);I?(I.v&&Co(I.v,E),I.i&&Co(I.i,w),x&&_.skipped_effects.delete(I.e)):(I=iy(a,d?o:Rp??=or(),E,A,w,i,e,t),d||(I.e.f|=rr),a.set(A,I)),y.add(A)}if(p===0&&s&&!u&&(d?u=Un(()=>s(o)):(u=Un(()=>s(Rp??=or())),u.f|=rr)),!d)if(x){for(const[M,T]of a)y.has(M)||_.skipped_effects.add(T.e);_.oncommit(m),_.ondiscard(()=>{})}else m();S(h)}),g={effect:v,items:a,outrogroups:null,fallback:u};d=!1}function ny(r,e,t,n,i){var s=(n&ix)!==0,o=e.length,a=r.items,l=r.effect.first,c,u=null,h,f=[],d=[],m,v,g,p;if(s)for(p=0;p<o;p+=1)m=e[p],v=i(m,p),g=a.get(v).e,(g.f&rr)===0&&(g.nodes?.a?.measure(),(h??=new Set).add(g));for(p=0;p<o;p+=1){if(m=e[p],v=i(m,p),g=a.get(v).e,r.outrogroups!==null)for(const T of r.outrogroups)T.pending.delete(g),T.done.delete(g);if((g.f&rr)!==0)if(g.f^=rr,g===l)ya(g,null,t);else{var y=u?u.next:l;g===r.effect.last&&(r.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),gr(r,u,g),gr(r,g,y),ya(g,y,t),u=g,f=[],d=[],l=u.next;continue}if((g.f&$n)!==0&&(od(g),s&&(g.nodes?.a?.unfix(),(h??=new Set).delete(g))),g!==l){if(c!==void 0&&c.has(g)){if(f.length<d.length){var _=d[0],x;u=_.prev;var w=f[0],E=f[f.length-1];for(x=0;x<f.length;x+=1)ya(f[x],_,t);for(x=0;x<d.length;x+=1)c.delete(d[x]);gr(r,w.prev,E.next),gr(r,u,w),gr(r,E,_),l=_,u=E,p-=1,f=[],d=[]}else c.delete(g),ya(g,l,t),gr(r,g.prev,g.next),gr(r,g,u===null?r.effect.first:u.next),gr(r,u,g),u=g;continue}for(f=[],d=[];l!==null&&l!==g;)(c??=new Set).add(l),d.push(l),l=l.next;if(l===null)continue}(g.f&rr)===0&&f.push(g),u=g,l=g.next}if(r.outrogroups!==null){for(const T of r.outrogroups)T.pending.size===0&&(Tf(yu(T.done)),r.outrogroups?.delete(T));r.outrogroups.size===0&&(r.outrogroups=null)}if(l!==null||c!==void 0){var A=[];if(c!==void 0)for(g of c)(g.f&$n)===0&&A.push(g);for(;l!==null;)(l.f&$n)===0&&l!==r.fallback&&A.push(l),l=l.next;var I=A.length;if(I>0){var M=(n&Ug)!==0&&o===0?t:null;if(s){for(p=0;p<I;p+=1)A[p].nodes?.a?.measure();for(p=0;p<I;p+=1)A[p].nodes?.a?.fix()}ty(r,A,M)}}s&&Bs(()=>{if(h!==void 0)for(g of h)g.nodes?.a?.apply()})}function iy(r,e,t,n,i,s,o,a){var l=(o&tx)!==0?(o&rx)===0?ze(t,!1,!1):Es(t):null,c=(o&nx)!==0?Es(i):null;return{v:l,i:c,e:Un(()=>(s(e,l??t,c??i,a),()=>{r.delete(n)}))}}function ya(r,e,t){if(r.nodes)for(var n=r.nodes.start,i=r.nodes.end,s=e&&(e.f&rr)===0?e.nodes.start:t;n!==null;){var o=il(n);if(s.before(n),n===i)return;n=o}}function gr(r,e,t){e===null?r.effect.first=t:e.next=t,t===null?r.effect.last=e:t.prev=e}function ka(r,e,...t){var n=new Au(r);Yo(()=>{const i=e()??null;n.ensure(i,i&&(s=>i(s,...t)))},cr)}function yh(r,e,t){var n=new Au(r);Yo(()=>{var i=e()??null;n.ensure(i,i&&(s=>t(s,i)))},cr)}function ry(r,e,t,n,i,s){var o=null,a=r,l=new Au(a,!1);Yo(()=>{const c=e()||null;var u=c==="svg"?dx:null;if(c===null){l.ensure(null,null);return}return l.ensure(c,h=>{if(c){if(o=u?document.createElementNS(u,c):document.createElement(c),Ba(o,o),n){var f=o.appendChild(or());n(o,f)}Mt.nodes.end=o,h.before(o)}}),()=>{}},cr),rl(()=>{})}function sy(r,e,t){Tu(()=>{var n=Qe(()=>e(r,t?.())||{});if(n?.destroy)return()=>n.destroy()})}function oy(r,e){var t=void 0,n;i0(()=>{t!==(t=e())&&(n&&(ln(n),n=null),t&&(n=Un(()=>{Tu(()=>t(r))})))})}function b0(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var i=r.length;for(e=0;e<i;e++)r[e]&&(t=b0(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function ay(){for(var r,e,t=0,n="",i=arguments.length;t<i;t++)(r=arguments[t])&&(e=b0(r))&&(n&&(n+=" "),n+=e);return n}function Ef(r){return typeof r=="object"?ay(r):r??""}const Ip=[...` 	
\r\f \v\uFEFF`];function ly(r,e,t){var n=r==null?"":""+r;if(e&&(n=n?n+" "+e:e),t){for(var i in t)if(t[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,o=0;(o=n.indexOf(i,o))>=0;){var a=o+s;(o===0||Ip.includes(n[o-1]))&&(a===n.length||Ip.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function Pp(r,e=!1){var t=e?" !important;":";",n="";for(var i in r){var s=r[i];s!=null&&s!==""&&(n+=" "+i+": "+s+t)}return n}function bh(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function cy(r,e){if(e){var t="",n,i;if(Array.isArray(e)?(n=e[0],i=e[1]):n=e,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,l=[];n&&l.push(...Object.keys(n).map(bh)),i&&l.push(...Object.keys(i).map(bh));var c=0,u=-1;const v=r.length;for(var h=0;h<v;h++){var f=r[h];if(a?f==="/"&&r[h-1]==="*"&&(a=!1):s?s===f&&(s=!1):f==="/"&&r[h+1]==="*"?a=!0:f==='"'||f==="'"?s=f:f==="("?o++:f===")"&&o--,!a&&s===!1&&o===0){if(f===":"&&u===-1)u=h;else if(f===";"||h===v-1){if(u!==-1){var d=bh(r.substring(c,u).trim());if(!l.includes(d)){f!==";"&&h++;var m=r.substring(c,h).trim();t+=" "+m+";"}}c=h+1,u=-1}}}}return n&&(t+=Pp(n)),i&&(t+=Pp(i,!0)),t=t.trim(),t===""?null:t}return r==null?null:String(r)}function Ni(r,e,t,n,i,s){var o=r.__className;if(o!==t||o===void 0){var a=ly(t,n,s);a==null?r.removeAttribute("class"):e?r.className=a:r.setAttribute("class",a),r.__className=t}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&r.classList.toggle(l,c)}return s}function Mh(r,e={},t,n){for(var i in t){var s=t[i];e[i]!==s&&(t[i]==null?r.style.removeProperty(i):r.style.setProperty(i,s,n))}}function oi(r,e,t,n){var i=r.__style;if(i!==e){var s=cy(e,n);s==null?r.removeAttribute("style"):r.style.cssText=s,r.__style=e}else n&&(Array.isArray(n)?(Mh(r,t?.[0],n[0]),Mh(r,t?.[1],n[1],"important")):Mh(r,t,n));return n}function Af(r,e,t=!1){if(r.multiple){if(e==null)return;if(!xu(e))return mx();for(var n of r.options)n.selected=e.includes(Lp(n));return}for(n of r.options){var i=Lp(n);if(Ix(i,e)){n.selected=!0;return}}(!t||e!==void 0)&&(r.selectedIndex=-1)}function uy(r){var e=new MutationObserver(()=>{Af(r,r.__value)});e.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),rl(()=>{e.disconnect()})}function Lp(r){return"__value"in r?r.__value:r.value}const ia=Symbol("class"),vo=Symbol("style"),M0=Symbol("is custom element"),S0=Symbol("is html");function hy(r,e){e?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Cf(r,e,t,n){var i=w0(r);i[e]!==(i[e]=t)&&(e==="loading"&&(r[W_]=t),t==null?r.removeAttribute(e):typeof t!="string"&&T0(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function fy(r,e,t,n,i=!1,s=!1){var o=w0(r),a=o[M0],l=!o[S0],c=e||{},u=r.tagName==="OPTION";for(var h in e)h in t||(t[h]=null);t.class?t.class=Ef(t.class):t[ia]&&(t.class=null),t[vo]&&(t.style??=null);var f=T0(r);for(const x in t){let w=t[x];if(u&&x==="value"&&w==null){r.value=r.__value="",c[x]=w;continue}if(x==="class"){var d=r.namespaceURI==="http://www.w3.org/1999/xhtml";Ni(r,d,w,n,e?.[ia],t[ia]),c[x]=w,c[ia]=t[ia];continue}if(x==="style"){oi(r,w,e?.[vo],t[vo]),c[x]=w,c[vo]=t[vo];continue}var m=c[x];if(!(w===m&&!(w===void 0&&r.hasAttribute(x)))){c[x]=w;var v=x[0]+x[1];if(v!=="$$")if(v==="on"){const E={},A="$$"+x;let I=x.slice(2);var g=Xx(I);if(Hx(I)&&(I=I.slice(0,-7),E.capture=!0),!g&&m){if(w!=null)continue;r.removeEventListener(I,c[A],E),c[A]=null}if(w!=null)if(g)r[`__${I}`]=w,Kx([I]);else{let M=function(T){c[x].call(this,T)};var _=M;c[A]=_0(I,r,M,E)}else g&&(r[`__${I}`]=void 0)}else if(x==="style")Cf(r,x,w);else if(x==="autofocus")Dx(r,!!w);else if(!a&&(x==="__value"||x==="value"&&w!=null))r.value=r.__value=w;else if(x==="selected"&&u)hy(r,w);else{var p=x;l||(p=Yx(p));var y=p==="defaultValue"||p==="defaultChecked";if(w==null&&!a&&!y)if(o[x]=null,p==="value"||p==="checked"){let E=r;const A=e===void 0;if(p==="value"){let I=E.defaultValue;E.removeAttribute(p),E.defaultValue=I,E.value=E.__value=A?I:null}else{let I=E.defaultChecked;E.removeAttribute(p),E.defaultChecked=I,E.checked=A?I:!1}}else r.removeAttribute(x);else y||f.includes(p)&&(a||typeof w!="string")?(r[p]=w,p in o&&(o[p]=rn)):typeof w!="function"&&Cf(r,p,w)}}}return c}function dy(r,e,t=[],n=[],i=[],s,o=!1,a=!1){qg(i,t,n,l=>{var c=void 0,u={},h=r.nodeName==="SELECT",f=!1;if(i0(()=>{var m=e(...l.map(S)),v=fy(r,c,m,s,o,a);f&&h&&"value"in m&&Af(r,m.value);for(let p of Object.getOwnPropertySymbols(u))m[p]||ln(u[p]);for(let p of Object.getOwnPropertySymbols(m)){var g=m[p];p.description===px&&(!c||g!==c[p])&&(u[p]&&ln(u[p]),u[p]=Un(()=>oy(r,()=>g))),v[p]=g}c=v}),h){var d=r;Tu(()=>{Af(d,c.value,!0),uy(d)})}f=!0})}function w0(r){return r.__attributes??={[M0]:r.nodeName.includes("-"),[S0]:r.namespaceURI===fx}}var Dp=new Map;function T0(r){var e=r.getAttribute("is")||r.nodeName,t=Dp.get(e);if(t)return t;Dp.set(e,t=[]);for(var n,i=r,s=Element.prototype;s!==i;){n=Rg(i);for(var o in n)n[o].set&&t.push(o);i=ed(i)}return t}function Np(r,e){return r===e||r?.[ki]===e}function ys(r={},e,t,n){return Tu(()=>{var i,s;return Eu(()=>{i=s,s=[],Qe(()=>{r!==t(...s)&&(e(r,...s),i&&Np(t(...i),r)&&e(null,...i))})}),()=>{Bs(()=>{s&&Np(t(...s),r)&&e(null,...s)})}}),r}function pr(r=!1){const e=It,t=e.l.u;if(!t)return;let n=()=>on(e.s);if(r){let i=0,s={};const o=nl(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&i++,i});n=()=>S(o)}t.b.length&&nn(()=>{Up(e,n),_c(t.b)}),ur(()=>{const i=Qe(()=>t.m.map(H_));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&ur(()=>{Up(e,n),_c(t.a)})}function Up(r,e){if(r.l.s)for(const t of r.l.s)S(t);e()}function ad(r,e,t){if(r==null)return e(void 0),t&&t(void 0),ui;const n=Qe(()=>r.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}const $s=[];function Cu(r,e){return{subscribe:Po(r,e).subscribe}}function Po(r,e=ui){let t=null;const n=new Set;function i(a){if(Fg(r,a)&&(r=a,t)){const l=!$s.length;for(const c of n)c[1](),$s.push(c,r);if(l){for(let c=0;c<$s.length;c+=2)$s[c][0]($s[c+1]);$s.length=0}}}function s(a){i(a(r))}function o(a,l=ui){const c=[a,l];return n.add(c),n.size===1&&(t=e(i,s)||ui),a(r),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function ld(r,e,t){const n=!Array.isArray(r),i=n?[r]:r;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return Cu(t,(o,a)=>{let l=!1;const c=[];let u=0,h=ui;const f=()=>{if(u)return;h();const m=e(n?c[0]:c,o,a);s?o(m):h=typeof m=="function"?m:ui},d=i.map((m,v)=>ad(m,g=>{c[v]=g,u&=~(1<<v),l&&f()},()=>{u|=1<<v}));return l=!0,f(),function(){_c(d),h(),l=!1}})}function E0(r){let e;return ad(r,t=>e=t)(),e}let bl=!1,Rf=Symbol();function Ea(r,e,t){const n=t[e]??={store:null,source:ze(void 0),unsubscribe:ui};if(n.store!==r&&!(Rf in t))if(n.unsubscribe(),n.store=r??null,r==null)n.source.v=void 0,n.unsubscribe=ui;else{var i=!0;n.unsubscribe=ad(r,s=>{i?n.source.v=s:de(n.source,s)}),i=!1}return r&&Rf in t?E0(r):S(n.source)}function cd(){const r={};function e(){rl(()=>{for(var t in r)r[t].unsubscribe();Cg(r,Rf,{enumerable:!1,value:!0})})}return[r,e]}function py(r){var e=bl;try{return bl=!1,[r(),bl]}finally{bl=e}}const my={get(r,e){if(!r.exclude.includes(e))return r.props[e]},set(r,e){return!1},getOwnPropertyDescriptor(r,e){if(!r.exclude.includes(e)&&e in r.props)return{enumerable:!0,configurable:!0,value:r.props[e]}},has(r,e){return r.exclude.includes(e)?!1:e in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(e=>!r.exclude.includes(e))}};function Ru(r,e,t){return new Proxy({props:r,exclude:e},my)}const gy={get(r,e){let t=r.props.length;for(;t--;){let n=r.props[t];if(na(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(r,e,t){let n=r.props.length;for(;n--;){let i=r.props[n];na(i)&&(i=i());const s=Lr(i,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(r,e){let t=r.props.length;for(;t--;){let n=r.props[t];if(na(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const i=Lr(n,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(r,e){if(e===ki||e===Ng)return!1;for(let t of r.props)if(na(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(r){const e=[];for(let t of r.props)if(na(t)&&(t=t()),!!t){for(const n in t)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(t))e.includes(n)||e.push(n)}return e}};function A0(...r){return new Proxy({props:r},gy)}function rt(r,e,t,n){var i=!qo||(t&ox)!==0,s=(t&lx)!==0,o=(t&cx)!==0,a=n,l=!0,c=()=>(l&&(l=!1,a=o?Qe(n):n),a),u;if(s){var h=ki in r||Ng in r;u=Lr(r,e)?.set??(h&&e in r?_=>r[e]=_:void 0)}var f,d=!1;s?[f,d]=py(()=>r[e]):f=r[e],f===void 0&&n!==void 0&&(f=c(),u&&(i&&K_(),u(f)));var m;if(i?m=()=>{var _=r[e];return _===void 0?c():(l=!0,_)}:m=()=>{var _=r[e];return _!==void 0&&(a=void 0),_===void 0?a:_},i&&(t&ax)===0)return m;if(u){var v=r.$$legacy;return(function(_,x){return arguments.length>0?((!i||!x||v||d)&&u(x?m():_),_):m()})}var g=!1,p=((t&sx)!==0?nl:ut)(()=>(g=!1,m()));s&&S(p);var y=Mt;return(function(_,x){if(arguments.length>0){const w=x?S(p):i&&s?xo(_):_;return de(p,w),g=!0,a!==void 0&&(a=w),_}return ks&&g||(y.f&sr)!==0?p.v:S(p)})}function mr(r){It===null&&Su(),qo&&It.l!==null?_y(It).m.push(r):ur(()=>{const e=Qe(r);if(typeof e=="function")return e})}function zs(r){It===null&&Su(),mr(()=>()=>Qe(r))}function vy(r,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(r,{detail:e,bubbles:t,cancelable:n})}function Iu(){const r=It;return r===null&&Su(),(e,t,n)=>{const i=r.s.$$events?.[e];if(i){const s=xu(i)?i.slice():[i],o=vy(e,t,n);for(const a of s)a.call(r.x,o);return!o.defaultPrevented}return!0}}function _y(r){var e=r.l;return e.u??={a:[],b:[],m:[]}}const xy="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(xy);_x();const Op=(r,e)=>{if(r===e)return!0;if(!r||!e)return!1;const t=r.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0},yy=()=>{const r=[],n={items:r,remember:(i,s)=>{for(let a=0;a<r.length;a++){const l=r[a];if(Op(s,l.keys)&&l.promise)return l.promise}const o={promise:i(),keys:s};return r.push(o),o.promise},clear:i=>{for(let s=0;s<r.length;s++){const o=r[s];if(Op(i,o.keys)){r.splice(s,1);return}}}};return Vn("threlte-cache",n),n},by=()=>{const r=vn("threlte-cache");if(!r)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return r};const Pu="182",My={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Sy={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},C0=0,If=1,R0=2,wy=3,Ty=0,Aa=1,Ca=2,yo=3,Gi=0,pn=1,wn=2,zi=0,bs=1,Pf=2,Lf=3,Df=4,I0=5,Ar=100,P0=101,L0=102,D0=103,N0=104,U0=200,O0=201,F0=202,B0=203,wc=204,Tc=205,k0=206,z0=207,V0=208,G0=209,H0=210,W0=211,X0=212,q0=213,Y0=214,Ec=0,Ac=1,Cc=2,As=3,Rc=4,Ic=5,Pc=6,Lc=7,sl=0,$0=1,Z0=2,yi=0,ud=1,hd=2,fd=3,dd=4,pd=5,za=6,md=7,Nf="attached",K0="detached",Lu=300,Hi=301,Or=302,Va=303,Ga=304,Zo=306,Fr=1e3,En=1001,Lo=1002,Bt=1003,Du=1004,Ey=1004,ds=1005,Ay=1005,Rt=1006,So=1007,Cy=1007,ci=1008,Ry=1008,Fn=1009,gd=1010,vd=1011,Do=1012,Nu=1013,hi=1014,An=1015,Wi=1016,Uu=1017,Ou=1018,No=1020,_d=35902,xd=35899,yd=1021,bd=1022,Cn=1023,Xi=1026,Rr=1027,Fu=1028,ol=1029,Cs=1030,Bu=1031,Iy=1032,ku=1033,Ra=33776,Ia=33777,Pa=33778,La=33779,Dc=35840,Nc=35841,Uc=35842,Oc=35843,Fc=36196,Bc=37492,kc=37496,zc=37488,Vc=37489,Gc=37490,Hc=37491,Wc=37808,Xc=37809,qc=37810,Yc=37811,$c=37812,Zc=37813,Kc=37814,jc=37815,Jc=37816,Qc=37817,eu=37818,tu=37819,nu=37820,iu=37821,ru=36492,su=36494,ou=36495,au=36283,lu=36284,cu=36285,uu=36286,j0=2200,J0=2201,Q0=2202,Uo=2300,Oo=2301,mc=2302,ps=2400,ms=2401,Ha=2402,zu=2500,Md=2501,ev=0,Sd=1,hu=2,tv=3200,Py=3201,Ly=3202,Dy=3203,Vr=0,nv=1,nr="",Zt="srgb",gn="srgb-linear",Wa="linear",wt="srgb",Ny="",Uy="rg",Oy="ga",Fy=0,us=7680,By=7681,ky=7682,zy=7683,Vy=34055,Gy=34056,Hy=5386,Wy=512,Xy=513,qy=514,Yy=515,$y=516,Zy=517,Ky=518,Uf=519,iv=512,rv=513,sv=514,Vu=515,ov=516,av=517,Gu=518,lv=519,Xa=35044,jy=35048,Jy=35040,Qy=35045,eb=35049,tb=35041,nb=35046,ib=35050,rb=35042,sb="100",Of="300 es",Yn=2e3,Fo=2001,ob={COMPUTE:"compute",RENDER:"render"},ab={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},lb={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};function cv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const cb={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function bo(r,e){return new cb[r](e)}function uv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hv(){const r=qa("canvas");return r.style.display="block",r}const Fp={};let Br=null;function ub(r){Br=r}function hb(){return Br}function Ya(...r){const e="THREE."+r.shift();Br?Br("log",e,...r):console.log(e,...r)}function Me(...r){const e="THREE."+r.shift();Br?Br("warn",e,...r):console.warn(e,...r)}function Ge(...r){const e="THREE."+r.shift();Br?Br("error",e,...r):console.error(e,...r)}function Bo(...r){const e=r.join(" ");e in Fp||(Fp[e]=!0,Me(...r))}function fb(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bp=1234567;const Ms=Math.PI/180,ko=180/Math.PI;function Zn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Ke(r,e,t){return Math.max(e,Math.min(t,r))}function wd(r,e){return(r%e+e)%e}function db(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function pb(r,e,t){return r!==e?(t-r)/(e-r):0}function Da(r,e,t){return(1-t)*r+t*e}function mb(r,e,t,n){return Da(r,e,1-Math.exp(-t*n))}function gb(r,e=1){return e-Math.abs(wd(r,e*2)-e)}function vb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function _b(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function xb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yb(r,e){return r+Math.random()*(e-r)}function bb(r){return r*(.5-Math.random())}function Mb(r){r!==void 0&&(Bp=r);let e=Bp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sb(r){return r*Ms}function wb(r){return r*ko}function Tb(r){return(r&r-1)===0&&r!==0}function Eb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ab(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Cb(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*u,a*c);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function st(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fv={DEG2RAD:Ms,RAD2DEG:ko,generateUUID:Zn,clamp:Ke,euclideanModulo:wd,mapLinear:db,inverseLerp:pb,lerp:Da,damp:mb,pingpong:gb,smoothstep:vb,smootherstep:_b,randInt:xb,randFloat:yb,randFloatSpread:bb,seededRandom:Mb,degToRad:Sb,radToDeg:wb,isPowerOfTwo:Tb,ceilPowerOfTwo:Eb,floorPowerOfTwo:Ab,setQuaternionFromProperEuler:Cb,normalize:st,denormalize:Tn};class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],m=s[o+2],v=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==m){let g=l*f+c*d+u*m+h*v;g<0&&(f=-f,d=-d,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){const y=Math.acos(g),_=Math.sin(y);p=Math.sin(p*y)/_,a=Math.sin(a*y)/_,l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+v*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+v*a;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new L,kp=new mn;class it{constructor(e,t,n,i,s,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],v=i[0],g=i[3],p=i[6],y=i[1],_=i[4],x=i[7],w=i[2],E=i[5],A=i[8];return s[0]=o*v+a*y+l*w,s[3]=o*g+a*_+l*E,s[6]=o*p+a*x+l*A,s[1]=c*v+u*y+h*w,s[4]=c*g+u*_+h*E,s[7]=c*p+u*x+h*A,s[2]=f*v+d*y+m*w,s[5]=f*g+d*_+m*E,s[8]=f*p+d*x+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wh.makeScale(e,t)),this}rotate(e){return this.premultiply(wh.makeRotation(-e)),this}translate(e,t){return this.premultiply(wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new it,zp=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vp=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rb(){const r={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(i.r=wo(i.r),i.g=wo(i.g),i.b=wo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===nr?Wa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[gn]:{primaries:e,whitePoint:n,transfer:Wa,toXYZ:zp,fromXYZ:Vp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:zp,fromXYZ:Vp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),r}const pt=Rb();function lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Zs;class dv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zs===void 0&&(Zs=qa("canvas")),Zs.width=e.width,Zs.height=e.height;const i=Zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lr(t[n]/255)*255):t[n]=lr(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ib=0;class Ir{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Th(i[o].image)):s.push(Th(i[o]))}else s=Th(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Th(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let Pb=0;const Eh=new L;class Ut extends qi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=En,i=En,s=Rt,o=ci,a=Cn,l=Fn,c=Ut.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=Zn(),this.name="",this.source=new Ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Lu;Ut.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,i=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(d+1)/2,w=(p+1)/2,E=(u+f)/4,A=(h+v)/4,I=(m+g)/4;return _>x&&_>w?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=E/n,s=A/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=I/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=A/s,i=I/s),this.set(n,i,s,t),this}let y=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends qi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Ut(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ir(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Td{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hu extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lb extends Kn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Hu(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Wu extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Db extends Kn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Wu(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Xt{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(s,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ml.copy(n.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Sl.subVectors(this.max,ra),Ks.subVectors(e.a,ra),js.subVectors(e.b,ra),Js.subVectors(e.c,ra),vr.subVectors(js,Ks),_r.subVectors(Js,js),Yr.subVectors(Ks,Js);let t=[0,-vr.z,vr.y,0,-_r.z,_r.y,0,-Yr.z,Yr.y,vr.z,0,-vr.x,_r.z,0,-_r.x,Yr.z,0,-Yr.x,-vr.y,vr.x,0,-_r.y,_r.x,0,-Yr.y,Yr.x,0];return!Ah(t,Ks,js,Js,Sl)||(t=[1,0,0,0,1,0,0,0,1],!Ah(t,Ks,js,Js,Sl))?!1:(wl.crossVectors(vr,_r),t=[wl.x,wl.y,wl.z],Ah(t,Ks,js,Js,Sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new L,new L,new L,new L,new L,new L,new L,new L],mi=new L,Ml=new Xt,Ks=new L,js=new L,Js=new L,vr=new L,_r=new L,Yr=new L,ra=new L,Sl=new L,wl=new L,$r=new L;function Ah(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){$r.fromArray(r,s);const a=i.x*Math.abs($r.x)+i.y*Math.abs($r.y)+i.z*Math.abs($r.z),l=e.dot($r),c=t.dot($r),u=n.dot($r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Nb=new Xt,sa=new L,Ch=new L;class qt{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nb.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Ch)),this.expandByPoint(sa.copy(e.center).sub(Ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zi=new L,Rh=new L,Tl=new L,xr=new L,Ih=new L,El=new L,Ph=new L;class Gr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rh.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(Rh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Tl),a=xr.dot(this.direction),l=-xr.dot(Tl),c=xr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Rh).addScaledVector(Tl,f),d}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,i,s){Ih.subVectors(t,e),El.subVectors(n,e),Ph.crossVectors(Ih,El);let o=this.direction.dot(Ph),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xr.subVectors(this.origin,e);const l=a*this.direction.dot(El.crossVectors(xr,El));if(l<0)return null;const c=a*this.direction.dot(Ih.cross(xr));if(c<0||l+c>o)return null;const u=-a*xr.dot(Ph);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,m,v,g){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,m,v,g)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Qs.setFromMatrixColumn(e,0).length(),s=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f+v*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ub,e,Ob)}lookAt(e,t,n){const i=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),yr.crossVectors(n,Wn),yr.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),yr.crossVectors(n,Wn)),yr.normalize(),Al.crossVectors(Wn,yr),i[0]=yr.x,i[4]=Al.x,i[8]=Wn.x,i[1]=yr.y,i[5]=Al.y,i[9]=Wn.y,i[2]=yr.z,i[6]=Al.z,i[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],_=n[7],x=n[11],w=n[15],E=i[0],A=i[4],I=i[8],M=i[12],T=i[1],D=i[5],O=i[9],k=i[13],F=i[2],V=i[6],H=i[10],U=i[14],Z=i[3],ce=i[7],ae=i[11],ue=i[15];return s[0]=o*E+a*T+l*F+c*Z,s[4]=o*A+a*D+l*V+c*ce,s[8]=o*I+a*O+l*H+c*ae,s[12]=o*M+a*k+l*U+c*ue,s[1]=u*E+h*T+f*F+d*Z,s[5]=u*A+h*D+f*V+d*ce,s[9]=u*I+h*O+f*H+d*ae,s[13]=u*M+h*k+f*U+d*ue,s[2]=m*E+v*T+g*F+p*Z,s[6]=m*A+v*D+g*V+p*ce,s[10]=m*I+v*O+g*H+p*ae,s[14]=m*M+v*k+g*U+p*ue,s[3]=y*E+_*T+x*F+w*Z,s[7]=y*A+_*D+x*V+w*ce,s[11]=y*I+_*O+x*H+w*ae,s[15]=y*M+_*k+x*U+w*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15],y=l*d-c*f,_=a*d-c*h,x=a*f-l*h,w=o*d-c*u,E=o*f-l*u,A=o*h-a*u;return t*(v*y-g*_+p*x)-n*(m*y-g*w+p*E)+i*(m*_-v*w+p*A)-s*(m*x-v*E+g*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=h*g*c-v*f*c+v*l*d-a*g*d-h*l*p+a*f*p,_=m*f*c-u*g*c-m*l*d+o*g*d+u*l*p-o*f*p,x=u*v*c-m*h*c+m*a*d-o*v*d-u*a*p+o*h*p,w=m*h*l-u*v*l-m*a*f+o*v*f+u*a*g-o*h*g,E=t*y+n*_+i*x+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=y*A,e[1]=(v*f*s-h*g*s-v*i*d+n*g*d+h*i*p-n*f*p)*A,e[2]=(a*g*s-v*l*s+v*i*c-n*g*c-a*i*p+n*l*p)*A,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*A,e[4]=_*A,e[5]=(u*g*s-m*f*s+m*i*d-t*g*d-u*i*p+t*f*p)*A,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*p-t*l*p)*A,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*A,e[8]=x*A,e[9]=(m*h*s-u*v*s-m*n*d+t*v*d+u*n*p-t*h*p)*A,e[10]=(o*v*s-m*a*s+m*n*c-t*v*c-o*n*p+t*a*p)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*A,e[12]=w*A,e[13]=(u*v*i-m*h*i+m*n*f-t*v*f-u*n*g+t*h*g)*A,e[14]=(m*a*i-o*v*i-m*n*l+t*v*l+o*n*g-t*a*g)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,v=o*u,g=o*h,p=a*h,y=l*c,_=l*u,x=l*h,w=n.x,E=n.y,A=n.z;return i[0]=(1-(v+p))*w,i[1]=(d+x)*w,i[2]=(m-_)*w,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(f+p))*E,i[6]=(g+y)*E,i[7]=0,i[8]=(m+_)*A,i[9]=(g-y)*A,i[10]=(1-(f+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Qs.set(i[0],i[1],i[2]).length();const o=Qs.set(i[4],i[5],i[6]).length(),a=Qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),gi.copy(this);const c=1/s,u=1/o,h=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Yn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let m,v;if(l)m=s/(o-s),v=o*s/(o-s);else if(a===Yn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Fo)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Yn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let m,v;if(l)m=1/(o-s),v=o/(o-s);else if(a===Yn)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===Fo)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qs=new L,gi=new Ve,Ub=new L(0,0,0),Ob=new L(1,1,1),yr=new L,Al=new L,Wn=new L,Gp=new Ve,Hp=new mn;class jn{constructor(e=0,t=0,n=0,i=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hp.setFromEuler(this),this.setFromQuaternion(Hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fb=0;const Wp=new L,eo=new mn,Ki=new Ve,Cl=new L,oa=new L,Bb=new L,kb=new mn,Xp=new L(1,0,0),qp=new L(0,1,0),Yp=new L(0,0,1),$p={type:"added"},zb={type:"removed"},to={type:"childadded",child:null},Lh={type:"childremoved",child:null};class gt extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new L,t=new jn,n=new mn,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new it}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis(Yp,e)}translateOnAxis(e,t){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis(Yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cl.copy(e):Cl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(oa,Cl,this.up):Ki.lookAt(Cl,oa,this.up),this.quaternion.setFromRotationMatrix(Ki),i&&(Ki.extractRotation(i.matrixWorld),eo.setFromRotationMatrix(Ki),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($p),to.child=e,this.dispatchEvent(to),to.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zb),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($p),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,Bb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,kb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new L(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new L,ji=new L,Dh=new L,Ji=new L,no=new L,io=new L,Zp=new L,Nh=new L,Uh=new L,Oh=new L,Fh=new yt,Bh=new yt,kh=new yt;class Bn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vi.subVectors(e,t),i.cross(vi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vi.subVectors(i,t),ji.subVectors(n,t),Dh.subVectors(e,t);const o=vi.dot(vi),a=vi.dot(ji),l=vi.dot(Dh),c=ji.dot(ji),u=ji.dot(Dh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Fh.setScalar(0),Bh.setScalar(0),kh.setScalar(0),Fh.fromBufferAttribute(e,t),Bh.fromBufferAttribute(e,n),kh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Fh,s.x),o.addScaledVector(Bh,s.y),o.addScaledVector(kh,s.z),o}static isFrontFacing(e,t,n,i){return vi.subVectors(n,t),ji.subVectors(e,t),vi.cross(ji).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),vi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;no.subVectors(i,n),io.subVectors(s,n),Nh.subVectors(e,n);const l=no.dot(Nh),c=io.dot(Nh);if(l<=0&&c<=0)return t.copy(n);Uh.subVectors(e,i);const u=no.dot(Uh),h=io.dot(Uh);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(no,o);Oh.subVectors(e,s);const d=no.dot(Oh),m=io.dot(Oh);if(m>=0&&d<=m)return t.copy(s);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(io,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Zp.subVectors(s,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(Zp,a);const p=1/(g+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(no,o).addScaledVector(io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function zh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=wd(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zh(o,s,e+1/3),this.g=zh(o,s,e),this.b=zh(o,s,e-1/3)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Zt){function n(s){s!==void 0&&parseFloat(s)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=pv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return pt.workingToColorSpace(fn.copy(this),e),Math.round(Ke(fn.r*255,0,255))*65536+Math.round(Ke(fn.g*255,0,255))*256+Math.round(Ke(fn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,s=fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Zt){pt.workingToColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Rl);const n=Da(br.h,Rl.h,t),i=Da(br.s,Rl.s,t),s=Da(br.l,Rl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new ye;ye.NAMES=pv;let Vb=0;class jt extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=bs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Tc,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==Ar&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rn extends jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ir=Gb();function Gb(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Nn(r){Math.abs(r)>65504&&Me("DataUtils.toHalfFloat(): Value out of range."),r=Ke(r,-65504,65504),ir.floatView[0]=r;const e=ir.uint32View[0],t=e>>23&511;return ir.baseTable[t]+((e&8388607)>>ir.shiftTable[t])}function ba(r){const e=r>>10;return ir.uint32View[0]=ir.mantissaTable[ir.offsetTable[e]+(r&1023)]+ir.exponentTable[e],ir.floatView[0]}class Hb{static toHalfFloat(e){return Nn(e)}static fromHalfFloat(e){return ba(e)}}const Yt=new L,Il=new ne;let Wb=0;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Il.fromBufferAttribute(this,t),Il.applyMatrix3(e),this.setXY(t,Il.x,Il.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xa&&(e.usage=this.usage),e}}class Xb extends St{constructor(e,t,n){super(new Int8Array(e),t,n)}}class qb extends St{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Yb extends St{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class $b extends St{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Ed extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zb extends St{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Ad extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kb extends St{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ba(this.array[e*this.itemSize]);return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=Nn(t),this}getY(e){let t=ba(this.array[e*this.itemSize+1]);return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=Nn(t),this}getZ(e){let t=ba(this.array[e*this.itemSize+2]);return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=Nn(t),this}getW(e){let t=ba(this.array[e*this.itemSize+3]);return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=Nn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=Nn(t),this.array[e+1]=Nn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=Nn(t),this.array[e+1]=Nn(n),this.array[e+2]=Nn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.array[e+0]=Nn(t),this.array[e+1]=Nn(n),this.array[e+2]=Nn(i),this.array[e+3]=Nn(s),this}}class Le extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jb=0;const ti=new Ve,Vh=new gt,ro=new L,Xn=new Xt,aa=new Xt,en=new L;class et extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cv(e)?Ad:Ed)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Xn.min,aa.min),Xn.expandByPoint(en),en.addVectors(Xn.max,aa.max),Xn.expandByPoint(en)):(Xn.expandByPoint(aa.min),Xn.expandByPoint(aa.max))}Xn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(ro.fromBufferAttribute(e,c),en.add(ro)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new L,l[I]=new L;const c=new L,u=new L,h=new L,f=new ne,d=new ne,m=new ne,v=new L,g=new L;function p(I,M,T){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,T),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,T),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(D),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(D),a[I].add(v),a[M].add(v),a[T].add(v),l[I].add(g),l[M].add(g),l[T].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,M=y.length;I<M;++I){const T=y[I],D=T.start,O=T.count;for(let k=D,F=D+O;k<F;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new L,x=new L,w=new L,E=new L;function A(I){w.fromBufferAttribute(i,I),E.copy(w);const M=a[I];_.copy(M),_.sub(w.multiplyScalar(w.dot(M))).normalize(),x.crossVectors(E,M);const D=x.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,D)}for(let I=0,M=y.length;I<M;++I){const T=y[I],D=T.start,O=T.count;for(let k=D,F=D+O;k<F;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new St(f,u,h)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new et,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new Ve,Zr=new Gr,Pl=new qt,jp=new L,Ll=new L,Dl=new L,Nl=new L,Gh=new L,Ul=new L,Jp=new L,Ol=new L;class kt extends gt{constructor(e=new et,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Gh.fromBufferAttribute(h,e),o?Ul.addScaledVector(Gh,u):Ul.addScaledVector(Gh.sub(t),u))}t.add(Ul)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pl.copy(n.boundingSphere),Pl.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(Pl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Pl,jp)===null||Zr.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&(Kp.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(Kp),!(n.boundingBox!==null&&Zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,w=_;x<w;x+=3){const E=a.getX(x),A=a.getX(x+1),I=a.getX(x+2);i=Fl(this,p,e,n,c,u,h,E,A,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const y=a.getX(g),_=a.getX(g+1),x=a.getX(g+2);i=Fl(this,o,e,n,c,u,h,y,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,w=_;x<w;x+=3){const E=x,A=x+1,I=x+2;i=Fl(this,p,e,n,c,u,h,E,A,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const y=g,_=g+1,x=g+2;i=Fl(this,o,e,n,c,u,h,y,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Jb(r,e,t,n,i,s,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Gi,a),l===null)return null;Ol.copy(a),Ol.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ol);return c<t.near||c>t.far?null:{distance:c,point:Ol.clone(),object:r}}function Fl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ll),r.getVertexPosition(l,Dl),r.getVertexPosition(c,Nl);const u=Jb(r,e,t,n,Ll,Dl,Nl,Jp);if(u){const h=new L;Bn.getBarycoord(Jp,Ll,Dl,Nl,h),i&&(u.uv=Bn.getInterpolatedAttribute(i,a,l,c,h,new ne)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,a,l,c,h,new ne)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};Bn.getNormal(Ll,Dl,Nl,f.normal),u.face=f,u.barycoord=h}return u}class Vs extends et{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(h,2));function m(v,g,p,y,_,x,w,E,A,I,M){const T=x/A,D=w/I,O=x/2,k=w/2,F=E/2,V=A+1,H=I+1;let U=0,Z=0;const ce=new L;for(let ae=0;ae<H;ae++){const ue=ae*D-k;for(let Be=0;Be<V;Be++){const Ue=Be*T-O;ce[v]=Ue*y,ce[g]=ue*_,ce[p]=F,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[g]=0,ce[p]=E>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(Be/A),h.push(1-ae/I),U+=1}}for(let ae=0;ae<I;ae++)for(let ue=0;ue<A;ue++){const Be=f+ue+V*ae,Ue=f+ue+V*(ae+1),at=f+(ue+1)+V*(ae+1),ct=f+(ue+1)+V*ae;l.push(Be,Ue,ct),l.push(Ue,at,ct),Z+=6}a.addGroup(d,Z,M),d+=Z,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const n=zo(r[t]);for(const i in n)e[i]=n[i]}return e}function Qb(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function mv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Cd={clone:zo,merge:bn};var eM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eM,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=Qb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qu extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new L,Qp=new ne,em=new ne;class Kt extends qu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Qp,em),t.subVectors(em,Qp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class gv extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(so,oo,e,t);i.layers=this.layers,this.add(i);const s=new Kt(so,oo,e,t);s.layers=this.layers,this.add(s);const o=new Kt(so,oo,e,t);o.layers=this.layers,this.add(o);const a=new Kt(so,oo,e,t);a.layers=this.layers,this.add(a);const l=new Kt(so,oo,e,t);l.layers=this.layers,this.add(l);const c=new Kt(so,oo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class al extends Ut{constructor(e=[],t=Hi,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new al(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Vs(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:zo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:zi});s.uniforms.tEquirect.value=t;const o=new kt(i,s),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=Rt),new gv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Fi extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nM={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new Yu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $u{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=n}clone(){return new $u(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Id=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class ll{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xa,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yn=new L;class kr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pd extends jt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ao;const la=new L,lo=new L,co=new L,uo=new ne,ca=new ne,vv=new Ve,Bl=new L,ua=new L,kl=new L,tm=new ne,Hh=new ne,nm=new ne;class _v extends gt{constructor(e=new Pd){if(super(),this.isSprite=!0,this.type="Sprite",ao===void 0){ao=new et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ll(t,5);ao.setIndex([0,1,2,0,2,3]),ao.setAttribute("position",new kr(n,3,0,!1)),ao.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=ao,this.material=e,this.center=new ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lo.setFromMatrixScale(this.matrixWorld),vv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),co.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lo.multiplyScalar(-co.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;zl(Bl.set(-.5,-.5,0),co,o,lo,i,s),zl(ua.set(.5,-.5,0),co,o,lo,i,s),zl(kl.set(.5,.5,0),co,o,lo,i,s),tm.set(0,0),Hh.set(1,0),nm.set(1,1);let a=e.ray.intersectTriangle(Bl,ua,kl,!1,la);if(a===null&&(zl(ua.set(-.5,.5,0),co,o,lo,i,s),Hh.set(0,1),a=e.ray.intersectTriangle(Bl,kl,ua,!1,la),a===null))return;const l=e.ray.origin.distanceTo(la);l<e.near||l>e.far||t.push({distance:l,point:la.clone(),uv:Bn.getInterpolation(la,Bl,ua,kl,tm,Hh,nm,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zl(r,e,t,n,i,s){uo.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ca.x=s*uo.x-i*uo.y,ca.y=i*uo.x+s*uo.y):ca.copy(uo),r.copy(e),r.x+=ca.x,r.y+=ca.y,r.applyMatrix4(vv)}const Vl=new L,im=new L;class xv extends gt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Vl.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Vl);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Vl.setFromMatrixPosition(e.matrixWorld),im.setFromMatrixPosition(this.matrixWorld);const n=Vl.distanceTo(im)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const rm=new L,sm=new yt,om=new yt,iM=new L,am=new Ve,Gl=new L,Wh=new qt,lm=new Ve,Xh=new Gr;class Ld extends kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nf,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Gl),this.boundingBox.expandByPoint(Gl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Gl),this.boundingSphere.expandByPoint(Gl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wh.copy(this.boundingSphere),Wh.applyMatrix4(i),e.ray.intersectsSphere(Wh)!==!1&&(lm.copy(i).invert(),Xh.copy(e.ray).applyMatrix4(lm),!(this.boundingBox!==null&&Xh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===K0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sm.fromBufferAttribute(i.attributes.skinIndex,e),om.fromBufferAttribute(i.attributes.skinWeight,e),rm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=om.getComponent(s);if(o!==0){const a=sm.getComponent(s);am.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(iM.copy(rm).applyMatrix4(am),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zu extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bi extends Ut{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Bt,u=Bt,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cm=new Ve,rM=new Ve;class cl{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:rM;cm.multiplyMatrices(a,t[s]),cm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new cl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bi(t,e,e,Cn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Me("Skeleton: No bone found with UUID:",s),o=new Zu),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Rs extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ho=new Ve,um=new Ve,Hl=[],hm=new Xt,sM=new Ve,ha=new kt,fa=new qt;class Dd extends kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),hm.copy(e.boundingBox).applyMatrix4(ho),this.boundingBox.union(hm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),fa.copy(e.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(n),e.ray.intersectsSphere(fa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ho),um.multiplyMatrices(n,ho),ha.matrixWorld=um,ha.raycast(e,Hl);for(let o=0,a=Hl.length;o<a;o++){const l=Hl[o];l.instanceId=s,l.object=this,t.push(l)}Hl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bi(new Float32Array(i*this.count),i,this.count,Fu,An));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qh=new L,oM=new L,aM=new it;class Tr{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qh.subVectors(n,t).cross(oM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||aM.getNormalMatrix(e),i=this.coplanarPoint(qh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new qt,lM=new ne(.5,.5),Wl=new L;class Ko{constructor(e=new Tr,t=new Tr,n=new Tr,i=new Tr,s=new Tr,o=new Tr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],v=s[9],g=s[10],p=s[11],y=s[12],_=s[13],x=s[14],w=s[15];if(i[0].setComponents(c-o,d-u,p-m,w-y).normalize(),i[1].setComponents(c+o,d+u,p+m,w+y).normalize(),i[2].setComponents(c+a,d+h,p+v,w+_).normalize(),i[3].setComponents(c-a,d-h,p-v,w-_).normalize(),n)i[4].setComponents(l,f,g,x).normalize(),i[5].setComponents(c-l,d-f,p-g,w-x).normalize();else if(i[4].setComponents(c-l,d-f,p-g,w-x).normalize(),t===Yn)i[5].setComponents(c+l,d+f,p+g,w+x).normalize();else if(t===Fo)i[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const t=lM.distanceTo(e.center);return Kr.radius=.7071067811865476+t,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wl.x=i.normal.x>0?e.max.x:e.min.x,Wl.y=i.normal.y>0?e.max.y:e.min.y,Wl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ri=new Ve,Ii=new Ko;class Ku{constructor(){this.coordinateSystem=Yn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Ri.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Ii.setFromProjectionMatrix(Ri,i.coordinateSystem,i.reversedDepth),Ii.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Ri.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Ii.setFromProjectionMatrix(Ri,i.coordinateSystem,i.reversedDepth),Ii.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Ri.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Ii.setFromProjectionMatrix(Ri,i.coordinateSystem,i.reversedDepth),Ii.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Ri.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Ii.setFromProjectionMatrix(Ri,i.coordinateSystem,i.reversedDepth),Ii.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Ri.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Ii.setFromProjectionMatrix(Ri,i.coordinateSystem,i.reversedDepth),Ii.containsPoint(e))return!0}return!1}clone(){return new Ku}}function Yh(r,e){return r-e}function cM(r,e){return r.z-e.z}function uM(r,e){return e.z-r.z}class hM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const a=s[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Dn=new Ve,fM=new ye(1,1,1),fm=new Ko,dM=new Ku,Xl=new Xt,jr=new qt,da=new L,dm=new L,pM=new L,$h=new hM,dn=new kt,ql=[];function mM(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function Jr(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class yv extends kt{constructor(e,t,n=t*2,i){super(new et,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new bi(t,e,e,Cn,An);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new bi(t,e,e,ol,hi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new bi(t,e,e,Cn,An);n.colorSpace=pt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),h=new St(u,l,c);t.setAttribute(s,h)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new St(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Dn),this.getBoundingBoxAt(s,Xl).applyMatrix4(Dn),e.union(Xl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Dn),this.getBoundingSphereAt(s,jr).applyMatrix4(Dn),e.union(jr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Yh),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;Dn.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(fM.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Yh),l=this._availableGeometryIds.shift(),s[l]=i):(l=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const h=t.getAttribute(u),f=n.getAttribute(u);mM(h,f,l);const d=h.itemSize;for(let m=h.count,v=c;m<v;m++){const g=l+m;for(let p=0;p<d;p++)f.setComponent(g,p,0)}f.needsUpdate=!0,f.addUpdateRange(l*d,c*d)}if(i){const u=a.indexStart,h=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let f=0;f<o.count;f++)s.setX(u+f,l+o.getX(f));for(let f=o.count,d=h;f<d;f++)s.setX(u+f,l);s.needsUpdate=!0,s.addUpdateRange(u,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:h,reservedIndexCount:f}=c,d=s.index,m=d.array,v=e-h;for(let g=u;g<u+f;g++)m[g]=m[g]+v;d.array.copyWithin(t,u,u+f),d.addUpdateRange(t,f),d.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:h}=c,f=s.attributes;for(const d in f){const m=f[d],{array:v,itemSize:g}=m;v.copyWithin(e*g,u*g,(u+h)*g),m.addUpdateRange(e*g,h*g),m.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart,this._nextIndexStart=s.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new Xt,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let u=l;o&&(u=o.getX(u)),s.expandByPoint(da.fromBufferAttribute(a,u))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new qt;this.getBoundingBoxAt(e,Xl),Xl.getCenter(s.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,u=i.start+i.count;c<u;c++){let h=c;o&&(h=o.getX(h)),da.fromBufferAttribute(a,h),l=Math.max(l,s.center.distanceToSquared(da))}s.radius=Math.sqrt(l),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Yh);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);Jr(this._multiDrawCounts,i),Jr(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Jr(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Jr(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Jr(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new et,this._initializeGeometry(s));const o=this.geometry;s.index&&Jr(s.index.array,o.index.array);for(const a in s.attributes)Jr(s.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;dn.material=this.material,dn.geometry.index=o.index,dn.geometry.attributes=o.attributes,dn.geometry.boundingBox===null&&(dn.geometry.boundingBox=new Xt),dn.geometry.boundingSphere===null&&(dn.geometry.boundingSphere=new qt);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,u=i[c];dn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,dn.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,dn.geometry.boundingBox),this.getBoundingSphereAt(c,dn.geometry.boundingSphere),dn.raycast(e,ql);for(let h=0,f=ql.length;h<f;h++){const d=ql[h];d.object=this,d.batchId=a,t.push(d)}ql.length=0}dn.material=null,dn.geometry.index=null,dn.geometry.attributes={},dn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,m=d.image.data,v=n.isArrayCamera?dM:fm;f&&!n.isArrayCamera&&(Dn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),fm.setFromProjectionMatrix(Dn,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){Dn.copy(this.matrixWorld).invert(),da.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Dn),dm.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Dn);for(let _=0,x=l.length;_<x;_++)if(l[_].visible&&l[_].active){const w=l[_].geometryIndex;this.getMatrixAt(_,Dn),this.getBoundingSphereAt(w,jr).applyMatrix4(Dn);let E=!1;if(f&&(E=!v.intersectsSphere(jr,n)),!E){const A=h[w],I=pM.subVectors(jr.center,da).dot(dm);$h.push(A.start,A.count,I,_)}}const p=$h.list,y=this.customSort;y===null?p.sort(s.transparent?uM:cM):y.call(this,p,n);for(let _=0,x=p.length;_<x;_++){const w=p[_];c[g]=w.start*a,u[g]=w.count,m[g]=w.index,g++}$h.reset()}else for(let p=0,y=l.length;p<y;p++)if(l[p].visible&&l[p].active){const _=l[p].geometryIndex;let x=!1;if(f&&(this.getMatrixAt(p,Dn),this.getBoundingSphereAt(_,jr).applyMatrix4(Dn),x=!v.intersectsSphere(jr,n)),!x){const w=h[_];c[g]=w.start*a,u[g]=w.count,m[g]=p,g++}}d.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class _n extends jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fu=new L,du=new L,pm=new Ve,pa=new Gr,Yl=new qt,Zh=new L,mm=new L;class hr extends gt{constructor(e=new et,t=new _n){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)fu.fromBufferAttribute(t,i-1),du.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fu.distanceTo(du);e.setAttribute("lineDistance",new Le(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yl.copy(n.boundingSphere),Yl.applyMatrix4(i),Yl.radius+=s,e.ray.intersectsSphere(Yl)===!1)return;pm.copy(i).invert(),pa.copy(e.ray).applyMatrix4(pm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=c){const p=u.getX(v),y=u.getX(v+1),_=$l(this,e,pa,l,p,y,v);_&&t.push(_)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(d),p=$l(this,e,pa,l,v,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=c){const p=$l(this,e,pa,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=$l(this,e,pa,l,m-1,d,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $l(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(fu.fromBufferAttribute(a,i),du.fromBufferAttribute(a,s),t.distanceSqToSegment(fu,du,Zh,mm)>n)return;Zh.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Zh);if(!(c<e.near||c>e.far))return{distance:c,point:mm.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const gm=new L,vm=new L;class Ei extends hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)gm.fromBufferAttribute(t,i),vm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gm.distanceTo(vm);e.setAttribute("lineDistance",new Le(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nd extends hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let ju=class extends jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const _m=new Ve,Ff=new Gr,Zl=new qt,Kl=new L;class Ud extends gt{constructor(e=new et,t=new ju){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(i),Zl.radius+=s,e.ray.intersectsSphere(Zl)===!1)return;_m.copy(i).invert(),Ff.copy(e.ray).applyMatrix4(_m);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,v=d;m<v;m++){const g=c.getX(m);Kl.fromBufferAttribute(h,g),xm(Kl,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,v=d;m<v;m++)Kl.fromBufferAttribute(h,m),xm(Kl,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xm(r,e,t,n,i,s,o){const a=Ff.distanceSqToPoint(r);if(a<t){const l=new L;Ff.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bv extends Ut{constructor(e,t,n,i,s=Rt,o=Rt,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class gM extends bv{constructor(e,t,n,i,s,o,a,l){super({},e,t,n,i,s,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class vM extends Ut{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Bt,this.minFilter=Bt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ju extends Ut{constructor(e,t,n,i,s,o,a,l,c,u,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class _M extends Ju{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=En,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends Ju{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Hi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class yM extends Ut{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vo extends Ut{constructor(e,t,n=hi,i,s,o,a=Bt,l=Bt,c,u=Xi,h=1){if(u!==Xi&&u!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mv extends Vo{constructor(e,t=hi,n=Hi,i,s,o=Bt,a=Bt,l,c=Xi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Od extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qu extends et{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,f=t,d=2*h+f,m=n*2+s,v=i+1,g=new L,p=new L;for(let y=0;y<=m;y++){let _=0,x=0,w=0,E=0;if(y<=n){const M=y/n,T=M*Math.PI/2;x=-u-e*Math.cos(T),w=e*Math.sin(T),E=-e*Math.cos(T),_=M*h}else if(y<=n+s){const M=(y-n)/s;x=-u+M*t,w=e,E=0,_=h+M*f}else{const M=(y-n-s)/n,T=M*Math.PI/2;x=u+e*Math.sin(T),w=e*Math.cos(T),E=e*Math.sin(T),_=h+f+M*h}const A=Math.max(0,Math.min(1,_/d));let I=0;y===0?I=.5/i:y===m&&(I=-.5/i);for(let M=0;M<=i;M++){const T=M/i,D=T*Math.PI*2,O=Math.sin(D),k=Math.cos(D);p.x=-w*k,p.y=x,p.z=w*O,a.push(p.x,p.y,p.z),g.set(-w*k,E,w*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(T+I,A)}if(y>0){const M=(y-1)*v;for(let T=0;T<i;T++){const D=M+T,O=M+T+1,k=y*v+T,F=y*v+T+1;o.push(D,O,k),o.push(O,F,k)}}}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ul extends et{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new L,u=new ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class hl extends et{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let m=0;const v=[],g=n/2;let p=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Le(h,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(d,2));function y(){const x=new L,w=new L;let E=0;const A=(t-e)/n;for(let I=0;I<=s;I++){const M=[],T=I/s,D=T*(t-e)+e;for(let O=0;O<=i;O++){const k=O/i,F=k*l+a,V=Math.sin(F),H=Math.cos(F);w.x=D*V,w.y=-T*n+g,w.z=D*H,h.push(w.x,w.y,w.z),x.set(V,A,H).normalize(),f.push(x.x,x.y,x.z),d.push(k,1-T),M.push(m++)}v.push(M)}for(let I=0;I<i;I++)for(let M=0;M<s;M++){const T=v[M][I],D=v[M+1][I],O=v[M+1][I+1],k=v[M][I+1];(e>0||M!==0)&&(u.push(T,D,k),E+=3),(t>0||M!==s-1)&&(u.push(D,O,k),E+=3)}c.addGroup(p,E,0),p+=E}function _(x){const w=m,E=new ne,A=new L;let I=0;const M=x===!0?e:t,T=x===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,g*T,0),f.push(0,T,0),d.push(.5,.5),m++;const D=m;for(let O=0;O<=i;O++){const F=O/i*l+a,V=Math.cos(F),H=Math.sin(F);A.x=M*H,A.y=g*T,A.z=M*V,h.push(A.x,A.y,A.z),f.push(0,T,0),E.x=V*.5+.5,E.y=H*.5*T+.5,d.push(E.x,E.y),m++}for(let O=0;O<i;O++){const k=w+O,F=D+O;x===!0?u.push(F,F+1,k):u.push(F+1,F,k),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fl extends hl{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new fl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hr extends et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(s.slice(),3)),this.setAttribute("uv",new Le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new L,x=new L,w=new L;for(let E=0;E<t.length;E+=3)d(t[E+0],_),d(t[E+1],x),d(t[E+2],w),l(_,x,w,y)}function l(y,_,x,w){const E=w+1,A=[];for(let I=0;I<=E;I++){A[I]=[];const M=y.clone().lerp(x,I/E),T=_.clone().lerp(x,I/E),D=E-I;for(let O=0;O<=D;O++)O===0&&I===E?A[I][O]=M:A[I][O]=M.clone().lerp(T,O/D)}for(let I=0;I<E;I++)for(let M=0;M<2*(E-I)-1;M++){const T=Math.floor(M/2);M%2===0?(f(A[I][T+1]),f(A[I+1][T]),f(A[I][T])):(f(A[I][T+1]),f(A[I+1][T+1]),f(A[I+1][T]))}}function c(y){const _=new L;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(y),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function u(){const y=new L;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];const x=g(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(x,1-w)}m(),h()}function h(){for(let y=0;y<o.length;y+=6){const _=o[y+0],x=o[y+2],w=o[y+4],E=Math.max(_,x,w),A=Math.min(_,x,w);E>.9&&A<.1&&(_<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,_){const x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){const y=new L,_=new L,x=new L,w=new L,E=new ne,A=new ne,I=new ne;for(let M=0,T=0;M<s.length;M+=9,T+=6){y.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),E.set(o[T+0],o[T+1]),A.set(o[T+2],o[T+3]),I.set(o[T+4],o[T+5]),w.copy(y).add(_).add(x).divideScalar(3);const D=g(w);v(E,T+0,y,D),v(A,T+2,_,D),v(I,T+4,x,D)}}function v(y,_,x,w){w<0&&y.x===1&&(o[_]=y.x-1),x.x===0&&x.z===0&&(o[_]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.vertices,e.indices,e.radius,e.detail)}}class Go extends Hr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Go(e.radius,e.detail)}}const jl=new L,Jl=new L,Kh=new L,Ql=new Bn;class Sv extends et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Ms*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:g,c:p}=Ql;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Ql.getNormal(Kh),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const _=(y+1)%3,x=h[y],w=h[_],E=Ql[u[y]],A=Ql[u[_]],I=`${x}_${w}`,M=`${w}_${x}`;M in f&&f[M]?(Kh.dot(f[M].normal)<=s&&(d.push(E.x,E.y,E.z),d.push(A.x,A.y,A.z)),f[M]=null):I in f||(f[I]={index0:c[y],index1:c[_],normal:Kh.clone()})}}for(const m in f)if(f[m]){const{index0:v,index1:g}=f[m];jl.fromBufferAttribute(a,v),Jl.fromBufferAttribute(a,g),d.push(jl.x,jl.y,jl.z),d.push(Jl.x,Jl.y,Jl.z)}this.setAttribute("position",new Le(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Me("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ne:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,i=[],s=[],o=[],a=new L,l=new Ve;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ke(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Ke(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class eh extends Ai{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ne){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wv extends eh{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fd(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const ec=new L,jh=new Fd,Jh=new Fd,Qh=new Fd;class Tv extends Ai{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(ec.subVectors(i[0],i[1]).add(i[0]),c=ec);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(ec.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ec),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),jh.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,v,g),Jh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,v,g),Qh.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Jh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Qh.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(jh.calc(l),Jh.calc(l),Qh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ym(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function bM(r,e){const t=1-r;return t*t*e}function MM(r,e){return 2*(1-r)*r*e}function SM(r,e){return r*r*e}function Na(r,e,t,n){return bM(r,e)+MM(r,t)+SM(r,n)}function wM(r,e){const t=1-r;return t*t*t*e}function TM(r,e){const t=1-r;return 3*t*t*r*e}function EM(r,e){return 3*(1-r)*r*r*e}function AM(r,e){return r*r*r*e}function Ua(r,e,t,n,i){return wM(r,e)+TM(r,t)+EM(r,n)+AM(r,i)}class Bd extends Ai{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ua(e,i.x,s.x,o.x,a.x),Ua(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ev extends Ai{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ua(e,i.x,s.x,o.x,a.x),Ua(e,i.y,s.y,o.y,a.y),Ua(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kd extends Ai{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Av extends Ai{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends Ai{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Na(e,i.x,s.x,o.x),Na(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vd extends Ai{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Na(e,i.x,s.x,o.x),Na(e,i.y,s.y,o.y),Na(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gd extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(ym(a,l.x,c.x,u.x,h.x),ym(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ne().fromArray(i))}return this}}var pu=Object.freeze({__proto__:null,ArcCurve:wv,CatmullRomCurve3:Tv,CubicBezierCurve:Bd,CubicBezierCurve3:Ev,EllipseCurve:eh,LineCurve:kd,LineCurve3:Av,QuadraticBezierCurve:zd,QuadraticBezierCurve3:Vd,SplineCurve:Gd});class Cv extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new pu[i.type]().fromJSON(i))}return this}}class mu extends Cv{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new kd(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new zd(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Bd(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Gd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new eh(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ss extends mu{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new mu().fromJSON(i))}return this}}function CM(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Rv(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=DM(r,e,s,t)),r.length>80*t){a=r[0],l=r[1];let u=a,h=l;for(let f=t;f<i;f+=t){const d=r[f],m=r[f+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return $a(s,o,t,a,l,c,0),o}function Rv(r,e,t,n,i){let s;if(i===WM(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=bm(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=bm(o/n|0,r[o],r[o+1],s);return s&&Ho(s,s.next)&&(Ka(s),s=s.next),s}function Is(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ho(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Ka(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $a(r,e,t,n,i,s,o){if(!r)return;!o&&s&&BM(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?IM(r,n,i,s):RM(r)){e.push(l.i,r.i,c.i),Ka(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=PM(Is(r),e),$a(r,e,t,n,i,s,2)):o===2&&LM(r,e,t,n,i,s):$a(Is(r),e,t,n,i,s,1);break}}}function RM(r){const e=r.prev,t=r,n=r.next;if(Ot(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,s,o),h=Math.min(a,l,c),f=Math.max(i,s,o),d=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&Ma(i,a,s,l,o,c,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function IM(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Ot(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=Math.min(a,l,c),m=Math.min(u,h,f),v=Math.max(a,l,c),g=Math.max(u,h,f),p=Bf(d,m,e,t,n),y=Bf(v,g,e,t,n);let _=r.prevZ,x=r.nextZ;for(;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Ma(a,u,l,h,c,f,_.x,_.y)&&Ot(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Ma(a,u,l,h,c,f,x.x,x.y)&&Ot(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Ma(a,u,l,h,c,f,_.x,_.y)&&Ot(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Ma(a,u,l,h,c,f,x.x,x.y)&&Ot(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function PM(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ho(n,i)&&Pv(n,t,t.next,i)&&Za(n,i)&&Za(i,n)&&(e.push(n.i,t.i,i.i),Ka(t),Ka(t.next),t=r=i),t=t.next}while(t!==r);return Is(t)}function LM(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&VM(o,a)){let l=Lv(o,a);o=Is(o,o.next),l=Is(l,l.next),$a(o,e,t,n,i,s,0),$a(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function DM(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Rv(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(zM(c))}i.sort(NM);for(let s=0;s<i.length;s++)t=UM(i[s],t);return t}function NM(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function UM(r,e){const t=OM(r,e);if(!t)return e;const n=Lv(t,r);return Is(n,n.next),Is(t,t.next)}function OM(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Ho(r,t))return t;do{if(Ho(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Iv(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);Za(t,r)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&FM(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function FM(r,e){return Ot(r.prev,r,e.prev)<0&&Ot(e.next,r,r.next)<0}function BM(r,e,t,n){let i=r;do i.z===0&&(i.z=Bf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,kM(i)}function kM(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Bf(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function zM(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Iv(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Ma(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&Iv(r,e,t,n,i,s,o,a)}function VM(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!GM(r,e)&&(Za(r,e)&&Za(e,r)&&HM(r,e)&&(Ot(r.prev,r,e.prev)||Ot(r,e.prev,e))||Ho(r,e)&&Ot(r.prev,r,r.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ho(r,e){return r.x===e.x&&r.y===e.y}function Pv(r,e,t,n){const i=nc(Ot(r,e,t)),s=nc(Ot(r,e,n)),o=nc(Ot(t,n,r)),a=nc(Ot(t,n,e));return!!(i!==s&&o!==a||i===0&&tc(r,t,e)||s===0&&tc(r,n,e)||o===0&&tc(t,r,n)||a===0&&tc(t,e,n))}function tc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function nc(r){return r>0?1:r<0?-1:0}function GM(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Pv(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Za(r,e){return Ot(r.prev,r,r.next)<0?Ot(r,e,r.next)>=0&&Ot(r,r.prev,e)>=0:Ot(r,e,r.prev)<0||Ot(r,r.next,e)<0}function HM(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Lv(r,e){const t=kf(r.i,r.x,r.y),n=kf(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function bm(r,e,t,n){const i=kf(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ka(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function kf(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function WM(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class XM{static triangulate(e,t,n=2){return CM(e,t,n)}}class xi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return xi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Mm(e),Sm(n,e);let o=e.length;t.forEach(Mm);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Sm(n,t[l]);const a=XM.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Mm(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Sm(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class th extends et{constructor(e=new Ss([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Le(i,3)),this.setAttribute("uv",new Le(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:qM;let _,x=!1,w,E,A,I;if(p){_=p.getSpacedPoints(u),x=!0,f=!1;const ee=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,ee),E=new L,A=new L,I=new L}f||(g=0,d=0,m=0,v=0);const M=a.extractPoints(c);let T=M.shape;const D=M.holes;if(!xi.isClockWise(T)){T=T.reverse();for(let ee=0,te=D.length;ee<te;ee++){const Q=D[ee];xi.isClockWise(Q)&&(D[ee]=Q.reverse())}}function k(ee){const Q=10000000000000001e-36;let me=ee[0];for(let P=1;P<=ee.length;P++){const Ae=P%ee.length,se=ee[Ae],$=se.x-me.x,j=se.y-me.y,C=$*$+j*j,b=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(me.x),Math.abs(me.y)),N=Q*b*b;if(C<=N){ee.splice(Ae,1),P--;continue}me=se}}k(T),D.forEach(k);const F=D.length,V=T;for(let ee=0;ee<F;ee++){const te=D[ee];T=T.concat(te)}function H(ee,te,Q){return te||Ge("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(te,Q)}const U=T.length;function Z(ee,te,Q){let me,P,Ae;const se=ee.x-te.x,$=ee.y-te.y,j=Q.x-ee.x,C=Q.y-ee.y,b=se*se+$*$,N=se*C-$*j;if(Math.abs(N)>Number.EPSILON){const X=Math.sqrt(b),q=Math.sqrt(j*j+C*C),G=te.x-$/X,pe=te.y+se/X,he=Q.x-C/q,Pe=Q.y+j/q,Fe=((he-G)*C-(Pe-pe)*j)/(se*C-$*j);me=G+se*Fe-ee.x,P=pe+$*Fe-ee.y;const oe=me*me+P*P;if(oe<=2)return new ne(me,P);Ae=Math.sqrt(oe/2)}else{let X=!1;se>Number.EPSILON?j>Number.EPSILON&&(X=!0):se<-Number.EPSILON?j<-Number.EPSILON&&(X=!0):Math.sign($)===Math.sign(C)&&(X=!0),X?(me=-$,P=se,Ae=Math.sqrt(b)):(me=se,P=$,Ae=Math.sqrt(b/2))}return new ne(me/Ae,P/Ae)}const ce=[];for(let ee=0,te=V.length,Q=te-1,me=ee+1;ee<te;ee++,Q++,me++)Q===te&&(Q=0),me===te&&(me=0),ce[ee]=Z(V[ee],V[Q],V[me]);const ae=[];let ue,Be=ce.concat();for(let ee=0,te=F;ee<te;ee++){const Q=D[ee];ue=[];for(let me=0,P=Q.length,Ae=P-1,se=me+1;me<P;me++,Ae++,se++)Ae===P&&(Ae=0),se===P&&(se=0),ue[me]=Z(Q[me],Q[Ae],Q[se]);ae.push(ue),Be=Be.concat(ue)}let Ue;if(g===0)Ue=xi.triangulateShape(V,D);else{const ee=[],te=[];for(let Q=0;Q<g;Q++){const me=Q/g,P=d*Math.cos(me*Math.PI/2),Ae=m*Math.sin(me*Math.PI/2)+v;for(let se=0,$=V.length;se<$;se++){const j=H(V[se],ce[se],Ae);ke(j.x,j.y,-P),me===0&&ee.push(j)}for(let se=0,$=F;se<$;se++){const j=D[se];ue=ae[se];const C=[];for(let b=0,N=j.length;b<N;b++){const X=H(j[b],ue[b],Ae);ke(X.x,X.y,-P),me===0&&C.push(X)}me===0&&te.push(C)}}Ue=xi.triangulateShape(ee,te)}const at=Ue.length,ct=m+v;for(let ee=0;ee<U;ee++){const te=f?H(T[ee],Be[ee],ct):T[ee];x?(A.copy(w.normals[0]).multiplyScalar(te.x),E.copy(w.binormals[0]).multiplyScalar(te.y),I.copy(_[0]).add(A).add(E),ke(I.x,I.y,I.z)):ke(te.x,te.y,0)}for(let ee=1;ee<=u;ee++)for(let te=0;te<U;te++){const Q=f?H(T[te],Be[te],ct):T[te];x?(A.copy(w.normals[ee]).multiplyScalar(Q.x),E.copy(w.binormals[ee]).multiplyScalar(Q.y),I.copy(_[ee]).add(A).add(E),ke(I.x,I.y,I.z)):ke(Q.x,Q.y,h/u*ee)}for(let ee=g-1;ee>=0;ee--){const te=ee/g,Q=d*Math.cos(te*Math.PI/2),me=m*Math.sin(te*Math.PI/2)+v;for(let P=0,Ae=V.length;P<Ae;P++){const se=H(V[P],ce[P],me);ke(se.x,se.y,h+Q)}for(let P=0,Ae=D.length;P<Ae;P++){const se=D[P];ue=ae[P];for(let $=0,j=se.length;$<j;$++){const C=H(se[$],ue[$],me);x?ke(C.x,C.y+_[u-1].y,_[u-1].x+Q):ke(C.x,C.y,h+Q)}}}J(),re();function J(){const ee=i.length/3;if(f){let te=0,Q=U*te;for(let me=0;me<at;me++){const P=Ue[me];be(P[2]+Q,P[1]+Q,P[0]+Q)}te=u+g*2,Q=U*te;for(let me=0;me<at;me++){const P=Ue[me];be(P[0]+Q,P[1]+Q,P[2]+Q)}}else{for(let te=0;te<at;te++){const Q=Ue[te];be(Q[2],Q[1],Q[0])}for(let te=0;te<at;te++){const Q=Ue[te];be(Q[0]+U*u,Q[1]+U*u,Q[2]+U*u)}}n.addGroup(ee,i.length/3-ee,0)}function re(){const ee=i.length/3;let te=0;Se(V,te),te+=V.length;for(let Q=0,me=D.length;Q<me;Q++){const P=D[Q];Se(P,te),te+=P.length}n.addGroup(ee,i.length/3-ee,1)}function Se(ee,te){let Q=ee.length;for(;--Q>=0;){const me=Q;let P=Q-1;P<0&&(P=ee.length-1);for(let Ae=0,se=u+g*2;Ae<se;Ae++){const $=U*Ae,j=U*(Ae+1),C=te+me+$,b=te+P+$,N=te+P+j,X=te+me+j;Je(C,b,N,X)}}}function ke(ee,te,Q){l.push(ee),l.push(te),l.push(Q)}function be(ee,te,Q){ot(ee),ot(te),ot(Q);const me=i.length/3,P=y.generateTopUV(n,i,me-3,me-2,me-1);qe(P[0]),qe(P[1]),qe(P[2])}function Je(ee,te,Q,me){ot(ee),ot(te),ot(me),ot(te),ot(Q),ot(me);const P=i.length/3,Ae=y.generateSideWallUV(n,i,P-6,P-3,P-2,P-1);qe(Ae[0]),qe(Ae[1]),qe(Ae[3]),qe(Ae[1]),qe(Ae[2]),qe(Ae[3])}function ot(ee){i.push(l[ee*3+0]),i.push(l[ee*3+1]),i.push(l[ee*3+2])}function qe(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return YM(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new pu[i.type]().fromJSON(i)),new th(n,e.options)}}const qM={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ne(s,o),new ne(a,l),new ne(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],v=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ne(o,1-l),new ne(c,1-h),new ne(f,1-m),new ne(v,1-p)]:[new ne(a,1-l),new ne(u,1-h),new ne(d,1-m),new ne(g,1-p)]}};function YM(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class dl extends Hr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dl(e.radius,e.detail)}}class nh extends et{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ke(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new L,f=new ne,d=new L,m=new L,v=new L;let g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(m)}for(let y=0;y<=t;y++){const _=n+y*u*i,x=Math.sin(_),w=Math.cos(_);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*x,h.y=e[E].y,h.z=e[E].x*w,o.push(h.x,h.y,h.z),f.x=y/t,f.y=E/(e.length-1),a.push(f.x,f.y);const A=l[3*E+0]*x,I=l[3*E+1],M=l[3*E+0]*w;c.push(A,I,M)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const x=_+y*e.length,w=x,E=x+e.length,A=x+e.length+1,I=x+1;s.push(w,E,I),s.push(A,I,E)}this.setIndex(s),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.points,e.segments,e.phiStart,e.phiLength)}}class jo extends Hr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jo(e.radius,e.detail)}}class Jo extends et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const y=p*f-o;for(let _=0;_<c;_++){const x=_*h-s;m.push(x,-y,0),v.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const _=y+c*p,x=y+c*(p+1),w=y+1+c*(p+1),E=y+1+c*p;d.push(_,x,E),d.push(x,w,E)}this.setIndex(d),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class ih extends et{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/i,d=new L,m=new ne;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const p=s+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let v=0;v<i;v++){const g=v*(n+1);for(let p=0;p<n;p++){const y=p+g,_=y,x=y+n+1,w=y+n+2,E=y+1;a.push(_,x,E),a.push(x,w,E)}}this.setIndex(a),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ih(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rh extends et{constructor(e=new Ss([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Le(i,3)),this.setAttribute("normal",new Le(s,3)),this.setAttribute("uv",new Le(o,2));function c(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;xi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const y=m[g];xi.isClockWise(y)===!0&&(m[g]=y.reverse())}const v=xi.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const y=m[g];d=d.concat(y)}for(let g=0,p=d.length;g<p;g++){const y=d[g];i.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=v.length;g<p;g++){const y=v[g],_=y[0]+h,x=y[1]+h,w=y[2]+h;n.push(_,x,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return $M(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new rh(n,e.curveSegments)}}function $M(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class pl extends et{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,f=new L,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const E=w/t;h.x=-e*Math.cos(i+E*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(i+E*s)*Math.sin(o+_*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),g.push(E+x,1-_),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=u[p][y+1],x=u[p][y],w=u[p+1][y],E=u[p+1][y+1];(p!==0||o>0)&&d.push(_,x,E),(p!==n-1||l<Math.PI)&&d.push(x,w,E)}this.setIndex(d),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ml extends Hr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ml(e.radius,e.detail)}}class sh extends et{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const v=m/i*s,g=d/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(v),h.y=(e+t*Math.cos(g))*Math.sin(v),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const v=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,y=(i+1)*d+m;o.push(v,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class oh extends et{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],h=new L,f=new L,d=new L,m=new L,v=new L,g=new L,p=new L;for(let _=0;_<=n;++_){const x=_/n*s*Math.PI*2;y(x,s,o,e,d),y(x+.01,s,o,e,m),g.subVectors(m,d),p.addVectors(m,d),v.crossVectors(g,p),p.crossVectors(v,g),v.normalize(),p.normalize();for(let w=0;w<=i;++w){const E=w/i*Math.PI*2,A=-t*Math.cos(E),I=t*Math.sin(E);h.x=d.x+(A*p.x+I*v.x),h.y=d.y+(A*p.y+I*v.y),h.z=d.z+(A*p.z+I*v.z),l.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),u.push(_/n),u.push(w/i)}}for(let _=1;_<=n;_++)for(let x=1;x<=i;x++){const w=(i+1)*(_-1)+(x-1),E=(i+1)*_+(x-1),A=(i+1)*_+x,I=(i+1)*(_-1)+x;a.push(w,E,I),a.push(E,A,I)}this.setIndex(a),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(u,2));function y(_,x,w,E,A){const I=Math.cos(_),M=Math.sin(_),T=w/x*_,D=Math.cos(T);A.x=E*(2+D)*.5*I,A.y=E*(2+D)*M*.5,A.z=E*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ah extends et{constructor(e=new Vd(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new ne;let u=new L;const h=[],f=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Le(h,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(d,2));function v(){for(let _=0;_<t;_++)g(_);g(s===!1?t:0),y(),p()}function g(_){u=e.getPointAt(_/t,u);const x=o.normals[_],w=o.binormals[_];for(let E=0;E<=i;E++){const A=E/i*Math.PI*2,I=Math.sin(A),M=-Math.cos(A);l.x=M*x.x+I*w.x,l.y=M*x.y+I*w.y,l.z=M*x.z+I*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let x=1;x<=i;x++){const w=(i+1)*(_-1)+(x-1),E=(i+1)*_+(x-1),A=(i+1)*_+x,I=(i+1)*(_-1)+x;m.push(w,E,I),m.push(E,A,I)}}function y(){for(let _=0;_<=t;_++)for(let x=0;x<=i;x++)c.x=_/t,c.y=x/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ah(new pu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Dv extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new L,s=new L;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,d=h.count;for(let m=f,v=f+d;m<v;m+=3)for(let g=0;g<3;g++){const p=a.getX(m+g),y=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),s.fromBufferAttribute(o,y),wm(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),wm(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Le(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function wm(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Tm=Object.freeze({__proto__:null,BoxGeometry:Vs,CapsuleGeometry:Qu,CircleGeometry:ul,ConeGeometry:fl,CylinderGeometry:hl,DodecahedronGeometry:Go,EdgesGeometry:Sv,ExtrudeGeometry:th,IcosahedronGeometry:dl,LatheGeometry:nh,OctahedronGeometry:jo,PlaneGeometry:Jo,PolyhedronGeometry:Hr,RingGeometry:ih,ShapeGeometry:rh,SphereGeometry:pl,TetrahedronGeometry:ml,TorusGeometry:sh,TorusKnotGeometry:oh,TubeGeometry:ah,WireframeGeometry:Dv});class Nv extends jt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Hd extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gl extends jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class di extends gl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Uv extends jt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ov extends jt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Fv extends jt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Bv extends jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wd extends jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xd extends jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kv extends jt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zv extends _n{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function gs(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Vv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function zf(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function qd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function ZM(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const m=c.times[d]*i;if(!(m<t||m>=n)){h.push(c.times[d]);for(let v=0;v<u;++v)f.push(c.values[d*u+v])}}h.length!==0&&(c.times=gs(h,c.times.constructor),c.values=gs(f,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function KM(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const m=a.times.length-1;let v;if(s<=a.times[0]){const p=u,y=h-u;v=a.values.slice(p,y)}else if(s>=a.times[m]){const p=m*h+u,y=p+h-u;v=a.values.slice(p,y)}else{const p=a.createInterpolant(),y=u,_=h-u;p.evaluate(s),v=p.resultBuffer.slice(y,_)}l==="quaternion"&&new mn().fromArray(v).normalize().conjugate().toArray(v);const g=c.times.length;for(let p=0;p<g;++p){const y=p*d+f;if(l==="quaternion")mn.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{const _=d-f*2;for(let x=0;x<_;++x)c.values[y+x]-=v[x]}}}return r.blendMode=Md,r}class jM{static convertArray(e,t){return gs(e,t)}static isTypedArray(e){return uv(e)}static getKeyframeOrder(e){return Vv(e)}static sortedArray(e,t,n){return zf(e,t,n)}static flattenJSON(e,t,n,i){qd(e,t,n,i)}static subclip(e,t,n,i,s=30){return ZM(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return KM(e,t,n,i)}}class Qo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gv extends Qo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ps,endingEnd:ps}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ms:s=e,a=2*t-n;break;case Ha:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ms:o=e,l=2*n-t;break;case Ha:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,y=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,_=(-1-d)*g+(1.5+d)*v+.5*m,x=d*g-d*v;for(let w=0;w!==a;++w)s[w]=p*o[u+w]+y*o[c+w]+_*o[l+w]+x*o[h+w];return s}}class Yd extends Qo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class Hv extends Qo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class pi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case Oo:t=this.InterpolantFactoryMethodLinear;break;case mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Oo;case this.InterpolantFactoryMethodSmooth:return mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ge("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&uv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const v=t[h+m];if(v!==t[f+m]||v!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Oo;class Gs extends pi{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Uo;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class $d extends pi{constructor(e,t,n,i){super(e,t,n,i)}}$d.prototype.ValueTypeName="color";class Ps extends pi{constructor(e,t,n,i){super(e,t,n,i)}}Ps.prototype.ValueTypeName="number";class Wv extends Qo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)mn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ls extends pi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Wv(this.times,this.values,this.getValueSize(),e)}}Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends pi{constructor(e,t,n){super(e,t,n)}}Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Uo;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends pi{constructor(e,t,n,i){super(e,t,n,i)}}Ds.prototype.ValueTypeName="vector";class Wo{constructor(e="",t=-1,n=[],i=zu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(QM(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(pi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Vv(l);l=zf(l,1,u),c=zf(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ps(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Me("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ge("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,v){if(d.length!==0){const g=[],p=[];qd(d,g,p,m),g.length!==0&&v.push(new h(f,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)d[f[m].morphTargets[v]]=-1;for(const v in d){const g=[],p=[];for(let y=0;y!==f[m].morphTargets.length;++y){const _=f[m];g.push(_.time),p.push(_.morphTarget===v?1:0)}i.push(new Ps(".morphTargetInfluence["+v+"]",g,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Ds,d+".position",f,"pos",i),n(Ls,d+".quaternion",f,"rot",i),n(Ds,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function JM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Ds;case"color":return $d;case"quaternion":return Ls;case"bool":case"boolean":return Gs;case"string":return Hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function QM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=JM(r.type);if(r.times===void 0){const t=[],n=[];qd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Zd{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ws=new Zd;class In{constructor(e){this.manager=e!==void 0?e:Ws,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}In.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi={};class eS extends Error{constructor(e,t){super(e),this.response=t}}class wi extends In{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:n,onError:i});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Qi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let v=0;const g=new ReadableStream({start(p){y();function y(){h.read().then(({done:_,value:x})=>{if(_)p.close();else{v+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let E=0,A=u.length;E<A;E++){const I=u[E];I.onProgress&&I.onProgress(w)}p.enqueue(x),y()}},_=>{p.error(_)})}}});return new Response(g)}else throw new eS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Bi.add(`file:${e}`,c);const u=Qi[e];delete Qi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Qi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Qi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class tS extends In{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new wi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):Ge(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Wo.parse(e[n]);t.push(i)}return t}}class nS extends In{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new Ju,l=new wi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(h){l.load(e[h],function(f){const d=s.parse(f,!0);o[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(a.minFilter=Rt),a.image=o,a.format=d.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let h=0,f=e.length;h<f;++h)u(h);else l.load(e,function(h){const f=s.parse(h,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let m=0;m<d;m++){o[m]={mipmaps:[]};for(let v=0;v<f.mipmapCount;v++)o[m].mipmaps.push(f.mipmaps[m*f.mipmapCount+v]),o[m].format=f.format,o[m].width=f.width,o[m].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=Rt),a.format=f.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}const fo=new WeakMap;class ja extends In{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Bi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=fo.get(o);h===void 0&&(h=[],fo.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=qa("img");function l(){u(),t&&t(this);const h=fo.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}fo.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Bi.remove(`image:${e}`);const f=fo.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(h)}fo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Bi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class iS extends In{constructor(e){super(e)}load(e,t,n,i){const s=new al;s.colorSpace=Zt;const o=new ja(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class rS extends In{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new bi,a=new wi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{u(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:En,o.wrapT=c.wrapT!==void 0?c.wrapT:En,o.magFilter=c.magFilter!==void 0?c.magFilter:Rt,o.minFilter=c.minFilter!==void 0?c.minFilter:Rt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ci),c.mipmapCount===1&&(o.minFilter=Rt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Xv extends In{constructor(e){super(e)}load(e,t,n,i){const s=new Ut,o=new ja(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Wr extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class qv extends Wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ef=new Ve,Em=new L,Am=new L;class Kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),t.position.copy(Em),Am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Am),t.updateMatrixWorld(),ef.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sS extends Kd{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ko*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jd extends Wr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new sS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class oS extends Kd{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}}class Jd extends Wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new oS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Xs extends qu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class aS extends Kd{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qd extends Wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new aS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Yv extends Wr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $v extends Wr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class ep{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Zv extends Wr{constructor(e=new ep,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class lh extends In{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new wi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):Ge(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&Me("MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(i.allowOverride=e.allowOverride),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new ye().setHex(o.value);break;case"v2":i.uniforms[s].value=new ne().fromArray(o.value);break;case"v3":i.uniforms[s].value=new L().fromArray(o.value);break;case"v4":i.uniforms[s].value=new yt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new it().fromArray(o.value);break;case"m4":i.uniforms[s].value=new Ve().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new ne().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return lh.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Nv,SpriteMaterial:Pd,RawShaderMaterial:Hd,ShaderMaterial:fi,PointsMaterial:ju,MeshPhysicalMaterial:di,MeshStandardMaterial:gl,MeshPhongMaterial:Uv,MeshToonMaterial:Ov,MeshNormalMaterial:Fv,MeshLambertMaterial:Bv,MeshDepthMaterial:Wd,MeshDistanceMaterial:Xd,MeshBasicMaterial:Rn,MeshMatcapMaterial:kv,LineDashedMaterial:zv,LineBasicMaterial:_n,Material:jt};return new t[e]}}class Ur{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Kv extends et{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class jv extends In{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new wi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):Ge(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,m){if(t[m]!==void 0)return t[m];const g=d.interleavedBuffers[m],p=s(d,g.buffer),y=bo(g.type,p),_=new ll(y,g.stride);return _.uuid=g.uuid,t[m]=_,_}function s(d,m){if(n[m]!==void 0)return n[m];const g=d.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const o=e.isInstancedBufferGeometry?new Kv:new et,a=e.data.index;if(a!==void 0){const d=bo(a.type,a.array);o.setIndex(new St(d,1))}const l=e.data.attributes;for(const d in l){const m=l[d];let v;if(m.isInterleavedBufferAttribute){const g=i(e.data,m.data);v=new kr(g,m.itemSize,m.offset,m.normalized)}else{const g=bo(m.type,m.array),p=m.isInstancedBufferAttribute?Rs:St;v=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(v.name=m.name),m.usage!==void 0&&v.setUsage(m.usage),o.setAttribute(d,v)}const c=e.data.morphAttributes;if(c)for(const d in c){const m=c[d],v=[];for(let g=0,p=m.length;g<p;g++){const y=m[g];let _;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);_=new kr(x,y.itemSize,y.offset,y.normalized)}else{const x=bo(y.type,y.array);_=new St(x,y.itemSize,y.normalized)}y.name!==void 0&&(_.name=y.name),v.push(_)}o.morphAttributes[d]=v}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,m=h.length;d!==m;++d){const v=h[d];o.addGroup(v.start,v.count,v.materialIndex)}const f=e.data.boundingSphere;return f!==void 0&&(o.boundingSphere=new qt().fromJSON(f)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class lS extends In{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Ur.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new wi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){i!==void 0&&i(h),h("ObjectLoader: Can't parse "+e+".",h.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),Ge("ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Ur.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new wi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let h=!1;for(const f in o)if(o[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Ss().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new cl().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new jv;for(let s=0,o=e.length;s<o;s++){let a;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in Tm?a=Tm[l.type].fromJSON(l,t):Me(`ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new lh;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Wo.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(u)}else return l.data?{data:bo(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Zd(t);s=new ja(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.url;if(Array.isArray(f)){const d=[];for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new bi(p.data,p.width,p.height)))}i[h.uuid]=new Ir(d)}else{const d=a(h.url);i[h.uuid]=new Ir(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:bo(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new ja(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.url;if(Array.isArray(c)){const u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=await s(d);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new bi(m.data,m.width,m.height)))}n[l.uuid]=new Ir(u)}else{const u=await s(l.url);n[l.uuid]=new Ir(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(Me("ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&Me('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&Me("ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let u;Array.isArray(c)?(u=new al,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new bi:u=new Ut,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,cS)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Cm),u.wrapT=n(a.wrap[1],Cm)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Rm)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Rm)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,s){let o;function a(f){return t[f]===void 0&&Me("ObjectLoader: Undefined geometry",f),t[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let m=0,v=f.length;m<v;m++){const g=f[m];n[g]===void 0&&Me("ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[f]===void 0&&Me("ObjectLoader: Undefined material",f),n[f]}}function c(f){return i[f]===void 0&&Me("ObjectLoader: Undefined texture",f),i[f]}let u,h;switch(e.type){case"Scene":o=new Id,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new ye(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new $u(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Yu(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new Kt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Xs(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Yv(e.color,e.intensity);break;case"DirectionalLight":o=new Qd(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new Jd(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new $v(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new jd(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new qv(e.color,e.groundColor,e.intensity);break;case"LightProbe":const f=new ep().fromArray(e.sh);o=new Zv(f,e.intensity);break;case"SkinnedMesh":u=a(e.geometry),h=l(e.material),o=new Ld(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=l(e.material),o=new kt(u,h);break;case"InstancedMesh":u=a(e.geometry),h=l(e.material);const d=e.count,m=e.instanceMatrix,v=e.instanceColor;o=new Dd(u,h,d),o.instanceMatrix=new Rs(new Float32Array(m.array),16),v!==void 0&&(o.instanceColor=new Rs(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":u=a(e.geometry),h=l(e.material),o=new yv(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(g=>{let p=null,y=null;return g.boundingBox!==void 0&&(p=new Xt().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(y=new qt().fromJSON(g.boundingSphere)),{...g,boundingBox:p,boundingSphere:y}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=c(e.matricesTexture.uuid),o._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new qt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new Xt().fromJSON(e.boundingBox));break;case"LOD":o=new xv;break;case"Line":o=new hr(a(e.geometry),l(e.material));break;case"LineLoop":o=new Nd(a(e.geometry),l(e.material));break;case"LineSegments":o=new Ei(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new Ud(a(e.geometry),l(e.material));break;case"Sprite":o=new _v(l(e.material));break;case"Group":o=new Fi;break;case"Bone":o=new Zu;break;default:o=new gt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)o.add(this.parseObject(f[d],t,n,i,s))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const m=f[d];o.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const m=f[d],v=o.getObjectByProperty("uuid",m.object);v!==void 0&&o.addLevel(v,m.distance,m.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?Me("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new gt}})}}const cS={UVMapping:Lu,CubeReflectionMapping:Hi,CubeRefractionMapping:Or,EquirectangularReflectionMapping:Va,EquirectangularRefractionMapping:Ga,CubeUVReflectionMapping:Zo},Cm={RepeatWrapping:Fr,ClampToEdgeWrapping:En,MirroredRepeatWrapping:Lo},Rm={NearestFilter:Bt,NearestMipmapNearestFilter:Du,NearestMipmapLinearFilter:ds,LinearFilter:Rt,LinearMipmapNearestFilter:So,LinearMipmapLinearFilter:ci},tf=new WeakMap;class Jv extends In{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Bi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(tf.has(o)===!0)i&&i(tf.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),tf.set(l,c),Bi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Bi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let ic;class tp{static getContext(){return ic===void 0&&(ic=new(window.AudioContext||window.webkitAudioContext)),ic}static setContext(e){ic=e}}class uS extends In{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new wi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);tp.getContext().decodeAudioData(c,function(h){t(h)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):Ge(l),s.manager.itemError(e)}}}const Im=new Ve,Pm=new Ve,Qr=new Ve;class hS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Kt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Kt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Qr.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Ms*t.fov*.5)/t.zoom;let a,l;Pm.elements[12]=-i,Im.elements[12]=i,a=-o*t.aspect+s,l=o*t.aspect+s,Qr.elements[0]=2*t.near/(l-a),Qr.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Qr),a=-o*t.aspect-s,l=o*t.aspect-s,Qr.elements[0]=2*t.near/(l-a),Qr.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Qr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Pm),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Im)}}class Qv extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class e_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const es=new L,nf=new mn,fS=new L,ts=new L,ns=new L;class dS extends gt{constructor(){super(),this.type="AudioListener",this.context=tp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new e_}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(es,nf,fS),ts.set(0,0,-1).applyQuaternion(nf),ns.set(0,1,0).applyQuaternion(nf),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(es.x,n),t.positionY.linearRampToValueAtTime(es.y,n),t.positionZ.linearRampToValueAtTime(es.z,n),t.forwardX.linearRampToValueAtTime(ts.x,n),t.forwardY.linearRampToValueAtTime(ts.y,n),t.forwardZ.linearRampToValueAtTime(ts.z,n),t.upX.linearRampToValueAtTime(ns.x,n),t.upY.linearRampToValueAtTime(ns.y,n),t.upZ.linearRampToValueAtTime(ns.z,n)}else t.setPosition(es.x,es.y,es.z),t.setOrientation(ts.x,ts.y,ts.z,ns.x,ns.y,ns.z)}}class t_ extends gt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Me("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Me("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Me("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const is=new L,Lm=new mn,pS=new L,rs=new L;class mS extends t_{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(is,Lm,pS),rs.set(0,0,1).applyQuaternion(Lm);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(is.x,n),t.positionY.linearRampToValueAtTime(is.y,n),t.positionZ.linearRampToValueAtTime(is.z,n),t.orientationX.linearRampToValueAtTime(rs.x,n),t.orientationY.linearRampToValueAtTime(rs.y,n),t.orientationZ.linearRampToValueAtTime(rs.z,n)}else t.setPosition(is.x,is.y,is.z),t.setOrientation(rs.x,rs.y,rs.z)}}class gS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class n_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){mn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;mn.multiplyQuaternionsFlat(e,o,e,t,e,n),mn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const np="\\[\\]\\.:\\/",vS=new RegExp("["+np+"]","g"),ip="[^"+np+"]",_S="[^"+np.replace("\\.","")+"]",xS=/((?:WC+[\/:])*)/.source.replace("WC",ip),yS=/(WCOD+)?/.source.replace("WCOD",_S),bS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ip),MS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ip),SS=new RegExp("^"+xS+yS+bS+MS+"$"),wS=["material","materials","bones","map"];class TS{constructor(e,t,n){const i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vS,"")}static parseTrackName(e){const t=SS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);wS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=TS;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ES{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Zn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const f=arguments[u],d=f.uuid;let m=t[d];if(m===void 0){m=l++,t[d]=m,e.push(f);for(let v=0,g=o;v!==g;++v)s[v].push(new vt(f,n[v],i[v]))}else if(m<c){a=e[m];const v=--c,g=e[v];t[g.uuid]=m,e[m]=g,t[d]=v,e[v]=f;for(let p=0,y=o;p!==y;++p){const _=s[p],x=_[v];let w=_[m];_[m]=x,w===void 0&&(w=new vt(f,n[p],i[p])),_[v]=w}}else e[m]!==a&&Ge("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const h=s++,f=e[h];t[f.uuid]=u,e[u]=f,t[c]=h,e[h]=l;for(let d=0,m=i;d!==m;++d){const v=n[d],g=v[h],p=v[u];v[u]=g,v[h]=p}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const f=--s,d=e[f],m=--o,v=e[m];t[d.uuid]=h,e[h]=d,t[v.uuid]=f,e[f]=v,e.pop();for(let g=0,p=i;g!==p;++g){const y=n[g],_=y[f],x=y[m];y[h]=_,y[f]=x,y.pop()}}else{const f=--o,d=e[f];f>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let m=0,v=i;m!==v;++m){const g=n[m];g[h]=g[f],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(h);for(let f=u,d=l.length;f!==d;++f){const m=l[f];h[f]=new vt(m,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class i_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:ps,endingEnd:ps};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=J0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Md:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case zu:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Q0;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===j0){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ms,i.endingEnd=ms):(e?i.endingStart=this.zeroSlopeAtStart?ms:ps:i.endingStart=Ha,t?i.endingEnd=this.zeroSlopeAtEnd?ms:ps:i.endingEnd=Ha)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const AS=new Float32Array(1);class CS extends qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=i[h],d=f.name;let m=u[d];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;m=new n_(vt.create(n,d,v),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Yd(new Float32Array(2),new Float32Array(2),1,AS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Wo.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=zu),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new i_(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Wo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class RS extends Td{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Wu(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class rp{constructor(e){this.value=e}clone(){return new rp(this.value.clone===void 0?this.value:this.value.clone())}}let IS=0;class PS extends qi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:IS++}),this.name="",this.usage=Xa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class LS extends ll{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class DS{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Dm=new Ve;class sp{constructor(e,t,n=0,i=1/0){this.ray=new Gr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Xu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dm),this}intersectObject(e,t=!0,n=[]){return Vf(e,this,n,t),n.sort(Nm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Vf(e[i],this,n,t);return n.sort(Nm),n}}function Nm(r,e){return r.distance-e.distance}function Vf(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Vf(s[o],e,t,!0)}}class NS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=US.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function US(){this._document.hidden===!1&&this.reset()}class OS{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class FS{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class op{constructor(e,t,n,i){op.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const Um=new ne;class BS{constructor(e=new ne(1/0,1/0),t=new ne(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Um.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Um).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Om=new L,rc=new L,po=new L,mo=new L,rf=new L,kS=new L,zS=new L;class r_{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Om.subVectors(e,this.start),rc.subVectors(this.end,this.start);const n=rc.dot(rc);let s=rc.dot(Om)/n;return t&&(s=Ke(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=kS,n=zS){const i=10000000000000001e-32;let s,o;const a=this.start,l=e.start,c=this.end,u=e.end;po.subVectors(c,a),mo.subVectors(u,l),rf.subVectors(a,l);const h=po.dot(po),f=mo.dot(mo),d=mo.dot(rf);if(h<=i&&f<=i)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(h<=i)s=0,o=d/f,o=Ke(o,0,1);else{const m=po.dot(rf);if(f<=i)o=0,s=Ke(-m/h,0,1);else{const v=po.dot(mo),g=h*f-v*v;g!==0?s=Ke((v*d-m*f)/g,0,1):s=0,o=(v*s+d)/f,o<0?(o=0,s=Ke(-m/h,0,1)):o>1&&(o=1,s=Ke((v-m)/h,0,1))}}return t.copy(a).add(po.multiplyScalar(s)),n.copy(l).add(mo.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Fm=new L;class VS extends gt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new et,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Le(i,3));const s=new _n({fog:!1,toneMapped:!1});this.cone=new Ei(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Fm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Fm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Sr=new L,sc=new Ve,sf=new Ve;class GS extends Ei{constructor(e){const t=s_(e),n=new et,i=[],s=[];for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new Le(i,3)),n.setAttribute("color",new Le(s,3));const o=new _n({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new ye(255),l=new ye(65280);this.setColors(a,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");sf.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(sc.multiplyMatrices(sf,a.matrixWorld),Sr.setFromMatrixPosition(sc),i.setXYZ(o,Sr.x,Sr.y,Sr.z),sc.multiplyMatrices(sf,a.parent.matrixWorld),Sr.setFromMatrixPosition(sc),i.setXYZ(o+1,Sr.x,Sr.y,Sr.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,e.r,e.g,e.b),i.setXYZ(s+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function s_(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...s_(r.children[t]));return e}class HS extends kt{constructor(e,t,n){const i=new pl(t,4,2),s=new Rn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const WS=new L,Bm=new ye,km=new ye;class XS extends gt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new jo(t);i.rotateY(Math.PI*.5),this.material=new Rn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new St(o,3)),this.add(new kt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Bm.copy(this.light.color),km.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Bm:km;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(WS.setFromMatrixPosition(this.light.matrixWorld).negate())}}class qS extends Ei{constructor(e=10,t=10,n=4473924,i=8947848){n=new ye(n),i=new ye(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,m=-a;f<=t;f++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const v=f===s?n:i;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const u=new et;u.setAttribute("position",new Le(l,3)),u.setAttribute("color",new Le(c,3));const h=new _n({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class YS extends Ei{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new ye(s),o=new ye(o);const a=[],l=[];if(t>1)for(let h=0;h<t;h++){const f=h/t*(Math.PI*2),d=Math.sin(f)*e,m=Math.cos(f)*e;a.push(0,0,0),a.push(d,0,m);const v=h&1?s:o;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let h=0;h<n;h++){const f=h&1?s:o,d=e-e/n*h;for(let m=0;m<i;m++){let v=m/i*(Math.PI*2),g=Math.sin(v)*d,p=Math.cos(v)*d;a.push(g,0,p),l.push(f.r,f.g,f.b),v=(m+1)/i*(Math.PI*2),g=Math.sin(v)*d,p=Math.cos(v)*d,a.push(g,0,p),l.push(f.r,f.g,f.b)}}const c=new et;c.setAttribute("position",new Le(a,3)),c.setAttribute("color",new Le(l,3));const u=new _n({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const zm=new L,oc=new L,Vm=new L;class $S extends gt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new et;i.setAttribute("position",new Le([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new _n({fog:!1,toneMapped:!1});this.lightPlane=new hr(i,s),this.add(this.lightPlane),i=new et,i.setAttribute("position",new Le([0,0,0,0,0,1],3)),this.targetLine=new hr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),zm.setFromMatrixPosition(this.light.matrixWorld),oc.setFromMatrixPosition(this.light.target.matrixWorld),Vm.subVectors(oc,zm),this.lightPlane.lookAt(oc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(oc),this.targetLine.scale.z=Vm.length()}}const ac=new L,Gt=new qu;class ZS extends Ei{constructor(e){const t=new et,n=new _n({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,v){l(m),l(v)}function l(m){i.push(0,0,0),s.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}t.setAttribute("position",new Le(i,3)),t.setAttribute("color",new Le(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new ye(16755200),u=new ye(16711680),h=new ye(43775),f=new ye(16777215),d=new ye(3355443);this.setColors(c,u,h,f,d)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,o;if(Gt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===Yn)s=-1,o=1;else if(this.camera.coordinateSystem===Fo)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Wt("c",t,e,Gt,0,0,s),Wt("t",t,e,Gt,0,0,o),Wt("n1",t,e,Gt,-n,-i,s),Wt("n2",t,e,Gt,n,-i,s),Wt("n3",t,e,Gt,-n,i,s),Wt("n4",t,e,Gt,n,i,s),Wt("f1",t,e,Gt,-n,-i,o),Wt("f2",t,e,Gt,n,-i,o),Wt("f3",t,e,Gt,-n,i,o),Wt("f4",t,e,Gt,n,i,o),Wt("u1",t,e,Gt,n*.7,i*1.1,s),Wt("u2",t,e,Gt,-n*.7,i*1.1,s),Wt("u3",t,e,Gt,0,i*2,s),Wt("cf1",t,e,Gt,-n,0,o),Wt("cf2",t,e,Gt,n,0,o),Wt("cf3",t,e,Gt,0,-i,o),Wt("cf4",t,e,Gt,0,i,o),Wt("cn1",t,e,Gt,-n,0,s),Wt("cn2",t,e,Gt,n,0,s),Wt("cn3",t,e,Gt,0,-i,s),Wt("cn4",t,e,Gt,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Wt(r,e,t,n,i,s,o){ac.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],ac.x,ac.y,ac.z)}}const lc=new Xt;class KS extends Ei{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new et;s.setIndex(new St(n,1)),s.setAttribute("position",new St(i,3)),super(s,new _n({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&lc.setFromObject(this.object),lc.isEmpty())return;const e=lc.min,t=lc.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class jS extends Ei{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new et;s.setIndex(new St(n,1)),s.setAttribute("position",new Le(i,3)),super(s,new _n({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class JS extends hr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new et;o.setAttribute("position",new Le(s,3)),o.computeBoundingSphere(),super(o,new _n({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new et;l.setAttribute("position",new Le(a,3)),l.computeBoundingSphere(),this.add(new kt(l,new Rn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Gm=new L;let cc,of;class QS extends gt{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",cc===void 0&&(cc=new et,cc.setAttribute("position",new Le([0,0,0,0,1,0],3)),of=new fl(.5,1,5,1),of.translate(0,-.5,0)),this.position.copy(t),this.line=new hr(cc,new _n({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new kt(of,new Rn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Gm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Gm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ew extends Ei{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new et;i.setAttribute("position",new Le(t,3)),i.setAttribute("color",new Le(n,3));const s=new _n({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new ye,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class tw{constructor(){this.type="ShapePath",this.color=new ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new mu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const y=[];for(let _=0,x=p.length;_<x;_++){const w=p[_],E=new Ss;E.curves=w.curves,y.push(E)}return y}function n(p,y){const _=y.length;let x=!1;for(let w=_-1,E=0;E<_;w=E++){let A=y[w],I=y[E],M=I.x-A.x,T=I.y-A.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(A=y[E],M=-M,I=y[w],T=-T),p.y<A.y||p.y>I.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{const D=T*(p.x-A.x)-M*(p.y-A.y);if(D===0)return!0;if(D<0)continue;x=!x}}else{if(p.y!==A.y)continue;if(I.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=I.x)return!0}}return x}const i=xi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Ss,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],m=0,v;f[m]=void 0,d[m]=[];for(let p=0,y=s.length;p<y;p++)a=s[p],v=a.getPoints(),o=i(v),o=e?!o:o,o?(!u&&f[m]&&m++,f[m]={s:new Ss,p:v},f[m].s.curves=a.curves,u&&m++,d[m]=[]):d[m].push({h:a,p:v[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,y=0;for(let _=0,x=f.length;_<x;_++)h[_]=[];for(let _=0,x=f.length;_<x;_++){const w=d[_];for(let E=0;E<w.length;E++){const A=w[E];let I=!0;for(let M=0;M<f.length;M++)n(A.p,f[M].p)&&(_!==M&&y++,I?(I=!1,h[M].push(A)):p=!0);I&&h[_].push(A)}}y>0&&p===!1&&(d=h)}let g;for(let p=0,y=f.length;p<y;p++){l=f[p].s,c.push(l),g=d[p];for(let _=0,x=g.length;_<x;_++)l.holes.push(g[_].h)}return c}}class nw extends qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Me("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function iw(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function rw(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function sw(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Gf(r,e,t,n){const i=ow(n);switch(t){case yd:return r*e;case Fu:return r*e/i.components*i.byteLength;case ol:return r*e/i.components*i.byteLength;case Cs:return r*e*2/i.components*i.byteLength;case Bu:return r*e*2/i.components*i.byteLength;case bd:return r*e*3/i.components*i.byteLength;case Cn:return r*e*4/i.components*i.byteLength;case ku:return r*e*4/i.components*i.byteLength;case Ra:case Ia:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pa:case La:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nc:case Oc:return Math.max(r,16)*Math.max(e,8)/4;case Dc:case Uc:return Math.max(r,8)*Math.max(e,8)/2;case Fc:case Bc:case zc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kc:case Gc:case Hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case eu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case tu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case nu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case iu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ru:case su:case ou:return Math.ceil(r/4)*Math.ceil(e/4)*16;case au:case lu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cu:case uu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ow(r){switch(r){case Fn:case gd:return{byteLength:1,components:1};case Do:case vd:case Wi:return{byteLength:2,components:1};case Uu:case Ou:return{byteLength:2,components:4};case hi:case Nu:case An:return{byteLength:4,components:1};case _d:case xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}class aw{static contain(e,t){return iw(e,t)}static cover(e,t){return rw(e,t)}static fill(e){return sw(e)}static getByteLength(e,t,n,i){return Gf(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);function o_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function lw(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],v=h[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const v=h[d];r.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var cw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_w=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ww=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kw="gl_FragColor = linearToOutputTexel( gl_FragColor );",zw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ww=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$w=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,n1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,B1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:cw,alphahash_pars_fragment:uw,alphamap_fragment:hw,alphamap_pars_fragment:fw,alphatest_fragment:dw,alphatest_pars_fragment:pw,aomap_fragment:mw,aomap_pars_fragment:gw,batching_pars_vertex:vw,batching_vertex:_w,begin_vertex:xw,beginnormal_vertex:yw,bsdfs:bw,iridescence_fragment:Mw,bumpmap_pars_fragment:Sw,clipping_planes_fragment:ww,clipping_planes_pars_fragment:Tw,clipping_planes_pars_vertex:Ew,clipping_planes_vertex:Aw,color_fragment:Cw,color_pars_fragment:Rw,color_pars_vertex:Iw,color_vertex:Pw,common:Lw,cube_uv_reflection_fragment:Dw,defaultnormal_vertex:Nw,displacementmap_pars_vertex:Uw,displacementmap_vertex:Ow,emissivemap_fragment:Fw,emissivemap_pars_fragment:Bw,colorspace_fragment:kw,colorspace_pars_fragment:zw,envmap_fragment:Vw,envmap_common_pars_fragment:Gw,envmap_pars_fragment:Hw,envmap_pars_vertex:Ww,envmap_physical_pars_fragment:t1,envmap_vertex:Xw,fog_vertex:qw,fog_pars_vertex:Yw,fog_fragment:$w,fog_pars_fragment:Zw,gradientmap_pars_fragment:Kw,lightmap_pars_fragment:jw,lights_lambert_fragment:Jw,lights_lambert_pars_fragment:Qw,lights_pars_begin:e1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:r1,lights_phong_pars_fragment:s1,lights_physical_fragment:o1,lights_physical_pars_fragment:a1,lights_fragment_begin:l1,lights_fragment_maps:c1,lights_fragment_end:u1,logdepthbuf_fragment:h1,logdepthbuf_pars_fragment:f1,logdepthbuf_pars_vertex:d1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:v1,map_particle_pars_fragment:_1,metalnessmap_fragment:x1,metalnessmap_pars_fragment:y1,morphinstance_vertex:b1,morphcolor_vertex:M1,morphnormal_vertex:S1,morphtarget_pars_vertex:w1,morphtarget_vertex:T1,normal_fragment_begin:E1,normal_fragment_maps:A1,normal_pars_fragment:C1,normal_pars_vertex:R1,normal_vertex:I1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:D1,clearcoat_pars_fragment:N1,iridescence_pars_fragment:U1,opaque_fragment:O1,packing:F1,premultiplied_alpha_fragment:B1,project_vertex:k1,dithering_fragment:z1,dithering_pars_fragment:V1,roughnessmap_fragment:G1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:X1,shadowmap_vertex:q1,shadowmask_pars_fragment:Y1,skinbase_vertex:$1,skinning_pars_vertex:Z1,skinning_vertex:K1,skinnormal_vertex:j1,specularmap_fragment:J1,specularmap_pars_fragment:Q1,tonemapping_fragment:eT,tonemapping_pars_fragment:tT,transmission_fragment:nT,transmission_pars_fragment:iT,uv_pars_fragment:rT,uv_pars_vertex:sT,uv_vertex:oT,worldpos_vertex:aT,background_vert:lT,background_frag:cT,backgroundCube_vert:uT,backgroundCube_frag:hT,cube_vert:fT,cube_frag:dT,depth_vert:pT,depth_frag:mT,distance_vert:gT,distance_frag:vT,equirect_vert:_T,equirect_frag:xT,linedashed_vert:yT,linedashed_frag:bT,meshbasic_vert:MT,meshbasic_frag:ST,meshlambert_vert:wT,meshlambert_frag:TT,meshmatcap_vert:ET,meshmatcap_frag:AT,meshnormal_vert:CT,meshnormal_frag:RT,meshphong_vert:IT,meshphong_frag:PT,meshphysical_vert:LT,meshphysical_frag:DT,meshtoon_vert:NT,meshtoon_frag:UT,points_vert:OT,points_frag:FT,shadow_vert:BT,shadow_frag:kT,sprite_vert:zT,sprite_frag:VT},xe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ai={basic:{uniforms:bn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:bn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:bn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:bn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:bn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:bn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:bn([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:bn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:bn([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:bn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:bn([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:bn([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:bn([xe.lights,xe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ai.physical={uniforms:bn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const uc={r:0,b:0,g:0},ss=new jn,GT=new Ve;function HT(r,e,t,n,i,s,o){const a=new ye(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1;const w=m(_);w===null?p(a,l):w&&w.isColor&&(p(w,1),x=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(_,x){const w=m(x);w&&(w.isCubeTexture||w.mapping===Zo)?(u===void 0&&(u=new kt(new Vs(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:zo(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ss.copy(x.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(GT.makeRotationFromEuler(ss)),u.material.toneMapped=pt.getTransfer(w.colorSpace)!==wt,(h!==w||f!==w.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=r.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new kt(new Jo(2,2),new fi({name:"BackgroundMaterial",uniforms:zo(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pt.getTransfer(w.colorSpace)!==wt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,x){_.getRGB(uc,mv(r)),n.buffers.color.setClear(uc.r,uc.g,uc.b,x,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:v,addToRenderList:g,dispose:y}}function WT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(T,D,O,k,F){let V=!1;const H=h(k,O,D);s!==H&&(s=H,c(s.object)),V=d(T,k,O,F),V&&m(T,k,O,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(T,D,O,k),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function u(T){return r.deleteVertexArray(T)}function h(T,D,O){const k=O.wireframe===!0;let F=n[T.id];F===void 0&&(F={},n[T.id]=F);let V=F[D.id];V===void 0&&(V={},F[D.id]=V);let H=V[k];return H===void 0&&(H=f(l()),V[k]=H),H}function f(T){const D=[],O=[],k=[];for(let F=0;F<t;F++)D[F]=0,O[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:k,object:T,attributes:{},index:null}}function d(T,D,O,k){const F=s.attributes,V=D.attributes;let H=0;const U=O.getAttributes();for(const Z in U)if(U[Z].location>=0){const ae=F[Z];let ue=V[Z];if(ue===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor)),ae===void 0||ae.attribute!==ue||ue&&ae.data!==ue.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function m(T,D,O,k){const F={},V=D.attributes;let H=0;const U=O.getAttributes();for(const Z in U)if(U[Z].location>=0){let ae=V[Z];ae===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor));const ue={};ue.attribute=ae,ae&&ae.data&&(ue.data=ae.data),F[Z]=ue,H++}s.attributes=F,s.attributesNum=H,s.index=k}function v(){const T=s.newAttributes;for(let D=0,O=T.length;D<O;D++)T[D]=0}function g(T){p(T,0)}function p(T,D){const O=s.newAttributes,k=s.enabledAttributes,F=s.attributeDivisors;O[T]=1,k[T]===0&&(r.enableVertexAttribArray(T),k[T]=1),F[T]!==D&&(r.vertexAttribDivisor(T,D),F[T]=D)}function y(){const T=s.newAttributes,D=s.enabledAttributes;for(let O=0,k=D.length;O<k;O++)D[O]!==T[O]&&(r.disableVertexAttribArray(O),D[O]=0)}function _(T,D,O,k,F,V,H){H===!0?r.vertexAttribIPointer(T,D,O,F,V):r.vertexAttribPointer(T,D,O,k,F,V)}function x(T,D,O,k){v();const F=k.attributes,V=O.getAttributes(),H=D.defaultAttributeValues;for(const U in V){const Z=V[U];if(Z.location>=0){let ce=F[U];if(ce===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(ce=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(ce=T.instanceColor)),ce!==void 0){const ae=ce.normalized,ue=ce.itemSize,Be=e.get(ce);if(Be===void 0)continue;const Ue=Be.buffer,at=Be.type,ct=Be.bytesPerElement,J=at===r.INT||at===r.UNSIGNED_INT||ce.gpuType===Nu;if(ce.isInterleavedBufferAttribute){const re=ce.data,Se=re.stride,ke=ce.offset;if(re.isInstancedInterleavedBuffer){for(let be=0;be<Z.locationSize;be++)p(Z.location+be,re.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let be=0;be<Z.locationSize;be++)g(Z.location+be);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let be=0;be<Z.locationSize;be++)_(Z.location+be,ue/Z.locationSize,at,ae,Se*ct,(ke+ue/Z.locationSize*be)*ct,J)}else{if(ce.isInstancedBufferAttribute){for(let re=0;re<Z.locationSize;re++)p(Z.location+re,ce.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let re=0;re<Z.locationSize;re++)g(Z.location+re);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let re=0;re<Z.locationSize;re++)_(Z.location+re,ue/Z.locationSize,at,ae,ue*ct,ue/Z.locationSize*re*ct,J)}}else if(H!==void 0){const ae=H[U];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(Z.location,ae);break;case 3:r.vertexAttrib3fv(Z.location,ae);break;case 4:r.vertexAttrib4fv(Z.location,ae);break;default:r.vertexAttrib1fv(Z.location,ae)}}}}y()}function w(){I();for(const T in n){const D=n[T];for(const O in D){const k=D[O];for(const F in k)u(k[F].object),delete k[F];delete D[O]}delete n[T]}}function E(T){if(n[T.id]===void 0)return;const D=n[T.id];for(const O in D){const k=D[O];for(const F in k)u(k[F].object),delete k[F];delete D[O]}delete n[T.id]}function A(T){for(const D in n){const O=n[D];if(O[T.id]===void 0)continue;const k=O[T.id];for(const F in k)u(k[F].object),delete k[F];delete O[T.id]}}function I(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function XT(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v]*f[v];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qT(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Cn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Fn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==An&&!I)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Me("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,maxSamples:w,samples:E}}function YT(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Tr,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const y=s?0:n,_=y*4;let x=p.clippingState||null;l.value=x,x=u(m,f,_,d);for(let w=0;w!==_;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=d;_!==v;++_,x+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function $T(r){let e=new WeakMap;function t(o,a){return a===Va?o.mapping=Hi:a===Ga&&(o.mapping=Or),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Va||a===Ga)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rd(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Pr=4,Hm=[.125,.215,.35,.446,.526,.582],hs=20,ZT=256,ma=new Xs,Wm=new ye;let af=null,lf=0,cf=0,uf=!1;const KT=new L;class Hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=KT}=s;af=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(af,lf,cf),this._renderer.xr.enabled=uf,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),af=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Wi,format:Cn,colorSpace:gn,depthBuffer:!1},i=Xm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jT(s)),this._blurMaterial=QT(s,e,t),this._ggxMaterial=JT(s,e,t)}return i}_compileMaterial(e){const t=new kt(new et,e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,i,s){const l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Wm),h.toneMapping=yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new Vs,new Rn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Wm),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const w=this._cubeSize;go(i,x*w,_>2?w:0,w,w),h.setRenderTarget(i),p&&h.render(v,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hi||e.mapping===Or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qm());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;go(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-Pr?n-m+Pr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,go(s,g,p,3*v,2*v),i.setRenderTarget(s),i.render(a,ma),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,go(e,g,p,3*v,2*v),i.setRenderTarget(e),i.render(a,ma)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*hs-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):hs;g>hs&&Me(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);const p=[];let y=0;for(let A=0;A<hs;++A){const I=A/v,M=Math.exp(-I*I/2);p.push(M),A===0?y+=M:A<g&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;const x=this._sizeLods[i],w=3*x*(i>_-Pr?i-_+Pr:0),E=4*(this._cubeSize-x);go(t,w,E,3*x,2*x),l.setRenderTarget(t),l.render(h,ma)}}function jT(r){const e=[],t=[],n=[];let i=r;const s=r-Pr+1+Hm.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Pr?l=Hm[o-r+Pr-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*d),_=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,I=E>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(M,v*m*E),_.set(f,g*m*E);const T=[E,E,E,E,E,E];x.set(T,p*m*E)}const w=new et;w.setAttribute("position",new St(y,v)),w.setAttribute("uv",new St(_,g)),w.setAttribute("faceIndex",new St(x,p)),n.push(new kt(w,null)),i>Pr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Xm(r,e,t){const n=new Kn(r,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function JT(r,e,t){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ch(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function QT(r,e,t){const n=new Float32Array(hs),i=new L(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function qm(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ym(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eE(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Va||l===Ga,u=l===Hi||l===Or;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Hf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Hf(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Bo("WebGLRenderer: "+n+" extension not supported."),i}}}function nE(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,m=h.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let _=0,x=y.length;_<x;_+=3){const w=y[_+0],E=y[_+1],A=y[_+2];f.push(w,E,E,A,A,w)}}else if(m!==void 0){const y=m.array;v=m.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const w=_+0,E=_+1,A=_+2;f.push(w,E,E,A,A,w)}}else return;const g=new(cv(f)?Ad:Ed)(f,1);g.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function iE(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(f,d,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*v[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function rE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Ge("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sE(r,e,t){const n=new WeakMap,i=new yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let T=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var d=T;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let w=a.attributes.position.count*x,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*E*4*h),I=new Hu(A,w,E,h);I.type=An,I.needsUpdate=!0;const M=x*4;for(let D=0;D<h;D++){const O=p[D],k=y[D],F=_[D],V=w*E*4*D;for(let H=0;H<O.count;H++){const U=H*M;m===!0&&(i.fromBufferAttribute(O,H),A[V+U+0]=i.x,A[V+U+1]=i.y,A[V+U+2]=i.z,A[V+U+3]=0),v===!0&&(i.fromBufferAttribute(k,H),A[V+U+4]=i.x,A[V+U+5]=i.y,A[V+U+6]=i.z,A[V+U+7]=0),g===!0&&(i.fromBufferAttribute(F,H),A[V+U+8]=i.x,A[V+U+9]=i.y,A[V+U+10]=i.z,A[V+U+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:I,size:new ne(w,E)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function oE(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const aE={[ud]:"LINEAR_TONE_MAPPING",[hd]:"REINHARD_TONE_MAPPING",[fd]:"CINEON_TONE_MAPPING",[dd]:"ACES_FILMIC_TONE_MAPPING",[za]:"AGX_TONE_MAPPING",[md]:"NEUTRAL_TONE_MAPPING",[pd]:"CUSTOM_TONE_MAPPING"};function lE(r,e,t,n,i){const s=new Kn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new Kn(e,t,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),a=new et;a.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Le([0,2,0,0,2,0],2));const l=new Hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new kt(a,l),u=new Xs(-1,1,1,-1,0,1);let h=null,f=null,d=!1,m,v=null,g=[],p=!1;this.setSize=function(y,_){s.setSize(y,_),o.setSize(y,_);for(let x=0;x<g.length;x++){const w=g[x];w.setSize&&w.setSize(y,_)}},this.setEffects=function(y){g=y,p=g.length>0&&g[0].isRenderPass===!0;const _=s.width,x=s.height;for(let w=0;w<g.length;w++){const E=g[w];E.setSize&&E.setSize(_,x)}},this.begin=function(y,_){if(d||y.toneMapping===yi&&g.length===0)return!1;if(v=_,_!==null){const x=_.width,w=_.height;(s.width!==x||s.height!==w)&&this.setSize(x,w)}return p===!1&&y.setRenderTarget(s),m=y.toneMapping,y.toneMapping=yi,!0},this.hasRenderPass=function(){return p},this.end=function(y,_){y.toneMapping=m,d=!0;let x=s,w=o;for(let E=0;E<g.length;E++){const A=g[E];if(A.enabled!==!1&&(A.render(y,w,x,_),A.needsSwap!==!1)){const I=x;x=w,w=I}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},pt.getTransfer(h)===wt&&(l.defines.SRGB_TRANSFER="");const E=aE[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(v),y.render(c,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const a_=new Ut,Wf=new Vo(1,1),l_=new Hu,c_=new Wu,u_=new al,$m=[],Zm=[],Km=new Float32Array(16),jm=new Float32Array(9),Jm=new Float32Array(4);function ea(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=$m[i];if(s===void 0&&(s=new Float32Array(i),$m[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function uh(r,e){let t=Zm[e];t===void 0&&(t=new Int32Array(e),Zm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function uE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function hE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function fE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function dE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Jm.set(n),r.uniformMatrix2fv(this.addr,!1,Jm),Qt(t,n)}}function pE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;jm.set(n),r.uniformMatrix3fv(this.addr,!1,jm),Qt(t,n)}}function mE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Km.set(n),r.uniformMatrix4fv(this.addr,!1,Km),Qt(t,n)}}function gE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function _E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function xE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function yE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function bE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function ME(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function SE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function wE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Wf.compareFunction=t.isReversedDepthBuffer()?Gu:Vu,s=Wf):s=a_,t.setTexture2D(e||s,i)}function TE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||c_,i)}function EE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||u_,i)}function AE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||l_,i)}function CE(r){switch(r){case 5126:return cE;case 35664:return uE;case 35665:return hE;case 35666:return fE;case 35674:return dE;case 35675:return pE;case 35676:return mE;case 5124:case 35670:return gE;case 35667:case 35671:return vE;case 35668:case 35672:return _E;case 35669:case 35673:return xE;case 5125:return yE;case 36294:return bE;case 36295:return ME;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return wE;case 35679:case 36299:case 36307:return TE;case 35680:case 36300:case 36308:case 36293:return EE;case 36289:case 36303:case 36311:case 36292:return AE}}function RE(r,e){r.uniform1fv(this.addr,e)}function IE(r,e){const t=ea(e,this.size,2);r.uniform2fv(this.addr,t)}function PE(r,e){const t=ea(e,this.size,3);r.uniform3fv(this.addr,t)}function LE(r,e){const t=ea(e,this.size,4);r.uniform4fv(this.addr,t)}function DE(r,e){const t=ea(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function NE(r,e){const t=ea(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function UE(r,e){const t=ea(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function OE(r,e){r.uniform1iv(this.addr,e)}function FE(r,e){r.uniform2iv(this.addr,e)}function BE(r,e){r.uniform3iv(this.addr,e)}function kE(r,e){r.uniform4iv(this.addr,e)}function zE(r,e){r.uniform1uiv(this.addr,e)}function VE(r,e){r.uniform2uiv(this.addr,e)}function GE(r,e){r.uniform3uiv(this.addr,e)}function HE(r,e){r.uniform4uiv(this.addr,e)}function WE(r,e,t){const n=this.cache,i=e.length,s=uh(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Wf:o=a_;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function XE(r,e,t){const n=this.cache,i=e.length,s=uh(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||c_,s[o])}function qE(r,e,t){const n=this.cache,i=e.length,s=uh(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||u_,s[o])}function YE(r,e,t){const n=this.cache,i=e.length,s=uh(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||l_,s[o])}function $E(r){switch(r){case 5126:return RE;case 35664:return IE;case 35665:return PE;case 35666:return LE;case 35674:return DE;case 35675:return NE;case 35676:return UE;case 5124:case 35670:return OE;case 35667:case 35671:return FE;case 35668:case 35672:return BE;case 35669:case 35673:return kE;case 5125:return zE;case 36294:return VE;case 36295:return GE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return XE;case 35680:case 36300:case 36308:case 36293:return qE;case 36289:case 36303:case 36311:case 36292:return YE}}class ZE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=CE(t.type)}}class KE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$E(t.type)}}class jE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const hf=/(\w+)(\])?(\[|\.)?/g;function Qm(r,e){r.seq.push(e),r.map[e.id]=e}function JE(r,e,t){const n=r.name,i=n.length;for(hf.lastIndex=0;;){const s=hf.exec(n),o=hf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Qm(t,c===void 0?new ZE(a,r,e):new KE(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new jE(a),Qm(t,h)),t=h}}}class vc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);JE(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function eg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const QE=37297;let eA=0;function tA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const tg=new it;function nA(r){pt._getMatrix(tg,pt.workingColorSpace,r);const e=`mat3( ${tg.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(r)){case Wa:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ng(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+tA(r.getShaderSource(e),a)}else return s}function iA(r,e){const t=nA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const rA={[ud]:"Linear",[hd]:"Reinhard",[fd]:"Cineon",[dd]:"ACESFilmic",[za]:"AgX",[md]:"Neutral",[pd]:"Custom"};function sA(r,e){const t=rA[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hc=new L;function oA(){pt.getLuminanceCoefficients(hc);const r=hc.x.toFixed(4),e=hc.y.toFixed(4),t=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function lA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Sa(r){return r!==""}function ig(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(r){return r.replace(uA,fA)}const hA=new Map;function fA(r,e){let t=Ze[e];if(t===void 0){const n=hA.get(e);if(n!==void 0)t=Ze[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xf(t)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(r){return r.replace(dA,pA)}function pA(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function og(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mA={[Aa]:"SHADOWMAP_TYPE_PCF",[yo]:"SHADOWMAP_TYPE_VSM"};function gA(r){return mA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vA={[Hi]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[Zo]:"ENVMAP_TYPE_CUBE_UV"};function _A(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":vA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const xA={[Or]:"ENVMAP_MODE_REFRACTION"};function yA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bA={[sl]:"ENVMAP_BLENDING_MULTIPLY",[$0]:"ENVMAP_BLENDING_MIX",[Z0]:"ENVMAP_BLENDING_ADD"};function MA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":bA[r.combine]||"ENVMAP_BLENDING_NONE"}function SA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function wA(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gA(t),c=_A(t),u=yA(t),h=MA(t),f=SA(t),d=aA(t),m=lA(s),v=i.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sa).join(`
`),p.length>0&&(p+=`
`)):(g=[og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),p=[og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==yi?sA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,iA("linearToOutputTexel",t.outputColorSpace),oA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),o=Xf(o),o=ig(o,t),o=rg(o,t),a=Xf(a),a=ig(a,t),a=rg(a,t),o=sg(o),a=sg(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Of?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+g+o,x=y+p+a,w=eg(i,i.VERTEX_SHADER,_),E=eg(i,i.FRAGMENT_SHADER,x);i.attachShader(v,w),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(D){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(v)||"",k=i.getShaderInfoLog(w)||"",F=i.getShaderInfoLog(E)||"",V=O.trim(),H=k.trim(),U=F.trim();let Z=!0,ce=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,w,E);else{const ae=ng(i,w,"vertex"),ue=ng(i,E,"fragment");Ge("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+ae+`
`+ue)}else V!==""?Me("WebGLProgram: Program Info Log:",V):(H===""||U==="")&&(ce=!1);ce&&(D.diagnostics={runnable:Z,programLog:V,vertexShader:{log:H,prefix:g},fragmentShader:{log:U,prefix:p}})}i.deleteShader(w),i.deleteShader(E),I=new vc(i,v),M=cA(i,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(v,QE)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=E,this}let TA=0;class EA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new AA(e),t.set(e,n)),n}}class AA{constructor(e){this.id=TA++,this.code=e,this.usedTimes=0}}function CA(r,e,t,n,i,s,o){const a=new Xu,l=new EA,c=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,T,D,O,k){const F=O.fog,V=k.geometry,H=M.isMeshStandardMaterial?O.environment:null,U=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),Z=U&&U.mapping===Zo?U.image.height:null,ce=m[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&Me("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=ae!==void 0?ae.length:0;let Be=0;V.morphAttributes.position!==void 0&&(Be=1),V.morphAttributes.normal!==void 0&&(Be=2),V.morphAttributes.color!==void 0&&(Be=3);let Ue,at,ct,J;if(ce){const Tt=ai[ce];Ue=Tt.vertexShader,at=Tt.fragmentShader}else Ue=M.vertexShader,at=M.fragmentShader,l.update(M),ct=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);const re=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),ke=k.isInstancedMesh===!0,be=k.isBatchedMesh===!0,Je=!!M.map,ot=!!M.matcap,qe=!!U,ee=!!M.aoMap,te=!!M.lightMap,Q=!!M.bumpMap,me=!!M.normalMap,P=!!M.displacementMap,Ae=!!M.emissiveMap,se=!!M.metalnessMap,$=!!M.roughnessMap,j=M.anisotropy>0,C=M.clearcoat>0,b=M.dispersion>0,N=M.iridescence>0,X=M.sheen>0,q=M.transmission>0,G=j&&!!M.anisotropyMap,pe=C&&!!M.clearcoatMap,he=C&&!!M.clearcoatNormalMap,Pe=C&&!!M.clearcoatRoughnessMap,Fe=N&&!!M.iridescenceMap,oe=N&&!!M.iridescenceThicknessMap,ge=X&&!!M.sheenColorMap,Ne=X&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,ve=!!M.specularColorMap,nt=!!M.specularIntensityMap,B=q&&!!M.transmissionMap,we=q&&!!M.thicknessMap,fe=!!M.gradientMap,Ee=!!M.alphaMap,le=M.alphaTest>0,ie=!!M.alphaHash,_e=!!M.extensions;let tt=yi;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(tt=r.toneMapping);const Lt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:Ue,fragmentShader:at,defines:M.defines,customVertexShaderID:ct,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:be,batchingColor:be&&k._colorsTexture!==null,instancing:ke,instancingColor:ke&&k.instanceColor!==null,instancingMorph:ke&&k.morphTexture!==null,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:gn,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:ot,envMap:qe,envMapMode:qe&&U.mapping,envMapCubeUVHeight:Z,aoMap:ee,lightMap:te,bumpMap:Q,normalMap:me,displacementMap:P,emissiveMap:Ae,normalMapObjectSpace:me&&M.normalMapType===nv,normalMapTangentSpace:me&&M.normalMapType===Vr,metalnessMap:se,roughnessMap:$,anisotropy:j,anisotropyMap:G,clearcoat:C,clearcoatMap:pe,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,dispersion:b,iridescence:N,iridescenceMap:Fe,iridescenceThicknessMap:oe,sheen:X,sheenColorMap:ge,sheenRoughnessMap:Ne,specularMap:Ce,specularColorMap:ve,specularIntensityMap:nt,transmission:q,transmissionMap:B,thicknessMap:we,gradientMap:fe,opaque:M.transparent===!1&&M.blending===bs&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:le,alphaHash:ie,combine:M.combine,mapUv:Je&&v(M.map.channel),aoMapUv:ee&&v(M.aoMap.channel),lightMapUv:te&&v(M.lightMap.channel),bumpMapUv:Q&&v(M.bumpMap.channel),normalMapUv:me&&v(M.normalMap.channel),displacementMapUv:P&&v(M.displacementMap.channel),emissiveMapUv:Ae&&v(M.emissiveMap.channel),metalnessMapUv:se&&v(M.metalnessMap.channel),roughnessMapUv:$&&v(M.roughnessMap.channel),anisotropyMapUv:G&&v(M.anisotropyMap.channel),clearcoatMapUv:pe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(M.sheenRoughnessMap.channel),specularMapUv:Ce&&v(M.specularMap.channel),specularColorMapUv:ve&&v(M.specularColorMap.channel),specularIntensityMapUv:nt&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:we&&v(M.thicknessMap.channel),alphaMapUv:Ee&&v(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(me||j),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Je||Ee),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:tt,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===wt,decodeVideoTextureEmissive:Ae&&M.emissiveMap.isVideoTexture===!0&&pt.getTransfer(M.emissiveMap.colorSpace)===wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wn,flipSided:M.side===pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)T.push(D),T.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(y(T,M),_(T,M),T.push(r.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const T=m[M.type];let D;if(T){const O=ai[T];D=Cd.clone(O.uniforms)}else D=M.uniforms;return D}function w(M,T){let D=h.get(T);return D!==void 0?++D.usedTimes:(D=new wA(r,T,M,s),u.push(D),h.set(T,D)),D}function E(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),h.delete(M.cacheKey),M.destroy()}}function A(M){l.remove(M)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:I}}function RA(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function IA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ag(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function lg(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,m,v,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function a(h,f,d,m,v,g){const p=o(h,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,m,v,g){const p=o(h,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||IA),n.length>1&&n.sort(f||ag),i.length>1&&i.sort(f||ag)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function PA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new lg,r.set(n,[o])):i>=s.length?(o=new lg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function LA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ye};break;case"SpotLight":t={position:new L,direction:new L,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function DA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let NA=0;function UA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function OA(r){const e=new LA,t=DA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,s=new Ve,o=new Ve;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,y=0,_=0,x=0,w=0,E=0,A=0;c.sort(UA);for(let M=0,T=c.length;M<T;M++){const D=c[M],O=D.color,k=D.intensity,F=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Cs?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=O.r*k,h+=O.g*k,f+=O.b*k;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],k);A++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const U=D.shadow,Z=t.get(D);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=D.shadow.matrix,y++}n.directional[d]=H,d++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(O).multiplyScalar(k),H.distance=F,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[v]=H;const U=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,U.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[v]=U.matrix,D.castShadow){const Z=t.get(D);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=V,x++}v++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(O).multiplyScalar(k),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=H,g++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const U=D.shadow,Z=t.get(D);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,Z.shadowCameraNear=U.camera.near,Z.shadowCameraFar=U.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=D.shadow.matrix,_++}n.point[m]=H,m++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(k),H.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[p]=H,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==_||I.numSpotShadows!==x||I.numSpotMaps!==w||I.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,I.directionalLength=d,I.pointLength=m,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=_,I.numSpotShadows=x,I.numSpotMaps=w,I.numLightProbes=A,n.version=NA++)}function l(c,u){let h=0,f=0,d=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const _=c[p];if(_.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),h++}else if(_.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function cg(r){const e=new OA(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function FA(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new cg(r),e.set(i,[a])):s>=o.length?(a=new cg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const BA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zA=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],VA=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ug=new Ve,ga=new L,ff=new L;function GA(r,e,t){let n=new Ko;const i=new ne,s=new ne,o=new yt,a=new Wd,l=new Xd,c={},u=t.maxTextureSize,h={[Gi]:pn,[pn]:Gi,[wn]:wn},f=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:BA,fragmentShader:kA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new et;m.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let p=this.type;this.render=function(E,A,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;E.type===Ca&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=Aa);const M=r.getRenderTarget(),T=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),O=r.state;O.setBlending(zi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==this.type;k&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(V=>V.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,V=E.length;F<V;F++){const H=E[F],U=H.shadow;if(U===void 0){Me("WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const Z=U.getFrameExtents();if(i.multiply(Z),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,U.mapSize.y=s.y)),U.map===null||k===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===yo){if(H.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Kn(i.x,i.y,{format:Cs,type:Wi,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),U.map.texture.name=H.name+".shadowMap",U.map.depthTexture=new Vo(i.x,i.y,An),U.map.depthTexture.name=H.name+".shadowMapDepth",U.map.depthTexture.format=Xi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Bt,U.map.depthTexture.magFilter=Bt}else{H.isPointLight?(U.map=new Rd(i.x),U.map.depthTexture=new Mv(i.x,hi)):(U.map=new Kn(i.x,i.y),U.map.depthTexture=new Vo(i.x,i.y,hi)),U.map.depthTexture.name=H.name+".shadowMap",U.map.depthTexture.format=Xi;const ae=r.state.buffers.depth.getReversed();this.type===Aa?(U.map.depthTexture.compareFunction=ae?Gu:Vu,U.map.depthTexture.minFilter=Rt,U.map.depthTexture.magFilter=Rt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Bt,U.map.depthTexture.magFilter=Bt)}U.camera.updateProjectionMatrix()}const ce=U.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<ce;ae++){if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,ae),r.clear();else{ae===0&&(r.setRenderTarget(U.map),r.clear());const ue=U.getViewport(ae);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),O.viewport(o)}if(H.isPointLight){const ue=U.camera,Be=U.matrix,Ue=H.distance||ue.far;Ue!==ue.far&&(ue.far=Ue,ue.updateProjectionMatrix()),ga.setFromMatrixPosition(H.matrixWorld),ue.position.copy(ga),ff.copy(ue.position),ff.add(zA[ae]),ue.up.copy(VA[ae]),ue.lookAt(ff),ue.updateMatrixWorld(),Be.makeTranslation(-ga.x,-ga.y,-ga.z),ug.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),U._frustum.setFromProjectionMatrix(ug,ue.coordinateSystem,ue.reversedDepth)}else U.updateMatrices(H);n=U.getFrustum(),x(A,I,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===yo&&y(U,I),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,T,D)};function y(E,A){const I=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Kn(i.x,i.y,{format:Cs,type:Wi})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,I,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,I,d,v,null)}function _(E,A,I,M){let T=null;const D=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)T=D;else if(T=I.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=T.uuid,k=A.uuid;let F=c[O];F===void 0&&(F={},c[O]=F);let V=F[k];V===void 0&&(V=T.clone(),F[k]=V,A.addEventListener("dispose",w)),T=V}if(T.visible=A.visible,T.wireframe=A.wireframe,M===yo?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:h[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const O=r.properties.get(T);O.light=I}return T}function x(E,A,I,M,T){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===yo)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const k=e.update(E),F=E.material;if(Array.isArray(F)){const V=k.groups;for(let H=0,U=V.length;H<U;H++){const Z=V[H],ce=F[Z.materialIndex];if(ce&&ce.visible){const ae=_(E,ce,M,T);E.onBeforeShadow(r,E,A,I,k,ae,Z),r.renderBufferDirect(I,null,k,ae,E,Z),E.onAfterShadow(r,E,A,I,k,ae,Z)}}}else if(F.visible){const V=_(E,F,M,T);E.onBeforeShadow(r,E,A,I,k,V,null),r.renderBufferDirect(I,null,k,V,E,null),E.onAfterShadow(r,E,A,I,k,V,null)}}const O=E.children;for(let k=0,F=O.length;k<F;k++)x(O[k],A,I,M,T)}function w(E){E.target.removeEventListener("dispose",w);for(const I in c){const M=c[I],T=E.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const HA={[Ec]:Ac,[Cc]:Pc,[Rc]:Lc,[As]:Ic,[Ac]:Ec,[Pc]:Cc,[Lc]:Rc,[Ic]:As};function WA(r,e){function t(){let B=!1;const we=new yt;let fe=null;const Ee=new yt(0,0,0,0);return{setMask:function(le){fe!==le&&!B&&(r.colorMask(le,le,le,le),fe=le)},setLocked:function(le){B=le},setClear:function(le,ie,_e,tt,Lt){Lt===!0&&(le*=tt,ie*=tt,_e*=tt),we.set(le,ie,_e,tt),Ee.equals(we)===!1&&(r.clearColor(le,ie,_e,tt),Ee.copy(we))},reset:function(){B=!1,fe=null,Ee.set(-1,0,0,0)}}}function n(){let B=!1,we=!1,fe=null,Ee=null,le=null;return{setReversed:function(ie){if(we!==ie){const _e=e.get("EXT_clip_control");ie?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),we=ie;const tt=le;le=null,this.setClear(tt)}},getReversed:function(){return we},setTest:function(ie){ie?re(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(ie){fe!==ie&&!B&&(r.depthMask(ie),fe=ie)},setFunc:function(ie){if(we&&(ie=HA[ie]),Ee!==ie){switch(ie){case Ec:r.depthFunc(r.NEVER);break;case Ac:r.depthFunc(r.ALWAYS);break;case Cc:r.depthFunc(r.LESS);break;case As:r.depthFunc(r.LEQUAL);break;case Rc:r.depthFunc(r.EQUAL);break;case Ic:r.depthFunc(r.GEQUAL);break;case Pc:r.depthFunc(r.GREATER);break;case Lc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ee=ie}},setLocked:function(ie){B=ie},setClear:function(ie){le!==ie&&(we&&(ie=1-ie),r.clearDepth(ie),le=ie)},reset:function(){B=!1,fe=null,Ee=null,le=null,we=!1}}}function i(){let B=!1,we=null,fe=null,Ee=null,le=null,ie=null,_e=null,tt=null,Lt=null;return{setTest:function(Tt){B||(Tt?re(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Tt){we!==Tt&&!B&&(r.stencilMask(Tt),we=Tt)},setFunc:function(Tt,Ci,Yi){(fe!==Tt||Ee!==Ci||le!==Yi)&&(r.stencilFunc(Tt,Ci,Yi),fe=Tt,Ee=Ci,le=Yi)},setOp:function(Tt,Ci,Yi){(ie!==Tt||_e!==Ci||tt!==Yi)&&(r.stencilOp(Tt,Ci,Yi),ie=Tt,_e=Ci,tt=Yi)},setLocked:function(Tt){B=Tt},setClear:function(Tt){Lt!==Tt&&(r.clearStencil(Tt),Lt=Tt)},reset:function(){B=!1,we=null,fe=null,Ee=null,le=null,ie=null,_e=null,tt=null,Lt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,y=null,_=null,x=null,w=null,E=null,A=new ye(0,0,0),I=0,M=!1,T=null,D=null,O=null,k=null,F=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,U=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=U>=1):Z.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=U>=2);let ce=null,ae={};const ue=r.getParameter(r.SCISSOR_BOX),Be=r.getParameter(r.VIEWPORT),Ue=new yt().fromArray(ue),at=new yt().fromArray(Be);function ct(B,we,fe,Ee){const le=new Uint8Array(4),ie=r.createTexture();r.bindTexture(B,ie),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let _e=0;_e<fe;_e++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(we+_e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ie}const J={};J[r.TEXTURE_2D]=ct(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=ct(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=ct(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=ct(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(As),Q(!1),me(If),re(r.CULL_FACE),ee(zi);function re(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function Se(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function ke(B,we){return h[B]!==we?(r.bindFramebuffer(B,we),h[B]=we,B===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=we),B===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=we),!0):!1}function be(B,we){let fe=d,Ee=!1;if(B){fe=f.get(we),fe===void 0&&(fe=[],f.set(we,fe));const le=B.textures;if(fe.length!==le.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,_e=le.length;ie<_e;ie++)fe[ie]=r.COLOR_ATTACHMENT0+ie;fe.length=le.length,Ee=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,Ee=!0);Ee&&r.drawBuffers(fe)}function Je(B){return m!==B?(r.useProgram(B),m=B,!0):!1}const ot={[Ar]:r.FUNC_ADD,[P0]:r.FUNC_SUBTRACT,[L0]:r.FUNC_REVERSE_SUBTRACT};ot[D0]=r.MIN,ot[N0]=r.MAX;const qe={[U0]:r.ZERO,[O0]:r.ONE,[F0]:r.SRC_COLOR,[wc]:r.SRC_ALPHA,[H0]:r.SRC_ALPHA_SATURATE,[V0]:r.DST_COLOR,[k0]:r.DST_ALPHA,[B0]:r.ONE_MINUS_SRC_COLOR,[Tc]:r.ONE_MINUS_SRC_ALPHA,[G0]:r.ONE_MINUS_DST_COLOR,[z0]:r.ONE_MINUS_DST_ALPHA,[W0]:r.CONSTANT_COLOR,[X0]:r.ONE_MINUS_CONSTANT_COLOR,[q0]:r.CONSTANT_ALPHA,[Y0]:r.ONE_MINUS_CONSTANT_ALPHA};function ee(B,we,fe,Ee,le,ie,_e,tt,Lt,Tt){if(B===zi){v===!0&&(Se(r.BLEND),v=!1);return}if(v===!1&&(re(r.BLEND),v=!0),B!==I0){if(B!==g||Tt!==M){if((p!==Ar||x!==Ar)&&(r.blendEquation(r.FUNC_ADD),p=Ar,x=Ar),Tt)switch(B){case bs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pf:r.blendFunc(r.ONE,r.ONE);break;case Lf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Df:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ge("WebGLState: Invalid blending: ",B);break}else switch(B){case bs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Lf:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Df:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",B);break}y=null,_=null,w=null,E=null,A.set(0,0,0),I=0,g=B,M=Tt}return}le=le||we,ie=ie||fe,_e=_e||Ee,(we!==p||le!==x)&&(r.blendEquationSeparate(ot[we],ot[le]),p=we,x=le),(fe!==y||Ee!==_||ie!==w||_e!==E)&&(r.blendFuncSeparate(qe[fe],qe[Ee],qe[ie],qe[_e]),y=fe,_=Ee,w=ie,E=_e),(tt.equals(A)===!1||Lt!==I)&&(r.blendColor(tt.r,tt.g,tt.b,Lt),A.copy(tt),I=Lt),g=B,M=!1}function te(B,we){B.side===wn?Se(r.CULL_FACE):re(r.CULL_FACE);let fe=B.side===pn;we&&(fe=!fe),Q(fe),B.blending===bs&&B.transparent===!1?ee(zi):ee(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Ee=B.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Q(B){T!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),T=B)}function me(B){B!==C0?(re(r.CULL_FACE),B!==D&&(B===If?r.cullFace(r.BACK):B===R0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),D=B}function P(B){B!==O&&(H&&r.lineWidth(B),O=B)}function Ae(B,we,fe){B?(re(r.POLYGON_OFFSET_FILL),(k!==we||F!==fe)&&(r.polygonOffset(we,fe),k=we,F=fe)):Se(r.POLYGON_OFFSET_FILL)}function se(B){B?re(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function $(B){B===void 0&&(B=r.TEXTURE0+V-1),ce!==B&&(r.activeTexture(B),ce=B)}function j(B,we,fe){fe===void 0&&(ce===null?fe=r.TEXTURE0+V-1:fe=ce);let Ee=ae[fe];Ee===void 0&&(Ee={type:void 0,texture:void 0},ae[fe]=Ee),(Ee.type!==B||Ee.texture!==we)&&(ce!==fe&&(r.activeTexture(fe),ce=fe),r.bindTexture(B,we||J[B]),Ee.type=B,Ee.texture=we)}function C(){const B=ae[ce];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(B){Ge("WebGLState:",B)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(B){Ge("WebGLState:",B)}}function X(){try{r.texSubImage2D(...arguments)}catch(B){Ge("WebGLState:",B)}}function q(){try{r.texSubImage3D(...arguments)}catch(B){Ge("WebGLState:",B)}}function G(){try{r.compressedTexSubImage2D(...arguments)}catch(B){Ge("WebGLState:",B)}}function pe(){try{r.compressedTexSubImage3D(...arguments)}catch(B){Ge("WebGLState:",B)}}function he(){try{r.texStorage2D(...arguments)}catch(B){Ge("WebGLState:",B)}}function Pe(){try{r.texStorage3D(...arguments)}catch(B){Ge("WebGLState:",B)}}function Fe(){try{r.texImage2D(...arguments)}catch(B){Ge("WebGLState:",B)}}function oe(){try{r.texImage3D(...arguments)}catch(B){Ge("WebGLState:",B)}}function ge(B){Ue.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Ue.copy(B))}function Ne(B){at.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),at.copy(B))}function Ce(B,we){let fe=c.get(we);fe===void 0&&(fe=new WeakMap,c.set(we,fe));let Ee=fe.get(B);Ee===void 0&&(Ee=r.getUniformBlockIndex(we,B.name),fe.set(B,Ee))}function ve(B,we){const Ee=c.get(we).get(B);l.get(we)!==Ee&&(r.uniformBlockBinding(we,Ee,B.__bindingPointIndex),l.set(we,Ee))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ce=null,ae={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,y=null,_=null,x=null,w=null,E=null,A=new ye(0,0,0),I=0,M=!1,T=null,D=null,O=null,k=null,F=null,Ue.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Se,bindFramebuffer:ke,drawBuffers:be,useProgram:Je,setBlending:ee,setMaterial:te,setFlipSided:Q,setCullFace:me,setLineWidth:P,setPolygonOffset:Ae,setScissorTest:se,activeTexture:$,bindTexture:j,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:N,texImage2D:Fe,texImage3D:oe,updateUBOMapping:Ce,uniformBlockBinding:ve,texStorage2D:he,texStorage3D:Pe,texSubImage2D:X,texSubImage3D:q,compressedTexSubImage2D:G,compressedTexSubImage3D:pe,scissor:ge,viewport:Ne,reset:nt}}function XA(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,b){return d?new OffscreenCanvas(C,b):qa("canvas")}function v(C,b,N){let X=1;const q=j(C);if((q.width>N||q.height>N)&&(X=N/Math.max(q.width,q.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const G=Math.floor(X*q.width),pe=Math.floor(X*q.height);h===void 0&&(h=m(G,pe));const he=b?m(G,pe):h;return he.width=G,he.height=pe,he.getContext("2d").drawImage(C,0,0,G,pe),Me("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+G+"x"+pe+")."),he}else return"data"in C&&Me("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(C,b,N,X,q=!1){if(C!==null){if(r[C]!==void 0)return r[C];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let G=b;if(b===r.RED&&(N===r.FLOAT&&(G=r.R32F),N===r.HALF_FLOAT&&(G=r.R16F),N===r.UNSIGNED_BYTE&&(G=r.R8)),b===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(G=r.R8UI),N===r.UNSIGNED_SHORT&&(G=r.R16UI),N===r.UNSIGNED_INT&&(G=r.R32UI),N===r.BYTE&&(G=r.R8I),N===r.SHORT&&(G=r.R16I),N===r.INT&&(G=r.R32I)),b===r.RG&&(N===r.FLOAT&&(G=r.RG32F),N===r.HALF_FLOAT&&(G=r.RG16F),N===r.UNSIGNED_BYTE&&(G=r.RG8)),b===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(G=r.RG8UI),N===r.UNSIGNED_SHORT&&(G=r.RG16UI),N===r.UNSIGNED_INT&&(G=r.RG32UI),N===r.BYTE&&(G=r.RG8I),N===r.SHORT&&(G=r.RG16I),N===r.INT&&(G=r.RG32I)),b===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(G=r.RGB8UI),N===r.UNSIGNED_SHORT&&(G=r.RGB16UI),N===r.UNSIGNED_INT&&(G=r.RGB32UI),N===r.BYTE&&(G=r.RGB8I),N===r.SHORT&&(G=r.RGB16I),N===r.INT&&(G=r.RGB32I)),b===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),N===r.UNSIGNED_INT&&(G=r.RGBA32UI),N===r.BYTE&&(G=r.RGBA8I),N===r.SHORT&&(G=r.RGBA16I),N===r.INT&&(G=r.RGBA32I)),b===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(G=r.R11F_G11F_B10F)),b===r.RGBA){const pe=q?Wa:pt.getTransfer(X);N===r.FLOAT&&(G=r.RGBA32F),N===r.HALF_FLOAT&&(G=r.RGBA16F),N===r.UNSIGNED_BYTE&&(G=pe===wt?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(C,b){let N;return C?b===null||b===hi||b===No?N=r.DEPTH24_STENCIL8:b===An?N=r.DEPTH32F_STENCIL8:b===Do&&(N=r.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===hi||b===No?N=r.DEPTH_COMPONENT24:b===An?N=r.DEPTH_COMPONENT32F:b===Do&&(N=r.DEPTH_COMPONENT16),N}function w(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==Rt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function E(C){const b=C.target;b.removeEventListener("dispose",E),I(b),b.isVideoTexture&&u.delete(b)}function A(C){const b=C.target;b.removeEventListener("dispose",A),T(b)}function I(C){const b=n.get(C);if(b.__webglInit===void 0)return;const N=C.source,X=f.get(N);if(X){const q=X[b.__cacheKey];q.usedTimes--,q.usedTimes===0&&M(C),Object.keys(X).length===0&&f.delete(N)}n.remove(C)}function M(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const N=C.source,X=f.get(N);delete X[b.__cacheKey],o.memory.textures--}function T(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let q=0;q<b.__webglFramebuffer[X].length;q++)r.deleteFramebuffer(b.__webglFramebuffer[X][q]);else r.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)r.deleteFramebuffer(b.__webglFramebuffer[X]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const N=C.textures;for(let X=0,q=N.length;X<q;X++){const G=n.get(N[X]);G.__webglTexture&&(r.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(N[X])}n.remove(C)}let D=0;function O(){D=0}function k(){const C=D;return C>=i.maxTextures&&Me("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function F(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function V(C,b){const N=n.get(C);if(C.isVideoTexture&&se(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const X=C.image;if(X===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{J(N,C,b);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+b)}function H(C,b){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){J(N,C,b);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+b)}function U(C,b){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){J(N,C,b);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+b)}function Z(C,b){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){re(N,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+b)}const ce={[Fr]:r.REPEAT,[En]:r.CLAMP_TO_EDGE,[Lo]:r.MIRRORED_REPEAT},ae={[Bt]:r.NEAREST,[Du]:r.NEAREST_MIPMAP_NEAREST,[ds]:r.NEAREST_MIPMAP_LINEAR,[Rt]:r.LINEAR,[So]:r.LINEAR_MIPMAP_NEAREST,[ci]:r.LINEAR_MIPMAP_LINEAR},ue={[iv]:r.NEVER,[lv]:r.ALWAYS,[rv]:r.LESS,[Vu]:r.LEQUAL,[sv]:r.EQUAL,[Gu]:r.GEQUAL,[ov]:r.GREATER,[av]:r.NOTEQUAL};function Be(C,b){if(b.type===An&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Rt||b.magFilter===So||b.magFilter===ds||b.magFilter===ci||b.minFilter===Rt||b.minFilter===So||b.minFilter===ds||b.minFilter===ci)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ce[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ce[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ce[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ae[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ae[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Bt||b.minFilter!==ds&&b.minFilter!==ci||b.type===An&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ue(C,b){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",E));const X=b.source;let q=f.get(X);q===void 0&&(q={},f.set(X,q));const G=F(b);if(G!==C.__cacheKey){q[G]===void 0&&(q[G]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,N=!0),q[G].usedTimes++;const pe=q[C.__cacheKey];pe!==void 0&&(q[C.__cacheKey].usedTimes--,pe.usedTimes===0&&M(b)),C.__cacheKey=G,C.__webglTexture=q[G].texture}return N}function at(C,b,N){return Math.floor(Math.floor(C/N)/b)}function ct(C,b,N,X){const G=C.updateRanges;if(G.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,N,X,b.data);else{G.sort((oe,ge)=>oe.start-ge.start);let pe=0;for(let oe=1;oe<G.length;oe++){const ge=G[pe],Ne=G[oe],Ce=ge.start+ge.count,ve=at(Ne.start,b.width,4),nt=at(ge.start,b.width,4);Ne.start<=Ce+1&&ve===nt&&at(Ne.start+Ne.count-1,b.width,4)===ve?ge.count=Math.max(ge.count,Ne.start+Ne.count-ge.start):(++pe,G[pe]=Ne)}G.length=pe+1;const he=r.getParameter(r.UNPACK_ROW_LENGTH),Pe=r.getParameter(r.UNPACK_SKIP_PIXELS),Fe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let oe=0,ge=G.length;oe<ge;oe++){const Ne=G[oe],Ce=Math.floor(Ne.start/4),ve=Math.ceil(Ne.count/4),nt=Ce%b.width,B=Math.floor(Ce/b.width),we=ve,fe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),r.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,nt,B,we,fe,N,X,b.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,he),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Fe)}}function J(C,b,N){let X=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=r.TEXTURE_3D);const q=Ue(C,b),G=b.source;t.bindTexture(X,C.__webglTexture,r.TEXTURE0+N);const pe=n.get(G);if(G.version!==pe.__version||q===!0){t.activeTexture(r.TEXTURE0+N);const he=pt.getPrimaries(pt.workingColorSpace),Pe=b.colorSpace===nr?null:pt.getPrimaries(b.colorSpace),Fe=b.colorSpace===nr||he===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let oe=v(b.image,!1,i.maxTextureSize);oe=$(b,oe);const ge=s.convert(b.format,b.colorSpace),Ne=s.convert(b.type);let Ce=_(b.internalFormat,ge,Ne,b.colorSpace,b.isVideoTexture);Be(X,b);let ve;const nt=b.mipmaps,B=b.isVideoTexture!==!0,we=pe.__version===void 0||q===!0,fe=G.dataReady,Ee=w(b,oe);if(b.isDepthTexture)Ce=x(b.format===Rr,b.type),we&&(B?t.texStorage2D(r.TEXTURE_2D,1,Ce,oe.width,oe.height):t.texImage2D(r.TEXTURE_2D,0,Ce,oe.width,oe.height,0,ge,Ne,null));else if(b.isDataTexture)if(nt.length>0){B&&we&&t.texStorage2D(r.TEXTURE_2D,Ee,Ce,nt[0].width,nt[0].height);for(let le=0,ie=nt.length;le<ie;le++)ve=nt[le],B?fe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ve.width,ve.height,ge,Ne,ve.data):t.texImage2D(r.TEXTURE_2D,le,Ce,ve.width,ve.height,0,ge,Ne,ve.data);b.generateMipmaps=!1}else B?(we&&t.texStorage2D(r.TEXTURE_2D,Ee,Ce,oe.width,oe.height),fe&&ct(b,oe,ge,Ne)):t.texImage2D(r.TEXTURE_2D,0,Ce,oe.width,oe.height,0,ge,Ne,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){B&&we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Ce,nt[0].width,nt[0].height,oe.depth);for(let le=0,ie=nt.length;le<ie;le++)if(ve=nt[le],b.format!==Cn)if(ge!==null)if(B){if(fe)if(b.layerUpdates.size>0){const _e=Gf(ve.width,ve.height,b.format,b.type);for(const tt of b.layerUpdates){const Lt=ve.data.subarray(tt*_e/ve.data.BYTES_PER_ELEMENT,(tt+1)*_e/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,tt,ve.width,ve.height,1,ge,Lt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,oe.depth,ge,ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,Ce,ve.width,ve.height,oe.depth,0,ve.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?fe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,oe.depth,ge,Ne,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,Ce,ve.width,ve.height,oe.depth,0,ge,Ne,ve.data)}else{B&&we&&t.texStorage2D(r.TEXTURE_2D,Ee,Ce,nt[0].width,nt[0].height);for(let le=0,ie=nt.length;le<ie;le++)ve=nt[le],b.format!==Cn?ge!==null?B?fe&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,le,Ce,ve.width,ve.height,0,ve.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?fe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ve.width,ve.height,ge,Ne,ve.data):t.texImage2D(r.TEXTURE_2D,le,Ce,ve.width,ve.height,0,ge,Ne,ve.data)}else if(b.isDataArrayTexture)if(B){if(we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Ce,oe.width,oe.height,oe.depth),fe)if(b.layerUpdates.size>0){const le=Gf(oe.width,oe.height,b.format,b.type);for(const ie of b.layerUpdates){const _e=oe.data.subarray(ie*le/oe.data.BYTES_PER_ELEMENT,(ie+1)*le/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ie,oe.width,oe.height,1,ge,Ne,_e)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ne,oe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,oe.width,oe.height,oe.depth,0,ge,Ne,oe.data);else if(b.isData3DTexture)B?(we&&t.texStorage3D(r.TEXTURE_3D,Ee,Ce,oe.width,oe.height,oe.depth),fe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ne,oe.data)):t.texImage3D(r.TEXTURE_3D,0,Ce,oe.width,oe.height,oe.depth,0,ge,Ne,oe.data);else if(b.isFramebufferTexture){if(we)if(B)t.texStorage2D(r.TEXTURE_2D,Ee,Ce,oe.width,oe.height);else{let le=oe.width,ie=oe.height;for(let _e=0;_e<Ee;_e++)t.texImage2D(r.TEXTURE_2D,_e,Ce,le,ie,0,ge,Ne,null),le>>=1,ie>>=1}}else if(nt.length>0){if(B&&we){const le=j(nt[0]);t.texStorage2D(r.TEXTURE_2D,Ee,Ce,le.width,le.height)}for(let le=0,ie=nt.length;le<ie;le++)ve=nt[le],B?fe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ge,Ne,ve):t.texImage2D(r.TEXTURE_2D,le,Ce,ge,Ne,ve);b.generateMipmaps=!1}else if(B){if(we){const le=j(oe);t.texStorage2D(r.TEXTURE_2D,Ee,Ce,le.width,le.height)}fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge,Ne,oe)}else t.texImage2D(r.TEXTURE_2D,0,Ce,ge,Ne,oe);g(b)&&p(X),pe.__version=G.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function re(C,b,N){if(b.image.length!==6)return;const X=Ue(C,b),q=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);const G=n.get(q);if(q.version!==G.__version||X===!0){t.activeTexture(r.TEXTURE0+N);const pe=pt.getPrimaries(pt.workingColorSpace),he=b.colorSpace===nr?null:pt.getPrimaries(b.colorSpace),Pe=b.colorSpace===nr||pe===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Fe=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!Fe&&!oe?ge[ie]=v(b.image[ie],!0,i.maxCubemapSize):ge[ie]=oe?b.image[ie].image:b.image[ie],ge[ie]=$(b,ge[ie]);const Ne=ge[0],Ce=s.convert(b.format,b.colorSpace),ve=s.convert(b.type),nt=_(b.internalFormat,Ce,ve,b.colorSpace),B=b.isVideoTexture!==!0,we=G.__version===void 0||X===!0,fe=q.dataReady;let Ee=w(b,Ne);Be(r.TEXTURE_CUBE_MAP,b);let le;if(Fe){B&&we&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,nt,Ne.width,Ne.height);for(let ie=0;ie<6;ie++){le=ge[ie].mipmaps;for(let _e=0;_e<le.length;_e++){const tt=le[_e];b.format!==Cn?Ce!==null?B?fe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,0,0,tt.width,tt.height,Ce,tt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,nt,tt.width,tt.height,0,tt.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,0,0,tt.width,tt.height,Ce,ve,tt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,nt,tt.width,tt.height,0,Ce,ve,tt.data)}}}else{if(le=b.mipmaps,B&&we){le.length>0&&Ee++;const ie=j(ge[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,nt,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(oe){B?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,Ce,ve,ge[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,nt,ge[ie].width,ge[ie].height,0,Ce,ve,ge[ie].data);for(let _e=0;_e<le.length;_e++){const Lt=le[_e].image[ie].image;B?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,0,0,Lt.width,Lt.height,Ce,ve,Lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,nt,Lt.width,Lt.height,0,Ce,ve,Lt.data)}}else{B?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ce,ve,ge[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,nt,Ce,ve,ge[ie]);for(let _e=0;_e<le.length;_e++){const tt=le[_e];B?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,0,0,Ce,ve,tt.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,nt,Ce,ve,tt.image[ie])}}}g(b)&&p(r.TEXTURE_CUBE_MAP),G.__version=q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Se(C,b,N,X,q,G){const pe=s.convert(N.format,N.colorSpace),he=s.convert(N.type),Pe=_(N.internalFormat,pe,he,N.colorSpace),Fe=n.get(b),oe=n.get(N);if(oe.__renderTarget=b,!Fe.__hasExternalTextures){const ge=Math.max(1,b.width>>G),Ne=Math.max(1,b.height>>G);q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?t.texImage3D(q,G,Pe,ge,Ne,b.depth,0,pe,he,null):t.texImage2D(q,G,Pe,ge,Ne,0,pe,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ae(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,q,oe.__webglTexture,0,P(b)):(q===r.TEXTURE_2D||q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,q,oe.__webglTexture,G),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(C,b,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const X=b.depthTexture,q=X&&X.isDepthTexture?X.type:null,G=x(b.stencilBuffer,q),pe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ae(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(b),G,b.width,b.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(b),G,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,G,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,C)}else{const X=b.textures;for(let q=0;q<X.length;q++){const G=X[q],pe=s.convert(G.format,G.colorSpace),he=s.convert(G.type),Pe=_(G.internalFormat,pe,he,G.colorSpace);Ae(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(b),Pe,b.width,b.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(b),Pe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(C,b,N){const X=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(b.depthTexture);if(q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X){if(q.__webglInit===void 0&&(q.__webglInit=!0,b.depthTexture.addEventListener("dispose",E)),q.__webglTexture===void 0){q.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Be(r.TEXTURE_CUBE_MAP,b.depthTexture);const Fe=s.convert(b.depthTexture.format),oe=s.convert(b.depthTexture.type);let ge;b.depthTexture.format===Xi?ge=r.DEPTH_COMPONENT24:b.depthTexture.format===Rr&&(ge=r.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ge,b.width,b.height,0,Fe,oe,null)}}else V(b.depthTexture,0);const G=q.__webglTexture,pe=P(b),he=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,Pe=b.depthTexture.format===Rr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Xi)Ae(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pe,he,G,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,Pe,he,G,0);else if(b.depthTexture.format===Rr)Ae(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pe,he,G,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,Pe,he,G,0);else throw new Error("Unknown depthTexture format")}function Je(C){const b=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){const q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",q)};X.addEventListener("dispose",q),b.__depthDisposeCallback=q}b.__boundDepthTexture=X}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(N)for(let X=0;X<6;X++)be(b.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?be(b.__webglFramebuffer[0],C,0):be(b.__webglFramebuffer,C,0)}else if(N){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=r.createRenderbuffer(),ke(b.__webglDepthbuffer[X],C,!1);else{const q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=b.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,G),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,G)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ke(b.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,G),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,G)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(C,b,N){const X=n.get(C);b!==void 0&&Se(X.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Je(C)}function qe(C){const b=C.texture,N=n.get(C),X=n.get(b);C.addEventListener("dispose",A);const q=C.textures,G=C.isWebGLCubeRenderTarget===!0,pe=q.length>1;if(pe||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=b.version,o.memory.textures++),G){N.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer[he]=[];for(let Pe=0;Pe<b.mipmaps.length;Pe++)N.__webglFramebuffer[he][Pe]=r.createFramebuffer()}else N.__webglFramebuffer[he]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)N.__webglFramebuffer[he]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(pe)for(let he=0,Pe=q.length;he<Pe;he++){const Fe=n.get(q[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Ae(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<q.length;he++){const Pe=q[he];N.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[he]);const Fe=s.convert(Pe.format,Pe.colorSpace),oe=s.convert(Pe.type),ge=_(Pe.internalFormat,Fe,oe,Pe.colorSpace,C.isXRRenderTarget===!0),Ne=P(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,ge,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,N.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(G){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Be(r.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pe=0;Pe<b.mipmaps.length;Pe++)Se(N.__webglFramebuffer[he][Pe],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe);else Se(N.__webglFramebuffer[he],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(b)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let he=0,Pe=q.length;he<Pe;he++){const Fe=q[he],oe=n.get(Fe);let ge=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ge,oe.__webglTexture),Be(ge,Fe),Se(N.__webglFramebuffer,C,Fe,r.COLOR_ATTACHMENT0+he,ge,0),g(Fe)&&p(ge)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,X.__webglTexture),Be(he,b),b.mipmaps&&b.mipmaps.length>0)for(let Pe=0;Pe<b.mipmaps.length;Pe++)Se(N.__webglFramebuffer[Pe],C,b,r.COLOR_ATTACHMENT0,he,Pe);else Se(N.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,he,0);g(b)&&p(he),t.unbindTexture()}C.depthBuffer&&Je(C)}function ee(C){const b=C.textures;for(let N=0,X=b.length;N<X;N++){const q=b[N];if(g(q)){const G=y(C),pe=n.get(q).__webglTexture;t.bindTexture(G,pe),p(G),t.unbindTexture()}}}const te=[],Q=[];function me(C){if(C.samples>0){if(Ae(C)===!1){const b=C.textures,N=C.width,X=C.height;let q=r.COLOR_BUFFER_BIT;const G=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=n.get(C),he=b.length>1;if(he)for(let Fe=0;Fe<b.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const Pe=C.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Fe=0;Fe<b.length;Fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pe.__webglColorRenderbuffer[Fe]);const oe=n.get(b[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,oe,0)}r.blitFramebuffer(0,0,N,X,0,0,N,X,q,r.NEAREST),l===!0&&(te.length=0,Q.length=0,te.push(r.COLOR_ATTACHMENT0+Fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(te.push(G),Q.push(G),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Q)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let Fe=0;Fe<b.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,pe.__webglColorRenderbuffer[Fe]);const oe=n.get(b[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function P(C){return Math.min(i.maxSamples,C.samples)}function Ae(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function se(C){const b=o.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function $(C,b){const N=C.colorSpace,X=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==gn&&N!==nr&&(pt.getTransfer(N)===wt?(X!==Cn||q!==Fn)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",N)),b}function j(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=U,this.setTextureCube=Z,this.rebindTextures=ot,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function h_(r,e){function t(n,i=nr){let s;const o=pt.getTransfer(i);if(n===Fn)return r.UNSIGNED_BYTE;if(n===Uu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ou)return r.UNSIGNED_SHORT_5_5_5_1;if(n===_d)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===xd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===gd)return r.BYTE;if(n===vd)return r.SHORT;if(n===Do)return r.UNSIGNED_SHORT;if(n===Nu)return r.INT;if(n===hi)return r.UNSIGNED_INT;if(n===An)return r.FLOAT;if(n===Wi)return r.HALF_FLOAT;if(n===yd)return r.ALPHA;if(n===bd)return r.RGB;if(n===Cn)return r.RGBA;if(n===Xi)return r.DEPTH_COMPONENT;if(n===Rr)return r.DEPTH_STENCIL;if(n===Fu)return r.RED;if(n===ol)return r.RED_INTEGER;if(n===Cs)return r.RG;if(n===Bu)return r.RG_INTEGER;if(n===ku)return r.RGBA_INTEGER;if(n===Ra||n===Ia||n===Pa||n===La)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dc||n===Nc||n===Uc||n===Oc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fc||n===Bc||n===kc||n===zc||n===Vc||n===Gc||n===Hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fc||n===Bc)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===zc)return s.COMPRESSED_R11_EAC;if(n===Vc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Gc)return s.COMPRESSED_RG11_EAC;if(n===Hc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Zc||n===Kc||n===jc||n===Jc||n===Qc||n===eu||n===tu||n===nu||n===iu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===iu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ru||n===su||n===ou)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ru)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ou)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===au||n===lu||n===cu||n===uu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===au)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===No?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const qA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Od(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fi({vertexShader:qA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new Jo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZA extends qi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new $A,p={},y=t.getContextAttributes();let _=null,x=null;const w=[],E=[],A=new ne;let I=null;const M=new Kt;M.viewport=new yt;const T=new Kt;T.viewport=new yt;const D=[M,T],O=new Qv;let k=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=w[J];return re===void 0&&(re=new gc,w[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=w[J];return re===void 0&&(re=new gc,w[J]=re),re.getGripSpace()},this.getHand=function(J){let re=w[J];return re===void 0&&(re=new gc,w[J]=re),re.getHandSpace()};function V(J){const re=E.indexOf(J.inputSource);if(re===-1)return;const Se=w[re];Se!==void 0&&(Se.update(J.inputSource,J.frame,c||o),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",U);for(let J=0;J<w.length;J++){const re=E[J];re!==null&&(E[J]=null,w[J].disconnect(re))}k=null,F=null,g.reset();for(const J in p)delete p[J];e.setRenderTarget(_),d=null,f=null,h=null,i=null,x=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",H),i.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ke=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=y.stencil?Rr:Xi,ke=y.stencil?No:hi);const Je={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Je),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Kn(f.textureWidth,f.textureHeight,{format:Cn,type:Fn,depthTexture:new Vo(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Kn(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(J){for(let re=0;re<J.removed.length;re++){const Se=J.removed[re],ke=E.indexOf(Se);ke>=0&&(E[ke]=null,w[ke].disconnect(Se))}for(let re=0;re<J.added.length;re++){const Se=J.added[re];let ke=E.indexOf(Se);if(ke===-1){for(let Je=0;Je<w.length;Je++)if(Je>=E.length){E.push(Se),ke=Je;break}else if(E[Je]===null){E[Je]=Se,ke=Je;break}if(ke===-1)break}const be=w[ke];be&&be.connect(Se)}}const Z=new L,ce=new L;function ae(J,re,Se){Z.setFromMatrixPosition(re.matrixWorld),ce.setFromMatrixPosition(Se.matrixWorld);const ke=Z.distanceTo(ce),be=re.projectionMatrix.elements,Je=Se.projectionMatrix.elements,ot=be[14]/(be[10]-1),qe=be[14]/(be[10]+1),ee=(be[9]+1)/be[5],te=(be[9]-1)/be[5],Q=(be[8]-1)/be[0],me=(Je[8]+1)/Je[0],P=ot*Q,Ae=ot*me,se=ke/(-Q+me),$=se*-Q;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($),J.translateZ(se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const j=ot+se,C=qe+se,b=P-$,N=Ae+(ke-$),X=ee*qe/C*j,q=te*qe/C*j;J.projectionMatrix.makePerspective(b,N,X,q,j,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let re=J.near,Se=J.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),O.near=T.near=M.near=re,O.far=T.far=M.far=Se,(k!==O.near||F!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,F=O.far),O.layers.mask=J.layers.mask|6,M.layers.mask=O.layers.mask&3,T.layers.mask=O.layers.mask&5;const ke=J.parent,be=O.cameras;ue(O,ke);for(let Je=0;Je<be.length;Je++)ue(be[Je],ke);be.length===2?ae(O,M,T):O.projectionMatrix.copy(M.projectionMatrix),Be(J,O,ke)};function Be(J,re,Se){Se===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ko*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(J){return p[J]};let Ue=null;function at(J,re){if(u=re.getViewerPose(c||o),m=re,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ke=!1;Se.length!==O.cameras.length&&(O.cameras.length=0,ke=!0);for(let qe=0;qe<Se.length;qe++){const ee=Se[qe];let te=null;if(d!==null)te=d.getViewport(ee);else{const me=h.getViewSubImage(f,ee);te=me.viewport,qe===0&&(e.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(x))}let Q=D[qe];Q===void 0&&(Q=new Kt,Q.layers.enable(qe),Q.viewport=new yt,D[qe]=Q),Q.matrix.fromArray(ee.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ee.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(te.x,te.y,te.width,te.height),qe===0&&(O.matrix.copy(Q.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ke===!0&&O.cameras.push(Q)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const qe=h.getDepthInformation(Se[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,i.renderState)}if(be&&be.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let qe=0;qe<Se.length;qe++){const ee=Se[qe].camera;if(ee){let te=p[ee];te||(te=new Od,p[ee]=te);const Q=h.getCameraImage(ee);te.sourceTexture=Q}}}}for(let Se=0;Se<w.length;Se++){const ke=E[Se],be=w[Se];ke!==null&&be!==void 0&&be.update(ke,re,c||o)}Ue&&Ue(J,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),m=null}const ct=new o_;ct.setAnimationLoop(at),this.setAnimationLoop=function(J){Ue=J},this.dispose=function(){}}}const os=new jn,KA=new Ve;function jA(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,mv(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,x=y.envMapRotation;_&&(g.envMap.value=_,os.copy(x),os.x*=-1,os.y*=-1,os.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.envMapRotation.value.setFromMatrix4(KA.makeRotationFromEuler(os)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function JA(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(m(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",g));const w=_.program;n.updateUBOMapping(y,w);const E=e.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function u(y){const _=h();y.__bindingPointIndex=_;const x=r.createBuffer(),w=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,w,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=i[y.id],x=y.uniforms,w=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let E=0,A=x.length;E<A;E++){const I=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,T=I.length;M<T;M++){const D=I[M];if(d(D,E,M,w)===!0){const O=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let V=0;V<k.length;V++){const H=k[V],U=v(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,O+F,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,F),F+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,_,x,w){const E=y.value,A=_+"_"+x;if(w[A]===void 0)return typeof E=="number"||typeof E=="boolean"?w[A]=E:w[A]=E.clone(),!0;{const I=w[A];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return w[A]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(y){const _=y.uniforms;let x=0;const w=16;for(let A=0,I=_.length;A<I;A++){const M=Array.isArray(_[A])?_[A]:[_[A]];for(let T=0,D=M.length;T<D;T++){const O=M[T],k=Array.isArray(O.value)?O.value:[O.value];for(let F=0,V=k.length;F<V;F++){const H=k[F],U=v(H),Z=x%w,ce=Z%U.boundary,ae=Z+ce;x+=ce,ae!==0&&w-ae<U.storage&&(x+=w-ae),O.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=U.storage}}}const E=x%w;return E>0&&(x+=w-E),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){const _=y.target;_.removeEventListener("dispose",g);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const QA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function eC(){return Pi===null&&(Pi=new bi(QA,16,16,Cs,Wi),Pi.name="DFG_LUT",Pi.minFilter=Rt,Pi.magFilter=Rt,Pi.wrapS=En,Pi.wrapT=En,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class f_{constructor(e={}){const{canvas:t=hv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Fn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=d,g=new Set([ku,Bu,ol]),p=new Set([Fn,hi,Do,No,Uu,Ou]),y=new Uint32Array(4),_=new Int32Array(4);let x=null,w=null;const E=[],A=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=Zt;let D=0,O=0,k=null,F=-1,V=null;const H=new yt,U=new yt;let Z=null;const ce=new ye(0);let ae=0,ue=t.width,Be=t.height,Ue=1,at=null,ct=null;const J=new yt(0,0,ue,Be),re=new yt(0,0,ue,Be);let Se=!1;const ke=new Ko;let be=!1,Je=!1;const ot=new Ve,qe=new L,ee=new yt,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function me(){return k===null?Ue:1}let P=n;function Ae(R,z){return t.getContext(R,z)}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pu}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",Lt,!1),t.addEventListener("webglcontextcreationerror",Tt,!1),P===null){const z="webgl2";if(P=Ae(z,R),P===null)throw Ae(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ge("WebGLRenderer: "+R.message),R}let se,$,j,C,b,N,X,q,G,pe,he,Pe,Fe,oe,ge,Ne,Ce,ve,nt,B,we,fe,Ee,le;function ie(){se=new tE(P),se.init(),fe=new h_(P,se),$=new qT(P,se,e,fe),j=new WA(P,se),$.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),C=new rE(P),b=new RA,N=new XA(P,se,j,b,$,fe,C),X=new $T(M),q=new eE(M),G=new lw(P),Ee=new WT(P,G),pe=new nE(P,G,C,Ee),he=new oE(P,pe,G,C),nt=new sE(P,$,N),Ne=new YT(b),Pe=new CA(M,X,q,se,$,Ee,Ne),Fe=new jA(M,b),oe=new PA,ge=new FA(se),ve=new HT(M,X,q,j,he,m,l),Ce=new GA(M,he,$),le=new JA(P,C,$,j),B=new XT(P,se,C),we=new iE(P,se,C),C.programs=Pe.programs,M.capabilities=$,M.extensions=se,M.properties=b,M.renderLists=oe,M.shadowMap=Ce,M.state=j,M.info=C}ie(),v!==Fn&&(I=new lE(v,t.width,t.height,i,s));const _e=new ZA(M,P);this.xr=_e,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(R){R!==void 0&&(Ue=R,this.setSize(ue,Be,!1))},this.getSize=function(R){return R.set(ue,Be)},this.setSize=function(R,z,K=!0){if(_e.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=R,Be=z,t.width=Math.floor(R*Ue),t.height=Math.floor(z*Ue),K===!0&&(t.style.width=R+"px",t.style.height=z+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(ue*Ue,Be*Ue).floor()},this.setDrawingBufferSize=function(R,z,K){ue=R,Be=z,Ue=K,t.width=Math.floor(R*K),t.height=Math.floor(z*K),this.setViewport(0,0,R,z)},this.setEffects=function(R){if(v===Fn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let z=0;z<R.length;z++)if(R[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,z,K,Y){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,z,K,Y),j.viewport(H.copy(J).multiplyScalar(Ue).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,z,K,Y){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,z,K,Y),j.scissor(U.copy(re).multiplyScalar(Ue).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){j.setScissorTest(Se=R)},this.setOpaqueSort=function(R){at=R},this.setTransparentSort=function(R){ct=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(R=!0,z=!0,K=!0){let Y=0;if(R){let W=!1;if(k!==null){const Te=k.texture.format;W=g.has(Te)}if(W){const Te=k.texture.type,De=p.has(Te),Re=ve.getClearColor(),Oe=ve.getClearAlpha(),He=Re.r,je=Re.g,Ye=Re.b;De?(y[0]=He,y[1]=je,y[2]=Ye,y[3]=Oe,P.clearBufferuiv(P.COLOR,0,y)):(_[0]=He,_[1]=je,_[2]=Ye,_[3]=Oe,P.clearBufferiv(P.COLOR,0,_))}else Y|=P.COLOR_BUFFER_BIT}z&&(Y|=P.DEPTH_BUFFER_BIT),K&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),ve.dispose(),oe.dispose(),ge.dispose(),b.dispose(),X.dispose(),q.dispose(),he.dispose(),Ee.dispose(),le.dispose(),Pe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",pp),_e.removeEventListener("sessionend",mp),Xr.stop()};function tt(R){R.preventDefault(),Ya("WebGLRenderer: Context Lost."),T=!0}function Lt(){Ya("WebGLRenderer: Context Restored."),T=!1;const R=C.autoReset,z=Ce.enabled,K=Ce.autoUpdate,Y=Ce.needsUpdate,W=Ce.type;ie(),C.autoReset=R,Ce.enabled=z,Ce.autoUpdate=K,Ce.needsUpdate=Y,Ce.type=W}function Tt(R){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ci(R){const z=R.target;z.removeEventListener("dispose",Ci),Yi(z)}function Yi(R){L_(R),b.remove(R)}function L_(R){const z=b.get(R).programs;z!==void 0&&(z.forEach(function(K){Pe.releaseProgram(K)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,K,Y,W,Te){z===null&&(z=te);const De=W.isMesh&&W.matrixWorld.determinant()<0,Re=N_(R,z,K,Y,W);j.setMaterial(Y,De);let Oe=K.index,He=1;if(Y.wireframe===!0){if(Oe=pe.getWireframeAttribute(K),Oe===void 0)return;He=2}const je=K.drawRange,Ye=K.attributes.position;let ht=je.start*He,At=(je.start+je.count)*He;Te!==null&&(ht=Math.max(ht,Te.start*He),At=Math.min(At,(Te.start+Te.count)*He)),Oe!==null?(ht=Math.max(ht,0),At=Math.min(At,Oe.count)):Ye!=null&&(ht=Math.max(ht,0),At=Math.min(At,Ye.count));const zt=At-ht;if(zt<0||zt===1/0)return;Ee.setup(W,Y,Re,K,Oe);let Vt,Pt=B;if(Oe!==null&&(Vt=G.get(Oe),Pt=we,Pt.setIndex(Vt)),W.isMesh)Y.wireframe===!0?(j.setLineWidth(Y.wireframeLinewidth*me()),Pt.setMode(P.LINES)):Pt.setMode(P.TRIANGLES);else if(W.isLine){let $e=Y.linewidth;$e===void 0&&($e=1),j.setLineWidth($e*me()),W.isLineSegments?Pt.setMode(P.LINES):W.isLineLoop?Pt.setMode(P.LINE_LOOP):Pt.setMode(P.LINE_STRIP)}else W.isPoints?Pt.setMode(P.POINTS):W.isSprite&&Pt.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Bo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const $e=W._multiDrawStarts,Et=W._multiDrawCounts,xt=W._multiDrawCount,Gn=Oe?G.get(Oe).bytesPerElement:1,qs=b.get(Y).currentProgram.getUniforms();for(let Hn=0;Hn<xt;Hn++)qs.setValue(P,"_gl_DrawID",Hn),Pt.render($e[Hn]/Gn,Et[Hn])}else if(W.isInstancedMesh)Pt.renderInstances(ht,zt,W.count);else if(K.isInstancedBufferGeometry){const $e=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Et=Math.min(K.instanceCount,$e);Pt.renderInstances(ht,zt,Et)}else Pt.render(ht,zt)};function dp(R,z,K){R.transparent===!0&&R.side===wn&&R.forceSinglePass===!1?(R.side=pn,R.needsUpdate=!0,xl(R,z,K),R.side=Gi,R.needsUpdate=!0,xl(R,z,K),R.side=wn):xl(R,z,K)}this.compile=function(R,z,K=null){K===null&&(K=R),w=ge.get(K),w.init(z),A.push(w),K.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),R!==K&&R.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights();const Y=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Re=Te[De];dp(Re,K,W),Y.add(Re)}else dp(Te,K,W),Y.add(Te)}),w=A.pop(),Y},this.compileAsync=function(R,z,K=null){const Y=this.compile(R,z,K);return new Promise(W=>{function Te(){if(Y.forEach(function(De){b.get(De).currentProgram.isReady()&&Y.delete(De)}),Y.size===0){W(R);return}setTimeout(Te,10)}se.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let vh=null;function D_(R){vh&&vh(R)}function pp(){Xr.stop()}function mp(){Xr.start()}const Xr=new o_;Xr.setAnimationLoop(D_),typeof self<"u"&&Xr.setContext(self),this.setAnimationLoop=function(R){vh=R,_e.setAnimationLoop(R),R===null?Xr.stop():Xr.start()},_e.addEventListener("sessionstart",pp),_e.addEventListener("sessionend",mp),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const K=_e.enabled===!0&&_e.isPresenting===!0,Y=I!==null&&(k===null||K)&&I.begin(M,k);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(z),z=_e.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,z,k),w=ge.get(R,A.length),w.init(z),A.push(w),ot.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ke.setFromProjectionMatrix(ot,Yn,z.reversedDepth),Je=this.localClippingEnabled,be=Ne.init(this.clippingPlanes,Je),x=oe.get(R,E.length),x.init(),E.push(x),_e.enabled===!0&&_e.isPresenting===!0){const De=M.xr.getDepthSensingMesh();De!==null&&_h(De,z,-1/0,M.sortObjects)}_h(R,z,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(at,ct),Q=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Q&&ve.addToRenderList(x,R),this.info.render.frame++,be===!0&&Ne.beginShadows();const W=w.state.shadowsArray;if(Ce.render(W,R,z),be===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&I.hasRenderPass())===!1){const De=x.opaque,Re=x.transmissive;if(w.setupLights(),z.isArrayCamera){const Oe=z.cameras;if(Re.length>0)for(let He=0,je=Oe.length;He<je;He++){const Ye=Oe[He];vp(De,Re,R,Ye)}Q&&ve.render(R);for(let He=0,je=Oe.length;He<je;He++){const Ye=Oe[He];gp(x,R,Ye,Ye.viewport)}}else Re.length>0&&vp(De,Re,R,z),Q&&ve.render(R),gp(x,R,z)}k!==null&&O===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),Y&&I.end(M),R.isScene===!0&&R.onAfterRender(M,R,z),Ee.resetDefaultState(),F=-1,V=null,A.pop(),A.length>0?(w=A[A.length-1],be===!0&&Ne.setGlobalState(M.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function _h(R,z,K,Y){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ke.intersectsSprite(R)){Y&&ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ot);const De=he.update(R),Re=R.material;Re.visible&&x.push(R,De,Re,K,ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ke.intersectsObject(R))){const De=he.update(R),Re=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ee.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ee.copy(De.boundingSphere.center)),ee.applyMatrix4(R.matrixWorld).applyMatrix4(ot)),Array.isArray(Re)){const Oe=De.groups;for(let He=0,je=Oe.length;He<je;He++){const Ye=Oe[He],ht=Re[Ye.materialIndex];ht&&ht.visible&&x.push(R,De,ht,K,ee.z,Ye)}}else Re.visible&&x.push(R,De,Re,K,ee.z,null)}}const Te=R.children;for(let De=0,Re=Te.length;De<Re;De++)_h(Te[De],z,K,Y)}function gp(R,z,K,Y){const{opaque:W,transmissive:Te,transparent:De}=R;w.setupLightsView(K),be===!0&&Ne.setGlobalState(M.clippingPlanes,K),Y&&j.viewport(H.copy(Y)),W.length>0&&_l(W,z,K),Te.length>0&&_l(Te,z,K),De.length>0&&_l(De,z,K),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function vp(R,z,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){const ht=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new Kn(1,1,{generateMipmaps:!0,type:ht?Wi:Fn,minFilter:ci,samples:$.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const Te=w.state.transmissionRenderTarget[Y.id],De=Y.viewport||H;Te.setSize(De.z*M.transmissionResolutionScale,De.w*M.transmissionResolutionScale);const Re=M.getRenderTarget(),Oe=M.getActiveCubeFace(),He=M.getActiveMipmapLevel();M.setRenderTarget(Te),M.getClearColor(ce),ae=M.getClearAlpha(),ae<1&&M.setClearColor(16777215,.5),M.clear(),Q&&ve.render(K);const je=M.toneMapping;M.toneMapping=yi;const Ye=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),be===!0&&Ne.setGlobalState(M.clippingPlanes,Y),_l(R,K,Y),N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te),se.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let At=0,zt=z.length;At<zt;At++){const Vt=z[At],{object:Pt,geometry:$e,material:Et,group:xt}=Vt;if(Et.side===wn&&Pt.layers.test(Y.layers)){const Gn=Et.side;Et.side=pn,Et.needsUpdate=!0,_p(Pt,K,Y,$e,Et,xt),Et.side=Gn,Et.needsUpdate=!0,ht=!0}}ht===!0&&(N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te))}M.setRenderTarget(Re,Oe,He),M.setClearColor(ce,ae),Ye!==void 0&&(Y.viewport=Ye),M.toneMapping=je}function _l(R,z,K){const Y=z.isScene===!0?z.overrideMaterial:null;for(let W=0,Te=R.length;W<Te;W++){const De=R[W],{object:Re,geometry:Oe,group:He}=De;let je=De.material;je.allowOverride===!0&&Y!==null&&(je=Y),Re.layers.test(K.layers)&&_p(Re,z,K,Oe,je,He)}}function _p(R,z,K,Y,W,Te){R.onBeforeRender(M,z,K,Y,W,Te),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(M,z,K,Y,R,Te),W.transparent===!0&&W.side===wn&&W.forceSinglePass===!1?(W.side=pn,W.needsUpdate=!0,M.renderBufferDirect(K,z,Y,W,R,Te),W.side=Gi,W.needsUpdate=!0,M.renderBufferDirect(K,z,Y,W,R,Te),W.side=wn):M.renderBufferDirect(K,z,Y,W,R,Te),R.onAfterRender(M,z,K,Y,W,Te)}function xl(R,z,K){z.isScene!==!0&&(z=te);const Y=b.get(R),W=w.state.lights,Te=w.state.shadowsArray,De=W.state.version,Re=Pe.getParameters(R,W.state,Te,z,K),Oe=Pe.getProgramCacheKey(Re);let He=Y.programs;Y.environment=R.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(R.isMeshStandardMaterial?q:X).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",Ci),He=new Map,Y.programs=He);let je=He.get(Oe);if(je!==void 0){if(Y.currentProgram===je&&Y.lightsStateVersion===De)return yp(R,Re),je}else Re.uniforms=Pe.getUniforms(R),R.onBeforeCompile(Re,M),je=Pe.acquireProgram(Re,Oe),He.set(Oe,je),Y.uniforms=Re.uniforms;const Ye=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Ne.uniform),yp(R,Re),Y.needsLights=O_(R),Y.lightsStateVersion=De,Y.needsLights&&(Ye.ambientLightColor.value=W.state.ambient,Ye.lightProbe.value=W.state.probe,Ye.directionalLights.value=W.state.directional,Ye.directionalLightShadows.value=W.state.directionalShadow,Ye.spotLights.value=W.state.spot,Ye.spotLightShadows.value=W.state.spotShadow,Ye.rectAreaLights.value=W.state.rectArea,Ye.ltc_1.value=W.state.rectAreaLTC1,Ye.ltc_2.value=W.state.rectAreaLTC2,Ye.pointLights.value=W.state.point,Ye.pointLightShadows.value=W.state.pointShadow,Ye.hemisphereLights.value=W.state.hemi,Ye.directionalShadowMap.value=W.state.directionalShadowMap,Ye.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ye.spotShadowMap.value=W.state.spotShadowMap,Ye.spotLightMatrix.value=W.state.spotLightMatrix,Ye.spotLightMap.value=W.state.spotLightMap,Ye.pointShadowMap.value=W.state.pointShadowMap,Ye.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=je,Y.uniformsList=null,je}function xp(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=vc.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function yp(R,z){const K=b.get(R);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function N_(R,z,K,Y,W){z.isScene!==!0&&(z=te),N.resetTextureUnits();const Te=z.fog,De=Y.isMeshStandardMaterial?z.environment:null,Re=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:gn,Oe=(Y.isMeshStandardMaterial?q:X).get(Y.envMap||De),He=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,je=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ye=!!K.morphAttributes.position,ht=!!K.morphAttributes.normal,At=!!K.morphAttributes.color;let zt=yi;Y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(zt=M.toneMapping);const Vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Pt=Vt!==void 0?Vt.length:0,$e=b.get(Y),Et=w.state.lights;if(be===!0&&(Je===!0||R!==V)){const xn=R===V&&Y.id===F;Ne.setState(Y,R,xn)}let xt=!1;Y.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Et.state.version||$e.outputColorSpace!==Re||W.isBatchedMesh&&$e.batching===!1||!W.isBatchedMesh&&$e.batching===!0||W.isBatchedMesh&&$e.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&$e.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&$e.instancing===!1||!W.isInstancedMesh&&$e.instancing===!0||W.isSkinnedMesh&&$e.skinning===!1||!W.isSkinnedMesh&&$e.skinning===!0||W.isInstancedMesh&&$e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&$e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&$e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&$e.instancingMorph===!1&&W.morphTexture!==null||$e.envMap!==Oe||Y.fog===!0&&$e.fog!==Te||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ne.numPlanes||$e.numIntersection!==Ne.numIntersection)||$e.vertexAlphas!==He||$e.vertexTangents!==je||$e.morphTargets!==Ye||$e.morphNormals!==ht||$e.morphColors!==At||$e.toneMapping!==zt||$e.morphTargetsCount!==Pt)&&(xt=!0):(xt=!0,$e.__version=Y.version);let Gn=$e.currentProgram;xt===!0&&(Gn=xl(Y,z,W));let qs=!1,Hn=!1,ta=!1;const Dt=Gn.getUniforms(),Pn=$e.uniforms;if(j.useProgram(Gn.program)&&(qs=!0,Hn=!0,ta=!0),Y.id!==F&&(F=Y.id,Hn=!0),qs||V!==R){j.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Dt.setValue(P,"projectionMatrix",R.projectionMatrix),Dt.setValue(P,"viewMatrix",R.matrixWorldInverse);const Ln=Dt.map.cameraPosition;Ln!==void 0&&Ln.setValue(P,qe.setFromMatrixPosition(R.matrixWorld)),$.logarithmicDepthBuffer&&Dt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Dt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,Hn=!0,ta=!0)}if($e.needsLights&&(Et.state.directionalShadowMap.length>0&&Dt.setValue(P,"directionalShadowMap",Et.state.directionalShadowMap,N),Et.state.spotShadowMap.length>0&&Dt.setValue(P,"spotShadowMap",Et.state.spotShadowMap,N),Et.state.pointShadowMap.length>0&&Dt.setValue(P,"pointShadowMap",Et.state.pointShadowMap,N)),W.isSkinnedMesh){Dt.setOptional(P,W,"bindMatrix"),Dt.setOptional(P,W,"bindMatrixInverse");const xn=W.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Dt.setValue(P,"boneTexture",xn.boneTexture,N))}W.isBatchedMesh&&(Dt.setOptional(P,W,"batchingTexture"),Dt.setValue(P,"batchingTexture",W._matricesTexture,N),Dt.setOptional(P,W,"batchingIdTexture"),Dt.setValue(P,"batchingIdTexture",W._indirectTexture,N),Dt.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&Dt.setValue(P,"batchingColorTexture",W._colorsTexture,N));const ei=K.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&nt.update(W,K,Gn),(Hn||$e.receiveShadow!==W.receiveShadow)&&($e.receiveShadow=W.receiveShadow,Dt.setValue(P,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Pn.envMap.value=Oe,Pn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Pn.envMapIntensity.value=z.environmentIntensity),Pn.dfgLUT!==void 0&&(Pn.dfgLUT.value=eC()),Hn&&(Dt.setValue(P,"toneMappingExposure",M.toneMappingExposure),$e.needsLights&&U_(Pn,ta),Te&&Y.fog===!0&&Fe.refreshFogUniforms(Pn,Te),Fe.refreshMaterialUniforms(Pn,Y,Ue,Be,w.state.transmissionRenderTarget[R.id]),vc.upload(P,xp($e),Pn,N)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(vc.upload(P,xp($e),Pn,N),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Dt.setValue(P,"center",W.center),Dt.setValue(P,"modelViewMatrix",W.modelViewMatrix),Dt.setValue(P,"normalMatrix",W.normalMatrix),Dt.setValue(P,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const xn=Y.uniformsGroups;for(let Ln=0,xh=xn.length;Ln<xh;Ln++){const qr=xn[Ln];le.update(qr,Gn),le.bind(qr,Gn)}}return Gn}function U_(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function O_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,z,K){const Y=b.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=z,b.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,z){const K=b.get(R);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0};const F_=P.createFramebuffer();this.setRenderTarget=function(R,z=0,K=0){k=R,D=z,O=K;let Y=null,W=!1,Te=!1;if(R){const Re=b.get(R);if(Re.__useDefaultFramebuffer!==void 0){j.bindFramebuffer(P.FRAMEBUFFER,Re.__webglFramebuffer),H.copy(R.viewport),U.copy(R.scissor),Z=R.scissorTest,j.viewport(H),j.scissor(U),j.setScissorTest(Z),F=-1;return}else if(Re.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Re.__hasExternalTextures)N.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(Re.__boundDepthTexture!==je){if(je!==null&&b.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Te=!0);const He=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(He[z])?Y=He[z][K]:Y=He[z],W=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?Y=b.get(R).__webglMultisampledFramebuffer:Array.isArray(He)?Y=He[K]:Y=He,H.copy(R.viewport),U.copy(R.scissor),Z=R.scissorTest}else H.copy(J).multiplyScalar(Ue).floor(),U.copy(re).multiplyScalar(Ue).floor(),Z=Se;if(K!==0&&(Y=F_),j.bindFramebuffer(P.FRAMEBUFFER,Y)&&j.drawBuffers(R,Y),j.viewport(H),j.scissor(U),j.setScissorTest(Z),W){const Re=b.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,K)}else if(Te){const Re=z;for(let Oe=0;Oe<R.textures.length;Oe++){const He=b.get(R.textures[Oe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Oe,He.__webglTexture,K,Re)}}else if(R!==null&&K!==0){const Re=b.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Re.__webglTexture,K)}F=-1},this.readRenderTargetPixels=function(R,z,K,Y,W,Te,De,Re=0){if(!(R&&R.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){j.bindFramebuffer(P.FRAMEBUFFER,Oe);try{const He=R.textures[Re],je=He.format,Ye=He.type;if(!$.textureFormatReadable(je)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ye)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-Y&&K>=0&&K<=R.height-W&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Re),P.readPixels(z,K,Y,W,fe.convert(je),fe.convert(Ye),Te))}finally{const He=k!==null?b.get(k).__webglFramebuffer:null;j.bindFramebuffer(P.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,z,K,Y,W,Te,De,Re=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe)if(z>=0&&z<=R.width-Y&&K>=0&&K<=R.height-W){j.bindFramebuffer(P.FRAMEBUFFER,Oe);const He=R.textures[Re],je=He.format,Ye=He.type;if(!$.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ht),P.bufferData(P.PIXEL_PACK_BUFFER,Te.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Re),P.readPixels(z,K,Y,W,fe.convert(je),fe.convert(Ye),0);const At=k!==null?b.get(k).__webglFramebuffer:null;j.bindFramebuffer(P.FRAMEBUFFER,At);const zt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await fb(P,zt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ht),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Te),P.deleteBuffer(ht),P.deleteSync(zt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,z=null,K=0){const Y=Math.pow(2,-K),W=Math.floor(R.image.width*Y),Te=Math.floor(R.image.height*Y),De=z!==null?z.x:0,Re=z!==null?z.y:0;N.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,De,Re,W,Te),j.unbindTexture()};const B_=P.createFramebuffer(),k_=P.createFramebuffer();this.copyTextureToTexture=function(R,z,K=null,Y=null,W=0,Te=null){Te===null&&(W!==0?(Bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=W,W=0):Te=0);let De,Re,Oe,He,je,Ye,ht,At,zt;const Vt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(K!==null)De=K.max.x-K.min.x,Re=K.max.y-K.min.y,Oe=K.isBox3?K.max.z-K.min.z:1,He=K.min.x,je=K.min.y,Ye=K.isBox3?K.min.z:0;else{const ei=Math.pow(2,-W);De=Math.floor(Vt.width*ei),Re=Math.floor(Vt.height*ei),R.isDataArrayTexture?Oe=Vt.depth:R.isData3DTexture?Oe=Math.floor(Vt.depth*ei):Oe=1,He=0,je=0,Ye=0}Y!==null?(ht=Y.x,At=Y.y,zt=Y.z):(ht=0,At=0,zt=0);const Pt=fe.convert(z.format),$e=fe.convert(z.type);let Et;z.isData3DTexture?(N.setTexture3D(z,0),Et=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(N.setTexture2DArray(z,0),Et=P.TEXTURE_2D_ARRAY):(N.setTexture2D(z,0),Et=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);const xt=P.getParameter(P.UNPACK_ROW_LENGTH),Gn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qs=P.getParameter(P.UNPACK_SKIP_PIXELS),Hn=P.getParameter(P.UNPACK_SKIP_ROWS),ta=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Vt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Vt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,He),P.pixelStorei(P.UNPACK_SKIP_ROWS,je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ye);const Dt=R.isDataArrayTexture||R.isData3DTexture,Pn=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){const ei=b.get(R),xn=b.get(z),Ln=b.get(ei.__renderTarget),xh=b.get(xn.__renderTarget);j.bindFramebuffer(P.READ_FRAMEBUFFER,Ln.__webglFramebuffer),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,xh.__webglFramebuffer);for(let qr=0;qr<Oe;qr++)Dt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,b.get(R).__webglTexture,W,Ye+qr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,b.get(z).__webglTexture,Te,zt+qr)),P.blitFramebuffer(He,je,De,Re,ht,At,De,Re,P.DEPTH_BUFFER_BIT,P.NEAREST);j.bindFramebuffer(P.READ_FRAMEBUFFER,null),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||b.has(R)){const ei=b.get(R),xn=b.get(z);j.bindFramebuffer(P.READ_FRAMEBUFFER,B_),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,k_);for(let Ln=0;Ln<Oe;Ln++)Dt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ei.__webglTexture,W,Ye+Ln):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ei.__webglTexture,W),Pn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xn.__webglTexture,Te,zt+Ln):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xn.__webglTexture,Te),W!==0?P.blitFramebuffer(He,je,De,Re,ht,At,De,Re,P.COLOR_BUFFER_BIT,P.NEAREST):Pn?P.copyTexSubImage3D(Et,Te,ht,At,zt+Ln,He,je,De,Re):P.copyTexSubImage2D(Et,Te,ht,At,He,je,De,Re);j.bindFramebuffer(P.READ_FRAMEBUFFER,null),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Pn?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(Et,Te,ht,At,zt,De,Re,Oe,Pt,$e,Vt.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(Et,Te,ht,At,zt,De,Re,Oe,Pt,Vt.data):P.texSubImage3D(Et,Te,ht,At,zt,De,Re,Oe,Pt,$e,Vt):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Te,ht,At,De,Re,Pt,$e,Vt.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Te,ht,At,Vt.width,Vt.height,Pt,Vt.data):P.texSubImage2D(P.TEXTURE_2D,Te,ht,At,De,Re,Pt,$e,Vt);P.pixelStorei(P.UNPACK_ROW_LENGTH,xt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Gn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qs),P.pixelStorei(P.UNPACK_SKIP_ROWS,Hn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ta),Te===0&&z.generateMipmaps&&P.generateMipmap(Et),j.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),j.unbindTexture()},this.resetState=function(){D=0,O=0,k=null,j.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const ap=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:dd,AddEquation:Ar,AddOperation:Z0,AdditiveAnimationBlendMode:Md,AdditiveBlending:Pf,AgXToneMapping:za,AlphaFormat:yd,AlwaysCompare:lv,AlwaysDepth:Ac,AlwaysStencilFunc:Uf,AmbientLight:Yv,AnimationAction:i_,AnimationClip:Wo,AnimationLoader:tS,AnimationMixer:CS,AnimationObjectGroup:ES,AnimationUtils:jM,ArcCurve:wv,ArrayCamera:Qv,ArrowHelper:QS,AttachedBindMode:Nf,Audio:t_,AudioAnalyser:gS,AudioContext:tp,AudioListener:dS,AudioLoader:uS,AxesHelper:ew,BackSide:pn,BasicDepthPacking:tv,BasicShadowMap:Ty,BatchedMesh:yv,Bone:Zu,BooleanKeyframeTrack:Gs,Box2:BS,Box3:Xt,Box3Helper:jS,BoxGeometry:Vs,BoxHelper:KS,BufferAttribute:St,BufferGeometry:et,BufferGeometryLoader:jv,ByteType:gd,Cache:Bi,Camera:qu,CameraHelper:ZS,CanvasTexture:yM,CapsuleGeometry:Qu,CatmullRomCurve3:Tv,CineonToneMapping:fd,CircleGeometry:ul,ClampToEdgeWrapping:En,Clock:e_,Color:ye,ColorKeyframeTrack:$d,ColorManagement:pt,CompressedArrayTexture:_M,CompressedCubeTexture:xM,CompressedTexture:Ju,CompressedTextureLoader:nS,ConeGeometry:fl,ConstantAlphaFactor:q0,ConstantColorFactor:W0,Controls:nw,CubeCamera:gv,CubeDepthTexture:Mv,CubeReflectionMapping:Hi,CubeRefractionMapping:Or,CubeTexture:al,CubeTextureLoader:iS,CubeUVReflectionMapping:Zo,CubicBezierCurve:Bd,CubicBezierCurve3:Ev,CubicInterpolant:Gv,CullFaceBack:If,CullFaceFront:R0,CullFaceFrontBack:wy,CullFaceNone:C0,Curve:Ai,CurvePath:Cv,CustomBlending:I0,CustomToneMapping:pd,CylinderGeometry:hl,Cylindrical:FS,Data3DTexture:Wu,DataArrayTexture:Hu,DataTexture:bi,DataTextureLoader:rS,DataUtils:Hb,DecrementStencilOp:zy,DecrementWrapStencilOp:Gy,DefaultLoadingManager:Ws,DepthFormat:Xi,DepthStencilFormat:Rr,DepthTexture:Vo,DetachedBindMode:K0,DirectionalLight:Qd,DirectionalLightHelper:$S,DiscreteInterpolant:Hv,DodecahedronGeometry:Go,DoubleSide:wn,DstAlphaFactor:k0,DstColorFactor:V0,DynamicCopyUsage:ib,DynamicDrawUsage:jy,DynamicReadUsage:eb,EdgesGeometry:Sv,EllipseCurve:eh,EqualCompare:sv,EqualDepth:Rc,EqualStencilFunc:qy,EquirectangularReflectionMapping:Va,EquirectangularRefractionMapping:Ga,Euler:jn,EventDispatcher:qi,ExternalTexture:Od,ExtrudeGeometry:th,FileLoader:wi,Float16BufferAttribute:Kb,Float32BufferAttribute:Le,FloatType:An,Fog:$u,FogExp2:Yu,FramebufferTexture:vM,FrontSide:Gi,Frustum:Ko,FrustumArray:Ku,GLBufferAttribute:DS,GLSL1:sb,GLSL3:Of,GreaterCompare:ov,GreaterDepth:Pc,GreaterEqualCompare:Gu,GreaterEqualDepth:Ic,GreaterEqualStencilFunc:Ky,GreaterStencilFunc:$y,GridHelper:qS,Group:Fi,HalfFloatType:Wi,HemisphereLight:qv,HemisphereLightHelper:XS,IcosahedronGeometry:dl,ImageBitmapLoader:Jv,ImageLoader:ja,ImageUtils:dv,IncrementStencilOp:ky,IncrementWrapStencilOp:Vy,InstancedBufferAttribute:Rs,InstancedBufferGeometry:Kv,InstancedInterleavedBuffer:LS,InstancedMesh:Dd,Int16BufferAttribute:$b,Int32BufferAttribute:Zb,Int8BufferAttribute:Xb,IntType:Nu,InterleavedBuffer:ll,InterleavedBufferAttribute:kr,Interpolant:Qo,InterpolateDiscrete:Uo,InterpolateLinear:Oo,InterpolateSmooth:mc,InterpolationSamplingMode:lb,InterpolationSamplingType:ab,InvertStencilOp:Hy,KeepStencilOp:us,KeyframeTrack:pi,LOD:xv,LatheGeometry:nh,Layers:Xu,LessCompare:rv,LessDepth:Cc,LessEqualCompare:Vu,LessEqualDepth:As,LessEqualStencilFunc:Yy,LessStencilFunc:Xy,Light:Wr,LightProbe:Zv,Line:hr,Line3:r_,LineBasicMaterial:_n,LineCurve:kd,LineCurve3:Av,LineDashedMaterial:zv,LineLoop:Nd,LineSegments:Ei,LinearFilter:Rt,LinearInterpolant:Yd,LinearMipMapLinearFilter:Ry,LinearMipMapNearestFilter:Cy,LinearMipmapLinearFilter:ci,LinearMipmapNearestFilter:So,LinearSRGBColorSpace:gn,LinearToneMapping:ud,LinearTransfer:Wa,Loader:In,LoaderUtils:Ur,LoadingManager:Zd,LoopOnce:j0,LoopPingPong:Q0,LoopRepeat:J0,MOUSE:My,Material:jt,MaterialLoader:lh,MathUtils:fv,Matrix2:op,Matrix3:it,Matrix4:Ve,MaxEquation:N0,Mesh:kt,MeshBasicMaterial:Rn,MeshDepthMaterial:Wd,MeshDistanceMaterial:Xd,MeshLambertMaterial:Bv,MeshMatcapMaterial:kv,MeshNormalMaterial:Fv,MeshPhongMaterial:Uv,MeshPhysicalMaterial:di,MeshStandardMaterial:gl,MeshToonMaterial:Ov,MinEquation:D0,MirroredRepeatWrapping:Lo,MixOperation:$0,MultiplyBlending:Df,MultiplyOperation:sl,NearestFilter:Bt,NearestMipMapLinearFilter:Ay,NearestMipMapNearestFilter:Ey,NearestMipmapLinearFilter:ds,NearestMipmapNearestFilter:Du,NeutralToneMapping:md,NeverCompare:iv,NeverDepth:Ec,NeverStencilFunc:Wy,NoBlending:zi,NoColorSpace:nr,NoNormalPacking:Ny,NoToneMapping:yi,NormalAnimationBlendMode:zu,NormalBlending:bs,NormalGAPacking:Oy,NormalRGPacking:Uy,NotEqualCompare:av,NotEqualDepth:Lc,NotEqualStencilFunc:Zy,NumberKeyframeTrack:Ps,Object3D:gt,ObjectLoader:lS,ObjectSpaceNormalMap:nv,OctahedronGeometry:jo,OneFactor:O0,OneMinusConstantAlphaFactor:Y0,OneMinusConstantColorFactor:X0,OneMinusDstAlphaFactor:z0,OneMinusDstColorFactor:G0,OneMinusSrcAlphaFactor:Tc,OneMinusSrcColorFactor:B0,OrthographicCamera:Xs,PCFShadowMap:Aa,PCFSoftShadowMap:Ca,PMREMGenerator:Hf,Path:mu,PerspectiveCamera:Kt,Plane:Tr,PlaneGeometry:Jo,PlaneHelper:JS,PointLight:Jd,PointLightHelper:HS,Points:Ud,PointsMaterial:ju,PolarGridHelper:YS,PolyhedronGeometry:Hr,PositionalAudio:mS,PropertyBinding:vt,PropertyMixer:n_,QuadraticBezierCurve:zd,QuadraticBezierCurve3:Vd,Quaternion:mn,QuaternionKeyframeTrack:Ls,QuaternionLinearInterpolant:Wv,R11_EAC_Format:zc,RED_GREEN_RGTC2_Format:cu,RED_RGTC1_Format:au,REVISION:Pu,RG11_EAC_Format:Gc,RGBADepthPacking:Py,RGBAFormat:Cn,RGBAIntegerFormat:ku,RGBA_ASTC_10x10_Format:tu,RGBA_ASTC_10x5_Format:Jc,RGBA_ASTC_10x6_Format:Qc,RGBA_ASTC_10x8_Format:eu,RGBA_ASTC_12x10_Format:nu,RGBA_ASTC_12x12_Format:iu,RGBA_ASTC_4x4_Format:Wc,RGBA_ASTC_5x4_Format:Xc,RGBA_ASTC_5x5_Format:qc,RGBA_ASTC_6x5_Format:Yc,RGBA_ASTC_6x6_Format:$c,RGBA_ASTC_8x5_Format:Zc,RGBA_ASTC_8x6_Format:Kc,RGBA_ASTC_8x8_Format:jc,RGBA_BPTC_Format:ru,RGBA_ETC2_EAC_Format:kc,RGBA_PVRTC_2BPPV1_Format:Oc,RGBA_PVRTC_4BPPV1_Format:Uc,RGBA_S3TC_DXT1_Format:Ia,RGBA_S3TC_DXT3_Format:Pa,RGBA_S3TC_DXT5_Format:La,RGBDepthPacking:Ly,RGBFormat:bd,RGBIntegerFormat:Iy,RGB_BPTC_SIGNED_Format:su,RGB_BPTC_UNSIGNED_Format:ou,RGB_ETC1_Format:Fc,RGB_ETC2_Format:Bc,RGB_PVRTC_2BPPV1_Format:Nc,RGB_PVRTC_4BPPV1_Format:Dc,RGB_S3TC_DXT1_Format:Ra,RGDepthPacking:Dy,RGFormat:Cs,RGIntegerFormat:Bu,RawShaderMaterial:Hd,Ray:Gr,Raycaster:sp,RectAreaLight:$v,RedFormat:Fu,RedIntegerFormat:ol,ReinhardToneMapping:hd,RenderTarget:Td,RenderTarget3D:RS,RepeatWrapping:Fr,ReplaceStencilOp:By,ReverseSubtractEquation:L0,RingGeometry:ih,SIGNED_R11_EAC_Format:Vc,SIGNED_RED_GREEN_RGTC2_Format:uu,SIGNED_RED_RGTC1_Format:lu,SIGNED_RG11_EAC_Format:Hc,SRGBColorSpace:Zt,SRGBTransfer:wt,Scene:Id,ShaderChunk:Ze,ShaderLib:ai,ShaderMaterial:fi,ShadowMaterial:Nv,Shape:Ss,ShapeGeometry:rh,ShapePath:tw,ShapeUtils:xi,ShortType:vd,Skeleton:cl,SkeletonHelper:GS,SkinnedMesh:Ld,Source:Ir,Sphere:qt,SphereGeometry:pl,Spherical:OS,SphericalHarmonics3:ep,SplineCurve:Gd,SpotLight:jd,SpotLightHelper:VS,Sprite:_v,SpriteMaterial:Pd,SrcAlphaFactor:wc,SrcAlphaSaturateFactor:H0,SrcColorFactor:F0,StaticCopyUsage:nb,StaticDrawUsage:Xa,StaticReadUsage:Qy,StereoCamera:hS,StreamCopyUsage:rb,StreamDrawUsage:Jy,StreamReadUsage:tb,StringKeyframeTrack:Hs,SubtractEquation:P0,SubtractiveBlending:Lf,TOUCH:Sy,TangentSpaceNormalMap:Vr,TetrahedronGeometry:ml,Texture:Ut,TextureLoader:Xv,TextureUtils:aw,Timer:NS,TimestampQuery:ob,TorusGeometry:sh,TorusKnotGeometry:oh,Triangle:Bn,TriangleFanDrawMode:hu,TriangleStripDrawMode:Sd,TrianglesDrawMode:ev,TubeGeometry:ah,UVMapping:Lu,Uint16BufferAttribute:Ed,Uint32BufferAttribute:Ad,Uint8BufferAttribute:qb,Uint8ClampedBufferAttribute:Yb,Uniform:rp,UniformsGroup:PS,UniformsLib:xe,UniformsUtils:Cd,UnsignedByteType:Fn,UnsignedInt101111Type:xd,UnsignedInt248Type:No,UnsignedInt5999Type:_d,UnsignedIntType:hi,UnsignedShort4444Type:Uu,UnsignedShort5551Type:Ou,UnsignedShortType:Do,VSMShadowMap:yo,Vector2:ne,Vector3:L,Vector4:yt,VectorKeyframeTrack:Ds,VideoFrameTexture:gM,VideoTexture:bv,WebGL3DRenderTarget:Db,WebGLArrayRenderTarget:Lb,WebGLCoordinateSystem:Yn,WebGLCubeRenderTarget:Rd,WebGLRenderTarget:Kn,WebGLRenderer:f_,WebGLUtils:h_,WebGPUCoordinateSystem:Fo,WebXRController:gc,WireframeGeometry:Dv,WrapAroundEnding:Ha,ZeroCurvatureEnding:ps,ZeroFactor:U0,ZeroSlopeEnding:ms,ZeroStencilOp:Fy,createCanvasElement:hv,error:Ge,getConsoleFunction:hb,log:Ya,setConsoleFunction:ub,warn:Me,warnOnce:Bo},Symbol.toStringTag,{value:"Module"}));function gu(r){let e;const t=Xg(i=>{let s=!1;const o=r.subscribe(a=>{e=a,s&&i()});return s=!0,o});function n(){return Ro()?(t(),e):E0(r)}return"set"in r?{get current(){return n()},set current(i){r.set(i)}}:{get current(){return n()}}}const hg=Symbol(),tC=r=>typeof r?.subscribe=="function",d_=(r,e,t)=>{const n=r().map(o=>tC(o)?gu(o):hg),i=$t(()=>r().map((o,a)=>n[a]===hg?o:n[a].current)),s=()=>{S(i);let o;return Qe(()=>{o=e(S(i))}),o};t?nn(s):ur(s)},nC=(r,e)=>d_(r,e,!1),iC=(r,e)=>d_(r,e,!0),rC=Object.assign(nC,{pre:iC}),Sn=(r,e)=>r?.[`is${e}`]===!0,df=r=>{const e=Po(void 0),t=Po(void 0);return r.then(n=>{e.set(n)}).catch(n=>{console.error("Error in asyncWritable:",n.message),t.set(n)}),Object.assign(Object.assign(r,e),{error:t,promise:r})},sC=typeof window<"u",_i=(r,e)=>{const t=ld(r,s=>s);let n;const i=t.subscribe(async s=>{n&&n();const o=await e(s);o&&(n=o)});zs(()=>{i(),n&&n()})},Ht=r=>{const e=Po(r),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:r};return t},oC=r=>({subscribe:r.subscribe,get current(){return r.current}}),p_=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},aC=r=>{const{dom:e,canvas:t}=r,n=Ht({width:e.offsetWidth,height:e.offsetHeight});mr(()=>{const s=new ResizeObserver(()=>{const{offsetWidth:o,offsetHeight:a}=e;(n.current.width!==o||n.current.height!==a)&&n.set({width:o,height:a})});return s.observe(e),()=>{s.disconnect()}});const i={dom:e,canvas:t,size:oC(n)};return Vn("threlte-dom-context",i),i},hh=()=>{const r=vn("threlte-dom-context");if(!r)throw new Error("useDOM can only be used in a child component to <Canvas>.");return r};function lC(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class Er{allVertices={};isolatedVertices={};connectedVertices={};sortedConnectedValues=[];needsSort=!1;emitter=lC();emit=this.emitter.emit.bind(this.emitter);on=this.emitter.on.bind(this.emitter);off=this.emitter.off.bind(this.emitter);get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const s=i.next.size>0||i.previous.size>0;if(!n?.after&&!n?.before&&!s){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n?.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const l=this.getKey(a),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(n?.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const l=this.getKey(a),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(s=>{const o=this.connectedVertices[s];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),i.previous.forEach(s=>{const o=this.connectedVertices[s];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){return this.allVertices[e]?.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((o,a)=>{o===0&&t.push(a)});t.length>0;){const o=t.shift();n.push(o);const a=i.find(l=>l===o);a&&this.connectedVertices[a]?.next.forEach(l=>{const c=(e.get(l)||0)-1;e.set(l,c),c===0&&t.push(l)})}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class cC{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class uC extends Er{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const i=new cC(this,e,t);return this.add(e,i,n),i}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(i=>{const s=performance.now();i.run(n??e);const o=performance.now()-s;t[i.key]=o})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class hC extends Er{lastTime=performance.now();clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new uC(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},i=performance.now();return this.forEachNode(s=>{const o=performance.now(),a=s.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),l=performance.now()-o;n[s.key.toString()]={duration:l,tasks:a}}),{total:performance.now()-i,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const fC=r=>{const e=new hC,t=e.createStage(Symbol("threlte-main-stage")),n={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{n.shouldAdvance=!0},autoRender:Ht(r.autoRender??!0),renderMode:Ht(r.renderMode??"on-demand"),invalidate(){n.frameInvalidated=!0},mainStage:t,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(n.frameInvalidated||n.autoInvalidations.size>0)||n.renderMode.current==="manual"&&n.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(i,s){n.shouldRender()&&s()}}),resetFrameInvalidation(){n.frameInvalidated=!1,n.shouldAdvance=!1}};return ur(()=>{n.autoRender.set(r.autoRender??!0)}),ur(()=>{n.renderMode.set(r.renderMode??"on-demand")}),zs(()=>{n.scheduler.dispose()}),Vn("threlte-scheduler-context",n),n},fh=()=>{const r=vn("threlte-scheduler-context");if(!r)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return r},dC=()=>{const{size:r}=hh(),{invalidate:e}=fh(),t=new Kt(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const n=Ht(t);_i(r,s=>{if(n.current===t){const o=n.current;o.aspect=s.width/s.height,o.updateProjectionMatrix(),e()}}),_i(n,s=>{s===void 0&&n.set(t)});const i={camera:n};return Vn("threlte-camera-context",i),i},m_=()=>{const r=vn("threlte-camera-context");if(!r)throw new Error("useCamera can only be used in a child component to <Canvas>.");return r},pC=()=>{const r={removeObjectFromDisposal:e=>{r.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=r.disposableObjects.get(e);t?r.disposableObjects.set(e,t+1):r.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=r.disposableObjects.get(e);t&&t>0&&(r.disposableObjects.set(e,t-1),t-1<=0&&(r.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await Vx(),!(!r.shouldDispose&&!e)&&(r.disposableObjects.forEach((t,n)=>{(t===0||e)&&(n?.dispose?.(),r.disposableObjects.delete(n))}),r.shouldDispose=!1)}};return zs(()=>{r.dispose(!0)}),Vn("threlte-disposal-context",r),r},g_=()=>{const r=vn("threlte-disposal-context");if(!r)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return r},v_=Symbol("threlte-parent-context"),__=r=>{const e=Ht(r);return Vn(v_,e),e},mC=()=>vn(v_),vu=Symbol("threlte-parent-object3d-context"),gC=r=>{const e=Cu(r);return Vn(vu,e),e},vC=r=>{const e=vn(vu),t=Po(r),n=ld([t,e],([i,s])=>i??s);return Vn(vu,n),t},_C=()=>vn(vu);function Ns(r,e,t){if(!sC)return{task:void 0,start:()=>{},stop:()=>{},started:Cu(!1)};let n,i,s;Er.isKey(r)?(n=r,i=e,s=t):(n=Symbol("useTask"),i=r,s=e);const o=fh();let a=o.mainStage;if(s){if(s.stage)if(Er.isValue(s.stage))a=s.stage;else{const f=o.scheduler.getStage(s.stage);if(!f)throw new Error(`No stage found with key ${s.stage.toString()}`);a=f}else if(s.after)if(Array.isArray(s.after))for(let f=0;f<s.after.length;f++){const d=s.after[f];if(Er.isValue(d)){a=d.stage;break}}else Er.isValue(s.after)&&(a=s.after.stage);else if(s.before)if(Array.isArray(s.before))for(let f=0;f<s.before.length;f++){const d=s.before[f];if(Er.isValue(d)){a=d.stage;break}}else Er.isValue(s.before)&&(a=s.before.stage)}const l=Po(!1),c=a.createTask(n,i,s),u=()=>{l.set(!0),(s?.autoInvalidate??!0)&&o.autoInvalidations.add(i),c.start()},h=()=>{l.set(!1),(s?.autoInvalidate??!0)&&o.autoInvalidations.delete(i),c.stop()};return s?.autoStart??!0?u():h(),zs(()=>{h(),a.removeTask(n)}),{task:c,start:u,stop:h,started:{subscribe:l.subscribe}}}const xC=r=>{const e={scene:new Id};return Vn("threlte-scene-context",e),e},x_=()=>{const r=vn("threlte-scene-context");if(!r)throw new Error("useScene can only be used in a child component to <Canvas>.");return r},yC=r=>{const{dispose:e}=g_(),{camera:t}=m_(),{scene:n}=x_(),{invalidate:i,renderStage:s,autoRender:o,scheduler:a,resetFrameInvalidation:l}=fh(),{size:c,canvas:u}=hh(),h=r.createRenderer?r.createRenderer(u):new f_({canvas:u,powerPreference:"high-performance",antialias:!0,alpha:!0}),f=s.createTask(Symbol("threlte-auto-render-task"),()=>{h.render(n,t.current)}),d={renderer:h,colorManagementEnabled:Ht(r.colorManagementEnabled??!0),colorSpace:Ht(r.colorSpace??"srgb"),dpr:Ht(r.dpr??window.devicePixelRatio),shadows:Ht(r.shadows??Ca),toneMapping:Ht(r.toneMapping??za),autoRenderTask:f};Vn("threlte-renderer-context",d),_i([d.colorManagementEnabled],([g])=>{pt.enabled=g}),_i([d.colorSpace],([g])=>{"outputColorSpace"in h&&(h.outputColorSpace=g)}),_i([d.dpr],([g])=>{"setPixelRatio"in h&&h.setPixelRatio(g)});const{start:m,stop:v}=Ns(()=>{!("xr"in h)||h.xr?.isPresenting||(h.setSize(c.current.width,c.current.height),i(),v())},{before:f,autoStart:!1,autoInvalidate:!1});return _i([c],()=>{m()}),_i([d.shadows],([g])=>{"shadowMap"in h&&(h.shadowMap.enabled=!!g,g&&g!==!0?h.shadowMap.type=g:g===!0&&(h.shadowMap.type=Ca))}),_i([d.toneMapping],([g])=>{"toneMapping"in h&&(h.toneMapping=g)}),_i([o],([g])=>(g?d.autoRenderTask.start():d.autoRenderTask.stop(),()=>{d.autoRenderTask.stop()})),"setAnimationLoop"in d.renderer&&d.renderer.setAnimationLoop(p=>{e(),a.run(p),l()}),zs(()=>{if("dispose"in d.renderer){const g=d.renderer.dispose;g()}}),nn(()=>{d.colorManagementEnabled.set(r.colorManagementEnabled??!0)}),nn(()=>{d.colorSpace.set(r.colorSpace??"srgb")}),nn(()=>{d.toneMapping.set(r.toneMapping??za)}),nn(()=>{d.shadows.set(r.shadows??Ca)}),nn(()=>{d.dpr.set(r.dpr??window.devicePixelRatio)}),d},bC=()=>{const r=vn("threlte-renderer-context");if(!r)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return r},MC=()=>{const r=Ht({});return Vn("threlte-user-context",r),r},SC=r=>{const{scene:e}=xC();return{scene:e,...aC(r),...yy(),...__(e),...gC(e),...pC(),...fC(r),...dC(),...yC(r),...MC()}};function wC(r,e){Jn(e,!0),SC(Ru(e,["$$slots","$$events","$$legacy","children"]));var n=On(),i=bt(n);ka(i,()=>e.children),We(r,n),Qn()}var TC=lt('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function EC(r,e){let t=Ru(e,["$$slots","$$events","$$legacy","children"]),n=ri(void 0),i=ri(void 0);var s=TC(),o=dt(s),a=dt(o);{var l=c=>{wC(c,A0({get dom(){return S(i)},get canvas(){return S(n)}},()=>t,{children:(u,h)=>{var f=On(),d=bt(f);ka(d,()=>e.children??ui),We(u,f)},$$slots:{default:!0}}))};Ct(a,c=>{S(n)&&S(i)&&c(l)})}ys(o,c=>de(n,c),()=>S(n)),ys(s,c=>de(i,c),()=>S(i)),We(r,s)}const vl=()=>{const r=fh(),e=bC(),t=m_(),n=x_(),i=hh();return{advance:r.advance,autoRender:r.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:r.invalidate,mainStage:r.mainStage,renderer:e.renderer,renderMode:r.renderMode,renderStage:r.renderStage,scheduler:r.scheduler,shadows:e.shadows,shouldRender:r.shouldRender,dom:i.dom,canvas:i.canvas,size:i.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(o){n.scene=o}}},AC=r=>typeof r=="object"&&r!==null,CC=(r,e)=>{const{invalidate:t}=vl(),n=$t(r),i=$t(e),s=gu(mC()),o=gu(_C()),a=__(),l=vC();nn(()=>{a.set(S(n)),Sn(S(n),"Object3D")&&l.set(S(n)),t()}),nn(()=>{t();const c=S(n);if(S(i)===void 0&&Sn(c,"Object3D"))return o.current?.add(c),()=>{t(),o.current?.remove(c)};if(S(i)===void 0&&AC(s.current)){const u=s.current;if(Sn(c,"Material")){const h=u.material;return u.material=c,()=>{t(),u.material=h}}else if(Sn(c,"BufferGeometry")){const h=u.geometry;return u.geometry=c,()=>{t(),u.geometry=h}}}if(S(i)===!1)return()=>{t()};if(typeof S(i)=="function"){const u=S(i)({ref:c,parent:s.current,parentObject3D:o.current});return()=>{t(),u?.()}}if(typeof S(i)=="string"){const{target:u,key:h}=p_(s.current,S(i));if(h in u){const f=u[h];return u[h]=c,()=>{t(),u[h]=f}}else return u[h]=c,()=>{t(),delete u[h]}}if(Sn(S(i),"Object3D")&&Sn(c,"Object3D"))return S(i).add(c),()=>{t(),S(i).remove(c)}})},pf=new Set,RC=(r,e,t)=>{const{invalidate:n,size:i,camera:s}=vl(),o=$t(r),a=gu(i);nn(()=>{if(!t())return;const l=S(o);return pf.add(l),s.set(l),n(),()=>{pf.delete(l),pf.size===0&&(s.set(void 0),n())}}),nn(()=>{if(e())return;const{width:l,height:c}=a.current;Sn(S(o),"PerspectiveCamera")?S(o).aspect=l/c:Sn(S(o),"OrthographicCamera")&&(S(o).left=l/-2,S(o).right=l/2,S(o).top=c/2,S(o).bottom=c/-2),S(o).updateProjectionMatrix(),S(o).updateMatrixWorld(),n()})},qf=Symbol("threlte-disposable-object-context"),IC=r=>typeof r?.dispose=="function",PC=r=>{const e=vn(qf),t=$t(()=>r()??e?.()??!0);Vn(qf,()=>S(t))},LC=r=>{const e=$t(r),{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:i}=g_(),s=vn(qf),o=$t(()=>s?.()??!0);ur(()=>{if(S(o))return t(S(e)),()=>n(S(e));i(S(e))})},DC=r=>r!==null&&typeof r=="object"&&"addEventListener"in r&&"removeEventListener"in r,NC=(r,e,t)=>{const n=$t(r);for(const i of e){const s=$t(()=>t[i]);i.startsWith("on")&&nn(()=>{if(typeof S(s)!="function"||!DC(S(n)))return;const o=i.slice(2);return S(n).addEventListener(o,S(s)),()=>S(n).removeEventListener(o,S(s))})}};let Yf;const UC=r=>{Yf=r},OC=()=>{const r=Yf;return Yf=void 0,r},$f="threlte-plugin-context",FC=r=>{const e=vn($f);if(!e)return;const t=[],n=Object.values(e);if(n.length>0){const i=r();for(let s=0;s<n.length;s++){const o=n[s],a=o(i);a&&a.pluginProps&&t.push(...a.pluginProps)}}return{pluginsProps:t}},BC=new Set(["$$scope","$$slots","type","args","attach","instance"]),kC=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),zC=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,fg=(r,e,t)=>!Array.isArray(t)&&typeof t=="number"&&typeof r[e]=="object"&&r[e]!==null&&typeof r[e]?.setScalar=="function"&&!r[e]?.isColor?(n,i,s)=>{n[i].setScalar(s)}:typeof r[e]?.set=="function"&&typeof r[e]=="object"&&r[e]!==null?Array.isArray(t)?(n,i,s)=>{n[i].set(...s)}:(n,i,s)=>{n[i].set(s)}:(n,i,s)=>{n[i]=s},VC=()=>{const{invalidate:r}=vl(),e=new Map,t=new Map,n=(s,o,a,l)=>{if(zC(a)){const h=e.get(o);if(h&&h.instance===s&&h.value===a)return;e.set(o,{instance:s,value:a})}const{key:c,target:u}=p_(s,o);if(a!=null){const h=t.get(o);if(h)h(u,c,a);else{const f=fg(u,c,a);t.set(o,f),f(u,c,a)}}else fg(u,c,a)(u,c,a);l||kC.has(c)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProp:(s,o,a,l,c)=>{!BC.has(o)&&!l?.includes(o)&&n(s,o,a,c),r()}}},GC=r=>typeof r=="function"&&Function.prototype.toString.call(r).startsWith("class "),HC=(r,e)=>GC(r)?Array.isArray(e)?new r(...e):new r:r;function mf(r,e){Jn(e,!0);let t=rt(e,"is",19,OC),n=rt(e,"manual",3,!1),i=rt(e,"makeDefault",3,!1),s=rt(e,"ref",15),o=Ru(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);const a=$t(()=>HC(t(),e.args));nn(()=>{s()!==S(a)&&s(S(a))});const l=FC(()=>({get ref(){return S(a)},get args(){return e.args},get attach(){return e.attach},get manual(){return n()},get makeDefault(){return i()},get dispose(){return e.dispose},get props(){return o}})),c=Object.keys(o),{updateProp:u}=VC();c.forEach(d=>{const m=$t(()=>o[d]);nn(()=>{u(S(a),d,S(m),l?.pluginsProps,n())})}),CC(()=>S(a),()=>e.attach),nn(()=>{(Sn(S(a),"PerspectiveCamera")||Sn(S(a),"OrthographicCamera"))&&RC(()=>S(a),()=>n(),()=>i())}),PC(()=>e.dispose),nn(()=>{IC(S(a))&&LC(()=>S(a))}),NC(()=>S(a),c,o),ur(()=>{S(a);let d;return Qe(()=>{d=e.oncreate?.(S(a))}),d});var h=On(),f=bt(h);ka(f,()=>e.children??ui,()=>({ref:S(a)})),We(r,h),Qn()}const WC={},Xe=new Proxy(mf,{get(r,e){if(typeof e!="string")return mf;const t=WC[e]||ap[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return UC(t),mf}});function XC(r,e){e&&Vn($f,{...vn($f),[r]:e})}function qC(r,e){const{remember:t,clear:n}=by();let i;const s=()=>{const l=new r(...e?.args??[]);return e?.extend?.(l),l};return{load:(l,c)=>{const u=async h=>{if(i||(i=s()),"loadAsync"in i){const f=await i.loadAsync(h,c?.onProgress);return c?.transform?.(f)??f}else return new Promise((f,d)=>{i.load(h,m=>f(c?.transform?.(m)??m),m=>c?.onProgress?.(m),d)})};if(Array.isArray(l)){const h=l.map(d=>t(()=>u(d),[r,d]));return df(Promise.all(h))}else if(typeof l=="string"){const h=t(()=>u(l),[r,l]);return df(h)}else{const h=Object.values(l).map(d=>t(()=>u(d),[r,d]));return df(Promise.all(h).then(d=>Object.fromEntries(Object.entries(l).map(([m],v)=>[m,d[v]]))))}},clear:l=>{Array.isArray(l)?l.forEach(c=>{n([r,c])}):typeof l=="string"?n([r,l]):Object.entries(l).forEach(([c,u])=>{n([r,c,u])})},loader:i}}function dg(r,e){if(e===ev)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===hu||e===Sd){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===hu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class y_ extends In{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jC(t)}),this.register(function(t){return new JC(t)}),this.register(function(t){return new aR(t)}),this.register(function(t){return new lR(t)}),this.register(function(t){return new cR(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new KC(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new QC(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new sR(t)}),this.register(function(t){return new $C(t)}),this.register(function(t){return new uR(t)}),this.register(function(t){return new hR(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ur.extractUrlBase(e);o=Ur.resolveURL(c,this.path)}else o=Ur.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new wi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===b_){try{o[mt.KHR_BINARY_GLTF]=new fR(e)}catch(h){i&&i(h);return}s=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new TR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case mt.KHR_MATERIALS_UNLIT:o[h]=new ZC;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[h]=new dR(s,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[h]=new pR;break;case mt.KHR_MESH_QUANTIZATION:o[h]=new mR;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function YC(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $C{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],gn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Jd(u),c.distance=h;break;case"spot":c=new jd(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Li(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class ZC{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,n){const i=[];e.color=new ye(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Zt))}return Promise.all(i)}}class KC{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class jC{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(a,a)}return Promise.all(s)}}class JC{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class QC{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class eR{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],gn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Zt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class tR{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class nR{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(a[0],a[1],a[2],gn),Promise.all(s)}}class iR{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class rR{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(a[0],a[1],a[2],gn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Zt)),Promise.all(s)}}class sR{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class oR{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class aR{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class lR{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class cR{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class uR{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class hR{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ii.TRIANGLES&&c.mode!==ii.TRIANGLE_STRIP&&c.mode!==ii.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const m of h){const v=new Ve,g=new L,p=new mn,y=new L(1,1,1),_=new Dd(m.geometry,m.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),_.setMatrixAt(x,v.compose(g,p,y));for(const x in l)if(x==="_COLOR_0"){const w=l[x];_.instanceColor=new Rs(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,l[x]);gt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),d.push(_)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const b_="glTF",va=12,pg={JSON:1313821514,BIN:5130562};class fR{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,va),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==b_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-va,s=new DataView(e,va);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===pg.JSON){const c=new Uint8Array(e,va+o,a);this.content=n.decode(c)}else if(l===pg.BIN){const c=va+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Zf[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Zf[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=To[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const m in d.attributes){const v=d.attributes[m],g=l[m];g!==void 0&&(v.normalized=g)}h(d)},a,c,gn,f)})})}}class pR{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class mR{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class M_ extends Qo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,v=m-c,g=-2*d+3*f,p=d-f,y=1-g,_=p-f+h;for(let x=0;x!==a;x++){const w=o[v+x+a],E=o[v+x+l]*u,A=o[m+x+a],I=o[m+x]*u;s[x]=y*w+_*E+g*A+p*I}return s}}const gR=new mn;class vR extends M_{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return gR.fromArray(s).normalize().toArray(s),s}}const ii={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},To={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mg={9728:Bt,9729:Rt,9984:Du,9985:So,9986:ds,9987:ci},gg={33071:En,33648:Lo,10497:Fr},gf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_R={CUBICSPLINE:void 0,LINEAR:Oo,STEP:Uo},vf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xR(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new gl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),r.DefaultMaterial}function as(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Li(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yR(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function bR(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MR(r){let e;const t=r.extensions&&r.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_f(t.attributes):e=r.indices+":"+_f(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+_f(r.targets[n]);return e}function _f(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Kf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SR(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wR=new Ve;class TR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new YC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Xv(this.options.manager):this.textureLoader=new Jv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return as(s,a,i),Li(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ur.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=gf[i.type],a=To[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new St(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=gf[i.type],c=To[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,g;if(d&&d!==h){const p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(y);_||(v=new c(a,p*d,i.count*d/u),_=new ll(v,d/u),t.cache.add(y,_)),g=new kr(_,l,f%d/u,m)}else a===null?v=new c(i.count*l):v=new c(a,f,i.count*l),g=new St(v,l,m);if(i.sparse!==void 0){const p=gf.SCALAR,y=To[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,w=new y(o[1],_,i.sparse.count*p),E=new c(o[2],x,i.sparse.count*l);a!==null&&(g=new St(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,I=w.length;A<I;A++){const M=w[A];if(g.setX(M,E[A*l]),l>=2&&g.setY(M,E[A*l+1]),l>=3&&g.setZ(M,E[A*l+2]),l>=4&&g.setW(M,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=mg[f.magFilter]||Rt,u.minFilter=mg[f.minFilter]||ci,u.wrapS=gg[f.wrapS]||Fr,u.wrapT=gg[f.wrapT]||Fr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Bt&&u.minFilter!==Rt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(v){const g=new Ut(v);g.needsUpdate=!0,f(g)}),t.load(Ur.resolveURL(h,s.path),m,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Li(h,o),h.userData.mimeType=o.mimeType||SR(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[mt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ju,jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _n,jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){const h=i[mt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],gn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Zt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=wn);const u=s.alphaMode||vf.OPAQUE;if(u===vf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===vf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Rn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ne(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Rn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Rn){const h=s.emissiveFactor;a.emissive=new ye().setRGB(h[0],h[1],h[2],gn)}return s.emissiveTexture!==void 0&&o!==Rn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Zt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Li(h,s),t.associations.set(h,{materials:e}),s.extensions&&as(i,h,s),h})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return vg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=MR(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=vg(new et,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?xR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const v=u[d],g=o[d];let p;const y=c[d];if(g.mode===ii.TRIANGLES||g.mode===ii.TRIANGLE_STRIP||g.mode===ii.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Ld(v,y):new kt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===ii.TRIANGLE_STRIP?p.geometry=dg(p.geometry,Sd):g.mode===ii.TRIANGLE_FAN&&(p.geometry=dg(p.geometry,hu));else if(g.mode===ii.LINES)p=new Ei(v,y);else if(g.mode===ii.LINE_STRIP)p=new hr(v,y);else if(g.mode===ii.LINE_LOOP)p=new Nd(v,y);else if(g.mode===ii.POINTS)p=new Ud(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&bR(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Li(p,s),g.extensions&&as(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&as(i,h[0],s),h[0];const f=new Fi;s.extensions&&as(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(fv.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Xs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Li(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ve;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new cl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],m=i.samplers[d.sampler],v=d.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],m=h[2],v=h[3],g=h[4],p=[];for(let _=0,x=f.length;_<x;_++){const w=f[_],E=d[_],A=m[_],I=v[_],M=g[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const T=n._createAnimationTracks(w,E,A,I,M);if(T)for(let D=0;D<T.length;D++)p.push(T[D])}const y=new Wo(s,void 0,p);return Li(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,wR)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Zu:c.length>1?u=new Fi:c.length===1?u=c[0]:u=new gt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Li(u,s),s.extensions&&as(n,u,s),s.matrix!==void 0){const h=new Ve;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Fi;n.name&&(s.name=i.createUniqueName(n.name)),Li(s,n),n.extensions&&as(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof jt||f instanceof Ut)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];wr[s.path]===wr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(wr[s.path]){case wr.weights:c=Ps;break;case wr.rotation:c=Ls;break;case wr.translation:case wr.scale:c=Ds;break;default:n.itemSize===1?c=Ps:c=Ds;break}const u=i.interpolation!==void 0?_R[i.interpolation]:Oo,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const m=new c(l[f]+"."+wr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Kf(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ls?vR:M_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ER(r,e,t){const n=e.attributes,i=new Xt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=Kf(To[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const v=Kf(To[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new qt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function vg(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Zf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return pt.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Li(r,e),ER(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yR(r,e.targets,t):r})}const AR=r=>{const e={nodes:{},materials:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e};function S_(r,e){const t=typeof r=="string"?e:r,n=qC(y_,{extend(o){t?.dracoLoader&&o.setDRACOLoader(t.dracoLoader),t?.meshoptDecoder&&o.setMeshoptDecoder(t.meshoptDecoder),t?.ktx2Loader&&o.setKTX2Loader(t.ktx2Loader)}}),i=o=>n.load(o,{transform(a){return{...a,...AR(a.scene)}}}),s=typeof r=="string"?r:void 0;return s?i(s):{load:i}}const ls=r=>({subscribe:r.subscribe,get current(){return r.current}});let Oa=0;const lp=Ht(!1),dh=Ht(!1),cp=Ht(void 0),up=Ht(0),hp=Ht(0),w_=Ht([]),fp=Ht(0),{onStart:CR,onLoad:RR,onError:IR}=Ws;Ws.onStart=(r,e,t)=>{CR?.(r,e,t),dh.set(!0),cp.set(r),up.set(e),hp.set(t);const n=(e-Oa)/(t-Oa);fp.set(n),n===1&&lp.set(!0)};Ws.onLoad=()=>{RR?.(),dh.set(!1)};Ws.onError=r=>{IR?.(r),w_.update(e=>[...e,r])};Ws.onProgress=(r,e,t)=>{e===t&&(Oa=t),dh.set(!0),cp.set(r),up.set(e),hp.set(t);const n=(e-Oa)/(t-Oa)||1;fp.set(n),n===1&&lp.set(!0)};ls(dh),ls(cp),ls(up),ls(hp),ls(w_),ls(fp),ls(lp);new L;new L;new L;new qt;new Ve;new Gr;new L;const PR=Symbol("THRELTE_SUSPENSE_CONTEXT_IDENTIFIER"),LR=()=>{const r=vn(PR),e=new Set,t=i=>(r&&(r.suspend(i),e.add(i)),i),n={suspended:ld(r?.suspended??Cu(!1),i=>i)};return zs(()=>{if(r){for(const i of e)r.onComponentDestroy(i);e.clear()}}),Object.assign(t,n)};new L;new Ve;new L;new L;new gt;const DR=`
#include <common>
#include <logdepthbuf_pars_vertex>
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    #include <logdepthbuf_vertex>
}`,_g=`
#include <logdepthbuf_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4(0.0,0.0,0.0,0.0);
}`,NR=`
#include <common>
#include <logdepthbuf_pars_vertex>

void main() {
  vec2 center = vec2(0., 1.);
  float rotation = 0.0;
  
  // This is somewhat arbitrary, but it seems to work well
  // Need to figure out how to derive this dynamically if it even matters
  float size = 0.03;

  vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
  vec2 scale = vec2(
    length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) ),
    length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) )
  );

  bool isPerspective = isPerspectiveMatrix( projectionMatrix );
  if ( isPerspective ) scale *= - mvPosition.z;

  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
  mvPosition.xy += rotatedPosition;

  gl_Position = projectionMatrix * mvPosition;
  #include <logdepthbuf_vertex>
}`,Us=new L,ph=new L,UR=new L,OR=new ne,FR=(r,e,t)=>{const n=Us.setFromMatrixPosition(r.matrixWorld);n.project(e);const i=t.width/2,s=t.height/2;return[n.x*i+i,-(n.y*s)+s]},BR=(r,e)=>{const t=Us.setFromMatrixPosition(r.matrixWorld),n=ph.setFromMatrixPosition(e.matrixWorld),i=t.sub(n),s=e.getWorldDirection(UR);return i.angleTo(s)>Math.PI/2},kR=(r,e,t,n)=>{const i=Us.setFromMatrixPosition(r.matrixWorld),s=ph.copy(Us);s.project(e),t.setFromCamera(OR.set(s.x,s.y),e);const o=t.intersectObjects(n,!0);if(o.length){const a=o[0].distance;return i.distanceTo(t.ray.origin)<a}return!0},zR=(r,e)=>{if(Sn(e,"OrthographicCamera"))return e.zoom;if(Sn(e,"PerspectiveCamera")){const t=Us.setFromMatrixPosition(r.matrixWorld),n=ph.setFromMatrixPosition(e.matrixWorld),i=e.fov*Math.PI/180,s=t.distanceTo(n);return 1/(2*Math.tan(i/2)*s)}else return 1},VR=(r,e,t)=>{const n=Us.setFromMatrixPosition(r.matrixWorld),i=ph.setFromMatrixPosition(e.matrixWorld),s=n.distanceTo(i),o=(t[1]-t[0])/(e.far-e.near),a=t[1]-o*e.far;return Math.round(o*s+a)},tn=r=>Math.abs(r)<1e-10?0:r,T_=(r,e,t="")=>{const{elements:n}=r;return`${t}matrix3d(
    ${tn(e[0]*n[0])},${tn(e[1]*n[1])},${tn(e[2]*n[2])},${tn(e[3]*n[3])},
    ${tn(e[4]*n[4])},${tn(e[5]*n[5])},${tn(e[6]*n[6])},${tn(e[7]*n[7])},
    ${tn(e[8]*n[8])},${tn(e[9]*n[9])},${tn(e[10]*n[10])},${tn(e[11]*n[11])},
    ${tn(e[12]*n[12])},${tn(e[13]*n[13])},${tn(e[14]*n[14])},${tn(e[15]*n[15])}
  )`},GR=(r=>e=>T_(e,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),HR=(r=>(e,t)=>T_(e,r(t),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]),WR=(r,e,t)=>{if(Sn(r,"OrthographicCamera"))return 1;if(Sn(r,"PerspectiveCamera")){const{width:n,height:i}=t,s=r.getWorldPosition(Us).distanceTo(e),o=r.fov*Math.PI/180,l=2*Math.tan(o/2)*s*(n/i);return n/l}throw new Error("getViewportFactor needs a Perspective or Orthographic Camera")};let fc=!1,_u=0,xg="",yg="",bg="";const Mg=(r,e)=>{_u===1&&!fc?(xg=r.style.zIndex,yg=r.style.position,bg=r.style.pointerEvents,r.style.zIndex=`${Math.floor(e/2)}`,r.style.position="absolute",r.style.pointerEvents="none",fc=!0):_u===0&&fc&&(r.style.zIndex=xg,r.style.position=yg,r.style.pointerEvents=bg,fc=!1)};var XR=lt("<!> <!>",1),qR=lt("<div><div><div><!></div></div></div>"),YR=lt("<div><!></div>"),$R=lt("<!> <!>",1);function _a(r,e){Jn(e,!0);const t=()=>Ea(M,"$size",s),n=()=>Ea(A,"$camera",s),i=()=>Ea(te,"$suspended",s),[s,o]=cd();let a=rt(e,"autoRender",3,!0),l=rt(e,"eps",3,.001),c=rt(e,"center",3,!1),u=rt(e,"fullscreen",3,!1),h=rt(e,"sprite",3,!1),f=rt(e,"transform",3,!1),d=rt(e,"occlude",3,!1),m=rt(e,"castShadow",3,!1),v=rt(e,"receiveShadow",3,!1),g=rt(e,"zIndexRange",19,()=>[16777271,0]),p=rt(e,"calculatePosition",3,FR),y=rt(e,"as",3,"div"),_=rt(e,"pointerEvents",3,"auto"),x=rt(e,"ref",15),w=rt(e,"visible",15),E=Ru(e,["$$slots","$$events","$$legacy","autoRender","eps","center","fullscreen","portal","distanceFactor","sprite","transform","occlude","castShadow","receiveShadow","material","geometry","zIndexRange","calculatePosition","as","wrapperClass","pointerEvents","ref","visible","children"]);w(!0);const{camera:A,scene:I,size:M,dom:T,canvas:D,renderStage:O}=vl(),k=new Fi;let F=document.createElement(y()),V=0,H=[0,0],U=ri(void 0),Z=ri(void 0),ce=!1;const ae=new kt,ue=new sp;let Be=$t(()=>d()&&d()!=="blending"||Array.isArray(d())&&d().length>0),Ue=new Ve,at=$t(()=>t().width),ct=$t(()=>t().height),J=$t(()=>S(at)/2),re=$t(()=>S(ct)/2),Se=$t(()=>n().projectionMatrix.elements[5]*S(re)),ke=$t(()=>WR(n(),new L,t()));nn(()=>{e.wrapperClass&&(F.className=e.wrapperClass)}),nn(()=>(d()==="blending"&&(_u+=1,Mg(D,g()[0])),()=>{_u-=1,Mg(D,g()[0])}));const be=()=>{A.current.updateMatrixWorld(),k.updateWorldMatrix(!0,!1);const $=f()?H:p()(k,A.current,t());if(f()||Math.abs(V-A.current.zoom)>l()||Math.abs(H[0]-$[0])>l()||Math.abs(H[1]-$[1])>l()){const j=BR(k,A.current);let C=!1;S(Be)&&(Array.isArray(d())?C=d():d()!=="blending"&&(C=[I]));const b=w();if(C){const q=kR(k,A.current,ue,C);w(q&&!j)}else w(!j);b!==w()&&(e.onvisibilitychange?e.onvisibilitychange(w()):F.style.display=w()?"block":"none");const N=Math.floor(g()[0]/2),X=d()?S(Be)?[g()[0],N]:[N-1,0]:g();if(F.style.zIndex=`${VR(k,A.current,X)}`,f()&&S(U)&&S(Z)){const{isOrthographicCamera:q,top:G,left:pe,bottom:he,right:Pe}=A.current,Fe=GR(A.current.matrixWorldInverse),oe=q?`scale(${S(Se)})translate(${tn(-(Pe+pe)/2)}px,${tn((G+he)/2)}px)`:`translateZ(${S(Se)}px)`;h()?(Ue.copy(A.current.matrixWorldInverse).transpose().copyPosition(Ue).scale(k.scale),Ue.elements[3]=Ue.elements[7]=Ue.elements[11]=0,Ue.elements[15]=1):Ue.copy(k.matrixWorld),F.style.width=`${S(at)}px`,F.style.height=`${S(ct)}px`,F.style.perspective=q?"":`${S(Se)}px`,S(U).style.transform=`${oe}${Fe}translate(${S(J)}px,${S(re)}px)`,S(Z).style.transform=HR(Ue,1/((e.distanceFactor||10)/400))}else{const q=e.distanceFactor===void 0?1:zR(k,A.current)*e.distanceFactor;F.style.transform=`translate3d(${$[0]}px,${$[1]}px,0) scale(${q})`}H=$,V=A.current.zoom}if(!S(Be)&&!ce)if(f()&&S(U)){const j=S(U).children[0];if(j?.clientWidth&&j?.clientHeight){const{isOrthographicCamera:C}=A.current;if(C||e.geometry){const{scale:b}=E;b&&(Array.isArray(b)?ae.scale.set(1/b[0],1/b[1],1/b[2]):ae.scale.setScalar(1/b))}else{const b=(e.distanceFactor??10)/400,N=j.clientWidth*b,X=j.clientHeight*b;ae.scale.set(N,X,1)}ce=!0}}else{const j=F.children[0];if(j?.clientWidth&&j?.clientHeight){const C=1/S(ke),b=j.clientWidth*C,N=j.clientHeight*C;ae.scale.set(b,N,1),ce=!0}ae.lookAt(A.current.position)}},{start:Je,stop:ot}=Ns(be,{autoStart:!1,autoInvalidate:!1,stage:O});ur(()=>{if(a())return Je(),()=>{ot()}});let qe=$t(()=>(I.updateMatrixWorld(),p()(k,n(),t())));const ee=$=>{const j=e.portal??T;if(!j){console.warn("<HTML>: target is undefined.");return}return j.append($),{destroy:()=>$.remove()}},{suspended:te}=LR();var Q={render:be,startRendering:Je,stopRendering:ot},me=$R(),P=bt(me);Xe(P,A0({get is(){return k}},()=>E,{get ref(){return x()},set ref($){x($)},children:($,j)=>{var C=On(),b=bt(C);{var N=X=>{Xe(X,{get is(){return ae},get castShadow(){return m()},get receiveShadow(){return v()},children:(q,G)=>{var pe=XR(),he=bt(pe);{var Pe=Ce=>{Xe(Ce,{get is(){return e.geometry}})},Fe=Ce=>{var ve=On(),nt=bt(ve);yh(nt,()=>Xe.PlaneGeometry,(B,we)=>{we(B,{})}),We(Ce,ve)};Ct(he,Ce=>{e.geometry?Ce(Pe):Ce(Fe,!1)})}var oe=Ie(he,2);{var ge=Ce=>{Xe(Ce,{get is(){return e.material}})},Ne=Ce=>{var ve=On(),nt=bt(ve);{var B=fe=>{var Ee=On(),le=bt(Ee);yh(le,()=>Xe.ShaderMaterial,(ie,_e)=>{_e(ie,{get side(){return wn},get vertexShader(){return NR},get fragmentShader(){return _g}})}),We(fe,Ee)},we=fe=>{var Ee=On(),le=bt(Ee);yh(le,()=>Xe.ShaderMaterial,(ie,_e)=>{_e(ie,{get side(){return wn},get vertexShader(){return DR},get fragmentShader(){return _g}})}),We(fe,Ee)};Ct(nt,fe=>{f()?fe(we,!1):fe(B)},!0)}We(Ce,ve)};Ct(oe,Ce=>{e.material?Ce(ge):Ce(Ne,!1)})}We(q,pe)},$$slots:{default:!0}})};Ct(b,X=>{d()&&!S(Be)&&X(N)})}We($,C)},$$slots:{default:!0}}));var Ae=Ie(P,2);ry(Ae,y,!1,($,j)=>{sy($,q=>ee?.(q)),ys($,q=>F=q,()=>F),dy($,()=>({style:"",[vo]:{position:"absolute",top:"0",left:"0","pointer-events":f()?"none":void 0,overflow:f()?"hidden":void 0,transform:f()?void 0:`translate3d(${S(qe)[0]}px,${S(qe)[1]}px,0)`,"transform-origin":f()?void 0:"0 0",display:i()?"none":void 0}}));var C=On(),b=bt(C);{var N=q=>{var G=qR();let pe;var he=dt(G);let Pe;var Fe=dt(he),oe=dt(Fe);ka(oe,()=>e.children??ui,()=>({render:be,startRendering:Je,stopRendering:ot})),ys(he,ge=>de(Z,ge),()=>S(Z)),ys(G,ge=>de(U,ge),()=>S(U)),sn(()=>{pe=oi(G,"",pe,{position:"absolute",top:"0",left:"0","transform-style":"preserve-3d","pointer-events":"none",width:`${S(at)}px`,height:`${S(ct)}px`}),Pe=oi(he,"",Pe,{position:"absolute","pointer-events":_()}),Ni(Fe,1,Ef(e.class)),oi(Fe,e.style)}),We(q,G)},X=q=>{var G=YR();let pe;var he=dt(G);ka(he,()=>e.children??ui,()=>({render:be,startRendering:Je,stopRendering:ot})),sn(()=>{pe=oi(G,e.style,pe,{position:"absolute",transform:c()?"translate3d(-50%,-50%,0)":"none",top:u()?`${-S(ct)/2}px`:void 0,left:u()?`${-S(at)/2}px`:void 0,width:u()?`${S(at)}px`:void 0,height:u()?`${S(ct)}px`:void 0}),Ni(G,1,Ef(e.class))}),We(q,G)};Ct(b,q=>{f()?q(N):q(X,!1)})}We(j,C)}),We(r,me);var se=Qn(Q);return o(),se}const ZR="Right",KR="Top",jR="Front",JR="Left",QR="Bottom",eI="Back";[ZR,KR,jR,JR,QR,eI].map(r=>r.toLocaleLowerCase());new Xt;new L;xe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ne(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ai.line={uniforms:Cd.merge([xe.common,xe.fog,xe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new yt;new L;new L;new yt;new yt;new yt;new L;new Ve;new r_;new L;new Xt;new qt;new yt;new Ve;new Ve;new kt;`${Ze.logdepthbuf_pars_vertex}${Ze.fog_pars_vertex}${Ze.logdepthbuf_vertex}${Ze.fog_vertex}`;`${Ze.tonemapping_fragment}${Ze.colorspace_fragment}`;`${Ze.tonemapping_fragment}${Ze.colorspace_fragment}`;const tI=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,nI=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,iI=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,rI=iI,sI=`
	${tI}
	${nI}
`;`${rI}${sI}${Ze.tonemapping_fragment}${Ze.colorspace_fragment}`;new Xt;typeof window<"u"&&document.createElement("div");const oI=r=>{const{camera:e}=vl();let t=r.current.clientWidth,n=r.current.clientHeight;const i=new ResizeObserver(([s])=>{t=s.contentRect.width,n=s.contentRect.height});return _i(r,s=>(s&&i.observe(s),()=>{s&&i.unobserve(s)})),(s,o)=>{o.pointer.update(a=>(a.set(s.offsetX/t*2-1,-(s.offsetY/n)*2+1),a)),o.raycaster.setFromCamera(o.pointer.current,e.current)}},E_=Symbol("interactivity-context"),aI=()=>vn(E_),lI=r=>{const e=Ht(hh().dom),t={enabled:Ht(!0),pointer:Ht(new ne),pointerOverTarget:Ht(!1),lastEvent:void 0,raycaster:new sp,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:e,handlers:new WeakMap,compute:oI(e),filter:r?.filter,addInteractiveObject:(n,i)=>{t.interactiveObjects.indexOf(n)>-1||(t.handlers.set(n,i),t.interactiveObjects.push(n))},removeInteractiveObject:n=>{const i=t.interactiveObjects.indexOf(n);t.interactiveObjects.splice(i,1),t.handlers.delete(n)}};return Vn(E_,t),t},A_=()=>{const r=aI();if(!r)throw new Error("No interactivity context found. Did you forget to implement interactivity()?");return r},Sg=["onclick","oncontextmenu","ondblclick","onwheel","onpointerup","onpointerdown","onpointerover","onpointerout","onpointerenter","onpointerleave","onpointermove","onpointermissed"],cI=()=>{XC("interactivity",r=>{if(!Sn(r.ref,"Object3D")||!Object.entries(r.props).some(([i,s])=>s!==void 0&&Sg.includes(i)))return;const{addInteractiveObject:t,removeInteractiveObject:n}=A_();return rC.pre(()=>[r.ref],([i])=>(t(i,r.props),()=>{n(i)})),{pluginProps:Sg}})};function wg(r){return`${(r.eventObject||r.object).uuid}|${r.index}|${r.instanceId}`}const Tg=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],uI=r=>{const{handlers:e}=A_(),t=p=>{const y=p.offsetX-r.initialClick[0],_=p.offsetY-r.initialClick[1];return Math.round(Math.hypot(y,_))},n=p=>{if(r.hovered.size===0)return;const y=new Set;for(const _ of p)y.add(wg(_));for(const[_,x]of r.hovered)if(!y.has(_)){const{eventObject:w}=x;r.hovered.delete(_);const E=e.get(w);if(E){const A={...x,intersections:p};E.onpointerout?.(A),E.onpointerleave?.(A)}}},i=()=>{if(!r.enabled.current)return[];const p=[],y=r.raycaster.intersectObjects(r.interactiveObjects,!0),_=r.filter===void 0?y:r.filter(y,r);for(const x of _){let w=x.object;for(;w;)e.has(w)&&p.push({...x,eventObject:w}),w=w.parent}return p},s=(p,y)=>{for(const _ of y)e.get(_)?.onpointermissed?.(p)},o=()=>{r.pointerOverTarget.set(!1),n([])},a=()=>{r.pointerOverTarget.set(!0)},l=p=>{const y=p.type,_=y==="pointermove",x=y==="click"||y==="contextmenu"||y==="dblclick";r.compute(p,r);const w=i(),E=x?t(p):0;y==="pointerdown"&&(r.initialClick=[p.offsetX,p.offsetY],r.initialHits=w.map(I=>I.eventObject)),x&&w.length===0&&E<=2&&s(p,r.interactiveObjects),_&&n(w);let A=!1;e:for(const I of w){const M=e.get(I.eventObject);if(!M)continue;const T={stopped:A,...I,intersections:w,stopPropagation(){if(A=!0,T.stopped=!0,r.hovered.size>0&&Array.from(r.hovered.values()).some(D=>D.eventObject===I.eventObject)){const D=w.slice(0,w.indexOf(I));n([...D,I])}},camera:r.raycaster.camera,delta:E,nativeEvent:p,pointer:r.pointer.current,ray:r.raycaster.ray};if(_){if(M.onpointerover||M.onpointerenter||M.onpointerout||M.onpointerleave){const D=wg(T),O=r.hovered.get(D);O?O.stopped&&T.stopPropagation():(r.hovered.set(D,T),M.onpointerover?.(T),M.onpointerenter?.(T))}M.onpointermove?.(T)}else M[`on${y}`]?(!x||r.initialHits.includes(I.eventObject))&&(s(p,r.interactiveObjects.filter(D=>!r.initialHits.includes(D))),M[`on${y}`]?.(T)):x&&r.initialHits.includes(I.eventObject)&&s(p,r.interactiveObjects.filter(D=>!r.initialHits.includes(D)));if(A)break e}};let c=0,u=null,h=-1/0,f=-1/0;const d=.25,m=p=>{Math.abs(p.offsetX-h)<d&&Math.abs(p.offsetY-f)<d||(h=p.offsetX,f=p.offsetY,u=p,c||(c=requestAnimationFrame(()=>{c=0,u&&(l(u),u=null)})))},v=p=>{for(const[y]of Tg)y==="pointerleave"||y==="pointercancel"?p.removeEventListener(y,o):y==="pointermove"?p.removeEventListener(y,m):y==="pointerenter"?p.removeEventListener(y,a):p.removeEventListener(y,l)},g=p=>{for(const[y,_]of Tg)y==="pointerleave"||y==="pointercancel"?p.addEventListener(y,o,{passive:_}):y==="pointermove"?p.addEventListener(y,m,{passive:_}):y==="pointerenter"?p.addEventListener(y,a,{passive:_}):p.addEventListener(y,l,{passive:_})};_i(r.target,p=>(p&&g(p),()=>{p&&v(p)}))},hI=r=>{const e=lI(r);return cI(),uI(e),e};for(let r=0;r<256;r++)(r<16?"0":"")+r.toString(16);new Xs(-1,1,1,-1,0,1);class fI extends et{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}new fI;var C_={exports:{}};C_.exports=mh;C_.exports.default=mh;function mh(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=R_(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,c,u,h,f,d;if(n&&(s=vI(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(var m=t;m<i;m+=t)h=r[m],f=r[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Ja(s,o,t,a,l,d,0),o}function R_(r,e,t,n,i){var s,o;if(i===Qf(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Eg(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Eg(s,r[s],r[s+1],o);return o&&gh(o,o.next)&&(el(o),o=o.next),o}function Os(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(gh(t,t.next)||Ft(t.prev,t,t.next)===0)){if(el(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ja(r,e,t,n,i,s,o){if(r){!o&&s&&MI(r,n,i,s);for(var a=r,l,c;r.prev!==r.next;){if(l=r.prev,c=r.next,s?pI(r,n,i,s):dI(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),el(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=mI(Os(r),e,t),Ja(r,e,t,n,i,s,2)):o===2&&gI(r,e,t,n,i,s):Ja(Os(r),e,t,n,i,s,1);break}}}}function dI(r){var e=r.prev,t=r,n=r.next;if(Ft(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&Mo(i,a,s,l,o,c,m.x,m.y)&&Ft(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function pI(r,e,t,n){var i=r.prev,s=r,o=r.next;if(Ft(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,v=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,p=jf(d,m,e,t,n),y=jf(v,g,e,t,n),_=r.prevZ,x=r.nextZ;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Mo(a,u,l,h,c,f,_.x,_.y)&&Ft(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Mo(a,u,l,h,c,f,x.x,x.y)&&Ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Mo(a,u,l,h,c,f,_.x,_.y)&&Ft(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Mo(a,u,l,h,c,f,x.x,x.y)&&Ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function mI(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!gh(i,s)&&I_(i,n,n.next,s)&&Qa(i,s)&&Qa(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),el(n),el(n.next),n=r=s),n=n.next}while(n!==r);return Os(n)}function gI(r,e,t,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&TI(o,a)){var l=P_(o,a);o=Os(o,o.next),l=Os(l,l.next),Ja(o,e,t,n,i,s,0),Ja(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function vI(r,e,t,n){var i=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=R_(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(wI(c));for(i.sort(_I),s=0;s<i.length;s++)t=xI(i[s],t);return t}function _I(r,e){return r.x-e.x}function xI(r,e){var t=yI(r,e);if(!t)return e;var n=P_(t,r);return Os(n,n.next),Os(t,t.next)}function yI(r,e){var t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var l=o,c=o.x,u=o.y,h=1/0,f;t=o;do n>=t.x&&t.x>=c&&n!==t.x&&Mo(i<u?n:s,i,c,u,i<u?s:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),Qa(t,r)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&bI(o,t)))&&(o=t,h=f)),t=t.next;while(t!==l);return o}function bI(r,e){return Ft(r.prev,r,e.prev)<0&&Ft(e.next,r,r.next)<0}function MI(r,e,t,n){var i=r;do i.z===0&&(i.z=jf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,SI(i)}function SI(r){var e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function jf(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function wI(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Mo(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function TI(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!EI(r,e)&&(Qa(r,e)&&Qa(e,r)&&AI(r,e)&&(Ft(r.prev,r,e.prev)||Ft(r,e.prev,e))||gh(r,e)&&Ft(r.prev,r,r.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function gh(r,e){return r.x===e.x&&r.y===e.y}function I_(r,e,t,n){var i=pc(Ft(r,e,t)),s=pc(Ft(r,e,n)),o=pc(Ft(t,n,r)),a=pc(Ft(t,n,e));return!!(i!==s&&o!==a||i===0&&dc(r,t,e)||s===0&&dc(r,n,e)||o===0&&dc(t,r,n)||a===0&&dc(t,e,n))}function dc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function pc(r){return r>0?1:r<0?-1:0}function EI(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&I_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Qa(r,e){return Ft(r.prev,r,r.next)<0?Ft(r,e,r.next)>=0&&Ft(r,r.prev,e)>=0:Ft(r,e,r.prev)<0||Ft(r,r.next,e)<0}function AI(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function P_(r,e){var t=new Jf(r.i,r.x,r.y),n=new Jf(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Eg(r,e,t,n){var i=new Jf(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function el(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Jf(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}mh.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,o=Math.abs(Qf(r,0,s,t));if(i)for(var a=0,l=e.length;a<l;a++){var c=e[a]*t,u=a<l-1?e[a+1]*t:r.length;o-=Math.abs(Qf(r,c,u,t))}var h=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,d=n[a+1]*t,m=n[a+2]*t;h+=Math.abs((r[f]-r[m])*(r[d+1]-r[f+1])-(r[f]-r[d])*(r[m+1]-r[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function Qf(r,e,t,n){for(var i=0,s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}mh.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};new ne;new ne;var Ag;(r=>{function e(i){let s=i.slice();return s.sort(r.POINT_COMPARATOR),r.makeHullPresorted(s)}r.makeHull=e;function t(i){if(i.length<=1)return i.slice();let s=[];for(let a=0;a<i.length;a++){const l=i[a];for(;s.length>=2;){const c=s[s.length-1],u=s[s.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))s.pop();else break}s.push(l)}s.pop();let o=[];for(let a=i.length-1;a>=0;a--){const l=i[a];for(;o.length>=2;){const c=o[o.length-1],u=o[o.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))o.pop();else break}o.push(l)}return o.pop(),s.length==1&&o.length==1&&s[0].x==o[0].x&&s[0].y==o[0].y?s:s.concat(o)}r.makeHullPresorted=t;function n(i,s){return i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0}r.POINT_COMPARATOR=n})(Ag||(Ag={}));new Rn;new L;new Ve;new Gr;new qt;new Xt;new L;new L;var CI=lt("<!> <!> <!> <!> <!> <!> <!>",1);function RI(r,e){Jn(e,!1);const t=()=>Ea(l,"$iglooGltf",n),[n,i]=cd();rt(e,"scrollProgress",8,0);let s=rt(e,"visible",8,!0),o=rt(e,"opacity",8,1),a=0;const l=S_("/models/igloo/igloo.gltf"),c=ze(new Rn({color:new ye(.4,.9,1),transparent:!0,opacity:.7,side:wn})),u=new ul(.6,32);Ns(m=>{if(a+=m,S(c)){const v=Math.sin(a*1.5)*.2+.7;Di(c,S(c).opacity=o()*v)}}),ft(()=>(t(),on(o()),ap),()=>{t()&&(console.log("Igloo loaded:",t()),t().scene.traverse(m=>{m.isMesh&&m.material&&((Array.isArray(m.material)?m.material:[m.material]).forEach(g=>{g.transparent=!0,g.opacity=o(),g.color=new ye(.92,.95,1),g.emissive=new ye(.1,.12,.18),g.emissiveIntensity=.3,g.roughness=.6,g.metalness=.1,g.side=wn,g.needsUpdate=!0}),m.castShadow=!0,m.receiveShadow=!0)}))}),zr(),pr();var h=On(),f=bt(h);{var d=m=>{var v=CI(),g=bt(v);Xe.Group(g,{position:[4,-.3,-4],scale:[.3,.3,.3],rotation:Qe(()=>[Math.PI/-1,.1,Math.PI/1]),children:(A,I)=>{Xe(A,{get is(){return t(),Qe(()=>t().scene)}})},$$slots:{default:!0}});var p=Ie(g,2);Xe.DirectionalLight(p,{position:[5,10,5],intensity:2,color:16777215});var y=Ie(p,2);Xe.PointLight(y,{position:[0,5,3],color:16777215,intensity:1.5,distance:15,decay:1});var _=Ie(y,2);Xe.SpotLight(_,{position:[0,8,5],"target-position":[0,,0],angle:.6,penumbra:.5,intensity:2,color:16777215,castShadow:!0});var x=Ie(_,2);Xe.Mesh(x,{get geometry(){return u},get material(){return S(c)},position:[1.2,.6,1.2],rotation:Qe(()=>[0,Math.PI*.75,0])});var w=Ie(x,2);{let A=ut(()=>2*o());Xe.PointLight(w,{position:[1.5,.6,1.5],color:6743551,get intensity(){return S(A)},distance:5,decay:2})}var E=Ie(w,2);{let A=ut(()=>1*o());Xe.PointLight(E,{position:[0,.8,0],color:5097704,get intensity(){return S(A)},distance:4,decay:2})}We(m,v)};Ct(f,m=>{s()&&t()&&m(d)})}We(r,h),Qn(),i()}var II=lt("<!> <!> <!> <!>",1);function PI(r,e){Jn(e,!1);let t=rt(e,"opacity",8,1),n=ze(null),i=ze(!1);mr(()=>{new y_().load("/models/mountain/scene.gltf",c=>{console.log("Mountain GLTF loaded successfully:",c),de(n,c.scene),S(n).traverse(u=>{u.isMesh&&u.material&&((Array.isArray(u.material)?u.material:[u.material]).forEach(f=>{f.transparent=!0,f.opacity=t()}),u.castShadow=!0,u.receiveShadow=!0)}),de(i,!0)},c=>{console.log("Loading mountain:",(c.loaded/c.total*100).toFixed(1)+"%")},c=>{console.error("Error loading mountain GLTF:",c)})}),Ns(l=>{}),ft(()=>(S(n),S(i),on(t())),()=>{S(n)&&S(i)&&S(n).traverse(l=>{l.isMesh&&l.material&&(Array.isArray(l.material)?l.material:[l.material]).forEach(u=>{u.opacity=t(),u.needsUpdate=!0})})}),zr(),pr();var s=On(),o=bt(s);{var a=l=>{var c=II(),u=bt(c);Xe.Group(u,{position:[0,-3.5,0],scale:[50,15,50],rotation:[0,0,0],children:(m,v)=>{Xe(m,{get is(){return S(n)}})},$$slots:{default:!0}});var h=Ie(u,2);Xe.Group(h,{position:[0,-10,-60],scale:[200,200,200],rotation:[0,0,0],children:(m,v)=>{{let g=ut(()=>(S(n),Qe(()=>S(n).clone())));Xe(m,{get is(){return S(g)}})}},$$slots:{default:!0}});var f=Ie(h,2);Xe.Group(f,{position:[50,-12,-70],scale:[180,180,180],rotation:[0,.3,0],children:(m,v)=>{{let g=ut(()=>(S(n),Qe(()=>S(n).clone())));Xe(m,{get is(){return S(g)}})}},$$slots:{default:!0}});var d=Ie(f,2);Xe.Group(d,{position:[-50,-11,-65],scale:[170,170,170],rotation:[0,-.3,0],children:(m,v)=>{{let g=ut(()=>(S(n),Qe(()=>S(n).clone())));Xe(m,{get is(){return S(g)}})}},$$slots:{default:!0}}),We(l,c)};Ct(o,l=>{S(i)&&S(n)&&l(a)})}We(r,s),Qn()}var LI=lt("<!> <!>",1),DI=lt("<!> <!>",1),NI=lt("<!> <!>",1),UI=lt("<!> <!>",1),OI=lt("<!> <!>",1),FI=lt('<div><svg class="connector-line" width="60" height="40" viewBox="0 0 60 40"><line x1="0" y1="40" x2="50" y2="10" stroke="currentColor" stroke-width="1" opacity="0.4"></line><circle cx="50" cy="10" r="2" fill="currentColor" opacity="0.6"></circle></svg> <div class="label-text"><span class="label-id"> </span> <span class="label-name"> </span></div></div>'),BI=lt('<div><div class="data-block"><span class="data-label">TEMP</span> <span class="data-value"> </span> <span class="data-value secondary"> </span></div></div>'),kI=lt('<div><svg class="connector-line bottom" width="50" height="35" viewBox="0 0 50 35"><line x1="50" y1="0" x2="10" y2="25" stroke="currentColor" stroke-width="1" opacity="0.4"></line><circle cx="10" cy="25" r="2" fill="currentColor" opacity="0.6"></circle></svg> <div class="label-text bottom"><span class="label-date"> </span> <span class="label-action">CLICK TO EXPLORE</span></div></div>'),zI=lt('<div><svg width="30" height="30" viewBox="0 0 30 30"><path d="M0 8 L0 0 L8 0" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"></path><path d="M22 0 L30 0 L30 8" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"></path></svg></div>'),VI=lt('<div><svg width="30" height="30" viewBox="0 0 30 30"><path d="M0 22 L0 30 L8 30" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"></path><path d="M22 30 L30 30 L30 22" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"></path></svg></div>'),GI=lt("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1),HI=lt("<!> <!>",1);function WI(r,e){Jn(e,!1);const t=()=>Ea(a,"$rockGltf",n),[n,i]=cd(),s=ze(),o=ze(),a=S_("/models/rock/scene.gltf");let l=rt(e,"opacity",8,1);rt(e,"scrollProgress",8,0);let c=rt(e,"currentSection",8,0);rt(e,"transitionProgress",8,0),rt(e,"caveDepthProgress",8,0);let u=rt(e,"stones",24,()=>[]),h=rt(e,"modalOpen",8,!1);const f=Iu();let d=ze(0);const m=[{x:0,y:1.5,z:0},{x:0,y:1.5,z:-7},{x:0,y:1.5,z:-14},{x:0,y:1.5,z:-21}];let v=ze(-1);function g(T,D=2){let O;switch(T){case"dodecahedron":O=new Go(D,2);break;case"icosahedron":O=new dl(D,2);break;case"octahedron":O=new jo(D*1.1,2);break;case"tetrahedron":O=new ml(D*1.2,2);break;default:O=new Go(D,2)}const k=O.attributes.position;for(let F=0;F<k.count;F++){const V=k.getX(F),H=k.getY(F),U=k.getZ(F),Z=Math.sin(V*2.5)*Math.cos(H*2.5)*Math.sin(U*2.5)*.12,ce=Math.sin(V*5+H*4)*Math.cos(U*3)*.06,ae=Math.sin(V*8)*Math.sin(H*8)*Math.sin(U*8)*.03,ue=1+Z+ce+ae;k.setX(F,V*ue),k.setY(F,H*ue),k.setZ(F,U*ue)}return k.needsUpdate=!0,O.computeVertexNormals(),O}let p=ze({}),y=ze(!1);mr(()=>{u().forEach((T,D)=>{Di(p,S(p)[D]=g(T.geometry))}),de(y,!0)}),Ns(T=>{de(d,S(d)+T)});function _(T,D){h()||f("stoneClick",T)}function x(T){de(v,T),document.body.style.cursor="pointer"}function w(){de(v,-1),document.body.style.cursor="default"}function E(){const T=new Date;return`${String(T.getMonth()+1).padStart(2,"0")}.${String(T.getDate()).padStart(2,"0")}.${T.getFullYear()}`}ft(()=>on(c()),()=>{de(s,c()===3||c()===4?0:c()===5||c()===6?1:c()===7||c()===8?2:c()===9?3:0)}),ft(()=>{},()=>{de(o,!0)}),ft(()=>(on(u()),S(p)),()=>{u().length>0&&Object.keys(S(p)).length===0&&(u().forEach((T,D)=>{Di(p,S(p)[D]=g(T.geometry))}),de(y,!0))}),zr(),pr();var A=HI(),I=bt(A);Xe.Mesh(I,{"rotation.x":Qe(()=>-Math.PI/2),"position.y":-.5,"position.z":-10,receiveShadow:!0,children:(T,D)=>{var O=LI(),k=bt(O);Xe.PlaneGeometry(k,{args:[80,120]});var F=Ie(k,2);Xe.MeshStandardMaterial(F,{color:9079434,roughness:.85,metalness:.05,transparent:!0,get opacity(){return l()}}),We(T,O)},$$slots:{default:!0}});var M=Ie(I,2);Sc(M,1,u,Mc,(T,D,O)=>{const k=ut(()=>Qe(()=>m[O]||{x:0,y:1.5,z:0})),F=ut(()=>S(v)===O),V=ut(()=>(S(d),Qe(()=>Math.sin(S(d)*.4+O*1.5)*.06))),H=ut(()=>(S(d),Qe(()=>S(d)*.12+O*Math.PI*.5))),U=ut(()=>(S(d),Qe(()=>Math.sin(S(d)*.15+O)*.08))),Z=ut(()=>O===0&&c()>=3&&c()<=4||O===1&&c()>=4&&c()<=6||O===2&&c()>=6&&c()<=8||O===3&&c()>=8&&c()<=10);var ce=On(),ae=bt(ce);{var ue=Be=>{{let Ue=ut(()=>(on(S(k)),on(S(V)),Qe(()=>[S(k).x,S(k).y+S(V),S(k).z])));Xe.Group(Be,{get position(){return S(Ue)},children:(at,ct)=>{var J=GI(),re=bt(J);{var Se=P=>{var Ae=DI(),se=bt(Ae);{let j=ut(()=>S(F)?2.8:2.6);Xe.Group(se,{get"rotation.y"(){return S(H)},get"rotation.x"(){return S(U)},"rotation.z":O*.3,get scale(){return S(j)},$$events:{click:()=>_(S(D)),pointerenter:()=>x(O),pointerleave:w},children:(C,b)=>{var N=On(),X=bt(N);Sc(X,1,()=>(t(),Qe(()=>Object.values(t().nodes))),Mc,(q,G)=>{var pe=On(),he=bt(pe);{var Pe=Fe=>{Xe.Mesh(Fe,{get geometry(){return S(G),Qe(()=>S(G).geometry)},castShadow:!0,receiveShadow:!0,children:(oe,ge)=>{Xe.MeshStandardMaterial(oe,{get map(){return S(G),Qe(()=>S(G).material.map)},get roughnessMap(){return S(G),Qe(()=>S(G).material.roughnessMap)},get metalnessMap(){return S(G),Qe(()=>S(G).material.metalnessMap)},get aoMap(){return S(G),Qe(()=>S(G).material.aoMap)},roughness:.65,metalness:.15,envMapIntensity:.6})},$$slots:{default:!0}})};Ct(he,Fe=>{S(G),Qe(()=>S(G).isMesh)&&Fe(Pe)})}We(q,pe)}),We(C,N)},$$slots:{default:!0}})}var $=Ie(se,2);{let j=ut(()=>S(F)?4:2);Xe.SpotLight($,{position:[0,4,2],"target-position":[0,0,0],angle:.5,penumbra:.5,get intensity(){return S(j)},color:15266047,castShadow:!0,distance:12})}We(P,Ae)},ke=P=>{{let Ae=ut(()=>S(F)?2.1:2);Xe.Mesh(P,{get"rotation.y"(){return S(H)},get"rotation.x"(){return S(U)},get scale(){return S(Ae)},castShadow:!0,receiveShadow:!0,$$events:{click:()=>_(S(D)),pointerenter:()=>x(O),pointerleave:w},children:(se,$)=>{var j=NI(),C=bt(j);Xe.IcosahedronGeometry(C,{args:[1,2]});var b=Ie(C,2);Xe.MeshStandardMaterial(b,{get color(){return S(D),Qe(()=>S(D).color)},roughness:.3,metalness:.7,transparent:!0,opacity:.95}),We(se,j)},$$slots:{default:!0}})}};Ct(re,P=>{t()?P(Se):P(ke,!1)})}var be=Ie(re,2);Xe.Mesh(be,{scale:.6,get"rotation.y"(){return S(H)},get"rotation.x"(){return S(U)},children:(P,Ae)=>{var se=UI(),$=bt(se);Xe.SphereGeometry($,{args:[2,16,16]});var j=Ie($,2);{let C=ut(()=>.08*l());Xe.MeshBasicMaterial(j,{color:5925498,transparent:!0,get opacity(){return S(C)}})}We(P,se)},$$slots:{default:!0}});var Je=Ie(be,2);{let P=ut(()=>S(F)?1.3:1.2);Xe.Mesh(Je,{get scale(){return S(P)},children:(Ae,se)=>{var $=OI(),j=bt($);Xe.SphereGeometry(j,{args:[2.4,32,32]});var C=Ie(j,2);{let b=ut(()=>S(F)?10136234:6978186),N=ut(()=>(S(F)?.08:.03)*l());Xe.MeshBasicMaterial(C,{get color(){return S(b)},transparent:!0,get opacity(){return S(N)},get side(){return on(ap),Qe(()=>pn)}})}We(Ae,$)},$$slots:{default:!0}})}var ot=Ie(Je,2);{let P=ut(()=>S(F)?2.5:1);Xe.PointLight(ot,{color:15790320,get intensity(){return S(P)},distance:10,decay:2})}var qe=Ie(ot,2);_a(qe,{position:[-3,2.2,0],transform:!0,occlude:!1,style:"pointer-events: none;",children:(P,Ae)=>{var se=FI();let $;var j=Ie(dt(se),2),C=dt(j),b=dt(C),N=Ie(C,2),X=dt(N);sn((q,G)=>{$=Ni(se,1,"stone-label-container top-left",null,$,{hovered:S(F)}),tr(b,`PORTFOLIO_CO_${q??""}`),tr(X,G)},[()=>Qe(()=>String(O+1).padStart(2,"0")),()=>(S(D),Qe(()=>S(D).name.toUpperCase().replace(" ","_")))]),We(P,se)},$$slots:{default:!0}});var ee=Ie(qe,2);_a(ee,{position:[3.5,.8,0],transform:!0,occlude:!1,style:"pointer-events: none;",children:(P,Ae)=>{var se=BI();let $;var j=dt(se),C=Ie(dt(j),2),b=dt(C),N=Ie(C,2),X=dt(N);sn((q,G)=>{$=Ni(se,1,"stone-label-container right-data",null,$,{hovered:S(F)}),tr(b,q),tr(X,G)},[()=>Qe(()=>(25+Math.sin(O*2)*8).toFixed(2)),()=>Qe(()=>(-3+Math.cos(O*2)*4).toFixed(2))]),We(P,se)},$$slots:{default:!0}});var te=Ie(ee,2);_a(te,{position:[2.5,-1.8,0],transform:!0,occlude:!1,style:"pointer-events: none;",children:(P,Ae)=>{var se=kI();let $;var j=Ie(dt(se),2),C=dt(j),b=dt(C);sn(N=>{$=Ni(se,1,"stone-label-container bottom-right",null,$,{hovered:S(F)}),tr(b,`D ${N??""}`)},[()=>Qe(E)]),We(P,se)},$$slots:{default:!0}});var Q=Ie(te,2);_a(Q,{position:[2.8,2,0],transform:!0,occlude:!1,style:"pointer-events: none;",children:(P,Ae)=>{var se=zI();let $;sn(()=>$=Ni(se,1,"corner-bracket tr",null,$,{hovered:S(F)})),We(P,se)},$$slots:{default:!0}});var me=Ie(Q,2);_a(me,{position:[-2.8,-1.5,0],transform:!0,occlude:!1,style:"pointer-events: none;",children:(P,Ae)=>{var se=VI();let $;sn(()=>$=Ni(se,1,"corner-bracket bl",null,$,{hovered:S(F)})),We(P,se)},$$slots:{default:!0}}),We(at,J)},$$slots:{default:!0}})}};Ct(ae,Be=>{S(Z)&&Be(ue)})}We(T,ce)}),We(r,A),Qn(),i()}var XI=lt("<!> <!> <!> <!>",1),qI=lt("<!> <!> <!> <!> <!> <!>",1),YI=lt("<!> <!>",1),$I=lt("<!> <!> <!>  <!>  <!>  <!>  <!>",1);function ZI(r,e){Jn(e,!1);const t=ze(),n=ze(),i=ze(),s=ze(),o=ze(),a=ze(),l=ze(),c=ze(),u=ze(),h=ze(),f=ze(),d=ze(),m=ze(),v=ze(),g=ze(),p=ze(),y=ze(),_=ze();hI();let x=rt(e,"scrollProgress",8,0),w=rt(e,"currentSection",8,0),E=rt(e,"mousePosition",24,()=>({x:.5,y:.5})),A=rt(e,"stones",24,()=>[]),I=rt(e,"modalOpen",8,!1);const M=Iu();let T=ze();const D=.05,O=.12,k=.12,F={x:9,y:5,z:9},V={x:3,y:-10,z:6},H={x:0,y:2,z:4},U={x:0,y:1.5,z:-24};function Z($,j,C){return $+(j-$)*C}function ce($){return $<.5?4*$*$*$:1-Math.pow(-2*$+2,3)/2}let ae=ze(F.x),ue=ze(F.y),Be=ze(F.z);Ns(()=>{S(T)&&S(T).lookAt(0,S(f),S(d))}),Ns($=>{});const Ue={r:180,g:195,b:215},at={r:180,g:180,b:180},ct={r:180,g:195,b:215},J={r:180,g:180,b:180};function re($,j,C){return{r:Math.round($.r+(j.r-$.r)*C),g:Math.round($.g+(j.g-$.g)*C),b:Math.round($.b+(j.b-$.b)*C)}}function Se($){M("stoneClick",$.detail)}ft(()=>on(x()),()=>{de(t,Math.min(1,Math.max(0,(x()-D)/(O-D))))}),ft(()=>on(x()),()=>{de(n,x()>k?Math.min(1,(x()-k)/(.63-k)):0)}),ft(()=>S(t),()=>{de(i,1-S(t))}),ft(()=>S(t),()=>{de(s,S(t)<.99)}),ft(()=>S(t),()=>{de(o,S(t))}),ft(()=>S(t),()=>{de(a,S(t)>.01)}),ft(()=>S(t),()=>{de(l,1-S(t)*.6)}),ft(()=>S(t),()=>{de(c,S(t)*15)}),ft(()=>S(t),()=>{de(u,-S(t)*10)}),ft(()=>S(t),()=>{de(h,ce(S(t)))}),ft(()=>(on(x()),on(E()),S(h),S(n)),()=>{if(x()<D)de(ae,F.x+(E().x-.5)*2),de(ue,F.y+(E().y-.5)*1),de(Be,F.z);else if(x()<O){const $=S(h);de(ae,Z(F.x,V.x,$)+(E().x-.5)*(2-$)),de(ue,Z(F.y,V.y,$)+(E().y-.5)*(1-$*.5)),de(Be,Z(F.z,V.z,$))}else{const $=Math.min(1,(x()-O)/.05),j=Z(V.x,H.x,$),C=Z(V.y,H.y,$),b=Z(V.z,H.z,$),N=S(n);de(ae,Z(j,U.x,N)+(E().x-.5)*.5),de(ue,Z(C,U.y,N)+(E().y-.5)*.3),de(Be,Z(b,U.z,N))}}),ft(()=>S(h),()=>{de(f,Z(2,1.5,S(h)))}),ft(()=>(S(n),S(t)),()=>{de(d,Z(0,-5*S(n),S(t)))}),ft(()=>S(h),()=>{de(m,re(Ue,at,S(h)))}),ft(()=>S(m),()=>{de(v,`rgb(${S(m).r}, ${S(m).g}, ${S(m).b})`)}),ft(()=>S(h),()=>{de(g,re(ct,J,S(h)))}),ft(()=>S(g),()=>{de(p,`rgb(${S(g).r}, ${S(g).g}, ${S(g).b})`)}),ft(()=>S(h),()=>{de(y,Z(80,60,S(h)))}),ft(()=>S(h),()=>{de(_,Z(200,150,S(h)))}),zr(),pr();var ke=$I(),be=bt(ke);{let $=ut(()=>[S(ae),S(ue),S(Be)]),j=ut(()=>(S(h),Qe(()=>Z(45,55,S(h)))));Xe.PerspectiveCamera(be,{makeDefault:!0,get position(){return S($)},get fov(){return S(j)},near:.1,far:250,get ref(){return S(T)},set ref(C){de(T,C)},$$legacy:!0})}var Je=Ie(be,2);{let $=ut(()=>[S(v)]);Xe.Color(Je,{attach:"background",get args(){return S($)}})}var ot=Ie(Je,2);{let $=ut(()=>[S(p),S(y),S(_)]);Xe.Fog(ot,{attach:"fog",get args(){return S($)}})}var qe=Ie(ot,2);{var ee=$=>{var j=XI(),C=bt(j);{let q=ut(()=>2*S(i));Xe.DirectionalLight(C,{position:[5,8,5],get intensity(){return S(q)},color:16777215,castShadow:!0})}var b=Ie(C,2);{let q=ut(()=>1.5*S(i));Xe.DirectionalLight(b,{position:[-5,10,-5],get intensity(){return S(q)},color:16316666})}var N=Ie(b,2);{let q=ut(()=>.4*S(i));Xe.DirectionalLight(N,{position:[6,5,-4],get intensity(){return S(q)},color:14213360})}var X=Ie(N,2);{let q=ut(()=>.35*S(i));Xe.AmbientLight(X,{get intensity(){return S(q)},color:11055296})}We($,j)};Ct(qe,$=>{S(s)&&$(ee)})}var te=Ie(qe,2);{var Q=$=>{var j=qI(),C=bt(j);{let pe=ut(()=>.6*S(o));Xe.AmbientLight(C,{get intensity(){return S(pe)},color:11579568})}var b=Ie(C,2);{let pe=ut(()=>1.5*S(o));Xe.DirectionalLight(b,{position:[5,10,5],get intensity(){return S(pe)},color:16777215,castShadow:!0})}var N=Ie(b,2);{let pe=ut(()=>.8*S(o));Xe.DirectionalLight(N,{position:[-5,8,-5],get intensity(){return S(pe)},color:15263976})}var X=Ie(N,2);{let pe=ut(()=>1.2*S(o));Xe.PointLight(X,{position:[0,5,0],get intensity(){return S(pe)},color:16777215,distance:20,decay:2})}var q=Ie(X,2);{let pe=ut(()=>1*S(o));Xe.PointLight(q,{position:[0,5,-10],get intensity(){return S(pe)},color:15790320,distance:20,decay:2})}var G=Ie(q,2);{let pe=ut(()=>1*S(o));Xe.PointLight(G,{position:[0,5,-20],get intensity(){return S(pe)},color:15790320,distance:20,decay:2})}We($,j)};Ct(te,$=>{S(a)&&$(Q)})}var me=Ie(te,2);{var P=$=>{{let j=ut(()=>[0,S(c),S(u)]),C=ut(()=>[S(l),S(l),S(l)]);Xe.Group($,{get position(){return S(j)},get scale(){return S(C)},children:(b,N)=>{var X=YI(),q=bt(X);PI(q,{get opacity(){return S(i)}});var G=Ie(q,2);RI(G,{get scrollProgress(){return x()},visible:!0,get opacity(){return S(i)}}),We(b,X)},$$slots:{default:!0}})}};Ct(me,$=>{S(s)&&$(P)})}var Ae=Ie(me,2);{var se=$=>{WI($,{get opacity(){return S(o)},get scrollProgress(){return x()},get currentSection(){return w()},get transitionProgress(){return S(t)},get caveDepthProgress(){return S(n)},get stones(){return A()},get modalOpen(){return I()},$$events:{stoneClick:Se}})};Ct(Ae,$=>{S(a)&&$(se)})}We(r,ke),Qn()}var KI=lt('<div class="scene-container svelte-r8xqwj"><!></div>');function jI(r,e){Jn(e,!1);let t=rt(e,"scrollProgress",8,0),n=rt(e,"currentSection",8,0),i=rt(e,"stones",24,()=>[]),s=rt(e,"modalOpen",8,!1);const o=Iu();let a=ze({x:.5,y:.5}),l={x:.5,y:.5},c=ze(!1);function u(p,y,_){return p+(y-p)*_}function h(p){l={x:p.clientX/window.innerWidth,y:p.clientY/window.innerHeight}}function f(){Di(a,S(a).x=u(S(a).x,l.x,.03)),Di(a,S(a).y=u(S(a).y,l.y,.03)),requestAnimationFrame(f)}function d(p){o("stoneClick",p.detail)}mr(()=>(de(c,!0),f(),window.addEventListener("mousemove",h),()=>{window.removeEventListener("mousemove",h)})),pr();var m=KI(),v=dt(m);{var g=p=>{EC(p,{children:(y,_)=>{ZI(y,{get scrollProgress(){return t()},get currentSection(){return n()},get mousePosition(){return S(a)},get stones(){return i()},get modalOpen(){return s()},$$events:{stoneClick:d}})},$$slots:{default:!0}})};Ct(v,p=>{S(c)&&p(g)})}We(r,m),Qn()}var JI=lt(`<div class="modal-backdrop svelte-5awcn0" role="button" tabindex="-1" aria-label="Close modal"><div class="modal-content svelte-5awcn0" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="close-btn svelte-5awcn0" aria-label="Close"><span class="bracket-top-left svelte-5awcn0">┌</span> <span class="bracket-top-right svelte-5awcn0">┐</span> <span class="close-text svelte-5awcn0">Close</span> <span class="bracket-bottom-left svelte-5awcn0">└</span> <span class="bracket-bottom-right svelte-5awcn0">┘</span></button> <section class="content-section svelte-5awcn0"><h2 class="section-header svelte-5awcn0">////// Summary</h2> <p class="description svelte-5awcn0"> </p></section> <section class="content-section svelte-5awcn0"><h3 class="section-header svelte-5awcn0">/// Composition</h3> <p class="description svelte-5awcn0">Through a <strong>combination</strong> of <strong>crystalline</strong> structure, a <strong>brand-new</strong> geological 
        formation, <strong>cutting-edge</strong> mineral analysis, and <strong>dedicated</strong> <strong>for the masses</strong> to scale and
        flourish.</p></section> <section class="content-section svelte-5awcn0"><h3 class="section-header svelte-5awcn0">/// Discover</h3> <div class="links-row svelte-5awcn0"><button class="link-btn svelte-5awcn0">[X]↗</button> <button class="link-btn svelte-5awcn0">[LI]↗</button></div></section> <section class="content-section svelte-5awcn0"><h3 class="section-header svelte-5awcn0">/// Visit</h3> <button class="link-btn svelte-5awcn0">[website]↗</button></section></div></div>`);function QI(r,e){Jn(e,!1);const t=ze();let n=rt(e,"stone",8),i=rt(e,"stoneIndex",8,0);const s=Iu();let o=ze();function a(){s("close")}function l(M){M.key==="Escape"&&a()}function c(M){M.target.classList.contains("modal-backdrop")&&a()}mr(()=>{S(o)?.focus(),window.addEventListener("keydown",l)}),zs(()=>{window.removeEventListener("keydown",l)}),ft(()=>on(i()),()=>{de(t,String(i()+1).padStart(2,"0"))}),zr(),pr();var u=JI(),h=dt(u),f=dt(h),d=Ie(f,2),m=Ie(dt(d),2),v=dt(m),g=Ie(d,2),p=Ie(dt(g),2),y=Ie(dt(p),10),_=Ie(g,2),x=Ie(dt(_),2),w=dt(x),E=Ie(w,2),A=Ie(_,2),I=Ie(dt(A),2);ys(h,M=>de(o,M),()=>S(o)),sn(()=>{tr(v,(on(n()),Qe(()=>n().description))),tr(y,` research & scientific support, ${on(n()),Qe(()=>n().name)??""} allows
        those exploring `)}),cs("click",f,a),cs("click",w,a),cs("click",E,a),cs("click",I,a),cs("click",u,c),cs("keydown",u,l),We(r,u),Qn()}var eP=lt('<canvas class="wireframe-overlay svelte-1wdj745" aria-hidden="true"></canvas>');function tP(r,e){Jn(e,!1);let t=rt(e,"scrollProgress",8,0),n=ze(),i=ze();const s=50,o=.5;function a(){if(!S(i)||!S(n))return;const u=S(n).width,h=S(n).height;S(i).clearRect(0,0,u,h);const f=Math.max(0,.08-t()*.15);if(!(f<=0)){Di(i,S(i).strokeStyle=`rgba(168, 173, 184, ${f})`),Di(i,S(i).lineWidth=o),S(i).beginPath();for(let d=-h;d<u+h;d+=s)S(i).moveTo(d,0),S(i).lineTo(d+h,h);S(i).stroke(),S(i).beginPath();for(let d=0;d<u+h;d+=s)S(i).moveTo(d,0),S(i).lineTo(d-h,h);S(i).stroke(),Di(i,S(i).fillStyle=`rgba(168, 173, 184, ${f*1.5})`);for(let d=0;d<20;d++){const m=(Math.sin(d*.7)+1)/2*u,v=(Math.cos(d*.9)+1)/2*h;S(i).beginPath(),S(i).arc(m,v,2,0,Math.PI*2),S(i).fill()}}}function l(){S(n)&&(Di(n,S(n).width=window.innerWidth),Di(n,S(n).height=window.innerHeight),a())}mr(()=>(de(i,S(n).getContext("2d")),l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),ft(()=>S(i),()=>{S(i)&&a()}),zr(),pr();var c=eP();ys(c,u=>de(n,u),()=>S(n)),We(r,c),Qn()}var nP=lt('<div class="chromatic-layer red svelte-nx3u8i"></div> <div class="chromatic-layer cyan svelte-nx3u8i"></div>',1),iP=lt('<div class="noise-overlay svelte-nx3u8i"></div>'),rP=lt('<div class="glitch-bar svelte-nx3u8i"></div>'),sP=lt('<div class="glitch-bars svelte-nx3u8i"></div>'),oP=lt('<div class="scanlines svelte-nx3u8i"></div>'),aP=lt('<div class="dig-fog svelte-nx3u8i"><div class="fog-layer fog-1 svelte-nx3u8i"></div> <div class="fog-layer fog-2 svelte-nx3u8i"></div> <div class="fog-layer fog-3 svelte-nx3u8i"></div></div>'),lP=lt('<div class="vignette-intense svelte-nx3u8i"></div>'),cP=lt("<div><!> <!> <!> <!> <!> <!></div>");function uP(r,e){Jn(e,!1);const t=ze(),n=ze(),i=ze(),s=ze(),o=ze(),a=ze(),l=ze();let c=rt(e,"scrollProgress",8,0);const u=.05,h=.12;let f=ze([]),d;function m(F){const V=[];for(let H=0;H<F;H++)V.push({top:Math.random()*100,height:Math.random()*3+.5,offset:(Math.random()-.5)*30,opacity:Math.random()*.7+.3});return V}function v(){S(i)&&Math.random()>.7&&de(f,m(S(a))),d=requestAnimationFrame(v)}mr(()=>(v(),()=>{d&&cancelAnimationFrame(d)})),ft(()=>on(c()),()=>{de(t,Math.min(1,Math.max(0,(c()-u)/(h-u))))}),ft(()=>S(t),()=>{de(n,Math.sin(S(t)*Math.PI))}),ft(()=>on(c()),()=>{de(i,c()>=u&&c()<=h+.02)}),ft(()=>S(n),()=>{de(s,S(n)*8)}),ft(()=>S(n),()=>{de(o,S(n)*.4)}),ft(()=>S(n),()=>{de(a,Math.floor(S(n)*12))}),ft(()=>S(n),()=>{de(l,S(n)*.7)}),ft(()=>(S(i),S(a)),()=>{S(i)&&de(f,m(S(a)))}),zr(),pr();var g=cP();let p;var y=dt(g);{var _=F=>{var V=nP(),H=bt(V),U=Ie(H,2);sn(()=>{oi(H,`transform: translate(${S(s)??""}px, ${S(s)*.5}px); opacity: ${S(n)*.5};`),oi(U,`transform: translate(${-S(s)}px, ${-S(s)*.5}px); opacity: ${S(n)*.5};`)}),We(F,V)};Ct(y,F=>{S(i)&&F(_)})}var x=Ie(y,2);{var w=F=>{var V=iP();sn(()=>oi(V,`opacity: ${S(o)??""};`)),We(F,V)};Ct(x,F=>{S(i)&&F(w)})}var E=Ie(x,2);{var A=F=>{var V=sP();Sc(V,5,()=>S(f),Mc,(H,U)=>{var Z=rP();sn(()=>oi(Z,`
            top: ${S(U),Qe(()=>S(U).top)??""}%;
            height: ${S(U),Qe(()=>S(U).height)??""}%;
            transform: translateX(${S(U),Qe(()=>S(U).offset)??""}px);
            opacity: ${S(U),S(n),Qe(()=>S(U).opacity*S(n))??""};
          `)),We(H,Z)}),We(F,V)};Ct(E,F=>{S(i)&&F(A)})}var I=Ie(E,2);{var M=F=>{var V=oP();sn(()=>oi(V,`opacity: ${S(n)*.3};`)),We(F,V)};Ct(I,F=>{S(i)&&F(M)})}var T=Ie(I,2);{var D=F=>{var V=aP();sn(()=>oi(V,`opacity: ${S(l)??""};`)),We(F,V)};Ct(T,F=>{S(i)&&F(D)})}var O=Ie(T,2);{var k=F=>{var V=lP();sn(()=>oi(V,`opacity: ${S(n)*.8};`)),We(F,V)};Ct(O,F=>{S(i)&&F(k)})}sn(()=>p=Ni(g,1,"transition-effects svelte-nx3u8i",null,p,{active:S(i)})),We(r,g),Qn()}var hP=lt('<div class="static-fallback svelte-1jioskb" role="img" aria-label="IGLOO - An artistic representation of ice and stone"><div class="fallback-content svelte-1jioskb"><div class="bg-gradient svelte-1jioskb"></div> <div class="ui-overlay svelte-1jioskb"><div class="flex justify-between items-start w-full"><div><h1 class="logo svelte-1jioskb">IGLOO</h1> <p class="label mt-2 svelte-1jioskb">// Copyright © 2024</p> <p class="label svelte-1jioskb">Igloo, Inc.</p></div> <div class="text-right max-w-xs"><p class="label svelte-1jioskb">////// Manifesto</p> <p class="body mt-2 svelte-1jioskb">Our mission is to create the largest onchain community, driving the consumer crypto revolution.</p></div></div></div> <div class="center-content svelte-1jioskb"><div class="igloo-silhouette svelte-1jioskb"><svg viewBox="0 0 200 150" aria-hidden="true"><ellipse cx="100" cy="100" rx="60" ry="40" fill="none" stroke="rgba(168, 173, 184, 0.3)" stroke-width="1"></ellipse><path d="M 40 100 Q 40 50, 100 50 Q 160 50, 160 100" fill="none" stroke="rgba(168, 173, 184, 0.4)" stroke-width="1.5"></path><rect x="85" y="75" width="30" height="25" rx="15" ry="12" fill="rgba(10, 12, 16, 0.8)" stroke="rgba(168, 173, 184, 0.2)" stroke-width="1"></rect></svg></div> <div class="notice svelte-1jioskb"><p class="label svelte-1jioskb">[ WebGL Unavailable ]</p> <p class="body mt-2 svelte-1jioskb">Enable WebGL or disable reduced motion for the full experience.</p></div></div> <div class="bottom-ui svelte-1jioskb"><p class="label svelte-1jioskb">// Static View</p></div></div></div>');function fP(r){var e=hP();We(r,e)}var dP=lt('<div class="canvas-container webgl-canvas"><!></div>'),pP=y0('<path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>',1),mP=y0('<path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',1),gP=lt("<div></div>"),vP=lt('<div class="click-hint visible svelte-1n46o8q"><p class="text-label">Click stone to explore</p></div>'),_P=lt('<div class="ui-overlay"><div class="flex justify-between items-start"><div class="ui-element"><h1 class="logo mb-3">IGLOO</h1> <p class="text-label mb-1">// Copyright © 2024</p> <p class="text-label">Igloo, Inc.<br/> All Rights Reserved.</p></div> <div class="ui-element text-right max-w-xs"><p class="text-label mb-3">////// Manifesto</p> <p class="text-body">Our mission is to create the largest onchain community, driving the consumer crypto revolution.</p></div></div> <div class="flex justify-between items-end"><div class="ui-element"><p class="scroll-prompt mb-4">Scroll down to<br/>discover.</p> <button class="sound-toggle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><!></svg> <span> </span></button></div> <div class="ui-element section-indicator svelte-1n46o8q"><span class="text-label"> </span></div> <div class="ui-element flex gap-1.5"></div></div></div> <!>',1),xP=lt('<main><!> <!> <!> <!> <!> <div class="scroll-container relative svelte-1n46o8q" style="z-index: 0; pointer-events: none;"><section class="section svelte-1n46o8q" id="hero"><div style="height: 50vh;"></div></section> <section class="section svelte-1n46o8q" id="entrance"><div style="height: 75vh;"></div></section> <section class="section svelte-1n46o8q" id="portal"><div style="height: 100vh;"></div></section> <section class="section svelte-1n46o8q" id="stone-1"><div style="height: 225vh;"></div></section> <section class="section svelte-1n46o8q" id="travel-1"><div style="height: 150vh;"></div></section> <section class="section svelte-1n46o8q" id="stone-2"><div style="height: 225vh;"></div></section> <section class="section svelte-1n46o8q" id="travel-2"><div style="height: 150vh;"></div></section> <section class="section svelte-1n46o8q" id="stone-3"><div style="height: 225vh;"></div></section> <section class="section svelte-1n46o8q" id="travel-3"><div style="height: 150vh;"></div></section> <section class="section svelte-1n46o8q" id="stone-4"><div style="height: 500vh;"></div></section></div> <!></main>');function yP(r,e){Jn(e,!1);const t=ze(),n=ze(),i=ze(),s=ze();let o=ze(0),a=ze(0),l=ze(!1),c=ze(null),u=ze(0),h=ze(!0),f=ze(!1),d=ze(!1),m=ze(!1);const v=["Surface","Descending","Portal","Specimen 01","Traveling","Specimen 02","Traveling","Specimen 03","Traveling","Specimen 04"],g=[{id:"ancient-granite",name:"Ancient Granite",description:"Formed over 3 billion years ago in the primordial fires of Earth's crust. Each crystal tells a story of pressure, heat, and transformation.",color:"#6a7080",roughness:.8,metalness:.1,displacement:.15,geometry:"dodecahedron"},{id:"obsidian-core",name:"Obsidian Core",description:"Volcanic glass born from rapid cooling. Its edges hold memories of eruptions past, smooth as time itself.",color:"#2a2c32",roughness:.1,metalness:.9,displacement:.05,geometry:"icosahedron"},{id:"frost-quartz",name:"Frost Quartz",description:"Crystallized from ancient glacial waters. Its pale surface captures and refracts the cold light of forgotten winters.",color:"#d8dadf",roughness:.4,metalness:.2,displacement:.08,geometry:"octahedron"},{id:"shadow-stone",name:"Shadow Stone",description:"Found in the deepest caves beneath the permafrost. It absorbs light and whispers secrets of the underground.",color:"#3a3f4a",roughness:.6,metalness:.4,displacement:.12,geometry:"tetrahedron"}];function p(){try{const U=document.createElement("canvas");return!!(U.getContext("webgl")||U.getContext("experimental-webgl"))}catch{return!1}}function y(){de(m,!S(m))}function _(U){de(c,U),de(u,g.findIndex(Z=>Z.id===U.id)),de(l,!0)}function x(){de(l,!1),de(c,null),de(u,0)}function w(){const U=document.querySelector(".scroll-container");if(!U)return;const Z=window.scrollY,ce=U.scrollHeight-window.innerHeight;de(o,Z/ce),S(o)<.02?de(a,0):S(o)<.05?de(a,1):S(o)<.09?de(a,2):S(o)<.2?de(a,3):S(o)<.3?de(a,4):S(o)<.45?de(a,5):S(o)<.55?de(a,6):S(o)<.7?de(a,7):S(o)<.8?de(a,8):de(a,9)}mr(()=>(de(d,!0),de(f,window.matchMedia("(prefers-reduced-motion: reduce)").matches),de(h,p()),window.addEventListener("scroll",w),()=>window.removeEventListener("scroll",w))),ft(()=>S(a),()=>{de(t,S(a)===3?0:S(a)===5?1:S(a)===7?2:S(a)===9?3:S(a)===4?1:S(a)===6?2:S(a)===8?3:0)}),ft(()=>S(t),()=>{de(n,g[S(t)])}),ft(()=>S(o),()=>{de(i,S(o)>.06)}),ft(()=>S(a),()=>{de(s,[3,5,7,9].includes(S(a)))}),zr(),pr();var E=xP(),A=dt(E);{var I=U=>{fP(U)};Ct(A,U=>{(!S(h)||S(f))&&U(I)})}var M=Ie(A,2);{var T=U=>{var Z=dP(),ce=dt(Z);jI(ce,{get scrollProgress(){return S(o)},get currentSection(){return S(a)},get stones(){return g},get modalOpen(){return S(l)},$$events:{stoneClick:ae=>_(ae.detail)}}),We(U,Z)};Ct(M,U=>{S(d)&&S(h)&&!S(f)&&U(T)})}var D=Ie(M,2);tP(D,{get scrollProgress(){return S(o)}});var O=Ie(D,2);uP(O,{get scrollProgress(){return S(o)}});var k=Ie(O,2);{var F=U=>{var Z=_P(),ce=bt(Z),ae=Ie(dt(ce),2),ue=dt(ae),Be=Ie(dt(ue),2),Ue=dt(Be),at=dt(Ue);{var ct=te=>{var Q=pP();We(te,Q)},J=te=>{var Q=mP();We(te,Q)};Ct(at,te=>{S(m)?te(ct):te(J,!1)})}var re=Ie(Ue,2),Se=dt(re),ke=Ie(ue,2),be=dt(ke),Je=dt(be),ot=Ie(ke,2);Sc(ot,4,()=>Array(10),Mc,(te,Q,me)=>{var P=gP();let Ae;sn(se=>Ae=Ni(P,1,"progress-dot svelte-1n46o8q",null,Ae,se),[()=>({active:S(a)>=me,"stone-dot":[3,5,7,9].includes(me)})]),We(te,P)});var qe=Ie(ce,2);{var ee=te=>{var Q=vP();We(te,Q)};Ct(qe,te=>{S(s)&&!S(l)&&te(ee)})}sn(()=>{Cf(Be,"aria-label",S(m)?"Mute sound":"Enable sound"),tr(Se,`Sound: ${S(m)?"On":"Off"}`),tr(Je,`// ${S(a),Qe(()=>v[S(a)]||"Surface")??""}`)}),cs("click",Be,y),We(U,Z)};Ct(k,U=>{U(F)})}var V=Ie(k,4);{var H=U=>{QI(U,{get stone(){return S(c)},get stoneIndex(){return S(u)},$$events:{close:x}})};Ct(V,U=>{S(l)&&S(c)&&U(H)})}We(r,E),Qn()}Jx(yP,{target:document.getElementById("app")});
