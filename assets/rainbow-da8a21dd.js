import{d as y,j as a,v as O,x as m,y as b}from"./index-a2efab08.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){b(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 8a9 9 0 00-9 9v1H1v-1a11 11 0 0122 0v1h-2v-1a9 9 0 00-9-9zm0 3a6 6 0 00-6 6v1H4v-1a8 8 0 1116 0v1h-2v-1a6 6 0 00-6-6zm0 3a3 3 0 00-3 3v1H7v-1a5 5 0 0110 0v1h-2v-1a3 3 0 00-3-3z"}}]},h=y({name:"RainbowIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),c=a(()=>["t-icon","t-icon-rainbow",o.value]),p=a(()=>v(v({},s.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(d,u.value)}});export{h as default};
