import{d as y,j as a,v as O,x as m,y as d}from"./index-a2efab08.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.36 3.3a.65.65 0 00-.65.52L7.43 14.49 6.2 15.71l2.7 2.7 1.53-1.53c.36-.35.56-.84.56-1.35V3.95a.65.65 0 00-.64-.65zM7.5 19.83l-2.7-2.7-.65.64 2.7 2.7.65-.64zM7.75 3.4A2.65 2.65 0 0112 1.88a2.64 2.64 0 014.25 1.52l2.16 10.1 4.27 4.27-5.53 5.53-5-5a3.9 3.9 0 01-.15-.16l-.15.16-5 5-5.53-5.53L5.6 13.5 7.75 3.4zm6.54.42a.65.65 0 00-1.29.13v11.58c0 .51.2 1 .56 1.35l1.53 1.53 2.7-2.7-1.22-1.22L14.3 3.82zm4.91 13.3l-2.7 2.7.65.65 2.7-2.7-.65-.65z"}}]},b=y({name:"GesturePrayIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-gesture-pray",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{b as default};
