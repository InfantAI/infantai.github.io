import{d as m,j as a,v as y,x as O,y as d}from"./index-b9cef0b8.js";function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 12a3.5 3.5 0 016.86-1h.78a3.5 3.5 0 016.72 0h.78a3.5 3.5 0 110 2h-.78a3.5 3.5 0 01-6.72 0h-.78A3.5 3.5 0 011 12zm3.5-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"}}]},b=m({name:"ComponentStepsIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:p}=y(r),c=a(()=>["t-icon","t-icon-component-steps",o.value]),u=a(()=>i(i({},p.value),t.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(h,v.value)}});export{b as default};
