import{d as y,j as l,v as O,x as m,y as d}from"./index-ab78ae36.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 21a9 9 0 100-18 9 9 0 000 18zm11-9a11 11 0 11-22 0 11 11 0 0122 0zm-7.3 7.23l-4.22-4.21A5 5 0 015.6 8.2l.32-.73 1.35.26 1.84 1.84.46-.46-1.84-1.84-.26-1.35.74-.32a5 5 0 016.8 5.88l4.22 4.21-3.54 3.54zm.7-3.54l-3.71-3.71.26-.62A3 3 0 0010.5 7.2l1.91 1.91-3.29 3.29-1.9-1.91a2.99 2.99 0 004.15 2.46l.62-.26 3.71 3.7.7-.7z"}}]},j=y({name:"ToolsCircleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=O(t),p=l(()=>["t-icon","t-icon-tools-circle",a.value]),u=l(()=>s(s({},c.value),r.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{j as default};
