import{d as m,j as a,v as d,x as y,y as O}from"./index-dfbb01d3.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2.5 2h6.63a3.5 3.5 0 015.74 0h6.63v20h-19V2zm2 18h15V4h-5.86l-.26-.6a1.5 1.5 0 00-2.76 0l-.26.6H4.5v16zm1.09-8L9.5 8.09l1.41 1.41-2.5 2.5 2.5 2.5-1.41 1.41L5.59 12zm8.91-3.91L18.41 12l-3.91 3.91-1.41-1.41 2.5-2.5-2.5-2.5 1.41-1.41z"}}]},b=m({name:"AssignmentCodeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=d(r),p=a(()=>["t-icon","t-icon-assignment-code",o.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(g,u.value)}});export{b as default};
