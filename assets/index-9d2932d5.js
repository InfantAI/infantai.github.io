import{c as h,d as v}from"./setting-c90b486e.js";import{d as b,r as y,C as V,h as u,o as w,e as P,w as a,b as i,t as p,a as e,i as $,u as T,M as U,g as q}from"./index-9eb1327f.js";const k={first:[{required:!0,message:"请选择时间",type:"error"}],secoend:[{required:!0,message:"请选择时间",type:"error"}],third:[{required:!0,message:"请选择时间",type:"error"}],fourth:[{required:!0,message:"请选择时间",type:"error"}],fifth:[{required:!0,message:"请选择时间",type:"error"}]},C={one:"",two:"",three:"",four:"",five:""},D={class:"form-basic-container"},I={class:"form-basic-item"},M={class:"form-basic-container-title"},N={name:"PushTime"},A=b({...N,setup(B){const l=y({...C}),m=async t=>{t.validateResult===!0&&await h(l.value).then(()=>{U.success("新建成功")})},f=async()=>{const t=await v();t&&(l.value=t)};return V(()=>{f()}),(t,s)=>{const d=u("t-timePicker"),n=u("t-form-item"),r=u("t-col"),c=u("t-button"),_=u("t-row"),g=u("t-form");return w(),P(g,{ref:"form",class:"base-form",data:l.value,rules:T(k),"label-align":"top","label-width":100,onSubmit:m},{default:a(()=>[i("div",D,[i("div",I,[i("div",M,p(t.$t("pages.setting.title")),1),e(_,{class:"row-gap",gutter:[32,24]},{default:a(()=>[e(r,{span:8},{default:a(()=>[e(n,{label:t.$t("pages.setting.first"),name:"payment"},{default:a(()=>[e(d,{modelValue:l.value.one,"onUpdate:modelValue":s[0]||(s[0]=o=>l.value.one=o),placeholder:t.$t("pages.setting.pushTimePlaceholder"),style:{width:"360px"}},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(r,{span:8},{default:a(()=>[e(n,{label:t.$t("pages.setting.secoend"),name:"payment"},{default:a(()=>[e(d,{modelValue:l.value.two,"onUpdate:modelValue":s[1]||(s[1]=o=>l.value.two=o),placeholder:t.$t("pages.setting.pushTimePlaceholder"),style:{width:"360px"}},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(r,{span:8},{default:a(()=>[e(n,{label:t.$t("pages.setting.third"),name:"payment"},{default:a(()=>[e(d,{modelValue:l.value.three,"onUpdate:modelValue":s[2]||(s[2]=o=>l.value.three=o),placeholder:t.$t("pages.setting.pushTimePlaceholder"),style:{width:"360px"}},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(r,{span:8},{default:a(()=>[e(n,{label:t.$t("pages.setting.fourth"),name:"payment"},{default:a(()=>[e(d,{modelValue:l.value.four,"onUpdate:modelValue":s[3]||(s[3]=o=>l.value.four=o),placeholder:t.$t("pages.setting.pushTimePlaceholder"),style:{width:"360px"}},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(r,{span:8},{default:a(()=>[e(n,{label:t.$t("pages.setting.fifth"),name:"payment"},{default:a(()=>[e(d,{modelValue:l.value.five,"onUpdate:modelValue":s[4]||(s[4]=o=>l.value.five=o),placeholder:t.$t("pages.setting.pushTimePlaceholder"),style:{width:"360px"}},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(r,{span:8},{default:a(()=>[e(n,null,{default:a(()=>[e(c,{theme:"primary",class:"form-submit-confirm",type:"submit"},{default:a(()=>[$(p(t.$t("pages.setting.confirmPush")),1)]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1},8,["data","rules"])}}});const L=q(A,[["__scopeId","data-v-7175c053"]]);export{L as default};
