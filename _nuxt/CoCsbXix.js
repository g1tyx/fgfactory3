import{e as c,f as r,o as m,c as u,t as p,h as t,m as i,n as l}from"./DWvcAw2L.js";const f={__name:"ItemCount",props:["id"],setup(a){const s=a,n=c(),e=r(()=>n.elems.find(o=>o.id==s.id));return(o,_)=>(m(),u("span",{class:l({"opacity-50":t(e).count==0,"text-white":t(e).count>0&&t(e).count<t(e).max,"text-danger":t(e).count>=t(e).max})},p(t(i)(t(e).count,"",0)),3))}};export{f as _};
