(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),c=t.n(r),s=(t(9),t(3));var o=function(e){return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns"},l.a.createElement("img",{className:"profile-pic",src:"/personal-website/images/profilepic.jpg",alt:"All the rights, honours and privileges thereunto appertaining..."})),l.a.createElement("div",{className:"nine columns"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.bio),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address.street,l.a.createElement("br",null),e.city,", ",e.address.zip),l.a.createElement("br",null),l.a.createElement("span",null,e.phone),l.a.createElement("br",null),l.a.createElement("span",null,e.email)))))))};var i=function(e){return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home",onClick:function(){console.log("on click!!!")}},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"smoothscroll",href:"/personal-website/CV.pdf"},"Resume")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e.name),l.a.createElement("h3",null,"I'm an ",e.city," based",l.a.createElement("span",null," ",e.occupation),". \xa0",e.description),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.social.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},l.a.createElement("i",{className:e.className})))}))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))};var m=function(e){return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.social.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2020 Mustafa Sencer \xd6zcan"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))};var u=function(){var e=Object(n.useState)({name:"",bio:"string",email:"string",city:"string",phone:"string",description:"",occupation:"",social:[],address:{street:"",state:"",zip:0}}),a=Object(s.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){fetch("/personal-website/resumeData.json",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var a=e.main;r(a)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(i,t),l.a.createElement(o,t),l.a.createElement(m,t))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.bf187a59.chunk.js.map