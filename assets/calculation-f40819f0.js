import{d as h,j as a,v as y,x as O,y as m}from"./index-3638f854.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.5 2v3.5H11v2H7.5V11h-2V7.5H2v-2h3.5V2h2zM13 5.5h9v2h-9v-2zm-2.22 9.51l-2.83 2.83 2.99 2.99-1.42 1.41-2.99-2.99-2.82 2.83-1.42-1.41 2.83-2.83-2.67-2.67 1.42-1.41 2.66 2.67 2.83-2.83L10.78 15zM16.5 14h2v2h-2v-2zM13 17h9v2h-9v-2zm3.5 3h2v2h-2v-2z"}}]},b=h({name:"CalculationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:v}=y(r),s=a(()=>["t-icon","t-icon-calculation",l.value]),p=a(()=>c(c({},v.value),t.style)),u=a(()=>({class:s.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
