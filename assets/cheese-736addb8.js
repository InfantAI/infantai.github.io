import{d as y,j as a,v as O,x as d,y as m}from"./index-d4c9a0d0.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22.53 1.47l-4 12.65-.83-.1c-.06-.02-.13-.02-.2-.02a1.5 1.5 0 00-.69 2.83l.75.39-1.89 5.97-1.66-.4a17.27 17.27 0 01-12.8-12.77l-.4-1.7 10.97-3.46.27 1.02a1.5 1.5 0 102.86-.9l-.37-.99 8-2.52zM17 5.3a3.5 3.5 0 01-6.46 2.04L3.2 9.67a15.27 15.27 0 0011.14 11.14l.85-2.7a3.5 3.5 0 011.92-6.09l2.37-7.49-2.48.78zM9.5 11a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"}}]},b=y({name:"CheeseIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-cheese",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,v.value)}});export{b as default};
