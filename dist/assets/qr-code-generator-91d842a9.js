import{d as q,n as u,o as B,c as U,w as t,i as o,g as l,x as p,f as F,l as N,y as V,X as $,m as y,z}from"./index-a4aadc31.js";import{u as D,_ as L}from"./useQRCode-2af95806.js";import{a as R}from"./downloadBase64-ad4435d0.js";import{_ as T}from"./ColorPicker-2b5abeba.js";import{_ as E}from"./FormItem-f45445df.js";import{_ as Q}from"./Form-2f56ae74.js";import{_ as X,a as Y}from"./Grid-546fb1f4.js";import"./is-browser-fc34c9a6.js";import"./use-locale-10c58c8b.js";import"./browser-e933942f.js";import"./index-59a4a4d1.js";import"./___vite-browser-external_commonjs-proxy-ec106967.js";import"./Button-908b01e0.js";import"./use-form-item-03982fc2.js";import"./color-to-class-8578b472.js";import"./InputGroup-8142613a.js";const j={flex:"","flex-col":"","items-center":"","gap-3":""},_o=q({__name:"qr-code-generator",setup(A){const a=u("#000000ff"),_=u("#ffffffff"),r=u("medium"),f=["low","medium","quartile","high"],s=u("https://it-tools.tech"),{qrcode:i}=D({text:s,color:{background:_,foreground:a},errorCorrectionLevel:r,options:{width:1024}}),{download:g}=R({source:i,filename:"qr-code.png"});return(G,e)=>{const v=V,c=T,m=E,b=$,x=Q,d=X,w=L,h=y,k=Y,C=z;return B(),U(C,null,{default:t(()=>[o(k,{"x-gap":"12","y-gap":"12",cols:"1 600:3"},{default:t(()=>[o(d,{span:"2"},{default:t(()=>[o(v,{value:l(s),"onUpdate:value":e[0]||(e[0]=n=>p(s)?s.value=n:null),"label-position":"left","label-width":"130px","label-align":"right",label:"Text:",multiline:"",rows:"1",autosize:"",placeholder:"Your link or text...","mb-6":""},null,8,["value"]),o(x,{"label-width":"130","label-placement":"left"},{default:t(()=>[o(m,{label:"Foreground color:"},{default:t(()=>[o(c,{value:l(a),"onUpdate:value":e[1]||(e[1]=n=>p(a)?a.value=n:null),modes:["hex"]},null,8,["value"])]),_:1}),o(m,{label:"Background color:"},{default:t(()=>[o(c,{value:l(_),"onUpdate:value":e[2]||(e[2]=n=>p(_)?_.value=n:null),modes:["hex"]},null,8,["value"])]),_:1}),o(b,{value:l(r),"onUpdate:value":e[3]||(e[3]=n=>p(r)?r.value=n:null),label:"Error resistance:","label-position":"left","label-width":"130px","label-align":"right",options:f.map(n=>({label:n,value:n}))},null,8,["value","options"])]),_:1})]),_:1}),o(d,null,{default:t(()=>[F("div",j,[o(w,{src:l(i),width:"200"},null,8,["src"]),o(h,{onClick:l(g)},{default:t(()=>[N(" Download qr-code ")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),_:1})}}});export{_o as default};