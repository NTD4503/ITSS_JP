(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[44],{901:function(e,a,s){"use strict";s.r(a);var t=s(953),i=s(488),r=s(540),n=s(502),l=s(632),c=s(140),o=s(283),d=s(74),m=s(47),b=s(182),j=s(673),h=s(1),p=s(11),u=s(42),x=s(674),g=s(2);const O=Object(c.a)(o.a)((()=>({display:"flex",alignItems:"center"}))),w=Object(c.a)(O)((()=>({justifyContent:"center"}))),y=Object(c.a)(o.a)((()=>({height:"100%",padding:"32px",position:"relative",background:"rgba(0, 0, 0, 0.01)"}))),v=Object(c.a)(w)((()=>({background:"#1A2038",minHeight:"100% !important","& .card":{maxWidth:800,minHeight:400,margin:"1rem",display:"flex",borderRadius:12,alignItems:"center"}}))),f={email:"jason@ui-lib.com",password:"dummyPass",remember:!0},C=x.a().shape({password:x.b().min(6,"Password must be 6 character length").required("Password is required!"),email:x.b().email("Invalid Email address").required("Email is required!")});a.default=()=>{const e=Object(d.a)(),a=Object(p.o)(),[s,c]=Object(h.useState)(!1),{login:o}=Object(b.a)();return Object(g.jsx)(v,{children:Object(g.jsx)(i.a,{className:"card",children:Object(g.jsxs)(r.a,{container:!0,children:[Object(g.jsx)(r.a,{item:!0,sm:6,xs:12,children:Object(g.jsx)(w,{p:4,height:"100%",sx:{minWidth:320},children:Object(g.jsx)("img",{src:"/assets/images/illustrations/dreamer.svg",width:"100%",alt:""})})}),Object(g.jsx)(r.a,{item:!0,sm:6,xs:12,children:Object(g.jsx)(y,{children:Object(g.jsx)(j.a,{onSubmit:async e=>{c(!0);try{await o(e.email,e.password),a("/")}catch(s){c(!1)}},initialValues:f,validationSchema:C,children:a=>{let{values:i,errors:r,touched:c,handleChange:o,handleBlur:d,handleSubmit:b}=a;return Object(g.jsxs)("form",{onSubmit:b,children:[Object(g.jsx)(n.a,{fullWidth:!0,size:"small",type:"email",name:"email",label:"Email",variant:"outlined",onBlur:d,value:i.email,onChange:o,helperText:c.email&&r.email,error:Boolean(r.email&&c.email),sx:{mb:3}}),Object(g.jsx)(n.a,{fullWidth:!0,size:"small",name:"password",type:"password",label:"Password",variant:"outlined",onBlur:d,value:i.password,onChange:o,helperText:c.password&&r.password,error:Boolean(r.password&&c.password),sx:{mb:1.5}}),Object(g.jsxs)(O,{justifyContent:"space-between",children:[Object(g.jsxs)(O,{gap:1,children:[Object(g.jsx)(l.a,{size:"small",name:"remember",onChange:o,checked:i.remember,sx:{padding:0}}),Object(g.jsx)(m.c,{children:"Remember Me"})]}),Object(g.jsx)(u.c,{to:"/session/forgot-password",style:{color:e.palette.primary.main},children:"Forgot password?"})]}),Object(g.jsx)(t.a,{type:"submit",color:"primary",loading:s,variant:"contained",sx:{my:2},children:"Login"}),Object(g.jsxs)(m.c,{children:["Don't have an account?",Object(g.jsx)(u.c,{to:"/session/signup",style:{color:e.palette.primary.main,marginLeft:5},children:"Register"})]})]})}})})})]})})})}}}]);