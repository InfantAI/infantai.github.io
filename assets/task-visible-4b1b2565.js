import{d as h,j as a,v as y,x as O,y as d}from"./index-d4c9a0d0.js";function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17 1H7v2H3v20h7v-2H5V5h2v2h10V5h2v8h2V3h-4V1zm-2 4H9V3h6v2zM15.75 20v-2h2.5v2h-2.5z"}},{tag:"path",attrs:{fill:"currentColor",d:"M17 23.5c4.42 0 6.1-4.5 6.1-4.5s-1.68-4.5-6.1-4.5c-4.41 0-6.09 4.5-6.09 4.5s1.67 4.5 6.1 4.5zm0-2c-2.62 0-3.87-2.5-3.87-2.5s1.25-2.5 3.87-2.5 3.87 2.5 3.87 2.5-1.25 2.5-3.87 2.5z"}}]},g=h({name:"TaskVisibleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:c}=y(r),v=a(()=>["t-icon","t-icon-task-visible",i.value]),p=a(()=>o(o({},c.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(m,u.value)}});export{g as default};
