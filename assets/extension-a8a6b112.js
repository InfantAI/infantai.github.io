import{d as y,j as a,v as O,x as h,y as d}from"./index-9eb1327f.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 4a3 3 0 016 0h6v6a3 3 0 110 6v6h-6.4l-.13-.86a2.5 2.5 0 00-4.94 0L8.4 22H2v-6.4l.86-.13a2.5 2.5 0 000-4.94L2 10.4V4h6zm3-1a1 1 0 00-1 1v2H4v2.76a4.5 4.5 0 010 8.48V20h2.76a4.5 4.5 0 018.48 0H18v-6h2a1 1 0 100-2h-2V6h-6V4a1 1 0 00-1-1z"}}]},b=y({name:"ExtensionIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=O(r),p=a(()=>["t-icon","t-icon-extension",o.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>h(m,u.value)}});export{b as default};
