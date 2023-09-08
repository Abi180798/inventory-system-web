"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{122:function(e,t,n){n.d(t,{Z:function(){return A}});var o=n(3366),r=n(7462),i=n(7294),a=n(6010),s=n(7192),f=n(4844),c=n(1796),p=n(8216),l=n(1496),u=n(1657),d=n(8791),m=n(1705),h=n(5861),v=n(8979),y=n(6087);function g(e){return(0,v.Z)("MuiLink",e)}let b=(0,y.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var x=n(5893);let w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],O={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=e=>O[e]||e,D=e=>{let{classes:t,component:n,focusVisible:o,underline:r}=e,i={root:["root",`underline${(0,p.Z)(r)}`,"button"===n&&"button",o&&"focusVisible"]};return(0,s.Z)(i,g,t)},E=(0,l.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`underline${(0,p.Z)(n.underline)}`],"button"===n.component&&t.button]}})(({theme:e,ownerState:t})=>{let n=(0,f.D)(e,`palette.${j(t.color)}`)||t.color;return(0,r.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==n?(0,c.Fq)(n,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${b.focusVisible}`]:{outline:"auto"}})}),k=i.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiLink"}),{className:s,color:f="primary",component:c="a",onBlur:p,onFocus:l,TypographyClasses:h,underline:v="always",variant:y="inherit"}=n,g=(0,o.Z)(n,w),{isFocusVisibleRef:b,onBlur:O,onFocus:j,ref:k}=(0,d.Z)(),[A,L]=i.useState(!1),M=(0,m.Z)(t,k),P=(0,r.Z)({},n,{color:f,component:c,focusVisible:A,underline:v,variant:y}),W=D(P);return(0,x.jsx)(E,(0,r.Z)({className:(0,a.Z)(W.root,s),classes:h,color:f,component:c,onBlur:e=>{O(e),!1===b.current&&L(!1),p&&p(e)},onFocus:e=>{j(e),!0===b.current&&L(!0),l&&l(e)},ref:M,ownerState:P,variant:y},g))});var A=k},4519:function(e,t,n){function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function r(e){var t=o(e).Element;return e instanceof t||e instanceof Element}function i(e){var t=o(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function a(e){if("undefined"==typeof ShadowRoot)return!1;var t=o(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}n.d(t,{fi:function(){return es}});var s,f,c,p,l,u=Math.max,d=Math.min,m=Math.round;function h(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(i(e)&&t){var a=e.offsetHeight,s=e.offsetWidth;s>0&&(o=m(n.width)/s||1),a>0&&(r=m(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function v(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function y(e){return e?(e.nodeName||"").toLowerCase():null}function g(e){return((r(e)?e.ownerDocument:e.document)||window.document).documentElement}function b(e){return h(g(e)).left+v(e).scrollLeft}function x(e){return o(e).getComputedStyle(e)}function w(e){var t=x(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function O(e){var t=h(e),n=e.offsetWidth,o=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-o)&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function j(e){return"html"===y(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||g(e)}function D(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(y(t))>=0?t.ownerDocument.body:i(t)&&w(t)?t:e(j(t))}(e),a=r===(null==(n=e.ownerDocument)?void 0:n.body),s=o(r),f=a?[s].concat(s.visualViewport||[],w(r)?r:[]):r,c=t.concat(f);return a?c:c.concat(D(j(f)))}function E(e){return i(e)&&"fixed"!==x(e).position?e.offsetParent:null}function k(e){for(var t=o(e),n=E(e);n&&["table","td","th"].indexOf(y(n))>=0&&"static"===x(n).position;)n=E(n);return n&&("html"===y(n)||"body"===y(n)&&"static"===x(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&i(e)&&"fixed"===x(e).position)return null;var n=j(e);for(a(n)&&(n=n.host);i(n)&&0>["html","body"].indexOf(y(n));){var o=x(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var A="bottom",L="right",M="left",P="auto",W=["top",A,L,M],B="start",R="viewport",C="popper",H=W.reduce(function(e,t){return e.concat([t+"-"+B,t+"-end"])},[]),S=[].concat(W,[P]).reduce(function(e,t){return e.concat([t,t+"-"+B,t+"-end"])},[]),T=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],Z={placement:"bottom",modifiers:[],strategy:"absolute"};function V(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var N={passive:!0};function q(e){return e.split("-")[0]}function F(e){return e.split("-")[1]}function _(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function z(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?q(r):null,a=r?F(r):null,s=n.x+n.width/2-o.width/2,f=n.y+n.height/2-o.height/2;switch(i){case"top":t={x:s,y:n.y-o.height};break;case A:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:f};break;case M:t={x:n.x-o.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?_(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case B:t[c]=t[c]-(n[p]/2-o[p]/2);break;case"end":t[c]=t[c]+(n[p]/2-o[p]/2)}}return t}var I={top:"auto",right:"auto",bottom:"auto",left:"auto"};function U(e){var t,n,r,i,a,s,f=e.popper,c=e.popperRect,p=e.placement,l=e.variation,u=e.offsets,d=e.position,h=e.gpuAcceleration,v=e.adaptive,y=e.roundOffsets,b=e.isFixed,w=u.x,O=void 0===w?0:w,j=u.y,D=void 0===j?0:j,E="function"==typeof y?y({x:O,y:D}):{x:O,y:D};O=E.x,D=E.y;var P=u.hasOwnProperty("x"),W=u.hasOwnProperty("y"),B=M,R="top",C=window;if(v){var H=k(f),S="clientHeight",T="clientWidth";H===o(f)&&"static"!==x(H=g(f)).position&&"absolute"===d&&(S="scrollHeight",T="scrollWidth"),("top"===p||(p===M||p===L)&&"end"===l)&&(R=A,D-=(b&&H===C&&C.visualViewport?C.visualViewport.height:H[S])-c.height,D*=h?1:-1),(p===M||("top"===p||p===A)&&"end"===l)&&(B=L,O-=(b&&H===C&&C.visualViewport?C.visualViewport.width:H[T])-c.width,O*=h?1:-1)}var Z=Object.assign({position:d},v&&I),V=!0===y?(n=(t={x:O,y:D}).x,r=t.y,{x:m(n*(i=window.devicePixelRatio||1))/i||0,y:m(r*i)/i||0}):{x:O,y:D};return(O=V.x,D=V.y,h)?Object.assign({},Z,((s={})[R]=W?"0":"",s[B]=P?"0":"",s.transform=1>=(C.devicePixelRatio||1)?"translate("+O+"px, "+D+"px)":"translate3d("+O+"px, "+D+"px, 0)",s)):Object.assign({},Z,((a={})[R]=W?D+"px":"",a[B]=P?O+"px":"",a.transform="",a))}var $={left:"right",right:"left",bottom:"top",top:"bottom"};function X(e){return e.replace(/left|right|bottom|top/g,function(e){return $[e]})}var Y={start:"end",end:"start"};function G(e){return e.replace(/start|end/g,function(e){return Y[e]})}function J(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&a(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function K(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Q(e,t){var n,i,a,s,f,c,p,l,d,m,y,w,O,j,D,E,k;return t===R?K((n=o(e),i=g(e),a=n.visualViewport,s=i.clientWidth,f=i.clientHeight,c=0,p=0,a&&(s=a.width,f=a.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=a.offsetLeft,p=a.offsetTop)),{width:s,height:f,x:c+b(e),y:p})):r(t)?((l=h(t)).top=l.top+t.clientTop,l.left=l.left+t.clientLeft,l.bottom=l.top+t.clientHeight,l.right=l.left+t.clientWidth,l.width=t.clientWidth,l.height=t.clientHeight,l.x=l.left,l.y=l.top,l):K((d=g(e),y=g(d),w=v(d),O=null==(m=d.ownerDocument)?void 0:m.body,j=u(y.scrollWidth,y.clientWidth,O?O.scrollWidth:0,O?O.clientWidth:0),D=u(y.scrollHeight,y.clientHeight,O?O.scrollHeight:0,O?O.clientHeight:0),E=-w.scrollLeft+b(d),k=-w.scrollTop,"rtl"===x(O||y).direction&&(E+=u(y.clientWidth,O?O.clientWidth:0)-j),{width:j,height:D,x:E,y:k}))}function ee(){return{top:0,right:0,bottom:0,left:0}}function et(e){return Object.assign({},ee(),e)}function en(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function eo(e,t){void 0===t&&(t={});var n,o,a,s,f,c,p,l=t,m=l.placement,v=void 0===m?e.placement:m,b=l.boundary,w=l.rootBoundary,O=l.elementContext,E=void 0===O?C:O,M=l.altBoundary,P=l.padding,B=void 0===P?0:P,H=et("number"!=typeof B?B:en(B,W)),S=e.rects.popper,T=e.elements[void 0!==M&&M?E===C?"reference":C:E],Z=(n=r(T)?T:T.contextElement||g(e.elements.popper),c=(f=[].concat("clippingParents"===(o=void 0===b?"clippingParents":b)?(a=D(j(n)),r(s=["absolute","fixed"].indexOf(x(n).position)>=0&&i(n)?k(n):n)?a.filter(function(e){return r(e)&&J(e,s)&&"body"!==y(e)}):[]):[].concat(o),[void 0===w?R:w]))[0],(p=f.reduce(function(e,t){var o=Q(n,t);return e.top=u(o.top,e.top),e.right=d(o.right,e.right),e.bottom=d(o.bottom,e.bottom),e.left=u(o.left,e.left),e},Q(n,c))).width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p),V=h(e.elements.reference),N=z({reference:V,element:S,strategy:"absolute",placement:v}),q=K(Object.assign({},S,N)),F=E===C?q:V,_={top:Z.top-F.top+H.top,bottom:F.bottom-Z.bottom+H.bottom,left:Z.left-F.left+H.left,right:F.right-Z.right+H.right},I=e.modifiersData.offset;if(E===C&&I){var U=I[v];Object.keys(_).forEach(function(e){var t=[L,A].indexOf(e)>=0?1:-1,n=["top",A].indexOf(e)>=0?"y":"x";_[e]+=U[n]*t})}return _}function er(e,t,n){return u(e,d(t,n))}function ei(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ea(e){return["top",L,A,M].some(function(t){return e[t]>=0})}var es=(c=void 0===(f=(s={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,f=void 0===s||s,c=o(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach(function(e){e.addEventListener("scroll",n.update,N)}),f&&c.addEventListener("resize",n.update,N),function(){a&&p.forEach(function(e){e.removeEventListener("scroll",n.update,N)}),f&&c.removeEventListener("resize",n.update,N)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=z({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:q(t.placement),variation:F(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===o||o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,U(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===r||r,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,U(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];i(r)&&y(r)&&(Object.assign(r.style,n),Object.keys(o).forEach(function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var o=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});i(o)&&y(o)&&(Object.assign(o.style,a),Object.keys(r).forEach(function(e){o.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=S.reduce(function(e,n){var o,r,a,s,f,c;return e[n]=(o=t.rects,a=[M,"top"].indexOf(r=q(n))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},o,{placement:n})):i)[0],c=s[1],f=f||0,c=(c||0)*a,[M,L].indexOf(r)>=0?{x:c,y:f}:{x:f,y:c}),e},{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=q(v)===v,g=f||(y||!m?[X(v)]:function(e){if(q(e)===P)return[];var t=X(e);return[G(e),t,G(t)]}(v)),b=[v].concat(g).reduce(function(e,n){var o,r,i,a,s,f,u,d,v,y,g,b;return e.concat(q(n)===P?(r=(o={placement:n,boundary:p,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}).placement,i=o.boundary,a=o.rootBoundary,s=o.padding,f=o.flipVariations,d=void 0===(u=o.allowedAutoPlacements)?S:u,0===(g=(y=(v=F(r))?f?H:H.filter(function(e){return F(e)===v}):W).filter(function(e){return d.indexOf(e)>=0})).length&&(g=y),Object.keys(b=g.reduce(function(e,n){return e[n]=eo(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[q(n)],e},{})).sort(function(e,t){return b[e]-b[t]})):n)},[]),x=t.rects.reference,w=t.rects.popper,O=new Map,j=!0,D=b[0],E=0;E<b.length;E++){var k=b[E],R=q(k),C=F(k)===B,T=["top",A].indexOf(R)>=0,Z=T?"width":"height",V=eo(t,{placement:k,boundary:p,rootBoundary:l,altBoundary:u,padding:c}),N=T?C?L:M:C?A:"top";x[Z]>w[Z]&&(N=X(N));var _=X(N),z=[];if(i&&z.push(V[R]<=0),s&&z.push(V[N]<=0,V[_]<=0),z.every(function(e){return e})){D=k,j=!1;break}O.set(k,z)}if(j)for(var I=m?3:1,U=function(e){var t=b.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return D=t,"break"},$=I;$>0&&"break"!==U($);$--);t.placement!==D&&(t.modifiersData[o]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,f=n.altBoundary,c=n.padding,p=n.tether,l=void 0===p||p,m=n.tetherOffset,h=void 0===m?0:m,v=eo(t,{boundary:a,rootBoundary:s,padding:c,altBoundary:f}),y=q(t.placement),g=F(t.placement),b=!g,x=_(y),w="x"===x?"y":"x",j=t.modifiersData.popperOffsets,D=t.rects.reference,E=t.rects.popper,P="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,W="number"==typeof P?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(j){if(void 0===r||r){var H,S="y"===x?"top":M,T="y"===x?A:L,Z="y"===x?"height":"width",V=j[x],N=V+v[S],z=V-v[T],I=l?-E[Z]/2:0,U=g===B?D[Z]:E[Z],$=g===B?-E[Z]:-D[Z],X=t.elements.arrow,Y=l&&X?O(X):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ee(),J=G[S],K=G[T],Q=er(0,D[Z],Y[Z]),et=b?D[Z]/2-I-Q-J-W.mainAxis:U-Q-J-W.mainAxis,en=b?-D[Z]/2+I+Q+K+W.mainAxis:$+Q+K+W.mainAxis,ei=t.elements.arrow&&k(t.elements.arrow),ea=ei?"y"===x?ei.clientTop||0:ei.clientLeft||0:0,es=null!=(H=null==R?void 0:R[x])?H:0,ef=V+et-es-ea,ec=V+en-es,ep=er(l?d(N,ef):N,V,l?u(z,ec):z);j[x]=ep,C[x]=ep-V}if(void 0!==i&&i){var el,eu,ed="x"===x?"top":M,em="x"===x?A:L,eh=j[w],ev="y"===w?"height":"width",ey=eh+v[ed],eg=eh-v[em],eb=-1!==["top",M].indexOf(y),ex=null!=(eu=null==R?void 0:R[w])?eu:0,ew=eb?ey:eh-D[ev]-E[ev]-ex+W.altAxis,eO=eb?eh+D[ev]+E[ev]-ex-W.altAxis:eg,ej=l&&eb?(el=er(ew,eh,eO))>eO?eO:el:er(l?ew:ey,eh,l?eO:eg);j[w]=ej,C[w]=ej-eh}t.modifiersData[o]=C}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,o=e.state,r=e.name,i=e.options,a=o.elements.arrow,s=o.modifiersData.popperOffsets,f=q(o.placement),c=_(f),p=[M,L].indexOf(f)>=0?"height":"width";if(a&&s){var l=et("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},o.rects,{placement:o.placement})):t)?t:en(t,W)),u=O(a),d="y"===c?"top":M,m="y"===c?A:L,h=o.rects.reference[p]+o.rects.reference[c]-s[c]-o.rects.popper[p],v=s[c]-o.rects.reference[c],y=k(a),g=y?"y"===c?y.clientHeight||0:y.clientWidth||0:0,b=l[d],x=g-u[p]-l[m],w=g/2-u[p]/2+(h/2-v/2),j=er(b,w,x);o.modifiersData[r]=((n={})[c]=j,n.centerOffset=j-w,n)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&J(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=eo(t,{elementContext:"reference"}),s=eo(t,{altBoundary:!0}),f=ei(a,o),c=ei(s,r,i),p=ea(f),l=ea(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":l})}}]}).defaultModifiers)?[]:f,l=void 0===(p=s.defaultOptions)?Z:p,function(e,t,n){void 0===n&&(n=l);var a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Z,l),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],p=!1,u={state:s,setOptions:function(n){var o,i,a,p,m,h="function"==typeof n?n(s.options):n;d(),s.options=Object.assign({},l,s.options,h),s.scrollParents={reference:r(e)?D(e):e.contextElement?D(e.contextElement):[],popper:D(t)};var v=(i=Object.keys(o=[].concat(c,s.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return o[e]}),a=new Map,p=new Set,m=[],i.forEach(function(e){a.set(e.name,e)}),i.forEach(function(e){p.has(e.name)||function e(t){p.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!p.has(t)){var n=a.get(t);n&&e(n)}}),m.push(t)}(e)}),T.reduce(function(e,t){return e.concat(m.filter(function(e){return e.phase===t}))},[]));return s.orderedModifiers=v.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,o=e.effect;if("function"==typeof o){var r=o({state:s,name:t,instance:u,options:void 0===n?{}:n});f.push(r||function(){})}}),u.update()},forceUpdate:function(){if(!p){var e,t,n,r,a,f,c,l,d,x,j,D,E=s.elements,A=E.reference,L=E.popper;if(V(A,L)){s.rects={reference:(t=k(L),n="fixed"===s.options.strategy,r=i(t),l=i(t)&&(f=m((a=t.getBoundingClientRect()).width)/t.offsetWidth||1,c=m(a.height)/t.offsetHeight||1,1!==f||1!==c),d=g(t),x=h(A,l),j={scrollLeft:0,scrollTop:0},D={x:0,y:0},(r||!r&&!n)&&(("body"!==y(t)||w(d))&&(j=(e=t)!==o(e)&&i(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:v(e)),i(t)?(D=h(t,!0),D.x+=t.clientLeft,D.y+=t.clientTop):d&&(D.x=b(d))),{x:x.left+j.scrollLeft-D.x,y:x.top+j.scrollTop-D.y,width:x.width,height:x.height}),popper:O(L)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var M=0;M<s.orderedModifiers.length;M++){if(!0===s.reset){s.reset=!1,M=-1;continue}var P=s.orderedModifiers[M],W=P.fn,B=P.options,R=void 0===B?{}:B,C=P.name;"function"==typeof W&&(s=W({state:s,options:R,name:C,instance:u})||s)}}}},update:function(){return a||(a=new Promise(function(e){Promise.resolve().then(function(){a=void 0,e(new Promise(function(e){u.forceUpdate(),e(s)}))})})),a},destroy:function(){d(),p=!0}};if(!V(e,t))return u;function d(){f.forEach(function(e){return e()}),f=[]}return u.setOptions(n).then(function(e){!p&&n.onFirstUpdate&&n.onFirstUpdate(e)}),u})}}]);