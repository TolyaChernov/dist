import{r as v,D as l,W as q,X as U,d as X,Y,j as z}from"./index-DtuzV0by.js";function c(t){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(t)}function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?A(Object(n),!0).forEach(function(r){F(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function F(t,e,n){return e=G(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function G(t){var e=J(t,"string");return c(e)=="symbol"?e:String(e)}function J(t,e){if(c(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(c(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Q(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;U()?X(t):e?t():Y(t)}var V=0;function Z(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=v(!1),r=v(t),i=v(null),s=l.isClient()?window.document:void 0,a=e.document,o=a===void 0?s:a,u=e.immediate,d=u===void 0?!0:u,p=e.manual,T=p===void 0?!1:p,g=e.name,y=g===void 0?"style_".concat(++V):g,h=e.id,O=h===void 0?void 0:h,S=e.media,I=S===void 0?void 0:S,w=e.nonce,K=w===void 0?void 0:w,_=e.props,B=_===void 0?{}:_,j=function(){},P=function(M){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(o){var m=D(D({},B),R),H=m.name||y,x=m.id||O,N=m.nonce||K;i.value=o.querySelector('style[data-primevue-style-id="'.concat(H,'"]'))||o.getElementById(x)||o.createElement("style"),i.value.isConnected||(r.value=M||t,l.setAttributes(i.value,{type:"text/css",id:x,media:I,nonce:N}),o.head.appendChild(i.value),l.setAttribute(i.value,"data-primevue-style-id",y),l.setAttributes(i.value,m)),!n.value&&(j=z(r,function(W){i.value.textContent=W},{immediate:!0}),n.value=!0)}},L=function(){!o||!n.value||(j(),l.isExist(i.value)&&o.head.removeChild(i.value),n.value=!1)};return d&&!T&&Q(P),{id:O,name:y,css:r,unload:L,load:P,isLoaded:q(n)}}function f(t){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(t)}function k(t,e){return re(t)||ne(t,e)||te(t,e)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(t,e){if(t){if(typeof t=="string")return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(t,e)}}function E(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ne(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,a,o=[],u=!0,d=!1;try{if(s=(n=n.call(t)).next,e!==0)for(;!(u=(r=s.call(n)).done)&&(o.push(r.value),o.length!==e);u=!0);}catch(p){d=!0,i=p}finally{try{if(!u&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(d)throw i}}return o}}function re(t){if(Array.isArray(t))return t}function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?C(Object(n),!0).forEach(function(r){ie(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ie(t,e,n){return e=oe(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oe(t){var e=ae(t,"string");return f(e)=="symbol"?e:String(e)}function ae(t,e){if(f(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(f(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ue=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,se={},le={},fe={name:"base",css:ue,classes:se,inlineStyles:le,loadStyle:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.css?Z(this.css,b({name:this.name},e)):{}},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=Object.entries(n).reduce(function(i,s){var a=k(s,2),o=a[0],u=a[1];return i.push("".concat(o,'="').concat(u,'"'))&&i},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(r,">").concat(this.css).concat(e,"</style>")}return""},extend:function(e){return b(b({},this),{},{css:void 0},e)}};export{fe as B,Z as u};
