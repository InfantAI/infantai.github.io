import{d as f,j as a,v as d,x as y,y as O}from"./index-3638f854.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 2v18h2V9h6v11h2V5h6v15h2v2H2V2h2zm14 18v-3.5h-2V20h2zm-2-5.5h2V7h-2v7.5zM10 20v-3.5H8V20h2zm-2-5.5h2V11H8v3.5z"}}]},b=f({name:"ChartStackedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=d(r),v=a(()=>["t-icon","t-icon-chart-stacked",o.value]),p=a(()=>i(i({},s.value),t.style)),h=a(()=>({class:v.value,style:p.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>y(m,h.value)}});export{b as default};
