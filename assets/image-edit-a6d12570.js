import{d as m,j as a,v as d,x as y,y as O}from"./index-9eb1327f.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v8h-2V4H4v9.59l5-5 5.91 5.91-1.41 1.41-4.5-4.5-5 5V20h6v2H2V2zm13.55 5a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zm7.24 4.09l4.12 4.12-7.28 7.29H12.5v-4.13l7.29-7.28zm-.93 3.75l1.3 1.3.93-.93-1.3-1.3-.93.93zm-.11 2.7l-1.3-1.29-2.95 2.95v1.3h1.3l2.95-2.95z"}}]},b=m({name:"ImageEditIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=d(r),p=a(()=>["t-icon","t-icon-image-edit",l.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(g,u.value)}});export{b as default};
