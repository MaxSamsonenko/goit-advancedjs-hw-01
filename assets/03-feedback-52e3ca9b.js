import"./commonjsHelpers-a1841df3.js";/* empty css               */import{t as s}from"./index-afc484e8.js";const a=document.querySelector(".feedback-form");a.addEventListener("input",s(r,500));a.addEventListener("submit",m);const e=a.elements.email,t=a.elements.message,l=JSON.parse(localStorage.getItem("feedback-form-state"));l&&(e.value=l.email,t.value=l.message);function r(){localStorage.setItem("feedback-form-state",JSON.stringify({email:e.value,message:t.value}))}function m(o){if(o.preventDefault(),e.value===""||t.value===""){alert("Please fill in all the fields");return}console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),e.value="",t.value=""}
//# sourceMappingURL=03-feedback-52e3ca9b.js.map