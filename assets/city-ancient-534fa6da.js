import{d as f,j as a,v as y,x as O,y as m}from"./index-ab78ae36.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.15 1.48L12 .07l.86 1.42.03.04a24.09 24.09 0 00.46.72c.3.48.74 1.12 1.22 1.77a18.9 18.9 0 001.55 1.85c.54.56.96.87 1.23.97.33.13.55.16.65.16h1v2h-1v2h4v2h-1v9H3v-9H2v-2h4V9H5V7h1c.1 0 .32-.03.65-.16.27-.1.7-.4 1.24-.97.51-.53 1.05-1.19 1.54-1.85a36 36 0 001.68-2.49l.03-.04zM8 9v2h8V9H8zm6.43-2a22.37 22.37 0 01-1.46-1.79c-.36-.48-.7-.95-.97-1.37-.28.41-.6.89-.97 1.37-.44.6-.94 1.23-1.46 1.79h4.86zM5 13v7h3v-5h8v5h3v-7H5zm9 7v-3h-4v3h4z"}}]},b=f({name:"CityAncientIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:v}=y(r),s=a(()=>["t-icon","t-icon-city-ancient",i.value]),p=a(()=>l(l({},v.value),t.style)),u=a(()=>({class:s.value,style:p.value,onClick:h=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:h})}}));return()=>O(d,u.value)}});export{b as default};
