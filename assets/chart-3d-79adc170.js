import{d as m,j as a,v as y,x as O,y as d}from"./index-9eb1327f.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .85l9.66 5.57v11.16L12 23.15l-9.66-5.57V6.42L12 .85zm0 2.3L5.34 7 12 10.85 18.66 7 12 3.15zm7.66 5.58L13 12.58v7.69l6.66-3.85V8.73zM11 20.27v-7.7L4.34 8.74v7.7L11 20.26zM13 5v4h-2V5h2zm-3.1 9.37l-3.46 2-1-1.74 3.46-2 1 1.74zm5.2-1.74l3.46 2-1 1.74-3.46-2 1-1.74z"}}]},b=m({name:"Chart3DIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),p=a(()=>["t-icon","t-icon-chart-3d",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(h,u.value)}});export{b as default};
