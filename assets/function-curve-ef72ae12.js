import{d as y,j as a,v as O,x as d,y as m}from"./index-c831df68.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 2v13h8.79l.34-.8A31.6 31.6 0 0019 4.95l.05-1 2 .1-.05 1c-.14 2.64-.71 6.6-2.01 9.89l-.03.06H22v2h-3.98c-.48.84-1.03 1.61-1.68 2.24a5.62 5.62 0 01-4.4 1.75A6.28 6.28 0 018 19.22V22H6v-5H2v-2h3.2l-.19-.46c-1.3-3.22-1.87-7-2-9.48l-.06-1 2-.11.05 1c.1 1.68.4 3.96 1 6.21V2h2zm.66 15c.96 1.19 2.09 1.9 3.4 2 1.1.06 2.04-.35 2.88-1.18.24-.24.48-.52.7-.82H8.66z"}}]},b=y({name:"FunctionCurveIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),u=a(()=>["t-icon","t-icon-function-curve",o.value]),v=a(()=>i(i({},s.value),r.style)),p=a(()=>({class:u.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>d(h,p.value)}});export{b as default};
