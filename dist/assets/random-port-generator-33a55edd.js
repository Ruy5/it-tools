import{cp as i,d as l,v as u,o as m,c as f,w as e,f as s,t as g,g as t,i as a,l as _,m as v,z as x,D as y}from"./index-a4aadc31.js";import{c as C}from"./computedRefreshable-0c854231.js";const h=()=>i(1024,65535),b={class:"port"},k={flex:"","justify-center":"","gap-3":""},P=l({__name:"random-port-generator",setup(B){const[o,c]=C(()=>String(h())),{copy:p}=u({source:o,text:"Port copied to the clipboard"});return(I,n)=>{const r=v,d=x;return m(),f(d,null,{default:e(()=>[s("div",b,g(t(o)),1),s("div",k,[a(r,{onClick:n[0]||(n[0]=N=>t(p)())},{default:e(()=>[_(" Copy ")]),_:1}),a(r,{onClick:t(c)},{default:e(()=>[_(" Refresh ")]),_:1},8,["onClick"])])]),_:1})}}});const D=y(P,[["__scopeId","data-v-97db8e1e"]]);export{D as default};