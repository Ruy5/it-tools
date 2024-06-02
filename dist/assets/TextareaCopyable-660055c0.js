import{a as Q,an as _n,aT as pn,ay as bn,G as ue,H as En,J as Ae,aB as mn,d as Ge,K as yn,n as We,a8 as vn,q as Ee,ar as Ce,L as Ke,O as wn,R as ke,V as Nn,Z as xn,aU as Mn,v as Rn,o as me,e as Le,i as K,w as q,aV as On,g as I,f as Sn,c as Tn,W as Ie,l as An,t as Cn,aW as kn,ai as Ln,m as In,aX as $n,z as jn,D as Dn}from"./index-a4aadc31.js";import{C as Bn}from"./Copy-1fd70736.js";import{_ as Pn}from"./Scrollbar-50a84590.js";function Hn(e,n){const t=_n(pn,null);return Q(()=>e.hljs||t?.mergedHljsRef.value)}const Un=e=>{const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:g}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:g}},zn={name:"Code",common:bn,self:Un},Gn=zn,Wn=ue([En("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[Ae("show-line-numbers",`
 display: flex;
 `),mn("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),Ae("word-wrap",[ue("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),ue("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),ue("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const n=`${e.bPrefix}code`;return[`${n} .hljs-comment,
 ${n} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${n} .hljs-doctag,
 ${n} .hljs-keyword,
 ${n} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${n} .hljs-section,
 ${n} .hljs-name,
 ${n} .hljs-selector-tag,
 ${n} .hljs-deletion,
 ${n} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${n} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${n} .hljs-string,
 ${n} .hljs-regexp,
 ${n} .hljs-addition,
 ${n} .hljs-attribute,
 ${n} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${n} .hljs-built_in,
 ${n} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${n} .hljs-attr,
 ${n} .hljs-variable,
 ${n} .hljs-template-variable,
 ${n} .hljs-type,
 ${n} .hljs-selector-class,
 ${n} .hljs-selector-attr,
 ${n} .hljs-selector-pseudo,
 ${n} .hljs-number {
 color: var(--n-hue-6);
 }`,`${n} .hljs-symbol,
 ${n} .hljs-bullet,
 ${n} .hljs-link,
 ${n} .hljs-meta,
 ${n} .hljs-selector-id,
 ${n} .hljs-title {
 color: var(--n-hue-2);
 }`,`${n} .hljs-emphasis {
 font-style: italic;
 }`,`${n} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${n} .hljs-link {
 text-decoration: underline;
 }`]}]),Kn=Object.assign(Object.assign({},Ke.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),Fn=Ge({name:"Code",props:Kn,setup(e,{slots:n}){const{internalNoHighlight:t}=e,{mergedClsPrefixRef:o,inlineThemeDisabled:g}=yn(),f=We(null),i=t?{value:void 0}:Hn(e),r=(E,x,N)=>{const{value:M}=i;return!M||!(E&&M.getLanguage(E))?null:M.highlight(N?x.trim():x,{language:E}).value},c=Q(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),_=()=>{if(n.default)return;const{value:E}=f;if(!E)return;const{language:x}=e,N=e.uri?window.decodeURIComponent(e.code):e.code;if(x){const T=r(x,N,e.trim);if(T!==null){if(e.inline)E.innerHTML=T;else{const j=E.querySelector(".__code__");j&&E.removeChild(j);const A=document.createElement("pre");A.className="__code__",A.innerHTML=T,E.appendChild(A)}return}}if(e.inline){E.textContent=N;return}const M=E.querySelector(".__code__");if(M)M.textContent=N;else{const T=document.createElement("pre");T.className="__code__",T.textContent=N,E.innerHTML="",E.appendChild(T)}};vn(_),Ee(Ce(e,"language"),_),Ee(Ce(e,"code"),_),t||Ee(i,_);const b=Ke("Code","-code",Wn,Gn,e,o),S=Q(()=>{const{common:{cubicBezierEaseInOut:E,fontFamilyMono:x},self:{textColor:N,fontSize:M,fontWeightStrong:T,lineNumberTextColor:j,"mono-3":A,"hue-1":L,"hue-2":J,"hue-3":ee,"hue-4":D,"hue-5":de,"hue-5-2":B,"hue-6":se,"hue-6-2":re}}=b.value,{internalFontSize:ie}=e;return{"--n-font-size":ie?`${ie}px`:M,"--n-font-family":x,"--n-font-weight-strong":T,"--n-bezier":E,"--n-text-color":N,"--n-mono-3":A,"--n-hue-1":L,"--n-hue-2":J,"--n-hue-3":ee,"--n-hue-4":D,"--n-hue-5":de,"--n-hue-5-2":B,"--n-hue-6":se,"--n-hue-6-2":re,"--n-line-number-text-color":j}}),w=g?wn("code",Q(()=>`${e.internalFontSize||"a"}`),S,e):void 0;return{mergedClsPrefix:o,codeRef:f,mergedShowLineNumbers:c,lineNumbers:Q(()=>{let E=1;const x=[];let N=!1;for(const M of e.code)M===`
`?(N=!0,x.push(E++)):N=!1;return N||x.push(E++),x.join(`
`)}),cssVars:g?void 0:S,themeClass:w?.themeClass,onRender:w?.onRender}},render(){var e,n;const{mergedClsPrefix:t,wordWrap:o,mergedShowLineNumbers:g,onRender:f}=this;return f?.(),ke("code",{class:[`${t}-code`,this.themeClass,o&&`${t}-code--word-wrap`,g&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},g?ke("pre",{class:`${t}-code__line-numbers`},this.lineNumbers):null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}});function Fe(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],o=typeof t;(o==="object"||o==="function")&&!Object.isFrozen(t)&&Fe(t)}),e}class $e{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ye(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function G(e,...n){const t=Object.create(null);for(const o in e)t[o]=e[o];return n.forEach(function(o){for(const g in o)t[g]=o[g]}),t}const Yn="</span>",je=e=>!!e.scope,Vn=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((o,g)=>`${o}${"_".repeat(g+1)}`)].join(" ")}return`${n}${e}`};class qn{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Ye(n)}openNode(n){if(!je(n))return;const t=Vn(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){je(n)&&(this.buffer+=Yn)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const De=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class ve{constructor(){this.rootNode=De(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=De({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(o=>this._walk(n,o)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{ve._collapse(t)}))}}class Xn extends ve{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const o=n.root;t&&(o.scope=`language:${t}`),this.add(o)}toHTML(){return new qn(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function ne(e){return e?typeof e=="string"?e:e.source:null}function Ve(e){return V("(?=",e,")")}function Qn(e){return V("(?:",e,")*")}function Zn(e){return V("(?:",e,")?")}function V(...e){return e.map(t=>ne(t)).join("")}function Jn(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function we(...e){return"("+(Jn(e).capture?"":"?:")+e.map(o=>ne(o)).join("|")+")"}function qe(e){return new RegExp(e.toString()+"|").exec("").length-1}function et(e,n){const t=e&&e.exec(n);return t&&t.index===0}const nt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Ne(e,{joinWith:n}){let t=0;return e.map(o=>{t+=1;const g=t;let f=ne(o),i="";for(;f.length>0;){const r=nt.exec(f);if(!r){i+=f;break}i+=f.substring(0,r.index),f=f.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?i+="\\"+String(Number(r[1])+g):(i+=r[0],r[0]==="("&&t++)}return i}).map(o=>`(${o})`).join(n)}const tt=/\b\B/,Xe="[a-zA-Z]\\w*",xe="[a-zA-Z_]\\w*",Qe="\\b\\d+(\\.\\d+)?",Ze="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Je="\\b(0b[01]+)",st="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",rt=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=V(n,/.*\b/,e.binary,/\b.*/)),G({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,o)=>{t.index!==0&&o.ignoreMatch()}},e)},te={begin:"\\\\[\\s\\S]",relevance:0},it={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[te]},at={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[te]},ot={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},he=function(e,n,t={}){const o=G({scope:"comment",begin:e,end:n,contains:[]},t);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const g=we("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:V(/[ ]+/,"(",g,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},ct=he("//","$"),lt=he("/\\*","\\*/"),ut=he("#","$"),gt={scope:"number",begin:Qe,relevance:0},ft={scope:"number",begin:Ze,relevance:0},ht={scope:"number",begin:Je,relevance:0},dt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[te,{begin:/\[/,end:/\]/,relevance:0,contains:[te]}]},_t={scope:"title",begin:Xe,relevance:0},pt={scope:"title",begin:xe,relevance:0},bt={begin:"\\.\\s*"+xe,relevance:0},Et=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var ge=Object.freeze({__proto__:null,APOS_STRING_MODE:it,BACKSLASH_ESCAPE:te,BINARY_NUMBER_MODE:ht,BINARY_NUMBER_RE:Je,COMMENT:he,C_BLOCK_COMMENT_MODE:lt,C_LINE_COMMENT_MODE:ct,C_NUMBER_MODE:ft,C_NUMBER_RE:Ze,END_SAME_AS_BEGIN:Et,HASH_COMMENT_MODE:ut,IDENT_RE:Xe,MATCH_NOTHING_RE:tt,METHOD_GUARD:bt,NUMBER_MODE:gt,NUMBER_RE:Qe,PHRASAL_WORDS_MODE:ot,QUOTE_STRING_MODE:at,REGEXP_MODE:dt,RE_STARTERS_RE:st,SHEBANG:rt,TITLE_MODE:_t,UNDERSCORE_IDENT_RE:xe,UNDERSCORE_TITLE_MODE:pt});function mt(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function yt(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function vt(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=mt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function wt(e,n){Array.isArray(e.illegal)&&(e.illegal=we(...e.illegal))}function Nt(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function xt(e,n){e.relevance===void 0&&(e.relevance=1)}const Mt=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(o=>{delete e[o]}),e.keywords=t.keywords,e.begin=V(t.beforeMatch,Ve(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},Rt=["of","and","for","in","not","or","if","then","parent","list","value"],Ot="keyword";function en(e,n,t=Ot){const o=Object.create(null);return typeof e=="string"?g(t,e.split(" ")):Array.isArray(e)?g(t,e):Object.keys(e).forEach(function(f){Object.assign(o,en(e[f],n,f))}),o;function g(f,i){n&&(i=i.map(r=>r.toLowerCase())),i.forEach(function(r){const c=r.split("|");o[c[0]]=[f,St(c[0],c[1])]})}}function St(e,n){return n?Number(n):Tt(e)?0:1}function Tt(e){return Rt.includes(e.toLowerCase())}const Be={},Y=e=>{console.error(e)},Pe=(e,...n)=>{console.log(`WARN: ${e}`,...n)},X=(e,n)=>{Be[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),Be[`${e}/${n}`]=!0)},fe=new Error;function nn(e,n,{key:t}){let o=0;const g=e[t],f={},i={};for(let r=1;r<=n.length;r++)i[r+o]=g[r],f[r+o]=!0,o+=qe(n[r-1]);e[t]=i,e[t]._emit=f,e[t]._multi=!0}function At(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Y("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),fe;if(typeof e.beginScope!="object"||e.beginScope===null)throw Y("beginScope must be object"),fe;nn(e,e.begin,{key:"beginScope"}),e.begin=Ne(e.begin,{joinWith:""})}}function Ct(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Y("skip, excludeEnd, returnEnd not compatible with endScope: {}"),fe;if(typeof e.endScope!="object"||e.endScope===null)throw Y("endScope must be object"),fe;nn(e,e.end,{key:"endScope"}),e.end=Ne(e.end,{joinWith:""})}}function kt(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Lt(e){kt(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),At(e),Ct(e)}function It(e){function n(i,r){return new RegExp(ne(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,r]),this.matchAt+=qe(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(c=>c[1]);this.matcherRe=n(Ne(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(r);if(!c)return null;const _=c.findIndex((S,w)=>w>0&&S!==void 0),b=this.matchIndexes[_];return c.splice(0,_),Object.assign(c,b)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const c=new t;return this.rules.slice(r).forEach(([_,b])=>c.addRule(_,b)),c.compile(),this.multiRegexes[r]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,c){this.rules.push([r,c]),c.type==="begin"&&this.count++}exec(r){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let _=c.exec(r);if(this.resumingScanAtSamePosition()&&!(_&&_.index===this.lastIndex)){const b=this.getMatcher(0);b.lastIndex=this.lastIndex+1,_=b.exec(r)}return _&&(this.regexIndex+=_.position+1,this.regexIndex===this.count&&this.considerAll()),_}}function g(i){const r=new o;return i.contains.forEach(c=>r.addRule(c.begin,{rule:c,type:"begin"})),i.terminatorEnd&&r.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&r.addRule(i.illegal,{type:"illegal"}),r}function f(i,r){const c=i;if(i.isCompiled)return c;[yt,Nt,Lt,Mt].forEach(b=>b(i,r)),e.compilerExtensions.forEach(b=>b(i,r)),i.__beforeBegin=null,[vt,wt,xt].forEach(b=>b(i,r)),i.isCompiled=!0;let _=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),_=i.keywords.$pattern,delete i.keywords.$pattern),_=_||/\w+/,i.keywords&&(i.keywords=en(i.keywords,e.case_insensitive)),c.keywordPatternRe=n(_,!0),r&&(i.begin||(i.begin=/\B|\b/),c.beginRe=n(c.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(c.endRe=n(c.end)),c.terminatorEnd=ne(c.end)||"",i.endsWithParent&&r.terminatorEnd&&(c.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),i.illegal&&(c.illegalRe=n(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(b){return $t(b==="self"?i:b)})),i.contains.forEach(function(b){f(b,c)}),i.starts&&f(i.starts,r),c.matcher=g(c),c}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=G(e.classNameAliases||{}),f(e)}function tn(e){return e?e.endsWithParent||tn(e.starts):!1}function $t(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return G(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:tn(e)?G(e,{starts:e.starts?G(e.starts):null}):Object.isFrozen(e)?G(e):e}var jt="11.9.0";class Dt extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const ye=Ye,He=G,Ue=Symbol("nomatch"),Bt=7,sn=function(e){const n=Object.create(null),t=Object.create(null),o=[];let g=!0;const f="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Xn};function c(s){return r.noHighlightRe.test(s)}function _(s){let u=s.className+" ";u+=s.parentNode?s.parentNode.className:"";const p=r.languageDetectRe.exec(u);if(p){const y=B(p[1]);return y||(Pe(f.replace("{}",p[1])),Pe("Falling back to no-highlight mode for this block.",s)),y?p[1]:"no-highlight"}return u.split(/\s+/).find(y=>c(y)||B(y))}function b(s,u,p){let y="",R="";typeof u=="object"?(y=s,p=u.ignoreIllegals,R=u.language):(X("10.7.0","highlight(lang, code, ...args) has been deprecated."),X("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),R=s,y=u),p===void 0&&(p=!0);const $={code:y,language:R};ae("before:highlight",$);const z=$.result?$.result:S($.language,$.code,p);return z.code=$.code,ae("after:highlight",z),z}function S(s,u,p,y){const R=Object.create(null);function $(a,l){return a.keywords[l]}function z(){if(!h.keywords){O.addText(v);return}let a=0;h.keywordPatternRe.lastIndex=0;let l=h.keywordPatternRe.exec(v),d="";for(;l;){d+=v.substring(a,l.index);const m=H.case_insensitive?l[0].toLowerCase():l[0],C=$(h,m);if(C){const[U,hn]=C;if(O.addText(d),d="",R[m]=(R[m]||0)+1,R[m]<=Bt&&(le+=hn),U.startsWith("_"))d+=l[0];else{const dn=H.classNameAliases[U]||U;P(l[0],dn)}}else d+=l[0];a=h.keywordPatternRe.lastIndex,l=h.keywordPatternRe.exec(v)}d+=v.substring(a),O.addText(d)}function oe(){if(v==="")return;let a=null;if(typeof h.subLanguage=="string"){if(!n[h.subLanguage]){O.addText(v);return}a=S(h.subLanguage,v,!0,Te[h.subLanguage]),Te[h.subLanguage]=a._top}else a=E(v,h.subLanguage.length?h.subLanguage:null);h.relevance>0&&(le+=a.relevance),O.__addSublanguage(a._emitter,a.language)}function k(){h.subLanguage!=null?oe():z(),v=""}function P(a,l){a!==""&&(O.startScope(l),O.addText(a),O.endScope())}function Me(a,l){let d=1;const m=l.length-1;for(;d<=m;){if(!a._emit[d]){d++;continue}const C=H.classNameAliases[a[d]]||a[d],U=l[d];C?P(U,C):(v=U,z(),v=""),d++}}function Re(a,l){return a.scope&&typeof a.scope=="string"&&O.openNode(H.classNameAliases[a.scope]||a.scope),a.beginScope&&(a.beginScope._wrap?(P(v,H.classNameAliases[a.beginScope._wrap]||a.beginScope._wrap),v=""):a.beginScope._multi&&(Me(a.beginScope,l),v="")),h=Object.create(a,{parent:{value:h}}),h}function Oe(a,l,d){let m=et(a.endRe,d);if(m){if(a["on:end"]){const C=new $e(a);a["on:end"](l,C),C.isMatchIgnored&&(m=!1)}if(m){for(;a.endsParent&&a.parent;)a=a.parent;return a}}if(a.endsWithParent)return Oe(a.parent,l,d)}function cn(a){return h.matcher.regexIndex===0?(v+=a[0],1):(be=!0,0)}function ln(a){const l=a[0],d=a.rule,m=new $e(d),C=[d.__beforeBegin,d["on:begin"]];for(const U of C)if(U&&(U(a,m),m.isMatchIgnored))return cn(l);return d.skip?v+=l:(d.excludeBegin&&(v+=l),k(),!d.returnBegin&&!d.excludeBegin&&(v=l)),Re(d,a),d.returnBegin?0:l.length}function un(a){const l=a[0],d=u.substring(a.index),m=Oe(h,a,d);if(!m)return Ue;const C=h;h.endScope&&h.endScope._wrap?(k(),P(l,h.endScope._wrap)):h.endScope&&h.endScope._multi?(k(),Me(h.endScope,a)):C.skip?v+=l:(C.returnEnd||C.excludeEnd||(v+=l),k(),C.excludeEnd&&(v=l));do h.scope&&O.closeNode(),!h.skip&&!h.subLanguage&&(le+=h.relevance),h=h.parent;while(h!==m.parent);return m.starts&&Re(m.starts,a),C.returnEnd?0:l.length}function gn(){const a=[];for(let l=h;l!==H;l=l.parent)l.scope&&a.unshift(l.scope);a.forEach(l=>O.openNode(l))}let ce={};function Se(a,l){const d=l&&l[0];if(v+=a,d==null)return k(),0;if(ce.type==="begin"&&l.type==="end"&&ce.index===l.index&&d===""){if(v+=u.slice(l.index,l.index+1),!g){const m=new Error(`0 width match regex (${s})`);throw m.languageName=s,m.badRule=ce.rule,m}return 1}if(ce=l,l.type==="begin")return ln(l);if(l.type==="illegal"&&!p){const m=new Error('Illegal lexeme "'+d+'" for mode "'+(h.scope||"<unnamed>")+'"');throw m.mode=h,m}else if(l.type==="end"){const m=un(l);if(m!==Ue)return m}if(l.type==="illegal"&&d==="")return 1;if(pe>1e5&&pe>l.index*3)throw new Error("potential infinite loop, way more iterations than matches");return v+=d,d.length}const H=B(s);if(!H)throw Y(f.replace("{}",s)),new Error('Unknown language: "'+s+'"');const fn=It(H);let _e="",h=y||fn;const Te={},O=new r.__emitter(r);gn();let v="",le=0,W=0,pe=0,be=!1;try{if(H.__emitTokens)H.__emitTokens(u,O);else{for(h.matcher.considerAll();;){pe++,be?be=!1:h.matcher.considerAll(),h.matcher.lastIndex=W;const a=h.matcher.exec(u);if(!a)break;const l=u.substring(W,a.index),d=Se(l,a);W=a.index+d}Se(u.substring(W))}return O.finalize(),_e=O.toHTML(),{language:s,value:_e,relevance:le,illegal:!1,_emitter:O,_top:h}}catch(a){if(a.message&&a.message.includes("Illegal"))return{language:s,value:ye(u),illegal:!0,relevance:0,_illegalBy:{message:a.message,index:W,context:u.slice(W-100,W+100),mode:a.mode,resultSoFar:_e},_emitter:O};if(g)return{language:s,value:ye(u),illegal:!1,relevance:0,errorRaised:a,_emitter:O,_top:h};throw a}}function w(s){const u={value:ye(s),illegal:!1,relevance:0,_top:i,_emitter:new r.__emitter(r)};return u._emitter.addText(s),u}function E(s,u){u=u||r.languages||Object.keys(n);const p=w(s),y=u.filter(B).filter(re).map(k=>S(k,s,!1));y.unshift(p);const R=y.sort((k,P)=>{if(k.relevance!==P.relevance)return P.relevance-k.relevance;if(k.language&&P.language){if(B(k.language).supersetOf===P.language)return 1;if(B(P.language).supersetOf===k.language)return-1}return 0}),[$,z]=R,oe=$;return oe.secondBest=z,oe}function x(s,u,p){const y=u&&t[u]||p;s.classList.add("hljs"),s.classList.add(`language-${y}`)}function N(s){let u=null;const p=_(s);if(c(p))return;if(ae("before:highlightElement",{el:s,language:p}),s.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",s);return}if(s.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(s)),r.throwUnescapedHTML))throw new Dt("One of your code blocks includes unescaped HTML.",s.innerHTML);u=s;const y=u.textContent,R=p?b(y,{language:p,ignoreIllegals:!0}):E(y);s.innerHTML=R.value,s.dataset.highlighted="yes",x(s,p,R.language),s.result={language:R.language,re:R.relevance,relevance:R.relevance},R.secondBest&&(s.secondBest={language:R.secondBest.language,relevance:R.secondBest.relevance}),ae("after:highlightElement",{el:s,result:R,text:y})}function M(s){r=He(r,s)}const T=()=>{L(),X("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function j(){L(),X("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let A=!1;function L(){if(document.readyState==="loading"){A=!0;return}document.querySelectorAll(r.cssSelector).forEach(N)}function J(){A&&L()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",J,!1);function ee(s,u){let p=null;try{p=u(e)}catch(y){if(Y("Language definition for '{}' could not be registered.".replace("{}",s)),g)Y(y);else throw y;p=i}p.name||(p.name=s),n[s]=p,p.rawDefinition=u.bind(null,e),p.aliases&&se(p.aliases,{languageName:s})}function D(s){delete n[s];for(const u of Object.keys(t))t[u]===s&&delete t[u]}function de(){return Object.keys(n)}function B(s){return s=(s||"").toLowerCase(),n[s]||n[t[s]]}function se(s,{languageName:u}){typeof s=="string"&&(s=[s]),s.forEach(p=>{t[p.toLowerCase()]=u})}function re(s){const u=B(s);return u&&!u.disableAutodetect}function ie(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=u=>{s["before:highlightBlock"](Object.assign({block:u.el},u))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=u=>{s["after:highlightBlock"](Object.assign({block:u.el},u))})}function rn(s){ie(s),o.push(s)}function an(s){const u=o.indexOf(s);u!==-1&&o.splice(u,1)}function ae(s,u){const p=s;o.forEach(function(y){y[p]&&y[p](u)})}function on(s){return X("10.7.0","highlightBlock will be removed entirely in v12.0"),X("10.7.0","Please use highlightElement now."),N(s)}Object.assign(e,{highlight:b,highlightAuto:E,highlightAll:L,highlightElement:N,highlightBlock:on,configure:M,initHighlighting:T,initHighlightingOnLoad:j,registerLanguage:ee,unregisterLanguage:D,listLanguages:de,getLanguage:B,registerAliases:se,autoDetection:re,inherit:He,addPlugin:rn,removePlugin:an}),e.debugMode=function(){g=!1},e.safeMode=function(){g=!0},e.versionString=jt,e.regex={concat:V,lookahead:Ve,either:we,optional:Zn,anyNumberOfTimes:Qn};for(const s in ge)typeof ge[s]=="object"&&Fe(ge[s]);return Object.assign(e,ge),e},Z=sn({});Z.newInstance=()=>sn({});var Pt=Z;Z.HighlightJS=Z;Z.default=Z;const F=Nn(Pt);function Ht(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},o=["true","false","null"],g={scope:"literal",beginKeywords:o.join(" ")};return{name:"JSON",keywords:{literal:o},contains:[n,t,e.QUOTE_STRING_MODE,g,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Ut(e){const n=e.regex,t=e.COMMENT("--","$"),o={className:"string",variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},g={begin:/"/,end:/"/,contains:[{begin:/""/}]},f=["true","false","unknown"],i=["double precision","large object","with timezone","without timezone"],r=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],c=["add","asc","collation","desc","final","first","last","view"],_=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year"],b=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],S=["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"],w=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],E=b,x=[..._,...c].filter(A=>!b.includes(A)),N={className:"variable",begin:/@[a-z0-9][a-z0-9_]*/},M={className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0},T={begin:n.concat(/\b/,n.either(...E),/\s*\(/),relevance:0,keywords:{built_in:E}};function j(A,{exceptions:L,when:J}={}){const ee=J;return L=L||[],A.map(D=>D.match(/\|\d+$/)||L.includes(D)?D:ee(D)?`${D}|0`:D)}return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:j(x,{when:A=>A.length<3}),literal:f,type:r,built_in:S},contains:[{begin:n.either(...w),relevance:0,keywords:{$pattern:/[\w\.]+/,keyword:x.concat(w),literal:f,type:r}},{className:"type",begin:n.either(...i)},T,N,o,g,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,M]}}function ze(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),o=/[\p{L}0-9._:-]+/u,g={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},f={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(f,{begin:/\(/,end:/\)/}),r=e.inherit(e.APOS_STRING_MODE,{className:"string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),_={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:o,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[g]},{begin:/'/,end:/'/,contains:[g]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[f,c,r,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[f,i,c,r]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},g,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[_],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[_],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:_}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function zt(e){const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",o={className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ 	]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ 	]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]},g={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},f={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,g]},i=e.inherit(f,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),r="[0-9]{4}(-[0-9][0-9]){0,2}",c="([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",_="(\\.[0-9]*)?",b="([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",S={className:"number",begin:"\\b"+r+c+_+b+"\\b"},w={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},E={begin:/\{/,end:/\}/,contains:[w],illegal:"\\n",relevance:0},x={begin:"\\[",end:"\\]",contains:[w],illegal:"\\n",relevance:0},N=[o,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},S,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},E,x,f],M=[...N];return M.pop(),M.push(i),w.contains=M,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:N}}function Gt(e){const n=e.regex,t={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]},o=e.COMMENT();o.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const g={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},f={className:"literal",begin:/\bon|off|true|false|yes|no\b/},i={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},r={begin:/\[/,end:/\]/,contains:[o,f,g,i,t,"self"],relevance:0},c=/[A-Za-z0-9_-]+/,_=/"(\\"|[^"])*"/,b=/'[^']*'/,S=n.either(c,_,b),w=n.concat(S,"(\\s*\\.\\s*",S,")*",n.lookahead(/\s*=\s*[^#\s]/));return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[o,{className:"section",begin:/\[+/,end:/\]+/},{begin:w,className:"attr",starts:{end:/$/,contains:[o,r,f,g,i,t]}}]}}const Wt={style:{"overflow-x":"hidden",width:"100%"}},Kt={absolute:"","right-10px":"","top-10px":""},Ft={key:0,"mt-4":"",flex:"","justify-center":""},Yt=Ge({__name:"TextareaCopyable",props:{value:{},followHeightOf:{default:null},language:{default:"txt"},copyPlacement:{default:"top-right"},copyMessage:{default:"Copy to clipboard"}},setup(e){const n=e;F.registerLanguage("sql",Ut),F.registerLanguage("json",Ht),F.registerLanguage("html",ze),F.registerLanguage("xml",ze),F.registerLanguage("yaml",zt),F.registerLanguage("toml",Gt);const{value:t,language:o,followHeightOf:g,copyPlacement:f,copyMessage:i}=xn(n),{height:r}=g.value?Mn(g):{height:We(null)},{copy:c,isJustCopied:_}=Rn({source:t,createToast:!1}),b=Q(()=>_.value?"Copied!":i.value);return(S,w)=>{const E=Fn,x=kn,N=Pn,M=Ln,T=In,j=$n,A=jn;return me(),Le("div",Wt,[K(A,{relative:""},{default:q(()=>[K(N,{"x-scrollable":"",trigger:"none",style:On(I(r)?`min-height: ${I(r)-40+10}px`:"")},{default:q(()=>[K(x,{hljs:I(F)},{default:q(()=>[K(E,{code:I(t),language:I(o),trim:!1,"data-test-id":"area-content"},null,8,["code","language"])]),_:1},8,["hljs"])]),_:1},8,["style"]),Sn("div",Kt,[I(t)?(me(),Tn(j,{key:0,tooltip:I(b),position:"left"},{default:q(()=>[K(T,{circle:"","important:h-10":"","important:w-10":"",onClick:w[0]||(w[0]=L=>I(c)())},{default:q(()=>[K(M,{size:"22",component:I(Bn)},null,8,["component"])]),_:1})]),_:1},8,["tooltip"])):Ie("",!0)])]),_:1}),I(f)==="outside"?(me(),Le("div",Ft,[K(T,{onClick:w[1]||(w[1]=L=>I(c)())},{default:q(()=>[An(Cn(I(b)),1)]),_:1})])):Ie("",!0)])}}});const Qt=Dn(Yt,[["__scopeId","data-v-2909a8ef"]]);export{Qt as T};