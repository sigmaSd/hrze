(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=i(l);fetch(l.href,s)}})();function H(){}function Re(e){return e()}function Pe(){return Object.create(null)}function I(e){e.forEach(Re)}function je(e){return typeof e=="function"}function He(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ie(e){return Object.keys(e).length===0}function n(e,t){e.appendChild(t)}function Be(e,t,i){e.insertBefore(t,i||null)}function qe(e){e.parentNode&&e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function c(e){return document.createTextNode(e)}function m(){return c(" ")}function Me(e,t,i,r){return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i,r)}function f(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function Te(e){return Array.from(e.childNodes)}function E(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function V(e,t){e.value=t??""}let ce;function D(e){ce=e}const S=[],Se=[];let x=[];const xe=[],Ze=Promise.resolve();let oe=!1;function Fe(){oe||(oe=!0,Ze.then(De))}function ae(e){x.push(e)}const se=new Set;let M=0;function De(){if(M!==0)return;const e=ce;do{try{for(;M<S.length;){const t=S[M];M++,D(t),Ke(t.$$)}}catch(t){throw S.length=0,M=0,t}for(D(null),S.length=0,M=0;Se.length;)Se.pop()();for(let t=0;t<x.length;t+=1){const i=x[t];se.has(i)||(se.add(i),i())}x.length=0}while(S.length);for(;xe.length;)xe.pop()();oe=!1,se.clear(),D(e)}function Ke(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ae)}}function Ge(e){const t=[],i=[];x.forEach(r=>e.indexOf(r)===-1?t.push(r):i.push(r)),i.forEach(r=>r()),x=t}const Je=new Set;function Qe(e,t){e&&e.i&&(Je.delete(e),e.i(t))}const Ue=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Ue];function Ve(e,t,i,r){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,i),r||ae(()=>{const d=e.$$.on_mount.map(Re).filter(je);e.$$.on_destroy?e.$$.on_destroy.push(...d):I(d),e.$$.on_mount=[]}),s.forEach(ae)}function We(e,t){const i=e.$$;i.fragment!==null&&(Ge(i.after_update),I(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function Xe(e,t){e.$$.dirty[0]===-1&&(S.push(e),Fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ye(e,t,i,r,l,s,d,h=[-1]){const g=ce;D(e);const o=e.$$={fragment:null,ctx:[],props:s,update:H,not_equal:l,bound:Pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:Pe(),dirty:h,skip_bound:!1,root:t.target||g.$$.root};d&&d(o.root);let y=!1;if(o.ctx=i?i(e,t.props||{},(p,b,...w)=>{const v=w.length?w[0]:b;return o.ctx&&l(o.ctx[p],o.ctx[p]=v)&&(!o.skip_bound&&o.bound[p]&&o.bound[p](v),y&&Xe(e,p)),b}):[],o.update(),y=!0,I(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const p=Te(t.target);o.fragment&&o.fragment.l(p),p.forEach(qe)}else o.fragment&&o.fragment.c();t.intro&&Qe(e.$$.fragment),Ve(e,t.target,t.anchor,t.customElement),De()}D(g)}class et{$destroy(){We(this,1),this.$destroy=H}$on(t,i){if(!je(i))return H;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(i),()=>{const l=r.indexOf(i);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!Ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function tt({weight:e,isoniazid_recommend_dose:t}){const i=nt(e),r=it(e),l=lt(e),s=150,d=400,h=275,g=t/75,o=d*g,y=s*g,p=h*g,b=300,w=500,v=400,B=i-y,a=Math.ceil(B/b),$=y+a*b,T=r-o,z=Math.ceil(T/w),R=o+z*w,Z=l-p,j=Math.ceil(Z/v),q=p+j*v;return{hrze_number:g,rifampicin_number:a,rifampicin_final_dose:$,pyrazinamide_number:z,pyrazinamide_final_dose:R,ethambutol_number:j,ethambutol_final_dose:q}}function nt(e){return 10*e}function it(e){return 25*e}function lt(e){return 20*e}function rt(e){let t,i,r,l,s,d,h,g,o,y,p,b,w,v,B,a,$,T,z=e[2].hrze_number+"",R,Z,j,q,ue,O,fe,F=e[2].rifampicin_number+"",W,de,_e,N,me,K=e[2].rifampicin_final_dose+"",X,pe,he,Y,be,A,ge,G=e[2].pyrazinamide_number+"",ee,ke,ye,C,ve,J=e[2].pyrazinamide_final_dose+"",te,we,$e,ne,ze,L,Ee,Q=e[2].ethambutol_number+"",ie,Oe,Ne,P,Ae,U=e[2].ethambutol_final_dose+"",le,Ce,re,Le;return{c(){t=u("main"),i=u("h1"),i.textContent="HRZE",r=m(),l=u("div"),s=u("p"),s.textContent="poids (kg):",d=m(),h=u("input"),g=m(),o=u("div"),y=u("p"),y.textContent="dose recomondé INH (mg):",p=m(),b=u("input"),w=m(),v=u("h2"),v.textContent="Resultat:",B=m(),a=u("ul"),$=u("li"),T=c("HRZE: "),R=c(z),Z=c(" cp"),j=m(),q=u("br"),ue=m(),O=u("li"),fe=c("Rifampicine: "),W=c(F),de=c(" cp"),_e=m(),N=u("li"),me=c("Dose totale de Rifampicine : "),X=c(K),pe=c(" mg"),he=m(),Y=u("br"),be=m(),A=u("li"),ge=c("Pyrazinamide: "),ee=c(G),ke=c(" cp"),ye=m(),C=u("li"),ve=c("Dose totale de Pyrazinamide : "),te=c(J),we=c(" mg"),$e=m(),ne=u("br"),ze=m(),L=u("li"),Ee=c("Ethambutol: "),ie=c(Q),Oe=c(" cp"),Ne=m(),P=u("li"),Ae=c("Dose totale de Ethambutol : "),le=c(U),Ce=c(" mg"),f(i,"class","svelte-1kkf1iw"),f(s,"class","svelte-1kkf1iw"),f(h,"class","svelte-1kkf1iw"),f(l,"class","svelte-1kkf1iw"),f(y,"class","svelte-1kkf1iw"),f(b,"class","svelte-1kkf1iw"),f(o,"class","svelte-1kkf1iw"),f(v,"class","svelte-1kkf1iw"),f($,"class","svelte-1kkf1iw"),f(q,"class","svelte-1kkf1iw"),f(O,"class","svelte-1kkf1iw"),f(N,"class","svelte-1kkf1iw"),f(Y,"class","svelte-1kkf1iw"),f(A,"class","svelte-1kkf1iw"),f(C,"class","svelte-1kkf1iw"),f(ne,"class","svelte-1kkf1iw"),f(L,"class","svelte-1kkf1iw"),f(P,"class","svelte-1kkf1iw"),f(a,"class","svelte-1kkf1iw"),f(t,"class","svelte-1kkf1iw")},m(_,k){Be(_,t,k),n(t,i),n(t,r),n(t,l),n(l,s),n(l,d),n(l,h),V(h,e[0]),n(t,g),n(t,o),n(o,y),n(o,p),n(o,b),V(b,e[1]),n(t,w),n(t,v),n(t,B),n(t,a),n(a,$),n($,T),n($,R),n($,Z),n(a,j),n(a,q),n(a,ue),n(a,O),n(O,fe),n(O,W),n(O,de),n(a,_e),n(a,N),n(N,me),n(N,X),n(N,pe),n(a,he),n(a,Y),n(a,be),n(a,A),n(A,ge),n(A,ee),n(A,ke),n(a,ye),n(a,C),n(C,ve),n(C,te),n(C,we),n(a,$e),n(a,ne),n(a,ze),n(a,L),n(L,Ee),n(L,ie),n(L,Oe),n(a,Ne),n(a,P),n(P,Ae),n(P,le),n(P,Ce),re||(Le=[Me(h,"input",e[3]),Me(b,"input",e[4])],re=!0)},p(_,[k]){k&1&&h.value!==_[0]&&V(h,_[0]),k&2&&b.value!==_[1]&&V(b,_[1]),k&4&&z!==(z=_[2].hrze_number+"")&&E(R,z),k&4&&F!==(F=_[2].rifampicin_number+"")&&E(W,F),k&4&&K!==(K=_[2].rifampicin_final_dose+"")&&E(X,K),k&4&&G!==(G=_[2].pyrazinamide_number+"")&&E(ee,G),k&4&&J!==(J=_[2].pyrazinamide_final_dose+"")&&E(te,J),k&4&&Q!==(Q=_[2].ethambutol_number+"")&&E(ie,Q),k&4&&U!==(U=_[2].ethambutol_final_dose+"")&&E(le,U)},i:H,o:H,d(_){_&&qe(t),re=!1,I(Le)}}}function st(e,t,i){let r,l=70,s=150;function d(){l=this.value,i(0,l)}function h(){s=this.value,i(1,s)}return e.$$.update=()=>{e.$$.dirty&3&&i(2,r=tt({weight:l,isoniazid_recommend_dose:s}))},[l,s,r,d,h]}class ot extends et{constructor(t){super(),Ye(this,t,st,rt,He,{})}}new ot({target:document.getElementById("app")});
