import{d as g,j as a,v as y,x as O,y as m}from"./index-a2c26395.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.5 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2 6a3.5 3.5 0 114.67 3.3 2 2 0 001.83 1.2h7a4 4 0 014 4v.14a3.5 3.5 0 11-2 0v-.14a2 2 0 00-2-2h-7c-.73 0-1.41-.2-2-.54v2.68a3.5 3.5 0 11-2 0V9.36A3.5 3.5 0 012 6zm16.5 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-13 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"}}]},h=g({name:"GitMergeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=y(t),p=a(()=>["t-icon","t-icon-git-merge",o.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(d,u.value)}});export{h as default};
