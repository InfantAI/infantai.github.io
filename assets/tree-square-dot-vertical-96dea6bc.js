import{d as f,j as a,v as y,x as O,y as d}from"./index-ab78ae36.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17 4h3v3h-3V4zm-2 2.5V9h7V2h-7v2.5h-3.67V11H9V8.5H2v7h7V13h2.33v6.5H15V22h7v-7h-7v2.5h-1.67v-11H15zM17 20v-3h3v3h-3zM7 10.5v3H4v-3h3z"}}]},b=f({name:"TreeSquareDotVerticalIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=y(t),s=a(()=>["t-icon","t-icon-tree-square-dot-vertical",o.value]),p=a(()=>v(v({},c.value),r.style)),u=a(()=>({class:s.value,style:p.value,onClick:h=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:h})}}));return()=>O(m,u.value)}});export{b as default};
