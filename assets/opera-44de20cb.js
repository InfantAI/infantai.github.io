import{d as O,j as a,v as m,x as y,y as d}from"./index-3638f854.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.5 5H8c3.66 0 6.06 1.46 7.58 3.51 1 1.36 1.59 2.95 1.93 4.43.73-.55 1.5-.95 2.17-1.24a12.43 12.43 0 011.94-.64c.53-.12 1.07-.2 1.6-.31L21.84 19H2.22l-1.5-6H2c1.02 0 1.9.1 2.6.24L3.66 10H5c1.3 0 2.55.23 3.5.47-.38-1.32-.85-2.7-1.43-4.1L6.5 5zm2.59 7.72a16.05 16.05 0 00-2.74-.62l1.4 4.9h2.13a39.93 39.93 0 00-.8-4.28zm2.8 4.28h4.09c-.02-.58-.06-1.29-.13-1.88-.2-1.8-.71-3.84-1.88-5.42A6.47 6.47 0 009.5 7.1 48.84 48.84 0 0111.9 17zm6.09 0h2.17l.6-3.57-.29.11c-.9.38-1.87.95-2.58 1.77.06.56.08 1.16.1 1.64V17zm-12.3 0l-.46-1.55a8.61 8.61 0 00-1.92-.38L3.78 17h1.9z"}}]},b=O({name:"OperaIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),p=a(()=>["t-icon","t-icon-opera",o.value]),u=a(()=>i(i({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(h,v.value)}});export{b as default};
