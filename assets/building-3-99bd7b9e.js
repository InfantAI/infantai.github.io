import{d as f,j as a,v as d,x as y,y as O}from"./index-dfbb01d3.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 2h8v3h3v4h3v13H2V9h3V5h3V2zm2 3h4V4h-4v1zM7 9h10V7H7v2zm-3 2v9h4v-6h8v6h4v-9H4zm10 9v-4h-4v4h4z"}}]},b=f({name:"Building3Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:s}=d(t),c=a(()=>["t-icon","t-icon-building-3",i.value]),p=a(()=>v(v({},s.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:h=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:h})}}));return()=>y(m,u.value)}});export{b as default};
