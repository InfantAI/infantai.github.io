import{d as h,j as a,v as d,x as y,y as O}from"./index-d4c9a0d0.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 .86L21 6.4V9H1V6.41L11 .86zM4.06 7h13.88L11 3.14 4.06 7zM6 11v8H4v-8h2zm6 0v8h-2v-8h2zm6 0v6h-2v-6h2zm4.6 6.94l-5.66 5.66-3.54-3.54 1.42-1.41 2.12 2.12 4.24-4.24 1.42 1.4zM1 21h11v2H1v-2z"}}]},b=h({name:"InstitutionCheckedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:c}=d(r),v=a(()=>["t-icon","t-icon-institution-checked",i.value]),p=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(m,u.value)}});export{b as default};
