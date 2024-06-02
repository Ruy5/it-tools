import{d as A,R as n,H as k,aD as oe,G as _,J as R,aB as N,K as ge,b6 as Pe,aq as be,aS as ve,aZ as Ve,ay as Ce,a$ as Ie,a_ as Re,cs as $e,am as Be,an as le,n as te,ar as W,aE as Ae,L as ke,a as U,O as De,b2 as se,b3 as E,b7 as ue,ct as q,cu as Z,aN as Me,aJ as H,q as Oe,b as ce,o as C,e as F,f as J,F as X,r as de,g as I,i as Y,w as Q,t as pe,c as G,l as xe,W as Ue,y as je,X as Ee,D as Le}from"./index-a4aadc31.js";import{T as Ne}from"./TextareaCopyable-660055c0.js";import{f as We}from"./use-form-item-03982fc2.js";import{b as Fe,N as ae,B as L}from"./Button-908b01e0.js";import{u as Ge}from"./use-locale-10c58c8b.js";import{A as me,R as Ke}from"./Remove-3597b761.js";import{_ as ze}from"./FormItem-f45445df.js";import{_ as qe}from"./InputGroupLabel-8303a51a.js";import{_ as Ze}from"./InputGroup-8142613a.js";import"./Copy-1fd70736.js";import"./Scrollbar-50a84590.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-8578b472.js";const He=A({name:"ArrowDown",render(){return n("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},n("g",{"fill-rule":"nonzero"},n("path",{d:"M23.7916,15.2664 C24.0788,14.9679 24.0696,14.4931 23.7711,14.206 C23.4726,13.9188 22.9978,13.928 22.7106,14.2265 L14.7511,22.5007 L14.7511,3.74792 C14.7511,3.33371 14.4153,2.99792 14.0011,2.99792 C13.5869,2.99792 13.2511,3.33371 13.2511,3.74793 L13.2511,22.4998 L5.29259,14.2265 C5.00543,13.928 4.53064,13.9188 4.23213,14.206 C3.93361,14.4931 3.9244,14.9679 4.21157,15.2664 L13.2809,24.6944 C13.6743,25.1034 14.3289,25.1034 14.7223,24.6944 L23.7916,15.2664 Z"}))))}}),Je=A({name:"ArrowUp",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n("g",{fill:"none"},n("path",{d:"M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",fill:"currentColor"})))}}),m="0!important",we="-1px!important";function O(e){return R(e+"-type",[_("& +",[k("button",{},[R(e+"-type",[N("border",{borderLeftWidth:m}),N("state-border",{left:we})])])])])}function x(e){return R(e+"-type",[_("& +",[k("button",[R(e+"-type",[N("border",{borderTopWidth:m}),N("state-border",{top:we})])])])])}const Xe=k("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[oe("vertical",{flexDirection:"row"},[oe("rtl",[k("button",[_("&:first-child:not(:last-child)",`
 margin-right: ${m};
 border-top-right-radius: ${m};
 border-bottom-right-radius: ${m};
 `),_("&:last-child:not(:first-child)",`
 margin-left: ${m};
 border-top-left-radius: ${m};
 border-bottom-left-radius: ${m};
 `),_("&:not(:first-child):not(:last-child)",`
 margin-left: ${m};
 margin-right: ${m};
 border-radius: ${m};
 `),O("default"),R("ghost",[O("primary"),O("info"),O("success"),O("warning"),O("error")])])])]),R("vertical",{flexDirection:"column"},[k("button",[_("&:first-child:not(:last-child)",`
 margin-bottom: ${m};
 margin-left: ${m};
 margin-right: ${m};
 border-bottom-left-radius: ${m};
 border-bottom-right-radius: ${m};
 `),_("&:last-child:not(:first-child)",`
 margin-top: ${m};
 margin-left: ${m};
 margin-right: ${m};
 border-top-left-radius: ${m};
 border-top-right-radius: ${m};
 `),_("&:not(:first-child):not(:last-child)",`
 margin: ${m};
 border-radius: ${m};
 `),x("default"),R("ghost",[x("primary"),x("info"),x("success"),x("warning"),x("error")])])])]),Ye={size:{type:String,default:void 0},vertical:Boolean},Qe=A({name:"ButtonGroup",props:Ye,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:o}=ge(e);return Pe("-button-group",Xe,a),be(Fe,e),{rtlEnabled:ve("ButtonGroup",o,a),mergedClsPrefix:a}},render(){const{mergedClsPrefix:e}=this;return n("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),et=()=>$e,tt=Ve({name:"DynamicInput",common:Ce,peers:{Input:Ie,Button:Re},self:et}),at=tt,ie=Be("n-dynamic-input"),lt=A({name:"DynamicInputInputPreset",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:""},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:e,placeholderRef:a}=le(ie);return{mergedTheme:e,placeholder:a}},render(){const{mergedTheme:e,placeholder:a,value:o,clsPrefix:i,onUpdateValue:r,disabled:s}=this;return n("div",{class:`${i}-dynamic-input-preset-input`},n(ae,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:o,placeholder:a,onUpdateValue:r,disabled:s}))}}),it=A({name:"DynamicInputPairPreset",props:{clsPrefix:{type:String,required:!0},value:{type:Object,default:()=>({key:"",value:""})},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(e){const{mergedThemeRef:a,keyPlaceholderRef:o,valuePlaceholderRef:i}=le(ie);return{mergedTheme:a,keyPlaceholder:o,valuePlaceholder:i,handleKeyInput(r){e.onUpdateValue({key:r,value:e.value.value})},handleValueInput(r){e.onUpdateValue({key:e.value.key,value:r})}}},render(){const{mergedTheme:e,keyPlaceholder:a,valuePlaceholder:o,value:i,clsPrefix:r,disabled:s}=this;return n("div",{class:`${r}-dynamic-input-preset-pair`},n(ae,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:i.key,class:`${r}-dynamic-input-pair-input`,placeholder:a,onUpdateValue:this.handleKeyInput,disabled:s}),n(ae,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:i.value,class:`${r}-dynamic-input-pair-input`,placeholder:o,onUpdateValue:this.handleValueInput,disabled:s}))}}),nt=k("dynamic-input",{width:"100%"},[k("dynamic-input-item",`
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `,[k("dynamic-input-preset-input",{flex:1,alignItems:"center"}),k("dynamic-input-preset-pair",`
 flex: 1;
 display: flex;
 align-items: center;
 `,[k("dynamic-input-pair-input",[_("&:first-child",{"margin-right":"12px"})])]),N("action",`
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `,[R("icon",{cursor:"pointer"})]),_("&:last-child",{marginBottom:0})]),k("form-item",`
 padding-top: 0 !important;
 margin-right: 0 !important;
 `,[k("form-item-blank",{paddingTop:"0 !important"})])]),K=new WeakMap,rt=Object.assign(Object.assign({},ke.props),{max:Number,min:{type:Number,default:0},value:Array,defaultValue:{type:Array,default:()=>[]},preset:{type:String,default:"input"},keyField:String,itemClass:String,itemStyle:[String,Object],keyPlaceholder:{type:String,default:""},valuePlaceholder:{type:String,default:""},placeholder:{type:String,default:""},disabled:Boolean,showSortButton:Boolean,createButtonProps:Object,onCreate:Function,onRemove:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClear:Function,onInput:[Function,Array]}),ot=A({name:"DynamicInput",props:rt,setup(e,{slots:a}){const{mergedComponentPropsRef:o,mergedClsPrefixRef:i,mergedRtlRef:r,inlineThemeDisabled:s}=ge(),c=le(We,null),d=te(e.defaultValue),S=W(e,"value"),f=Ae(S,d),w=ke("DynamicInput","-dynamic-input",nt,at,e,i),g=U(()=>{const{value:t}=f;if(Array.isArray(t)){const{max:l}=e;return l!==void 0&&t.length>=l}return!1}),$=U(()=>{const{value:t}=f;return Array.isArray(t)?t.length<=e.min:!0}),D=U(()=>{var t,l;return(l=(t=o?.value)===null||t===void 0?void 0:t.DynamicInput)===null||l===void 0?void 0:l.buttonSize});function y(t){const{onInput:l,"onUpdate:value":p,onUpdateValue:u}=e;l&&H(l,t),p&&H(p,t),u&&H(u,t),d.value=t}function P(t,l){if(t==null||typeof t!="object")return l;const p=q(t)?Z(t):t;let u=K.get(p);return u===void 0&&K.set(p,u=Me()),u}function B(t,l){const{value:p}=f,u=Array.from(p??[]),V=u[t];if(u[t]=l,V&&l&&typeof V=="object"&&typeof l=="object"){const Te=q(V)?Z(V):V,Se=q(l)?Z(l):l,re=K.get(Te);re!==void 0&&K.set(Se,re)}y(u)}function T(){b(-1)}function b(t){const{value:l}=f,{onCreate:p}=e,u=Array.from(l??[]);if(p)u.splice(t+1,0,p(t+1)),y(u);else if(a.default)u.splice(t+1,0,null),y(u);else switch(e.preset){case"input":u.splice(t+1,0,""),y(u);break;case"pair":u.splice(t+1,0,{key:"",value:""}),y(u);break}}function v(t){const{value:l}=f;if(!Array.isArray(l))return;const{min:p}=e;if(l.length<=p)return;const{onRemove:u}=e;u&&u(t);const V=Array.from(l);V.splice(t,1),y(V)}function h(t,l,p){if(l<0||p<0||l>=t.length||p>=t.length||l===p)return;const u=t[l];t[l]=t[p],t[p]=u}function j(t,l){const{value:p}=f;if(!Array.isArray(p))return;const u=Array.from(p);t==="up"&&h(u,l,l-1),t==="down"&&h(u,l,l+1),y(u)}be(ie,{mergedThemeRef:w,keyPlaceholderRef:W(e,"keyPlaceholder"),valuePlaceholderRef:W(e,"valuePlaceholder"),placeholderRef:W(e,"placeholder")});const _e=ve("DynamicInput",r,i),ne=U(()=>{const{self:{actionMargin:t,actionMarginRtl:l}}=w.value;return{"--action-margin":t,"--action-margin-rtl":l}}),M=s?De("dynamic-input",void 0,ne,e):void 0;return{locale:Ge("DynamicInput").localeRef,rtlEnabled:_e,buttonSize:D,mergedClsPrefix:i,NFormItem:c,uncontrolledValue:d,mergedValue:f,insertionDisabled:g,removeDisabled:$,handleCreateClick:T,ensureKey:P,handleValueChange:B,remove:v,move:j,createItem:b,mergedTheme:w,cssVars:s?void 0:ne,themeClass:M?.themeClass,onRender:M?.onRender}},render(){const{$slots:e,itemClass:a,buttonSize:o,mergedClsPrefix:i,mergedValue:r,locale:s,mergedTheme:c,keyField:d,itemStyle:S,preset:f,showSortButton:w,NFormItem:g,ensureKey:$,handleValueChange:D,remove:y,createItem:P,move:B,onRender:T,disabled:b}=this;return T?.(),n("div",{class:[`${i}-dynamic-input`,this.rtlEnabled&&`${i}-dynamic-input--rtl`,this.themeClass],style:this.cssVars},!Array.isArray(r)||r.length===0?n(L,Object.assign({block:!0,ghost:!0,dashed:!0,size:o},this.createButtonProps,{disabled:this.insertionDisabled||b,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button,onClick:this.handleCreateClick}),{default:()=>se(e["create-button-default"],()=>[s.create]),icon:()=>se(e["create-button-icon"],()=>[n(E,{clsPrefix:i},{default:()=>n(me,null)})])}):r.map((v,h)=>n("div",{key:d?v[d]:$(v,h),"data-key":d?v[d]:$(v,h),class:[`${i}-dynamic-input-item`,a],style:S},ue(e.default,{value:r[h],index:h},()=>[f==="input"?n(lt,{disabled:b,clsPrefix:i,value:r[h],parentPath:g?g.path.value:void 0,path:g?.path.value?`${g.path.value}[${h}]`:void 0,onUpdateValue:j=>{D(h,j)}}):f==="pair"?n(it,{disabled:b,clsPrefix:i,value:r[h],parentPath:g?g.path.value:void 0,path:g?.path.value?`${g.path.value}[${h}]`:void 0,onUpdateValue:j=>{D(h,j)}}):null]),ue(e.action,{value:r[h],index:h,create:P,remove:y,move:B},()=>[n("div",{class:`${i}-dynamic-input-item__action`},n(Qe,{size:o},{default:()=>[n(L,{disabled:this.removeDisabled||b,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button,circle:!0,onClick:()=>{y(h)}},{icon:()=>n(E,{clsPrefix:i},{default:()=>n(Ke,null)})}),n(L,{disabled:this.insertionDisabled||b,circle:!0,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button,onClick:()=>{P(h)}},{icon:()=>n(E,{clsPrefix:i},{default:()=>n(me,null)})}),w?n(L,{disabled:h===0||b,circle:!0,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button,onClick:()=>{B("up",h)}},{icon:()=>n(E,{clsPrefix:i},{default:()=>n(Je,null)})}):null,w?n(L,{disabled:h===r.length-1||b,circle:!0,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button,onClick:()=>{B("down",h)}},{icon:()=>n(E,{clsPrefix:i},{default:()=>n(He,null)})}):null]}))]))))}}),ee={"og:description":"twitter:description","og:title":"twitter:title","og:image":"twitter:image","og:image:url":"twitter:image","og:image:alt":"twitter:image:alt"};function st({existingMeta:e,twitterMeta:a}){return e.filter(({key:o})=>o in ee&&a.find(i=>i.key===ee[o])===void 0).map(({key:o,value:i})=>({key:ee[o]??o,value:i}))}const ut=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null&&!(e instanceof Date),ct=e=>e.split(":").map(dt).join(":"),dt=e=>e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)?.map(a=>a.toLowerCase()).join("_")??"";function he({title:e,flatMetadata:a,type:o}){return a.length===0?[]:[`<!-- ${e} -->`,...ft({flatMetadata:a,type:o})]}function pt({twitter:e,...a},{indentation:o=0,indentWith:i="  ",generateTwitterCompatibleMeta:r=!1}={}){const s=fe(a,{basePrefix:"og"}),c=fe(e,{basePrefix:"twitter"});return[he({title:"og meta",flatMetadata:s,type:"property"}),he({title:"twitter meta",flatMetadata:[...c,...r?st({existingMeta:s,twitterMeta:c}):[]],type:"name"})].filter(f=>f&&f.length>0).map(f=>f.map(w=>i.repeat(o)+w).join(`
`)).join(`

`)}function mt(e){return e instanceof Date?e.toISOString():String(e)}function fe(e,{separator:a=":",basePrefix:o=""}={}){const i=[],r=(s,c="")=>{if(!(s===void 0||s===""))if(ut(s))for(const[d,S]of Object.entries(s)){const f=[c,ct(d)].filter(Boolean).join(a);r(S,f)}else if(Array.isArray(s))for(const d of s)r(d,c);else i.push({key:c,value:mt(s)})};return r(e,o),i}function ht({flatMetadata:{key:e,value:a},type:o}){return`<meta ${o.trim()}="${e.trim()}" value="${a.trim()}" />`}function ft({flatMetadata:e,type:a}){return e.map(o=>ht({flatMetadata:o,type:a}))}const yt={name:"Article",elements:[{type:"input",label:"Publishing date",key:"article:published_time",placeholder:"When the article was first published..."},{type:"input",label:"Modification date",key:"article:modified_time",placeholder:"When the article was last changed..."},{type:"input",label:"Expiration date",key:"article:expiration_time",placeholder:"When the article is out of date after..."},{type:"input",label:"Author",key:"article:author",placeholder:"Writers of the article..."},{type:"input",label:"Section",key:"article:section",placeholder:"A high-level section name. E.g. Technology.."},{type:"input",label:"Tag",key:"article:tag",placeholder:"Tag words associated with this article..."}]},gt={name:"Book",elements:[{type:"input",label:"Author",key:"book:author",placeholder:"Who wrote this book..."},{type:"input",label:"ISBN",key:"book:isbn",placeholder:"The International Standard Book Number..."},{type:"input",label:"Release date",key:"book:release_date",placeholder:"The date the book was released..."},{type:"input",label:"Tag",key:"book:tag",placeholder:"Tag words associated with this book..."}]},bt={name:"Album details",elements:[{type:"input",label:"Song",key:"music:song",placeholder:"The song on this album..."},{type:"input",label:"Disc",key:"music:song:disc",placeholder:"The same as music:album:disc but in reverse..."},{type:"input",label:"Track",key:"music:song:track",placeholder:"The same as music:album:track but in reverse..."},{type:"input",label:"Musician",key:"music:musician",placeholder:"The musician that made this song..."},{type:"input",label:"Release date",key:"music:release_date",placeholder:"The date the album was released..."}]},vt={name:"Playlist details",elements:[{type:"input",label:"Song",key:"music:song",placeholder:"The song on this album..."},{type:"input",label:"Disc",key:"music:song:disc",placeholder:"The same as music:album:disc but in reverse..."},{type:"input",label:"Track",key:"music:song:track",placeholder:"The same as music:album:track but in reverse..."},{type:"input",label:"Creator",key:"music:creator",placeholder:"The creator of this playlist..."}]},kt={name:"Radio station details",elements:[{type:"input",label:"Creator",key:"music:creator",placeholder:"The creator of this radio station..."}]},wt={name:"Song details",elements:[{type:"input",label:"Duration",placeholder:"The duration of the song...",key:"music:duration"},{type:"input",label:"Album",placeholder:"The album this song is from...",key:"music:album"},{type:"input",label:"Disc",placeholder:"Which disc of the album this song is on...",key:"music:album:disk"},{type:"input",label:"Track",placeholder:" Which track this song is...",key:"music:album:track"},{type:"input-multiple",label:"Musician",placeholder:"The musician that made this song...",key:"music:musician"}]},_t={name:"Profile",elements:[{type:"input",label:"First name",placeholder:"Enter the first name of the person...",key:"profile:first_name"},{type:"input",label:"Last name",placeholder:"Enter the last name of the person...",key:"profile:last_name"},{type:"input",label:"Username",placeholder:"Enter the username of the person...",key:"profile:username"},{type:"input",label:"Gender",placeholder:"Enter the gender of the person...",key:"profile:gender"}]},z={name:"Movie details",elements:[{type:"input-multiple",label:"Actor",key:"video:actor",placeholder:"Name of the actress/actor..."},{type:"input-multiple",label:"Director",key:"video:director",placeholder:"Name of the director..."},{type:"input-multiple",label:"Writer",key:"video:writer",placeholder:"Writers of the movie..."},{type:"input",label:"Duration",key:"video:duration",placeholder:"The movie's length in seconds..."},{type:"input",label:"Release date",key:"video:release_date",placeholder:"The date the movie was released..."},{type:"input",label:"Tag",key:"video:tag",placeholder:"Tag words associated with this movie..."}]},Tt={name:"Video episode details",elements:[...z.elements,{type:"input",label:"Series",key:"video:series",placeholder:"Which series this episode belongs to..."}]},St={name:"Other video details",elements:[...z.elements]},Pt={name:"TV show details",elements:[...z.elements]},Vt={name:"Image",elements:[{type:"input",label:"Image url",placeholder:"The url of your website social image...",key:"image"},{type:"input",label:"Image alt",placeholder:"The alternative text of your website social image...",key:"image:alt"},{type:"input",label:"Width",placeholder:"Width in px of your website social image...",key:"image:width"},{type:"input",label:"Height",placeholder:"Height in px of your website social image...",key:"image:height"}]},Ct={name:"Twitter",elements:[{type:"select",options:[{label:"Summary",value:"summary"},{label:"Summary with large image",value:"summary_large_image"},{label:"Application",value:"app"},{label:"Player",value:"player"}],label:"Card type",placeholder:"The Twitter card type...",key:"twitter:card"},{type:"input",label:"Site account",placeholder:"The name of the Twitter account of the site (ex: @ittoolsdottech)...",key:"twitter:site"},{type:"input",label:"Creator acc.",placeholder:"The name of the Twitter account of the creator (ex: @cthmsst)...",key:"twitter:creator"}]},It=[{label:"Website",value:"website"},{label:"Article",value:"article"},{label:"Book",value:"book"},{label:"Profile",value:"profile"},{type:"group",label:"Music",key:"Music",children:[{label:"Song",value:"music.song"},{label:"Music album",value:"music.album"},{label:"Playlist",value:"music.playlist"},{label:"Radio station",value:"music.radio_station"}]},{type:"group",label:"Video",key:"Video",children:[{label:"Movie",value:"video.movie"},{label:"Episode",value:"video.episode"},{label:"TV show",value:"video.tv_show"},{label:"Other video",value:"video.other"}]}],Rt={name:"General information",elements:[{type:"select",label:"Page type",placeholder:"Select the type of your website...",key:"type",options:It},{type:"input",label:"Title",placeholder:"Enter the title of your website...",key:"title"},{type:"input",label:"Description",placeholder:"Enter the description of your website...",key:"description"},{type:"input",label:"Page URL",placeholder:"Enter the url of your website...",key:"url"}]},ye={"music.song":wt,"music.album":bt,"music.playlist":vt,"music.radio_station":kt,"video.movie":z,"video.episode":Tt,"video.tv_show":Pt,"video.other":St,profile:_t,article:yt,book:gt},$t={"mb-5px":""},Bt=A({__name:"meta-tag-generator",setup(e){const a=te({type:"website","twitter:card":"summary_large_image"});Oe(()=>te(a.value.type),(r,s)=>{const c=ye[s.value];c&&c.elements.forEach(({key:d})=>{a.value[d]=""})});const o=U(()=>{const r=[Rt,Vt,Ct],s=ye[a.value.type];return s&&r.push(s),r}),i=U(()=>{const r=ce.chain(a.value).pickBy((c,d)=>d.startsWith("twitter:")).mapKeys((c,d)=>d.replace(/^twitter:/,"")).value(),s=ce.pickBy(a.value,(c,d)=>!d.startsWith("twitter:"));return pt({...s,twitter:r},{generateTwitterCompatibleMeta:!0})});return(r,s)=>{const c=qe,d=je,S=ot,f=Ee,w=Ze,g=ze;return C(),F(X,null,[J("div",null,[(C(!0),F(X,null,de(I(o),({name:$,elements:D})=>(C(),F("div",{key:$,style:{"margin-bottom":"15px"}},[J("div",$t,pe($),1),(C(!0),F(X,null,de(D,({key:y,type:P,label:B,placeholder:T,...b})=>(C(),G(w,{key:y},{default:Q(()=>[Y(c,{style:{flex:"0 0 110px"}},{default:Q(()=>[xe(pe(B),1)]),_:2},1024),P==="input"?(C(),G(d,{key:0,value:I(a)[y],"onUpdate:value":v=>I(a)[y]=v,placeholder:T,clearable:""},null,8,["value","onUpdate:value","placeholder"])):P==="input-multiple"?(C(),G(S,{key:1,value:I(a)[y],"onUpdate:value":v=>I(a)[y]=v,min:1,placeholder:T,"default-value":[""],"show-sort-button":!0},null,8,["value","onUpdate:value","placeholder"])):P==="select"?(C(),G(f,{key:2,value:I(a)[y],"onUpdate:value":v=>I(a)[y]=v,"w-full":"",placeholder:T,options:b.options},null,8,["value","onUpdate:value","placeholder","options"])):Ue("",!0)]),_:2},1024))),128))]))),128))]),J("div",null,[Y(g,{label:"Your meta tags"},{default:Q(()=>[Y(Ne,{value:I(i),language:"html"},null,8,["value"])]),_:1})])],64)}}});const Kt=Le(Bt,[["__scopeId","data-v-4c466f3d"]]);export{Kt as default};