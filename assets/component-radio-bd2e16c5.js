import{d as m,j as a,v as d,x as y,y as O}from"./index-c831df68.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12a10 10 0 1120 0 10 10 0 01-20 0zm10-4a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0z"}}]},j=m({name:"ComponentRadioIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=d(r),p=a(()=>["t-icon","t-icon-component-radio",o.value]),u=a(()=>c(c({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(g,v.value)}});export{j as default};
