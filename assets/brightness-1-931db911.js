import{d as y,j as a,v as O,x as h,y as g}from"./index-c831df68.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .09l3.49 3.49h4.93V8.5l3.5 3.49-3.5 3.49v4.93H15.5L12 23.92l-3.49-3.5H3.58V15.5L.08 12l3.5-3.49V3.58H8.5L12 .08zm0 2.82L9.34 5.58H5.58v3.76L2.9 12l2.67 2.66v3.76h3.76L12 21.1l2.66-2.67h3.76v-3.76L21.1 12l-2.67-2.66V5.58h-3.76L12 2.9zM12.06 8a8.97 8.97 0 010 8 4 4 0 000-8zm-1.93-1.7a6 6 0 110 11.4l-1.32-.43.82-1.11a6.96 6.96 0 000-8.32l-.82-1.1 1.32-.44z"}}]},b=y({name:"Brightness1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-brightness-1",l.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(m,u.value)}});export{b as default};
