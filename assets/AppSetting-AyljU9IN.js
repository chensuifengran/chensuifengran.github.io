import{_ as I,o as r,g as w,w as a,m as l,E as q,d as le,l as k,a3 as se,s as ne,V as ae,c as oe,A as ie,z as re,a9 as N,i as t,a as U,b as n,R as m,n as i,C as R,t as y,D as z,J as $,K as O,aa as ue,dl as de,ce as pe,e as me,dm as ve,G as fe,q as ce,Z as ge,ay as ye,az as we,$ as _e,ac as T,M as ke,bw as H,L as Ue}from"./index-BcWmzzsU.js";import{v as Ve,r as Se}from"./el-loading-D13SI87r.js";const be={};function Ce(x,d){const v=q;return r(),w(v,{size:"small"},{default:a(()=>d[0]||(d[0]=[l("span",{"i-solar-moon-bold":""},null,-1)])),_:1})}const Pe=I(be,[["render",Ce]]),De={};function ze(x,d){const v=q;return r(),w(v,{size:"small"},{default:a(()=>d[0]||(d[0]=[l("span",{"i-solar-sun-2-bold":""},null,-1)])),_:1})}const Ee=I(De,[["render",ze]]),Ae=["element-loading-text"],Te={class:"dialog-content"},Ie={class:"btn-content"},xe={class:"setting-item"},Ge={class:"setting-item"},Le={class:"setting-item"},Me={key:0,class:"setting-title"},Be={key:1,class:"setting-item"},Ne={class:"setting-item"},Re={class:"setting-item"},$e={class:"setting-item"},Oe={class:"setting-item"},He={class:"setting-item"},qe={class:"setting-item"},Fe=le({__name:"AppSetting",setup(x){const{getDepStateType:d}=de,{goInstallDeps:v,syncData:Je}=pe(),F=k("playground"),J=k(!1),K=k(""),V=k(!1),G=se(),{app:p,envSetting:S,ocr:o,view:L,editor:_}=ne(G),{isDark:M}=me(),f=k(!1);f.value=M.value;let E;ae(f,()=>{E&&clearTimeout(E),E=setTimeout(()=>{M.value=f.value},300)});const W=async()=>{{S.value.workDir="E:\\fr-script\\workdir";return}},Y=async()=>{{S.value.screenshotSavePath="E:\\fr-script\\workdir\\screenshot.png";return}},B=async(g,e)=>!0,Z=async g=>!0;let c=!0;const j=async(g,e=!0)=>{try{const C=await Z(g);if(e&&!C){c&&T.error("切换失败,目标依赖缺失！"),o.value.value=o.value.value==="CPU"?"GPU":"CPU";return}const u=await B(g,"ppocr.dll"),P=await B(g,"paddle_inference.dll");u&&P?c?ke({title:"切换OCR运行方式",dangerouslyUseHTMLString:!0,position:"bottom-right",message:H("div",{class:"notification-message-div"},["重启软件后生效",H(m,{size:"small",class:"notification-message-button",type:"primary",onClick:()=>{Ue||Se()}},"立即重启")]),type:"success",duration:3e3}):c=!0:c?(T.error("切换失败"),o.value.value=o.value.value==="CPU"?"GPU":"CPU"):c=!0}catch{c&&T.error("切换失败"),o.value.value=o.value.value==="CPU"?"GPU":"CPU"}},Q=async()=>{await j(o.value.value)},b=oe(()=>!1),X=()=>{},{goAppUpdate:h}=ve();return ie(async()=>{}),re(()=>{}),(g,e)=>{const C=fe,u=ce,P=ge,D=ye,A=we,ee=_e,te=Ve;return N((r(),U("div",{class:"setting-div","element-loading-text":t(K)},[n(C,{modelValue:t(V),"onUpdate:modelValue":e[2]||(e[2]=s=>R(V)?V.value=s:null),title:"未发现依赖库"},{default:a(()=>[l("div",Te,[e[13]||(e[13]=l("span",null,"错误，依赖文件缺失!",-1)),l("div",Ie,[n(t(m),{type:"info",onClick:e[0]||(e[0]=s=>V.value=!1)},{default:a(()=>e[11]||(e[11]=[i("取消")])),_:1}),n(t(m),{type:"primary",onClick:e[1]||(e[1]=s=>t(v)())},{default:a(()=>e[12]||(e[12]=[i("依赖管理")])),_:1})])])]),_:1},8,["modelValue"]),e[28]||(e[28]=l("h3",{class:"setting-title"},"App",-1)),l("div",xe,[e[14]||(e[14]=l("span",null,"版本",-1)),l("span",null,[n(u,{type:t(b)?"info":"primary",class:"mr-5",size:"small"},{default:a(()=>[i(y(t(F)),1)]),_:1},8,["type"]),t(b)?(r(),w(u,{key:0,class:"mr-5",size:"small"},{default:a(()=>[i("最新版本："+y(t(G).app.latestVersion),1)]),_:1})):z("",!0),n(t(m),{link:"",type:"primary",onClick:e[3]||(e[3]=s=>t(h)(t(b)))},{default:a(()=>[i(y(t(b)?"前往":"检查")+"更新",1)]),_:1})])]),l("div",Ge,[e[17]||(e[17]=l("span",null,"依赖状态",-1)),l("span",null,[n(u,{type:t(d)(t(p).dependenceState),class:"mr-5",size:"small"},{default:a(()=>[i(y(t(p).dependenceState),1)]),_:1},8,["type"]),t(p).depHaveUpdate?(r(),w(u,{key:0,type:"warning",class:"mr-5",size:"small"},{default:a(()=>e[15]||(e[15]=[i("可更新")])),_:1})):z("",!0),n(t(m),{link:"",type:"primary",onClick:e[4]||(e[4]=s=>t(v)(t(p).depHaveUpdate?"haveUpdateDep":"lackDepDownload"))},{default:a(()=>e[16]||(e[16]=[i("依赖管理")])),_:1})])]),l("div",Le,[e[18]||(e[18]=l("span",null,"全局主题",-1)),n(P,{modelValue:t(f),"onUpdate:modelValue":e[5]||(e[5]=s=>R(f)?f.value=s:null),"active-icon":Pe,"inactive-icon":Ee,onChange:X},null,8,["modelValue"])]),t(p).dependenceState!=="不可用"?(r(),U("h3",Me," OCR服务 ")):z("",!0),t(p).dependenceState!=="不可用"?(r(),U("div",Be,[e[19]||(e[19]=l("span",null,"运行方式",-1)),n(A,{modelValue:t(o).value,"onUpdate:modelValue":e[6]||(e[6]=s=>t(o).value=s),placeholder:"OCR运行方式",size:"small",class:"w120",onChange:Q,disabled:t(p).dependenceState!=="完整版"},{default:a(()=>[(r(!0),U($,null,O(t(o).options,s=>(r(),w(D,{key:s,label:s,value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])])):z("",!0),N(l("div",Ne,[e[20]||(e[20]=l("span",null,"GPU内存占用(MB)",-1)),n(ee,{modelValue:t(o).gpuMemory,"onUpdate:modelValue":e[7]||(e[7]=s=>t(o).gpuMemory=s),min:1,size:"small"},null,8,["modelValue"])],512),[[ue,t(o).value==="GPU"]]),e[29]||(e[29]=l("h3",{class:"setting-title"},"环境设置",-1)),l("div",Re,[e[22]||(e[22]=l("span",null,"工作目录",-1)),l("span",null,[n(u,{type:"info",class:"mr-5",size:"small"},{default:a(()=>[i(y(t(S).workDir),1)]),_:1}),n(t(m),{link:"",type:"primary",onClick:W},{default:a(()=>e[21]||(e[21]=[i("选择")])),_:1})])]),l("div",$e,[e[24]||(e[24]=l("span",null,"截图保存路径",-1)),l("span",null,[n(u,{type:"info",class:"mr-5",size:"small"},{default:a(()=>[i(y(t(S).screenshotSavePath),1)]),_:1}),n(t(m),{link:"",type:"primary",onClick:Y},{default:a(()=>e[23]||(e[23]=[i("选择")])),_:1})])]),e[30]||(e[30]=l("h3",{class:"setting-title"},"显示",-1)),l("div",Oe,[e[25]||(e[25]=l("span",null,"在标题栏显示APP更新按钮",-1)),n(A,{modelValue:t(L).showUpdateInTitleBar,"onUpdate:modelValue":e[8]||(e[8]=s=>t(L).showUpdateInTitleBar=s),placeholder:"在标题栏显示APP更新按钮",size:"small",class:"w120"},{default:a(()=>[n(D,{label:"显示",value:!0}),n(D,{label:"不显示",value:!1})]),_:1},8,["modelValue"])]),e[31]||(e[31]=l("h3",{class:"setting-title"},"编辑器",-1)),l("div",He,[e[26]||(e[26]=l("span",null,"主题",-1)),n(A,{modelValue:t(_).theme.value,"onUpdate:modelValue":e[9]||(e[9]=s=>t(_).theme.value=s),placeholder:"编辑器主题",size:"small",class:"w120"},{default:a(()=>[(r(!0),U($,null,O(t(_).theme.options,s=>(r(),w(D,{key:s,label:s,value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),l("div",qe,[e[27]||(e[27]=l("span",null,"点击运行时自动保存",-1)),n(P,{modelValue:t(_).runAutoSave,"onUpdate:modelValue":e[10]||(e[10]=s=>t(_).runAutoSave=s)},null,8,["modelValue"])])],8,Ae)),[[te,t(J)]])}}}),Ye=I(Fe,[["__scopeId","data-v-23e9e31b"]]);export{Ye as default};