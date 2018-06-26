/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='ionicons']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,e,n,o){"use strict";function i(t){return{t:t[0],e:t[1],n:!!t[2],o:!!t[3],i:!!t[4]}}function s(t,e){if(T(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||3===t)return"false"!==e&&(""===e||!!e);if(t===Number||4===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function r(t,e,n,o){const i=t.s.get(e);i&&((o=i["s-ld"]||i.$activeLoading)&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.s.delete(e))}function c(t,e,n){let o,i,s=null,r=!1,c=!1;for(var l=arguments.length;l-- >2;)q.push(arguments[l]);for(;q.length>0;)if((n=q.pop())&&void 0!==n.pop)for(l=n.length;l--;)q.push(n[l]);else"boolean"==typeof n&&(n=null),(c="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(c=!1)),c&&r?s[s.length-1].r+=n:null===s?s=[c?{r:n}:n]:s.push(c?{r:n}:n),r=c;if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(l in e.class)e.class[l]&&q.push(l);e.class=q.join(" "),q.length=0}null!=e.key&&(o=e.key),null!=e.name&&(i=e.name)}return"function"==typeof t?t(Object.assign({},e,{children:s}),D):{c:t,l:s,r:void 0,f:e,u:o,a:i,d:void 0,p:!1}}function l(t,e,n,o){e.split(" ").forEach(e=>{t[e]=!0,n&&(t[`${e}-${n}`]=!0,o&&(t[`${e}-${n}-${o}`]=t[`${e}-${o}`]=!0))})}function f(t,e){t.m.has(e)||(t.m.set(e,!0),t.b?t.queue.write(()=>u(t,e)):t.queue.tick(()=>u(t,e)))}function u(t,e,n,o,i,s){if(t.m.delete(e),!t.y.has(e)){if(o=t.v.get(e),n=!o){if((i=t.s.get(e))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{u(t,e)}),void(i.$onRender=i["s-rc"]);o=function r(t,e,n,o,i,s,c){try{(function l(t,e,n,o,i,s,r){for(r in t.w.set(o,n),t.g.has(n)||t.g.set(n,{}),(s=Object.assign({color:{type:String}},e.properties)).mode={type:String},s)d(t,s[r],n,o,r,i)})(t,i=t.M(e).k,e,o=new i,n),function f(t,e,n){if(e){const o=t.w.get(n);e.forEach(e=>{n[e.method]={emit:n=>{t.j(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}}})}}(t,i.events,o);try{if(s=t.O.get(e)){for(c=0;c<s.length;c+=2)o[s[c]](s[c+1]);t.O.delete(e)}}catch(n){t.C(n,2,e)}}catch(n){o={},t.C(n,7,e,!0)}return t.v.set(e,o),o}(t,e,t.W.get(e));try{o.componentWillLoad&&(s=o.componentWillLoad())}catch(n){t.C(n,3,e)}}else try{o.componentWillUpdate&&(s=o.componentWillUpdate())}catch(n){t.C(n,5,e)}s&&s.then?s.then(()=>a(t,e,o,n)):a(t,e,o,n)}}function a(t,e,n,o){(function i(t,e,n,o){try{const i=e.k.host,s=e.k.encapsulation,r="shadow"===s&&t.N.x;let f,u;if(f=function i(t,e,n){return t&&Object.keys(t).forEach(o=>{t[o].reflectToAttr&&((n=n||{})[o]=e[o])}),n}(e.k.properties,o),u=r?n.shadowRoot:n,!n["s-rn"]){t.A(t,t.N,e,n);const i=n["s-sc"];i&&(t.N.P(n,function s(t){return`${t}-host`}(i),""),o.render||t.N.P(n,function r(t){return`${t}-slot`}(i),""))}if(o.render||o.hostData||i||f){t.T=!0;const a=o.render&&o.render();let d;if((d=o.hostData&&o.hostData())&&e.S){const t=Object.keys(d).reduce((t,n)=>e.S[n]?t.concat(n):e.S[R(n)]?t.concat(R(n)):t,[]);if(t.length>0)throw new Error("The following keys were attempted to be set with hostData() from the "+`${e.R} component: ${t.join(", ")}. `+"If you would like to modify these please set @Prop({ mutable: true, reflectToAttr: true}) on the @Prop() decorator.")}f&&(d=d?Object.assign(d,f):f),t.T=!1,i&&(d=function f(t,e,n){return t=t||{},Object.keys(e).forEach(o=>{"theme"===o?l(t.class=t.class||{},e[o],n.mode,n.color):"class"===o?l(t[o]=t[o]||{},e[o]):t[o]=e[o]}),t}(d,i,o));const p=t.L.get(n)||{};p.d=u;const m=c(null,d,a);m.p=!0,t.L.set(n,t.render(n,p,m,r,s))}t.q&&t.q.D(n),n["s-rn"]=!0,n.$onRender&&(n["s-rc"]=n.$onRender),n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.T=!1,t.C(e,8,n,!0)}})(t,t.M(e),e,n);try{o?e["s-init"]():(n.componentDidUpdate&&n.componentDidUpdate(),g(t.L.get(e)))}catch(n){t.C(n,6,e,!0)}}function d(t,e,n,o,i,r,c,l){if(e.type||e.state){const f=t.g.get(n);e.state||(!e.attr||void 0!==f[i]&&""!==f[i]||(c=r&&r.I)&&T(l=c[e.attr])&&(f[i]=s(e.type,l)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=s(e.type,n[i])),delete n[i])),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),e.watchCallbacks&&(f[I+i]=e.watchCallbacks.slice()),h(o,i,function f(e){return(e=t.g.get(t.w.get(this)))&&e[i]},function u(n,o){(o=t.w.get(this))&&(e.state||e.mutable)&&p(t,o,i,n)})}else if(e.elementRef)m(o,i,n);else if(e.method)m(n,i,o[i].bind(o));else if(e.context){const s=t.B(e.context);void 0!==s&&m(o,i,s.H&&s.H(n)||s)}else e.connect&&m(o,i,t.F(e.connect))}function p(t,e,n,o,i,s,r){(i=t.g.get(e))||t.g.set(e,i={});const c=i[n];if(o!==c&&(i[n]=o,s=t.v.get(e))){if(r=i[I+n])for(let t=0;t<r.length;t++)try{s[r[t]].call(s,o,c,n)}catch(t){}!t.T&&e["s-rn"]&&f(t,e)}}function m(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function h(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function b(t,e,n,o,i){const s=e!==(e=e.replace(/^xlink\:?/,"")),r=B[e]||o;r&&(!n||"false"===n)||i?s?t.removeAttributeNS(H,S(e)):t.removeAttribute(e):"function"!=typeof n&&(r&&(n=""),s?t.setAttributeNS(H,S(e),n):t.setAttribute(e,n))}function y(t,e,n,o,i,s,r,c,l,f){if("class"!==n||s)if("style"===n){for(c in o=o||N,i=i||N,o)i[c]||(e.style[c]="");for(c in i)i[c]!==o[c]&&(e.style[c]=i[c])}else"o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e?"list"!==n&&"type"!==n&&!s&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)?(f=t.M(e))&&f.S&&f.S[n]?(v(e,n,i),r&&f.S[n].U&&b(e,f.S[n].z,i,3===f.S[n].Q,null==i)):"ref"!==n&&(v(e,n,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(n)):null!=i&&"key"!==n?b(e,n,i):(s||t.N.Z(e,n)&&(null==i||!1===i))&&t.N.G(e,n):(n=S(n)in e?S(n.substring(2)):S(n[2])+n.substring(3),i?i!==o&&t.N.J(e,n,i):t.N.K(e,n));else if(o!==i){const t=null==o||""===o?A:o.trim().split(/\s+/),n=null==i||""===i?A:i.trim().split(/\s+/);let s=null==e.className||""===e.className?A:e.className.trim().split(/\s+/);for(c=0,l=t.length;c<l;c++)-1===n.indexOf(t[c])&&(s=s.filter(e=>e!==t[c]));for(c=0,l=n.length;c<l;c++)-1===t.indexOf(n[c])&&(s=[...s,n[c]]);e.className=s.join(" ")}}function v(t,e,n){try{t[e]=n}catch(t){}}function $(t,e,n,o,i){const s=11===n.d.nodeType&&n.d.host?n.d.host:n.d,r=e&&e.f||N,c=n.f||N;for(i in r)c&&null!=c[i]||null==r[i]||y(t,s,i,r[i],void 0,o,n.p);for(i in c)i in r&&c[i]===("value"===i||"checked"===i?s[i]:r[i])||y(t,s,i,r[i],c[i],o,n.p)}function w(t,e){function n(i,s,r,c,l,f,p,y,v){if(y=s.l[r],u||(m=!0,"slot"===y.c&&(d&&e.P(c,d+"-slot",""),y.l?y.V=!0:y.X=!0)),T(y.r))y.d=e.Y(y.r);else if(y.X)y.d=e.Y("");else{if(f=y.d=F||"svg"===y.c?e._("http://www.w3.org/2000/svg",y.c):e.tt(y.V?"slot-fb":y.c),F="svg"===y.c||"foreignObject"!==y.c&&F,$(t,null,y,F),T(d)&&f["s-si"]!==d&&e.P(f,f["s-si"]=d,""),T(a)&&e.P(f,x,a+"."+r+(function t(e){if(e)for(var n=0;n<e.length;n++)if("slot"!==e[n].c||t(e[n].l))return!0;return!1}(y.l)?"":".")),y.l)for(l=0;l<y.l.length;++l)(p=n(i,y,l,f))&&(T(a)&&3===p.nodeType&&!p["s-cr"]&&e.et(f,e.nt("s."+a+"."+l)),e.et(f,p),T(a)&&3===p.nodeType&&!p["s-cr"]&&(e.et(f,e.nt("/")),e.et(f,e.Y(" "))));"svg"===y.c&&(F=!1)}return y.d["s-hn"]=h,(y.V||y.X)&&(y.d["s-sr"]=!0,y.d["s-cr"]=b,y.d["s-sn"]=y.a||"",(v=i&&i.l&&i.l[r])&&v.c===y.c&&i.d&&o(i.d)),y.d}function o(n,i,s,r){t.ot=!0;const f=e.it(n);for(s=f.length-1;s>=0;s--)(r=f[s])["s-hn"]!==h&&r["s-ol"]&&(e.st(r),e.rt(l(r),r,c(r)),e.st(r["s-ol"]),r["s-ol"]=null,m=!0),i&&o(r,i);t.ot=!1}function i(t,o,i,s,r,l,f,u){const a=t["s-cr"]||t.$defaultHolder;for((f=a&&e.ct(a)||t).shadowRoot&&e.lt(f)===h&&(f=f.shadowRoot);r<=l;++r)s[r]&&(u=T(s[r].r)?e.Y(s[r].r):n(null,i,r,t))&&(s[r].d=u,e.rt(f,u,c(o)))}function s(t,n,i,s){for(;n<=i;++n)T(t[n])&&(s=t[n].d,p=!0,s["s-ol"]?e.st(s["s-ol"]):o(s,!0),e.st(s))}function r(t,e){return t.c===e.c&&t.u===e.u&&("slot"!==t.c||t.a===e.a)}function c(t){return t&&t["s-ol"]?t["s-ol"]:t}function l(t){return e.ct(t["s-ol"]?t["s-ol"]:t)}const f=[];let u,a,d,p,m,h,b;return function y(v,w,g,k,M,j,O,C,x,E,N,A){if(h=e.lt(v),b=v["s-cr"],u=k,a="shadow"!==M?j:null,d=v["s-sc"],m=p=!1,function f(u,a,d){const p=a.d=u.d,m=u.l,h=a.l;F=a.d&&T(e.ft(a.d))&&void 0!==a.d.ownerSVGElement,F="svg"===a.c||"foreignObject"!==a.c&&F,T(a.r)?(d=p["s-cr"]||p.$defaultHolder)?e.ut(e.ct(d),a.r):u.r!==a.r&&e.ut(p,a.r):("slot"!==a.c&&$(t,u,a,F),T(m)&&T(h)?function b(t,u,a,d,p,m,h,y){let v=0,$=0,w=u.length-1,g=u[0],k=u[w],M=d.length-1,j=d[0],O=d[M];for(;v<=w&&$<=M;)if(null==g)g=u[++v];else if(null==k)k=u[--w];else if(null==j)j=d[++$];else if(null==O)O=d[--M];else if(r(g,j))f(g,j),g=u[++v],j=d[++$];else if(r(k,O))f(k,O),k=u[--w],O=d[--M];else if(r(g,O))"slot"!==g.c&&"slot"!==O.c||o(e.ct(g.d)),f(g,O),e.rt(t,g.d,e.at(k.d)),g=u[++v],O=d[--M];else if(r(k,j))"slot"!==g.c&&"slot"!==O.c||o(e.ct(k.d)),f(k,j),e.rt(t,k.d,g.d),k=u[--w],j=d[++$];else{for(p=null,m=v;m<=w;++m)if(u[m]&&T(u[m].u)&&u[m].u===j.u){p=m;break}T(p)?((y=u[p]).c!==j.c?h=n(u&&u[$],a,p,t):(f(y,j),u[p]=void 0,h=y.d),j=d[++$]):(h=n(u&&u[$],a,$,t),j=d[++$]),h&&e.rt(l(g.d),h,c(g.d))}v>w?i(t,null==d[M+1]?null:d[M+1].d,a,d,$,M):$>M&&s(u,v,w)}(p,m,a,h):T(h)?(T(u.r)&&e.ut(p,""),i(p,null,a,h,0,h.length-1)):T(m)&&s(m,0,m.length-1)),F&&"svg"===a.c&&(F=!1)}(w,g),T(a)&&e.P(w.d,W,a),m){for(function t(n,o,i,s,r,c,l,u,a,d){for(r=0,c=(o=e.it(n)).length;r<c;r++){if((i=o[r])["s-sr"]&&(s=i["s-cr"]))for(u=e.it(e.ct(s)),a=i["s-sn"],l=u.length-1;l>=0;l--)(s=u[l])["s-cn"]||s["s-nr"]||s["s-hn"]===i["s-hn"]||((3===(d=e.dt(s))||8===d)&&""===a||1===d&&null===e.pt(s,"slot")&&""===a||1===d&&e.pt(s,"slot")===a)&&(f.some(t=>t.mt===s)||(p=!0,s["s-sn"]=a,f.push({ht:i,mt:s})));1===e.dt(i)&&t(i)}}(g.d),O=0;O<f.length;O++)(C=f[O]).mt["s-ol"]||((x=e.Y(""))["s-nr"]=C.mt,e.rt(e.ct(C.mt),C.mt["s-ol"]=x,C.mt));for(t.ot=!0,O=0;O<f.length;O++){for(C=f[O],N=e.ct(C.ht),A=e.at(C.ht),x=C.mt["s-ol"];x=e.bt(x);)if((E=x["s-nr"])&&E&&E["s-sn"]===C.mt["s-sn"]&&N===e.ct(E)&&(E=e.at(E))&&E&&!E["s-nr"]){A=E;break}(!A&&N!==e.ct(C.mt)||e.at(C.mt)!==A)&&C.mt!==A&&(e.st(C.mt),e.rt(N,C.mt,A))}t.ot=!1}return p&&function t(n,o,i,s,r,c,l,f){for(s=0,r=(i=e.it(n)).length;s<r;s++)if(o=i[s],1===e.dt(o)){if(o["s-sr"])for(l=o["s-sn"],o.hidden=!1,c=0;c<r;c++)if(i[c]["s-hn"]!==o["s-hn"])if(f=e.dt(i[c]),""!==l){if(1===f&&l===e.pt(i[c],"slot")){o.hidden=!0;break}}else if(1===f||3===f&&""!==e.yt(i[c]).trim()){o.hidden=!0;break}t(o)}}(g.d),f.length=0,g}}function g(t,e){t&&(t.f&&t.f.ref&&t.f.ref(e?null:t.d),t.l&&t.l.forEach(t=>{g(t,e)}))}function k(t,e,n,o,i){const s=t.dt(e);let r,c,l,f;if(i&&1===s){(c=t.pt(e,x))&&(l=c.split("."))[0]===o&&((f={}).c=t.lt(f.d=e),n.l||(n.l=[]),n.l[l[1]]=f,n=f,i=""!==l[2]);for(let s=0;s<e.childNodes.length;s++)k(t,e.childNodes[s],n,o,i)}else 3===s&&(r=e.previousSibling)&&8===t.dt(r)&&"s"===(l=t.yt(r).split("."))[0]&&l[1]===o&&((f={r:t.yt(e)}).d=e,n.l||(n.l=[]),n.l[l[2]]=f)}function M(t,e){const n={nodeName:e},o=t.M(n);if(!o||!o.k)return Promise.resolve(null);const i=o.k,s=function r(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];let i;const s={name:n};if(o.state)i="states",s.vt=o.watchCallbacks||[];else if(o.elementRef)i="elements";else if(o.method)i="methods";else{i="props";let t="any";o.type&&(t=o.type,"function"==typeof o.type&&(t=o.type.name)),s.type=t.toLowerCase(),s.mutable=o.mutable||!1,s.connect=o.connect||"-",s.context=o.connect||"-",s.vt=o.watchCallbacks||[]}return e[i].push(s),e},{$t:[],wt:[],gt:[],kt:[]})}(i.properties||{}),c=(o.Mt||[]).map(t=>({jt:t.t,capture:t.i,disabled:t.n,passive:t.o,method:t.e})),l=i.events||[],f=Object.assign({Ot:i.is,Ct:o.Wt||"unknown",encapsulation:i.encapsulation||"none"},s,{events:{xt:l,listeners:c}});return Promise.resolve(f)}function j(t,e,n,o,i){return n.mode||(n.mode=t.Et(n)),n["s-cr"]||t.pt(n,W)||t.x&&1===e.encapsulation||(n["s-cr"]=t.Y(""),n["s-cr"]["s-cn"]=!0,t.rt(n,n["s-cr"],t.it(n)[0])),t.x||1!==e.encapsulation||"shadowRoot"in HTMLElement.prototype||(n.shadowRoot=n),1===e.encapsulation&&t.x&&!n.shadowRoot&&t.Nt(n,{mode:"open"}),o={At:n["s-id"],I:{}},e.S&&Object.keys(e.S).forEach(s=>{(i=e.S[s].z)&&(o.I[i]=t.pt(n,i))}),o}function O(t,e,n,o){n.connectedCallback=function(){(function n(t,e,o){t.Pt.has(o)||(t.Pt.set(o,!0),function i(t,e){const n=t.M(e);n.Mt&&n.Mt.forEach(n=>{n.n||t.N.J(e,n.t,function o(t,e,n,i){return o=>{(i=t.v.get(e))?i[n](o):((i=t.O.get(e)||[]).push(n,o),t.O.set(e,i))}}(t,e,n.e),n.i,n.o)})}(t,o)),t.y.delete(o),t.Tt.has(o)||(t.Tt.set(o,!0),o["s-id"]||(o["s-id"]=t.St()),function s(t,e,n){for(n=e;n=t.N.ft(n);)if(t.Rt(n)){t.Lt.has(e)||(t.s.set(e,n),n.$activeLoading&&(n["s-ld"]=n.$activeLoading),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.W.set(o,j(t.N,e,o)),t.qt(e,o)}))})(t,e,this)},n.attributeChangedCallback=function(t,n,o){(function i(t,e,n,o,r,c,l){if(t&&o!==r)for(c in t)if((l=t[c]).z&&S(l.z)===S(n)){e[c]=s(l.Q,r);break}})(e.S,this,t,n,o)},n.disconnectedCallback=function(){(function e(t,n){if(!t.ot&&function o(t,e){for(;e;){if(!t.ct(e))return 9!==t.dt(e);e=t.ct(e)}}(t.N,n)){t.y.set(n,!0),r(t,n),g(t.L.get(n),!0),t.N.K(n),t.Pt.delete(n);{const e=t.v.get(n);e&&e.componentDidUnload&&e.componentDidUnload()}t.q&&t.q.Dt(n),[t.s,t.It,t.W].forEach(t=>t.delete(n))}})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,s){if(!t.Lt.has(n)&&(i=t.v.get(n))&&!t.y.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){delete n["s-ld"],t.Lt.set(n,!0);try{g(t.L.get(n)),(s=t.It.get(n))&&(s.forEach(t=>t(n)),t.It.delete(n)),i.componentDidLoad&&i.componentDidLoad()}catch(e){t.C(e,4,n)}n.classList.add(o),r(t,n)}})(t,this,o)},n["s-hmr"]=function(n){(function o(t,e,n,i){e.k=null;const s=t.v.get(n);s&&(t.w.delete(s),t.v.delete(n)),t.W.set(n,j(t.N,e,n)),t.qt(e,n,i)})(t,e,this,n)},n.forceUpdate=function(){f(t,this)},function i(t,e,n){e&&Object.keys(e).forEach(o=>{const i=e[o],r=i.Bt;1===r||2===r?h(n,o,function e(){return(t.g.get(this)||{})[o]},function e(n){p(t,this,o,s(i.Q,n))}):6===r&&m(n,o,L)})}(t,e.S,n)}function C(t,e,n,o){return function(){const i=arguments;return function s(t,e,n){let o=e[n];return o||(o=t.Ht.querySelector(n)),o||(o=e[n]=t.tt(n),t.et(t.Ht,o)),o.componentOnReady()}(t,e,n).then(t=>t[o].apply(t,i))}}const W="data-ssrv",x="data-ssrc",E="$",N={},A=[],P={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},T=t=>null!=t,S=t=>t.toLowerCase(),R=t=>S(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),L=()=>{},q=[],D={getAttributes:t=>t.f,replaceAttributes:(t,e)=>t.f=e},I="wc-",B={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},H="http://www.w3.org/1999/xlink";let F=!1;(function U(t,e,n,o,s,r){function l(t,e){if(!n.customElements.get(t.R)){O(y,u[t.R]=t,e.prototype,r);{const n=e.observedAttributes=[];for(const e in t.S)t.S[e].z&&n.push(t.S[e].z)}n.customElements.define(t.R,e)}}const u={html:{}},a={},d=n[t]=n[t]||{},p=function m(t,e,n){t.Ft||(t.Ft=((t,e,n,o)=>t.addEventListener(e,n,o)),t.Ut=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={zt:n.documentElement,Qt:n.head,Ht:n.body,Zt:!1,dt:t=>t.nodeType,tt:t=>n.createElement(t),_:(t,e)=>n.createElementNS(t,e),Y:t=>n.createTextNode(t),nt:t=>n.createComment(t),rt:(t,e,n)=>t.insertBefore(e,n),st:t=>t.remove(),et:(t,e)=>t.appendChild(e),it:t=>t.childNodes,ct:t=>t.parentNode,at:t=>t.nextSibling,bt:t=>t.previousSibling,lt:t=>S(t.nodeName),yt:t=>t.textContent,ut:(t,e)=>t.textContent=e,pt:(t,e)=>t.getAttribute(e),P:(t,e,n)=>t.setAttribute(e,n),Gt:(t,e,n,o)=>t.setAttributeNS(e,n,o),G:(t,e)=>t.removeAttribute(e),Z:(t,e)=>t.hasAttribute(e),Et:e=>e.getAttribute("mode")||(t.Context||{}).mode,Jt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.ft(t):"body"===o?i.Ht:"document"===o?n:"window"===o?e:t,J:(e,n,s,r,c,l,f,u)=>{const a=n;let d=e,p=o.get(e);if(p&&p[a]&&p[a](),"string"==typeof l?d=i.Jt(e,l):"object"==typeof l?d=l:(u=n.split(":")).length>1&&(d=i.Jt(e,u[0]),n=u[1]),!d)return;let m=s;(u=n.split(".")).length>1&&(n=u[0],m=(t=>{t.keyCode===P[u[1]]&&s(t)})),f=i.Zt?{capture:!!r,passive:!!c}:!!r,t.Ft(d,n,m,f),p||o.set(e,p={}),p[a]=(()=>{d&&t.Ut(d,n,m,f),p[a]=null})},K:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},Nt:(t,e)=>t.attachShadow(e)};i.x=!!i.zt.attachShadow,e.location.search.indexOf("shadow=false")>0&&(i.x=!1),i.Kt=((t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o)));try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.Zt=!0}))}catch(t){}return i.ft=((t,e)=>(e=i.ct(t))&&11===i.dt(e)?e.host:e),i}(d,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=s,e.enableListener=((t,e,n,o,i)=>(function s(t,e,n,o,i,r){if(e){const s=t.w.get(e),c=t.M(s);if(c&&c.Mt)if(o){const o=c.Mt.find(t=>t.t===n);o&&t.N.J(s,n,t=>e[o.e](t),o.i,void 0===r?o.o:!!r,i)}else t.N.K(s,n)}})(y,t,e,n,o,i)),e.emit=((t,n,o)=>p.Kt(t,e.eventNameFn?e.eventNameFn(n):n,o)),d.h=c,d.Context=e;const h=n["s-defined"]=n.$definedCmps=n["s-defined"]||n.$definedCmps||{};let b=0;const y={N:p,Vt:l,j:e.emit,M:t=>u[p.lt(t)],B:t=>e[t],isClient:!0,Rt:t=>!(!h[p.lt(t)]&&!y.M(t)),St:()=>t+b++,C:(t,e,n)=>void 0,F:t=>(function e(t,n,o){return{create:C(t,n,o,"create"),componentOnReady:C(t,n,o,"componentOnReady")}})(p,a,t),queue:e.queue=function v(t,e){function n(t){for(let e=0;e<t.length;e++)try{t[e]()}catch(t){}t.length=0}function o(t,e){let n=0;for(;n<t.length&&s()<e;)try{t[n++]()}catch(t){}n===t.length?t.length=0:0!==n&&t.splice(0,n)}function i(){a++,n(l);const e=s()+7*Math.ceil(a*(1/22));o(f,e),o(u,e),f.length>0&&(u.push(...f),f.length=0),(d=l.length+f.length+u.length>0)?t.raf(i):a=0}const s=()=>e.performance.now(),r=Promise.resolve(),c=[],l=[],f=[],u=[];let a=0,d=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){c.push(t),1===c.length&&r.then(()=>n(c))},read(e){l.push(e),d||(d=!0,t.raf(i))},write(e){f.push(e),d||(d=!0,t.raf(i))}}}(d,n),qt:function $(t,e,n){if(t.k)f(y,e);else{const o="string"==typeof t.Wt?t.Wt:t.Wt[e.mode],i=2===t.encapsulation||1===t.encapsulation&&!p.x;let r=s+o+(i?".sc":"")+".js";n&&(r+="?s-hmr="+n),import(r).then(n=>{try{(function o(t,e,n){const o=n.style;if(o){const i=n.is+(n.styleMode||E);if(!e[i]){const s=t.tt("template");e[i]=s;{const e=["<style",` data-style-tag="${n.is}"`];t.P(s,"data-tmpl-style-tag",n.is),n.styleMode&&(e.push(` data-style-mode="${n.styleMode}"`),t.P(s,"data-tmpl-style-mode",n.styleMode)),("scoped"===n.encapsulation||"shadow"===n.encapsulation&&!t.x)&&(e.push(' data-style-scoped="true"'),t.P(s,"data-tmpl-style-scoped","true")),e.push(">"),e.push(o),e.push("</style>"),s.innerHTML=e.join("")}t.et(t.Qt,s)}}})(p,t,t.k=n[R(t.R)])}catch(e){t.k=class{}}f(y,e)}).catch(t=>void 0)}},s:new WeakMap,Xt:new WeakMap,Tt:new WeakMap,Pt:new WeakMap,Lt:new WeakMap,w:new WeakMap,W:new WeakMap,v:new WeakMap,y:new WeakMap,m:new WeakMap,It:new WeakMap,O:new WeakMap,L:new WeakMap,g:new WeakMap};y.render=w(y,p);const g=p.zt;g["s-ld"]=[],g["s-rn"]=!0,g["s-init"]=(()=>{y.Lt.set(g,d.loaded=y.b=!0),p.Kt(n,"appload",{detail:{namespace:t}})}),function j(t,e,n){const o=n.querySelectorAll(`[${W}]`),i=o.length;let s,r,c,l,f,u;if(i>0)for(t.Lt.set(n,!0),l=0;l<i;l++)for(s=o[l],r=e.pt(s,W),(c={}).c=e.lt(c.d=s),t.L.set(s,c),f=0,u=s.childNodes.length;f<u;f++)k(e,s.childNodes[f],c,r,!0)}(y,p,g),y.A=((t,e,n,o)=>{(function i(t,e,n,o){const i=n.k.styleMode,s=n.encapsulation;(2===s||1===s&&!t.N.x)&&(o["s-sc"]=function r(t,e){const n=`data-${t.R}`;return e&&e!==E?`${n}-${e}`:n}(n,i));const c=n.R+(i||E),l=n[c];if(l){let n=e.Qt;if(e.x)if(1===s)n=o.shadowRoot;else{let t=o;for(;t=e.ct(t);)if(t.host&&t.host.shadowRoot){n=t.host.shadowRoot;break}}let i=t.Xt.get(n);if(i||t.Xt.set(n,i={}),!i[c]){let t;{t=l.content.cloneNode(!0),i[c]=!0;const o=n.querySelectorAll("[data-styles]");e.rt(n,t,o.length&&o[o.length-1].nextSibling||n.firstChild)}}}})(t,e,n,o)}),function x(t,e,n,o){const i=n.Yt=n.Yt||{};return i._t=i._t||[],i._t.push(function s(t,e,n){return{namespace:e,te:t=>t&&t.tagName?Promise.all([M(n,t.tagName),function e(t,n){return Promise.resolve(t.v.get(n))}(n,t)]).then(t=>t[0]&&t[1]?{ee:t[0],ne:t[1]}:null):Promise.resolve(null),oe:t=>M(n,t),ie:()=>Promise.all(t.components.map(t=>M(n,t[0]))).then(t=>t.filter(t=>t))}}(t,e,o)),i.te||(i.te=(t=>Promise.all(i._t.map(e=>e.te(t))).then(t=>t.find(t=>!!t)))),i.ie||(i.ie=(()=>{const t=[];return i._t.forEach(e=>{t.push(e.ie())}),Promise.all(t).then(t=>{const e=[];return t.forEach(t=>{t.forEach(t=>{e.push(t)})}),e})})),i}(d,t,n,y),(d.components||[]).map(t=>{const e=function n(t,e,o){const s={R:t[0],S:{color:{z:"color"}}};s.Wt=t[1];const r=t[3];if(r)for(e=0;e<r.length;e++)o=r[e],s.S[o[0]]={Bt:o[1],U:!!o[2],z:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,Q:o[4]};return s.encapsulation=t[4],t[5]&&(s.Mt=t[5].map(i)),s}(t);return u[e.R]=e}).forEach(t=>l(t,class extends HTMLElement{})),function N(t,e,n,o,i,s){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.M(e);if(o)if(t.Lt.has(e))n(e);else{const o=t.It.get(e)||[];o.push(n),t.It.set(e,o)}return!!o}),i){for(s=i.length-1;s>=0;s--)e.componentOnReady(i[s][0],i[s][1])&&i.splice(s,1);for(s=0;s<o.length;s++)if(!n[o[s]].componentOnReady)return;for(s=0;s<i.length;s++)i[s][1](null);i.length=0}}(y,d,n,n["s-apps"],n["s-cr"]),d.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"ionicons","hydrated");