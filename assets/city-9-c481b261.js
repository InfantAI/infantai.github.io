import{d as y,j as a,v as h,x as O,y as d}from"./index-c831df68.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 1.83l4 2.49 3.99-2.5 6.38 3.84-1.03 1.71-.34-.2V22H3V7.17l-.35.2-1.02-1.71L8 1.83zM5 5.97V20h2v-5h2v5h2V6.05L7.99 4.17l-3 1.8zM13 20h2v-5h2v5h2V5.97l-3-1.8-3 1.88V20zM7 9h2v2H7V9zm8 0h2v2h-2V9z"}}]},b=y({name:"City9Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=h(r),p=a(()=>["t-icon","t-icon-city-9",l.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(m,u.value)}});export{b as default};
