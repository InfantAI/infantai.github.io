import{d as M,r as t,C as N,h as i,o as R,e as S,w as s,a as o,i as h,t as r,u as g,a0 as U,b as a,a1 as $,M as q,g as z}from"./index-a2c26395.js";import{g as D,a as H,u as L}from"./setting-c13ffba3.js";import{g as O}from"./getAuth-b2761d3a.js";const T={style:{width:"20vw",height:"60vh"},class:"tdesign-demo-image-viewer__base"},j={class:"tdesign-demo-image-viewer__ui-image"},E=["src"],_="https://gadget-oss.oss-ap-southeast-5.aliyuncs.com/instaanswer/test/file/1703682265797.png",y="Preview",G=M({__name:"index",setup(J){const b=O(),l=t([]),d=t(_),m=t([]),x=t(),u=t(!1),C=()=>{u.value=!0},V=({file:e})=>{q.error(`文件 ${e.name} 上传失败`)},p=e=>{d.value=e,l.value=[d.value]},v=t(0),f=async e=>{v.value===0?await H(e):await L(v.value,e)},k=async({response:e})=>{console.log(e),p(e.data),await f(e.data)},A=async()=>{await f(_)};return N(async()=>{await D().then(e=>{console.log("AdPages",e),e.length>0?p(e[0].image):l.value=[_]})}),(e,n)=>{const w=i("t-button"),I=i("t-upload"),B=i("t-row"),F=i("t-image-viewer"),P=i("t-card");return R(),S(P,null,{default:s(()=>[o(B,null,{default:s(()=>[o(w,{ghost:"",onClick:A},{default:s(()=>[h(r(e.$t("pages.setting.reset")),1)]),_:1}),o(I,{ref_key:"uploadRef",ref:x,modelValue:m.value,"onUpdate:modelValue":n[0]||(n[0]=c=>m.value=c),"auto-upload":"","upload-all-files-in-one-request":"","is-batch-upload":"",headers:g(b),"trigger-button-props":{theme:"primary",variant:"base"},action:g(U),style:{marginLeft:"40px"},onFail:V,onSuccess:k},{default:s(()=>[o(w,{theme:"primary"},{default:s(()=>[h(r(e.$t("pages.setting.reupload")),1)]),_:1})]),_:1},8,["modelValue","headers","action"])]),_:1}),a("div",T,[o(F,{visible:u.value,"onUpdate:visible":n[1]||(n[1]=c=>u.value=c),images:l.value,title:y},{trigger:s(()=>[a("div",j,[a("img",{alt:"test",src:d.value,class:"tdesign-demo-image-viewer__ui-image--img"},null,8,E),a("div",{class:"tdesign-demo-image-viewer__ui-image--hover",onClick:C},[a("span",null,[o(g($),{size:"1.4em"})])]),a("div",{class:"tdesign-demo-image-viewer__ui-image--footer"},[a("span",{class:"tdesign-demo-image-viewer__ui-image--title"},r(y))])])]),_:1},8,["visible","images"])])]),_:1})}}});const X=z(G,[["__scopeId","data-v-810d063e"]]);export{X as default};
