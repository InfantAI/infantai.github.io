import{d as y,j as l,v as O,x as g,y as d}from"./index-a2efab08.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 6.59V0h-2v6.59l-1.3-1.3-.7-.7L7.59 6l.7.7 3 3 .71.71.7-.7 3-3 .71-.71L15 4.59l-.7.7L13 6.6zM21 13H3v-2h18v2zm-9 .59l.7.7 3 3 .71.71L15 19.41l-.7-.7-1.3-1.3V24h-2v-6.59l-1.3 1.3-.7.7L7.59 18l.7-.7 3-3 .71-.71z"}}]},b=y({name:"AlignVerticalIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:s}=O(t),p=l(()=>["t-icon","t-icon-align-vertical",a.value]),v=l(()=>c(c({},s.value),r.style)),u=l(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>g(m,u.value)}});export{b as default};
