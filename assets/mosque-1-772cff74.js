import{d as h,j as a,v as m,x as y,y as O}from"./index-dfbb01d3.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 1.59l4 4v2.3a5.49 5.49 0 014-2.82V3.5h2v1.58a5.49 5.49 0 013.59 2.2A7.52 7.52 0 0120.84 10H22v12H2V5.59l4-4zM18.76 10A5.35 5.35 0 0018 8.47 3.53 3.53 0 0015 7c-1.44 0-2.37.64-2.99 1.47a5.35 5.35 0 00-.77 1.53h7.52zM10 12v8h2v-6h6v6h2v-8H10zm6 8v-4h-2v4h2zm-8 0V6.41l-2-2-2 2V20h4zM7 8v2H5V8h2z"}}]},b=h({name:"Mosque1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=m(t),c=a(()=>["t-icon","t-icon-mosque-1",o.value]),p=a(()=>s(s({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(d,u.value)}});export{b as default};
