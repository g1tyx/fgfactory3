import{S as r}from"./f8AjloxH.js";class l{constructor(t){Object.getOwnPropertyNames(t).forEach(e=>{Object.defineProperty(this,e,Object.getOwnPropertyDescriptor(t,e))}),this.unlocked=!this.reqs,this.notified=!1}load(t){t.assignCount&&(this.assign.count=t.assignCount),t.count&&(this.count=t.count),t.notified&&(this.notified=t.notified),t.remainingSeconds&&(this.remainingSeconds=t.remainingSeconds),t.status&&(this.status=t.status)}getDataToSave(){let t={};return this.assign&&(t.assignCount=this.assign.count),this.notified&&(t.notified=this.notified),this.remainingSeconds&&(t.remainingSeconds=this.remainingSeconds),this.status&&(t.status=this.status),this.count&&(t.count=this.count),this.id&&(t.id=this.id),t}}const c=r({id:"game-store",state:()=>({elems:[],victory:!1,victoryReqs:null}),getters:{getElem:s=>t=>s.elems.find(o=>o.id==t),isVictoryReached:s=>s.victory?!1:!!(s.victoryReqs&&s.checkCounts(s.victoryReqs)),getCosts:s=>t=>t.costs,getInputs:s=>t=>t.inputs,getOutputs:s=>t=>t.outputs,getResults:s=>t=>t.results,getUpgrades:s=>t=>t.upgrades,getStorages:s=>t=>t.storages,checkCounts:s=>t=>{let o=!0;for(let e in t)s.getElem(e).count<t[e]&&(o=!1);return o},checkProds:s=>t=>{let o=!0;for(let e in t)s.getElem(e).prod<t[e]&&(o=!1);return o},checkResults:s=>t=>{let o=!0;for(let e in t){let i=s.getElem(e);i.count+t[e]>i.max&&(o=!1)}return o},getAvailableCount:s=>t=>{let e=s.getElem(t).count;return s.elems.filter(n=>n.assign&&n.assign.id==t&&n.assign.count>0).forEach(n=>e-=n.assign.count),e},checkAvailables:s=>t=>{let o=!0;for(let e in t)s.getAvailableCount(e)<t[e]&&(o=!1);return o}},actions:{loadScenario(s){this.victoryReqs=s.victoryReqs,s.elems.forEach(e=>{let i=new l(e);this.elems.push(i)}),this.elems.filter(e=>e.type=="building").forEach(e=>{this.elems.filter(n=>n.assign&&n.assign.id==e.id).forEach(n=>{n.reqs=e.reqs,n.unlocked=!1})})},loadGameState(s){s.elems!=null&&s.elems.forEach(e=>{let i=this.getElem(e.id);i&&i.load(e)}),this.elems.filter(e=>e.reqs).forEach(e=>{e.unlocked=this.checkCounts(e.reqs)}),this.elems.filter(e=>e.assign&&e.assign.count>0).forEach(e=>{if(e.inputs)for(let i in e.inputs){let n=this.getElem(i);n.prod-=e.inputs[i]*e.assign.count,n.prod=Math.round(n.prod*100)/100}if(e.outputs)for(let i in e.outputs){let n=this.getElem(i);n.prod+=e.outputs[i]*e.assign.count,n.prod=Math.round(n.prod*100)/100}if(e.storages)for(let i in e.storages){let n=this.getElem(i);n.max+=e.storages[i]*e.assign.count,n.max=Math.round(n.max*100)/100}}),this.victory=this.checkCounts(this.victoryReqs)},computeOfflineProgress(s){this.doTick(s)},saveGameState(s){s.elems=[],this.elems.forEach(t=>s.elems.push(t.getDataToSave())),s.victory=this.victory},doTick(s){this.elems.filter(e=>e.status==="started").forEach(e=>{e.remainingSeconds-=s,e.remainingSeconds<=0&&this.onBuild(e)}),this.elems.filter(e=>e.prod>0&&e.count<e.max).forEach(e=>{e.count+=e.prod*s,e.count>=e.max&&(e.count=e.max)})},doVictory(){this.victory=!0},onBuild(s){s.status&&(s.status="waiting",s.remainingSeconds=0);let t=this.getResults(s);if(t)for(let e in t){let i=this.getElem(e);if(i.count>=i.max)continue;let n=t[e];i.count+=n,i.count>=i.max&&(i.count=i.max),i.count=Math.round(i.count*100)/100}this.elems.filter(e=>e.reqs).forEach(e=>{let i=this.checkCounts(e.reqs);i!=e.unlocked&&(e.unlocked=i,e.notified=!0)})}}});export{c as u};
