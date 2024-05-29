import{d as o,r as i,a as p,o as v,g as m,u as l}from"./index-DHUG6ahP.js";const C=o({__name:"index",setup(u){let a=i([{title:"购物",start:"2024-05-11 10:00:00",end:"2024-05-11 12:00:00",editable:!0},{title:"学习",start:"2024-05-15 08:00:00",end:"2024-05-15 16:00:00"}]),r=e=>{let t={start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 13:00:00`,title:"吃饭"};a.value.push(t),console.log(e)},s=e=>{let t=document.createElement("div"),n=e.timeText.split(" - "),c=n[0].replace("上午","").replace("下午","").replace("时",""),d=n[1].replace("上午","").replace("下午","").replace("时","");return t.innerHTML=`
        <img src="src/assets/vue.svg" style="width:20px;height:20px;">
         <div>开始时间: ${c}</div>
         <div>结束时间: ${d}</div>
         <div>标题: ${e.event._def.title}</div>
        `,{domNodes:[t]}};return(e,t)=>{const n=p("my-calendar");return v(),m(n,{events:l(a),eventContent:l(s),onDateClick:l(r)},null,8,["events","eventContent","onDateClick"])}}});export{C as default};
