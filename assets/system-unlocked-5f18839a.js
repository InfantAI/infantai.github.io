import{d as y,j as a,v as m,x as d,y as O}from"./index-a2efab08.js";function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 1h22v10h-2V3H3v13h10v2H1V1zm18.5 13.5c-.69 0-1.25.56-1.25 1.25v.75H24V23h-9v-6.5h1.25v-.75a3.25 3.25 0 015.54-2.3l.71.7-1.4 1.42-.72-.7a1.24 1.24 0 00-.88-.37zm-2.5 4V21h5v-2.5h-5zM2.25 21H13v2H2.25v-2z"}}]},b=y({name:"SystemUnlockedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),v=a(()=>["t-icon","t-icon-system-unlocked",o.value]),p=a(()=>i(i({},c.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>d(h,u.value)}});export{b as default};
