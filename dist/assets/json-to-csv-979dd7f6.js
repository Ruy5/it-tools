import{_ as i}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-d8907d93.js";import{l as a}from"./index-231c3e11.js";import{w as c}from"./defaults-4d6daddf.js";import{d as u,o as p,c as l}from"./index-a4aadc31.js";import"./TextareaCopyable-660055c0.js";import"./Copy-1fd70736.js";import"./Scrollbar-50a84590.js";function f({array:o}){const r=new Set;return o.forEach(n=>Object.keys(n).forEach(e=>r.add(e))),Array.from(r)}function m(o){if(o===null)return"null";if(o===void 0)return"";const r=String(o).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/"/g,'\\"');return r.includes(",")?`"${r}"`:r}function d({array:o}){const r=f({array:o}),n=o.map(e=>r.map(t=>m(e[t])));return[r.join(","),...n].join(`
`)}const y=u({__name:"json-to-csv",setup(o){function r(e){return c(()=>e===""?"":d({array:a.parse(e)}),"")}const n=[{validator:e=>e===""||a.parse(e),message:"Provided JSON is not valid."}];return(e,t)=>{const s=i;return p(),l(s,{"input-label":"Your raw JSON","input-placeholder":"Paste your raw JSON here...","output-label":"CSV version of your JSON","input-validation-rules":n,transformer:r})}}});export{y as default};