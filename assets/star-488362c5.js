import{d as y,j as a,v as O,x as d,y as m}from"./index-9eb1327f.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .63l2.9 8.35 8.84.18-7.04 5.34 2.56 8.46L12 17.91l-7.26 5.05L7.3 14.5.26 9.16l8.84-.18L12 .63zm0 6.1l-1.47 4.22-4.48.1 3.57 2.7-1.3 4.29L12 15.48l3.68 2.56-1.3-4.3 3.57-2.7-4.48-.09L12 6.72z"}}]},j=y({name:"StarIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-star",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,v.value)}});export{j as default};
