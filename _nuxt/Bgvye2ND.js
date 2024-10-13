import{f as B,a as z}from"./C1xH3N-8.js";import{u as b}from"./CqILLy3-.js";import{f as d,o as c,c as l,t as g,h as o,n as N,r as I,a as t,g as j,F as k,i as C,b as h,j as x,l as G,m as L,d as P}from"./CBvbgGga.js";import{_ as H}from"./-7iwrUKB.js";import{_ as F,a as J,b as K,c as Q}from"./DKpeTX-z.js";import{_ as R,a as W}from"./BDUhe6rs.js";const X={__name:"ItemProd",props:["id"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find(a=>a.id==m.id));return(a,_)=>(c(),l("span",{class:N({"opacity-50":o(e).prod==0,"text-success":o(e).prod>0})},"+"+g(o(B)(o(e).prod))+" /s",3))}},Y={class:"opacity-50"},Z={__name:"ItemMax",props:["id"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find(a=>a.id==m.id));return(a,_)=>(c(),l("span",Y,g(o(B)(o(e).max,"",0)),1))}},tt={type:"button",class:"btn btn-secondary","data-bs-toggle":"dropdown"},st=["src"],et={class:"dropdown-menu p-2",style:{width:"17rem"}},ot={class:"row g-3"},nt={key:0,class:"col-12"},ct={class:"row g-1"},it={class:"col-12"},lt={class:"text-subtitle"},at={key:1,class:"col-12"},dt={class:"row g-1"},ut={class:"col-12"},_t={class:"text-subtitle"},rt={key:2,class:"col-12"},mt={class:"row g-1"},pt={class:"col-12"},ht={class:"text-subtitle"},vt={key:3,class:"col-12"},gt={class:"row g-1"},ft={class:"col-12"},$t={class:"text-subtitle"},wt={__name:"ManualInfo",props:["id","img"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find(v=>v.id==m.id)),a=d(()=>s.getCosts(e.value)),_=d(()=>s.getInputs(e.value)),p=d(()=>s.getResults(e.value)),u=d(()=>s.getUpgrades(e.value));return(v,$)=>{const i=I("font-awesome-icon"),n=F,y=J,M=R,E=K;return c(),l(k,null,[t("button",tt,[r.img?(c(),l("img",{key:0,src:r.img,width:"18",height:"18"},null,8,st)):(c(),j(i,{key:1,icon:"fas fa-info-circle","fixed-width":""}))]),t("div",et,[t("div",ot,[o(_)?(c(),l("div",nt,[t("div",ct,[t("div",it,[t("span",lt,g(v.$t("word_inputs")),1)]),(c(!0),l(k,null,C(o(_),(w,S)=>(c(),l("div",{key:S,class:"col-12"},[h(n,{id:S,count:w},null,8,["id","count"])]))),128))])])):x("",!0),o(u)?(c(),l("div",at,[t("div",dt,[t("div",ut,[t("span",_t,g(v.$t("word_upgrades")),1)]),(c(!0),l(k,null,C(o(u),(w,S)=>(c(),l("div",{key:S,class:"col-12"},[h(y,{id:S,count:w},null,8,["id","count"])]))),128))])])):x("",!0),o(a)?(c(),l("div",rt,[t("div",mt,[t("div",pt,[t("span",ht,g(v.$t("word_costs")),1)]),(c(!0),l(k,null,C(o(a),(w,S)=>(c(),l("div",{key:S,class:"col-12"},[h(M,{id:S,count:w},null,8,["id","count"])]))),128))])])):x("",!0),o(p)?(c(),l("div",vt,[t("div",gt,[t("div",ft,[t("span",$t,g(v.$t("word_results")),1)]),(c(!0),l(k,null,C(o(p),(w,S)=>(c(),l("div",{key:S,class:"col-12"},[h(E,{id:S,count:w},null,8,["id","count"])]))),128))])])):x("",!0)])])],64)}}},bt={__name:"ManualButtonStop",props:["id"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find($=>$.id==m.id)),a=d(()=>s.getCosts(e.value)),_=d(()=>s.getInputs(e.value)),p=d(()=>s.getUpgrades(e.value)),u=d(()=>e.value.status=="started"),v=function(){if(_.value)for(let $ in _.value){let i=s.getElem($);i.prod+=_.value[$],i.prod=Math.round(i.prod*100)/100}if(a.value)for(let $ in a.value){let i=s.getElem($);i.count+=a.value[$],i.count=Math.round(i.count*100)/100}if(p.value)for(let $ in p.value){let i=s.getElem($);i.count+=p.value[$],i.count=Math.round(i.count*100)/100}e.value.status="waiting",e.value.remainingSeconds=e.value.seconds};return($,i)=>{const n=I("font-awesome-icon");return c(),l("button",{type:"button",class:N(["btn btn-danger btn-icon",{disabled:!o(u)}]),onClick:i[0]||(i[0]=y=>{o(u)&&v()})},[h(n,{icon:"fas fa-stop"})],2)}}},yt={key:0,class:"text-center"},kt={key:1,class:"text-center text-yellow"},xt={__name:"ManualSeconds",props:["id"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find(a=>a.id==m.id));return(a,_)=>o(e).status==="waiting"?(c(),l("div",yt,g(o(z)(o(e).seconds)),1)):(c(),l("div",kt,g(o(z)(o(e).remainingSeconds)),1))}},St={class:"progress",style:{height:"3px"}},Ct={__name:"ManualProgress",props:["id"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find(_=>_.id==m.id)),a=d(()=>e.value.status==="waiting"?0:100-Math.floor(100*e.value.remainingSeconds/e.value.seconds));return(_,p)=>(c(),l("div",St,[t("div",{class:"progress-bar bg-success",style:G("width:"+o(a)+"%;")},null,4)]))}},Mt={class:"row gx-2 align-items-center justify-content-end"},Et=["title"],It=["src"],Bt={class:"col text-white text-truncate"},Nt={class:"col-auto"},Pt={class:"badge d-block text-bg-success",style:{width:"55px"}},jt={__name:"BlockStorage",props:["id","count"],setup(r){const m=r,s=b(),e=d(()=>s.getElem(m.id));return(a,_)=>(c(),l("div",Mt,[o(e).img!=null?(c(),l("div",{key:0,class:"col-auto",title:a.$t(o(e).name)},[t("img",{src:o(e).img,width:"16",height:"16"},null,8,It)],8,Et)):x("",!0),t("div",Bt,g(a.$t(o(e).name)),1),t("div",Nt,[t("span",Pt,"+"+g(o(B)(r.count)),1)])]))}},At={type:"button",class:"btn btn-secondary","data-bs-toggle":"dropdown"},Ot=["src"],Vt={class:"dropdown-menu p-2",style:{width:"17rem"}},Ut={class:"row g-3"},qt={key:0,class:"col-12"},zt={class:"row g-1"},Ft={class:"col-12"},Rt={class:"text-subtitle"},Tt={__name:"StorerInfo",props:["id"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find(p=>p.id==m.id)),a=d(()=>s.elems.find(p=>p.id==e.value.assign.id)),_=d(()=>s.getStorages(e.value));return(p,u)=>{const v=I("font-awesome-icon"),$=jt;return c(),l(k,null,[t("button",At,[o(a).img?(c(),l("img",{key:0,src:o(a).img,width:"18",height:"18"},null,8,Ot)):(c(),j(v,{key:1,icon:"fas fa-info-circle","fixed-width":""}))]),t("div",Vt,[t("div",Ut,[o(_)?(c(),l("div",qt,[t("div",zt,[t("div",Ft,[t("span",Rt,g(p.$t("word_storages")),1)]),(c(!0),l(k,null,C(o(_),(i,n)=>(c(),l("div",{key:n,class:"col-12"},[h($,{id:n,count:i},null,8,["id","count"])]))),128))])])):x("",!0)])])],64)}}},Dt={__name:"AssignName",props:["id"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find(_=>_.id==m.id)),a=d(()=>s.elems.find(_=>_.id==e.value.assign.id));return(_,p)=>g(_.$t(o(a).name))}},Gt={__name:"AssignCount",props:["id"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find(a=>a.id==m.id));return(a,_)=>(c(),l("span",{class:N({"opacity-50":o(e).assign.count==0,"text-white":o(e).assign.count>0})},g(o(B)(o(e).assign.count,"",0)),3))}},Lt={__name:"UnassignButton",props:["id"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find(i=>i.id==m.id)),a=d(()=>s.getCosts(e.value)),_=d(()=>s.getInputs(e.value)),p=d(()=>s.getOutputs(e.value)),u=d(()=>s.getStorages(e.value)),v=d(()=>{if(e.value.assign.count<1)return!1;let i=!0;if(p.value){for(let n in p.value)if(s.getElem(n).prod-p.value[n]<0)return!1}if(u.value)for(let n in u.value){let y=s.getElem(n);if(y.max-u.value[n]<y.count)return!1}return i}),$=function(){if(a.value)for(let i in a.value){let n=s.getElem(i);n.count+=a.value[i],n.count>n.max&&(n.count=n.max),n.count=Math.round(n.count*100)/100}if(_.value)for(let i in _.value){let n=s.getElem(i);n.prod+=_.value[i],n.prod=Math.round(n.prod*100)/100}if(p.value)for(let i in p.value){let n=s.getElem(i);n.prod-=p.value[i],n.prod=Math.round(n.prod*100)/100}if(u.value)for(let i in u.value){let n=s.getElem(i);n.max-=u.value[i],n.max=Math.round(n.max*100)/100}e.value.assign.count-=1};return(i,n)=>{const y=I("font-awesome-icon");return c(),l("button",{type:"button",class:N(["btn btn-danger",{disabled:!o(v)}]),onClick:n[0]||(n[0]=M=>{o(v)&&$()})},[h(y,{icon:"fas fa-minus-square","fixed-width":""})],2)}}},Ht={__name:"AssignButton",props:["id"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find(i=>i.id==m.id)),a=d(()=>s.getCosts(e.value)),_=d(()=>s.getInputs(e.value)),p=d(()=>s.getOutputs(e.value)),u=d(()=>s.getStorages(e.value)),v=d(()=>!(1>s.getAvailableCount(e.value.assign.id)||a.value&&!s.checkCounts(a.value)||_.value&&!s.checkProds(_.value))),$=function(){if(e.value.assign.count+=1,a.value)for(let i in a.value){let n=s.getElem(i);n.count-=a.value[i],n.count=Math.round(n.count*100)/100}if(_.value)for(let i in _.value){let n=s.getElem(i);n.prod-=_.value[i],n.prod=Math.round(n.prod*100)/100}if(p.value)for(let i in p.value){let n=s.getElem(i);n.prod+=p.value[i],n.prod=Math.round(n.prod*100)/100}if(u.value)for(let i in u.value){let n=s.getElem(i);n.max+=u.value[i],n.max=Math.round(n.max*100)/100}};return(i,n)=>{const y=I("font-awesome-icon");return c(),l("button",{type:"button",class:N(["btn btn-primary",{disabled:!o(v)}]),onClick:n[0]||(n[0]=M=>{o(v)&&$()})},[h(y,{icon:"fas fa-plus-square","fixed-width":""})],2)}}},Jt={class:"row gx-2 align-items-center justify-content-end"},Kt=["title"],Qt=["src"],Wt={class:"col text-white text-truncate"},Xt={class:"col-auto"},Yt={class:"badge d-block text-bg-success",style:{width:"55px"}},Zt={__name:"BlockOutput",props:["id","count"],setup(r){const m=r,s=b(),e=d(()=>s.getElem(m.id));return(a,_)=>(c(),l("div",Jt,[o(e).img!=null?(c(),l("div",{key:0,class:"col-auto",title:a.$t(o(e).name)},[t("img",{src:o(e).img,width:"16",height:"16"},null,8,Qt)],8,Kt)):x("",!0),t("div",Wt,g(a.$t(o(e).name)),1),t("div",Xt,[t("span",Yt,"+"+g(o(B)(r.count))+" /s",1)])]))}},ts={type:"button",class:"btn btn-secondary","data-bs-toggle":"dropdown"},ss=["src"],es={class:"dropdown-menu p-2",style:{width:"17rem"}},os={class:"row g-3"},ns={key:0,class:"col-12"},cs={class:"row g-1"},is={class:"col-12"},ls={class:"text-subtitle"},as={key:1,class:"col-12"},ds={class:"row g-1"},us={class:"col-12"},_s={class:"text-subtitle"},rs={key:2,class:"col-12"},ms={class:"row g-1"},ps={class:"col-12"},hs={class:"text-subtitle"},vs={__name:"ProducerInfo",props:["id"],setup(r){const m=r,s=b(),e=d(()=>s.elems.find(v=>v.id==m.id)),a=d(()=>s.elems.find(v=>v.id==e.value.assign.id)),_=d(()=>s.getCosts(e.value)),p=d(()=>s.getInputs(e.value)),u=d(()=>s.getOutputs(e.value));return(v,$)=>{const i=I("font-awesome-icon"),n=R,y=F,M=Zt;return c(),l(k,null,[t("button",ts,[o(a).img?(c(),l("img",{key:0,src:o(a).img,width:"18",height:"18"},null,8,ss)):(c(),j(i,{key:1,icon:"fas fa-info-circle","fixed-width":""}))]),t("div",es,[t("div",os,[o(_)?(c(),l("div",ns,[t("div",cs,[t("div",is,[t("span",ls,g(v.$t("word_costs")),1)]),(c(!0),l(k,null,C(o(_),(E,w)=>(c(),l("div",{key:w,class:"col-12"},[h(n,{id:w,count:E},null,8,["id","count"])]))),128))])])):x("",!0),o(p)?(c(),l("div",as,[t("div",ds,[t("div",us,[t("span",_s,g(v.$t("word_inputs")),1)]),(c(!0),l(k,null,C(o(p),(E,w)=>(c(),l("div",{key:w,class:"col-12"},[h(y,{id:w,count:E},null,8,["id","count"])]))),128))])])):x("",!0),o(u)?(c(),l("div",rs,[t("div",ms,[t("div",ps,[t("span",hs,g(v.$t("word_outputs")),1)]),(c(!0),l(k,null,C(o(u),(E,w)=>(c(),l("div",{key:w,class:"col-12"},[h(M,{id:w,count:E},null,8,["id","count"])]))),128))])])):x("",!0)])])],64)}}},gs={class:"w-100 h-100 scroll-content"},fs={class:"container"},$s={class:"row g-3"},ws={class:"col-12"},bs={class:"row gx-2 align-items-center justify-content-center"},ys={key:0,class:"col-6 col-lg-4"},ks={class:"card card-body"},xs={class:"text-center"},Ss={class:"opacity-50"},Cs={class:"text-center"},Ms={class:"fs-6 text-white"},Es={class:"col-6 col-lg-4"},Is={class:"card card-body"},Bs={class:"text-center"},Ns={class:"opacity-50"},Ps={class:"text-center"},js={class:"fs-6 text-white"},As={key:0,class:"col-12"},Os={class:"card"},Vs={class:"card-header"},Us={class:"fs-6 text-white"},qs={class:"list-group list-group-flush"},zs={class:"row gx-2 align-items-center"},Fs={class:"col-auto"},Rs={class:"col text-truncate"},Ts={class:"text-white"},Ds={class:"col-auto"},Gs={class:"col-auto",style:{width:"65px"}},Ls={class:"col-auto"},Hs={key:1,class:"col-12"},Js={class:"card"},Ks={class:"card-header"},Qs={class:"fs-6 text-white"},Ws={class:"list-group list-group-flush"},Xs={class:"row gx-2 align-items-center"},Ys={class:"col-auto"},Zs={class:"col text-truncate"},te={class:"text-white"},se={class:"col-auto"},ee={class:"col-auto"},oe=t("small",null,"x",-1),ne={class:"col-auto"},ce={class:"col-auto"},ie={key:2,class:"col-12"},le={class:"card"},ae={class:"card-header"},de={class:"fs-6 text-white"},ue={class:"list-group list-group-flush"},_e={class:"row gx-2 align-items-center"},re={class:"col-auto"},me={class:"col text-truncate"},pe={class:"text-white"},he={class:"col-auto"},ve={class:"col-auto"},ge=t("small",null,"x",-1),fe={class:"col-auto"},$e={class:"col-auto"},Ce={__name:"[id]",setup(r){const m=L(),s=b(),e=d(()=>s.elems.find(u=>u.type=="item"&&u.id==m.params.id)),a=d(()=>s.elems.filter(u=>u.unlocked&&u.type=="storer"&&u.storages[m.params.id])),_=d(()=>s.elems.filter(u=>u.unlocked&&u.type=="manual"&&u.results[m.params.id])),p=d(()=>s.elems.filter(u=>u.unlocked&&u.type=="producer"&&u.outputs[m.params.id]));return(u,v)=>{const $=X,i=H,n=Z,y=wt,M=bt,E=xt,w=Ct,S=W,T=Tt,A=Dt,O=Q,V=Gt,U=Lt,q=Ht,D=vs;return c(),l("div",gs,[t("div",fs,[t("div",$s,[t("div",ws,[t("div",bs,[o(p).length>0?(c(),l("div",ys,[t("div",ks,[t("div",xs,[t("span",Ss,g(u.$t("word_prod")),1)]),t("div",Cs,[t("span",Ms,[h($,{id:o(e).id},null,8,["id"])])])])])):x("",!0),t("div",Es,[t("div",Is,[t("div",Bs,[t("span",Ns,g(u.$t("word_count")),1)]),t("div",Ps,[t("span",js,[h(i,{id:o(e).id},null,8,["id"]),P(" / "),h(n,{id:o(e).id},null,8,["id"])])])])])])]),o(_).length>0?(c(),l("div",As,[t("div",Os,[t("div",Vs,[t("span",Us,g(u.$t("word_manuals")),1)]),t("div",qs,[(c(!0),l(k,null,C(o(_),f=>(c(),l("div",{key:f.id,class:"list-group-item"},[t("div",zs,[t("div",Fs,[h(y,{id:f.id,img:o(e).img},null,8,["id","img"])]),t("div",Rs,[t("span",Ts,g(u.$t(o(e).name)),1)]),t("div",Ds,[h(M,{id:f.id},null,8,["id"])]),t("div",Gs,[h(E,{id:f.id},null,8,["id"]),h(w,{id:f.id},null,8,["id"])]),t("div",Ls,[h(S,{id:f.id,icon:"fas fa-play"},null,8,["id"])])])]))),128))])])])):x("",!0),o(a).length>0?(c(),l("div",Hs,[t("div",Js,[t("div",Ks,[t("span",Qs,g(u.$t("word_storers")),1)]),t("div",Ws,[(c(!0),l(k,null,C(o(a),f=>(c(),l("div",{key:f.id,class:"list-group-item"},[t("div",Xs,[t("div",Ys,[h(T,{id:f.id},null,8,["id"])]),t("div",Zs,[t("span",te,[h(A,{id:f.id},null,8,["id"])])]),t("div",se,[h(O,{id:f.assign.id},null,8,["id"])]),t("div",ee,[oe,P(),h(V,{id:f.id},null,8,["id"])]),t("div",ne,[h(U,{id:f.id},null,8,["id"])]),t("div",ce,[h(q,{id:f.id},null,8,["id"])])])]))),128))])])])):x("",!0),o(p).length>0?(c(),l("div",ie,[t("div",le,[t("div",ae,[t("span",de,g(u.$t("word_producers")),1)]),t("div",ue,[(c(!0),l(k,null,C(o(p),f=>(c(),l("div",{key:f.id,class:"list-group-item"},[t("div",_e,[t("div",re,[h(D,{id:f.id},null,8,["id"])]),t("div",me,[t("span",pe,[h(A,{id:f.id},null,8,["id"])])]),t("div",he,[h(O,{id:f.assign.id},null,8,["id"])]),t("div",ve,[ge,P(),h(V,{id:f.id},null,8,["id"])]),t("div",fe,[h(U,{id:f.id},null,8,["id"])]),t("div",$e,[h(q,{id:f.id},null,8,["id"])])])]))),128))])])])):x("",!0)])])])}}};export{Ce as default};
