import{d as f,j as a,v as O,x as y,y as m}from"./index-3638f854.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 4h13v2H2V4zm0 7h13v2H2v-2zm1 7H2v2h11v-2H3zm16 3.41l.7-.7 3-3 .71-.71L22 15.59l-.7.7-1.3 1.3V4h-2v13.59l-1.3-1.3-.7-.7L14.59 17l.7.7 3 3 .71.71z"}}]},b=f({name:"OrderDescendingIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),p=a(()=>["t-icon","t-icon-order-descending",o.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:d=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:d})}}));return()=>y(g,u.value)}});export{b as default};
