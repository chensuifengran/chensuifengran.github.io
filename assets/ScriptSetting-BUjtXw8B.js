import{ac as ie,ad as re,ae as ue,d as T,af as pe,W as Q,ag as we,o as c,a as k,ah as P,ai as g,i as t,aj as de,ak as ce,al as Ve,m as V,am as Ee,C as ve,a3 as Ie,c as b,A as $e,G as N,n as o,an as se,g as E,w as a,h as xe,E as R,b as l,ao as Te,ap as Ae,t as U,p as d,aq as Be,ar as ze,u as De,e as Le,y as fe,_ as me,l as L,k as Ne,s as Pe,a5 as Re,a6 as Y,a7 as H,F as le,K as J,O as X,as as Ue,q as ne,I as ae,L as oe,at as qe,f as Ke,a8 as Me,Y as Oe,T as We,au as Fe,av as Ge,x as je,J as Ye}from"./index-CqHkYROl.js";import{E as He}from"./el-drawer-Czx17N6w.js";/* empty css                        */import{_ as Je}from"./CodeIcon-DWK99y1q.js";import{u as Xe}from"./index-ecf4JogJ.js";const Qe=ie({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),Ze={[re]:(C,_)=>[C,_].every(ue)},he=T({name:"ElSteps"}),et=T({...he,props:Qe,emits:Ze,setup(C,{emit:_}){const s=C,v=pe("steps"),{children:S,addChild:y,removeChild:i}=Xe(ce(),"ElStep");return Q(S,()=>{S.value.forEach((r,f)=>{r.setIndex(f)})}),we("ElSteps",{props:s,steps:S,addStep:y,removeStep:i}),Q(()=>s.active,(r,f)=>{_(re,r,f)}),(r,f)=>(c(),k("div",{class:g([t(v).b(),t(v).m(r.simple?"simple":r.direction)])},[P(r.$slots,"default")],2))}});var tt=de(et,[["__file","steps.vue"]]);const st=ie({title:{type:String,default:""},icon:{type:Ve},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),lt=T({name:"ElStep"}),nt=T({...lt,props:st,setup(C){const _=C,s=pe("step"),v=V(-1),S=V({}),y=V(""),i=Ee("ElSteps"),r=ce();ve(()=>{Q([()=>i.props.active,()=>i.props.processStatus,()=>i.props.finishStatus],([n])=>{M(n)},{immediate:!0})}),Ie(()=>{i.removeStep(O.uid)});const f=b(()=>_.status||y.value),F=b(()=>{const n=i.steps.value[v.value-1];return n?n.currentStatus:"wait"}),A=b(()=>i.props.alignCenter),q=b(()=>i.props.direction==="vertical"),I=b(()=>i.props.simple),B=b(()=>i.steps.value.length),K=b(()=>{var n;return((n=i.steps.value[B.value-1])==null?void 0:n.uid)===r?.uid}),$=b(()=>I.value?"":i.props.space),z=b(()=>[s.b(),s.is(I.value?"simple":i.props.direction),s.is("flex",K.value&&!$.value&&!A.value),s.is("center",A.value&&!q.value&&!I.value)]),w=b(()=>{const n={flexBasis:ue($.value)?`${$.value}px`:$.value?$.value:`${100/(B.value-(A.value?0:1))}%`};return q.value||K.value&&(n.maxWidth=`${100/B.value}%`),n}),G=n=>{v.value=n},j=n=>{const p=n==="wait",e={transitionDelay:`${p?"-":""}${150*v.value}ms`},m=n===i.props.processStatus||p?0:100;e.borderWidth=m&&!I.value?"1px":0,e[i.props.direction==="vertical"?"height":"width"]=`${m}%`,S.value=e},M=n=>{n>v.value?y.value=i.props.finishStatus:n===v.value&&F.value!=="error"?y.value=i.props.processStatus:y.value="wait";const p=i.steps.value[v.value-1];p&&p.calcProgress(y.value)},O=$e({uid:r.uid,currentStatus:f,setIndex:G,calcProgress:j});return i.addStep(O),(n,p)=>(c(),k("div",{style:se(t(w)),class:g(t(z))},[N(" icon & line "),o("div",{class:g([t(s).e("head"),t(s).is(t(f))])},[t(I)?N("v-if",!0):(c(),k("div",{key:0,class:g(t(s).e("line"))},[o("i",{class:g(t(s).e("line-inner")),style:se(S.value)},null,6)],2)),o("div",{class:g([t(s).e("icon"),t(s).is(n.icon||n.$slots.icon?"icon":"text")])},[P(n.$slots,"icon",{},()=>[n.icon?(c(),E(t(R),{key:0,class:g(t(s).e("icon-inner"))},{default:a(()=>[(c(),E(xe(n.icon)))]),_:1},8,["class"])):t(f)==="success"?(c(),E(t(R),{key:1,class:g([t(s).e("icon-inner"),t(s).is("status")])},{default:a(()=>[l(t(Te))]),_:1},8,["class"])):t(f)==="error"?(c(),E(t(R),{key:2,class:g([t(s).e("icon-inner"),t(s).is("status")])},{default:a(()=>[l(t(Ae))]),_:1},8,["class"])):t(I)?N("v-if",!0):(c(),k("div",{key:3,class:g(t(s).e("icon-inner"))},U(v.value+1),3))])],2)],2),N(" title & description "),o("div",{class:g(t(s).e("main"))},[o("div",{class:g([t(s).e("title"),t(s).is(t(f))])},[P(n.$slots,"title",{},()=>[d(U(n.title),1)])],2),t(I)?(c(),k("div",{key:0,class:g(t(s).e("arrow"))},null,2)):(c(),k("div",{key:1,class:g([t(s).e("description"),t(s).is(t(f))])},[P(n.$slots,"description",{},()=>[d(U(n.description),1)])],2))],2)],6))}});var ge=de(nt,[["__file","item.vue"]]);const at=Be(tt,{Step:ge}),ot=ze(ge),it={class:"SS-item"},rt={class:"al-center"},ut=T({__name:"ScriptSettingItem",props:{label:{type:String,required:!0},alert:{type:String,default:""},width:{type:String,default:"220px"}},setup(C){De(v=>({"2ed30c1b":t(_),"43a8b74c":C.width}));const{appAsideBgColor:_}=Le(),s=C;return(v,S)=>{const y=R,i=fe;return c(),k("div",null,[o("div",it,[o("div",rt,[o("span",null,U(s.label),1),s.alert?(c(),E(i,{key:0,content:s.alert,placement:"right"},{default:a(()=>[l(y,null,{default:a(()=>S[0]||(S[0]=[o("span",{"i-mdi-help-circle-outline":""},null,-1)])),_:1})]),_:1},8,["content"])):N("",!0)]),P(v.$slots,"default",{class:"slot-item"},void 0,!0)])])}}}),pt=me(ut,[["__scopeId","data-v-c02b9860"]]),dt="/assets/sendTo-t1cMxVi9.png",ct="/assets/exportApp-C4grmTP_.png",vt="/assets/target-CcpY05ha.png",ft={class:"script-setting-div"},mt={class:"title-end"},gt={class:"script-setting"},_t={class:"guide"},St=T({__name:"ScriptSetting",setup(C){const _=V(!1),s=V(1),v=()=>{s.value++>1&&(s.value=1)},S=()=>{s.value>1&&s.value--},y=()=>{X.replace({path:"/script/list"})},i=V(-1),r=b({get:()=>L().mockScriptList.value[i.value],set:p=>{L().mockScriptList.value[i.value]=p}}),{openId:f,contentTransform:F,asideBarPos:A}=Ke(),q=Ne(),{scriptList:I,deviceList:B}=Pe(q),K=B.value.map(p=>({label:p,value:p}));ve(()=>{}),Re(()=>{if(f.value==="-1")return;const p=L().mockScriptList.value,e=p.find(m=>m.id===f.value);e?.setting||(e.setting={autoImportLastRunConfig:!1,targetAdbDevice:"",excludeDevice:[],targetApp:"",autoStartTargetApp:!1}),i.value=p.findIndex(m=>m.id===f.value)});const $=V(),z=V(!1),w=V(""),G=p=>{const m=L().mockScriptList.value[i.value].setting.excludeDevice;m.splice(m.indexOf(p),1)},j=()=>{z.value=!0,Me(()=>{$.value.input.focus()})},M=p=>{const m=L().mockScriptList.value[i.value].setting;w.value&&(m.excludeDevice?m.excludeDevice.push(w.value):m.excludeDevice=[w.value]),w.value="",p||(z.value=!1)},O=()=>{F.value="translateX(-100%)",A.value="absolute",X.replace("/script/editor")},n=()=>{X.replace("/script/run")};return(p,e)=>{const m=Je,Z=fe,h=R,_e=Ue,ee=Oe,D=pt,W=We,Se=Fe,ye=Ge,x=je,te=ot,be=at,ke=Ye,Ce=He;return c(),k(J,null,[o("div",ft,[l(_e,{onBack:y,class:"header",title:t(i)!==-1?t(r).name:"出现问题，请联系开发者","allow-drag":!1},{default:a(()=>[o("div",mt,[l(Z,{class:"box-item",effect:"dark",content:"编辑脚本",placement:"bottom"},{default:a(()=>[l(m,{class:"icon",onClick:ne(O,["stop"])})]),_:1}),l(Z,{class:"box-item",effect:"dark",content:"运行脚本",placement:"bottom"},{default:a(()=>[l(h,{class:"icon",onClick:ne(n,["stop"])},{default:a(()=>e[9]||(e[9]=[o("span",{"i-mdi-play-circle-outline":""},null,-1)])),_:1})]),_:1})])]),_:1},8,["title"]),o("div",gt,[e[12]||(e[12]=o("h4",{class:"ml-0"},"初始化表单后(运行脚本前)",-1)),l(D,{label:"自动导入上次运行配置",alert:"开启后，在脚本初始化之后自动恢复上次运行脚本时各表单项的值或选项"},{default:a(()=>[l(ee,{modelValue:t(r).setting.autoImportLastRunConfig,"onUpdate:modelValue":e[0]||(e[0]=u=>t(r).setting.autoImportLastRunConfig=u)},null,8,["modelValue"])]),_:1}),l(D,{label:"自动启动目标应用",alert:"开启后，在脚本初始化之后自动启动下方的【目标应用】（若有）"},{default:a(()=>[l(ee,{modelValue:t(r).setting.autoStartTargetApp,"onUpdate:modelValue":e[1]||(e[1]=u=>t(r).setting.autoStartTargetApp=u)},null,8,["modelValue"])]),_:1}),Y(l(D,{label:"目标应用",alert:"选项【自动启动目标应用】启动的目标,填写指导请点击输入框右边问号"},{default:a(()=>[l(t(ae),{modelValue:t(r).setting.targetApp,"onUpdate:modelValue":e[3]||(e[3]=u=>t(r).setting.targetApp=u),placeholder:"输入目标应用启动的目标"},{append:a(()=>[l(W,{size:"small",circle:"",class:"question-button"},{default:a(()=>[l(h,{size:20,onClick:e[2]||(e[2]=u=>_.value=!0)},{default:a(()=>e[10]||(e[10]=[o("span",{"i-mdi-help-circle-outline":""},null,-1)])),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},512),[[H,t(r).setting.autoStartTargetApp]]),e[13]||(e[13]=o("h4",{class:"ml-0"},"运行脚本时",-1)),l(D,{label:"自动连接目标设备",alert:"选择后，运行脚本时，ADB将连接至该设备,并与其它设备断开连接"},{default:a(()=>[l(ye,{modelValue:t(r).setting.targetAdbDevice,"onUpdate:modelValue":e[4]||(e[4]=u=>t(r).setting.targetAdbDevice=u),class:"target-device",size:"small",filterable:"","allow-create":"","default-first-option":"",clearable:"","reserve-keyword":!1,placeholder:"选择或输入设备地址，如：127.0.0.1:21503"},{default:a(()=>[(c(!0),k(J,null,oe(t(K),u=>(c(),E(Se,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(D,{label:"主动断开的设备",alert:"当ADB无法发现该设备,添加该设备在目标设备连接之前自动断开连接"},{default:a(()=>[o("div",null,[(c(!0),k(J,null,oe(t(r).setting.excludeDevice,u=>(c(),E(x,{key:u,class:"mr-10",closable:"",type:"info","disable-transitions":!1,onClose:yt=>G(u)},{default:a(()=>[d(U(u),1)]),_:2},1032,["onClose"]))),128)),t(z)?(c(),E(t(ae),{key:0,ref_key:"InputRef",ref:$,modelValue:t(w),"onUpdate:modelValue":e[5]||(e[5]=u=>le(w)?w.value=u:null),class:"tag-input",size:"small",onKeyup:e[6]||(e[6]=qe(u=>M(!0),["enter"])),onBlur:e[7]||(e[7]=u=>M(!1))},null,8,["modelValue"])):(c(),E(W,{key:1,class:"button-new-tag",size:"small",onClick:j},{default:a(()=>e[11]||(e[11]=[d(" + 排除的设备 ")])),_:1}))])]),_:1})])]),l(Ce,{modelValue:t(_),"onUpdate:modelValue":e[8]||(e[8]=u=>le(_)?_.value=u:null),title:"获取目标应用指南",direction:"rtl",size:"70%"},{default:a(()=>[l(be,{active:t(s),"finish-status":"success"},{default:a(()=>[l(te,{title:"1.导出快捷方式"}),l(te,{title:"2.复制目标"})]),_:1},8,["active"]),l(ke,null,{default:a(()=>[l(W,{onClick:S},{default:a(()=>e[14]||(e[14]=[d("上一步")])),_:1}),l(W,{onClick:v},{default:a(()=>e[15]||(e[15]=[d("下一步")])),_:1})]),_:1}),o("div",_t,[Y(o("div",null,[e[20]||(e[20]=o("h3",null,"1.导出快捷方式",-1)),o("div",null,[e[17]||(e[17]=d(" 打开模拟器，长按图标，点击 ")),l(x,{size:"default",type:"info"},{default:a(()=>e[16]||(e[16]=[d("发送到")])),_:1})]),e[21]||(e[21]=o("img",{src:dt,alt:"",srcset:""},null,-1)),o("div",null,[e[19]||(e[19]=d(" 选择 ")),l(x,{size:"default",type:"info"},{default:a(()=>e[18]||(e[18]=[d("添加电脑桌面快捷方式")])),_:1})]),e[22]||(e[22]=o("img",{src:ct,alt:"",srcset:""},null,-1))],512),[[H,t(s)===1]]),Y(o("div",null,[e[32]||(e[32]=o("h3",null,"2.复制目标",-1)),o("div",null,[e[26]||(e[26]=d(" 在桌面找到导出的快捷方式，右击 ")),l(x,{size:"default",type:"info"},{default:a(()=>e[23]||(e[23]=[d("属性")])),_:1}),e[27]||(e[27]=d("-")),l(x,{size:"default",type:"info"},{default:a(()=>e[24]||(e[24]=[d("快捷方式")])),_:1}),e[28]||(e[28]=d("-")),l(x,{size:"default",type:"info"},{default:a(()=>e[25]||(e[25]=[d("目标")])),_:1})]),o("div",null,[e[30]||(e[30]=d(" 全选")),l(x,{size:"default",type:"info"},{default:a(()=>e[29]||(e[29]=[d("目标")])),_:1}),e[31]||(e[31]=d("编辑框的内容，复制 "))]),e[33]||(e[33]=o("img",{src:vt,alt:"",srcset:""},null,-1)),e[34]||(e[34]=o("div",null,"复制完成后粘贴到本输入框即可完成设置",-1))],512),[[H,t(s)===2]])])]),_:1},8,["modelValue"])],64)}}}),Et=me(St,[["__scopeId","data-v-02a16dba"]]);export{Et as default};