import{d as h,j as a,v as m,x as y,y as O}from"./index-a2c26395.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.5 4c1.31 0 2.46.42 3.28 1.26A4.52 4.52 0 0111 8.5c0 1.22-.37 2.34-1.15 3.17.26.14.5.31.73.5A4.27 4.27 0 0112 15.5c0 1.34-.48 2.5-1.42 3.32A5.33 5.33 0 017.01 20H2V4h4.5zM4 13v5h3.01c1.06 0 1.8-.28 2.26-.68.44-.4.73-.98.73-1.82 0-.84-.29-1.43-.73-1.82C8.8 13.28 8.07 13 7 13H4zm0-7v5h2.5c.88 0 1.48-.28 1.86-.66.38-.4.64-1 .64-1.84 0-.84-.26-1.45-.64-1.84C7.98 6.28 7.38 6 6.5 6H4zm9.5.5h8v2h-8v-2zm.66 5.03A4.24 4.24 0 0117.5 10c1.64 0 2.82.72 3.55 1.76.7 1 .95 2.21.95 3.24v1h-6.88c.12.48.32.88.58 1.2.4.49 1 .8 1.8.8.88 0 1.45-.26 1.8-.5a2.15 2.15 0 00.43-.39l.55-.83 1.67 1.1-.55.84-.01.01a1.62 1.62 0 01-.08.1 4.15 4.15 0 01-.9.83 5.1 5.1 0 01-2.91.84 4.24 4.24 0 01-3.34-1.53A5.4 5.4 0 0113 15c0-1.3.38-2.54 1.16-3.47zm.96 2.47h4.77c-.1-.4-.25-.78-.47-1.1-.37-.5-.94-.9-1.92-.9-.8 0-1.4.31-1.8.8-.26.32-.46.72-.58 1.2z"}}]},b=h({name:"LogoBehanceIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),p=a(()=>["t-icon","t-icon-logo-behance",o.value]),v=a(()=>i(i({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>y(g,u.value)}});export{b as default};
