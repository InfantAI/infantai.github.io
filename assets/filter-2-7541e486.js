import{d as y,j as l,v as O,x as m,y as d}from"./index-3638f854.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 25 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20.89 2.27l-1.57.78 1.57.78.78 1.57.78-1.57 1.57-.78-1.57-.78L21.67.7l-.78 1.57zM7.96 1.51l1.1 2.2 2.2 1.1-2.2 1.1-1.1 2.2-1.1-2.2-2.2-1.1 2.2-1.1 1.1-2.2zm9.28 1.9l5.15 5.14-15.1 15.09-5.14-5.15L17.24 3.4zm-2 4.83l2.31 2.32 2-2-2.31-2.33-2 2zm.9 3.73l-2.32-2.32-8.84 8.84 2.32 2.32 8.84-8.84z"}}]},j=y({name:"Filter2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=O(t),p=l(()=>["t-icon","t-icon-filter-2",a.value]),u=l(()=>s(s({},c.value),r.style)),f=l(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>m(g,f.value)}});export{j as default};
