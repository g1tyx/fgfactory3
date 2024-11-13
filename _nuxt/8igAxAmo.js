import{a as R}from"./CYMVvgqh.js";import{a as y,u as M,s as H}from"./BJPfjTuC.js";import{r as C,o as l,c as d,a as t,t as n,h as o,b as i,d as T,j as g,f as v,g as X,w as x,F as E,i as B,s as N,z as Z,m as q,u as J,n as K,A as Q}from"./DTcqECLR.js";import{_ as W}from"./xuwMb7B6.js";import{_ as P}from"./Cs-5ZI_w.js";import{a as Y,_ as tt}from"./RUdHwwKr.js";import"./DlAUqK2U.js";const st={id:"modalOffline",class:"modal fade"},ot={class:"modal-dialog"},et={class:"modal-content"},nt={class:"modal-header"},it={class:"fs-6 text-white"},ct={class:"modal-body"},at={class:"row g-2"},lt={class:"col-12 text-center"},dt={class:"fs-6 text-white"},rt={class:"col-12 text-center"},_t={class:"text-normal"},mt={class:"text-white"},pt={class:"col-12 mt-3"},ut={class:"row justify-content-center"},ht={class:"col-5 col-lg-3"},ft={class:"ms-2"},vt={__name:"ModalOffline",setup(f){const a=y();return(r,s)=>{const _=C("font-awesome-icon");return l(),d("div",st,[t("div",ot,[t("div",et,[t("div",nt,[t("span",it,n(r.$t("modalOffline_title")),1),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal",onClick:s[0]||(s[0]=m=>o(a).currentModalId=null)},[i(_,{icon:"fas fa-fw fa-times"})])]),t("div",ct,[t("div",at,[t("div",lt,[t("span",dt,n(r.$t("modalOffline_text")),1)]),t("div",rt,[t("span",_t,n(r.$t("modalOffline_info")),1),T(),t("span",mt,n(o(R)(o(a).offlineTime)),1)]),t("div",pt,[t("div",ut,[t("div",ht,[t("button",{type:"button",class:"w-100 btn btn-secondary","data-bs-dismiss":"modal",onClick:s[1]||(s[1]=m=>o(a).currentModalId=null)},[t("span",null,[i(_,{icon:"fas fa-fw fa-arrow-right-long"})]),t("span",ft,n(r.$t("modalOffline_close")),1)])])])])])])])])])}}},gt={id:"modalWelcome",class:"modal fade","data-bs-backdrop":"static","data-bs-keyboard":"false"},bt={class:"modal-dialog"},wt={class:"modal-content"},$t={class:"modal-body"},yt={class:"row g-2"},kt={key:0,class:"col-12 text-center"},xt={class:"fs-5 text-white"},Ct={class:"col-12"},St={class:"rounded p-2 text-bg-danger text-center"},jt={class:"col-12 text-center"},Ot={key:0},At={class:"col-12 mt-3"},Lt={class:"row justify-content-center"},Et={class:"col-5 col-lg-3"},Mt={class:"ms-2"},It={__name:"ModalWelcome",setup(f){const a=y(),r=function(){a.currentModalId=null,a.firstTime=!1};return(s,_)=>{const m=C("font-awesome-icon");return l(),d("div",gt,[t("div",bt,[t("div",wt,[t("div",$t,[t("div",yt,[o(a).currentScenario?(l(),d("div",kt,[t("div",xt,n(s.$t(o(a).currentScenario.title)),1),t("div",null,n(s.$t(o(a).currentScenario.subtitle)),1)])):g("",!0),t("div",Ct,[t("div",St," v"+n(o(a).version)+" - "+n(s.$t("disclaimer_text")),1)]),t("div",jt,[o(a).currentScenario?(l(),d("div",Ot,n(s.$t(o(a).currentScenario.desc)),1)):g("",!0)]),t("div",At,[t("div",Lt,[t("div",Et,[t("button",{type:"button",class:"w-100 btn btn-success","data-bs-dismiss":"modal",onClick:_[0]||(_[0]=u=>r())},[t("span",null,[i(m,{icon:"fas fa-fw fa-arrow-right-long"})]),t("span",Mt,n(s.$t("modalWelcome_close")),1)])])])])])])])])])}}},Vt=["src"],Tt={class:"position-absolute lh-1 badge bg-dark",style:{top:"-.25rem",right:"-.5rem"}},Bt={key:0,class:"position-absolute top-0 start-0 lh-1 small text-success"},Nt={key:1,class:"w-100 btn btn-secondary",disabled:""},Wt={__name:"SidebarButton",props:["id"],setup(f){const a=f,r=y(),s=M(),_=v(()=>s.elems.find(m=>m.id==a.id));return(m,u)=>{const $=P,b=C("font-awesome-icon"),O=W;return o(_).unlocked?(l(),X(O,{key:0,to:m.localePath("/item/"+f.id),class:"w-100 btn btn-primary position-relative",exactActiveClass:"active",onClick:u[0]||(u[0]=I=>{o(r).sidebarOpen=!1,o(_).notified=!1}),title:cnItem(m.$t(o(_).name))},{default:x(()=>[t("img",{src:o(_).img,width:"18",height:"18"},null,8,Vt),t("div",Tt,[i($,{id:f.id},null,8,["id"])]),o(_).notified?(l(),d("div",Bt,[i(b,{icon:"fas fa-certificate"})])):g("",!0)]),_:1},8,["to","title"])):(l(),d("button",Nt,[i(b,{icon:"fas fa-lock","fixed-width":""})]))}}},Pt={class:"row g-1 justify-content-center mb-3"},Dt={__name:"SidebarGroup",props:["group"],setup(f){const a=f,r=y(),s=M(),_=v(()=>s.elems.filter(m=>(r.showLocked?!0:m.unlocked)&&m.type=="item"&&m.group==a.group).map(m=>m.id));return(m,u)=>{const $=Wt;return l(),d("div",Pt,[(l(!0),d(E,null,B(o(_),b=>(l(),d("div",{key:b,class:"col-2"},[i($,{id:b},null,8,["id"])]))),128))])}}},Gt=N("/victory.png"),Ut={id:"modalVictory",class:"modal fade"},zt={class:"modal-dialog"},Ft={class:"modal-content"},Rt={class:"modal-header bg-secondary"},Ht={class:"fs-6 text-white"},Xt={class:"modal-body"},Zt={class:"row g-2"},qt={class:"col-12 text-center"},Jt={class:"fs-5 text-white"},Kt={class:"col-12 text-center"},Qt={class:"text-normal"},Yt=t("div",{class:"col-12 text-center"},[t("img",{src:Gt,width:"48",height:"48"})],-1),ts={class:"col-12 mt-3"},ss={class:"row justify-content-center"},os={class:"col-5 col-lg-3"},es={class:"ms-2"},ns={__name:"ModalVictory",setup(f){const a=y();return(r,s)=>{const _=C("font-awesome-icon");return l(),d("div",Ut,[t("div",zt,[t("div",Ft,[t("div",Rt,[t("span",Ht,n(r.$t("modalVictory_title")),1),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal",onClick:s[0]||(s[0]=m=>o(a).currentModalId=null)},[i(_,{icon:"fas fa-fw fa-times"})])]),t("div",Xt,[t("div",Zt,[t("div",qt,[t("span",Jt,n(r.$t("modalVictory_subTitle")),1)]),t("div",Kt,[t("span",Qt,n(r.$t("modalVictory_text")),1)]),Yt,t("div",ts,[t("div",ss,[t("div",os,[t("button",{type:"button",class:"w-100 btn btn-success","data-bs-dismiss":"modal",onClick:s[1]||(s[1]=m=>o(a).currentModalId=null)},[t("span",null,[i(_,{icon:"fas fa-fw fa-trophy"})]),t("span",es,n(r.$t("modalVictory_close")),1)])])])])])])])])])}}},j=N("/favicon.png"),is={key:0,class:"w-100 h-100 d-flex"},cs={class:"h-100 px-3 py-2 scroll-content"},as={class:"row g-3"},ls={class:"col-12"},ds={class:"row g-1 align-items-center justify-content-lg-center"},rs=t("div",{class:"col-auto"},[t("img",{src:j,width:"24",height:"24",class:"rounded"})],-1),_s={class:"col col-lg-auto"},ms={class:"fs-5 text-white"},ps={class:"col-auto d-lg-none"},us={class:"col-12"},hs={class:"row g-1 justify-content-center"},fs={class:"col-6"},vs={class:"ms-0"},gs={class:"ms-2"},bs={key:0,class:"position-absolute top-0 end-0 lh-1 small text-success"},ws={key:0,class:"col-6"},$s={class:"ms-0"},ys={class:"ms-2"},ks={key:0,class:"position-absolute top-0 start-0 lh-1 small text-success"},xs={key:0,class:"col-12 mb-3"},Cs={class:"card card-body"},Ss={class:"row gx-1 align-items-center"},js={class:"col"},Os={class:"col-auto"},As={class:"text-white"},Ls=["src"],Es={id:"topbar",class:"bg-dark border-bottom border-2 border-translucent"},Ms={class:"px-3 py-2"},Is={class:"row g-1 align-items-center flex-nowrap"},Vs={class:"col-auto d-lg-none"},Ts={class:"col text-truncate"},Bs={class:"row gx-1 align-items-center flex-nowrap"},Ns={key:0,class:"col-auto"},Ws=["src"],Ps={class:"col text-truncate"},Ds={class:"fs-5 text-white"},Gs={class:"col-auto"},Us={class:"dropdown"},zs={type:"button",class:"btn btn-danger","data-bs-toggle":"dropdown","aria-expanded":"false"},Fs={class:"d-none d-lg-inline ms-1"},Rs={class:"dropdown-menu dropdown-menu-end p-2 text-bg-danger text-center"},Hs={class:"col-auto"},Xs={class:"ms-0"},Zs={class:"d-none d-lg-inline ms-2"},qs={class:"col-auto"},Js={class:"ms-0"},Ks={class:"d-none d-lg-inline ms-2"},Qs={id:"page",class:"w-100 scroll-content"},Ys={key:1,class:"w-100 h-100 d-flex align-items-center justify-content-center"},to={class:"container p-3",style:{"max-width":"512px"}},so={class:"card"},oo={class:"card-header"},eo={class:"row gx-1 align-items-center justify-content-center"},no=t("div",{class:"col-auto"},[t("img",{src:j,width:"24",height:"24",class:"rounded"})],-1),io={class:"col-auto"},co={class:"fs-5 text-white"},ao={class:"card-body"},lo={class:"row g-1 justify-content-center"},ro={class:"col-12 text-danger text-center fs-6"},_o={class:"card-body"},mo={class:"row g-1 justify-content-center"},po={class:"col-12 text-center"},uo={class:"text-normal"},ho={class:"col-5 col-lg-3"},fo={class:"ms-2"},vo={key:2,class:"w-100 h-100 d-flex align-items-center justify-content-center"},go={class:"container p-3",style:{"max-width":"512px"}},bo={class:"card"},wo={class:"card-header"},$o={class:"row gx-1 align-items-center justify-content-center"},yo=t("div",{class:"col-auto"},[t("img",{src:j,width:"24",height:"24",class:"rounded"})],-1),ko={class:"col-auto"},xo={class:"fs-5 text-white"},Co={class:"card-body"},So={class:"row g-1 justify-content-center"},jo={class:"col-12 text-danger text-center fs-6"},Oo={class:"col-12 text-center"},Ao={class:"col-5 col-lg-3"},Lo={href:"https://discord.gg/ZXrggavUpv",target:"_blank",class:"w-100 btn btn-secondary"},Eo=t("span",{class:"ms-2"},"Discord",-1),Mo={key:0,class:"card-body"},Io={class:"row g-1 justify-content-center"},Vo={class:"col-12"},To={spellcheck:"false",rows:"3",class:"form-control",disabled:"",readonly:""},Bo={class:"col-5 col-lg-3"},No={class:"ms-2"},Wo={class:"col-5 col-lg-3"},Po={class:"ms-2"},Do={class:"card-body"},Go={class:"row g-1 justify-content-center"},Uo={class:"col-12 text-center"},zo={class:"text-normal"},Fo={class:"col-5 col-lg-3"},Ro={class:"ms-2"},Ho={id:"toast-container",class:"toast-container position-fixed bottom-0 end-0 p-3"},Xo={key:3,class:"w-100 h-100 d-flex align-items-center justify-content-center"},Zo={class:"container p-3",style:{"max-width":"320px"}},qo={class:"card card-body"},Jo={class:"row g-1"},Ko={class:"col-12"},Qo={class:"row gx-2 align-items-center justify-content-center"},Yo=t("div",{class:"col-auto"},[t("img",{src:j,width:"24",height:"24",class:"rounded"})],-1),te={class:"col-auto"},se={class:"fs-5 text-white"},oe={class:"col-12 text-center"},ee={class:"flicker text-primary"},_e={__name:"home",setup(f){const a=Z(),r=q(),s=y();var _=null;const m=()=>{s.resetInProgress||s.saveAppState(),s.stopGameLoop(),_&&clearInterval(_),window.removeEventListener("beforeunload",m)};setTimeout(()=>{s.startApp(),s.loaded&&(s.startGameLoop(),s.firstTime&&s.showModal("modalWelcome"),_=H(()=>{s.resetInProgress||s.saveAppState()},3e4),window.addEventListener("beforeunload",m))},1e3);const u=M(),$=v(()=>r.meta.title?r.meta.title:r.params.id&&s.loaded?u.elems.find(c=>c.type=="item"&&c.id==r.params.id).name:""),b=v(()=>r.params.id&&s.loaded?u.elems.find(c=>c.type=="item"&&c.id==r.params.id).img:null);J({title:$});const O=v(()=>{let e=0;return u.elems.filter(w=>w.unlocked&&w.type=="milestone"&&w.count<1).forEach(w=>{let L=u.elems.find(S=>S.type=="manual"&&S.results[w.id]),p=u.getCosts(L);u.checkCounts(p)&&(e+=1)}),e}),I=v(()=>u.elems.filter(e=>e.unlocked&&e.type=="building").length),D=v(()=>u.elems.filter(e=>e.unlocked&&e.notified&&e.type=="building").length),A=v(()=>u.getElem("energy")),G=v(()=>[...new Set(u.elems.filter(e=>(s.showLocked?!0:e.unlocked)&&e.type=="item").map(e=>e.group))]);return(e,c)=>{const w=vt,L=It,p=C("font-awesome-icon"),k=W,S=P,U=Dt,z=ns,V=Y,F=tt;return l(),d(E,null,[i(w),i(L),o(s).loaded?(l(),d("div",is,[t("div",{id:"sidebar",class:K(["bg-dark border-end border-2 border-translucent",{open:o(s).sidebarOpen}])},[t("div",cs,[t("div",as,[t("div",ls,[t("div",ds,[rs,t("div",_s,[t("span",ms,n(e.$t("game_title")),1)]),t("div",ps,[t("button",{type:"button",class:"btn btn-primary",onClick:c[0]||(c[0]=h=>{o(s).sidebarOpen=!1})},[i(p,{icon:"fas fa-times","fixed-width":""})])])])]),t("div",us,[t("div",hs,[t("div",fs,[i(k,{to:o(a)("/milestones"),class:"btn btn-primary position-relative d-flex align-items-center justify-content-center",exactActiveClass:"active",onClick:c[1]||(c[1]=h=>{o(s).sidebarOpen=!1})},{default:x(()=>[t("span",vs,[i(p,{icon:"fas fa-check-circle"})]),t("span",gs,n(e.$t("page_milestones")),1),o(O)>0?(l(),d("div",bs,[i(p,{icon:"fas fa-check-circle"})])):g("",!0)]),_:1},8,["to"])]),o(I)>0?(l(),d("div",ws,[i(k,{to:o(a)("/buildings"),class:"btn btn-primary position-relative d-flex align-items-center justify-content-center",exactActiveClass:"active",onClick:c[2]||(c[2]=h=>{o(s).sidebarOpen=!1})},{default:x(()=>[t("span",$s,[i(p,{icon:"fas fa-industry"})]),t("span",ys,n(e.$t("page_buildings")),1),o(D)>0?(l(),d("div",ks,[i(p,{icon:"fas fa-certificate"})])):g("",!0)]),_:1},8,["to"])])):g("",!0)])]),o(s).showLocked||o(A).unlocked?(l(),d("div",xs,[t("div",Cs,[t("div",Ss,[t("div",js,[t("span",null,n(e.$t(o(A).name)),1)]),t("div",Os,[t("span",As,[t("img",{src:o(A).img,width:"16",height:"16"},null,8,Ls),T(),i(S,{id:"energy"})])])])])])):g("",!0),(l(!0),d(E,null,B(o(G),h=>(l(),d("div",{key:h,class:"col-12"},[i(U,{group:h},null,8,["group"])]))),128))])])],2),t("div",Es,[t("div",Ms,[t("div",Is,[t("div",Vs,[t("button",{type:"button",class:"btn btn-primary",onClick:c[3]||(c[3]=h=>{o(s).sidebarOpen=!0})},[i(p,{icon:"fas fa-bars","fixed-width":""})])]),t("div",Ts,[t("div",Bs,[o(b)?(l(),d("div",Ns,[t("img",{src:o(b),width:"24",height:"24"},null,8,Ws)])):g("",!0),t("div",Ps,[t("span",Ds,n(e.$t(o($))),1)])])]),t("div",Gs,[t("div",Us,[t("button",zs,[i(p,{icon:"fas fa-exclamation-triangle","fixed-width":""}),t("span",Fs,"v"+n(o(s).version),1)]),t("div",Rs," v"+n(o(s).version)+" - "+n(e.$t("disclaimer_text")),1)])]),t("div",Hs,[i(k,{to:o(a)("/scenarios"),class:"btn btn-primary d-flex align-items-center",exactActiveClass:"active",onClick:c[4]||(c[4]=h=>{o(s).sidebarOpen=!1})},{default:x(()=>[t("span",Xs,[i(p,{icon:"fas fa-list"})]),t("span",Zs,n(e.$t("page_scenarios")),1)]),_:1},8,["to"])]),t("div",qs,[i(k,{to:o(a)("/options"),class:"btn btn-primary d-flex align-items-center",exactActiveClass:"active",onClick:c[5]||(c[5]=h=>{o(s).sidebarOpen=!1})},{default:x(()=>[t("span",Js,[i(p,{icon:"fas fa-cog"})]),t("span",Ks,n(e.$t("page_options")),1)]),_:1},8,["to"])])])])]),t("div",Qs,[Q(e.$slots,"default")]),i(z)])):o(s).corrupted?(l(),d("div",Ys,[t("div",to,[t("div",so,[t("div",oo,[t("div",eo,[no,t("div",io,[t("span",co,n(e.$t("game_title")),1)])])]),t("div",ao,[t("div",lo,[t("div",ro,n(e.$t("screenCorrupted_text")),1)])]),t("div",_o,[t("div",mo,[t("div",po,[t("span",uo,n(e.$t("screenCorrupted_info")),1)]),t("div",ho,[t("button",{type:"button",class:"w-100 btn btn-danger",onClick:c[6]||(c[6]=h=>o(s).showModal("modalWipe"))},[i(p,{icon:"fas fa-fw fa-skull"}),t("span",fo,n(e.$t("screenCorrupted_wipeSave")),1)])])])])])]),i(V)])):o(s).error?(l(),d("div",vo,[t("div",go,[t("div",bo,[t("div",wo,[t("div",$o,[yo,t("div",ko,[t("span",xo,n(e.$t("game_title")),1)])])]),t("div",Co,[t("div",So,[t("div",jo,n(e.$t("screenError_text")),1),t("div",Oo,n(e.$t("screenError_info1")),1),t("div",Ao,[t("a",Lo,[t("span",null,[i(p,{icon:"fa-brands fa-fw fa-discord"})]),Eo])])])]),o(s).localStorageData?(l(),d("div",Mo,[t("div",Io,[t("div",Vo,[t("textarea",To,n(o(s).localStorageData),1)]),t("div",Bo,[t("button",{type:"button",class:"w-100 btn btn-secondary",onClick:c[7]||(c[7]=h=>o(s).exportAppState())},[i(p,{icon:"fas fa-fw fa-copy"}),t("span",No,n(e.$t("screenError_exportSave")),1)])]),t("div",Wo,[t("button",{type:"button",class:"w-100 btn btn btn-secondary",onClick:c[8]||(c[8]=h=>o(s).downloadAppState())},[i(p,{icon:"fas fa-fw fa-download"}),t("span",Po,n(e.$t("screenError_downloadSave")),1)])])])])):g("",!0),t("div",Do,[t("div",Go,[t("div",Uo,[t("span",zo,n(e.$t("screenError_info2")),1)]),t("div",Fo,[t("button",{type:"button",class:"w-100 btn btn-danger",onClick:c[9]||(c[9]=h=>o(s).showModal("modalWipe"))},[i(p,{icon:"fas fa-fw fa-skull"}),t("span",Ro,n(e.$t("screenError_wipeSave")),1)])])])])])]),t("div",Ho,[i(F)]),i(V)])):(l(),d("div",Xo,[t("div",Zo,[t("div",qo,[t("div",Jo,[t("div",Ko,[t("div",Qo,[Yo,t("div",te,[t("span",se,n(e.$t("game_title")),1)])])]),t("div",oe,[t("span",ee,n(e.$t("screenLoading_text")),1)])])])])]))],64)}}};export{_e as default};
