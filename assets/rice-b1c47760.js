import{d as y,j as a,v as O,x as h,y as m}from"./index-a2c26395.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 4C8.85 4 6.17 5.21 5.5 7.71c-.22.8-.37 1.58-.44 2.29h13.88c-.07-.7-.22-1.5-.43-2.28C17.83 5.22 15.15 4 12 4zm8 8H4a8 8 0 1016 0zM3.05 10c.08-.89.26-1.86.51-2.8C4.6 3.33 8.56 2 12 2c3.44 0 7.4 1.34 8.44 5.2.26.94.43 1.92.51 2.8H22v2a10 10 0 01-20 0v-2h1.05zM11 5h2v2h-2V5zM8 7h2v2H8V7zm6 0h2v2h-2V7z"}}]},b=y({name:"RiceIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),p=a(()=>["t-icon","t-icon-rice",o.value]),v=a(()=>l(l({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>h(d,u.value)}});export{b as default};
