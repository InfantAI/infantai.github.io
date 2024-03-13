import{u as N,g as k}from"./payment-043da5f4.js";import{d as M,r as g,C as O,h as m,o as f,e as V,w as t,b as s,t as i,a as e,c as R,F as T,q as E,u as P,i as h,M as $,p as F,f as L,g as Q}from"./index-ab78ae36.js";const Y={country:[{required:!0,message:"请选择国家",type:"error"}],symbo:[{required:!0,message:"请输入金钱符号",type:"error"}],monthPrice:[{required:!0,message:"请输入月付费用",type:"error"}],seasonPrice:[{required:!0,message:"请输入季付费用",type:"error"}],yearPrice:[{required:!0,message:"请输入年付费用",type:"error"}]},j={briefly:"",country:"",monthBriefly:"",monthDiscountPrice:0,monthPrice:0,seasonBriefly:"",seasonDiscountPrice:0,seasonPrice:0,symbo:"",yearBriefly:"",yearDiscountPrice:0,yearPrice:0},v=[{label:"Indonesia",value:"ID"},{label:"Hong Kong",value:"US"},{label:"England",value:"EN"}],p=c=>(F("data-v-9789d15b"),c=c(),L(),c),H={class:"form-basic-container"},K={class:"form-basic-item"},z={class:"form-basic-container-title"},G=p(()=>s("span",{class:"space-item"},null,-1)),J=p(()=>s("span",{class:"space-item"},null,-1)),W=p(()=>s("span",{class:"space-item"},null,-1)),X=p(()=>s("span",{class:"space-item"},null,-1)),Z=p(()=>s("span",{class:"space-item"},null,-1)),x=p(()=>s("span",{class:"space-item"},null,-1)),ee=p(()=>s("span",{class:"space-item"},null,-1)),ae=p(()=>s("span",{class:"space-item"},null,-1)),le=p(()=>s("span",{class:"space-item"},null,-1)),te={class:"form-basic-container-title form-title-gap"},oe={class:"form-submit-container"},ne={class:"form-submit-sub"},se={class:"form-submit-left"},ue={name:"FormBase"},re=M({...ue,setup(c){const l=g({...j}),w=()=>{$.warning("取消新建")},D=async a=>{a.validateResult===!0&&(console.log(l.value),await N(l.value).then(o=>{$.success("新建成功")}))},_=a=>{console.log("formData.value",y.value),Object.assign(l.value,y.value.find(o=>o.country===a)),console.log("formData.value",l.value)},y=g([]),A=async()=>{await k().then(a=>{console.log("formData.value",a),y.value=a})};return O(async()=>{await A(),l.value.country=v[0].value,_(v[0].value)}),(a,o)=>{const U=m("t-option"),B=m("t-select"),u=m("t-form-item"),r=m("t-col"),d=m("t-input"),I=m("t-row"),S=m("t-textarea"),b=m("t-button"),C=m("t-form");return f(),V(C,{ref:"form",class:"base-form",data:l.value,rules:P(Y),"label-align":"top","label-width":100,onReset:w,onSubmit:D},{default:t(()=>[s("div",H,[s("div",K,[s("div",z,i(a.$t("pages.payment.title")),1),e(I,{class:"row-gap",gutter:[32,24]},{default:t(()=>[e(r,{span:6},{default:t(()=>[e(u,{label:a.$t("pages.payment.country"),name:"country"},{default:t(()=>[e(B,{modelValue:l.value.country,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value.country=n),style:{width:"322px"},class:"demo-select-base",clearable:"",onChange:_},{default:t(()=>[(f(!0),R(T,null,E(P(v),(n,q)=>(f(),V(U,{key:q,value:n.value,label:n.label},{default:t(()=>[h(i(n.label),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(r,{span:6},{default:t(()=>[e(u,{label:a.$t("pages.payment.flag"),name:"symbo"},{default:t(()=>[e(d,{modelValue:l.value.symbo,"onUpdate:modelValue":o[1]||(o[1]=n=>l.value.symbo=n),style:{width:"322px"},placeholder:a.$t("common.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(r,{span:4},{default:t(()=>[e(u,{label:a.$t("pages.payment.mounthamount"),name:"monthPrice"},{default:t(()=>[G,s("div",null,[e(d,{modelValue:l.value.monthPrice,"onUpdate:modelValue":o[2]||(o[2]=n=>l.value.monthPrice=n),placeholder:a.$t("pages.payment.contractAmountPlaceholder"),style:{width:"160px"}},null,8,["modelValue","placeholder"])])]),_:1},8,["label"])]),_:1}),e(r,{span:4},{default:t(()=>[e(u,{label:a.$t("pages.payment.onsaleamount"),name:"onsaleMounth"},{default:t(()=>[J,s("div",null,[e(d,{modelValue:l.value.monthDiscountPrice,"onUpdate:modelValue":o[3]||(o[3]=n=>l.value.monthDiscountPrice=n),placeholder:a.$t("pages.payment.contractAmountPlaceholder"),style:{width:"160px"}},null,8,["modelValue","placeholder"])])]),_:1},8,["label"])]),_:1}),e(r,{span:4},{default:t(()=>[e(u,{label:a.$t("pages.payment.onsalead"),name:"mounthAd"},{default:t(()=>[W,s("div",null,[e(d,{modelValue:l.value.monthBriefly,"onUpdate:modelValue":o[4]||(o[4]=n=>l.value.monthBriefly=n),placeholder:a.$t("pages.payment.contractAmountPlaceholder"),style:{width:"160px"}},null,8,["modelValue","placeholder"])])]),_:1},8,["label"])]),_:1}),e(r,{span:4},{default:t(()=>[e(u,{label:a.$t("pages.payment.quarteramount"),name:"seasonPrice"},{default:t(()=>[X,s("div",null,[e(d,{modelValue:l.value.seasonPrice,"onUpdate:modelValue":o[5]||(o[5]=n=>l.value.seasonPrice=n),placeholder:a.$t("pages.payment.contractAmountPlaceholder"),style:{width:"160px"}},null,8,["modelValue","placeholder"])])]),_:1},8,["label"])]),_:1}),e(r,{span:4},{default:t(()=>[e(u,{label:a.$t("pages.payment.onsaleamount"),name:"onsaleQuater"},{default:t(()=>[Z,s("div",null,[e(d,{modelValue:l.value.seasonDiscountPrice,"onUpdate:modelValue":o[6]||(o[6]=n=>l.value.seasonDiscountPrice=n),placeholder:a.$t("pages.payment.contractAmountPlaceholder"),style:{width:"160px"}},null,8,["modelValue","placeholder"])])]),_:1},8,["label"])]),_:1}),e(r,{span:4},{default:t(()=>[e(u,{label:a.$t("pages.payment.onsalead"),name:"QuaterAd"},{default:t(()=>[x,s("div",null,[e(d,{modelValue:l.value.seasonBriefly,"onUpdate:modelValue":o[7]||(o[7]=n=>l.value.seasonBriefly=n),placeholder:a.$t("pages.payment.contractAmountPlaceholder"),style:{width:"160px"}},null,8,["modelValue","placeholder"])])]),_:1},8,["label"])]),_:1}),e(r,{span:4},{default:t(()=>[e(u,{label:a.$t("pages.payment.yearamount"),name:"yearPrice"},{default:t(()=>[ee,s("div",null,[e(d,{modelValue:l.value.yearPrice,"onUpdate:modelValue":o[8]||(o[8]=n=>l.value.yearPrice=n),placeholder:a.$t("pages.payment.contractAmountPlaceholder"),style:{width:"160px"}},null,8,["modelValue","placeholder"])])]),_:1},8,["label"])]),_:1}),e(r,{span:4},{default:t(()=>[e(u,{label:a.$t("pages.payment.onsaleamount"),name:"YearAd"},{default:t(()=>[ae,s("div",null,[e(d,{modelValue:l.value.yearDiscountPrice,"onUpdate:modelValue":o[9]||(o[9]=n=>l.value.yearDiscountPrice=n),placeholder:a.$t("pages.payment.contractAmountPlaceholder"),style:{width:"160px"}},null,8,["modelValue","placeholder"])])]),_:1},8,["label"])]),_:1}),e(r,{span:4},{default:t(()=>[e(u,{label:a.$t("pages.payment.onsalead"),name:"onsalead"},{default:t(()=>[le,s("div",null,[e(d,{modelValue:l.value.yearBriefly,"onUpdate:modelValue":o[10]||(o[10]=n=>l.value.yearBriefly=n),placeholder:a.$t("pages.payment.contractAmountPlaceholder"),style:{width:"160px"}},null,8,["modelValue","placeholder"])])]),_:1},8,["label"])]),_:1})]),_:1}),s("div",te,i(a.$t("pages.payment.otherInfo")),1),e(u,{name:"remark"},{default:t(()=>[e(S,{modelValue:l.value.briefly,"onUpdate:modelValue":o[11]||(o[11]=n=>l.value.briefly=n),height:124,placeholder:a.$t("pages.payment.remarkPlaceholder")},null,8,["modelValue","placeholder"])]),_:1})])]),s("div",oe,[s("div",ne,[s("div",se,[e(b,{theme:"primary",class:"form-submit-confirm",type:"submit"},{default:t(()=>[h(i(a.$t("pages.payment.confirm")),1)]),_:1}),e(b,{type:"reset",class:"form-submit-cancel",theme:"default",variant:"base"},{default:t(()=>[h(i(a.$t("pages.payment.cancel")),1)]),_:1})])])])]),_:1},8,["data","rules"])}}});const pe=Q(re,[["__scopeId","data-v-9789d15b"]]);export{pe as default};
