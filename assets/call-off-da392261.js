import{d as O,j as a,v as y,x as d,y as m}from"./index-d4c9a0d0.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22.41 3L11.83 13.58c.51.44 1.05.85 1.62 1.21l1.86-1.86L22 14.42V23h-1a19.91 19.91 0 01-13.42-5.17L3 22.41 1.59 21 21 1.59 22.41 3zM9 16.42a18.07 18.07 0 0011 4.55v-4.95l-4.05-.9-2.18 2.18-.66-.38c-.97-.55-1.87-1.2-2.7-1.92L9 16.42zM1 2h8.58l1.49 6.7-1.87 1.86.3.5-1.72 1.02-1.09-1.84 2.19-2.19L7.98 4H3.03a17.9 17.9 0 003.1 9.14l.56.82-1.65 1.13-.57-.82-.27-.42A19.91 19.91 0 011 3V2z"}}]},h=O({name:"CallOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),p=a(()=>["t-icon","t-icon-call-off",l.value]),f=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:f.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>d(g,u.value)}});export{h as default};
