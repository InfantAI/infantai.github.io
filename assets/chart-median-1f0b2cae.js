import{d as f,j as a,v as m,x as d,y}from"./index-ab78ae36.js";function v(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?v(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 2v18h18v2H2V2h2zm12 2.4c-1.08 0-2 .91-2 2.1v8.07C14 16.9 12.33 19 10 19s-4-2.11-4-4.43v-1h2v1C8 16.04 9.02 17 10 17s2-.96 2-2.43V6.5c0-2.23 1.76-4.1 4-4.1s4 1.87 4 4.1v1h-2v-1c0-1.19-.92-2.1-2-2.1zM6 9.5h2v2H6v-2zm3 0h2v2H9v-2zm6 0h2v2h-2v-2zm3 0h2v2h-2v-2z"}}]},b=f({name:"ChartMedianIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),s=a(()=>["t-icon","t-icon-chart-median",o.value]),p=a(()=>l(l({},c.value),r.style)),u=a(()=>({class:s.value,style:p.value,onClick:h=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:h})}}));return()=>d(O,u.value)}});export{b as default};
