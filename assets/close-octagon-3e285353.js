import{d as O,j as a,v as y,x as g,y as m}from"./index-a2c26395.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M16.35 1.5l6.15 6.15v8.7l-6.15 6.15h-8.7L1.5 16.35v-8.7L7.65 1.5h8.7zm-.83 2H8.48L3.5 8.48v7.04l4.98 4.98h7.04l4.98-4.98V8.48L15.52 3.5zm1.08 5.32L13.4 12l3.19 3.18-1.42 1.42L12 13.4 8.82 16.6 7.4 15.18 10.6 12 7.4 8.82 8.82 7.4 12 10.6l3.18-3.19 1.42 1.42z"}}]},b=O({name:"CloseOctagonIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=y(r),p=a(()=>["t-icon","t-icon-close-octagon",o.value]),v=a(()=>i(i({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>g(d,u.value)}});export{b as default};
