import{d as y,j as a,v as O,x as d,y as m}from"./index-a2c26395.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M19.78 4.93a3.5 3.5 0 00-4.95 0L12.7 7.05l-1.42-1.41 2.12-2.13a5.5 5.5 0 017.78 7.78l-3.18 3.18a5.5 5.5 0 01-7.78 0L8.7 12.94l1.41-1.41 1.54 1.53a3.5 3.5 0 004.95 0l3.18-3.18a3.5 3.5 0 000-4.95zm-7.43 6a3.5 3.5 0 00-4.95 0l-3.18 3.2a3.5 3.5 0 004.95 4.94l2.12-2.12 1.42 1.41-2.12 2.13A5.5 5.5 0 012.8 12.7l3.18-3.18a5.5 5.5 0 017.78 0l1.3 1.3-1.42 1.4-1.3-1.3z"}}]},j=y({name:"Link1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-link-1",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,v.value)}});export{j as default};
