import{d as g,j as a,v as y,x as O,y as m}from"./index-c831df68.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.09 5.9L9.6 5.2l1.01-1a6.5 6.5 0 018.5-.6l1.5-.75.89 1.8-.93.46a6.5 6.5 0 01-.77 8.28l-1 1-.7-1.48c-.46.5-1.01 1.07-1.48 1.54-.46.46-.66 1.07-1 2.07l-.08.28a8.77 8.77 0 01-2.1 3.66 7.2 7.2 0 01-4.62 2.15 6.8 6.8 0 01-5.28-2.15 6.8 6.8 0 01-2.15-5.28 7.2 7.2 0 012.15-4.62 8.73 8.73 0 013.95-2.2c1-.32 1.6-.53 2.06-.98.47-.47 1.04-1.02 1.54-1.48zm2.2-1.18l1.59.74.5 3.17 3.16.5.74 1.58a4.5 4.5 0 00-5.99-5.99zm3.89 6.21l-3.55-.56-.56-3.55-.03-.01a138.9 138.9 0 00-2.07 1.98c-.82.82-1.91 1.17-2.81 1.46l-.32.1a6.77 6.77 0 00-2.89 1.62c-.9.91-1.49 2.1-1.56 3.33a4.81 4.81 0 001.57 3.74 4.81 4.81 0 003.74 1.57 5.2 5.2 0 003.32-1.56 6.81 6.81 0 001.62-2.89l.1-.31c.3-.9.65-2 1.47-2.82a75.36 75.36 0 001.98-2.07l-.01-.03z"}}]},j=g({name:"EggplantIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),p=a(()=>["t-icon","t-icon-eggplant",l.value]),u=a(()=>i(i({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,v.value)}});export{j as default};
