import{i as g}from"./assets/icon-error-CqD2dW8d.js";import{f as x,i as E}from"./assets/vendor-C6P3h0JG.js";const l=document.querySelector("#datetime-picker"),n=document.querySelector("button"),d=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),F=document.querySelector("[data-seconds]");let c=new Date,r=null,e=null,h=null;n.setAttribute("disabled","true");n.addEventListener("click",M);const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],e=r-c,r<=c&&D(),n.removeAttribute("disabled")}};x(l,v);function M(t){p(s(e)),T(),n.setAttribute("disabled","true"),l.setAttribute("disabled","true")}function o(t){return String(t).padStart(2,"0")}function s(t){const y=o(Math.floor(t/864e5)),C=o(Math.floor(t%864e5/36e5)),S=o(Math.floor(t%864e5%36e5/6e4)),b=o(Math.floor(t%864e5%36e5%6e4/1e3));return{days:y,hours:C,minutes:S,seconds:b}}function T(){h=setInterval(()=>{q(),e-=1e3,s(e),p(s(e))},1e3)}function q(){d.textContent==="00"&m.textContent==="00"&f.textContent==="00"&F.textContent==="01"&&clearInterval(h)}function D(){E.error({title:"Error",message:"Please choose a date in the future",titleSize:"16px",titleColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:g,iconColor:"#FFFFFF",messageColor:"#FFFFFF",messageSize:"16px",position:"topRight",close:!0,displayMode:2,progressBarColor:"#B51B1B"})}function p({days:t,hours:i,minutes:a,seconds:u}){d.textContent=t.toString(),m.textContent=i.toString(),f.textContent=a.toString(),F.textContent=u.toString()}
//# sourceMappingURL=1-timer.js.map
