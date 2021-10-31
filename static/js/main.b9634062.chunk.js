(this["webpackJsonpdata-torre"]=this["webpackJsonpdata-torre"]||[]).push([[0],{217:function(n,e,t){"use strict";t.r(e);var r,a,i,c,o,s,d,l,x,j,b,h,p,u,O,g,f,m,w,y,v,k,S=t(0),C=t.n(S),M=t(77),E=t.n(M),z=(t(92),t(93),t(2)),I=t(3),D=I.a.div(r||(r=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 500px;\n"]))),P=I.a.div(a||(a=Object(z.a)(["\n  display: flex;\n  margin-left: 10px;\n  flex-direction: column;\n  justify-content: center;\n  width: 340px;\n  height: 300px;\n  h1 {\n    font-size: 2.5rem;\n    text-align: left;\n    font-weight: 600;\n  }\n  h3 {\n    font-size: 20px;\n  }\n\n  @media (min-width: 360px) {\n    h1 {\n      font-size: 30px;\n      text-align: left;\n    }\n    h3 {\n      margin-top: 50px;\n      font-size: 20px;\n    }\n  }\n"]))),T=I.a.div(i||(i=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 10px;\n\n  width: auto;\n  height: auto;\n  img {\n    width: 400px;\n    height: 300px;\n  }\n"]))),q=t(1),N=function(){return Object(q.jsxs)(D,{children:[Object(q.jsxs)(P,{children:[Object(q.jsx)("h1",{children:" \xa1Busca talentos seg\xfan la tecnolog\xeda!"}),Object(q.jsx)("h3",{children:"\xa1Podr\xe1s encontrar los candidatos que se ajusten a tu perfil!"})]}),Object(q.jsx)(T,{children:Object(q.jsx)("img",{src:"images/job.png",alt:"work"})})]})},U=t(29),J=t.n(U),L=t(50),R=t(21),A=I.a.div(c||(c=Object(z.a)(["\n  width: 100%;\n  height: auto;\n"]))),B=I.a.div(o||(o=Object(z.a)(["\n  width: 100%;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  h3 {\n    font-size: 20px;\n  }\n"]))),F=I.a.div(s||(s=Object(z.a)(["\n  width: 100%;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),H=Object(I.a)(R.c)(d||(d=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),V=Object(I.a)(R.b)(l||(l=Object(z.a)(["\n  height: 40px;\n  border-radius: 10px 0px 0px 10px;\n  background-color: white;\n  border: none;\n  width: 60%;\n  box-shadow: 3px 5px 17px 4px rgba(0, 0, 0, 0.69);\n"]))),G=I.a.button(x||(x=Object(z.a)(["\n  color: white;\n  display: inline-block;\n  border-radius: 0px 10px 10px 0px;\n  border: none;\n  width: 110px;\n  height: 42px;\n  background: #1b1b1b;\n  box-shadow: 0px 9px 12px 1px rgba(0, 0, 0, 0.64);\n"]))),W=t(53),_=t(10),K=C.a.createContext(),Q=function(n){var e=Object(S.useState)(),t=Object(_.a)(e,2),r=t[0],a=t[1],i=Object(S.useState)(!1),c=Object(_.a)(i,2),o=c[0],s=c[1],d=Object(S.useState)(!1),l=Object(_.a)(d,2),x=l[0],j=l[1],b=Object(S.useState)(""),h=Object(_.a)(b,2),p=h[0],u=h[1],O=Object(S.useState)(!1),g=Object(_.a)(O,2),f=g[0],m=g[1],w=Object(S.useState)(),y=Object(_.a)(w,2),v=y[0],k=y[1];return Object(q.jsxs)(K.Provider,{value:{data:r,setData:a,state:o,setState:s,modal:x,setModal:j,dataModal:p,setDataModal:u,loader:f,setLoader:m,user:v,setUser:k},children:[" ",n.children]})},X=function(){var n=Object(S.useContext)(K),e=n.data,t=n.setData,r=Object(S.useContext)(K),a=r.state,i=r.setState,c=Object(S.useContext)(K),o=(c.loader,c.setLoader),s=function(){var n=Object(L.a)(J.a.mark((function n(e){var t,r,a;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({"skill/role":{text:"javascript",proficiency:"proficient"}})},n.next=3,fetch("https://torre-back-test.herokuapp.com/users/".concat(e),t);case 3:return r=n.sent,n.next=6,r.json();case 6:return a=n.sent,n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(q.jsxs)(A,{children:[Object(q.jsxs)(B,{children:[Object(q.jsx)("h1",{children:a}),Object(q.jsx)("h3",{children:" Puedes encontrar tu mejor Candidato! "})]}),Object(q.jsx)(F,{children:Object(q.jsx)(R.d,{initialValues:{job:""},validationSchema:W.a({job:W.b().required("Required")}),onSubmit:function(){var n=Object(L.a)(J.a.mark((function n(r){return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.t0=t,n.next=4,s(r.job);case 4:return n.t1=n.sent,(0,n.t0)(n.t1),i(!0),n.t2=console,n.next=10,e;case 10:n.t3=n.sent,n.t2.log.call(n.t2,n.t3),o(!1);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),children:Object(q.jsxs)(H,{children:[Object(q.jsx)(V,{name:"job",type:"text"}),Object(q.jsx)(R.a,{name:"firstName"}),Object(q.jsx)(G,{type:"submit",children:"Submit"})]})})})]})},Y=I.a.div(j||(j=Object(z.a)(["\n  color: white;\n  width: 100%;\n  height: 50px;\n  background-color: #191a19;\n  display: flex;\n\n  align-items: center;\n  ul {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  li {\n    margin: 10px 20px;\n  }\n  a {\n    text-decoration: none;\n    color: #ffffff;\n  }\n"]))),Z=function(){return Object(q.jsx)(Y,{children:Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:"https://andresyanquen.github.io/Front-React-App-Torre/",children:"Inicio"})}),Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:"https://torre.co",target:"blank",children:"Torre.co"})})]})})},$=I.a.div(b||(b=Object(z.a)(['\n  font-family: "Roboto";\n  background-color: "#a34a4a";\n']))),nn=t(39),en=t(5),tn=t(86),rn=t.n(tn),an=function(){return Object(q.jsx)(rn.a,{type:"Puff",color:"#1E5128",height:100,width:100,timeout:2e3})},cn=I.a.div(h||(h=Object(z.a)(["\n  width: 100vw;\n  height: 100vh;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),on=I.a.div(p||(p=Object(z.a)(["\n  color: white;\n  position: absolute;\n  width: 500px;\n  -ms-overflow-style: none; /* for Internet Explorer, Edge */\n  scrollbar-width: none;\n  overflow-y: scroll;\n  max-height: 80vh;\n  background-color: #4e9f3d;\n  position: relative;\n  border-radius: 10px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  padding: 20px;\n"]))),sn=I.a.div(u||(u=Object(z.a)(["\n  margin-top: 70px;\n  h5 {\n    margin-top: 5px;\n    color: #191a19;\n  }\n"]))),dn=I.a.div(O||(O=Object(z.a)(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #ebebeb;\n  background-color: #191a19;\n  border-radius: 10px;\n  h3 {\n    margin-top: 10px;\n    font-weight: 500;\n    font-size: 15px;\n  }\n"]))),ln=I.a.div(g||(g=Object(z.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  a {\n    text-decoration: none;\n    color: white;\n  }\n"]))),xn=I.a.button(f||(f=Object(z.a)(["\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  transition: 0.3 ease all;\n  border-radius: 5px;\n  color: #1766dc;\n\n  &:hover {\n    background: #f2f2f2;\n  }\n"]))),jn=I.a.button(m||(m=Object(z.a)(["\n  color: white;\n  border: none;\n  width: auto;\n  height: 40px;\n  background-color: #191a19;\n  margin-top: 5px;\n  border-radius: 10px;\n"]))),bn=function(n){var e=n.children,t=n.state,r=n.setModalState,a=n.data,i={pathname:"/".concat(a.username),data:a};console.log(a.skills);var c=Object(S.useContext)(K);c.user,c.setUser;return Object(q.jsx)(q.Fragment,{children:t&&Object(q.jsx)(cn,{children:Object(q.jsxs)(on,{children:[Object(q.jsxs)(dn,{children:[Object(q.jsx)("h3",{children:a.name}),Object(q.jsx)(xn,{onClick:function(){return r(!t)},children:"x"})]}),Object(q.jsxs)(sn,{children:[Object(q.jsxs)(ln,{children:[Object(q.jsx)("h5",{children:"NAME"}),Object(q.jsx)("h5",{children:" WEIGHT"})," "]}),a.skills.map((function(n){return Object(q.jsxs)(ln,{children:[Object(q.jsx)(nn.b,{to:i,target:"_blank",children:Object(q.jsx)(jn,{children:n.name})}),Object(q.jsxs)("h1",{children:[" ",n.weight]})," "]})}))]}),e]})})})},hn=I.a.div(w||(w=Object(z.a)(["\n  margin-top: 50px;\n  color: white;\n  width: 320px;\n  height: 400px;\n  background-color: #191a19;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  img {\n    margin-top: 30px;\n    width: 150px;\n    height: 150px;\n    border-radius: 10px;\n  }\n  h1 {\n    margin-top: 5px;\n    text-align: center;\n  }\n"]))),pn=I.a.button(y||(y=Object(z.a)(["\n  margin-top: 20px;\n  width: 150px;\n  height: 50px;\n  background-color: #d8e9a8;\n  border: none;\n  border-radius: 10px;\n"]))),un=I.a.div(v||(v=Object(z.a)(["\n  color: white;\n  background-color: #191a19;\n  width: 320px;\n  height: 60px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),On=I.a.div(k||(k=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media (min-width: 768px) {\n    display: grid;\n    flex-direction: row;\n    grid-template-columns: repeat(2, auto);\n    grid-template-rows: auto;\n    grid-gap: 10px;\n  }\n  @media (min-width: 1000px) {\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n    grid-template-rows: auto;\n  }\n\n  @media (min-width: 1400px) {\n    display: grid;\n    grid-template-columns: repeat(4, auto);\n    grid-template-rows: auto;\n  }\n"]))),gn=function(){var n=Object(S.useContext)(K),e=n.data,t=(n.setData,Object(S.useContext)(K)),r=t.state,a=(t.setState,Object(S.useContext)(K)),i=a.modal,c=a.setModal,o=Object(S.useContext)(K),s=o.dataModal,d=o.setDataModal,l=Object(S.useContext)(K),x=l.loader;l.setLoader;return Object(q.jsxs)(On,{children:[x&&Object(q.jsx)(an,{}),r?e.results.map((function(n){return Object(q.jsxs)(hn,{children:[Object(q.jsx)("img",{src:n.picture,onError:function(n){n.target.src="images/userUnkown.png"}}),Object(q.jsxs)("h1",{children:[" ",n.name]}),Object(q.jsx)("br",{}),Object(q.jsx)("h1",{children:n.locationName}),Object(q.jsxs)("h1",{children:[" ",n.professionalHeadline]}),Object(q.jsxs)(pn,{onClick:function(){c(!0),d(n)},children:[" ","Ver habilidades"," "]})]},n.ggId)})):Object(q.jsx)(un,{children:Object(q.jsx)("h1",{children:" Ingresa Un valor para buscar Candidatos"})}),Object(q.jsx)(bn,{state:i,setModalState:c,data:s})]})};var fn=function(){return Object(q.jsx)(nn.a,{children:Object(q.jsx)(Q,{children:Object(q.jsxs)($,{children:[Object(q.jsx)(Z,{}),Object(q.jsx)(en.c,{children:Object(q.jsxs)(en.a,{path:"/",exact:!0,children:[Object(q.jsx)(N,{}),Object(q.jsx)(X,{}),Object(q.jsx)(gn,{})]})})]})})})};E.a.render(Object(q.jsx)(C.a.StrictMode,{children:Object(q.jsx)(fn,{})}),document.getElementById("root"))},92:function(n,e,t){},93:function(n,e,t){}},[[217,1,2]]]);
//# sourceMappingURL=main.b9634062.chunk.js.map