import{_ as l,c as n,a as e,t as o,o as i}from"./index-CNu2woMZ.js";const c={data(){return{news:null,id:null}},created(){console.log(this.$route.params.id),this.id=this.$route.params.id,fetch("http://127.0.0.1:3000/news/"+this.id).then(t=>t.json()).then(t=>{this.news=t,console.log(this.news)})}},r={key:0},_=["src"],h={key:1},a=e("h1",null,"News not found",-1),d=[a];function u(t,p,w,m,s,f){return i(),n("div",null,[s.news?(i(),n("div",r,[e("h1",null,o(s.news.title),1),e("div",null,[e("img",{src:s.news.img,alt:"img"},null,8,_)]),e("p",null,o(s.news.anotation),1),e("p",null,o(s.news.text),1)])):(i(),n("div",h,d))])}const k=l(c,[["render",u]]);export{k as default};