import{d as h,j as a,v as m,x as y,y as O}from"./index-9eb1327f.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1.5 22.7V2h21v16H6.88L1.5 22.7zm2-4.4L6.12 16H20.5V4h-17v14.3zM13 11h-2V9h2v2zm-5 0H6V9h2v2zm10 0h-2V9h2v2z"}}]},b=h({name:"ChatMessageIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),p=a(()=>["t-icon","t-icon-chat-message",o.value]),v=a(()=>i(i({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var s;return(s=e.onClick)===null||s===void 0?void 0:s.call(e,{e:f})}}));return()=>y(g,u.value)}});export{b as default};
