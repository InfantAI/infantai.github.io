import{d as f,j as a,v as y,x as d,y as O}from"./index-d4c9a0d0.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.5 2h14v9.5h-2V4h-2v5.62l-3-1.5-3 1.5V4h-2v5.5h-2V2zm6 2v2.38l1-.5 1 .5V4h-2zm-5.06 9.25a1.25 1.25 0 00-.89.36L5.5 15.66v3.84h5.63l5.8-1.45 3.53-1.5a.56.56 0 00-.41-1.03h-.02L13.6 17H10v-2h3.13a.87.87 0 100-1.75h-4.7zm7.55 1.15l3.55-.82a2.56 2.56 0 011.8 4.76l-.03.02-3.74 1.6-6.2 1.54H0v-7.25h4.09l2.05-2.05a3.25 3.25 0 012.3-.95h4.69a2.87 2.87 0 012.86 3.15zM3.5 16.25H2v3.25h1.5v-3.25z"}}]},b=f({name:"UndertakeDeliveryIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),c=a(()=>["t-icon","t-icon-undertake-delivery",l.value]),p=a(()=>v(v({},s.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:h=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:h})}}));return()=>d(m,u.value)}});export{b as default};
