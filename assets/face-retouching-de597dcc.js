import{d as m,j as a,v as y,x as O,y as h}from"./index-3638f854.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 .7l1.1 2.2L7.3 4 5.1 5.1 4 7.3 2.9 5.1.7 4l2.2-1.1L4 .7zM12 3c-.62 0-1.23.06-1.81.18l-.98.2-.4-1.96.97-.2a11 11 0 11-8.48 8.2l.24-.97 1.94.47-.23.97A9.03 9.03 0 0012 21a9 9 0 000-18zm2.51 5.93h2v2h-2v-2zm-7.05 0h2v2h-2v-2zm2.45 4.26l.49.87a1.83 1.83 0 003.2 0l.5-.87 1.74.97-.5.88a3.83 3.83 0 01-6.69 0l-.49-.88 1.75-.97zm10.92 7.63l-1.57.78 1.57.78.78 1.57.78-1.57 1.57-.78-1.57-.78-.78-1.57-.78 1.57z"}}]},b=m({name:"FaceRetouchingIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),p=a(()=>["t-icon","t-icon-face-retouching",l.value]),u=a(()=>c(c({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,v.value)}});export{b as default};
