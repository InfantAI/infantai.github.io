import{d as y,j as a,v as O,x as m,y as d}from"./index-a2c26395.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 100 18 9 9 0 000-18zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm5.77-3.87l3.46 2-1 1.74-3.46-2 1-1.74zm11.46 1.74l-3.46 2-1-1.74 3.46-2 1 1.74zM12 14c-.36 0-1 .45-1 1.5s.64 1.5 1 1.5 1-.45 1-1.5-.64-1.5-1-1.5zm-3 1.5c0-1.71 1.15-3.5 3-3.5s3 1.79 3 3.5-1.15 3.5-3 3.5-3-1.79-3-3.5z"}}]},b=y({name:"Swear2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),p=a(()=>["t-icon","t-icon-swear-2",o.value]),u=a(()=>i(i({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(g,v.value)}});export{b as default};
