import{ac as X,ad as ue,ae as Ve,d as B,af as Ie,ag as Te,ah as Q,c as k,o as u,a as _,ai as d,i as t,aj as C,G as w,n as a,g as $,w as o,h as pe,E as D,p as f,t as A,b as n,ak as Z,al as de,am as ce,an as ve,W as J,ao as ze,ap as fe,m as I,aq as Ae,C as me,a3 as Be,A as De,ar as ae,as as xe,at as Le,au as Pe,u as Ne,e as He,y as ge,_ as Se,l as H,k as Re,s as Ue,a5 as qe,a6 as G,a7 as j,F as ne,K as Y,O as h,q as oe,I as ie,L as re,av as Ke,f as Me,a8 as Oe,x as We,Y as Fe,T as Ge,aw as je,ax as Ye,J as he}from"./index-Cgr_KmsP.js";import{E as Je}from"./el-drawer-MCp1IADr.js";/* empty css                        */import{E as Xe}from"./el-divider-wLWV06a5.js";import{_ as Qe}from"./CodeIcon-Dz9607Rh.js";import{u as Ze}from"./index-CEhXwu2m.js";const et=X({icon:{type:ue,default:()=>Ve},title:String,content:{type:String,default:""}}),tt={back:()=>!0},st=B({name:"ElPageHeader"}),lt=B({...st,props:et,emits:tt,setup(E,{emit:y}){const s=Ie(),{t:g}=Te(),p=Q("page-header"),b=k(()=>[p.b(),{[p.m("has-breadcrumb")]:!!s.breadcrumb,[p.m("has-extra")]:!!s.extra,[p.is("contentful")]:!!s.default}]);function i(){y("back")}return(l,S)=>(u(),_("div",{class:d(t(b))},[l.$slots.breadcrumb?(u(),_("div",{key:0,class:d(t(p).e("breadcrumb"))},[C(l.$slots,"breadcrumb")],2)):w("v-if",!0),a("div",{class:d(t(p).e("header"))},[a("div",{class:d(t(p).e("left"))},[a("div",{class:d(t(p).e("back")),role:"button",tabindex:"0",onClick:i},[l.icon||l.$slots.icon?(u(),_("div",{key:0,"aria-label":l.title||t(g)("el.pageHeader.title"),class:d(t(p).e("icon"))},[C(l.$slots,"icon",{},()=>[l.icon?(u(),$(t(D),{key:0},{default:o(()=>[(u(),$(pe(l.icon)))]),_:1})):w("v-if",!0)])],10,["aria-label"])):w("v-if",!0),a("div",{class:d(t(p).e("title"))},[C(l.$slots,"title",{},()=>[f(A(l.title||t(g)("el.pageHeader.title")),1)])],2)],2),n(t(Xe),{direction:"vertical"}),a("div",{class:d(t(p).e("content"))},[C(l.$slots,"content",{},()=>[f(A(l.content),1)])],2)],2),l.$slots.extra?(u(),_("div",{key:0,class:d(t(p).e("extra"))},[C(l.$slots,"extra")],2)):w("v-if",!0)],2),l.$slots.default?(u(),_("div",{key:1,class:d(t(p).e("main"))},[C(l.$slots,"default")],2)):w("v-if",!0)],2))}});var at=Z(lt,[["__file","page-header.vue"]]);const nt=de(at),ot=X({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),it={[ce]:(E,y)=>[E,y].every(ve)},rt=B({name:"ElSteps"}),ut=B({...rt,props:ot,emits:it,setup(E,{emit:y}){const s=E,g=Q("steps"),{children:p,addChild:b,removeChild:i}=Ze(fe(),"ElStep");return J(p,()=>{p.value.forEach((l,S)=>{l.setIndex(S)})}),ze("ElSteps",{props:s,steps:p,addStep:b,removeStep:i}),J(()=>s.active,(l,S)=>{y(ce,l,S)}),(l,S)=>(u(),_("div",{class:d([t(g).b(),t(g).m(l.simple?"simple":l.direction)])},[C(l.$slots,"default")],2))}});var pt=Z(ut,[["__file","steps.vue"]]);const dt=X({title:{type:String,default:""},icon:{type:ue},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),ct=B({name:"ElStep"}),vt=B({...ct,props:dt,setup(E){const y=E,s=Q("step"),g=I(-1),p=I({}),b=I(""),i=Ae("ElSteps"),l=fe();me(()=>{J([()=>i.props.active,()=>i.props.processStatus,()=>i.props.finishStatus],([r])=>{q(r)},{immediate:!0})}),Be(()=>{i.removeStep(K.uid)});const S=k(()=>y.status||b.value),O=k(()=>{const r=i.steps.value[g.value-1];return r?r.currentStatus:"wait"}),x=k(()=>i.props.alignCenter),R=k(()=>i.props.direction==="vertical"),T=k(()=>i.props.simple),L=k(()=>i.steps.value.length),U=k(()=>{var r;return((r=i.steps.value[L.value-1])==null?void 0:r.uid)===l?.uid}),z=k(()=>T.value?"":i.props.space),P=k(()=>[s.b(),s.is(T.value?"simple":i.props.direction),s.is("flex",U.value&&!z.value&&!x.value),s.is("center",x.value&&!R.value&&!T.value)]),V=k(()=>{const r={flexBasis:ve(z.value)?`${z.value}px`:z.value?z.value:`${100/(L.value-(x.value?0:1))}%`};return R.value||U.value&&(r.maxWidth=`${100/L.value}%`),r}),W=r=>{g.value=r},F=r=>{const m=r==="wait",e={transitionDelay:`${m?"-":""}${150*g.value}ms`},c=r===i.props.processStatus||m?0:100;e.borderWidth=c&&!T.value?"1px":0,e[i.props.direction==="vertical"?"height":"width"]=`${c}%`,p.value=e},q=r=>{r>g.value?b.value=i.props.finishStatus:r===g.value&&O.value!=="error"?b.value=i.props.processStatus:b.value="wait";const m=i.steps.value[g.value-1];m&&m.calcProgress(b.value)},K=De({uid:l.uid,currentStatus:S,setIndex:W,calcProgress:F});return i.addStep(K),(r,m)=>(u(),_("div",{style:ae(t(V)),class:d(t(P))},[w(" icon & line "),a("div",{class:d([t(s).e("head"),t(s).is(t(S))])},[t(T)?w("v-if",!0):(u(),_("div",{key:0,class:d(t(s).e("line"))},[a("i",{class:d(t(s).e("line-inner")),style:ae(p.value)},null,6)],2)),a("div",{class:d([t(s).e("icon"),t(s).is(r.icon||r.$slots.icon?"icon":"text")])},[C(r.$slots,"icon",{},()=>[r.icon?(u(),$(t(D),{key:0,class:d(t(s).e("icon-inner"))},{default:o(()=>[(u(),$(pe(r.icon)))]),_:1},8,["class"])):t(S)==="success"?(u(),$(t(D),{key:1,class:d([t(s).e("icon-inner"),t(s).is("status")])},{default:o(()=>[n(t(xe))]),_:1},8,["class"])):t(S)==="error"?(u(),$(t(D),{key:2,class:d([t(s).e("icon-inner"),t(s).is("status")])},{default:o(()=>[n(t(Le))]),_:1},8,["class"])):t(T)?w("v-if",!0):(u(),_("div",{key:3,class:d(t(s).e("icon-inner"))},A(g.value+1),3))])],2)],2),w(" title & description "),a("div",{class:d(t(s).e("main"))},[a("div",{class:d([t(s).e("title"),t(s).is(t(S))])},[C(r.$slots,"title",{},()=>[f(A(r.title),1)])],2),t(T)?(u(),_("div",{key:0,class:d(t(s).e("arrow"))},null,2)):(u(),_("div",{key:1,class:d([t(s).e("description"),t(s).is(t(S))])},[C(r.$slots,"description",{},()=>[f(A(r.description),1)])],2))],2)],6))}});var _e=Z(vt,[["__file","item.vue"]]);const ft=de(pt,{Step:_e}),mt=Pe(_e),gt={class:"SS-item"},St={class:"al-center"},_t=B({__name:"ScriptSettingItem",props:{label:{type:String,required:!0},alert:{type:String,default:""},width:{type:String,default:"220px"}},setup(E){Ne(g=>({"2ed30c1b":t(y),"43a8b74c":E.width}));const{appAsideBgColor:y}=He(),s=E;return(g,p)=>{const b=D,i=ge;return u(),_("div",null,[a("div",gt,[a("div",St,[a("span",null,A(s.label),1),s.alert?(u(),$(i,{key:0,content:s.alert,placement:"right"},{default:o(()=>[n(b,null,{default:o(()=>p[0]||(p[0]=[a("span",{"i-mdi-help-circle-outline":""},null,-1)])),_:1})]),_:1},8,["content"])):w("",!0)]),C(g.$slots,"default",{class:"slot-item"},void 0,!0)])])}}}),yt=Se(_t,[["__scopeId","data-v-c02b9860"]]),bt="/assets/sendTo-t1cMxVi9.png",kt="/assets/exportApp-C4grmTP_.png",Ct="/assets/target-CcpY05ha.png",$t={class:"script-setting-div"},Et={class:"title-content"},wt={class:"title-end"},Vt={class:"script-setting"},It={class:"guide"},Tt=B({__name:"ScriptSetting",setup(E){const y=I(!1),s=I(1),g=()=>{s.value++>1&&(s.value=1)},p=()=>{s.value>1&&s.value--},b=()=>{h.replace({path:"/script/list"})},i=I(-1),l=k({get:()=>H().mockScriptList.value[i.value],set:m=>{H().mockScriptList.value[i.value]=m}}),{openId:S,contentTransform:O,asideBarPos:x}=Me(),R=Re(),{scriptList:T,deviceList:L}=Ue(R),U=L.value.map(m=>({label:m,value:m}));me(()=>{}),qe(()=>{if(S.value==="-1")return;const m=H().mockScriptList.value,e=m.find(c=>c.id===S.value);e?.setting||(e.setting={autoImportLastRunConfig:!1,targetAdbDevice:"",excludeDevice:[],targetApp:"",autoStartTargetApp:!1}),i.value=m.findIndex(c=>c.id===S.value)});const z=I(),P=I(!1),V=I(""),W=m=>{const c=H().mockScriptList.value[i.value].setting.excludeDevice;c.splice(c.indexOf(m),1)},F=()=>{P.value=!0,Oe(()=>{z.value.input.focus()})},q=m=>{const c=H().mockScriptList.value[i.value].setting;V.value&&(c.excludeDevice?c.excludeDevice.push(V.value):c.excludeDevice=[V.value]),V.value="",m||(P.value=!1)},K=()=>{O.value="translateX(-100%)",x.value="absolute",h.replace("/script/editor")},r=()=>{h.replace("/script/run")};return(m,e)=>{const c=We,ye=Qe,ee=ge,te=D,be=nt,se=Fe,N=yt,M=Ge,ke=je,Ce=Ye,le=mt,$e=ft,Ee=he,we=Je;return u(),_(Y,null,[a("div",$t,[n(be,{onBack:b,class:"header",title:"脚本列表"},{content:o(()=>[a("div",Et,[e[9]||(e[9]=a("span",null,"设置",-1)),n(c,{type:"info",class:"ml-10",size:"small"},{default:o(()=>[f(A(t(i)!==-1?t(l).name:"出现问题，请联系开发者"),1)]),_:1})])]),extra:o(()=>[a("div",wt,[n(ee,{class:"box-item",effect:"dark",content:"编辑脚本",placement:"bottom"},{default:o(()=>[n(ye,{class:"icon",onClick:oe(K,["stop"])})]),_:1}),n(ee,{class:"box-item",effect:"dark",content:"运行脚本",placement:"bottom"},{default:o(()=>[n(te,{class:"icon",onClick:oe(r,["stop"])},{default:o(()=>e[10]||(e[10]=[a("span",{"i-mdi-play-circle-outline":""},null,-1)])),_:1})]),_:1})])]),_:1}),a("div",Vt,[e[13]||(e[13]=a("h4",{class:"ml-0"},"初始化表单后(运行脚本前)",-1)),n(N,{label:"自动导入上次运行配置",alert:"开启后，在脚本初始化之后自动恢复上次运行脚本时各表单项的值或选项"},{default:o(()=>[n(se,{modelValue:t(l).setting.autoImportLastRunConfig,"onUpdate:modelValue":e[0]||(e[0]=v=>t(l).setting.autoImportLastRunConfig=v)},null,8,["modelValue"])]),_:1}),n(N,{label:"自动启动目标应用",alert:"开启后，在脚本初始化之后自动启动下方的【目标应用】（若有）"},{default:o(()=>[n(se,{modelValue:t(l).setting.autoStartTargetApp,"onUpdate:modelValue":e[1]||(e[1]=v=>t(l).setting.autoStartTargetApp=v)},null,8,["modelValue"])]),_:1}),G(n(N,{label:"目标应用",alert:"选项【自动启动目标应用】启动的目标,填写指导请点击输入框右边问号"},{default:o(()=>[n(t(ie),{modelValue:t(l).setting.targetApp,"onUpdate:modelValue":e[3]||(e[3]=v=>t(l).setting.targetApp=v),placeholder:"输入目标应用启动的目标"},{append:o(()=>[n(M,{size:"small",circle:"",class:"question-button"},{default:o(()=>[n(te,{size:20,onClick:e[2]||(e[2]=v=>y.value=!0)},{default:o(()=>e[11]||(e[11]=[a("span",{"i-mdi-help-circle-outline":""},null,-1)])),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},512),[[j,t(l).setting.autoStartTargetApp]]),e[14]||(e[14]=a("h4",{class:"ml-0"},"运行脚本时",-1)),n(N,{label:"自动连接目标设备",alert:"选择后，运行脚本时，ADB将连接至该设备,并与其它设备断开连接"},{default:o(()=>[n(Ce,{modelValue:t(l).setting.targetAdbDevice,"onUpdate:modelValue":e[4]||(e[4]=v=>t(l).setting.targetAdbDevice=v),class:"target-device",size:"small",filterable:"","allow-create":"","default-first-option":"",clearable:"","reserve-keyword":!1,placeholder:"选择或输入设备地址，如：127.0.0.1:21503"},{default:o(()=>[(u(!0),_(Y,null,re(t(U),v=>(u(),$(ke,{key:v.value,label:v.label,value:v.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(N,{label:"主动断开的设备",alert:"当ADB无法发现该设备,添加该设备在目标设备连接之前自动断开连接"},{default:o(()=>[a("div",null,[(u(!0),_(Y,null,re(t(l).setting.excludeDevice,v=>(u(),$(c,{key:v,class:"mr-10",closable:"",type:"info","disable-transitions":!1,onClose:zt=>W(v)},{default:o(()=>[f(A(v),1)]),_:2},1032,["onClose"]))),128)),t(P)?(u(),$(t(ie),{key:0,ref_key:"InputRef",ref:z,modelValue:t(V),"onUpdate:modelValue":e[5]||(e[5]=v=>ne(V)?V.value=v:null),class:"tag-input",size:"small",onKeyup:e[6]||(e[6]=Ke(v=>q(!0),["enter"])),onBlur:e[7]||(e[7]=v=>q(!1))},null,8,["modelValue"])):(u(),$(M,{key:1,class:"button-new-tag",size:"small",onClick:F},{default:o(()=>e[12]||(e[12]=[f(" + 排除的设备 ")])),_:1}))])]),_:1})])]),n(we,{modelValue:t(y),"onUpdate:modelValue":e[8]||(e[8]=v=>ne(y)?y.value=v:null),title:"获取目标应用指南",direction:"rtl",size:"70%"},{default:o(()=>[n($e,{active:t(s),"finish-status":"success"},{default:o(()=>[n(le,{title:"1.导出快捷方式"}),n(le,{title:"2.复制目标"})]),_:1},8,["active"]),n(Ee,null,{default:o(()=>[n(M,{onClick:p},{default:o(()=>e[15]||(e[15]=[f("上一步")])),_:1}),n(M,{onClick:g},{default:o(()=>e[16]||(e[16]=[f("下一步")])),_:1})]),_:1}),a("div",It,[G(a("div",null,[e[21]||(e[21]=a("h3",null,"1.导出快捷方式",-1)),a("div",null,[e[18]||(e[18]=f(" 打开模拟器，长按图标，点击 ")),n(c,{size:"default",type:"info"},{default:o(()=>e[17]||(e[17]=[f("发送到")])),_:1})]),e[22]||(e[22]=a("img",{src:bt,alt:"",srcset:""},null,-1)),a("div",null,[e[20]||(e[20]=f(" 选择 ")),n(c,{size:"default",type:"info"},{default:o(()=>e[19]||(e[19]=[f("添加电脑桌面快捷方式")])),_:1})]),e[23]||(e[23]=a("img",{src:kt,alt:"",srcset:""},null,-1))],512),[[j,t(s)===1]]),G(a("div",null,[e[33]||(e[33]=a("h3",null,"2.复制目标",-1)),a("div",null,[e[27]||(e[27]=f(" 在桌面找到导出的快捷方式，右击 ")),n(c,{size:"default",type:"info"},{default:o(()=>e[24]||(e[24]=[f("属性")])),_:1}),e[28]||(e[28]=f("-")),n(c,{size:"default",type:"info"},{default:o(()=>e[25]||(e[25]=[f("快捷方式")])),_:1}),e[29]||(e[29]=f("-")),n(c,{size:"default",type:"info"},{default:o(()=>e[26]||(e[26]=[f("目标")])),_:1})]),a("div",null,[e[31]||(e[31]=f(" 全选")),n(c,{size:"default",type:"info"},{default:o(()=>e[30]||(e[30]=[f("目标")])),_:1}),e[32]||(e[32]=f("编辑框的内容，复制 "))]),e[34]||(e[34]=a("img",{src:Ct,alt:"",srcset:""},null,-1)),e[35]||(e[35]=a("div",null,"复制完成后粘贴到本输入框即可完成设置",-1))],512),[[j,t(s)===2]])])]),_:1},8,["modelValue"])],64)}}}),Nt=Se(Tt,[["__scopeId","data-v-990c00f9"]]);export{Nt as default};