import{d as y,j as n,v as O,x as h,y as m}from"./index-9eb1327f.js";function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm17.5 18h.5V4H4v16h.5a5 5 0 015-5h5a5 5 0 015 5zM12 7a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM7.5 9.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm2 7.5a3 3 0 00-3 3h11a3 3 0 00-3-3h-5z"}}]},b=y({name:"UserAvatarIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:o,style:c}=O(t),p=n(()=>["t-icon","t-icon-user-avatar",o.value]),v=n(()=>s(s({},c.value),r.style)),u=n(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>h(d,u.value)}});export{b as default};
