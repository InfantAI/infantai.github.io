import{d as f,j as a,v as m,x as y,y as O}from"./index-d4c9a0d0.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7 3h3.5v2H9v1.5H7V3zm5.5 0h3v2h-3V3zm5 0H21v3.5h-2V5h-1.5V3zM5 7.5V19h11.5v2H3V7.5h2zm4 1v3H7v-3h2zm12 0v3h-2v-3h2zm-12 5V15h1.5v2H7v-3.5h2zm12 0V17h-3.5v-2H19v-1.5h2zM12.5 15h3v2h-3v-2z"}}]},b=f({name:"FlipToBackIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),s=a(()=>["t-icon","t-icon-flip-to-back",o.value]),p=a(()=>v(v({},c.value),t.style)),h=a(()=>({class:s.value,style:p.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>y(d,h.value)}});export{b as default};
