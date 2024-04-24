(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{46901:function(e,t,o){"use strict";o.d(t,{Z:function(){return I}});var r=o(63366),n=o(87462),a=o(67294),l=o(63961),s=o(94780),i=o(41796),c=o(90948),d=o(71657),u=o(98216),p=o(90629),m=o(1588),h=o(34867);function v(e){return(0,h.Z)("MuiAlert",e)}let x=(0,m.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var g=o(93946),Z=o(82066),f=o(85893),j=(0,Z.Z)((0,f.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),b=(0,Z.Z)((0,f.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),C=(0,Z.Z)((0,f.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),w=(0,Z.Z)((0,f.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),y=o(34484);let z=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],k=e=>{let{variant:t,color:o,severity:r,classes:n}=e,a={root:["root",`${t}${(0,u.Z)(o||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,s.Z)(a,v,n)},M=(0,c.ZP)(p.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,u.Z)(o.color||o.severity)}`]]}})(({theme:e,ownerState:t})=>{let o="light"===e.palette.mode?i._j:i.$n,r="light"===e.palette.mode?i.$n:i._j,a=t.color||t.severity;return(0,n.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:o(e.palette[a].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${a}StandardBg`]:r(e.palette[a].light,.9),[`& .${x.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:o(e.palette[a].light,.6),border:`1px solid ${(e.vars||e).palette[a].light}`,[`& .${x.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&"filled"===t.variant&&(0,n.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${a}FilledColor`],backgroundColor:e.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[a].dark:e.palette[a].main,color:e.palette.getContrastText(e.palette[a].main)}))}),S=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),A=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),$=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),P={success:(0,f.jsx)(j,{fontSize:"inherit"}),warning:(0,f.jsx)(b,{fontSize:"inherit"}),error:(0,f.jsx)(C,{fontSize:"inherit"}),info:(0,f.jsx)(w,{fontSize:"inherit"})};var I=a.forwardRef(function(e,t){var o,a,s,i,c,u;let p=(0,d.Z)({props:e,name:"MuiAlert"}),{action:m,children:h,className:v,closeText:x="Close",color:Z,components:j={},componentsProps:b={},icon:C,iconMapping:w=P,onClose:I,role:B="alert",severity:N="success",slotProps:R={},slots:L={},variant:_="standard"}=p,H=(0,r.Z)(p,z),W=(0,n.Z)({},p,{color:Z,severity:N,variant:_}),E=k(W),F=null!=(o=null!=(a=L.closeButton)?a:j.CloseButton)?o:g.Z,O=null!=(s=null!=(i=L.closeIcon)?i:j.CloseIcon)?s:y.Z,V=null!=(c=R.closeButton)?c:b.closeButton,D=null!=(u=R.closeIcon)?u:b.closeIcon;return(0,f.jsxs)(M,(0,n.Z)({role:B,elevation:0,ownerState:W,className:(0,l.Z)(E.root,v),ref:t},H,{children:[!1!==C?(0,f.jsx)(S,{ownerState:W,className:E.icon,children:C||w[N]||P[N]}):null,(0,f.jsx)(A,{ownerState:W,className:E.message,children:h}),null!=m?(0,f.jsx)($,{ownerState:W,className:E.action,children:m}):null,null==m&&I?(0,f.jsx)($,{ownerState:W,className:E.action,children:(0,f.jsx)(F,(0,n.Z)({size:"small","aria-label":x,title:x,color:"inherit",onClick:I},V,{children:(0,f.jsx)(O,(0,n.Z)({fontSize:"small"},D))}))}):null]}))})},69368:function(e,t,o){"use strict";o.d(t,{Z:function(){return S}});var r=o(63366),n=o(87462),a=o(67294),l=o(63961),s=o(94780),i=o(41796),c=o(21964),d=o(82066),u=o(85893),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),v=o(98216),x=o(71657),g=o(90948),Z=o(1588),f=o(34867);function j(e){return(0,f.Z)("MuiCheckbox",e)}let b=(0,Z.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),C=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],w=e=>{let{classes:t,indeterminate:o,color:r,size:a}=e,l={root:["root",o&&"indeterminate",`color${(0,v.Z)(r)}`,`size${(0,v.Z)(a)}`]},i=(0,s.Z)(l,j,t);return(0,n.Z)({},t,i)},y=(0,g.ZP)(c.Z,{shouldForwardProp:e=>(0,g.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,t[`size${(0,v.Z)(o.size)}`],"default"!==o.color&&t[`color${(0,v.Z)(o.color)}`]]}})(({theme:e,ownerState:t})=>(0,n.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,i.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${b.checked}, &.${b.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),z=(0,u.jsx)(m,{}),k=(0,u.jsx)(p,{}),M=(0,u.jsx)(h,{});var S=a.forwardRef(function(e,t){var o,s;let i=(0,x.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=z,color:d="primary",icon:p=k,indeterminate:m=!1,indeterminateIcon:h=M,inputProps:v,size:g="medium",className:Z}=i,f=(0,r.Z)(i,C),j=m?h:p,b=m?h:c,S=(0,n.Z)({},i,{color:d,indeterminate:m,size:g}),A=w(S);return(0,u.jsx)(y,(0,n.Z)({type:"checkbox",inputProps:(0,n.Z)({"data-indeterminate":m},v),icon:a.cloneElement(j,{fontSize:null!=(o=j.props.fontSize)?o:g}),checkedIcon:a.cloneElement(b,{fontSize:null!=(s=b.props.fontSize)?s:g}),ownerState:S,ref:t,className:(0,l.Z)(A.root,Z)},f,{classes:A}))})},73700:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return o(41520)}])},74258:function(e,t,o){"use strict";var r=o(85893),n=o(90948),a=o(87357);let l=(0,n.ZP)(a.Z)(e=>{let{theme:t}=e;return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:t.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}});t.Z=e=>{let{children:t}=e;return(0,r.jsx)(l,{className:"layout-wrapper",children:(0,r.jsx)(a.Z,{className:"app-content",sx:{minHeight:"100vh",overflowX:"hidden",position:"relative"},children:t})})}},41520:function(e,t,o){"use strict";o.r(t);var r=o(85893),n=o(67294),a=o(25675),l=o.n(a),s=o(11163),i=o(82175),c=o(16310),d=o(87357),u=o(69417),p=o(69368),m=o(50135),h=o(47312),v=o(15861),x=o(93946),g=o(44267),Z=o(94054),f=o(57709),j=o(90948),b=o(2734),C=o(66242),w=o(87109),y=o(58843),z=o(95898),k=o(42218),M=o(49087),S=o(74258),A=o(38952),$=o(41882),P=o(46901);let I=(0,j.ZP)(C.Z)(e=>{let{theme:t}=e;return{[t.breakpoints.up("sm")]:{width:"28rem"}}}),B=(0,j.ZP)(y.Z)(e=>{let{theme:t}=e;return{"& .MuiFormControlLabel-label":{fontSize:"0.875rem",color:t.palette.text.secondary}}}),N=()=>{var e,t,o,a,j,C,y;let[S,N]=(0,$.YA)(),R=(null==N?void 0:null===(e=N.data)||void 0===e?void 0:e.msg)==="Gagal",[L,_]=(0,n.useState)(!1),H=(0,i.TA)({initialValues:{username:"",password:""},validationSchema:c.Ry({username:c.Z_().max(50,"Must be 50 characters or less").required("Required"),password:c.Z_().min(3,"Must be 3 characters or more").required("Required")}),onSubmit:e=>{S(e)}}),W=(0,b.Z)(),E=(0,s.useRouter)();return W.palette.primary.main,(0,n.useEffect)(()=>{!R&&(null==N?void 0:N.data)&&E.push("/app/dashboard")},[null==N?void 0:N.data]),(0,r.jsxs)(d.Z,{className:"content-center",children:[(0,r.jsx)(I,{sx:{zIndex:1},children:(0,r.jsxs)(g.Z,{sx:{padding:e=>"".concat(e.spacing(12,9,7)," !important")},children:[(0,r.jsxs)(d.Z,{sx:{mb:8,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},onClick:()=>E.push("/"),children:[(0,r.jsx)(l(),{alt:"sikuram",src:"/images/logos/logo-unram.png",width:50,height:50}),(0,r.jsx)(v.Z,{variant:"h6",sx:{ml:3,lineHeight:1,fontWeight:600,textTransform:"uppercase",fontSize:"1.5rem !important"},children:M.Z.templateName})]}),(0,r.jsxs)(d.Z,{sx:{mb:6},children:[(0,r.jsxs)(v.Z,{variant:"h5",sx:{fontWeight:600,marginBottom:1.5},children:["Welcome to ",M.Z.templateName,"! \uD83D\uDC4B\uD83C\uDFFB"]}),(0,r.jsx)(v.Z,{variant:"body2",children:"Please sign-in to your account and start the adventure"})]}),(0,r.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:H.handleSubmit,children:[R&&(0,r.jsx)(P.Z,{severity:"error",children:"Username or password incorrect!"}),(0,r.jsxs)(Z.Z,{fullWidth:!0,sx:{marginBottom:4,marginTop:R?4:0},children:[(0,r.jsx)(m.Z,{autoFocus:!0,id:"username",name:"username",label:"Username",onChange:H.handleChange,onBlur:H.handleBlur,value:null===(t=H.values)||void 0===t?void 0:t.username,autoComplete:"on"}),(null===(o=H.errors)||void 0===o?void 0:o.username)&&(null===(a=H.touched)||void 0===a?void 0:a.username)&&(0,r.jsx)(d.Z,{sx:{color:"red"},children:(0,r.jsx)("small",{children:H.errors.username})})]}),(0,r.jsxs)(Z.Z,{fullWidth:!0,children:[(0,r.jsx)(h.Z,{htmlFor:"auth-login-password",children:"Password"}),(0,r.jsx)(f.Z,{id:"auth-login-password",name:"password",label:"Password",onChange:e=>{H.setValues({...H.values,password:e.target.value})},onBlur:H.handleBlur,value:null===(j=H.values)||void 0===j?void 0:j.password,type:L?"text":"password",endAdornment:(0,r.jsx)(w.Z,{position:"end",children:(0,r.jsx)(x.Z,{edge:"end",onClick:()=>{_(!L)},onMouseDown:e=>{e.preventDefault()},"aria-label":"toggle password visibility",children:L?(0,r.jsx)(z.Z,{}):(0,r.jsx)(k.Z,{})})})}),(null===(C=H.errors)||void 0===C?void 0:C.password)&&(null===(y=H.touched)||void 0===y?void 0:y.password)&&(0,r.jsx)(d.Z,{sx:{color:"red"},children:(0,r.jsx)("small",{children:H.errors.password})})]}),(0,r.jsx)(d.Z,{sx:{mb:4,display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"},children:(0,r.jsx)(B,{control:(0,r.jsx)(p.Z,{}),label:"Remember Me"})}),(0,r.jsx)(u.Z,{fullWidth:!0,size:"large",variant:"contained",sx:{marginBottom:7},type:"submit",children:"Login"})]})]})}),(0,r.jsx)(A.Z,{})]})};N.getLayout=e=>(0,r.jsx)(S.Z,{children:e}),t.default=N},38952:function(e,t,o){"use strict";var r=o(85893),n=o(67294),a=o(98396),l=o(90948),s=o(2734);let i=(0,l.ZP)("img")(()=>({bottom:0,zIndex:-1,width:"100%",position:"absolute"})),c=(0,l.ZP)("img")(()=>({left:0,bottom:0,position:"absolute"})),d=(0,l.ZP)("img")(()=>({right:0,bottom:0,position:"absolute"}));t.Z=e=>{let{image1:t,image2:o}=e,l=(0,s.Z)();return(0,a.Z)(l.breakpoints.down("md"))?null:(0,r.jsxs)(n.Fragment,{children:[t||(0,r.jsx)(c,{alt:"tree",src:"/images/pages/auth-v1-tree.png"}),(0,r.jsx)(i,{alt:"mask",src:"/images/pages/auth-v1-mask-".concat(l.palette.mode,".png")}),o||(0,r.jsx)(d,{alt:"tree-2",src:"/images/pages/auth-v1-tree-2.png"})]})}}},function(e){e.O(0,[135,4507,8493,9774,2888,179],function(){return e(e.s=73700)}),_N_E=e.O()}]);