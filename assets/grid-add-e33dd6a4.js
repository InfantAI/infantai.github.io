import{d as h,j as a,v as f,x as m,y}from"./index-c831df68.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h9v9H2V2zm2 2v5h5V4H4zm9-2h9v9h-9V2zm2 2v5h5V4h-5zM2 13h9v9H2v-9zm2 2v5h5v-5H4zm12.5-1.5h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"}}]},b=h({name:"GridAddIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=f(t),c=a(()=>["t-icon","t-icon-grid-add",o.value]),p=a(()=>v(v({},s.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:d=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:d})}}));return()=>m(O,u.value)}});export{b as default};
