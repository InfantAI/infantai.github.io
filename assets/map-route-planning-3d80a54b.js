import{d as m,j as a,v as y,x as O,y as g}from"./index-b9cef0b8.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 4a3 3 0 00-3 3c0 1.24.78 2.5 1.74 3.54.45.5.91.91 1.26 1.2.35-.29.8-.7 1.26-1.2C14.22 9.5 15 8.24 15 7a3 3 0 00-3-3zm0 10.21l-.77-.53a13.2 13.2 0 01-1.97-1.79C8.22 10.75 7 9.01 7 7a5 5 0 0110 0c0 2.01-1.22 3.75-2.26 4.9a14.58 14.58 0 01-1.97 1.78l-.77.53zm0-6.96a.25.25 0 100-.5.25.25 0 000 .5zM10.25 7a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM2 10h3v2h-.63l.86 1.42-1.23.75V20h16v-6.25l-.78-1.03.68-.52.1.14V12h-2v-2h4v12H2V10zm2 2.2l.32-.2H4v.2zm14.65 3.6l-.87.48c-.45.24-.9.45-1.37.63l-.73-1.86c.4-.15.77-.33 1.14-.53l.88-.48.95 1.76zm-11.31.97a12 12 0 01-1.35-.67l1-1.73c.37.21.75.4 1.13.56l.92.4-.78 1.84-.92-.4zm6.3.9l-1 .05a12 12 0 01-1.5-.02l.14-2c.42.04.84.05 1.26.02l1-.05.1 2z"}}]},z=m({name:"MapRoutePlanningIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:p}=y(r),s=a(()=>["t-icon","t-icon-map-route-planning",l.value]),v=a(()=>c(c({},p.value),t.style)),u=a(()=>({class:s.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{z as default};
