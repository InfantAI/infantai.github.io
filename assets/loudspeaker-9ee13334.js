import{d,j as a,v as y,x as O,y as m}from"./index-9eb1327f.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M16 1.38V15.5l-7.2-3h-.91L7.7 14H9.5v2H7.48l-.6 5H2V5h6.76L16 1.38zM5.88 12.5H4V19h1.11l.77-6.5zM4 10.5h5.2l4.8 2V4.62L9.24 7H4v3.5zm16.33-5.91l.71.7a5.16 5.16 0 011.33 3.63c0 1.28-.4 2.68-1.33 3.62l-.7.7-1.42-1.4.7-.71a3.2 3.2 0 00.75-2.21c0-.95-.3-1.77-.74-2.21L18.92 6l1.41-1.41zm-2.08 1.66l.7.71a2.77 2.77 0 010 3.92l-.7.7-1.41-1.41.7-.7c.3-.3.3-.8 0-1.1l-.7-.7 1.41-1.42z"}}]},b=d({name:"LoudspeakerIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=y(t),p=a(()=>["t-icon","t-icon-loudspeaker",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(h,v.value)}});export{b as default};
