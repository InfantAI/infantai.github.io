import{d as b,j as a,v as m,x as y,y as O}from"./index-9eb1327f.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 21a9 9 0 100-18 9 9 0 000 18zm11-9a11 11 0 11-22 0 11 11 0 0122 0zm-8.5 7h-5v-2h5v2zm.73-3H8.77l-.23-.67c-.43-1.23-.98-2.4-1.49-3.45a5.5 5.5 0 119.92 0 33.71 33.71 0 00-1.49 3.45l-.24.67zm-1.4-2c.42-1.1.9-2.1 1.33-3a3.5 3.5 0 10-6.31 0c.42.9.9 1.9 1.32 3h3.66z"}}]},d=b({name:"LightbulbCircleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=m(t),p=a(()=>["t-icon","t-icon-lightbulb-circle",l.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(g,v.value)}});export{d as default};
