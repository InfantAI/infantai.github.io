import{d as y,j as a,v as m,x as O,y as g}from"./index-dfbb01d3.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.5 4v3.63H11V4H8.5zM13 4v5.63H6.5V4H4v16h16V9.04L14.96 4H13zm2.79-2L22 8.21V22H2V2h13.79zM7 14v-2h10v2H7zm0 3v-2h6v2H7z"}}]},b=y({name:"SystemStorageIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),v=a(()=>["t-icon","t-icon-system-storage",o.value]),p=a(()=>i(i({},c.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var s;return(s=e.onClick)===null||s===void 0?void 0:s.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
