import{d as h,j as a,v as y,x as O,y as m}from"./index-a2efab08.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1h12.41L21 6.59v4.91h-2V9h-6V3H5v18h9.5v2H3V1zm12 2.41V7h3.59L15 3.41zM18 15c-.93 0-1.5.66-1.5 1.25v1h-2v-1c0-1.9 1.67-3.25 3.5-3.25s3.5 1.36 3.5 3.25c0 .91-.4 1.72-1.03 2.3L19 19.94v.68h-2v-1.54l2.11-2c.26-.23.39-.53.39-.83 0-.6-.57-1.25-1.5-1.25zm-1 7h2v2h-2v-2z"}}]},w=h({name:"FileUnknownIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=y(t),v=a(()=>["t-icon","t-icon-file-unknown",o.value]),p=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,u.value)}});export{w as default};
