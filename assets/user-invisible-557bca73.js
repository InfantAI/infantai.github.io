import{d as y,j as a,v as O,x as m,y as b}from"./index-c831df68.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){b(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.5 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM8 7.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM4 20a4 4 0 014-4h3v-2H8a6 6 0 00-6 6v2h9.05v-2H4zM23.59 18s-1.67 4.5-6.09 4.5c-.97 0-1.81-.22-2.53-.56l-.97.97-1.41-1.41.71-.72A8.3 8.3 0 0111.41 18s1.67-4.5 6.09-4.5c.97 0 1.81.22 2.53.56l.97-.97 1.41 1.41-.71.72A8.31 8.31 0 0123.59 18zm-3.3-1.37l-3.76 3.75c.3.08.62.12.97.12 2.61 0 3.87-2.5 3.87-2.5s-.36-.7-1.08-1.37zm-1.82-1.01c-.3-.08-.63-.12-.97-.12-2.62 0-3.87 2.5-3.87 2.5s.35.71 1.08 1.37l3.76-3.75z"}}]},h=y({name:"UserInvisibleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-user-invisible",l.value]),v=a(()=>o(o({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(d,u.value)}});export{h as default};
