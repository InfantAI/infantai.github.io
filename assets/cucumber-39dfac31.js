import{d as m,j as a,v as y,x as O,y as b}from"./index-a2efab08.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){b(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M14.73 2.18c2.16-.68 3.99-.4 5.36.58a5.1 5.1 0 011.24 1.29c.93 1.38 1.16 3.2.46 5.33-.7 2.1-2.3 4.54-5.08 7.33-2.83 2.82-5.3 4.44-7.43 5.1-2.16.7-4 .41-5.36-.57a5.1 5.1 0 01-1.25-1.29c-.93-1.38-1.16-3.2-.45-5.33.69-2.1 2.3-4.54 5.07-7.33 2.83-2.82 5.3-4.44 7.44-5.1zm.6 1.9c-1.7.55-3.91 1.92-6.62 4.63-2.67 2.66-4.04 4.84-4.6 6.54a5.86 5.86 0 00-.3 1.53A40.47 40.47 0 0117 3.8c-.49 0-1.04.09-1.67.29zm3.87.77C13.55 7.88 7.8 13.47 4.75 19.16a38.59 38.59 0 008.1-6.37 43.57 43.57 0 006.35-7.94zM6.92 20.2c.5 0 1.09-.08 1.75-.29 1.7-.54 3.92-1.9 6.62-4.62 2.67-2.66 4.04-4.84 4.6-6.54.21-.65.3-1.22.3-1.73a47.52 47.52 0 01-5.92 7.18 42.89 42.89 0 01-7.35 6z"}}]},j=m({name:"CucumberIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:c,style:s}=y(t),u=a(()=>["t-icon","t-icon-cucumber",c.value]),p=a(()=>i(i({},s.value),r.style)),v=a(()=>({class:u.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,v.value)}});export{j as default};
