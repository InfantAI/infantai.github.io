import{d as m,j as a,v as y,x as O,y as d}from"./index-d4c9a0d0.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.88 22.62l1.28-.22a4 4 0 003.34-3.94V16h5.32a2 2 0 001.97-2.33l-1.66-10A2 2 0 0019.15 2H7v11.2l3.88 9.42zm1.23-2.26L9 12.8V4h10.15l1.67 10H13.5v4.46a2 2 0 01-1.39 1.9zM4 14V2H2v12h2z"}}]},g=m({name:"ThumbDownIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=y(r),p=a(()=>["t-icon","t-icon-thumb-down",o.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(h,v.value)}});export{g as default};
