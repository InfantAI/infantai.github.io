import{d as f,j as a,v as h,x as d,y}from"./index-d4c9a0d0.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.59 1H21v22H3V5.59L7.59 1zm.82 2L5 6.41V21h14V3H8.41zM8 9h2v2H8V9zm6 0h2v2h-2V9zm-1 0v5h-2V9h2zm-3 3v5H8v-5h2zm6 0v5h-2v-5h2zm-5 3h2v2h-2v-2z"}}]},z=f({name:"SimCardIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=h(t),c=a(()=>["t-icon","t-icon-sim-card",o.value]),p=a(()=>s(s({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:m=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:m})}}));return()=>d(O,u.value)}});export{z as default};
