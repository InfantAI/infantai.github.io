import{E as r,d as A,z as G,r as s,G as W,j as H,V as J,C as Q,h as n,o as X,c as Y,a as e,w as a,b as Z,P as ee,i as m,t as g,M as te,g as ae}from"./index-a2efab08.js";import{a as oe,t as le}from"./algorithm-fb1c1589.js";const ne=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{title:r("pages.algorithm.resources.collectionTime"),align:"left",width:220,colKey:"collectionTime",fixed:"left"},{title:r("pages.algorithm.resources.type"),colKey:"type",width:160},{title:r("pages.algorithm.resources.userId"),width:160,ellipsis:!0,colKey:"userId"},{title:r("pages.algorithm.resources.tag"),width:160,ellipsis:!0,colKey:"tagFlag"},{title:r("pages.algorithm.embedding.type"),width:160,ellipsis:!0,colKey:"type"},{title:r("pages.algorithm.resources.storageLocation"),width:160,ellipsis:!0,colKey:"storageLocation"},{title:r("pages.algorithm.resources.operation"),align:"left",fixed:"right",width:160,colKey:"op"}],se={name:"",no:"",type:""},ie={class:"left-operation-container"},re={name:"Resources"},ce=A({...re,setup(ue){const T=G(),K=s(ne),i=s({...se}),b=s([]),c=s(""),u=s({pageSize:20,total:100,current:1});s("");const R=s(""),f=s(!1),_=async()=>{f.value=!0;try{const t=await oe({language:R.value,page:{pageIndex:u.value.current,pageSize:u.value.pageSize}});b.value=t.content,u.value={...u.value,total:t.totalCount}}catch(t){console.log(t)}finally{f.value=!1}},y=s(),p=s(!1),w=s([1,2]);W();const $=t=>{y.value=t,c.value=t.tagFlag,p.value=!0},C=()=>{y.value=null,c.value=""},L=()=>{C()},U=async()=>{await le({id:y.value.id,tagFlag:c.value,language:""}).then(()=>{p.value=!1,te.success("标记成功"),_(),C()})},N="index",z=t=>{w.value=t},I=(t,o)=>{_(),console.log("分页变化",t,o)},M=(t,o)=>{console.log("统一Change",t,o)},O=()=>{},D=()=>{},F=H(()=>({offsetTop:T.isUseTabsRouter?48:0,container:`.${J}-layout`}));return Q(()=>{_()}),(t,o)=>{const V=n("t-select"),v=n("t-form-item"),d=n("t-col"),k=n("t-input"),h=n("t-row"),S=n("t-button"),B=n("t-form"),x=n("t-link"),P=n("t-space"),j=n("t-table"),E=n("t-card"),q=n("t-dialog");return X(),Y("div",null,[e(E,{class:"list-card-container",bordered:!1},{default:a(()=>[e(h,{justify:"space-between"},{default:a(()=>[Z("div",ie,[e(B,{ref:"form",data:i.value,"label-width":80,colon:"",onReset:O,onSubmit:D},{default:a(()=>[e(h,null,{default:a(()=>[e(d,{span:10},{default:a(()=>[e(h,{gutter:[24,24]},{default:a(()=>[e(d,{span:6},{default:a(()=>[e(v,{label:t.$t("pages.algorithm.resources.type"),name:"type"},{default:a(()=>[e(V,{modelValue:i.value.type,"onUpdate:modelValue":o[0]||(o[0]=l=>i.value.type=l),style:{display:"inline-block"},class:"form-item-content",clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(d,{span:6},{default:a(()=>[e(v,{label:t.$t("pages.algorithm.resources.userId"),name:"no"},{default:a(()=>[e(k,{modelValue:i.value.no,"onUpdate:modelValue":o[1]||(o[1]=l=>i.value.no=l),class:"form-item-content",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(d,{span:6},{default:a(()=>[e(v,{label:t.$t("pages.algorithm.resources.tag"),name:"type"},{default:a(()=>[e(V,{modelValue:i.value.type,"onUpdate:modelValue":o[2]||(o[2]=l=>i.value.type=l),style:{display:"inline-block"},class:"form-item-content",clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1}),e(d,{span:2,class:"operation-container"},{default:a(()=>[e(S,{theme:"primary",type:"submit",style:ee({marginLeft:"var(--td-comp-margin-s)"})},{default:a(()=>[m(g(t.$t("components.commonTable.query")),1)]),_:1},8,["style"]),e(S,{type:"reset",variant:"base",theme:"default"},{default:a(()=>[m(g(t.$t("components.commonTable.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])])]),_:1}),e(j,{data:b.value,columns:K.value,"row-key":N,"vertical-align":"top",hover:!0,pagination:u.value,"selected-row-keys":w.value,loading:f.value,"header-affixed-top":F.value,onPageChange:I,onChange:M,onSelectChange:z},{op:a(l=>[e(P,null,{default:a(()=>[e(x,{theme:"primary",download:l.row.storageLocation},{default:a(()=>[m(g(t.$t("pages.algorithm.resources.operationOptions.download")),1)]),_:2},1032,["download"]),e(x,{theme:"danger",onClick:de=>$(l)},{default:a(()=>[m(g(t.$t("pages.algorithm.resources.operationOptions.tag")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["data","columns","pagination","selected-row-keys","loading","header-affixed-top"])]),_:1}),e(q,{visible:p.value,"onUpdate:visible":o[4]||(o[4]=l=>p.value=l),"on-cancel":L,onConfirm:U},{body:a(()=>[e(k,{modelValue:c.value,"onUpdate:modelValue":o[3]||(o[3]=l=>c.value=l),placeholder:"请添加标记"},null,8,["modelValue"])]),_:1},8,["visible"])])}}});const ge=ae(ce,[["__scopeId","data-v-bfa1920a"]]);export{ge as default};
