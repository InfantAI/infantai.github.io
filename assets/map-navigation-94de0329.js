import{d as h,j as a,v as y,x as O,y as m}from"./index-9eb1327f.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 2v3h10V2h2v3h2v2h-2v8h2v2h-2v4h-2v-4h-2v-2h2V7H8v4H6V7H2V5h4V2h2zm6.58 8.42l-4.37 13.13L7.2 17.8l-5.75-3 13.13-4.38zM6.55 15.2l2.13 1.12 1.12 2.13 1.62-4.87-4.87 1.62z"}}]},b=h({name:"MapNavigationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=y(r),p=a(()=>["t-icon","t-icon-map-navigation",o.value]),c=a(()=>v(v({},s.value),t.style)),u=a(()=>({class:p.value,style:c.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(g,u.value)}});export{b as default};
