import{d as y,j as l,v as O,x as m,y as d}from"./index-9eb1327f.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .05L23.95 12 22 13.95V14h-.05l-7.12 7.12a4 4 0 01-5.66 0l-6.29-6.3a4 4 0 010-5.65l4.44-4.44L4.59 2 6 .59l2.73 2.73L12 .05zm-3.27 6.1L4.3 10.59A2 2 0 003.71 12h17.4L12 2.88l-1.85 1.85L13.4 8 12 9.41 8.73 6.15zM4.88 14l5.7 5.7a2 2 0 002.83 0l5.71-5.7H4.88zm16.87 4.39l1.31 1.66c.59.73.59 1.85 0 2.58-.31.4-.78.66-1.31.66s-1-.26-1.31-.66a2.13 2.13 0 010-2.58l1.31-1.66z"}}]},h=y({name:"FillColor1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=O(t),p=l(()=>["t-icon","t-icon-fill-color-1",a.value]),u=l(()=>s(s({},c.value),r.style)),f=l(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>m(g,f.value)}});export{h as default};
