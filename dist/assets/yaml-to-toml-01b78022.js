import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-d8907d93.js";import{s}from"./toml-esm-9c5f6a1e.js";import{p as t}from"./public-api-0ac9c3bb.js";import{w as i}from"./defaults-4d6daddf.js";import{d as p,o as l,c}from"./index-a4aadc31.js";import"./TextareaCopyable-660055c0.js";import"./Copy-1fd70736.js";import"./Scrollbar-50a84590.js";const v=p({__name:"yaml-to-toml",setup(u){const r=o=>[s(t(o))].flat().join(`
`).trim(),a=o=>o.trim()===""?"":i(()=>r(o),""),e=[{validator:o=>o===""||t(o),message:"Provided JSON is not valid."}];return(o,f)=>{const m=n;return l(),c(m,{"input-label":"Your YAML","input-placeholder":"Paste your YAML here...","output-label":"TOML from your YAML","output-language":"toml","input-validation-rules":e,transformer:a})}}});export{v as default};