import{d as h,j as a,v as m,x as y,y as O}from"./index-ab78ae36.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22 13v9H2v-9h20zm-2 2H4v5h16v-5zm2-13v9H2V2h20zm-2 2H4v5h16V4zM7.5 16.5v2h-2v-2h2zm0-11v2h-2v-2h2z"}},{tag:"path",attrs:{fill:"currentColor",d:"M11.5 7.5v-2h-2v2h2zM11.5 18.5v-2h-2v2h2z"}}]},z=h({name:"SystemApplicationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:v}=m(r),p=a(()=>["t-icon","t-icon-system-application",o.value]),c=a(()=>s(s({},v.value),t.style)),u=a(()=>({class:p.value,style:c.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(d,u.value)}});export{z as default};
