import{d as b,j as a,v as m,x as y,y as O}from"./index-d4c9a0d0.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.9 3.98a9.02 9.02 0 00-4.67 6 26.9 26.9 0 007.88-1.56 34.1 34.1 0 00-3.2-4.44zm-4.9 8V12c0 2.15.75 4.12 2 5.66 1.94-2.69 4.7-4.76 7.91-5.83-.25-.56-.52-1.1-.8-1.64A28.9 28.9 0 013 11.99zm3.45 7.1a8.96 8.96 0 009.07 1.2c-.39-2.28-1-4.5-1.82-6.6a14.04 14.04 0 00-7.25 5.4zm9.2-5.88a35.74 35.74 0 011.71 6.03 9 9 0 003.55-5.93 14.07 14.07 0 00-5.25-.1zm5.32-1.92a8.95 8.95 0 00-1.9-4.84 28.98 28.98 0 01-5.1 2.98c.32.62.62 1.25.9 1.89a16.08 16.08 0 016.1-.03zM13 7.67A26.96 26.96 0 0017.66 5 8.96 8.96 0 009.9 3.25a36.09 36.09 0 013.09 4.42zM1.05 10.9a11 11 0 1121.91 2.2 11 11 0 01-21.9-2.2z"}}]},j=b({name:"LogoDribbbleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),p=a(()=>["t-icon","t-icon-logo-dribbble",o.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(d,v.value)}});export{j as default};
