import{d as f,j as a,v as d,x as y,y as O}from"./index-a2c26395.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.35 1v3h3.3V1h2v3h1.89l4.1 3-4.1 3h-1.9v2.11H22v6h-6.35V23h-2v-4.89h-3.3V23h-2v-4.89H6.46l-4.1-3 4.1-3h1.9V10H2V4h6.35V1h2zM4 6v2h12.88l1.37-1-1.37-1H4zm9.65 4h-3.3v2.11h3.3V10zm-6.53 4.11l-1.37 1 1.37 1H20v-2H7.12z"}}]},b=f({name:"IndicatorIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=d(t),v=a(()=>["t-icon","t-icon-indicator",o.value]),p=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:h=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:h})}}));return()=>y(m,u.value)}});export{b as default};
