import{d as y,j as a,v as O,x as h,y as d}from"./index-3638f854.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M18.6 5.2A11 11 0 004.22 6.22l-.7.71L2.1 5.52l.7-.71a13 13 0 0116.68-1.44V1.5h2v5.7H16.5v-2h2.1zM9.24 7.57a2.76 2.76 0 115.52 0v2.95h1.15c.5 0 .97.13 1.4.38L20.92 13a2.76 2.76 0 011.22 3.25l-1.78 5.35a2.76 2.76 0 01-2.61 1.89h-7.09c-.86 0-1.66-.4-2.19-1.08l-4.3-5.59.95-1.41a1.88 1.88 0 011.97-.8l2.14.48V7.57zM12 6.8a.76.76 0 00-.76.76V17.6l-4.5-1-.1.15 3.43 4.45c.14.19.37.3.6.3h7.09c.32 0 .61-.2.71-.52l1.79-5.35a.76.76 0 00-.34-.9l-3.63-2.1a.76.76 0 00-.38-.11h-3.15V7.57A.76.76 0 0012 6.8z"}}]},b=y({name:"GestureUp2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-gesture-up-2",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(g,v.value)}});export{b as default};
