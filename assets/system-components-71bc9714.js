import{d as m,j as a,v as y,x as O,y as d}from"./index-9eb1327f.js";function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 4c-.66 0-1.22.55-1.22 1.25S11.34 6.5 12 6.5c.66 0 1.22-.55 1.22-1.25S12.66 4 12 4zM8.78 5.25A3.24 3.24 0 0112 2a3.25 3.25 0 011 6.34v.84l3.85 2.25v4.45l.82.41c.56-.49 1.3-.79 2.1-.79 1.8 0 3.23 1.47 3.23 3.25A3.24 3.24 0 0119.78 22a3.24 3.24 0 01-3.14-3.98l-.75-.38L12 19.9l-3.88-2.27-.76.38A3.24 3.24 0 014.22 22 3.24 3.24 0 011 18.75a3.24 3.24 0 013.22-3.25c.81 0 1.55.3 2.11.8l.82-.42v-4.45L11 9.18v-.84a3.25 3.25 0 01-2.22-3.09zM12 10.91l-2.85 1.66v3.36L12 17.59l2.85-1.66v-3.36L12 10.91zm-6.78 7.12c-.22-.32-.59-.53-1-.53-.66 0-1.22.55-1.22 1.25S3.56 20 4.22 20c.67 0 1.22-.55 1.22-1.25 0-.15-.02-.29-.06-.42l-.16-.3zm13.4.3c-.04.14-.06.27-.06.42 0 .7.55 1.25 1.22 1.25.66 0 1.22-.55 1.22-1.25s-.56-1.25-1.22-1.25c-.41 0-.78.2-1 .53l-.16.3z"}}]},j=m({name:"SystemComponentsIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:i}=y(r),p=a(()=>["t-icon","t-icon-system-components",l.value]),v=a(()=>c(c({},i.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,u.value)}});export{j as default};
