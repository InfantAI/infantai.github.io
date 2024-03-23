import{d as be,z as Se,r as we,C as Ae,K as xe,L as Ce,N as G,h as E,o as I,e as Ie,w as M,c as D,q as Le,F as Te,a as L,u as U,E as De,n as Pe,b as P,i as ke,t as Q,P as Y,R as Be,Q as Oe,g as Ee}from"./index-a2efab08.js";import{T as Me}from"./index-82d5b680.js";import{b as J}from"./index-f01f790b.js";import{_ as B,K as le,D as de,M as Ne,N as ue,f as V,u as k,r as j,G as Re,O as Ve,Q as We,R as H,T as ce,d as pe,U as Fe,n as ze,m as Ge,V as Ue,W as Ye,k as Xe,h as $e,e as He,X as Ze,Y as ge,C as qe,S as ve,$ as Ke,y as Qe,a0 as Je,a1 as je,a2 as et,F as tt,H as rt,I as at,J as ee}from"./charts-00f3ee64.js";import nt from"./usergroup-8f78d270.js";var fe=function(a){B(r,a);function r(){var e=a!==null&&a.apply(this,arguments)||this;return e.type=r.type,e}return r.prototype.getInitialData=function(e,t){return le(this.getSource(),this,{useEncodeDefaulter:!0})},r.prototype.getMarkerPosition=function(e){var t=this.coordinateSystem;if(t){var n=t.dataToPoint(t.clampData(e)),i=this.getData(),s=i.getLayout("offset"),o=i.getLayout("size"),l=t.getBaseAxis().isHorizontal()?0:1;return n[l]+=s+o/2,n}return[NaN,NaN]},r.type="series.__base_bar__",r.defaultOption={zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod"},r}(de);de.registerClass(fe);const te=fe;var it=function(a){B(r,a);function r(){var e=a!==null&&a.apply(this,arguments)||this;return e.type=r.type,e}return r.prototype.getInitialData=function(){return le(this.getSource(),this,{useEncodeDefaulter:!0,createInvertedIndices:!!this.get("realtimeSort",!0)||null})},r.prototype.getProgressive=function(){return this.get("large")?this.get("progressive"):!1},r.prototype.getProgressiveThreshold=function(){var e=this.get("progressiveThreshold"),t=this.get("largeThreshold");return t>e&&(e=t),e},r.prototype.brushSelector=function(e,t,n){return n.rect(t.getItemLayout(e))},r.type="series.bar",r.dependencies=["grid","polar"],r.defaultOption=Ne(te.defaultOption,{clip:!0,roundCap:!1,showBackground:!1,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderColor:null,borderWidth:0,borderType:"solid",borderRadius:0,shadowBlur:0,shadowColor:null,shadowOffsetX:0,shadowOffsetY:0,opacity:1},select:{itemStyle:{borderColor:"#212121"}},realtimeSort:!1}),r}(te);const st=it;var ot=function(){function a(){this.cx=0,this.cy=0,this.r0=0,this.r=0,this.startAngle=0,this.endAngle=Math.PI*2,this.clockwise=!0}return a}(),ht=function(a){B(r,a);function r(e){var t=a.call(this,e)||this;return t.type="sausage",t}return r.prototype.getDefaultShape=function(){return new ot},r.prototype.buildPath=function(e,t){var n=t.cx,i=t.cy,s=Math.max(t.r0||0,0),o=Math.max(t.r,0),l=(o-s)*.5,h=s+l,u=t.startAngle,d=t.endAngle,g=t.clockwise,c=Math.cos(u),v=Math.sin(u),A=Math.cos(d),b=Math.sin(d),w=g?d-u<Math.PI*2:u-d<Math.PI*2;w&&(e.moveTo(c*s+n,v*s+i),e.arc(c*h+n,v*h+i,l,-Math.PI+u,u,!g)),e.arc(n,i,o,u,d,!g),e.moveTo(A*o+n,b*o+i),e.arc(A*h+n,b*h+i,l,d-Math.PI*2,d-Math.PI,!g),s!==0&&(e.arc(n,i,s,d,u,g),e.moveTo(c*s+n,b*s+i)),e.closePath()},r}(ue);const lt=ht;var N=[0,0],X=Math.max,$=Math.min;function dt(a,r){var e=a.getArea&&a.getArea();if(ge(a,"cartesian2d")){var t=a.getBaseAxis();if(t.type!=="category"||!t.onBand){var n=r.getLayout("bandWidth");t.isHorizontal()?(e.x-=n,e.width+=n*2):(e.y-=n,e.height+=n*2)}}return e}var ut=function(a){B(r,a);function r(){var e=a.call(this)||this;return e.type=r.type,e._isFirstFrame=!0,e}return r.prototype.render=function(e,t,n,i){this._model=e,this._removeOnRenderedListener(n),this._updateDrawMode(e);var s=e.get("coordinateSystem");(s==="cartesian2d"||s==="polar")&&(this._isLargeDraw?this._renderLarge(e,t,n):this._renderNormal(e,t,n,i))},r.prototype.incrementalPrepareRender=function(e){this._clear(),this._updateDrawMode(e),this._updateLargeClip(e)},r.prototype.incrementalRender=function(e,t){this._incrementalRenderLarge(e,t)},r.prototype._updateDrawMode=function(e){var t=e.pipelineContext.large;(this._isLargeDraw==null||t!==this._isLargeDraw)&&(this._isLargeDraw=t,this._clear())},r.prototype._renderNormal=function(e,t,n,i){var s=this.group,o=e.getData(),l=this._data,h=e.coordinateSystem,u=h.getBaseAxis(),d;h.type==="cartesian2d"?d=u.isHorizontal():h.type==="polar"&&(d=u.dim==="angle");var g=e.isAnimationEnabled()?e:null,c=ct(e,h);c&&this._enableRealtimeSort(c,o,n);var v=e.get("clip",!0)||c,A=dt(h,o);s.removeClipPath();var b=e.get("roundCap",!0),w=e.get("showBackground",!0),T=e.getModel("backgroundStyle"),O=T.get("borderRadius")||0,y=[],C=this._backgroundEls,Z=i&&i.isInitSort,q=i&&i.type==="changeAxisOrder";function K(p){var S=R[h.type](o,p),f=yt(h,d,S);return f.useStyle(T.getItemStyle()),h.type==="cartesian2d"&&f.setShape("r",O),y[p]=f,f}o.diff(l).add(function(p){var S=o.getItemModel(p),f=R[h.type](o,p,S);if(w&&K(p),!!o.hasValue(p)){var x=!1;v&&(x=re[h.type](A,f));var m=ae[h.type](e,o,p,f,d,g,u.model,!1,b);ie(m,o,p,S,f,e,d,h.type==="polar"),Z?m.attr({shape:f}):c?ne(c,g,m,f,p,d,!1,!1):V(m,{shape:f},e,p),o.setItemGraphicEl(p,m),s.add(m),m.ignore=x}}).update(function(p,S){var f=o.getItemModel(p),x=R[h.type](o,p,f);if(w){var m=void 0;C.length===0?m=K(S):(m=C[S],m.useStyle(T.getItemStyle()),h.type==="cartesian2d"&&m.setShape("r",O),y[p]=m);var _e=R[h.type](o,p),ye=me(d,_e,h);k(m,{shape:ye},g,p)}var _=l.getItemGraphicEl(S);if(!o.hasValue(p)){s.remove(_),_=null;return}var z=!1;v&&(z=re[h.type](A,x),z&&s.remove(_)),_||(_=ae[h.type](e,o,p,x,d,g,u.model,!!_,b)),q||ie(_,o,p,f,x,e,d,h.type==="polar"),Z?_.attr({shape:x}):c?ne(c,g,_,x,p,d,!0,q):k(_,{shape:x},e,p,null),o.setItemGraphicEl(p,_),_.ignore=z,s.add(_)}).remove(function(p){var S=l.getItemGraphicEl(p);S&&j(S,e,p)}).execute();var W=this._backgroundGroup||(this._backgroundGroup=new Re);W.removeAll();for(var F=0;F<y.length;++F)W.add(y[F]);s.add(W),this._backgroundEls=y,this._data=o},r.prototype._renderLarge=function(e,t,n){this._clear(),oe(e,this.group),this._updateLargeClip(e)},r.prototype._incrementalRenderLarge=function(e,t){this._removeBackground(),oe(t,this.group,!0)},r.prototype._updateLargeClip=function(e){var t=e.get("clip",!0)?Ve(e.coordinateSystem,!1,e):null;t?this.group.setClipPath(t):this.group.removeClipPath()},r.prototype._enableRealtimeSort=function(e,t,n){var i=this;if(t.count()){var s=e.baseAxis;if(this._isFirstFrame)this._dispatchInitSort(t,e,n),this._isFirstFrame=!1;else{var o=function(l){var h=t.getItemGraphicEl(l);if(h){var u=h.shape;return(s.isHorizontal()?Math.abs(u.height):Math.abs(u.width))||0}else return 0};this._onRendered=function(){i._updateSortWithinSameData(t,o,s,n)},n.getZr().on("rendered",this._onRendered)}}},r.prototype._dataSort=function(e,t,n){var i=[];return e.each(e.mapDimension(t.dim),function(s,o){var l=n(o);l=l??NaN,i.push({dataIndex:o,mappedValue:l,ordinalNumber:s})}),i.sort(function(s,o){return o.mappedValue-s.mappedValue}),{ordinalNumbers:We(i,function(s){return s.ordinalNumber})}},r.prototype._isOrderChangedWithinSameData=function(e,t,n){for(var i=n.scale,s=e.mapDimension(n.dim),o=Number.MAX_VALUE,l=0,h=i.getOrdinalMeta().categories.length;l<h;++l){var u=e.rawIndexOf(s,i.getRawOrdinalNumber(l)),d=u<0?Number.MIN_VALUE:t(e.indexOfRawIndex(u));if(d>o)return!0;o=d}return!1},r.prototype._isOrderDifferentInView=function(e,t){for(var n=t.scale,i=n.getExtent(),s=Math.max(0,i[0]),o=Math.min(i[1],n.getOrdinalMeta().categories.length-1);s<=o;++s)if(e.ordinalNumbers[s]!==n.getRawOrdinalNumber(s))return!0},r.prototype._updateSortWithinSameData=function(e,t,n,i){if(this._isOrderChangedWithinSameData(e,t,n)){var s=this._dataSort(e,n,t);this._isOrderDifferentInView(s,n)&&(this._removeOnRenderedListener(i),i.dispatchAction({type:"changeAxisOrder",componentType:n.dim+"Axis",axisId:n.index,sortInfo:s}))}},r.prototype._dispatchInitSort=function(e,t,n){var i=t.baseAxis,s=this._dataSort(e,i,function(o){return e.get(e.mapDimension(t.otherAxis.dim),o)});n.dispatchAction({type:"changeAxisOrder",componentType:i.dim+"Axis",isInitSort:!0,axisId:i.index,sortInfo:s,animation:{duration:0}})},r.prototype.remove=function(e,t){this._clear(this._model),this._removeOnRenderedListener(t)},r.prototype.dispose=function(e,t){this._removeOnRenderedListener(t)},r.prototype._removeOnRenderedListener=function(e){this._onRendered&&(e.getZr().off("rendered",this._onRendered),this._onRendered=null)},r.prototype._clear=function(e){var t=this.group,n=this._data;e&&e.isAnimationEnabled()&&n&&!this._isLargeDraw?(this._removeBackground(),this._backgroundEls=[],n.eachItemGraphicEl(function(i){j(i,e,H(i).dataIndex)})):t.removeAll(),this._data=null,this._isFirstFrame=!0},r.prototype._removeBackground=function(){this.group.remove(this._backgroundGroup),this._backgroundGroup=null},r.type="bar",r}(qe),re={cartesian2d:function(a,r){var e=r.width<0?-1:1,t=r.height<0?-1:1;e<0&&(r.x+=r.width,r.width=-r.width),t<0&&(r.y+=r.height,r.height=-r.height);var n=a.x+a.width,i=a.y+a.height,s=X(r.x,a.x),o=$(r.x+r.width,n),l=X(r.y,a.y),h=$(r.y+r.height,i),u=o<s,d=h<l;return r.x=u&&s>n?o:s,r.y=d&&l>i?h:l,r.width=u?0:o-s,r.height=d?0:h-l,e<0&&(r.x+=r.width,r.width=-r.width),t<0&&(r.y+=r.height,r.height=-r.height),u||d},polar:function(a,r){var e=r.r0<=r.r?1:-1;if(e<0){var t=r.r;r.r=r.r0,r.r0=t}var n=$(r.r,a.r),i=X(r.r0,a.r0);r.r=n,r.r0=i;var s=n-i<0;if(e<0){var t=r.r;r.r=r.r0,r.r0=t}return s}},ae={cartesian2d:function(a,r,e,t,n,i,s,o,l){var h=new ce({shape:pe({},t),z2:1});if(h.__dataIndex=e,h.name="item",i){var u=h.shape,d=n?"height":"width";u[d]=0}return h},polar:function(a,r,e,t,n,i,s,o,l){var h=t.startAngle<t.endAngle,u=!n&&l?lt:ve,d=new u({shape:Fe({clockwise:h},t),z2:1});if(d.name="item",i){var g=d.shape,c=n?"r":"endAngle",v={};g[c]=n?0:t.startAngle,v[c]=t[c],(o?k:V)(d,{shape:v},i)}return d}};function ct(a,r){var e=a.get("realtimeSort",!0),t=r.getBaseAxis();if(e&&t.type==="category"&&r.type==="cartesian2d")return{baseAxis:t,otherAxis:r.getOtherAxis(t)}}function ne(a,r,e,t,n,i,s,o){var l,h;i?(h={x:t.x,width:t.width},l={y:t.y,height:t.height}):(h={y:t.y,height:t.height},l={x:t.x,width:t.width}),o||(s?k:V)(e,{shape:l},r,n,null);var u=r?a.baseAxis.model:null;(s?k:V)(e,{shape:h},u,n)}var R={cartesian2d:function(a,r,e){var t=a.getItemLayout(r),n=e?gt(e,t):0,i=t.width>0?1:-1,s=t.height>0?1:-1;return{x:t.x+i*n/2,y:t.y+s*n/2,width:t.width-i*n,height:t.height-s*n}},polar:function(a,r,e){var t=a.getItemLayout(r);return{cx:t.cx,cy:t.cy,r0:t.r0,r:t.r,startAngle:t.startAngle,endAngle:t.endAngle}}};function pt(a){return a.startAngle!=null&&a.endAngle!=null&&a.startAngle===a.endAngle}function ie(a,r,e,t,n,i,s,o){var l=r.getItemVisual(e,"style");o||a.setShape("r",t.get(["itemStyle","borderRadius"])||0),a.useStyle(l);var h=t.getShallow("cursor");if(h&&a.attr("cursor",h),!o){var u=s?n.height>0?"bottom":"top":n.width>0?"left":"right",d=ze(t);Ge(a,d,{labelFetcher:i,labelDataIndex:e,defaultText:Ue(i.getData(),e),inheritColor:l.fill,defaultOpacity:l.opacity,defaultOutsidePosition:u});var g=a.getTextContent();Ye(g,d,i.getRawValue(e),function(v){return Ke(r,v)})}var c=t.getModel(["emphasis"]);Xe(a,c.get("focus"),c.get("blurScope")),$e(a,t),pt(n)&&(a.style.fill="none",a.style.stroke="none",He(a.states,function(v){v.style&&(v.style.fill=v.style.stroke="none")}))}function gt(a,r){var e=a.get(["itemStyle","borderColor"]);if(!e||e==="none")return 0;var t=a.get(["itemStyle","borderWidth"])||0,n=isNaN(r.width)?Number.MAX_VALUE:Math.abs(r.width),i=isNaN(r.height)?Number.MAX_VALUE:Math.abs(r.height);return Math.min(t,n,i)}var vt=function(){function a(){}return a}(),se=function(a){B(r,a);function r(e){var t=a.call(this,e)||this;return t.type="largeBar",t}return r.prototype.getDefaultShape=function(){return new vt},r.prototype.buildPath=function(e,t){for(var n=t.points,i=this.__startPoint,s=this.__baseDimIdx,o=0;o<n.length;o+=2)i[s]=n[o+s],e.moveTo(i[0],i[1]),e.lineTo(n[o],n[o+1])},r}(ue);function oe(a,r,e){var t=a.getData(),n=[],i=t.getLayout("valueAxisHorizontal")?1:0;n[1-i]=t.getLayout("valueAxisStart");var s=t.getLayout("largeDataIndices"),o=t.getLayout("barWidth"),l=a.getModel("backgroundStyle"),h=a.get("showBackground",!0);if(h){var u=t.getLayout("largeBackgroundPoints"),d=[];d[1-i]=t.getLayout("backgroundStart");var g=new se({shape:{points:u},incremental:!!e,silent:!0,z2:0});g.__startPoint=d,g.__baseDimIdx=i,g.__largeDataIndices=s,g.__barWidth=o,_t(g,l,t),r.add(g)}var c=new se({shape:{points:t.getLayout("largePoints")},incremental:!!e});c.__startPoint=n,c.__baseDimIdx=i,c.__largeDataIndices=s,c.__barWidth=o,r.add(c),mt(c,a,t),H(c).seriesIndex=a.seriesIndex,a.get("silent")||(c.on("mousedown",he),c.on("mousemove",he))}var he=Ze(function(a){var r=this,e=ft(r,a.offsetX,a.offsetY);H(r).dataIndex=e>=0?e:null},30,!1);function ft(a,r,e){var t=a.__baseDimIdx,n=1-t,i=a.shape.points,s=a.__largeDataIndices,o=Math.abs(a.__barWidth/2),l=a.__startPoint[n];N[0]=r,N[1]=e;for(var h=N[t],u=N[1-t],d=h-o,g=h+o,c=0,v=i.length/2;c<v;c++){var A=c*2,b=i[A+t],w=i[A+n];if(b>=d&&b<=g&&(l<=w?u>=l&&u<=w:u>=w&&u<=l))return s[c]}return-1}function mt(a,r,e){var t=e.getVisual("style");a.useStyle(pe({},t)),a.style.fill=null,a.style.stroke=t.fill,a.style.lineWidth=e.getLayout("barWidth")}function _t(a,r,e){var t=r.get("borderColor")||r.get("color"),n=r.getItemStyle();a.useStyle(n),a.style.fill=null,a.style.stroke=t,a.style.lineWidth=e.getLayout("barWidth")}function me(a,r,e){if(ge(e,"cartesian2d")){var t=r,n=e.getArea();return{x:a?t.x:n.x,y:a?n.y:t.y,width:a?t.width:n.width,height:a?n.height:t.height}}else{var n=e.getArea(),i=r;return{cx:n.cx,cy:n.cy,r0:a?n.r0:i.r0,r:a?n.r:i.r,startAngle:a?i.startAngle:0,endAngle:a?i.endAngle:Math.PI*2}}}function yt(a,r,e){var t=a.type==="polar"?ve:ce;return new t({shape:me(r,e,a),silent:!0,z2:0})}const bt=ut;function St(a){a.registerChartView(bt),a.registerSeriesModel(st),a.registerLayout(a.PRIORITY.VISUAL.LAYOUT,Qe(et,"bar")),a.registerLayout(a.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT,Je),a.registerProcessor(a.PRIORITY.PROCESSOR.STATISTIC,je("bar")),a.registerAction({type:"changeAxisOrder",event:"changeAxisOrder",update:"update"},function(r,e){var t=r.componentType||"series";e.eachComponent({mainType:t,query:r},function(n){r.sortInfo&&n.axis.setCategorySortInfo(r.sortInfo)})})}const wt={class:"dashboard-item-top"},At={class:"dashboard-item-left"},xt={key:2,style:{marginTop:"-24px"}},Ct={key:3,style:{marginTop:"-24px"}},It={class:"dashboard-item-bottom"},Lt={class:"dashboard-item-block"},Tt={name:"DashboardBase"},Dt=be({...Tt,setup(a){tt([rt,St,at]);const r=Se(),e=we(1),t=[{title:"pages.dashboardBase.topPanel.card1",number:"¥ 28,425.00",upTrend:"20.5%",leftType:"echarts-line"},{title:"pages.dashboardBase.topPanel.card2",number:"¥ 768.00",downTrend:"20.5%",leftType:"echarts-bar"},{title:"pages.dashboardBase.topPanel.card3",number:"1126",upTrend:"20.5%",leftType:"icon-usergroup"},{title:"pages.dashboardBase.topPanel.card4",number:527,downTrend:"20.5%",leftType:"icon-file-paste"}];let n,i;const s=()=>{n||(n=document.getElementById("moneyContainer")),i=ee(n),i.setOption(J("line"))};let o,l;const h=()=>{o||(o=document.getElementById("refundContainer")),l=ee(o),l.setOption(J("bar"))},u=()=>{s(),h()},d=()=>{document.documentElement.clientWidth>=1400&&document.documentElement.clientWidth<1920?e.value=Number((document.documentElement.clientWidth/2080).toFixed(2)):document.documentElement.clientWidth<1080?e.value=Number((document.documentElement.clientWidth/1080).toFixed(2)):e.value=1,i.resize({width:e.value*120}),l.resize({width:e.value*120})};Ae(()=>{u(),xe(()=>{d()})});const{width:g,height:c}=Ce();return G([g,c],()=>{d()}),G(()=>r.brandTheme,()=>{Oe([l])}),G(()=>r.mode,()=>{[i,l].forEach(v=>{v.dispose()}),u()}),(v,A)=>{const b=E("t-icon"),w=E("t-card"),T=E("t-col"),O=E("t-row");return I(),Ie(O,{gutter:[16,16]},{default:M(()=>[(I(),D(Te,null,Le(t,(y,C)=>L(T,{key:y.title,xs:6,xl:3},{default:M(()=>[L(w,{title:U(De)(y.title),bordered:!1,class:Pe({"dashboard-item":!0,"dashboard-item--main-color":C==0})},{footer:M(()=>[P("div",It,[P("div",Lt,[ke(Q(v.$t("pages.dashboardBase.topPanel.cardTips"))+" ",1),L(Me,{class:"dashboard-item-trend",type:y.upTrend?"up":"down","is-reverse-color":C===0,describe:y.upTrend||y.downTrend},null,8,["type","is-reverse-color","describe"])]),L(b,{name:"chevron-right"})])]),default:M(()=>[P("div",wt,[P("span",{style:Y({fontSize:`${e.value*28}px`})},Q(y.number),5)]),P("div",At,[C===0?(I(),D("div",{key:0,id:"moneyContainer",class:"dashboard-chart-container",style:Y({width:`${e.value*120}px`,height:"100px",marginTop:"-24px"})},null,4)):C===1?(I(),D("div",{key:1,id:"refundContainer",class:"dashboard-chart-container",style:Y({width:`${e.value*120}px`,height:"56px",marginTop:"-24px"})},null,4)):C===2?(I(),D("span",xt,[L(U(nt))])):(I(),D("span",Ct,[L(U(Be))]))])]),_:2},1032,["title","class"])]),_:2},1024)),64))]),_:1})}}});const Mt=Ee(Dt,[["__scopeId","data-v-105a38e5"]]);export{Mt as default};
