(this.webpackJsonpmoodwash=this.webpackJsonpmoodwash||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c(0),a=c.n(i),s=c(17),r=c.n(s),j=(c(66),c(30)),o=c(23),d=c(102),l=c(103),b=c(101),h=c(100),O=c(60),x=(c(67),[{id:0,title:"White & Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),u=c(40),p=c(7),m=c(41);c(68);function f(){var e=Object(u.a)(["\n  font-size: 30px;\n"]);return f=function(){return e},e}function g(){var e=Object(u.a)(["\n  padding: 20px;\n"]);return g=function(){return e},e}var v=m.a.div(g()),k=m.a.h4(f());function N(e){return Object(n.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock[0]," "]})}var I=function(e){var t=Object(i.useState)(!0),c=Object(o.a)(t,2),a=c[0],s=c[1];Object(i.useEffect)((function(){setTimeout((function(){s(!1)}),2e3)}),[a]);var r=Object(p.g)().id,d=Object(p.f)(),l=Object(i.useState)(""),b=Object(o.a)(l,2),h=(b[0],b[1]),O=e.product.find((function(e){return e.id==r}));return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(v,{children:Object(n.jsx)(k,{children:"\uc0c1\uc138\ud398\uc774\uc9c0~"})}),Object(n.jsx)("input",{onChange:function(e){h(e.target.value)}}),1==a?Object(n.jsx)("div",{className:"my-alert",children:Object(n.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%"})}),Object(n.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(n.jsx)("h4",{className:"pt-5",children:O.title}),Object(n.jsx)("p",{className:"red",children:O.content}),Object(n.jsxs)("p",{children:[O.price,"\uc6d0"]}),Object(n.jsx)(N,{stock:e.stock}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=Object(j.a)(e.stock);t[0]-=1,e.setStock(t)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){d.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},S=c(57),w=c.n(S),B=c(22);function C(e){return Object(n.jsxs)("div",{className:"col-md-4",children:[Object(n.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(n.jsxs)("h4",{children:[" ",e.product.title," "]}),Object(n.jsxs)("p",{children:[" ",e.product.content," "]}),Object(n.jsxs)("p",{children:[" ",e.product.price," "]})]})}var y=function(){var e=Object(i.useState)(x),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)([10,11,12]),r=Object(o.a)(s,2),u=r[0],m=r[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)(d.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(d.a.Brand,{href:"#home",children:"MoodwasH"}),Object(n.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(l.a,{className:"ml-auto",children:[Object(n.jsx)(l.a.Link,{as:B.b,to:"/",children:"Home"}),Object(n.jsx)(l.a.Link,{as:B.b,to:"/detail",children:"Detail"}),Object(n.jsxs)(b.a,{title:"W.I.P",id:"basic-nav-dropdown",children:[Object(n.jsx)(b.a.Item,{href:"#action/3.1",children:"2021"}),Object(n.jsx)(b.a.Item,{href:"#action/3.2",children:"2020"}),Object(n.jsx)(b.a.Item,{href:"#action/3.3",children:"2019"}),Object(n.jsx)(b.a.Item,{href:"#action/3.3",children:"2018"}),Object(n.jsx)(b.a.Item,{href:"#action/3.3",children:"2017"}),Object(n.jsx)(b.a.Item,{href:"#action/3.3",children:"2016"}),Object(n.jsx)(b.a.Item,{href:"#action/3.3",children:"2015"}),Object(n.jsx)(b.a.Divider,{}),Object(n.jsx)(b.a.Item,{href:"#action/3.4",children:"See all"})]}),Object(n.jsxs)(b.a,{title:"STUDY",id:"basic-nav-dropdown",children:[Object(n.jsx)(b.a.Item,{href:"#action/3.1",children:"Action"}),Object(n.jsx)(b.a.Item,{href:"#action/3.2",children:"Another action"}),Object(n.jsx)(b.a.Item,{href:"#action/3.3",children:"Something"}),Object(n.jsx)(b.a.Divider,{}),Object(n.jsx)(b.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(n.jsxs)(p.c,{children:[Object(n.jsxs)(p.a,{exact:!0,path:"/",children:[Object(n.jsxs)(h.a,{className:"background",children:[Object(n.jsx)("h1",{children:"Let's MoodwasH!"}),Object(n.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(n.jsx)("p",{children:Object(n.jsx)(O.a,{variant:"primary",children:"Learn more"})})]}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(n.jsx)(C,{product:e,i:t},t)}))}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){w.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){a([].concat(Object(j.a)(c),Object(j.a)(e.data)))})).catch((function(){console.log("fail")}))},children:"more"})]})]}),Object(n.jsx)(p.a,{path:"/detail/:id",children:Object(n.jsx)(I,{product:c,stock:u,setStock:m})}),Object(n.jsx)(p.a,{path:"/:id",children:Object(n.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc785\ub825\ud558\uc9c0 \ub9c8!"})})]})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,104)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(B.a,{children:Object(n.jsx)(y,{})})}),document.getElementById("root")),L()}},[[94,1,2]]]);
//# sourceMappingURL=main.6c738c51.chunk.js.map