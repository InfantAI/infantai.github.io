import{d as y,j as a,v as O,x as m,y as d}from"./index-a2c26395.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a10 10 0 00-8.42 4.61l-.54.84-1.69-1.08.54-.84a12 12 0 0120.22 0l.54.84-1.68 1.08-.54-.84A10 10 0 0012 3zm0 3.99a5 5 0 00-4.22 2.3l-.54.85-1.68-1.08.54-.84a7 7 0 0111.79 0l.54.84-1.68 1.08-.54-.85A5 5 0 0011.99 7zM13 11v3h7v9H4v-9h7v-3h2zm-7 5v5h12v-5H6z"}}]},b=y({name:"RouterWaveIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=O(t),c=a(()=>["t-icon","t-icon-router-wave",o.value]),p=a(()=>s(s({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(h,u.value)}});export{b as default};
