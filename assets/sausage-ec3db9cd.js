import{d as y,j as a,v as O,x as g,y as d}from"./index-dfbb01d3.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20 2v2h2v2h-1.25a4.22 4.22 0 01-1.04 4.27l-9.44 9.44A4.22 4.22 0 016 20.75V22H4v-2H2v-2h1.25a4.22 4.22 0 011.04-4.27l9.44-9.44A4.22 4.22 0 0118 3.25V2h2zm-1.7 3.7a2.22 2.22 0 00-3.16 0L5.7 15.16a2.22 2.22 0 103.15 3.14l9.44-9.44c.87-.87.87-2.27 0-3.14z"}}]},b=y({name:"SausageIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-sausage",l.value]),u=a(()=>i(i({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>g(m,v.value)}});export{b as default};
