import{d,j as a,v as y,x as O,y as m}from"./index-dfbb01d3.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 1v3.53a4.34 4.34 0 013.43 4.2c0 .94-.3 1.79-.8 2.49l2.48 4.88c.6-.2 1.2-.44 1.78-.7l.9-.42.84 1.82-.91.41c-.56.25-1.12.48-1.7.68L21.64 23h-2.25l-2.3-4.52a21.1 21.1 0 01-10.16 0L4.62 23H2.37l2.6-5.1c-.57-.2-1.13-.44-1.69-.69l-.9-.41.82-1.82.91.41c.58.27 1.18.5 1.78.7l2.48-4.87c-.5-.7-.8-1.55-.8-2.48A4.34 4.34 0 0111 4.54V1h2zM7.85 16.65c2.73.6 5.57.6 8.3 0l-2.09-4.1a4.5 4.5 0 01-4.12 0l-2.09 4.1zM12 6.42a2.37 2.37 0 00-2.43 2.32A2.37 2.37 0 0012 11.05a2.37 2.37 0 002.43-2.31A2.37 2.37 0 0012 6.42z"}}]},h=d({name:"Dividers1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),p=a(()=>["t-icon","t-icon-dividers-1",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(g,u.value)}});export{h as default};
