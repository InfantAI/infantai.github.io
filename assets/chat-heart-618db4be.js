import{d as y,j as a,v as O,x as h,y as m}from"./index-a2c26395.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1.5 2h21v16H6.88L1.5 22.7V2zm2 2v14.3L6.12 16H20.5V4h-17zM12 5.77a3.25 3.25 0 00-4.07 5.03L12 14.86l4.07-4.06A3.25 3.25 0 0012 5.77zm-.88 1.85l.88.88.88-.88a1.25 1.25 0 011.77 1.76L12 12.04 9.35 9.38a1.25 1.25 0 011.77-1.76z"}}]},b=y({name:"ChatHeartIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=O(r),p=a(()=>["t-icon","t-icon-chat-heart",o.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>h(d,u.value)}});export{b as default};
