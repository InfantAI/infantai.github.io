import{d,j as a,v as y,x as O,y as m}from"./index-d4c9a0d0.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.02 11.28c-.05.46.07.86.39 1.18l3.78 3.78-1.42 1.41-3.63-3.63-.03.09c-.55 1.52-.03 3.24 1.18 4.52 1.21 1.3 2.94 1.96 4.54 1.55 2.12-.54 4.42-2.02 6.43-3.94 1.92-2 3.4-4.3 3.94-6.43.4-1.6-.26-3.33-1.55-4.54-1.28-1.21-3-1.73-4.52-1.18l-.09.03 3.63 3.63-1.41 1.42-3.78-3.78A1.37 1.37 0 0011.3 5c-.5.06-1.03.3-1.5.68a2.5 2.5 0 00-.85 1.2c-.08.34-.03.61.24.87L13.43 12 12 13.41 7.77 9.17a.82.82 0 00-.86-.24c-.38.1-.83.4-1.21.86-.38.46-.62 1-.68 1.49zm1.9-4.37a4.47 4.47 0 011.6-2.77c.72-.58 1.61-1.02 2.56-1.13.3-.03.63-.03.94.02.15-.17.31-.29.44-.37.27-.17.6-.3.98-.44 2.41-.89 4.9.01 6.58 1.6 1.69 1.58 2.75 4.02 2.12 6.48-.65 2.59-2.4 5.19-4.45 7.34l-.02.01-.01.02c-2.15 2.06-4.75 3.8-7.34 4.45-2.46.63-4.9-.43-6.49-2.12-1.58-1.68-2.48-4.17-1.6-6.58.14-.37.28-.7.45-.98.08-.13.2-.3.37-.44a3.7 3.7 0 01-.02-.94c.1-.95.55-1.84 1.13-2.55A4.47 4.47 0 016.4 7c.17-.05.34-.08.52-.1z"}}]},j=d({name:"BreadIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:c,style:s}=y(t),p=a(()=>["t-icon","t-icon-bread",c.value]),u=a(()=>i(i({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(b,v.value)}});export{j as default};
