import{d as f,j as a,v as y,x as O,y as m}from"./index-d4c9a0d0.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 0h1a9 9 0 019 9v1h-2V9a7 7 0 00-7-7h-1V0zM4 2h6v2H6v18h12V12h2v12H4V2zm8 2h1a5 5 0 015 5v1h-2V9a3 3 0 00-3-3h-1V4zm0 4h2v2h-2V8z"}}]},b=f({name:"HotspotWaveIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:p}=y(r),v=a(()=>["t-icon","t-icon-hotspot-wave",o.value]),c=a(()=>s(s({},p.value),t.style)),u=a(()=>({class:v.value,style:c.value,onClick:h=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:h})}}));return()=>O(d,u.value)}});export{b as default};
