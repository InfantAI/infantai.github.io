import{d as f,j as a,v as d,x as m,y as O}from"./index-d4c9a0d0.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_9651)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17 1v2h-2V1h2zm-5.95 1.63l1.42 1.42-1.42 1.42-1.41-1.42 1.41-1.42zm9.9 0l1.42 1.42-1.42 1.42-1.42-1.42 1.42-1.42zm-9 3.43a5 5 0 018.25 5.66c1.1.97 1.8 2.37 1.8 3.95 0 2.98-2.5 5.33-5.5 5.33H6.6C4.1 21 2 19.04 2 16.53a4.46 4.46 0 012.7-4.07v-.26a6.3 6.3 0 017.26-6.14zm2.12.65a6.26 6.26 0 013.15 3.67c.44.05.86.16 1.26.31a3 3 0 00-4.41-3.98zM11.1 8a4.3 4.3 0 00-4.4 4.2c0 .26.03.52.07.77l.19.95-.95.21A2.5 2.5 0 004 16.53 2.54 2.54 0 006.6 19h9.9c1.97 0 3.5-1.53 3.5-3.33a3.3 3.3 0 00-1.74-2.89 3.61 3.61 0 00-1.82-.45l-.85.02-.15-.84a4.29 4.29 0 00-3.23-3.38A4.6 4.6 0 0011.1 8zM22 8h2v2h-2V8z"}}]}]},P=f({name:"CloudySunnyIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=d(r),p=a(()=>["t-icon","t-icon-cloudy-sunny",l.value]),u=a(()=>i(i({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:y=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:y})}}));return()=>m(h,v.value)}});export{P as default};
