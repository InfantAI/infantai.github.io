import{d as y,j as a,v as h,x as O,y as d}from"./index-b9cef0b8.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .8l6.05 4L17 6.38V9.5l3.33 2.5H22v2h-1v8H3v-8H2v-2h1.67L7 9.5V6.39l-1.05-1.6L12 .8zM9 5.18V9h6V5.18L12 3.2 9 5.18zM15.67 11H8.33L7 12h10l-1.33-1zM19 14H5v6h6v-3h2v3h6v-6zm-8-9h2v2h-2V5z"}}]},b=y({name:"CityAncient2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:s}=h(r),v=a(()=>["t-icon","t-icon-city-ancient-2",i.value]),p=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(m,u.value)}});export{b as default};
