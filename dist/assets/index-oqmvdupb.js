(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Rf=!1;var Eu=Array.isArray,j_=Array.prototype.indexOf,Au=Array.from,Bg=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,zg=Object.getOwnPropertyDescriptors,J_=Object.prototype,Q_=Array.prototype,ld=Object.getPrototypeOf,Ap=Object.isExtensible;function vo(r){return typeof r=="function"}const on=()=>{};function ex(r){return r()}function Ml(r){for(var e=0;e<r.length;e++)r[e]()}function kg(){var r,e,t=new Promise((n,i)=>{r=n,e=i});return{promise:t,resolve:r,reject:e}}const un=2,ud=4,Cu=8,Vg=1<<24,qi=16,mr=32,Fs=64,Ru=128,Si=512,an=1024,Vn=2048,wi=4096,jn=8192,cr=16384,Iu=32768,ki=65536,Cp=1<<17,Gg=1<<18,qo=1<<19,Hg=1<<20,ar=1<<25,Ts=32768,If=1<<21,hd=1<<22,Dr=1<<23,Bi=Symbol("$state"),Wg=Symbol("legacy props"),tx=Symbol(""),xo=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Pu(r){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function nx(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ix(r){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rx(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sx(r){throw new Error("https://svelte.dev/e/effect_orphan")}function ox(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ax(r){throw new Error("https://svelte.dev/e/props_invalid_value")}function cx(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function lx(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ux(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function hx(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const fx=1,dx=2,Xg=4,px=8,mx=16,gx=1,vx=2,_x=4,xx=8,yx=16,bx=1,Mx=2,Sx=4,wx=1,Tx=2,sn=Symbol(),Ex="http://www.w3.org/1999/xhtml",Ax="http://www.w3.org/2000/svg",Cx="@attach";function Rx(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ix(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function qg(r){return r===this.v}function Yg(r,e){return r!=r?e==e:r!==e||r!==null&&typeof r=="object"||typeof r=="function"}function $g(r){return!Yg(r,this.v)}let Yo=!1,Px=!1;function Lx(){Yo=!0}let It=null;function Ao(r){It=r}function vn(r){return Zg().get(r)}function Gn(r,e){return Zg().set(r,e),e}function Hn(r,e=!1,t){It={p:It,i:!1,c:null,e:null,s:r,x:null,l:Yo&&!e?{s:null,u:null,$:[]}:null}}function Wn(r){var e=It,t=e.e;if(t!==null){e.e=null;for(var n of t)f0(n)}return r!==void 0&&(e.x=r),e.i=!0,It=e.p,r??{}}function tc(){return!Yo||It!==null&&It.l===null}function Zg(r){return It===null&&Pu(),It.c??=new Map(Dx(It)||void 0)}function Dx(r){let e=r.p;for(;e!==null;){const t=e.c;if(t!==null)return t;e=e.p}return null}let ds=[];function Kg(){var r=ds;ds=[],Ml(r)}function Vr(r){if(ds.length===0&&!Sa){var e=ds;queueMicrotask(()=>{e===ds&&Kg()})}ds.push(r)}function Nx(){for(;ds.length>0;)Kg()}function jg(r){var e=Mt;if(e===null)return vt.f|=Dr,r;if((e.f&Iu)===0){if((e.f&Ru)===0)throw r;e.b.error(r)}else Co(r,e)}function Co(r,e){for(;e!==null;){if((e.f&Ru)!==0)try{e.b.error(r);return}catch(t){r=t}e=e.parent}throw r}const Mc=new Set;let Nt=null,li=null,oi=[],Lu=null,Pf=!1,Sa=!1;class Ni{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#i=0;#n=0;#c=null;#s=new Set;#r=new Set;skipped_effects=new Set;is_fork=!1;is_deferred(){return this.is_fork||this.#n>0}process(e){oi=[],this.apply();var t={parent:null,effect:null,effects:[],render_effects:[]};for(const n of e)this.#o(n,t);this.is_fork||this.#u(),this.is_deferred()?(this.#a(t.effects),this.#a(t.render_effects)):(Nt=null,Rp(t.render_effects),Rp(t.effects),this.#c?.resolve()),li=null}#o(e,t){e.f^=an;for(var n=e.first;n!==null;){var i=n.f,s=(i&(mr|Fs))!==0,o=s&&(i&an)!==0,a=o||(i&jn)!==0||this.skipped_effects.has(n);if((n.f&Ru)!==0&&n.b?.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[]}),!a&&n.fn!==null){s?n.f^=an:(i&ud)!==0?t.effects.push(n):Zo(n)&&((n.f&qi)!==0&&this.#s.add(n),Po(n));var c=n.first;if(c!==null){n=c;continue}}var l=n.parent;for(n=n.next;n===null&&l!==null;)l===t.effect&&(this.#a(t.effects),this.#a(t.render_effects),t=t.parent),n=l.next,l=l.parent}}#a(e){for(const t of e)(t.f&Vn)!==0?this.#s.add(t):(t.f&wi)!==0&&this.#r.add(t),this.#l(t.deps),ln(t,an)}#l(e){if(e!==null)for(const t of e)(t.f&un)===0||(t.f&Ts)===0||(t.f^=Ts,this.#l(t.deps))}capture(e,t){this.previous.has(e)||this.previous.set(e,t),(e.f&Dr)===0&&(this.current.set(e,e.v),li?.set(e,e.v))}activate(){Nt=this,this.apply()}deactivate(){Nt===this&&(Nt=null,li=null)}flush(){if(this.activate(),oi.length>0){if(Jg(),Nt!==null&&Nt!==this)return}else this.#i===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#t)e(this);this.#t.clear()}#u(){if(this.#n===0){for(const e of this.#e)e();this.#e.clear()}this.#i===0&&this.#h()}#h(){if(Mc.size>1){this.previous.clear();var e=li,t=!0,n={parent:null,effect:null,effects:[],render_effects:[]};for(const s of Mc){if(s===this){t=!1;continue}const o=[];for(const[c,l]of this.current){if(s.current.has(c))if(t&&l!==s.current.get(c))s.current.set(c,l);else continue;o.push(c)}if(o.length===0)continue;const a=[...s.current.keys()].filter(c=>!this.current.has(c));if(a.length>0){var i=oi;oi=[];const c=new Set,l=new Map;for(const u of o)Qg(u,a,c,l);if(oi.length>0){Nt=s,s.apply();for(const u of oi)s.#o(u,n);s.deactivate()}oi=i}}Nt=null,li=e}this.committed=!0,Mc.delete(this)}increment(e){this.#i+=1,e&&(this.#n+=1)}decrement(e){this.#i-=1,e&&(this.#n-=1),this.revive()}revive(){for(const e of this.#s)this.#r.delete(e),ln(e,Vn),Es(e);for(const e of this.#r)ln(e,wi),Es(e);this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#c??=kg()).promise}static ensure(){if(Nt===null){const e=Nt=new Ni;Mc.add(Nt),Sa||Ni.enqueue(()=>{Nt===e&&e.flush()})}return Nt}static enqueue(e){Vr(e)}apply(){}}function Ux(r){var e=Sa;Sa=!0;try{for(var t;;){if(Nx(),oi.length===0&&(Nt?.flush(),oi.length===0))return Lu=null,t;Jg()}}finally{Sa=e}}function Jg(){var r=xs;Pf=!0;var e=null;try{var t=0;for(wl(!0);oi.length>0;){var n=Ni.ensure();if(t++>1e3){var i,s;Ox()}n.process(oi),Nr.clear()}}finally{Pf=!1,wl(r),Lu=null}}function Ox(){try{ox()}catch(r){Co(r,Lu)}}let ir=null;function Rp(r){var e=r.length;if(e!==0){for(var t=0;t<e;){var n=r[t++];if((n.f&(cr|jn))===0&&Zo(n)&&(ir=new Set,Po(n),n.deps===null&&n.first===null&&n.nodes===null&&(n.teardown===null&&n.ac===null?g0(n):n.fn=null),ir?.size>0)){Nr.clear();for(const i of ir){if((i.f&(cr|jn))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)ir.has(o)&&(ir.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const c=s[a];(c.f&(cr|jn))===0&&Po(c)}}ir.clear()}}ir=null}}function Qg(r,e,t,n){if(!t.has(r)&&(t.add(r),r.reactions!==null))for(const i of r.reactions){const s=i.f;(s&un)!==0?Qg(i,e,t,n):(s&(hd|qi))!==0&&(s&Vn)===0&&e0(i,e,n)&&(ln(i,Vn),Es(i))}}function e0(r,e,t){const n=t.get(r);if(n!==void 0)return n;if(r.deps!==null)for(const i of r.deps){if(e.includes(i))return!0;if((i.f&un)!==0&&e0(i,e,t))return t.set(i,!0),!0}return t.set(r,!1),!1}function Es(r){for(var e=Lu=r;e.parent!==null;){e=e.parent;var t=e.f;if(Pf&&e===Mt&&(t&qi)!==0&&(t&Gg)===0)return;if((t&(Fs|mr))!==0){if((t&an)===0)return;e.f^=an}}oi.push(e)}function t0(r){let e=0,t=As(0),n;return()=>{Io()&&(w(t),Du(()=>(e===0&&(n=st(()=>r(()=>wa(t)))),e+=1,()=>{Vr(()=>{e-=1,e===0&&(n?.(),n=void 0,wa(t))})})))}}var Fx=ki|qo|Ru;function Bx(r,e,t){new zx(r,e,t)}class zx{parent;#e=!1;#t;#i=null;#n;#c;#s;#r=null;#o=null;#a=null;#l=null;#u=null;#h=0;#f=0;#p=!1;#d=null;#x=t0(()=>(this.#d=As(this.#h),()=>{this.#d=null}));constructor(e,t,n){this.#t=e,this.#n=t,this.#c=n,this.parent=Mt.b,this.#e=!!this.#n.pending,this.#s=$o(()=>{Mt.b=this;{var i=this.#v();try{this.#r=Fn(()=>n(i))}catch(s){this.error(s)}this.#f>0?this.#g():this.#e=!1}return()=>{this.#u?.remove()}},Fx)}#y(){try{this.#r=Fn(()=>this.#c(this.#t))}catch(e){this.error(e)}this.#e=!1}#b(){const e=this.#n.pending;e&&(this.#o=Fn(()=>e(this.#t)),Ni.enqueue(()=>{var t=this.#v();this.#r=this.#m(()=>(Ni.ensure(),Fn(()=>this.#c(t)))),this.#f>0?this.#g():(_s(this.#o,()=>{this.#o=null}),this.#e=!1)}))}#v(){var e=this.#t;return this.#e&&(this.#u=lr(),this.#t.before(this.#u),e=this.#u),e}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#m(e){var t=Mt,n=vt,i=It;Vi(this.#s),kn(this.#s),Ao(this.#s.ctx);try{return e()}catch(s){return jg(s),null}finally{Vi(t),kn(n),Ao(i)}}#g(){const e=this.#n.pending;this.#r!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#u),x0(this.#r,this.#l)),this.#o===null&&(this.#o=Fn(()=>e(this.#t)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#f+=e,this.#f===0&&(this.#e=!1,this.#o&&_s(this.#o,()=>{this.#o=null}),this.#l&&(this.#t.before(this.#l),this.#l=null))}update_pending_count(e){this.#_(e),this.#h+=e,this.#d&&Ro(this.#d,this.#h)}get_effect_pending(){return this.#x(),w(this.#d)}error(e){var t=this.#n.onerror;let n=this.#n.failed;if(this.#p||!t&&!n)throw e;this.#r&&(cn(this.#r),this.#r=null),this.#o&&(cn(this.#o),this.#o=null),this.#a&&(cn(this.#a),this.#a=null);var i=!1,s=!1;const o=()=>{if(i){Ix();return}i=!0,s&&hx(),Ni.ensure(),this.#h=0,this.#a!==null&&_s(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#r=this.#m(()=>(this.#p=!1,Fn(()=>this.#c(this.#t)))),this.#f>0?this.#g():this.#e=!1};var a=vt;try{kn(null),s=!0,t?.(e,o),s=!1}catch(c){Co(c,this.#s&&this.#s.parent)}finally{kn(a)}n&&Vr(()=>{this.#a=this.#m(()=>{Ni.ensure(),this.#p=!0;try{return Fn(()=>{n(this.#t,()=>e,()=>o)})}catch(c){return Co(c,this.#s.parent),null}finally{this.#p=!1}})})}}function n0(r,e,t,n){const i=tc()?nc:xt;if(t.length===0&&r.length===0){n(e.map(i));return}var s=Nt,o=Mt,a=kx();function c(){Promise.all(t.map(l=>Vx(l))).then(l=>{a();try{n([...e.map(i),...l])}catch(u){(o.f&cr)===0&&Co(u,o)}s?.deactivate(),Sl()}).catch(l=>{Co(l,o)})}r.length>0?Promise.all(r).then(()=>{a();try{return c()}finally{s?.deactivate(),Sl()}}):c()}function kx(){var r=Mt,e=vt,t=It,n=Nt;return function(s=!0){Vi(r),kn(e),Ao(t),s&&n?.activate()}}function Sl(){Vi(null),kn(null),Ao(null)}function nc(r){var e=un|Vn,t=vt!==null&&(vt.f&un)!==0?vt:null;return Mt!==null&&(Mt.f|=qo),{ctx:It,deps:null,effects:null,equals:qg,f:e,fn:r,reactions:null,rv:0,v:sn,wv:0,parent:t??Mt,ac:null}}function Vx(r,e){let t=Mt;t===null&&nx();var n=t.b,i=void 0,s=As(sn),o=!vt,a=new Map;return Kx(()=>{var c=kg();i=c.promise;try{Promise.resolve(r()).then(c.resolve,c.reject).then(()=>{l===Nt&&l.committed&&l.deactivate(),Sl()})}catch(f){c.reject(f),Sl()}var l=Nt;if(o){var u=!n.is_pending();n.update_pending_count(1),l.increment(u),a.get(l)?.reject(xo),a.delete(l),a.set(l,c)}const h=(f,d=void 0)=>{if(l.activate(),d)d!==xo&&(s.f|=Dr,Ro(s,d));else{(s.f&Dr)!==0&&(s.f^=Dr),Ro(s,f);for(const[m,v]of a){if(a.delete(m),m===l)break;v.reject(xo)}}o&&(n.update_pending_count(-1),l.decrement(u))};c.promise.then(h,f=>h(null,f||"unknown"))}),sc(()=>{for(const c of a.values())c.reject(xo)}),new Promise(c=>{function l(u){function h(){u===i?c(s):l(i)}u.then(h,h)}l(i)})}function Zt(r){const e=nc(r);return y0(e),e}function xt(r){const e=nc(r);return e.equals=$g,e}function i0(r){var e=r.effects;if(e!==null){r.effects=null;for(var t=0;t<e.length;t+=1)cn(e[t])}}function Gx(r){for(var e=r.parent;e!==null;){if((e.f&un)===0)return(e.f&cr)===0?e:null;e=e.parent}return null}function fd(r){var e,t=Mt;Vi(Gx(r));try{r.f&=~Ts,i0(r),e=w0(r)}finally{Vi(t)}return e}function r0(r){var e=fd(r);if(r.equals(e)||(Nt?.is_fork||(r.v=e),r.wv=M0()),!zs)if(li!==null)(Io()||Nt?.is_fork)&&li.set(r,e);else{var t=(r.f&Si)===0?wi:an;ln(r,t)}}let Lf=new Set;const Nr=new Map;let s0=!1;function As(r,e){var t={f:0,v:r,reactions:null,equals:qg,rv:0,wv:0};return t}function si(r,e){const t=As(r);return y0(t),t}function Fe(r,e=!1,t=!0){const n=As(r);return e||(n.equals=$g),Yo&&t&&It!==null&&It.l!==null&&(It.l.s??=[]).push(n),n}function ui(r,e){return de(r,st(()=>w(r))),e}function de(r,e,t=!1){vt!==null&&(!Ui||(vt.f&Cp)!==0)&&tc()&&(vt.f&(un|qi|hd|Cp))!==0&&!ur?.includes(r)&&ux();let n=t?yo(e):e;return Ro(r,n)}function Ro(r,e){if(!r.equals(e)){var t=r.v;zs?Nr.set(r,e):Nr.set(r,t),r.v=e;var n=Ni.ensure();n.capture(r,t),(r.f&un)!==0&&((r.f&Vn)!==0&&fd(r),ln(r,(r.f&Si)!==0?an:wi)),r.wv=M0(),o0(r,Vn),tc()&&Mt!==null&&(Mt.f&an)!==0&&(Mt.f&(mr|Fs))===0&&(ii===null?Qx([r]):ii.push(r)),!n.is_fork&&Lf.size>0&&!s0&&Hx()}return e}function Hx(){s0=!1;var r=xs;wl(!0);const e=Array.from(Lf);try{for(const t of e)(t.f&an)!==0&&ln(t,wi),Zo(t)&&Po(t)}finally{wl(r)}Lf.clear()}function wa(r){de(r,r.v+1)}function o0(r,e){var t=r.reactions;if(t!==null)for(var n=tc(),i=t.length,s=0;s<i;s++){var o=t[s],a=o.f;if(!(!n&&o===Mt)){var c=(a&Vn)===0;if(c&&ln(o,e),(a&un)!==0){var l=o;li?.delete(l),(a&Ts)===0&&(a&Si&&(o.f|=Ts),o0(l,wi))}else c&&((a&qi)!==0&&ir!==null&&ir.add(o),Es(o))}}}function yo(r){if(typeof r!="object"||r===null||Bi in r)return r;const e=ld(r);if(e!==J_&&e!==Q_)return r;var t=new Map,n=Eu(r),i=si(0),s=ys,o=a=>{if(ys===s)return a();var c=vt,l=ys;kn(null),Dp(s);var u=a();return kn(c),Dp(l),u};return n&&t.set("length",si(r.length)),new Proxy(r,{defineProperty(a,c,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&cx();var u=t.get(c);return u===void 0?u=o(()=>{var h=si(l.value);return t.set(c,h),h}):de(u,l.value,!0),!0},deleteProperty(a,c){var l=t.get(c);if(l===void 0){if(c in a){const u=o(()=>si(sn));t.set(c,u),wa(i)}}else de(l,sn),wa(i);return!0},get(a,c,l){if(c===Bi)return r;var u=t.get(c),h=c in a;if(u===void 0&&(!h||Lr(a,c)?.writable)&&(u=o(()=>{var d=yo(h?a[c]:sn),m=si(d);return m}),t.set(c,u)),u!==void 0){var f=w(u);return f===sn?void 0:f}return Reflect.get(a,c,l)},getOwnPropertyDescriptor(a,c){var l=Reflect.getOwnPropertyDescriptor(a,c);if(l&&"value"in l){var u=t.get(c);u&&(l.value=w(u))}else if(l===void 0){var h=t.get(c),f=h?.v;if(h!==void 0&&f!==sn)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return l},has(a,c){if(c===Bi)return!0;var l=t.get(c),u=l!==void 0&&l.v!==sn||Reflect.has(a,c);if(l!==void 0||Mt!==null&&(!u||Lr(a,c)?.writable)){l===void 0&&(l=o(()=>{var f=u?yo(a[c]):sn,d=si(f);return d}),t.set(c,l));var h=w(l);if(h===sn)return!1}return u},set(a,c,l,u){var h=t.get(c),f=c in a;if(n&&c==="length")for(var d=l;d<h.v;d+=1){var m=t.get(d+"");m!==void 0?de(m,sn):d in a&&(m=o(()=>si(sn)),t.set(d+"",m))}if(h===void 0)(!f||Lr(a,c)?.writable)&&(h=o(()=>si(void 0)),de(h,yo(l)),t.set(c,h));else{f=h.v!==sn;var v=o(()=>yo(l));de(h,v)}var g=Reflect.getOwnPropertyDescriptor(a,c);if(g?.set&&g.set.call(u,l),!f){if(n&&typeof c=="string"){var p=t.get("length"),x=Number(c);Number.isInteger(x)&&x>=p.v&&de(p,x+1)}wa(i)}return!0},ownKeys(a){w(i);var c=Reflect.ownKeys(a).filter(h=>{var f=t.get(h);return f===void 0||f.v!==sn});for(var[l,u]of t)u.v!==sn&&!(l in a)&&c.push(l);return c},setPrototypeOf(){lx()}})}function Ip(r){try{if(r!==null&&typeof r=="object"&&Bi in r)return r[Bi]}catch{}return r}function Wx(r,e){return Object.is(Ip(r),Ip(e))}var Pp,a0,c0,l0;function Xx(){if(Pp===void 0){Pp=window,a0=/Firefox/.test(navigator.userAgent);var r=Element.prototype,e=Node.prototype,t=Text.prototype;c0=Lr(e,"firstChild").get,l0=Lr(e,"nextSibling").get,Ap(r)&&(r.__click=void 0,r.__className=void 0,r.__attributes=null,r.__style=void 0,r.__e=void 0),Ap(t)&&(t.__t=void 0)}}function lr(r=""){return document.createTextNode(r)}function Cr(r){return c0.call(r)}function ic(r){return l0.call(r)}function At(r,e){return Cr(r)}function yt(r,e=!1){{var t=Cr(r);return t instanceof Comment&&t.data===""?ic(t):t}}function We(r,e=1,t=!1){let n=r;for(;e--;)n=ic(n);return n}function qx(r){r.textContent=""}function u0(){return!1}function Yx(r,e){if(e){const t=document.body;r.autofocus=!0,Vr(()=>{document.activeElement===t&&r.focus()})}}function rc(r){var e=vt,t=Mt;kn(null),Vi(null);try{return r()}finally{kn(e),Vi(t)}}function h0(r){Mt===null&&(vt===null&&sx(),rx()),zs&&ix()}function $x(r,e){var t=e.last;t===null?e.last=e.first=r:(t.next=r,r.prev=t,e.last=r)}function Ei(r,e,t){var n=Mt;n!==null&&(n.f&jn)!==0&&(r|=jn);var i={ctx:It,deps:null,nodes:null,f:r|Vn|Si,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{Po(i),i.f|=Iu}catch(a){throw cn(i),a}else e!==null&&Es(i);var s=i;if(t&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&qo)===0&&(s=s.first,(r&qi)!==0&&(r&ki)!==0&&s!==null&&(s.f|=ki)),s!==null&&(s.parent=n,n!==null&&$x(s,n),vt!==null&&(vt.f&un)!==0&&(r&Fs)===0)){var o=vt;(o.effects??=[]).push(s)}return i}function Io(){return vt!==null&&!Ui}function sc(r){const e=Ei(Cu,null,!1);return ln(e,an),e.teardown=r,e}function fr(r){h0();var e=Mt.f,t=!vt&&(e&mr)!==0&&(e&Iu)===0;if(t){var n=It;(n.e??=[]).push(r)}else return f0(r)}function f0(r){return Ei(ud|Hg,r,!1)}function rn(r){return h0(),Ei(Cu|Hg,r,!0)}function Zx(r){Ni.ensure();const e=Ei(Fs|qo,r,!0);return(t={})=>new Promise(n=>{t.outro?_s(e,()=>{cn(e),n(void 0)}):(cn(e),n(void 0))})}function oc(r){return Ei(ud,r,!1)}function dt(r,e){var t=It,n={effect:null,ran:!1,deps:r};t.l.$.push(n),n.effect=Du(()=>{r(),!n.ran&&(n.ran=!0,st(e))})}function Bs(){var r=It;Du(()=>{for(var e of r.l.$){e.deps();var t=e.effect;(t.f&an)!==0&&ln(t,wi),Zo(t)&&Po(t),e.ran=!1}})}function Kx(r){return Ei(hd|qo,r,!0)}function Du(r,e=0){return Ei(Cu|e,r,!0)}function Sn(r,e=[],t=[],n=[]){n0(n,e,t,i=>{Ei(Cu,()=>r(...i.map(w)),!0)})}function $o(r,e=0){var t=Ei(qi|e,r,!0);return t}function d0(r,e=0){var t=Ei(Vg|e,r,!0);return t}function Fn(r){return Ei(mr|qo,r,!0)}function p0(r){var e=r.teardown;if(e!==null){const t=zs,n=vt;Lp(!0),kn(null);try{e.call(null)}finally{Lp(t),kn(n)}}}function m0(r,e=!1){var t=r.first;for(r.first=r.last=null;t!==null;){const i=t.ac;i!==null&&rc(()=>{i.abort(xo)});var n=t.next;(t.f&Fs)!==0?t.parent=null:cn(t,e),t=n}}function jx(r){for(var e=r.first;e!==null;){var t=e.next;(e.f&mr)===0&&cn(e),e=t}}function cn(r,e=!0){var t=!1;(e||(r.f&Gg)!==0)&&r.nodes!==null&&r.nodes.end!==null&&(Jx(r.nodes.start,r.nodes.end),t=!0),m0(r,e&&!t),Tl(r,0),ln(r,cr);var n=r.nodes&&r.nodes.t;if(n!==null)for(const s of n)s.stop();p0(r);var i=r.parent;i!==null&&i.first!==null&&g0(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes=r.ac=null}function Jx(r,e){for(;r!==null;){var t=r===e?null:ic(r);r.remove(),r=t}}function g0(r){var e=r.parent,t=r.prev,n=r.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===r&&(e.first=n),e.last===r&&(e.last=t))}function _s(r,e,t=!0){var n=[];v0(r,n,!0);var i=()=>{t&&cn(r),e&&e()},s=n.length;if(s>0){var o=()=>--s||i();for(var a of n)a.out(o)}else i()}function v0(r,e,t){if((r.f&jn)===0){r.f^=jn;var n=r.nodes&&r.nodes.t;if(n!==null)for(const a of n)(a.is_global||t)&&e.push(a);for(var i=r.first;i!==null;){var s=i.next,o=(i.f&ki)!==0||(i.f&mr)!==0&&(r.f&qi)!==0;v0(i,e,o?t:!1),i=s}}}function dd(r){_0(r,!0)}function _0(r,e){if((r.f&jn)!==0){r.f^=jn,(r.f&an)===0&&(ln(r,Vn),Es(r));for(var t=r.first;t!==null;){var n=t.next,i=(t.f&ki)!==0||(t.f&mr)!==0;_0(t,i?e:!1),t=n}var s=r.nodes&&r.nodes.t;if(s!==null)for(const o of s)(o.is_global||e)&&o.in()}}function x0(r,e){if(r.nodes)for(var t=r.nodes.start,n=r.nodes.end;t!==null;){var i=t===n?null:ic(t);e.append(t),t=i}}let xs=!1;function wl(r){xs=r}let zs=!1;function Lp(r){zs=r}let vt=null,Ui=!1;function kn(r){vt=r}let Mt=null;function Vi(r){Mt=r}let ur=null;function y0(r){vt!==null&&(ur===null?ur=[r]:ur.push(r))}let Mn=null,Zn=0,ii=null;function Qx(r){ii=r}let b0=1,Fa=0,ys=Fa;function Dp(r){ys=r}function M0(){return++b0}function Zo(r){var e=r.f;if((e&Vn)!==0)return!0;if(e&un&&(r.f&=~Ts),(e&wi)!==0){var t=r.deps;if(t!==null)for(var n=t.length,i=0;i<n;i++){var s=t[i];if(Zo(s)&&r0(s),s.wv>r.wv)return!0}(e&Si)!==0&&li===null&&ln(r,an)}return!1}function S0(r,e,t=!0){var n=r.reactions;if(n!==null&&!ur?.includes(r))for(var i=0;i<n.length;i++){var s=n[i];(s.f&un)!==0?S0(s,e,!1):e===s&&(t?ln(s,Vn):(s.f&an)!==0&&ln(s,wi),Es(s))}}function w0(r){var e=Mn,t=Zn,n=ii,i=vt,s=ur,o=It,a=Ui,c=ys,l=r.f;Mn=null,Zn=0,ii=null,vt=(l&(mr|Fs))===0?r:null,ur=null,Ao(r.ctx),Ui=!1,ys=++Fa,r.ac!==null&&(rc(()=>{r.ac.abort(xo)}),r.ac=null);try{r.f|=If;var u=r.fn,h=u(),f=r.deps;if(Mn!==null){var d;if(Tl(r,Zn),f!==null&&Zn>0)for(f.length=Zn+Mn.length,d=0;d<Mn.length;d++)f[Zn+d]=Mn[d];else r.deps=f=Mn;if(Io()&&(r.f&Si)!==0)for(d=Zn;d<f.length;d++)(f[d].reactions??=[]).push(r)}else f!==null&&Zn<f.length&&(Tl(r,Zn),f.length=Zn);if(tc()&&ii!==null&&!Ui&&f!==null&&(r.f&(un|wi|Vn))===0)for(d=0;d<ii.length;d++)S0(ii[d],r);return i!==null&&i!==r&&(Fa++,ii!==null&&(n===null?n=ii:n.push(...ii))),(r.f&Dr)!==0&&(r.f^=Dr),h}catch(m){return jg(m)}finally{r.f^=If,Mn=e,Zn=t,ii=n,vt=i,ur=s,Ao(o),Ui=a,ys=c}}function ey(r,e){let t=e.reactions;if(t!==null){var n=j_.call(t,r);if(n!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[n]=t[i],t.pop())}}t===null&&(e.f&un)!==0&&(Mn===null||!Mn.includes(e))&&(ln(e,wi),(e.f&Si)!==0&&(e.f^=Si,e.f&=~Ts),i0(e),Tl(e,0))}function Tl(r,e){var t=r.deps;if(t!==null)for(var n=e;n<t.length;n++)ey(r,t[n])}function Po(r){var e=r.f;if((e&cr)===0){ln(r,an);var t=Mt,n=xs;Mt=r,xs=!0;try{(e&(qi|Vg))!==0?jx(r):m0(r),p0(r);var i=w0(r);r.teardown=typeof i=="function"?i:null,r.wv=b0;var s;Rf&&Px&&(r.f&Vn)!==0&&r.deps}finally{xs=n,Mt=t}}}async function ty(){await Promise.resolve(),Ux()}function w(r){var e=r.f,t=(e&un)!==0;if(vt!==null&&!Ui){var n=Mt!==null&&(Mt.f&cr)!==0;if(!n&&!ur?.includes(r)){var i=vt.deps;if((vt.f&If)!==0)r.rv<Fa&&(r.rv=Fa,Mn===null&&i!==null&&i[Zn]===r?Zn++:Mn===null?Mn=[r]:Mn.includes(r)||Mn.push(r));else{(vt.deps??=[]).push(r);var s=r.reactions;s===null?r.reactions=[vt]:s.includes(vt)||s.push(vt)}}}if(zs){if(Nr.has(r))return Nr.get(r);if(t){var o=r,a=o.v;return((o.f&an)===0&&o.reactions!==null||E0(o))&&(a=fd(o)),Nr.set(o,a),a}}else t&&(!li?.has(r)||Nt?.is_fork&&!Io())&&(o=r,Zo(o)&&r0(o),xs&&Io()&&(o.f&Si)===0&&T0(o));if(li?.has(r))return li.get(r);if((r.f&Dr)!==0)throw r.v;return r.v}function T0(r){if(r.deps!==null){r.f^=Si;for(const e of r.deps)(e.reactions??=[]).push(r),(e.f&un)!==0&&(e.f&Si)===0&&T0(e)}}function E0(r){if(r.v===sn)return!0;if(r.deps===null)return!1;for(const e of r.deps)if(Nr.has(e)||(e.f&un)!==0&&E0(e))return!0;return!1}function st(r){var e=Ui;try{return Ui=!0,r()}finally{Ui=e}}const ny=-7169;function ln(r,e){r.f=r.f&ny|e}function Xt(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(Bi in r)Df(r);else if(!Array.isArray(r))for(let e in r){const t=r[e];typeof t=="object"&&t&&Bi in t&&Df(t)}}}function Df(r,e=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!e.has(r)){e.add(r),r instanceof Date&&r.getTime();for(let n in r)try{Df(r[n],e)}catch{}const t=ld(r);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=zg(t);for(let i in n){const s=n[i].get;if(s)try{s.call(r)}catch{}}}}}function iy(r){return r.endsWith("capture")&&r!=="gotpointercapture"&&r!=="lostpointercapture"}const ry=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function sy(r){return ry.includes(r)}const oy={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ay(r){return r=r.toLowerCase(),oy[r]??r}const cy=["touchstart","touchmove"];function ly(r){return cy.includes(r)}const A0=new Set,Nf=new Set;function C0(r,e,t,n={}){function i(s){if(n.capture||_a.call(e,s),!s.cancelBubble)return rc(()=>t?.call(this,s))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?Vr(()=>{e.addEventListener(r,i,n)}):e.addEventListener(r,i,n),i}function Ta(r,e,t,n,i){var s={capture:n,passive:i},o=C0(r,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&sc(()=>{e.removeEventListener(r,o,s)})}function uy(r){for(var e=0;e<r.length;e++)A0.add(r[e]);for(var t of Nf)t(r)}let Np=null;function _a(r){var e=this,t=e.ownerDocument,n=r.type,i=r.composedPath?.()||[],s=i[0]||r.target;Np=r;var o=0,a=Np===r&&r.__root;if(a){var c=i.indexOf(a);if(c!==-1&&(e===document||e===window)){r.__root=e;return}var l=i.indexOf(e);if(l===-1)return;c<=l&&(o=c)}if(s=i[o]||r.target,s!==e){Bg(r,"currentTarget",{configurable:!0,get(){return s||t}});var u=vt,h=Mt;kn(null),Vi(null);try{for(var f,d=[];s!==null;){var m=s.assignedSlot||s.parentNode||s.host||null;try{var v=s["__"+n];v!=null&&(!s.disabled||r.target===s)&&v.call(s,r)}catch(g){f?d.push(g):f=g}if(r.cancelBubble||m===e||m===null)break;s=m}if(f){for(let g of d)queueMicrotask(()=>{throw g});throw f}}finally{r.__root=e,delete r.currentTarget,kn(u),Vi(h)}}}function R0(r){var e=document.createElement("template");return e.innerHTML=r.replaceAll("<!>","<!---->"),e.content}function Ba(r,e){var t=Mt;t.nodes===null&&(t.nodes={start:r,end:e,a:null,t:null})}function ht(r,e){var t=(e&wx)!==0,n=(e&Tx)!==0,i,s=!r.startsWith("<!>");return()=>{i===void 0&&(i=R0(s?r:"<!>"+r),t||(i=Cr(i)));var o=n||a0?document.importNode(i,!0):i.cloneNode(!0);if(t){var a=Cr(o),c=o.lastChild;Ba(a,c)}else Ba(o,o);return o}}function hy(r,e,t="svg"){var n=!r.startsWith("<!>"),i=`<${t}>${n?r:"<!>"+r}</${t}>`,s;return()=>{if(!s){var o=R0(i),a=Cr(o);for(s=document.createDocumentFragment();Cr(a);)s.appendChild(Cr(a))}var c=s.cloneNode(!0);{var l=Cr(c),u=c.lastChild;Ba(l,u)}return c}}function I0(r,e){return hy(r,e,"svg")}function wn(){var r=document.createDocumentFragment(),e=document.createComment(""),t=lr();return r.append(e,t),Ba(e,t),r}function He(r,e){r!==null&&r.before(e)}let El=!0;function Sc(r){El=r}function hs(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??=r.nodeValue)&&(r.__t=t,r.nodeValue=t+"")}function fy(r,e){return dy(r,e)}const Ys=new Map;function dy(r,{target:e,anchor:t,props:n={},events:i,context:s,intro:o=!0}){Xx();var a=new Set,c=h=>{for(var f=0;f<h.length;f++){var d=h[f];if(!a.has(d)){a.add(d);var m=ly(d);e.addEventListener(d,_a,{passive:m});var v=Ys.get(d);v===void 0?(document.addEventListener(d,_a,{passive:m}),Ys.set(d,1)):Ys.set(d,v+1)}}};c(Au(A0)),Nf.add(c);var l=void 0,u=Zx(()=>{var h=t??e.appendChild(lr());return Bx(h,{pending:()=>{}},f=>{if(s){Hn({});var d=It;d.c=s}i&&(n.$$events=i),El=o,l=r(f,n)||{},El=!0,s&&Wn()}),()=>{for(var f of a){e.removeEventListener(f,_a);var d=Ys.get(f);--d===0?(document.removeEventListener(f,_a),Ys.delete(f)):Ys.set(f,d)}Nf.delete(c),h!==t&&h.parentNode?.removeChild(h)}});return py.set(l,u),l}let py=new WeakMap;class Nu{anchor;#e=new Map;#t=new Map;#i=new Map;#n=new Set;#c=!0;constructor(e,t=!0){this.anchor=e,this.#c=t}#s=()=>{var e=Nt;if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)dd(n),this.#n.delete(t);else{var i=this.#i.get(t);i&&(this.#t.set(t,i.effect),this.#i.delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,o]of this.#e){if(this.#e.delete(s),s===e)break;const a=this.#i.get(o);a&&(cn(a.effect),this.#i.delete(o))}for(const[s,o]of this.#t){if(s===t||this.#n.has(s))continue;const a=()=>{if(Array.from(this.#e.values()).includes(s)){var l=document.createDocumentFragment();x0(o,l),l.append(lr()),this.#i.set(s,{effect:o,fragment:l})}else cn(o);this.#n.delete(s),this.#t.delete(s)};this.#c||!n?(this.#n.add(s),_s(o,a,!1)):a()}}};#r=e=>{this.#e.delete(e);const t=Array.from(this.#e.values());for(const[n,i]of this.#i)t.includes(n)||(cn(i.effect),this.#i.delete(n))};ensure(e,t){var n=Nt,i=u0();if(t&&!this.#t.has(e)&&!this.#i.has(e))if(i){var s=document.createDocumentFragment(),o=lr();s.append(o),this.#i.set(e,{effect:Fn(()=>t(o)),fragment:s})}else this.#t.set(e,Fn(()=>t(this.anchor)));if(this.#e.set(n,e),i){for(const[a,c]of this.#t)a===e?n.skipped_effects.delete(c):n.skipped_effects.add(c);for(const[a,c]of this.#i)a===e?n.skipped_effects.delete(c.effect):n.skipped_effects.add(c.effect);n.oncommit(this.#s),n.ondiscard(this.#r)}else this.#s()}}function Ct(r,e,t=!1){var n=new Nu(r),i=t?ki:0;function s(o,a){n.ensure(o,a)}$o(()=>{var o=!1;e((a,c=!0)=>{o=!0,s(c,a)}),o||s(!1,null)},i)}function Al(r,e){return e}function my(r,e,t){for(var n=[],i=e.length,s,o=e.length,a=0;a<i;a++){let h=e[a];_s(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var f=r.outrogroups;Uf(Au(s.done)),f.delete(s),f.size===0&&(r.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=n.length===0&&t!==null;if(c){var l=t,u=l.parentNode;qx(u),u.append(l),r.items.clear()}Uf(e,!c)}else s={pending:new Set(e),done:new Set},(r.outrogroups??=new Set).add(s)}function Uf(r,e=!0){for(var t=0;t<r.length;t++)cn(r[t],e)}var Up;function Cl(r,e,t,n,i,s=null){var o=r,a=new Map,c=(e&Xg)!==0;if(c){var l=r;o=l.appendChild(lr())}var u=null,h=xt(()=>{var p=t();return Eu(p)?p:p==null?[]:Au(p)}),f,d=!0;function m(){g.fallback=u,gy(g,f,o,e,n),u!==null&&(f.length===0?(u.f&ar)===0?dd(u):(u.f^=ar,xa(u,null,o)):_s(u,()=>{u=null}))}var v=$o(()=>{f=w(h);for(var p=f.length,x=new Set,_=Nt,y=u0(),S=0;S<p;S+=1){var E=f[S],A=n(E,S),I=d?null:a.get(A);I?(I.v&&Ro(I.v,E),I.i&&Ro(I.i,S),y&&_.skipped_effects.delete(I.e)):(I=vy(a,d?o:Up??=lr(),E,A,S,i,e,t),d||(I.e.f|=ar),a.set(A,I)),x.add(A)}if(p===0&&s&&!u&&(d?u=Fn(()=>s(o)):(u=Fn(()=>s(Up??=lr())),u.f|=ar)),!d)if(y){for(const[b,T]of a)x.has(b)||_.skipped_effects.add(T.e);_.oncommit(m),_.ondiscard(()=>{})}else m();w(h)}),g={effect:v,items:a,outrogroups:null,fallback:u};d=!1}function gy(r,e,t,n,i){var s=(n&px)!==0,o=e.length,a=r.items,c=r.effect.first,l,u=null,h,f=[],d=[],m,v,g,p;if(s)for(p=0;p<o;p+=1)m=e[p],v=i(m,p),g=a.get(v).e,(g.f&ar)===0&&(g.nodes?.a?.measure(),(h??=new Set).add(g));for(p=0;p<o;p+=1){if(m=e[p],v=i(m,p),g=a.get(v).e,r.outrogroups!==null)for(const T of r.outrogroups)T.pending.delete(g),T.done.delete(g);if((g.f&ar)!==0)if(g.f^=ar,g===c)xa(g,null,t);else{var x=u?u.next:c;g===r.effect.last&&(r.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),gr(r,u,g),gr(r,g,x),xa(g,x,t),u=g,f=[],d=[],c=u.next;continue}if((g.f&jn)!==0&&(dd(g),s&&(g.nodes?.a?.unfix(),(h??=new Set).delete(g))),g!==c){if(l!==void 0&&l.has(g)){if(f.length<d.length){var _=d[0],y;u=_.prev;var S=f[0],E=f[f.length-1];for(y=0;y<f.length;y+=1)xa(f[y],_,t);for(y=0;y<d.length;y+=1)l.delete(d[y]);gr(r,S.prev,E.next),gr(r,u,S),gr(r,E,_),c=_,u=E,p-=1,f=[],d=[]}else l.delete(g),xa(g,c,t),gr(r,g.prev,g.next),gr(r,g,u===null?r.effect.first:u.next),gr(r,u,g),u=g;continue}for(f=[],d=[];c!==null&&c!==g;)(l??=new Set).add(c),d.push(c),c=c.next;if(c===null)continue}(g.f&ar)===0&&f.push(g),u=g,c=g.next}if(r.outrogroups!==null){for(const T of r.outrogroups)T.pending.size===0&&(Uf(Au(T.done)),r.outrogroups?.delete(T));r.outrogroups.size===0&&(r.outrogroups=null)}if(c!==null||l!==void 0){var A=[];if(l!==void 0)for(g of l)(g.f&jn)===0&&A.push(g);for(;c!==null;)(c.f&jn)===0&&c!==r.fallback&&A.push(c),c=c.next;var I=A.length;if(I>0){var b=(n&Xg)!==0&&o===0?t:null;if(s){for(p=0;p<I;p+=1)A[p].nodes?.a?.measure();for(p=0;p<I;p+=1)A[p].nodes?.a?.fix()}my(r,A,b)}}s&&Vr(()=>{if(h!==void 0)for(g of h)g.nodes?.a?.apply()})}function vy(r,e,t,n,i,s,o,a){var c=(o&fx)!==0?(o&mx)===0?Fe(t,!1,!1):As(t):null,l=(o&dx)!==0?As(i):null;return{v:c,i:l,e:Fn(()=>(s(e,c??t,l??i,a),()=>{r.delete(n)}))}}function xa(r,e,t){if(r.nodes)for(var n=r.nodes.start,i=r.nodes.end,s=e&&(e.f&ar)===0?e.nodes.start:t;n!==null;){var o=ic(n);if(s.before(n),n===i)return;n=o}}function gr(r,e,t){e===null?r.effect.first=t:e.next=t,t===null?r.effect.last=e:t.prev=e}function za(r,e,...t){var n=new Nu(r);$o(()=>{const i=e()??null;n.ensure(i,i&&(s=>i(s,...t)))},ki)}function Ch(r,e,t){var n=new Nu(r);$o(()=>{var i=e()??null;n.ensure(i,i&&(s=>t(s,i)))},ki)}const _y=()=>performance.now(),rr={tick:r=>requestAnimationFrame(r),now:()=>_y(),tasks:new Set};function P0(){const r=rr.now();rr.tasks.forEach(e=>{e.c(r)||(rr.tasks.delete(e),e.f())}),rr.tasks.size!==0&&rr.tick(P0)}function xy(r){let e;return rr.tasks.size===0&&rr.tick(P0),{promise:new Promise(t=>{rr.tasks.add(e={c:r,f:t})}),abort(){rr.tasks.delete(e)}}}function wc(r,e){rc(()=>{r.dispatchEvent(new CustomEvent(e))})}function yy(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const e=r.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Op(r){const e={},t=r.split(";");for(const n of t){const[i,s]=n.split(":");if(!i||s===void 0)break;const o=yy(i.trim());e[o]=s.trim()}return e}const by=r=>r;function Rh(r,e,t,n){var i=(r&bx)!==0,s=(r&Mx)!==0,o=i&&s,a=(r&Sx)!==0,c=o?"both":i?"in":"out",l,u=e.inert,h=e.style.overflow,f,d;function m(){return rc(()=>l??=t()(e,n?.()??{},{direction:c}))}var v={is_global:a,in(){if(e.inert=u,!i){d?.abort(),d?.reset?.();return}s||f?.abort(),wc(e,"introstart"),f=Of(e,m(),d,1,()=>{wc(e,"introend"),f?.abort(),f=l=void 0,e.style.overflow=h})},out(_){if(!s){_?.(),l=void 0;return}e.inert=!0,wc(e,"outrostart"),d=Of(e,m(),f,0,()=>{wc(e,"outroend"),_?.()})},stop:()=>{f?.abort(),d?.abort()}},g=Mt;if((g.nodes.t??=[]).push(v),i&&El){var p=a;if(!p){for(var x=g.parent;x&&(x.f&ki)!==0;)for(;(x=x.parent)&&(x.f&qi)===0;);p=!x||(x.f&Iu)!==0}p&&oc(()=>{st(()=>v.in())})}}function Of(r,e,t,n,i){var s=n===1;if(vo(e)){var o,a=!1;return Vr(()=>{if(!a){var g=e({direction:s?"in":"out"});o=Of(r,g,t,n,i)}}),{abort:()=>{a=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(t?.deactivate(),!e?.duration)return i(),{abort:on,deactivate:on,reset:on,t:()=>n};const{delay:c=0,css:l,tick:u,easing:h=by}=e;var f=[];if(s&&t===void 0&&(u&&u(0,1),l)){var d=Op(l(0,1));f.push(d,d)}var m=()=>1-n,v=r.animate(f,{duration:c,fill:"forwards"});return v.onfinish=()=>{v.cancel();var g=t?.t()??1-n;t?.abort();var p=n-g,x=e.duration*Math.abs(p),_=[];if(x>0){var y=!1;if(l)for(var S=Math.ceil(x/16.666666666666668),E=0;E<=S;E+=1){var A=g+p*h(E/S),I=Op(l(A,1-A));_.push(I),y||=I.overflow==="hidden"}y&&(r.style.overflow="hidden"),m=()=>{var b=v.currentTime;return g+p*h(b/x)},u&&xy(()=>{if(v.playState!=="running")return!1;var b=m();return u(b,1-b),!0})}v=r.animate(_,{duration:x,fill:"forwards"}),v.onfinish=()=>{m=()=>n,u?.(n,1-n),i()}},{abort:()=>{v&&(v.cancel(),v.effect=null,v.onfinish=on)},deactivate:()=>{i=on},reset:()=>{n===0&&u?.(1,0)},t:()=>m()}}function My(r,e,t,n,i,s){var o=null,a=r,c=new Nu(a,!1);$o(()=>{const l=e()||null;var u=l==="svg"?Ax:null;if(l===null){c.ensure(null,null),Sc(!0);return}return c.ensure(l,h=>{if(l){if(o=u?document.createElementNS(u,l):document.createElement(l),Ba(o,o),n){var f=o.appendChild(lr());n(o,f)}Mt.nodes.end=o,h.before(o)}}),Sc(!0),()=>{l&&Sc(!1)}},ki),sc(()=>{Sc(!0)})}function Sy(r,e,t){oc(()=>{var n=st(()=>e(r,t?.())||{});if(n?.destroy)return()=>n.destroy()})}function wy(r,e){var t=void 0,n;d0(()=>{t!==(t=e())&&(n&&(cn(n),n=null),t&&(n=Fn(()=>{oc(()=>t(r))})))})}function L0(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var i=r.length;for(e=0;e<i;e++)r[e]&&(t=L0(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function Ty(){for(var r,e,t=0,n="",i=arguments.length;t<i;t++)(r=arguments[t])&&(e=L0(r))&&(n&&(n+=" "),n+=e);return n}function Ff(r){return typeof r=="object"?Ty(r):r??""}const Fp=[...` 	
\r\f \v\uFEFF`];function Ey(r,e,t){var n=r==null?"":""+r;if(e&&(n=n?n+" "+e:e),t){for(var i in t)if(t[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,o=0;(o=n.indexOf(i,o))>=0;){var a=o+s;(o===0||Fp.includes(n[o-1]))&&(a===n.length||Fp.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function Bp(r,e=!1){var t=e?" !important;":";",n="";for(var i in r){var s=r[i];s!=null&&s!==""&&(n+=" "+i+": "+s+t)}return n}function Ih(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function Ay(r,e){if(e){var t="",n,i;if(Array.isArray(e)?(n=e[0],i=e[1]):n=e,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,c=[];n&&c.push(...Object.keys(n).map(Ih)),i&&c.push(...Object.keys(i).map(Ih));var l=0,u=-1;const v=r.length;for(var h=0;h<v;h++){var f=r[h];if(a?f==="/"&&r[h-1]==="*"&&(a=!1):s?s===f&&(s=!1):f==="/"&&r[h+1]==="*"?a=!0:f==='"'||f==="'"?s=f:f==="("?o++:f===")"&&o--,!a&&s===!1&&o===0){if(f===":"&&u===-1)u=h;else if(f===";"||h===v-1){if(u!==-1){var d=Ih(r.substring(l,u).trim());if(!c.includes(d)){f!==";"&&h++;var m=r.substring(l,h).trim();t+=" "+m+";"}}l=h+1,u=-1}}}}return n&&(t+=Bp(n)),i&&(t+=Bp(i,!0)),t=t.trim(),t===""?null:t}return r==null?null:String(r)}function Ur(r,e,t,n,i,s){var o=r.__className;if(o!==t||o===void 0){var a=Ey(t,n,s);a==null?r.removeAttribute("class"):e?r.className=a:r.setAttribute("class",a),r.__className=t}else if(s&&i!==s)for(var c in s){var l=!!s[c];(i==null||l!==!!i[c])&&r.classList.toggle(c,l)}return s}function Ph(r,e={},t,n){for(var i in t){var s=t[i];e[i]!==s&&(t[i]==null?r.style.removeProperty(i):r.style.setProperty(i,s,n))}}function ai(r,e,t,n){var i=r.__style;if(i!==e){var s=Ay(e,n);s==null?r.removeAttribute("style"):r.style.cssText=s,r.__style=e}else n&&(Array.isArray(n)?(Ph(r,t?.[0],n[0]),Ph(r,t?.[1],n[1],"important")):Ph(r,t,n));return n}function Bf(r,e,t=!1){if(r.multiple){if(e==null)return;if(!Eu(e))return Rx();for(var n of r.options)n.selected=e.includes(zp(n));return}for(n of r.options){var i=zp(n);if(Wx(i,e)){n.selected=!0;return}}(!t||e!==void 0)&&(r.selectedIndex=-1)}function Cy(r){var e=new MutationObserver(()=>{Bf(r,r.__value)});e.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),sc(()=>{e.disconnect()})}function zp(r){return"__value"in r?r.__value:r.value}const ia=Symbol("class"),_o=Symbol("style"),D0=Symbol("is custom element"),N0=Symbol("is html");function Ry(r,e){e?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Rl(r,e,t,n){var i=U0(r);i[e]!==(i[e]=t)&&(e==="loading"&&(r[tx]=t),t==null?r.removeAttribute(e):typeof t!="string"&&O0(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function Iy(r,e,t,n,i=!1,s=!1){var o=U0(r),a=o[D0],c=!o[N0],l=e||{},u=r.tagName==="OPTION";for(var h in e)h in t||(t[h]=null);t.class?t.class=Ff(t.class):t[ia]&&(t.class=null),t[_o]&&(t.style??=null);var f=O0(r);for(const y in t){let S=t[y];if(u&&y==="value"&&S==null){r.value=r.__value="",l[y]=S;continue}if(y==="class"){var d=r.namespaceURI==="http://www.w3.org/1999/xhtml";Ur(r,d,S,n,e?.[ia],t[ia]),l[y]=S,l[ia]=t[ia];continue}if(y==="style"){ai(r,S,e?.[_o],t[_o]),l[y]=S,l[_o]=t[_o];continue}var m=l[y];if(!(S===m&&!(S===void 0&&r.hasAttribute(y)))){l[y]=S;var v=y[0]+y[1];if(v!=="$$")if(v==="on"){const E={},A="$$"+y;let I=y.slice(2);var g=sy(I);if(iy(I)&&(I=I.slice(0,-7),E.capture=!0),!g&&m){if(S!=null)continue;r.removeEventListener(I,l[A],E),l[A]=null}if(S!=null)if(g)r[`__${I}`]=S,uy([I]);else{let b=function(T){l[y].call(this,T)};var _=b;l[A]=C0(I,r,b,E)}else g&&(r[`__${I}`]=void 0)}else if(y==="style")Rl(r,y,S);else if(y==="autofocus")Yx(r,!!S);else if(!a&&(y==="__value"||y==="value"&&S!=null))r.value=r.__value=S;else if(y==="selected"&&u)Ry(r,S);else{var p=y;c||(p=ay(p));var x=p==="defaultValue"||p==="defaultChecked";if(S==null&&!a&&!x)if(o[y]=null,p==="value"||p==="checked"){let E=r;const A=e===void 0;if(p==="value"){let I=E.defaultValue;E.removeAttribute(p),E.defaultValue=I,E.value=E.__value=A?I:null}else{let I=E.defaultChecked;E.removeAttribute(p),E.defaultChecked=I,E.checked=A?I:!1}}else r.removeAttribute(y);else x||f.includes(p)&&(a||typeof S!="string")?(r[p]=S,p in o&&(o[p]=sn)):typeof S!="function"&&Rl(r,p,S)}}}return l}function Py(r,e,t=[],n=[],i=[],s,o=!1,a=!1){n0(i,t,n,c=>{var l=void 0,u={},h=r.nodeName==="SELECT",f=!1;if(d0(()=>{var m=e(...c.map(w)),v=Iy(r,l,m,s,o,a);f&&h&&"value"in m&&Bf(r,m.value);for(let p of Object.getOwnPropertySymbols(u))m[p]||cn(u[p]);for(let p of Object.getOwnPropertySymbols(m)){var g=m[p];p.description===Cx&&(!l||g!==l[p])&&(u[p]&&cn(u[p]),u[p]=Fn(()=>wy(r,()=>g))),v[p]=g}l=v}),h){var d=r;oc(()=>{Bf(d,l.value,!0),Cy(d)})}f=!0})}function U0(r){return r.__attributes??={[D0]:r.nodeName.includes("-"),[N0]:r.namespaceURI===Ex}}var kp=new Map;function O0(r){var e=r.getAttribute("is")||r.nodeName,t=kp.get(e);if(t)return t;kp.set(e,t=[]);for(var n,i=r,s=Element.prototype;s!==i;){n=zg(i);for(var o in n)n[o].set&&t.push(o);i=ld(i)}return t}function Vp(r,e){return r===e||r?.[Bi]===e}function bs(r={},e,t,n){return oc(()=>{var i,s;return Du(()=>{i=s,s=[],st(()=>{r!==t(...s)&&(e(r,...s),i&&Vp(t(...i),r)&&e(null,...i))})}),()=>{Vr(()=>{s&&Vp(t(...s),r)&&e(null,...s)})}}),r}function Yi(r=!1){const e=It,t=e.l.u;if(!t)return;let n=()=>Xt(e.s);if(r){let i=0,s={};const o=nc(()=>{let a=!1;const c=e.s;for(const l in c)c[l]!==s[l]&&(s[l]=c[l],a=!0);return a&&i++,i});n=()=>w(o)}t.b.length&&rn(()=>{Gp(e,n),Ml(t.b)}),fr(()=>{const i=st(()=>t.m.map(ex));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&fr(()=>{Gp(e,n),Ml(t.a)})}function Gp(r,e){if(r.l.s)for(const t of r.l.s)w(t);e()}function pd(r,e,t){if(r==null)return e(void 0),t&&t(void 0),on;const n=st(()=>r.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}const $s=[];function Uu(r,e){return{subscribe:Lo(r,e).subscribe}}function Lo(r,e=on){let t=null;const n=new Set;function i(a){if(Yg(r,a)&&(r=a,t)){const c=!$s.length;for(const l of n)l[1](),$s.push(l,r);if(c){for(let l=0;l<$s.length;l+=2)$s[l][0]($s[l+1]);$s.length=0}}}function s(a){i(a(r))}function o(a,c=on){const l=[a,c];return n.add(l),n.size===1&&(t=e(i,s)||on),a(r),()=>{n.delete(l),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function md(r,e,t){const n=!Array.isArray(r),i=n?[r]:r;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return Uu(t,(o,a)=>{let c=!1;const l=[];let u=0,h=on;const f=()=>{if(u)return;h();const m=e(n?l[0]:l,o,a);s?o(m):h=typeof m=="function"?m:on},d=i.map((m,v)=>pd(m,g=>{l[v]=g,u&=~(1<<v),c&&f()},()=>{u|=1<<v}));return c=!0,f(),function(){Ml(d),h(),c=!1}})}function F0(r){let e;return pd(r,t=>e=t)(),e}let Tc=!1,zf=Symbol();function Ea(r,e,t){const n=t[e]??={store:null,source:Fe(void 0),unsubscribe:on};if(n.store!==r&&!(zf in t))if(n.unsubscribe(),n.store=r??null,r==null)n.source.v=void 0,n.unsubscribe=on;else{var i=!0;n.unsubscribe=pd(r,s=>{i?n.source.v=s:de(n.source,s)}),i=!1}return r&&zf in t?F0(r):w(n.source)}function gd(){const r={};function e(){sc(()=>{for(var t in r)r[t].unsubscribe();Bg(r,zf,{enumerable:!1,value:!0})})}return[r,e]}function Ly(r){var e=Tc;try{return Tc=!1,[r(),Tc]}finally{Tc=e}}const Dy={get(r,e){if(!r.exclude.includes(e))return r.props[e]},set(r,e){return!1},getOwnPropertyDescriptor(r,e){if(!r.exclude.includes(e)&&e in r.props)return{enumerable:!0,configurable:!0,value:r.props[e]}},has(r,e){return r.exclude.includes(e)?!1:e in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(e=>!r.exclude.includes(e))}};function Ou(r,e,t){return new Proxy({props:r,exclude:e},Dy)}const Ny={get(r,e){let t=r.props.length;for(;t--;){let n=r.props[t];if(vo(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(r,e,t){let n=r.props.length;for(;n--;){let i=r.props[n];vo(i)&&(i=i());const s=Lr(i,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(r,e){let t=r.props.length;for(;t--;){let n=r.props[t];if(vo(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const i=Lr(n,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(r,e){if(e===Bi||e===Wg)return!1;for(let t of r.props)if(vo(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(r){const e=[];for(let t of r.props)if(vo(t)&&(t=t()),!!t){for(const n in t)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(t))e.includes(n)||e.push(n)}return e}};function B0(...r){return new Proxy({props:r},Ny)}function et(r,e,t,n){var i=!Yo||(t&vx)!==0,s=(t&xx)!==0,o=(t&yx)!==0,a=n,c=!0,l=()=>(c&&(c=!1,a=o?st(n):n),a),u;if(s){var h=Bi in r||Wg in r;u=Lr(r,e)?.set??(h&&e in r?_=>r[e]=_:void 0)}var f,d=!1;s?[f,d]=Ly(()=>r[e]):f=r[e],f===void 0&&n!==void 0&&(f=l(),u&&(i&&ax(),u(f)));var m;if(i?m=()=>{var _=r[e];return _===void 0?l():(c=!0,_)}:m=()=>{var _=r[e];return _!==void 0&&(a=void 0),_===void 0?a:_},i&&(t&_x)===0)return m;if(u){var v=r.$$legacy;return(function(_,y){return arguments.length>0?((!i||!y||v||d)&&u(y?m():_),_):m()})}var g=!1,p=((t&gx)!==0?nc:xt)(()=>(g=!1,m()));s&&w(p);var x=Mt;return(function(_,y){if(arguments.length>0){const S=y?w(p):i&&s?yo(_):_;return de(p,S),g=!0,a!==void 0&&(a=S),_}return zs&&g||(x.f&cr)!==0?p.v:w(p)})}function $i(r){It===null&&Pu(),Yo&&It.l!==null?Oy(It).m.push(r):fr(()=>{const e=st(r);if(typeof e=="function")return e})}function ks(r){It===null&&Pu(),$i(()=>()=>st(r))}function Uy(r,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(r,{detail:e,bubbles:t,cancelable:n})}function Fu(){const r=It;return r===null&&Pu(),(e,t,n)=>{const i=r.s.$$events?.[e];if(i){const s=Eu(i)?i.slice():[i],o=Uy(e,t,n);for(const a of s)a.call(r.x,o);return!o.defaultPrevented}return!0}}function Oy(r){var e=r.l;return e.u??={a:[],b:[],m:[]}}const Fy="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Fy);Lx();const Hp=(r,e)=>{if(r===e)return!0;if(!r||!e)return!1;const t=r.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0},By=()=>{const r=[],n={items:r,remember:(i,s)=>{for(let a=0;a<r.length;a++){const c=r[a];if(Hp(s,c.keys)&&c.promise)return c.promise}const o={promise:i(),keys:s};return r.push(o),o.promise},clear:i=>{for(let s=0;s<r.length;s++){const o=r[s];if(Hp(i,o.keys)){r.splice(s,1);return}}}};return Gn("threlte-cache",n),n},zy=()=>{const r=vn("threlte-cache");if(!r)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return r};const Bu="182",ky={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vy={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},z0=0,kf=1,k0=2,Gy=3,Hy=0,Aa=1,Ca=2,bo=3,Gi=0,pn=1,En=2,zi=0,Ms=1,Il=2,Vf=3,Gf=4,V0=5,Ar=100,G0=101,H0=102,W0=103,X0=104,q0=200,Y0=201,$0=202,Z0=203,Pl=204,Ll=205,K0=206,j0=207,J0=208,Q0=209,ev=210,tv=211,nv=212,iv=213,rv=214,Dl=0,Nl=1,Ul=2,Cs=3,Ol=4,Fl=5,Bl=6,zl=7,ac=0,sv=1,ov=2,bi=0,vd=1,_d=2,xd=3,yd=4,bd=5,ka=6,Md=7,Hf="attached",av="detached",zu=300,Hi=301,Fr=302,Va=303,Ga=304,Ko=306,Br=1e3,Cn=1001,Do=1002,Bt=1003,ku=1004,Wy=1004,ps=1005,Xy=1005,Rt=1006,wo=1007,qy=1007,hi=1008,Yy=1008,Bn=1009,Sd=1010,wd=1011,No=1012,Vu=1013,fi=1014,Rn=1015,Wi=1016,Gu=1017,Hu=1018,Uo=1020,Td=35902,Ed=35899,Ad=1021,Cd=1022,In=1023,Xi=1026,Rr=1027,Wu=1028,cc=1029,Rs=1030,Xu=1031,$y=1032,qu=1033,Ra=33776,Ia=33777,Pa=33778,La=33779,kl=35840,Vl=35841,Gl=35842,Hl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37488,$l=37489,Zl=37490,Kl=37491,jl=37808,Jl=37809,Ql=37810,eu=37811,tu=37812,nu=37813,iu=37814,ru=37815,su=37816,ou=37817,au=37818,cu=37819,lu=37820,uu=37821,hu=36492,fu=36494,du=36495,pu=36283,mu=36284,gu=36285,vu=36286,cv=2200,lv=2201,uv=2202,Oo=2300,Fo=2301,xl=2302,ms=2400,gs=2401,Ha=2402,Yu=2500,Rd=2501,hv=0,Id=1,_u=2,fv=3200,Zy=3201,Ky=3202,jy=3203,Gr=0,dv=1,sr="",Kt="srgb",gn="srgb-linear",Wa="linear",St="srgb",Jy="",Qy="rg",eb="ga",tb=0,us=7680,nb=7681,ib=7682,rb=7683,sb=34055,ob=34056,ab=5386,cb=512,lb=513,ub=514,hb=515,fb=516,db=517,pb=518,Wf=519,pv=512,mv=513,gv=514,$u=515,vv=516,_v=517,Zu=518,xv=519,Xa=35044,mb=35048,gb=35040,vb=35045,_b=35049,xb=35041,yb=35046,bb=35050,Mb=35042,Sb="100",Xf="300 es",Kn=2e3,Bo=2001,wb={COMPUTE:"compute",RENDER:"render"},Tb={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Eb={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};function yv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const Ab={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Mo(r,e){return new Ab[r](e)}function bv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mv(){const r=qa("canvas");return r.style.display="block",r}const Wp={};let zr=null;function Cb(r){zr=r}function Rb(){return zr}function Ya(...r){const e="THREE."+r.shift();zr?zr("log",e,...r):console.log(e,...r)}function we(...r){const e="THREE."+r.shift();zr?zr("warn",e,...r):console.warn(e,...r)}function Ve(...r){const e="THREE."+r.shift();zr?zr("error",e,...r):console.error(e,...r)}function zo(...r){const e=r.join(" ");e in Wp||(Wp[e]=!0,we(...r))}function Ib(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xp=1234567;const Ss=Math.PI/180,ko=180/Math.PI;function Jn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function Pd(r,e){return(r%e+e)%e}function Pb(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Lb(r,e,t){return r!==e?(t-r)/(e-r):0}function Da(r,e,t){return(1-t)*r+t*e}function Db(r,e,t,n){return Da(r,e,1-Math.exp(-t*n))}function Nb(r,e=1){return e-Math.abs(Pd(r,e*2)-e)}function Ub(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ob(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Fb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Bb(r,e){return r+Math.random()*(e-r)}function zb(r){return r*(.5-Math.random())}function kb(r){r!==void 0&&(Xp=r);let e=Xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vb(r){return r*Ss}function Gb(r){return r*ko}function Hb(r){return(r&r-1)===0&&r!==0}function Wb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Xb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qb(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*f,a*l);break;case"YZY":r.set(c*f,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*f,a*u,a*l);break;case"XZX":r.set(a*u,c*m,c*d,a*l);break;case"YXY":r.set(c*d,a*u,c*m,a*l);break;case"ZYZ":r.set(c*m,c*d,a*u,a*l);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sv={DEG2RAD:Ss,RAD2DEG:ko,generateUUID:Jn,clamp:je,euclideanModulo:Pd,mapLinear:Pb,inverseLerp:Lb,lerp:Da,damp:Db,pingpong:Nb,smoothstep:Ub,smootherstep:Ob,randInt:Fb,randFloat:Bb,randFloatSpread:zb,seededRandom:kb,degToRad:Vb,radToDeg:Gb,isPowerOfTwo:Hb,ceilPowerOfTwo:Wb,floorPowerOfTwo:Xb,setQuaternionFromProperEuler:qb,normalize:at,denormalize:An};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],m=s[o+2],v=s[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(h!==v||c!==f||l!==d||u!==m){let g=c*f+l*d+u*m+h*v;g<0&&(f=-f,d=-d,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){const x=Math.acos(g),_=Math.sin(x);p=Math.sin(p*x)/_,a=Math.sin(a*x)/_,c=c*p+f*a,l=l*p+d*a,u=u*p+m*a,h=h*p+v*a}else{c=c*p+f*a,l=l*p+d*a,u=u*p+m*a,h=h*p+v*a;const x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+c*d-l*f,e[t+1]=c*m+u*f+l*h-a*d,e[t+2]=l*m+u*d+a*f-c*h,e[t+3]=u*m-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),d=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lh.copy(this).projectOnVector(e),this.sub(Lh)}reflect(e){return this.sub(Lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lh=new P,qp=new mn;class ot{constructor(e,t,n,i,s,o,a,c,l){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],v=i[0],g=i[3],p=i[6],x=i[1],_=i[4],y=i[7],S=i[2],E=i[5],A=i[8];return s[0]=o*v+a*x+c*S,s[3]=o*g+a*_+c*E,s[6]=o*p+a*y+c*A,s[1]=l*v+u*x+h*S,s[4]=l*g+u*_+h*E,s[7]=l*p+u*y+h*A,s[2]=f*v+d*x+m*S,s[5]=f*g+d*_+m*E,s[8]=f*p+d*y+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(i*l-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(u*t-i*c)*v,e[5]=(i*s-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new ot,Yp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$p=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yb(){const r={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(i.r=hr(i.r),i.g=hr(i.g),i.b=hr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=To(i.r),i.g=To(i.g),i.b=To(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===sr?Wa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[gn]:{primaries:e,whitePoint:n,transfer:Wa,toXYZ:Yp,fromXYZ:$p,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Yp,fromXYZ:$p,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),r}const ut=Yb();function hr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function To(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Zs;class wv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zs===void 0&&(Zs=qa("canvas")),Zs.width=e.width,Zs.height=e.height;const i=Zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=hr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hr(t[n]/255)*255):t[n]=hr(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $b=0;class Ir{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Nh(i[o].image)):s.push(Nh(i[o]))}else s=Nh(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Nh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let Zb=0;const Uh=new P;class Ut extends Zi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Cn,i=Cn,s=Rt,o=hi,a=In,c=Bn,l=Ut.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=Jn(),this.name="",this.source=new Ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Br:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Br:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=zu;Ut.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,y=(d+1)/2,S=(p+1)/2,E=(u+f)/4,A=(h+v)/4,I=(m+g)/4;return _>y&&_>S?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=E/n,s=A/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=I/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=A/s,i=I/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-v)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ld extends Zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Ut(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ir(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Ld{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ku extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kb extends Qn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ku(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class ju extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jb extends Qn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new ju(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class qt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gi):gi.fromBufferAttribute(s,o),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ec.copy(n.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Ac.subVectors(this.max,ra),Ks.subVectors(e.a,ra),js.subVectors(e.b,ra),Js.subVectors(e.c,ra),vr.subVectors(js,Ks),_r.subVectors(Js,js),$r.subVectors(Ks,Js);let t=[0,-vr.z,vr.y,0,-_r.z,_r.y,0,-$r.z,$r.y,vr.z,0,-vr.x,_r.z,0,-_r.x,$r.z,0,-$r.x,-vr.y,vr.x,0,-_r.y,_r.x,0,-$r.y,$r.x,0];return!Oh(t,Ks,js,Js,Ac)||(t=[1,0,0,0,1,0,0,0,1],!Oh(t,Ks,js,Js,Ac))?!1:(Cc.crossVectors(vr,_r),t=[Cc.x,Cc.y,Cc.z],Oh(t,Ks,js,Js,Ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new P,new P,new P,new P,new P,new P,new P,new P],gi=new P,Ec=new qt,Ks=new P,js=new P,Js=new P,vr=new P,_r=new P,$r=new P,ra=new P,Ac=new P,Cc=new P,Zr=new P;function Oh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Zr.fromArray(r,s);const a=i.x*Math.abs(Zr.x)+i.y*Math.abs(Zr.y)+i.z*Math.abs(Zr.z),c=e.dot(Zr),l=t.dot(Zr),u=n.dot(Zr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Jb=new qt,sa=new P,Fh=new P;class Yt{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jb.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Fh)),this.expandByPoint(sa.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ji=new P,Bh=new P,Rc=new P,xr=new P,zh=new P,Ic=new P,kh=new P;class Hr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bh.copy(e).add(t).multiplyScalar(.5),Rc.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(Bh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rc),a=xr.dot(this.direction),c=-xr.dot(Rc),l=xr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=s*u,h>=0)if(f>=-m)if(f<=m){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Bh).addScaledVector(Rc,f),d}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);const n=Ji.dot(this.direction),i=Ji.dot(Ji)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,i,s){zh.subVectors(t,e),Ic.subVectors(n,e),kh.crossVectors(zh,Ic);let o=this.direction.dot(kh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xr.subVectors(this.origin,e);const c=a*this.direction.dot(Ic.crossVectors(xr,Ic));if(c<0)return null;const l=a*this.direction.dot(zh.cross(xr));if(l<0||c+l>o)return null;const u=-a*xr.dot(kh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,s,o,a,c,l,u,h,f,d,m,v,g){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,f,d,m,v,g)}set(e,t,n,i,s,o,a,c,l,u,h,f,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Qs.setFromMatrixColumn(e,0).length(),s=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f+v*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f-v*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=c*u,t[4]=m*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qb,e,eM)}lookAt(e,t,n){const i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),yr.crossVectors(n,Yn),yr.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),yr.crossVectors(n,Yn)),yr.normalize(),Pc.crossVectors(Yn,yr),i[0]=yr.x,i[4]=Pc.x,i[8]=Yn.x,i[1]=yr.y,i[5]=Pc.y,i[9]=Yn.y,i[2]=yr.z,i[6]=Pc.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],_=n[7],y=n[11],S=n[15],E=i[0],A=i[4],I=i[8],b=i[12],T=i[1],D=i[5],F=i[9],O=i[13],k=i[2],V=i[6],W=i[10],z=i[14],K=i[3],ee=i[7],Y=i[11],J=i[15];return s[0]=o*E+a*T+c*k+l*K,s[4]=o*A+a*D+c*V+l*ee,s[8]=o*I+a*F+c*W+l*Y,s[12]=o*b+a*O+c*z+l*J,s[1]=u*E+h*T+f*k+d*K,s[5]=u*A+h*D+f*V+d*ee,s[9]=u*I+h*F+f*W+d*Y,s[13]=u*b+h*O+f*z+d*J,s[2]=m*E+v*T+g*k+p*K,s[6]=m*A+v*D+g*V+p*ee,s[10]=m*I+v*F+g*W+p*Y,s[14]=m*b+v*O+g*z+p*J,s[3]=x*E+_*T+y*k+S*K,s[7]=x*A+_*D+y*V+S*ee,s[11]=x*I+_*F+y*W+S*Y,s[15]=x*b+_*O+y*z+S*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15],x=c*d-l*f,_=a*d-l*h,y=a*f-c*h,S=o*d-l*u,E=o*f-c*u,A=o*h-a*u;return t*(v*x-g*_+p*y)-n*(m*x-g*S+p*E)+i*(m*_-v*S+p*A)-s*(m*y-v*E+g*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],x=h*g*l-v*f*l+v*c*d-a*g*d-h*c*p+a*f*p,_=m*f*l-u*g*l-m*c*d+o*g*d+u*c*p-o*f*p,y=u*v*l-m*h*l+m*a*d-o*v*d-u*a*p+o*h*p,S=m*h*c-u*v*c-m*a*f+o*v*f+u*a*g-o*h*g,E=t*x+n*_+i*y+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(v*f*s-h*g*s-v*i*d+n*g*d+h*i*p-n*f*p)*A,e[2]=(a*g*s-v*c*s+v*i*l-n*g*l-a*i*p+n*c*p)*A,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*d-n*c*d)*A,e[4]=_*A,e[5]=(u*g*s-m*f*s+m*i*d-t*g*d-u*i*p+t*f*p)*A,e[6]=(m*c*s-o*g*s-m*i*l+t*g*l+o*i*p-t*c*p)*A,e[7]=(o*f*s-u*c*s+u*i*l-t*f*l-o*i*d+t*c*d)*A,e[8]=y*A,e[9]=(m*h*s-u*v*s-m*n*d+t*v*d+u*n*p-t*h*p)*A,e[10]=(o*v*s-m*a*s+m*n*l-t*v*l-o*n*p+t*a*p)*A,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*A,e[12]=S*A,e[13]=(u*v*i-m*h*i+m*n*f-t*v*f-u*n*g+t*h*g)*A,e[14]=(m*a*i-o*v*i-m*n*c+t*v*c+o*n*g-t*a*g)*A,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,m=s*h,v=o*u,g=o*h,p=a*h,x=c*l,_=c*u,y=c*h,S=n.x,E=n.y,A=n.z;return i[0]=(1-(v+p))*S,i[1]=(d+y)*S,i[2]=(m-_)*S,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(f+p))*E,i[6]=(g+x)*E,i[7]=0,i[8]=(m+_)*A,i[9]=(g-x)*A,i[10]=(1-(f+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Qs.set(i[0],i[1],i[2]).length();const o=Qs.set(i[4],i[5],i[6]).length(),a=Qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),vi.copy(this);const l=1/s,u=1/o,h=1/a;return vi.elements[0]*=l,vi.elements[1]*=l,vi.elements[2]*=l,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Kn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let m,v;if(c)m=s/(o-s),v=o*s/(o-s);else if(a===Kn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Bo)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Kn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let m,v;if(c)m=1/(o-s),v=o/(o-s);else if(a===Kn)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===Bo)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qs=new P,vi=new ke,Qb=new P(0,0,0),eM=new P(1,1,1),yr=new P,Pc=new P,Yn=new P,Zp=new ke,Kp=new mn;class ei{constructor(e=0,t=0,n=0,i=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Ju{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tM=0;const jp=new P,eo=new mn,Qi=new ke,Lc=new P,oa=new P,nM=new P,iM=new mn,Jp=new P(1,0,0),Qp=new P(0,1,0),em=new P(0,0,1),tm={type:"added"},rM={type:"removed"},to={type:"childadded",child:null},Vh={type:"childremoved",child:null};class pt extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new P,t=new ei,n=new mn,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new ot}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,t){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lc.copy(e):Lc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(oa,Lc,this.up):Qi.lookAt(Lc,oa,this.up),this.quaternion.setFromRotationMatrix(Qi),i&&(Qi.extractRotation(i.matrixWorld),eo.setFromRotationMatrix(Qi),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),to.child=e,this.dispatchEvent(to),to.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rM),Vh.child=e,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new P(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new P,er=new P,Gh=new P,tr=new P,no=new P,io=new P,nm=new P,Hh=new P,Wh=new P,Xh=new P,qh=new bt,Yh=new bt,$h=new bt;class zn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_i.subVectors(e,t),i.cross(_i);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_i.subVectors(i,t),er.subVectors(n,t),Gh.subVectors(e,t);const o=_i.dot(_i),a=_i.dot(er),c=_i.dot(Gh),l=er.dot(er),u=er.dot(Gh),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,tr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,tr.x),c.addScaledVector(o,tr.y),c.addScaledVector(a,tr.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return qh.setScalar(0),Yh.setScalar(0),$h.setScalar(0),qh.fromBufferAttribute(e,t),Yh.fromBufferAttribute(e,n),$h.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(qh,s.x),o.addScaledVector(Yh,s.y),o.addScaledVector($h,s.z),o}static isFrontFacing(e,t,n,i){return _i.subVectors(n,t),er.subVectors(e,t),_i.cross(er).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),er.subVectors(this.a,this.b),_i.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;no.subVectors(i,n),io.subVectors(s,n),Hh.subVectors(e,n);const c=no.dot(Hh),l=io.dot(Hh);if(c<=0&&l<=0)return t.copy(n);Wh.subVectors(e,i);const u=no.dot(Wh),h=io.dot(Wh);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(no,o);Xh.subVectors(e,s);const d=no.dot(Xh),m=io.dot(Xh);if(m>=0&&d<=m)return t.copy(s);const v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(io,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return nm.subVectors(s,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(nm,a);const p=1/(g+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(no,o).addScaledVector(io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Zh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Pd(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zh(o,s,e+1/3),this.g=Zh(o,s,e),this.b=Zh(o,s,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=Tv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return ut.workingToColorSpace(fn.copy(this),e),Math.round(je(fn.r*255,0,255))*65536+Math.round(je(fn.g*255,0,255))*256+Math.round(je(fn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,s=fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Kt){ut.workingToColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Dc);const n=Da(br.h,Dc.h,t),i=Da(br.s,Dc.s,t),s=Da(br.l,Dc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Se;Se.NAMES=Tv;let sM=0;class Jt extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Ms,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Ll,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ll&&(n.blendDst=this.blendDst),this.blendEquation!==Ar&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pn extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const or=oM();function oM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function On(r){Math.abs(r)>65504&&we("DataUtils.toHalfFloat(): Value out of range."),r=je(r,-65504,65504),or.floatView[0]=r;const e=or.uint32View[0],t=e>>23&511;return or.baseTable[t]+((e&8388607)>>or.shiftTable[t])}function ya(r){const e=r>>10;return or.uint32View[0]=or.mantissaTable[or.offsetTable[e]+(r&1023)]+or.exponentTable[e],or.floatView[0]}class aM{static toHalfFloat(e){return On(e)}static fromHalfFloat(e){return ya(e)}}const $t=new P,Nc=new ie;let cM=0;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nc.fromBufferAttribute(this,t),Nc.applyMatrix3(e),this.setXY(t,Nc.x,Nc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xa&&(e.usage=this.usage),e}}class lM extends gt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class uM extends gt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class hM extends gt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class fM extends gt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Dd extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dM extends gt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Nd extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pM extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ya(this.array[e*this.itemSize]);return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=On(t),this}getY(e){let t=ya(this.array[e*this.itemSize+1]);return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=On(t),this}getZ(e){let t=ya(this.array[e*this.itemSize+2]);return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=On(t),this}getW(e){let t=ya(this.array[e*this.itemSize+3]);return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=On(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=On(t),this.array[e+1]=On(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=On(t),this.array[e+1]=On(n),this.array[e+2]=On(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=On(t),this.array[e+1]=On(n),this.array[e+2]=On(i),this.array[e+3]=On(s),this}}class Ne extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mM=0;const ni=new ke,Kh=new pt,ro=new P,$n=new qt,aa=new qt,tn=new P;class nt extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yv(e)?Nd:Dd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors($n.min,aa.min),$n.expandByPoint(tn),tn.addVectors($n.max,aa.max),$n.expandByPoint(tn)):($n.expandByPoint(aa.min),$n.expandByPoint(aa.max))}$n.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tn.fromBufferAttribute(a,l),c&&(ro.fromBufferAttribute(e,l),tn.add(ro)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new P,c[I]=new P;const l=new P,u=new P,h=new P,f=new ie,d=new ie,m=new ie,v=new P,g=new P;function p(I,b,T){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,T),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),u.sub(l),h.sub(l),d.sub(f),m.sub(f);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(D),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(D),a[I].add(v),a[b].add(v),a[T].add(v),c[I].add(g),c[b].add(g),c[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,b=x.length;I<b;++I){const T=x[I],D=T.start,F=T.count;for(let O=D,k=D+F;O<k;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const _=new P,y=new P,S=new P,E=new P;function A(I){S.fromBufferAttribute(i,I),E.copy(S);const b=a[I];_.copy(b),_.sub(S.multiplyScalar(S.dot(b))).normalize(),y.crossVectors(E,b);const D=y.dot(c[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,D)}for(let I=0,b=x.length;I<b;++I){const T=x[I],D=T.start,F=T.count;for(let O=D,k=D+F;O<k;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let p=0;p<u;p++)f[m++]=l[d++]}return new gt(f,u,h)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new ke,Kr=new Hr,Uc=new Yt,rm=new P,Oc=new P,Fc=new P,Bc=new P,jh=new P,zc=new P,sm=new P,kc=new P;class zt extends pt{constructor(e=new nt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){zc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(jh.fromBufferAttribute(h,e),o?zc.addScaledVector(jh,u):zc.addScaledVector(jh.sub(t),u))}t.add(zc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(s),Kr.copy(e.ray).recast(e.near),!(Uc.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Uc,rm)===null||Kr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(im),!(n.boundingBox!==null&&Kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,S=_;y<S;y+=3){const E=a.getX(y),A=a.getX(y+1),I=a.getX(y+2);i=Vc(this,p,e,n,l,u,h,E,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);i=Vc(this,o,e,n,l,u,h,x,_,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,S=_;y<S;y+=3){const E=y,A=y+1,I=y+2;i=Vc(this,p,e,n,l,u,h,E,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=g,_=g+1,y=g+2;i=Vc(this,o,e,n,l,u,h,x,_,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function gM(r,e,t,n,i,s,o,a){let c;if(e.side===pn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Gi,a),c===null)return null;kc.copy(a),kc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(kc);return l<t.near||l>t.far?null:{distance:l,point:kc.clone(),object:r}}function Vc(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Oc),r.getVertexPosition(c,Fc),r.getVertexPosition(l,Bc);const u=gM(r,e,t,n,Oc,Fc,Bc,sm);if(u){const h=new P;zn.getBarycoord(sm,Oc,Fc,Bc,h),i&&(u.uv=zn.getInterpolatedAttribute(i,a,c,l,h,new ie)),s&&(u.uv1=zn.getInterpolatedAttribute(s,a,c,l,h,new ie)),o&&(u.normal=zn.getInterpolatedAttribute(o,a,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new P,materialIndex:0};zn.getNormal(Oc,Fc,Bc,f.normal),u.face=f,u.barycoord=h}return u}class Vs extends nt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(h,2));function m(v,g,p,x,_,y,S,E,A,I,b){const T=y/A,D=S/I,F=y/2,O=S/2,k=E/2,V=A+1,W=I+1;let z=0,K=0;const ee=new P;for(let Y=0;Y<W;Y++){const J=Y*D-O;for(let Me=0;Me<V;Me++){const Re=Me*T-F;ee[v]=Re*x,ee[g]=J*_,ee[p]=k,l.push(ee.x,ee.y,ee.z),ee[v]=0,ee[g]=0,ee[p]=E>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Me/A),h.push(1-Y/I),z+=1}}for(let Y=0;Y<I;Y++)for(let J=0;J<A;J++){const Me=f+J+V*Y,Re=f+J+V*(Y+1),tt=f+(J+1)+V*(Y+1),Je=f+(J+1)+V*Y;c.push(Me,Re,Je),c.push(Re,tt,Je),K+=6}a.addGroup(d,K,b),d+=K,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const n=Vo(r[t]);for(const i in n)e[i]=n[i]}return e}function vM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ev(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Ud={clone:Vo,merge:bn};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vo(e.uniforms),this.uniformsGroups=vM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qu extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new P,om=new ie,am=new ie;class jt extends Qu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,om,am),t.subVectors(am,om)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class Av extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jt(so,oo,e,t);i.layers=this.layers,this.add(i);const s=new jt(so,oo,e,t);s.layers=this.layers,this.add(s);const o=new jt(so,oo,e,t);o.layers=this.layers,this.add(o);const a=new jt(so,oo,e,t);a.layers=this.layers,this.add(a);const c=new jt(so,oo,e,t);c.layers=this.layers,this.add(c);const l=new jt(so,oo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class lc extends Ut{constructor(e=[],t=Hi,n,i,s,o,a,c,l,u){super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Od extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vs(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:zi});s.uniforms.tEquirect.value=t;const o=new zt(i,s),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=Rt),new Av(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Oi extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yM={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yM)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class eh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new eh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class th{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new th(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Fd=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class uc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xa,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yn=new P;class kr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bd extends Jt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ao;const ca=new P,co=new P,lo=new P,uo=new ie,la=new ie,Cv=new ke,Gc=new P,ua=new P,Hc=new P,cm=new ie,Jh=new ie,lm=new ie;class Rv extends pt{constructor(e=new Bd){if(super(),this.isSprite=!0,this.type="Sprite",ao===void 0){ao=new nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uc(t,5);ao.setIndex([0,1,2,0,2,3]),ao.setAttribute("position",new kr(n,3,0,!1)),ao.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=ao,this.material=e,this.center=new ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),co.setFromMatrixScale(this.matrixWorld),Cv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&co.multiplyScalar(-lo.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Wc(Gc.set(-.5,-.5,0),lo,o,co,i,s),Wc(ua.set(.5,-.5,0),lo,o,co,i,s),Wc(Hc.set(.5,.5,0),lo,o,co,i,s),cm.set(0,0),Jh.set(1,0),lm.set(1,1);let a=e.ray.intersectTriangle(Gc,ua,Hc,!1,ca);if(a===null&&(Wc(ua.set(-.5,.5,0),lo,o,co,i,s),Jh.set(0,1),a=e.ray.intersectTriangle(Gc,Hc,ua,!1,ca),a===null))return;const c=e.ray.origin.distanceTo(ca);c<e.near||c>e.far||t.push({distance:c,point:ca.clone(),uv:zn.getInterpolation(ca,Gc,ua,Hc,cm,Jh,lm,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Wc(r,e,t,n,i,s){uo.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(la.x=s*uo.x-i*uo.y,la.y=i*uo.x+s*uo.y):la.copy(uo),r.copy(e),r.x+=la.x,r.y+=la.y,r.applyMatrix4(Cv)}const Xc=new P,um=new P;class Iv extends pt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Xc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Xc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Xc.setFromMatrixPosition(e.matrixWorld),um.setFromMatrixPosition(this.matrixWorld);const n=Xc.distanceTo(um)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const hm=new P,fm=new bt,dm=new bt,bM=new P,pm=new ke,qc=new P,Qh=new Yt,mm=new ke,ef=new Hr;class zd extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hf,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qc),this.boundingBox.expandByPoint(qc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qc),this.boundingSphere.expandByPoint(qc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qh.copy(this.boundingSphere),Qh.applyMatrix4(i),e.ray.intersectsSphere(Qh)!==!1&&(mm.copy(i).invert(),ef.copy(e.ray).applyMatrix4(mm),!(this.boundingBox!==null&&ef.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ef)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===av?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;fm.fromBufferAttribute(i.attributes.skinIndex,e),dm.fromBufferAttribute(i.attributes.skinWeight,e),hm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=dm.getComponent(s);if(o!==0){const a=fm.getComponent(s);pm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(bM.copy(hm).applyMatrix4(pm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nh extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Mi extends Ut{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Bt,u=Bt,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gm=new ke,MM=new ke;class hc{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:MM;gm.multiplyMatrices(a,t[s]),gm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Mi(t,e,e,In,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(we("Skeleton: No bone found with UUID:",s),o=new nh),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Is extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ho=new ke,vm=new ke,Yc=[],_m=new qt,SM=new ke,ha=new zt,fa=new Yt;class kd extends zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,SM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),_m.copy(e.boundingBox).applyMatrix4(ho),this.boundingBox.union(_m)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),fa.copy(e.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(n),e.ray.intersectsSphere(fa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ho),vm.multiplyMatrices(n,ho),ha.matrixWorld=vm,ha.raycast(e,Yc);for(let o=0,a=Yc.length;o<a;o++){const c=Yc[o];c.instanceId=s,c.object=this,t.push(c)}Yc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mi(new Float32Array(i*this.count),i,this.count,Wu,Rn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const tf=new P,wM=new P,TM=new ot;class Tr{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=tf.subVectors(n,t).cross(wM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||TM.getNormalMatrix(e),i=this.coplanarPoint(tf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Yt,EM=new ie(.5,.5),$c=new P;class jo{constructor(e=new Tr,t=new Tr,n=new Tr,i=new Tr,s=new Tr,o=new Tr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],v=s[9],g=s[10],p=s[11],x=s[12],_=s[13],y=s[14],S=s[15];if(i[0].setComponents(l-o,d-u,p-m,S-x).normalize(),i[1].setComponents(l+o,d+u,p+m,S+x).normalize(),i[2].setComponents(l+a,d+h,p+v,S+_).normalize(),i[3].setComponents(l-a,d-h,p-v,S-_).normalize(),n)i[4].setComponents(c,f,g,y).normalize(),i[5].setComponents(l-c,d-f,p-g,S-y).normalize();else if(i[4].setComponents(l-c,d-f,p-g,S-y).normalize(),t===Kn)i[5].setComponents(l+c,d+f,p+g,S+y).normalize();else if(t===Bo)i[5].setComponents(c,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);const t=EM.distanceTo(e.center);return jr.radius=.7071067811865476+t,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($c.x=i.normal.x>0?e.max.x:e.min.x,$c.y=i.normal.y>0?e.max.y:e.min.y,$c.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($c)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ii=new ke,Pi=new jo;class ih{constructor(){this.coordinateSystem=Kn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Ii.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Pi.setFromProjectionMatrix(Ii,i.coordinateSystem,i.reversedDepth),Pi.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Ii.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Pi.setFromProjectionMatrix(Ii,i.coordinateSystem,i.reversedDepth),Pi.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Ii.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Pi.setFromProjectionMatrix(Ii,i.coordinateSystem,i.reversedDepth),Pi.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Ii.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Pi.setFromProjectionMatrix(Ii,i.coordinateSystem,i.reversedDepth),Pi.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Ii.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Pi.setFromProjectionMatrix(Ii,i.coordinateSystem,i.reversedDepth),Pi.containsPoint(e))return!0}return!1}clone(){return new ih}}function nf(r,e){return r-e}function AM(r,e){return r.z-e.z}function CM(r,e){return e.z-r.z}class RM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const a=s[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Un=new ke,IM=new Se(1,1,1),xm=new jo,PM=new ih,Zc=new qt,Jr=new Yt,da=new P,ym=new P,LM=new P,rf=new RM,dn=new zt,Kc=[];function DM(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function Qr(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class Pv extends zt{constructor(e,t,n=t*2,i){super(new nt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Mi(t,e,e,In,Rn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Mi(t,e,e,cc,fi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Mi(t,e,e,In,Rn);n.colorSpace=ut.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:a,itemSize:c,normalized:l}=o,u=new a.constructor(n*c),h=new gt(u,c,l);t.setAttribute(s,h)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new gt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Un),this.getBoundingBoxAt(s,Zc).applyMatrix4(Un),e.union(Zc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Un),this.getBoundingSphereAt(s,Jr).applyMatrix4(Un),e.union(Jr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(nf),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;Un.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(IM.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(nf),c=this._availableGeometryIds.shift(),s[c]=i):(c=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const h=t.getAttribute(u),f=n.getAttribute(u);DM(h,f,c);const d=h.itemSize;for(let m=h.count,v=l;m<v;m++){const g=c+m;for(let p=0;p<d;p++)f.setComponent(g,p,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,l*d)}if(i){const u=a.indexStart,h=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let f=0;f<o.count;f++)s.setX(u+f,c+o.getX(f));for(let f=o.count,d=h;f<d;f++)s.setX(u+f,c);s.needsUpdate=!0,s.addUpdateRange(u,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=i[o],l=n[c];if(l.active!==!1){if(s.index!==null){if(l.indexStart!==t){const{indexStart:u,vertexStart:h,reservedIndexCount:f}=l,d=s.index,m=d.array,v=e-h;for(let g=u;g<u+f;g++)m[g]=m[g]+v;d.array.copyWithin(t,u,u+f),d.addUpdateRange(t,f),d.needsUpdate=!0,l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:u,reservedVertexCount:h}=l,f=s.attributes;for(const d in f){const m=f[d],{array:v,itemSize:g}=m;v.copyWithin(e*g,u*g,(u+h)*g),m.addUpdateRange(e*g,h*g),m.needsUpdate=!0}l.vertexStart=e}e+=l.reservedVertexCount,l.start=s.index?l.indexStart:l.vertexStart,this._nextIndexStart=s.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new qt,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let u=c;o&&(u=o.getX(u)),s.expandByPoint(da.fromBufferAttribute(a,u))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new Yt;this.getBoundingBoxAt(e,Zc),Zc.getCenter(s.center);const o=n.index,a=n.attributes.position;let c=0;for(let l=i.start,u=i.start+i.count;l<u;l++){let h=l;o&&(h=o.getX(h)),da.fromBufferAttribute(a,h),c=Math.max(c,s.center.distanceToSquared(da))}s.radius=Math.sqrt(c),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(nf);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);Qr(this._multiDrawCounts,i),Qr(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Qr(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Qr(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Qr(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new nt,this._initializeGeometry(s));const o=this.geometry;s.index&&Qr(s.index.array,o.index.array);for(const a in s.attributes)Qr(s.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;dn.material=this.material,dn.geometry.index=o.index,dn.geometry.attributes=o.attributes,dn.geometry.boundingBox===null&&(dn.geometry.boundingBox=new qt),dn.geometry.boundingSphere===null&&(dn.geometry.boundingSphere=new Yt);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,u=i[l];dn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,dn.matrixWorld).premultiply(s),this.getBoundingBoxAt(l,dn.geometry.boundingBox),this.getBoundingSphereAt(l,dn.geometry.boundingSphere),dn.raycast(e,Kc);for(let h=0,f=Kc.length;h<f;h++){const d=Kc[h];d.object=this,d.batchId=a,t.push(d)}Kc.length=0}dn.material=null,dn.geometry.index=null,dn.geometry.attributes={},dn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,m=d.image.data,v=n.isArrayCamera?PM:xm;f&&!n.isArrayCamera&&(Un.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),xm.setFromProjectionMatrix(Un,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){Un.copy(this.matrixWorld).invert(),da.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Un),ym.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Un);for(let _=0,y=c.length;_<y;_++)if(c[_].visible&&c[_].active){const S=c[_].geometryIndex;this.getMatrixAt(_,Un),this.getBoundingSphereAt(S,Jr).applyMatrix4(Un);let E=!1;if(f&&(E=!v.intersectsSphere(Jr,n)),!E){const A=h[S],I=LM.subVectors(Jr.center,da).dot(ym);rf.push(A.start,A.count,I,_)}}const p=rf.list,x=this.customSort;x===null?p.sort(s.transparent?CM:AM):x.call(this,p,n);for(let _=0,y=p.length;_<y;_++){const S=p[_];l[g]=S.start*a,u[g]=S.count,m[g]=S.index,g++}rf.reset()}else for(let p=0,x=c.length;p<x;p++)if(c[p].visible&&c[p].active){const _=c[p].geometryIndex;let y=!1;if(f&&(this.getMatrixAt(p,Un),this.getBoundingSphereAt(_,Jr).applyMatrix4(Un),y=!v.intersectsSphere(Jr,n)),!y){const S=h[_];l[g]=S.start*a,u[g]=S.count,m[g]=p,g++}}d.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class _n extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xu=new P,yu=new P,bm=new ke,pa=new Hr,jc=new Yt,sf=new P,Mm=new P;class dr extends pt{constructor(e=new nt,t=new _n){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)xu.fromBufferAttribute(t,i-1),yu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xu.distanceTo(yu);e.setAttribute("lineDistance",new Ne(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jc.copy(n.boundingSphere),jc.applyMatrix4(i),jc.radius+=s,e.ray.intersectsSphere(jc)===!1)return;bm.copy(i).invert(),pa.copy(e.ray).applyMatrix4(bm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=l){const p=u.getX(v),x=u.getX(v+1),_=Jc(this,e,pa,c,p,x,v);_&&t.push(_)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(d),p=Jc(this,e,pa,c,v,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=l){const p=Jc(this,e,pa,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Jc(this,e,pa,c,m-1,d,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jc(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(xu.fromBufferAttribute(a,i),yu.fromBufferAttribute(a,s),t.distanceSqToSegment(xu,yu,sf,Mm)>n)return;sf.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(sf);if(!(l<e.near||l>e.far))return{distance:l,point:Mm.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Sm=new P,wm=new P;class Ai extends dr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Sm.fromBufferAttribute(t,i),wm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Sm.distanceTo(wm);e.setAttribute("lineDistance",new Ne(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vd extends dr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let rh=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Tm=new ke,qf=new Hr,Qc=new Yt,el=new P;class Gd extends pt{constructor(e=new nt,t=new rh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qc.copy(n.boundingSphere),Qc.applyMatrix4(i),Qc.radius+=s,e.ray.intersectsSphere(Qc)===!1)return;Tm.copy(i).invert(),qf.copy(e.ray).applyMatrix4(Tm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,v=d;m<v;m++){const g=l.getX(m);el.fromBufferAttribute(h,g),Em(el,g,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,v=d;m<v;m++)el.fromBufferAttribute(h,m),Em(el,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Em(r,e,t,n,i,s,o){const a=qf.distanceSqToPoint(r);if(a<t){const c=new P;qf.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Lv extends Ut{constructor(e,t,n,i,s=Rt,o=Rt,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class NM extends Lv{constructor(e,t,n,i,s,o,a,c){super({},e,t,n,i,s,o,a,c),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class UM extends Ut{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Bt,this.minFilter=Bt,this.generateMipmaps=!1,this.needsUpdate=!0}}class sh extends Ut{constructor(e,t,n,i,s,o,a,c,l,u,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class OM extends sh{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Cn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FM extends sh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Hi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class BM extends Ut{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Go extends Ut{constructor(e,t,n=fi,i,s,o,a=Bt,c=Bt,l,u=Xi,h=1){if(u!==Xi&&u!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dv extends Go{constructor(e,t=fi,n=Hi,i,s,o=Bt,a=Bt,c,l=Xi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hd extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oh extends nt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,f=t,d=2*h+f,m=n*2+s,v=i+1,g=new P,p=new P;for(let x=0;x<=m;x++){let _=0,y=0,S=0,E=0;if(x<=n){const b=x/n,T=b*Math.PI/2;y=-u-e*Math.cos(T),S=e*Math.sin(T),E=-e*Math.cos(T),_=b*h}else if(x<=n+s){const b=(x-n)/s;y=-u+b*t,S=e,E=0,_=h+b*f}else{const b=(x-n-s)/n,T=b*Math.PI/2;y=u+e*Math.sin(T),S=e*Math.cos(T),E=e*Math.sin(T),_=h+f+b*h}const A=Math.max(0,Math.min(1,_/d));let I=0;x===0?I=.5/i:x===m&&(I=-.5/i);for(let b=0;b<=i;b++){const T=b/i,D=T*Math.PI*2,F=Math.sin(D),O=Math.cos(D);p.x=-S*O,p.y=y,p.z=S*F,a.push(p.x,p.y,p.z),g.set(-S*O,E,S*F),g.normalize(),c.push(g.x,g.y,g.z),l.push(T+I,A)}if(x>0){const b=(x-1)*v;for(let T=0;T<i;T++){const D=b+T,F=b+T+1,O=x*v+T,k=x*v+T+1;o.push(D,F,O),o.push(F,k,O)}}}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class fc extends nt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new P,u=new ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(a,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class dc extends nt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let m=0;const v=[],g=n/2;let p=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Ne(h,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(d,2));function x(){const y=new P,S=new P;let E=0;const A=(t-e)/n;for(let I=0;I<=s;I++){const b=[],T=I/s,D=T*(t-e)+e;for(let F=0;F<=i;F++){const O=F/i,k=O*c+a,V=Math.sin(k),W=Math.cos(k);S.x=D*V,S.y=-T*n+g,S.z=D*W,h.push(S.x,S.y,S.z),y.set(V,A,W).normalize(),f.push(y.x,y.y,y.z),d.push(O,1-T),b.push(m++)}v.push(b)}for(let I=0;I<i;I++)for(let b=0;b<s;b++){const T=v[b][I],D=v[b+1][I],F=v[b+1][I+1],O=v[b][I+1];(e>0||b!==0)&&(u.push(T,D,O),E+=3),(t>0||b!==s-1)&&(u.push(D,F,O),E+=3)}l.addGroup(p,E,0),p+=E}function _(y){const S=m,E=new ie,A=new P;let I=0;const b=y===!0?e:t,T=y===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,g*T,0),f.push(0,T,0),d.push(.5,.5),m++;const D=m;for(let F=0;F<=i;F++){const k=F/i*c+a,V=Math.cos(k),W=Math.sin(k);A.x=b*W,A.y=g*T,A.z=b*V,h.push(A.x,A.y,A.z),f.push(0,T,0),E.x=V*.5+.5,E.y=W*.5*T+.5,d.push(E.x,E.y),m++}for(let F=0;F<i;F++){const O=S+F,k=D+F;y===!0?u.push(k,k+1,O):u.push(k+1,k,O),I+=3}l.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pc extends dc{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new pc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wr extends nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),u(),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(s.slice(),3)),this.setAttribute("uv",new Ne(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new P,y=new P,S=new P;for(let E=0;E<t.length;E+=3)d(t[E+0],_),d(t[E+1],y),d(t[E+2],S),c(_,y,S,x)}function c(x,_,y,S){const E=S+1,A=[];for(let I=0;I<=E;I++){A[I]=[];const b=x.clone().lerp(y,I/E),T=_.clone().lerp(y,I/E),D=E-I;for(let F=0;F<=D;F++)F===0&&I===E?A[I][F]=b:A[I][F]=b.clone().lerp(T,F/D)}for(let I=0;I<E;I++)for(let b=0;b<2*(E-I)-1;b++){const T=Math.floor(b/2);b%2===0?(f(A[I][T+1]),f(A[I+1][T]),f(A[I][T])):(f(A[I][T+1]),f(A[I+1][T+1]),f(A[I+1][T]))}}function l(x){const _=new P;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(x),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function u(){const x=new P;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const y=g(x)/2/Math.PI+.5,S=p(x)/Math.PI+.5;o.push(y,1-S)}m(),h()}function h(){for(let x=0;x<o.length;x+=6){const _=o[x+0],y=o[x+2],S=o[x+4],E=Math.max(_,y,S),A=Math.min(_,y,S);E>.9&&A<.1&&(_<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),S<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,_){const y=x*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function m(){const x=new P,_=new P,y=new P,S=new P,E=new ie,A=new ie,I=new ie;for(let b=0,T=0;b<s.length;b+=9,T+=6){x.set(s[b+0],s[b+1],s[b+2]),_.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),E.set(o[T+0],o[T+1]),A.set(o[T+2],o[T+3]),I.set(o[T+4],o[T+5]),S.copy(x).add(_).add(y).divideScalar(3);const D=g(S);v(E,T+0,x,D),v(A,T+2,_,D),v(I,T+4,y,D)}}function v(x,_,y,S){S<0&&x.x===1&&(o[_]=x.x-1),y.x===0&&y.z===0&&(o[_]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.vertices,e.indices,e.radius,e.detail)}}class Ho extends Wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ho(e.radius,e.detail)}}const tl=new P,nl=new P,of=new P,il=new zn;class Nv extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Ss*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:v,b:g,c:p}=il;if(v.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),il.getNormal(of),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const _=(x+1)%3,y=h[x],S=h[_],E=il[u[x]],A=il[u[_]],I=`${y}_${S}`,b=`${S}_${y}`;b in f&&f[b]?(of.dot(f[b].normal)<=s&&(d.push(E.x,E.y,E.z),d.push(A.x,A.y,A.z)),f[b]=null):I in f||(f[I]={index0:l[x],index1:l[_],normal:of.clone()})}}for(const m in f)if(f[m]){const{index0:v,index1:g}=f[m];tl.fromBufferAttribute(a,v),nl.fromBufferAttribute(a,g),d.push(tl.x,tl.y,tl.z),d.push(nl.x,nl.y,nl.z)}this.setAttribute("position",new Ne(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ci{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){we("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new ie:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,i=[],s=[],o=[],a=new P,c=new ke;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(je(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(je(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ah extends Ci{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ie){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Uv extends ah{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wd(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const rl=new P,af=new Wd,cf=new Wd,lf=new Wd;class Ov extends Ci{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%s]:(rl.subVectors(i[0],i[1]).add(i[0]),l=rl);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(rl.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=rl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),af.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,m,v,g),cf.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,m,v,g),lf.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(af.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),cf.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),lf.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(af.calc(c),cf.calc(c),lf.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Am(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function zM(r,e){const t=1-r;return t*t*e}function kM(r,e){return 2*(1-r)*r*e}function VM(r,e){return r*r*e}function Na(r,e,t,n){return zM(r,e)+kM(r,t)+VM(r,n)}function GM(r,e){const t=1-r;return t*t*t*e}function HM(r,e){const t=1-r;return 3*t*t*r*e}function WM(r,e){return 3*(1-r)*r*r*e}function XM(r,e){return r*r*r*e}function Ua(r,e,t,n,i){return GM(r,e)+HM(r,t)+WM(r,n)+XM(r,i)}class Xd extends Ci{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ua(e,i.x,s.x,o.x,a.x),Ua(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fv extends Ci{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ua(e,i.x,s.x,o.x,a.x),Ua(e,i.y,s.y,o.y,a.y),Ua(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qd extends Ci{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bv extends Ci{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yd extends Ci{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Na(e,i.x,s.x,o.x),Na(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $d extends Ci{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Na(e,i.x,s.x,o.x),Na(e,i.y,s.y,o.y),Na(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zd extends Ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Am(a,c.x,l.x,u.x,h.x),Am(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ie().fromArray(i))}return this}}var bu=Object.freeze({__proto__:null,ArcCurve:Uv,CatmullRomCurve3:Ov,CubicBezierCurve:Xd,CubicBezierCurve3:Fv,EllipseCurve:ah,LineCurve:qd,LineCurve3:Bv,QuadraticBezierCurve:Yd,QuadraticBezierCurve3:$d,SplineCurve:Zd});class zv extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new bu[i.type]().fromJSON(i))}return this}}class Mu extends zv{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new qd(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Yd(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Xd(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Zd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new ah(e,t,n,i,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ws extends Mu{constructor(e){super(e),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Mu().fromJSON(i))}return this}}function qM(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=kv(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=jM(r,e,s,t)),r.length>80*t){a=r[0],c=r[1];let u=a,h=c;for(let f=t;f<i;f+=t){const d=r[f],m=r[f+1];d<a&&(a=d),m<c&&(c=m),d>u&&(u=d),m>h&&(h=m)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return $a(s,o,t,a,c,l,0),o}function kv(r,e,t,n,i){let s;if(i===cS(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=Cm(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Cm(o/n|0,r[o],r[o+1],s);return s&&Wo(s,s.next)&&(Ka(s),s=s.next),s}function Ps(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Wo(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Ka(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $a(r,e,t,n,i,s,o){if(!r)return;!o&&s&&nS(r,n,i,s);let a=r;for(;r.prev!==r.next;){const c=r.prev,l=r.next;if(s?$M(r,n,i,s):YM(r)){e.push(c.i,r.i,l.i),Ka(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=ZM(Ps(r),e),$a(r,e,t,n,i,s,2)):o===2&&KM(r,e,t,n,i,s):$a(Ps(r),e,t,n,i,s,1);break}}}function YM(r){const e=r.prev,t=r,n=r.next;if(Ot(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(i,s,o),h=Math.min(a,c,l),f=Math.max(i,s,o),d=Math.max(a,c,l);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&ba(i,a,s,c,o,l,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $M(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Ot(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,d=Math.min(a,c,l),m=Math.min(u,h,f),v=Math.max(a,c,l),g=Math.max(u,h,f),p=Yf(d,m,e,t,n),x=Yf(v,g,e,t,n);let _=r.prevZ,y=r.nextZ;for(;_&&_.z>=p&&y&&y.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&ba(a,u,c,h,l,f,_.x,_.y)&&Ot(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ba(a,u,c,h,l,f,y.x,y.y)&&Ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&ba(a,u,c,h,l,f,_.x,_.y)&&Ot(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ba(a,u,c,h,l,f,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ZM(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Wo(n,i)&&Gv(n,t,t.next,i)&&Za(n,i)&&Za(i,n)&&(e.push(n.i,t.i,i.i),Ka(t),Ka(t.next),t=r=i),t=t.next}while(t!==r);return Ps(t)}function KM(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sS(o,a)){let c=Hv(o,a);o=Ps(o,o.next),c=Ps(c,c.next),$a(o,e,t,n,i,s,0),$a(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function jM(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=kv(r,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(rS(l))}i.sort(JM);for(let s=0;s<i.length;s++)t=QM(i[s],t);return t}function JM(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function QM(r,e){const t=eS(r,e);if(!t)return e;const n=Hv(t,r);return Ps(n,n.next),Ps(t,t.next)}function eS(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Wo(r,t))return t;do{if(Wo(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Vv(i<l?n:s,i,c,l,i<l?s:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);Za(t,r)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&tS(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function tS(r,e){return Ot(r.prev,r,e.prev)<0&&Ot(e.next,r,r.next)<0}function nS(r,e,t,n){let i=r;do i.z===0&&(i.z=Yf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,iS(i)}function iS(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Yf(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function rS(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Vv(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function ba(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&Vv(r,e,t,n,i,s,o,a)}function sS(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!oS(r,e)&&(Za(r,e)&&Za(e,r)&&aS(r,e)&&(Ot(r.prev,r,e.prev)||Ot(r,e.prev,e))||Wo(r,e)&&Ot(r.prev,r,r.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Wo(r,e){return r.x===e.x&&r.y===e.y}function Gv(r,e,t,n){const i=ol(Ot(r,e,t)),s=ol(Ot(r,e,n)),o=ol(Ot(t,n,r)),a=ol(Ot(t,n,e));return!!(i!==s&&o!==a||i===0&&sl(r,t,e)||s===0&&sl(r,n,e)||o===0&&sl(t,r,n)||a===0&&sl(t,e,n))}function sl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ol(r){return r>0?1:r<0?-1:0}function oS(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Gv(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Za(r,e){return Ot(r.prev,r,r.next)<0?Ot(r,e,r.next)>=0&&Ot(r,r.prev,e)>=0:Ot(r,e,r.prev)<0||Ot(r,r.next,e)<0}function aS(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Hv(r,e){const t=$f(r.i,r.x,r.y),n=$f(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Cm(r,e,t,n){const i=$f(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ka(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function $f(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cS(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class lS{static triangulate(e,t,n=2){return qM(e,t,n)}}class yi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return yi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Rm(e),Im(n,e);let o=e.length;t.forEach(Rm);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Im(n,t[c]);const a=lS.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Rm(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Im(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ch extends nt{constructor(e=new ws([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ne(i,3)),this.setAttribute("uv",new Ne(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:uS;let _,y=!1,S,E,A,I;if(p){_=p.getSpacedPoints(u),y=!0,f=!1;const ne=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(u,ne),E=new P,A=new P,I=new P}f||(g=0,d=0,m=0,v=0);const b=a.extractPoints(l);let T=b.shape;const D=b.holes;if(!yi.isClockWise(T)){T=T.reverse();for(let ne=0,le=D.length;ne<le;ne++){const se=D[ne];yi.isClockWise(se)&&(D[ne]=se.reverse())}}function O(ne){const se=10000000000000001e-36;let _e=ne[0];for(let L=1;L<=ne.length;L++){const Ue=L%ne.length,Te=ne[Ue],Ie=Te.x-_e.x,oe=Te.y-_e.y,R=Ie*Ie+oe*oe,M=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(_e.x),Math.abs(_e.y)),U=se*M*M;if(R<=U){ne.splice(Ue,1),L--;continue}_e=Te}}O(T),D.forEach(O);const k=D.length,V=T;for(let ne=0;ne<k;ne++){const le=D[ne];T=T.concat(le)}function W(ne,le,se){return le||Ve("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(le,se)}const z=T.length;function K(ne,le,se){let _e,L,Ue;const Te=ne.x-le.x,Ie=ne.y-le.y,oe=se.x-ne.x,R=se.y-ne.y,M=Te*Te+Ie*Ie,U=Te*R-Ie*oe;if(Math.abs(U)>Number.EPSILON){const G=Math.sqrt(M),Z=Math.sqrt(oe*oe+R*R),X=le.x-Ie/G,pe=le.y+Te/G,ae=se.x-R/Z,me=se.y+oe/Z,De=((ae-X)*R-(me-pe)*oe)/(Te*R-Ie*oe);_e=X+Te*De-ne.x,L=pe+Ie*De-ne.y;const Q=_e*_e+L*L;if(Q<=2)return new ie(_e,L);Ue=Math.sqrt(Q/2)}else{let G=!1;Te>Number.EPSILON?oe>Number.EPSILON&&(G=!0):Te<-Number.EPSILON?oe<-Number.EPSILON&&(G=!0):Math.sign(Ie)===Math.sign(R)&&(G=!0),G?(_e=-Ie,L=Te,Ue=Math.sqrt(M)):(_e=Te,L=Ie,Ue=Math.sqrt(M/2))}return new ie(_e/Ue,L/Ue)}const ee=[];for(let ne=0,le=V.length,se=le-1,_e=ne+1;ne<le;ne++,se++,_e++)se===le&&(se=0),_e===le&&(_e=0),ee[ne]=K(V[ne],V[se],V[_e]);const Y=[];let J,Me=ee.concat();for(let ne=0,le=k;ne<le;ne++){const se=D[ne];J=[];for(let _e=0,L=se.length,Ue=L-1,Te=_e+1;_e<L;_e++,Ue++,Te++)Ue===L&&(Ue=0),Te===L&&(Te=0),J[_e]=K(se[_e],se[Ue],se[Te]);Y.push(J),Me=Me.concat(J)}let Re;if(g===0)Re=yi.triangulateShape(V,D);else{const ne=[],le=[];for(let se=0;se<g;se++){const _e=se/g,L=d*Math.cos(_e*Math.PI/2),Ue=m*Math.sin(_e*Math.PI/2)+v;for(let Te=0,Ie=V.length;Te<Ie;Te++){const oe=W(V[Te],ee[Te],Ue);ze(oe.x,oe.y,-L),_e===0&&ne.push(oe)}for(let Te=0,Ie=k;Te<Ie;Te++){const oe=D[Te];J=Y[Te];const R=[];for(let M=0,U=oe.length;M<U;M++){const G=W(oe[M],J[M],Ue);ze(G.x,G.y,-L),_e===0&&R.push(G)}_e===0&&le.push(R)}}Re=yi.triangulateShape(ne,le)}const tt=Re.length,Je=m+v;for(let ne=0;ne<z;ne++){const le=f?W(T[ne],Me[ne],Je):T[ne];y?(A.copy(S.normals[0]).multiplyScalar(le.x),E.copy(S.binormals[0]).multiplyScalar(le.y),I.copy(_[0]).add(A).add(E),ze(I.x,I.y,I.z)):ze(le.x,le.y,0)}for(let ne=1;ne<=u;ne++)for(let le=0;le<z;le++){const se=f?W(T[le],Me[le],Je):T[le];y?(A.copy(S.normals[ne]).multiplyScalar(se.x),E.copy(S.binormals[ne]).multiplyScalar(se.y),I.copy(_[ne]).add(A).add(E),ze(I.x,I.y,I.z)):ze(se.x,se.y,h/u*ne)}for(let ne=g-1;ne>=0;ne--){const le=ne/g,se=d*Math.cos(le*Math.PI/2),_e=m*Math.sin(le*Math.PI/2)+v;for(let L=0,Ue=V.length;L<Ue;L++){const Te=W(V[L],ee[L],_e);ze(Te.x,Te.y,h+se)}for(let L=0,Ue=D.length;L<Ue;L++){const Te=D[L];J=Y[L];for(let Ie=0,oe=Te.length;Ie<oe;Ie++){const R=W(Te[Ie],J[Ie],_e);y?ze(R.x,R.y+_[u-1].y,_[u-1].x+se):ze(R.x,R.y,h+se)}}}j(),re();function j(){const ne=i.length/3;if(f){let le=0,se=z*le;for(let _e=0;_e<tt;_e++){const L=Re[_e];ye(L[2]+se,L[1]+se,L[0]+se)}le=u+g*2,se=z*le;for(let _e=0;_e<tt;_e++){const L=Re[_e];ye(L[0]+se,L[1]+se,L[2]+se)}}else{for(let le=0;le<tt;le++){const se=Re[le];ye(se[2],se[1],se[0])}for(let le=0;le<tt;le++){const se=Re[le];ye(se[0]+z*u,se[1]+z*u,se[2]+z*u)}}n.addGroup(ne,i.length/3-ne,0)}function re(){const ne=i.length/3;let le=0;Ee(V,le),le+=V.length;for(let se=0,_e=D.length;se<_e;se++){const L=D[se];Ee(L,le),le+=L.length}n.addGroup(ne,i.length/3-ne,1)}function Ee(ne,le){let se=ne.length;for(;--se>=0;){const _e=se;let L=se-1;L<0&&(L=ne.length-1);for(let Ue=0,Te=u+g*2;Ue<Te;Ue++){const Ie=z*Ue,oe=z*(Ue+1),R=le+_e+Ie,M=le+L+Ie,U=le+L+oe,G=le+_e+oe;it(R,M,U,G)}}}function ze(ne,le,se){c.push(ne),c.push(le),c.push(se)}function ye(ne,le,se){ct(ne),ct(le),ct(se);const _e=i.length/3,L=x.generateTopUV(n,i,_e-3,_e-2,_e-1);$e(L[0]),$e(L[1]),$e(L[2])}function it(ne,le,se,_e){ct(ne),ct(le),ct(_e),ct(le),ct(se),ct(_e);const L=i.length/3,Ue=x.generateSideWallUV(n,i,L-6,L-3,L-2,L-1);$e(Ue[0]),$e(Ue[1]),$e(Ue[3]),$e(Ue[1]),$e(Ue[2]),$e(Ue[3])}function ct(ne){i.push(c[ne*3+0]),i.push(c[ne*3+1]),i.push(c[ne*3+2])}function $e(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return hS(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new bu[i.type]().fromJSON(i)),new ch(n,e.options)}}const uS={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new ie(s,o),new ie(a,c),new ie(l,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],v=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ie(o,1-c),new ie(l,1-h),new ie(f,1-m),new ie(v,1-p)]:[new ie(a,1-c),new ie(u,1-h),new ie(d,1-m),new ie(g,1-p)]}};function hS(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class mc extends Wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mc(e.radius,e.detail)}}class lh extends nt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=je(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/t,h=new P,f=new ie,d=new P,m=new P,v=new P;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(m)}for(let x=0;x<=t;x++){const _=n+x*u*i,y=Math.sin(_),S=Math.cos(_);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*S,o.push(h.x,h.y,h.z),f.x=x/t,f.y=E/(e.length-1),a.push(f.x,f.y);const A=c[3*E+0]*y,I=c[3*E+1],b=c[3*E+0]*S;l.push(A,I,b)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){const y=_+x*e.length,S=y,E=y+e.length,A=y+e.length+1,I=y+1;s.push(S,E,I),s.push(A,I,E)}this.setIndex(s),this.setAttribute("position",new Ne(o,3)),this.setAttribute("uv",new Ne(a,2)),this.setAttribute("normal",new Ne(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.points,e.segments,e.phiStart,e.phiLength)}}class Jo extends Wr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jo(e.radius,e.detail)}}class Qo extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const x=p*f-o;for(let _=0;_<l;_++){const y=_*h-s;m.push(y,-x,0),v.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const _=x+l*p,y=x+l*(p+1),S=x+1+l*(p+1),E=x+1+l*p;d.push(_,y,E),d.push(y,S,E)}this.setIndex(d),this.setAttribute("position",new Ne(m,3)),this.setAttribute("normal",new Ne(v,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.widthSegments,e.heightSegments)}}class uh extends nt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=e;const f=(t-e)/i,d=new P,m=new ie;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const p=s+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let v=0;v<i;v++){const g=v*(n+1);for(let p=0;p<n;p++){const x=p+g,_=x,y=x+n+1,S=x+n+2,E=x+1;a.push(_,y,E),a.push(y,S,E)}}this.setIndex(a),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hh extends nt{constructor(e=new ws([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ne(i,3)),this.setAttribute("normal",new Ne(s,3)),this.setAttribute("uv",new Ne(o,2));function l(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;yi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];yi.isClockWise(x)===!0&&(m[g]=x.reverse())}const v=yi.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];d=d.concat(x)}for(let g=0,p=d.length;g<p;g++){const x=d[g];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let g=0,p=v.length;g<p;g++){const x=v[g],_=x[0]+h,y=x[1]+h,S=x[2]+h;n.push(_,y,S),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return fS(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new hh(n,e.curveSegments)}}function fS(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class gc extends nt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new P,f=new P,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const E=S/t;h.x=-e*Math.cos(i+E*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(i+E*s)*Math.sin(o+_*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),g.push(E+y,1-_),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const _=u[p][x+1],y=u[p][x],S=u[p+1][x],E=u[p+1][x+1];(p!==0||o>0)&&d.push(_,y,E),(p!==n-1||c<Math.PI)&&d.push(y,S,E)}this.setIndex(d),this.setAttribute("position",new Ne(m,3)),this.setAttribute("normal",new Ne(v,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vc extends Wr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vc(e.radius,e.detail)}}class fh extends nt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new P,h=new P,f=new P;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const v=m/i*s,g=d/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(v),h.y=(e+t*Math.cos(g))*Math.sin(v),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const v=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,x=(i+1)*d+m;o.push(v,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class dh extends nt{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],u=[],h=new P,f=new P,d=new P,m=new P,v=new P,g=new P,p=new P;for(let _=0;_<=n;++_){const y=_/n*s*Math.PI*2;x(y,s,o,e,d),x(y+.01,s,o,e,m),g.subVectors(m,d),p.addVectors(m,d),v.crossVectors(g,p),p.crossVectors(v,g),v.normalize(),p.normalize();for(let S=0;S<=i;++S){const E=S/i*Math.PI*2,A=-t*Math.cos(E),I=t*Math.sin(E);h.x=d.x+(A*p.x+I*v.x),h.y=d.y+(A*p.y+I*v.y),h.z=d.z+(A*p.z+I*v.z),c.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),u.push(_/n),u.push(S/i)}}for(let _=1;_<=n;_++)for(let y=1;y<=i;y++){const S=(i+1)*(_-1)+(y-1),E=(i+1)*_+(y-1),A=(i+1)*_+y,I=(i+1)*(_-1)+y;a.push(S,E,I),a.push(E,A,I)}this.setIndex(a),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(u,2));function x(_,y,S,E,A){const I=Math.cos(_),b=Math.sin(_),T=S/y*_,D=Math.cos(T);A.x=E*(2+D)*.5*I,A.y=E*(2+D)*b*.5,A.z=E*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ph extends nt{constructor(e=new $d(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new ie;let u=new P;const h=[],f=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Ne(h,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(d,2));function v(){for(let _=0;_<t;_++)g(_);g(s===!1?t:0),x(),p()}function g(_){u=e.getPointAt(_/t,u);const y=o.normals[_],S=o.binormals[_];for(let E=0;E<=i;E++){const A=E/i*Math.PI*2,I=Math.sin(A),b=-Math.cos(A);c.x=b*y.x+I*S.x,c.y=b*y.y+I*S.y,c.z=b*y.z+I*S.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=i;y++){const S=(i+1)*(_-1)+(y-1),E=(i+1)*_+(y-1),A=(i+1)*_+y,I=(i+1)*(_-1)+y;m.push(S,E,I),m.push(E,A,I)}}function x(){for(let _=0;_<=t;_++)for(let y=0;y<=i;y++)l.x=_/t,l.y=y/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ph(new bu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Wv extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new P,s=new P;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],f=h.start,d=h.count;for(let m=f,v=f+d;m<v;m+=3)for(let g=0;g<3;g++){const p=a.getX(m+g),x=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),s.fromBufferAttribute(o,x),Pm(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),Pm(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ne(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Pm(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Lm=Object.freeze({__proto__:null,BoxGeometry:Vs,CapsuleGeometry:oh,CircleGeometry:fc,ConeGeometry:pc,CylinderGeometry:dc,DodecahedronGeometry:Ho,EdgesGeometry:Nv,ExtrudeGeometry:ch,IcosahedronGeometry:mc,LatheGeometry:lh,OctahedronGeometry:Jo,PlaneGeometry:Qo,PolyhedronGeometry:Wr,RingGeometry:uh,ShapeGeometry:hh,SphereGeometry:gc,TetrahedronGeometry:vc,TorusGeometry:fh,TorusKnotGeometry:dh,TubeGeometry:ph,WireframeGeometry:Wv});class Xv extends Jt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Se(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Kd extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _c extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pi extends _c{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qv extends Jt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Se(16777215),this.specular=new Se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yv extends Jt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class $v extends Jt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Zv extends Jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jd extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jd extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kv extends Jt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jv extends _n{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function vs(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Jv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Zf(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function Qd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function dS(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],f=[];for(let d=0;d<l.times.length;++d){const m=l.times[d]*i;if(!(m<t||m>=n)){h.push(l.times[d]);for(let v=0;v<u;++v)f.push(l.values[d*u+v])}}h.length!==0&&(l.times=vs(h,l.times.constructor),l.values=vs(f,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s}function pS(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const m=a.times.length-1;let v;if(s<=a.times[0]){const p=u,x=h-u;v=a.values.slice(p,x)}else if(s>=a.times[m]){const p=m*h+u,x=p+h-u;v=a.values.slice(p,x)}else{const p=a.createInterpolant(),x=u,_=h-u;p.evaluate(s),v=p.resultBuffer.slice(x,_)}c==="quaternion"&&new mn().fromArray(v).normalize().conjugate().toArray(v);const g=l.times.length;for(let p=0;p<g;++p){const x=p*d+f;if(c==="quaternion")mn.multiplyQuaternionsFlat(l.values,x,v,0,l.values,x);else{const _=d-f*2;for(let y=0;y<_;++y)l.values[x+y]-=v[y]}}}return r.blendMode=Rd,r}class mS{static convertArray(e,t){return vs(e,t)}static isTypedArray(e){return bv(e)}static getKeyframeOrder(e){return Jv(e)}static sortedArray(e,t,n){return Zf(e,t,n)}static flattenJSON(e,t,n,i){Qd(e,t,n,i)}static subclip(e,t,n,i,s=30){return dS(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return pS(e,t,n,i)}}class ea{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Qv extends ea{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ms,endingEnd:ms}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case gs:s=e,a=2*t-n;break;case Ha:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gs:o=e,c=2*n-t;break;case Ha:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,x=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,_=(-1-d)*g+(1.5+d)*v+.5*m,y=d*g-d*v;for(let S=0;S!==a;++S)s[S]=p*o[u+S]+x*o[l+S]+_*o[c+S]+y*o[h+S];return s}}class ep extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}}class e_ extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vs(t,this.TimeBufferType),this.values=vs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vs(e.times,Array),values:vs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new e_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ep(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oo:t=this.InterpolantFactoryMethodDiscrete;break;case Fo:t=this.InterpolantFactoryMethodLinear;break;case xl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){Ve("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ve("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&bv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const v=t[h+m];if(v!==t[f+m]||v!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Fo;class Gs extends mi{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Oo;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class tp extends mi{constructor(e,t,n,i){super(e,t,n,i)}}tp.prototype.ValueTypeName="color";class Ls extends mi{constructor(e,t,n,i){super(e,t,n,i)}}Ls.prototype.ValueTypeName="number";class t_ extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)mn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Ds extends mi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new t_(this.times,this.values,this.getValueSize(),e)}}Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends mi{constructor(e,t,n){super(e,t,n)}}Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Oo;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends mi{constructor(e,t,n,i){super(e,t,n,i)}}Ns.prototype.ValueTypeName="vector";class Xo{constructor(e="",t=-1,n=[],i=Yu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(vS(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(mi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Jv(c);c=Zf(c,1,u),l=Zf(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ls(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(we("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ve("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,v){if(d.length!==0){const g=[],p=[];Qd(d,g,p,m),g.length!==0&&v.push(new h(f,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)d[f[m].morphTargets[v]]=-1;for(const v in d){const g=[],p=[];for(let x=0;x!==f[m].morphTargets.length;++x){const _=f[m];g.push(_.time),p.push(_.morphTarget===v?1:0)}i.push(new Ls(".morphTargetInfluence["+v+"]",g,p))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(Ns,d+".position",f,"pos",i),n(Ds,d+".quaternion",f,"rot",i),n(Ns,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function gS(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ls;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return tp;case"quaternion":return Ds;case"bool":case"boolean":return Gs;case"string":return Hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function vS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=gS(r.type);if(r.times===void 0){const t=[],n=[];Qd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Fi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class np{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ws=new np;class Ln{constructor(e){this.manager=e!==void 0?e:Ws,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ln.DEFAULT_MATERIAL_NAME="__DEFAULT";const nr={};class _S extends Error{constructor(e,t){super(e),this.response=t}}class Ti extends Ln{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(nr[e]!==void 0){nr[e].push({onLoad:t,onProgress:n,onError:i});return}nr[e]=[],nr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=nr[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let v=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:_,value:y})=>{if(_)p.close();else{v+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let E=0,A=u.length;E<A;E++){const I=u[E];I.onProgress&&I.onProgress(S)}p.enqueue(y),x()}},_=>{p.error(_)})}}});return new Response(g)}else throw new _S(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Fi.add(`file:${e}`,l);const u=nr[e];delete nr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=nr[e];if(u===void 0)throw this.manager.itemError(e),l;delete nr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class xS extends Ln{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ti(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):Ve(c),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Xo.parse(e[n]);t.push(i)}return t}}class yS extends Ln{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new sh,c=new Ti(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function u(h){c.load(e[h],function(f){const d=s.parse(f,!0);o[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=Rt),a.image=o,a.format=d.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let h=0,f=e.length;h<f;++h)u(h);else c.load(e,function(h){const f=s.parse(h,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let m=0;m<d;m++){o[m]={mipmaps:[]};for(let v=0;v<f.mipmapCount;v++)o[m].mipmaps.push(f.mipmaps[m*f.mipmapCount+v]),o[m].format=f.format,o[m].width=f.width,o[m].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=Rt),a.format=f.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}const fo=new WeakMap;class ja extends Ln{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=fo.get(o);h===void 0&&(h=[],fo.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=qa("img");function c(){u(),t&&t(this);const h=fo.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}fo.delete(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),Fi.remove(`image:${e}`);const f=fo.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(h)}fo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class bS extends Ln{constructor(e){super(e)}load(e,t,n,i){const s=new lc;s.colorSpace=Kt;const o=new ja(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class MS extends Ln{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Mi,a=new Ti(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(i!==void 0)i(u);else{u(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Cn,o.wrapT=l.wrapT!==void 0?l.wrapT:Cn,o.magFilter=l.magFilter!==void 0?l.magFilter:Rt,o.minFilter=l.minFilter!==void 0?l.minFilter:Rt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=hi),l.mipmapCount===1&&(o.minFilter=Rt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class n_ extends Ln{constructor(e){super(e)}load(e,t,n,i){const s=new Ut,o=new ja(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Xr extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class i_ extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const uf=new ke,Dm=new P,Nm=new P;class ip{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dm),Nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nm),t.updateMatrixWorld(),uf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class SS extends ip{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ko*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rp extends Xr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new SS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class wS extends ip{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}}class sp extends Xr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Xs extends Qu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class TS extends ip{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class op extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new TS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class r_ extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class s_ extends Xr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class ap{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class o_ extends Xr{constructor(e=new ap,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class mh extends Ln{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new Ti(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):Ve(c),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&we("MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(i.allowOverride=e.allowOverride),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new Se().setHex(o.value);break;case"v2":i.uniforms[s].value=new ie().fromArray(o.value);break;case"v3":i.uniforms[s].value=new P().fromArray(o.value);break;case"v4":i.uniforms[s].value=new bt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new ot().fromArray(o.value);break;case"m4":i.uniforms[s].value=new ke().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new ie().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return mh.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Xv,SpriteMaterial:Bd,RawShaderMaterial:Kd,ShaderMaterial:di,PointsMaterial:rh,MeshPhysicalMaterial:pi,MeshStandardMaterial:_c,MeshPhongMaterial:qv,MeshToonMaterial:Yv,MeshNormalMaterial:$v,MeshLambertMaterial:Zv,MeshDepthMaterial:jd,MeshDistanceMaterial:Jd,MeshBasicMaterial:Pn,MeshMatcapMaterial:Kv,LineDashedMaterial:jv,LineBasicMaterial:_n,Material:Jt};return new t[e]}}class Or{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class a_ extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class c_ extends Ln{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ti(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):Ve(c),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,m){if(t[m]!==void 0)return t[m];const g=d.interleavedBuffers[m],p=s(d,g.buffer),x=Mo(g.type,p),_=new uc(x,g.stride);return _.uuid=g.uuid,t[m]=_,_}function s(d,m){if(n[m]!==void 0)return n[m];const g=d.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const o=e.isInstancedBufferGeometry?new a_:new nt,a=e.data.index;if(a!==void 0){const d=Mo(a.type,a.array);o.setIndex(new gt(d,1))}const c=e.data.attributes;for(const d in c){const m=c[d];let v;if(m.isInterleavedBufferAttribute){const g=i(e.data,m.data);v=new kr(g,m.itemSize,m.offset,m.normalized)}else{const g=Mo(m.type,m.array),p=m.isInstancedBufferAttribute?Is:gt;v=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(v.name=m.name),m.usage!==void 0&&v.setUsage(m.usage),o.setAttribute(d,v)}const l=e.data.morphAttributes;if(l)for(const d in l){const m=l[d],v=[];for(let g=0,p=m.length;g<p;g++){const x=m[g];let _;if(x.isInterleavedBufferAttribute){const y=i(e.data,x.data);_=new kr(y,x.itemSize,x.offset,x.normalized)}else{const y=Mo(x.type,x.array);_=new gt(y,x.itemSize,x.normalized)}x.name!==void 0&&(_.name=x.name),v.push(_)}o.morphAttributes[d]=v}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,m=h.length;d!==m;++d){const v=h[d];o.addGroup(v.start,v.count,v.materialIndex)}const f=e.data.boundingSphere;return f!==void 0&&(o.boundingSphere=new Yt().fromJSON(f)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class ES extends Ln{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Or.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Ti(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){i!==void 0&&i(h),h("ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),Ve("ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Or.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Ti(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,c,a,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),this.bindLightTargets(l),t!==void 0){let h=!1;for(const f in o)if(o[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new ws().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new hc().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new c_;for(let s=0,o=e.length;s<o;s++){let a;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in Lm?a=Lm[c.type].fromJSON(c,t):we(`ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new mh;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Xo.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:Mo(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new np(t);s=new ja(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.url;if(Array.isArray(f)){const d=[];for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new Mi(p.data,p.width,p.height)))}i[h.uuid]=new Ir(d)}else{const d=a(h.url);i[h.uuid]=new Ir(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:Mo(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new ja(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.url;if(Array.isArray(l)){const u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=await s(d);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new Mi(m.data,m.width,m.height)))}n[c.uuid]=new Ir(u)}else{const u=await s(c.url);n[c.uuid]=new Ir(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(we("ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&we('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&we("ObjectLoader: Undefined image",a.image);const c=t[a.image],l=c.data;let u;Array.isArray(l)?(u=new lc,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new Mi:u=new Ut,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,AS)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Um),u.wrapT=n(a.wrap[1],Um)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Om)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Om)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,s){let o;function a(f){return t[f]===void 0&&we("ObjectLoader: Undefined geometry",f),t[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let m=0,v=f.length;m<v;m++){const g=f[m];n[g]===void 0&&we("ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[f]===void 0&&we("ObjectLoader: Undefined material",f),n[f]}}function l(f){return i[f]===void 0&&we("ObjectLoader: Undefined texture",f),i[f]}let u,h;switch(e.type){case"Scene":o=new Fd,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Se(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new th(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new eh(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new jt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Xs(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new r_(e.color,e.intensity);break;case"DirectionalLight":o=new op(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new sp(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new s_(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new rp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new i_(e.color,e.groundColor,e.intensity);break;case"LightProbe":const f=new ap().fromArray(e.sh);o=new o_(f,e.intensity);break;case"SkinnedMesh":u=a(e.geometry),h=c(e.material),o=new zd(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=c(e.material),o=new zt(u,h);break;case"InstancedMesh":u=a(e.geometry),h=c(e.material);const d=e.count,m=e.instanceMatrix,v=e.instanceColor;o=new kd(u,h,d),o.instanceMatrix=new Is(new Float32Array(m.array),16),v!==void 0&&(o.instanceColor=new Is(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":u=a(e.geometry),h=c(e.material),o=new Pv(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(g=>{let p=null,x=null;return g.boundingBox!==void 0&&(p=new qt().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(x=new Yt().fromJSON(g.boundingSphere)),{...g,boundingBox:p,boundingSphere:x}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=l(e.matricesTexture.uuid),o._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new Yt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new qt().fromJSON(e.boundingBox));break;case"LOD":o=new Iv;break;case"Line":o=new dr(a(e.geometry),c(e.material));break;case"LineLoop":o=new Vd(a(e.geometry),c(e.material));break;case"LineSegments":o=new Ai(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new Gd(a(e.geometry),c(e.material));break;case"Sprite":o=new Rv(c(e.material));break;case"Group":o=new Oi;break;case"Bone":o=new nh;break;default:o=new pt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)o.add(this.parseObject(f[d],t,n,i,s))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const m=f[d];o.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const m=f[d],v=o.getObjectByProperty("uuid",m.object);v!==void 0&&o.addLevel(v,m.distance,m.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?we("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new pt}})}}const AS={UVMapping:zu,CubeReflectionMapping:Hi,CubeRefractionMapping:Fr,EquirectangularReflectionMapping:Va,EquirectangularRefractionMapping:Ga,CubeUVReflectionMapping:Ko},Um={RepeatWrapping:Br,ClampToEdgeWrapping:Cn,MirroredRepeatWrapping:Do},Om={NearestFilter:Bt,NearestMipmapNearestFilter:ku,NearestMipmapLinearFilter:ps,LinearFilter:Rt,LinearMipmapNearestFilter:wo,LinearMipmapLinearFilter:hi},hf=new WeakMap;class l_ extends Ln{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(hf.has(o)===!0)i&&i(hf.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Fi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),hf.set(c,l),Fi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Fi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let al;class cp{static getContext(){return al===void 0&&(al=new(window.AudioContext||window.webkitAudioContext)),al}static setContext(e){al=e}}class CS extends Ln{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ti(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);cp.getContext().decodeAudioData(l,function(h){t(h)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):Ve(c),s.manager.itemError(e)}}}const Fm=new ke,Bm=new ke,es=new ke;class RS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new jt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new jt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,es.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Ss*t.fov*.5)/t.zoom;let a,c;Bm.elements[12]=-i,Fm.elements[12]=i,a=-o*t.aspect+s,c=o*t.aspect+s,es.elements[0]=2*t.near/(c-a),es.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(es),a=-o*t.aspect-s,c=o*t.aspect-s,es.elements[0]=2*t.near/(c-a),es.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(es)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Bm),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Fm)}}class u_ extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class h_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ts=new P,ff=new mn,IS=new P,ns=new P,is=new P;class PS extends pt{constructor(){super(),this.type="AudioListener",this.context=cp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new h_}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ts,ff,IS),ns.set(0,0,-1).applyQuaternion(ff),is.set(0,1,0).applyQuaternion(ff),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ts.x,n),t.positionY.linearRampToValueAtTime(ts.y,n),t.positionZ.linearRampToValueAtTime(ts.z,n),t.forwardX.linearRampToValueAtTime(ns.x,n),t.forwardY.linearRampToValueAtTime(ns.y,n),t.forwardZ.linearRampToValueAtTime(ns.z,n),t.upX.linearRampToValueAtTime(is.x,n),t.upY.linearRampToValueAtTime(is.y,n),t.upZ.linearRampToValueAtTime(is.z,n)}else t.setPosition(ts.x,ts.y,ts.z),t.setOrientation(ns.x,ns.y,ns.z,is.x,is.y,is.z)}}class f_ extends pt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){we("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){we("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){we("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){we("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){we("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(we("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){we("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(we("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const rs=new P,zm=new mn,LS=new P,ss=new P;class DS extends f_{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(rs,zm,LS),ss.set(0,0,1).applyQuaternion(zm);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(rs.x,n),t.positionY.linearRampToValueAtTime(rs.y,n),t.positionZ.linearRampToValueAtTime(rs.z,n),t.orientationX.linearRampToValueAtTime(ss.x,n),t.orientationY.linearRampToValueAtTime(ss.y,n),t.orientationZ.linearRampToValueAtTime(ss.z,n)}else t.setPosition(rs.x,rs.y,rs.z),t.setOrientation(ss.x,ss.y,ss.z)}}class NS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class d_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){mn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;mn.multiplyQuaternionsFlat(e,o,e,t,e,n),mn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const lp="\\[\\]\\.:\\/",US=new RegExp("["+lp+"]","g"),up="[^"+lp+"]",OS="[^"+lp.replace("\\.","")+"]",FS=/((?:WC+[\/:])*)/.source.replace("WC",up),BS=/(WCOD+)?/.source.replace("WCOD",OS),zS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",up),kS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",up),VS=new RegExp("^"+FS+BS+zS+kS+"$"),GS=["material","materials","bones","map"];class HS{constructor(e,t,n){const i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(US,"")}static parseTrackName(e){const t=VS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);GS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=HS;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class WS{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Jn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const f=arguments[u],d=f.uuid;let m=t[d];if(m===void 0){m=c++,t[d]=m,e.push(f);for(let v=0,g=o;v!==g;++v)s[v].push(new mt(f,n[v],i[v]))}else if(m<l){a=e[m];const v=--l,g=e[v];t[g.uuid]=m,e[m]=g,t[d]=v,e[v]=f;for(let p=0,x=o;p!==x;++p){const _=s[p],y=_[v];let S=_[m];_[m]=y,S===void 0&&(S=new mt(f,n[p],i[p])),_[v]=S}}else e[m]!==a&&Ve("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0&&u>=s){const h=s++,f=e[h];t[f.uuid]=u,e[u]=f,t[l]=h,e[h]=c;for(let d=0,m=i;d!==m;++d){const v=n[d],g=v[h],p=v[u];v[u]=g,v[h]=p}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const f=--s,d=e[f],m=--o,v=e[m];t[d.uuid]=h,e[h]=d,t[v.uuid]=f,e[f]=v,e.pop();for(let g=0,p=i;g!==p;++g){const x=n[g],_=x[f],y=x[m];x[h]=_,x[f]=y,x.pop()}}else{const f=--o,d=e[f];f>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let m=0,v=i;m!==v;++m){const g=n[m];g[h]=g[f],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(h);for(let f=u,d=c.length;f!==d;++f){const m=c[f];h[f]=new mt(m,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class p_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:ms,endingEnd:ms};for(let l=0;l!==o;++l){const u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Rd:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Yu:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===uv;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===cv){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=gs,i.endingEnd=gs):(e?i.endingStart=this.zeroSlopeAtStart?gs:ms:i.endingStart=Ha,t?i.endingEnd=this.zeroSlopeAtEnd?gs:ms:i.endingEnd=Ha)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const XS=new Float32Array(1);class qS extends Zi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const f=i[h],d=f.name;let m=u[d];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,d));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;m=new d_(mt.create(n,d,v),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,d),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ep(new Float32Array(2),new Float32Array(2),1,XS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Xo.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Yu),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new p_(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Xo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class YS extends Ld{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new ju(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class hp{constructor(e){this.value=e}clone(){return new hp(this.value.clone===void 0?this.value:this.value.clone())}}let $S=0;class ZS extends Zi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:$S++}),this.name="",this.usage=Xa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class KS extends uc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class jS{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const km=new ke;class fp{constructor(e,t,n=0,i=1/0){this.ray=new Hr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ju,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return km.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(km),this}intersectObject(e,t=!0,n=[]){return Kf(e,this,n,t),n.sort(Vm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Kf(e[i],this,n,t);return n.sort(Vm),n}}function Vm(r,e){return r.distance-e.distance}function Kf(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Kf(s[o],e,t,!0)}}class JS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=QS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function QS(){this._document.hidden===!1&&this.reset()}class ew{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tw{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class dp{constructor(e,t,n,i){dp.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const Gm=new ie;class nw{constructor(e=new ie(1/0,1/0),t=new ie(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hm=new P,cl=new P,po=new P,mo=new P,df=new P,iw=new P,rw=new P;class m_{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Hm.subVectors(e,this.start),cl.subVectors(this.end,this.start);const n=cl.dot(cl);let s=cl.dot(Hm)/n;return t&&(s=je(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=iw,n=rw){const i=10000000000000001e-32;let s,o;const a=this.start,c=e.start,l=this.end,u=e.end;po.subVectors(l,a),mo.subVectors(u,c),df.subVectors(a,c);const h=po.dot(po),f=mo.dot(mo),d=mo.dot(df);if(h<=i&&f<=i)return t.copy(a),n.copy(c),t.sub(n),t.dot(t);if(h<=i)s=0,o=d/f,o=je(o,0,1);else{const m=po.dot(df);if(f<=i)o=0,s=je(-m/h,0,1);else{const v=po.dot(mo),g=h*f-v*v;g!==0?s=je((v*d-m*f)/g,0,1):s=0,o=(v*s+d)/f,o<0?(o=0,s=je(-m/h,0,1)):o>1&&(o=1,s=je((v-m)/h,0,1))}}return t.copy(a).add(po.multiplyScalar(s)),n.copy(c).add(mo.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Wm=new P;class sw extends pt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new nt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ne(i,3));const s=new _n({fog:!1,toneMapped:!1});this.cone=new Ai(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Wm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Wm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Sr=new P,ll=new ke,pf=new ke;class ow extends Ai{constructor(e){const t=g_(e),n=new nt,i=[],s=[];for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new Ne(i,3)),n.setAttribute("color",new Ne(s,3));const o=new _n({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new Se(255),c=new Se(65280);this.setColors(a,c)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");pf.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(ll.multiplyMatrices(pf,a.matrixWorld),Sr.setFromMatrixPosition(ll),i.setXYZ(o,Sr.x,Sr.y,Sr.z),ll.multiplyMatrices(pf,a.parent.matrixWorld),Sr.setFromMatrixPosition(ll),i.setXYZ(o+1,Sr.x,Sr.y,Sr.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,e.r,e.g,e.b),i.setXYZ(s+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function g_(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...g_(r.children[t]));return e}class aw extends zt{constructor(e,t,n){const i=new gc(t,4,2),s=new Pn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const cw=new P,Xm=new Se,qm=new Se;class lw extends pt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Jo(t);i.rotateY(Math.PI*.5),this.material=new Pn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new gt(o,3)),this.add(new zt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Xm.copy(this.light.color),qm.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Xm:qm;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(cw.setFromMatrixPosition(this.light.matrixWorld).negate())}}class uw extends Ai{constructor(e=10,t=10,n=4473924,i=8947848){n=new Se(n),i=new Se(i);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,d=0,m=-a;f<=t;f++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const v=f===s?n:i;v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3}const u=new nt;u.setAttribute("position",new Ne(c,3)),u.setAttribute("color",new Ne(l,3));const h=new _n({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class hw extends Ai{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new Se(s),o=new Se(o);const a=[],c=[];if(t>1)for(let h=0;h<t;h++){const f=h/t*(Math.PI*2),d=Math.sin(f)*e,m=Math.cos(f)*e;a.push(0,0,0),a.push(d,0,m);const v=h&1?s:o;c.push(v.r,v.g,v.b),c.push(v.r,v.g,v.b)}for(let h=0;h<n;h++){const f=h&1?s:o,d=e-e/n*h;for(let m=0;m<i;m++){let v=m/i*(Math.PI*2),g=Math.sin(v)*d,p=Math.cos(v)*d;a.push(g,0,p),c.push(f.r,f.g,f.b),v=(m+1)/i*(Math.PI*2),g=Math.sin(v)*d,p=Math.cos(v)*d,a.push(g,0,p),c.push(f.r,f.g,f.b)}}const l=new nt;l.setAttribute("position",new Ne(a,3)),l.setAttribute("color",new Ne(c,3));const u=new _n({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ym=new P,ul=new P,$m=new P;class fw extends pt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new nt;i.setAttribute("position",new Ne([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new _n({fog:!1,toneMapped:!1});this.lightPlane=new dr(i,s),this.add(this.lightPlane),i=new nt,i.setAttribute("position",new Ne([0,0,0,0,0,1],3)),this.targetLine=new dr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ym.setFromMatrixPosition(this.light.matrixWorld),ul.setFromMatrixPosition(this.light.target.matrixWorld),$m.subVectors(ul,Ym),this.lightPlane.lookAt(ul),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ul),this.targetLine.scale.z=$m.length()}}const hl=new P,Gt=new Qu;class dw extends Ai{constructor(e){const t=new nt,n=new _n({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,v){c(m),c(v)}function c(m){i.push(0,0,0),s.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}t.setAttribute("position",new Ne(i,3)),t.setAttribute("color",new Ne(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new Se(16755200),u=new Se(16711680),h=new Se(43775),f=new Se(16777215),d=new Se(3355443);this.setColors(l,u,h,f,d)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,o;if(Gt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===Kn)s=-1,o=1;else if(this.camera.coordinateSystem===Bo)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Wt("c",t,e,Gt,0,0,s),Wt("t",t,e,Gt,0,0,o),Wt("n1",t,e,Gt,-n,-i,s),Wt("n2",t,e,Gt,n,-i,s),Wt("n3",t,e,Gt,-n,i,s),Wt("n4",t,e,Gt,n,i,s),Wt("f1",t,e,Gt,-n,-i,o),Wt("f2",t,e,Gt,n,-i,o),Wt("f3",t,e,Gt,-n,i,o),Wt("f4",t,e,Gt,n,i,o),Wt("u1",t,e,Gt,n*.7,i*1.1,s),Wt("u2",t,e,Gt,-n*.7,i*1.1,s),Wt("u3",t,e,Gt,0,i*2,s),Wt("cf1",t,e,Gt,-n,0,o),Wt("cf2",t,e,Gt,n,0,o),Wt("cf3",t,e,Gt,0,-i,o),Wt("cf4",t,e,Gt,0,i,o),Wt("cn1",t,e,Gt,-n,0,s),Wt("cn2",t,e,Gt,n,0,s),Wt("cn3",t,e,Gt,0,-i,s),Wt("cn4",t,e,Gt,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Wt(r,e,t,n,i,s,o){hl.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],hl.x,hl.y,hl.z)}}const fl=new qt;class pw extends Ai{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new nt;s.setIndex(new gt(n,1)),s.setAttribute("position",new gt(i,3)),super(s,new _n({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&fl.setFromObject(this.object),fl.isEmpty())return;const e=fl.min,t=fl.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class mw extends Ai{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new nt;s.setIndex(new gt(n,1)),s.setAttribute("position",new Ne(i,3)),super(s,new _n({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class gw extends dr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new nt;o.setAttribute("position",new Ne(s,3)),o.computeBoundingSphere(),super(o,new _n({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new nt;c.setAttribute("position",new Ne(a,3)),c.computeBoundingSphere(),this.add(new zt(c,new Pn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Zm=new P;let dl,mf;class vw extends pt{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",dl===void 0&&(dl=new nt,dl.setAttribute("position",new Ne([0,0,0,0,1,0],3)),mf=new pc(.5,1,5,1),mf.translate(0,-.5,0)),this.position.copy(t),this.line=new dr(dl,new _n({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new zt(mf,new Pn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Zm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Zm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class _w extends Ai{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new nt;i.setAttribute("position",new Ne(t,3)),i.setAttribute("color",new Ne(n,3));const s=new _n({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Se,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class xw{constructor(){this.type="ShapePath",this.color=new Se,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Mu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const x=[];for(let _=0,y=p.length;_<y;_++){const S=p[_],E=new ws;E.curves=S.curves,x.push(E)}return x}function n(p,x){const _=x.length;let y=!1;for(let S=_-1,E=0;E<_;S=E++){let A=x[S],I=x[E],b=I.x-A.x,T=I.y-A.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(A=x[E],b=-b,I=x[S],T=-T),p.y<A.y||p.y>I.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{const D=T*(p.x-A.x)-b*(p.y-A.y);if(D===0)return!0;if(D<0)continue;y=!y}}else{if(p.y!==A.y)continue;if(I.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=I.x)return!0}}return y}const i=yi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new ws,c.curves=a.curves,l.push(c),l;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],m=0,v;f[m]=void 0,d[m]=[];for(let p=0,x=s.length;p<x;p++)a=s[p],v=a.getPoints(),o=i(v),o=e?!o:o,o?(!u&&f[m]&&m++,f[m]={s:new ws,p:v},f[m].s.curves=a.curves,u&&m++,d[m]=[]):d[m].push({h:a,p:v[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,x=0;for(let _=0,y=f.length;_<y;_++)h[_]=[];for(let _=0,y=f.length;_<y;_++){const S=d[_];for(let E=0;E<S.length;E++){const A=S[E];let I=!0;for(let b=0;b<f.length;b++)n(A.p,f[b].p)&&(_!==b&&x++,I?(I=!1,h[b].push(A)):p=!0);I&&h[_].push(A)}}x>0&&p===!1&&(d=h)}let g;for(let p=0,x=f.length;p<x;p++){c=f[p].s,l.push(c),g=d[p];for(let _=0,y=g.length;_<y;_++)c.holes.push(g[_].h)}return l}}class yw extends Zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){we("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function bw(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function Mw(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function Sw(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function jf(r,e,t,n){const i=ww(n);switch(t){case Ad:return r*e;case Wu:return r*e/i.components*i.byteLength;case cc:return r*e/i.components*i.byteLength;case Rs:return r*e*2/i.components*i.byteLength;case Xu:return r*e*2/i.components*i.byteLength;case Cd:return r*e*3/i.components*i.byteLength;case In:return r*e*4/i.components*i.byteLength;case qu:return r*e*4/i.components*i.byteLength;case Ra:case Ia:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pa:case La:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vl:case Hl:return Math.max(r,16)*Math.max(e,8)/4;case kl:case Gl:return Math.max(r,8)*Math.max(e,8)/2;case Wl:case Xl:case Yl:case $l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ql:case Zl:case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case eu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case tu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case nu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case iu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ru:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case su:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ou:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case au:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case cu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case lu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case uu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case hu:case fu:case du:return Math.ceil(r/4)*Math.ceil(e/4)*16;case pu:case mu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case gu:case vu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ww(r){switch(r){case Bn:case Sd:return{byteLength:1,components:1};case No:case wd:case Wi:return{byteLength:2,components:1};case Gu:case Hu:return{byteLength:2,components:4};case fi:case Vu:case Rn:return{byteLength:4,components:1};case Td:case Ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}class Tw{static contain(e,t){return bw(e,t)}static cover(e,t){return Mw(e,t)}static fill(e){return Sw(e)}static getByteLength(e,t,n,i){return jf(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bu}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bu);function v_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ew(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,a),h.length===0)r.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],v=h[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const v=h[d];r.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var Aw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cw=`#ifdef USE_ALPHAHASH
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
#endif`,Rw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dw=`#ifdef USE_AOMAP
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
#endif`,Nw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uw=`#ifdef USE_BATCHING
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
#endif`,Ow=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kw=`#ifdef USE_IRIDESCENCE
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
#endif`,Vw=`#ifdef USE_BUMPMAP
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
#endif`,Gw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$w=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kw=`#define PI 3.141592653589793
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
} // validated`,jw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jw=`vec3 transformedNormal = objectNormal;
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
#endif`,Qw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i1="gl_FragColor = linearToOutputTexel( gl_FragColor );",r1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
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
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p1=`#ifdef USE_GRADIENTMAP
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
}`,m1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_1=`uniform bool receiveShadow;
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
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,y1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w1=`PhysicalMaterial material;
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
#endif`,T1=`uniform sampler2D dfgLUT;
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
}`,E1=`
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
#endif`,A1=`#if defined( RE_IndirectDiffuse )
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
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O1=`#if defined( USE_POINTS_UV )
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
#endif`,F1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`#ifdef USE_MORPHTARGETS
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
#endif`,H1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z1=`#ifdef USE_NORMALMAP
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
#endif`,K1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hT=`float getShadowMask() {
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
}`,fT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dT=`#ifdef USE_SKINNING
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
#endif`,pT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mT=`#ifdef USE_SKINNING
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
#endif`,gT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yT=`#ifdef USE_TRANSMISSION
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
#endif`,bT=`#ifdef USE_TRANSMISSION
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
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ET=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AT=`uniform sampler2D t2D;
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
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`#include <common>
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
}`,DT=`#if DEPTH_PACKING == 3200
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
}`,NT=`#define DISTANCE
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
}`,UT=`#define DISTANCE
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
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`uniform float scale;
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
}`,zT=`uniform vec3 diffuse;
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
}`,kT=`#include <common>
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
}`,VT=`uniform vec3 diffuse;
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
}`,GT=`#define LAMBERT
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
}`,HT=`#define LAMBERT
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
}`,WT=`#define MATCAP
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
}`,XT=`#define MATCAP
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
}`,qT=`#define NORMAL
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
}`,YT=`#define NORMAL
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
}`,$T=`#define PHONG
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
}`,ZT=`#define PHONG
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
}`,KT=`#define STANDARD
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
}`,jT=`#define STANDARD
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
}`,JT=`#define TOON
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
}`,QT=`#define TOON
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
}`,eE=`uniform float size;
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
}`,tE=`uniform vec3 diffuse;
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
}`,nE=`#include <common>
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
}`,iE=`uniform vec3 color;
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
}`,rE=`uniform float rotation;
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
}`,sE=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Aw,alphahash_pars_fragment:Cw,alphamap_fragment:Rw,alphamap_pars_fragment:Iw,alphatest_fragment:Pw,alphatest_pars_fragment:Lw,aomap_fragment:Dw,aomap_pars_fragment:Nw,batching_pars_vertex:Uw,batching_vertex:Ow,begin_vertex:Fw,beginnormal_vertex:Bw,bsdfs:zw,iridescence_fragment:kw,bumpmap_pars_fragment:Vw,clipping_planes_fragment:Gw,clipping_planes_pars_fragment:Hw,clipping_planes_pars_vertex:Ww,clipping_planes_vertex:Xw,color_fragment:qw,color_pars_fragment:Yw,color_pars_vertex:$w,color_vertex:Zw,common:Kw,cube_uv_reflection_fragment:jw,defaultnormal_vertex:Jw,displacementmap_pars_vertex:Qw,displacementmap_vertex:e1,emissivemap_fragment:t1,emissivemap_pars_fragment:n1,colorspace_fragment:i1,colorspace_pars_fragment:r1,envmap_fragment:s1,envmap_common_pars_fragment:o1,envmap_pars_fragment:a1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:x1,envmap_vertex:l1,fog_vertex:u1,fog_pars_vertex:h1,fog_fragment:f1,fog_pars_fragment:d1,gradientmap_pars_fragment:p1,lightmap_pars_fragment:m1,lights_lambert_fragment:g1,lights_lambert_pars_fragment:v1,lights_pars_begin:_1,lights_toon_fragment:y1,lights_toon_pars_fragment:b1,lights_phong_fragment:M1,lights_phong_pars_fragment:S1,lights_physical_fragment:w1,lights_physical_pars_fragment:T1,lights_fragment_begin:E1,lights_fragment_maps:A1,lights_fragment_end:C1,logdepthbuf_fragment:R1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:P1,logdepthbuf_vertex:L1,map_fragment:D1,map_pars_fragment:N1,map_particle_fragment:U1,map_particle_pars_fragment:O1,metalnessmap_fragment:F1,metalnessmap_pars_fragment:B1,morphinstance_vertex:z1,morphcolor_vertex:k1,morphnormal_vertex:V1,morphtarget_pars_vertex:G1,morphtarget_vertex:H1,normal_fragment_begin:W1,normal_fragment_maps:X1,normal_pars_fragment:q1,normal_pars_vertex:Y1,normal_vertex:$1,normalmap_pars_fragment:Z1,clearcoat_normal_fragment_begin:K1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:J1,iridescence_pars_fragment:Q1,opaque_fragment:eT,packing:tT,premultiplied_alpha_fragment:nT,project_vertex:iT,dithering_fragment:rT,dithering_pars_fragment:sT,roughnessmap_fragment:oT,roughnessmap_pars_fragment:aT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:lT,shadowmap_vertex:uT,shadowmask_pars_fragment:hT,skinbase_vertex:fT,skinning_pars_vertex:dT,skinning_vertex:pT,skinnormal_vertex:mT,specularmap_fragment:gT,specularmap_pars_fragment:vT,tonemapping_fragment:_T,tonemapping_pars_fragment:xT,transmission_fragment:yT,transmission_pars_fragment:bT,uv_pars_fragment:MT,uv_pars_vertex:ST,uv_vertex:wT,worldpos_vertex:TT,background_vert:ET,background_frag:AT,backgroundCube_vert:CT,backgroundCube_frag:RT,cube_vert:IT,cube_frag:PT,depth_vert:LT,depth_frag:DT,distance_vert:NT,distance_frag:UT,equirect_vert:OT,equirect_frag:FT,linedashed_vert:BT,linedashed_frag:zT,meshbasic_vert:kT,meshbasic_frag:VT,meshlambert_vert:GT,meshlambert_frag:HT,meshmatcap_vert:WT,meshmatcap_frag:XT,meshnormal_vert:qT,meshnormal_frag:YT,meshphong_vert:$T,meshphong_frag:ZT,meshphysical_vert:KT,meshphysical_frag:jT,meshtoon_vert:JT,meshtoon_frag:QT,points_vert:eE,points_frag:tE,shadow_vert:nE,shadow_frag:iE,sprite_vert:rE,sprite_frag:sE},be={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ci={basic:{uniforms:bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:bn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:bn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:bn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:bn([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:bn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:bn([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:bn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:bn([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:bn([be.common,be.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:bn([be.lights,be.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ci.physical={uniforms:bn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const pl={r:0,b:0,g:0},os=new ei,oE=new ke;function aE(r,e,t,n,i,s,o){const a=new Se(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function v(_){let y=!1;const S=m(_);S===null?p(a,c):S&&S.isColor&&(p(S,1),y=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(_,y){const S=m(y);S&&(S.isCubeTexture||S.mapping===Ko)?(u===void 0&&(u=new zt(new Vs(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Vo(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),os.copy(y.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oE.makeRotationFromEuler(os)),u.material.toneMapped=ut.getTransfer(S.colorSpace)!==St,(h!==S||f!==S.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new zt(new Qo(2,2),new di({name:"BackgroundMaterial",uniforms:Vo(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ut.getTransfer(S.colorSpace)!==St,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(pl,Ev(r)),n.buffers.color.setClear(pl.r,pl.g,pl.b,y,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:v,addToRenderList:g,dispose:x}}function cE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(T,D,F,O,k){let V=!1;const W=h(O,F,D);s!==W&&(s=W,l(s.object)),V=d(T,O,F,k),V&&m(T,O,F,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(T,D,F,O),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return r.createVertexArray()}function l(T){return r.bindVertexArray(T)}function u(T){return r.deleteVertexArray(T)}function h(T,D,F){const O=F.wireframe===!0;let k=n[T.id];k===void 0&&(k={},n[T.id]=k);let V=k[D.id];V===void 0&&(V={},k[D.id]=V);let W=V[O];return W===void 0&&(W=f(c()),V[O]=W),W}function f(T){const D=[],F=[],O=[];for(let k=0;k<t;k++)D[k]=0,F[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:O,object:T,attributes:{},index:null}}function d(T,D,F,O){const k=s.attributes,V=D.attributes;let W=0;const z=F.getAttributes();for(const K in z)if(z[K].location>=0){const Y=k[K];let J=V[K];if(J===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(J=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(J=T.instanceColor)),Y===void 0||Y.attribute!==J||J&&Y.data!==J.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function m(T,D,F,O){const k={},V=D.attributes;let W=0;const z=F.getAttributes();for(const K in z)if(z[K].location>=0){let Y=V[K];Y===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(Y=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(Y=T.instanceColor));const J={};J.attribute=Y,Y&&Y.data&&(J.data=Y.data),k[K]=J,W++}s.attributes=k,s.attributesNum=W,s.index=O}function v(){const T=s.newAttributes;for(let D=0,F=T.length;D<F;D++)T[D]=0}function g(T){p(T,0)}function p(T,D){const F=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;F[T]=1,O[T]===0&&(r.enableVertexAttribArray(T),O[T]=1),k[T]!==D&&(r.vertexAttribDivisor(T,D),k[T]=D)}function x(){const T=s.newAttributes,D=s.enabledAttributes;for(let F=0,O=D.length;F<O;F++)D[F]!==T[F]&&(r.disableVertexAttribArray(F),D[F]=0)}function _(T,D,F,O,k,V,W){W===!0?r.vertexAttribIPointer(T,D,F,k,V):r.vertexAttribPointer(T,D,F,O,k,V)}function y(T,D,F,O){v();const k=O.attributes,V=F.getAttributes(),W=D.defaultAttributeValues;for(const z in V){const K=V[z];if(K.location>=0){let ee=k[z];if(ee===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor)),ee!==void 0){const Y=ee.normalized,J=ee.itemSize,Me=e.get(ee);if(Me===void 0)continue;const Re=Me.buffer,tt=Me.type,Je=Me.bytesPerElement,j=tt===r.INT||tt===r.UNSIGNED_INT||ee.gpuType===Vu;if(ee.isInterleavedBufferAttribute){const re=ee.data,Ee=re.stride,ze=ee.offset;if(re.isInstancedInterleavedBuffer){for(let ye=0;ye<K.locationSize;ye++)p(K.location+ye,re.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ye=0;ye<K.locationSize;ye++)g(K.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let ye=0;ye<K.locationSize;ye++)_(K.location+ye,J/K.locationSize,tt,Y,Ee*Je,(ze+J/K.locationSize*ye)*Je,j)}else{if(ee.isInstancedBufferAttribute){for(let re=0;re<K.locationSize;re++)p(K.location+re,ee.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let re=0;re<K.locationSize;re++)g(K.location+re);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let re=0;re<K.locationSize;re++)_(K.location+re,J/K.locationSize,tt,Y,J*Je,J/K.locationSize*re*Je,j)}}else if(W!==void 0){const Y=W[z];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(K.location,Y);break;case 3:r.vertexAttrib3fv(K.location,Y);break;case 4:r.vertexAttrib4fv(K.location,Y);break;default:r.vertexAttrib1fv(K.location,Y)}}}}x()}function S(){I();for(const T in n){const D=n[T];for(const F in D){const O=D[F];for(const k in O)u(O[k].object),delete O[k];delete D[F]}delete n[T]}}function E(T){if(n[T.id]===void 0)return;const D=n[T.id];for(const F in D){const O=D[F];for(const k in O)u(O[k].object),delete O[k];delete D[F]}delete n[T.id]}function A(T){for(const D in n){const F=n[D];if(F[T.id]===void 0)continue;const O=F[T.id];for(const k in O)u(O[k].object),delete O[k];delete F[T.id]}}function I(){b(),o=!0,s!==i&&(s=i,l(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function lE(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v]*f[v];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function uE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==In&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Bn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Rn&&!I)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(we("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,maxSamples:S,samples:E}}function hE(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Tr,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):l();else{const x=s?0:n,_=x*4;let y=p.clippingState||null;c.value=y,y=u(m,f,_,d);for(let S=0;S!==_;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=d;_!==v;++_,y+=4)o.copy(h[_]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function fE(r){let e=new WeakMap;function t(o,a){return a===Va?o.mapping=Hi:a===Ga&&(o.mapping=Fr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Va||a===Ga)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Od(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Pr=4,Km=[.125,.215,.35,.446,.526,.582],fs=20,dE=256,ma=new Xs,jm=new Se;let gf=null,vf=0,_f=0,xf=!1;const pE=new P;class Jf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=pE}=s;gf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gf,vf,_f),this._renderer.xr.enabled=xf,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Wi,format:In,colorSpace:gn,depthBuffer:!1},i=Jm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mE(s)),this._blurMaterial=vE(s,e,t),this._ggxMaterial=gE(s,e,t)}return i}_compileMaterial(e){const t=new zt(new nt,e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,i,s){const c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(jm),h.toneMapping=bi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new Vs,new Pn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,p=!0):(g.color.copy(jm),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[_],s.y,s.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[_]));const S=this._cubeSize;go(i,y*S,_>2?S:0,S,S),h.setRenderTarget(i),p&&h.render(v,c),h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hi||e.mapping===Fr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qm());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;go(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=0+l*1.25,d=h*f,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-Pr?n-m+Pr:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=m-t,go(s,g,p,3*v,2*v),i.setRenderTarget(s),i.render(a,ma),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,go(e,g,p,3*v,2*v),i.setRenderTarget(e),i.render(a,ma)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=l;const f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*fs-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):fs;g>fs&&we(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const p=[];let x=0;for(let A=0;A<fs;++A){const I=A/v,b=Math.exp(-I*I/2);p.push(b),A===0?x+=b:A<g&&(x+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;const y=this._sizeLods[i],S=3*y*(i>_-Pr?i-_+Pr:0),E=4*(this._cubeSize-y);go(t,S,E,3*y,2*y),c.setRenderTarget(t),c.render(h,ma)}}function mE(r){const e=[],t=[],n=[];let i=r;const s=r-Pr+1+Km.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Pr?c=Km[o-r+Pr-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*d),_=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,I=E>2?0:-1,b=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(b,v*m*E),_.set(f,g*m*E);const T=[E,E,E,E,E,E];y.set(T,p*m*E)}const S=new nt;S.setAttribute("position",new gt(x,v)),S.setAttribute("uv",new gt(_,g)),S.setAttribute("faceIndex",new gt(y,p)),n.push(new zt(S,null)),i>Pr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Jm(r,e,t){const n=new Qn(r,e,t);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function gE(r,e,t){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gh(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function vE(r,e,t){const n=new Float32Array(fs),i=new P(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gh(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Qm(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function eg(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function gh(){return`

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
	`}function _E(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Va||c===Ga,u=c===Hi||c===Fr;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Jf(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Jf(r)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&zo("WebGLRenderer: "+n+" extension not supported."),i}}}function yE(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,m=h.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let _=0,y=x.length;_<y;_+=3){const S=x[_+0],E=x[_+1],A=x[_+2];f.push(S,E,E,A,A,S)}}else if(m!==void 0){const x=m.array;v=m.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const S=_+0,E=_+1,A=_+2;f.push(S,E,E,A,A,S)}}else return;const g=new(yv(f)?Nd:Dd)(f,1);g.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function bE(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function l(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(f,d,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*v[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ME(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function SE(r,e,t){const n=new WeakMap,i=new bt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let T=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var d=T;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let S=a.attributes.position.count*y,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*E*4*h),I=new Ku(A,S,E,h);I.type=Rn,I.needsUpdate=!0;const b=y*4;for(let D=0;D<h;D++){const F=p[D],O=x[D],k=_[D],V=S*E*4*D;for(let W=0;W<F.count;W++){const z=W*b;m===!0&&(i.fromBufferAttribute(F,W),A[V+z+0]=i.x,A[V+z+1]=i.y,A[V+z+2]=i.z,A[V+z+3]=0),v===!0&&(i.fromBufferAttribute(O,W),A[V+z+4]=i.x,A[V+z+5]=i.y,A[V+z+6]=i.z,A[V+z+7]=0),g===!0&&(i.fromBufferAttribute(k,W),A[V+z+8]=i.x,A[V+z+9]=i.y,A[V+z+10]=i.z,A[V+z+11]=k.itemSize===4?i.w:1)}}f={count:h,texture:I,size:new ie(S,E)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function wE(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const TE={[vd]:"LINEAR_TONE_MAPPING",[_d]:"REINHARD_TONE_MAPPING",[xd]:"CINEON_TONE_MAPPING",[yd]:"ACES_FILMIC_TONE_MAPPING",[ka]:"AGX_TONE_MAPPING",[Md]:"NEUTRAL_TONE_MAPPING",[bd]:"CUSTOM_TONE_MAPPING"};function EE(r,e,t,n,i){const s=new Qn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new Qn(e,t,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),a=new nt;a.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ne([0,2,0,0,2,0],2));const c=new Kd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new zt(a,c),u=new Xs(-1,1,1,-1,0,1);let h=null,f=null,d=!1,m,v=null,g=[],p=!1;this.setSize=function(x,_){s.setSize(x,_),o.setSize(x,_);for(let y=0;y<g.length;y++){const S=g[y];S.setSize&&S.setSize(x,_)}},this.setEffects=function(x){g=x,p=g.length>0&&g[0].isRenderPass===!0;const _=s.width,y=s.height;for(let S=0;S<g.length;S++){const E=g[S];E.setSize&&E.setSize(_,y)}},this.begin=function(x,_){if(d||x.toneMapping===bi&&g.length===0)return!1;if(v=_,_!==null){const y=_.width,S=_.height;(s.width!==y||s.height!==S)&&this.setSize(y,S)}return p===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=bi,!0},this.hasRenderPass=function(){return p},this.end=function(x,_){x.toneMapping=m,d=!0;let y=s,S=o;for(let E=0;E<g.length;E++){const A=g[E];if(A.enabled!==!1&&(A.render(x,S,y,_),A.needsSwap!==!1)){const I=y;y=S,S=I}}if(h!==x.outputColorSpace||f!==x.toneMapping){h=x.outputColorSpace,f=x.toneMapping,c.defines={},ut.getTransfer(h)===St&&(c.defines.SRGB_TRANSFER="");const E=TE[f];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(v),x.render(l,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const __=new Ut,Qf=new Go(1,1),x_=new Ku,y_=new ju,b_=new lc,tg=[],ng=[],ig=new Float32Array(16),rg=new Float32Array(9),sg=new Float32Array(4);function ta(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=tg[i];if(s===void 0&&(s=new Float32Array(i),tg[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function vh(r,e){let t=ng[e];t===void 0&&(t=new Int32Array(e),ng[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function AE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function CE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function RE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function IE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function PE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;sg.set(n),r.uniformMatrix2fv(this.addr,!1,sg),en(t,n)}}function LE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;rg.set(n),r.uniformMatrix3fv(this.addr,!1,rg),en(t,n)}}function DE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;ig.set(n),r.uniformMatrix4fv(this.addr,!1,ig),en(t,n)}}function NE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function UE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function OE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function FE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function BE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function kE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function VE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function GE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Qf.compareFunction=t.isReversedDepthBuffer()?Zu:$u,s=Qf):s=__,t.setTexture2D(e||s,i)}function HE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||y_,i)}function WE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||b_,i)}function XE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||x_,i)}function qE(r){switch(r){case 5126:return AE;case 35664:return CE;case 35665:return RE;case 35666:return IE;case 35674:return PE;case 35675:return LE;case 35676:return DE;case 5124:case 35670:return NE;case 35667:case 35671:return UE;case 35668:case 35672:return OE;case 35669:case 35673:return FE;case 5125:return BE;case 36294:return zE;case 36295:return kE;case 36296:return VE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}function YE(r,e){r.uniform1fv(this.addr,e)}function $E(r,e){const t=ta(e,this.size,2);r.uniform2fv(this.addr,t)}function ZE(r,e){const t=ta(e,this.size,3);r.uniform3fv(this.addr,t)}function KE(r,e){const t=ta(e,this.size,4);r.uniform4fv(this.addr,t)}function jE(r,e){const t=ta(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function JE(r,e){const t=ta(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function QE(r,e){const t=ta(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function eA(r,e){r.uniform1iv(this.addr,e)}function tA(r,e){r.uniform2iv(this.addr,e)}function nA(r,e){r.uniform3iv(this.addr,e)}function iA(r,e){r.uniform4iv(this.addr,e)}function rA(r,e){r.uniform1uiv(this.addr,e)}function sA(r,e){r.uniform2uiv(this.addr,e)}function oA(r,e){r.uniform3uiv(this.addr,e)}function aA(r,e){r.uniform4uiv(this.addr,e)}function cA(r,e,t){const n=this.cache,i=e.length,s=vh(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Qf:o=__;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function lA(r,e,t){const n=this.cache,i=e.length,s=vh(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||y_,s[o])}function uA(r,e,t){const n=this.cache,i=e.length,s=vh(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||b_,s[o])}function hA(r,e,t){const n=this.cache,i=e.length,s=vh(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||x_,s[o])}function fA(r){switch(r){case 5126:return YE;case 35664:return $E;case 35665:return ZE;case 35666:return KE;case 35674:return jE;case 35675:return JE;case 35676:return QE;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return rA;case 36294:return sA;case 36295:return oA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return hA}}class dA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qE(t.type)}}class pA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fA(t.type)}}class mA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const yf=/(\w+)(\])?(\[|\.)?/g;function og(r,e){r.seq.push(e),r.map[e.id]=e}function gA(r,e,t){const n=r.name,i=n.length;for(yf.lastIndex=0;;){const s=yf.exec(n),o=yf.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){og(t,l===void 0?new dA(a,r,e):new pA(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new mA(a),og(t,h)),t=h}}}class bl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);gA(a,c,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ag(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const vA=37297;let _A=0;function xA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const cg=new ot;function yA(r){ut._getMatrix(cg,ut.workingColorSpace,r);const e=`mat3( ${cg.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(r)){case Wa:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function lg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+xA(r.getShaderSource(e),a)}else return s}function bA(r,e){const t=yA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const MA={[vd]:"Linear",[_d]:"Reinhard",[xd]:"Cineon",[yd]:"ACESFilmic",[ka]:"AgX",[Md]:"Neutral",[bd]:"Custom"};function SA(r,e){const t=MA[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ml=new P;function wA(){ut.getLuminanceCoefficients(ml);const r=ml.x.toFixed(4),e=ml.y.toFixed(4),t=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function EA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function AA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ma(r){return r!==""}function ug(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(r){return r.replace(CA,IA)}const RA=new Map;function IA(r,e){let t=Ye[e];if(t===void 0){const n=RA.get(e);if(n!==void 0)t=Ye[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ed(t)}const PA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(r){return r.replace(PA,LA)}function LA(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const DA={[Aa]:"SHADOWMAP_TYPE_PCF",[bo]:"SHADOWMAP_TYPE_VSM"};function NA(r){return DA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UA={[Hi]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[Ko]:"ENVMAP_TYPE_CUBE_UV"};function OA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":UA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const FA={[Fr]:"ENVMAP_MODE_REFRACTION"};function BA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":FA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zA={[ac]:"ENVMAP_BLENDING_MULTIPLY",[sv]:"ENVMAP_BLENDING_MIX",[ov]:"ENVMAP_BLENDING_ADD"};function kA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":zA[r.combine]||"ENVMAP_BLENDING_NONE"}function VA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function GA(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=NA(t),l=OA(t),u=BA(t),h=kA(t),f=VA(t),d=TA(t),m=EA(s),v=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ma).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ma).join(`
`),p.length>0&&(p+=`
`)):(g=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),p=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==bi?SA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,bA("linearToOutputTexel",t.outputColorSpace),wA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),o=ed(o),o=ug(o,t),o=hg(o,t),a=ed(a),a=ug(a,t),a=hg(a,t),o=fg(o),a=fg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+g+o,y=x+p+a,S=ag(i,i.VERTEX_SHADER,_),E=ag(i,i.FRAGMENT_SHADER,y);i.attachShader(v,S),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(D){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(v)||"",O=i.getShaderInfoLog(S)||"",k=i.getShaderInfoLog(E)||"",V=F.trim(),W=O.trim(),z=k.trim();let K=!0,ee=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,S,E);else{const Y=lg(i,S,"vertex"),J=lg(i,E,"fragment");Ve("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+Y+`
`+J)}else V!==""?we("WebGLProgram: Program Info Log:",V):(W===""||z==="")&&(ee=!1);ee&&(D.diagnostics={runnable:K,programLog:V,vertexShader:{log:W,prefix:g},fragmentShader:{log:z,prefix:p}})}i.deleteShader(S),i.deleteShader(E),I=new bl(i,v),b=AA(i,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(v,vA)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_A++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}let HA=0;class WA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new XA(e),t.set(e,n)),n}}class XA{constructor(e){this.id=HA++,this.code=e,this.usedTimes=0}}function qA(r,e,t,n,i,s,o){const a=new Ju,c=new WA,l=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,T,D,F,O){const k=F.fog,V=O.geometry,W=b.isMeshStandardMaterial?F.environment:null,z=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),K=z&&z.mapping===Ko?z.image.height:null,ee=m[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&we("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const Y=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,J=Y!==void 0?Y.length:0;let Me=0;V.morphAttributes.position!==void 0&&(Me=1),V.morphAttributes.normal!==void 0&&(Me=2),V.morphAttributes.color!==void 0&&(Me=3);let Re,tt,Je,j;if(ee){const wt=ci[ee];Re=wt.vertexShader,tt=wt.fragmentShader}else Re=b.vertexShader,tt=b.fragmentShader,c.update(b),Je=c.getVertexShaderID(b),j=c.getFragmentShaderID(b);const re=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),ze=O.isInstancedMesh===!0,ye=O.isBatchedMesh===!0,it=!!b.map,ct=!!b.matcap,$e=!!z,ne=!!b.aoMap,le=!!b.lightMap,se=!!b.bumpMap,_e=!!b.normalMap,L=!!b.displacementMap,Ue=!!b.emissiveMap,Te=!!b.metalnessMap,Ie=!!b.roughnessMap,oe=b.anisotropy>0,R=b.clearcoat>0,M=b.dispersion>0,U=b.iridescence>0,G=b.sheen>0,Z=b.transmission>0,X=oe&&!!b.anisotropyMap,pe=R&&!!b.clearcoatMap,ae=R&&!!b.clearcoatNormalMap,me=R&&!!b.clearcoatRoughnessMap,De=U&&!!b.iridescenceMap,Q=U&&!!b.iridescenceThicknessMap,he=G&&!!b.sheenColorMap,Pe=G&&!!b.sheenRoughnessMap,xe=!!b.specularMap,fe=!!b.specularColorMap,Ze=!!b.specularIntensityMap,N=Z&&!!b.transmissionMap,ve=Z&&!!b.thicknessMap,ue=!!b.gradientMap,Ae=!!b.alphaMap,ce=b.alphaTest>0,te=!!b.alphaHash,ge=!!b.extensions;let rt=bi;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(rt=r.toneMapping);const Lt={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:Re,fragmentShader:tt,defines:b.defines,customVertexShaderID:Je,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ye,batchingColor:ye&&O._colorsTexture!==null,instancing:ze,instancingColor:ze&&O.instanceColor!==null,instancingMorph:ze&&O.morphTexture!==null,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:gn,alphaToCoverage:!!b.alphaToCoverage,map:it,matcap:ct,envMap:$e,envMapMode:$e&&z.mapping,envMapCubeUVHeight:K,aoMap:ne,lightMap:le,bumpMap:se,normalMap:_e,displacementMap:L,emissiveMap:Ue,normalMapObjectSpace:_e&&b.normalMapType===dv,normalMapTangentSpace:_e&&b.normalMapType===Gr,metalnessMap:Te,roughnessMap:Ie,anisotropy:oe,anisotropyMap:X,clearcoat:R,clearcoatMap:pe,clearcoatNormalMap:ae,clearcoatRoughnessMap:me,dispersion:M,iridescence:U,iridescenceMap:De,iridescenceThicknessMap:Q,sheen:G,sheenColorMap:he,sheenRoughnessMap:Pe,specularMap:xe,specularColorMap:fe,specularIntensityMap:Ze,transmission:Z,transmissionMap:N,thicknessMap:ve,gradientMap:ue,opaque:b.transparent===!1&&b.blending===Ms&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ce,alphaHash:te,combine:b.combine,mapUv:it&&v(b.map.channel),aoMapUv:ne&&v(b.aoMap.channel),lightMapUv:le&&v(b.lightMap.channel),bumpMapUv:se&&v(b.bumpMap.channel),normalMapUv:_e&&v(b.normalMap.channel),displacementMapUv:L&&v(b.displacementMap.channel),emissiveMapUv:Ue&&v(b.emissiveMap.channel),metalnessMapUv:Te&&v(b.metalnessMap.channel),roughnessMapUv:Ie&&v(b.roughnessMap.channel),anisotropyMapUv:X&&v(b.anisotropyMap.channel),clearcoatMapUv:pe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(b.sheenRoughnessMap.channel),specularMapUv:xe&&v(b.specularMap.channel),specularColorMapUv:fe&&v(b.specularColorMap.channel),specularIntensityMapUv:Ze&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:ve&&v(b.thicknessMap.channel),alphaMapUv:Ae&&v(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_e||oe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(it||Ae),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:it&&b.map.isVideoTexture===!0&&ut.getTransfer(b.map.colorSpace)===St,decodeVideoTextureEmissive:Ue&&b.emissiveMap.isVideoTexture===!0&&ut.getTransfer(b.emissiveMap.colorSpace)===St,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===En,flipSided:b.side===pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ge&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&b.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function p(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)T.push(D),T.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(x(T,b),_(T,b),T.push(r.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function x(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function _(b,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const T=m[b.type];let D;if(T){const F=ci[T];D=Ud.clone(F.uniforms)}else D=b.uniforms;return D}function S(b,T){let D=h.get(T);return D!==void 0?++D.usedTimes:(D=new GA(r,T,b,s),u.push(D),h.set(T,D)),D}function E(b){if(--b.usedTimes===0){const T=u.indexOf(b);u[T]=u[u.length-1],u.pop(),h.delete(b.cacheKey),b.destroy()}}function A(b){c.remove(b)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:I}}function YA(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function $A(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function pg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function mg(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,m,v,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function a(h,f,d,m,v,g){const p=o(h,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,m,v,g){const p=o(h,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||$A),n.length>1&&n.sort(f||pg),i.length>1&&i.sort(f||pg)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function ZA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new mg,r.set(n,[o])):i>=s.length?(o=new mg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function KA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Se};break;case"SpotLight":t={position:new P,direction:new P,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function jA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let JA=0;function QA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function eC(r){const e=new KA,t=jA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,s=new ke,o=new ke;function a(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,x=0,_=0,y=0,S=0,E=0,A=0;l.sort(QA);for(let b=0,T=l.length;b<T;b++){const D=l[b],F=D.color,O=D.intensity,k=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Rs?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=F.r*O,h+=F.g*O,f+=F.b*O;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],O);A++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const z=D.shadow,K=t.get(D);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=D.shadow.matrix,x++}n.directional[d]=W,d++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(F).multiplyScalar(O),W.distance=k,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[v]=W;const z=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,z.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[v]=z.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=V,y++}v++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(F).multiplyScalar(O),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=W,g++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const z=D.shadow,K=t.get(D);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=D.shadow.matrix,_++}n.point[m]=W,m++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(O),W.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==_||I.numSpotShadows!==y||I.numSpotMaps!==S||I.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,I.directionalLength=d,I.pointLength=m,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=_,I.numSpotShadows=y,I.numSpotMaps=S,I.numLightProbes=A,n.version=JA++)}function c(l,u){let h=0,f=0,d=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const _=l[p];if(_.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),h++}else if(_.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function gg(r){const e=new eC(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function tC(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new gg(r),e.set(i,[a])):s>=o.length?(a=new gg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const nC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iC=`uniform sampler2D shadow_pass;
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
}`,rC=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],sC=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],vg=new ke,ga=new P,bf=new P;function oC(r,e,t){let n=new jo;const i=new ie,s=new ie,o=new bt,a=new jd,c=new Jd,l={},u=t.maxTextureSize,h={[Gi]:pn,[pn]:Gi,[En]:En},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:nC,fragmentShader:iC}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new nt;m.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new zt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let p=this.type;this.render=function(E,A,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;E.type===Ca&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=Aa);const b=r.getRenderTarget(),T=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),F=r.state;F.setBlending(zi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==this.type;O&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(V=>V.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,V=E.length;k<V;k++){const W=E[k],z=W.shadow;if(z===void 0){we("WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const K=z.getFrameExtents();if(i.multiply(K),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,z.mapSize.y=s.y)),z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===bo){if(W.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Qn(i.x,i.y,{format:Rs,type:Wi,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),z.map.texture.name=W.name+".shadowMap",z.map.depthTexture=new Go(i.x,i.y,Rn),z.map.depthTexture.name=W.name+".shadowMapDepth",z.map.depthTexture.format=Xi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt}else{W.isPointLight?(z.map=new Od(i.x),z.map.depthTexture=new Dv(i.x,fi)):(z.map=new Qn(i.x,i.y),z.map.depthTexture=new Go(i.x,i.y,fi)),z.map.depthTexture.name=W.name+".shadowMap",z.map.depthTexture.format=Xi;const Y=r.state.buffers.depth.getReversed();this.type===Aa?(z.map.depthTexture.compareFunction=Y?Zu:$u,z.map.depthTexture.minFilter=Rt,z.map.depthTexture.magFilter=Rt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt)}z.camera.updateProjectionMatrix()}const ee=z.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<ee;Y++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,Y),r.clear();else{Y===0&&(r.setRenderTarget(z.map),r.clear());const J=z.getViewport(Y);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),F.viewport(o)}if(W.isPointLight){const J=z.camera,Me=z.matrix,Re=W.distance||J.far;Re!==J.far&&(J.far=Re,J.updateProjectionMatrix()),ga.setFromMatrixPosition(W.matrixWorld),J.position.copy(ga),bf.copy(J.position),bf.add(rC[Y]),J.up.copy(sC[Y]),J.lookAt(bf),J.updateMatrixWorld(),Me.makeTranslation(-ga.x,-ga.y,-ga.z),vg.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),z._frustum.setFromProjectionMatrix(vg,J.coordinateSystem,J.reversedDepth)}else z.updateMatrices(W);n=z.getFrustum(),y(A,I,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===bo&&x(z,I),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(b,T,D)};function x(E,A){const I=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qn(i.x,i.y,{format:Rs,type:Wi})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,I,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,I,d,v,null)}function _(E,A,I,b){let T=null;const D=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)T=D;else if(T=I.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=T.uuid,O=A.uuid;let k=l[F];k===void 0&&(k={},l[F]=k);let V=k[O];V===void 0&&(V=T.clone(),k[O]=V,A.addEventListener("dispose",S)),T=V}if(T.visible=A.visible,T.wireframe=A.wireframe,b===bo?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:h[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const F=r.properties.get(T);F.light=I}return T}function y(E,A,I,b,T){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===bo)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const O=e.update(E),k=E.material;if(Array.isArray(k)){const V=O.groups;for(let W=0,z=V.length;W<z;W++){const K=V[W],ee=k[K.materialIndex];if(ee&&ee.visible){const Y=_(E,ee,b,T);E.onBeforeShadow(r,E,A,I,O,Y,K),r.renderBufferDirect(I,null,O,Y,E,K),E.onAfterShadow(r,E,A,I,O,Y,K)}}}else if(k.visible){const V=_(E,k,b,T);E.onBeforeShadow(r,E,A,I,O,V,null),r.renderBufferDirect(I,null,O,V,E,null),E.onAfterShadow(r,E,A,I,O,V,null)}}const F=E.children;for(let O=0,k=F.length;O<k;O++)y(F[O],A,I,b,T)}function S(E){E.target.removeEventListener("dispose",S);for(const I in l){const b=l[I],T=E.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const aC={[Dl]:Nl,[Ul]:Bl,[Ol]:zl,[Cs]:Fl,[Nl]:Dl,[Bl]:Ul,[zl]:Ol,[Fl]:Cs};function cC(r,e){function t(){let N=!1;const ve=new bt;let ue=null;const Ae=new bt(0,0,0,0);return{setMask:function(ce){ue!==ce&&!N&&(r.colorMask(ce,ce,ce,ce),ue=ce)},setLocked:function(ce){N=ce},setClear:function(ce,te,ge,rt,Lt){Lt===!0&&(ce*=rt,te*=rt,ge*=rt),ve.set(ce,te,ge,rt),Ae.equals(ve)===!1&&(r.clearColor(ce,te,ge,rt),Ae.copy(ve))},reset:function(){N=!1,ue=null,Ae.set(-1,0,0,0)}}}function n(){let N=!1,ve=!1,ue=null,Ae=null,ce=null;return{setReversed:function(te){if(ve!==te){const ge=e.get("EXT_clip_control");te?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ve=te;const rt=ce;ce=null,this.setClear(rt)}},getReversed:function(){return ve},setTest:function(te){te?re(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(te){ue!==te&&!N&&(r.depthMask(te),ue=te)},setFunc:function(te){if(ve&&(te=aC[te]),Ae!==te){switch(te){case Dl:r.depthFunc(r.NEVER);break;case Nl:r.depthFunc(r.ALWAYS);break;case Ul:r.depthFunc(r.LESS);break;case Cs:r.depthFunc(r.LEQUAL);break;case Ol:r.depthFunc(r.EQUAL);break;case Fl:r.depthFunc(r.GEQUAL);break;case Bl:r.depthFunc(r.GREATER);break;case zl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ae=te}},setLocked:function(te){N=te},setClear:function(te){ce!==te&&(ve&&(te=1-te),r.clearDepth(te),ce=te)},reset:function(){N=!1,ue=null,Ae=null,ce=null,ve=!1}}}function i(){let N=!1,ve=null,ue=null,Ae=null,ce=null,te=null,ge=null,rt=null,Lt=null;return{setTest:function(wt){N||(wt?re(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(wt){ve!==wt&&!N&&(r.stencilMask(wt),ve=wt)},setFunc:function(wt,Ri,Ki){(ue!==wt||Ae!==Ri||ce!==Ki)&&(r.stencilFunc(wt,Ri,Ki),ue=wt,Ae=Ri,ce=Ki)},setOp:function(wt,Ri,Ki){(te!==wt||ge!==Ri||rt!==Ki)&&(r.stencilOp(wt,Ri,Ki),te=wt,ge=Ri,rt=Ki)},setLocked:function(wt){N=wt},setClear:function(wt){Lt!==wt&&(r.clearStencil(wt),Lt=wt)},reset:function(){N=!1,ve=null,ue=null,Ae=null,ce=null,te=null,ge=null,rt=null,Lt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,x=null,_=null,y=null,S=null,E=null,A=new Se(0,0,0),I=0,b=!1,T=null,D=null,F=null,O=null,k=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=z>=2);let ee=null,Y={};const J=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),Re=new bt().fromArray(J),tt=new bt().fromArray(Me);function Je(N,ve,ue,Ae){const ce=new Uint8Array(4),te=r.createTexture();r.bindTexture(N,te),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ge=0;ge<ue;ge++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ve,0,r.RGBA,1,1,Ae,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(ve+ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return te}const j={};j[r.TEXTURE_2D]=Je(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=Je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=Je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=Je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(Cs),se(!1),_e(kf),re(r.CULL_FACE),ne(zi);function re(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function Ee(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function ze(N,ve){return h[N]!==ve?(r.bindFramebuffer(N,ve),h[N]=ve,N===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ve),N===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ve),!0):!1}function ye(N,ve){let ue=d,Ae=!1;if(N){ue=f.get(ve),ue===void 0&&(ue=[],f.set(ve,ue));const ce=N.textures;if(ue.length!==ce.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let te=0,ge=ce.length;te<ge;te++)ue[te]=r.COLOR_ATTACHMENT0+te;ue.length=ce.length,Ae=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,Ae=!0);Ae&&r.drawBuffers(ue)}function it(N){return m!==N?(r.useProgram(N),m=N,!0):!1}const ct={[Ar]:r.FUNC_ADD,[G0]:r.FUNC_SUBTRACT,[H0]:r.FUNC_REVERSE_SUBTRACT};ct[W0]=r.MIN,ct[X0]=r.MAX;const $e={[q0]:r.ZERO,[Y0]:r.ONE,[$0]:r.SRC_COLOR,[Pl]:r.SRC_ALPHA,[ev]:r.SRC_ALPHA_SATURATE,[J0]:r.DST_COLOR,[K0]:r.DST_ALPHA,[Z0]:r.ONE_MINUS_SRC_COLOR,[Ll]:r.ONE_MINUS_SRC_ALPHA,[Q0]:r.ONE_MINUS_DST_COLOR,[j0]:r.ONE_MINUS_DST_ALPHA,[tv]:r.CONSTANT_COLOR,[nv]:r.ONE_MINUS_CONSTANT_COLOR,[iv]:r.CONSTANT_ALPHA,[rv]:r.ONE_MINUS_CONSTANT_ALPHA};function ne(N,ve,ue,Ae,ce,te,ge,rt,Lt,wt){if(N===zi){v===!0&&(Ee(r.BLEND),v=!1);return}if(v===!1&&(re(r.BLEND),v=!0),N!==V0){if(N!==g||wt!==b){if((p!==Ar||y!==Ar)&&(r.blendEquation(r.FUNC_ADD),p=Ar,y=Ar),wt)switch(N){case Ms:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Il:r.blendFunc(r.ONE,r.ONE);break;case Vf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ve("WebGLState: Invalid blending: ",N);break}else switch(N){case Ms:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Il:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Vf:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gf:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",N);break}x=null,_=null,S=null,E=null,A.set(0,0,0),I=0,g=N,b=wt}return}ce=ce||ve,te=te||ue,ge=ge||Ae,(ve!==p||ce!==y)&&(r.blendEquationSeparate(ct[ve],ct[ce]),p=ve,y=ce),(ue!==x||Ae!==_||te!==S||ge!==E)&&(r.blendFuncSeparate($e[ue],$e[Ae],$e[te],$e[ge]),x=ue,_=Ae,S=te,E=ge),(rt.equals(A)===!1||Lt!==I)&&(r.blendColor(rt.r,rt.g,rt.b,Lt),A.copy(rt),I=Lt),g=N,b=!1}function le(N,ve){N.side===En?Ee(r.CULL_FACE):re(r.CULL_FACE);let ue=N.side===pn;ve&&(ue=!ue),se(ue),N.blending===Ms&&N.transparent===!1?ne(zi):ne(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Ae=N.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(N){T!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),T=N)}function _e(N){N!==z0?(re(r.CULL_FACE),N!==D&&(N===kf?r.cullFace(r.BACK):N===k0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),D=N}function L(N){N!==F&&(W&&r.lineWidth(N),F=N)}function Ue(N,ve,ue){N?(re(r.POLYGON_OFFSET_FILL),(O!==ve||k!==ue)&&(r.polygonOffset(ve,ue),O=ve,k=ue)):Ee(r.POLYGON_OFFSET_FILL)}function Te(N){N?re(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function Ie(N){N===void 0&&(N=r.TEXTURE0+V-1),ee!==N&&(r.activeTexture(N),ee=N)}function oe(N,ve,ue){ue===void 0&&(ee===null?ue=r.TEXTURE0+V-1:ue=ee);let Ae=Y[ue];Ae===void 0&&(Ae={type:void 0,texture:void 0},Y[ue]=Ae),(Ae.type!==N||Ae.texture!==ve)&&(ee!==ue&&(r.activeTexture(ue),ee=ue),r.bindTexture(N,ve||j[N]),Ae.type=N,Ae.texture=ve)}function R(){const N=Y[ee];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function G(){try{r.texSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function Z(){try{r.texSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function pe(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function ae(){try{r.texStorage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function me(){try{r.texStorage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function De(){try{r.texImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function Q(){try{r.texImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function he(N){Re.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Re.copy(N))}function Pe(N){tt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),tt.copy(N))}function xe(N,ve){let ue=l.get(ve);ue===void 0&&(ue=new WeakMap,l.set(ve,ue));let Ae=ue.get(N);Ae===void 0&&(Ae=r.getUniformBlockIndex(ve,N.name),ue.set(N,Ae))}function fe(N,ve){const Ae=l.get(ve).get(N);c.get(ve)!==Ae&&(r.uniformBlockBinding(ve,Ae,N.__bindingPointIndex),c.set(ve,Ae))}function Ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,Y={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,x=null,_=null,y=null,S=null,E=null,A=new Se(0,0,0),I=0,b=!1,T=null,D=null,F=null,O=null,k=null,Re.set(0,0,r.canvas.width,r.canvas.height),tt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Ee,bindFramebuffer:ze,drawBuffers:ye,useProgram:it,setBlending:ne,setMaterial:le,setFlipSided:se,setCullFace:_e,setLineWidth:L,setPolygonOffset:Ue,setScissorTest:Te,activeTexture:Ie,bindTexture:oe,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:U,texImage2D:De,texImage3D:Q,updateUBOMapping:xe,uniformBlockBinding:fe,texStorage2D:ae,texStorage3D:me,texSubImage2D:G,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:pe,scissor:he,viewport:Pe,reset:Ze}}function lC(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,M){return d?new OffscreenCanvas(R,M):qa("canvas")}function v(R,M,U){let G=1;const Z=oe(R);if((Z.width>U||Z.height>U)&&(G=U/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(G*Z.width),pe=Math.floor(G*Z.height);h===void 0&&(h=m(X,pe));const ae=M?m(X,pe):h;return ae.width=X,ae.height=pe,ae.getContext("2d").drawImage(R,0,0,X,pe),we("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+pe+")."),ae}else return"data"in R&&we("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(R,M,U,G,Z=!1){if(R!==null){if(r[R]!==void 0)return r[R];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=M;if(M===r.RED&&(U===r.FLOAT&&(X=r.R32F),U===r.HALF_FLOAT&&(X=r.R16F),U===r.UNSIGNED_BYTE&&(X=r.R8)),M===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(X=r.R8UI),U===r.UNSIGNED_SHORT&&(X=r.R16UI),U===r.UNSIGNED_INT&&(X=r.R32UI),U===r.BYTE&&(X=r.R8I),U===r.SHORT&&(X=r.R16I),U===r.INT&&(X=r.R32I)),M===r.RG&&(U===r.FLOAT&&(X=r.RG32F),U===r.HALF_FLOAT&&(X=r.RG16F),U===r.UNSIGNED_BYTE&&(X=r.RG8)),M===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(X=r.RG8UI),U===r.UNSIGNED_SHORT&&(X=r.RG16UI),U===r.UNSIGNED_INT&&(X=r.RG32UI),U===r.BYTE&&(X=r.RG8I),U===r.SHORT&&(X=r.RG16I),U===r.INT&&(X=r.RG32I)),M===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(X=r.RGB8UI),U===r.UNSIGNED_SHORT&&(X=r.RGB16UI),U===r.UNSIGNED_INT&&(X=r.RGB32UI),U===r.BYTE&&(X=r.RGB8I),U===r.SHORT&&(X=r.RGB16I),U===r.INT&&(X=r.RGB32I)),M===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),U===r.UNSIGNED_INT&&(X=r.RGBA32UI),U===r.BYTE&&(X=r.RGBA8I),U===r.SHORT&&(X=r.RGBA16I),U===r.INT&&(X=r.RGBA32I)),M===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),M===r.RGBA){const pe=Z?Wa:ut.getTransfer(G);U===r.FLOAT&&(X=r.RGBA32F),U===r.HALF_FLOAT&&(X=r.RGBA16F),U===r.UNSIGNED_BYTE&&(X=pe===St?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(R,M){let U;return R?M===null||M===fi||M===Uo?U=r.DEPTH24_STENCIL8:M===Rn?U=r.DEPTH32F_STENCIL8:M===No&&(U=r.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fi||M===Uo?U=r.DEPTH_COMPONENT24:M===Rn?U=r.DEPTH_COMPONENT32F:M===No&&(U=r.DEPTH_COMPONENT16),U}function S(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bt&&R.minFilter!==Rt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function E(R){const M=R.target;M.removeEventListener("dispose",E),I(M),M.isVideoTexture&&u.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),T(M)}function I(R){const M=n.get(R);if(M.__webglInit===void 0)return;const U=R.source,G=f.get(U);if(G){const Z=G[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(R),Object.keys(G).length===0&&f.delete(U)}n.remove(R)}function b(R){const M=n.get(R);r.deleteTexture(M.__webglTexture);const U=R.source,G=f.get(U);delete G[M.__cacheKey],o.memory.textures--}function T(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let Z=0;Z<M.__webglFramebuffer[G].length;Z++)r.deleteFramebuffer(M.__webglFramebuffer[G][Z]);else r.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)r.deleteFramebuffer(M.__webglFramebuffer[G]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const U=R.textures;for(let G=0,Z=U.length;G<Z;G++){const X=n.get(U[G]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(U[G])}n.remove(R)}let D=0;function F(){D=0}function O(){const R=D;return R>=i.maxTextures&&we("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function k(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function V(R,M){const U=n.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const G=R.image;if(G===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,R,M);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+M)}function W(R,M){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){j(U,R,M);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+M)}function z(R,M){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){j(U,R,M);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+M)}function K(R,M){const U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){re(U,R,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+M)}const ee={[Br]:r.REPEAT,[Cn]:r.CLAMP_TO_EDGE,[Do]:r.MIRRORED_REPEAT},Y={[Bt]:r.NEAREST,[ku]:r.NEAREST_MIPMAP_NEAREST,[ps]:r.NEAREST_MIPMAP_LINEAR,[Rt]:r.LINEAR,[wo]:r.LINEAR_MIPMAP_NEAREST,[hi]:r.LINEAR_MIPMAP_LINEAR},J={[pv]:r.NEVER,[xv]:r.ALWAYS,[mv]:r.LESS,[$u]:r.LEQUAL,[gv]:r.EQUAL,[Zu]:r.GEQUAL,[vv]:r.GREATER,[_v]:r.NOTEQUAL};function Me(R,M){if(M.type===Rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Rt||M.magFilter===wo||M.magFilter===ps||M.magFilter===hi||M.minFilter===Rt||M.minFilter===wo||M.minFilter===ps||M.minFilter===hi)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ee[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ee[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ee[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Y[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==ps&&M.minFilter!==hi||M.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Re(R,M){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",E));const G=M.source;let Z=f.get(G);Z===void 0&&(Z={},f.set(G,Z));const X=k(M);if(X!==R.__cacheKey){Z[X]===void 0&&(Z[X]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Z[X].usedTimes++;const pe=Z[R.__cacheKey];pe!==void 0&&(Z[R.__cacheKey].usedTimes--,pe.usedTimes===0&&b(M)),R.__cacheKey=X,R.__webglTexture=Z[X].texture}return U}function tt(R,M,U){return Math.floor(Math.floor(R/U)/M)}function Je(R,M,U,G){const X=R.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,U,G,M.data);else{X.sort((Q,he)=>Q.start-he.start);let pe=0;for(let Q=1;Q<X.length;Q++){const he=X[pe],Pe=X[Q],xe=he.start+he.count,fe=tt(Pe.start,M.width,4),Ze=tt(he.start,M.width,4);Pe.start<=xe+1&&fe===Ze&&tt(Pe.start+Pe.count-1,M.width,4)===fe?he.count=Math.max(he.count,Pe.start+Pe.count-he.start):(++pe,X[pe]=Pe)}X.length=pe+1;const ae=r.getParameter(r.UNPACK_ROW_LENGTH),me=r.getParameter(r.UNPACK_SKIP_PIXELS),De=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Q=0,he=X.length;Q<he;Q++){const Pe=X[Q],xe=Math.floor(Pe.start/4),fe=Math.ceil(Pe.count/4),Ze=xe%M.width,N=Math.floor(xe/M.width),ve=fe,ue=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,N),t.texSubImage2D(r.TEXTURE_2D,0,Ze,N,ve,ue,U,G,M.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,me),r.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function j(R,M,U){let G=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=r.TEXTURE_3D);const Z=Re(R,M),X=M.source;t.bindTexture(G,R.__webglTexture,r.TEXTURE0+U);const pe=n.get(X);if(X.version!==pe.__version||Z===!0){t.activeTexture(r.TEXTURE0+U);const ae=ut.getPrimaries(ut.workingColorSpace),me=M.colorSpace===sr?null:ut.getPrimaries(M.colorSpace),De=M.colorSpace===sr||ae===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Q=v(M.image,!1,i.maxTextureSize);Q=Ie(M,Q);const he=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type);let xe=_(M.internalFormat,he,Pe,M.colorSpace,M.isVideoTexture);Me(G,M);let fe;const Ze=M.mipmaps,N=M.isVideoTexture!==!0,ve=pe.__version===void 0||Z===!0,ue=X.dataReady,Ae=S(M,Q);if(M.isDepthTexture)xe=y(M.format===Rr,M.type),ve&&(N?t.texStorage2D(r.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,he,Pe,null));else if(M.isDataTexture)if(Ze.length>0){N&&ve&&t.texStorage2D(r.TEXTURE_2D,Ae,xe,Ze[0].width,Ze[0].height);for(let ce=0,te=Ze.length;ce<te;ce++)fe=Ze[ce],N?ue&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,fe.width,fe.height,he,Pe,fe.data):t.texImage2D(r.TEXTURE_2D,ce,xe,fe.width,fe.height,0,he,Pe,fe.data);M.generateMipmaps=!1}else N?(ve&&t.texStorage2D(r.TEXTURE_2D,Ae,xe,Q.width,Q.height),ue&&Je(M,Q,he,Pe)):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,he,Pe,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,xe,Ze[0].width,Ze[0].height,Q.depth);for(let ce=0,te=Ze.length;ce<te;ce++)if(fe=Ze[ce],M.format!==In)if(he!==null)if(N){if(ue)if(M.layerUpdates.size>0){const ge=jf(fe.width,fe.height,M.format,M.type);for(const rt of M.layerUpdates){const Lt=fe.data.subarray(rt*ge/fe.data.BYTES_PER_ELEMENT,(rt+1)*ge/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,rt,fe.width,fe.height,1,he,Lt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,fe.width,fe.height,Q.depth,he,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,xe,fe.width,fe.height,Q.depth,0,fe.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ue&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,fe.width,fe.height,Q.depth,he,Pe,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,xe,fe.width,fe.height,Q.depth,0,he,Pe,fe.data)}else{N&&ve&&t.texStorage2D(r.TEXTURE_2D,Ae,xe,Ze[0].width,Ze[0].height);for(let ce=0,te=Ze.length;ce<te;ce++)fe=Ze[ce],M.format!==In?he!==null?N?ue&&t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,xe,fe.width,fe.height,0,fe.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ue&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,fe.width,fe.height,he,Pe,fe.data):t.texImage2D(r.TEXTURE_2D,ce,xe,fe.width,fe.height,0,he,Pe,fe.data)}else if(M.isDataArrayTexture)if(N){if(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,xe,Q.width,Q.height,Q.depth),ue)if(M.layerUpdates.size>0){const ce=jf(Q.width,Q.height,M.format,M.type);for(const te of M.layerUpdates){const ge=Q.data.subarray(te*ce/Q.data.BYTES_PER_ELEMENT,(te+1)*ce/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,Q.width,Q.height,1,he,Pe,ge)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Pe,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,he,Pe,Q.data);else if(M.isData3DTexture)N?(ve&&t.texStorage3D(r.TEXTURE_3D,Ae,xe,Q.width,Q.height,Q.depth),ue&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Pe,Q.data)):t.texImage3D(r.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,he,Pe,Q.data);else if(M.isFramebufferTexture){if(ve)if(N)t.texStorage2D(r.TEXTURE_2D,Ae,xe,Q.width,Q.height);else{let ce=Q.width,te=Q.height;for(let ge=0;ge<Ae;ge++)t.texImage2D(r.TEXTURE_2D,ge,xe,ce,te,0,he,Pe,null),ce>>=1,te>>=1}}else if(Ze.length>0){if(N&&ve){const ce=oe(Ze[0]);t.texStorage2D(r.TEXTURE_2D,Ae,xe,ce.width,ce.height)}for(let ce=0,te=Ze.length;ce<te;ce++)fe=Ze[ce],N?ue&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,he,Pe,fe):t.texImage2D(r.TEXTURE_2D,ce,xe,he,Pe,fe);M.generateMipmaps=!1}else if(N){if(ve){const ce=oe(Q);t.texStorage2D(r.TEXTURE_2D,Ae,xe,ce.width,ce.height)}ue&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Pe,Q)}else t.texImage2D(r.TEXTURE_2D,0,xe,he,Pe,Q);g(M)&&p(G),pe.__version=X.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,U){if(M.image.length!==6)return;const G=Re(R,M),Z=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+U);const X=n.get(Z);if(Z.version!==X.__version||G===!0){t.activeTexture(r.TEXTURE0+U);const pe=ut.getPrimaries(ut.workingColorSpace),ae=M.colorSpace===sr?null:ut.getPrimaries(M.colorSpace),me=M.colorSpace===sr||pe===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!De&&!Q?he[te]=v(M.image[te],!0,i.maxCubemapSize):he[te]=Q?M.image[te].image:M.image[te],he[te]=Ie(M,he[te]);const Pe=he[0],xe=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),Ze=_(M.internalFormat,xe,fe,M.colorSpace),N=M.isVideoTexture!==!0,ve=X.__version===void 0||G===!0,ue=Z.dataReady;let Ae=S(M,Pe);Me(r.TEXTURE_CUBE_MAP,M);let ce;if(De){N&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,Ze,Pe.width,Pe.height);for(let te=0;te<6;te++){ce=he[te].mipmaps;for(let ge=0;ge<ce.length;ge++){const rt=ce[ge];M.format!==In?xe!==null?N?ue&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,rt.width,rt.height,xe,rt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,Ze,rt.width,rt.height,0,rt.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,rt.width,rt.height,xe,fe,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,Ze,rt.width,rt.height,0,xe,fe,rt.data)}}}else{if(ce=M.mipmaps,N&&ve){ce.length>0&&Ae++;const te=oe(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,Ze,te.width,te.height)}for(let te=0;te<6;te++)if(Q){N?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,xe,fe,he[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,he[te].width,he[te].height,0,xe,fe,he[te].data);for(let ge=0;ge<ce.length;ge++){const Lt=ce[ge].image[te].image;N?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,Lt.width,Lt.height,xe,fe,Lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,Ze,Lt.width,Lt.height,0,xe,fe,Lt.data)}}else{N?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe,fe,he[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,xe,fe,he[te]);for(let ge=0;ge<ce.length;ge++){const rt=ce[ge];N?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,xe,fe,rt.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,Ze,xe,fe,rt.image[te])}}}g(M)&&p(r.TEXTURE_CUBE_MAP),X.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ee(R,M,U,G,Z,X){const pe=s.convert(U.format,U.colorSpace),ae=s.convert(U.type),me=_(U.internalFormat,pe,ae,U.colorSpace),De=n.get(M),Q=n.get(U);if(Q.__renderTarget=M,!De.__hasExternalTextures){const he=Math.max(1,M.width>>X),Pe=Math.max(1,M.height>>X);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,me,he,Pe,M.depth,0,pe,ae,null):t.texImage2D(Z,X,me,he,Pe,0,pe,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ue(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,Z,Q.__webglTexture,0,L(M)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,G,Z,Q.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(R,M,U){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const G=M.depthTexture,Z=G&&G.isDepthTexture?G.type:null,X=y(M.stencilBuffer,Z),pe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ue(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(M),X,M.width,M.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(M),X,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,X,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,R)}else{const G=M.textures;for(let Z=0;Z<G.length;Z++){const X=G[Z],pe=s.convert(X.format,X.colorSpace),ae=s.convert(X.type),me=_(X.internalFormat,pe,ae,X.colorSpace);Ue(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(M),me,M.width,M.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(M),me,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,me,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(R,M,U){const G=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Me(r.TEXTURE_CUBE_MAP,M.depthTexture);const De=s.convert(M.depthTexture.format),Q=s.convert(M.depthTexture.type);let he;M.depthTexture.format===Xi?he=r.DEPTH_COMPONENT24:M.depthTexture.format===Rr&&(he=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,he,M.width,M.height,0,De,Q,null)}}else V(M.depthTexture,0);const X=Z.__webglTexture,pe=L(M),ae=G?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,me=M.depthTexture.format===Rr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Xi)Ue(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ae,X,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,me,ae,X,0);else if(M.depthTexture.format===Rr)Ue(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ae,X,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,me,ae,X,0);else throw new Error("Unknown depthTexture format")}function it(R){const M=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const G=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=G}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)ye(M.__webglFramebuffer[G],R,G);else{const G=R.texture.mipmaps;G&&G.length>0?ye(M.__webglFramebuffer[0],R,0):ye(M.__webglFramebuffer,R,0)}else if(U){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=r.createRenderbuffer(),ze(M.__webglDepthbuffer[G],R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[G];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,X)}}else{const G=R.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ze(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(R,M,U){const G=n.get(R);M!==void 0&&Ee(G.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&it(R)}function $e(R){const M=R.texture,U=n.get(R),G=n.get(M);R.addEventListener("dispose",A);const Z=R.textures,X=R.isWebGLCubeRenderTarget===!0,pe=Z.length>1;if(pe||(G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture()),G.__version=M.version,o.memory.textures++),X){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let me=0;me<M.mipmaps.length;me++)U.__webglFramebuffer[ae][me]=r.createFramebuffer()}else U.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)U.__webglFramebuffer[ae]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(pe)for(let ae=0,me=Z.length;ae<me;ae++){const De=n.get(Z[ae]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Ue(R)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const me=Z[ae];U.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);const De=s.convert(me.format,me.colorSpace),Q=s.convert(me.type),he=_(me.internalFormat,De,Q,me.colorSpace,R.isXRRenderTarget===!0),Pe=L(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,he,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture),Me(r.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Ee(U.__webglFramebuffer[ae][me],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me);else Ee(U.__webglFramebuffer[ae],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ae=0,me=Z.length;ae<me;ae++){const De=Z[ae],Q=n.get(De);let he=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,Q.__webglTexture),Me(he,De),Ee(U.__webglFramebuffer,R,De,r.COLOR_ATTACHMENT0+ae,he,0),g(De)&&p(he)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,G.__webglTexture),Me(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Ee(U.__webglFramebuffer[me],R,M,r.COLOR_ATTACHMENT0,ae,me);else Ee(U.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,ae,0);g(M)&&p(ae),t.unbindTexture()}R.depthBuffer&&it(R)}function ne(R){const M=R.textures;for(let U=0,G=M.length;U<G;U++){const Z=M[U];if(g(Z)){const X=x(R),pe=n.get(Z).__webglTexture;t.bindTexture(X,pe),p(X),t.unbindTexture()}}}const le=[],se=[];function _e(R){if(R.samples>0){if(Ue(R)===!1){const M=R.textures,U=R.width,G=R.height;let Z=r.COLOR_BUFFER_BIT;const X=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=n.get(R),ae=M.length>1;if(ae)for(let De=0;De<M.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const me=R.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let De=0;De<M.length;De++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);const Q=n.get(M[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,U,G,0,0,U,G,Z,r.NEAREST),c===!0&&(le.length=0,se.length=0,le.push(r.COLOR_ATTACHMENT0+De),R.depthBuffer&&R.resolveDepthBuffer===!1&&(le.push(X),se.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let De=0;De<M.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);const Q=n.get(M[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function L(R){return Math.min(i.maxSamples,R.samples)}function Ue(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Ie(R,M){const U=R.colorSpace,G=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==gn&&U!==sr&&(ut.getTransfer(U)===St?(G!==In||Z!==Bn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",U)),M}function oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=ct,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function M_(r,e){function t(n,i=sr){let s;const o=ut.getTransfer(i);if(n===Bn)return r.UNSIGNED_BYTE;if(n===Gu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Hu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Td)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ed)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sd)return r.BYTE;if(n===wd)return r.SHORT;if(n===No)return r.UNSIGNED_SHORT;if(n===Vu)return r.INT;if(n===fi)return r.UNSIGNED_INT;if(n===Rn)return r.FLOAT;if(n===Wi)return r.HALF_FLOAT;if(n===Ad)return r.ALPHA;if(n===Cd)return r.RGB;if(n===In)return r.RGBA;if(n===Xi)return r.DEPTH_COMPONENT;if(n===Rr)return r.DEPTH_STENCIL;if(n===Wu)return r.RED;if(n===cc)return r.RED_INTEGER;if(n===Rs)return r.RG;if(n===Xu)return r.RG_INTEGER;if(n===qu)return r.RGBA_INTEGER;if(n===Ra||n===Ia||n===Pa||n===La)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Vl||n===Gl||n===Hl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Zl||n===Kl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wl||n===Xl)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ql)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yl)return s.COMPRESSED_R11_EAC;if(n===$l)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Zl)return s.COMPRESSED_RG11_EAC;if(n===Kl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===Jl||n===Ql||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===cu||n===lu||n===uu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===jl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===iu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ru)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===su)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ou)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===au)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hu||n===fu||n===du)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===hu)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===du)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pu||n===mu||n===gu||n===vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===pu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Uo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const uC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hC=`
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

}`;class fC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Hd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:uC,fragmentShader:hC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Qo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dC extends Zi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new fC,p={},x=t.getContextAttributes();let _=null,y=null;const S=[],E=[],A=new ie;let I=null;const b=new jt;b.viewport=new bt;const T=new jt;T.viewport=new bt;const D=[b,T],F=new u_;let O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=S[j];return re===void 0&&(re=new yl,S[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=S[j];return re===void 0&&(re=new yl,S[j]=re),re.getGripSpace()},this.getHand=function(j){let re=S[j];return re===void 0&&(re=new yl,S[j]=re),re.getHandSpace()};function V(j){const re=E.indexOf(j.inputSource);if(re===-1)return;const Ee=S[re];Ee!==void 0&&(Ee.update(j.inputSource,j.frame,l||o),Ee.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",z);for(let j=0;j<S.length;j++){const re=E[j];re!==null&&(E[j]=null,S[j].disconnect(re))}O=null,k=null,g.reset();for(const j in p)delete p[j];e.setRenderTarget(_),d=null,f=null,h=null,i=null,y=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",W),i.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ze=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=x.stencil?Rr:Xi,ze=x.stencil?Uo:fi);const it={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(it),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Qn(f.textureWidth,f.textureHeight,{format:In,type:Bn,depthTexture:new Go(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ee={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Qn(d.framebufferWidth,d.framebufferHeight,{format:In,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(j){for(let re=0;re<j.removed.length;re++){const Ee=j.removed[re],ze=E.indexOf(Ee);ze>=0&&(E[ze]=null,S[ze].disconnect(Ee))}for(let re=0;re<j.added.length;re++){const Ee=j.added[re];let ze=E.indexOf(Ee);if(ze===-1){for(let it=0;it<S.length;it++)if(it>=E.length){E.push(Ee),ze=it;break}else if(E[it]===null){E[it]=Ee,ze=it;break}if(ze===-1)break}const ye=S[ze];ye&&ye.connect(Ee)}}const K=new P,ee=new P;function Y(j,re,Ee){K.setFromMatrixPosition(re.matrixWorld),ee.setFromMatrixPosition(Ee.matrixWorld);const ze=K.distanceTo(ee),ye=re.projectionMatrix.elements,it=Ee.projectionMatrix.elements,ct=ye[14]/(ye[10]-1),$e=ye[14]/(ye[10]+1),ne=(ye[9]+1)/ye[5],le=(ye[9]-1)/ye[5],se=(ye[8]-1)/ye[0],_e=(it[8]+1)/it[0],L=ct*se,Ue=ct*_e,Te=ze/(-se+_e),Ie=Te*-se;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ie),j.translateZ(Te),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const oe=ct+Te,R=$e+Te,M=L-Ie,U=Ue+(ze-Ie),G=ne*$e/R*oe,Z=le*$e/R*oe;j.projectionMatrix.makePerspective(M,U,G,Z,oe,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function J(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let re=j.near,Ee=j.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),F.near=T.near=b.near=re,F.far=T.far=b.far=Ee,(O!==F.near||k!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,k=F.far),F.layers.mask=j.layers.mask|6,b.layers.mask=F.layers.mask&3,T.layers.mask=F.layers.mask&5;const ze=j.parent,ye=F.cameras;J(F,ze);for(let it=0;it<ye.length;it++)J(ye[it],ze);ye.length===2?Y(F,b,T):F.projectionMatrix.copy(b.projectionMatrix),Me(j,F,ze)};function Me(j,re,Ee){Ee===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(Ee.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ko*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(j){return p[j]};let Re=null;function tt(j,re){if(u=re.getViewerPose(l||o),m=re,u!==null){const Ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ze=!1;Ee.length!==F.cameras.length&&(F.cameras.length=0,ze=!0);for(let $e=0;$e<Ee.length;$e++){const ne=Ee[$e];let le=null;if(d!==null)le=d.getViewport(ne);else{const _e=h.getViewSubImage(f,ne);le=_e.viewport,$e===0&&(e.setRenderTargetTextures(y,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(y))}let se=D[$e];se===void 0&&(se=new jt,se.layers.enable($e),se.viewport=new bt,D[$e]=se),se.matrix.fromArray(ne.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ne.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(le.x,le.y,le.width,le.height),$e===0&&(F.matrix.copy(se.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ze===!0&&F.cameras.push(se)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const $e=h.getDepthInformation(Ee[0]);$e&&$e.isValid&&$e.texture&&g.init($e,i.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let $e=0;$e<Ee.length;$e++){const ne=Ee[$e].camera;if(ne){let le=p[ne];le||(le=new Hd,p[ne]=le);const se=h.getCameraImage(ne);le.sourceTexture=se}}}}for(let Ee=0;Ee<S.length;Ee++){const ze=E[Ee],ye=S[Ee];ze!==null&&ye!==void 0&&ye.update(ze,re,l||o)}Re&&Re(j,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),m=null}const Je=new v_;Je.setAnimationLoop(tt),this.setAnimationLoop=function(j){Re=j},this.dispose=function(){}}}const as=new ei,pC=new ke;function mC(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ev(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,x,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),_=x.envMap,y=x.envMapRotation;_&&(g.envMap.value=_,as.copy(y),as.x*=-1,as.y*=-1,as.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),g.envMapRotation.value.setFromMatrix4(pC.makeRotationFromEuler(as)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gC(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function l(x,_){let y=i[x.id];y===void 0&&(m(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",g));const S=_.program;n.updateUBOMapping(x,S);const E=e.render.frame;s[x.id]!==E&&(f(x),s[x.id]=E)}function u(x){const _=h();x.__bindingPointIndex=_;const y=r.createBuffer(),S=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,S,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const _=i[x.id],y=x.uniforms,S=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let E=0,A=y.length;E<A;E++){const I=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,T=I.length;b<T;b++){const D=I[b];if(d(D,E,b,S)===!0){const F=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let V=0;V<O.length;V++){const W=O[V],z=v(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,F+k,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,k),k+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,_,y,S){const E=x.value,A=_+"_"+y;if(S[A]===void 0)return typeof E=="number"||typeof E=="boolean"?S[A]=E:S[A]=E.clone(),!0;{const I=S[A];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return S[A]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(x){const _=x.uniforms;let y=0;const S=16;for(let A=0,I=_.length;A<I;A++){const b=Array.isArray(_[A])?_[A]:[_[A]];for(let T=0,D=b.length;T<D;T++){const F=b[T],O=Array.isArray(F.value)?F.value:[F.value];for(let k=0,V=O.length;k<V;k++){const W=O[k],z=v(W),K=y%S,ee=K%z.boundary,Y=K+ee;y+=ee,Y!==0&&S-Y<z.storage&&(y+=S-Y),F.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=z.storage}}}const E=y%S;return E>0&&(y+=S-E),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):we("WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}const vC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function _C(){return Li===null&&(Li=new Mi(vC,16,16,Rs,Wi),Li.name="DFG_LUT",Li.minFilter=Rt,Li.magFilter=Rt,Li.wrapS=Cn,Li.wrapT=Cn,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class S_{constructor(e={}){const{canvas:t=Mv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Bn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=d,g=new Set([qu,Xu,cc]),p=new Set([Bn,fi,No,Uo,Gu,Hu]),x=new Uint32Array(4),_=new Int32Array(4);let y=null,S=null;const E=[],A=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let T=!1;this._outputColorSpace=Kt;let D=0,F=0,O=null,k=-1,V=null;const W=new bt,z=new bt;let K=null;const ee=new Se(0);let Y=0,J=t.width,Me=t.height,Re=1,tt=null,Je=null;const j=new bt(0,0,J,Me),re=new bt(0,0,J,Me);let Ee=!1;const ze=new jo;let ye=!1,it=!1;const ct=new ke,$e=new P,ne=new bt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function _e(){return O===null?Re:1}let L=n;function Ue(C,B){return t.getContext(C,B)}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bu}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Lt,!1),t.addEventListener("webglcontextcreationerror",wt,!1),L===null){const B="webgl2";if(L=Ue(B,C),L===null)throw Ue(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ve("WebGLRenderer: "+C.message),C}let Te,Ie,oe,R,M,U,G,Z,X,pe,ae,me,De,Q,he,Pe,xe,fe,Ze,N,ve,ue,Ae,ce;function te(){Te=new xE(L),Te.init(),ue=new M_(L,Te),Ie=new uE(L,Te,e,ue),oe=new cC(L,Te),Ie.reversedDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),R=new ME(L),M=new YA,U=new lC(L,Te,oe,M,Ie,ue,R),G=new fE(b),Z=new _E(b),X=new Ew(L),Ae=new cE(L,X),pe=new yE(L,X,R,Ae),ae=new wE(L,pe,X,R),Ze=new SE(L,Ie,U),Pe=new hE(M),me=new qA(b,G,Z,Te,Ie,Ae,Pe),De=new mC(b,M),Q=new ZA,he=new tC(Te),fe=new aE(b,G,Z,oe,ae,m,c),xe=new oC(b,ae,Ie),ce=new gC(L,R,Ie,oe),N=new lE(L,Te,R),ve=new bE(L,Te,R),R.programs=me.programs,b.capabilities=Ie,b.extensions=Te,b.properties=M,b.renderLists=Q,b.shadowMap=xe,b.state=oe,b.info=R}te(),v!==Bn&&(I=new EE(v,t.width,t.height,i,s));const ge=new dC(b,L);this.xr=ge,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=Te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(C){C!==void 0&&(Re=C,this.setSize(J,Me,!1))},this.getSize=function(C){return C.set(J,Me)},this.setSize=function(C,B,$=!0){if(ge.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}J=C,Me=B,t.width=Math.floor(C*Re),t.height=Math.floor(B*Re),$===!0&&(t.style.width=C+"px",t.style.height=B+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(J*Re,Me*Re).floor()},this.setDrawingBufferSize=function(C,B,$){J=C,Me=B,Re=$,t.width=Math.floor(C*$),t.height=Math.floor(B*$),this.setViewport(0,0,C,B)},this.setEffects=function(C){if(v===Bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let B=0;B<C.length;B++)if(C[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(W)},this.getViewport=function(C){return C.copy(j)},this.setViewport=function(C,B,$,q){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,B,$,q),oe.viewport(W.copy(j).multiplyScalar(Re).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,B,$,q){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,B,$,q),oe.scissor(z.copy(re).multiplyScalar(Re).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){oe.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){tt=C},this.setTransparentSort=function(C){Je=C},this.getClearColor=function(C){return C.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(C=!0,B=!0,$=!0){let q=0;if(C){let H=!1;if(O!==null){const Ce=O.texture.format;H=g.has(Ce)}if(H){const Ce=O.texture.type,Oe=p.has(Ce),Le=fe.getClearColor(),Be=fe.getClearAlpha(),Ge=Le.r,Qe=Le.g,Xe=Le.b;Oe?(x[0]=Ge,x[1]=Qe,x[2]=Xe,x[3]=Be,L.clearBufferuiv(L.COLOR,0,x)):(_[0]=Ge,_[1]=Qe,_[2]=Xe,_[3]=Be,L.clearBufferiv(L.COLOR,0,_))}else q|=L.COLOR_BUFFER_BIT}B&&(q|=L.DEPTH_BUFFER_BIT),$&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),fe.dispose(),Q.dispose(),he.dispose(),M.dispose(),G.dispose(),Z.dispose(),ae.dispose(),Ae.dispose(),ce.dispose(),me.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",yp),ge.removeEventListener("sessionend",bp),qr.stop()};function rt(C){C.preventDefault(),Ya("WebGLRenderer: Context Lost."),T=!0}function Lt(){Ya("WebGLRenderer: Context Restored."),T=!1;const C=R.autoReset,B=xe.enabled,$=xe.autoUpdate,q=xe.needsUpdate,H=xe.type;te(),R.autoReset=C,xe.enabled=B,xe.autoUpdate=$,xe.needsUpdate=q,xe.type=H}function wt(C){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ri(C){const B=C.target;B.removeEventListener("dispose",Ri),Ki(B)}function Ki(C){H_(C),M.remove(C)}function H_(C){const B=M.get(C).programs;B!==void 0&&(B.forEach(function($){me.releaseProgram($)}),C.isShaderMaterial&&me.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,$,q,H,Ce){B===null&&(B=le);const Oe=H.isMesh&&H.matrixWorld.determinant()<0,Le=X_(C,B,$,q,H);oe.setMaterial(q,Oe);let Be=$.index,Ge=1;if(q.wireframe===!0){if(Be=pe.getWireframeAttribute($),Be===void 0)return;Ge=2}const Qe=$.drawRange,Xe=$.attributes.position;let lt=Qe.start*Ge,Et=(Qe.start+Qe.count)*Ge;Ce!==null&&(lt=Math.max(lt,Ce.start*Ge),Et=Math.min(Et,(Ce.start+Ce.count)*Ge)),Be!==null?(lt=Math.max(lt,0),Et=Math.min(Et,Be.count)):Xe!=null&&(lt=Math.max(lt,0),Et=Math.min(Et,Xe.count));const kt=Et-lt;if(kt<0||kt===1/0)return;Ae.setup(H,q,Le,$,Be);let Vt,Pt=N;if(Be!==null&&(Vt=X.get(Be),Pt=ve,Pt.setIndex(Vt)),H.isMesh)q.wireframe===!0?(oe.setLineWidth(q.wireframeLinewidth*_e()),Pt.setMode(L.LINES)):Pt.setMode(L.TRIANGLES);else if(H.isLine){let qe=q.linewidth;qe===void 0&&(qe=1),oe.setLineWidth(qe*_e()),H.isLineSegments?Pt.setMode(L.LINES):H.isLineLoop?Pt.setMode(L.LINE_LOOP):Pt.setMode(L.LINE_STRIP)}else H.isPoints?Pt.setMode(L.POINTS):H.isSprite&&Pt.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const qe=H._multiDrawStarts,Tt=H._multiDrawCounts,_t=H._multiDrawCount,Xn=Be?X.get(Be).bytesPerElement:1,qs=M.get(q).currentProgram.getUniforms();for(let qn=0;qn<_t;qn++)qs.setValue(L,"_gl_DrawID",qn),Pt.render(qe[qn]/Xn,Tt[qn])}else if(H.isInstancedMesh)Pt.renderInstances(lt,kt,H.count);else if($.isInstancedBufferGeometry){const qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Tt=Math.min($.instanceCount,qe);Pt.renderInstances(lt,kt,Tt)}else Pt.render(lt,kt)};function xp(C,B,$){C.transparent===!0&&C.side===En&&C.forceSinglePass===!1?(C.side=pn,C.needsUpdate=!0,bc(C,B,$),C.side=Gi,C.needsUpdate=!0,bc(C,B,$),C.side=En):bc(C,B,$)}this.compile=function(C,B,$=null){$===null&&($=C),S=he.get($),S.init(B),A.push(S),$.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),C!==$&&C.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),S.setupLights();const q=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Ce=H.material;if(Ce)if(Array.isArray(Ce))for(let Oe=0;Oe<Ce.length;Oe++){const Le=Ce[Oe];xp(Le,$,H),q.add(Le)}else xp(Ce,$,H),q.add(Ce)}),S=A.pop(),q},this.compileAsync=function(C,B,$=null){const q=this.compile(C,B,$);return new Promise(H=>{function Ce(){if(q.forEach(function(Oe){M.get(Oe).currentProgram.isReady()&&q.delete(Oe)}),q.size===0){H(C);return}setTimeout(Ce,10)}Te.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Th=null;function W_(C){Th&&Th(C)}function yp(){qr.stop()}function bp(){qr.start()}const qr=new v_;qr.setAnimationLoop(W_),typeof self<"u"&&qr.setContext(self),this.setAnimationLoop=function(C){Th=C,ge.setAnimationLoop(C),C===null?qr.stop():qr.start()},ge.addEventListener("sessionstart",yp),ge.addEventListener("sessionend",bp),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const $=ge.enabled===!0&&ge.isPresenting===!0,q=I!==null&&(O===null||$)&&I.begin(b,O);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(B),B=ge.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,B,O),S=he.get(C,A.length),S.init(B),A.push(S),ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ze.setFromProjectionMatrix(ct,Kn,B.reversedDepth),it=this.localClippingEnabled,ye=Pe.init(this.clippingPlanes,it),y=Q.get(C,E.length),y.init(),E.push(y),ge.enabled===!0&&ge.isPresenting===!0){const Oe=b.xr.getDepthSensingMesh();Oe!==null&&Eh(Oe,B,-1/0,b.sortObjects)}Eh(C,B,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(tt,Je),se=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,se&&fe.addToRenderList(y,C),this.info.render.frame++,ye===!0&&Pe.beginShadows();const H=S.state.shadowsArray;if(xe.render(H,C,B),ye===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&I.hasRenderPass())===!1){const Oe=y.opaque,Le=y.transmissive;if(S.setupLights(),B.isArrayCamera){const Be=B.cameras;if(Le.length>0)for(let Ge=0,Qe=Be.length;Ge<Qe;Ge++){const Xe=Be[Ge];Sp(Oe,Le,C,Xe)}se&&fe.render(C);for(let Ge=0,Qe=Be.length;Ge<Qe;Ge++){const Xe=Be[Ge];Mp(y,C,Xe,Xe.viewport)}}else Le.length>0&&Sp(Oe,Le,C,B),se&&fe.render(C),Mp(y,C,B)}O!==null&&F===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),q&&I.end(b),C.isScene===!0&&C.onAfterRender(b,C,B),Ae.resetDefaultState(),k=-1,V=null,A.pop(),A.length>0?(S=A[A.length-1],ye===!0&&Pe.setGlobalState(b.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function Eh(C,B,$,q){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ze.intersectsSprite(C)){q&&ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);const Oe=ae.update(C),Le=C.material;Le.visible&&y.push(C,Oe,Le,$,ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ze.intersectsObject(C))){const Oe=ae.update(C),Le=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ne.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),ne.copy(Oe.boundingSphere.center)),ne.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(Le)){const Be=Oe.groups;for(let Ge=0,Qe=Be.length;Ge<Qe;Ge++){const Xe=Be[Ge],lt=Le[Xe.materialIndex];lt&&lt.visible&&y.push(C,Oe,lt,$,ne.z,Xe)}}else Le.visible&&y.push(C,Oe,Le,$,ne.z,null)}}const Ce=C.children;for(let Oe=0,Le=Ce.length;Oe<Le;Oe++)Eh(Ce[Oe],B,$,q)}function Mp(C,B,$,q){const{opaque:H,transmissive:Ce,transparent:Oe}=C;S.setupLightsView($),ye===!0&&Pe.setGlobalState(b.clippingPlanes,$),q&&oe.viewport(W.copy(q)),H.length>0&&yc(H,B,$),Ce.length>0&&yc(Ce,B,$),Oe.length>0&&yc(Oe,B,$),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Sp(C,B,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){const lt=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new Qn(1,1,{generateMipmaps:!0,type:lt?Wi:Bn,minFilter:hi,samples:Ie.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const Ce=S.state.transmissionRenderTarget[q.id],Oe=q.viewport||W;Ce.setSize(Oe.z*b.transmissionResolutionScale,Oe.w*b.transmissionResolutionScale);const Le=b.getRenderTarget(),Be=b.getActiveCubeFace(),Ge=b.getActiveMipmapLevel();b.setRenderTarget(Ce),b.getClearColor(ee),Y=b.getClearAlpha(),Y<1&&b.setClearColor(16777215,.5),b.clear(),se&&fe.render($);const Qe=b.toneMapping;b.toneMapping=bi;const Xe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),ye===!0&&Pe.setGlobalState(b.clippingPlanes,q),yc(C,$,q),U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce),Te.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Et=0,kt=B.length;Et<kt;Et++){const Vt=B[Et],{object:Pt,geometry:qe,material:Tt,group:_t}=Vt;if(Tt.side===En&&Pt.layers.test(q.layers)){const Xn=Tt.side;Tt.side=pn,Tt.needsUpdate=!0,wp(Pt,$,q,qe,Tt,_t),Tt.side=Xn,Tt.needsUpdate=!0,lt=!0}}lt===!0&&(U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce))}b.setRenderTarget(Le,Be,Ge),b.setClearColor(ee,Y),Xe!==void 0&&(q.viewport=Xe),b.toneMapping=Qe}function yc(C,B,$){const q=B.isScene===!0?B.overrideMaterial:null;for(let H=0,Ce=C.length;H<Ce;H++){const Oe=C[H],{object:Le,geometry:Be,group:Ge}=Oe;let Qe=Oe.material;Qe.allowOverride===!0&&q!==null&&(Qe=q),Le.layers.test($.layers)&&wp(Le,B,$,Be,Qe,Ge)}}function wp(C,B,$,q,H,Ce){C.onBeforeRender(b,B,$,q,H,Ce),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(b,B,$,q,C,Ce),H.transparent===!0&&H.side===En&&H.forceSinglePass===!1?(H.side=pn,H.needsUpdate=!0,b.renderBufferDirect($,B,q,H,C,Ce),H.side=Gi,H.needsUpdate=!0,b.renderBufferDirect($,B,q,H,C,Ce),H.side=En):b.renderBufferDirect($,B,q,H,C,Ce),C.onAfterRender(b,B,$,q,H,Ce)}function bc(C,B,$){B.isScene!==!0&&(B=le);const q=M.get(C),H=S.state.lights,Ce=S.state.shadowsArray,Oe=H.state.version,Le=me.getParameters(C,H.state,Ce,B,$),Be=me.getProgramCacheKey(Le);let Ge=q.programs;q.environment=C.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(C.isMeshStandardMaterial?Z:G).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,Ge===void 0&&(C.addEventListener("dispose",Ri),Ge=new Map,q.programs=Ge);let Qe=Ge.get(Be);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===Oe)return Ep(C,Le),Qe}else Le.uniforms=me.getUniforms(C),C.onBeforeCompile(Le,b),Qe=me.acquireProgram(Le,Be),Ge.set(Be,Qe),q.uniforms=Le.uniforms;const Xe=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=Pe.uniform),Ep(C,Le),q.needsLights=Y_(C),q.lightsStateVersion=Oe,q.needsLights&&(Xe.ambientLightColor.value=H.state.ambient,Xe.lightProbe.value=H.state.probe,Xe.directionalLights.value=H.state.directional,Xe.directionalLightShadows.value=H.state.directionalShadow,Xe.spotLights.value=H.state.spot,Xe.spotLightShadows.value=H.state.spotShadow,Xe.rectAreaLights.value=H.state.rectArea,Xe.ltc_1.value=H.state.rectAreaLTC1,Xe.ltc_2.value=H.state.rectAreaLTC2,Xe.pointLights.value=H.state.point,Xe.pointLightShadows.value=H.state.pointShadow,Xe.hemisphereLights.value=H.state.hemi,Xe.directionalShadowMap.value=H.state.directionalShadowMap,Xe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Xe.spotShadowMap.value=H.state.spotShadowMap,Xe.spotLightMatrix.value=H.state.spotLightMatrix,Xe.spotLightMap.value=H.state.spotLightMap,Xe.pointShadowMap.value=H.state.pointShadowMap,Xe.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Qe,q.uniformsList=null,Qe}function Tp(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=bl.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function Ep(C,B){const $=M.get(C);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function X_(C,B,$,q,H){B.isScene!==!0&&(B=le),U.resetTextureUnits();const Ce=B.fog,Oe=q.isMeshStandardMaterial?B.environment:null,Le=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:gn,Be=(q.isMeshStandardMaterial?Z:G).get(q.envMap||Oe),Ge=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Qe=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Xe=!!$.morphAttributes.position,lt=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color;let kt=bi;q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(kt=b.toneMapping);const Vt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Pt=Vt!==void 0?Vt.length:0,qe=M.get(q),Tt=S.state.lights;if(ye===!0&&(it===!0||C!==V)){const xn=C===V&&q.id===k;Pe.setState(q,C,xn)}let _t=!1;q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Tt.state.version||qe.outputColorSpace!==Le||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isBatchedMesh&&qe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&qe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&qe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&qe.instancingMorph===!1&&H.morphTexture!==null||qe.envMap!==Be||q.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Pe.numPlanes||qe.numIntersection!==Pe.numIntersection)||qe.vertexAlphas!==Ge||qe.vertexTangents!==Qe||qe.morphTargets!==Xe||qe.morphNormals!==lt||qe.morphColors!==Et||qe.toneMapping!==kt||qe.morphTargetsCount!==Pt)&&(_t=!0):(_t=!0,qe.__version=q.version);let Xn=qe.currentProgram;_t===!0&&(Xn=bc(q,B,H));let qs=!1,qn=!1,na=!1;const Dt=Xn.getUniforms(),Dn=qe.uniforms;if(oe.useProgram(Xn.program)&&(qs=!0,qn=!0,na=!0),q.id!==k&&(k=q.id,qn=!0),qs||V!==C){oe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Dt.setValue(L,"projectionMatrix",C.projectionMatrix),Dt.setValue(L,"viewMatrix",C.matrixWorldInverse);const Nn=Dt.map.cameraPosition;Nn!==void 0&&Nn.setValue(L,$e.setFromMatrixPosition(C.matrixWorld)),Ie.logarithmicDepthBuffer&&Dt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Dt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),V!==C&&(V=C,qn=!0,na=!0)}if(qe.needsLights&&(Tt.state.directionalShadowMap.length>0&&Dt.setValue(L,"directionalShadowMap",Tt.state.directionalShadowMap,U),Tt.state.spotShadowMap.length>0&&Dt.setValue(L,"spotShadowMap",Tt.state.spotShadowMap,U),Tt.state.pointShadowMap.length>0&&Dt.setValue(L,"pointShadowMap",Tt.state.pointShadowMap,U)),H.isSkinnedMesh){Dt.setOptional(L,H,"bindMatrix"),Dt.setOptional(L,H,"bindMatrixInverse");const xn=H.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Dt.setValue(L,"boneTexture",xn.boneTexture,U))}H.isBatchedMesh&&(Dt.setOptional(L,H,"batchingTexture"),Dt.setValue(L,"batchingTexture",H._matricesTexture,U),Dt.setOptional(L,H,"batchingIdTexture"),Dt.setValue(L,"batchingIdTexture",H._indirectTexture,U),Dt.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&Dt.setValue(L,"batchingColorTexture",H._colorsTexture,U));const ti=$.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&Ze.update(H,$,Xn),(qn||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,Dt.setValue(L,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Dn.envMap.value=Be,Dn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Dn.envMapIntensity.value=B.environmentIntensity),Dn.dfgLUT!==void 0&&(Dn.dfgLUT.value=_C()),qn&&(Dt.setValue(L,"toneMappingExposure",b.toneMappingExposure),qe.needsLights&&q_(Dn,na),Ce&&q.fog===!0&&De.refreshFogUniforms(Dn,Ce),De.refreshMaterialUniforms(Dn,q,Re,Me,S.state.transmissionRenderTarget[C.id]),bl.upload(L,Tp(qe),Dn,U)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(bl.upload(L,Tp(qe),Dn,U),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Dt.setValue(L,"center",H.center),Dt.setValue(L,"modelViewMatrix",H.modelViewMatrix),Dt.setValue(L,"normalMatrix",H.normalMatrix),Dt.setValue(L,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const xn=q.uniformsGroups;for(let Nn=0,Ah=xn.length;Nn<Ah;Nn++){const Yr=xn[Nn];ce.update(Yr,Xn),ce.bind(Yr,Xn)}}return Xn}function q_(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Y_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,B,$){const q=M.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=B,M.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,B){const $=M.get(C);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0};const $_=L.createFramebuffer();this.setRenderTarget=function(C,B=0,$=0){O=C,D=B,F=$;let q=null,H=!1,Ce=!1;if(C){const Le=M.get(C);if(Le.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(L.FRAMEBUFFER,Le.__webglFramebuffer),W.copy(C.viewport),z.copy(C.scissor),K=C.scissorTest,oe.viewport(W),oe.scissor(z),oe.setScissorTest(K),k=-1;return}else if(Le.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(Le.__hasExternalTextures)U.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Qe=C.depthTexture;if(Le.__boundDepthTexture!==Qe){if(Qe!==null&&M.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}const Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ce=!0);const Ge=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?q=Ge[B][$]:q=Ge[B],H=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?q=M.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?q=Ge[$]:q=Ge,W.copy(C.viewport),z.copy(C.scissor),K=C.scissorTest}else W.copy(j).multiplyScalar(Re).floor(),z.copy(re).multiplyScalar(Re).floor(),K=Ee;if($!==0&&(q=$_),oe.bindFramebuffer(L.FRAMEBUFFER,q)&&oe.drawBuffers(C,q),oe.viewport(W),oe.scissor(z),oe.setScissorTest(K),H){const Le=M.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Le.__webglTexture,$)}else if(Ce){const Le=B;for(let Be=0;Be<C.textures.length;Be++){const Ge=M.get(C.textures[Be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Be,Ge.__webglTexture,$,Le)}}else if(C!==null&&$!==0){const Le=M.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Le.__webglTexture,$)}k=-1},this.readRenderTargetPixels=function(C,B,$,q,H,Ce,Oe,Le=0){if(!(C&&C.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){oe.bindFramebuffer(L.FRAMEBUFFER,Be);try{const Ge=C.textures[Le],Qe=Ge.format,Xe=Ge.type;if(!Ie.textureFormatReadable(Qe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Xe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-q&&$>=0&&$<=C.height-H&&(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Le),L.readPixels(B,$,q,H,ue.convert(Qe),ue.convert(Xe),Ce))}finally{const Ge=O!==null?M.get(O).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,B,$,q,H,Ce,Oe,Le=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be)if(B>=0&&B<=C.width-q&&$>=0&&$<=C.height-H){oe.bindFramebuffer(L.FRAMEBUFFER,Be);const Ge=C.textures[Le],Qe=Ge.format,Xe=Ge.type;if(!Ie.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.bufferData(L.PIXEL_PACK_BUFFER,Ce.byteLength,L.STREAM_READ),C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Le),L.readPixels(B,$,q,H,ue.convert(Qe),ue.convert(Xe),0);const Et=O!==null?M.get(O).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Et);const kt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ib(L,kt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ce),L.deleteBuffer(lt),L.deleteSync(kt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,B=null,$=0){const q=Math.pow(2,-$),H=Math.floor(C.image.width*q),Ce=Math.floor(C.image.height*q),Oe=B!==null?B.x:0,Le=B!==null?B.y:0;U.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,Oe,Le,H,Ce),oe.unbindTexture()};const Z_=L.createFramebuffer(),K_=L.createFramebuffer();this.copyTextureToTexture=function(C,B,$=null,q=null,H=0,Ce=null){Ce===null&&(H!==0?(zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=H,H=0):Ce=0);let Oe,Le,Be,Ge,Qe,Xe,lt,Et,kt;const Vt=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if($!==null)Oe=$.max.x-$.min.x,Le=$.max.y-$.min.y,Be=$.isBox3?$.max.z-$.min.z:1,Ge=$.min.x,Qe=$.min.y,Xe=$.isBox3?$.min.z:0;else{const ti=Math.pow(2,-H);Oe=Math.floor(Vt.width*ti),Le=Math.floor(Vt.height*ti),C.isDataArrayTexture?Be=Vt.depth:C.isData3DTexture?Be=Math.floor(Vt.depth*ti):Be=1,Ge=0,Qe=0,Xe=0}q!==null?(lt=q.x,Et=q.y,kt=q.z):(lt=0,Et=0,kt=0);const Pt=ue.convert(B.format),qe=ue.convert(B.type);let Tt;B.isData3DTexture?(U.setTexture3D(B,0),Tt=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),Tt=L.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),Tt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const _t=L.getParameter(L.UNPACK_ROW_LENGTH),Xn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),qs=L.getParameter(L.UNPACK_SKIP_PIXELS),qn=L.getParameter(L.UNPACK_SKIP_ROWS),na=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe);const Dt=C.isDataArrayTexture||C.isData3DTexture,Dn=B.isDataArrayTexture||B.isData3DTexture;if(C.isDepthTexture){const ti=M.get(C),xn=M.get(B),Nn=M.get(ti.__renderTarget),Ah=M.get(xn.__renderTarget);oe.bindFramebuffer(L.READ_FRAMEBUFFER,Nn.__webglFramebuffer),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ah.__webglFramebuffer);for(let Yr=0;Yr<Be;Yr++)Dt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(C).__webglTexture,H,Xe+Yr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(B).__webglTexture,Ce,kt+Yr)),L.blitFramebuffer(Ge,Qe,Oe,Le,lt,Et,Oe,Le,L.DEPTH_BUFFER_BIT,L.NEAREST);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||M.has(C)){const ti=M.get(C),xn=M.get(B);oe.bindFramebuffer(L.READ_FRAMEBUFFER,Z_),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,K_);for(let Nn=0;Nn<Be;Nn++)Dt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ti.__webglTexture,H,Xe+Nn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ti.__webglTexture,H),Dn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xn.__webglTexture,Ce,kt+Nn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xn.__webglTexture,Ce),H!==0?L.blitFramebuffer(Ge,Qe,Oe,Le,lt,Et,Oe,Le,L.COLOR_BUFFER_BIT,L.NEAREST):Dn?L.copyTexSubImage3D(Tt,Ce,lt,Et,kt+Nn,Ge,Qe,Oe,Le):L.copyTexSubImage2D(Tt,Ce,lt,Et,Ge,Qe,Oe,Le);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Dn?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Tt,Ce,lt,Et,kt,Oe,Le,Be,Pt,qe,Vt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,Ce,lt,Et,kt,Oe,Le,Be,Pt,Vt.data):L.texSubImage3D(Tt,Ce,lt,Et,kt,Oe,Le,Be,Pt,qe,Vt):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ce,lt,Et,Oe,Le,Pt,qe,Vt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ce,lt,Et,Vt.width,Vt.height,Pt,Vt.data):L.texSubImage2D(L.TEXTURE_2D,Ce,lt,Et,Oe,Le,Pt,qe,Vt);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qs),L.pixelStorei(L.UNPACK_SKIP_ROWS,qn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,na),Ce===0&&B.generateMipmaps&&L.generateMipmap(Tt),oe.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),oe.unbindTexture()},this.resetState=function(){D=0,F=0,O=null,oe.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const _h=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:yd,AddEquation:Ar,AddOperation:ov,AdditiveAnimationBlendMode:Rd,AdditiveBlending:Il,AgXToneMapping:ka,AlphaFormat:Ad,AlwaysCompare:xv,AlwaysDepth:Nl,AlwaysStencilFunc:Wf,AmbientLight:r_,AnimationAction:p_,AnimationClip:Xo,AnimationLoader:xS,AnimationMixer:qS,AnimationObjectGroup:WS,AnimationUtils:mS,ArcCurve:Uv,ArrayCamera:u_,ArrowHelper:vw,AttachedBindMode:Hf,Audio:f_,AudioAnalyser:NS,AudioContext:cp,AudioListener:PS,AudioLoader:CS,AxesHelper:_w,BackSide:pn,BasicDepthPacking:fv,BasicShadowMap:Hy,BatchedMesh:Pv,Bone:nh,BooleanKeyframeTrack:Gs,Box2:nw,Box3:qt,Box3Helper:mw,BoxGeometry:Vs,BoxHelper:pw,BufferAttribute:gt,BufferGeometry:nt,BufferGeometryLoader:c_,ByteType:Sd,Cache:Fi,Camera:Qu,CameraHelper:dw,CanvasTexture:BM,CapsuleGeometry:oh,CatmullRomCurve3:Ov,CineonToneMapping:xd,CircleGeometry:fc,ClampToEdgeWrapping:Cn,Clock:h_,Color:Se,ColorKeyframeTrack:tp,ColorManagement:ut,CompressedArrayTexture:OM,CompressedCubeTexture:FM,CompressedTexture:sh,CompressedTextureLoader:yS,ConeGeometry:pc,ConstantAlphaFactor:iv,ConstantColorFactor:tv,Controls:yw,CubeCamera:Av,CubeDepthTexture:Dv,CubeReflectionMapping:Hi,CubeRefractionMapping:Fr,CubeTexture:lc,CubeTextureLoader:bS,CubeUVReflectionMapping:Ko,CubicBezierCurve:Xd,CubicBezierCurve3:Fv,CubicInterpolant:Qv,CullFaceBack:kf,CullFaceFront:k0,CullFaceFrontBack:Gy,CullFaceNone:z0,Curve:Ci,CurvePath:zv,CustomBlending:V0,CustomToneMapping:bd,CylinderGeometry:dc,Cylindrical:tw,Data3DTexture:ju,DataArrayTexture:Ku,DataTexture:Mi,DataTextureLoader:MS,DataUtils:aM,DecrementStencilOp:rb,DecrementWrapStencilOp:ob,DefaultLoadingManager:Ws,DepthFormat:Xi,DepthStencilFormat:Rr,DepthTexture:Go,DetachedBindMode:av,DirectionalLight:op,DirectionalLightHelper:fw,DiscreteInterpolant:e_,DodecahedronGeometry:Ho,DoubleSide:En,DstAlphaFactor:K0,DstColorFactor:J0,DynamicCopyUsage:bb,DynamicDrawUsage:mb,DynamicReadUsage:_b,EdgesGeometry:Nv,EllipseCurve:ah,EqualCompare:gv,EqualDepth:Ol,EqualStencilFunc:ub,EquirectangularReflectionMapping:Va,EquirectangularRefractionMapping:Ga,Euler:ei,EventDispatcher:Zi,ExternalTexture:Hd,ExtrudeGeometry:ch,FileLoader:Ti,Float16BufferAttribute:pM,Float32BufferAttribute:Ne,FloatType:Rn,Fog:th,FogExp2:eh,FramebufferTexture:UM,FrontSide:Gi,Frustum:jo,FrustumArray:ih,GLBufferAttribute:jS,GLSL1:Sb,GLSL3:Xf,GreaterCompare:vv,GreaterDepth:Bl,GreaterEqualCompare:Zu,GreaterEqualDepth:Fl,GreaterEqualStencilFunc:pb,GreaterStencilFunc:fb,GridHelper:uw,Group:Oi,HalfFloatType:Wi,HemisphereLight:i_,HemisphereLightHelper:lw,IcosahedronGeometry:mc,ImageBitmapLoader:l_,ImageLoader:ja,ImageUtils:wv,IncrementStencilOp:ib,IncrementWrapStencilOp:sb,InstancedBufferAttribute:Is,InstancedBufferGeometry:a_,InstancedInterleavedBuffer:KS,InstancedMesh:kd,Int16BufferAttribute:fM,Int32BufferAttribute:dM,Int8BufferAttribute:lM,IntType:Vu,InterleavedBuffer:uc,InterleavedBufferAttribute:kr,Interpolant:ea,InterpolateDiscrete:Oo,InterpolateLinear:Fo,InterpolateSmooth:xl,InterpolationSamplingMode:Eb,InterpolationSamplingType:Tb,InvertStencilOp:ab,KeepStencilOp:us,KeyframeTrack:mi,LOD:Iv,LatheGeometry:lh,Layers:Ju,LessCompare:mv,LessDepth:Ul,LessEqualCompare:$u,LessEqualDepth:Cs,LessEqualStencilFunc:hb,LessStencilFunc:lb,Light:Xr,LightProbe:o_,Line:dr,Line3:m_,LineBasicMaterial:_n,LineCurve:qd,LineCurve3:Bv,LineDashedMaterial:jv,LineLoop:Vd,LineSegments:Ai,LinearFilter:Rt,LinearInterpolant:ep,LinearMipMapLinearFilter:Yy,LinearMipMapNearestFilter:qy,LinearMipmapLinearFilter:hi,LinearMipmapNearestFilter:wo,LinearSRGBColorSpace:gn,LinearToneMapping:vd,LinearTransfer:Wa,Loader:Ln,LoaderUtils:Or,LoadingManager:np,LoopOnce:cv,LoopPingPong:uv,LoopRepeat:lv,MOUSE:ky,Material:Jt,MaterialLoader:mh,MathUtils:Sv,Matrix2:dp,Matrix3:ot,Matrix4:ke,MaxEquation:X0,Mesh:zt,MeshBasicMaterial:Pn,MeshDepthMaterial:jd,MeshDistanceMaterial:Jd,MeshLambertMaterial:Zv,MeshMatcapMaterial:Kv,MeshNormalMaterial:$v,MeshPhongMaterial:qv,MeshPhysicalMaterial:pi,MeshStandardMaterial:_c,MeshToonMaterial:Yv,MinEquation:W0,MirroredRepeatWrapping:Do,MixOperation:sv,MultiplyBlending:Gf,MultiplyOperation:ac,NearestFilter:Bt,NearestMipMapLinearFilter:Xy,NearestMipMapNearestFilter:Wy,NearestMipmapLinearFilter:ps,NearestMipmapNearestFilter:ku,NeutralToneMapping:Md,NeverCompare:pv,NeverDepth:Dl,NeverStencilFunc:cb,NoBlending:zi,NoColorSpace:sr,NoNormalPacking:Jy,NoToneMapping:bi,NormalAnimationBlendMode:Yu,NormalBlending:Ms,NormalGAPacking:eb,NormalRGPacking:Qy,NotEqualCompare:_v,NotEqualDepth:zl,NotEqualStencilFunc:db,NumberKeyframeTrack:Ls,Object3D:pt,ObjectLoader:ES,ObjectSpaceNormalMap:dv,OctahedronGeometry:Jo,OneFactor:Y0,OneMinusConstantAlphaFactor:rv,OneMinusConstantColorFactor:nv,OneMinusDstAlphaFactor:j0,OneMinusDstColorFactor:Q0,OneMinusSrcAlphaFactor:Ll,OneMinusSrcColorFactor:Z0,OrthographicCamera:Xs,PCFShadowMap:Aa,PCFSoftShadowMap:Ca,PMREMGenerator:Jf,Path:Mu,PerspectiveCamera:jt,Plane:Tr,PlaneGeometry:Qo,PlaneHelper:gw,PointLight:sp,PointLightHelper:aw,Points:Gd,PointsMaterial:rh,PolarGridHelper:hw,PolyhedronGeometry:Wr,PositionalAudio:DS,PropertyBinding:mt,PropertyMixer:d_,QuadraticBezierCurve:Yd,QuadraticBezierCurve3:$d,Quaternion:mn,QuaternionKeyframeTrack:Ds,QuaternionLinearInterpolant:t_,R11_EAC_Format:Yl,RED_GREEN_RGTC2_Format:gu,RED_RGTC1_Format:pu,REVISION:Bu,RG11_EAC_Format:Zl,RGBADepthPacking:Zy,RGBAFormat:In,RGBAIntegerFormat:qu,RGBA_ASTC_10x10_Format:cu,RGBA_ASTC_10x5_Format:su,RGBA_ASTC_10x6_Format:ou,RGBA_ASTC_10x8_Format:au,RGBA_ASTC_12x10_Format:lu,RGBA_ASTC_12x12_Format:uu,RGBA_ASTC_4x4_Format:jl,RGBA_ASTC_5x4_Format:Jl,RGBA_ASTC_5x5_Format:Ql,RGBA_ASTC_6x5_Format:eu,RGBA_ASTC_6x6_Format:tu,RGBA_ASTC_8x5_Format:nu,RGBA_ASTC_8x6_Format:iu,RGBA_ASTC_8x8_Format:ru,RGBA_BPTC_Format:hu,RGBA_ETC2_EAC_Format:ql,RGBA_PVRTC_2BPPV1_Format:Hl,RGBA_PVRTC_4BPPV1_Format:Gl,RGBA_S3TC_DXT1_Format:Ia,RGBA_S3TC_DXT3_Format:Pa,RGBA_S3TC_DXT5_Format:La,RGBDepthPacking:Ky,RGBFormat:Cd,RGBIntegerFormat:$y,RGB_BPTC_SIGNED_Format:fu,RGB_BPTC_UNSIGNED_Format:du,RGB_ETC1_Format:Wl,RGB_ETC2_Format:Xl,RGB_PVRTC_2BPPV1_Format:Vl,RGB_PVRTC_4BPPV1_Format:kl,RGB_S3TC_DXT1_Format:Ra,RGDepthPacking:jy,RGFormat:Rs,RGIntegerFormat:Xu,RawShaderMaterial:Kd,Ray:Hr,Raycaster:fp,RectAreaLight:s_,RedFormat:Wu,RedIntegerFormat:cc,ReinhardToneMapping:_d,RenderTarget:Ld,RenderTarget3D:YS,RepeatWrapping:Br,ReplaceStencilOp:nb,ReverseSubtractEquation:H0,RingGeometry:uh,SIGNED_R11_EAC_Format:$l,SIGNED_RED_GREEN_RGTC2_Format:vu,SIGNED_RED_RGTC1_Format:mu,SIGNED_RG11_EAC_Format:Kl,SRGBColorSpace:Kt,SRGBTransfer:St,Scene:Fd,ShaderChunk:Ye,ShaderLib:ci,ShaderMaterial:di,ShadowMaterial:Xv,Shape:ws,ShapeGeometry:hh,ShapePath:xw,ShapeUtils:yi,ShortType:wd,Skeleton:hc,SkeletonHelper:ow,SkinnedMesh:zd,Source:Ir,Sphere:Yt,SphereGeometry:gc,Spherical:ew,SphericalHarmonics3:ap,SplineCurve:Zd,SpotLight:rp,SpotLightHelper:sw,Sprite:Rv,SpriteMaterial:Bd,SrcAlphaFactor:Pl,SrcAlphaSaturateFactor:ev,SrcColorFactor:$0,StaticCopyUsage:yb,StaticDrawUsage:Xa,StaticReadUsage:vb,StereoCamera:RS,StreamCopyUsage:Mb,StreamDrawUsage:gb,StreamReadUsage:xb,StringKeyframeTrack:Hs,SubtractEquation:G0,SubtractiveBlending:Vf,TOUCH:Vy,TangentSpaceNormalMap:Gr,TetrahedronGeometry:vc,Texture:Ut,TextureLoader:n_,TextureUtils:Tw,Timer:JS,TimestampQuery:wb,TorusGeometry:fh,TorusKnotGeometry:dh,Triangle:zn,TriangleFanDrawMode:_u,TriangleStripDrawMode:Id,TrianglesDrawMode:hv,TubeGeometry:ph,UVMapping:zu,Uint16BufferAttribute:Dd,Uint32BufferAttribute:Nd,Uint8BufferAttribute:uM,Uint8ClampedBufferAttribute:hM,Uniform:hp,UniformsGroup:ZS,UniformsLib:be,UniformsUtils:Ud,UnsignedByteType:Bn,UnsignedInt101111Type:Ed,UnsignedInt248Type:Uo,UnsignedInt5999Type:Td,UnsignedIntType:fi,UnsignedShort4444Type:Gu,UnsignedShort5551Type:Hu,UnsignedShortType:No,VSMShadowMap:bo,Vector2:ie,Vector3:P,Vector4:bt,VectorKeyframeTrack:Ns,VideoFrameTexture:NM,VideoTexture:Lv,WebGL3DRenderTarget:jb,WebGLArrayRenderTarget:Kb,WebGLCoordinateSystem:Kn,WebGLCubeRenderTarget:Od,WebGLRenderTarget:Qn,WebGLRenderer:S_,WebGLUtils:M_,WebGPUCoordinateSystem:Bo,WebXRController:yl,WireframeGeometry:Wv,WrapAroundEnding:Ha,ZeroCurvatureEnding:ms,ZeroFactor:q0,ZeroSlopeEnding:gs,ZeroStencilOp:tb,createCanvasElement:Mv,error:Ve,getConsoleFunction:Rb,log:Ya,setConsoleFunction:Cb,warn:we,warnOnce:zo},Symbol.toStringTag,{value:"Module"}));function Su(r){let e;const t=t0(i=>{let s=!1;const o=r.subscribe(a=>{e=a,s&&i()});return s=!0,o});function n(){return Io()?(t(),e):F0(r)}return"set"in r?{get current(){return n()},set current(i){r.set(i)}}:{get current(){return n()}}}const _g=Symbol(),xC=r=>typeof r?.subscribe=="function",w_=(r,e,t)=>{const n=r().map(o=>xC(o)?Su(o):_g),i=Zt(()=>r().map((o,a)=>n[a]===_g?o:n[a].current)),s=()=>{w(i);let o;return st(()=>{o=e(w(i))}),o};t?rn(s):fr(s)},yC=(r,e)=>w_(r,e,!1),bC=(r,e)=>w_(r,e,!0),MC=Object.assign(yC,{pre:bC}),Tn=(r,e)=>r?.[`is${e}`]===!0,Mf=r=>{const e=Lo(void 0),t=Lo(void 0);return r.then(n=>{e.set(n)}).catch(n=>{console.error("Error in asyncWritable:",n.message),t.set(n)}),Object.assign(Object.assign(r,e),{error:t,promise:r})},SC=typeof window<"u",xi=(r,e)=>{const t=md(r,s=>s);let n;const i=t.subscribe(async s=>{n&&n();const o=await e(s);o&&(n=o)});ks(()=>{i(),n&&n()})},Ht=r=>{const e=Lo(r),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:r};return t},wC=r=>({subscribe:r.subscribe,get current(){return r.current}}),T_=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},TC=r=>{const{dom:e,canvas:t}=r,n=Ht({width:e.offsetWidth,height:e.offsetHeight});$i(()=>{const s=new ResizeObserver(()=>{const{offsetWidth:o,offsetHeight:a}=e;(n.current.width!==o||n.current.height!==a)&&n.set({width:o,height:a})});return s.observe(e),()=>{s.disconnect()}});const i={dom:e,canvas:t,size:wC(n)};return Gn("threlte-dom-context",i),i},xh=()=>{const r=vn("threlte-dom-context");if(!r)throw new Error("useDOM can only be used in a child component to <Canvas>.");return r};function EC(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class Er{allVertices={};isolatedVertices={};connectedVertices={};sortedConnectedValues=[];needsSort=!1;emitter=EC();emit=this.emitter.emit.bind(this.emitter);on=this.emitter.on.bind(this.emitter);off=this.emitter.off.bind(this.emitter);get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const s=i.next.size>0||i.previous.size>0;if(!n?.after&&!n?.before&&!s){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n?.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n?.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(s=>{const o=this.connectedVertices[s];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),i.previous.forEach(s=>{const o=this.connectedVertices[s];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){return this.allVertices[e]?.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((o,a)=>{o===0&&t.push(a)});t.length>0;){const o=t.shift();n.push(o);const a=i.find(c=>c===o);a&&this.connectedVertices[a]?.next.forEach(c=>{const l=(e.get(c)||0)-1;e.set(c,l),l===0&&t.push(c)})}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class AC{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class CC extends Er{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const i=new AC(this,e,t);return this.add(e,i,n),i}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(i=>{const s=performance.now();i.run(n??e);const o=performance.now()-s;t[i.key]=o})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class RC extends Er{lastTime=performance.now();clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new CC(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},i=performance.now();return this.forEachNode(s=>{const o=performance.now(),a=s.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),c=performance.now()-o;n[s.key.toString()]={duration:c,tasks:a}}),{total:performance.now()-i,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const IC=r=>{const e=new RC,t=e.createStage(Symbol("threlte-main-stage")),n={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{n.shouldAdvance=!0},autoRender:Ht(r.autoRender??!0),renderMode:Ht(r.renderMode??"on-demand"),invalidate(){n.frameInvalidated=!0},mainStage:t,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(n.frameInvalidated||n.autoInvalidations.size>0)||n.renderMode.current==="manual"&&n.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(i,s){n.shouldRender()&&s()}}),resetFrameInvalidation(){n.frameInvalidated=!1,n.shouldAdvance=!1}};return fr(()=>{n.autoRender.set(r.autoRender??!0)}),fr(()=>{n.renderMode.set(r.renderMode??"on-demand")}),ks(()=>{n.scheduler.dispose()}),Gn("threlte-scheduler-context",n),n},yh=()=>{const r=vn("threlte-scheduler-context");if(!r)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return r},PC=()=>{const{size:r}=xh(),{invalidate:e}=yh(),t=new jt(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const n=Ht(t);xi(r,s=>{if(n.current===t){const o=n.current;o.aspect=s.width/s.height,o.updateProjectionMatrix(),e()}}),xi(n,s=>{s===void 0&&n.set(t)});const i={camera:n};return Gn("threlte-camera-context",i),i},E_=()=>{const r=vn("threlte-camera-context");if(!r)throw new Error("useCamera can only be used in a child component to <Canvas>.");return r},LC=()=>{const r={removeObjectFromDisposal:e=>{r.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=r.disposableObjects.get(e);t?r.disposableObjects.set(e,t+1):r.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=r.disposableObjects.get(e);t&&t>0&&(r.disposableObjects.set(e,t-1),t-1<=0&&(r.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await ty(),!(!r.shouldDispose&&!e)&&(r.disposableObjects.forEach((t,n)=>{(t===0||e)&&(n?.dispose?.(),r.disposableObjects.delete(n))}),r.shouldDispose=!1)}};return ks(()=>{r.dispose(!0)}),Gn("threlte-disposal-context",r),r},A_=()=>{const r=vn("threlte-disposal-context");if(!r)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return r},C_=Symbol("threlte-parent-context"),R_=r=>{const e=Ht(r);return Gn(C_,e),e},DC=()=>vn(C_),wu=Symbol("threlte-parent-object3d-context"),NC=r=>{const e=Uu(r);return Gn(wu,e),e},UC=r=>{const e=vn(wu),t=Lo(r),n=md([t,e],([i,s])=>i??s);return Gn(wu,n),t},OC=()=>vn(wu);function pr(r,e,t){if(!SC)return{task:void 0,start:()=>{},stop:()=>{},started:Uu(!1)};let n,i,s;Er.isKey(r)?(n=r,i=e,s=t):(n=Symbol("useTask"),i=r,s=e);const o=yh();let a=o.mainStage;if(s){if(s.stage)if(Er.isValue(s.stage))a=s.stage;else{const f=o.scheduler.getStage(s.stage);if(!f)throw new Error(`No stage found with key ${s.stage.toString()}`);a=f}else if(s.after)if(Array.isArray(s.after))for(let f=0;f<s.after.length;f++){const d=s.after[f];if(Er.isValue(d)){a=d.stage;break}}else Er.isValue(s.after)&&(a=s.after.stage);else if(s.before)if(Array.isArray(s.before))for(let f=0;f<s.before.length;f++){const d=s.before[f];if(Er.isValue(d)){a=d.stage;break}}else Er.isValue(s.before)&&(a=s.before.stage)}const c=Lo(!1),l=a.createTask(n,i,s),u=()=>{c.set(!0),(s?.autoInvalidate??!0)&&o.autoInvalidations.add(i),l.start()},h=()=>{c.set(!1),(s?.autoInvalidate??!0)&&o.autoInvalidations.delete(i),l.stop()};return s?.autoStart??!0?u():h(),ks(()=>{h(),a.removeTask(n)}),{task:l,start:u,stop:h,started:{subscribe:c.subscribe}}}const FC=r=>{const e={scene:new Fd};return Gn("threlte-scene-context",e),e},I_=()=>{const r=vn("threlte-scene-context");if(!r)throw new Error("useScene can only be used in a child component to <Canvas>.");return r},BC=r=>{const{dispose:e}=A_(),{camera:t}=E_(),{scene:n}=I_(),{invalidate:i,renderStage:s,autoRender:o,scheduler:a,resetFrameInvalidation:c}=yh(),{size:l,canvas:u}=xh(),h=r.createRenderer?r.createRenderer(u):new S_({canvas:u,powerPreference:"high-performance",antialias:!0,alpha:!0}),f=s.createTask(Symbol("threlte-auto-render-task"),()=>{h.render(n,t.current)}),d={renderer:h,colorManagementEnabled:Ht(r.colorManagementEnabled??!0),colorSpace:Ht(r.colorSpace??"srgb"),dpr:Ht(r.dpr??window.devicePixelRatio),shadows:Ht(r.shadows??Ca),toneMapping:Ht(r.toneMapping??ka),autoRenderTask:f};Gn("threlte-renderer-context",d),xi([d.colorManagementEnabled],([g])=>{ut.enabled=g}),xi([d.colorSpace],([g])=>{"outputColorSpace"in h&&(h.outputColorSpace=g)}),xi([d.dpr],([g])=>{"setPixelRatio"in h&&h.setPixelRatio(g)});const{start:m,stop:v}=pr(()=>{!("xr"in h)||h.xr?.isPresenting||(h.setSize(l.current.width,l.current.height),i(),v())},{before:f,autoStart:!1,autoInvalidate:!1});return xi([l],()=>{m()}),xi([d.shadows],([g])=>{"shadowMap"in h&&(h.shadowMap.enabled=!!g,g&&g!==!0?h.shadowMap.type=g:g===!0&&(h.shadowMap.type=Ca))}),xi([d.toneMapping],([g])=>{"toneMapping"in h&&(h.toneMapping=g)}),xi([o],([g])=>(g?d.autoRenderTask.start():d.autoRenderTask.stop(),()=>{d.autoRenderTask.stop()})),"setAnimationLoop"in d.renderer&&d.renderer.setAnimationLoop(p=>{e(),a.run(p),c()}),ks(()=>{if("dispose"in d.renderer){const g=d.renderer.dispose;g()}}),rn(()=>{d.colorManagementEnabled.set(r.colorManagementEnabled??!0)}),rn(()=>{d.colorSpace.set(r.colorSpace??"srgb")}),rn(()=>{d.toneMapping.set(r.toneMapping??ka)}),rn(()=>{d.shadows.set(r.shadows??Ca)}),rn(()=>{d.dpr.set(r.dpr??window.devicePixelRatio)}),d},zC=()=>{const r=vn("threlte-renderer-context");if(!r)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return r},kC=()=>{const r=Ht({});return Gn("threlte-user-context",r),r},VC=r=>{const{scene:e}=FC();return{scene:e,...TC(r),...By(),...R_(e),...NC(e),...LC(),...IC(r),...PC(),...BC(r),...kC()}};function GC(r,e){Hn(e,!0),VC(Ou(e,["$$slots","$$events","$$legacy","children"]));var n=wn(),i=yt(n);za(i,()=>e.children),He(r,n),Wn()}var HC=ht('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function WC(r,e){let t=Ou(e,["$$slots","$$events","$$legacy","children"]),n=si(void 0),i=si(void 0);var s=HC(),o=At(s),a=At(o);{var c=l=>{GC(l,B0({get dom(){return w(i)},get canvas(){return w(n)}},()=>t,{children:(u,h)=>{var f=wn(),d=yt(f);za(d,()=>e.children??on),He(u,f)},$$slots:{default:!0}}))};Ct(a,l=>{w(n)&&w(i)&&l(c)})}bs(o,l=>de(n,l),()=>w(n)),bs(s,l=>de(i,l),()=>w(i)),He(r,s)}const xc=()=>{const r=yh(),e=zC(),t=E_(),n=I_(),i=xh();return{advance:r.advance,autoRender:r.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:r.invalidate,mainStage:r.mainStage,renderer:e.renderer,renderMode:r.renderMode,renderStage:r.renderStage,scheduler:r.scheduler,shadows:e.shadows,shouldRender:r.shouldRender,dom:i.dom,canvas:i.canvas,size:i.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(o){n.scene=o}}},XC=r=>typeof r=="object"&&r!==null,qC=(r,e)=>{const{invalidate:t}=xc(),n=Zt(r),i=Zt(e),s=Su(DC()),o=Su(OC()),a=R_(),c=UC();rn(()=>{a.set(w(n)),Tn(w(n),"Object3D")&&c.set(w(n)),t()}),rn(()=>{t();const l=w(n);if(w(i)===void 0&&Tn(l,"Object3D"))return o.current?.add(l),()=>{t(),o.current?.remove(l)};if(w(i)===void 0&&XC(s.current)){const u=s.current;if(Tn(l,"Material")){const h=u.material;return u.material=l,()=>{t(),u.material=h}}else if(Tn(l,"BufferGeometry")){const h=u.geometry;return u.geometry=l,()=>{t(),u.geometry=h}}}if(w(i)===!1)return()=>{t()};if(typeof w(i)=="function"){const u=w(i)({ref:l,parent:s.current,parentObject3D:o.current});return()=>{t(),u?.()}}if(typeof w(i)=="string"){const{target:u,key:h}=T_(s.current,w(i));if(h in u){const f=u[h];return u[h]=l,()=>{t(),u[h]=f}}else return u[h]=l,()=>{t(),delete u[h]}}if(Tn(w(i),"Object3D")&&Tn(l,"Object3D"))return w(i).add(l),()=>{t(),w(i).remove(l)}})},Sf=new Set,YC=(r,e,t)=>{const{invalidate:n,size:i,camera:s}=xc(),o=Zt(r),a=Su(i);rn(()=>{if(!t())return;const c=w(o);return Sf.add(c),s.set(c),n(),()=>{Sf.delete(c),Sf.size===0&&(s.set(void 0),n())}}),rn(()=>{if(e())return;const{width:c,height:l}=a.current;Tn(w(o),"PerspectiveCamera")?w(o).aspect=c/l:Tn(w(o),"OrthographicCamera")&&(w(o).left=c/-2,w(o).right=c/2,w(o).top=l/2,w(o).bottom=l/-2),w(o).updateProjectionMatrix(),w(o).updateMatrixWorld(),n()})},td=Symbol("threlte-disposable-object-context"),$C=r=>typeof r?.dispose=="function",ZC=r=>{const e=vn(td),t=Zt(()=>r()??e?.()??!0);Gn(td,()=>w(t))},KC=r=>{const e=Zt(r),{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:i}=A_(),s=vn(td),o=Zt(()=>s?.()??!0);fr(()=>{if(w(o))return t(w(e)),()=>n(w(e));i(w(e))})},jC=r=>r!==null&&typeof r=="object"&&"addEventListener"in r&&"removeEventListener"in r,JC=(r,e,t)=>{const n=Zt(r);for(const i of e){const s=Zt(()=>t[i]);i.startsWith("on")&&rn(()=>{if(typeof w(s)!="function"||!jC(w(n)))return;const o=i.slice(2);return w(n).addEventListener(o,w(s)),()=>w(n).removeEventListener(o,w(s))})}};let nd;const QC=r=>{nd=r},eR=()=>{const r=nd;return nd=void 0,r},id="threlte-plugin-context",tR=r=>{const e=vn(id);if(!e)return;const t=[],n=Object.values(e);if(n.length>0){const i=r();for(let s=0;s<n.length;s++){const o=n[s],a=o(i);a&&a.pluginProps&&t.push(...a.pluginProps)}}return{pluginsProps:t}},nR=new Set(["$$scope","$$slots","type","args","attach","instance"]),iR=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),rR=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,xg=(r,e,t)=>!Array.isArray(t)&&typeof t=="number"&&typeof r[e]=="object"&&r[e]!==null&&typeof r[e]?.setScalar=="function"&&!r[e]?.isColor?(n,i,s)=>{n[i].setScalar(s)}:typeof r[e]?.set=="function"&&typeof r[e]=="object"&&r[e]!==null?Array.isArray(t)?(n,i,s)=>{n[i].set(...s)}:(n,i,s)=>{n[i].set(s)}:(n,i,s)=>{n[i]=s},sR=()=>{const{invalidate:r}=xc(),e=new Map,t=new Map,n=(s,o,a,c)=>{if(rR(a)){const h=e.get(o);if(h&&h.instance===s&&h.value===a)return;e.set(o,{instance:s,value:a})}const{key:l,target:u}=T_(s,o);if(a!=null){const h=t.get(o);if(h)h(u,l,a);else{const f=xg(u,l,a);t.set(o,f),f(u,l,a)}}else xg(u,l,a)(u,l,a);c||iR.has(l)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProp:(s,o,a,c,l)=>{!nR.has(o)&&!c?.includes(o)&&n(s,o,a,l),r()}}},oR=r=>typeof r=="function"&&Function.prototype.toString.call(r).startsWith("class "),aR=(r,e)=>oR(r)?Array.isArray(e)?new r(...e):new r:r;function wf(r,e){Hn(e,!0);let t=et(e,"is",19,eR),n=et(e,"manual",3,!1),i=et(e,"makeDefault",3,!1),s=et(e,"ref",15),o=Ou(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);const a=Zt(()=>aR(t(),e.args));rn(()=>{s()!==w(a)&&s(w(a))});const c=tR(()=>({get ref(){return w(a)},get args(){return e.args},get attach(){return e.attach},get manual(){return n()},get makeDefault(){return i()},get dispose(){return e.dispose},get props(){return o}})),l=Object.keys(o),{updateProp:u}=sR();l.forEach(d=>{const m=Zt(()=>o[d]);rn(()=>{u(w(a),d,w(m),c?.pluginsProps,n())})}),qC(()=>w(a),()=>e.attach),rn(()=>{(Tn(w(a),"PerspectiveCamera")||Tn(w(a),"OrthographicCamera"))&&YC(()=>w(a),()=>n(),()=>i())}),ZC(()=>e.dispose),rn(()=>{$C(w(a))&&KC(()=>w(a))}),JC(()=>w(a),l,o),fr(()=>{w(a);let d;return st(()=>{d=e.oncreate?.(w(a))}),d});var h=wn(),f=yt(h);za(f,()=>e.children??on,()=>({ref:w(a)})),He(r,h),Wn()}const cR={},Ke=new Proxy(wf,{get(r,e){if(typeof e!="string")return wf;const t=cR[e]||_h[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return QC(t),wf}});function lR(r,e){e&&Gn(id,{...vn(id),[r]:e})}function uR(r,e){const{remember:t,clear:n}=zy();let i;const s=()=>{const c=new r(...e?.args??[]);return e?.extend?.(c),c};return{load:(c,l)=>{const u=async h=>{if(i||(i=s()),"loadAsync"in i){const f=await i.loadAsync(h,l?.onProgress);return l?.transform?.(f)??f}else return new Promise((f,d)=>{i.load(h,m=>f(l?.transform?.(m)??m),m=>l?.onProgress?.(m),d)})};if(Array.isArray(c)){const h=c.map(d=>t(()=>u(d),[r,d]));return Mf(Promise.all(h))}else if(typeof c=="string"){const h=t(()=>u(c),[r,c]);return Mf(h)}else{const h=Object.values(c).map(d=>t(()=>u(d),[r,d]));return Mf(Promise.all(h).then(d=>Object.fromEntries(Object.entries(c).map(([m],v)=>[m,d[v]]))))}},clear:c=>{Array.isArray(c)?c.forEach(l=>{n([r,l])}):typeof c=="string"?n([r,c]):Object.entries(c).forEach(([l,u])=>{n([r,l,u])})},loader:i}}function yg(r,e){if(e===hv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===_u||e===Id){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===_u)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class P_ extends Ln{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mR(t)}),this.register(function(t){return new gR(t)}),this.register(function(t){return new TR(t)}),this.register(function(t){return new ER(t)}),this.register(function(t){return new AR(t)}),this.register(function(t){return new _R(t)}),this.register(function(t){return new xR(t)}),this.register(function(t){return new yR(t)}),this.register(function(t){return new bR(t)}),this.register(function(t){return new pR(t)}),this.register(function(t){return new MR(t)}),this.register(function(t){return new vR(t)}),this.register(function(t){return new wR(t)}),this.register(function(t){return new SR(t)}),this.register(function(t){return new fR(t)}),this.register(function(t){return new CR(t)}),this.register(function(t){return new RR(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Or.extractUrlBase(e);o=Or.resolveURL(l,this.path)}else o=Or.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ti(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===L_){try{o[ft.KHR_BINARY_GLTF]=new IR(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new HR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:o[h]=new dR;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[h]=new PR(s,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[h]=new LR;break;case ft.KHR_MESH_QUANTIZATION:o[h]=new DR;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function hR(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fR{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Se(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],gn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new op(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new sp(u),l.distance=h;break;case"spot":l=new rp(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class dR{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Pn}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Kt))}return Promise.all(i)}}class pR{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class mR{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(s)}}class gR{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class vR{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class _R{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],gn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Kt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class xR{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class yR{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(a[0],a[1],a[2],gn),Promise.all(s)}}class bR{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class MR{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(a[0],a[1],a[2],gn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Kt)),Promise.all(s)}}class SR{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class wR{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class TR{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class ER{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class AR{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class CR{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class RR{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==ri.TRIANGLES&&l.mode!==ri.TRIANGLE_STRIP&&l.mode!==ri.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const m of h){const v=new ke,g=new P,p=new mn,x=new P(1,1,1),_=new kd(m.geometry,m.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),_.setMatrixAt(y,v.compose(g,p,x));for(const y in c)if(y==="_COLOR_0"){const S=c[y];_.instanceColor=new Is(S.array,S.itemSize,S.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,c[y]);pt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),d.push(_)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const L_="glTF",va=12,bg={JSON:1313821514,BIN:5130562};class IR{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,va),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==L_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-va,s=new DataView(e,va);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===bg.JSON){const l=new Uint8Array(e,va+o,a);this.content=n.decode(l)}else if(c===bg.BIN){const l=va+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class PR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=rd[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=rd[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Eo[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const m in d.attributes){const v=d.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}h(d)},a,l,gn,f)})})}}class LR{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class DR{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}}class D_ extends ea{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*l,v=m-l,g=-2*d+3*f,p=d-f,x=1-g,_=p-f+h;for(let y=0;y!==a;y++){const S=o[v+y+a],E=o[v+y+c]*u,A=o[m+y+a],I=o[m+y]*u;s[y]=x*S+_*E+g*A+p*I}return s}}const NR=new mn;class UR extends D_{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return NR.fromArray(s).normalize().toArray(s),s}}const ri={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mg={9728:Bt,9729:Rt,9984:ku,9985:wo,9986:ps,9987:hi},Sg={33071:Cn,33648:Do,10497:Br},Tf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},OR={CUBICSPLINE:void 0,LINEAR:Fo,STEP:Oo},Ef={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function FR(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new _c({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),r.DefaultMaterial}function cs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Di(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function BR(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function zR(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kR(r){let e;const t=r.extensions&&r.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Af(t.attributes):e=r.indices+":"+Af(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Af(r.targets[n]);return e}function Af(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function sd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function VR(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const GR=new ke;class HR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new n_(this.options.manager):this.textureLoader=new l_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ti(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return cs(s,a,i),Di(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Or.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Tf[i.type],a=Eo[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new gt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Tf[i.type],l=Eo[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,g;if(d&&d!==h){const p=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(x);_||(v=new l(a,p*d,i.count*d/u),_=new uc(v,d/u),t.cache.add(x,_)),g=new kr(_,c,f%d/u,m)}else a===null?v=new l(i.count*c):v=new l(a,f,i.count*c),g=new gt(v,c,m);if(i.sparse!==void 0){const p=Tf.SCALAR,x=Eo[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new x(o[1],_,i.sparse.count*p),E=new l(o[2],y,i.sparse.count*c);a!==null&&(g=new gt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,I=S.length;A<I;A++){const b=S[A];if(g.setX(b,E[A*c]),c>=2&&g.setY(b,E[A*c+1]),c>=3&&g.setZ(b,E[A*c+2]),c>=4&&g.setW(b,E[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Mg[f.magFilter]||Rt,u.minFilter=Mg[f.minFilter]||hi,u.wrapS=Sg[f.wrapS]||Br,u.wrapT=Sg[f.wrapT]||Br,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Bt&&u.minFilter!==Rt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(v){const g=new Ut(v);g.needsUpdate=!0,f(g)}),t.load(Or.resolveURL(h,s.path),m,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Di(h,o),h.userData.mimeType=o.mimeType||VR(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ft.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new rh,Jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new _n,Jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return _c}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){const h=i[ft.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],gn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Kt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=En);const u=s.alphaMode||Ef.OPAQUE;if(u===Ef.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ef.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Pn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ie(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Pn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Pn){const h=s.emissiveFactor;a.emissive=new Se().setRGB(h[0],h[1],h[2],gn)}return s.emissiveTexture!==void 0&&o!==Pn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Kt)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Di(h,s),t.associations.set(h,{materials:e}),s.extensions&&cs(i,h,s),h})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return wg(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=kR(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=wg(new nt,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?FR(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const v=u[d],g=o[d];let p;const x=l[d];if(g.mode===ri.TRIANGLES||g.mode===ri.TRIANGLE_STRIP||g.mode===ri.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new zd(v,x):new zt(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===ri.TRIANGLE_STRIP?p.geometry=yg(p.geometry,Id):g.mode===ri.TRIANGLE_FAN&&(p.geometry=yg(p.geometry,_u));else if(g.mode===ri.LINES)p=new Ai(v,x);else if(g.mode===ri.LINE_STRIP)p=new dr(v,x);else if(g.mode===ri.LINE_LOOP)p=new Vd(v,x);else if(g.mode===ri.POINTS)p=new Gd(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&zR(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Di(p,s),g.extensions&&cs(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&cs(i,h[0],s),h[0];const f=new Oi;s.extensions&&cs(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Sv.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Xs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Di(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new ke;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new hc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],m=i.samplers[d.sampler],v=d.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],m=h[2],v=h[3],g=h[4],p=[];for(let _=0,y=f.length;_<y;_++){const S=f[_],E=d[_],A=m[_],I=v[_],b=g[_];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const T=n._createAnimationTracks(S,E,A,I,b);if(T)for(let D=0;D<T.length;D++)p.push(T[D])}const x=new Xo(s,void 0,p);return Di(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,GR)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new nh:l.length>1?u=new Oi:l.length===1?u=l[0]:u=new pt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Di(u,s),s.extensions&&cs(n,u,s),s.matrix!==void 0){const h=new ke;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Oi;n.name&&(s.name=i.createUniqueName(n.name)),Di(s,n),n.extensions&&cs(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Jt||f instanceof Ut)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];wr[s.path]===wr.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(wr[s.path]){case wr.weights:l=Ls;break;case wr.rotation:l=Ds;break;case wr.translation:case wr.scale:l=Ns;break;default:n.itemSize===1?l=Ls:l=Ns;break}const u=i.interpolation!==void 0?OR[i.interpolation]:Fo,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const m=new l(c[f]+"."+wr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=sd(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ds?UR:D_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function WR(r,e,t){const n=e.attributes,i=new qt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const u=sd(Eo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,c=new P;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const v=sd(Eo[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Yt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function wg(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=rd[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ut.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Di(r,e),WR(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?BR(r,e.targets,t):r})}const XR=r=>{const e={nodes:{},materials:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e};function N_(r,e){const t=typeof r=="string"?e:r,n=uR(P_,{extend(o){t?.dracoLoader&&o.setDRACOLoader(t.dracoLoader),t?.meshoptDecoder&&o.setMeshoptDecoder(t.meshoptDecoder),t?.ktx2Loader&&o.setKTX2Loader(t.ktx2Loader)}}),i=o=>n.load(o,{transform(a){return{...a,...XR(a.scene)}}}),s=typeof r=="string"?r:void 0;return s?i(s):{load:i}}const ls=r=>({subscribe:r.subscribe,get current(){return r.current}});let Oa=0;const pp=Ht(!1),bh=Ht(!1),mp=Ht(void 0),gp=Ht(0),vp=Ht(0),U_=Ht([]),_p=Ht(0),{onStart:qR,onLoad:YR,onError:$R}=Ws;Ws.onStart=(r,e,t)=>{qR?.(r,e,t),bh.set(!0),mp.set(r),gp.set(e),vp.set(t);const n=(e-Oa)/(t-Oa);_p.set(n),n===1&&pp.set(!0)};Ws.onLoad=()=>{YR?.(),bh.set(!1)};Ws.onError=r=>{$R?.(r),U_.update(e=>[...e,r])};Ws.onProgress=(r,e,t)=>{e===t&&(Oa=t),bh.set(!0),mp.set(r),gp.set(e),vp.set(t);const n=(e-Oa)/(t-Oa)||1;_p.set(n),n===1&&pp.set(!0)};ls(bh),ls(mp),ls(gp),ls(vp),ls(U_),ls(_p),ls(pp);new P;new P;new P;new Yt;new ke;new Hr;new P;const ZR=Symbol("THRELTE_SUSPENSE_CONTEXT_IDENTIFIER"),KR=()=>{const r=vn(ZR),e=new Set,t=i=>(r&&(r.suspend(i),e.add(i)),i),n={suspended:md(r?.suspended??Uu(!1),i=>i)};return ks(()=>{if(r){for(const i of e)r.onComponentDestroy(i);e.clear()}}),Object.assign(t,n)};new P;new ke;new P;new P;new pt;const jR=`
#include <common>
#include <logdepthbuf_pars_vertex>
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    #include <logdepthbuf_vertex>
}`,Tg=`
#include <logdepthbuf_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4(0.0,0.0,0.0,0.0);
}`,JR=`
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
}`,Us=new P,Mh=new P,QR=new P,eI=new ie,tI=(r,e,t)=>{const n=Us.setFromMatrixPosition(r.matrixWorld);n.project(e);const i=t.width/2,s=t.height/2;return[n.x*i+i,-(n.y*s)+s]},nI=(r,e)=>{const t=Us.setFromMatrixPosition(r.matrixWorld),n=Mh.setFromMatrixPosition(e.matrixWorld),i=t.sub(n),s=e.getWorldDirection(QR);return i.angleTo(s)>Math.PI/2},iI=(r,e,t,n)=>{const i=Us.setFromMatrixPosition(r.matrixWorld),s=Mh.copy(Us);s.project(e),t.setFromCamera(eI.set(s.x,s.y),e);const o=t.intersectObjects(n,!0);if(o.length){const a=o[0].distance;return i.distanceTo(t.ray.origin)<a}return!0},rI=(r,e)=>{if(Tn(e,"OrthographicCamera"))return e.zoom;if(Tn(e,"PerspectiveCamera")){const t=Us.setFromMatrixPosition(r.matrixWorld),n=Mh.setFromMatrixPosition(e.matrixWorld),i=e.fov*Math.PI/180,s=t.distanceTo(n);return 1/(2*Math.tan(i/2)*s)}else return 1},sI=(r,e,t)=>{const n=Us.setFromMatrixPosition(r.matrixWorld),i=Mh.setFromMatrixPosition(e.matrixWorld),s=n.distanceTo(i),o=(t[1]-t[0])/(e.far-e.near),a=t[1]-o*e.far;return Math.round(o*s+a)},nn=r=>Math.abs(r)<1e-10?0:r,O_=(r,e,t="")=>{const{elements:n}=r;return`${t}matrix3d(
    ${nn(e[0]*n[0])},${nn(e[1]*n[1])},${nn(e[2]*n[2])},${nn(e[3]*n[3])},
    ${nn(e[4]*n[4])},${nn(e[5]*n[5])},${nn(e[6]*n[6])},${nn(e[7]*n[7])},
    ${nn(e[8]*n[8])},${nn(e[9]*n[9])},${nn(e[10]*n[10])},${nn(e[11]*n[11])},
    ${nn(e[12]*n[12])},${nn(e[13]*n[13])},${nn(e[14]*n[14])},${nn(e[15]*n[15])}
  )`},oI=(r=>e=>O_(e,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),aI=(r=>(e,t)=>O_(e,r(t),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]),cI=(r,e,t)=>{if(Tn(r,"OrthographicCamera"))return 1;if(Tn(r,"PerspectiveCamera")){const{width:n,height:i}=t,s=r.getWorldPosition(Us).distanceTo(e),o=r.fov*Math.PI/180,c=2*Math.tan(o/2)*s*(n/i);return n/c}throw new Error("getViewportFactor needs a Perspective or Orthographic Camera")};let gl=!1,Tu=0,Eg="",Ag="",Cg="";const Rg=(r,e)=>{Tu===1&&!gl?(Eg=r.style.zIndex,Ag=r.style.position,Cg=r.style.pointerEvents,r.style.zIndex=`${Math.floor(e/2)}`,r.style.position="absolute",r.style.pointerEvents="none",gl=!0):Tu===0&&gl&&(r.style.zIndex=Eg,r.style.position=Ag,r.style.pointerEvents=Cg,gl=!1)};var lI=ht("<!> <!>",1),uI=ht("<div><div><div><!></div></div></div>"),hI=ht("<div><!></div>"),fI=ht("<!> <!>",1);function Cf(r,e){Hn(e,!0);const t=()=>Ea(b,"$size",s),n=()=>Ea(A,"$camera",s),i=()=>Ea(le,"$suspended",s),[s,o]=gd();let a=et(e,"autoRender",3,!0),c=et(e,"eps",3,.001),l=et(e,"center",3,!1),u=et(e,"fullscreen",3,!1),h=et(e,"sprite",3,!1),f=et(e,"transform",3,!1),d=et(e,"occlude",3,!1),m=et(e,"castShadow",3,!1),v=et(e,"receiveShadow",3,!1),g=et(e,"zIndexRange",19,()=>[16777271,0]),p=et(e,"calculatePosition",3,tI),x=et(e,"as",3,"div"),_=et(e,"pointerEvents",3,"auto"),y=et(e,"ref",15),S=et(e,"visible",15),E=Ou(e,["$$slots","$$events","$$legacy","autoRender","eps","center","fullscreen","portal","distanceFactor","sprite","transform","occlude","castShadow","receiveShadow","material","geometry","zIndexRange","calculatePosition","as","wrapperClass","pointerEvents","ref","visible","children"]);S(!0);const{camera:A,scene:I,size:b,dom:T,canvas:D,renderStage:F}=xc(),O=new Oi;let k=document.createElement(x()),V=0,W=[0,0],z=si(void 0),K=si(void 0),ee=!1;const Y=new zt,J=new fp;let Me=Zt(()=>d()&&d()!=="blending"||Array.isArray(d())&&d().length>0),Re=new ke,tt=Zt(()=>t().width),Je=Zt(()=>t().height),j=Zt(()=>w(tt)/2),re=Zt(()=>w(Je)/2),Ee=Zt(()=>n().projectionMatrix.elements[5]*w(re)),ze=Zt(()=>cI(n(),new P,t()));rn(()=>{e.wrapperClass&&(k.className=e.wrapperClass)}),rn(()=>(d()==="blending"&&(Tu+=1,Rg(D,g()[0])),()=>{Tu-=1,Rg(D,g()[0])}));const ye=()=>{A.current.updateMatrixWorld(),O.updateWorldMatrix(!0,!1);const Ie=f()?W:p()(O,A.current,t());if(f()||Math.abs(V-A.current.zoom)>c()||Math.abs(W[0]-Ie[0])>c()||Math.abs(W[1]-Ie[1])>c()){const oe=nI(O,A.current);let R=!1;w(Me)&&(Array.isArray(d())?R=d():d()!=="blending"&&(R=[I]));const M=S();if(R){const Z=iI(O,A.current,J,R);S(Z&&!oe)}else S(!oe);M!==S()&&(e.onvisibilitychange?e.onvisibilitychange(S()):k.style.display=S()?"block":"none");const U=Math.floor(g()[0]/2),G=d()?w(Me)?[g()[0],U]:[U-1,0]:g();if(k.style.zIndex=`${sI(O,A.current,G)}`,f()&&w(z)&&w(K)){const{isOrthographicCamera:Z,top:X,left:pe,bottom:ae,right:me}=A.current,De=oI(A.current.matrixWorldInverse),Q=Z?`scale(${w(Ee)})translate(${nn(-(me+pe)/2)}px,${nn((X+ae)/2)}px)`:`translateZ(${w(Ee)}px)`;h()?(Re.copy(A.current.matrixWorldInverse).transpose().copyPosition(Re).scale(O.scale),Re.elements[3]=Re.elements[7]=Re.elements[11]=0,Re.elements[15]=1):Re.copy(O.matrixWorld),k.style.width=`${w(tt)}px`,k.style.height=`${w(Je)}px`,k.style.perspective=Z?"":`${w(Ee)}px`,w(z).style.transform=`${Q}${De}translate(${w(j)}px,${w(re)}px)`,w(K).style.transform=aI(Re,1/((e.distanceFactor||10)/400))}else{const Z=e.distanceFactor===void 0?1:rI(O,A.current)*e.distanceFactor;k.style.transform=`translate3d(${Ie[0]}px,${Ie[1]}px,0) scale(${Z})`}W=Ie,V=A.current.zoom}if(!w(Me)&&!ee)if(f()&&w(z)){const oe=w(z).children[0];if(oe?.clientWidth&&oe?.clientHeight){const{isOrthographicCamera:R}=A.current;if(R||e.geometry){const{scale:M}=E;M&&(Array.isArray(M)?Y.scale.set(1/M[0],1/M[1],1/M[2]):Y.scale.setScalar(1/M))}else{const M=(e.distanceFactor??10)/400,U=oe.clientWidth*M,G=oe.clientHeight*M;Y.scale.set(U,G,1)}ee=!0}}else{const oe=k.children[0];if(oe?.clientWidth&&oe?.clientHeight){const R=1/w(ze),M=oe.clientWidth*R,U=oe.clientHeight*R;Y.scale.set(M,U,1),ee=!0}Y.lookAt(A.current.position)}},{start:it,stop:ct}=pr(ye,{autoStart:!1,autoInvalidate:!1,stage:F});fr(()=>{if(a())return it(),()=>{ct()}});let $e=Zt(()=>(I.updateMatrixWorld(),p()(O,n(),t())));const ne=Ie=>{const oe=e.portal??T;if(!oe){console.warn("<HTML>: target is undefined.");return}return oe.append(Ie),{destroy:()=>Ie.remove()}},{suspended:le}=KR();var se={render:ye,startRendering:it,stopRendering:ct},_e=fI(),L=yt(_e);Ke(L,B0({get is(){return O}},()=>E,{get ref(){return y()},set ref(Ie){y(Ie)},children:(Ie,oe)=>{var R=wn(),M=yt(R);{var U=G=>{Ke(G,{get is(){return Y},get castShadow(){return m()},get receiveShadow(){return v()},children:(Z,X)=>{var pe=lI(),ae=yt(pe);{var me=xe=>{Ke(xe,{get is(){return e.geometry}})},De=xe=>{var fe=wn(),Ze=yt(fe);Ch(Ze,()=>Ke.PlaneGeometry,(N,ve)=>{ve(N,{})}),He(xe,fe)};Ct(ae,xe=>{e.geometry?xe(me):xe(De,!1)})}var Q=We(ae,2);{var he=xe=>{Ke(xe,{get is(){return e.material}})},Pe=xe=>{var fe=wn(),Ze=yt(fe);{var N=ue=>{var Ae=wn(),ce=yt(Ae);Ch(ce,()=>Ke.ShaderMaterial,(te,ge)=>{ge(te,{get side(){return En},get vertexShader(){return JR},get fragmentShader(){return Tg}})}),He(ue,Ae)},ve=ue=>{var Ae=wn(),ce=yt(Ae);Ch(ce,()=>Ke.ShaderMaterial,(te,ge)=>{ge(te,{get side(){return En},get vertexShader(){return jR},get fragmentShader(){return Tg}})}),He(ue,Ae)};Ct(Ze,ue=>{f()?ue(ve,!1):ue(N)},!0)}He(xe,fe)};Ct(Q,xe=>{e.material?xe(he):xe(Pe,!1)})}He(Z,pe)},$$slots:{default:!0}})};Ct(M,G=>{d()&&!w(Me)&&G(U)})}He(Ie,R)},$$slots:{default:!0}}));var Ue=We(L,2);My(Ue,x,!1,(Ie,oe)=>{Sy(Ie,Z=>ne?.(Z)),bs(Ie,Z=>k=Z,()=>k),Py(Ie,()=>({style:"",[_o]:{position:"absolute",top:"0",left:"0","pointer-events":f()?"none":void 0,overflow:f()?"hidden":void 0,transform:f()?void 0:`translate3d(${w($e)[0]}px,${w($e)[1]}px,0)`,"transform-origin":f()?void 0:"0 0",display:i()?"none":void 0}}));var R=wn(),M=yt(R);{var U=Z=>{var X=uI();let pe;var ae=At(X);let me;var De=At(ae),Q=At(De);za(Q,()=>e.children??on,()=>({render:ye,startRendering:it,stopRendering:ct})),bs(ae,he=>de(K,he),()=>w(K)),bs(X,he=>de(z,he),()=>w(z)),Sn(()=>{pe=ai(X,"",pe,{position:"absolute",top:"0",left:"0","transform-style":"preserve-3d","pointer-events":"none",width:`${w(tt)}px`,height:`${w(Je)}px`}),me=ai(ae,"",me,{position:"absolute","pointer-events":_()}),Ur(De,1,Ff(e.class)),ai(De,e.style)}),He(Z,X)},G=Z=>{var X=hI();let pe;var ae=At(X);za(ae,()=>e.children??on,()=>({render:ye,startRendering:it,stopRendering:ct})),Sn(()=>{pe=ai(X,e.style,pe,{position:"absolute",transform:l()?"translate3d(-50%,-50%,0)":"none",top:u()?`${-w(Je)/2}px`:void 0,left:u()?`${-w(tt)/2}px`:void 0,width:u()?`${w(tt)}px`:void 0,height:u()?`${w(Je)}px`:void 0}),Ur(X,1,Ff(e.class))}),He(Z,X)};Ct(M,Z=>{f()?Z(U):Z(G,!1)})}He(oe,R)}),He(r,_e);var Te=Wn(se);return o(),Te}const dI="Right",pI="Top",mI="Front",gI="Left",vI="Bottom",_I="Back";[dI,pI,mI,gI,vI,_I].map(r=>r.toLocaleLowerCase());new qt;new P;be.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ie(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ci.line={uniforms:Ud.merge([be.common,be.fog,be.line]),vertexShader:`
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
		`};new bt;new P;new P;new bt;new bt;new bt;new P;new ke;new m_;new P;new qt;new Yt;new bt;new ke;new ke;new zt;`${Ye.logdepthbuf_pars_vertex}${Ye.fog_pars_vertex}${Ye.logdepthbuf_vertex}${Ye.fog_vertex}`;`${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;`${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;const xI=`

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
`,yI=`

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
`,bI=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,MI=bI,SI=`
	${xI}
	${yI}
`;`${MI}${SI}${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;new qt;typeof window<"u"&&document.createElement("div");const wI=r=>{const{camera:e}=xc();let t=r.current.clientWidth,n=r.current.clientHeight;const i=new ResizeObserver(([s])=>{t=s.contentRect.width,n=s.contentRect.height});return xi(r,s=>(s&&i.observe(s),()=>{s&&i.unobserve(s)})),(s,o)=>{o.pointer.update(a=>(a.set(s.offsetX/t*2-1,-(s.offsetY/n)*2+1),a)),o.raycaster.setFromCamera(o.pointer.current,e.current)}},F_=Symbol("interactivity-context"),TI=()=>vn(F_),EI=r=>{const e=Ht(r?.target??xh().dom),t={enabled:Ht(r?.enabled??!0),pointer:Ht(new ie),pointerOverTarget:Ht(!1),lastEvent:void 0,raycaster:new fp,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:e,handlers:new WeakMap,compute:r?.compute??wI(e),filter:r?.filter,addInteractiveObject:(n,i)=>{t.interactiveObjects.indexOf(n)>-1||(t.handlers.set(n,i),t.interactiveObjects.push(n))},removeInteractiveObject:n=>{const i=t.interactiveObjects.indexOf(n);t.interactiveObjects.splice(i,1),t.handlers.delete(n)}};return Gn(F_,t),t},B_=()=>{const r=TI();if(!r)throw new Error("No interactivity context found. Did you forget to implement interactivity()?");return r},Ig=["onclick","oncontextmenu","ondblclick","onwheel","onpointerup","onpointerdown","onpointerover","onpointerout","onpointerenter","onpointerleave","onpointermove","onpointermissed"],AI=()=>{lR("interactivity",r=>{if(!Tn(r.ref,"Object3D")||!Object.entries(r.props).some(([i,s])=>s!==void 0&&Ig.includes(i)))return;const{addInteractiveObject:t,removeInteractiveObject:n}=B_();return MC.pre(()=>[r.ref],([i])=>(t(i,r.props),()=>{n(i)})),{pluginProps:Ig}})};function Pg(r){return`${(r.eventObject||r.object).uuid}|${r.index}|${r.instanceId}`}const Lg=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],CI=r=>{const{handlers:e}=B_(),t=p=>{const x=p.offsetX-r.initialClick[0],_=p.offsetY-r.initialClick[1];return Math.round(Math.hypot(x,_))},n=p=>{if(r.hovered.size===0)return;const x=new Set;for(const _ of p)x.add(Pg(_));for(const[_,y]of r.hovered)if(!x.has(_)){const{eventObject:S}=y;r.hovered.delete(_);const E=e.get(S);if(E){const A={...y,intersections:p};E.onpointerout?.(A),E.onpointerleave?.(A)}}},i=()=>{if(!r.enabled.current)return[];const p=[],x=r.raycaster.intersectObjects(r.interactiveObjects,!0),_=r.filter===void 0?x:r.filter(x,r);for(const y of _){let S=y.object;for(;S;)e.has(S)&&p.push({...y,eventObject:S}),S=S.parent}return p},s=(p,x)=>{for(const _ of x)e.get(_)?.onpointermissed?.(p)},o=()=>{r.pointerOverTarget.set(!1),n([])},a=()=>{r.pointerOverTarget.set(!0)},c=p=>{const x=p.type,_=x==="pointermove",y=x==="click"||x==="contextmenu"||x==="dblclick";r.compute(p,r);const S=i(),E=y?t(p):0;x==="pointerdown"&&(r.initialClick=[p.offsetX,p.offsetY],r.initialHits=S.map(I=>I.eventObject)),y&&S.length===0&&E<=2&&s(p,r.interactiveObjects),_&&n(S);let A=!1;e:for(const I of S){const b=e.get(I.eventObject);if(!b)continue;const T={stopped:A,...I,intersections:S,stopPropagation(){if(A=!0,T.stopped=!0,r.hovered.size>0&&Array.from(r.hovered.values()).some(D=>D.eventObject===I.eventObject)){const D=S.slice(0,S.indexOf(I));n([...D,I])}},camera:r.raycaster.camera,delta:E,nativeEvent:p,pointer:r.pointer.current,ray:r.raycaster.ray};if(_){if(b.onpointerover||b.onpointerenter||b.onpointerout||b.onpointerleave){const D=Pg(T),F=r.hovered.get(D);F?F.stopped&&T.stopPropagation():(r.hovered.set(D,T),b.onpointerover?.(T),b.onpointerenter?.(T))}b.onpointermove?.(T)}else b[`on${x}`]?(!y||r.initialHits.includes(I.eventObject))&&(s(p,r.interactiveObjects.filter(D=>!r.initialHits.includes(D))),b[`on${x}`]?.(T)):y&&r.initialHits.includes(I.eventObject)&&s(p,r.interactiveObjects.filter(D=>!r.initialHits.includes(D)));if(A)break e}};let l=0,u=null,h=-1/0,f=-1/0;const d=.25,m=p=>{Math.abs(p.offsetX-h)<d&&Math.abs(p.offsetY-f)<d||(h=p.offsetX,f=p.offsetY,u=p,l||(l=requestAnimationFrame(()=>{l=0,u&&(c(u),u=null)})))},v=p=>{for(const[x]of Lg)x==="pointerleave"||x==="pointercancel"?p.removeEventListener(x,o):x==="pointermove"?p.removeEventListener(x,m):x==="pointerenter"?p.removeEventListener(x,a):p.removeEventListener(x,c)},g=p=>{for(const[x,_]of Lg)x==="pointerleave"||x==="pointercancel"?p.addEventListener(x,o,{passive:_}):x==="pointermove"?p.addEventListener(x,m,{passive:_}):x==="pointerenter"?p.addEventListener(x,a,{passive:_}):p.addEventListener(x,c,{passive:_})};xi(r.target,p=>(p&&g(p),()=>{p&&v(p)}))},RI=r=>{const e=EI(r);return AI(),CI(e),e};for(let r=0;r<256;r++)(r<16?"0":"")+r.toString(16);new Xs(-1,1,1,-1,0,1);class II extends nt{constructor(){super(),this.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ne([0,2,0,0,2,0],2))}}new II;var z_={exports:{}};z_.exports=Sh;z_.exports.default=Sh;function Sh(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=k_(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,c,l,u,h,f,d;if(n&&(s=UI(r,e,s,t)),r.length>80*t){a=l=r[0],c=u=r[1];for(var m=t;m<i;m+=t)h=r[m],f=r[m+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Ja(s,o,t,a,c,d,0),o}function k_(r,e,t,n,i){var s,o;if(i===cd(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Dg(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Dg(s,r[s],r[s+1],o);return o&&wh(o,o.next)&&(ec(o),o=o.next),o}function Os(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(wh(t,t.next)||Ft(t.prev,t,t.next)===0)){if(ec(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ja(r,e,t,n,i,s,o){if(r){!o&&s&&kI(r,n,i,s);for(var a=r,c,l;r.prev!==r.next;){if(c=r.prev,l=r.next,s?LI(r,n,i,s):PI(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ec(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=DI(Os(r),e,t),Ja(r,e,t,n,i,s,2)):o===2&&NI(r,e,t,n,i,s):Ja(Os(r),e,t,n,i,s,1);break}}}}function PI(r){var e=r.prev,t=r,n=r.next;if(Ft(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>o?i:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l,m=n.next;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&So(i,a,s,c,o,l,m.x,m.y)&&Ft(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function LI(r,e,t,n){var i=r.prev,s=r,o=r.next;if(Ft(i,s,o)>=0)return!1;for(var a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,m=u<h?u<f?u:f:h<f?h:f,v=a>c?a>l?a:l:c>l?c:l,g=u>h?u>f?u:f:h>f?h:f,p=od(d,m,e,t,n),x=od(v,g,e,t,n),_=r.prevZ,y=r.nextZ;_&&_.z>=p&&y&&y.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&So(a,u,c,h,l,f,_.x,_.y)&&Ft(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&So(a,u,c,h,l,f,y.x,y.y)&&Ft(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&So(a,u,c,h,l,f,_.x,_.y)&&Ft(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&So(a,u,c,h,l,f,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function DI(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!wh(i,s)&&V_(i,n,n.next,s)&&Qa(i,s)&&Qa(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ec(n),ec(n.next),n=r=s),n=n.next}while(n!==r);return Os(n)}function NI(r,e,t,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&HI(o,a)){var c=G_(o,a);o=Os(o,o.next),c=Os(c,c.next),Ja(o,e,t,n,i,s,0),Ja(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function UI(r,e,t,n){var i=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=k_(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(GI(l));for(i.sort(OI),s=0;s<i.length;s++)t=FI(i[s],t);return t}function OI(r,e){return r.x-e.x}function FI(r,e){var t=BI(r,e);if(!t)return e;var n=G_(t,r);return Os(n,n.next),Os(t,t.next)}function BI(r,e){var t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,u=o.y,h=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&So(i<u?n:s,i,l,u,i<u?s:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),Qa(t,r)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&zI(o,t)))&&(o=t,h=f)),t=t.next;while(t!==c);return o}function zI(r,e){return Ft(r.prev,r,e.prev)<0&&Ft(e.next,r,r.next)<0}function kI(r,e,t,n){var i=r;do i.z===0&&(i.z=od(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,VI(i)}function VI(r){var e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function od(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function GI(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function So(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function HI(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!WI(r,e)&&(Qa(r,e)&&Qa(e,r)&&XI(r,e)&&(Ft(r.prev,r,e.prev)||Ft(r,e.prev,e))||wh(r,e)&&Ft(r.prev,r,r.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function wh(r,e){return r.x===e.x&&r.y===e.y}function V_(r,e,t,n){var i=_l(Ft(r,e,t)),s=_l(Ft(r,e,n)),o=_l(Ft(t,n,r)),a=_l(Ft(t,n,e));return!!(i!==s&&o!==a||i===0&&vl(r,t,e)||s===0&&vl(r,n,e)||o===0&&vl(t,r,n)||a===0&&vl(t,e,n))}function vl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function _l(r){return r>0?1:r<0?-1:0}function WI(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&V_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Qa(r,e){return Ft(r.prev,r,r.next)<0?Ft(r,e,r.next)>=0&&Ft(r,r.prev,e)>=0:Ft(r,e,r.prev)<0||Ft(r,r.next,e)<0}function XI(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function G_(r,e){var t=new ad(r.i,r.x,r.y),n=new ad(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Dg(r,e,t,n){var i=new ad(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ec(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ad(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Sh.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,o=Math.abs(cd(r,0,s,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,u=a<c-1?e[a+1]*t:r.length;o-=Math.abs(cd(r,l,u,t))}var h=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,d=n[a+1]*t,m=n[a+2]*t;h+=Math.abs((r[f]-r[m])*(r[d+1]-r[f+1])-(r[f]-r[d])*(r[m+1]-r[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function cd(r,e,t,n){for(var i=0,s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}Sh.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};new ie;new ie;var Ng;(r=>{function e(i){let s=i.slice();return s.sort(r.POINT_COMPARATOR),r.makeHullPresorted(s)}r.makeHull=e;function t(i){if(i.length<=1)return i.slice();let s=[];for(let a=0;a<i.length;a++){const c=i[a];for(;s.length>=2;){const l=s[s.length-1],u=s[s.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))s.pop();else break}s.push(c)}s.pop();let o=[];for(let a=i.length-1;a>=0;a--){const c=i[a];for(;o.length>=2;){const l=o[o.length-1],u=o[o.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))o.pop();else break}o.push(c)}return o.pop(),s.length==1&&o.length==1&&s[0].x==o[0].x&&s[0].y==o[0].y?s:s.concat(o)}r.makeHullPresorted=t;function n(i,s){return i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0}r.POINT_COMPARATOR=n})(Ng||(Ng={}));new Pn;new P;new ke;new Hr;new Yt;new qt;new P;new P;var qI=ht("<!> <!> <!> <!> <!> <!> <!>",1);function YI(r,e){Hn(e,!1);const t=()=>Ea(m,"$iglooGltf",n),[n,i]=gd(),s=Fe(),o=Fe(),a=Fe(),c=Fe(),l=Fe();et(e,"scrollProgress",8,0);let u=et(e,"visible",8,!0),h=et(e,"opacity",8,1),f=et(e,"transitionProgress",8,0),d=0;const m=N_("/models/igloo/igloo.gltf"),v=Fe(new Pn({color:new Se(.4,.9,1),transparent:!0,opacity:.7,side:En})),g=new fc(.6,32);pr(y=>{if(d+=y,w(v)){const S=Math.sin(d*1.5)*.2+.7;ui(v,w(v).opacity=h()*S)}}),dt(()=>Xt(f()),()=>{de(s,1-Math.pow(1-f(),3))}),dt(()=>w(s),()=>{de(o,Math.max(.05,1-w(s)*.95))}),dt(()=>w(s),()=>{de(a,-w(s)*25)}),dt(()=>w(s),()=>{de(c,-w(s)*5)}),dt(()=>w(s),()=>{de(l,w(s)*.3)}),dt(()=>(t(),Xt(h()),_h),()=>{t()&&(console.log("Igloo loaded:",t()),t().scene.traverse(y=>{y.isMesh&&y.material&&((Array.isArray(y.material)?y.material:[y.material]).forEach(E=>{E.transparent=!0,E.opacity=h(),E.color=new Se(.92,.95,1),E.emissive=new Se(.1,.12,.18),E.emissiveIntensity=.3,E.roughness=.6,E.metalness=.1,E.side=En,E.needsUpdate=!0}),y.castShadow=!0,y.receiveShadow=!0)}))}),Bs(),Yi();var p=wn(),x=yt(p);{var _=y=>{var S=qI(),E=yt(S);{let O=xt(()=>[0,w(c),w(a)]),k=xt(()=>[w(o),w(o),w(o)]),V=xt(()=>w(l)*.5);Ke.Group(E,{get position(){return w(O)},get scale(){return w(k)},get"rotation.x"(){return w(V)},get"rotation.y"(){return w(l)},children:(W,z)=>{Ke.Group(W,{position:[0,.5,0],scale:[.4,.4,.4],rotation:st(()=>[0,Math.PI*.25,0]),children:(K,ee)=>{Ke(K,{get is(){return t(),st(()=>t().scene)}})},$$slots:{default:!0}})},$$slots:{default:!0}})}var A=We(E,2);Ke.DirectionalLight(A,{position:[5,10,5],intensity:2,color:16777215});var I=We(A,2);Ke.PointLight(I,{position:[0,5,3],color:16777215,intensity:1.5,distance:15,decay:1});var b=We(I,2);Ke.SpotLight(b,{position:[0,8,5],"target-position":[0,1,0],angle:.6,penumbra:.5,intensity:2,color:16777215,castShadow:!0});var T=We(b,2);Ke.Mesh(T,{get geometry(){return g},get material(){return w(v)},position:[.5,1,.5],rotation:st(()=>[0,Math.PI*.25,0])});var D=We(T,2);{let O=xt(()=>2*h());Ke.PointLight(D,{position:[.6,1,.6],color:6743551,get intensity(){return w(O)},distance:5,decay:2})}var F=We(D,2);{let O=xt(()=>1*h());Ke.PointLight(F,{position:[0,1.2,0],color:5097704,get intensity(){return w(O)},distance:4,decay:2})}He(y,S)};Ct(x,y=>{u()&&t()&&y(_)})}He(r,p),Wn(),i()}var $I=ht("<!> <!> <!> <!>",1);function ZI(r,e){Hn(e,!1);let t=et(e,"opacity",8,1),n=Fe(null),i=Fe(!1);$i(()=>{new P_().load("/models/mountain/scene.gltf",l=>{console.log("Mountain GLTF loaded successfully:",l),de(n,l.scene),w(n).traverse(u=>{u.isMesh&&u.material&&((Array.isArray(u.material)?u.material:[u.material]).forEach(f=>{f.transparent=!0,f.opacity=t()}),u.castShadow=!0,u.receiveShadow=!0)}),de(i,!0)},l=>{console.log("Loading mountain:",(l.loaded/l.total*100).toFixed(1)+"%")},l=>{console.error("Error loading mountain GLTF:",l)})}),pr(c=>{}),dt(()=>(w(n),w(i),Xt(t())),()=>{w(n)&&w(i)&&w(n).traverse(c=>{c.isMesh&&c.material&&(Array.isArray(c.material)?c.material:[c.material]).forEach(u=>{u.opacity=t(),u.needsUpdate=!0})})}),Bs(),Yi();var s=wn(),o=yt(s);{var a=c=>{var l=$I(),u=yt(l);Ke.Group(u,{position:[0,-3.5,0],scale:[50,15,50],rotation:[0,0,0],children:(m,v)=>{Ke(m,{get is(){return w(n)}})},$$slots:{default:!0}});var h=We(u,2);Ke.Group(h,{position:[0,-10,-60],scale:[200,200,200],rotation:[0,0,0],children:(m,v)=>{{let g=xt(()=>(w(n),st(()=>w(n).clone())));Ke(m,{get is(){return w(g)}})}},$$slots:{default:!0}});var f=We(h,2);Ke.Group(f,{position:[50,-12,-70],scale:[180,180,180],rotation:[0,.3,0],children:(m,v)=>{{let g=xt(()=>(w(n),st(()=>w(n).clone())));Ke(m,{get is(){return w(g)}})}},$$slots:{default:!0}});var d=We(f,2);Ke.Group(d,{position:[-50,-11,-65],scale:[170,170,170],rotation:[0,-.3,0],children:(m,v)=>{{let g=xt(()=>(w(n),st(()=>w(n).clone())));Ke(m,{get is(){return w(g)}})}},$$slots:{default:!0}}),He(c,l)};Ct(o,c=>{w(i)&&w(n)&&c(a)})}He(r,s),Wn()}var KI=ht("<!> <!>",1),jI=ht("<!> <!>",1),JI=ht("<!> <!>",1),QI=ht("<!> <!>",1),eP=ht('<div><div class="info-id"> </div> <div class="info-name"> </div> <svg class="connector-line top-left-line" width="120" height="60" viewBox="0 0 120 60"><line x1="0" y1="0" x2="100" y2="50" stroke="rgba(255,255,255,0.5)" stroke-width="1"></line><circle cx="100" cy="50" r="3" fill="rgba(255,255,255,0.6)"></circle></svg></div>'),tP=ht('<div><div class="temp-row"><span class="temp-label">TEMP</span> <span class="temp-value"> </span></div> <div class="temp-secondary"> </div></div>'),nP=ht('<div><svg class="connector-line bottom-line" width="80" height="50" viewBox="0 0 80 50"><line x1="0" y1="50" x2="60" y2="10" stroke="rgba(255,255,255,0.5)" stroke-width="1"></line><circle cx="0" cy="50" r="3" fill="rgba(255,255,255,0.6)"></circle></svg> <div class="date-text"> </div> <div class="cta-text">CLICK TO EXPLORE</div></div>'),iP=ht("<!> <!> <!>",1),rP=ht("<!> <!> <!> <!> <!>",1);function sP(r,e){Hn(e,!1);const t=()=>Ea(u,"$rockGltf",n),[n,i]=gd(),s=Fe(),o=Fe(),a=Fe(),c=Fe(),l=Fe(),u=N_("/models/rock/scene.gltf");let h=et(e,"opacity",8,1),f=et(e,"scrollProgress",8,0);et(e,"currentSection",8,0);let d=et(e,"transitionProgress",8,0);et(e,"caveDepthProgress",8,0);let m=et(e,"stones",24,()=>[]),v=et(e,"modalOpen",8,!1);const g=Fu();let p=Fe(0),x=Fe(1),_=Fe(1),y=Fe(1);const S=2.5;let E=Fe(!0),A=Fe(!1),I=Fe(null),b=Fe(-1);function T(ee,Y=2){let J;switch(ee){case"dodecahedron":J=new Ho(Y,2);break;case"icosahedron":J=new mc(Y,2);break;case"octahedron":J=new Jo(Y*1.1,2);break;case"tetrahedron":J=new vc(Y*1.2,2);break;default:J=new Ho(Y,2)}const Me=J.attributes.position;for(let Re=0;Re<Me.count;Re++){const tt=Me.getX(Re),Je=Me.getY(Re),j=Me.getZ(Re),re=Math.sin(tt*2.5)*Math.cos(Je*2.5)*Math.sin(j*2.5)*.12,Ee=Math.sin(tt*5+Je*4)*Math.cos(j*3)*.06,ze=Math.sin(tt*8)*Math.sin(Je*8)*Math.sin(j*8)*.03,ye=1+re+Ee+ze;Me.setX(Re,tt*ye),Me.setY(Re,Je*ye),Me.setZ(Re,j*ye)}return Me.needsUpdate=!0,J.computeVertexNormals(),J}let D=Fe({}),F=Fe(!1);$i(()=>{m().forEach((ee,Y)=>{ui(D,w(D)[Y]=T(ee.geometry))}),de(F,!0)}),pr(ee=>{de(p,w(p)+ee);const Y=w(_)-w(x);if(Math.abs(Y)>.001){if(de(x,w(x)+Y*Math.min(ee*S,1)),w(I)==="in"&&!w(A)){const J=w(_)-w(y);(w(x)-w(y))/J>=.7&&(de(A,!0),g("zoomComplete",{direction:"in"}))}}else de(x,w(_)),!w(E)&&w(I)==="out"&&(de(E,!0),g("zoomComplete",{direction:"out"})),de(E,!0)});function O(ee,Y){console.log("Stone clicked!",ee.name,Y),v()||g("stoneClick",ee)}function k(ee){console.log("Stone hover enter",ee),de(b,ee),document.body.style.cursor="pointer"}function V(){console.log("Stone hover leave"),de(b,-1),document.body.style.cursor="default"}function W(){const ee=new Date;return`${String(ee.getMonth()+1).padStart(2,"0")}.${String(ee.getDate()).padStart(2,"0")}.${ee.getFullYear()}`}dt(()=>Xt(f()),()=>{de(s,f()<.5?0:f()<.7?1:f()<.85?2:3)}),dt(()=>{},()=>{de(o,{x:0,y:1.5,z:0})}),dt(()=>Xt(d()),()=>{de(a,d()<1?-12*(1-(1-Math.pow(1-d(),3))):0)}),dt(()=>Xt(d()),()=>{de(c,d()<1?.2+.8*(1-Math.pow(1-d(),2)):1)}),dt(()=>Xt(d()),()=>{de(l,d()<1?(1-d())*Math.PI:0)}),dt(()=>(Xt(v()),w(_),w(x)),()=>{const ee=v()?3.5:1;ee!==w(_)&&(de(y,w(x)),de(_,ee),de(E,!1),de(A,!1),de(I,v()?"in":"out"))}),dt(()=>(Xt(m()),w(D)),()=>{m().length>0&&Object.keys(w(D)).length===0&&(m().forEach((ee,Y)=>{ui(D,w(D)[Y]=T(ee.geometry))}),de(F,!0))}),Bs(),Yi();var z=wn(),K=yt(z);Cl(K,1,m,Al,(ee,Y,J)=>{const Me=xt(()=>w(b)===J),Re=xt(()=>(w(p),st(()=>Math.sin(w(p)*.4+J*1.5)*.06))),tt=xt(()=>(w(p),st(()=>w(p)*.12+J*Math.PI*.5))),Je=xt(()=>(w(p),st(()=>Math.sin(w(p)*.15+J)*.08))),j=xt(()=>J===w(s));var re=wn(),Ee=yt(re);{var ze=ye=>{const it=xt(()=>J===0?w(a):0),ct=xt(()=>J===0?w(c):1),$e=xt(()=>J===0?w(l):0);{let ne=xt(()=>(w(o),Xt(w(Re)),Xt(w(it)),st(()=>[w(o).x,w(o).y+w(Re)+w(it),w(o).z])));Ke.Group(ye,{get position(){return w(ne)},children:(le,se)=>{var _e=rP(),L=yt(_e);{var Ue=G=>{const Z=xt(()=>w(Me)?2.8:2.6),X=xt(()=>w(Z)*w(x)*w(ct));var pe=KI(),ae=yt(pe);{let De=xt(()=>(v()?w(tt)*.3:w(tt))+w($e)),Q=xt(()=>v()?w(Je)*.3:w(Je));Ke.Group(ae,{get"rotation.y"(){return w(De)},get"rotation.x"(){return w(Q)},"rotation.z":J*.3,get scale(){return w(X)},children:(he,Pe)=>{var xe=wn(),fe=yt(xe);Cl(fe,1,()=>(t(),st(()=>Object.values(t().nodes))),Al,(Ze,N)=>{var ve=wn(),ue=yt(ve);{var Ae=ce=>{Ke.Mesh(ce,{get geometry(){return w(N),st(()=>w(N).geometry)},castShadow:!0,receiveShadow:!0,$$events:{click:()=>O(w(Y),J),pointerenter:()=>k(J),pointerleave:V},children:(te,ge)=>{Ke.MeshStandardMaterial(te,{get map(){return w(N),st(()=>w(N).material.map)},get roughnessMap(){return w(N),st(()=>w(N).material.roughnessMap)},get metalnessMap(){return w(N),st(()=>w(N).material.metalnessMap)},get aoMap(){return w(N),st(()=>w(N).material.aoMap)},roughness:.65,metalness:.15,envMapIntensity:.6})},$$slots:{default:!0}})};Ct(ue,ce=>{w(N),st(()=>w(N).isMesh)&&ce(Ae)})}He(Ze,ve)}),He(he,xe)},$$slots:{default:!0}})}var me=We(ae,2);{let De=xt(()=>w(Me)?4:2);Ke.SpotLight(me,{position:[0,4,2],"target-position":[0,0,0],angle:.5,penumbra:.5,get intensity(){return w(De)},color:15266047,castShadow:!0,distance:12})}He(G,pe)},Te=G=>{{let Z=xt(()=>w(Me)?2.1:2);Ke.Mesh(G,{get"rotation.y"(){return w(tt)},get"rotation.x"(){return w(Je)},get scale(){return w(Z)},castShadow:!0,receiveShadow:!0,$$events:{click:()=>O(w(Y),J),pointerenter:()=>k(J),pointerleave:V},children:(X,pe)=>{var ae=jI(),me=yt(ae);Ke.IcosahedronGeometry(me,{args:[1,2]});var De=We(me,2);Ke.MeshStandardMaterial(De,{get color(){return w(Y),st(()=>w(Y).color)},roughness:.3,metalness:.7,transparent:!0,opacity:.95}),He(X,ae)},$$slots:{default:!0}})}};Ct(L,G=>{t()?G(Ue):G(Te,!1)})}var Ie=We(L,2);Ke.Mesh(Ie,{scale:.6,get"rotation.y"(){return w(tt)},get"rotation.x"(){return w(Je)},children:(G,Z)=>{var X=JI(),pe=yt(X);Ke.SphereGeometry(pe,{args:[2,16,16]});var ae=We(pe,2);{let me=xt(()=>.08*h());Ke.MeshBasicMaterial(ae,{color:5925498,transparent:!0,get opacity(){return w(me)}})}He(G,X)},$$slots:{default:!0}});var oe=We(Ie,2);{let G=xt(()=>w(Me)?1.3:1.2);Ke.Mesh(oe,{get scale(){return w(G)},children:(Z,X)=>{var pe=QI(),ae=yt(pe);Ke.SphereGeometry(ae,{args:[2.4,32,32]});var me=We(ae,2);{let De=xt(()=>w(Me)?10136234:6978186),Q=xt(()=>(w(Me)?.08:.03)*h());Ke.MeshBasicMaterial(me,{get color(){return w(De)},transparent:!0,get opacity(){return w(Q)},get side(){return Xt(_h),st(()=>pn)}})}He(Z,pe)},$$slots:{default:!0}})}var R=We(oe,2);{let G=xt(()=>w(Me)?2.5:1);Ke.PointLight(R,{color:15790320,get intensity(){return w(G)},distance:10,decay:2})}var M=We(R,2);{var U=G=>{var Z=iP(),X=yt(Z);Cf(X,{position:[-3.8,2.2,0],center:!0,occlude:!1,style:"pointer-events: none;",children:(me,De)=>{var Q=eP();let he;var Pe=At(Q),xe=At(Pe),fe=We(Pe,2),Ze=At(fe);Sn((N,ve)=>{he=Ur(Q,1,"stone-info top-left",null,he,{hovered:w(Me)}),hs(xe,`PORTFOLIO_CO_${N??""}`),hs(Ze,ve)},[()=>st(()=>String(J+1).padStart(2,"0")),()=>(w(Y),st(()=>w(Y).name.toUpperCase().replace(" ","_")))]),He(me,Q)},$$slots:{default:!0}});var pe=We(X,2);Cf(pe,{position:[4.2,.8,0],center:!0,occlude:!1,style:"pointer-events: none;",children:(me,De)=>{var Q=tP();let he;var Pe=At(Q),xe=We(At(Pe),2),fe=At(xe),Ze=We(Pe,2),N=At(Ze);Sn((ve,ue)=>{he=Ur(Q,1,"stone-info right-side",null,he,{hovered:w(Me)}),hs(fe,`${ve??""}°`),hs(N,`+${ue??""}`)},[()=>st(()=>(25+Math.sin(J*2)*8).toFixed(2)),()=>st(()=>Math.abs(-3+Math.cos(J*2)*4).toFixed(2))]),He(me,Q)},$$slots:{default:!0}});var ae=We(pe,2);Cf(ae,{position:[1.5,-2,0],center:!0,occlude:!1,style:"pointer-events: none;",children:(me,De)=>{var Q=nP();let he;var Pe=We(At(Q),2),xe=At(Pe);Sn(fe=>{he=Ur(Q,1,"stone-info bottom-info",null,he,{hovered:w(Me)}),hs(xe,`D ${fe??""}`)},[()=>st(W)]),He(me,Q)},$$slots:{default:!0}}),He(G,Z)};Ct(M,G=>{v()||G(U)})}He(le,_e)},$$slots:{default:!0}})}};Ct(Ee,ye=>{w(j)&&ye(ze)})}He(ee,re)}),He(r,z),Wn(),i()}var oP=ht("<!> <!>",1);function aP(r,e){Hn(e,!1);let t=et(e,"opacity",8,1),n=et(e,"particleCount",8,200),i=et(e,"areaSize",8,30),s=0,o=Fe(),a=Fe(),c=[],l=[],u=[],h=[];$i(()=>{c=new Float32Array(n()*3),l=[],u=new Float32Array(n()),h=new Float32Array(n());for(let v=0;v<n();v++)c[v*3]=(Math.random()-.5)*i(),c[v*3+1]=Math.random()*15-2,c[v*3+2]=(Math.random()-.5)*i(),l.push({x:(Math.random()-.5)*.3,y:(Math.random()-.5)*.2+.1,z:(Math.random()-.5)*.3}),u[v]=Math.random()*3+1,h[v]=Math.random()*.5+.3;w(o)&&(w(o).setAttribute("position",new gt(c,3)),w(o).setAttribute("size",new gt(u,1)),w(o).setAttribute("alpha",new gt(h,1)))}),pr(v=>{if(s+=v,!w(o)||!c.length)return;const g=w(o).getAttribute("position");if(g){for(let p=0;p<n();p++){let x=g.getX(p),_=g.getY(p),y=g.getZ(p);const S=Math.sin(s*.5+p*.1)*.02;x+=l[p].x*v+S,_+=l[p].y*v,y+=l[p].z*v+Math.cos(s*.3+p*.1)*.01;const E=i()/2;x>E&&(x=-E),x<-E&&(x=E),_>15&&(_=-2),_<-2&&(_=15),y>E&&(y=-E),y<-E&&(y=E),g.setXYZ(p,x,_,y)}g.needsUpdate=!0}});const f=`
    attribute float size;
    attribute float alpha;
    varying float vAlpha;
    varying float vDistance;

    void main() {
      vAlpha = alpha;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vDistance = -mvPosition.z;
      gl_PointSize = size * (150.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,d=`
    uniform float uOpacity;
    uniform float uTime;
    varying float vAlpha;
    varying float vDistance;

    void main() {
      // Create soft circular particle
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);

      // Soft edge falloff
      float strength = 1.0 - smoothstep(0.0, 0.5, dist);
      strength *= strength; // Make it softer

      // Fade based on distance for depth effect
      float distanceFade = smoothstep(30.0, 5.0, vDistance);

      // Pulsing effect
      float pulse = sin(uTime * 2.0 + vDistance * 0.5) * 0.15 + 0.85;

      // Final color - soft white/gray particles
      vec3 color = vec3(0.9, 0.92, 0.95);
      float finalAlpha = strength * vAlpha * uOpacity * distanceFade * pulse * 0.6;

      gl_FragColor = vec4(color, finalAlpha);
    }
  `;let m=Fe({uOpacity:{value:t()},uTime:{value:0}});pr(v=>{w(m)&&(ui(m,w(m).uTime.value+=v),ui(m,w(m).uOpacity.value=t()))}),Yi(),Ke.Points(r,{children:(v,g)=>{var p=oP(),x=yt(p);Ke.BufferGeometry(x,{get ref(){return w(o)},set ref(y){de(o,y)},$$legacy:!0});var _=We(x,2);Ke.ShaderMaterial(_,{vertexShader:f,fragmentShader:d,get uniforms(){return w(m)},transparent:!0,depthWrite:!1,get blending(){return Xt(_h),st(()=>Il)},get ref(){return w(a)},set ref(y){de(a,y)},$$legacy:!0}),He(v,p)},$$slots:{default:!0}}),Wn()}var cP=ht("<!> <!>",1),lP=ht("<!> <!>",1),uP=ht("<!> <!>  <!> <!> <!> <!>  <!>  <!>",1);function hP(r,e){Hn(e,!1);const t=Fe(),n=Fe(),i=Fe(),s=Fe(),o=Fe(),a=Fe(),c=Fe(),l=Fe();RI({filter:K=>K});let u=et(e,"scrollProgress",8,0),h=et(e,"currentSection",8,0),f=et(e,"mousePosition",24,()=>({x:.5,y:.5})),d=et(e,"stones",24,()=>[]),m=et(e,"modalOpen",8,!1);const v=Fu();let g=Fe();const p=.08,x=.3,_={x:0,y:2,z:8};pr(()=>{w(g)&&w(g).lookAt(0,1.5,0)}),pr(K=>{});const y="#0a0c10";function S(K){v("stoneClick",K.detail)}function E(K){v("zoomComplete",K.detail)}dt(()=>Xt(u()),()=>{de(t,u()<x+.05)}),dt(()=>Xt(u()),()=>{de(n,u()>=p)}),dt(()=>Xt(u()),()=>{de(i,Math.min(1,Math.max(0,(u()-p)/(x-p))))}),dt(()=>w(i),()=>{de(s,Math.max(0,1-w(i)*1.5))}),dt(()=>w(i),()=>{de(o,Math.min(1,Math.max(0,(w(i)-.3)/.7)))}),dt(()=>Xt(f()),()=>{de(a,_.x+(f().x-.5)*.5)}),dt(()=>Xt(f()),()=>{de(c,_.y+(f().y-.5)*.3)}),dt(()=>{},()=>{de(l,_.z)}),Bs(),Yi();var A=uP(),I=yt(A);{let K=xt(()=>[w(a),w(c),w(l)]);Ke.PerspectiveCamera(I,{makeDefault:!0,get position(){return w(K)},fov:50,near:.1,far:100,get ref(){return w(g)},set ref(ee){de(g,ee)},$$legacy:!0})}var b=We(I,2);Ke.Color(b,{attach:"background",args:[y]});var T=We(b,2);Ke.AmbientLight(T,{intensity:.6,color:11579568});var D=We(T,2);Ke.DirectionalLight(D,{position:[5,10,5],intensity:1.5,color:16777215,castShadow:!0});var F=We(D,2);Ke.DirectionalLight(F,{position:[-5,8,-5],intensity:.8,color:15263976});var O=We(F,2);Ke.PointLight(O,{position:[0,5,3],intensity:1.2,color:16777215,distance:20,decay:2});var k=We(O,2);{var V=K=>{Ke.Group(K,{position:[0,0,0],scale:[1,1,1],children:(ee,Y)=>{var J=cP(),Me=yt(J);ZI(Me,{get opacity(){return w(s)}});var Re=We(Me,2);YI(Re,{get scrollProgress(){return u()},visible:!0,get opacity(){return w(s)},get transitionProgress(){return w(i)}}),He(ee,J)},$$slots:{default:!0}})};Ct(k,K=>{w(t)&&K(V)})}var W=We(k,2);{var z=K=>{var ee=lP(),Y=yt(ee);aP(Y,{get opacity(){return w(o)},particleCount:300,areaSize:40});var J=We(Y,2);sP(J,{get opacity(){return w(o)},get scrollProgress(){return u()},get currentSection(){return h()},get transitionProgress(){return w(i)},caveDepthProgress:0,get stones(){return d()},get modalOpen(){return m()},$$events:{stoneClick:S,zoomComplete:E}}),He(K,ee)};Ct(W,K=>{w(n)&&K(z)})}He(r,A),Wn()}var fP=ht('<div class="scene-container svelte-r8xqwj"><!></div>');function dP(r,e){Hn(e,!1);let t=et(e,"scrollProgress",8,0),n=et(e,"currentSection",8,0),i=et(e,"stones",24,()=>[]),s=et(e,"modalOpen",8,!1);const o=Fu();let a=Fe({x:.5,y:.5}),c={x:.5,y:.5},l=Fe(!1);function u(x,_,y){return x+(_-x)*y}function h(x){c={x:x.clientX/window.innerWidth,y:x.clientY/window.innerHeight}}function f(){ui(a,w(a).x=u(w(a).x,c.x,.03)),ui(a,w(a).y=u(w(a).y,c.y,.03)),requestAnimationFrame(f)}function d(x){o("stoneClick",x.detail)}function m(x){o("zoomComplete",x.detail)}$i(()=>(de(l,!0),f(),window.addEventListener("mousemove",h),()=>{window.removeEventListener("mousemove",h)})),Yi();var v=fP(),g=At(v);{var p=x=>{WC(x,{children:(_,y)=>{hP(_,{get scrollProgress(){return t()},get currentSection(){return n()},get mousePosition(){return w(a)},get stones(){return i()},get modalOpen(){return s()},$$events:{stoneClick:d,zoomComplete:m}})},$$slots:{default:!0}})};Ct(g,x=>{w(l)&&x(p)})}He(r,v),Wn()}const pP=r=>r;function mP(r){const e=r-1;return e*e*e+1}function Ug(r){const e=typeof r=="string"&&r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[r,"px"]}function gP(r,{delay:e=0,duration:t=400,easing:n=pP}={}){const i=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*i}`}}function Og(r,{delay:e=0,duration:t=400,easing:n=mP,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(r),c=+a.opacity,l=a.transform==="none"?"":a.transform,u=c*(1-o),[h,f]=Ug(i),[d,m]=Ug(s);return{delay:e,duration:t,easing:n,css:(v,g)=>`
			transform: ${l} translate(${(1-v)*h}${f}, ${(1-v)*d}${m});
			opacity: ${c-u*g}`}}function Fg(r){const e=r-1;return e*e*e+1}var vP=ht('<button class="close-btn svelte-5awcn0" aria-label="Close"><span class="bracket-corner top-left svelte-5awcn0"></span> <span class="bracket-corner top-right svelte-5awcn0"></span> <span class="close-text svelte-5awcn0">Close</span> <span class="bracket-corner bottom-left svelte-5awcn0"></span> <span class="bracket-corner bottom-right svelte-5awcn0"></span></button> <div class="modal-content svelte-5awcn0" tabindex="-1" role="dialog" aria-modal="true"><section class="content-section svelte-5awcn0"><h2 class="section-header svelte-5awcn0">////// Summary</h2> <p class="description svelte-5awcn0">Introducing Abstract, the blockchain for consumer crypto, pioneering culture, community, and creativity onchain. We believe that consumer crypto is the breakthrough opportunity to bring billions of people onchain and the final frontier for consumer crypto adoption. The dominant consumer crypto chain will be the single greatest distribution channel-bringing users, liquidity, partnerships, and community to crypto-native builders and global brands.</p> <p class="description svelte-5awcn0">Through a combination of culture & community building, a brand-new economic mechanism, cutting-edge cryptography, and dedicated builder & brand support, Abstract allows those building for the masses to scale and flourish.</p></section> <section class="content-section svelte-5awcn0"><h3 class="section-header svelte-5awcn0">/// Discover</h3> <div class="links-row svelte-5awcn0"><a href="https://x.com" target="_blank" rel="noopener noreferrer" class="link-btn svelte-5awcn0">[X] ↗</a> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="link-btn svelte-5awcn0">[LI] ↗</a></div></section> <section class="content-section svelte-5awcn0"><h3 class="section-header svelte-5awcn0">/// Visit</h3> <a href="#" target="_blank" rel="noopener noreferrer" class="link-btn svelte-5awcn0">[website] ↗</a></section></div>',1),_P=ht('<div class="modal-backdrop svelte-5awcn0" role="button" tabindex="-1" aria-label="Close modal"><!></div>');function xP(r,e){Hn(e,!1),et(e,"stone",8),et(e,"stoneIndex",8,0);let t=et(e,"showContent",8,!1);const n=Fu();let i=Fe();function s(){n("close")}function o(h){h.key==="Escape"&&s()}function a(h){h.target.classList.contains("modal-backdrop")&&s()}$i(()=>{w(i)?.focus(),window.addEventListener("keydown",o)}),ks(()=>{window.removeEventListener("keydown",o)}),Yi();var c=_P(),l=At(c);{var u=h=>{var f=vP(),d=yt(f),m=We(d,2);bs(m,v=>de(i,v),()=>w(i)),Ta("click",d,s),Rh(1,d,()=>gP,()=>({duration:300,delay:300})),Rh(1,m,()=>Og,()=>({y:30,duration:400,delay:100,easing:Fg})),Rh(2,m,()=>Og,()=>({y:20,duration:200,easing:Fg})),He(h,f)};Ct(l,h=>{t()&&h(u)})}Ta("click",c,a),Ta("keydown",c,o),He(r,c),Wn()}var yP=ht('<canvas class="wireframe-overlay svelte-1wdj745" aria-hidden="true"></canvas>');function bP(r,e){Hn(e,!1);let t=et(e,"scrollProgress",8,0),n=Fe(),i=Fe();const s=50,o=.5;function a(){if(!w(i)||!w(n))return;const u=w(n).width,h=w(n).height;w(i).clearRect(0,0,u,h);const f=Math.max(0,.08-t()*.15);if(!(f<=0)){ui(i,w(i).strokeStyle=`rgba(168, 173, 184, ${f})`),ui(i,w(i).lineWidth=o),w(i).beginPath();for(let d=-h;d<u+h;d+=s)w(i).moveTo(d,0),w(i).lineTo(d+h,h);w(i).stroke(),w(i).beginPath();for(let d=0;d<u+h;d+=s)w(i).moveTo(d,0),w(i).lineTo(d-h,h);w(i).stroke(),ui(i,w(i).fillStyle=`rgba(168, 173, 184, ${f*1.5})`);for(let d=0;d<20;d++){const m=(Math.sin(d*.7)+1)/2*u,v=(Math.cos(d*.9)+1)/2*h;w(i).beginPath(),w(i).arc(m,v,2,0,Math.PI*2),w(i).fill()}}}function c(){w(n)&&(ui(n,w(n).width=window.innerWidth),ui(n,w(n).height=window.innerHeight),a())}$i(()=>(de(i,w(n).getContext("2d")),c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)})),dt(()=>w(i),()=>{w(i)&&a()}),Bs(),Yi();var l=yP();bs(l,u=>de(n,u),()=>w(n)),He(r,l),Wn()}var MP=ht('<div class="chromatic-layer red svelte-nx3u8i"></div> <div class="chromatic-layer cyan svelte-nx3u8i"></div>',1),SP=ht('<div class="noise-overlay svelte-nx3u8i"></div>'),wP=ht('<div class="glitch-bar svelte-nx3u8i"></div>'),TP=ht('<div class="glitch-bars svelte-nx3u8i"></div>'),EP=ht('<div class="scanlines svelte-nx3u8i"></div>'),AP=ht('<div class="dig-fog svelte-nx3u8i"><div class="fog-layer fog-1 svelte-nx3u8i"></div> <div class="fog-layer fog-2 svelte-nx3u8i"></div> <div class="fog-layer fog-3 svelte-nx3u8i"></div></div>'),CP=ht('<div class="vignette-intense svelte-nx3u8i"></div>'),RP=ht("<div><!> <!> <!> <!> <!> <!></div>");function IP(r,e){Hn(e,!1);const t=Fe(),n=Fe(),i=Fe(),s=Fe(),o=Fe(),a=Fe(),c=Fe();let l=et(e,"scrollProgress",8,0);const u=.08,h=.3;let f=Fe([]),d;function m(k){const V=[];for(let W=0;W<k;W++)V.push({top:Math.random()*100,height:Math.random()*3+.5,offset:(Math.random()-.5)*30,opacity:Math.random()*.7+.3});return V}function v(){w(i)&&Math.random()>.7&&de(f,m(w(a))),d=requestAnimationFrame(v)}$i(()=>(v(),()=>{d&&cancelAnimationFrame(d)})),dt(()=>Xt(l()),()=>{de(t,Math.min(1,Math.max(0,(l()-u)/(h-u))))}),dt(()=>w(t),()=>{de(n,Math.sin(w(t)*Math.PI))}),dt(()=>Xt(l()),()=>{de(i,l()>=u&&l()<=h)}),dt(()=>w(n),()=>{de(s,w(n)*25)}),dt(()=>w(n),()=>{de(o,w(n)*.5)}),dt(()=>w(n),()=>{de(a,Math.floor(w(n)*10))}),dt(()=>w(n),()=>{de(c,w(n)*.85)}),dt(()=>(w(i),w(a)),()=>{w(i)&&de(f,m(w(a)))}),Bs(),Yi();var g=RP();let p;var x=At(g);{var _=k=>{var V=MP(),W=yt(V),z=We(W,2);Sn(()=>{ai(W,`transform: translate(${w(s)??""}px, ${w(s)*.5}px); opacity: ${w(n)*.5};`),ai(z,`transform: translate(${-w(s)}px, ${-w(s)*.5}px); opacity: ${w(n)*.5};`)}),He(k,V)};Ct(x,k=>{w(i)&&k(_)})}var y=We(x,2);{var S=k=>{var V=SP();Sn(()=>ai(V,`opacity: ${w(o)??""};`)),He(k,V)};Ct(y,k=>{w(i)&&k(S)})}var E=We(y,2);{var A=k=>{var V=TP();Cl(V,5,()=>w(f),Al,(W,z)=>{var K=wP();Sn(()=>ai(K,`
            top: ${w(z),st(()=>w(z).top)??""}%;
            height: ${w(z),st(()=>w(z).height)??""}%;
            transform: translateX(${w(z),st(()=>w(z).offset)??""}px);
            opacity: ${w(z),w(n),st(()=>w(z).opacity*w(n))??""};
          `)),He(W,K)}),He(k,V)};Ct(E,k=>{w(i)&&k(A)})}var I=We(E,2);{var b=k=>{var V=EP();Sn(()=>ai(V,`opacity: ${w(n)*.3};`)),He(k,V)};Ct(I,k=>{w(i)&&k(b)})}var T=We(I,2);{var D=k=>{var V=AP();Sn(()=>ai(V,`opacity: ${w(c)??""};`)),He(k,V)};Ct(T,k=>{w(i)&&k(D)})}var F=We(T,2);{var O=k=>{var V=CP();Sn(()=>ai(V,`opacity: ${w(n)*.6};`)),He(k,V)};Ct(F,k=>{w(i)&&k(O)})}Sn(()=>p=Ur(g,1,"transition-effects svelte-nx3u8i",null,p,{active:w(i)})),He(r,g),Wn()}var PP=ht('<div class="static-fallback svelte-1jioskb" role="img" aria-label="IGLOO - An artistic representation of ice and stone"><div class="fallback-content svelte-1jioskb"><div class="bg-gradient svelte-1jioskb"></div> <div class="ui-overlay svelte-1jioskb"><div class="flex justify-between items-start w-full"><div><h1 class="logo svelte-1jioskb">IGLOO</h1> <p class="label mt-2 svelte-1jioskb">// Copyright © 2024</p> <p class="label svelte-1jioskb">Igloo, Inc.</p></div> <div class="text-right max-w-xs"><p class="label svelte-1jioskb">////// Manifesto</p> <p class="body mt-2 svelte-1jioskb">Our mission is to create the largest onchain community, driving the consumer crypto revolution.</p></div></div></div> <div class="center-content svelte-1jioskb"><div class="igloo-silhouette svelte-1jioskb"><svg viewBox="0 0 200 150" aria-hidden="true"><ellipse cx="100" cy="100" rx="60" ry="40" fill="none" stroke="rgba(168, 173, 184, 0.3)" stroke-width="1"></ellipse><path d="M 40 100 Q 40 50, 100 50 Q 160 50, 160 100" fill="none" stroke="rgba(168, 173, 184, 0.4)" stroke-width="1.5"></path><rect x="85" y="75" width="30" height="25" rx="15" ry="12" fill="rgba(10, 12, 16, 0.8)" stroke="rgba(168, 173, 184, 0.2)" stroke-width="1"></rect></svg></div> <div class="notice svelte-1jioskb"><p class="label svelte-1jioskb">[ WebGL Unavailable ]</p> <p class="body mt-2 svelte-1jioskb">Enable WebGL or disable reduced motion for the full experience.</p></div></div> <div class="bottom-ui svelte-1jioskb"><p class="label svelte-1jioskb">// Static View</p></div></div></div>');function LP(r){var e=PP();He(r,e)}var DP=ht('<div class="canvas-container webgl-canvas"><!></div>'),NP=I0('<path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>',1),UP=I0('<path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',1),OP=ht("<div></div>"),FP=ht('<button class="stone-click-area svelte-1n46o8q"></button>'),BP=ht('<div class="ui-overlay"><div class="flex justify-between items-start"><div class="ui-element"><h1 class="logo mb-3">IGLOO</h1> <p class="text-label mb-1">// Copyright © 2024</p> <p class="text-label">Igloo, Inc.<br/> All Rights Reserved.</p></div> <div class="ui-element text-right max-w-xs"><p class="text-label mb-3">////// Manifesto</p> <p class="text-body">Our mission is to create the largest onchain community, driving the consumer crypto revolution.</p></div></div> <div class="flex justify-between items-end"><div class="ui-element"><p class="scroll-prompt mb-4">Scroll down to<br/>discover.</p> <button class="sound-toggle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><!></svg> <span> </span></button></div> <div class="ui-element section-indicator svelte-1n46o8q"><span class="text-label"> </span></div> <div class="ui-element flex gap-1.5"></div></div></div> <!>',1),zP=ht('<main><!> <!> <!> <!> <!> <div class="scroll-container svelte-1n46o8q"><section class="section svelte-1n46o8q" id="hero" style="height: 150vh;"></section> <section class="section svelte-1n46o8q" id="stone-1" style="height: 100vh;"></section> <section class="section svelte-1n46o8q" id="stone-2" style="height: 100vh;"></section> <section class="section svelte-1n46o8q" id="stone-3" style="height: 100vh;"></section> <section class="section svelte-1n46o8q" id="stone-4" style="height: 100vh;"></section></div> <!></main>');function kP(r,e){Hn(e,!1);const t=Fe(),n=Fe(),i=Fe(),s=Fe();let o=Fe(0),a=Fe(0),c=Fe(!1),l=Fe(!1),u=Fe(!1),h=Fe(null),f=Fe(0),d=Fe(!0),m=Fe(!1),v=Fe(!1),g=Fe(!1);const p=["Surface","Specimen 01","Specimen 02","Specimen 03","Specimen 04"],x=[{id:"ancient-granite",name:"Ancient Granite",description:"Formed over 3 billion years ago in the primordial fires of Earth's crust. Each crystal tells a story of pressure, heat, and transformation.",color:"#6a7080",roughness:.8,metalness:.1,displacement:.15,geometry:"dodecahedron"},{id:"obsidian-core",name:"Obsidian Core",description:"Volcanic glass born from rapid cooling. Its edges hold memories of eruptions past, smooth as time itself.",color:"#2a2c32",roughness:.1,metalness:.9,displacement:.05,geometry:"icosahedron"},{id:"frost-quartz",name:"Frost Quartz",description:"Crystallized from ancient glacial waters. Its pale surface captures and refracts the cold light of forgotten winters.",color:"#d8dadf",roughness:.4,metalness:.2,displacement:.08,geometry:"octahedron"},{id:"shadow-stone",name:"Shadow Stone",description:"Found in the deepest caves beneath the permafrost. It absorbs light and whispers secrets of the underground.",color:"#3a3f4a",roughness:.6,metalness:.4,displacement:.12,geometry:"tetrahedron"}];function _(){try{const Y=document.createElement("canvas");return!!(Y.getContext("webgl")||Y.getContext("experimental-webgl"))}catch{return!1}}function y(){de(g,!w(g))}function S(Y){w(u)||(de(h,Y),de(f,x.findIndex(J=>J.id===Y.id)),de(c,!0))}function E(Y){const{direction:J}=Y.detail;J==="in"?de(l,!0):J==="out"&&(de(h,null),de(f,0),de(u,!1))}function A(){de(u,!0),de(l,!1),setTimeout(()=>{de(c,!1)},300)}function I(){const Y=document.querySelector(".scroll-container");if(!Y)return;const J=window.scrollY,Me=Y.scrollHeight-window.innerHeight;de(o,J/Me),w(o)<.3?de(a,0):w(o)<.5?de(a,1):w(o)<.7?de(a,2):w(o)<.85?de(a,3):de(a,4)}$i(()=>(de(v,!0),de(m,window.matchMedia("(prefers-reduced-motion: reduce)").matches),de(d,_()),window.addEventListener("scroll",I),()=>window.removeEventListener("scroll",I))),dt(()=>(w(c),w(u)),()=>{typeof document<"u"&&(w(c)?document.body.style.overflow="hidden":w(u)||(document.body.style.overflow=""))}),dt(()=>w(a),()=>{de(t,Math.max(0,w(a)-1))}),dt(()=>w(t),()=>{de(n,x[w(t)])}),dt(()=>w(a),()=>{de(i,w(a)>0)}),dt(()=>w(a),()=>{de(s,w(a)>=1)}),Bs(),Yi();var b=zP(),T=At(b);{var D=Y=>{LP(Y)};Ct(T,Y=>{(!w(d)||w(m))&&Y(D)})}var F=We(T,2);{var O=Y=>{var J=DP(),Me=At(J);dP(Me,{get scrollProgress(){return w(o)},get currentSection(){return w(a)},get stones(){return x},get modalOpen(){return w(c)},$$events:{stoneClick:Re=>S(Re.detail),zoomComplete:E}}),He(Y,J)};Ct(F,Y=>{w(v)&&w(d)&&!w(m)&&Y(O)})}var k=We(F,2);bP(k,{get scrollProgress(){return w(o)}});var V=We(k,2);IP(V,{get scrollProgress(){return w(o)}});var W=We(V,2);{var z=Y=>{var J=BP(),Me=yt(J),Re=We(At(Me),2),tt=At(Re),Je=We(At(tt),2),j=At(Je),re=At(j);{var Ee=L=>{var Ue=NP();He(L,Ue)},ze=L=>{var Ue=UP();He(L,Ue)};Ct(re,L=>{w(g)?L(Ee):L(ze,!1)})}var ye=We(j,2),it=At(ye),ct=We(tt,2),$e=At(ct),ne=At($e),le=We(ct,2);Cl(le,4,()=>Array(5),Al,(L,Ue,Te)=>{var Ie=OP();let oe;Sn(()=>oe=Ur(Ie,1,"progress-dot svelte-1n46o8q",null,oe,{active:w(a)>=Te,"stone-dot":Te>=1})),He(L,Ie)});var se=We(Me,2);{var _e=L=>{var Ue=FP();Sn(()=>Rl(Ue,"aria-label",`Click to explore ${w(n),st(()=>w(n)?.name)??""}`)),Ta("click",Ue,()=>S(w(n))),He(L,Ue)};Ct(se,L=>{w(s)&&!w(c)&&L(_e)})}Sn(()=>{Rl(Je,"aria-label",w(g)?"Mute sound":"Enable sound"),hs(it,`Sound: ${w(g)?"On":"Off"}`),hs(ne,`// ${w(a),st(()=>p[w(a)]||"Surface")??""}`)}),Ta("click",Je,y),He(Y,J)};Ct(W,Y=>{Y(z)})}var K=We(W,4);{var ee=Y=>{xP(Y,{get stone(){return w(h)},get stoneIndex(){return w(f)},get showContent(){return w(l)},$$events:{close:A}})};Ct(K,Y=>{(w(c)||w(u))&&w(h)&&Y(ee)})}He(r,b),Wn()}fy(kP,{target:document.getElementById("app")});
