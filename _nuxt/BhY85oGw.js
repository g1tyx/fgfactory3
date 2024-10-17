import{f as $}from"./CYMVvgqh.js";import{u as w,a as x}from"./DpAc4zup.js";import{f as u,o as c,c as i,a as s,t as h,n as S,h as e,d as C,l as B,r as b,g as k,F as v,i as y,b as p}from"./VKx6-eEe.js";import{_ as M,a as N}from"./5PgKfQRf.js";const L={class:"row gx-2 align-items-center"},V={class:"col"},z={class:"fs-6 text-white"},F={class:"col-auto"},G={class:"text-end"},A={class:"opacity-50"},D={class:"progress bg-dark",style:{height:"3px",width:"75px"}},E={__name:"MilestoneGroup",props:["group"],setup(d){const a=d,l=w(),n=u(()=>l.elems.filter(o=>o.type=="milestone"&&o.group==a.group&&o.count>0).length),r=u(()=>l.elems.filter(o=>o.type=="milestone"&&o.group==a.group).length),t=u(()=>Math.floor(100*n.value/r.value));return(o,_)=>(c(),i("div",L,[s("div",V,[s("span",z,h(o.$t(d.group)),1)]),s("div",F,[s("div",G,[s("span",{class:S({"opacity-50":e(n)<1})},h(e($)(e(n))),3),C(),s("span",A,"/ "+h(e($)(e(r))),1)]),s("div",D,[s("div",{class:"progress-bar bg-success",style:B("width:"+e(t)+"%")},null,4)])])]))}},I={type:"button",class:"btn btn-secondary","data-bs-toggle":"dropdown"},T=["src"],j={class:"dropdown-menu p-2",style:{width:"17rem"}},q={class:"row g-3"},H={class:"col-12"},J={class:"row g-1"},K={class:"col-12"},O={class:"text-subtitle"},P={__name:"MilestoneInfo",props:["id","img"],setup(d){const a=d,l=w(),n=u(()=>l.elems.find(t=>t.id==a.id)),r=u(()=>l.getCosts(n.value));return(t,o)=>{const _=b("font-awesome-icon"),g=M;return c(),i(v,null,[s("button",I,[d.img?(c(),i("img",{key:0,src:d.img,width:"18",height:"18"},null,8,T)):(c(),k(_,{key:1,icon:"fas fa-info-circle","fixed-width":""}))]),s("div",j,[s("div",q,[s("div",H,[s("div",J,[s("div",K,[s("span",O,h(t.$t("word_costs")),1)]),(c(!0),i(v,null,y(e(r),(m,f)=>(c(),i("div",{key:f,class:"col-12"},[p(g,{id:f,count:m},null,8,["id","count"])]))),128))])])])])],64)}}},Q={key:0,class:"row gx-2 align-items-center"},R={class:"col-auto"},U={type:"button",class:"btn btn-secondary",disabled:""},W={class:"col text-truncate"},X={class:"opacity-50"},Y={key:1,class:"row gx-2 align-items-center"},Z={class:"col-auto"},ss={type:"button",class:"btn btn-success",disabled:""},ts=["src"],os={class:"col text-truncate"},es={class:"text-success opacity-50"},cs={class:"col-auto"},ns={type:"button",class:"btn btn-success",disabled:""},is={key:2,class:"row gx-2 align-items-center"},as={class:"col-auto"},ls={class:"col text-truncate"},ds={class:"text-white"},rs={class:"col-auto"},_s={__name:"Milestone",props:["id"],setup(d){const a=d,l=w(),n=u(()=>l.elems.find(t=>t.id==a.id)),r=u(()=>l.elems.find(t=>t.type=="manual"&&t.results[a.id]));return(t,o)=>{const _=b("font-awesome-icon"),g=P,m=N;return e(n).unlocked?e(n).count>0?(c(),i("div",Y,[s("div",Z,[s("button",ss,[e(n).img?(c(),i("img",{key:0,src:e(n).img,width:"18",height:"18"},null,8,ts)):(c(),k(_,{key:1,icon:"fas fa-info-circle","fixed-width":""}))])]),s("div",os,[s("span",es,h(t.$t(e(n).name)),1)]),s("div",cs,[s("button",ns,[p(_,{icon:"fas fa-check-circle","fixed-width":""})])])])):(c(),i("div",is,[s("div",as,[p(g,{id:e(r).id},null,8,["id"])]),s("div",ls,[s("span",ds,h(t.$t(e(n).name)),1)]),s("div",rs,[p(m,{id:e(r).id,icon:"fas fa-check-circle"},null,8,["id"])])])):(c(),i("div",Q,[s("div",R,[s("button",U,[p(_,{icon:"fas fa-lock","fixed-width":""})])]),s("div",W,[s("span",X,h(t.$t("word_locked")),1)])]))}}},us={class:"container"},ms={class:"row g-3"},ps={class:"card"},hs={class:"card-header"},gs={class:"list-group list-group-flush"},$s={__name:"milestones",setup(d){const a=x(),l=w(),n=u(()=>[...new Set(l.elems.filter(t=>(a.showLocked?!0:t.unlocked)&&t.type=="milestone"&&(t.count<1||a.showCompleted)).map(t=>t.group))]),r=function(t){return l.elems.filter(o=>(a.showLocked?!0:o.unlocked)&&o.type=="milestone"&&o.group==t&&(o.count<1||a.showCompleted)).map(o=>o.id)};return(t,o)=>{const _=E,g=_s;return c(),i("div",us,[s("div",ms,[(c(!0),i(v,null,y(e(n),m=>(c(),i("div",{key:m,class:"col-12"},[s("div",ps,[s("div",hs,[p(_,{group:m},null,8,["group"])]),s("div",gs,[(c(!0),i(v,null,y(r(m),f=>(c(),i("div",{key:f,class:"list-group-item"},[p(g,{id:f},null,8,["id"])]))),128))])])]))),128))])])}}};export{$s as default};
