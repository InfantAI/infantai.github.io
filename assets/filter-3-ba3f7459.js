import{d as y,j as a,v as O,x as m,y as d}from"./index-b9cef0b8.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 25 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12.02 0L15.5 8l7.99 3.49-8 3.49-3.48 7.99-3.5-7.99-7.98-3.49 7.99-3.49L12.02 0zm9.3 3.32l-1.56.79 1.56.78.79 1.57.78-1.57 1.57-.78-1.57-.79-.78-1.56-.79 1.56zM12.02 5l-1.97 4.5-4.51 1.98 4.5 1.97 1.98 4.51 1.97-4.5 4.51-1.98L14 9.51 12.02 5zm7.32 9.76l1.3 2.6 2.6 1.3-2.6 1.3-1.3 2.61-1.3-2.6-2.61-1.3 2.6-1.3 1.3-2.61z"}}]},j=y({name:"Filter3Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-filter-3",l.value]),u=a(()=>s(s({},c.value),r.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>m(g,f.value)}});export{j as default};
