import{d as f,j as a,v as m,x as y,y as O}from"./index-b9cef0b8.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7 4a2 2 0 00-2 2v1h3V4H7zm3 0v3h4V4h-4zm6 0v3h3V6a2 2 0 00-2-2h-1zm5 3h1v2h-1v11h1v2H2v-2h1V9H2V7h1V6a4 4 0 014-4h10a4 4 0 014 4v1zm-2 2H5v11h3v-5a4 4 0 018 0v5h3V9zm-5 11v-5a2 2 0 10-4 0v5h4z"}}]},b=f({name:"Shop4Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),p=a(()=>["t-icon","t-icon-shop-4",o.value]),c=a(()=>v(v({},s.value),r.style)),h=a(()=>({class:p.value,style:c.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>y(d,h.value)}});export{b as default};
