import{d as y,j as o,v as O,x as m,y as d}from"./index-c831df68.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 21H3V1.13l1.55 1.04 2.4 1.6 1.93-1.55.62-.5.62.5L12 3.72l1.88-1.5.62-.5.62.5 1.93 1.54 2.4-1.6L21 1.14V21H4zM5 4.87V19h14V4.87l-1.45.96-.6.4-.57-.45-1.88-1.5-1.88 1.5-.62.5-.62-.5-1.88-1.5-1.88 1.5-.57.46-.6-.4L5 4.86zM8 16H7v-2h10v2H8zm3-4h6v-2h-6v2zm-3-2H7v2h2v-2H8z"}}]},b=y({name:"CouponIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:s}=O(t),p=o(()=>["t-icon","t-icon-coupon",a.value]),v=o(()=>c(c({},s.value),r.style)),u=o(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(h,u.value)}});export{b as default};
