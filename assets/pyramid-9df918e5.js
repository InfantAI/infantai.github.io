import{d as m,j as a,v as y,x as d,y as O}from"./index-a2c26395.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 2.96l4.44 7.9 1.06-1.93L23.7 22H.28L11 2.96zM13.23 11L11 7.04 8.77 11h4.46zm-5.58 2L3.7 20H10v-7H7.65zM12 13v4.1l2.26-4.1H12zm.7 7h2.8v-3h-1.16l-1.65 3zm4.8 0h2.8l-1.64-3H17.5v3zm.06-5l-1.06-1.92L15.44 15h2.12z"}}]},P=m({name:"PyramidIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=y(t),p=a(()=>["t-icon","t-icon-pyramid",l.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(h,u.value)}});export{P as default};
