import{_ as u,k as p,c as m,a as e,w as i,v as n,h as l,i as d,j as c,o as g}from"./index-CNu2woMZ.js";const h={data(){return{email:null,password:null}},methods:{login(){if(this.email==="user"&&this.password==="password")localStorage.setItem("isAuthenticated",!0),console.log(this.email,this.password),console.log(localStorage.getItem("isAuthenticated")),this.email="",this.password="",this.$router.push("/main-page");else return alert("Неверный логин или пароль"),this.password="",this.email="",!1}}},b={class:"header flex items-center justify-center"},x={class:""},_={class:"justify-content-center",style:{width:"400px"}},f=e("h2",{class:"mb-4 text-center text-4xl"},"ВХОД",-1),w={class:"modal-body login"},y={class:"mb-3"},v={class:"mb-3"},k={class:"text-center pt-4"},V={class:"text-center pt-4"};function j(B,t,C,L,o,r){const a=p("RouterLink");return g(),m("div",b,[e("div",x,[e("div",_,[f,e("div",w,[e("form",null,[e("div",y,[i(e("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=s=>o.email=s),class:"block w-full text-xl rounded-xl py-3 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:leading-6 border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500",id:"loginEmail",placeholder:"Электронная почта"},null,512),[[n,o.email]])]),e("div",v,[i(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=s=>o.password=s),class:"block w-full text-xl rounded-xl py-3 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:leading-6 border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500",id:"loginPassword",placeholder:"Пароль"},null,512),[[n,o.password]])]),e("button",{type:"button",class:"w-full bg-gray-800 p-3 border-0 border-blue-500 rounded-xl text-white font-bold hover:bg-blue-700 transition-all duration-300",onClick:t[2]||(t[2]=(...s)=>r.login&&r.login(...s))}," Войти "),e("h6",k,[l(" Забыли пароль? "),d(a,{class:"text-blue-500",to:"/reset"},{default:c(()=>[l(" Восстановить")]),_:1})]),e("h6",V,[l(" Нет аккаунта? "),d(a,{class:"text-blue-500",to:"/registration","data-toggle":"modal","data-target":"#registrationModal","data-dismiss":"modal"},{default:c(()=>[l(" Зарегистрироваться")]),_:1})])])])])])])}const A=u(h,[["render",j]]);export{A as default};
