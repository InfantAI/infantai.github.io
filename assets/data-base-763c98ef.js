import{d as y,j as n,v as O,x as d,y as m}from"./index-a2efab08.js";function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?l(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 5l.04-.08c.04-.07.12-.17.29-.3.33-.26.87-.54 1.62-.8C7.45 3.33 9.6 3 12 3c2.4 0 4.55.33 6.05.83.75.25 1.3.53 1.62.79.17.13.25.23.3.3L20 5l-.04.08c-.04.07-.12.17-.29.3-.33.26-.87.54-1.62.8-1.5.5-3.64.82-6.05.82-2.4 0-4.55-.33-6.05-.83a5.53 5.53 0 01-1.62-.79 1.24 1.24 0 01-.3-.3L4 5zm16 2.53V12.02a.3.3 0 01-.04.06c-.04.07-.12.17-.29.3-.33.26-.87.54-1.62.8-1.5.5-3.64.82-6.05.82-2.4 0-4.55-.33-6.05-.83a5.53 5.53 0 01-1.62-.79 1.24 1.24 0 01-.3-.3.3.3 0 01-.03-.06V7.53c.4.2.85.38 1.32.54C7.08 8.66 9.44 9 12 9c2.56 0 4.92-.34 6.68-.93.47-.16.92-.34 1.32-.54zm0 7V19.02a.3.3 0 01-.04.06c-.04.07-.12.17-.29.3-.33.26-.87.54-1.62.8-1.5.5-3.64.82-6.05.82-2.4 0-4.55-.33-6.05-.83a5.53 5.53 0 01-1.62-.79 1.24 1.24 0 01-.3-.3.3.3 0 01-.03-.06V14.53c.4.2.85.38 1.32.54 1.76.59 4.12.93 6.68.93 2.56 0 4.92-.34 6.68-.93.47-.16.92-.34 1.32-.54zM2 19c0 .85.52 1.5 1.09 1.95.58.46 1.36.83 2.23 1.12 1.76.59 4.12.93 6.68.93 2.56 0 4.92-.34 6.68-.93.87-.3 1.65-.66 2.23-1.12.57-.45 1.09-1.1 1.09-1.95V5c0-.85-.52-1.5-1.09-1.95a7.45 7.45 0 00-2.23-1.12A21.94 21.94 0 0012 1c-2.56 0-4.92.34-6.68.93-.87.3-1.65.66-2.23 1.12C2.52 3.5 2 4.15 2 5v14z"}}]},j=y({name:"DataBaseIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:c,style:s}=O(r),p=n(()=>["t-icon","t-icon-data-base",c.value]),u=n(()=>i(i({},s.value),t.style)),v=n(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(b,v.value)}});export{j as default};
