import{_ as l,c,a as e,k as t,l as o,m as s,v as a,o as d}from"./index-DtuzV0by.js";const i={},_={class:"flex items-center justify-center"},u={class:"header flex items-center justify-center"},p={class:"",style:{width:"400px"}},m=e("h2",{class:"mb-4 text-center text-4xl"},"ВОССТАНОВИТЬ ПАРОЛЬ",-1),f={class:"modal-body"},h=e("div",{class:"mb-3"},[e("input",{type:"email",class:"block w-full text-xl rounded-xl py-3 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:leading-6 border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500",id:"loginEmail",placeholder:"Электронная почта",required:""})],-1),x=e("button",{type:"button",class:"w-full bg-gray-800 p-3 border-0 border-blue-500 rounded-xl text-white font-bold hover:bg-blue-700 transition-all duration-300"}," Восстановить ",-1),b={class:"text-center pt-4"};function g(y,k,v,w,R,V){const r=a("Router-link"),n=a("RouterLink");return d(),c("div",_,[e("div",u,[e("div",p,[m,e("div",f,[e("form",null,[h,t(r,{to:"/change-password"},{default:o(()=>[x]),_:1}),e("h6",b,[s(" Нет аккаунта? "),t(n,{to:"/registration","data-toggle":"modal","data-target":"#registrationModal","data-dismiss":"modal"},{default:o(()=>[s("Зарегистрироваться")]),_:1})])])])])])])}const B=l(i,[["render",g]]);export{B as default};