import{d as y,j as a,v as O,x as g,y as h}from"./index-b9cef0b8.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M21.5 17.5h-8.59l3 3-1.41 1.41-5.41-5.41 5.41-5.41 1.41 1.41-3 3h8.59v2zm-6.59-10L9.5 12.91 8.09 11.5l3-3H2.5v-2h8.59l-3-3L9.5 2.09l5.41 5.41z"}}]},w=y({name:"ArrowLeftRight2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),p=a(()=>["t-icon","t-icon-arrow-left-right-2",o.value]),v=a(()=>s(s({},c.value),r.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>g(d,f.value)}});export{w as default};
