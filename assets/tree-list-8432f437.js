import{d as m,j as a,v as y,x as O,y as d}from"./index-ab78ae36.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 22a4 4 0 01-1-7.87V9.87a4 4 0 112 0v4.26A4 4 0 016 22zm-2-4a2 2 0 104 0 2 2 0 00-4 0zM4 6a2 2 0 104 0 2 2 0 00-4 0zm8 12h7v2h-7v-2zm0-7h10v2H12v-2zm0-7h7v2h-7V4z"}}]},b=m({name:"TreeListIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=y(r),p=a(()=>["t-icon","t-icon-tree-list",o.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(h,u.value)}});export{b as default};
