import{d as v,bd as f,v as x,a as C,o as y,c as b,w as e,i as n,g as s,x as g,a4 as k,m as $,aX as w,y as B}from"./index-a4aadc31.js";const J=v({__name:"InputCopyable",props:{value:{}},emits:["update:value"],setup(p,{emit:_}){const o=f(p,"value",_),{copy:c,isJustCopied:u}=x({source:o,createToast:!1}),i=C(()=>u.value?"Copied!":"Copy to clipboard");return(z,t)=>{const l=k,m=$,r=w,d=B;return y(),b(d,{value:s(o),"onUpdate:value":t[1]||(t[1]=a=>g(o)?o.value=a:null)},{suffix:e(()=>[n(r,{tooltip:s(i)},{default:e(()=>[n(m,{circle:"",variant:"text",size:"small",onClick:t[0]||(t[0]=a=>s(c)())},{default:e(()=>[n(l)]),_:1})]),_:1},8,["tooltip"])]),_:1},8,["value"])}}});export{J as _};
