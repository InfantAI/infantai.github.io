import{d as f,j as a,v as y,x as O,y as h}from"./index-a2c26395.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 1v8h8v2h-8v8h-2v-8H3V9h8V1h2zM3 20h18v2H3v-2z"}}]},g=f({name:"AddAndSubtractIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=y(r),p=a(()=>["t-icon","t-icon-add-and-subtract",o.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:d=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:d})}}));return()=>O(b,u.value)}});export{g as default};
