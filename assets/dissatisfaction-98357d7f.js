import{d as y,j as a,v as O,x as d,y as m}from"./index-dfbb01d3.js";function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 100 18 9 9 0 000-18zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm7-3.5v1a.5.5 0 001 0v-1h2v1a2.5 2.5 0 01-5 0v-1h2zm7 0v1a.5.5 0 001 0v-1h2v1a2.5 2.5 0 01-5 0v-1h2zm-7.33 7a5 5 0 018.66 0l.5.86-1.73 1-.5-.86a3 3 0 00-5.2 0l-.5.87-1.73-1 .5-.87z"}}]},b=y({name:"DissatisfactionIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:c}=O(r),v=a(()=>["t-icon","t-icon-dissatisfaction",i.value]),p=a(()=>l(l({},c.value),t.style)),f=a(()=>({class:v.value,style:p.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>d(h,f.value)}});export{b as default};
