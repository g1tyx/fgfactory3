import{_ as A}from"./DVxNfaIo.js";import{_ as B}from"./CoCsbXix.js";import{s as N,k as S,e as j,f as u,r as E,h as s,o as d,g as D,w as x,a as t,b as n,c as r,j as y,t as _,F as P,i as V,v as F,u as G,C as M,d as T,n as X,D as z}from"./DWvcAw2L.js";import{_ as H,a as I,b as J,c as K}from"./B1WYM_gR.js";const Q=["src"],R={class:"position-absolute lh-1 badge bg-dark",style:{top:"-.25rem",right:"-.5rem"}},U={key:0,class:"position-absolute top-0 start-0 lh-1 small text-success"},Y={key:1,class:"w-100 btn btn-secondary",disabled:""},Z={__name:"SidebarButton",props:["id"],setup(f){const h=f,m=N(),i=S(),c=j(),a=u(()=>c.elems.find(g=>g.id==h.id));return(g,b)=>{const v=B,$=E("font-awesome-icon"),k=A;return s(a).unlocked?(d(),D(k,{key:0,to:s(m)("/item/"+f.id),class:"w-100 btn btn-primary position-relative px-0",exactActiveClass:"active",onClick:b[0]||(b[0]=O=>{s(i).sidebarOpen=!1,s(a).notified=!1}),title:g.$t(s(a).name)},{default:x(()=>[t("img",{src:s(a).img,width:"18",height:"18"},null,8,Q),t("div",R,[n(v,{id:f.id},null,8,["id"])]),s(a).notified?(d(),r("div",U,[n($,{icon:"fas fa-certificate"})])):y("",!0)]),_:1},8,["to","title"])):(d(),r("button",Y,[n($,{icon:"fas fa-lock","fixed-width":""})]))}}},q={class:"row g-2 justify-content-center"},W={class:"col-12 text-center"},tt={class:"text-subtitle"},st={__name:"SidebarGroup",props:["group"],setup(f){const h=f,m=S(),i=j(),c=u(()=>i.elems.filter(a=>(m.showLocked?!0:a.unlocked)&&a.type=="item"&&a.group==h.group).map(a=>a.id));return(a,g)=>{const b=Z;return d(),r("div",q,[t("div",W,[t("span",tt,_(a.$t(f.group)),1)]),(d(!0),r(P,null,V(s(c),v=>(d(),r("div",{key:v,class:"col-3"},[n(b,{id:v},null,8,["id"])]))),128))])}}},et={class:"w-100 h-100 d-flex align-items-stretch"},ot={class:"p-2 border-bottom border-2 border-translucent d-flex flex-column justify-content-center",style:{"min-height":"54px"}},nt={class:"row gx-2 align-items-center justify-content-lg-center"},it={class:"col col-lg-auto"},at={class:"fs-5 text-white"},lt={class:"col-auto d-lg-none"},ct={class:"py-2 flex-grow-1 scroll-content"},dt={class:"p-2"},rt={class:"row g-2 justify-content-center"},_t={class:"col-6"},pt={class:"ms-2"},mt={key:0,class:"position-absolute lh-1 small text-success",style:{top:"-.25rem",right:"-.25rem"}},ut={key:0,class:"col-6"},ht={class:"ms-2"},ft={key:0,class:"position-absolute lh-1 small text-success",style:{top:"-.25rem",left:"-.25rem"}},gt={key:1,class:"col-12"},bt={class:"card card-body"},vt={class:"row gx-2 align-items-center"},wt={class:"col"},yt={class:"col-auto"},kt={class:"text-white"},xt=["src"],$t={class:"p-2 border-top border-2 border-translucent"},Ct={class:"row g-2 justify-content-center"},St={class:"col-12 text-center"},jt={class:"opacity-75"},Ot={class:"col"},Lt=["title"],At={class:"col"},Bt=["title"],Nt=["title"],Et={class:"col"},Pt=["title"],Vt={id:"content",class:"h-100 d-flex flex-column"},Dt={class:"bg-dark border-bottom border-2 border-translucent d-flex flex-column justify-content-center",style:{"min-height":"54px"}},Ft={class:"p-2"},Gt={class:"row g-2 align-items-center flex-nowrap"},Mt={class:"col-auto d-lg-none"},Tt={class:"col text-truncate"},Xt={class:"row gx-1 align-items-center flex-nowrap"},zt={key:0,class:"col-auto"},Ht=["src"],It={class:"col text-truncate"},Jt={class:"fs-5 text-white"},Kt={class:"col-auto"},Qt={class:"dropdown"},Rt={type:"button",class:"btn btn-danger","data-bs-toggle":"dropdown","aria-expanded":"false"},Ut={class:"d-none d-lg-inline ms-1"},Yt={class:"dropdown-menu dropdown-menu-end p-2 text-bg-danger text-center"},Zt={class:"col-auto"},qt={class:"ms-0"},Wt={class:"d-none d-lg-inline ms-2"},ts={class:"col-auto"},ss={class:"ms-0"},es={class:"d-none d-lg-inline ms-2"},os={class:"py-2 flex-grow-1 scroll-content"},cs={__name:"home",setup(f){const h=N(),m=F(),i=S(),c=j(),a=u(()=>m.meta.title?m.meta.title:m.params.id&&i.appStatus=="started"?c.elems.find(o=>o.type=="item"&&o.id==m.params.id).name:""),g=u(()=>m.params.id&&i.appStatus=="started"?c.elems.find(o=>o.type=="item"&&o.id==m.params.id).img:null);G({title:a});const b=u(()=>{let e=0;return c.elems.filter(l=>l.unlocked&&l.type=="milestone"&&l.count<1).forEach(l=>{let w=c.elems.find(p=>p.type=="manual"&&p.results[l.id]),C=c.getCosts(w);c.checkCounts(C)&&(e+=1)}),e}),v=u(()=>c.elems.filter(e=>e.unlocked&&e.type=="building").length),$=u(()=>c.elems.filter(e=>e.unlocked&&e.notified&&e.type=="building").length),k=u(()=>c.getElem("energy")),O=u(()=>[...new Set(c.elems.filter(e=>(i.showLocked?!0:e.unlocked)&&e.type=="item").map(e=>e.group))]);return(e,o)=>{const l=E("font-awesome-icon"),w=A,C=B,L=st;return d(),r("div",et,[t("div",{id:"sidebar",class:X(["h-100 bg-dark border-end border-2 border-translucent d-flex flex-column",{open:s(i).sidebarOpen}])},[t("div",ot,[t("div",nt,[o[6]||(o[6]=t("div",{class:"col-auto"},[t("img",{src:M,width:"24",height:"24",class:"rounded"})],-1)),t("div",it,[t("span",at,_(e.$t("game_title")),1)]),t("div",lt,[t("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=p=>{s(i).sidebarOpen=!1})},[n(l,{icon:"fas fa-times","fixed-width":""})])])])]),t("div",ct,[t("div",dt,[t("div",rt,[t("div",_t,[n(w,{to:s(h)("/milestones"),class:"btn btn-primary position-relative d-flex align-items-center justify-content-center",exactActiveClass:"active",onClick:o[1]||(o[1]=p=>{s(i).sidebarOpen=!1})},{default:x(()=>[n(l,{icon:"fas fa-check-circle","fixed-width":""}),t("span",pt,_(e.$t("page_milestones")),1),s(b)>0?(d(),r("div",mt,[n(l,{icon:"fas fa-check-circle","fixed-width":""})])):y("",!0)]),_:1},8,["to"])]),s(v)>0?(d(),r("div",ut,[n(w,{to:s(h)("/buildings"),class:"btn btn-primary position-relative d-flex align-items-center justify-content-center",exactActiveClass:"active",onClick:o[2]||(o[2]=p=>{s(i).sidebarOpen=!1})},{default:x(()=>[n(l,{icon:"fas fa-industry","fixed-width":""}),t("span",ht,_(e.$t("page_buildings")),1),s($)>0?(d(),r("div",ft,[n(l,{icon:"fas fa-certificate","fixed-width":""})])):y("",!0)]),_:1},8,["to"])])):y("",!0),s(i).showLocked||s(k).unlocked?(d(),r("div",gt,[t("div",bt,[t("div",vt,[t("div",wt,[t("span",null,_(e.$t(s(k).name)),1)]),t("div",yt,[t("span",kt,[t("img",{src:s(k).img,width:"16",height:"16"},null,8,xt),o[7]||(o[7]=T()),n(C,{id:"energy"})])])])])])):y("",!0)])]),(d(!0),r(P,null,V(s(O),p=>(d(),r("div",{key:p,class:"p-2"},[n(L,{group:p},null,8,["group"])]))),128))]),t("div",$t,[t("div",Ct,[t("div",St,[t("span",jt,_(e.$t("options_support")),1)]),t("div",Ot,[t("a",{href:"https://www.patreon.com/bePatron?u=61283131",class:"w-100 btn btn-secondary",target:"_blank",title:e.$t("options_patreon")},o[8]||(o[8]=[t("img",{src:H,width:"16",height:"16"},null,-1)]),8,Lt)]),t("div",At,[t("a",{href:"https://ko-fi.com/freddecgames",class:"w-100 btn btn-secondary",target:"_blank",title:e.$t("options_kofi")},o[9]||(o[9]=[t("img",{src:I,width:"16",height:"16"},null,-1)]),8,Bt)]),t("form",{class:"col",action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_blank",title:e.$t("options_paypal")},o[10]||(o[10]=[t("input",{type:"hidden",name:"cmd",value:"_s-xclick"},null,-1),t("input",{type:"hidden",name:"hosted_button_id",value:"7XYD7SJFKQ8M4"},null,-1),t("button",{type:"submit",class:"w-100 btn btn-secondary"},[t("img",{src:J,width:"16",height:"16"})],-1)]),8,Nt),t("div",Et,[t("a",{href:"https://discord.gg/ZXrggavUpv",class:"w-100 btn btn-secondary",target:"_blank",title:e.$t("options_discord")},o[11]||(o[11]=[t("img",{src:K,width:"16",height:"16"},null,-1)]),8,Pt)])])])],2),t("div",Vt,[t("div",Dt,[t("div",Ft,[t("div",Gt,[t("div",Mt,[t("button",{type:"button",class:"btn btn-primary",onClick:o[3]||(o[3]=p=>{s(i).sidebarOpen=!0})},[n(l,{icon:"fas fa-bars","fixed-width":""})])]),t("div",Tt,[t("div",Xt,[s(g)?(d(),r("div",zt,[t("img",{src:s(g),width:"24",height:"24"},null,8,Ht)])):y("",!0),t("div",It,[t("span",Jt,_(e.$t(s(a))),1)])])]),t("div",Kt,[t("div",Qt,[t("button",Rt,[n(l,{icon:"fas fa-exclamation-triangle","fixed-width":""}),t("span",Ut,"v"+_(s(i).version),1)]),t("div",Yt," v"+_(s(i).version)+" - "+_(e.$t("disclaimer_text")),1)])]),t("div",Zt,[n(w,{to:s(h)("/scenarios"),class:"btn btn-primary d-flex align-items-center",exactActiveClass:"active",onClick:o[4]||(o[4]=p=>{s(i).sidebarOpen=!1})},{default:x(()=>[t("span",qt,[n(l,{icon:"fas fa-list","fixed-width":""})]),t("span",Wt,_(e.$t("page_scenarios")),1)]),_:1},8,["to"])]),t("div",ts,[n(w,{to:s(h)("/options"),class:"btn btn-primary d-flex align-items-center",exactActiveClass:"active",onClick:o[5]||(o[5]=p=>{s(i).sidebarOpen=!1})},{default:x(()=>[t("span",ss,[n(l,{icon:"fas fa-cog","fixed-width":""})]),t("span",es,_(e.$t("page_options")),1)]),_:1},8,["to"])])])])]),t("div",os,[z(e.$slots,"default")])])])}}};export{cs as default};
