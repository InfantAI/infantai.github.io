import{d as h,j as a,v as y,x as O,y as m}from"./index-a2c26395.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 3v3h-2V3h2zm7.49 3.93l-2.13 2.12-1.41-1.41 2.12-2.13 1.42 1.42zM4.93 5.5l2.12 2.13-1.41 1.41L3.5 6.93 4.93 5.5zM12 10a4 4 0 00-4 4v1H6v-1a6 6 0 0112 0v1h-2v-1a4 4 0 00-4-4zM1 13h3v2H1v-2zm19 0h3v2h-3v-2zm-8 2.8l3.3 2.2H23v2h-8.3L12 18.2 9.3 20H1v-2h7.7l3.3-2.2z"}}]},b=h({name:"SunRisingIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:v}=y(t),c=a(()=>["t-icon","t-icon-sun-rising",i.value]),p=a(()=>s(s({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(g,u.value)}});export{b as default};
