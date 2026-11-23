(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,38463,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(32181),s=e.i(75775),n=e.i(89664),i=e.i(8734),o=e.i(62368),l=e.i(56420);let c={name:"key-round",size:24,node:[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]};c.node;let d=(0,l.f)(c),f={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};f.node;let p=(0,l.f)(f),h={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};h.node;let g=(0,l.f)(h),m={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};m.node;let x=(0,l.f)(m);var u=e.i(84026),b=e.i(28623),v=e.i(63676),y=e.i(47401);let w={aurora:{style:"streak",colors:["#f4efe9","#e9c2b8","#c2433f","#2a1e2a","#22395e","#6f97c2","#e5edf4"],scale:.7,warp:1.4,angle:-.62,gloss:.18,veins:0},ember:{style:"marble",colors:["#07090c","#16252c","#3d5f68","#1a1416","#a3201a","#ef4a2b","#ff8a5c"],scale:.62,warp:3.2,angle:-.5,gloss:.55,veins:.6},dusk:{style:"marble",colors:["#120c18","#3e2850","#8f6c9c","#2b1a24","#b3502f","#eab08a","#fbe7d2"],scale:.75,warp:3.6,angle:.8,gloss:.5,veins:.5},glacier:{style:"streak",colors:["#f7f8fa","#d9e2ea","#9fb4c7","#e8edf2","#bccbd8","#ffffff"],scale:.7,warp:1.6,angle:.35,gloss:.25,veins:0},verdant:{style:"marble",colors:["#070b08","#173024","#4f7a5a","#141812","#a7843a","#e9cf87","#fbf3d6"],scale:.7,warp:3.4,angle:2.1,gloss:.5,veins:.5}};function k(e){let t=e>>>0;return()=>{let e=t=t+0x6d2b79f5>>>0;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/0x100000000}}function j(e){let t=0x811c9dc5;for(let a=0;a<e.length;a++)t=Math.imul(t^e.charCodeAt(a),0x1000193);return t>>>0}let N=new Map,S=[],C=!1;function q({art:e,seed:r,w:s,h:n,density:i,priority:o,className:l}){let c=a.useRef(null),[d,f]=a.useState(!1),p=JSON.stringify("string"==typeof e?w[e]:e),h=Math.round(s*i),g=Math.round(n*i);return a.useEffect(()=>{var e;let t,a,s=!0;return f(!1),(e=JSON.parse(p),t=JSON.stringify([e,r,h,g]),!(a=N.get(t))&&(a=new Promise(t=>{let a,s,n,i,l,c,d,f,p,m,x,u,b,v,y,w,j,N,q,M,A,z,E,L,F,I,O=S.length;for(;O>1&&S[O-1].priority>o;)O--;S.splice(O,0,{job:(a=Math.max(1,Math.round(h)),s=Math.max(1,Math.round(g)),i=(n=e.colors.length>=2?e.colors:["#111111","#eeeeee"]).map((e,t)=>{let a,r;return{t:t/(n.length-1),c:(3===(a=e.trim().replace(/^#/,"")).length&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),[(r=/^[0-9a-f]{6}$/i.test(a)?parseInt(a,16):8421504)>>16&255,r>>8&255,255&r])}}),l=e.scale??.7,c=e.warp??3,d=e.gloss??.4,f=e.veins??0,p="streak"===e.style,m=function(e){let t=k(e),a=new Uint8Array(512),r=new Float32Array(512),s=[];for(let e=0;e<256;e++)s.push(e);for(let e=255;e>0;e--){let a=Math.floor(t()*(e+1)),r=s[e];s[e]=s[a],s[a]=r}for(let e=0;e<512;e++)a[e]=s[255&e];for(let e=0;e<256;e++){let a=t()*Math.PI*2;r[2*e]=Math.cos(a),r[2*e+1]=Math.sin(a)}let n=(e,t)=>{let s=Math.floor(e),n=Math.floor(t),i=e-s,o=t-n,l=255&s,c=255&n,d=2*a[l+a[c]],f=2*a[l+1+a[c]],p=2*a[l+a[c+1]],h=2*a[l+1+a[c+1]],g=r[d]*i+r[d+1]*o,m=r[f]*(i-1)+r[f+1]*o,x=r[p]*i+r[p+1]*(o-1),u=r[h]*(i-1)+r[h+1]*(o-1),b=i*i*i*(i*(6*i-15)+10);return g+b*(m-g)+o*o*o*(o*(6*o-15)+10)*(x-g+b*(u-x-m+g))};return(e,t,a)=>{let r=0,s=.5;for(let i=0;i<a;i++){r+=s*n(e,t);let a=1.6*e+1.2*t+7.1;t=-1.2*e+1.6*t+3.3,e=a,s*=.5}return r}}(977*r+13),u=50*(x=k(r+1))(),b=50*x(),y=Math.cos(v=(e.angle??0)+(x()-.5)*.5),w=Math.sin(v),j=Math.min(a,s),M=new Float32Array((N=Math.ceil(a/2)+3)*(q=Math.ceil(s/2)+3)),A=new Float32Array(N*q),z=new Float32Array(a*s),E=new Float32Array(a*s),L=new Uint8ClampedArray(a*s*4),F=0,I=e=>{for(let t=0;t<N;t++){let r=((t-1)*2-a/2)/j,n=((e-1)*2-s/2)/j,i=(r*y-n*w)*l,o=(r*w+n*y)*l;p&&(i*=.14,o*=2.2);let d=m(i+=u,o+=b,3),f=m(i+5.2,o+1.3,3),h=m(i+c*d+1.7,o+c*f+9.2,3),g=m(i+c*d+8.3,o+c*f+2.8,3);M[e*N+t]=m(i+c*h,o+c*g,4),A[e*N+t]=Math.sqrt(d*d+f*f)}},{width:a,height:s,pixels:L,step:e=>{if(F>=q)return!0;let t=Math.min(q,F+Math.max(1,e));for(;F<t;)I(F++);return!(F<q)&&((()=>{let e=(e,t,a,r)=>(-e+9*t+9*a-r)/16,t=new Float32Array(a*q);for(let r=0;r<q;r++){let s=r*N;for(let n=0;n<a;n++){let i=(n>>1)+1;t[r*a+n]=1&n?e(M[s+i-1],M[s+i],M[s+i+1],M[s+i+2]):M[s+i]}}for(let r=0;r<s;r++){let s=(r>>1)+1;for(let n=0;n<a;n++){z[r*a+n]=1&r?e(t[(s-1)*a+n],t[s*a+n],t[(s+1)*a+n],t[(s+2)*a+n]):t[s*a+n];let i=(n>>1)+1,o=A[s*N+i],l=1&n?(o+A[s*N+i+1])/2:o,c=1&r?1&n?(A[(s+1)*N+i]+A[(s+1)*N+i+1])/2:A[(s+1)*N+i]:l;E[r*a+n]=(l+c)/2}}})(),(()=>{let e=[],t=Math.max(1,Math.floor(z.length/4096));for(let a=0;a<z.length;a+=t)e.push(z[a]);e.sort((e,t)=>e-t);let r=e[Math.floor(.02*e.length)],n=1/(e[Math.floor(.98*e.length)]-r||1),o=n*j*.012;for(let e=0;e<s;e++)for(let t=0;t<a;t++){let l=e*a+t,c=(z[l]-r)*n;c=c<0?0:c>1?1:c;let p=1;for(;p<i.length-1&&i[p].t<c;)p++;let h=i[p-1],g=i[p],m=(c-h.t)/(g.t-h.t||1);m=(m=m<0?0:m>1?1:m)*m*(3-2*m);let x=(z[t<a-1?l+1:l]-z[t>0?l-1:l])*o,u=(z[e<s-1?l+a:l]-z[e>0?l-a:l])*o,b=(-(-.55*x)- -.65*u+.52)/Math.sqrt(x*x+u*u+1),v=Math.pow(b>0?b:0,24)*d*255,y=(.82+.28*b)*(1+.035*Math.sin(150*c+24*E[l]))*(1-f*Math.max(0,1-14*Math.abs(E[l]-.42))*.6);L[4*l]=(h.c[0]+(g.c[0]-h.c[0])*m)*y+v,L[4*l+1]=(h.c[1]+(g.c[1]-h.c[1])*m)*y+v,L[4*l+2]=(h.c[2]+(g.c[2]-h.c[2])*m)*y+v,L[4*l+3]=255}})(),!0)}}),priority:o,done:t}),function(){if(C)return;C=!0;let e=()=>{let t=performance.now()+7;for(;S.length&&performance.now()<t;){let e=S[0];if(e.job.step(4)){S.shift();let t=document.createElement("canvas");t.width=e.job.width,t.height=e.job.height,t.getContext("2d")?.putImageData(new ImageData(e.job.pixels,t.width,t.height),0,0),e.done(t)}}S.length?requestAnimationFrame(e):C=!1};requestAnimationFrame(e)}()}),N.set(t,a)),a).then(e=>{let t=c.current;s&&t&&(t.width=e.width,t.height=e.height,t.getContext("2d")?.drawImage(e,0,0),f(!0))}),()=>{s=!1}},[p,r,h,g,o]),(0,t.jsx)("canvas",{ref:c,"aria-hidden":"true",className:l,"data-ready":d||void 0,style:{width:s,height:n,maxWidth:"none"}})}let M="M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z",A="M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 176A22 22 0 0 1 318 198L22 198A22 22 0 0 1 0 176Z",z=[{name:"Cover — final",meta:"PNG · 4.8 MB",art:"ember"},{name:"Moodboard",meta:"24 images",art:"dusk"},{name:"Brief.pdf",meta:"PDF · 1.2 MB"}];function E({label:e="My Files",meta:r,tone:s="light",art:n="aurora",seed:i=3,image:o,files:l=z,action:c="add",onAdd:d,onFilesChange:f,menu:p=[],labelPlacement:h="bottom-left",open:g,defaultOpen:m=!1,onOpenChange:x,onFileSelect:u,width:b=340,appear:v=!0,appearDelay:y=0,className:w,style:N}){let S=a.useId().replace(/:/g,""),C=a.useRef(null),F=a.useRef(null),I=a.useRef(null),O=a.useRef(null),T=a.useRef(null),[P,D]=a.useState(l),R=a.useRef(l.map((e,t)=>t)),$=a.useRef(l.length),[B,U]=a.useState(null),[V,_]=a.useState(0),[G,Y]=a.useState(m),K=g??G,H=a.useCallback(e=>{void 0===g&&Y(e),x?.(e)},[g,x]),[W,J]=a.useState(!1),[X,Z]=a.useState(!v),Q=b/340,ee=Math.min(1.5,Math.max(1,window.devicePixelRatio||1))*Q;a.useEffect(()=>{if(!v)return;let e=C.current;if(!e||"u"<typeof IntersectionObserver)return void Z(!0);let t=0,a=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a.disconnect(),t=window.setTimeout(()=>Z(!0),y))},{threshold:.25});return a.observe(e),()=>{a.disconnect(),window.clearTimeout(t)}},[v,y]),a.useEffect(()=>{let e=C.current;if(!e)return;let t=0,a=0,r=0,s=()=>{t=0,e.style.setProperty("--gf-px",a.toFixed(3)),e.style.setProperty("--gf-py",r.toFixed(3))},n=n=>{if("touch"===n.pointerType)return;let i=e.getBoundingClientRect();a=(n.clientX-i.left)/i.width*2-1,r=(n.clientY-i.top)/i.height*2-1,t||(t=requestAnimationFrame(s))},i=()=>{a=0,r=0,t||(t=requestAnimationFrame(s))};return e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),()=>{e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),cancelAnimationFrame(t)}},[]),a.useEffect(()=>{F.current?.toggleAttribute("inert",!K)},[K]),a.useEffect(()=>{if(!K&&!W)return;let e=e=>{"Escape"===e.key&&(W?(J(!1),O.current?.focus()):(H(!1),I.current?.focus()))},t=e=>{let t=e.target;!W||T.current?.contains(t)||O.current?.contains(t)||J(!1),!K||W||C.current?.contains(t)||H(!1)};return document.addEventListener("keydown",e),document.addEventListener("pointerdown",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("pointerdown",t)}},[K,W,H]),a.useEffect(()=>{W&&T.current?.querySelector("[role=menuitem]")?.focus()},[W]);let et=[{label:K?"Close folder":"Open folder",onSelect:()=>H(!K)},...p],ea=Math.max(0,P.length-4),er=P.slice(ea),es=P.length,en=r??es+(1===es?" item":" items");return(0,t.jsxs)("div",{ref:C,className:"gf-root"+(w?" "+w:""),"data-tone":s,"data-open":K||void 0,"data-entered":X||void 0,"data-place":h,style:{width:b,height:326*Q,...N},children:[(0,t.jsx)("style",{children:L}),(0,t.jsx)("div",{className:"gf-stage",style:{transform:"translateY("+54*Q+"px) scale("+Q+")"},children:(0,t.jsxs)("div",{className:"gf-tilt",children:[(0,t.jsx)("div",{className:"gf-shadow","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"gf-back",style:{clipPath:"path('"+M+"')"},"aria-hidden":"true",children:[o?(0,t.jsx)("img",{className:"gf-art",src:o,alt:"",width:364,height:296,draggable:!1}):"none"!==n?(0,t.jsx)(q,{className:"gf-art",art:n,seed:i,w:364,h:296,density:ee,priority:0}):null,(0,t.jsx)("div",{className:"gf-back-sheen"})]}),(0,t.jsx)("svg",{className:"gf-rim gf-back-rim",viewBox:"0 0 340 272","aria-hidden":"true",children:(0,t.jsx)("path",{d:M})}),(0,t.jsxs)("div",{className:"gf-front"+(V?" gf-front--bump":""),style:{clipPath:"path('"+A+"')"},children:[(0,t.jsx)("div",{className:"gf-tint","aria-hidden":"true"}),(0,t.jsx)("div",{className:"gf-spec","aria-hidden":"true"}),(0,t.jsxs)("svg",{className:"gf-rim gf-front-rim",viewBox:"0 0 340 198","aria-hidden":"true",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"gf-rim-"+S,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0.95"}),(0,t.jsx)("stop",{offset:"0.35",stopColor:"#fff",stopOpacity:"0.35"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0.12"})]})}),(0,t.jsx)("path",{d:A,stroke:"url(#gf-rim-"+S+")"})]}),(0,t.jsx)("button",{ref:I,type:"button",className:"gf-hit","aria-expanded":K,"aria-label":(K?"Close ":"Open ")+e+", "+es+(1===es?" item":" items"),onClick:()=>{J(!1),H(!K)}}),(0,t.jsxs)("div",{className:"gf-label",children:[(0,t.jsx)("span",{className:"gf-title",children:e}),(0,t.jsx)("span",{className:"gf-meta",children:en},en)]})]},V),(0,t.jsx)("div",{ref:F,className:"gf-files",role:"list","aria-label":e+" contents",children:er.map((e,a)=>{var r;let s=R.current[ea+a],n=(r=er.length)<=1?0:a/(r-1)*2-1,i=k(j(e.name)+s),o=!!(e.art||e.image),l=(0,t.jsxs)(t.Fragment,{children:[o?e.image?(0,t.jsx)("img",{className:"gf-sheet-art",src:e.image,alt:"",width:272,height:184,draggable:!1}):(0,t.jsx)(q,{className:"gf-sheet-art",art:e.art,seed:j(e.name)%997,w:272,h:184,density:Math.min(ee,1.25),priority:1}):(0,t.jsxs)("span",{className:"gf-lines","aria-hidden":"true",children:[(0,t.jsx)("i",{style:{width:"86%"}}),(0,t.jsx)("i",{style:{width:"92%"}}),(0,t.jsx)("i",{style:{width:"64%"}}),(0,t.jsx)("i",{style:{width:"88%"}}),(0,t.jsx)("i",{style:{width:"42%"}})]}),(0,t.jsxs)("span",{className:"gf-sheet-head",children:[(0,t.jsx)("span",{className:"gf-sheet-name",children:e.name}),e.meta?(0,t.jsx)("span",{className:"gf-sheet-meta",children:e.meta}):null]})]}),c={className:"gf-sheet"+(o?" gf-sheet--art":"")+(s===B?" gf-sheet--drop":""),style:{"--gf-slot":n,"--gf-depth":er.length-1-a,"--gf-jx":((i()-.5)*10).toFixed(2)+"px","--gf-jr":((i()-.5)*3.2).toFixed(2)+"deg",zIndex:a+1},onAnimationEnd:s===B?()=>U(null):void 0};return(0,t.jsx)("div",{role:"listitem",className:"gf-sheet-slot",children:e.href?(0,t.jsx)("a",{...c,href:e.href,onClick:()=>u?.(e,ea+a),children:l}):(0,t.jsx)("button",{...c,type:"button",onClick:()=>u?.(e,ea+a),children:l})},s)})}),"none"!==c?(0,t.jsx)("button",{ref:O,type:"button",className:"gf-key gf-key--"+c,"aria-label":"add"===c?"Add a file to "+e:"More options for "+e,"aria-haspopup":"more"===c?"menu":void 0,"aria-expanded":"more"===c?W:void 0,"aria-controls":"more"===c?"gf-menu-"+S:void 0,onClick:()=>{let e,t,a;return"add"===c?(e=d?.(P)||{name:"Untitled "+(P.length+1),meta:"Just now"},t=[...P,e],a=$.current++,void(R.current=[...R.current,a],D(t),U(a),_(e=>e+1),f?.(t))):J(e=>!e)},children:"add"===c?(0,t.jsx)("svg",{className:"gf-glyph gf-glyph--plus",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M12 4.5v15M4.5 12h15"})},V):(0,t.jsxs)("svg",{className:"gf-glyph gf-glyph--more",viewBox:"0 0 30 12","aria-hidden":"true",children:[(0,t.jsx)("rect",{x:"1",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"11",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"21",y:"1.5",width:"8",height:"9",rx:"3.4"})]})}):null,"more"===c?(0,t.jsx)("div",{ref:T,id:"gf-menu-"+S,role:"menu","aria-label":e+" options",className:"gf-menu","data-open":W||void 0,onKeyDown:e=>{let t=Array.from(T.current?.querySelectorAll("[role=menuitem]")??[]),a=t.indexOf(document.activeElement),r=a=>{e.preventDefault(),t[(a+t.length)%t.length]?.focus()};"ArrowDown"===e.key?r(a+1):"ArrowUp"===e.key?r(a-1):"Home"===e.key?r(0):"End"===e.key?r(t.length-1):"Tab"===e.key&&J(!1)},children:et.map((e,a)=>(0,t.jsx)("button",{type:"button",role:"menuitem",tabIndex:W?-1:void 0,disabled:!W,className:"gf-menu-item"+(e.danger?" gf-menu-item--danger":""),onClick:()=>{J(!1),O.current?.focus(),e.onSelect?.()},children:e.label},e.label+a))}):null]})})]})}let L=`
.gf-root {
  --gf-px: 0;
  --gf-py: 0;
  --gf-ease: cubic-bezier(.2, .8, .2, 1);
  --gf-spring: cubic-bezier(.34, 1.36, .5, 1);
  --gf-hinge: 0deg;
  --gf-lift: 42px;
  --gf-spread: 0px;
  --gf-fan: 0deg;
  --gf-stack: 15px;
  --gf-ink: #141416;
  --gf-ink-soft: rgba(20, 20, 22, .55);
  position: relative;
  display: inline-block;
  flex: none;
  vertical-align: top;
  font-family: ui-sans-serif, system-ui, -apple-system, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  isolation: isolate;
}
.gf-root[data-tone="dark"] { --gf-ink: #f5f5f7; --gf-ink-soft: rgba(245, 245, 247, .58); }
.gf-root:hover, .gf-root:focus-within { --gf-hinge: -11deg; --gf-lift: -34px; --gf-spread: 8px; --gf-fan: 1.4deg; --gf-stack: 10px; }
.gf-root[data-open] { --gf-hinge: -24deg; --gf-lift: -96px; --gf-spread: 40px; --gf-fan: 5deg; --gf-stack: 30px; }

.gf-stage {
  position: absolute;
  left: 0;
  top: 0;
  width: 340px;
  height: 272px;
  transform-origin: 0 0;
}
.gf-tilt {
  position: absolute;
  inset: 0;
  transform: perspective(1400px) rotateX(calc(var(--gf-py) * -3deg)) rotateY(calc(var(--gf-px) * 4deg));
  transition: transform .9s var(--gf-ease);
}

.gf-shadow {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: -6px;
  height: 60px;
  border-radius: 40px;
  background: rgba(16, 18, 24, .34);
  filter: blur(22px);
  transform: translateX(calc(var(--gf-px) * -8px));
  transition: transform .9s var(--gf-ease), opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-shadow { background: rgba(0, 0, 0, .62); }

.gf-back {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #f3f3f4 0%, #e3e3e6 100%);
}
.gf-root[data-tone="dark"] .gf-back { background: linear-gradient(180deg, #2a2a2e 0%, #121214 100%); }
.gf-art {
  position: absolute;
  left: -12px;
  top: -12px;
  max-width: none;
  object-fit: cover;
  transform: translate(calc(var(--gf-px) * -7px), calc(var(--gf-py) * -6px)) scale(1.02);
  transition: transform 1.1s var(--gf-ease), opacity 1.2s var(--gf-ease), filter 1.2s var(--gf-ease);
}
canvas.gf-art { opacity: 0; filter: blur(14px) saturate(.6); }
canvas.gf-art[data-ready] { opacity: 1; filter: none; }
.gf-back-sheen {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .22) 0%, rgba(255, 255, 255, 0) 22%),
    radial-gradient(120% 80% at 80% 0%, rgba(255, 255, 255, .16), rgba(255, 255, 255, 0) 60%);
  pointer-events: none;
}

.gf-rim {
  position: absolute;
  left: 0;
  top: 0;
  max-width: none;
  overflow: visible;
  pointer-events: none;
  fill: none;
}
.gf-back-rim { width: 340px; height: 272px; }
.gf-back-rim path { stroke: rgba(255, 255, 255, .45); stroke-width: 1; }
.gf-root[data-tone="dark"] .gf-back-rim path { stroke: rgba(255, 255, 255, .16); }

/* ---- files ---------------------------------------------------------------- */
.gf-files {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  /* nothing hangs out of the bottom of the pocket, however tall the stack */
  clip-path: inset(-400px -400px 10px -400px);
}
.gf-sheet-slot { display: contents; }
.gf-sheet {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  left: 34px;
  top: 96px;
  width: 272px;
  height: 184px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  pointer-events: auto;
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f0 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .9),
    0 0 0 .5px rgba(0, 0, 0, .1),
    0 10px 26px -8px rgba(10, 12, 20, .28);
  transform-origin: 50% 100%;
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1))
    rotate(calc(var(--gf-jr) + var(--gf-slot) * var(--gf-fan)));
  transition:
    transform .75s var(--gf-spring) calc(var(--gf-depth) * 40ms),
    box-shadow .4s var(--gf-ease),
    translate .9s var(--gf-ease),
    opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-sheet { background: linear-gradient(180deg, #2c2c30 0%, #1c1c1f 100%); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .14), 0 0 0 .5px rgba(255, 255, 255, .08), 0 12px 28px -8px rgba(0, 0, 0, .7); }
.gf-sheet--art { background: #1a1a1d; }
.gf-root[data-open] .gf-sheet:hover,
.gf-root[data-open] .gf-sheet:focus-visible {
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1 - 18px))
    rotate(calc(var(--gf-slot) * var(--gf-fan) * .6));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .1), 0 22px 40px -12px rgba(10, 12, 20, .42);
  transition-delay: 0s;
}
.gf-sheet:focus-visible { outline: 2px solid #4c8dff; outline-offset: 2px; }
.gf-sheet-art {
  position: absolute;
  left: 0;
  top: 0;
  width: 272px;
  height: 184px;
  max-width: none;
  object-fit: cover;
  transition: opacity .9s var(--gf-ease), filter .9s var(--gf-ease);
}
canvas.gf-sheet-art { opacity: 0; filter: blur(10px); }
canvas.gf-sheet-art[data-ready] { opacity: 1; filter: none; }
.gf-sheet--art::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(0, 0, 0, .42) 0%, rgba(0, 0, 0, 0) 34%);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .2);
  pointer-events: none;
}
.gf-sheet-head {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 11px;
  z-index: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  white-space: nowrap;
}
.gf-sheet-name {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12.5px;
  font-weight: 560;
  letter-spacing: -.005em;
  color: #18181b;
}
.gf-sheet-meta {
  flex: none;
  font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 10px;
  letter-spacing: .02em;
  color: rgba(24, 24, 27, .5);
}
.gf-root[data-tone="dark"] .gf-sheet-name, .gf-sheet--art .gf-sheet-name { color: #fafafa; }
.gf-root[data-tone="dark"] .gf-sheet-meta, .gf-sheet--art .gf-sheet-meta { color: rgba(250, 250, 250, .66); }
.gf-lines {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.gf-lines i {
  display: block;
  height: 5px;
  border-radius: 3px;
  background: rgba(24, 24, 27, .08);
}
.gf-lines i:first-child { height: 9px; margin-bottom: 4px; background: rgba(24, 24, 27, .14); }
.gf-root[data-tone="dark"] .gf-lines i { background: rgba(255, 255, 255, .08); }
.gf-root[data-tone="dark"] .gf-lines i:first-child { background: rgba(255, 255, 255, .16); }

.gf-sheet--drop { animation: gf-drop .85s var(--gf-ease) both; }
@keyframes gf-drop {
  0% { translate: 0 -190px; rotate: -9deg; opacity: 0; }
  35% { opacity: 1; }
  72% { translate: 0 10px; rotate: 1deg; }
  100% { translate: 0 0; rotate: 0deg; opacity: 1; }
}

/* ---- front glass ----------------------------------------------------------- */
.gf-front {
  position: absolute;
  left: 0;
  top: 74px;
  width: 340px;
  height: 198px;
  z-index: 10;
  -webkit-backdrop-filter: blur(22px) saturate(1.5);
  backdrop-filter: blur(22px) saturate(1.5);
  transform-origin: 50% 100%;
  transform: perspective(760px) rotateX(var(--gf-hinge));
  transition: transform .8s var(--gf-spring), translate 1s var(--gf-ease), opacity 1s var(--gf-ease);
}
.gf-front--bump { animation: gf-bump .7s var(--gf-ease) .38s both; }
@keyframes gf-bump {
  0% { scale: 1; }
  35% { scale: 1.018 .975; }
  70% { scale: .996 1.006; }
  100% { scale: 1; }
}
.gf-tint {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .5) 42%, rgba(252, 252, 252, .93) 100%);
}
.gf-root[data-tone="dark"] .gf-tint {
  background: linear-gradient(180deg, rgba(18, 18, 20, .18) 0%, rgba(14, 14, 16, .62) 46%, rgba(8, 8, 10, .94) 100%);
}
.gf-spec {
  position: absolute;
  inset: 0;
  background: radial-gradient(260px 200px at calc(50% + var(--gf-px) * 46%) calc(30% + var(--gf-py) * 40%), rgba(255, 255, 255, .5), rgba(255, 255, 255, 0) 70%);
  mix-blend-mode: soft-light;
  opacity: .9;
  transition: background-position .6s var(--gf-ease);
  pointer-events: none;
}
.gf-root[data-tone="dark"] .gf-spec { mix-blend-mode: screen; opacity: .16; }
.gf-front-rim { width: 340px; height: 198px; }
.gf-front-rim path { stroke-width: 2.4; transition: stroke-width .3s var(--gf-ease); }
.gf-root[data-tone="dark"] .gf-front-rim { opacity: .55; }

.gf-hit {
  all: unset;
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
}
.gf-hit:focus-visible ~ .gf-label .gf-title { text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 4px; }
.gf-front:has(.gf-hit:focus-visible) .gf-front-rim path { stroke-width: 5; }

.gf-label {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 200px;
  pointer-events: none;
  color: var(--gf-ink);
}
.gf-root[data-place="bottom-left"] .gf-label { left: 28px; bottom: 32px; }
.gf-root[data-place="top-left"] .gf-label { left: 28px; top: 34px; }
.gf-root[data-place="top-right"] .gf-label { right: 32px; top: 52px; align-items: flex-start; }
.gf-title {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -.012em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gf-meta {
  font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  letter-spacing: .03em;
  color: var(--gf-ink-soft);
  white-space: nowrap;
  animation: gf-roll .5s var(--gf-ease) both;
}
@keyframes gf-roll {
  from { opacity: 0; translate: 0 7px; filter: blur(3px); }
  to { opacity: 1; translate: 0 0; filter: blur(0); }
}

/* ---- the key: + or \xb7\xb7\xb7 ------------------------------------------------------ */
.gf-key {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  right: 22px;
  bottom: 22px;
  z-index: 12;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), background .35s var(--gf-ease);
}
.gf-key:hover { transform: translateY(-2px); }
.gf-key:active { transform: translateY(0) scale(.93); transition-duration: .12s; }
.gf-key:focus-visible { outline: 2px solid #4c8dff; outline-offset: 3px; }
.gf-key--add {
  color: #fff;
  background: radial-gradient(120% 90% at 50% 0%, #3a3a3f 0%, #121214 55%, #050506 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .22),
    inset 0 -3px 8px rgba(0, 0, 0, .7),
    0 0 0 1px rgba(0, 0, 0, .75),
    0 14px 22px -8px rgba(0, 0, 0, .55),
    0 3px 6px -2px rgba(0, 0, 0, .35);
}
.gf-root[data-tone="dark"] .gf-key--add {
  color: #111113;
  background: radial-gradient(120% 90% at 50% 0%, #ffffff 0%, #ececee 55%, #d2d2d6 100%);
  box-shadow: inset 0 1px 0 #fff, inset 0 -3px 8px rgba(0, 0, 0, .14), 0 0 0 1px rgba(0, 0, 0, .4), 0 14px 22px -8px rgba(0, 0, 0, .7);
}
.gf-key--more {
  color: #111113;
  background: linear-gradient(180deg, rgba(255, 255, 255, .92) 0%, rgba(226, 226, 230, .82) 100%);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow:
    inset 0 1px 0 #fff,
    inset 0 -2px 4px rgba(0, 0, 0, .06),
    0 0 0 1px rgba(0, 0, 0, .16),
    0 10px 18px -8px rgba(0, 0, 0, .3);
}
.gf-root[data-tone="dark"] .gf-key--more {
  color: #f5f5f7;
  background: linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .06) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .22), 0 0 0 1px rgba(255, 255, 255, .1), 0 10px 18px -8px rgba(0, 0, 0, .6);
}
.gf-key--more[aria-expanded="true"] { transform: scale(.96); }
.gf-glyph { display: block; max-width: none; fill: none; stroke: currentColor; stroke-linecap: round; }
.gf-glyph--plus { width: 26px; height: 26px; stroke-width: 1.6; animation: gf-turn .6s var(--gf-spring); }
.gf-glyph--more { width: 30px; height: 12px; stroke-width: 1.7; }
@keyframes gf-turn { from { rotate: -90deg; } to { rotate: 0deg; } }

/* ---- menu ------------------------------------------------------------------- */
.gf-menu {
  position: absolute;
  right: 22px;
  bottom: 90px;
  z-index: 20;
  min-width: 176px;
  padding: 6px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background: rgba(252, 252, 253, .72);
  -webkit-backdrop-filter: blur(24px) saturate(1.6);
  backdrop-filter: blur(24px) saturate(1.6);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .14), 0 24px 48px -16px rgba(10, 12, 20, .4);
  transform-origin: 100% 100%;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px) scale(.94);
  transition: opacity .2s var(--gf-ease), transform .32s var(--gf-spring), visibility 0s .32s;
}
.gf-menu[data-open] { opacity: 1; visibility: visible; transform: none; transition-delay: 0s; }
.gf-root[data-tone="dark"] .gf-menu { background: rgba(30, 30, 34, .72); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 0 0 .5px rgba(255, 255, 255, .1), 0 24px 48px -16px rgba(0, 0, 0, .8); }
.gf-menu-item {
  all: unset;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 450;
  color: #18181b;
  cursor: pointer;
}
.gf-root[data-tone="dark"] .gf-menu-item { color: #f4f4f5; }
.gf-menu-item:hover, .gf-menu-item:focus-visible { background: rgba(24, 24, 27, .07); }
.gf-root[data-tone="dark"] .gf-menu-item:hover, .gf-root[data-tone="dark"] .gf-menu-item:focus-visible { background: rgba(255, 255, 255, .09); }
.gf-menu-item--danger { color: #d92d20; }
.gf-root[data-tone="dark"] .gf-menu-item--danger { color: #ff6b5e; }

/* ---- entrance: the folder assembles itself ---------------------------------- */
.gf-root:not([data-entered]) .gf-back,
.gf-root:not([data-entered]) .gf-back-rim { translate: 0 22px; opacity: 0; }
.gf-root:not([data-entered]) .gf-sheet { translate: 0 -120px; opacity: 0; }
.gf-root:not([data-entered]) .gf-front { translate: 0 46px; opacity: 0; }
.gf-root:not([data-entered]) .gf-key { opacity: 0; scale: .6; }
.gf-root:not([data-entered]) .gf-shadow { opacity: 0; }
.gf-back, .gf-back-rim { transition: translate 1s var(--gf-ease), opacity .9s var(--gf-ease); }
.gf-root[data-entered] .gf-sheet { transition-delay: calc(var(--gf-depth) * 40ms), 0s, calc(.18s + var(--gf-depth) * 90ms), calc(.18s + var(--gf-depth) * 90ms); }
.gf-root[data-entered] .gf-front { transition-delay: 0s, .42s, .42s; }
.gf-key { transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), opacity .6s var(--gf-ease) .7s, scale .7s var(--gf-spring) .7s; }

@media (prefers-reduced-motion: reduce) {
  .gf-root *, .gf-root *::before, .gf-root *::after {
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    animation: none !important;
  }
  .gf-tilt { transform: none; }
}
`;var F=e.i(69668),I=e.i(8803),O=e.i(71534),T=e.i(47163);let P="vhq-own-v1",D="keys",R=new TextEncoder,$=e=>Uint8Array.from(atob(e),e=>e.charCodeAt(0)),B=e=>btoa(String.fromCharCode(...e));async function U(e,t,a,r){let s=await crypto.subtle.importKey("raw",R.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:a,hash:"SHA-256"},s,{name:"AES-GCM",length:256},!1,r)}let V=null;async function _(){return V||(V=await (await fetch(`${I.S}/vault/meta.json`,{cache:"no-store"})).json()),V}async function G(e){let t=await _(),a=await U(e.trim().toUpperCase(),$(t.salt),t.iter,["decrypt"]);try{return new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:$(t.wrapIv)},a,$(t.wrapped)))}catch{throw Error("That code did not work. Check it with Nikhil.")}}async function Y(e,t){let a=crypto.getRandomValues(new Uint8Array(16)),r=crypto.getRandomValues(new Uint8Array(12)),s=await U(e,a,31e4,["encrypt"]),n=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:r},s,t)),i={salt:B(a),iv:B(r),wrapped:B(n)};localStorage.setItem(P,JSON.stringify(i))}async function K(e){let t=JSON.parse(localStorage.getItem(P)||"null");if(!t)throw Error("No password set on this device yet.");let a=await U(e,$(t.salt),31e4,["decrypt"]);try{return new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:$(t.iv)},a,$(t.wrapped)))}catch{throw Error("Wrong password. Try again, or use the access code from Nikhil.")}}async function H(e,t){let a=await new Promise((e,t)=>{let a=indexedDB.open("vhq-vault",1);a.onupgradeneeded=()=>a.result.createObjectStore(D),a.onsuccess=()=>e(a.result),a.onerror=()=>t(a.error)});return new Promise((r,s)=>{let n=t(a.transaction(D,e).objectStore(D));n.onsuccess=()=>r(n.result),n.onerror=()=>s(n.error)})}async function W(e){let t=await crypto.subtle.importKey("raw",e,"AES-GCM",!1,["decrypt"]);await H("readwrite",e=>e.put(t,"data"))}async function J(){try{return await H("readonly",e=>e.get("data"))??null}catch{return null}}async function X(){await H("readwrite",e=>e.delete("data"))}async function Z(){await X(),localStorage.removeItem(P)}async function Q(e){let t=await _(),a=e instanceof Uint8Array?await crypto.subtle.importKey("raw",e,"AES-GCM",!1,["decrypt"]):e,r=await (await fetch(`${I.S}/vault/leads.bin`,{cache:"no-store"})).arrayBuffer(),s=new Blob([await crypto.subtle.decrypt({name:"AES-GCM",iv:$(t.dataIv)},a,r)]).stream().pipeThrough(new DecompressionStream("gzip")),n=JSON.parse(await new Response(s).text());return n.rows.map(e=>Object.fromEntries(n.cols.map((t,a)=>[t,e[a]??""])))}let ee=[{name:"Current clients",art:"ember",blurb:"Amul, DS Group, Mother Dairy, Vadilal"},{name:"FMCG",art:"aurora",blurb:"The big spenders"},{name:"Dairy",art:"glacier",blurb:"Your home turf"},{name:"Auto",art:"dusk",blurb:"Cars, bikes, tyres"},{name:"Startup",art:"verdant",blurb:"Quick commerce and D2C"},{name:"Durables & Paints",art:"ember",blurb:"Paints, fans, appliances"},{name:"Mid-size",art:"dusk",blurb:"USD 10M to 100M"}],et={A:"Senior",B:"Team",C:"Mid-size"};function ea({stage:e,onOpen:s,onStage:n}){let[i,o]=(0,a.useState)(""),[l,c]=(0,a.useState)(""),[f,h]=(0,a.useState)(""),[g,m]=(0,a.useState)(!0),[x,b]=(0,a.useState)(""),[v,y]=(0,a.useState)(!1),w=(0,a.useRef)(null),k=async e=>{b(""),y(!0);try{await e()}catch(e){b(e instanceof Error?e.message:"Something went wrong. Try again.")}finally{y(!1)}},j={checking:["One sec","Checking this device…",""],code:["Step 1 of 2","Enter your access code","Nikhil sent you a code. You only need it once on this device."],setpw:["Step 2 of 2","Now set your own password","Pick something you’ll remember. It stays on this device, Nikhil can’t see it."],password:["Welcome back","Enter your password","The one you set the first time on this device."],open:["","",""]}[e],N="h-12 w-full rounded-2xl border border-[var(--hq-line)] bg-black/45 px-4 text-[16px] text-[var(--hq-cream)] placeholder:text-[var(--hq-dim)] focus:border-[var(--hq-amber)] focus:outline-none";return(0,t.jsx)("section",{className:"relative mx-auto flex min-h-[100svh] max-w-7xl items-center justify-center px-5 pb-16 pt-28",children:(0,t.jsxs)(r.c.div,{initial:{opacity:0,y:24,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{duration:.7,ease:[.22,1,.36,1]},className:"relative w-full max-w-[520px] overflow-hidden rounded-[32px] border border-[var(--hq-line)] shadow-[0_40px_120px_-40px_rgb(0_0_0/0.9)]",children:[(0,t.jsx)(F.f,{palette:"ember",dotSize:7,scrim:.78}),(0,t.jsxs)("div",{className:"relative p-7 sm:p-10",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"grid size-9 place-items-center rounded-full bg-[var(--hq-amber)]/20 text-[var(--hq-amber2)]",children:(0,t.jsx)(p,{className:"size-4"})}),(0,t.jsxs)("p",{className:"hq-label !text-[var(--hq-cream)]/80",children:["Lead vault · ",j[0]]})]}),(0,t.jsx)("h1",{className:"font-display mt-6 text-[clamp(2.4rem,7vw,3.4rem)] leading-[0.95] text-white [text-shadow:0_2px_24px_rgb(0_0_0/0.6)]",children:j[1]}),j[2]&&(0,t.jsx)("p",{className:"mt-3 text-[15.5px] leading-relaxed text-[var(--hq-cream)]/90",children:j[2]}),"checking"!==e&&(0,t.jsxs)("form",{onSubmit:t=>{t.preventDefault(),"code"===e&&k(async()=>{w.current=await G(i),o(""),n("setpw")}),"setpw"===e&&k(async()=>{if(l.length<8)throw Error("Keep it 8 characters or more, bhai.");if(l!==f)throw Error("The two passwords don’t match.");await Y(l,w.current),g&&await W(w.current),await s(w.current)}),"password"===e&&k(async()=>{let e=await K(l);g&&await W(e),await s(e)})},className:"mt-7 space-y-3",children:["code"===e&&(0,t.jsx)("input",{autoFocus:!0,value:i,onChange:e=>o(e.target.value),placeholder:"Your access code",autoComplete:"one-time-code",spellCheck:!1,"aria-label":"Access code",className:(0,T.f)(N,"font-code uppercase tracking-[0.12em]")}),"code"!==e&&(0,t.jsx)("input",{autoFocus:!0,type:"password",value:l,onChange:e=>c(e.target.value),placeholder:"setpw"===e?"New password (8+ characters)":"Your password",autoComplete:"setpw"===e?"new-password":"current-password","aria-label":"Password",className:N}),"setpw"===e&&(0,t.jsx)("input",{type:"password",value:f,onChange:e=>h(e.target.value),placeholder:"Type it again",autoComplete:"new-password","aria-label":"Confirm password",className:N}),"code"!==e&&(0,t.jsxs)("label",{className:"flex cursor-pointer items-center gap-2.5 pt-1 text-[14px] text-[var(--hq-cream)]/90",children:[(0,t.jsx)("input",{type:"checkbox",checked:g,onChange:e=>m(e.target.checked),className:"size-4 accent-[var(--hq-amber)]"}),"Remember this device (no password next time)"]}),x&&(0,t.jsx)("p",{role:"alert",className:"rounded-xl bg-rose-500/15 px-3.5 py-2.5 text-[14px] text-rose-100",children:x}),(0,t.jsxs)("button",{disabled:v,className:"mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[var(--hq-cream)] text-[15px] font-medium text-[#1a120b] transition hover:bg-white disabled:opacity-60",children:[(0,t.jsx)(d,{className:"size-4"})," ",v?"Opening…":"code"===e?"Check code":"setpw"===e?"Save password and open":"Open my leads"]}),"password"===e&&(0,t.jsx)("button",{type:"button",onClick:()=>n("code"),className:"w-full pt-1 text-center text-[13.5px] text-[var(--hq-cream)]/75 underline-offset-4 hover:underline",children:"Forgot it? Use the access code again"})]}),(0,t.jsxs)("p",{className:"mt-7 flex items-start gap-2 text-[12.5px] leading-relaxed text-[var(--hq-cream)]/70",children:[(0,t.jsx)(u.f,{className:"mt-0.5 size-4 shrink-0"})," The list is locked with AES-256. It only opens in your browser, nothing gets sent anywhere."]})]})]})})}function er({leads:e,onLock:r,onForget:l}){let c,[d,f]=(0,a.useState)(null),[h,m]=(0,a.useState)(null),[u,y]=(0,a.useState)(""),[w,k]=(0,a.useState)("all"),[j,N]=(0,a.useState)("all"),[S,C]=(0,a.useState)(0),[q,M]=(0,a.useState)(new Set),[A,z]=(0,a.useState)(null),[L,F]=(0,a.useState)(200);(0,a.useEffect)(()=>{let e=()=>F(window.innerWidth<640?Math.min(170,Math.floor((window.innerWidth-60)/2)):196);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let P=(0,a.useMemo)(()=>{let t={};for(let a of e){let e=t[a.group]??={n:0,cos:{}};e.n++,e.cos[a.company]=(e.cos[a.company]??0)+1}return t},[e]),D=(0,a.useMemo)(()=>e.map((e,t)=>({l:e,i:t,hay:`${e.name} ${e.title} ${e.company} ${e.place}`.toLowerCase()})),[e]),R=(0,a.useMemo)(()=>{let e=u.trim().toLowerCase();return D.filter(({l:t,hay:a})=>(!d||t.group===d)&&(!h||t.company===h)&&("all"===w||t.tier===w)&&("all"===j||("any"===j?!!t.email:"VALID"===t.status))&&(!e||a.includes(e)))},[D,d,h,w,j,u]);(0,a.useEffect)(()=>C(0),[d,h,w,j,u]);let $=Math.max(1,Math.ceil(R.length/50)),B=R.slice(50*S,50*S+50),U=B.length>0&&B.every(e=>q.has(e.i)),V=[...q].map(t=>e[t]),_=e=>M(t=>{let a=new Set(t);return a.has(e)?a.delete(e):a.add(e),a}),G=ee.filter(e=>P[e.name]);return(0,t.jsxs)("section",{className:"mx-auto max-w-7xl px-5 pb-28 pt-28",children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-end justify-between gap-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"hq-label",children:"Your lead vault · open on this device"}),(0,t.jsxs)("h1",{className:"font-display mt-4 text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.95]",children:[e.length.toLocaleString("en-IN")," people who buy ",(0,t.jsx)("em",{className:"text-[var(--hq-amber2)]",children:"outdoor."})]}),(0,t.jsxs)("p",{className:"mt-4 max-w-xl text-[17px] text-[var(--hq-ash)]",children:["Marketing heads, brand managers and media folks at ",Object.values(P).reduce((e,t)=>e+Object.keys(t.cos).length,0)," Indian companies. Tap a folder, pick a brand, then let Claude write the first message. Start with the Senior ones."]})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)("button",{onClick:r,className:"inline-flex h-11 items-center gap-2 rounded-full border border-[var(--hq-line)] px-5 text-[14px] hover:border-[var(--hq-cream)]",children:[(0,t.jsx)(p,{className:"size-4"})," Lock"]}),(0,t.jsxs)("button",{onClick:()=>{confirm("Forget this device? You will need the access code from Nikhil again.")&&l()},className:"inline-flex h-11 items-center gap-2 rounded-full border border-[var(--hq-line)] px-5 text-[14px] text-[var(--hq-ash)] hover:border-rose-300/60 hover:text-rose-100",children:[(0,t.jsx)(g,{className:"size-4"})," Forget device"]})]})]}),(0,t.jsx)("div",{className:"mt-14 flex flex-wrap justify-center gap-x-4 gap-y-8 sm:gap-x-5 sm:justify-start",children:G.map((e,a)=>{let r=P[e.name],s=Object.entries(r.cos).sort((e,t)=>t[1]-e[1]).slice(0,6);return(0,t.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,t.jsx)(E,{label:e.name,meta:`${r.n.toLocaleString("en-IN")} people`,tone:"dark",art:e.art,seed:a+2,action:"none",width:L,appearDelay:70*a,open:d===e.name,onOpenChange:t=>{f(t?e.name:null),m(null)},files:s.map(([e,t])=>({name:e,meta:`${t} people`})),onFileSelect:t=>{f(e.name),m(t.name),document.getElementById("table")?.scrollIntoView({behavior:"smooth",block:"start"})}}),(0,t.jsx)("span",{className:"max-w-[160px] text-center text-[12px] text-[var(--hq-dim)]",children:e.blurb})]},e.name)})}),(0,t.jsxs)("div",{id:"table",className:"hq-glass mt-14 scroll-mt-24 rounded-[28px] p-4 sm:p-5",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-3 lg:flex-row lg:items-center",children:[(0,t.jsxs)("label",{className:"relative flex-1",children:[(0,t.jsx)(x,{className:"pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--hq-dim)]"}),(0,t.jsx)("input",{value:u,onChange:e=>y(e.target.value),placeholder:"Search name, title, company or city","aria-label":"Search leads",className:"h-12 w-full rounded-2xl border border-[var(--hq-line)] bg-black/35 pl-11 pr-4 text-[15px] placeholder:text-[var(--hq-dim)] focus:border-[var(--hq-amber)] focus:outline-none"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:flex",children:[(0,t.jsxs)("select",{value:w,onChange:e=>k(e.target.value),"aria-label":"Seniority",className:"h-12 rounded-2xl border border-[var(--hq-line)] bg-black/35 px-3 text-[14px]",children:[(0,t.jsx)("option",{value:"all",children:"All levels"}),(0,t.jsx)("option",{value:"A",children:"Senior (start here)"}),(0,t.jsx)("option",{value:"B",children:"Team"}),(0,t.jsx)("option",{value:"C",children:"Mid-size companies"})]}),(0,t.jsxs)("select",{value:j,onChange:e=>N(e.target.value),"aria-label":"Email",className:"h-12 rounded-2xl border border-[var(--hq-line)] bg-black/35 px-3 text-[14px]",children:[(0,t.jsx)("option",{value:"all",children:"Any email"}),(0,t.jsx)("option",{value:"any",children:"Has an email"}),(0,t.jsx)("option",{value:"valid",children:"Verified email"})]})]})]}),(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap items-center gap-2 text-[13px]",children:[(0,t.jsxs)("span",{className:"text-[var(--hq-ash)]",children:[R.length.toLocaleString("en-IN")," people"]}),d&&(0,t.jsxs)("button",{onClick:()=>{f(null),m(null)},className:"inline-flex items-center gap-1 rounded-full bg-[var(--hq-amber)]/15 px-3 py-1 text-[var(--hq-amber2)]",children:[d," ",(0,t.jsx)(v.X,{className:"size-3"})]}),h&&(0,t.jsxs)("button",{onClick:()=>m(null),className:"inline-flex items-center gap-1 rounded-full bg-[var(--hq-amber)]/15 px-3 py-1 text-[var(--hq-amber2)]",children:[h," ",(0,t.jsx)(v.X,{className:"size-3"})]}),(0,t.jsxs)("div",{className:"ml-auto flex flex-wrap gap-2",children:[(0,t.jsxs)("button",{onClick:()=>{let e=["name","title","company","group","tier","email","status","linkedin","place"],t=q.size?V:R.map(e=>e.l),a=[e.join(","),...t.map(t=>e.map(e=>{let a;return a=String(t[e]??""),/[",\n]/.test(a)?`"${a.replace(/"/g,'""')}"`:a}).join(","))].join("\n"),r=document.createElement("a");r.href=URL.createObjectURL(new Blob(["\uFEFF"+a],{type:"text/csv;charset=utf-8"})),r.download=`visionooh-leads-${(h||d||"all").replace(/[^a-z0-9]+/gi,"-").toLowerCase()}.csv`,r.click(),setTimeout(()=>URL.revokeObjectURL(r.href),2e3)},className:"inline-flex h-10 items-center gap-2 rounded-full border border-[var(--hq-line)] px-4 hover:border-[var(--hq-cream)]",children:[(0,t.jsx)(o.f,{className:"size-4"})," ",q.size?`Export ${q.size} picked`:"Export CSV"]}),(0,t.jsxs)("a",{href:q.size?(0,O.y)((c=V.slice(0,25).map((e,t)=>`${t+1}. ${e.name}, ${e.title}, ${e.company}`).join("\n"),`I run VisionOOH, an outdoor (OOH), BTL and retail-branding agency across 100+ Tier 1, 2 and 3 towns in India. We run outdoor for Amul and Mother Dairy; 25 towns went live in 10 days.

Here are ${Math.min(25,V.length)} marketing people I want to reach:
${c}

For each one:
1. Find one true, recent reason to write now (a launch, a new state, a festive push). Give the source.
2. Draft a LinkedIn note under 300 characters and a 90-word email. One easy ask.
3. Rate fit for outdoor in Tier 2 and 3 towns: high, medium or low, with one line why.

No fake familiarity. Do not invent facts; say "not found" when you can't verify.`)):void 0,target:"_blank",rel:"noreferrer","aria-disabled":!q.size,onClick:e=>!q.size&&e.preventDefault(),title:q.size?"Opens Claude with names, titles and companies only":"Tick a few people first",className:(0,T.f)("inline-flex h-10 items-center gap-2 rounded-full px-4 font-medium",q.size?"bg-[var(--hq-amber)] text-[#1a0d04] hover:brightness-110":"cursor-not-allowed bg-white/5 text-[var(--hq-dim)]"),children:[(0,t.jsx)(b.f,{className:"size-4"})," Ask Claude about ",q.size?`these ${Math.min(25,q.size)}`:"these"]}),q.size>0&&(0,t.jsx)("button",{onClick:()=>M(new Set),className:"h-10 px-2 text-[var(--hq-ash)] hover:text-white",children:"Clear"})]})]}),q.size>25&&(0,t.jsx)("p",{className:"mt-2 text-[12.5px] text-[var(--hq-ash)]",children:"Claude gets the first 25. Smaller batches give better messages anyway."}),(0,t.jsxs)("div",{className:"mt-4 space-y-2 sm:hidden",children:[B.map(({l:e,i:a})=>(0,t.jsx)("div",{className:(0,T.f)("rounded-2xl border border-[var(--hq-line)] p-4",q.has(a)?"bg-[var(--hq-amber)]/[0.08]":"bg-black/20"),children:(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("input",{type:"checkbox",checked:q.has(a),onChange:()=>_(a),"aria-label":`Pick ${e.name}`,className:"mt-1 size-4 shrink-0 accent-[var(--hq-amber)]"}),(0,t.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,t.jsxs)("p",{className:"font-medium text-white",children:[e.name,"A"===e.tier&&(0,t.jsx)("span",{className:"ml-2 rounded-full bg-[var(--hq-amber)]/15 px-2 py-0.5 text-[10.5px] text-[var(--hq-amber2)]",children:"Senior"})]}),(0,t.jsx)("p",{className:"mt-0.5 text-[13.5px] text-[var(--hq-cream)]/85",children:e.title}),(0,t.jsxs)("p",{className:"mt-0.5 text-[13.5px] text-[var(--hq-amber2)]",children:[e.company,e.place&&(0,t.jsxs)("span",{className:"text-[var(--hq-dim)]",children:[" · ",e.place]})]}),(0,t.jsxs)("div",{className:"mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px]",children:[e.email&&(0,t.jsxs)("button",{onClick:async()=>{await navigator.clipboard.writeText(e.email),z(a),setTimeout(()=>z(null),1400)},className:"font-code inline-flex min-w-0 items-center gap-1.5 break-all text-left text-[var(--hq-cream)]/85",children:[A===a?(0,t.jsx)(n.f,{className:"size-3.5 shrink-0 text-[var(--hq-amber)]"}):(0,t.jsx)(i.f,{className:"size-3.5 shrink-0 text-[var(--hq-dim)]"}),e.email,"VALID"===e.status&&(0,t.jsx)("span",{className:"text-emerald-200",children:" ✓"})]}),e.linkedin&&(0,t.jsxs)("a",{href:e.linkedin.startsWith("http")?e.linkedin:`https://${e.linkedin}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[var(--hq-amber2)]",children:["LinkedIn ",(0,t.jsx)(s.f,{className:"size-3.5"})]})]})]})]})},a)),0===B.length&&(0,t.jsx)("p",{className:"p-8 text-center text-[var(--hq-ash)]",children:"Nobody matches that. Clear a filter and try again."})]}),(0,t.jsx)("div",{className:"mt-4 hidden overflow-x-auto rounded-2xl border border-[var(--hq-line)] sm:block",children:(0,t.jsxs)("table",{className:"w-full min-w-[920px] text-left text-[13.5px]",children:[(0,t.jsx)("thead",{className:"bg-white/[0.04] text-[var(--hq-ash)]",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"w-10 p-3",children:(0,t.jsx)("input",{type:"checkbox","aria-label":"Pick everyone on this page",checked:U,onChange:()=>M(e=>{let t=new Set(e);return B.forEach(e=>U?t.delete(e.i):t.add(e.i)),t}),className:"size-4 accent-[var(--hq-amber)]"})}),["Name","Title","Company","Email","Status","LinkedIn","Place"].map(e=>(0,t.jsx)("th",{className:"hq-label p-3 !text-[10px] font-normal",children:e},e))]})}),(0,t.jsxs)("tbody",{children:[B.map(({l:e,i:a})=>(0,t.jsxs)("tr",{className:(0,T.f)("border-t border-[var(--hq-line)] align-top",q.has(a)?"bg-[var(--hq-amber)]/[0.07]":"hover:bg-white/[0.03]"),children:[(0,t.jsx)("td",{className:"p-3",children:(0,t.jsx)("input",{type:"checkbox",checked:q.has(a),onChange:()=>_(a),"aria-label":`Pick ${e.name}`,className:"size-4 accent-[var(--hq-amber)]"})}),(0,t.jsxs)("td",{className:"p-3 font-medium text-white",children:[e.name,"A"===e.tier&&(0,t.jsx)("span",{className:"ml-2 rounded-full bg-[var(--hq-amber)]/15 px-2 py-0.5 text-[10.5px] text-[var(--hq-amber2)]",children:"Senior"})]}),(0,t.jsx)("td",{className:"max-w-[220px] p-3 text-[var(--hq-cream)]/85",children:e.title}),(0,t.jsx)("td",{className:"p-3",children:(0,t.jsx)("button",{onClick:()=>{f(e.group),m(e.company)},className:"text-left hover:text-[var(--hq-amber2)]",children:e.company})}),(0,t.jsx)("td",{className:"p-3",children:e.email?(0,t.jsxs)("button",{onClick:async()=>{await navigator.clipboard.writeText(e.email),z(a),setTimeout(()=>z(null),1400)},className:"font-code inline-flex items-center gap-1.5 text-[12.5px] text-[var(--hq-cream)]/85 hover:text-white",title:"Copy email",children:[A===a?(0,t.jsx)(n.f,{className:"size-3.5 text-[var(--hq-amber)]"}):(0,t.jsx)(i.f,{className:"size-3.5 text-[var(--hq-dim)]"}),e.email]}):(0,t.jsx)("span",{className:"text-[var(--hq-dim)]",children:"none"})}),(0,t.jsx)("td",{className:"p-3",children:(0,t.jsx)("span",{className:(0,T.f)("text-[12px]","VALID"===e.status?"text-emerald-200":"text-[var(--hq-dim)]"),children:"VALID"===e.status?"Verified":"CATCH_ALL"===e.status?"Catch-all":e.email?"Unchecked":""})}),(0,t.jsx)("td",{className:"p-3",children:e.linkedin?(0,t.jsxs)("a",{href:e.linkedin.startsWith("http")?e.linkedin:`https://${e.linkedin}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[var(--hq-amber2)] hover:underline",children:["Profile ",(0,t.jsx)(s.f,{className:"size-3.5"})]}):null}),(0,t.jsx)("td",{className:"p-3 text-[var(--hq-ash)]",children:e.place})]},a)),0===B.length&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:8,className:"p-10 text-center text-[var(--hq-ash)]",children:"Nobody matches that. Clear a filter and try again."})})]})]})}),(0,t.jsxs)("div",{className:"mt-3 flex items-center justify-between text-[13px] text-[var(--hq-ash)]",children:[(0,t.jsxs)("span",{children:["Page ",S+1," of ",$," · tier: ","all"===w?"all":et[w]]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)("button",{disabled:0===S,onClick:()=>C(e=>e-1),className:"h-9 rounded-full border border-[var(--hq-line)] px-4 disabled:opacity-40",children:"Back"}),(0,t.jsx)("button",{disabled:S>=$-1,onClick:()=>C(e=>e+1),className:"h-9 rounded-full border border-[var(--hq-line)] px-4 disabled:opacity-40",children:"Next"})]})]})]}),(0,t.jsxs)("p",{className:"mt-8 text-[13px] leading-relaxed text-[var(--hq-dim)]",children:["Pulled for you by Nikhil on 23 Nov 2026. Titles change, so check LinkedIn before you write. Claude only gets names, titles and companies, never emails. Need a refresh? Ping Nikhil. ·"," ",(0,t.jsx)("a",{href:`${I.S}/#levels`,className:"underline-offset-4 hover:underline",children:"Back to Level 6"})]})]})}e.s(["default",0,function(){let[e,r]=(0,a.useState)("checking"),[s,n]=(0,a.useState)([]);(0,a.useEffect)(()=>{let e=!0;return(async()=>{let t=await J();if(t)try{let a=await Q(t);e&&(n(a),r("open"));return}catch{await X()}e&&r(localStorage.getItem(P)?"password":"code")})(),()=>{e=!1}},[]);let i=async e=>{n(await Q(e)),r("open")};return(0,t.jsxs)("main",{className:"relative min-h-[100svh] overflow-x-clip",children:[(0,t.jsx)(y.f,{home:!1,active:4}),"open"===e?(0,t.jsx)(er,{leads:s,onLock:async()=>{await X(),n([]),r("password")},onForget:async()=>{await Z(),n([]),r("code")}}):(0,t.jsx)(ea,{stage:e,onOpen:i,onStage:r})]})}],38463)}]);