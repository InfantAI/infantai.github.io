import{d as f,j as a,v as y,x as O,y as m}from"./index-b9cef0b8.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 1v2H9v2h2v.98l-5 3.5V12H2v10h20V12h-4V9.48l-5-3.5V5h2V3h-2V1h-2zm1 6.72l4 2.8V20h-1v-4a3 3 0 10-6 0v4H8v-9.48l4-2.8zM6 20H4v-6h2v6zm5 0v-4a1 1 0 112 0v4h-2zm7 0v-6h2v6h-2z"}}]},b=f({name:"ChurchIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:v}=y(t),s=a(()=>["t-icon","t-icon-church",l.value]),p=a(()=>i(i({},v.value),r.style)),u=a(()=>({class:s.value,style:p.value,onClick:h=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:h})}}));return()=>O(d,u.value)}});export{b as default};
