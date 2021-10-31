(this["webpackJsonpdata-torre"]=this["webpackJsonpdata-torre"]||[]).push([[0],{217:function(e,n,t){"use strict";t.r(n);var a,r,i,c,o,s,d,l,j,x,b,h,p,u,O,g,f,m,w,y,v,k,C=t(0),S=t.n(C),M=t(77),E=t.n(M),z=(t(92),t(93),t(2)),D=t(3),I=D.a.div(a||(a=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 500px;\n"]))),P=D.a.div(r||(r=Object(z.a)(["\n  display: flex;\n  margin-left: 10px;\n  flex-direction: column;\n  justify-content: center;\n  width: 340px;\n  height: 300px;\n  h1 {\n    font-size: 2.5rem;\n    text-align: left;\n    font-weight: 600;\n  }\n  h3 {\n    font-size: 20px;\n  }\n\n  @media (min-width: 360px) {\n    h1 {\n      font-size: 30px;\n      text-align: left;\n    }\n    h3 {\n      margin-top: 50px;\n      font-size: 20px;\n    }\n  }\n"]))),T=D.a.div(i||(i=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 10px;\n\n  width: auto;\n  height: auto;\n  img {\n    width: 400px;\n    height: 300px;\n  }\n"]))),q=t(1),L=function(){return Object(q.jsxs)(I,{children:[Object(q.jsxs)(P,{children:[Object(q.jsx)("h1",{children:" \xa1Busca talentos seg\xfan la tecnolog\xeda!"}),Object(q.jsx)("h3",{children:"\xa1Podr\xe1s encontrar los candidatos que se ajusten a tu perfil!"})]}),Object(q.jsx)(T,{children:Object(q.jsx)("img",{src:"images/job.png",alt:"work"})})]})},N=t(29),U=t.n(N),F=t(50),J=t(21),R=D.a.div(c||(c=Object(z.a)(["\n  width: 100%;\n  height: auto;\n"]))),A=D.a.div(o||(o=Object(z.a)(["\n  width: 100%;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  h3 {\n    font-size: 20px;\n  }\n"]))),B=D.a.div(s||(s=Object(z.a)(["\n  width: 100%;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),H=Object(D.a)(J.c)(d||(d=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),V=Object(D.a)(J.b)(l||(l=Object(z.a)(["\n  height: 40px;\n  border-radius: 10px 0px 0px 10px;\n  background-color: white;\n  border: none;\n  width: 60%;\n  box-shadow: 3px 5px 17px 4px rgba(0, 0, 0, 0.69);\n"]))),G=D.a.button(j||(j=Object(z.a)(["\n  color: white;\n  display: inline-block;\n  border-radius: 0px 10px 10px 0px;\n  border: none;\n  width: 110px;\n  height: 42px;\n  background: #1b1b1b;\n  box-shadow: 0px 9px 12px 1px rgba(0, 0, 0, 0.64);\n"]))),W=t(53),_=t(10),K=S.a.createContext(),Q=function(e){var n=Object(C.useState)(),t=Object(_.a)(n,2),a=t[0],r=t[1],i=Object(C.useState)(!1),c=Object(_.a)(i,2),o=c[0],s=c[1],d=Object(C.useState)(!1),l=Object(_.a)(d,2),j=l[0],x=l[1],b=Object(C.useState)(""),h=Object(_.a)(b,2),p=h[0],u=h[1],O=Object(C.useState)(!1),g=Object(_.a)(O,2),f=g[0],m=g[1],w=Object(C.useState)(),y=Object(_.a)(w,2),v=y[0],k=y[1];return Object(q.jsxs)(K.Provider,{value:{data:a,setData:r,state:o,setState:s,modal:j,setModal:x,dataModal:p,setDataModal:u,loader:f,setLoader:m,user:v,setUser:k},children:[" ",e.children]})},X=function(){var e=Object(C.useContext)(K),n=e.data,t=e.setData,a=Object(C.useContext)(K),r=a.state,i=a.setState,c=Object(C.useContext)(K),o=(c.loader,c.setLoader),s=function(){var e=Object(F.a)(U.a.mark((function e(n){var t,a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({"skill/role":{text:"javascript",proficiency:"proficient"}})},e.next=3,fetch("https://torre-back-test.herokuapp.com/users/".concat(n),t);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(q.jsxs)(R,{children:[Object(q.jsxs)(A,{children:[Object(q.jsx)("h1",{children:r}),Object(q.jsx)("h3",{children:" Puedes encontrar tu mejor Candidato! "})]}),Object(q.jsx)(B,{children:Object(q.jsx)(J.d,{initialValues:{job:""},validationSchema:W.a({job:W.b().required("Required")}),onSubmit:function(){var e=Object(F.a)(U.a.mark((function e(a){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.t0=t,e.next=4,s(a.job);case 4:return e.t1=e.sent,(0,e.t0)(e.t1),i(!0),e.t2=console,e.next=10,n;case 10:e.t3=e.sent,e.t2.log.call(e.t2,e.t3),o(!1);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:Object(q.jsxs)(H,{children:[Object(q.jsx)(V,{name:"job",type:"text"}),Object(q.jsx)(J.a,{name:"firstName"}),Object(q.jsx)(G,{type:"submit",children:"Submit"})]})})})]})},Y=D.a.div(x||(x=Object(z.a)(["\n  color: white;\n  width: 100%;\n  height: 50px;\n  background-color: #191a19;\n  display: flex;\n\n  align-items: center;\n  ul {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  li {\n    margin: 10px 20px;\n  }\n  a {\n    text-decoration: none;\n    color: #ffffff;\n  }\n"]))),Z=function(){return Object(q.jsx)(Y,{children:Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:"https://andresyanquen.github.io/Front-React-App-Torre/",children:"Inicio"})}),Object(q.jsx)("li",{children:Object(q.jsxs)("a",{href:"https://torre.co",target:"blank",children:[" ","Torre.co"]})})]})})},$=D.a.div(b||(b=Object(z.a)(['\n  font-family: "Roboto";\n  background-color: "#a34a4a";\n']))),ee=t(39),ne=t(5),te=t(86),ae=t.n(te),re=function(){return Object(q.jsx)(ae.a,{type:"Puff",color:"#1E5128",height:100,width:100,timeout:2e3})},ie=D.a.div(h||(h=Object(z.a)(["\n  width: 100vw;\n  height: 100vh;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),ce=D.a.div(p||(p=Object(z.a)(["\n  color: white;\n  position: absolute;\n  width: 500px;\n  -ms-overflow-style: none; /* for Internet Explorer, Edge */\n  scrollbar-width: none;\n  overflow-y: scroll;\n  max-height: 80vh;\n  background-color: #4e9f3d;\n  position: relative;\n  border-radius: 10px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  padding: 20px;\n"]))),oe=D.a.div(u||(u=Object(z.a)(["\n  margin-top: 70px;\n  h5 {\n    margin-top: 5px;\n    color: #191a19;\n  }\n"]))),se=D.a.div(O||(O=Object(z.a)(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #ebebeb;\n  background-color: #191a19;\n  border-radius: 10px;\n  h3 {\n    margin-top: 10px;\n    font-weight: 500;\n    font-size: 15px;\n  }\n"]))),de=D.a.div(g||(g=Object(z.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  a {\n    text-decoration: none;\n    color: white;\n  }\n"]))),le=D.a.button(f||(f=Object(z.a)(["\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  transition: 0.3 ease all;\n  border-radius: 5px;\n  color: #1766dc;\n\n  &:hover {\n    background: #f2f2f2;\n  }\n"]))),je=D.a.button(m||(m=Object(z.a)(["\n  color: white;\n  border: none;\n  width: auto;\n  height: 40px;\n  background-color: #191a19;\n  margin-top: 5px;\n  border-radius: 10px;\n"]))),xe=function(e){var n=e.children,t=e.state,a=e.setModalState,r=e.data,i={pathname:"/".concat(r.username),data:r};console.log(r.skills);var c=Object(C.useContext)(K);c.user,c.setUser;return Object(q.jsx)(q.Fragment,{children:t&&Object(q.jsx)(ie,{children:Object(q.jsxs)(ce,{children:[Object(q.jsxs)(se,{children:[Object(q.jsx)("h3",{children:r.name}),Object(q.jsx)(le,{onClick:function(){return a(!t)},children:"x"})]}),Object(q.jsxs)(oe,{children:[Object(q.jsxs)(de,{children:[Object(q.jsx)("h5",{children:"NAME"}),Object(q.jsx)("h5",{children:" WEIGHT"})," "]}),r.skills.map((function(e){return Object(q.jsxs)(de,{children:[Object(q.jsx)(ee.b,{to:i,target:"_blank",children:Object(q.jsx)(je,{children:e.name})}),Object(q.jsxs)("h1",{children:[" ",e.weight]})," "]})}))]}),n]})})})},be=D.a.div(w||(w=Object(z.a)(["\n  margin-top: 50px;\n  color: white;\n  width: 320px;\n  height: 400px;\n  background-color: #191a19;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  img {\n    margin-top: 30px;\n    width: 150px;\n    height: 150px;\n    border-radius: 10px;\n  }\n  h1 {\n    margin-top: 5px;\n    text-align: center;\n  }\n"]))),he=D.a.button(y||(y=Object(z.a)(["\n  margin-top: 20px;\n  width: 150px;\n  height: 50px;\n  background-color: #d8e9a8;\n  border: none;\n  border-radius: 10px;\n"]))),pe=D.a.div(v||(v=Object(z.a)(["\n  color: white;\n  background-color: #191a19;\n  width: 320px;\n  height: 60px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ue=D.a.div(k||(k=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media (min-width: 768px) {\n    display: grid;\n    flex-direction: row;\n    grid-template-columns: repeat(2, auto);\n    grid-template-rows: auto;\n    grid-gap: 10px;\n  }\n  @media (min-width: 1000px) {\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n    grid-template-rows: auto;\n  }\n\n  @media (min-width: 1400px) {\n    display: grid;\n    grid-template-columns: repeat(4, auto);\n    grid-template-rows: auto;\n  }\n"]))),Oe=function(){var e=Object(C.useContext)(K),n=e.data,t=(e.setData,Object(C.useContext)(K)),a=t.state,r=(t.setState,Object(C.useContext)(K)),i=r.modal,c=r.setModal,o=Object(C.useContext)(K),s=o.dataModal,d=o.setDataModal,l=Object(C.useContext)(K),j=l.loader;l.setLoader;return Object(q.jsxs)(ue,{children:[j&&Object(q.jsx)(re,{}),a?n.results.map((function(e){return Object(q.jsxs)(be,{children:[Object(q.jsx)("img",{src:e.picture,onError:function(e){e.target.src="images/userUnkown.png"}}),Object(q.jsxs)("h1",{children:[" ",e.name]}),Object(q.jsx)("br",{}),Object(q.jsx)("h1",{children:e.locationName}),Object(q.jsxs)("h1",{children:[" ",e.professionalHeadline]}),Object(q.jsxs)(he,{onClick:function(){c(!0),d(e)},children:[" ","Ver habilidades"," "]})]},e.ggId)})):Object(q.jsx)(pe,{children:Object(q.jsx)("h1",{children:" Ingresa Un valor para buscar Candidatos"})}),Object(q.jsx)(xe,{state:i,setModalState:c,data:s})]})},ge=function(e){var n=Object(C.useContext)(K).data,t=Object(C.useContext)(K),a=t.state,r=(t.setState,Object(C.useContext)(K)),i=(r.modal,r.setModal,Object(C.useContext)(K)),c=i.dataModal,o=(i.setDataModal,Object(C.useContext)(K));o.loader,o.setLoader;return console.log(10,n),console.log(11,a),console.log(12,c),Object(q.jsx)(q.Fragment,{})};var fe=function(){return Object(q.jsx)(ee.a,{children:Object(q.jsx)(Q,{children:Object(q.jsxs)($,{children:[Object(q.jsx)(Z,{}),Object(q.jsxs)(ne.c,{children:[Object(q.jsxs)(ne.a,{path:"/",exact:!0,children:[Object(q.jsx)(L,{}),Object(q.jsx)(X,{}),Object(q.jsx)(Oe,{})]}),Object(q.jsxs)(ne.a,{path:"/:username",component:ge,children:[Object(q.jsx)(L,{}),Object(q.jsx)(X,{}),Object(q.jsx)(Oe,{})]})]})]})})})};E.a.render(Object(q.jsx)(S.a.StrictMode,{children:Object(q.jsx)(fe,{})}),document.getElementById("root"))},92:function(e,n,t){},93:function(e,n,t){}},[[217,1,2]]]);
//# sourceMappingURL=main.5fdb5ad6.chunk.js.map