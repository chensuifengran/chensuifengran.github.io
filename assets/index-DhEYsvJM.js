const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ScriptConsole-Ch9Q2u__.js","assets/.pnpm-B-riUXVB.js","assets/.pnpm-BUzDz38E.css","assets/ScriptConsole-B-Iyd_U_.css","assets/ScriptList-PNrqPMK6.js","assets/CodeIcon-BmYyo8iD.js","assets/ScriptList-CvOZ_rrq.css","assets/CodeEditor-Cy5XmFQD.js","assets/Loading-TrmNzmSD.js","assets/Loading-CTAAG0As.css","assets/fs-BiKyf7QS.js","assets/CodeEditor-CH30BdBU.css","assets/ScriptSetting-rC7HqvsW.js","assets/ScriptSetting-BlfMxEEc.css","assets/ScriptRunConsole-DM9ZosrH.js","assets/InfoIcon.vue_vue_type_script_setup_true_lang-DHZYRR_y.js","assets/ScriptRunConsole-BN7rLSPl.css","assets/APITest-qVdPsc99.js","assets/dataStructure-CYLCJ1a_.js","assets/dataStructure-C5M0__id.css","assets/APITest-CPJuWE0k.css","assets/CodeSnippet-CjzlpcYr.js","assets/CodeSnippet-PHriWVYn.css","assets/ScriptProject-07Mhv7tj.js","assets/ScriptProject-Dh7kPXfA.css","assets/SettingPage-DRD-DweT.js","assets/SettingPage-LSCxl0Km.css","assets/Account-BvlVj1T3.js","assets/Account-BdJeaSaM.css","assets/ScriptRunWindow-BGCPT2Hg.js","assets/ScriptRunWindow-DkYR6T9y.css","assets/FloatWindow-09ECeoIh.js","assets/FloatWindow-C1t0G91l.css","assets/PointerUtil-Bet3UnkA.js","assets/PointerUtil-Dj4369HI.css","assets/Notification-CN6U2mEO.js","assets/Notification-BPpz3X5Q.css","assets/OperationRecordWindow-AXKdO__t.js","assets/OperationRecordWindow-xyc7XoBN.css","assets/DepManagerPage-BpxgkwXL.js","assets/DepManagerPage-UrB1wp_4.css","assets/InvokesManager-DZtVpO2d.js","assets/InvokesManager-BPcRu0gc.css","assets/NotFound-B3JlyCtd.js"])))=>i.map(i=>d[i]);
import{d as W,o as h,c as T,w as d,a as x,E as te,u as Ze,b as ia,r as S,e as A,f as Ss,n as Ge,g as Ae,h as Ts,i as $,j as m,k as qe,l as k,t as E,m as c,p as me,q as Te,_ as j,s as Is,v as ca,x as ks,y as Ve,z as Ms,A as K,B as G,C as en,D as $s,F as oe,G as ye,H as ft,I as Ie,J as pe,K as Cs,L as Ps,M as Qe,N as ua,W as Fs,O as As,P as va,Q as zt,R as Os,S as Ds,T as Rs,U as _a,V as yt,X as Es,Y,Z as Vs,$ as Ls,a0 as Ns,a1 as Us,a2 as js,a3 as zs,a4 as Bs,a5 as qs,a6 as Ks,a7 as Tt,a8 as It,a9 as q,aa as kt,ab as Mt,ac as Gs,ad as wa,ae as re,af as bt,ag as ie,ah as ae,ai as $t,aj as Ys,ak as Ct,al as Ws,am as Xs,an as ze,ao as Be,ap as Js,aq as Hs,ar as da,as as xa,at as Sa,au as Ta,av as Zs,aw as fe,ax as Qs,ay as er,az as tr,aA as nr,aB as ar,aC as or,aD as sr,aE as rr,aF as lr,aG as ot,aH as ir,aI as cr,aJ as ur,aK as dr,aL as pr,aM as mr}from"./.pnpm-B-riUXVB.js";const tn=Object.freeze(Object.defineProperty({__proto__:null,get imgSimilarityApi(){return Gm}},Symbol.toStringTag,{value:"Module"}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const gr=W({__name:"ReturnIcon",props:{size:{type:String,default:"large"}},setup(e){return(t,n)=>{const a=te;return h(),T(a,{size:e.size},{default:d(()=>n[0]||(n[0]=[x("span",{"i-solar-undo-left-bold":""},null,-1)])),_:1},8,["size"])}}}),fr=["data-tauri-drag-region"],yr={class:"content"},br={id:"header-extra",ref:"extra"},hr=W({__name:"CommonHeader",props:{allowDrag:{type:Boolean,default:!0},title:{type:String,default:""},height:{type:[String,Number],default:40}},emits:["back"],setup(e,{emit:t}){Ze(v=>({"3065db3f":c(i),"2616b538":c(r),"8f6d3c14":c(o),"4ca5d9ad":c(l)}));const n=ia("header-wrap"),a=ia("extra"),o=S("auto"),s=e,r=A(()=>typeof s.height=="string"?s.height:s.height+"px"),l=A(()=>s.allowDrag?"none":"all"),i=A(()=>s.allowDrag?"move":"auto"),u=t,g=()=>u("back"),p=()=>{const v=n.value?.offsetWidth||0,b=a.value?.offsetWidth||0;o.value=Math.floor(v-b-10)+"px"};return Ss(()=>{Ge(p)}),Ae(()=>{p(),window.addEventListener("resize",p)}),Ts(()=>{window.removeEventListener("resize",p)}),(v,b)=>{const _=gr,I=me,F=Te;return h(),$("div",{ref:"header-wrap",class:"header-wrap","w-full":"",flex:"","flex-row":"","items-center":"","justify-between":"","box-border":"","data-tauri-drag-region":s.allowDrag},[x("div",yr,[m(I,{class:"btn-return",link:"",onClick:g},{default:d(()=>[m(_)]),_:1}),b[0]||(b[0]=x("div",{class:"line"},null,-1)),qe(v.$slots,"before",{},void 0,!0),m(F,{truncated:""},{default:d(()=>[k(E(s.title),1)]),_:1}),qe(v.$slots,"after",{},void 0,!0)]),x("div",br,[qe(v.$slots,"default",{},void 0,!0)],512)],8,fr)}}}),H=(e,t)=>{const n=e.__vccOpts||e;for(const[a,o]of t)n[a]=o;return n},vr=H(hr,[["__scopeId","data-v-14ef234b"]]),_r=(e="newScript",t="v1.0",n="脚本描述")=>{const o=Object.keys(Object.assign({"../invokes/Preludes/buildForm/index.ts":()=>j(()=>Promise.resolve().then(()=>At),void 0),"../invokes/Preludes/log/index.ts":()=>j(()=>Promise.resolve().then(()=>Dt),void 0),"../invokes/Preludes/sleep/index.ts":()=>j(()=>Promise.resolve().then(()=>Rt),void 0)})).map(s=>s.split("/")[3]);return`//引用类型推断文件，以便在vscode中获得内置api的类型推断
//@ts-ignore
/// <reference path="./lib/csfr.d.ts" />
/*
 * 请勿删除，此声明会在脚本读取时用到！
 * @version:${t}
 * @name:${e}
 * @description:${n}
 */
const { ${o.join(", ")} } = Preludes;
//脚本运行入口函数
const main = async () => {
  //构建默认表单项并渲染表单
  buildForm([
    // {
    //   id: 'checkItem',
    //   type: FieldType.Check,
    //   label: '测试字段',
    //   targetGroupLabel: "测试组",
    //   checked: true
    // },
  ]);
  //使用getCustomizeForm等待用户点击"开始"按钮，点击后等待结束，可以通过getFieldValue或getFieldValueById方法获取表单数据
  const { getFieldValue, getFieldValueById } = await getCustomizeForm();
  //示例
  //通过组件类型、分组名称和字段名称获取表单项的值
  //const testField = getFieldValue<boolean>(FieldType.Check, '测试字段', false, '测试组');
  //或者通过id获取表单项的值
  //const testField = getFieldValueById<boolean>('checkItem', false);
  //console.log(testField);//true
  //脚本运行逻辑
  
};
`},iy=`//引用类型推断文件，以便在vscode中获得内置api的类型推断
//@ts-ignore
/// <reference path="./lib/csfr.d.ts" />
/*
 * 请勿删除，此声明会在脚本读取时用到！
 * @version:v1.2
 * @name: 演示脚本
 * @description:对脚本交互表单的渲染效果进行展示
 */
const { buildForm, log, sleep } = Preludes;
//脚本运行入口函数
const main = async () => {
  //构建默认表单项并渲染表单
  buildForm([
    {
      type: FieldType.Select,
      label: "运行模式",
      targetGroupLabel: "选择组件",
      options: ["运行模式1", "运行模式2", "运行模式3"],
      value: "运行模式1", //默认值
    },
    {
      id: "__test__",
      type: FieldType.Select,
      label: "测试",
      targetGroupLabel: "选择组件",
      multiple: true,
      options: [1, 2, 3, 4],
      value: [1, 3],
    },
    {
      type: FieldType.Select,
      label: "最大分数百分比",
      targetGroupLabel: "选择组件",
      options: [100, 90, 80],
      value: 100,
    },
    {
      id: "daojwdoj",
      type: FieldType.Select,
      label: "随机最小分数百分比",
      targetGroupLabel: "选择组件",
      group: true,
      multiple: true,
      options: [
        {
          groupLabel: "高分",
          options: [
            {
              value: 90,
              label: "90分",
            },
            {
              value: 80,
              label: "80分",
            },
            {
              value: 70,
              label: "70分",
            },
          ],
        },
        {
          groupLabel: "低分",
          options: [
            {
              value: 60,
              label: "60分",
            },
            {
              value: 50,
              label: "50分",
            },
            {
              value: 0,
              label: "0分",
            },
          ],
        },
      ],
      value: [90, 80],
    },
    {
      id: "",
      type: FieldType.Check,
      label: "随机点击",
      targetGroupLabel: "复选框组件",
      checked: false,
    },
    {
      type: FieldType.Check,
      label: "随机偏移",
      targetGroupLabel: "复选框组件",
      checked: true,
    },
    {
      type: FieldType.Input,
      inputType: "text",
      label: "密码",
      targetGroupLabel: "密码组件",
      value: "-1",
      mod: "password",
      clearable: true,
      showPassword: true,
      placeholder: "dawkodkwoakdok",
    },
    {
      type: FieldType.Input,
      label: "密码2",
      targetGroupLabel: "密码组件",
      value: "-1",
      mod: "password",
      clearable: true,
      maxlength: 5,
      showWordLimit: true,
    },
    {
      type: FieldType.Input,
      label: "请输入随机值的范围",
      id: "test_2",
      inputType: "range",
      targetGroupLabel: "范围输入组件",
      controls: false,
      value: [0, 5],
      limit: [0, 10],
    },
    {
      type: FieldType.Input,
      label: "说明",
      targetGroupLabel: "文本域组件",
      value: "巴拉巴拉~",
      maxlength: 50,
      showWordLimit: true,
      clearable: true,
      mod: "textarea",
      autosize: [undefined, 10],
    },
    {
      type: FieldType.Input,
      inputType: "number",
      label: "数字1",
      targetGroupLabel: "数字输入框",
      value: 123,
      step: 2,
      controlsPosition: "right",
      valueOnClear: "min",
      min: -5,
    },
    {
      type: FieldType.Input,
      inputType: "number",
      label: "数字2",
      targetGroupLabel: "数字输入框",
      value: 123,
      step: 3,
      max: 129,
      valueOnClear: "max",
    },
    {
      type: FieldType.Input,
      label: "简介",
      targetGroupLabel: "文本输入框",
      value: "-1",
      showWordLimit: true,
      maxlength: 100,
    },
    {
      type: FieldType.Input,
      label: "子文件(多选)",
      targetGroupLabel: "文件输入",
      inputType: "file",
      multiple: true,
      value: [],
    },
    {
      type: FieldType.Input,
      label: "主文件",
      targetGroupLabel: "文件输入",
      inputType: "file",
      multiple: false,
      value: "",
    },
    {
      id: "daokok",
      type: FieldType.Picker,
      label: "颜色",
      targetGroupLabel: "pickers",
      pickerType: "color",
      value: "",
      colorFormat: "rgb",
      enableAlpha: false,
      predefine: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577",
      ],
    },
    {
      type: FieldType.Picker,
      label: "222",
      targetGroupLabel: "pickers",
      value: [],
      pickerType: "time",
      isRange: true,
      valueFormat: "HH:mm:ss",
      rangeSeparator: "至",
      startPlaceholder: "起始时间",
      endPlaceholder: "结束时间",
    },
    {
      type: FieldType.Picker,
      label: "111",
      targetGroupLabel: "pickers",
      value: "",
      pickerType: "time",
      isRange: false,
      valueFormat: "HH/mm/ss",
      disabledHours: () => [1, 2, 3, 16],
    },
    {
      id: "TM",
      type: FieldType.Picker,
      label: "333",
      targetGroupLabel: "pickers",
      value: [],
      pickerType: "date",
      isRange: true,
      valueFormat: "YYYY-MM-DD HH:mm:ss",
    },
    {
      type: FieldType.Picker,
      label: "444",
      targetGroupLabel: "pickers",
      value: new Date(),
      pickerType: "date",
    },
    {
      type: FieldType.Select,
      label: "部分",
      targetGroupLabel: "分段选择",
      segmented: true,
      options: [
        {
          label: "一",
          value: 1,
        },
        {
          label: "二",
          value: 2,
        },
        {
          label: "三",
          value: 3,
        },
      ],
      value: 1,
    },
  ]);
  //等待用户点击"开始"按钮，点击按钮时等待结束，后续可以通过getCustomizeForm获取表单数据
  const { getFieldValue, getFieldValueById } = await getCustomizeForm();
  //通过组件类型、标签名、组标签定位到表单项并获取值
  const mod = getFieldValue(
    FieldType.Select,
    "运行模式",
    "无效的运行模式",
    "选择组件"
  );
  //通过id获取表单项的值
  const testValue = getFieldValueById<number[]>("__test__", []);
  //其它表单项的获取方式同上
  log("运行模式为：" + mod, "loading");
  log("testValue:" + testValue, "loading");
  const unlisten = await GlobalShortcut.listen(["Shift+C"], (e) => {
    log("按键按下" + e.shortcut, "loading");
    unlisten && unlisten();
  });
  const types = ["loading", "success", "danger", "warning", "info"];
  setInterval(() => {
    let socre = Math.floor((Math.random() * 100 - 1) / 20);
    log(Math.random(), types[socre] as any);
  }, 500);
  await sleep(1000 * 3000);
};
`,cy="DEMO_SCRIPT_ITEM",Ye=!0,uy=!1,dy=Symbol("headerRefInjectKey"),Ia="47.106.34.210:8711",wr=async(e,t)=>{if(!t)return await ca(e);const n=t.includes("\\");let a=[];return n?a=t.split("\\"):t.includes("/")?a=t.split("/"):a=[t],await ca(e,...a)},xr=async(e,t)=>{const n=t.includes("\\");let a=[];return n?a=t.split("\\"):t.includes("/")?a=t.split("/"):a=[t],await ks(e,...a)},Sr=async()=>"",We={basename:Is,join:wr,resolve:xr,getInstallDir:Sr},Tr={clear:()=>Ve("notify",{type:"clear-message"}),done:()=>Ve("notify",{type:"done"}),init:e=>Ve("notify",{type:"init",payload:e}),end:()=>Ve("notify",{type:"end"}),send:e=>Ve("notify",{type:"message",payload:e}),sendCustom:e=>Ve("notify",{type:"custom-message",payload:e}),listen:async(e,t)=>await Ms("notify",a=>{e(a)},{target:t})},ka={notify:Tr},Ir=S([]),kr=K([]),Mr=S("lackDepDownload"),$r=S(!1),Cr=S([]),Pr=S([]),Fr=async e=>{{G({title:"提示",message:"playground环境不支持依赖管理",type:"warning",position:"bottom-right"});return}},Ar=()=>{},Or=()=>{},Dr=e=>{},Rr=()=>({goInstallDeps:Fr,lackDependence:kr,activeDrewerName:Mr,allLibsName:Ir,needUpdateDepList:Cr,contentLoading:$r,depPkgList:Pr,close:Or,syncData:Dr,syncMainData:Ar}),Er=async(e,t)=>{},Vr=async e=>[],Lr=async e=>[],Nr=async()=>"CPU",Ur=async(e,t="")=>{},jr=async e=>{},zr=async()=>{},Br=async e=>[],qr=async()=>{},Kr=async()=>[],Gr=async(e,t=!1,n=!1,a="CPU")=>!0,Yr=e=>"primary",Bt={libExists:Ur,renameLib:Er,syncOcrValue:Nr,syncDependentVersion:Lr,checkDepUpdate:qr,checkDepLack:Kr,getAllLibsName:Br,installDep:Gr,diffLocalVersionConfig:Vr,getDepStateType:Yr,pushUpdateDep:jr,batchUpdateDep:zr},ne=en("globalSettings",{state:()=>({isInited:!1,app:{latestVersion:"2.0.0",depHaveUpdate:!1,dependenceState:"完整版",state:{aside:{collapsed:!1,currentItem:"script"}},modulesSetting:{autoOpenOutput:!0,drawerSize:"30%"}},envSetting:{workDir:"",screenshotSavePath:"",_screenshotDir:"",_scriptRootDir:"E:\\test\\root_dir"},ocr:{value:"CPU",options:["GPU","CPU"],gpuMemory:1e3},view:{showUpdateInTitleBar:!0},editor:{theme:{value:"跟随全局主题",options:["跟随全局主题","明亮","暗黑"]},runAutoSave:!0}}),getters:{},actions:{async exportData(){const e={version:"playground"};return Object.assign(e,this.$state),delete e.ocr.inited,JSON.stringify(e)},async importData(e){const t=JSON.parse(e);delete t.version,Object.assign(this.$state,t);const n=await Bt.syncOcrValue();n&&(t.ocr.value=n),this.$patch(t)},async init(){this.$subscribe(async(t,n)=>{t.storeId==="globalSettings"&&localStorage.setItem("globalSettings",await this.exportData())},{detached:!1});const e=window.localStorage.getItem("globalSettings");e?await this.importData(e):(this.envSetting.workDir===""&&(this.envSetting.workDir="E:\\playground"),this.envSetting.screenshotSavePath&&(this.envSetting.screenshotSavePath="E:\\playground\\screenshot.png",this.envSetting._screenshotDir="E:\\playground")),this.isInited=!0}}}),Wr=S([]),Xr=S(""),Jr=S(""),Hr=S(""),P=()=>({notAllowedFnId:Wr,currentScriptDir:Xr,runningFnId:Jr,currentDevice:Hr}),Zr=async()=>({width:1920,height:1080}),Qr=async()=>({x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080)}),el=async(e,t,n,a,o,s)=>1,tl=async(e,t,n=-1,a=-1,o=-1,s=-1)=>1,nl=async(e,t,n=0,a=0)=>({x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080)}),al=async(e,t,n,a,o,s)=>({message:"success",data:[{x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080),width:100,height:100,centerX:50,centerY:50,targetOffsetX:0,targetOffsetY:0}]}),ol=async(e,t,n,a,o,s=0,r=0)=>({x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080)}),sl=async e=>({width:Math.floor(Math.random()*1920),height:Math.floor(Math.random()*1080)}),rl=async e=>({width:Math.floor(Math.random()*1920),height:Math.floor(Math.random()*1080),startX:Math.floor(Math.random()*1920),startY:Math.floor(Math.random()*1080)}),ll=async()=>({width:Math.floor(Math.random()*1920),height:Math.floor(Math.random()*1080),startX:Math.floor(Math.random()*1920),startY:Math.floor(Math.random()*1080)}),il=async e=>!0,cl=async e=>!0,ul=async e=>!0,dl=async e=>!0,pl=async e=>!0,ml=async(e,t,n="left")=>!0,gl=async(e,t,n="left")=>!0,fl=async(e,t,n="left")=>!0,yl=async(e,t=50,n)=>!0,bl=async()=>!0,hl=async(e,t,n,a,o)=>!0,vl=async(e,t,n=!1)=>!0,_l=async e=>!0,wl=async(e,t,n,a,o)=>({code:1,result:[]}),xl=async(e=0,t=0)=>({message:"success",data:[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)]}),Sl=async(e,t,n)=>({message:"success",data:[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)]}),Tl=async(e,t=-1,n=-1,a=-1,o=-1)=>!0,Il=async(e,t=!1)=>"//playground环境不支持此功能",kl=async()=>!0,Ml=async()=>({APP_ID:"playground",API_SECRET:"playground",API_KEY:"playground"});$s("CLOSE_SPLASHSCREEN_FLAG",{defaultValue:!1});const $l=async()=>{},O={captureOperation:Il,stopCaptureOperation:kl,getScreenSize:Zr,getMousePos:Qr,cropPicture:el,imgSimilarity:tl,matchTemplate:nl,screenDiffTemplates:al,screenMatchTemplate:ol,getImgSize:sl,getImgRectInfo:rl,getScreenRectInfo:ll,combined:il,keyDown:cl,keyUp:ul,pressKey:dl,inputText:pl,click:ml,mouseDown:fl,mouseUp:gl,startClicker:yl,stopClicker:bl,drag:hl,move:vl,wheel:_l,ocr:wl,screenColor:xl,screenshot:Tl,imgColor:Sl,getSparkInfo:Ml,closeSplashscreen:$l},Ma=async(e,t,n=-1,a=-1,o=-1,s=-1,r)=>{const{notAllowedFnId:l}=P();if(r&&l.value.includes(r))return-2;try{return await O.imgSimilarity(e,t,n,a,o,s)}catch(i){return console.error(i),-1}},Ue=async(e,t)=>{const n={x:e,y:t};if(window[C]?.Mouse?.__NS_DATA__){const a=window[C].Mouse.__NS_DATA__?.baseSize,o=window[C].Mouse.__NS_DATA__?.randomOffset,{width:s,height:r}=await O.getScreenSize();if(a!==void 0&&(n.x=Math.round(n.x*a[0]/s),n.y=Math.round(n.y*a[1]/r)),o!==void 0){const[l,i]=o[0];l===0&&i===0||(n.x+=Math.round(l+Math.random()*(i-l)));const[u,g]=o[1];u===0&&g===0||(n.y+=Math.round(u+Math.random()*(g-u)))}}return n},Pt=async(e,t,n="left",a)=>{const{notAllowedFnId:o}=P();if(a&&o.value.includes(a))return!1;try{const s=await Ue(e,t);return await O.click(s.x,s.y,n)}catch(s){return console.error("clickFnError:",s),!1}},Ft=async(e,t,n)=>"touch ok";class nn{x;y;constructor(t,n){this.x=t,this.y=n}async click(){await Pt(this.x,this.y)}async touch(){return await Ft(this.x,this.y)}}const $a=async(e,t,n=0,a=0,o)=>{const{notAllowedFnId:s}=P();if(!(o&&s.value.includes(o)))try{const{x:r,y:l}=await O.matchTemplate(e,t,n,a);return new nn(r,l)}catch(r){console.error("matchTemplateFnError:",r)}},Ca={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="matchTemplate"&&s.scope==="CV").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:case 1:s.componentType==="FileInput"&&(s.value=f.pathStrReset(n[r]?.value||""));break;case 2:case 3:s.componentType==="slider"&&(s.value=+n[r]?.value||0);break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${f.replaceConstantPath(e.imgPath)},${f.replaceConstantPath(e.tempPath)},${e.exactValue},${e.scale}`)}},Cl=async(e,t)=>{if(e.replaceCurFnArgs){const u=Ca.parameterReplace(e);return f.apiAutoTip(),u}const{imgPath:n,tempPath:a,exactValue:o,scale:s}=e,{showDetails:r}=t;console.time("matchTemplate耗时");const l=await $a(n,a,o,s);console.timeEnd("matchTemplate耗时");const i=w().find(u=>u.name==="matchTemplate"&&u.scope==="CV")?.testModule;i.document.example.code=`const { x, y } = await 
        	CV.matchTemplate("${n.replace(/\\/g,"\\\\")}", "${a.replace(/\\/g,"\\\\")}", ${o}, ${s});`,r(JSON.stringify(l),"matchTemplate")},Pl={howToUse:`
      匹配模板图片在原图中的坐标
      匹配规则：
      * 开始对两张图片进行校验路径是否有误、两张图片相似度是否<=0，若发生其中一种情况则x=-1,y=-1。
      * 若两张图片有相似度，则进行坐标匹配，接下来看exactValue是否=0,
      * 是则直接返回匹配区域中心坐标。
      * 否则只返回大于等于精确值(exactValue)的匹配结果，对于小于精确值的则返回x=-1,y=-1。
      `,params:[{name:"imgPath",required:!0,instructions:"待匹配图片路径",type:"string",default:""},{name:"tempPath",required:!0,instructions:"模板图片路径",type:"string",default:""},{name:"exactValue",required:!1,instructions:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则返回{x:-1,y:-1})",type:"number",default:"0"},{name:"scale",required:!1,instructions:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",type:"number",default:"1"}],returnValue:{type:"Promise<MatchUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`const matchUtil = 
    await CV.matchTemplate('E:\\\\image.png', 'E:\\\\template.png', 0, 1);`},searchKeys:["模板","图片","位置","中心坐标","opencv","cv","匹配"],codeSnippet:"const matchUtil = await CV.matchTemplate('${1:imgPath}', '${2:tempPath}', ${3:exactValue}, ${4:scale});"},Fl={title:"图片模板匹配",targetMethodName:"matchTemplate",content:`
      匹配模板图片在原图中的坐标，返回{x,y}，若匹配失败则返回{-1,-1}
      匹配规则：
      * 开始对两张图片进行校验路径是否有误、两张图片相似度是否<=0，若发生其中一种情况则返回{x:-1,y:-1}
      * 若两张图片有相似度，则进行坐标匹配，接下来看exactValue是否=0,
      * 是则直接返回匹配区域中心坐标，
      * 否则只返回大于等于精确值(exactValue)的匹配结果，对于小于精确值的则返回{x:-1,y:-1}。
      `,args:[{name:"imgPath",componentType:"FileInput",value:"",label:"待匹配图片路径"},{name:"tempPath",componentType:"FileInput",value:"",label:"模板图片路径"},{name:"exactValue",componentType:"slider",value:0,label:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则返回{x:-1,y:-1})",range:{min:0,max:1,step:.01}},{name:"scale",componentType:"slider",value:1,label:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",range:{min:1,max:10,step:.1}}]},Al=`
class MatchUtil {
    x:number;
    y:number;
    constructor(x: number, y: number);
    public click(): Promise<void>;
    public touch(): Promise<string>;
}
function matchTemplate(
    imgPath: string,
    tempPath: string,
    exactValue?: number,
    scale?:number
):Promise<MatchUtil | undefined>;
`,Ol={name:"matchTemplate",scope:"CV",exportFn:{fn:$a},testModule:{weight:5,dialog:Fl,callback:Cl,document:Pl},declaration:Al,auxiliary:Ca,helperClass:[nn]},an=Object.freeze(Object.defineProperty({__proto__:null,matchTemplateApi:Ol},Symbol.toStringTag,{value:"Module"})),Pa=async(e,t,n,a,o,s,r)=>{const{notAllowedFnId:l}=P();if(!(r&&l.value.includes(r)))try{return await O.screenDiffTemplates(e,t,n,a,o.join("|"),s)}catch(i){console.error("screenDiffTemplatesFnError:",i)}},Fa={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="screenDiffTemplates"&&s.scope==="CV").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:let l=s;l.value.x=+n[0]?.value||0,l.value.y=+n[1]?.value||0,l.value.width=+n[2]?.value||0,l.value.height=+n[3]?.value||0;break;case 1:let i=s;i.value=n[4]?.value?.map(u=>f.pathStrReset(u));break;case 2:s.value=+n[5]?.value||0;break;case 3:s.value=n[6]?.value?(n[6]?.value).toUpperCase():"auto";break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.range.x}, ${e.range.y}, ${e.range.width}, ${e.range.height}, [${e.tempPaths.map(t=>`"${f.pathStrProcess(t)}"`).join(",")}], ${e.targetIndex}`)}},Dl=async(e,t)=>{if(e.replaceCurFnArgs){const i=Fa.parameterReplace(e);return f.apiAutoTip(),i}const{range:n,tempPaths:a,targetIndex:o}=e,{showDetails:s}=t;console.time("screenDiffTemplates耗时");const r=await Pa(n.x,n.y,n.width,n.height,a,o||0);console.timeEnd("screenDiffTemplates耗时");const l=w().find(i=>i.name==="screenDiffTemplates"&&i.scope==="CV")?.testModule;l.document.example.code=`const res = await CV.screenDiffTemplates(${JSON.stringify(n)}, ["${a.join('","').replace(/\\/g,"\\\\")}"], ${o});`,s(JSON.stringify(r),"screenDiffTemplates")},Rl={howToUse:"将屏幕指定范围进行截图与多模板图片进行位置差异对比",params:[{name:"x",required:!0,instructions:"截图起点x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"截图起点y坐标",type:"number",default:""},{name:"width",required:!0,instructions:"截图宽度",type:"number",default:""},{name:"height",required:!0,instructions:"截图高度",type:"number",default:""},{name:"tempPaths",required:!0,instructions:"模板图片路径",type:"string[]",default:""},{name:"targetIndex",required:!1,instructions:"主模板图片索引, 其余模板会携带与主模板的位置差异",type:"number",default:"0"}],returnValue:{type:`Promise<{
  x:number;
  y:number;
  width:number;
  height:number;
  centerX:number;
  centerY:number;
  targetOffsetX:number;
  targetOffsetY:number;
 }[] | undefined>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//多模板与主模板的位置差异匹配
const res = await CV.screenDiffTemplates(0, 0, 100, 100, ['E:\\\\template1.png','E:\\\\template2.png'], 0);`},searchKeys:["模板","图片","位置","中心坐标"],codeSnippet:"const res = await CV.screenDiffTemplates(${1:x}, ${2:y}, ${3:width}, ${4:height}, '${5:tempPaths}', ${6:targetIndex});"},El={title:"屏幕中多模板的位置差异匹配",targetMethodName:"screenDiffTemplates",content:`
      将屏幕指定范围进行截图与多模板图片进行位置差异对比
      `,args:[{name:"range",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"截图范围"},{name:"tempPaths",componentType:"FileInput",multiple:!0,value:[],label:"模板图片路径"},{name:"targetIndex",componentType:"numberInput",value:0,label:"主模板图片索引, 其余模板会携带与主模板的位置差异"}]},Vl=`
function screenDiffTemplates(
    x:number,
    y:number,
    width: number,
    height: number,
    tempPaths: string[],
    targetIndex?: number
):Promise<{
    x:number;
    y:number;
    width:number;
    height:number;
    centerX:number;
    centerY:number;
    targetOffsetX:number;
    targetOffsetY:number;
}[] | undefined>;`,Ll={name:"screenDiffTemplates",scope:"CV",exportFn:{fn:Pa},testModule:{weight:5,dialog:El,callback:Dl,document:Rl},declaration:Vl,auxiliary:Fa},on=Object.freeze(Object.defineProperty({__proto__:null,screenDiffTemplatesApi:Ll},Symbol.toStringTag,{value:"Module"})),Aa=async(e,t,n,a,o,s=0,r=0,l)=>{const{notAllowedFnId:i}=P();if(!(l&&i.value.includes(l)))try{const{x:u,y:g}=await O.screenMatchTemplate(e,t,n,a,o,s,r);return new nn(u,g)}catch(u){console.error("screenMatchTemplateFnError:",u)}},Oa={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="screenMatchTemplate"&&s.scope==="CV").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:s.componentType==="RectInput"&&(s.value.x=+n[0]?.value||0,s.value.y=+n[1]?.value||0,s.value.width=+n[2]?.value||0,s.value.height=+n[3]?.value||0);break;case 1:s.componentType==="FileInput"&&(s.value=f.pathStrReset(n[4]?.value||""));break;case 2:case 3:s.componentType==="slider"&&(s.value=+n[r+3]?.value||0);break;case 4:s.componentType==="select"&&(s.value=n[7]?.value?n[7]?.value?.toUpperCase():"auto");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.range.x}, ${e.range.y}, ${e.range.width}, ${e.range.height}, ${f.replaceConstantPath(e.tempPath)}, ${e.exactValue}, ${e.scale}`)}},Nl=async(e,t)=>{if(e.replaceCurFnArgs){const u=Oa.parameterReplace(e);return f.apiAutoTip(),u}const{range:n,tempPath:a,exactValue:o,scale:s}=e,{showDetails:r}=t;console.time("screenMatchTemplate耗时");const l=await Aa(n.x,n.y,n.width,n.height,a,o,s);console.timeEnd("screenMatchTemplate耗时");const i=w().find(u=>u.name==="screenMatchTemplate"&&u.scope==="CV")?.testModule;i.document.example.code=`const { x, y } = await 
        	CV.screenMatchTemplate(${JSON.stringify(n)}, "${a.replace(/\\/g,"\\\\")}", ${o}, ${s});`,r(JSON.stringify(l),"screenMatchTemplate")},Ul={howToUse:`
      将屏幕指定范围进行截图与模板图片对比
      `,params:[{name:"x",required:!0,instructions:"截图起点x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"截图起点y坐标",type:"number",default:""},{name:"width",required:!0,instructions:"截图宽度",type:"number",default:""},{name:"height",required:!0,instructions:"截图高度",type:"number",default:""},{name:"tempPath",required:!0,instructions:"模板图片路径",type:"string",default:""},{name:"exactValue",required:!1,instructions:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则由回调函数返回{x:-1,y:-1})",type:"number",default:"0"},{name:"scale",required:!1,instructions:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",type:"number",default:"1"}],returnValue:{type:"Promise<MatchUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`
const res = await CV.screenMatchTemplate(0, 0, 100, 100, 'E:\\\\template.png', 0, 1);`},searchKeys:["模板","图片","位置","中心坐标","opencv","cv","截图"],codeSnippet:"const res = await CV.screenMatchTemplate(${1:x}, ${2:y}, ${3:width}, ${4:height}, '${5:tempPath}', ${6:exactValue}, ${7:scale});"},jl={title:"屏幕模板匹配",targetMethodName:"screenMatchTemplate",content:`
      将屏幕指定范围进行截图与模板图片对比
      `,args:[{name:"range",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"截图范围"},{name:"tempPath",componentType:"FileInput",value:"",label:"模板图片路径"},{name:"exactValue",componentType:"slider",value:0,label:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则由回调函数返回{x:-1,y:-1})",range:{min:0,max:1,step:.01}},{name:"scale",componentType:"slider",value:1,label:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",range:{min:1,max:10,step:.1}}]},zl=`
function screenMatchTemplate(
    x:number,
    y:number,
    width:number,
    height:number,
    tempPath: string,
    exactValue?:number,
    scale?:number
):Promise<
    MatchUtil | undefined
>;
`,Bl={name:"screenMatchTemplate",scope:"CV",exportFn:{fn:Aa},testModule:{weight:5,dialog:jl,callback:Nl,document:Ul},declaration:zl,auxiliary:Oa},sn=Object.freeze(Object.defineProperty({__proto__:null,screenMatchTemplateApi:Bl},Symbol.toStringTag,{value:"Module"})),ql={howToUse:"读取文件夹内的文件",params:[{name:"path",required:!0,instructions:"文件夹的绝对路径",type:"string",default:"",children:[]}],returnValue:{instructions:"文件描述对象，fileName为文件或文件夹名称，fileType为文件或者文件夹",type:'Promise<{fileName: string;fileType: "file" | "dir";}[]>'},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const files = await readDir("E://exampleDir");'},searchKeys:["read","fs","dir"],codeSnippet:"${1:const res = }await readDir(${2:'path'});${0:}"},Da=async(e,t)=>[],Ra={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="readDir"&&s.scope==="FS").testModule.dialog;o.args&&o.args.forEach((s,r)=>{switch(r){case 0:s.value=f.pathStrReset(n[r].value||"");break}})},parameterReplace:e=>{e.replaceCurFnArgs(f.replaceConstantPath(e.path))}},Kl=async(e,t)=>{if(e.replaceCurFnArgs){Ra.parameterReplace(e),f.apiAutoTip();return}console.time("readDir耗时");const n=await Da();console.timeEnd("readDir耗时");const a=w().find(o=>o.name==="readDir"&&o.scope==="FS")?.testModule;a.document.example.code="const files = await readDir(path);",t.showDetails(JSON.stringify(n),"FS.readDir")},Gl={title:"读取文件夹",targetMethodName:"readDir",content:"获取文件夹的所有子文件或子文件夹",args:[{componentType:"DirInput",value:"",suffix:"",verifyPath:!1,desc:"文件夹选择",id:"YS1ux1d9_8FelG1KPOsCn",onlyTest:!1,noTest:!1,name:"path",label:"文件夹路径",displayCondition:[],placeholder:"请输入文件夹路径"}]},Yl=`function readDir(
  path: string,
): Promise<{fileName: string;fileType: "file" | "dir";}[]>;
`,Wl={scope:"FS",name:"readDir",exportFn:{fn:Da},testModule:{weight:5,dialog:Gl,callback:Kl,document:ql},declaration:Yl,auxiliary:Ra},rn=Object.freeze(Object.defineProperty({__proto__:null,readDirApi:Wl},Symbol.toStringTag,{value:"Module"})),Xl={howToUse:"读取文件内容",params:[{name:"path",required:!0,instructions:"文件的绝对路径",type:"string",default:"",children:[]}],returnValue:{instructions:"文件的内容",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const content = await readFile("E://example.txt");'},searchKeys:["fs","read","file"],codeSnippet:"${1:const res = }await readFile(${2:'path'});${0:}"},Ea=async(e,t)=>"",Va={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="readFile"&&s.scope==="FS").testModule.dialog;o.args&&o.args.forEach((s,r)=>{r===0&&(s.value=f.pathStrReset(n[r].value||""))})},parameterReplace:e=>{e.replaceCurFnArgs(f.replaceConstantPath(e.path))}},Jl=async(e,t)=>{if(e.replaceCurFnArgs){Va.parameterReplace(e),f.apiAutoTip();return}console.time("readFile耗时");const n=await Ea();console.timeEnd("readFile耗时");const a=w().find(o=>o.name==="readFile"&&o.scope==="FS")?.testModule;a.document.example.code="const content = await readFile(path);",t.showDetails(JSON.stringify(n),"FS.readFile")},Hl={title:"读取文件内容",targetMethodName:"readFile",content:"读取指定路径的文件内容",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"BZSXGSadzZcAtUZm6ePro",onlyTest:!1,noTest:!1,name:"path",label:"文件路径",displayCondition:[],placeholder:"请选择需要读取内容的文件所在路径",multiple:!1}]},Zl=`function readFile(
  path: string,
): Promise<string>;
`,Ql={scope:"FS",name:"readFile",exportFn:{fn:Ea},testModule:{weight:5,dialog:Hl,callback:Jl,document:Xl},declaration:Zl,auxiliary:Va},ln=Object.freeze(Object.defineProperty({__proto__:null,readFileApi:Ql},Symbol.toStringTag,{value:"Module"})),ei={howToUse:"将文本写入文件",params:[{name:"path",required:!0,instructions:"目标文件的绝对路径",type:"string",default:"",children:[]},{name:"content",required:!0,instructions:"文本内容",type:"string",default:"",children:[]}],returnValue:{instructions:"是否写入成功",type:"Promise<boolean>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const res = await writeFile("E://example.txt", "示例文本");'},searchKeys:["write","fs","file"],codeSnippet:"${1:const res = }await writeFile(${2:'path'}, ${3:'content'});${0:}"},La=async(e,t,n)=>(console.error("writeFileFnError: ","writeFileFn is not allowed in playground"),!1),Na={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="writeFile"&&s.scope==="FS").testModule.dialog;o.args&&o.args.forEach((s,r)=>{switch(r){case 0:s.value=f.pathStrReset(n[r].value||"");break;case 1:s.value=n[r].value;break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${f.replaceConstantPath(e.path)}, "${e.content}"`)}},ti=async(e,t)=>{if(e.replaceCurFnArgs){Na.parameterReplace(e),f.apiAutoTip();return}console.time("writeFile耗时");const n=await La();console.timeEnd("writeFile耗时");const a=w().find(o=>o.name==="writeFile"&&o.scope==="FS")?.testModule;a.document.example.code="const res = await writeFile(path, content);",t.showDetails(JSON.stringify(n),"FS.writeFile")},ni={title:"写入文件",targetMethodName:"writeFile",content:"将文本写入文件",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"Zo8IIjWeA8CmiSbEohXVf",onlyTest:!1,noTest:!1,name:"path",label:"文件路径",displayCondition:[],placeholder:"请输入文件路径",multiple:!1},{componentType:"input",value:"",desc:"文本输入框",id:"f8BMJ7N3b4yLqZdaMxf3z",onlyTest:!1,noTest:!1,name:"content",label:"内容",displayCondition:[],placeholder:"请输入需要写入文件的内容"}]},ai=`function writeFile(
  path: string,
  content: string,
): Promise<boolean>;
`,oi={scope:"FS",name:"writeFile",exportFn:{fn:La},testModule:{weight:5,dialog:ni,callback:ti,document:ei},declaration:ai,auxiliary:Na},cn=Object.freeze(Object.defineProperty({__proto__:null,writeFileApi:oi},Symbol.toStringTag,{value:"Module"})),si=async(e=1e3)=>{const t=parseInt(""+e/1e3),n=e%1e3;if(t===0)return new Promise(a=>{const o=setTimeout(()=>{clearTimeout(o),a()},e)});{let a=!1;for(let o=0;o<t;o++)if(await new Promise(s=>{const r=setTimeout(()=>{clearTimeout(r),s()},1e3)}),window[C]&&window[C]?.isStop){a=!0;break}if(!a)return new Promise(o=>{const s=setTimeout(()=>{clearTimeout(s),o()},n)})}},ht={sleep:si},ri=(e,t)=>{const{notAllowedFnId:n}=P();return t&&n.value.includes(t)?!1:ht.sleep(e)},li=async(e,t,n)=>{{console.error("playground环境下无法使用：listen");return}},ii={howToUse:"监听快捷键触发，触发后调用回调函数。",params:[{name:"shortcuts",required:!0,instructions:"等待触发的快捷键，如：['Alt+S','Alt+E']",type:"string | string[]",default:""},{name:"handler",required:!0,instructions:"快捷键触发后的回调函数，参数key为触发的快捷键",type:"ShortcutHandler",default:""}],returnValue:{instructions:"返回一个函数，调用该函数可以取消监听",type:"Promise<(() => Promise<void>) | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//等待 Alt+S 或 Alt+R 被按下
const unlisten = await GlobalShortcut.listen(["Alt+S","Alt+R"],(event)=>{console.log(event);});//监听快捷键
//取消监听
if(unlisten){
  await unlisten();
}`},searchKeys:["unlisten","listen","触发","快捷键"],codeSnippet:"const unlisten = await GlobalShortcut.listen(['${1:shortcut}'],(event)=>{${2:}});"},ci=`
type ShortcutEvent = {
  shortcut: string;
  id: number;
  state: 'Released' | 'Pressed';
}
type ShortcutHandler = (event: ShortcutEvent) => void;
function listen(
  shortcuts: string | string[],
  handler: ShortcutHandler,
):Promise<(() => Promise<void>) | undefined>;
`,ui={name:"listen",scope:"GlobalShortcut",exportFn:{fn:li},testModule:{weight:4,dialog:{notOpen:!0,title:"监听快捷键触发",targetMethodName:"listen"},callback:(e,t)=>{t.showDetails("此方法无法直接调用，请在脚本中使用！","GlobalShortcut.listen")},document:ii},declaration:ci},un=Object.freeze(Object.defineProperty({__proto__:null,listenApi:ui},Symbol.toStringTag,{value:"Module"})),di=async(e,t)=>{{console.error("playground环境下无法使用：unlisten");return}},pi={howToUse:"取消监听快捷键触发",params:[{name:"shortcuts",required:!0,instructions:"需要取消监听的快捷键，如：['Alt+S','Alt+E']",type:"string | string[]",default:""}],returnValue:{instructions:"",type:"Promise<void>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//取消监听多个快捷键
await GlobalShortcut.unlisten(["Alt+S","Alt+R"]);
//取消监听单个快捷键
await GlobalShortcut.unlisten("Alt+S");
`},searchKeys:["unlisten","取消监听","快捷键"],codeSnippet:"await GlobalShortcut.unlisten(['${1:shortcuts}']);"},mi=`
function unlisten(shortcuts: string | string[]): Promise<void>;
`,gi={name:"unlisten",scope:"GlobalShortcut",exportFn:{fn:di},testModule:{weight:4,dialog:{notOpen:!0,title:"取消监听快捷键触发",targetMethodName:"unlisten"},callback:(e,t)=>{t.showDetails("此方法无法直接调用，请在脚本中使用！","GlobalShortcut.unlisten")},document:pi},declaration:mi},dn=Object.freeze(Object.defineProperty({__proto__:null,unlistenApi:gi},Symbol.toStringTag,{value:"Module"})),Ua=async(e,t)=>{{console.error("playground环境下无法使用：waitShortcuts");return}},ja={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="waitShortcuts"&&s.scope==="GlobalShortcut").testModule.dialog;o.args&&o.args[0]&&n.length&&(n[0].type==="string[]"?o.args[0].value=n[0].value.map(s=>s.replace(/[\[\]]/g,"")):o.args[0].value=[n[0].value.replace(/[\[\]]/g,"")])},parameterReplace:e=>{if(typeof e.shortcuts=="string"||e.shortcuts.length===1){const t=typeof e.shortcuts=="string"?e.shortcuts:e.shortcuts[0];e.replaceCurFnArgs(`"${t}"`);return}e.replaceCurFnArgs(`[${e.shortcuts.map(t=>`"${t}"`).join(", ")}]`)}},fi=async(e,t)=>{if(e.replaceCurFnArgs){const o=ja.parameterReplace(e);return f.apiAutoTip(),o}e.delay>0&&await new Promise(o=>{const s=setTimeout(()=>{o(null),clearTimeout(s)},e.delay)}),console.time("waitShortcuts耗时");const n=await Ua(e.shortcuts);console.timeEnd("waitShortcuts耗时"),t.showDetails(JSON.stringify(n),"waitShortcuts");const a=w().find(o=>o.name==="waitShortcuts"&&o.scope==="GlobalShortcut")?.testModule;a.document.example.code=`await Input.waitShortcuts([${e.shortcuts.map(o=>`"${o}"`).join(", ")}]);`},yi={howToUse:"全局等待快捷键触发",params:[{name:"shortcuts",required:!0,instructions:"等待触发的快捷键，如：['Alt+S','Alt+R']",type:"string | string[]",default:""}],returnValue:{type:"Promise<string | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//等待 Alt+S 或 Alt+R 被按下
const shortcut = await GlobalShortcut.waitKeys(["Alt+S","Alt+R"]);
//按下Alt+S之后shortcut为"Alt+S"，按下Alt+R之后shortcut为"Alt+R"`},searchKeys:["wait","等待","按下","触发"],codeSnippet:"const shortcut = await GlobalShortcut.waitShortcuts(['${1:shortcut}']);"},bi={title:"等待快捷键触发",targetMethodName:"waitShortcuts",content:"等待快捷键触发, 返回触发的快捷键名称, 若快捷键冲突则返回undefined",args:[{name:"shortcuts",componentType:"select",value:[],label:"等待触发的按键(可多选创建)",options:["Alt+S","Alt+E"],multiple:!0},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},hi=`
function waitShortcuts(shortcuts: string | string[]): Promise<string | undefined>;
`,vi={name:"waitShortcuts",scope:"GlobalShortcut",exportFn:{fn:Ua},testModule:{weight:4,dialog:bi,callback:fi,document:yi},declaration:hi,auxiliary:ja},pn=Object.freeze(Object.defineProperty({__proto__:null,waitShortcutsApi:vi},Symbol.toStringTag,{value:"Module"})),za=async(e,t)=>{const{notAllowedFnId:n}=P();if(t&&n.value.includes(t))return!1;try{return await O.combined(e)}catch(a){return console.error("combinedFnError:",a),!1}},Ba={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="combined"&&s.scope==="Input").testModule.dialog.args.forEach((s,r)=>{r===0&&(s.value=n.map(l=>l.value.replace("[","").replace("]","")))})},parameterReplace:e=>{e.replaceCurFnArgs(`[${e.keys.map(t=>`"${t}"`).join(",")}]`)}},_i=async(e,t)=>{if(e.replaceCurFnArgs){const o=Ba.parameterReplace(e);return f.apiAutoTip(),o}e.delay>0&&await new Promise(o=>{const s=setTimeout(()=>{o(null),clearTimeout(s)},e.delay)}),console.time("combined耗时");const n=await za(e.keys);console.timeEnd("combined耗时"),t.showDetails(JSON.stringify(n),"combined");const a=w().find(o=>o.name==="combined"&&o.scope==="Input")?.testModule;a.document.example.code=`await Input.combined([${e.keys.map(o=>`'${o}'`).join(",")}]);`},wi={howToUse:"组合键",params:[{name:"keys",required:!0,instructions:"按下的组合键",type:"Key[]",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//按下A键后松开
await Input.combined("A");`},searchKeys:["combined","key","组合键","按键"],codeSnippet:"await Input.combined(['${1:key}', '${2:key}']);"},et=["0) 数字键0:Num0","1! 数字键1:Num1","2@ 数字键2:Num2","3# 数字键3:Num3","4$ 数字键4:Num4","5% 数字键5:Num5","6^ 数字键6:Num6","7& 数字键7:Num7","8* 数字键8:Num8","9( 数字键9:Num9","[小键盘]数字键0:Numpad0","[小键盘]数字键1:Numpad1","[小键盘]数字键2:Numpad2","[小键盘]数字键3:Numpad3","[小键盘]数字键4:Numpad4","[小键盘]数字键5:Numpad5","[小键盘]数字键6:Numpad6","[小键盘]数字键7:Numpad7","[小键盘]数字键8:Numpad8","[小键盘]数字键9:Numpad9","字母键A:A","字母键B:B","字母键C:C","字母键D:D","字母键E:E","字母键F:F","字母键G:G","字母键H:H","字母键I:I","字母键J:J","字母键K:K","字母键L:L","字母键M:M","字母键N:N","字母键O:O","字母键P:P","字母键Q:Q","字母键R:R","字母键S:S","字母键T:T","字母键U:U","字母键V:V","字母键W:W","字母键X:X","字母键Y:Y","字母键Z:Z","F1键:F1","F2键:F2","F3键:F3","F4键:F4","F5键:F5","F6键:F6","F7键:F7","F8键:F8","F9键:F9","F10键:F10","F11键:F11","F12键:F12","←Backspace退格键:Backspace","Tab制表键:Tab","Return回车键:Return","↑Shift键(左):LShift","↑Shift键(右):RShift","Ctrl键:Control","Alt键:Alt","Pause键:Pause","CapsLock大写锁定键:CapsLock","Esc键:Escape","空格键:Space","Page Up键:PageUp","Page Down键:PageDown","End键:End","Home键:Home","←左箭头键:LeftArrow","↑上箭头键:UpArrow","→右箭头键:RightArrow","↓下箭头键:DownArrow","Insert键:Insert","Delete删除键:Delete","Windows键:Windows","ContextMenu右键菜单键:ContextMenu","NumLock数字锁定键:NumLock","ScrollLock滚动锁定键:ScrollLock","; ：分号冒号键:OEM1","/ ? 斜杠问号键:OEM2","` ~ 反引号波浪号键:OEM3","[ { 左(中括号花括号键):OEM4","\\ | 反斜杠竖线键:OEM5","] } 右(中括号花括号键):OEM6",`' " 单引号双引号键:OEM7`,"= + 等于加号键:OEMPlus",", < 逗号小于号键:OEMComma",". > 句号大于号键:OEMPeriod","/ 斜杠键:Divide","* 乘号键:Multiply",". 小数点Del键:Decimal","+ 加号键:Add","- 减号键:Subtract","- _减号下划线键:OEMMinus"],xi={title:"按下组合键",targetMethodName:"combined",content:"先顺序依次按下按键，再逆序依次松开按键",args:[{name:"keys",componentType:"select",value:[],multiple:!0,notAllowCreate:!0,label:"键盘按键",options:et,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Si=`
function combined(
  keys:Key[]
):Promise<boolean>;
`,Ti={name:"combined",scope:"Input",exportFn:{fn:za},testModule:{weight:4,dialog:xi,callback:_i,document:wi},declaration:Si,auxiliary:Ba},mn=Object.freeze(Object.defineProperty({__proto__:null,combinedApi:Ti},Symbol.toStringTag,{value:"Module"})),qa=async(e,t)=>{const{notAllowedFnId:n}=P();if(t&&n.value.includes(t))return!1;try{return await O.keyDown(e)}catch(a){return console.error("keyDownFnError:",a),!1}},Ka={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="keyDown"&&s.scope==="Input").testModule.dialog;o.args[0].value=n[0]?.value||"A"},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.key}'`)}},Ii=async(e,t)=>{if(e.replaceCurFnArgs){const o=Ka.parameterReplace(e);return f.apiAutoTip(),o}e.delay>0&&await new Promise(o=>{const s=setTimeout(()=>{o(null),clearTimeout(s)},e.delay)}),console.time("keyDown耗时");const n=await qa(e.key);console.timeEnd("keyDown耗时"),t.showDetails(JSON.stringify(n),"keyDown");const a=w().find(o=>o.name==="keyDown"&&o.scope==="Input")?.testModule;a.document.example.code=`await Input.keyDown('${e.key}');`},ki={howToUse:"主动按下指定按键，按下后不会自动抬起，需要手动调用keyDown方法抬起按键",params:[{name:"key",required:!0,instructions:"抬起的按键",type:"Key",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//主动抬起A键
await Input.keyDown("A");
      `},searchKeys:["按下","输入","key","按键"],codeSnippet:"await Input.keyDown('${1:key}');"},Mi={title:"按下按键",targetMethodName:"keyDown",content:"主动按下指定按键，按下后不会自动抬起，需要手动调用keyUp方法抬起按键",args:[{name:"key",componentType:"select",value:"A",notAllowCreate:!0,label:"需要按下的按键",options:et,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},$i=`
function keyDown(
  key:Key
):Promise<boolean>;
`,Ci={name:"keyDown",scope:"Input",exportFn:{fn:qa},testModule:{weight:4,dialog:Mi,callback:Ii,document:ki},declaration:$i,auxiliary:Ka},gn=Object.freeze(Object.defineProperty({__proto__:null,keyDownApi:Ci},Symbol.toStringTag,{value:"Module"})),Ga=async(e,t)=>{const{notAllowedFnId:n}=P();if(t&&n.value.includes(t))return!1;try{return await O.keyUp(e)}catch(a){return console.error("keyUpFnError:",a),!1}},Ya={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="keyUp"&&s.scope==="Input").testModule.dialog;o.args[0].value=n[0]?.value||"A"},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.key}'`)}},Pi=async(e,t)=>{if(e.replaceCurFnArgs){const o=Ya.parameterReplace(e);return f.apiAutoTip(),o}e.delay>0&&await new Promise(o=>{const s=setTimeout(()=>{o(null),clearTimeout(s)},e.delay)}),console.time("keyUp耗时");const n=await Ga(e.key);console.timeEnd("keyUp耗时"),t.showDetails(JSON.stringify(n),"keyUp");const a=w().find(o=>o.name==="keyUp"&&o.scope==="Input")?.testModule;a.document.example.code=`await Input.keyUp('${e.key}');`},Fi={howToUse:"主动抬起指定按键",params:[{name:"key",required:!0,instructions:"抬起的按键",type:"Key",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//主动抬起A键
await Input.keyUp("A");`},searchKeys:["抬起","输入","key","按键"],codeSnippet:"await Input.keyUp('${1:key}');"},Ai={title:"抬起按键",targetMethodName:"keyUp",content:"主动抬起指定按键",args:[{name:"key",componentType:"select",value:"A",notAllowCreate:!0,label:"需要抬起的按键",options:et,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Oi=`
function keyUp(
  key:Key
):Promise<boolean>;
`,Di={name:"keyUp",scope:"Input",exportFn:{fn:Ga},testModule:{weight:4,dialog:Ai,callback:Pi,document:Fi},declaration:Oi,auxiliary:Ya},fn=Object.freeze(Object.defineProperty({__proto__:null,keyUpApi:Di},Symbol.toStringTag,{value:"Module"})),Wa=async(e,t)=>{const{notAllowedFnId:n}=P();if(t&&n.value.includes(t))return!1;try{return await O.pressKey(e)}catch(a){return console.error("pressFnError:",a),!1}},Xa={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="press"&&s.scope==="Input").testModule.dialog;o.args[0].value=n[0]?.value||"A"},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.key}'`)}},Ri=async(e,t)=>{if(e.replaceCurFnArgs){const o=Xa.parameterReplace(e);return f.apiAutoTip(),o}e.delay>0&&await new Promise(o=>{const s=setTimeout(()=>{o(null),clearTimeout(s)},e.delay)}),console.time("press耗时");const n=await Wa(e.key);console.timeEnd("press耗时"),t.showDetails(JSON.stringify(n),"press");const a=w().find(o=>o.name==="press"&&o.scope==="Input")?.testModule;a.document.example.code=`await Input.press('${e.key}');`},Ei={howToUse:"按下按键后松开",params:[{name:"key",required:!0,instructions:"按下的按键",type:"Key",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//按下A键后松开
await Input.press("A");`},searchKeys:["key","按键","按下","松开"],codeSnippet:"await Input.press('${1:key}');"},Vi={title:"按下按键",targetMethodName:"press",content:"按下按键后松开",args:[{name:"key",componentType:"select",value:"A",notAllowCreate:!0,label:"按下的按键",options:et,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Li=`
function press(
  key:Key
):Promise<boolean>;
`,Ni={name:"press",scope:"Input",exportFn:{fn:Wa},testModule:{weight:4,dialog:Vi,callback:Ri,document:Ei},declaration:Li,auxiliary:Xa},yn=Object.freeze(Object.defineProperty({__proto__:null,pressApi:Ni},Symbol.toStringTag,{value:"Module"})),Ja=async(e,t)=>{const{notAllowedFnId:n}=P();if(t&&n.value.includes(t))return!1;try{return await O.inputText(e)}catch(a){return console.error("textFnError:",a),!1}},Ha={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="text"&&s.scope==="Input").testModule.dialog.args.forEach((s,r)=>{r===0&&(s.value=n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.text}'`)}},Ui=async(e,t)=>{if(e.replaceCurFnArgs){const o=Ha.parameterReplace(e);return f.apiAutoTip(),o}e.delay>0&&await new Promise(o=>{const s=setTimeout(()=>{o(null),clearTimeout(s)},e.delay)}),console.time("text耗时");const n=await Ja(e.text);console.timeEnd("text耗时"),t.showDetails(JSON.stringify(n),"text");const a=w().find(o=>o.name==="text"&&o.scope==="Input")?.testModule;a.document.example.code=`await Input.text('${e.text}');`},ji={howToUse:"输入字符串",params:[{name:"text",required:!0,instructions:"需要输入的内容",type:"string",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//输入"abc"
await Input.text("abc");`},searchKeys:["text","输入","input","文本"],codeSnippet:"await Input.text('${1:text}');"},zi={title:"输入字符串",targetMethodName:"text",content:"输入一串指定字符串",args:[{name:"text",componentType:"input",value:"",label:"输入的内容"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Bi=`
function text(
  text:string
):Promise<{
  code: number;
  message: string;
}>;
`,qi={name:"text",scope:"Input",exportFn:{fn:Ja},testModule:{weight:4,dialog:zi,callback:Ui,document:ji},declaration:Bi,auxiliary:Ha},bn=Object.freeze(Object.defineProperty({__proto__:null,textApi:qi},Symbol.toStringTag,{value:"Module"})),Za={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="click"&&s.scope==="Mouse").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:case 1:case 3:s.value=+n[r]?.value||0;break;case 2:s.componentType==="select"&&(s.value=n[r]?.value||"left");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.x}, ${e.y}${e.button===void 0||e.button==="left"?"":", '"+e.button+"'"}`)}},Ki=async(e,t)=>{if(e.replaceCurFnArgs){const a=Za.parameterReplace(e);return f.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const o=setTimeout(()=>{a(null),clearTimeout(o)},e.delay)}),console.time("click耗时"),await Pt(e.x,e.y,e.button),console.timeEnd("click耗时"),t.showDetails("点击完成","click");const n=w().find(a=>a.name==="click"&&a.scope==="Mouse")?.testModule;n.document.example.code=`await Mouse.click(${e.x}, ${e.y}, '${e.button||"left"}');`},Gi={howToUse:"鼠标移动到指定位置进行[左键/中键/右键]点击,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"鼠标移动到的X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"鼠标移动到的Y坐标",type:"number",default:""},{name:"button",required:!1,instructions:"点击的鼠标键，默认值为左键",type:["left","right","middle"],default:"left"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)并点击(左键)
await Mouse.click(100,100);
//鼠标移动到(100,100)并点击(右键)
await Mouse.click(100,100,"right");
//鼠标移动到(100,100)并点击(中键)
await Mouse.click(100,100,"middle");
      `},searchKeys:["鼠标","mouse","左键","中键","右键","点击","移动"],codeSnippet:"await Mouse.click(${1:x}, ${2:y});"},Yi={title:"鼠标点击",targetMethodName:"click",content:"鼠标移动到指定位置进行[左键/右键/中键]点击,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"button",componentType:"select",value:"left",notAllowCreate:!0,label:"鼠标按键",options:["left","right","middle"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Wi=`
function click(
  x: number,
  y: number,
  button?: "left" | "right" | "middle"
):Promise<boolean>;
`,Xi={name:"click",scope:"Mouse",exportFn:{fn:Pt},testModule:{weight:4,dialog:Yi,callback:Ki,document:Gi},declaration:Wi,auxiliary:Za},hn=Object.freeze(Object.defineProperty({__proto__:null,clickApi:Xi},Symbol.toStringTag,{value:"Module"})),st=async()=>!1,Qa=async(e,t=50,n="left",a)=>{const{notAllowedFnId:o}=P();if(a&&o.value.includes(a))return st;try{e<0&&(e=0),t<0&&(t=0);const r=["left","middle","right"].indexOf(n);return r===-1?(oe.error("暂不支持的鼠标按键类型"+n),st):await O.startClicker(e,t,r)?async()=>await O.stopClicker():st}catch(s){console.error("clickFnError:",s),oe.error("clickFnError:"+s)}return st},eo={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="clicker"&&s.scope==="Mouse").testModule.dialog.args.forEach((s,r)=>{r!==2?s.value=+n[r]?.value||0:s.componentType==="select"&&(s.value=n[r]?.value||"left")})},parameterReplace:e=>{e.button==="left"?e.replaceCurFnArgs(`${e.duration}, ${e.sleep}`):e.replaceCurFnArgs(`${e.duration}, ${e.sleep}, '${e.button}'`)}},Ji=async(e,t)=>{if(e.replaceCurFnArgs){const a=eo.parameterReplace(e);return f.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const o=setTimeout(()=>{a(null),clearTimeout(o)},e.delay)}),console.time("clicker耗时"),await Qa(e.duration,e.sleep,e.button),console.timeEnd("clicker耗时"),t.showDetails("点击完成","clicker");const n=w().find(a=>a.name==="clicker"&&a.scope==="Mouse")?.testModule;e.button==="left"?n.document.example.code=`await Mouse.clicker(${e.duration}, ${e.sleep});`:n.document.example.code=`await Mouse.clicker(${e.duration}, ${e.sleep}, '${e.button}');`},Hi={howToUse:"鼠标左键进行连续点击一段时间",params:[{name:"duration",required:!0,instructions:"连续点击时间(s)",type:"number",default:""},{name:"sleep",required:!1,instructions:"点击间隔时间(ms)",type:"number",default:"50"},{name:"button",required:!1,instructions:"鼠标按键",type:["'left'","'right'","'middle'"],default:"'left'"}],returnValue:{instructions:"返回一个停止点击器的函数，调用此函数可停止连续点击。",type:"Promise<() => Promise<void>>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)
await Mouse.move(100,100);
//调用点击器，连续点击鼠标右键5s，点击间隔10ms
const stop = await Mouse.clicker(5,10, 'right');
//3s后停止点击
await sleep(3000);
await stop();
      `},searchKeys:["鼠标","mouse","左键","连续","点击"],codeSnippet:"await Mouse.clicker(${1:duration}, ${2:sleep});"},Zi={title:"鼠标点击器",targetMethodName:"clicker",content:"鼠标左键进行连续点击一段时间",args:[{name:"duration",componentType:"numberInput",value:1,label:"连续点击时间(s)"},{name:"sleep",componentType:"numberInput",value:50,label:"点击间隔时间(ms)"},{name:"button",componentType:"select",value:"left",label:"鼠标按键",options:["left","middle","right"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Qi=`
function clicker(
  duration: number,
  sleep?: number,
  button?: 'left' | 'right' | 'middle',
):Promise<() => Promise<boolean>>;
`,ec={name:"clicker",scope:"Mouse",exportFn:{fn:Qa},testModule:{weight:4,dialog:Zi,callback:Ji,document:Hi},declaration:Qi,auxiliary:eo},vn=Object.freeze(Object.defineProperty({__proto__:null,clickerApi:ec},Symbol.toStringTag,{value:"Module"})),to=async(e,t,n="left",a)=>{const{notAllowedFnId:o}=P();if(a&&o.value.includes(a))return!1;try{const s=await Ue(e,t);return await O.mouseDown(s.x,s.y,n)}catch(s){return console.error("clickFnError:",s),!1}},no={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="down"&&s.scope==="Mouse").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:case 1:case 3:s.value=+n[r]?.value||0;break;case 2:s.componentType==="select"&&(s.value=n[r]?.value||"left");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.x}, ${e.y}${e.button===void 0||e.button==="left"?"":", '"+e.button+"'"}`)}},tc=async(e,t)=>{if(e.replaceCurFnArgs){const a=no.parameterReplace(e);return f.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const o=setTimeout(()=>{a(null),clearTimeout(o)},e.delay)}),console.time("down耗时"),await to(e.x,e.y,e.button),console.timeEnd("down耗时"),t.showDetails("鼠标按键按下完成","down");const n=w().find(a=>a.name==="down"&&a.scope==="Mouse")?.testModule;n.document.example.code=`await Mouse.down(${e.x}, ${e.y}, '${e.button||"left"}');`},nc={howToUse:"鼠标移动到指定位置进行[左键/右键/中键]的按下（不会主动抬起）,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"鼠标移动到的X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"鼠标移动到的Y坐标",type:"number",default:""},{name:"button",required:!1,instructions:"需要按下的鼠标键，默认值为左键",type:["left","right","middle"],default:"left"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)并按下(左键)
await Mouse.down(100,100);
//鼠标移动到(100,100)并按下(右键)
await Mouse.down(100,100,"right");
//鼠标移动到(100,100)并按下(中键)
await Mouse.down(100,100,"middle");
      `},searchKeys:["鼠标","mouse","左键","中键","右键","按下","移动"],codeSnippet:"await Mouse.down(${1:x}, ${2:y});"},ac={title:"鼠标按键按下",targetMethodName:"down",content:"鼠标移动到指定位置进行[左键/右键/中键]的按下（不会自动抬起）,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"button",componentType:"select",value:"left",notAllowCreate:!0,label:"鼠标按键",options:["left","right","middle"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},oc=`
function down(
  x: number,
  y: number,
  button?: "left" | "right" | "middle"
):Promise<boolean>;
`,sc={name:"down",scope:"Mouse",exportFn:{fn:to},testModule:{weight:4,dialog:ac,callback:tc,document:nc},declaration:oc,auxiliary:no},_n=Object.freeze(Object.defineProperty({__proto__:null,downApi:sc},Symbol.toStringTag,{value:"Module"})),ao=async(e,t,n,a,o,s)=>{const{notAllowedFnId:r}=P();if(s&&r.value.includes(s))return!1;if(n<0||a<0)return console.error("只有起点坐标可以使用负数代表鼠标当前位置"),!1;try{const l=e<0||t<0?{x:-1,y:-1}:await Ue(e,t),i=await Ue(n,a);return await O.drag(l.x,l.y,i.x,i.y,o)}catch(l){return console.error("dragFnError:",l),!1}},oo={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="drag"&&s.scope==="Mouse").testModule.dialog.args.forEach((s,r)=>{s.value=+n[r]?.value||0})},parameterReplace:e=>{if(e.duration&&e.duration>0){e.replaceCurFnArgs(`${e.x}, ${e.y}, ${e.toX}, ${e.toY}, ${e.duration}`);return}e.replaceCurFnArgs(`${e.x}, ${e.y}, ${e.toX}, ${e.toY}`)}},rc=async(e,t)=>{if(e.replaceCurFnArgs)oo.parameterReplace(e);else{e.delay>0&&await new Promise(o=>{const s=setTimeout(()=>{o(null),clearTimeout(s)},e.delay)}),console.time("drag耗时");const n=await ao(e.x,e.y,e.toX,e.toY,e.duration);console.timeEnd("drag耗时"),t.showDetails("鼠标拖动完成","Mouse.drag");const a=w().find(o=>o.name==="drag"&&o.scope==="Mouse")?.testModule;if(!a){console.error("找不到selfModule");return}e.duration>0?a.document.example.code=`await Mouse.drag(${e.x}, ${e.y}, ${e.toX}, ${e.toY}, ${e.duration});`:a.document.example.code=`await Mouse.drag(${e.x}, ${e.y}, ${e.toX}, ${e.toY});`}},lc={howToUse:"拖动鼠标到指定位置[x或y的值任意<0时为表示使用当前鼠标位置作为起点],位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"y坐标",type:"number",default:""},{name:"toX",required:!0,instructions:"目标x坐标(>=0)",type:"number",default:""},{name:"toY",required:!0,instructions:"目标y坐标(>=0)",type:"number",default:""},{name:"duration",required:!1,instructions:"拖动时间",type:"number",default:"0"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//从当前鼠标位置拖动到100,100
await Mouse.drag(-1, -1, 100, 100);
//从当前鼠标位置使用500ms拖动到100,100
await Mouse.drag(-1, -1, 100, 100, 500);
    `},searchKeys:["鼠标","mouse","拖动","模拟"],codeSnippet:"await Mouse.drag(${1:x}, ${2:y}, ${3:toX}, ${4:toY});"},ic={title:"拖动鼠标到指定位置",targetMethodName:"drag",content:"拖动鼠标到指定位置[x或y的值任意<0时为表示使用当前鼠标位置作为起点],位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"toX",componentType:"numberInput",value:0,label:"目标x坐标(>=0)"},{name:"toY",componentType:"numberInput",value:0,label:"目标y坐标(>=0)"},{name:"duration",componentType:"numberInput",value:0,label:"拖动时间(ms)"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},cc=`
function drag(
    x: number,
    y: number,
    toX: number,
    toY: number,
    duration?: number,
):Promise<boolean>;
`,uc={name:"drag",scope:"Mouse",exportFn:{fn:ao},testModule:{weight:4,dialog:ic,callback:rc,document:lc},declaration:cc,auxiliary:oo},wn=Object.freeze(Object.defineProperty({__proto__:null,dragApi:uc},Symbol.toStringTag,{value:"Module"})),so=async(e,t,n=!1,a)=>{const{notAllowedFnId:o}=P();if(a&&o.value.includes(a))return!1;try{const s=await Ue(e,t);return await O.move(s.x,s.y,n)}catch(s){return console.error("moveFnError:",s),!1}},ro={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="move"&&s.scope==="Mouse").testModule.dialog.args.forEach((s,r)=>{r===2?s.value=n[r].value||!1:s.value=+n[r]?.value||0})},parameterReplace:e=>{if(e.isRelative){e.replaceCurFnArgs(`${e.x}, ${e.y}, true`);return}e.replaceCurFnArgs(`${e.x}, ${e.y}`)}},dc=async(e,t)=>{if(e.replaceCurFnArgs)ro.parameterReplace(e);else{e.delay>0&&await new Promise(o=>{const s=setTimeout(()=>{o(null),clearTimeout(s)},e.delay)}),console.time("move耗时");const n=await so(e.x,e.y,e.isRelative);console.timeEnd("move耗时"),n!==void 0?t.showDetails("移动鼠标完成","Mouse.move"):t.showDetails("移动鼠标失败","Mouse.move");const a=w().find(o=>o.name==="move"&&o.scope==="Mouse")?.testModule;if(!a){console.error("找不到selfModule");return}e.isRelative?a.document.example.code=`await Mouse.move(${e.x}, ${e.y}, true);`:a.document.example.code=`await Mouse.move(${e.x}, ${e.y});`}},pc={howToUse:"鼠标移动到指定[绝对/相对]坐标,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"y坐标",type:"number",default:""},{name:"isRelative",required:!1,instructions:"相对当前位置移动",type:"boolean",default:"false"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//移动到(100,100)坐标
await Mouse.move(100, 100);
//鼠标往上移动100，往右移动100
await Mouse.move(100, -100, true);
    `},searchKeys:["鼠标","mouse","移动","模拟"],codeSnippet:"await Mouse.move(${1:x}, ${2:y});"},mc={title:"模拟鼠标移动",targetMethodName:"move",content:"模拟鼠标移动到指定坐标,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"isRelative",componentType:"switch",value:!1,label:"相对当前位置移动",activeText:"相对移动",inactiveText:"绝对移动"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},gc=`
function move(
    x: number,
    y:number,
    isRelative?: boolean
):Promise<boolean>;
`,fc={name:"move",scope:"Mouse",exportFn:{fn:so},testModule:{weight:4,dialog:mc,callback:dc,document:pc},declaration:gc,auxiliary:ro},xn=Object.freeze(Object.defineProperty({__proto__:null,moveApi:fc},Symbol.toStringTag,{value:"Module"})),lo=async e=>{const{notAllowedFnId:t}=P();if(e&&t.value.includes(e))return{x:-1,y:-1};try{return await O.getMousePos()}catch(n){return console.error(n),{x:-1,y:-1}}},yc=async(e,t)=>{console.time("Mouse.pos耗时");const{x:n,y:a}=await lo();console.log(n,a),console.timeEnd("Mouse.pos耗时"),t.showDetails(`鼠标位置：${n},${a}`)},bc={title:"获取鼠标位置",targetMethodName:"pos",notOpen:!0},hc={howToUse:"获取鼠标位置",returnValue:{type:"Promise<{ x: number, y: number }>"},example:{code:"const {x, y} = await Mouse.pos();"},searchKeys:["鼠标","位置","获取"],codeSnippet:"const {x, y} = await Mouse.pos();"},vc=`
function pos():Promise<{x:number; y:number;}>;
`,_c={name:"pos",scope:"Mouse",exportFn:{fn:lo},testModule:{weight:1,callback:yc,dialog:bc,document:hc},declaration:vc},Sn=Object.freeze(Object.defineProperty({__proto__:null,posApi:_c},Symbol.toStringTag,{value:"Module"})),io=async(e,t,n=[[0,0],[0,0]],a)=>{const{notAllowedFnId:o}=P();if(a&&o.value.includes(a))return!1;try{const[s,r]=n[0],[l,i]=n[1];let u={x:e,y:t};return s===0&&r===0||(u.x+=Math.round(s+Math.random()*(r-s))),l===0&&i===0||(u.y+=Math.round(l+Math.random()*(i-l))),await O.move(e,t)}catch(s){return console.error(s),!1}},wc={title:"将鼠标移动到指定位置并产生随机偏移",targetMethodName:"randomMove",content:"输入指定位置的x、y坐标，xRandomRange和yRandomRange可以让该坐标随机产生一定程度偏移",args:[{name:"x",componentType:"numberInput",label:"目标位置x坐标",value:0},{name:"y",componentType:"numberInput",label:"目标位置y坐标",value:0},{name:"xRandomRange",componentType:"numberRangeInput",label:"x轴随机偏移范围",value:[0,0]},{name:"yRandomRange",componentType:"numberRangeInput",label:"y轴随机偏移范围",value:[0,0]}]},co={onDialogOpen:async(e,...t)=>{let n=await f.paramsProcess(...t);w().find(s=>s.name==="randomMove"&&s.scope==="Mouse").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:case 1:s.value=+n[r]?.value||0;break;case 2:case 3:const l=[0,0];s.value=n[r]?.value||l;break}})},parameterReplace:e=>{e.xRandomRange[0]===0&&e.xRandomRange[1]===0&&e.yRandomRange[0]===0&&e.yRandomRange[1]===0?e.replaceCurFnArgs(`${e.x}, ${e.y}`):e.replaceCurFnArgs(`${e.x}, ${e.y}, [[${e.xRandomRange[0]}, ${e.xRandomRange[1]}], [${e.yRandomRange[0]}, ${e.yRandomRange[1]}]]`)}},xc=async(e,t)=>{if(e.replaceCurFnArgs){const o=co.parameterReplace(e);return f.apiAutoTip(),o}console.time("randomMove");const n=await io(e.x,e.y,[e.xRandomRange,e.yRandomRange]);console.timeEnd("randomMove"),t.showDetails(JSON.stringify(n));const a=w().find(o=>o.name==="randomMove"&&o.scope==="Mouse")?.testModule;a&&(a.document.example.code=`await Mouse.randomMove(${e.x}, ${e.y}, [[${e.xRandomRange[0]}, ${e.xRandomRange[1]}], [${e.yRandomRange[0]}, ${e.yRandomRange[1]}]]);`.replace(", [[0, 0], [0, 0]]",""))},Sc={howToUse:"将鼠标移动到指定位置",params:[{name:"x",required:!0,instructions:"目标位置x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"目标位置y坐标",type:"number",default:""},{name:"randomRange",required:!1,instructions:"随机偏移",type:"[[number,number],[number,number]]",default:"[[0,0],[0,0]]"}],returnValue:{type:"Promise<boolean>",instructions:"移动结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"await randomMove(100,100);"},searchKeys:["mouse","random","move","移动","随机"],codeSnippet:"await Mouse.randomMove(${1:x}, ${2:y}, ${3:[[0,0],[0,0]]});"},Tc=`
function randomMove(x: number, y: number, randomRange?:[[number,number],[number,number]]):Promise<boolean>;
`,Ic={name:"randomMove",scope:"Mouse",exportFn:{fn:io},testModule:{weight:2,dialog:wc,callback:xc,document:Sc},declaration:Tc,auxiliary:co},Tn=Object.freeze(Object.defineProperty({__proto__:null,randomMoveApi:Ic},Symbol.toStringTag,{value:"Module"})),kc=(e,t)=>{const{notAllowedFnId:n}=P();if(!(t&&n.value.includes(t)))try{window[C]?.Mouse?.__NS_DATA__?window[C].Mouse.__NS_DATA__=e:console.error("setMouseOptionFnError:","Mouse未被初始化")}catch(a){console.error("setMouseOptionFnError:",a)}},Mc=async(e,t)=>{t.showDetails("此方法无法直接调用，请在脚本中使用！","Mouse.setMouseOption")},$c={howToUse:"设置Mouse模块的选项。",params:[{name:"option",required:!0,instructions:"可以设置点击随机偏移、基准屏幕像素等选项",type:"MouseOption",default:"{}"}],returnValue:{type:"void"},example:{code:`//设置鼠标随机偏移、设置基准屏幕像素 设置完成之后，鼠标点击、拖动等API会受到这些选项的影响
Mouse.setMouseOption({
  randomOffset: [
    [-2, 2], //x坐标偏移量[最小值,最大值]
    [-1, 1]  //y坐标偏移量[最小值,最大值]
  ],
  baseSize: [1920, 1080] //基准屏幕像素
});
`},searchKeys:["config","option","mouse","randomOffset","baseSize","鼠标","配置","选项"],codeSnippet:`Mouse.setMouseOption({
  \${1:randomOffset: [
    [0, 0], //x坐标偏移量[最小值,最大值]
    [0, 0]  //y坐标偏移量[最小值,最大值]
  ],}
  \${2:baseSize: [1920, 1080] //基准屏幕像素}
});\${0}
`},Cc=`
type MouseOption = {
  randomOffset?: [
    //随机偏移量
    [number, number], //x坐标偏移量[最小值,最大值]
    [number, number] //y坐标偏移量[最小值,最大值]
  ];
  baseSize?: [number, number]; //基准屏幕像素
};
function setMouseOption(
  option: MouseOption,
):void;
`,Pc={name:"setMouseOption",scope:"Mouse",exportFn:{fn:kc},testModule:{weight:4,dialog:{notOpen:!0,title:"设置鼠标模块配置",targetMethodName:"setMouseOption"},callback:Mc,document:$c},declaration:Cc},In=Object.freeze(Object.defineProperty({__proto__:null,setMouseOptionApi:Pc},Symbol.toStringTag,{value:"Module"})),uo=async(e,t,n="left",a)=>{const{notAllowedFnId:o}=P();if(a&&o.value.includes(a))return!1;try{const s=await Ue(e,t);return await O.mouseUp(s.x,s.y,n)}catch(s){return console.error("upFnError:",s),!1}},po={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="up"&&s.scope==="Mouse").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:case 1:case 3:s.value=+n[r]?.value||0;break;case 2:s.componentType==="select"&&(s.value=n[r]?.value||"left");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.x}, ${e.y}${e.button===void 0||e.button==="left"?"":", '"+e.button+"'"}`)}},Fc=async(e,t)=>{if(e.replaceCurFnArgs){const a=po.parameterReplace(e);return f.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const o=setTimeout(()=>{a(null),clearTimeout(o)},e.delay)}),console.time("up耗时"),await uo(e.x,e.y,e.button),console.timeEnd("up耗时"),t.showDetails("鼠标按键抬起完成","up");const n=w().find(a=>a.name==="up"&&a.scope==="Mouse")?.testModule;n.document.example.code=`await Mouse.up(${e.x}, ${e.y}, '${e.button||"left"}');`},Ac={howToUse:"鼠标移动到指定位置进行[左键/右键/中键]抬起，一般用于鼠标按键按下API调用之后主动抬起,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"鼠标移动到的X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"鼠标移动到的Y坐标",type:"number",default:""},{name:"button",required:!1,instructions:"抬起的鼠标键，默认值为左键",type:["left","right","middle"],default:"left"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)并抬起(左键)
await Mouse.up(100,100);
//鼠标移动到(100,100)并抬起(右键)
await Mouse.up(100,100,"right");
//鼠标移动到(100,100)并抬起(中键)
await Mouse.up(100,100,"middle");
      `},searchKeys:["鼠标","mouse","左键","中键","右键","抬起","移动"],codeSnippet:"await Mouse.up(${1:x}, ${2:y});"},Oc={title:"鼠标按键抬起",targetMethodName:"up",content:"鼠标移动到指定位置进行[左键/右键/中键]抬起，一般用于鼠标按键按下API调用之后主动抬起,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"button",componentType:"select",value:"left",notAllowCreate:!0,label:"鼠标按键",options:["left","right","middle"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Dc=`
function up(
  x: number,
  y: number,
  button?: "left" | "right" | "middle"
):Promise<boolean>;
`,Rc={name:"up",scope:"Mouse",exportFn:{fn:uo},testModule:{weight:4,dialog:Oc,callback:Fc,document:Ac},declaration:Dc,auxiliary:po},kn=Object.freeze(Object.defineProperty({__proto__:null,upApi:Rc},Symbol.toStringTag,{value:"Module"})),mo=async(e,t)=>{const{notAllowedFnId:n}=P();if(t&&n.value.includes(t))return!1;try{return await O.wheel(e)}catch(a){return console.error("wheelFnError:",a),!1}},go={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="wheel"&&s.scope==="Mouse").testModule.dialog.args.forEach((s,r)=>{s.value=+n[r]?.value||0})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.delta}`)}},Ec=async(e,t)=>{if(e.replaceCurFnArgs){const o=go.parameterReplace(e);return f.apiAutoTip(),o}e.delay>0&&await new Promise(o=>{const s=setTimeout(()=>{o(null),clearTimeout(s)},e.delay)}),console.time("wheel耗时");const n=await mo(e.delta);console.timeEnd("wheel耗时"),t.showDetails(n||"OK","wheel");const a=w().find(o=>o.name==="wheel"&&o.scope==="Mouse")?.testModule;a.document.example.code=`await Mouse.wheel(${e.delta}');`},Vc={howToUse:"鼠标滚轮滚动",params:[{name:"delta",required:!0,instructions:"滚动的距离，正数向下滚动，负数向上滚动",type:"number",default:"10"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//向下滚动10
await Mouse.wheel(10);`},searchKeys:["鼠标","mouse","滚动","滚轮"],codeSnippet:"await Mouse.wheel(${1:delta});"},Lc={title:"鼠标滚轮滚动",targetMethodName:"wheel",content:"模拟鼠标滚轮滚动",args:[{name:"delta",componentType:"numberInput",value:0,label:"滚动的距离，正数向下滚动，负数向上滚动"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Nc=`
function wheel(
  delta: number,
):Promise<boolean>;
`,Uc={name:"wheel",scope:"Mouse",exportFn:{fn:mo},testModule:{weight:4,dialog:Lc,callback:Ec,document:Vc},declaration:Nc,auxiliary:go},Mn=Object.freeze(Object.defineProperty({__proto__:null,wheelApi:Uc},Symbol.toStringTag,{value:"Module"})),jc={howToUse:"构建与用户交互的表单",params:[{name:"buildFormList",required:!1,instructions:"表单组件数组",type:"BuildFormItems[]",default:"[]",children:[{name:"BuildFormItems",required:!1,instructions:"表单组件",type:["BuildFormItem.Input "," BuildFormItem.MultipleSelect "," BuildFormItem.GroupSelect "," BuildFormItem.Select "," BuildFormItem.Check"],default:" ",children:[{name:"BuildFormItem.Input",required:!1,instructions:"输入框组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"input"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"输入框的(默认)值",type:"string",default:"",children:[]}]},{name:"BuildFormItem.MultipleSelect",required:!1,instructions:"多选分组组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:"“multiplSelect”",default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选中的(默认)值",type:"string[]",default:"",children:[]},{name:"options",required:!0,instructions:"选项",type:"GroupItem[]",default:"",children:[{name:"groupLabel",required:!0,instructions:"分组标签",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"分组中的选项",type:"OptionItem[]",default:"",children:[{name:"label",required:!0,instructions:"选项标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选项值",type:"string",default:"",children:[]}]}]},{name:"limit",required:!1,instructions:"最大选中数量",type:"number",default:"",children:[]}]},{name:"BuildFormItem.GroupSelect",required:!1,instructions:"单选分组组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"groupSelect"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选中的值",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"选项",type:"GroupItem[]",default:"",children:[{name:"groupLabel",required:!0,instructions:"分组标签",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"分组中的选项",type:"OptionItem[]",default:"",children:[{name:"label",required:!0,instructions:"选项标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选项值",type:"string",default:"",children:[]}]}]}]},{name:"BuildFormItem.Select",required:!1,instructions:"单选组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"select"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选中的值",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"选项数组",type:"string[]",default:"",children:[]}]},{name:"BuildFormItem.Check",required:!1,instructions:"复选框组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"check"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"checked",required:!0,instructions:"是否选中",type:"boolean",default:"",children:[]}]}]}]}],returnValue:{type:"void"},example:{title:"构建与用户交互的表单",code:"buildForm([]);"},searchKeys:["build","from"],codeSnippet:"buildForm(${1:buildFormList});${0:}"},ce=en("listStore",{state:()=>({rendererList:[],scriptList:[],projectList:[],deviceList:[],codeSnippets:[]}),getters:{},actions:{async exportData(){const e={version:"playground"};return Object.assign(e,this.$state),JSON.stringify(e)},async importData(e){const t=JSON.parse(e);delete t.version,Object.assign(this.$state,t),this.$patch(t)},async init(){this.$subscribe(async(t,n)=>{t.storeId==="listStore"&&localStorage.setItem("listStore",await this.exportData())},{detached:!1});const e=window.localStorage.getItem("listStore");e&&await this.importData(e)}}});class zc{constructor(t){this.form=t}getFieldValue=(t,n,a,o="*脚本设置")=>{const s=this.form.find(l=>l.groupLabel===o),r=t.replace("List","")+"List";if(s&&s.enable&&r in s){const l=s[r].find(i=>i.label===n);if(l)return"checked"in l?l.checked:l.value}return a};getFieldValueById=(t,n)=>{let a=n;return this.form.filter(o=>o.enable).find(o=>{const r=Object.keys(o).map(l=>{if(l.includes("List"))return o[l]}).filter(l=>!!l).flat().find(l=>l.id===t);if(r)return"checked"in r?a=r.checked:"value"in r&&(a=r.value),!0}),a};static genId=t=>t.map(n=>{const a={id:"g_"+ye(),...n};return Object.keys(a).forEach(o=>{o.includes("List")&&(a[o]=a[o].map(s=>({id:"i_"+ye(),...s})))}),a})}const Bc=e=>JSON.parse(JSON.stringify(e)).map(n=>({...n,pickerList:n.pickerList.map(a=>{if(a.pickerType==="color")a.predefine&&(a.predefine=a.predefine.filter(o=>!!(o.includes("#")||o.includes("rgb"))));else if(a.isRange)a.value=a.value.filter(o=>o).map(o=>{if("valueFormat"in a){const s=ft(o,a.valueFormat);return s.isValid()?s.toLocaleString():new Date().toLocaleString()}return typeof o=="string"?o:o.toLocaleString()});else if("valueFormat"in a){const o=ft(a.value,a.valueFormat);o.isValid()?a.value=o.toLocaleString():a.value=new Date().toLocaleString()}else typeof a.value!="string"&&a.value?a.value=a.value.toLocaleString():a.value=new Date().toLocaleString();return a})})),py=e=>{const t=JSON.parse(JSON.stringify(e)).map(n=>({...n,pickerList:n.pickerList.map(a=>(a.pickerType!=="color"&&(a.isRange?(a.value.length||(a.value=[new Date,new Date]),a.value=a.value.map(o=>(o=new Date,"valueFormat"in a?ft(o).format(a.valueFormat):o))):(a.value=new Date(a.value),"valueFormat"in a&&(a.value=ft(a.value).format(a.valueFormat)))),a))}));return console.log("-----------res:",JSON.parse(JSON.stringify(t.map(n=>n.pickerList)))),t};let qt="";const fo=e=>{qt="";const t=e?.envSetting.workDir?.replaceAll("\\","\\\\")||"",n=e?.envSetting._screenshotDir?.replaceAll("\\","\\\\")||"",a=e?.envSetting.screenshotSavePath?.replaceAll("\\","\\\\")||"",o=e?.envSetting._scriptRootDir?.replaceAll("\\","\\\\")||"",s={WORK_DIR:t,SCREEN_SHOT_DIR:n,SCREEN_SHOT_PATH:a,SCRIPT_ROOT_DIR:o};return Object.keys(s).map(l=>(qt+=`declare const ${l}: string;
`,`const ${l} = "${s[l]}";`)).join(`
`)},qc=()=>fo(),Kc=()=>qt,yo=`
declare enum FieldType {
  /**
   * @description BuildForm中，type为"check"的表单项
   */
  Check = "check",
  /**
   * @description BuildForm中，type为"input"的表单项
   */
  Input = "input",
  /**
   * @description BuildForm中，type为"select"的表单项
   */
  Select = "select",
  /**
   * @description BuildForm中，type为"picker"的表单项
   */
  Picker = "picker",
  /**
   * @deprecated 请使用FieldType.Check代替,将在未来版本中移除
   */
  CheckList = "checkList",
  /**
   * @deprecated 请使用FieldType.Input代替,将在未来版本中移除
   */
  InputList = "inputList",
  /**
   * @deprecated 请使用FieldType.Select代替,将在未来版本中移除
   */
  SelectList = "selectList",
  /**
   * @deprecated 请使用FieldType.Picker代替,将在未来版本中移除
   */
  PickerList = "pickerList",
}
`,Gc=yo.replace(/declare enum/g,"enum"),[Yc,Wc]=Ie("mockScriptList",{defaultValue:[]}),[Xc,Jc]=Ie("mockCodeSnippetList",{defaultValue:[{id:ye(),name:"logtype",filePath:"内部存储",description:"编辑器输入logtype以插入本片段",prefix:"logtype",content:'["loading", "success", "danger", "warning", "info"]'}]}),Kt=S(JSON.parse(JSON.stringify(Yc.value))||[]),Gt=S(JSON.parse(JSON.stringify(Xc.value))||[]);pe(Kt,()=>{Wc(Kt.value)},{deep:!0});pe(Gt,()=>{Jc(Gt.value)},{deep:!0});const Oe=()=>({mockScriptList:Kt,mockCodeSnippetList:Gt}),$n=e=>{if(!(e==null||e==="")){if(navigator)navigator.clipboard.writeText(e);else{const t=document.createElement("INPUT");t.style.opacity="0",t.style.position="absolute",t.style.top="-1000px",document.body.appendChild(t),t.value=e,t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy"),document.body.removeChild(t)}return e}},Hc=(e,t="dot")=>{const{x:n,y:a,width:o,height:s}=e;let r="";t==="dot"?r=`${n},${a},${o},${s}`:r=`{"x":${n},"y":${a},"width":${o},"height":${s}}`,$n(r)},Zc=e=>Cs(e),Qc=()=>Ps();let rt=[];const pa=async e=>{if(!e){const{rendererList:a}=ce();e=a}if(e.find(a=>a.groupLabel==="*脚本设置")?.checkList.find(a=>a.label==="导入上次运行配置")?.checked){await Ge();const a=JSON.parse(JSON.stringify(e));rt=JSON.parse(JSON.stringify(e));const o=localStorage.getItem(window[C].getScriptId()+"-rendererList");if(o){const s=JSON.parse(o);for(let r=0;r<a.length;r++){const l=a[r],i=s.find(u=>u.groupLabel===l.groupLabel);if(i){l.enable=i.enable;for(let u=0;u<l.selectList.length;u++){const g=l.selectList[u],p=i.selectList.find(v=>v.label===g.label);if(p&&!p.segmented){let v=[],b;p.group?v=p.options.flatMap(_=>_.options.map(I=>typeof I=="object"?I.value:I)):v=p.options.map(_=>typeof _=="object"?_.value:_),p.multiple?Array.isArray(p.value)?b=p.value.filter(_=>v.includes(_)):console.warn("表单结构发生变化,跳过导入本项的值",JSON.stringify(p)):Array.isArray(p.value)?console.warn("表单结构发生变化,跳过导入本项的值",JSON.stringify(p)):b=v.includes(p.value)?p.value:g.value,g.value=b}else if(p&&p.segmented){const v=p.options.map(b=>b instanceof Object?b.value:b);g.segmented&&v.includes(g.value)&&(g.value=p.value)}}for(let u=0;u<l.checkList.length;u++){const g=l.checkList[u],p=i.checkList.find(v=>v.label===g.label);p&&(g.checked=p.checked)}for(let u=0;u<l.inputList.length;u++){const g=l.inputList[u],p=i.inputList.find(v=>v.label===g.label);p&&(g.value=p.value)}for(let u=0;u<l.pickerList.length;u++){const g=l.pickerList[u],p=i.pickerList.find(v=>v.label===g.label);p&&(g.value=p.value)}}}a.find(r=>{if(r.groupLabel==="*脚本设置"){r.checkList.find(l=>l.label==="导入上次运行配置").checked=!0;return}}),e.splice(0,e.length,...a)}G.closeAll(),G({title:"配置导入完成",type:"success",position:"bottom-right"})}else{const{openId:a}=Fe();if(a.value==="-1")return;G.closeAll(),G({title:"取消配置导入",type:"info",position:"bottom-right"}),rt.find(o=>{if(o.groupLabel==="*脚本设置"){o.checkList.find(s=>s.label==="导入上次运行配置").checked=!1;return}}),rt.length?e.splice(0,e.length,...rt):e.splice(0,e.length,...e)}},Cn=()=>{const{rendererList:e}=ce();setTimeout(()=>{window[C].rendererList=e})},bo=e=>{const{rendererList:t}=ce();t.splice(0,t.length,...e),Cn()},ho=(e,t=!0)=>{const{rendererList:n}=ce(),a=n.findIndex(o=>o.groupLabel===e.targetGroupLabel);if(a===-1){const o={groupLabel:e.targetGroupLabel,enable:e.enable===void 0?!0:e.enable,checkList:[],selectList:[],inputList:[],pickerList:[]};o[e.type+"List"]=[e],n.push(o)}else n[a][e.type+"List"].push(e);t&&Cn()},eu=e=>{for(let t=0;t<e.length;t++){const n=e[t];ho(n,!1)}Cn()},Xe=S(1),je=S(0),vt=S(""),Yt=S(""),tu=()=>Xe.value,nu=()=>je.value,au=()=>vt.value,ou=()=>Yt.value,su=e=>{Xe.value=e},ru=e=>{je.value=e},lu=e=>{je.value<Xe.value&&je.value++,vt.value=e},vo=(e,t)=>{e===""?(Xe.value=1,je.value=0,Yt.value="",vt.value=""):(je.value=Xe.value,Yt.value=e,vt.value=t||"")},iu=async()=>{const e=await new Promise(t=>{let n=window[C].startScriptSignal&&window[C].startScriptSignal.signal;n&&n.aborted&&(window[C].startScriptSignal=new AbortController,n=window[C].startScriptSignal.signal);const a=()=>{window[C].abortSignalInScript=void 0,n.removeEventListener("abort",a),localStorage.setItem(window[C].getScriptId()+"-rendererList",JSON.stringify(window[C].rendererList)),t(window[C].rendererList)};n.addEventListener("abort",a)});return new zc(e)},cu=S(),uu=(e,t)=>{const{genBuiltInApi:n}=tt(),a=n(e),o=ne(),s=fo(o),r=`
    try{
      with(window['${C}']){
        ${a+`
`}
        changeScriptRunState(true);
        replaceRendererList([]);
        pushElement({
          targetGroupLabel: "*脚本设置",
          label: "导入上次运行配置",
          checked: false,
          type: "check",
        });
        const signal = abortSignalInScript && abortSignalInScript.signal;
        const signalHandle = ()=>{
          const error = new DOMException('任务被手动终止');
          try{changeScriptRunState && changeScriptRunState('stop');}catch(e){console.warn(e);}
          abortSignalInScript = undefined;
          signal.removeEventListener('abort',signalHandle);
          isStop = true;
        }
        signal.addEventListener('abort',signalHandle);
        const evalFunction = async()=>{
          ${Gc}
          ${s}
          ${t}
          main && await main();
          removeIntervals();
          try{changeScriptRunState && changeScriptRunState(false, '${e}');}catch(e){console.error(e);}
          console.log('script run done!');
        }
        evalFunction();
      }
    }catch(e){
      console.error(e);
    }
  `;return ua.transpile(r,{target:ua.ScriptTarget.ESNext,removeComments:!0})},Ne=[],du=(e,t)=>{const n=setInterval(()=>{try{const{isStop:a}=window[C];if(a){_o(n);return}e()}catch(a){console.error(a)}},t);return Ne.push(n),n},_o=e=>{clearInterval(e),Ne.splice(Ne.indexOf(e),1)};let Nt=null;const pu=()=>{Nt&&clearTimeout(Nt),Nt=setTimeout(()=>{Ne.forEach(e=>{clearInterval(e)}),Ne.splice(0,Ne.length),console.log("已清除所有定时器")},300)},Ce=e=>{const t=ce();Qe(t);const{openId:n}=Fe();return Oe().mockScriptList.value.find(a=>a.id===n.value)[e]},dt=S("ready"),{notify:ma}=ka,ga=()=>Ce("id");let _t=!1;const mu=e=>{_t=e},Wt=S(!Ye),gu=A(()=>Ce("name")),fu=A(()=>Ce("version")),yu=A(()=>Ce("savePath")),fa=["changeScriptRunState","isStop","removeIntervals","log","setInterval","getScriptId"],bu=(e,t)=>{const{runningFnId:n}=P();if(!(t&&t!==n.value))if(e==="stop")dt.value="done",window[C].removeIntervals&&window[C].removeIntervals(),window[C]&&Object.keys(window[C]).forEach(a=>{fa.includes(a)||delete window[C][a]}),Wt.value&&!Ye&&Fs.getByLabel("main").then(a=>{a?.show()}).finally(ma.done);else if(e)dt.value="ready",_t=!1;else{if(_t)return;if(_u().Preludes.log("脚本执行完成","success",void 0,!0),vo("success","脚本执行完成"),dt.value="done",window[C]&&Object.keys(window[C]).forEach(a=>{fa.includes(a)||delete window[C][a]}),Wt.value&&!Ye){const a=As();a.show(),a.setFocus(),ma.done()}}},hu=()=>{const{openId:e}=Fe(),t=ce();return Qe(t),{importLastRunConfig:pa,replaceRendererList:bo,getWillRunScript:uu,setEndBeforeCompletion:mu,getEndBeforeCompletion:()=>_t,getFileInfo:Ce,buildForm:a=>{if(eu(a),e.value!=="-1"){const o=Oe().mockScriptList.value.find(s=>s.id===e.value);if(o?.setting.autoImportLastRunConfig){if(o.setting.autoImportLastRunConfig){const s=window[C].rendererList?.find(r=>r.groupLabel==="*脚本设置");if(s){const r=s.checkList.find(l=>l.label==="导入上次运行配置");r&&(r.checked=!0,pa())}}}else return}}}},vu=()=>({taskRunStatus:dt,name:gu,version:fu,hideWindow:Wt,savePath:yu}),_u=()=>{const{exportAllFn:e}=tt(),{rendererList:t}=ce();return{copyText:Zc,readClipboardFirstText:Qc,isStop:!1,SCRIPT_ID:ga(),setAllTask:su,setCurTask:ru,getAllTask:tu,getCurTask:nu,getCurTaskName:au,nextTask:lu,getTaskStatus:ou,setTaskEndStatus:vo,getCustomizeForm:iu,abortSignalInScript:cu.value,startScriptSignal:new AbortController,setInterval:du,clearInterval:_o,removeIntervals:pu,rendererList:t,getScriptId:ga,changeScriptRunState:bu,...e(),replaceRendererList:bo,pushElement:ho}},wu=async(e=[],t)=>{const{notAllowedFnId:n}=P();if(t&&n.value.includes(t))return!1;try{hu().buildForm(e)}catch(a){console.error("buildFormFnError: ",a)}},wo={onDialogOpen:async(e,...t)=>{const n=t[0]?.value||[];e(),console.log("buildForm onDialogOpen",n)},parameterReplace:e=>{e.replaceCurFnArgs(JSON.stringify(e.buildFormList))}},xu=async(e,t)=>{if(e.replaceCurFnArgs){wo.parameterReplace(e),f.apiAutoTip();return}t.showDetails("此方法不支持测试调用","Preludes.buildForm")},Su={title:"构建表单",targetMethodName:"buildForm",content:"构建与用户交互的表单",args:[]},Tu=`function buildForm(
  buildFormList: BuildFormItems[]
): void;
`,Iu={scope:"Preludes",name:"buildForm",exportFn:{fn:wu},testModule:{weight:1,dialog:Su,callback:xu,document:jc},declaration:Tu,auxiliary:wo},At=Object.freeze(Object.defineProperty({__proto__:null,buildFormApi:Iu},Symbol.toStringTag,{value:"Module"}));let lt="";const xo={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="log"&&s.scope==="Preludes").testModule.dialog;o.args&&(lt=n[0]?.expression||"",o.args.forEach((s,r)=>{r===0?n[0]?.value&&(typeof n[0].value=="string"?(s.value=n[0].value,s.value=s.value.replace(/(^["'`]{1,2})|(["'`]{1,2}$)/g,"").replace(/\\/g,"")):s.value=JSON.stringify(n[0].value).replace(/\\"/g,"")):s.value=n[r]?.value||"info"}))},parameterReplace:e=>{let t="";try{t=JSON.stringify(new Function("",`const exp = ${lt};return exp`)())}catch{}if(e.type!=="info")if(e.msg===t)e.replaceCurFnArgs(`${lt}, "${e.type}"`);else{try{if(typeof new Function("",`const exp = ${e.msg.replace(/\\/g,"")};return exp`)()=="object"){e.replaceCurFnArgs(`${e.msg.replace(/\\/g,"")}, "${e.type}"`);return}}catch{}e.replaceCurFnArgs(`\`${e.msg.replace(/\\/g,"")}\`, "${e.type}"`)}else if(e.msg===t)e.replaceCurFnArgs(`${lt}`);else{try{if(typeof new Function("",`const exp = ${e.msg.replace(/\\/g,"")};return exp`)()=="object"){e.replaceCurFnArgs(`${e.msg.replace(/\\/g,"")}`);return}}catch{}e.replaceCurFnArgs(`\`${e.msg.replace(/\\/g,"")}\``)}}},ku=`
function log(
  msg: any,
  type?: "success" | "danger" | "info" | "warning" | "loading"
):void;
`,Mu={title:"输出日志",targetMethodName:"log",content:"在运行控制台或弹窗中输出日志信息",args:[{name:"msg",componentType:"input",value:"",label:"要输出的日志信息"},{name:"type",componentType:"select",value:"info",label:"日志类型",options:["success","danger","info","warning","loading"]}]},$u={howToUse:"输出日志",params:[{name:"msg",required:!0,instructions:"要输出的日志信息",type:"any",default:""},{name:"type",required:!1,instructions:"日志类型",type:["'success'","'danger'","'info'","'warning'","'loading'"],default:"'info'"}],returnValue:{type:"void"},example:{code:`//info类型日志：
log("我是日志");
//success类型日志：
log("我是日志", "success");
//danger类型日志：
log("我是日志", "danger");
//warning类型日志：
log("我是日志", "warning");
//loading类型日志：
log("我是日志", "loading");`},searchKeys:["log","日志","Preludes"],codeSnippet:"log('${1:日志内容}'${2:, 'loading'});"},Xt=K([]),Cu=()=>{const{notify:e}=ka;Xt.splice(0,Xt.length),e.clear()},So=()=>({logOutput:Xt,clearLogOutput:Cu}),To=(e=4)=>{let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return t},Pu=async()=>`playground-${ye(4)}`,[Io,Fu]=Ie("tempDeviceId",{defaultValue:""});Io.value===""&&Pu().then(e=>{Fu(e)});const[Au,Ou]=Ie("token",{defaultValue:""}),De=()=>Au.value,Du=Ou,Ru=va.create({baseURL:"https://isyc.gitee.io/",timeout:1e4,headers:{"Content-Type":"application/json;charset=utf-8"}});Ru.interceptors.request.use(e=>e,e=>(oe({showClose:!0,message:e.data.MSG,type:"error"}),Promise.reject(e.data.MSG)));const Eu=va.create({baseURL:"http://"+Ia+"/api/",timeout:1e4,headers:{"Content-Type":"application/json;charset=utf-8"}});Eu.interceptors.request.use(e=>{const t=De();return t&&(e.headers.Authorization=t),e},e=>(oe({showClose:!0,message:e.data.MSG,type:"error"}),Promise.reject(e.data.MSG)));const pt=[],wt=S("离线");let ee=null;const ko=()=>{if(ee){console.error("useWss createWs error: WebSocket已经存在");return}try{ee=new WebSocket("ws://"+Ia),ee.onopen=function(){console.log("Connected to the server."),ee?.send(JSON.stringify({type:"INIT",token:De(),deviceId:Io.value}))},ee.onmessage=function(e){let t="";try{t=JSON.parse(e.data)}catch{t=e.data}console.log("Received data from server: ",t),pt.forEach(n=>n(t))},ee.onclose=function(e){e.wasClean?console.log(`Connection closed cleanly, code=${e.code}, reason=${e.reason}`):console.log("Connection died")},ee.onerror=function(e){console.log(`Error: ${e}`)},oe.success("WebSocket连接成功")}catch(e){console.error(e),oe.error("WebSocket连接失败"),wt.value="离线"}},Mo=()=>{ee?.close(),ee=null};pe(wt,()=>{wt.value==="在线"?ko():(Mo(),ke().closeAutoOnline())});const Vu=e=>{const t=pt.length;return pt.push(e),()=>{pt.splice(t,1)}},Lu=(e,t)=>{const{controlDeviceInfo:n}=ke();ee?.send(JSON.stringify({type:"LINK_RESP",accessToken:n.accessToken,success:e,reason:t,token:De()}))},Nu=e=>{const{controlDeviceInfo:t}=ke();ee?.send(JSON.stringify({type:"FORWARD",token:De(),accessToken:t.accessToken,reverse:!0,data:{type:"COMMAND",command:"RESPONSE_SCRIPT_LIST",data:e}}))};let ge="";const Uu=(e=[],t)=>{const{controlDeviceInfo:n}=ke();let a;ge===""?(a=ye(),ge=a):a=ge,t||console.log("RESPONSE_RUN_SCRIPT",ge),ee?.send(JSON.stringify({type:"FORWARD",token:De(),accessToken:n.accessToken,reverse:!0,data:{type:"COMMAND",command:t?"SYNC_FORM":"RESPONSE_RUN_SCRIPT",form:Bc(e),syncId:a}}))},$o=e=>{const{controlDeviceInfo:t}=ke();ee?.send(JSON.stringify({type:"FORWARD",token:De(),accessToken:t.accessToken,reverse:!0,data:{type:"COMMAND",command:"DEPRECATED_SYNC_ID",syncId:e}}))},ju=e=>ge===e?(ge="",$o(e),!0):(ge=e,!1),zu=e=>{ge===e&&(ge="")},Bu=(e,t,n)=>{const{controlDeviceInfo:a}=ke();ee?.send(JSON.stringify({type:"FORWARD",token:De(),accessToken:a.accessToken,reverse:!0,data:{type:"COMMAND",command:"SYNC_LOG",log:e,time:t,logType:n}}))},xt=()=>({wssState:wt,createWs:ko,closeWs:Mo,onMsg:Vu,responseReq:Lu,responseScriptList:Nu,syncRendererList:Uu,sendDeprecatedSyncId:$o,deprecatedSyncId:zu,existSyncId:ju,syncLog:Bu}),qu={};function Ku(e,t){const n=te;return h(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-language-typescript":""},null,-1)])),_:1})}const ya=H(qu,[["render",Ku]]),Gu={};function Yu(e,t){const n=te;return h(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-function-variant":""},null,-1)])),_:1})}const Wu=H(Gu,[["render",Yu]]),Xu={};function Ju(e,t){const n=te;return h(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-folder-cog-outline":""},null,-1)])),_:1})}const Hu=H(Xu,[["render",Ju]]),Zu={};function Qu(e,t){const n=te;return h(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-solar-settings-linear":""},null,-1)])),_:1})}const ed=H(Zu,[["render",Qu]]),Co="template-secretKey",Po=e=>zt.AES.encrypt(e,Co).toString(),td=e=>zt.AES.decrypt(e,Co).toString(zt.enc.Utf8),Fo=S(!1),Se=K({username:"",password:"",rePassword:""}),Ao=S("login"),[Ut,Oo]=Ie("lastUserInfo",{defaultValue:{username:"",password:"",autoLogin:!1}}),nd=()=>{Oo({username:Se.username,password:Po(Se.password),autoLogin:!0})},ad=()=>(Se.username=Ut.value?.username||"",Se.password=td(Ut.value?.password||""),Ut.value?.autoLogin||!1),Do=S(!1),od=S(""),sd=(e,t,n)=>{t?/^[a-zA-Z0-9_]{3,16}$/.test(t)?n():n(new Error("用户名必须是3到16个字符的字母、数字或下划线")):n(new Error("用户名不能为空"))},rd=(e,t,n)=>{t?/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(t)?n():n(new Error("密码必须是8到20个字符，且至少包含一个字母和一个数字")):n(new Error("密码不能为空"))},ld=(e,t,n)=>{if(Ao.value==="login"){n();return}t?t!==Se.password?n(new Error("确认密码与密码不匹配")):n():n(new Error("确认密码不能为空"))},id=K({username:[{validator:sd,trigger:"blur"}],password:[{validator:rd,trigger:"blur"}],rePassword:[{validator:ld,trigger:"blur"}]}),cd=()=>{Oo({username:Se.username,password:Po(Se.password),autoLogin:!1}),Do.value=!1,Du(""),Fo.value=!1,xt().closeWs()},ud=()=>({form:Se,formShow:Ao,isLogin:Do,username:od,formRules:id,logout:cd,saveLastUserInfo:nd,resetLastUserInfoToForm:ad,autoLogin:Fo}),dd=W({__name:"AccountIcon",props:{size:{type:String,default:"large"}},setup(e){const{isLogin:t,username:n}=ud(),a=A(()=>n.value[0]?.toUpperCase()||"");return(o,s)=>{const r=te,l=Te,i=Os;return c(t)?(h(),T(i,{key:1,size:18},{default:d(()=>[m(l,{size:"small"},{default:d(()=>[k(E(c(a)),1)]),_:1})]),_:1})):(h(),T(r,{key:0,size:e.size},{default:d(()=>s[0]||(s[0]=[x("span",{"i-mdi-account":""},null,-1)])),_:1},8,["size"]))}}}),pd={};function md(e,t){const n=te;return h(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-code-block-tags":""},null,-1)])),_:1})}const gd=H(pd,[["render",md]]),fd={};function yd(e,t){const n=te;return h(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-dev-to":""},null,-1)])),_:1})}const bd=H(fd,[["render",yd]]),Pn=[{path:"/",redirect:"/script/list"},{path:"/script",name:"script",component:()=>j(()=>import("./ScriptConsole-Ch9Q2u__.js"),__vite__mapDeps([0,1,2,3])),meta:{title:"脚本",icon:ya,position:"top",id:"script_route"},children:[{path:"list",name:"scriptList",component:()=>j(()=>import("./ScriptList-PNrqPMK6.js"),__vite__mapDeps([4,5,1,2,6]))},{path:"editor",name:"scriptEditor",component:()=>j(()=>import("./CodeEditor-Cy5XmFQD.js"),__vite__mapDeps([7,8,1,2,9,10,11]))},{path:"setting",name:"scriptSetting",component:()=>j(()=>import("./ScriptSetting-rC7HqvsW.js"),__vite__mapDeps([12,1,2,5,13]))},{path:"run",name:"scriptRunConsole",component:()=>j(()=>import("./ScriptRunConsole-DM9ZosrH.js"),__vite__mapDeps([14,1,2,15,5,10,16]))}]},{path:"/apiTest",name:"apiTest",component:()=>j(()=>import("./APITest-qVdPsc99.js"),__vite__mapDeps([17,1,2,18,19,8,9,20])),meta:{title:"调试",icon:Wu,position:"top",id:"apiTest_route"}},{path:"/codeSnippetList",name:"codeSnippetList",component:()=>j(()=>import("./CodeSnippet-CjzlpcYr.js"),__vite__mapDeps([21,5,1,2,22])),meta:{title:"片段",icon:gd,position:"top",id:"codeSnippetList_route"}},{path:"/project",name:"project",component:()=>j(()=>import("./ScriptProject-07Mhv7tj.js"),__vite__mapDeps([23,1,2,24])),meta:{title:"工程",icon:Hu,position:"top",id:"project_route",disabled:!0}},{path:"/setting",name:"setting",component:()=>j(()=>import("./SettingPage-DRD-DweT.js"),__vite__mapDeps([25,1,2,8,9,26])),meta:{title:"设置",icon:ed,position:"bottom",id:"setting_route"}},{path:"/account",name:"account",component:()=>j(()=>import("./Account-BvlVj1T3.js"),__vite__mapDeps([27,1,2,28])),meta:{title:"账户",icon:dd,position:"bottom",id:"setting_route"}},{path:"/scriptWindow",name:"scriptWindow",component:()=>j(()=>import("./ScriptRunWindow-BGCPT2Hg.js"),__vite__mapDeps([29,1,2,30])),meta:{title:"脚本运行窗口",icon:ya}},{path:"/floatWindow",name:"floatWindow",component:()=>j(()=>import("./FloatWindow-09ECeoIh.js"),__vite__mapDeps([31,1,2,32])),meta:{title:"悬浮窗口"}},{path:"/pointerUtil",name:"pointerUtil",component:()=>j(()=>import("./PointerUtil-Bet3UnkA.js"),__vite__mapDeps([33,1,2,34])),meta:{title:"鼠标工具"}},{path:"/notification",name:"notification",component:()=>j(()=>import("./Notification-CN6U2mEO.js"),__vite__mapDeps([35,1,2,15,36])),meta:{title:"通知"}},{path:"/ORW",name:"ORW",component:()=>j(()=>import("./OperationRecordWindow-AXKdO__t.js"),__vite__mapDeps([37,1,2,38])),meta:{title:"操作录制悬浮窗口"}},{path:"/depManager",name:"depManager",component:()=>j(()=>import("./DepManagerPage-BpxgkwXL.js"),__vite__mapDeps([39,1,2,8,9,40])),meta:{title:"依赖管理器"}},{path:"/invokesManager",name:"invokesManager",component:()=>j(()=>import("./InvokesManager-DZtVpO2d.js"),__vite__mapDeps([41,1,2,18,19,10,42])),meta:{title:"API",icon:bd,position:"top",disabled:Ye}},{path:"/:pathMatch(.*)*",component:()=>j(()=>import("./NotFound-B3JlyCtd.js"),__vite__mapDeps([43,1,2]))}].map(e=>e.meta?.disabled?null:e).filter(e=>e),hd=Pn.filter(e=>e.meta?.position==="top"&&!e.meta?.disabled),vd=Pn.filter(e=>e.meta?.position==="bottom"&&!e.meta?.disabled);var Jt=(e=>(e.None="",e.ScriptList="scriptList",e.CodeSnippetList="codeSnippetList",e))(Jt||{});const _d=K({title:"风染脚本",showContentType:"app-name",apiTest:{searchValue:"",openOutput:!1}}),Ro=S(window.innerWidth||0);let it=null;const wd=e=>{it&&clearTimeout(it),it=setTimeout(()=>{Ro.value=e,clearTimeout(it)},100)},xd=S(!1),Sd=S(!1),Ht=K({content:"",show:!1,target:""}),Eo=S("");let ct;pe(()=>Ht.content,()=>{ct&&clearTimeout(ct),ct=setTimeout(()=>{Eo.value=Ht.content,clearTimeout(ct)},300)});const Td=S(!0),Ot=()=>({info:_d,windowInnerWidth:Ro,syncWindowInnerWidth:wd,clickMinimize:xd,needSyncLastData:Sd,searchInfo:Ht,trueSearch:Eo,ingoreObserver:Td}),he={scriptList:[{target:"#script_route",title:"脚本列表(介绍)",description:"此处是脚本列表，支持对脚本进行管理、设置、运行"},{target:"#search_script_input",title:"脚本搜索",description:"输入脚本名称或者备注可对显示的列表进行过滤"},{target:"#new_script_btn",title:"新建脚本(操作)",description:"点击此按钮新建一个演示用的脚本，新建完成后可进行下一步",preventNext:!0,onShow:()=>{const{searchInfo:e}=Ot();e.content=""}},{target:"#DEMO_SCRIPT_ITEM .info",title:"演示脚本(介绍)",description:"点击中间可展看查看脚本详情，搜索栏为空时支持拖动排序"},{target:"#DEMO_SCRIPT_ITEM .menu",title:"演示脚本(介绍)",description:"右边的按钮依次是：删除、编辑、打开、设置、运行"},{target:"#DEMO_SCRIPT_ITEM-DEL",title:"删除脚本(介绍)",description:"可从脚本列表中移除脚本(不会删除本地文件)"},{target:"#DEMO_SCRIPT_ITEM-EDIT",title:"编辑脚本(介绍)",description:"点击进入脚本编辑器对脚本进行编辑"},{target:"#DEMO_SCRIPT_ITEM-OPEN",title:"打开脚本(介绍)",description:"可选择使用VSCode打开脚本文件或者在文件管理器中打开脚本所在目录"},{target:"#DEMO_SCRIPT_ITEM-SETTING",title:"脚本设置(介绍)",description:"可对脚本进行设置"},{target:"#DEMO_SCRIPT_ITEM-RUN",title:"运行脚本(介绍)",description:"运行此脚本"}],scriptEditor:[],scriptRunConsole:[],scriptSetting:[],apiTest:[],codeSnippetList:[],setting:[],account:[]},[Id,kd]=Ie("firstTime",{defaultValue:{scriptList:!0,scriptEditor:!0,scriptSetting:!0,scriptRunConsole:!0,apiTest:!0,codeSnippetList:!0,setting:!0,account:!0}}),mt=K({scriptList:{step:0,touring:!1,steps:he.scriptList,preventPrevious:!1,preventNext:!1,doneSteps:[]},scriptEditor:{step:0,touring:!1,steps:he.scriptEditor,preventPrevious:!1,preventNext:!1,doneSteps:[]},scriptSetting:{step:0,touring:!1,steps:he.scriptSetting,preventPrevious:!1,preventNext:!1,doneSteps:[]},scriptRunConsole:{step:0,touring:!1,steps:he.scriptRunConsole,preventPrevious:!1,preventNext:!1,doneSteps:[]},apiTest:{step:0,touring:!1,steps:he.apiTest,preventPrevious:!1,preventNext:!1,doneSteps:[]},codeSnippetList:{step:0,touring:!1,steps:he.codeSnippetList,preventPrevious:!1,preventNext:!1,doneSteps:[]},setting:{step:0,touring:!1,steps:he.setting,preventPrevious:!1,preventNext:!1,doneSteps:[]},account:{step:0,touring:!1,steps:he.account,preventPrevious:!1,preventNext:!1,doneSteps:[]}}),gt=S("scriptList"),Md=()=>{mt[gt.value]?.steps.length?(mt[gt.value].step=0,Ge(()=>mt[gt.value].touring=!0)):oe.warning("当前页面暂未无引导")},Fn=()=>({firstTime:Id,setfirstTime:kd,tourInfo:mt,currentTourName:gt,showTour:Md}),xe=Ds({history:Rs(),routes:Pn});xe.beforeEach((e,t,n)=>{e.path,n()});xe.afterEach((e,t)=>{const n=xe.currentRoute.value.name,{currentTourName:a,firstTime:o,tourInfo:s,setfirstTime:r}=Fn();a.value=n,o.value&&o.value[a.value]&&(o.value[a.value]&&s[a.value].steps.length&&(s[a.value].touring=!0),r({...o.value,[a.value]:!1}))});const $d=S(!0),Cd=S(1),An=S("960px"),On=S("600px"),Pd=()=>{An.value="960px",On.value="600px"},Fd=()=>{An.value="100%",On.value="100%"},St=()=>({isMainWindow:$d,menuKey:Cd,appWidth:An,appHeight:On,unmaximizeSize:Pd,maximizeSize:Fd}),[Ad,Vo]=Ie("controlCode",{defaultValue:To()}),Od=()=>{Vo(To())},Dd=()=>{_a.prompt("请输入四位数字控制码","控制码",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{4}$/,inputErrorMessage:"控制码格式错误"}).then(({value:e})=>{oe.success("控制码已更新"),Vo(e)}).catch(()=>{console.log("cancel")})},[Je,Dn]=Ie("controlConf",{defaultValue:{autoOnline:!1,autoAsk:!1}}),Rd=A({get:()=>Je.value?.autoOnline,set:e=>Dn({autoAsk:Je.value?.autoAsk||!1,autoOnline:e||!1})}),Ed=A({get:()=>Je.value?.autoAsk,set:e=>Dn({autoOnline:Je.value?.autoOnline||!1,autoAsk:e||!1})}),Vd=()=>{Dn({autoAsk:Je.value?.autoAsk||!1,autoOnline:!1})},$e=K({id:"",accessToken:"",willRunScriptId:"",willSyncForm:!1,executeScript:"willExec"});let ba=()=>{};pe(()=>$e.id,()=>{$e.id?ba=xt().onMsg(e=>{if(e.type==="COMMAND")if(e.command==="REQUEST_SCRIPT_LIST"){const t=Oe().mockScriptList.value.map(n=>({id:n.id,name:n.name,description:`[${n.version}]`+n.description}));xt().responseScriptList(t)}else if(e.command==="RUN_SCRIPT"){$e.willSyncForm=!0,$e.willRunScriptId=e.scriptId;const t=ne(),{app:n}=Qe(t);xe.replace("/script/list"),St().menuKey.value++,Ot().info.showContentType="script",n.value.state.aside.currentItem="script",$e.willSyncForm=!0}else e.command==="EXECUTE_SCRIPT"&&($e.executeScript=e.state)}):ba()});const ke=()=>({controlCode:Ad,refreshCode:Od,updateCode:Dd,autoOnline:Rd,autoAsk:Ed,closeAutoOnline:Vd,controlDeviceInfo:$e}),Ld=()=>{const e=window.console,t=Object.create(e);t.error=function(...n){const a=n.map(o=>typeof o=="string"?o:JSON.stringify(o)).join(" ");So().logOutput.push({id:"SYS-"+ye(),time:new Date(Date.now()).toLocaleTimeString(),log:a,type:"danger",timestamp:Date.now()}),e.error.call(this,...n)},window.console=t},Nd=e=>{},Ud=(e,t)=>{},jd={setProductionErrorReport:Ld,scriptConsoleErrorReport:Ud,report:Nd},{logOutput:zd}=So(),{controlDeviceInfo:Bd}=ke(),qd=(e,t,n,a=!1)=>{const{notAllowedFnId:o}=P(),{taskRunStatus:s}=vu();if(n&&o.value.includes(n))return!1;if(!a&&s.value==="done")return;const r=new Date(Date.now()),l=[r.getHours(),r.getMinutes(),r.getSeconds()].map(g=>g<10?"0"+g:g).join(":"),i=typeof e=="string"?e:JSON.stringify(e);zd.push({id:ye(),time:l,log:i,type:t||"info",timestamp:Date.now()}),Bd.executeScript==="execute"&&xt().syncLog(i,l,t||"info"),t==="danger"&&(Ce("name"),Ce("version"));const u=document.getElementById("consoleLogDiv");u&&(u.scrollTop=u?.scrollHeight+9999)},Kd=async(e,t)=>{if(e.replaceCurFnArgs){const n=xo.parameterReplace(e);return f.apiAutoTip(),n}t.showDetails("此方法无法直接调用，请在脚本中使用！","Preludes.log")},Gd={name:"log",scope:"Preludes",exportFn:{fn:qd},testModule:{weight:1,dialog:Mu,document:$u,callback:Kd},declaration:ku,auxiliary:xo},Dt=Object.freeze(Object.defineProperty({__proto__:null,logApi:Gd},Symbol.toStringTag,{value:"Module"})),Lo={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="sleep"&&s.scope==="Preludes").testModule.dialog;o.args&&(isNaN(Number(n[0]?.value))?o.args[0].value=1e3:o.args[0].value=Number(n[0]?.value)||1e3)},parameterReplace:e=>{e.ms===1e3?e.replaceCurFnArgs(""):e.replaceCurFnArgs(`${e.ms}`)}},Yd="function sleep(ms?: number):Promise<void>;",Wd={title:"休眠指定时长",targetMethodName:"sleep",content:"等待指定的毫秒数后继续执行后续操作",args:[{name:"ms",componentType:"numberInput",value:1e3,label:"休眠时长的毫秒数"}]},Xd={howToUse:"休眠指定时长",params:[{name:"ms",required:!1,instructions:"休眠时长的毫秒数",type:"number",default:"1000"}],returnValue:{type:"Promise<void>"},example:{code:`//休眠1000ms
await sleep();
//休眠2000ms
await sleep(2000);`},searchKeys:["sleep","休眠","停止","等待","暂停","延时"],codeSnippet:"sleep(${1:time_ms});"},Jd=async(e,t)=>{if(e.replaceCurFnArgs){const n=Lo.parameterReplace(e);return f.apiAutoTip(),n}t.showDetails("此方法无法直接调用，请在脚本中使用！","Preludes.sleep")},Hd={name:"sleep",scope:"Preludes",exportFn:{fn:ri},testModule:{weight:1,dialog:Wd,document:Xd,callback:Jd},declaration:Yd,auxiliary:Lo},Rt=Object.freeze(Object.defineProperty({__proto__:null,sleepApi:Hd},Symbol.toStringTag,{value:"Module"})),Zd={howToUse:"ADB截图",returnValue:{type:"Promise<string>",instructions:"截图结果"},example:{code:"const res = await adbScreenshot();"},searchKeys:["ADB","adb","截图"],codeSnippet:"await adbScreenshot();"},No=async(e,t)=>"disconnected xxx",Uo=async(e,t)=>"already connected to XXX",Et=async(e=0,t)=>"截图完成",Qd=async(e,t)=>{const n=await Et();t.showDetails(n)},ep=`
declare function adbScreenshot(): Promise<string>;
`,tp={name:"adbScreenshot",exportFn:{fn:Et},testModule:{weight:3,dialog:{notOpen:!0,title:"截图",targetMethodName:"adbScreenshot"},callback:Qd,document:Zd},declaration:ep},Rn=Object.freeze(Object.defineProperty({__proto__:null,adbScreenshotApi:tp},Symbol.toStringTag,{value:"Module"})),jo=async e=>"unLink",np=async(e,t)=>{const n=await jo();t.showDetails(n)},ap={howToUse:"获取设备状态",returnValue:{type:"Promise<string>",instructions:"设备状态"},example:{code:"const res = await adbState();"},searchKeys:["ADB","adb","获取设备状态"],codeSnippet:"const ${1:res} = await adbState();"},op=`
declare function adbState(): Promise<string>;
`,sp={name:"adbState",exportFn:{fn:jo},testModule:{weight:1,dialog:{notOpen:!0,title:"获取设备状态",targetMethodName:"adbState"},callback:np,document:ap},declaration:op},En=Object.freeze(Object.defineProperty({__proto__:null,adbStateApi:sp},Symbol.toStringTag,{value:"Module"})),zo=async e=>"OK",rp=async(e,t)=>{const n=await zo();t.showDetails(n)},lp={howToUse:"点击当前连接ADB设备的Home键",returnValue:{type:"Promise<string>",instructions:"点击Home键结果, 一般用不上"},example:{code:"await clickHomeKey();"},searchKeys:["ADB","adb","点击Home键","home","key"],codeSnippet:"await clickHomeKey();"},ip=`
declare function clickHomeKey():Promise<string>;
`,cp={name:"clickHomeKey",exportFn:{fn:zo},testModule:{weight:1,dialog:{notOpen:!0,title:"点击Home键",targetMethodName:"clickHomeKey"},callback:rp,document:lp},declaration:ip},Vn=Object.freeze(Object.defineProperty({__proto__:null,clickHomeKeyApi:cp},Symbol.toStringTag,{value:"Module"})),Bo=async e=>"OK",up=async(e,t)=>{const n=await Bo();t.showDetails(n)},dp={howToUse:"点击返回键",returnValue:{type:"Promise<string>",instructions:"点击返回键结果, 一般用不上"},example:{code:"await clickReturnKey();"},searchKeys:["ADB","adb","点击返回键","return","key"],codeSnippet:"await clickReturnKey();"},pp=`
declare function clickReturnKey(): Promise<string>;
`,mp={name:"clickReturnKey",exportFn:{fn:Bo},testModule:{weight:1,dialog:{notOpen:!0,title:"点击返回键",targetMethodName:"clickReturnKey"},callback:up,document:dp},declaration:pp},Ln=Object.freeze(Object.defineProperty({__proto__:null,clickReturnKeyApi:mp},Symbol.toStringTag,{value:"Module"})),qo=async(e,t=!1,n)=>"The execution is complete",gp={title:"执行cmd命令",targetMethodName:"cmd",content:"执行cmd命令",args:[{name:"command",componentType:"input",label:"需要执行的命令",value:""},{name:"onlyExec",componentType:"switch",label:"是否只执行命令，不返回结果",value:!1}]},Ko={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="cmd").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:s.value=n[0]?.value||"";break;case 1:s.value=n[1]?.value||!1;break}})},parameterReplace:e=>{e.onlyExec?e.replaceCurFnArgs(`"${e.command}",true`):e.replaceCurFnArgs(`"${e.command}"`)}},fp=async(e,t)=>{if(e.replaceCurFnArgs){const o=Ko.parameterReplace(e);return f.apiAutoTip(),o}console.time("命令执行耗时");const n=await qo(e.command,e.onlyExec);console.timeEnd("命令执行耗时"),t.showDetails(n);const a=w().find(o=>o.name==="cmd")?.testModule;a&&(e.onlyExec?a.document.example.code=`const res = await cmd("${e.command}", true);`:a.document.example.code=`const res = await cmd("${e.command}");`)},yp={howToUse:"执行cmd命令",params:[{name:"command",required:!0,instructions:"需要执行的命令",type:"string",default:""},{name:"onlyExec",required:!1,instructions:"是否只执行命令，不返回结果",type:"boolean",default:"false"}],returnValue:{type:"Promise<string>",instructions:"命令执行结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:'const res = await cmd("ipconfig");'},searchKeys:["command","cmd","命令","执行"],codeSnippet:"const res = await cmd('${1:command}');"},bp=`
declare function cmd(command:string, onlyExec?:boolean):Promise<string>;
`,hp={name:"cmd",exportFn:{fn:qo},testModule:{weight:3,dialog:gp,callback:fp,document:yp},declaration:bp,auxiliary:Ko},Nn=Object.freeze(Object.defineProperty({__proto__:null,cmdApi:hp},Symbol.toStringTag,{value:"Module"})),vp={title:"连接设备",targetMethodName:"connectTo",content:"请输入要连接的设备",args:[{name:"targetDevice",componentType:"select",label:"设备",options:e=>e.deviceList,value:""}]},_p={howToUse:"连接到指定设备",params:[{name:"targetDevice",required:!0,instructions:"要连接的设备",type:"string",default:""}],returnValue:{type:"Promise<string>",instructions:"连接结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await connectTo('127.0.0.1:21053');"},searchKeys:["ADB","adb","连接设备"],codeSnippet:"const ${1:res} = await connectTo('${2:targetDevice}');"},Go={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="connectTo").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:s.value=n[r]?.value||"";break}})},parameterReplace:e=>{e.replaceCurFnArgs(`"${e.targetDevice}"`)}},wp=async(e,t)=>{if(e.replaceCurFnArgs){const o=Go.parameterReplace(e);return f.apiAutoTip(),o}console.time("连接到指定设备耗时");const n=await Uo(e.targetDevice);console.timeEnd("连接到指定设备耗时");const a=w().find(o=>o.name==="connectTo")?.testModule;a?a.document.example.code=`const res = await connectTo('${e.targetDevice}');`:console.error("找不到connectTo的testModule",w()),t.showDetails(n)},Yo=`
declare function connectTo(targetDevice:string):Promise<string>;
`,xp={name:"connectTo",exportFn:{fn:Uo},testModule:{weight:3,dialog:vp,callback:wp,document:_p},declaration:Yo,auxiliary:Go},Sp=Yo,Un=Object.freeze(Object.defineProperty({__proto__:null,connectToApi:xp,connectToApiDeclaration:Sp},Symbol.toStringTag,{value:"Module"})),Wo=async(e,t,n,a,o,s,r)=>{const{notAllowedFnId:l}=P();if(r&&l.value.includes(r))return-2;try{return await O.cropPicture(e,t,n,a,o,s)}catch(i){return console.error(i),-1}},Xo={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="cropPicture").testModule.dialog.args.forEach((s,r)=>{r===0?s.componentType==="FileInput"&&(s.value=f.pathStrReset(n[0]?.value||"")):r===1?s.componentType==="RectInput"&&(s.value.x=+n[1]?.value||0,s.value.y=+n[2]?.value||0,s.value.width=+n[3]?.value||0,s.value.height=+n[4]?.value||0):r===2&&s.componentType==="FileInput"&&(s.value=f.pathStrReset(n[5]?.value||""))})},parameterReplace:e=>{e.replaceCurFnArgs(`${f.replaceConstantPath(e.path)},${e.range.x},${e.range.y},${e.range.width},${e.range.height},${f.replaceConstantPath(e.outPath)}`)}},Tp=async(e,t)=>{if(e.replaceCurFnArgs){const o=Xo.parameterReplace(e);return f.apiAutoTip(),o}console.time("cropPicture耗时");const n=await Wo(e.path,e.range.x,e.range.y,e.range.width,e.range.height,e.outPath);console.timeEnd("cropPicture耗时"),n?t.showDetails("裁剪图片完成","cropPicture"):t.showDetails("裁剪图片失败","cropPicture");const a=w().find(o=>o.name==="cropPicture")?.testModule;a.document.example.code=`const res = await cropPicture(
        	"${e.path.replace(/\\/g,"\\\\")}",
        	${e.range.x},
        	${e.range.y},
        	${e.range.width},
        	${e.range.height},
        	"${e.outPath.replace(/\\/g,"\\\\")}",
      )`},Ip={howToUse:"传入图片路径以及截取参数、输出路径",params:[{name:"path",required:!0,instructions:"图片的绝对路径",type:"string",default:""},{name:"x",required:!0,instructions:"截取起点X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"截取起点y坐标",type:"number",default:""},{name:"width",required:!0,instructions:"从截取起点开始的截取宽度",type:"number",default:""},{name:"height",required:!0,instructions:"从截取起点开始的截取高度",type:"number",default:""},{name:"outPath",required:!0,instructions:"截取后图片的输出路径",type:"string",default:""}],returnValue:{type:"Promise<number>",instructions:"返回1为截取成功。"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await cropPicture('path',x,y,width,height,'outPath');"},searchKeys:["截取","裁剪","图片"],codeSnippet:"const ${1:res} = await cropPicture('${2:path}', ${3:x}, ${4:y}, ${5:width}, ${6:height}, '${7:outPath}');"},kp={title:"裁剪图片",targetMethodName:"cropPicture",content:"裁剪图片",args:[{name:"path",componentType:"FileInput",value:"",label:"待裁剪图片路径"},{name:"range",componentType:"RectInput",targetSrc:"path",label:"裁剪区域",value:{x:0,y:0,width:0,height:0}},{name:"outPath",componentType:"FileInput",value:"",label:"裁剪后输出路径"}]},Mp=`
declare function cropPicture(
    path:string,
    x:number,
    y:number,
    width:number,
    height:number,
    outPath:string
):Promise<number>;
`,$p={name:"cropPicture",exportFn:{fn:Wo},testModule:{weight:2,callback:Tp,document:Ip,dialog:kp},declaration:Mp,auxiliary:Xo},jn=Object.freeze(Object.defineProperty({__proto__:null,cropPictureApi:$p},Symbol.toStringTag,{value:"Module"})),Jo=async e=>[],Cp=async(e,t)=>{const n=await Jo();n?t.showDetails(JSON.stringify(n)):t.showDetails("获取设备列表失败")},Pp={howToUse:"获取ADB的设备列表",returnValue:{type:"Promise<string[] | undefined>",instructions:"设备列表"},example:{code:"const deviceList = await devices();"},searchKeys:["ADB","adb","获取设备列表"],codeSnippet:"const ${1:deviceList} = await devices();"},Fp=`
declare function devices(): Promise<string[] | undefined>;
`,Ap={name:"devices",exportFn:{fn:Jo},testModule:{weight:2,dialog:{notOpen:!0,title:"获取ADB设备列表",targetMethodName:"devices"},callback:Cp,document:Pp},declaration:Fp},zn=Object.freeze(Object.defineProperty({__proto__:null,devicesApi:Ap},Symbol.toStringTag,{value:"Module"})),Op={title:"断开连接设备",targetMethodName:"disConnectTo",content:"请输入要断开连接的设备",args:[{name:"targetDevice",componentType:"select",label:"设备",options:e=>e.deviceList,value:""}]},Dp={howToUse:"与目标设备断开连接",params:[{name:"targetDevice",required:!0,instructions:"要断开连接的设备",type:"string",default:""}],returnValue:{type:"Promise<string>",instructions:"断开连接结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await disConnectTo('127.0.0.1:21053');"},searchKeys:["ADB","adb","断开连接设备"],codeSnippet:"const ${1:res} = await disConnectTo('${2:targetDevice}');"},Ho={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),s=w().find(r=>r.name==="disConnectTo").testModule.dialog.args[0];s.componentType==="select"&&(s.value=n[0]?.value||"")},parameterReplace:e=>{e.replaceCurFnArgs(`"${e.targetDevice}"`)}},Rp=async(e,t)=>{if(e.replaceCurFnArgs){const o=Ho.parameterReplace(e);return f.apiAutoTip(),o}console.time("断开连接设备耗时");const n=await No(e.targetDevice);console.timeEnd("断开连接设备耗时"),t.showDetails(n);const a=w().find(o=>o.name==="disConnectTo")?.testModule;a&&(a.document.example.code=`const res = await disConnectTo('${e.targetDevice}');`)},Zo=`
declare function disConnectTo(targetDevice:string):Promise<string>;
`,Ep={name:"disConnectTo",exportFn:{fn:No},testModule:{weight:3,dialog:Op,callback:Rp,document:Dp},declaration:Zo,auxiliary:Ho},Vp=Zo,Bn=Object.freeze(Object.defineProperty({__proto__:null,disConnectToApi:Ep,disConnectToApiDeclaration:Vp},Symbol.toStringTag,{value:"Module"})),Qo=async(e,t)=>{const{notAllowedFnId:n}=P();if(t&&n.value.includes(t))return{width:-2,height:-2};try{return await O.getImgSize(e)}catch(a){return console.error(a),{width:-1,height:-1}}},es={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="getImageSize").testModule.dialog;o.args[0].value=f.pathStrReset(n[0]?.value||"")},parameterReplace:e=>{e.replaceCurFnArgs(`${f.replaceConstantPath(e.path)}`)}},Lp=async(e,t)=>{if(e.replaceCurFnArgs){const s=es.parameterReplace(e);return f.apiAutoTip(),s}console.time("getImageSize耗时");const{width:n,height:a}=await Qo(e.path);console.timeEnd("getImageSize耗时");const o=w().find(s=>s.name==="getImageSize")?.testModule;o.document.example.code=`const { width, height } = await getImageSize(
	"${e.path.replace(/\\/g,"\\\\")}"
);`,t.showDetails("图片宽高："+n+"x"+a,"getImageSize")},Np={title:"获取图片宽高",targetMethodName:"getImageSize",content:"获取图片宽高",args:[{name:"path",componentType:"FileInput",value:"",label:"图片路径"}]},Up={howToUse:"传入待获取宽高的图片路径",params:[{name:"imgPath",required:!0,instructions:"图片的绝对路径",type:"string",default:""}],returnValue:{type:"Promise<{ width:number; height:number; }>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:'const { width, height } = await getImageSize("E:\\\\image.png");'},searchKeys:["图片","宽高","获取"],codeSnippet:'const { width, height } = await getImageSize("${1:imgPath}");'},jp=`
declare function getImageSize(
    imgPath:string
):Promise<{width:number; height:number;}>;
`,zp={name:"getImageSize",exportFn:{fn:Qo},testModule:{weight:1,callback:Lp,dialog:Np,document:Up},declaration:jp,auxiliary:es},qn=Object.freeze(Object.defineProperty({__proto__:null,getImageSizeApi:zp},Symbol.toStringTag,{value:"Module"})),ts=async(e,t)=>{const{notAllowedFnId:n}=P();if(t&&n.value.includes(t))return{startX:-2,startY:-2,width:-2,height:-2};try{return await yt(e)?await O.getImgRectInfo(e):(console.error(`getImgRectInfoFn 文件不存在: ${e}`),null)}catch(a){return console.error(a),{startX:-1,startY:-1,width:-1,height:-1}}},ns={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="getImgRectInfo").testModule.dialog;o.args[0].value=f.pathStrReset(n[0]?.value||"")},parameterReplace:e=>{e.replaceCurFnArgs(`${f.replaceConstantPath(e.imgPath)}`)}},Bp=async(e,t)=>{if(e.replaceCurFnArgs){const s=ns.parameterReplace(e);return f.apiAutoTip(),s}const n=e.imgPath.split(".").pop();if(!["png","jpg","jpeg","webp","bmp"].includes(n))return t.showDetails("不支持的格式。","getImgRectInfo");console.time("getImgRectInfo耗时");const a=await ts(e.imgPath);console.timeEnd("getImgRectInfo耗时");const o=w().find(s=>s.name==="getImgRectInfo")?.testModule;o.document.example.code=`const { startX, startY, width, height } = 
            	await getImgRectInfo("${e.imgPath.replace(/\\/g,"\\\\")}");`,t.showDetails(`当前图片标注矩形的起始点以及宽高：${JSON.stringify(a)}`,"getImgRectInfo")},qp={howToUse:"获取在指定图片中选取矩形的起始点和宽高。",params:[{name:"imgPath",required:!0,instructions:"图片路径",type:"string",default:""}],returnValue:{type:"Promise<{ startX:number; startY:number; width:number; height:number; }>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:'const { startX, startY, width, height } = await getImgRectInfo("E:\\\\image.png");'},searchKeys:["图片","矩形","位置信息"],codeSnippet:'const { startX, startY, width, height } = await getImgRectInfo("${1:imgPath}");'},Kp={title:"在图片选取矩形信息",targetMethodName:"getImgRectInfo",content:"获取在指定图片中选取矩形的起始点和宽高",args:[{name:"imgPath",componentType:"FileInput",value:"",label:"图片路径"}]},Gp=`
declare function getImgRectInfo(
    imgPath: string
):Promise<{ startX:number; startY:number; width:number; height:number; }>;
`,Yp={name:"getImgRectInfo",exportFn:{fn:ts},testModule:{weight:4,dialog:Kp,callback:Bp,document:qp},declaration:Gp,auxiliary:ns},Kn=Object.freeze(Object.defineProperty({__proto__:null,getImgRectInfoApi:Yp},Symbol.toStringTag,{value:"Module"})),as=async(e=0,t)=>{const{notAllowedFnId:n}=P();if(t&&n.value.includes(t))return{startX:-2,startY:-2,width:-2,height:-2};try{return await new Promise(o=>setTimeout(o,e)),await O.getScreenRectInfo()}catch(a){return console.error(a),{startX:-1,startY:-1,width:-1,height:-1}}},Wp=async(e,t)=>{console.time("getScreenRectInfo耗时");const n=await as(e.delayTime);console.timeEnd("getScreenRectInfo耗时"),t.showDetails(`桌面截图标注矩形的起始点以及宽高：${JSON.stringify(n)}`,"getScreenRectInfo")},Xp={howToUse:"delayTime毫秒后会对当前屏幕进行截图，之后会有一个截图范围选择的窗口出现，第一次可能不会置顶，需要手动呼出，从起点开始长按拖动鼠标到终点释放，返回对应的范围参数。",params:[{name:"delayTime",required:!1,instructions:"延迟执行时间(s)",type:"number",default:"0"}],returnValue:{type:"Promise<{ startX:number; startY:number; width:number; height:number; }>"},example:{code:"const { startX, startY, width, height } = await getScreenRectInfo();"},searchKeys:["屏幕","矩形","范围","位置"],codeSnippet:"const { startX, startY, width, height } = await getScreenRectInfo(${1:delayTime});"},Jp={title:"屏幕矩形信息",targetMethodName:"getScreenRectInfo",content:"获取在当前屏幕截图选取的矩形起始点以及宽高。",args:[{name:"delayTime",componentType:"numberInput",value:0,label:"延迟执行时间(s)"}]},Hp=`
declare function getScreenRectInfo(
    delayTime?:number
):Promise<{ startX:number; startY:number; width:number; height:number; }>;
`,Zp={name:"getScreenRectInfo",exportFn:{fn:as},testModule:{weight:3,callback:Wp,dialog:Jp,document:Xp},declaration:Hp},Gn=Object.freeze(Object.defineProperty({__proto__:null,getScreenRectInfoApi:Zp},Symbol.toStringTag,{value:"Module"})),os=async e=>{const{notAllowedFnId:t}=P();if(e&&t.value.includes(e))return{width:-1,height:-1};try{return await O.getScreenSize()}catch(n){return console.error(n),{width:-1,height:-1}}},Qp=async(e,t)=>{console.time("getScreenSize耗时");const{width:n,height:a}=await os();console.timeEnd("getScreenSize耗时"),t.showDetails("屏幕宽高："+n+"x"+a,"getScreenSize")},em={title:"获取屏幕宽高",targetMethodName:"getScreenSize",notOpen:!0},tm={howToUse:"获取屏幕的宽高",returnValue:{type:"Promise<{ width:number; height:number; }>"},example:{code:"const { width, height } = await getScreenSize();"},searchKeys:["屏幕","宽高","获取"],codeSnippet:"const { width, height } = await getScreenSize();"},nm=`
declare function getScreenSize():Promise<{width:number; height:number;}>;
`,am={name:"getScreenSize",exportFn:{fn:os},testModule:{weight:1,callback:Qp,dialog:em,document:tm},declaration:nm},Yn=Object.freeze(Object.defineProperty({__proto__:null,getScreenSizeApi:am},Symbol.toStringTag,{value:"Module"})),om={howToUse:"识别屏幕/图片指定位置",params:[{name:"x",required:!1,instructions:"识别区域起点X坐标",type:"number",default:"-1"},{name:"y",required:!1,instructions:"识别区域起点y坐标",type:"number",default:"-1"},{name:"width",required:!1,instructions:"识别区域宽度",type:"number",default:"-1"},{name:"height",required:!1,instructions:"识别区域高度",type:"number",default:"-1"},{name:"imgPath",required:!1,instructions:"图片路径, 为空时识别屏幕内容",type:"string",default:""}],returnValue:{type:`
//返回值：
Promise<OcrUtil | undefined>
//OcrUtil类声明：
declare class OcrUtil {
  result: OCRResult[];
  private reCall: () => Promise<OcrUtil | undefined>;
  private ori: {
    x: number;
    y: number;
  };
  constructor(
    originX: number, 
    originY: number, 
    result: OCRResult[], 
    reCall:() => Promise<OcrUtil | undefined>
  );
  public includes(texts: string[]): boolean;
  public searchText(
    text: string, 
    offset?: [number, number]
  ) : FindResult[];
  public findText(
    text: string, 
    offset?: [number, number]
  ) : FindResult | undefined;
  public waitText(
    text: string,
    adb?: boolean, 
    sleepMs?: number, 
    maxWaitCount?: number
  ): Promise<boolean>;
}
declare type OCRResult = {
  position: [
      [number, number],
      [number, number],
      [number, number],
      [number, number]
  ];
  text: string;
  score: number;
};
declare class FindResult {
  centerPos: [number, number];
  text: string;
  score: number;
  constructor(
    position: OCRResult["position"],
    text: string,
    score: number,
    offset?: [number, number]
  );
  public click(): Promise<void>;
  public touch(): Promise<string>;
};
`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const ocrUtil = await ocr(0, 0, 100, 100);"},searchKeys:["OCR","ocr","图片","指定范围"],codeSnippet:"const ocrUtil = await ocr(${1:x}, ${2:y}, ${3:width}, ${4:height})"};class Zt{centerPos;text;score;constructor(t,n,a,o){this.text=n,this.score=a;let s=(t[0][0]+t[2][0])/2,r=(t[0][1]+t[2][1])/2;o&&(s+=o[0],r+=o[1]),this.centerPos=[s,r]}async click(){await Pt(this.centerPos[0],this.centerPos[1])}async touch(){return await Ft(this.centerPos[0],this.centerPos[1])}}class ss{result;reCall;ori;constructor(t,n,a,o){this.result=a,this.ori={x:t,y:n},this.reCall=o}includes=t=>!!this.result.find(n=>{for(const a of t)if(n.text===a||n.text.includes(a))return!0});findText=(t,n)=>{const a=this.result.find(o=>o.text===t||o.text.includes(t));if(a)return new Zt(a.position.map(o=>[o[0]+this.ori.x,o[1]+this.ori.y]),a.text,a.score,n)};searchText=(t,n)=>this.result.filter(o=>o.text===t||o.text.includes(t)).map(o=>new Zt(o.position.map(s=>[s[0]+this.ori.x,s[1]+this.ori.y]),o.text,o.score,n));waitText=async(t,n=!1,a=1e3,o=10)=>{if(this.findText(t))return!0;let s=!1;for(;o--;){n&&await Et();const r=await this.reCall();if(r&&r.includes([t])){s=!0;break}await ht.sleep(a)}return s}}const Wn=async(e,t,n,a,o,s)=>{const{notAllowedFnId:r}=P();if(!(s&&r.value.includes(s)))try{const l=await O.ocr(e,t,n,a,o);if(!l)return;if(l.code===1){const i=()=>(o&&console.warn("由于是指定图片识别，如果图片不更新，将导致识别结果每次都一样!"),Wn(e,t,n,a,o,s));return new ss(e,t,l.result,i)}}catch(l){console.error("ocrError: ",l)}},rs={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t),o=w().find(s=>s.name==="ocr").testModule.dialog;o.args&&o.args.forEach((s,r)=>{switch(r){case 0:s.value={x:+n[0]?.value||0,y:+n[1]?.value||0,width:+n[2]?.value||0,height:+n[3]?.value||0};break;case 1:s.value=f.pathStrReset(n[4]?.value||"");break}})},parameterReplace:e=>{if(!e.imgPath||e.imgPath==="")e.replaceCurFnArgs(`${e.rect.x},${e.rect.y},${e.rect.width},${e.rect.height}`);else{const t=f.replaceConstantPath(e.imgPath);e.replaceCurFnArgs(`${e.rect.x}, ${e.rect.y}, ${e.rect.width}, ${e.rect.height}, ${t}`)}}},sm=async(e,t)=>{if(e.replaceCurFnArgs){rs.parameterReplace(e),f.apiAutoTip();return}const{imgPath:n,rect:a}=e;console.time("ocr耗时");const o=await Wn(a.x,a.y,a.width,a.height,n);console.timeEnd("ocr耗时");const s=w().find(r=>r.name==="ocr")?.testModule;e.imgPath===""?s.document.example.code=`const ocrUtil = await ocr(${a.x}, ${a.y}, ${a.width}, ${a.height});`:s.document.example.code=`const ocrUtil = await ocr(${a.x}, ${a.y}, ${a.width}, ${a.height}, "${n.replace(/\\/g,"\\\\")}");`,t.showDetails(JSON.stringify(o),"ocr")},rm={title:"识别屏幕/图片指定位置内容",targetMethodName:"ocr",content:"如需识别屏幕内容，图片路径无需填写。如需识别图片内容，需填写图片路径。",args:[{name:"rect",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"识别区域",targetSrc:"imgPath"},{name:"imgPath",componentType:"FileInput",value:"",label:"图片路径"}]},lm=`
declare type OCRResult = {
  position: [
      [number, number],
      [number, number],
      [number, number],
      [number, number]
  ];
  text: string;
  score: number;
};
declare class FindResult {
  centerPos: [number, number];
  text: string;
  score: number;
  constructor(
    position: OCRResult["position"],
    text: string,
    score: number,
    offset?: [number, number]
  );
  public click(): Promise<void>;
  public touch(): Promise<string>;
};
declare class OcrUtil {
  result: OCRResult[];
  private reCall: () => Promise<OcrUtil | undefined>;
  private ori: {
    x: number;
    y: number;
  };
  constructor(originX: number, originY: number, result: OCRResult[], reCall:() => Promise<OcrUtil | undefined>);
  public includes(texts: string[]): boolean;
  public searchText(text: string, offset?: [number, number]) : FindResult[];
  public findText(text: string, offset?: [number, number]) : FindResult | undefined;
  public waitText(text: string,adb?: boolean, sleepMs?: number, maxWaitCount?: number) : Promise<boolean>;
};
declare function ocr(
  x: number,
  y: number,
  width: number,
  height: number,
  imgPath?: string
): Promise<OcrUtil | undefined>;
`,im={name:"ocr",exportFn:{fn:Wn},testModule:{weight:5,dialog:rm,callback:sm,document:om},declaration:lm,auxiliary:rs,helperClass:[ss,Zt]},Xn=Object.freeze(Object.defineProperty({__proto__:null,ocrApi:im},Symbol.toStringTag,{value:"Module"}));class Jn{constructor(t,n){this.rgb=t,this.reCall=n}reCall;getHex=()=>`#${this.rgb.map(t=>t.toString(16).padStart(2,"0")).join("")}`;getRgb=()=>`rgb(${this.rgb.join(",")})`;getRgbValue=()=>this.rgb.join(",");parseColorStr=t=>{const a=[","," ","，","-"].find(s=>t.includes(s));if(!a){console.error("不支持的color字符串");return}return t.split(a).map(s=>parseInt(s))};is=(t,n=[0,0,0])=>{const a=this.parseColorStr(t);return a?a.length===3?this.rgb.every((o,s)=>{const r=n[s];return o>=a[s]-r&&o<=a[s]+r}):(console.error("color格式错误"),!1):!1};waitColor=async(t,n=1e3,a=10,o=[0,0,0],s)=>{if(this.is(t,o))return!0;s&&s(this.getRgbValue(),t);let r=!1;for(;a--;){const l=await this.reCall();if(l&&l.is(t,o)){r=!0;break}else l&&s&&s(l.getRgbValue(),t);await ht.sleep(n)}return r};waitNotColor=async(t,n=1e3,a=10,o=[0,0,0])=>{if(!this.is(t,o))return!0;let s=!1;for(;a--;){const r=await this.reCall();if(r&&!r.is(t,o)){s=!0;break}await ht.sleep(n)}return s}}const Hn=async(e=-1,t=-1,n)=>{const{notAllowedFnId:a}=P();if(!(n&&a.value.includes(n)))try{const o=e===-1?void 0:e,s=t===-1?void 0:t,r=await O.screenColor(o,s);return r.message==="success"?new Jn(r.data,()=>Hn(e,t,n)):void 0}catch(o){console.error("screenColorError: ",o)}},ls={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="screenColor").testModule.dialog.args.forEach((s,r)=>{s.value=+n[r]?.value||0})},parameterReplace:e=>{const{x:t,y:n,replaceCurFnArgs:a}=e;a(t!==void 0&&n!==void 0&&t!==-1&&n!==-1?`${t},${n}`:"")}},cm=async(e,t)=>{if(e.replaceCurFnArgs){const o=ls.parameterReplace(e);return f.apiAutoTip(),o}e.delay>0&&await new Promise(o=>setTimeout(o,e.delay)),console.time("screenColor耗时");const n=await Hn(e.x,e.y);console.timeEnd("screenColor耗时");const a=w().find(o=>o.name==="screenColor")?.testModule;a.document.example.code=`const colorUtil = await screenColor(${e.x}, ${e.y});`,t.showDetails(n&&JSON.stringify(n),"screenColor")},um={howToUse:"识别屏幕指定坐标颜色，返回颜色工具实例",params:[{name:"x",required:!1,instructions:"[屏幕x坐标]值为-1时使用鼠标位置",type:"number",default:"-1"},{name:"y",required:!1,instructions:"[屏幕y坐标]值为-1时使用鼠标位置",type:"number",default:"-1"}],returnValue:{type:"Promise<ColorUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//获取屏幕鼠标所在位置像素点的rgb值
const colorUtil = await screenColor();
const [r,g,b] = colorUtil?.getRgb() || [0,0,0];
        `},searchKeys:["颜色","color","坐标","鼠标"],codeSnippet:"const colorUtil = await screenColor(${1:x}, ${2:y});${0:}"},dm={title:"获得屏幕指定坐标颜色",targetMethodName:"screenColor",content:"获取[指定坐标/鼠标所在坐标]的颜色，返回颜色工具实例。x、y坐标任意值为-1时使用鼠标位置",args:[{name:"x",componentType:"numberInput",value:-1,label:"x坐标"},{name:"y",componentType:"numberInput",value:-1,label:"y坐标"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},pm=`
declare class ColorUtil {
  public rgb: [number, number, number];
  private reCall: () => Promise<ColorUtil | undefined>;
  constructor(
    rgb: [number, number, number],
    reCall: () => Promise<ColorUtil | undefined>
  );
  getHex: () => string;
  /**
   * 获取rgb字符串
   * 如：rgb(255,255,255)
  */
  getRgb: () => string;
  /**
   * 获取rgb值字符串（仅获取值）
   * 如：255,255,255
  */
  getRgbValue: () => string;
  parseColorStr: (color: string) => [number, number, number] | undefined;
  /**
   * 判断颜色是否匹配
   * @param color 颜色字符串
   * @param allowOffsetRange 允许的偏移范围
   * @returns 是否匹配
  */
  is: (color: string, allowOffsetRange?:[number, number, number]) => boolean;
  /**
   * 等待该位置出现预期颜色
   * @param color 预期颜色字符串
   * @param sleepMs 检测间隔，默认1000ms
   * @param maxWaitCount 最大检测次数,默认10次
   * @param allowOffsetRange rgb值允许的偏移范围，默认[0,0,0]
   * @param mismatchCallback 颜色不匹配时的回调
   * @returns 是否匹配
  */
  waitColor: (
    color: string,
    sleepMs?: number,
    maxWaitCount?: number,
    allowOffsetRange?:[number, number, number],
    mismatchCallback?: (curColor: string, expectedColor: string) => void
  ) => Promise<boolean>;
  /**
   * 等待该位置颜色消失
   * @param color 颜色字符串
   * @param sleepMs 检测间隔，默认1000ms
   * @param maxWaitCount 最大检测次数,默认10次
   * @param allowOffsetRange rgb值允许的偏移范围，默认[0,0,0]
   * @returns 是否消失
  */
  waitNotColor: (
    color: string,
    sleepMs?: number,
    maxWaitCount?: number,
    allowOffsetRange?:[number, number, number]
  ) => Promise<boolean>;
}
declare function screenColor(
    x?:number,
    y?:number,
):Promise<ColorUtil | undefined>;
`,mm={name:"screenColor",exportFn:{fn:Hn},testModule:{weight:5,callback:cm,dialog:dm,document:um},declaration:pm,auxiliary:ls,helperClass:[Jn]},Zn=Object.freeze(Object.defineProperty({__proto__:null,screenColorApi:mm},Symbol.toStringTag,{value:"Module"})),is=async(e=-1,t=-1,n=-1,a=-1,o="",s)=>{const{notAllowedFnId:r}=P();if(s&&r.value.includes(s))return!1;const l=ne();o=o.length?o:l.envSetting.screenshotSavePath;try{return await O.screenshot(o,e,t,n,a)}catch(i){return console.error("screenshotError: ",i),!1}},cs={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="screenshot").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:s.value=f.pathStrReset(n[4]?.value||"");break;case 1:s.value=n[0]?.value&&n[1]?.value&&n[2]?.value&&n[3]?.value&&!(+n[0]?.value==-1||+n[1]?.value==-1||+n[2]?.value==-1||+n[3]?.value==-1)||!1;break;case 2:s.componentType==="RectInput"&&(s.value.x=+n[0]?.value>=0?+n[0]?.value:-1,s.value.y=+n[1]?.value>=0?+n[1]?.value:-1,s.value.width=+n[2]?.value||-1,s.value.height=+n[3]?.value||-1);break}})},parameterReplace:e=>{!e.selectRange&&e.path===""?e.replaceCurFnArgs(""):e.selectRange?e.path===""?e.replaceCurFnArgs(`${e.range.x},${e.range.y},${e.range.width},${e.range.height}`):e.replaceCurFnArgs(`${e.range.x+","+e.range.y+","+e.range.width+","+e.range.height}, ${f.replaceConstantPath(e.path)}`):e.replaceCurFnArgs(`-1,-1,-1,-1, ${f.replaceConstantPath(e.path)}`)}},gm=async(e,t)=>{if(e.replaceCurFnArgs){const s=cs.parameterReplace(e);return f.apiAutoTip(),s}e.delay>0&&await new Promise(s=>setTimeout(s,e.delay)),console.time("screenshot耗时"),e.selectRange===!1&&(e.range={x:-1,y:-1,width:-1,height:-1}),await is(e.range.x,e.range.y,e.range.width,e.range.height,e.path),console.timeEnd("screenshot耗时");const n=w().find(s=>s.name==="screenshot")?.testModule,o=ne().envSetting.screenshotSavePath===e.path||e.path==="";e.selectRange?n.document.example.code=`const res = await screenshot(
            	${e.range.x},
            	${e.range.y},
            	${e.range.width},
            	${e.range.height}${o?"":`, "${e.path.replace(/\\/g,"\\\\")}"`});`:n.document.example.code=`const res = await screenshot(${o?"":`, "${e.path.replace(/\\/g,"\\\\")}"`});`,t.showDetails("截图完成","screenshot")},fm={howToUse:"屏幕截图，支持自定义矩形范围截图以及全屏截图",params:[{name:"x",required:!1,instructions:"[范围参数]截图起点x坐标,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"y",required:!1,instructions:"[范围参数]截图起点y坐标,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"width",required:!1,instructions:"[范围参数]截图宽度,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"height",required:!1,instructions:"[范围参数]截图高度,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"path",required:!1,instructions:"截图保存路径",type:"string",default:"设置中的截图保存路径"}],returnValue:{type:"Promise<number>",instructions:"返回1为截图成功。"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//全屏截图且使用默认保存路径
const res = await screenshot();
//自定义截图区域且使用默认保存路径
const res = await screenshot(x,y,width,height);
//自定义截图区域且使用自定义保存路径
const res = await screenshot(x,y,width,height,"E:\\\\image.png");
        `},searchKeys:["截图","屏幕"],codeSnippet:"const res = await screenshot(${1:x}, ${2:y}, ${3:width}, ${4:height});"},ym={title:"截图",targetMethodName:"screenshot",content:"屏幕截图，自定义截图区域时，x、y、width、height任意一个值为-1时，截取全屏幕",args:[{name:"path",componentType:"FileInput",value:"",label:"截图保存路径"},{name:"selectRange",componentType:"switch",value:!1,label:"是否全屏截图",activeText:"自定义截图区域",inactiveText:"全屏截图"},{name:"range",componentType:"RectInput",label:"截图区域",value:{x:-1,y:-1,width:-1,height:-1},displayCondition:["selectRange"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},bm=`
declare function screenshot(
    x?:number,
    y?:number,
    width?: number,
    height?: number,
    path?:string
):Promise<boolean>;
`,hm={name:"screenshot",exportFn:{fn:is},testModule:{weight:5,callback:gm,dialog:ym,document:fm},declaration:bm,auxiliary:cs},Qn=Object.freeze(Object.defineProperty({__proto__:null,screenshotApi:hm},Symbol.toStringTag,{value:"Module"})),ea=async(e=0,t=0,n="normal",a)=>{const{notAllowedFnId:o}=P(),s=ne();if(a&&o.value.includes(a))return;const r=s.envSetting.screenshotSavePath;if((r.trim()??"")===""){oe.error("请先设置截图保存路径");return}try{n==="adb"&&await Et();const l=await O.imgColor(r,e,t);return l.message==="success"?new Jn(l.data,async()=>ea(e,t,n,a)):void 0}catch(l){console.error("screenshotColorError: ",l)}},us={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="screenshotColor").testModule.dialog.args.forEach((s,r)=>{r===2?s.value=n[r]?.value||"normal":s.value=+n[r]?.value||0})},parameterReplace:e=>{const{x:t,y:n,mod:a,replaceCurFnArgs:o}=e;o(a==="adb"?`${t},${n},'adb'`:`${t},${n}`)}},vm=async(e,t)=>{if(e.replaceCurFnArgs){const o=us.parameterReplace(e);return f.apiAutoTip(),o}e.delay>0&&await new Promise(o=>setTimeout(o,e.delay)),console.time("screenshotColor耗时");const n=await ea(e.x,e.y,e.mod);console.timeEnd("screenshotColor耗时");const a=w().find(o=>o.name==="screenshotColor")?.testModule;e.mod==="adb"?a.document.example.code=`const colorUtil = await screenshotColor(${e.x}, ${e.y}, 'adb');`:a.document.example.code=`const colorUtil = await screenshotColor(${e.x}, ${e.y});`,t.showDetails(n&&JSON.stringify(n),"screenshotColor")},_m={howToUse:"识别[屏幕/ADB设备]截图指定坐标颜色，返回颜色工具实例",params:[{name:"x",required:!0,instructions:"图片x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"图片y坐标",type:"number",default:""},{name:"mod",required:!1,instructions:"值为adb时将在调用前执行adb截图操作",type:["'normal'","'adb'"],default:"'normal'"}],returnValue:{type:"Promise<ColorUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//获取屏幕指定位置像素点的rgb值
const colorUtil = await screenshotColor(100, 100);
const [r,g,b] = colorUtil?.getRgb() || [0,0,0];
        `},searchKeys:["颜色","color","坐标","adb","屏幕"],codeSnippet:"const colorUtil = await screenshotColor(${1:x}, ${2:y});"},wm={title:"识别[屏幕/ADB设备]截图指定坐标颜色",targetMethodName:"screenshotColor",content:"识别[屏幕/ADB设备]截图指定坐标颜色，返回颜色工具实例",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"mod",componentType:"select",value:"normal",label:"截图模式",options:["normal","adb"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},xm=`
declare function screenshotColor(
    x:number,
    y:number,
    mod?:'normal'|'adb'
):Promise<ColorUtil | undefined>;
`,Sm={name:"screenshotColor",exportFn:{fn:ea},testModule:{weight:5,callback:vm,dialog:wm,document:_m},declaration:xm,auxiliary:us},ta=Object.freeze(Object.defineProperty({__proto__:null,screenshotColorApi:Sm},Symbol.toStringTag,{value:"Module"})),ds=async(e,t,n,a,o,s)=>"滑动完成。",Tm={title:"滑动",targetMethodName:"slideTo",content:"请输入要滑动的坐标",args:[{name:"fromX",componentType:"numberInput",label:"起始X坐标",value:0},{name:"fromY",componentType:"numberInput",label:"起始Y坐标",value:0},{name:"toX",componentType:"numberInput",label:"结束X坐标",value:0},{name:"toY",componentType:"numberInput",label:"结束Y坐标",value:0},{name:"slideTime",componentType:"numberInput",label:"滑动时间",value:0}]},ps={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="slideTo").testModule.dialog.args.forEach((s,r)=>{s.value=+n[r]?.value||0})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.fromX},${e.fromY},${e.toX},${e.toY},${e.slideTime}`)}},Im=async(e,t)=>{if(e.replaceCurFnArgs){const o=ps.parameterReplace(e);return f.apiAutoTip(),o}console.time("滑动耗时");const n=await ds(e.fromX,e.fromY,e.toX,e.toY,e.slideTime);console.timeEnd("滑动耗时"),t.showDetails(n);const a=w().find(o=>o.name==="slideTo")?.testModule;a&&(a.document.example.code=`const res = await slideTo(${e.fromX}, ${e.fromY}, ${e.toX}, ${e.toY}, ${e.slideTime});`)},km={howToUse:"滑动",params:[{name:"fromX",required:!0,instructions:"起始X坐标",type:"number",default:""},{name:"fromY",required:!0,instructions:"起始Y坐标",type:"number",default:""},{name:"toX",required:!0,instructions:"结束X坐标",type:"number",default:""},{name:"toY",required:!0,instructions:"结束Y坐标",type:"number",default:""},{name:"slideTime",required:!0,instructions:"滑动时间(ms)",type:"number",default:""}],returnValue:{type:"Promise<string>",instructions:"滑动结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await slideTo(100, 100, 200, 200, 1000);"},searchKeys:["ADB","adb","滑动"],codeSnippet:"await slideTo(${1:fromX}, ${2:fromY}, ${3:toX}, ${4:toY}, ${5:slideTime});"},Mm=`
declare function slideTo(
    fromX:number, 
    fromY:number, 
    toX:number, 
    toY:number, 
    slideTime:number
):Promise<string>;
`,$m={name:"slideTo",exportFn:{fn:ds},testModule:{weight:3,dialog:Tm,callback:Im,document:km},declaration:Mm,auxiliary:ps},na=Object.freeze(Object.defineProperty({__proto__:null,slideToApi:$m},Symbol.toStringTag,{value:"Module"})),Cm={title:"点击指定位置",targetMethodName:"touch",content:"请输入要点击的坐标",args:[{name:"targetX",componentType:"numberInput",label:"X坐标",value:0},{name:"targetY",componentType:"numberInput",label:"Y坐标",value:0}]},ms={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="touch").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:s.value=+n[r]?.value||0;break;case 1:s.value=+n[r]?.value||0;break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.targetX}, ${e.targetY}`)}},Pm=async(e,t)=>{if(e.replaceCurFnArgs){const o=ms.parameterReplace(e);return f.apiAutoTip(),o}console.time("点击指定位置耗时");const n=await Ft(e.targetX,e.targetY);console.timeEnd("点击指定位置耗时"),t.showDetails(n);const a=w().find(o=>o.name==="touch")?.testModule;a&&(a.document.example.code=`const res = await touch(${e.targetX}, ${e.targetY});`)},Fm={howToUse:"点击指定位置",params:[{name:"targetX",required:!0,instructions:"X坐标",type:"number",default:""},{name:"targetY",required:!0,instructions:"Y坐标",type:"number",default:""}],returnValue:{type:"Promise<string>",instructions:"ADB设备轻触指定位置结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await touch(100, 100);"},searchKeys:["ADB","adb","点击指定位置","轻触","click","touch"],codeSnippet:"await touch(${1:targetX}, ${2:targetY});"},Am=`
declare function touch(x:number,y:number):Promise<string>;
`,Om={name:"touch",exportFn:{fn:Ft},testModule:{weight:3,dialog:Cm,callback:Pm,document:Fm},declaration:Am,auxiliary:ms},aa=Object.freeze(Object.defineProperty({__proto__:null,touchApi:Om},Symbol.toStringTag,{value:"Module"})),C="__FR_BUILT_IN_API__",ve=K({show:!1,title:"",content:"",callType:"test",callback:()=>{}}),Qt={showDetails:()=>{}},z=K([]),Dm=e=>{Qt.showDetails=e.showDetails},Rm=A({set:()=>{},get:()=>z.map(e=>e.testModule)}),Em=(e,t)=>{const n=z[e];if(z.splice(e,1),z.splice(t,0,n),z[t+1]&&n.testModule){const o=z[t+1].testModule?.weight;n.testModule.weight=o||0}else z[t+1]||(n.testModule.weight=0);const a={};z.forEach((o,s)=>{a[o.name]=s}),localStorage.setItem(C+"API_SORT_MAP",JSON.stringify(a))},Vm=e=>{const t=JSON.parse(localStorage.getItem(C+"API_SORT_MAP")||"{}");if(e instanceof Array)if(Object.keys(t).length>0){const n=new Array(e.length).fill(null),a=[];e.forEach(o=>{const s=z.find(l=>l.name===o.name);if(!/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(o.name))throw new Error("methods中的name不符合js变量命名规范");if(s){console.warn("已存在同名方法，跳过注册");return}const r=t[o.name];r!==void 0?n[r]=o:a.push(o)}),z.splice(0,0,...n.filter(o=>o!==null),...a)}else e.forEach(n=>{const a=z.find(o=>o.name===n.name);if(!/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(n.name))throw new Error("methods中的name不符合js变量命名规范");if(a){console.warn("已存在同名方法，跳过注册");return}z.push(n)});else{const n=z.find(a=>a.name===e.name);if(!/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(e.name))throw new Error("methods中的name不符合js变量命名规范");if(n){console.warn("已存在同名方法，跳过注册");return}z.push(e)}Object.keys(t).length===0?z.sort((n,a)=>a.testModule.weight-n.testModule.weight):z.forEach((n,a)=>{n.testModule.weight=z.length-a})},Lm=(e,t,n,a="test",o,s)=>{const r=z.find(l=>l.name===e);if(t&&n&&(ve.title=t,ve.content=n,ve.show=!0,ve.callType=a),r)if(r.auxiliary?.onDialogOpen&&s&&r.auxiliary.onDialogOpen(()=>{ve.show=!1},...s),t&&n){const l=async()=>{const i={replaceCurFnArgs:o};let u=!1;const g=r.testModule.dialog;let p=0;for(let v=0;v<g.args.length;v++){const b=g.args[v];if((!b.onlyTest||b.onlyTest&&a==="test")&&(i[b.name]=b.value,s&&b.value!==s[v+p]?.value)){if(b.componentType==="RectInput")JSON.stringify({x:s[v+p]?.value,y:s[v+p+1]?.value,width:s[v+p+2]?.value,height:s[v+p+3]?.value})===JSON.stringify(b.value)?p+=3:u=!0;else if(b.componentType==="FileInput"||b.componentType==="DirInput")JSON.stringify(b.value)!==f.pathStrReset(JSON.stringify(s[v+p]?.value))&&(u=!0);else if(JSON.stringify(b.value)!==JSON.stringify(s[v+p]?.value))if(s[v+p]?.value===void 0){const _=r.testModule.document.params?.find(I=>I.name===b.name);(_?.required||JSON.stringify(_?.default).replace(/(^["'`]{1,2})|(["'`]{1,2}$)/g,"")!==JSON.stringify(b.value).replace(/(^["'`]{1,2})|(["'`]{1,2}$)/g,""))&&(u=!0)}else u=!0}}!u&&a==="changeArgs"&&(i.replaceCurFnArgs=()=>{}),r.testModule.callback(i,Qt),ve.show=!1};ve.callback=l}else r.testModule.callback(void 0,Qt,[])},Nm=()=>{const e={};return z.forEach(t=>{if(!t.exportFn)return;const{fn:n}=t.exportFn;if(t.scope){const a=t.scope;e[a]=e[t.scope]||{},e[a].__NS_DATA__={},e[a][t.name]=n,t.helperClass&&t.helperClass.forEach(o=>{const s=o.name;if(s===t.name)throw console.error("helperClass的name不能和api名称相同",JSON.stringify(t)),new Error("helperClass的name不能和api名称相同");if(e[a][s]){console.warn("helperClass的name和已存在的方法名或辅助类类名相同,跳过注入！",JSON.stringify(t));return}e[a][s]=o});return}e[t.name]=n,t.helperClass&&t.helperClass.forEach(a=>{const o=a.name;if(o===t.name)throw console.error("helperClass的name不能和api名称相同",JSON.stringify(t)),new Error("helperClass的name不能和api名称相同");if(e[o]){console.warn("helperClass的name和已存在的方法名或辅助类类名相同,跳过注入！",JSON.stringify(t));return}e[o]=a})}),e},Um=e=>z.map(t=>{const n=t.name;if(t.testModule?.document?.params){const a=t.testModule.document.params.map(o=>o.name).join(",");return`
        const ${n} = async (${a}) => {
          if(window['${C}'].isStop) throw new Error("任务已结束");
          const result = await window['${C}'].${n}(${a}, '${e}');
          return result;
        }
      `}else return`
        const ${n} = async () => {
          if(window['${C}'].isStop) throw new Error("任务已结束");
          const result = await window['${C}'].${n}('${e}');
          return result;
        }
      `}).join(`
`),gs=async(e=!0,t=!1,n=!1)=>{const o=Object.entries(Object.assign({"../invokes/CV/imgSimilarity/index.ts":tn,"../invokes/CV/matchTemplate/index.ts":an,"../invokes/CV/screenDiffTemplates/index.ts":on,"../invokes/CV/screenMatchTemplate/index.ts":sn,"../invokes/FS/readDir/index.ts":rn,"../invokes/FS/readFile/index.ts":ln,"../invokes/FS/writeFile/index.ts":cn,"../invokes/GlobalShortcut/listen/index.ts":un,"../invokes/GlobalShortcut/unlisten/index.ts":dn,"../invokes/GlobalShortcut/waitShortcuts/index.ts":pn,"../invokes/Input/combined/index.ts":mn,"../invokes/Input/keyDown/index.ts":gn,"../invokes/Input/keyUp/index.ts":fn,"../invokes/Input/press/index.ts":yn,"../invokes/Input/text/index.ts":bn,"../invokes/Mouse/click/index.ts":hn,"../invokes/Mouse/clicker/index.ts":vn,"../invokes/Mouse/down/index.ts":_n,"../invokes/Mouse/drag/index.ts":wn,"../invokes/Mouse/move/index.ts":xn,"../invokes/Mouse/pos/index.ts":Sn,"../invokes/Mouse/randomMove/index.ts":Tn,"../invokes/Mouse/setMouseOption/index.ts":In,"../invokes/Mouse/up/index.ts":kn,"../invokes/Mouse/wheel/index.ts":Mn,"../invokes/Preludes/buildForm/index.ts":At,"../invokes/Preludes/log/index.ts":Dt,"../invokes/Preludes/sleep/index.ts":Rt,"../invokes/adbScreenshot/index.ts":Rn,"../invokes/adbState/index.ts":En,"../invokes/clickHomeKey/index.ts":Vn,"../invokes/clickReturnKey/index.ts":Ln,"../invokes/cmd/index.ts":Nn,"../invokes/connectTo/index.ts":Un,"../invokes/cropPicture/index.ts":jn,"../invokes/devices/index.ts":zn,"../invokes/disConnectTo/index.ts":Bn,"../invokes/getImageSize/index.ts":qn,"../invokes/getImgRectInfo/index.ts":Kn,"../invokes/getScreenRectInfo/index.ts":Gn,"../invokes/getScreenSize/index.ts":Yn,"../invokes/ocr/index.ts":Xn,"../invokes/screenColor/index.ts":Zn,"../invokes/screenshot/index.ts":Qn,"../invokes/screenshotColor/index.ts":ta,"../invokes/slideTo/index.ts":na,"../invokes/touch/index.ts":aa})),s=[];for(let r=0;r<o.length;r++){const[l,i]=o[r],u=l.split("/"),g=u[u.length-2],p=i[g+"Api"]||i[g];if(!p){console.error(`找不到${g}Api或${g}模块`);continue}if(e&&p?.disabled){console.warn(`内置API：${p.scope?p.scope+".":""}${p.name}已禁用`);continue}t&&(p.id=ye()),n&&(p.fullPath=await We.resolve(await We.getInstallDir(),"../../../src/a/"+l)),s.push(p)}return s},jm=async()=>{const e=await gs(!0,Ye);e&&Vm([...e])},tt=()=>({genBuiltInApi:Um,dynamicDialog:ve,builtInApiTestModules:Rm,setTestModuleCtx:Dm,invokeDynamicDialog:Lm,exportAllFn:Nm,registerAllInvokeApi:jm,moveBuiltInApiIndex:Em,getApiModules:gs}),w=()=>z,fs={onDialogOpen:async(e,...t)=>{const n=await f.paramsProcess(...t);w().find(s=>s.name==="imgSimilarity"&&s.scope==="CV").testModule.dialog.args.forEach((s,r)=>{switch(r){case 0:case 1:s.componentType==="FileInput"&&(s.value=f.pathStrReset(n[r]?.value||""));break;case 2:s.componentType==="RectInput"&&(s.value.x=+n[2]?.value||0,s.value.y=+n[3]?.value||0,s.value.width=+n[4]?.value||0,s.value.height=+n[5]?.value||0);break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${f.replaceConstantPath(e.pathA)},${f.replaceConstantPath(e.pathB)},${e.rect.x},${e.rect.y},${e.rect.width},${e.rect.height}`)}},zm=async(e,t)=>{if(e.replaceCurFnArgs){const o=fs.parameterReplace(e);return f.apiAutoTip(),o}console.time("imgSimilarity耗时");const n=await Ma(e.pathA,e.pathB,e.rect.x,e.rect.y,e.rect.width,e.rect.height);console.timeEnd("imgSimilarity耗时");const a=w().find(o=>o.name==="imgSimilarity"&&o.scope==="CV")?.testModule;a.document.example.code=`const similarityValue = await CV.imgSimilarity(
        	"${e.pathA.replace(/\\/g,"\\\\")}",
        	"${e.pathB.replace(/\\/g,"\\\\")}",
        	${e.rect.x},${e.rect.y},${e.rect.width},${e.rect.height}
        );
      `,t.showDetails(`当前图片与模板的相似度：${n}`,"imgSimilarity")},Bm={howToUse:"采用直方图对比对图片进行相似度匹配，从原图指定矩形区域与模板图进行匹配",params:[{name:"pathA",required:!0,instructions:"原图路径",type:"string",default:""},{name:"pathB",required:!0,instructions:"模板图路径",type:"string",default:""},{name:"x",required:!1,instructions:"原图x坐标",type:"number",default:"-1"},{name:"y",required:!1,instructions:"原图y坐标",type:"number",default:"-1"},{name:"width",required:!1,instructions:"原图截取宽度",type:"number",default:"-1"},{name:"height",required:!1,instructions:"原图截取高度",type:"number",default:"-1"}],returnValue:{type:"Promise<number>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//识别E:\\\\image.png从起点(0,0)截取宽100高100的区域与E:\\\\template.png进行相似度匹配
const similarityValue = 
  await CV.imgSimilarity('E:\\\\image.png', 'E:\\\\template.png', 0,0,100,100);`},searchKeys:["图片","相似度","匹配","模板","opencv","cv"],codeSnippet:"const similarityValue = await CV.imgSimilarity('${1:pathA}', '${2:pathB}', ${3:x}, ${4:y}, ${5:width}, ${6:height});"},qm={title:"图片相似度匹配",targetMethodName:"imgSimilarity",content:"采用直方图对比对图片进行相似度匹配",args:[{name:"pathA",componentType:"FileInput",value:"",label:"原图路径"},{name:"pathB",componentType:"FileInput",value:"",label:"模板路径"},{name:"rect",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"原图指定矩形区域",targetSrc:"imgPath"}]},Km=`
function imgSimilarity(
    pathA:string,
    pathB:string,
    x?: number,
    y?: number,
    width?: number,
    height?: number
):Promise<number>;
`,Gm={name:"imgSimilarity",scope:"CV",exportFn:{fn:Ma},testModule:{weight:4,dialog:qm,callback:zm,document:Bm},declaration:Km,auxiliary:fs},Pe=new Worker(new URL("/assets/ast.worker-Cx-m7Hg8.js",import.meta.url),{type:"module"}),Ym=(e,t)=>new Promise(n=>{Pe.onmessage=s=>{const r=s.data;if(!r)n(r);else{const l=e?.getPositionAt(r.pos.startIndex),i=e?.getPositionAt(r.pos.endIndex);if(l&&i){const u=new Es(l.lineNumber,l.column,i.lineNumber,i.column);n({scope:r.scope,name:r.name,params:r.params,paramsRange:{startLineNumber:u.startLineNumber,endLineNumber:u.endLineNumber,startColumn:u.startColumn,endColumn:u.endColumn}})}else n(null)}};const a=e?.getValue()||"",o=e?.getOffsetAt(t)||0;Pe.postMessage({type:"analyzeFnInfo",code:a,cursorOffset:o,position:t})}),Wm=(e,t)=>new Promise(n=>{Pe.onmessage=a=>{n(a.data)},Pe.postMessage({type:"methodIsInvoked",code:e,methodFullName:t})}),Xm=(e,t)=>new Promise(n=>{Pe.onmessage=a=>{n(a.data)},Pe.postMessage({type:"parseInvokeApiConfig",code:e,exportApiName:t})}),Jm=()=>{Pe.postMessage({type:"clearCache"})},Hm={analyzeFnInfo:Ym,methodIsInvoked:Wm,parseInvokeApiConfig:Xm,clearCache:Jm},{resolve:Zm}=We,de=S(null),Qm=()=>de,Le=e=>e?.length===0?e:e?.replaceAll("\\","\\\\"),eg=e=>{const t=ne();let{workDir:n,screenshotSavePath:a}=t.envSetting;return e=e.replaceAll("\\","\\\\"),n=n.replaceAll("\\","\\\\"),a=a.replaceAll("\\","\\\\"),e===a?"SCREEN_SHOT_PATH":e.startsWith(a)?`SCREEN_SHOT_PATH+"${e.slice(a.length)}"`:e===n?"WORK_DIR":e.startsWith(n)?`WORK_DIR+"${e.slice(n.length)}"`:`"${e}"`},tg=e=>e?.length===0?e:e?.replaceAll("\\\\","\\"),ng=async e=>{if(e===void 0)return"";const t=ne(),{currentScriptDir:n}=P();return e.replace(/\s/g,"").replace("WORK_DIR+",Le(t.envSetting.workDir)).replace("SCREEN_SHOT_PATH+",Le(t.envSetting.screenshotSavePath)).replace("SCREEN_SHOT_PATH",Le(t.envSetting.screenshotSavePath)).replace("SCREEN_SHOT_DIR+",Le(await Zm(t.envSetting.screenshotSavePath,".."))).replace("SCRIPT_ROOT_DIR+",Le(n.value))},ag=(...e)=>Promise.all(e.map(async t=>{const n=t.type==="string"?await ng(t.value):t.value;return{...t,value:n}})),og=async e=>{if(!e)return;const t=e.getModel();if(!t)return;console.time("getCursorPosFnInfo");const n=e.getPosition(),a=await Hm.analyzeFnInfo(t,n);if(a?.params?.length&&(a.params=a.params.map(s=>{if(s.value)return s;{const r=/(^["'`]{1,2})|(["'`]{1,2}$)/g,l=s.expression.replace(r,"").replace(/\\/g,"")===s.type.replace(r,"").replace(/\\/g,"");return{...s,value:l?s.expression.replace(r,""):""}}})),de.value=a,!de.value){console.timeEnd("getCursorPosFnInfo");return}const o=w().map(s=>({scope:s.scope,...s.testModule,haveAuxiliary:s.auxiliary!==void 0})).find(s=>s.scope?(s.scope||"")===(de.value?.scope||"")&&s.dialog.targetMethodName===de.value?.name:s?.dialog.targetMethodName===de.value.name);if(o===void 0){de.value=null,console.timeEnd("getCursorPosFnInfo");return}de.value&&(de.value.content=o.document?.howToUse,de.value.haveAuxiliary=o.haveAuxiliary),console.timeEnd("getCursorPosFnInfo")};let jt=null;const sg=async()=>{const{findEditor:e}=Lt(),t=e("codeEditBox");t&&(jt&&clearTimeout(jt),jt=setTimeout(()=>{og(t)},50))},rg=async e=>{const t=Object.assign({"../invokes/CV/imgSimilarity/index.ts":tn,"../invokes/CV/matchTemplate/index.ts":an,"../invokes/CV/screenDiffTemplates/index.ts":on,"../invokes/CV/screenMatchTemplate/index.ts":sn,"../invokes/FS/readDir/index.ts":rn,"../invokes/FS/readFile/index.ts":ln,"../invokes/FS/writeFile/index.ts":cn,"../invokes/GlobalShortcut/listen/index.ts":un,"../invokes/GlobalShortcut/unlisten/index.ts":dn,"../invokes/GlobalShortcut/waitShortcuts/index.ts":pn,"../invokes/Input/combined/index.ts":mn,"../invokes/Input/keyDown/index.ts":gn,"../invokes/Input/keyUp/index.ts":fn,"../invokes/Input/press/index.ts":yn,"../invokes/Input/text/index.ts":bn,"../invokes/Mouse/click/index.ts":hn,"../invokes/Mouse/clicker/index.ts":vn,"../invokes/Mouse/down/index.ts":_n,"../invokes/Mouse/drag/index.ts":wn,"../invokes/Mouse/move/index.ts":xn,"../invokes/Mouse/pos/index.ts":Sn,"../invokes/Mouse/randomMove/index.ts":Tn,"../invokes/Mouse/setMouseOption/index.ts":In,"../invokes/Mouse/up/index.ts":kn,"../invokes/Mouse/wheel/index.ts":Mn,"../invokes/Preludes/buildForm/index.ts":At,"../invokes/Preludes/log/index.ts":Dt,"../invokes/Preludes/sleep/index.ts":Rt,"../invokes/adbScreenshot/index.ts":Rn,"../invokes/adbState/index.ts":En,"../invokes/clickHomeKey/index.ts":Vn,"../invokes/clickReturnKey/index.ts":Ln,"../invokes/cmd/index.ts":Nn,"../invokes/connectTo/index.ts":Un,"../invokes/cropPicture/index.ts":jn,"../invokes/devices/index.ts":zn,"../invokes/disConnectTo/index.ts":Bn,"../invokes/getImageSize/index.ts":qn,"../invokes/getImgRectInfo/index.ts":Kn,"../invokes/getScreenRectInfo/index.ts":Gn,"../invokes/getScreenSize/index.ts":Yn,"../invokes/ocr/index.ts":Xn,"../invokes/screenColor/index.ts":Zn,"../invokes/screenshot/index.ts":Qn,"../invokes/screenshotColor/index.ts":ta,"../invokes/slideTo/index.ts":na,"../invokes/touch/index.ts":aa}),n=[],a=Object.entries(t);for(let i=0;i<a.length;i++){const[u,g]=a[i],p=u.split("/"),v=p[p.length-2],b=g[v+"Api"]||g[v];b?n.push(b):console.error(`找不到${v}Api或${v}模块`)}const o=ne(),s=n.map(i=>typeof i=="function"?i(o):i).map(i=>{const u=i.testModule?.document?.codeSnippet;return u===void 0?null:{label:i.name+"()",kind:Y.CompletionItemKind.Function,detail:i.testModule?.document?.howToUse||"",insertText:u,insertTextRules:Y.CompletionItemInsertTextRule.InsertAsSnippet,range:e}}),r=await Promise.all([...Oe().mockCodeSnippetList.value.map(async i=>{const u=i.prefix,g=i.description||"",p=i.content;return{label:u,kind:Y.CompletionItemKind.Snippet,detail:i.name+":"+g,insertText:p?.trim()||"",insertTextRules:Y.CompletionItemInsertTextRule.InsertAsSnippet,range:e}})]);return[...s.filter(i=>i!==null),...r]},f={getFnInfo:Qm,paramsProcess:ag,createDependencyProposals:rg,pathStrProcess:Le,pathStrReset:tg,apiAutoTip:sg,replaceConstantPath:eg},lg=e=>`
declare class RFormUtil {
  constructor(form: RendererList[]);
  /**
   * 获取表单字段的值。
   *
   * @template T 字段值的类型，默认为 number | string | string[] | boolean | object[]
   *
   * @param {FieldType} fieldType 字段类型。
   * @param {string} label 字段标签。
   * @param {T} failValue 当字段不存在或组不启用时返回的失败值。
   * @param {string} [groupLabel="*脚本设置"] 组标签，默认为 "*脚本设置"。
   *
   * @returns 字段的值，如果字段不存在或组不启用，则返回 failValue。
   */
  public getFieldValue<T = string | number | boolean | string[] | object[]>(
    fieldType: FieldType, 
    label: string, 
    failValue: T, 
    groupLabel?: string
  ): T;
  /**
   * 通过 id 获取表单字段的值。
   *
   * @template T 字段值的类型，默认为 number | string | string[] | boolean | object[]
   *
   * @param {string} id 字段 id。
   * @param {T} failValue 当字段不存在或组不启用时返回的失败值。
   *
   * @returns 字段的值，如果字段不存在或组不启用，则返回 failValue。
   */
  public getFieldValueById<T = number | string | string[] | boolean | object[]>(
    id: string,
    failValue: T
  ): T;
}
${e}
declare const isStop: boolean;
declare const SCRIPT_ID: string;

declare function setAllTask(num: number): void;
declare function setCurTask(num: number): void;
declare function getAllTask(): number;
declare function getCurTask(): number;
declare function getCurTaskName(): string;
declare function nextTask(name: string): void;
declare function getTaskStatus():("" | "success" | "warning" | "exception");
declare function setTaskEndStatus(status: "success" | "warning" | "exception" | "", endMessage?: string): void;
/**
 * 获取自定义表单
 * @returns {Promise<RFormUtil>}
*/
declare function getCustomizeForm(): Promise<RFormUtil>;
declare const abortSignalInScript: AbortController;
declare const startScriptSignal: AbortController;
declare function removeIntervals(): void;
declare const rendererList: RendererList[];
declare function getScriptId(): string;
declare function changeScriptRunState(state: boolean | "stop", taskId?: string) : void;

/**
 * 复制文本到剪贴板。
 * @param {string} text 要复制的文本。
*/
declare function copyText(text: string): Promise<void>;

/**
 * 从剪贴板读取文本。
 * @returns {Promise<string>}
*/
declare function readClipboardFirstText(): Promise<string>;

declare function clearLogOutput() : {
  time: string;
  log: string;
  type: "success" | "danger" | "info" | "warning";
}[];
declare function replaceRendererList(newRendererList: RendererList[]) : void;

declare function pushElement(elem: BuildFormItems): void;
`,ig=`
declare namespace BuildFormItem {
  type Base = {
    targetGroupLabel: string;
    enable?: boolean;
    label: string;
  };
  type StripBase<T> = {
    [P in keyof T as Exclude<P, keyof Base>]: T[P];
  };
  type Input = Base & {
    type: FieldType.Input | "input";
  } & InputListItem;
  type Select = Base & {
    type: FieldType.Select | "select";
  } & SelectListItem;
  type Check = Base & {
    type: FieldType.Check | "check";
  } & CheckListItem;
  type Picker = Base & {
    type: FieldType.Picker | "picker";
  } & PickerListItem;
}

declare type BuildFormItems =
  | BuildFormItem.Input
  | BuildFormItem.Select
  | BuildFormItem.Check
  | BuildFormItem.Picker;
`,cg=`
declare namespace SelectType {
  type Multiple<T> = {
    multiple: true;
    value: T[];
    limit?: number;
  };
  type GroupOption<T extends string | number | boolean = string> = {
    group: true;
    options: {
      groupLabel: string;
      options: T[] | OptionItem<T>[];
    }[];
  };
  type ConstantOption<T extends string | number | boolean = string> = {
    group?: false;
    options: T[] | OptionItem<T>[];
  };
  type Single<T> = {
    multiple?: false;
    value: T;
  };
  type Base<
    T extends string | number | boolean,
    Opt extends ConstantOption<T> | GroupOption<T>,
    Val extends Single<T> | Multiple<T>
  > = Opt & Val;
  type Default<T extends string | number | boolean = string> =
    ConstantOption<T> & Single<T>;
}
declare type OptionItem<T extends string | number | boolean = string> = {
  label: string;
  value: T;
};
declare type BaseListItem = {
  label: string;
  id?: string;
};
declare type TextInputItem = {
  inputType?: "text";
  mod?: "password" | "textarea" | "text";
  placeholder?: string;
  clearable?: boolean;
  showPassword?: boolean;
  maxlength?: number;
  showWordLimit?: boolean;
  autosize?: [number | undefined, number | undefined] | number | boolean;
} & OptionItem<string> &
  BaseListItem;
declare type NumberInputItem = {
  inputType: "number";
  min?: number;
  max?: number;
  step?: number;
  stepStrictly?: boolean;
  precision?: number;
  controlsPosition?: "right" | "";
  controls?: boolean;
  valueOnClear?: number | "max" | "min";
} & OptionItem<number> &
  BaseListItem;
declare type RangeInputItem = {
  inputType: "range";
  value: [number, number];
  limit?: [number, number];
  controls?: boolean;
} & BaseListItem;
declare type FileInputItem<Multiple extends boolean> = {
  inputType: "file";
  multiple: Multiple extends true ? true : false | undefined;
  value: Multiple extends true ? string[] : string;
} & BaseListItem;
declare type DirInputItem = {
  inputType: "dir";
  value: string;
} & BaseListItem;
declare type InputListItem =
  | TextInputItem
  | NumberInputItem
  | RangeInputItem
  | DirInputItem
  | FileInputItem<true>
  | FileInputItem<false>;
declare type BaseSelectItem<T extends string | number | boolean> =
  | SelectType.Default<T>
  | SelectType.Base<T, SelectType.ConstantOption<T>, SelectType.Multiple<T>>
  | SelectType.Base<T, SelectType.GroupOption<T>, SelectType.Single<T>>
  | SelectType.Base<T, SelectType.GroupOption<T>, SelectType.Multiple<T>>;
declare type SegmentedOption<T extends string | number | boolean> =
  | {
      label: string;
      value: T;
      disabled?: boolean;
      [key: string]: any;
    }
  | T;
declare type SegmentedItem<T extends string | number | boolean> = {
  segmented: true;
  options: SegmentedOption<T>[];
  value: T;
  multiple?: false /*适应BaseSelectItem的属性*/;
};
declare type SegmentedItems = (
  | SegmentedItem<string>
  | SegmentedItem<number>
  | SegmentedItem<boolean>
) &
  BaseListItem;
declare type BaseSelectItems = (
  | BaseSelectItem<string>
  | BaseSelectItem<number>
  | BaseSelectItem<boolean>
) & {
  segmented?: false; //适应SegmentedItem的属性
} & BaseListItem;
declare type SelectListItem = BaseSelectItems | SegmentedItems;
declare type CheckListItem = { checked: boolean } & BaseListItem;
declare namespace PickerItem {
  type DateTimeProp =
    | {
        isRange?: false;
        value: Date;
        placeholder?: string;
      }
    | {
        isRange?: false;
        valueFormat: string;
        value: string;
        placeholder?: string;
      }
    | {
        isRange: true;
        valueFormat: string;
        value: [string, string] | [];
        rangeSeparator?: string;
        startPlaceholder?: string;
        endPlaceholder?: string;
      }
    | {
        isRange: true;
        value: [Date, Date] | [];
        rangeSeparator?: string;
        startPlaceholder?: string;
        endPlaceholder?: string;
      };
  type PTime = {
    pickerType: "time";
    clearable?: boolean;
    disabledHours?: (role: string, comparingDate?: any) => number[];
    disabledMinutes?: (
      hour: number,
      role: string,
      comparingDate?: any
    ) => number[];
    disabledSeconds?: (
      hour: number,
      minute: number,
      role: string,
      comparingDate?: any
    ) => number[];
  } & DateTimeProp;
  type PDate = {
    pickerType: "date";
    clearable?: boolean;
  } & DateTimeProp;
  type Color<Alpha extends boolean> = {
    pickerType: "color";
    enableAlpha?: Alpha;
    colorFormat?:
      | "hsl"
      | "hsv"
      | "hex"
      | "rgb"
      | (Alpha extends true ? "hsla" | "hsva" | "hexa" | "rgba" : undefined);
    predefine?: string[];
    value: string;
  };
}
declare type PickerListItem = (
  | PickerItem.PTime
  | PickerItem.PDate
  | PickerItem.Color<true>
  | PickerItem.Color<false>
) &
  BaseListItem;
declare type RendererList = {
  id?: string;
  groupLabel: string;
  enable: boolean;
  checkList: CheckListItem[];
  inputList: InputListItem[];
  selectList: SelectListItem[];
  pickerList: PickerListItem[];
};
declare type RendererItem =
  | CheckListItem
  | InputListItem
  | SelectListItem
  | PickerListItem;
`,ug=()=>{const e=Object.assign({"./CV/imgSimilarity/index.ts":tn,"./CV/matchTemplate/index.ts":an,"./CV/screenDiffTemplates/index.ts":on,"./CV/screenMatchTemplate/index.ts":sn,"./FS/readDir/index.ts":rn,"./FS/readFile/index.ts":ln,"./FS/writeFile/index.ts":cn,"./GlobalShortcut/listen/index.ts":un,"./GlobalShortcut/unlisten/index.ts":dn,"./GlobalShortcut/waitShortcuts/index.ts":pn,"./Input/combined/index.ts":mn,"./Input/keyDown/index.ts":gn,"./Input/keyUp/index.ts":fn,"./Input/press/index.ts":yn,"./Input/text/index.ts":bn,"./Mouse/click/index.ts":hn,"./Mouse/clicker/index.ts":vn,"./Mouse/down/index.ts":_n,"./Mouse/drag/index.ts":wn,"./Mouse/move/index.ts":xn,"./Mouse/pos/index.ts":Sn,"./Mouse/randomMove/index.ts":Tn,"./Mouse/setMouseOption/index.ts":In,"./Mouse/up/index.ts":kn,"./Mouse/wheel/index.ts":Mn,"./Preludes/buildForm/index.ts":At,"./Preludes/log/index.ts":Dt,"./Preludes/sleep/index.ts":Rt,"./adbScreenshot/index.ts":Rn,"./adbState/index.ts":En,"./clickHomeKey/index.ts":Vn,"./clickReturnKey/index.ts":Ln,"./cmd/index.ts":Nn,"./connectTo/index.ts":Un,"./cropPicture/index.ts":jn,"./devices/index.ts":zn,"./disConnectTo/index.ts":Bn,"./getImageSize/index.ts":qn,"./getImgRectInfo/index.ts":Kn,"./getScreenRectInfo/index.ts":Gn,"./getScreenSize/index.ts":Yn,"./ocr/index.ts":Xn,"./screenColor/index.ts":Zn,"./screenshot/index.ts":Qn,"./screenshotColor/index.ts":ta,"./slideTo/index.ts":na,"./touch/index.ts":aa}),t={root:[]};Object.keys(e).forEach(l=>{let i,u;if(l.split("/").length===4?u=l.split("/")[2]:u=l.split("/")[1],i=e[l.replace("declaration.ts","index.ts")][u+"Api"],!i){console.error(`找不到${u}Api`,e[l.replace("declaration.ts","index.ts")],l);return}const{declaration:g}=i,p=i.scope;p?(t[p]||(t[p]=[]),t[p].push(g)):t.root.push(g)});let a="";Object.keys(t).forEach(l=>{l==="root"?a+=t[l].join(`
`):a+=`declare namespace ${l} {
${t[l].join(`
`)}
}
`});const o=`declare type Key = ${et.map(l=>`"${l.split(":")[1]}"`).join("|")};`,s=Kc(),r=lg(s);return`
${yo.trim()}
${o.trim()}
${r.trim()}
${ig.trim()}
${cg.trim()}
${a.trim()}
`.trim()},dg=S("10px"),pg=S(1),Vt=Vs(),mg=S("none"),gg=A(()=>Vt.value?"#ffffff33":"#00000033"),He=A(()=>Vt.value?"#272727":"#f6f6f6"),fg=A(()=>Vt.value?"#000":"#fff"),yg=A(()=>He?.value?He.value==="#272727"?"#f6f6f6":"#272727":"#f6f6f6"),bg=A(()=>He?.value?He.value==="#272727"?"#f6f6f633":"#27272733":"#f6f6f633"),nt=()=>({borderRadius:dg,appOpacity:pg,borderColor:gg,appTransform:mg,isDark:Vt,appAsideBgColor:He,appBackground:fg,oppositeBgColor:yg,oppositeBgColorOpacity33:bg}),hg="codeEditBox";Y.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1});Y.typescript.typescriptDefaults.setCompilerOptions({target:Y.typescript.ScriptTarget.ESNext,module:Y.typescript.ModuleKind.ESNext,moduleResolution:Y.typescript.ModuleResolutionKind.NodeJs,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,esModuleInterop:!0,noEmit:!0,typeRoots:["node_modules/@types"]});Y.register({id:"typescript",extensions:[".ts"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"]});Y.typescript.javascriptDefaults.setEagerModelSync(!0);Y.typescript.typescriptDefaults.setEagerModelSync(!0);Y.registerCompletionItemProvider("typescript",{provideCompletionItems:async function(e,t){const{createDependencyProposals:n}=f,a=e.getWordUntilPosition(t),o={startLineNumber:t.lineNumber,endLineNumber:t.lineNumber,startColumn:a.startColumn,endColumn:a.endColumn};return{suggestions:await n(o)}}});let ha=!1;const vg=S(!1),_g=Y.getLanguages(),wg=["javascript","typescript","json"];_g.forEach(e=>{wg.indexOf(e.id)===-1&&Y.setLanguageConfiguration(e.id,{})});const we=[],xg=(e,t,n=!1,a)=>{const o=we.find(g=>g.domId===e)?.instance;if(!o){console.error("domId对应的编辑器实例不存在！");return}const s=o.getSelection(),{startLineNumber:r,startColumn:l,endLineNumber:i,endColumn:u}=a||s;if(n){const g=o.getValue(),p=g.indexOf("请勿删除，此声明会在脚本读取时用到！")===-1?g:g.replace(g.substring(0,g.indexOf(" */")+3),"");return o.setValue(t+`
`+p)}o.executeEdits("",[{range:new qs(r,l,i,u),text:t,forceMoveMarkers:!0}]),o.focus(),o.setPosition({column:l+t.length,lineNumber:r})};let ut=null;const Sg=(e,t)=>{ut&&clearTimeout(ut),ut=setTimeout(()=>{const n=we.find(a=>a.domId===e)?.instance;if(!n){console.warn("无法设置文本，编辑器实例可能已经被销毁。");return}n.setValue(""),n.setValue(t),clearTimeout(ut)},200)},Tg=e=>we.find(t=>t.domId===e)?.instance,Ig=e=>we.find(t=>t.domId===e)?.value,Lt=()=>{!self.MonacoEnvironment&&(self.MonacoEnvironment={getWorker(u,g){return g==="json"?new Ls:g==="css"||g==="scss"||g==="less"?new Ns:g==="html"||g==="handlebars"||g==="razor"?new Us:["typescript","javascript"].includes(g)?new js:new zs}});let e="",t;const n=S("");let a=[];return{editorInit:async(u,g=!0,p=!0)=>{ha||(Y.typescript.typescriptDefaults.setExtraLibs([{content:ug()}]),ha=!0);const v=ne();let b="vs";const _=v.editor.theme.value;if(_==="跟随全局主题"){const{isDark:R}=nt();b=R.value?"vs-dark":"vs"}else b=_==="明亮"?"vs":"vs-dark";if(we.find(R=>R.domId===u)){console.error("domId对应的编辑器实例已存在！");return}const F=document.getElementById(u);if(!F){console.error("domId对应的dom不存在！");return}e=u,t=Ks.create(F,{value:n.value,language:"typescript",automaticLayout:!0,theme:b,foldingStrategy:"indentation",renderLineHighlight:"all",selectOnLineNumbers:!0,tabSize:2,minimap:{enabled:p},readOnly:!1,fontSize:16,scrollBeyondLastLine:!1,overviewRulerBorder:!1}),we.push({domId:u,instance:t,value:n}),setTimeout(()=>{a.forEach(R=>{t&&R(t)})}),t.onDidChangeModelContent(R=>{t&&(n.value=t.getValue())})},disposeEditor:()=>{const u=we.findIndex(g=>g.domId===e);t?.dispose(),u!==-1&&we.splice(u,1),t=void 0},findEditor:Tg,getEditorValue:Ig,registerEditorEvent:(u,g)=>{u==="mounted"&&a.push(g)},unRegisterEditorEvent:u=>{u==="mounted"&&(a=[])},insertText:xg,setText:Sg,formatCode:()=>{t?.getAction("editor.action.formatDocument")?.run()},editorValue:Bs(n),openOperationRecordDrawer:vg}},kg=S("-1"),Mg=S(""),$g=S(_r()),Cg=S(""),Pg=S(""),Fg=S("translateX(0)"),Ag=S("relative"),Og=S(-1),Dg=S(!1),Rg=K({originData:"",lastData:"",version:"",description:"",name:"未命名脚本",savePath:"",declare:!1}),{insertText:Eg}=Lt(),Vg=()=>{Eg(hg,`/**
 * 请勿删除，此声明会在脚本读取时用到！
 * @version:${_e.version}
 * @name:${_e.name}
 * @description:${_e.description}
 */`,!0),_e.description="无",_e.name="未命名脚本",_e.version="v1.0",_e.visible=!1},_e=K({visible:!1,name:"未命名",version:"v1.0",description:"无",title:"插入脚本声明",targetFn:Vg}),Lg=K({savePath:"",visible:!1,cb:()=>{}}),Ng=K({visible:!1,cb:()=>{},close_cb:()=>{}}),Fe=()=>({openId:kg,tempEditorValue:Mg,preloadText:$g,preloadPath:Cg,curScriptDir:Pg,contentTransform:Fg,asideBarPos:Ag,testApiWinId:Og,isEditing:Dg,fileInfo:Rg,declareMod:_e,saveMod:Lg,autoSaveDialog:Ng}),Ug={class:"btns"},jg=W({__name:"EditorHeader",setup(e){const t=ne(),{openId:n,tempEditorValue:a,preloadText:o,preloadPath:s,contentTransform:r,asideBarPos:l,fileInfo:i,declareMod:u,saveMod:g,autoSaveDialog:p,isEditing:v}=Fe(),{getEditorValue:b,openOperationRecordDrawer:_}=Lt(),I=A(()=>{const M=b("codeEditBox");return M?M.value!==i.originData:!i.originData}),F=async()=>{{G({title:"提示",message:"playground环境下无法打开调试窗口,请前往API调试",type:"warning",position:"bottom-right"});return}},R=async()=>{{G({title:"提示",message:"playground环境下无法打开鼠标工具",type:"warning",position:"bottom-right"});return}},N=async()=>{_.value=!_.value},le=()=>{l.value="relative",r.value="translateX(0)",v.value=!1,xe.replace("/script/setting")},Z=async()=>{{G({title:"提示",message:"playground环境下无法打开脚本文件",type:"warning",position:"bottom-right"});return}},se=()=>{const M=b("codeEditBox"),y=()=>{a.value=M?.value||"",p.visible=!1,xe.replace({path:"/script/run"}),l.value="relative",r.value="translateX(0)"},B=async()=>{const Q=await X();y(),Q||G({title:"保存失败",message:"直接运行最后一次保存的版本",type:"error"})};M?.value!==i.originData?t.editor.runAutoSave?B():(p.cb=B,p.close_cb=y,p.visible=!0):y()},X=async()=>{if(i.declare){const M=b("codeEditBox");return Oe().mockScriptList.value.find(y=>y.id===n.value).content=M?.value||"",i.originData=M?.value||"",G({title:"提示",message:"保存成功",type:"success",position:"bottom-right"}),!0}else return G({title:"保存失败",message:"保存之前请先在脚本头部插入'脚本声明'或者将脚本声明补充完整",type:"error",position:"bottom-right"}),!1},be=ce();Qe(be);const ue=()=>{xe.replace({path:"/script/list"}),o.value="",l.value="relative",r.value="translateX(0)"};return(M,y)=>{const B=kt,Q=me,U=te,D=Mt,Me=vr;return h(),T(Me,{title:c(i).name,height:35,"allow-drag":"",onBack:ue},{before:d(()=>[Tt(x("span",null,"*",512),[[It,c(I)]]),m(B,{size:"small",type:c(i).declare?"success":"warning"},{default:d(()=>[k(E(c(i).version),1)]),_:1},8,["type"]),c(i).declare?q("",!0):(h(),T(Q,{key:0,"w-50px":"","mr-5px":"",link:"",size:"small",type:"primary",onClick:y[0]||(y[0]=Re=>c(u).visible=!0),style:{"pointer-events":"all"}},{default:d(()=>y[1]||(y[1]=[k("插入声明")])),_:1}))]),default:d(()=>[x("div",Ug,[y[9]||(y[9]=x("div",{class:"dragable","data-tauri-drag-region":"",style:{cursor:"move"}},null,-1)),m(D,{class:"box-item",effect:"dark",content:"显示操作录制面板",placement:"bottom"},{default:d(()=>[m(Q,{size:"small",onClick:N,circle:""},{default:d(()=>[m(U,{size:"large"},{default:d(()=>y[2]||(y[2]=[x("span",{"i-solar-videocamera-record-outline":""},null,-1)])),_:1})]),_:1})]),_:1}),m(D,{class:"box-item",effect:"dark",content:"打开鼠标工具",placement:"bottom"},{default:d(()=>[m(Q,{size:"small",onClick:R,circle:""},{default:d(()=>[m(U,{size:"large"},{default:d(()=>y[3]||(y[3]=[x("span",{"i-solar-mouse-linear":""},null,-1)])),_:1})]),_:1})]),_:1}),m(D,{class:"box-item",effect:"dark",content:"打开调试窗口",placement:"bottom"},{default:d(()=>[m(Q,{size:"small",onClick:F,circle:""},{default:d(()=>[m(U,{size:"large"},{default:d(()=>y[4]||(y[4]=[x("span",{"i-mdi-function-variant":""},null,-1)])),_:1})]),_:1})]),_:1}),m(D,{class:"box-item",effect:"dark",content:"前往脚本设置",placement:"bottom"},{default:d(()=>[m(Q,{size:"small",onClick:le,circle:""},{default:d(()=>[m(U,{size:"large"},{default:d(()=>y[5]||(y[5]=[x("span",{"i-solar-settings-linear":""},null,-1)])),_:1})]),_:1})]),_:1}),m(D,{class:"box-item",effect:"dark",content:"打开脚本",placement:"bottom"},{default:d(()=>[m(Q,{size:"small",onClick:Z,circle:""},{default:d(()=>[m(U,{size:"large"},{default:d(()=>y[6]||(y[6]=[x("span",{"i-mdi-folder-eye-outline":""},null,-1)])),_:1})]),_:1})]),_:1}),m(D,{class:"box-item",effect:"dark",content:"运行脚本",placement:"bottom"},{default:d(()=>[m(Q,{size:"small",onClick:se,circle:""},{default:d(()=>[m(U,{size:"large"},{default:d(()=>y[7]||(y[7]=[x("span",{"i-mdi-play-circle-outline":""},null,-1)])),_:1})]),_:1})]),_:1}),m(D,{class:"box-item",effect:"dark",content:"[Ctrl+S]保存",placement:"bottom"},{default:d(()=>[m(Q,{size:"small",type:"primary",onClick:X,circle:""},{default:d(()=>[m(U,{size:"large"},{default:d(()=>y[8]||(y[8]=[x("span",{"i-mdi-content-save-outline":""},null,-1)])),_:1})]),_:1})]),_:1})]),qe(M.$slots,"default",{},void 0,!0)]),_:3},8,["title"])}}}),zg=H(jg,[["__scopeId","data-v-6c8cd3a9"]]),Bg="/assets/icon64x64-BkA5owIZ.png",qg=S({version:"",desc:"",downloadUrl:[],history:[],forceUpdate:!1,updateTime:"",openDialog:!1}),Kg=async e=>{{G({title:"提示",message:"当前已是最新版本",type:"success",position:"bottom-right"});return}},Gg=async e=>{e.pwd.length>0&&($n(e.pwd),G({title:"提示",message:"提取码已复制到剪切板",type:"success",position:"bottom-right"})),await Gs("open_in_default_browser",{url:e.url})},Yg=()=>({appVersionInfo:qg,goAppUpdate:Kg,goDownloadNewApp:Gg}),Wg={class:"dialog-footer"},Xg={key:0,"data-tauri-drag-region":"",class:"titlebar",style:{cursor:"move"}},Jg={class:"title","data-tauri-drag-region":"",style:{cursor:"move"}},Hg={class:"text"},Zg={key:0,"ml-4":"","justify-center":"",flex:"","flex-row":"","items-center":""},Qg={key:0,class:"api-test-bar","data-tauri-drag-region":"",style:{cursor:"move"}},ef={key:1,"data-tauri-drag-region":"",flex:"","flex-1":"","flex-row":"","items-center":"","justify-center":""},tf={class:"btn"},nf={key:0,"i-mdi-fullscreen":""},af={key:1,"i-mdi-fullscreen-exit":""},of={key:1,class:"titlebar","data-tauri-drag-region":""},sf={class:"btn-content"},rf={key:0,"i-mdi-fullscreen":""},lf={key:1,"i-mdi-fullscreen-exit":""},cf=W({__name:"AutoTitleBar",setup(e){Ze(M=>({db7cf692:c(v),"5a2cec5a":c(le),"7fdd7ff4":c(ue)}));const{info:t,searchInfo:n,windowInnerWidth:a,clickMinimize:o}=Ot(),{goInstallDeps:s}=Rr(),{controlDeviceInfo:r}=ke(),{isEditing:l,fileInfo:i}=Fe();Lt();const{showTour:u}=Fn(),g=S(!1),p=()=>{g.value=!g.value},v=A(()=>l.value?"35px":"40px"),b=S(!1),_=()=>{o.value=!0},I=async()=>{{const{unmaximizeSize:M,maximizeSize:y}=St();N.value?M():y(),N.value=!N.value;return}},F=async()=>{},{isDark:R}=nt(),N=S(!1),le=A(()=>R.value?"#272727":"#f6f6f6");S("playground");const Z=ne(),se=async()=>{},X=A(()=>!1),be=A(()=>t.showContentType==="apiTest"&&a.value>=820),ue=A(()=>be.value||t.showContentType!=="apiTest"?"relative":"absolute");return Ae(async()=>{}),wa(()=>{}),(M,y)=>{const B=me,Q=$t,U=Ys,D=Te,Me=kt,Re=Ct,J=te,at=Mt,Ee=zg;return h(),$(ae,null,[m(Q,{modelValue:c(b),"onUpdate:modelValue":y[1]||(y[1]=L=>re(b)?b.value=L:null),title:"退出程序"},{footer:d(()=>[x("span",Wg,[m(B,{onClick:y[0]||(y[0]=L=>b.value=!1)},{default:d(()=>y[17]||(y[17]=[k("取消")])),_:1}),m(B,{type:"danger",onClick:F},{default:d(()=>[k(E(c(l)?"保存并":"")+"退出",1)]),_:1})])]),default:d(()=>[y[18]||(y[18]=x("div",null,"确定要退出程序吗?",-1))]),_:1},8,["modelValue"]),m(bt,{"enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutDown"},{default:d(()=>[c(l)?c(l)?(h(),$("div",of,[m(Ee,null,{default:d(()=>[x("div",sf,[m(B,{link:"",class:"titlebar-button",onClick:y[12]||(y[12]=L=>c(l)&&c(u)())},{default:d(()=>[m(J,null,{default:d(()=>y[27]||(y[27]=[x("span",{"i-mdi-lightbulb-question-outline":""},null,-1)])),_:1})]),_:1}),m(B,{link:"",class:"titlebar-button",onClick:y[13]||(y[13]=L=>c(l)&&p())},{default:d(()=>[m(J,null,{default:d(()=>[x("span",{"i-solar-pin-bold-duotone":"",style:ie({color:c(g)?"var(--el-color-primary-dark-2)":"var(--color)"})},null,4)]),_:1})]),_:1}),m(B,{link:"",class:"titlebar-button",onClick:y[14]||(y[14]=L=>c(l)&&_())},{default:d(()=>[m(J,null,{default:d(()=>y[28]||(y[28]=[x("span",{"i-mdi-minus":""},null,-1)])),_:1})]),_:1}),m(B,{link:"",class:"titlebar-button",onClick:y[15]||(y[15]=L=>c(l)&&I())},{default:d(()=>[m(J,null,{default:d(()=>[c(N)?(h(),$("span",lf)):(h(),$("span",rf))]),_:1})]),_:1}),m(B,{link:"",class:"titlebar-button danger",onClick:y[16]||(y[16]=L=>c(l)&&(b.value=!0))},{default:d(()=>[m(J,null,{default:d(()=>y[29]||(y[29]=[x("span",{"i-mdi-window-close":""},null,-1)])),_:1})]),_:1})])]),_:1})])):q("",!0):(h(),$("div",Xg,[x("div",Jg,[x("div",Hg,[m(U,{style:{width:"20px",height:"20px"},src:c(Bg)},null,8,["src"]),m(D,null,{default:d(()=>[k(E(c(t).title),1)]),_:1}),c(r).id.length?(h(),$("div",Zg,[m(D,null,{default:d(()=>y[19]||(y[19]=[k("正在被")])),_:1}),m(Me,{type:"warning"},{default:d(()=>[k(E(c(r).id),1)]),_:1}),m(D,null,{default:d(()=>y[20]||(y[20]=[k("控制")])),_:1})])):q("",!0)]),m(bt,{"enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutDown"},{default:d(()=>[c(be)?(h(),$("div",Qg,[m(Re,{class:"search-ipt",modelValue:c(t).apiTest.searchValue,"onUpdate:modelValue":y[2]||(y[2]=L=>c(t).apiTest.searchValue=L),clearable:"",placeholder:"可输入API的关键字对API进行筛选"},null,8,["modelValue"]),m(B,{class:"output-btn",onClick:y[3]||(y[3]=L=>c(t).apiTest.openOutput=!0),circle:""},{default:d(()=>[m(J,null,{default:d(()=>y[21]||(y[21]=[x("span",{"i-mdi-square-rounded-badge-outline":""},null,-1)])),_:1})]),_:1})])):(h(),$("div",ef,[c(n).show&&c(n).target===c(Jt).ScriptList?(h(),T(Re,{key:0,class:"search-ipt",modelValue:c(n).content,"onUpdate:modelValue":y[4]||(y[4]=L=>c(n).content=L),clearable:"",placeholder:"搜索脚本名称或备注"},null,8,["modelValue"])):q("",!0),c(n).show&&c(n).target===c(Jt).CodeSnippetList?(h(),T(Re,{key:1,class:"search-ipt",modelValue:c(n).content,"onUpdate:modelValue":y[5]||(y[5]=L=>c(n).content=L),clearable:"",placeholder:"搜索代码片段:名称、备注、前缀"},null,8,["modelValue"])):q("",!0)]))]),_:1})]),x("div",tf,[c(Z).app.dependenceState==="不可用"?(h(),T(at,{key:0,effect:"light",content:"基础功能不可用，点我安装依赖",placement:"bottom"},{default:d(()=>[x("div",{class:"titlebar-button warning-btn",onClick:y[6]||(y[6]=L=>c(s)())},[m(J,null,{default:d(()=>y[22]||(y[22]=[x("span",{"i-mdi-tools":""},null,-1)])),_:1})])]),_:1})):q("",!0),c(X)&&c(Z).view.showUpdateInTitleBar?(h(),T(at,{key:1,effect:"light",content:"有新版本，点我更新",placement:"bottom"},{default:d(()=>[x("div",{class:"titlebar-button setup-btn",onClick:se},[m(J,null,{default:d(()=>y[23]||(y[23]=[x("span",{"i-mdi-cloud-download-outline":""},null,-1)])),_:1})])]),_:1})):q("",!0),m(B,{link:"",class:"titlebar-button",onClick:y[7]||(y[7]=L=>!c(l)&&c(u)())},{default:d(()=>[m(J,null,{default:d(()=>y[24]||(y[24]=[x("span",{"i-mdi-lightbulb-question-outline":""},null,-1)])),_:1})]),_:1}),m(B,{link:"",class:"titlebar-button",onClick:y[8]||(y[8]=L=>!c(l)&&p())},{default:d(()=>[m(J,null,{default:d(()=>[x("span",{"i-solar-pin-bold-duotone":"",style:ie({color:c(g)?"var(--el-color-primary-dark-2)":"var(--color)"})},null,4)]),_:1})]),_:1}),m(B,{link:"",class:"titlebar-button",onClick:y[9]||(y[9]=L=>!c(l)&&_())},{default:d(()=>[m(J,null,{default:d(()=>y[25]||(y[25]=[x("span",{"i-mdi-minus":""},null,-1)])),_:1})]),_:1}),m(B,{link:"",class:"titlebar-button",onClick:y[10]||(y[10]=L=>!c(l)&&I())},{default:d(()=>[m(J,null,{default:d(()=>[c(N)?(h(),$("span",af)):(h(),$("span",nf))]),_:1})]),_:1}),m(B,{link:"",class:"titlebar-button danger",onClick:y[11]||(y[11]=L=>!c(l)&&(b.value=!0))},{default:d(()=>[m(J,null,{default:d(()=>y[26]||(y[26]=[x("span",{"i-mdi-window-close":""},null,-1)])),_:1})]),_:1})])]))]),_:1})],64)}}}),uf=H(cf,[["__scopeId","data-v-ceed98dc"]]),oa=S(!1),df=S(!0),Ke=K({name:"",description:"",prefix:"",code:""}),ys=S(),pf=(e,t,n)=>{t.trim()===""?n(new Error("请输入代码片段名称")):(async()=>(Oe().mockCodeSnippetList.value.find(o=>o.name===t)&&n(new Error("名称和已有代码片段重复，换个试试吧")),n()))()},mf=K({name:[{required:!0,message:"代码片段前缀不能为空",trigger:"blur"},{validator:pf,trigger:"blur"}],prefix:[{required:!0,message:"代码片段前缀不能为空",trigger:"blur"},{min:1,max:20,message:"代码片段前缀长度在 1 到 20 个字符",trigger:"blur"}]}),gf=()=>{try{$n(Ke.code),oe.success("操作代码片段复制成功")}catch(e){oe.error("操作代码片段复制失败"),console.error(e)}finally{oa.value=!1}},ff=()=>{ys.value?.validate(async e=>{if(e){Oe().mockCodeSnippetList.value.push({id:ye(),name:Ke.name,description:Ke.description,prefix:Ke.prefix,content:"",filePath:"playground"}),oe.success("操作代码片段保存成功"),oa.value=!1;return}})},yf=()=>({saveDialog:oa,saveConfig:Ke,ruleFormRef:ys,rules:mf,copyCode:gf,saveCodeSnippets:ff,showCopyBtn:df}),bf=W({__name:"CodeSnippetSaveDialog",setup(e){const{saveDialog:t,saveConfig:n,ruleFormRef:a,rules:o,copyCode:s,saveCodeSnippets:r,showCopyBtn:l}=yf();return(i,u)=>{const g=Te,p=Ct,v=Ws,b=Xs,_=me,I=$t;return h(),T(I,{modelValue:c(t),"onUpdate:modelValue":u[4]||(u[4]=F=>re(t)?t.value=F:null),title:"保存操作记录",class:"snippet-save-dialog"},{footer:d(()=>[x("div",null,[m(_,{onClick:u[3]||(u[3]=F=>t.value=!1)},{default:d(()=>u[6]||(u[6]=[k("取消")])),_:1}),c(l)?(h(),T(_,{key:0,type:"primary",onClick:c(s)},{default:d(()=>u[7]||(u[7]=[k("复制")])),_:1},8,["onClick"])):q("",!0),m(_,{type:"primary",onClick:c(r)},{default:d(()=>u[8]||(u[8]=[k("保存")])),_:1},8,["onClick"])])]),default:d(()=>[m(g,null,{default:d(()=>u[5]||(u[5]=[k("将操作记录作为代码片段保存到代码片段仓库,或者仅复制代码片段")])),_:1}),m(b,{model:c(n),ref_key:"ruleFormRef",ref:a,rules:c(o),"label-position":"right","label-width":"auto","mt-3":""},{default:d(()=>[m(v,{label:"代码片段名称",prop:"name"},{default:d(()=>[m(p,{modelValue:c(n).name,"onUpdate:modelValue":u[0]||(u[0]=F=>c(n).name=F)},null,8,["modelValue"])]),_:1}),m(v,{label:"代码片段前缀",prop:"prefix"},{default:d(()=>[m(p,{modelValue:c(n).prefix,"onUpdate:modelValue":u[1]||(u[1]=F=>c(n).prefix=F)},null,8,["modelValue"])]),_:1}),m(v,{label:"代码片段描述",prop:"description"},{default:d(()=>[m(p,{modelValue:c(n).description,"onUpdate:modelValue":u[2]||(u[2]=F=>c(n).description=F),autosize:{minRows:2},type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}}}),hf={key:0},vf={key:0},_f={class:"fields"},wf={class:"dialog-footer"},xf=W({__name:"GeneralDialog",props:ze({isTestModule:{type:Boolean,default:!1},title:{type:String},content:{type:String},callback:{type:Function}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=Be(e,"modelValue"),n=e,a=()=>{t.value=!1};return(o,s)=>{const r=Hs,l=me,i=$t;return h(),T(i,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=u=>t.value=u),title:n.title,onClose:a,onKeyup:Js(n.callback,["enter"]),draggable:"",top:"10vh",width:"70%",class:"general-dialog"},{footer:d(()=>[x("span",wf,[m(l,{onClick:a},{default:d(()=>s[1]||(s[1]=[k("取消")])),_:1}),m(l,{type:"primary",onClick:n.callback},{default:d(()=>s[2]||(s[2]=[k(" 确定 ")])),_:1},8,["onClick"])])]),default:d(()=>[n.content?(h(),$("div",hf,[n.isTestModule?(h(),T(r,{key:1,title:n.content,closable:!1,type:"info","show-icon":""},null,8,["title"])):(h(),$("span",vf,E(n.content),1))])):q("",!0),x("div",_f,[qe(o.$slots,"element")])]),_:3},8,["modelValue","title","onKeyup"])}}}),Sf={key:0},Tf=W({__name:"RangeInput",props:ze({limit:{type:Object},mountedValue:{type:Object},disabled:{type:Boolean,default:!1},label:{type:String,default:""},controls:{type:Boolean,default:!1}},{modelValue:{required:!0,default:[0,0]},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=S(),n=S(),a=Be(e,"modelValue"),o=e,s=()=>{a.value[0]>=a.value[1]?(a.value[0]=a.value[1],n.value=a.value[1],t.value=a.value[0]):(n.value=void 0,t.value=void 0)};return Ae(()=>{o.mountedValue&&(a.value=o.mountedValue)}),(r,l)=>{const i=xa,u=Mt;return h(),$("div",{flex:"","flex-row":"","items-center":"",style:ie({justifyContent:o.label?"space-between":"flex-start"})},[o.label?(h(),$("div",Sf,E(o.label),1)):q("",!0),x("div",{flex:"","flex-row":"","items-center":"",style:ie({width:o.label?"auto":"100%"})},[m(u,{effect:"dark",content:"最小值"+(o.limit?`(min:${o.limit[0]})`:""),placement:"bottom"},{default:d(()=>[m(i,{class:da(o.controls?"w-105px":"w-65px"),modelValue:a.value[0],"onUpdate:modelValue":l[0]||(l[0]=g=>a.value[0]=g),min:o.limit?o.limit[0]:void 0,max:c(n),size:"small",controls:o.controls,onChange:l[1]||(l[1]=g=>s()),disabled:o.disabled},null,8,["class","modelValue","min","max","controls","disabled"])]),_:1},8,["content"]),l[4]||(l[4]=k(" ~ ")),m(u,{effect:"dark",content:"最大值"+(o.limit?`(max:${o.limit[1]})`:""),placement:"bottom"},{default:d(()=>[m(i,{class:da(o.controls?"w-105px":"w-65px"),modelValue:a.value[1],"onUpdate:modelValue":l[2]||(l[2]=g=>a.value[1]=g),min:c(t),max:o.limit?o.limit[1]:void 0,size:"small",controls:o.controls,onChange:l[3]||(l[3]=g=>s()),disabled:o.disabled},null,8,["class","modelValue","min","max","controls","disabled"])]),_:1},8,["content"])],4)],4)}}}),If={class:"suggestion-item"},kf={class:"tip"},Mf=W({__name:"DirInput",props:ze({label:{type:String,default:""},suffix:{type:String,default:""},prefix:{type:String,default:""},verify:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=Be(e,"modelValue"),n=S(!0),a=e,o=K([]),s=(i,u)=>{const g=i?o.filter(p=>p.value.includes(i)||p.label.includes(i)):o;u(g)};Ae(async()=>{const i=ne(),u=i.envSetting.workDir,g=i.envSetting.screenshotSavePath;await We.getInstallDir(),o.push({label:"工作目录",value:u}),o.push({label:"截图路径",value:g})});const r=i=>{t.value=i.value};pe(t,async()=>{a.verify&&(n.value=await yt(t.value))});const l=async()=>{{t.value="E:\\playground\\";return}};return(i,u)=>{const g=Te,p=me,v=kt,b=Ta,_=te;return h(),$("div",null,[a.label!==""&&a.label.length>10?(h(),T(g,{key:0,style:ie({color:c(n)?void 0:"red"})},{default:d(()=>[k(E(a.label),1)]),_:1},8,["style"])):q("",!0),m(b,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=I=>t.value=I),"fetch-suggestions":s,size:"small",onSelect:r,disabled:a.disabled},Sa({append:d(()=>[m(p,{onClick:l},{default:d(()=>u[1]||(u[1]=[k("选择路径")])),_:1})]),default:d(({item:I})=>[x("div",If,[m(g,null,{default:d(()=>[k(E(I.value),1)]),_:2},1024),m(v,{size:"small"},{default:d(()=>[k(E(I.label),1)]),_:2},1024)])]),_:2},[a.label!==""&&a.label.length<=10?{name:"prepend",fn:d(()=>[m(g,{style:ie({color:c(n)?void 0:"red"})},{default:d(()=>[k(E(a.label),1)]),_:1},8,["style"])]),key:"0"}:void 0]),1032,["modelValue","disabled"]),Tt(x("div",kf,[m(_,{color:"red"},{default:d(()=>u[2]||(u[2]=[x("span",{"i-mdi-close":""},null,-1)])),_:1}),m(v,{type:"danger"},{default:d(()=>u[3]||(u[3]=[k("该路径无效，请检查路径填写是否有误，请检查路径填写是否有误")])),_:1})],512),[[It,!c(n)]])])}}}),$f=H(Mf,[["__scopeId","data-v-424cac38"]]),Cf={class:"fr-slider"},Pf={class:"data-area"},Ff=W({__name:"SliderInput",props:ze({label:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},width:{type:Number,default:100},disabled:{type:Boolean,default:!1},hideLabel:{type:Boolean,default:!1},controls:{type:Boolean,default:!0}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=Be(e,"modelValue"),n=e,a=r=>{const l=(""+r).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return l?Math.max(0,(l[1]?l[1].length:0)-(l[2]?+l[2]:0)):0},o=()=>{const r=10**Math.max(a(t.value),a(n.step));t.value=(Math.round(t.value*r)+Math.round(n.step*r))/r},s=()=>{const r=10**Math.max(a(t.value),a(n.step));t.value=(Math.round(t.value*r)-Math.round(n.step*r))/r};return(r,l)=>{const i=Te,u=te,g=me,p=Zs;return h(),$("div",Cf,[n.label&&!n.hideLabel?(h(),T(i,{key:0,class:"label"},{default:d(()=>[k(E(n.label),1)]),_:1})):q("",!0),x("div",Pf,[m(i,{"mr-10px":""},{default:d(()=>[k(E(t.value),1)]),_:1}),n.controls?(h(),T(g,{key:0,link:"",size:"small",disabled:t.value<=n.min,onClick:s,type:"danger"},{default:d(()=>[m(u,null,{default:d(()=>l[1]||(l[1]=[x("span",{"i-mdi-minus":""},null,-1)])),_:1})]),_:1},8,["disabled"])):q("",!0),m(p,{style:ie({width:n.label?n.width+"px":"100%"}),modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=v=>t.value=v),min:n.min,max:n.max,step:n.step,disabled:n.disabled},null,8,["style","modelValue","min","max","step","disabled"]),n.controls?(h(),T(g,{key:1,link:"",size:"small",disabled:t.value>=n.max,onClick:o,type:"primary"},{default:d(()=>[m(u,null,{default:d(()=>l[2]||(l[2]=[x("span",{"i-mdi-plus":""},null,-1)])),_:1})]),_:1},8,["disabled"])):q("",!0)])])}}}),Af=H(Ff,[["__scopeId","data-v-18b77570"]]),Of={class:"card"},Df={class:"title"},Rf={class:"title-btns"},Ef={class:"content"},Vf={class:"line"},Lf={class:"line"},Nf=W({__name:"RectInput",props:ze({targetSrc:{type:String,default:""},disabled:{type:Boolean,default:!1}},{modelValue:{required:!1,default:{x:0,y:0,width:0,height:0}},modelModifiers:{}}),emits:["update:modelValue"],setup(e){Ze(l=>({"6a3ece84":c(t)}));const{oppositeBgColor:t}=nt(),n=Be(e,"modelValue"),a=()=>{try{Hc(n.value),G({title:"复制成功",message:"已复制到剪贴板",type:"success",position:"bottom-right"})}catch(l){G({title:"复制失败",message:JSON.stringify(l),type:"error",position:"bottom-right"})}},o=e,s=async()=>{try{let{value:l}=await _a.prompt("格式：x,y,width,height，例如：0,0,100,100","快速填入参数",{inputValue:""});if(l=l.replace(/\s/g,""),l.length>0){let i=l.split(",");if(i.length!==4&&(i=l.split("，"),i.length!==4)){G({title:"参数格式错误",message:"请按照格式填写参数",type:"error",position:"bottom-right"});return}n.value.x=parseInt(i[0]),n.value.y=parseInt(i[1]),n.value.width=parseInt(i[2]),n.value.height=parseInt(i[3])}}catch{}},r=async()=>{try{if(o.targetSrc&&o.targetSrc!==""){const l=await O.getImgRectInfo(o.targetSrc);n.value.x=l.startX,n.value.y=l.startY,n.value.width=l.width,n.value.height=l.height}else{const l=await O.getScreenRectInfo();n.value.x=l.startX,n.value.y=l.startY,n.value.width=l.width,n.value.height=l.height;return}}catch(l){console.error(l)}};return(l,i)=>{const u=Te,g=me,p=Ct;return h(),$("div",Of,[x("div",Df,[m(u,null,{default:d(()=>[k("截取"+E(o.targetSrc.trim().length===0?"屏幕":"图片")+"指定位置",1)]),_:1}),x("div",Rf,[m(g,{disabled:o.disabled,size:"small",onClick:s},{default:d(()=>i[4]||(i[4]=[k("填入参数")])),_:1},8,["disabled"]),m(g,{disabled:o.disabled,size:"small",onClick:a},{default:d(()=>i[5]||(i[5]=[k("复制参数")])),_:1},8,["disabled"]),m(g,{disabled:o.disabled,size:"small",onClick:r},{default:d(()=>i[6]||(i[6]=[k("截取屏幕矩形")])),_:1},8,["disabled"])])]),x("div",Ef,[x("div",Vf,[m(p,{disabled:o.disabled,size:"small",modelValue:n.value.x,"onUpdate:modelValue":i[0]||(i[0]=v=>n.value.x=v),modelModifiers:{number:!0}},{prepend:d(()=>i[7]||(i[7]=[k("x")])),_:1},8,["disabled","modelValue"]),m(p,{disabled:o.disabled,size:"small",modelValue:n.value.y,"onUpdate:modelValue":i[1]||(i[1]=v=>n.value.y=v),modelModifiers:{number:!0}},{prepend:d(()=>i[8]||(i[8]=[k("y")])),_:1},8,["disabled","modelValue"])]),x("div",Lf,[m(p,{disabled:o.disabled,size:"small",modelValue:n.value.width,"onUpdate:modelValue":i[2]||(i[2]=v=>n.value.width=v),modelModifiers:{number:!0}},{prepend:d(()=>i[9]||(i[9]=[k("width(宽)")])),_:1},8,["disabled","modelValue"]),m(p,{disabled:o.disabled,size:"small",modelValue:n.value.height,"onUpdate:modelValue":i[3]||(i[3]=v=>n.value.height=v),modelModifiers:{number:!0}},{prepend:d(()=>i[10]||(i[10]=[k("height(高)")])),_:1},8,["disabled","modelValue"])])])])}}}),Uf=H(Nf,[["__scopeId","data-v-8240fca1"]]),jf={class:"file-input-content"},zf={class:"suggestion-item"},Bf={class:"tip"},qf={flex:"","flex-items-center":"","flex-row":""},Kf={class:"path-content"},Gf=W({__name:"FileInput",props:ze({label:{type:String,default:""},verify:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labelPos:{type:String,default:"center"},multipleLabelPos:{type:String,default:"left"}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,n=K([]),a=(p,v)=>{const b=p?n.filter(_=>_.value.includes(p)||_.label.includes(p)):n;v(b)};Ae(async()=>{const p=ne(),v=p.envSetting.workDir,b=p.envSetting.screenshotSavePath;await We.getInstallDir(),n.push({label:"工作目录",value:v}),n.push({label:"截图路径",value:b})});const o=Be(e,"modelValue"),s=p=>{o.value=p.value},r=p=>{t.disabled||o.value.splice(o.value.indexOf(p),1)},l=K([]),i=S(!0),u=async()=>{{o.value=t.multiple?["E:\\playground\\file1","E:\\playground\\file2"]:"E:\\playground\\file1";return}},g=()=>{o.value=[]};return pe(o,async()=>{if(t.verify)if(typeof o.value=="string")i.value=await yt(o.value);else{l.splice(0,l.length);for(const p of o.value)await yt(p)||l.push(p)}}),(p,v)=>{const b=Te,_=me,I=kt,F=Ta,R=te;return h(),$("div",jf,[typeof o.value=="string"?(h(),$(ae,{key:0},[t.label!==""&&t.label.length>10?(h(),T(b,{key:0,style:ie({color:c(i)?void 0:"red",alignSelf:t.labelPos==="left"?"flex-start":"center"})},{default:d(()=>[k(E(t.label),1)]),_:1},8,["style"])):q("",!0),m(F,{modelValue:o.value,"onUpdate:modelValue":v[0]||(v[0]=N=>o.value=N),"fetch-suggestions":a,size:"small",onSelect:s,disabled:t.disabled},Sa({append:d(()=>[m(_,{onClick:u},{default:d(()=>v[1]||(v[1]=[k("选择文件")])),_:1})]),default:d(({item:N})=>[x("div",zf,[m(b,null,{default:d(()=>[k(E(N.value),1)]),_:2},1024),m(I,{size:"small"},{default:d(()=>[k(E(N.label),1)]),_:2},1024)])]),_:2},[t.label!==""&&t.label.length<=10?{name:"prepend",fn:d(()=>[m(b,{style:ie({color:c(i)?void 0:"red"})},{default:d(()=>[k(E(t.label),1)]),_:1},8,["style"])]),key:"0"}:void 0]),1032,["modelValue","disabled"]),Tt(x("div",Bf,[m(R,{color:"red"},{default:d(()=>v[2]||(v[2]=[x("span",{"i-mdi-close":""},null,-1)])),_:1}),m(I,{type:"danger"},{default:d(()=>v[3]||(v[3]=[k("该路径无效，请检查路径填写是否有误")])),_:1})],512),[[It,!c(i)]])],64)):(h(),$(ae,{key:1},[x("div",{flex:"","flex-row":"","flex-items-center":"","justify-between":"",style:ie({flexDirection:t.multipleLabelPos==="left"?"row":"column",alignItems:t.multipleLabelPos==="left"?"center":"flex-start"})},[t.label!==""?(h(),T(b,{key:0,style:ie({color:c(i)?void 0:"red",alignSelf:t.labelPos==="left"?"flex-start":"center"})},{default:d(()=>[k(E(t.label),1)]),_:1},8,["style"])):q("",!0),x("div",qf,[m(_,{type:"primary",class:"w-100",size:"small",onClick:u,disabled:t.disabled},{default:d(()=>v[4]||(v[4]=[k(" +选择文件 ")])),_:1},8,["disabled"]),m(_,{class:"w-100",size:"small",onClick:g,disabled:t.disabled},{default:d(()=>v[5]||(v[5]=[k(" x清空已选 ")])),_:1},8,["disabled"])])],4),x("div",Kf,[(h(!0),$(ae,null,fe(o.value,N=>(h(),T(I,{class:"tag",key:N,size:"small",type:c(l).includes(N)?"danger":"success",closable:"","disable-transitions":!1,onClose:le=>r(N)},{default:d(()=>[k(E(N),1)]),_:2},1032,["type","onClose"]))),128))])],64))])}}}),Yf=H(Gf,[["__scopeId","data-v-86bedacb"]]),Wf={key:0,class:"dynamics-input"},Xf={key:0,class:"label"},Jf=W({__name:"DynamicsInput",props:{name:{type:String,required:!0},argName:{type:String,required:!0},onlyTest:{type:Boolean,default:!1},noTest:{type:Boolean,default:!1},value:{type:[String,Number,Boolean,Object,Array],required:!0},disabled:{type:Boolean,default:!1}},setup(e){Ze(b=>({"1909de0c":c(v),"6e372a5f":c(i)}));const{dynamicDialog:t}=tt(),n=ce(),a=["input","FileInput","DirInput","slider"],o=["input","FileInput","DirInput","RectInput"],s=b=>{const _=l.value?.selectOptionSeparator;if(typeof b=="number"||!_)return{label:b,value:b};const I=b.split(_);return{label:I[0],value:I[1]||I[0]}},r=e,l=A(()=>{const b=w().find(_=>_.name===r.name)?.testModule;if(b){const _=b.dialog;return _.args?.forEach(I=>{I?.options&&typeof I.options=="function"&&(I.options=I.options(n))}),_.args.find(I=>I.name===r.argName)}}),i=A(()=>{const b=l.value;return b&&o.includes(b.componentType)?"block":"flex"}),u=A(()=>{const b=l.value?.targetSrc,_=w().find(I=>I.name===r.name)?.testModule;if(_&&b){const F=_.dialog.args.find(R=>R.name===b);if(F)return F.value}return""}),g=A(()=>{const b=l.value?.displayCondition;if(b?.length){const _=w().find(I=>I.name===r.name)?.testModule;if(_){const I=_.dialog;for(let F of b){const R=I.args.find(N=>N.name===F)?.value;if(R===void 0||!R)return!1}return!0}return console.error(`未找到${r.name}的测试模块`),!1}else return!0}),p=S(r.value);pe(()=>r.value,b=>{p.value=b}),pe(p,(b,_)=>{if(b===0&&_===null)return;const I=["input","select","FileInput","DirInput"],F=l.value?.componentType;b===null&&(l.value?.componentType==="numberInput"?(b=0,p.value=0):F&&I.includes(F)?(b="",p.value=""):l.value?.componentType==="RectInput"&&(b={x:0,y:0,width:0,height:0},p.value={x:0,y:0,width:0,height:0}));let R;const le=w().find(Z=>Z.name===r.name);if(le&&(R=le),R){const Z=R.testModule?.dialog;Z&&Z.args?.forEach(X=>{X.options&&typeof X.options=="function"&&(X.options=X.options(n))});const se=Z?.args.find(X=>X.name===r.argName);se&&(se.value=b)}});const{appBackground:v}=nt();return(b,_)=>{const I=Qs,F=er,R=Yf,N=Uf,le=Af,Z=tr,se=$f,X=xa,be=Ct,ue=Tf;return c(t).title===e.name&&c(g)?Tt((h(),$("div",Wf,[c(l)?.label&&!a.includes(c(l).componentType)?(h(),$("span",Xf,E(c(l).label),1)):q("",!0),c(l)&&c(l).componentType==="select"?(h(),T(F,{key:1,class:"input",modelValue:c(p),"onUpdate:modelValue":_[0]||(_[0]=M=>re(p)?p.value=M:null),filterable:"",multiple:c(l).multiple,clearable:c(l).multiple,"allow-create":!c(l).notAllowCreate,"default-first-option":"",placeholder:c(l).placeholder||"请选择"},{default:d(()=>[(h(!0),$(ae,null,fe(c(l).options,M=>(h(),T(I,{key:M,label:s(M).label,disabled:e.disabled,value:s(M).value},null,8,["label","disabled","value"]))),128))]),_:1},8,["modelValue","multiple","clearable","allow-create","placeholder"])):c(l)&&c(l).componentType==="FileInput"&&(typeof c(p)=="string"||Array.isArray(c(p)))?(h(),T(R,{key:2,modelValue:c(p),"onUpdate:modelValue":_[1]||(_[1]=M=>re(p)?p.value=M:null),disabled:e.disabled,label:c(l).label,verify:c(l).verifyPath,multiple:c(l).multiple},null,8,["modelValue","disabled","label","verify","multiple"])):c(l)&&c(l).componentType==="RectInput"&&typeof c(p)=="object"?(h(),T(N,{key:3,modelValue:c(p),"onUpdate:modelValue":_[2]||(_[2]=M=>re(p)?p.value=M:null),disabled:e.disabled,"target-src":c(u)},null,8,["modelValue","disabled","target-src"])):c(l)&&c(l).componentType==="slider"&&typeof c(p)=="number"?(h(),T(le,{key:4,modelValue:c(p),"onUpdate:modelValue":_[3]||(_[3]=M=>re(p)?p.value=M:null),disabled:e.disabled,max:c(l).range?.max,min:c(l).range?.min,step:c(l).range?.step,label:c(l).label,size:"small"},null,8,["modelValue","disabled","max","min","step","label"])):c(l)&&c(l).componentType==="switch"&&typeof c(p)=="boolean"?(h(),T(Z,{key:5,modelValue:c(p),"onUpdate:modelValue":_[4]||(_[4]=M=>re(p)?p.value=M:null),disabled:e.disabled,"active-text":c(l).activeText||"是","inactive-text":c(l).inactiveText||"否",size:"small"},null,8,["modelValue","disabled","active-text","inactive-text"])):c(l)&&c(l).componentType==="DirInput"&&typeof c(p)=="string"?(h(),T(se,{key:6,modelValue:c(p),"onUpdate:modelValue":_[5]||(_[5]=M=>re(p)?p.value=M:null),disabled:e.disabled,label:c(l).label,suffix:c(l).suffix||"",verify:c(l).verifyPath},null,8,["modelValue","disabled","label","suffix","verify"])):c(l)&&c(l).componentType==="numberInput"&&typeof c(p)=="number"?(h(),T(X,{key:7,class:"input",modelValue:c(p),"onUpdate:modelValue":_[6]||(_[6]=M=>re(p)?p.value=M:null),disabled:e.disabled,"value-on-clear":0,size:"small"},null,8,["modelValue","disabled"])):c(l)&&c(l).componentType==="input"&&typeof c(p)=="string"?(h(),T(be,{key:8,modelValue:c(p),"onUpdate:modelValue":_[7]||(_[7]=M=>re(p)?p.value=M:null),disabled:e.disabled,size:"small"},{prepend:d(()=>[k(E(c(l).label),1)]),_:1},8,["modelValue","disabled"])):c(l)&&c(l).componentType==="numberRangeInput"&&typeof c(p)=="object"?(h(),T(ue,{key:9,modelValue:c(p),"onUpdate:modelValue":_[8]||(_[8]=M=>re(p)?p.value=M:null),disabled:e.disabled},null,8,["modelValue","disabled"])):q("",!0)],512)),[[It,(!e.onlyTest||e.onlyTest&&c(t).callType==="test")&&!(e.noTest&&c(t).callType==="test")]]):q("",!0)}}}),Hf=H(Jf,[["__scopeId","data-v-f5836922"]]),Zf=W({__name:"FillApiParamDialog",setup(e){const{dynamicDialog:t,builtInApiTestModules:n}=tt(),a=ce(),o=A(()=>{const s=n.value;return s.forEach(r=>{r?.dialog.args?.forEach(l=>{l.options&&typeof l.options=="function"&&(l.options=l.options(a))})}),s});return(s,r)=>{const l=Hf,i=xf;return h(),T(i,{modelValue:c(t).show,"onUpdate:modelValue":r[0]||(r[0]=u=>c(t).show=u),title:c(t).title,content:c(t).content,callback:c(t).callback,isTestModule:!0},{element:d(()=>[(h(!0),$(ae,null,fe(c(o),u=>(h(),$("div",null,[(h(!0),$(ae,null,fe(u?.dialog?.args,g=>(h(),T(l,{key:u.dialog?.targetMethodName+g.name,name:u.dialog?.targetMethodName||"",argName:g.name,value:g.value,"only-test":!!g.onlyTest,"no-test":!!g.noTest},null,8,["name","argName","value","only-test","no-test"]))),128))]))),256))]),_:1},8,["modelValue","title","content","callback"])}}}),Qf=W({__name:"Tours",setup(e){const{tourInfo:t,currentTourName:n}=Fn(),a=S(0),o=A(()=>Object.keys(t)),s=A(()=>o.value.map(i=>t[i])),r=i=>{const u=t[n.value];if((i>u.step&&u.preventNext||i<u.step&&u.preventPrevious)&&!u.doneSteps.includes(a.value)){oe.warning("请先完成当前步骤"),Ge(()=>{a.value--});return}const g=u.steps[i]?.onShow;g&&g(),u.step=i,u.preventNext=u.steps[i]?.preventNext||!1,u.preventPrevious=u.steps[i]?.preventPrevious||!1},l=()=>{const i=t[n.value];i.touring=!1,i.step=0,i.doneSteps.splice(0)};return pe(()=>t[n.value]?.step,()=>{const i=t[n.value]?.step;i&&Ge(()=>a.value=i)}),Ae(()=>{t[n.value].preventNext=t[n.value].steps[0]?.preventNext||!1}),(i,u)=>{const g=nr,p=ar;return h(),$("div",null,[(h(!0),$(ae,null,fe(c(s),(v,b)=>(h(),T(p,{key:b,modelValue:v.touring,"onUpdate:modelValue":_=>v.touring=_,current:c(a),"onUpdate:current":u[0]||(u[0]=_=>re(a)?a.value=_:null),onFinish:l,onClose:l,onChange:r},{default:d(()=>[(h(!0),$(ae,null,fe(v.steps,(_,I)=>(h(),T(g,{key:I,target:_.target,title:_.title,description:_.description},null,8,["target","title","description"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","current"]))),128))])}}}),ey=en("globalShortcuts",{state:()=>({allShortcuts:[{shortcuts:"Ctrl+Shift+A",onlyDescription:"运行脚本"},{shortcuts:"Ctrl+Shift+D",onlyDescription:"重新初始化脚本"},{shortcuts:"Ctrl+Shift+S",onlyDescription:"强制停止脚本"},{shortcuts:"Ctrl+Alt+Shift+Home",onlyDescription:"强制显示主窗口"},{shortcuts:"Alt+Shift+C",onlyDescription:"记录鼠标位置及颜色"}]}),getters:{},actions:{updateShortcuts(e,t){this.allShortcuts.find(n=>n.onlyDescription===e).shortcuts=t},getShortcuts(e){return this.allShortcuts.find(t=>t.onlyDescription===e).shortcuts},exportData(){return JSON.stringify(this.allShortcuts)},importData(e){const t=JSON.parse(e);if(t instanceof Array){const n=[...this.allShortcuts];for(let a=0;a<t.length;a++){const o=t[a],s=n.find(r=>r.onlyDescription===o.onlyDescription);s&&(s.shortcuts=o.shortcuts)}this.$patch({allShortcuts:t})}},init(){this.$subscribe((e,t)=>{e.storeId==="globalShortcuts"&&localStorage.setItem("globalShortcuts",this.exportData())},{detached:!1}),window.localStorage.getItem("globalShortcuts")&&this.importData(window.localStorage.getItem("globalShortcuts"))}}}),ty={class:"app"},ny={class:"common-layout"},ay=W({__name:"App",setup(e){Ze(U=>({"4e483aea":c(B),"28d17502":c(Q),"2115d389":c(b),"59754b44":c(i),"75fb8f90":c(u),"6d70b271":c(g),a48b949e:c(p),e470f1fc:c(F),"1da15f4c":c(I),"55b7b7d9":c(X),"2308f473":c(Z),e01b094e:c(le),f851253e:c(v)}));const{registerAllInvokeApi:t}=tt(),{isMainWindow:n,menuKey:a}=St(),o=ne(),s=ce();ey();const{app:r}=Qe(o),l=or(),{borderRadius:i,appOpacity:u,borderColor:g,appTransform:p,appAsideBgColor:v,appBackground:b}=nt(),{isEditing:_}=Fe(),I=A(()=>_.value?"calc(100% - 35px)":"calc(100% - 40px)"),F=A(()=>_.value?"35px":"40px"),{info:R,syncWindowInnerWidth:N}=Ot(),{contentTransform:le,asideBarPos:Z}=Fe(),se=(U,D=!1)=>{U==="setting"&&Bt.checkDepUpdate(),r.value.state.aside.currentItem=U,U==="script"&&(D?U="scriptList":U=l.currentRoute.value.name||"scriptList"),l.replace({name:U}),R.showContentType=U,setTimeout(()=>{if(r.value.state.aside.collapsed){const Me=l.currentRoute.value.meta;R.title=Me.title}else R.title="风染脚本"},200)},X=A(()=>r.value.state.aside.collapsed?"40px":"97px"),be=async(U=!0)=>{U&&window.addEventListener("resize",()=>{N(window.innerWidth),(window.innerWidth<800&&!r.value.state.aside.collapsed||window.innerWidth>=800&&r.value.state.aside.collapsed)&&ue()}),await o.init(),await s.init(),se(r.value.state.aside.currentItem),Bt.checkDepUpdate()};Ae(async()=>{qc();{be(),await t();return}}),wa(()=>{});const ue=()=>{r.value.state.aside.collapsed=!r.value.state.aside.collapsed,se(r.value.state.aside.currentItem)},{appVersionInfo:M,goDownloadNewApp:y}=Yg();sr(()=>{});const{appWidth:B,appHeight:Q}=St();return(U,D)=>{const Me=Qf,Re=Zf,J=bf,at=uf,Ee=te,L=me,bs=Mt,ra=ir,hs=cr,vs=ur,la=rr("router-view"),_s=dr,ws=lr,xs=$t;return h(),$("div",ty,[m(Me),m(Re),m(J),c(n)?(h(),$(ae,{key:0},[m(at),x("div",ny,[m(ws,null,{default:d(()=>[m(vs,{class:"aside"},{default:d(()=>[m(bs,{effect:"dark",content:c(r).state.aside.collapsed?"展开":"折叠",placement:"right"},{default:d(()=>[c(r).state.aside.collapsed?(h(),T(L,{key:0,class:"aside-btn",link:"",type:"primary",onClick:ue},{default:d(()=>[m(Ee,null,{default:d(()=>D[3]||(D[3]=[x("span",{"i-solar-alt-arrow-right-linear":""},null,-1)])),_:1})]),_:1})):(h(),T(L,{key:1,class:"aside-btn",link:"",type:"primary",onClick:ue},{default:d(()=>[m(Ee,null,{default:d(()=>D[4]||(D[4]=[x("span",{"i-solar-alt-arrow-left-linear":""},null,-1)])),_:1})]),_:1}))]),_:1},8,["content"]),(h(),T(hs,{collapse:c(r).state.aside.collapsed,"collapse-transition":!1,"popper-effect":"dark",class:"el-menu-vertical","default-active":c(r).state.aside.currentItem,key:c(a),onSelect:D[0]||(D[0]=V=>se(V,!0))},{default:d(()=>[x("div",null,[(h(!0),$(ae,null,fe(c(hd),V=>(h(),T(ra,{index:V.name,key:V.path+"|"+V.meta.title,id:V.meta?.id},{title:d(()=>[k(E(V.meta.title),1)]),default:d(()=>[m(Ee,null,{default:d(()=>[(h(),T(ot(V.meta.icon)))]),_:2},1024)]),_:2},1032,["index","id"]))),128))]),D[5]||(D[5]=x("div",{"data-tauri-drag-region":"",style:{flex:"1",cursor:"move"}},null,-1)),x("div",null,[(h(!0),$(ae,null,fe(c(vd),V=>(h(),T(ra,{index:V.name,key:V.path+"|"+V.meta.title,id:V.meta?.id},{title:d(()=>[k(E(V.meta.title),1)]),default:d(()=>[m(Ee,null,{default:d(()=>[(h(),T(ot(V.meta.icon)))]),_:2},1024)]),_:2},1032,["index","id"]))),128))])]),_:1},8,["collapse","default-active"]))]),_:1}),m(_s,{class:"app-main"},{default:d(()=>[m(la,null,{default:d(({Component:V})=>[m(bt,{"enter-active-class":"animate__animated animate__fadeIn "},{default:d(()=>[(h(),T(ot(V)))]),_:2},1024)]),_:1})]),_:1})]),_:1})]),m(xs,{modelValue:c(M).openDialog,"onUpdate:modelValue":D[2]||(D[2]=V=>c(M).openDialog=V),title:"版本更新v"+c(M).version,class:"version-update-dialog"},{footer:d(()=>[x("div",null,[m(L,{type:"info",size:"small",onClick:D[1]||(D[1]=V=>c(M).openDialog=!1)},{default:d(()=>D[6]||(D[6]=[k("取消")])),_:1}),(h(!0),$(ae,null,fe(c(M).downloadUrl,V=>(h(),T(L,{size:"small",key:V.origin,type:"primary",onClick:ry=>c(y)(V)},{default:d(()=>[k(E(V.origin)+"下载",1)]),_:2},1032,["onClick"]))),128))])]),default:d(()=>[x("div",null,E(c(M).desc),1)]),_:1},8,["modelValue","title"])],64)):(h(),T(la,{key:1},{default:d(({Component:V})=>[m(bt,{"enter-active-class":"animate__animated animate__fadeIn "},{default:d(()=>[(h(),T(ot(V)))]),_:2},1024)]),_:1}))])}}}),oy=H(ay,[["__scopeId","data-v-2a3ec981"]]),sy=pr(),sa=mr(oy);sa.use(sy);sa.use(xe);sa.mount("#app");jd.setProductionErrorReport();export{Eu as $,f as A,Wn as B,C,cy as D,hg as E,vu as F,So as G,Jo as H,Ye as I,No as J,Uo as K,P as L,w as M,St as N,dy as O,yf as P,$n as Q,zc as R,Jt as S,Du as T,ud as U,uy as V,Io as W,ka as X,Rr as Y,Uf as Z,H as _,Fe as a,Af as a0,xf as a1,Bt as a2,Yg as a3,Ot as b,ce as c,Oe as d,Fn as e,ke as f,iy as g,_r as h,O as i,Lt as j,ne as k,Hm as l,tt as m,vr as n,hu as o,We as p,xt as q,xe as r,py as s,Tf as t,nt as u,Yf as v,$f as w,ey as x,_u as y,qo as z};
