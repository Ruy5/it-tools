import{L as r,d as l,n,R as t,aQ as c}from"./index-a4aadc31.js";const a=Object.assign(Object.assign({},r.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number}),i=l({name:"Scrollbar",props:a,setup(){const e=n(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var s;(s=e.value)===null||s===void 0||s.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var s;(s=e.value)===null||s===void 0||s.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return t(c,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),u=i;export{u as _};