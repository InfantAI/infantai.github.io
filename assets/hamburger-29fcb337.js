import{d as m,j as a,v as y,x as O,y as g}from"./index-a2c26395.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.7 4.07A9.82 9.82 0 0112 2c2.4 0 4.63.7 6.3 2.07A7.47 7.47 0 0121 10v1H3v-1c0-2.5 1.03-4.54 2.7-5.93zM5.08 9h13.86a5.34 5.34 0 00-1.91-3.39A7.83 7.83 0 0012 4c-2.02 0-3.78.6-5.02 1.61A5.34 5.34 0 005.08 9zM6 11.8l3 2 3-2 3 2 3-2 4.39 2.92-1.11 1.67L18 14.2l-3 2-3-2-3 2-3-2-3.28 2.19-1.1-1.67L6 11.8zM3 17h18v1a5 5 0 01-5 5H8a5 5 0 01-5-5v-1zm2.17 2A3 3 0 008 21h8a3 3 0 002.83-2H5.17z"}}]},h=m({name:"HamburgerIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=y(t),p=a(()=>["t-icon","t-icon-hamburger",o.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(b,v.value)}});export{h as default};
