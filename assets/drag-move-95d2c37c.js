import{d,j as a,v as g,x as y,y as O}from"./index-dfbb01d3.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_9921)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 23.41L7.59 19 9 17.59l2 2V13H4.41l2 2L5 16.41.59 12 5 7.59 6.41 9l-2 2H11V4.41l-2 2L7.59 5 12 .59 16.41 5 15 6.41l-2-2V11h6.59l-2-2L19 7.59 23.41 12 19 16.41 17.59 15l2-2H13v6.59l2-2L16.41 19 12 23.41z"}}]}]},P=d({name:"DragMoveIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=g(t),p=a(()=>["t-icon","t-icon-drag-move",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(m,u.value)}});export{P as default};
