import{d as y,j as a,v as O,x as g,y as m}from"./index-a2c26395.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var P={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a7 7 0 00-7 7c0 2.86 1.78 5.62 3.74 7.76a26.16 26.16 0 003.26 3 24.68 24.68 0 003.26-3C17.22 15.62 19 12.86 19 10a7 7 0 00-7-7zm0 20.21l-.57-.39-.03-.02-.07-.05a16.88 16.88 0 01-1.22-.94 28.16 28.16 0 01-2.85-2.7C5.22 16.88 3 13.64 3 10a9 9 0 0118 0c0 3.64-2.22 6.88-4.26 9.11a28.15 28.15 0 01-4.14 3.7h-.02l-.01.01-.57.4zM9 7h4.64c.44 0 1.02.16 1.5.57.52.45.86 1.14.86 2.03 0 .9-.34 1.58-.86 2.03-.48.41-1.06.57-1.5.57H11V15H9V7zm2 3.2h2.64l.07-.02a.38.38 0 00.23-.21.91.91 0 00.06-.37c0-.19-.03-.3-.06-.37a.38.38 0 00-.3-.23H11v1.2z"}}]},h=y({name:"LocationParkingPlaceIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),p=a(()=>["t-icon","t-icon-location-parking-place",o.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>g(P,v.value)}});export{h as default};
