import{d as m,j as a,v as y,x as O,y as d}from"./index-c831df68.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_9460)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M18.54 5.46c-4.05-4.06-7.82-3.5-9.01-2.3-.28.27-.4.64-.17 1.36.25.75.84 1.71 1.76 2.84.74.9 1.65 1.86 2.65 2.87 1 1 1.97 1.9 2.87 2.65a9.64 9.64 0 002.84 1.76c.71.23 1.09.1 1.36-.17 1.2-1.2 1.76-4.96-2.3-9.01zM8.11 1.74c2.33-2.32 7.42-2.13 11.85 2.3s4.62 9.52 2.3 11.85c-.98.97-2.22 1.03-3.4.65a9.76 9.76 0 01-2.68-1.5l-.47.75a48.68 48.68 0 00-1.16 2.11c-.8 1.48-1.73 3.18-2.9 4.35-.96.96-2.19 1.8-3.79 1.75-1.57-.06-3.21-.97-5.05-2.81C.97 19.35.06 17.7.01 16.14c-.06-1.6.78-2.83 1.74-3.79 1.17-1.17 2.87-2.1 4.35-2.9l.38-.2a48.7 48.7 0 002.47-1.43 9.76 9.76 0 01-1.5-2.7c-.37-1.16-.31-2.4.66-3.38zm2.1 7.64c-.3.22-.64.43-.99.63-.56.33-1.18.67-1.8 1l-.38.2a17.17 17.17 0 00-3.88 2.55c-.8.8-1.19 1.52-1.16 2.3.03.82.53 2.01 2.22 3.71 1.7 1.7 2.9 2.2 3.71 2.23.79.03 1.5-.37 2.3-1.17A17.07 17.07 0 0013 16.58a51 51 0 011-1.8c.2-.35.41-.68.63-1a48.24 48.24 0 01-4.4-4.4z"}}]}]},P=m({name:"Mushroom1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=y(t),p=a(()=>["t-icon","t-icon-mushroom-1",o.value]),u=a(()=>i(i({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>O(g,v.value)}});export{P as default};
