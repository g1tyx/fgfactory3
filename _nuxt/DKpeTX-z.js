import{f as u}from"./C1xH3N-8.js";import{u as m}from"./CqILLy3-.js";import{f as g,o as i,c as l,h as t,a as o,j as _,t as d,n as h}from"./CBvbgGga.js";const p={class:"row gx-2 align-items-center justify-content-end"},b=["title"],$=["src"],f={class:"col text-white text-truncate"},v={class:"col-auto"},R={__name:"BlockInput",props:["id","count"],setup(s){const n=s,a=m(),e=g(()=>a.getElem(n.id));return(c,r)=>(i(),l("div",p,[t(e).img!=null?(i(),l("div",{key:0,class:"col-auto",title:c.$t(t(e).name)},[o("img",{src:t(e).img,width:"16",height:"16"},null,8,$)],8,b)):_("",!0),o("div",f,d(c.$t(t(e).name)),1),o("div",v,[o("span",{class:h(["badge d-block",{"text-bg-success":t(e).prod>=s.count,"text-bg-danger":t(e).prod<s.count}]),style:{width:"55px"}},d(t(u)(s.count))+" /s",3)])]))}},x={class:"row gx-2 align-items-center justify-content-end"},k=["title"],w=["src"],y={class:"col text-white text-truncate"},B={class:"col-auto"},U={__name:"BlockUpgrade",props:["id","count"],setup(s){const n=s,a=m(),e=g(()=>a.getElem(n.id)),c=a.getAvailableCount(n.id);return(r,V)=>(i(),l("div",x,[t(e).img!=null?(i(),l("div",{key:0,class:"col-auto",title:r.$t(t(e).name)},[o("img",{src:t(e).img,width:"16",height:"16"},null,8,w)],8,k)):_("",!0),o("div",y,d(r.$t(t(e).name)),1),o("div",B,[o("span",{class:h(["badge d-block",{"text-bg-success":t(c)>=s.count,"text-bg-danger":t(c)<s.count}]),style:{width:"55px"}},d(t(u)(s.count)),3)])]))}},C={class:"row gx-2 align-items-center justify-content-end"},S=["title"],j=["src"],E={class:"col text-white text-truncate"},A={class:"col-auto"},N={class:"badge d-block text-bg-success",style:{width:"55px"}},q={__name:"BlockResult",props:["id","count"],setup(s){const n=s,a=m(),e=g(()=>a.getElem(n.id));return(c,r)=>(i(),l("div",C,[t(e).img!=null?(i(),l("div",{key:0,class:"col-auto",title:c.$t(t(e).name)},[o("img",{src:t(e).img,width:"16",height:"16"},null,8,j)],8,S)):_("",!0),o("div",E,d(c.$t(t(e).name)),1),o("div",A,[o("span",N,"+"+d(t(u)(s.count)),1)])]))}},I={key:0,class:"badge text-bg-success"},F={__name:"ItemAvailable",props:["id"],setup(s){const n=s,a=m(),e=g(()=>a.getAvailableCount(n.id));return(c,r)=>t(e)>0?(i(),l("span",I,d(t(u)(t(e))),1)):_("",!0)}};export{R as _,U as a,q as b,F as c};
