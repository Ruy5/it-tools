import{i as Je}from"./is-browser-fc34c9a6.js";import{cz as ge,b5 as N,R as n,d as K,L as we,am as me,aZ as Qe,ay as eo,cA as oo,G as U,H as P,I as se,bT as to,aD as no,ar as pe,n as R,q as xe,ae as Ce,b9 as Z,an as be,a as ro,K as Le,O as io,bV as ao,b3 as I,cB as so,b$ as le,cC as lo,T as V,F as Y,ak as uo,b1 as X,aV as co,cD as fo,au as ho,a8 as ue,Q as ce,aq as vo,x as go,a3 as H}from"./index-a4aadc31.js";import{u as wo}from"./use-locale-10c58c8b.js";import{b as mo}from"./browser-e933942f.js";const po=(e,a)=>{if(!e)return;const r=document.createElement("a");r.href=e,a!==void 0&&(r.download=a),document.body.appendChild(r),r.click(),document.body.removeChild(r)};function xo(e,a,r,c){var s=-1,d=e==null?0:e.length;for(c&&d&&(r=e[++s]);++s<d;)r=a(r,e[s],s,e);return r}function Co(e){return function(a){return e?.[a]}}var bo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Lo=Co(bo);const Oo=Lo;var So=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Mo="\\u0300-\\u036f",Ro="\\ufe20-\\ufe2f",ko="\\u20d0-\\u20ff",Io=Mo+Ro+ko,zo="["+Io+"]",Po=RegExp(zo,"g");function yo(e){return e=ge(e),e&&e.replace(So,Oo).replace(Po,"")}var To=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Ao(e){return e.match(To)||[]}var Do=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Eo(e){return Do.test(e)}var Oe="\\ud800-\\udfff",Ho="\\u0300-\\u036f",No="\\ufe20-\\ufe2f",Zo="\\u20d0-\\u20ff",$o=Ho+No+Zo,Se="\\u2700-\\u27bf",Me="a-z\\xdf-\\xf6\\xf8-\\xff",_o="\\xac\\xb1\\xd7\\xf7",Bo="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",jo="\\u2000-\\u206f",Wo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Re="A-Z\\xc0-\\xd6\\xd8-\\xde",Uo="\\ufe0e\\ufe0f",ke=_o+Bo+jo+Wo,Ie="['’]",de="["+ke+"]",Vo="["+$o+"]",ze="\\d+",Yo="["+Se+"]",Pe="["+Me+"]",ye="[^"+Oe+ke+ze+Se+Me+Re+"]",Xo="\\ud83c[\\udffb-\\udfff]",Fo="(?:"+Vo+"|"+Xo+")",Go="[^"+Oe+"]",Te="(?:\\ud83c[\\udde6-\\uddff]){2}",Ae="[\\ud800-\\udbff][\\udc00-\\udfff]",E="["+Re+"]",qo="\\u200d",fe="(?:"+Pe+"|"+ye+")",Ko="(?:"+E+"|"+ye+")",he="(?:"+Ie+"(?:d|ll|m|re|s|t|ve))?",ve="(?:"+Ie+"(?:D|LL|M|RE|S|T|VE))?",De=Fo+"?",Ee="["+Uo+"]?",Jo="(?:"+qo+"(?:"+[Go,Te,Ae].join("|")+")"+Ee+De+")*",Qo="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",e1="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",o1=Ee+De+Jo,t1="(?:"+[Yo,Te,Ae].join("|")+")"+o1,n1=RegExp([E+"?"+Pe+"+"+he+"(?="+[de,E,"$"].join("|")+")",Ko+"+"+ve+"(?="+[de,E+fe,"$"].join("|")+")",E+"?"+fe+"+"+he,E+"+"+ve,e1,Qo,ze,t1].join("|"),"g");function r1(e){return e.match(n1)||[]}function i1(e,a,r){return e=ge(e),a=r?void 0:a,a===void 0?Eo(e)?r1(e):Ao(e):e.match(a)||[]}var a1="['’]",s1=RegExp(a1,"g");function l1(e){return function(a){return xo(i1(yo(a).replace(s1,"")),e,"")}}var u1=l1(function(e,a,r){return e+(r?"-":"")+a.toLowerCase()});const c1=u1,d1=N("download",n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"}))))),f1=N("rotateClockwise",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),n("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),h1=N("rotateClockwise",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),n("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),v1=N("zoomIn",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),n("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),g1=N("zoomOut",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),n("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),w1=K({name:"ResizeSmall",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n("g",{fill:"none"},n("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),m1=Je&&"loading"in document.createElement("img"),p1=(e={})=>{var a;const{root:r=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof r=="string"?document.querySelector(r):r)||document.documentElement})}},F=new WeakMap,G=new WeakMap,q=new WeakMap,x1=(e,a,r)=>{if(!e)return()=>{};const c=p1(a),{root:s}=c.options;let d;const m=F.get(s);m?d=m:(d=new Map,F.set(s,d));let w,g;d.has(c.hash)?(g=d.get(c.hash),g[1].has(e)||(w=g[0],g[1].add(e),w.observe(e))):(w=new IntersectionObserver(f=>{f.forEach(k=>{if(k.isIntersecting){const L=G.get(k.target),x=q.get(k.target);L&&L(),x&&(x.value=!0)}})},c.options),w.observe(e),g=[w,new Set([e])],d.set(c.hash,g));let l=!1;const u=()=>{l||(G.delete(e),q.delete(e),l=!0,g[1].has(e)&&(g[0].unobserve(e),g[1].delete(e)),g[1].size<=0&&d.delete(c.hash),d.size||F.delete(s))};return G.set(e,u),q.set(e,r),u},He=Object.assign(Object.assign({},we.props),{onPreviewPrev:Function,onPreviewNext:Function,showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean,renderToolbar:Function}),Ne=me("n-image");function C1(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const b1=Qe({name:"Image",common:eo,peers:{Tooltip:oo},self:C1}),L1=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),O1=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),S1=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),M1=U([U("body >",[P("image-container","position: fixed;")]),P("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),P("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[se()]),P("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[P("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),se()]),P("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[to()]),P("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),P("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[no("preview-disabled",`
 cursor: pointer;
 `),U("img",`
 border-radius: inherit;
 `)])]),$=32,R1=K({name:"ImagePreview",props:Object.assign(Object.assign({},He),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const a=we("Image","-image",M1,b1,e,pe(e,"clsPrefix"));let r=null;const c=R(null),s=R(null),d=R(void 0),m=R(!1),w=R(!1),{localeRef:g}=wo("Image");function l(){const{value:o}=s;if(!r||!o)return;const{style:i}=o,t=r.getBoundingClientRect(),h=t.left+t.width/2,v=t.top+t.height/2;i.transformOrigin=`${h}px ${v}px`}function u(o){var i,t;switch(o.key){case" ":o.preventDefault();break;case"ArrowLeft":(i=e.onPrev)===null||i===void 0||i.call(e);break;case"ArrowRight":(t=e.onNext)===null||t===void 0||t.call(e);break;case"Escape":re();break}}xe(m,o=>{o?X("keydown",document,u):Z("keydown",document,u)}),Ce(()=>{Z("keydown",document,u)});let f=0,k=0,L=0,x=0,y=0,_=0,J=0,Q=0,B=!1;function ee(o){const{clientX:i,clientY:t}=o;L=i-f,x=t-k,ho(S)}function Ze(o){const{mouseUpClientX:i,mouseUpClientY:t,mouseDownClientX:h,mouseDownClientY:v}=o,b=h-i,O=v-t,M=`vertical${O>0?"Top":"Bottom"}`,z=`horizontal${b>0?"Left":"Right"}`;return{moveVerticalDirection:M,moveHorizontalDirection:z,deltaHorizontal:b,deltaVertical:O}}function oe(o){const{value:i}=c;if(!i)return{offsetX:0,offsetY:0};const t=i.getBoundingClientRect(),{moveVerticalDirection:h,moveHorizontalDirection:v,deltaHorizontal:b,deltaVertical:O}=o||{};let M=0,z=0;return t.width<=window.innerWidth?M=0:t.left>0?M=(t.width-window.innerWidth)/2:t.right<window.innerWidth?M=-(t.width-window.innerWidth)/2:v==="horizontalRight"?M=Math.min((t.width-window.innerWidth)/2,y-(b??0)):M=Math.max(-((t.width-window.innerWidth)/2),y-(b??0)),t.height<=window.innerHeight?z=0:t.top>0?z=(t.height-window.innerHeight)/2:t.bottom<window.innerHeight?z=-(t.height-window.innerHeight)/2:h==="verticalBottom"?z=Math.min((t.height-window.innerHeight)/2,_-(O??0)):z=Math.max(-((t.height-window.innerHeight)/2),_-(O??0)),{offsetX:M,offsetY:z}}function te(o){Z("mousemove",document,ee),Z("mouseup",document,te);const{clientX:i,clientY:t}=o;B=!1;const h=Ze({mouseUpClientX:i,mouseUpClientY:t,mouseDownClientX:J,mouseDownClientY:Q}),v=oe(h);L=v.offsetX,x=v.offsetY,S()}const p=be(Ne,null);function $e(o){var i,t;if((t=(i=p?.previewedImgPropsRef.value)===null||i===void 0?void 0:i.onMousedown)===null||t===void 0||t.call(i,o),o.button!==0)return;const{clientX:h,clientY:v}=o;B=!0,f=h-L,k=v-x,y=L,_=x,J=h,Q=v,S(),X("mousemove",document,ee),X("mouseup",document,te)}function _e(o){var i,t;(t=(i=p?.previewedImgPropsRef.value)===null||i===void 0?void 0:i.onDblclick)===null||t===void 0||t.call(i,o);const h=ne();C=C===h?1:h,S()}const j=1.5;let T=0,C=1,A=0;function W(){C=1,T=0}function Be(){var o;W(),A=0,(o=e.onPrev)===null||o===void 0||o.call(e)}function je(){var o;W(),A=0,(o=e.onNext)===null||o===void 0||o.call(e)}function We(){A-=90,S()}function Ue(){A+=90,S()}function Ve(){const{value:o}=c;if(!o)return 1;const{innerWidth:i,innerHeight:t}=window,h=Math.max(1,o.naturalHeight/(t-$)),v=Math.max(1,o.naturalWidth/(i-$));return Math.max(3,h*2,v*2)}function ne(){const{value:o}=c;if(!o)return 1;const{innerWidth:i,innerHeight:t}=window,h=o.naturalHeight/(t-$),v=o.naturalWidth/(i-$);return h<1&&v<1?1:Math.max(h,v)}function Ye(){const o=Ve();C<o&&(T+=1,C=Math.min(o,Math.pow(j,T)),S())}function Xe(){if(C>.5){const o=C;T-=1,C=Math.max(.5,Math.pow(j,T));const i=o-C;S(!1);const t=oe();C+=i,S(!1),C-=i,L=t.offsetX,x=t.offsetY,S()}}function Fe(){const o=d.value;o&&po(o,void 0)}function S(o=!0){var i;const{value:t}=c;if(!t)return;const{style:h}=t,v=co((i=p?.previewedImgPropsRef.value)===null||i===void 0?void 0:i.style);let b="";if(typeof v=="string")b=v+";";else for(const M in v)b+=`${c1(M)}: ${v[M]};`;const O=`transform-origin: center; transform: translateX(${L}px) translateY(${x}px) rotate(${A}deg) scale(${C});`;B?h.cssText=b+"cursor: grabbing; transition: none;"+O:h.cssText=b+"cursor: grab;"+O+(o?"":"transition: none;"),o||t.offsetHeight}function re(){m.value=!m.value,w.value=!0}function Ge(){C=ne(),T=Math.ceil(Math.log(C)/Math.log(j)),L=0,x=0,S()}const qe={setPreviewSrc:o=>{d.value=o},setThumbnailEl:o=>{r=o},toggleShow:re};function Ke(o,i){if(e.showToolbarTooltip){const{value:t}=a;return n(fo,{to:!1,theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>g.value[i],trigger:()=>o})}else return o}const ie=ro(()=>{const{common:{cubicBezierEaseInOut:o},self:{toolbarIconColor:i,toolbarBorderRadius:t,toolbarBoxShadow:h,toolbarColor:v}}=a.value;return{"--n-bezier":o,"--n-toolbar-icon-color":i,"--n-toolbar-color":v,"--n-toolbar-border-radius":t,"--n-toolbar-box-shadow":h}}),{inlineThemeDisabled:ae}=Le(),D=ae?io("image-preview",void 0,ie,e):void 0;return Object.assign({previewRef:c,previewWrapperRef:s,previewSrc:d,show:m,appear:ao(),displayed:w,previewedImgProps:p?.previewedImgPropsRef,handleWheel(o){o.preventDefault()},handlePreviewMousedown:$e,handlePreviewDblclick:_e,syncTransformOrigin:l,handleAfterLeave:()=>{W(),A=0,w.value=!1},handleDragStart:o=>{var i,t;(t=(i=p?.previewedImgPropsRef.value)===null||i===void 0?void 0:i.onDragstart)===null||t===void 0||t.call(i,o),o.preventDefault()},zoomIn:Ye,zoomOut:Xe,handleDownloadClick:Fe,rotateCounterclockwise:We,rotateClockwise:Ue,handleSwitchPrev:Be,handleSwitchNext:je,withTooltip:Ke,resizeToOrignalImageSize:Ge,cssVars:ae?void 0:ie,themeClass:D?.themeClass,onRender:D?.onRender},qe)},render(){var e,a;const{clsPrefix:r,renderToolbar:c,withTooltip:s}=this,d=s(n(I,{clsPrefix:r,onClick:this.handleSwitchPrev},{default:()=>L1}),"tipPrevious"),m=s(n(I,{clsPrefix:r,onClick:this.handleSwitchNext},{default:()=>O1}),"tipNext"),w=s(n(I,{clsPrefix:r,onClick:this.rotateCounterclockwise},{default:()=>n(h1,null)}),"tipCounterclockwise"),g=s(n(I,{clsPrefix:r,onClick:this.rotateClockwise},{default:()=>n(f1,null)}),"tipClockwise"),l=s(n(I,{clsPrefix:r,onClick:this.resizeToOrignalImageSize},{default:()=>n(w1,null)}),"tipOriginalSize"),u=s(n(I,{clsPrefix:r,onClick:this.zoomOut},{default:()=>n(g1,null)}),"tipZoomOut"),f=s(n(I,{clsPrefix:r,onClick:this.handleDownloadClick},{default:()=>n(d1,null)}),"tipDownload"),k=s(n(I,{clsPrefix:r,onClick:this.toggleShow},{default:()=>S1}),"tipClose"),L=s(n(I,{clsPrefix:r,onClick:this.zoomIn},{default:()=>n(v1,null)}),"tipZoomIn");return n(Y,null,(a=(e=this.$slots).default)===null||a===void 0?void 0:a.call(e),n(so,{show:this.show},{default:()=>{var x;return this.show||this.displayed?((x=this.onRender)===null||x===void 0||x.call(this),le(n("div",{class:[`${r}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},n(V,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?n("div",{class:`${r}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?n(V,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?n("div",{class:`${r}-image-preview-toolbar`},c?c({nodes:{prev:d,next:m,rotateCounterclockwise:w,rotateClockwise:g,resizeToOriginalSize:l,zoomOut:u,zoomIn:L,download:f,close:k}}):n(Y,null,this.onPrev?n(Y,null,d,m):null,w,g,l,u,L,f,k)):null}):null,n(V,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:y={}}=this;return le(n("div",{class:`${r}-image-preview-wrapper`,ref:"previewWrapperRef"},n("img",Object.assign({},y,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${r}-image-preview`,y.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[uo,this.show]])}})),[[lo,{enabled:this.show}]])):null}}))}}),k1=me("n-image-group"),I1=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},He),A1=K({name:"Image",props:I1,inheritAttrs:!1,setup(e){const a=R(null),r=R(!1),c=R(null),s=be(k1,null),{mergedClsPrefixRef:d}=s||Le(e),m={click:()=>{if(e.previewDisabled||r.value)return;const l=e.previewSrc||e.src;if(s){s.setPreviewSrc(l),s.setThumbnailEl(a.value),s.toggleShow();return}const{value:u}=c;u&&(u.setPreviewSrc(l),u.setThumbnailEl(a.value),u.toggleShow())}},w=R(!e.lazy);ue(()=>{var l;(l=a.value)===null||l===void 0||l.setAttribute("data-group-id",s?.groupId||"")}),ue(()=>{if(e.lazy&&e.intersectionObserverOptions){let l;const u=ce(()=>{l?.(),l=void 0,l=x1(a.value,e.intersectionObserverOptions,w)});Ce(()=>{u(),l?.()})}}),ce(()=>{var l;e.src||((l=e.imgProps)===null||l===void 0||l.src),r.value=!1});const g=R(!1);return vo(Ne,{previewedImgPropsRef:pe(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:d,groupId:s?.groupId,previewInstRef:c,imageRef:a,showError:r,shouldStartLoading:w,loaded:g,mergedOnClick:l=>{var u,f;m.click(),(f=(u=e.imgProps)===null||u===void 0?void 0:u.onClick)===null||f===void 0||f.call(u,l)},mergedOnError:l=>{if(!w.value)return;r.value=!0;const{onError:u,imgProps:{onError:f}={}}=e;u?.(l),f?.(l)},mergedOnLoad:l=>{const{onLoad:u,imgProps:{onLoad:f}={}}=e;u?.(l),f?.(l),g.value=!0}},m)},render(){var e,a;const{mergedClsPrefix:r,imgProps:c={},loaded:s,$attrs:d,lazy:m}=this,w=(a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e),g=this.src||c.src,l=n("img",Object.assign(Object.assign({},c),{ref:"imageRef",width:this.width||c.width,height:this.height||c.height,src:this.showError?this.fallbackSrc:m&&this.intersectionObserverOptions?this.shouldStartLoading?g:void 0:g,alt:this.alt||c.alt,"aria-label":this.alt||c.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:m1&&m&&!this.intersectionObserverOptions?"lazy":"eager",style:[c.style||"",w&&!s?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return n("div",Object.assign({},d,{role:"none",class:[d.class,`${r}-image`,(this.previewDisabled||this.showError)&&`${r}-image--preview-disabled`]}),this.groupId?l:n(R1,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:r,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip,renderToolbar:this.renderToolbar},{default:()=>l,toolbar:()=>{var u,f;return(f=(u=this.$slots).toolbar)===null||f===void 0?void 0:f.call(u)}}),!s&&w)}});function D1({text:e,color:{background:a,foreground:r},errorCorrectionLevel:c,options:s}){const d=R("");return xe([e,a,r,c].filter(go),async()=>{H(e)&&(d.value=await mo.toDataURL(H(e).trim(),{color:{dark:H(r),light:H(a),...s?.color},errorCorrectionLevel:H(c)??"M",...s}))},{immediate:!0}),{qrcode:d}}export{A1 as _,D1 as u};
