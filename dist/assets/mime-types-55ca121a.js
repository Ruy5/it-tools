import{d as C,n as k,a as w,o as i,e as p,i as o,w as s,l as t,g as n,x as T,t as d,f as e,F as y,r as f,W as E,cv as S,X as K,z as U,c as F}from"./index-a4aadc31.js";import{m as _}from"./index-59a4a4d1.js";import{_ as z}from"./Tag-62ba0e08.js";import{_ as D}from"./Table-c9e41f1c.js";import"./___vite-browser-external_commonjs-proxy-ec106967.js";import"./color-to-class-8578b472.js";const H=e("div",{style:{opacity:"0.8"}}," Know which file extensions are associated to a mime-type ",-1),I={key:0},L={style:{"margin-top":"10px"}},R=e("div",{style:{opacity:"0.8"}}," Know which mime type is associated to a file extension ",-1),W={key:0},X={style:{"margin-top":"10px"}},$=e("thead",null,[e("tr",null,[e("th",null,"Mime types"),e("th",null,"Extensions")])],-1),Z=C({__name:"mime-types",setup(q){const M=Object.entries(_.extensions).map(([a,u])=>({mimeType:a,extensions:u})),N=Object.keys(_.extensions).map(a=>({label:a,value:a})),m=k(void 0),x=w(()=>m.value?_.extensions[m.value]:[]),O=Object.keys(_.types).map(a=>({label:`.${a}`,value:a})),r=k(void 0),B=w(()=>r.value?_.types[r.value]:[]);return(a,u)=>{const h=S,v=K,c=z,g=U,V=D;return i(),p(y,null,[o(g,null,{default:s(()=>[o(h,{style:{"margin-bottom":"0"}},{default:s(()=>[t(" Mime type to extension ")]),_:1}),H,o(v,{value:n(m),"onUpdate:value":u[0]||(u[0]=l=>T(m)?m.value=l:null),searchable:"","my-4":"",options:n(N),placeholder:"Select your mimetype here... (ex: application/pdf)"},null,8,["value","options"]),n(x).length>0?(i(),p("div",I,[t(" Extensions of files with the "),o(c,{round:"",bordered:!1},{default:s(()=>[t(d(n(m)),1)]),_:1}),t(" mime-type: "),e("div",L,[(i(!0),p(y,null,f(n(x),l=>(i(),F(c,{key:l,round:"",bordered:!1,type:"primary",style:{"margin-right":"10px"}},{default:s(()=>[t(" ."+d(l),1)]),_:2},1024))),128))])])):E("",!0)]),_:1}),o(g,null,{default:s(()=>[o(h,{style:{"margin-bottom":"0"}},{default:s(()=>[t(" File extension to mime type ")]),_:1}),R,o(v,{value:n(r),"onUpdate:value":u[1]||(u[1]=l=>T(r)?r.value=l:null),searchable:"","my-4":"",options:n(O),placeholder:"Select your mimetype here... (ex: application/pdf)"},null,8,["value","options"]),n(r)?(i(),p("div",W,[t(" Mime type associated to the extension "),o(c,{round:"",bordered:!1},{default:s(()=>[t(d(n(r)),1)]),_:1}),t(" file extension: "),e("div",X,[o(c,{round:"",bordered:!1,type:"primary",style:{"margin-right":"10px"}},{default:s(()=>[t(d(n(B)),1)]),_:1})])])):E("",!0)]),_:1}),e("div",null,[o(V,null,{default:s(()=>[$,e("tbody",null,[(i(!0),p(y,null,f(n(M),({mimeType:l,extensions:j})=>(i(),p("tr",{key:l},[e("td",null,d(l),1),e("td",null,[(i(!0),p(y,null,f(j,b=>(i(),F(c,{key:b,round:"",bordered:!1,style:{"margin-right":"10px"}},{default:s(()=>[t(" ."+d(b),1)]),_:2},1024))),128))])]))),128))])]),_:1})])],64)}}});export{Z as default};