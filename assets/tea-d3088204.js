import{d as y,j as a,v as O,x as h,y as m}from"./index-d4c9a0d0.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 2v5H9V2h2zM7 3v4H5V3h2zm8 0v4h-2V3h2zM2.93 8H21v5a4 4 0 01-4 4h-.93a6.67 6.67 0 01-2.59 3H20v2H3v-2h3.5a6.6 6.6 0 01-3.08-5.04L2.92 8zm13.65 7H17a2 2 0 002-2v-3h-2.07l-.35 4.95V15zm-1.65-5H5.07l.35 4.8a4.6 4.6 0 009.17 0l.34-4.8z"}}]},b=y({name:"TeaIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=O(r),v=a(()=>["t-icon","t-icon-tea",l.value]),p=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(d,u.value)}});export{b as default};
