import{d as y,j as n,v as O,x as m,y as d}from"./index-3638f854.js";function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M21.32 2.53l-.44.9c-.36.72-.76 1.37-1.23 2.02a5.57 5.57 0 011.31 3.7c-.05 1.6-.85 3.15-2.25 4.56l-.06.05-.06.04-.04.04-.18.16c-.15.14-.36.36-.57.64-.41.57-.8 1.36-.8 2.36 0 1.68-.29 3.11-1.5 4.32a6.16 6.16 0 01-8.67 0l-.07-.07a5.47 5.47 0 01-1.64-2.37c-1.04-.3-1.7-.97-2.37-1.64l-.07-.07a6.16 6.16 0 010-8.67C3.88 7.29 5.32 7 7 7c1 0 1.8-.39 2.36-.8a4.74 4.74 0 00.83-.79l.05-.06.05-.06c1.39-1.38 2.9-2.23 4.46-2.33 1.24-.07 2.4.32 3.45 1.09.33-.5.62-.99.89-1.52l.44-.89 1.8.9zm-4.38 3.08c-.7-.5-1.4-.7-2.06-.65-.9.06-1.96.55-3.13 1.7a3.99 3.99 0 01-.29.34c-.21.22-.52.52-.92.8-.8.6-2 1.2-3.54 1.2-1.44 0-2.24.24-2.9.91a4.16 4.16 0 000 5.85c.88.89 1.24 1.2 1.97 1.26a1 1 0 01.9.91c.07.73.38 1.09 1.27 1.98a4.16 4.16 0 005.85 0c.67-.67.91-1.47.91-2.9 0-1.55.6-2.76 1.2-3.55a6.73 6.73 0 011.14-1.21c1.13-1.15 1.6-2.23 1.63-3.17a3.43 3.43 0 00-.63-2.04l-.76.8-.71.7-1.41-1.41.7-.7.78-.82zm1.65 8.2z"}}]},b=y({name:"PearIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:s}=O(t),p=n(()=>["t-icon","t-icon-pear",l.value]),u=n(()=>i(i({},s.value),r.style)),v=n(()=>({class:p.value,style:u.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>m(g,v.value)}});export{b as default};
