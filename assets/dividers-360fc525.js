import{d,j as a,v as y,x as O,y as h}from"./index-dfbb01d3.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 1v1.23a4.36 4.36 0 012.7 6.57l3.27 6.2H22v2h-1.98l2.33 4.42-1.77.93L17.76 17H13v2h-2v-2H6.24l-2.82 5.35-1.77-.93L3.98 17H2v-2h3.03L8.3 8.8A4.36 4.36 0 0111 2.23V1h2zm-3.2 9.24L7.3 15H11v-2h2v2h3.7l-2.5-4.76a4.37 4.37 0 01-4.4 0zM12 4.12a2.36 2.36 0 00-2.37 2.35 2.38 2.38 0 004.75 0c0-1.3-1.06-2.35-2.38-2.35z"}}]},b=d({name:"DividersIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:v}=y(t),c=a(()=>["t-icon","t-icon-dividers",i.value]),p=a(()=>s(s({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(m,u.value)}});export{b as default};
