import{n as s,be as n,q as l,a as r,bf as d}from"./index-a4aadc31.js";function p(a,{throttle:c}={}){const e=s(!0);let t;const u=()=>e.value=!0;return c?n(a,u,{throttle:c}):l(a,u),[r(()=>(e.value&&(t=a(),e.value=!1),t)),u]}function m(a,c){const e=s(!0);let t;const u=()=>e.value=!0;return l(a,u),[d(async()=>(e.value&&(t=await a(),e.value=!1),t),c),u]}export{m as a,p as c};
