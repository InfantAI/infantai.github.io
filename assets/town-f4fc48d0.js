import{d as f,j as a,v as m,x as y,y as O}from"./index-c831df68.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h5.44L11 5.91V2h5.47L22 8.64V22H2V2zm11 2v16h7V9.36L15.53 4H13zm-2 16V8.89L6.56 4H4v16h7zM6 8h2v2H6V8zm9 0h2v2h-2V8zm-9 4h2v2H6v-2zm9 0h2v2h-2v-2zm-9 4h2v2H6v-2zm9 0h2v2h-2v-2z"}}]},g=f({name:"TownIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=m(r),c=a(()=>["t-icon","t-icon-town",o.value]),p=a(()=>v(v({},s.value),t.style)),u=a(()=>({class:c.value,style:p.value,onClick:h=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:h})}}));return()=>y(d,u.value)}});export{g as default};
