import{d as f,j as a,v as d,x as y,y as O}from"./index-c831df68.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20 0v3h3v2h-3v3h-2V5h-3V3h3V0h2zM2 2h11v2H4v16h16V10h2v12H2V2zm11 6v10h-2V8h2zm-5 3v7H6v-7h2zm10 2v5h-2v-5h2z"}}]},b=f({name:"ChartAddIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=d(t),s=a(()=>["t-icon","t-icon-chart-add",o.value]),p=a(()=>v(v({},c.value),r.style)),h=a(()=>({class:s.value,style:p.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>y(m,h.value)}});export{b as default};
