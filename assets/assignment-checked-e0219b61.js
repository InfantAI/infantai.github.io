import{d,j as a,v as h,x as m,y}from"./index-dfbb01d3.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 2.5a1.5 1.5 0 00-1.38.9l-.26.6H4.5v16h15V4h-5.86l-.26-.6A1.5 1.5 0 0012 2.5zM9.13 2a3.5 3.5 0 015.74 0h6.63v20h-19V2h6.63zm8.53 7.59l-7.07 7.07-4.25-4.25L7.76 11l2.83 2.83 5.65-5.66 1.42 1.42z"}}]},b=d({name:"AssignmentCheckedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=h(r),p=a(()=>["t-icon","t-icon-assignment-checked",l.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(O,u.value)}});export{b as default};
