import{d as y,j as a,v as h,x as m,y as O}from"./index-3638f854.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 1v3h-2V1h2zm7.49 3.93l-2.13 2.12-1.41-1.41 2.12-2.13 1.42 1.42zM4.93 3.5l2.12 2.13-1.41 1.41L3.5 4.93 4.93 3.5zM12 8a4 4 0 00-3.67 5.6l.4.92-1.83.8-.4-.92A5.98 5.98 0 0112 6a6 6 0 015.5 8.4l-.4.92-1.83-.8.4-.92A4 4 0 0012 8zM1 11h3v2H1v-2zm19 0h3v2h-3v-2zM2 17h6v2H2v-2zm8 0h12v2H10v-2zm7 4h5v2h-5v-2zM2 21h13v2H2v-2z"}}]},z=y({name:"FogSunnyIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=h(t),c=a(()=>["t-icon","t-icon-fog-sunny",o.value]),p=a(()=>v(v({},s.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(g,u.value)}});export{z as default};
