import{d as y,j as a,v as O,x as d,y as m}from"./index-c831df68.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 4a5.5 5.5 0 00-5.49 5.15l-.05.78-.77.14A4.5 4.5 0 006.5 19h11a4.5 4.5 0 00.8-8.93l-.76-.14-.05-.78A5.5 5.5 0 0012 4zM4.6 8.28a7.5 7.5 0 0114.8 0A6.5 6.5 0 0117.5 21h-11A6.5 6.5 0 014.6 8.28zm7.4-1.2l4.41 4.42L15 12.91l-2-2V17h-2v-6.09l-2 2-1.41-1.41L12 7.09z"}}]},h=y({name:"BackupIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-backup",l.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(b,v.value)}});export{h as default};
