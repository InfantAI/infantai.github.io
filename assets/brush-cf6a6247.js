import{d as y,j as a,v as O,x as d,y as m}from"./index-ab78ae36.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.92 23.5L.79 12.36l9.51-9.51 2.83 2.83 3.28-3.27 5.46 5.46-3.28 3.27L21.43 14l-9.51 9.5zm3.07-5.9L6.7 9.3l-3.07 3.07 8.3 8.3 3.07-3.08zM8.11 7.87l8.3 8.3 2.19-2.2-2.83-2.83 3.27-3.27-2.63-2.63-3.28 3.27L10.3 5.7 8.11 7.88z"}}]},h=y({name:"BrushIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-brush",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(b,v.value)}});export{h as default};
