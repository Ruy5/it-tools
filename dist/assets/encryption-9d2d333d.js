import{n as r,Q as U,d as Y,a as B,o as f,e as z,i as o,w as g,f as _,g as l,x as c,c as k,l as A,t as C,F as T,y as V,X as D,z as R,Y as N}from"./index-a4aadc31.js";import{c as d}from"./index-68d15895.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-ec106967.js";function O(x,{defaultValue:u,defaultErrorMessage:s="Unknown error"}={}){const a=r(),n=r();return U(()=>{try{a.value=void 0,n.value=x()}catch(i){a.value=i instanceof Error?i.message:i?.toString()??s,n.value=u}}),[n,a]}const j={flex:"","gap-3":""},F={flex:"","flex-1":"","flex-col":"","gap-2":""},I={flex:"","gap-3":""},K={flex:"","flex-1":"","flex-col":"","gap-2":""},J=Y({__name:"encryption",setup(x){const u={AES:d.AES,TripleDES:d.TripleDES,Rabbit:d.Rabbit,RC4:d.RC4},s=r("Lorem ipsum dolor sit amet"),a=r("AES"),n=r("my secret key"),i=B(()=>u[a.value].encrypt(s.value,n.value).toString()),v=r("U2FsdGVkX1/EC3+6P5dbbkZ3e1kQ5o2yzuU0NHTjmrKnLBEwreV489Kr0DIB+uBs"),m=r("AES"),y=r("my secret key"),[w,E]=O(()=>u[m.value].decrypt(v.value,y.value).toString(d.enc.Utf8),{defaultValue:"",defaultErrorMessage:"Unable to decrypt your text"});return(L,t)=>{const p=V,b=D,h=R,S=N;return f(),z(T,null,[o(h,{title:"Encrypt"},{default:g(()=>[_("div",j,[o(p,{value:l(s),"onUpdate:value":t[0]||(t[0]=e=>c(s)?s.value=e:null),label:"Your text:",placeholder:"The string to cypher",rows:"4",multiline:"","raw-text":"",monospace:"",autosize:"","flex-1":""},null,8,["value"]),_("div",F,[o(p,{value:l(n),"onUpdate:value":t[1]||(t[1]=e=>c(n)?n.value=e:null),label:"Your secret key:",clearable:"","raw-text":""},null,8,["value"]),o(b,{value:l(a),"onUpdate:value":t[2]||(t[2]=e=>c(a)?a.value=e:null),label:"Encryption algorithm:",options:Object.keys(u).map(e=>({label:e,value:e}))},null,8,["value","options"])])]),o(p,{label:"Your text encrypted:",value:l(i),rows:"3",placeholder:"Your string hash",multiline:"",monospace:"",readonly:"",autosize:"","mt-5":""},null,8,["value"])]),_:1}),o(h,{title:"Decrypt"},{default:g(()=>[_("div",I,[o(p,{value:l(v),"onUpdate:value":t[3]||(t[3]=e=>c(v)?v.value=e:null),label:"Your encrypted text:",placeholder:"The string to cypher",rows:"4",multiline:"","raw-text":"",monospace:"",autosize:"","flex-1":""},null,8,["value"]),_("div",K,[o(p,{value:l(y),"onUpdate:value":t[4]||(t[4]=e=>c(y)?y.value=e:null),label:"Your secret key:",clearable:"","raw-text":""},null,8,["value"]),o(b,{value:l(m),"onUpdate:value":t[5]||(t[5]=e=>c(m)?m.value=e:null),label:"Encryption algorithm:",options:Object.keys(u).map(e=>({label:e,value:e}))},null,8,["value","options"])])]),l(E)?(f(),k(S,{key:0,type:"error","mt-12":"",title:"Error while decrypting"},{default:g(()=>[A(C(l(E)),1)]),_:1})):(f(),k(p,{key:1,label:"Your decrypted text:",value:l(w),placeholder:"Your string hash",rows:"3",multiline:"",monospace:"",readonly:"",autosize:"","mt-5":""},null,8,["value"]))]),_:1})],64)}}});export{J as default};
