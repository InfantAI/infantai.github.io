import{d as y,j as a,v as O,x as m,y as d}from"./index-c831df68.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 21a2 2 0 100-4 2 2 0 000 4zm1-5.87a4 4 0 11-2 0V13H7a3 3 0 01-3-3V8.87a4 4 0 112 0V10a1 1 0 001 1h10a1 1 0 001-1V8.87a4 4 0 112 0V10a3 3 0 01-3 3h-4v2.13zM5 7zm14 0a2 2 0 100-4 2 2 0 000 4z"}}]},h=y({name:"ForkIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),p=a(()=>["t-icon","t-icon-fork",o.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(g,v.value)}});export{h as default};
