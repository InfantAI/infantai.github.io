import{d as O,j as a,v as d,x as y,y as m}from"./index-ab78ae36.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15.75 2.95a2 2 0 012.83 0l2.47 2.47a2 2 0 010 2.83L18.7 10.6l-2.2 2.2-1.42-1.41 1.5-1.5-2.47-2.47-1.5 1.5L11.2 7.5l2.2-2.2 2.35-2.35zM15.52 6l2.47 2.48 1.65-1.64-2.48-2.48L15.52 6zM4 2.6L21.41 20 20 21.41l-6.06-6.05-4.78 4.78-6.38 1.08 1.07-6.38 4.79-4.79L2.59 4 4 2.59zm6.05 8.88L5.72 15.8l-.5 2.98 2.98-.5 4.33-4.34-2.48-2.47z"}}]},j=O({name:"EditOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=d(r),p=a(()=>["t-icon","t-icon-edit-off",l.value]),f=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:f.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>y(g,u.value)}});export{j as default};
