!function(){var t,o,e,r={721:function(t,o,e){"use strict";e(204);var r=e(460),n=e(776),i=e(711),a=e(974),l=e(337),u=(0,n.createContext)({}),c=function(t){var o=t.defaultColor,e=void 0===o?"#ffffff":o,n=t.lightColor,i=void 0===n?"#ffffff":n,a=t.darkColor,l=void 0===a?"#ffffff":a,c=t.children,s=void 0===c?{}:c;return(0,r.tZ)(u.Provider,{value:{defaultColor:e,lightColor:i,darkColor:l}},s)},s=e(947),d=function(){return(d=Object.assign||function(t){for(var o,e=1,r=arguments.length;e<r;e++)for(var n in o=arguments[e])Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);return t}).apply(this,arguments)},f=function(t){var o=t.definition,e=void 0===o?{}:o,n=t.className,i=void 0===n?"":n,a=(0,s.qv)(e).abstract[0],l=a.attributes,u=a.children[0].attributes;return l.class+=" "+i,(0,r.tZ)("svg",d({},l),(0,r.tZ)("path",d({},u)))},p=(0,n.createContext)({}),g=function(t){var o=t.basename,e=void 0===o?"/":o,n=t.children,i=void 0===n?{}:n;return(0,r.tZ)(p.Provider,{value:{basename:e}},i)},m=function(){var t=(0,n.useContext)(u),o=(0,n.useContext)(p).basename,e=(0,a.s0)();return(0,r.tZ)("button",{css:{cursor:"pointer",padding:0,fontFamily:"inherit",fontWeight:"bold",fontSize:"1.8rem",textAlign:"left",border:"none",color:t.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:t.lightColor}},title:"Home",onClick:function(){e(o)}},"Hunmin Park (Avantgarde95)")},h=function(){var t=(0,n.useContext)(u),o=(0,n.useContext)(p).basename,e=(0,n.useState)(""),i=e[0],c=e[1],s=(0,a.s0)();return(0,r.tZ)(n.Fragment,null,(0,r.tZ)("input",{css:{fontFamily:"inherit",fontSize:"1rem",color:t.defaultColor,backgroundColor:"rgba(0, 0, 0, 0)",outline:"none",border:"solid 1px "+t.darkColor,borderRadius:0,"&:hover, &:active, &:focus":{border:"solid 1px "+t.lightColor}},type:"text",placeholder:"Search",onChange:function(t){c(t.target.value)},onKeyPress:function(t){"Enter"===t.key&&s(o+"search/"+i)}}),(0,r.tZ)("button",{css:{cursor:"pointer",fontFamily:"inherit",fontSize:"1rem",border:"none",color:t.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:t.lightColor}},title:"Search "+i,onClick:function(){s(o+"search/"+i)}},(0,r.tZ)(f,{definition:l.wn})))},v=[{name:"Homepage",url:"https://avantgarde95.github.io/"},{name:"Code",url:"https://github.com/Avantgarde95/blog"}],b=function(){var t=(0,n.useContext)(u);return(0,r.tZ)("span",null,v.map((function(o){var e=o.name,n=o.url;return(0,r.tZ)("a",{css:{cursor:"pointer",fontFamily:"inherit",color:t.darkColor,marginRight:"1rem","&:hover, &:active, &:focus":{color:t.lightColor}},title:e,href:n,target:"_blank",rel:"noopener noreferrer"},e)})))},C=function(){var t,o,e=(0,n.useContext)(u),i="@media (min-width: 769px)";return(0,r.tZ)("div",{css:{width:"100%",color:e.defaultColor}},(0,r.tZ)("div",{css:(t={display:"block",marginBottom:"1rem"},t[i]={display:"inline-block",width:"50%"},t)},(0,r.tZ)(m,null)),(0,r.tZ)("div",{css:(o={boxSizing:"border-box",display:"block",marginBottom:"1rem"},o[i]={display:"inline-block",width:"50%",textAlign:"right"},o)},(0,r.tZ)(h,null)),(0,r.tZ)("div",{css:{marginBottom:"1rem"}},(0,r.tZ)(b,null)))},y=e(944),Z=e(137),x=e(172).W,k=(0,r.F4)({"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0}}),S=function(){var t=(0,n.useContext)(u);return(0,r.tZ)("div",{css:{paddingBottom:"1rem",marginBottom:"1rem",borderBottom:"1px solid "+t.darkColor,fontSize:"1.3rem",fontWeight:"bold",color:t.defaultColor}},"Loading... ",(0,r.tZ)(f,{css:{animation:k+" 0.5s infinite"},definition:Z.SZ}))},w=function(t){var o=t.title,e=void 0===o?"":o,i=(0,n.useContext)(u);return(0,r.tZ)("span",{css:{display:"inline-block",wordBreak:"break-all",marginRight:"0.5rem",marginBottom:"0.5rem",color:i.defaultColor,fontSize:"1.8rem",fontWeight:"bold"}},e)},B=function(t){var o=t.date,e=void 0===o?{}:o,i=(0,n.useContext)(u),a=e.getFullYear().toString().padStart(4,"0"),l=(e.getMonth()+1).toString().padStart(2,"0"),c=e.getDate().toString().padStart(2,"0");return(0,r.tZ)("span",{css:{display:"inline-block",fontSize:"1rem",marginBottom:"0.5rem",color:i.defaultColor}},a,".",l,".",c)},O=function(t){var o=t.html,e=void 0===o?"":o,i=(0,n.useContext)(u),a=(0,n.createRef)();return(0,n.useEffect)((function(){var t=a.current;if(null!==t)for(var o=t.querySelectorAll(".PostImage"),e=0;e<o.length;e++)new x(o[e],{sourceAttribute:"src"})})),(0,r.tZ)("div",{css:{paddingBottom:"1rem",marginBottom:"0.5rem",borderBottom:"1px solid "+i.darkColor,color:i.defaultColor,"& h1":{fontSize:"1.5rem"},"& h2":{fontSize:"1.3rem"},"& h3":{fontSize:"1rem"},"& a":{cursor:"pointer",color:i.darkColor,"&:hover, &:active, &:focus":{color:i.lightColor}},"& table":{borderCollapse:"collapse",border:"1px solid "+i.darkColor,"& th, & td":{padding:"0.5rem",border:"1px solid "+i.darkColor}},"& pre":{margin:"1.5rem 0"},"& .PostImage":{cursor:"pointer",maxWidth:"100%",border:"1px solid "+i.darkColor,"&:hover, &:active, &:focus":{border:"1px solid "+i.lightColor}},"& .PostYouTubeOuterContainer":{width:"100%",maxWidth:"560px"},"& .PostYouTubeInnerContainer":{position:"relative",height:0,paddingBottom:"56.25%"},"& .PostYouTube":{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"1px solid "+i.darkColor,"&:hover, &:active, &:focus":{border:"1px solid "+i.lightColor}},"& .hljs":{border:"1px solid "+i.darkColor,background:"none"}},ref:a,dangerouslySetInnerHTML:{__html:e}})},j=function(t){var o=t.category,e=void 0===o?"":o,i=(0,n.useContext)(u),l=(0,n.useContext)(p).basename,c=(0,a.s0)();return(0,r.tZ)("div",{css:{marginBottom:"1rem",color:i.defaultColor}},"Category: ",(0,r.tZ)("button",{css:{cursor:"pointer",padding:"0",fontSize:"1rem",fontFamily:"inherit",border:"none",color:i.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:i.lightColor}},title:e,onClick:function(){c(l+"category/"+e.toLowerCase())}},e))},P=function(t){var o=t.post,e=void 0===o?{}:o,i=(0,n.useContext)(u),a=(0,n.useState)(null),l=a[0],c=a[1];return(0,n.useEffect)((function(){e.load().then((function(t){c(t.html)})).catch((function(){c("Failed to load the post!")}))}),[l,e]),(0,r.tZ)("div",null,(0,r.tZ)("div",{css:{paddingBottom:"0.5rem",borderBottom:"1px solid "+i.darkColor}},(0,r.tZ)(w,{title:e.title}),(0,r.tZ)(B,{date:e.date})),null===l?(0,r.tZ)(S,null):(0,r.tZ)(O,{html:l}),(0,r.tZ)(j,{category:e.category}),(0,r.tZ)(y.qw,{shortname:"Avantgarde95",config:{url:"https://avantgarde95.github.io/blog/"+e.path,identifier:e.title,title:e.title}}))},_=[{path:"christmas2020",title:"Merry Christmas!",date:new Date("2020-12-29"),category:"Computer",load:function(){return e.e(630).then(e.t.bind(e,630,23))}},{path:"custommarkedrenderer",title:"Customize marked.js renderer",date:new Date("2020-10-11"),category:"Computer",load:function(){return e.e(6).then(e.t.bind(e,6,23))}},{path:"myguitars",title:"My guitars",date:new Date("2020-10-11"),category:"Music",load:function(){return e.e(131).then(e.t.bind(e,131,23))}},{path:"markdowntest",title:"Markdown test",date:new Date("2020-10-03"),category:"Computer",load:function(){return e.e(806).then(e.t.bind(e,806,23))}},{path:"welcome",title:"Welcome",date:new Date("2020-09-21"),category:"Misc",load:function(){return e.e(264).then(e.t.bind(e,264,23))}}],z=["Computer","Music","Misc"],T=function(t){var o=t.post,e=void 0===o?{}:o,i=(0,n.useContext)(u),l=(0,n.useContext)(p).basename,c=(0,a.s0)();return(0,r.tZ)("button",{css:{cursor:"pointer",wordBreak:"break-all",textAlign:"left",padding:"0",marginRight:"0.5rem",marginBottom:"0.5rem",fontFamily:"inherit",fontWeight:"bold",fontSize:"1.8rem",border:"none",color:i.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:i.lightColor}},title:e.title,onClick:function(){c(l+"post/"+e.path)}},e.title)},E=function(t){var o=t.date,e=void 0===o?{}:o,i=(0,n.useContext)(u),a=e.getFullYear().toString().padStart(4,"0"),l=(e.getMonth()+1).toString().padStart(2,"0"),c=e.getDate().toString().padStart(2,"0");return(0,r.tZ)("span",{css:{display:"inline-block",marginBottom:"0.5rem",fontSize:"1rem",color:i.defaultColor}},a,".",l,".",c)},F=(0,r.F4)({"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0}}),W=function(){var t=(0,n.useContext)(u);return(0,r.tZ)("div",{css:{fontWeight:"bold",color:t.defaultColor}},"Loading... ",(0,r.tZ)(f,{css:{animation:F+" 0.5s infinite"},definition:Z.SZ}))},M=function(t){var o=t.post,e=void 0===o?{}:o,i=(0,n.useContext)(u),a=(0,n.useState)(null),l=a[0],c=a[1];return(0,n.useEffect)((function(){e.load().then((function(t){var o,e,r;c((e=t.html,(r=document.createElement("div")).innerHTML=e,100,(o=r.innerText).length<=100?o:o.substr(0,100)+"..."))})).catch((function(){c("Failed to load the post!")}))}),[l]),(0,r.tZ)("div",{css:{color:i.defaultColor}},null===l?(0,r.tZ)(W,null):l)},A=function(t){var o=t.category,e=void 0===o?"":o,i=(0,n.useContext)(u),l=(0,n.useContext)(p).basename,c=(0,a.s0)();return(0,r.tZ)("div",{css:{marginTop:"0.5rem",marginBottom:"1rem",color:i.defaultColor}},"Category: ",(0,r.tZ)("button",{css:{cursor:"pointer",padding:"0",fontSize:"1rem",fontFamily:"inherit",border:"none",color:i.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:i.lightColor}},title:e,onClick:function(){c(l+"category/"+e.toLowerCase())}},e))},L=function(t){var o=t.posts,e=void 0===o?[]:o,i=(0,n.useContext)(u);return(0,r.tZ)("div",null,0===e.length?(0,r.tZ)("span",{css:{color:i.defaultColor}},"No posts!"):e.map((function(t){return(0,r.tZ)("div",{css:{paddingBottom:"0.5rem",marginBottom:"1.5rem",borderBottom:"1px solid "+i.darkColor}},(0,r.tZ)(T,{post:t}),(0,r.tZ)(E,{date:t.date}),(0,r.tZ)(M,{post:t}),(0,r.tZ)(A,{category:t.category}))})))},R=function(t){var o=t.category,e=void 0===o?{}:o,i=t.postCount,l=void 0===i?0:i,c=(0,n.useContext)(u),s=(0,n.useContext)(p).basename,d=(0,a.s0)();return(0,r.tZ)("div",null,"- ",(0,r.tZ)("button",{css:{cursor:"pointer",padding:"0",fontSize:"1rem",fontFamily:"inherit",border:"none",color:c.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:c.lightColor}},title:e,onClick:function(){d(s+"category/"+e)}},e)," (",l,")")},N=function(t){var o=t.categories,e=void 0===o?[]:o,i=t.posts,a=void 0===i?[]:i,l=(0,n.useContext)(u);return(0,r.tZ)("div",{css:{display:"inline-block",marginRight:"1rem",marginBottom:"1rem",color:l.defaultColor}},(0,r.tZ)("div",{css:{fontWeight:"bold"}},"Category"),e.map((function(t){return(0,r.tZ)(R,{category:t,postCount:a.filter((function(o){return o.category===t})).length})})))},D=(0,r.F4)({"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0}}),q=function(){var t=(0,n.useContext)(u);return(0,r.tZ)("div",{css:{fontSize:"1.3rem",fontWeight:"bold",color:t.defaultColor}},"Searching... ",(0,r.tZ)(f,{css:{animation:D+" 0.5s infinite"},definition:Z.SZ}))};function Y(t){return t.trim().toLowerCase()}for(var H,I,K,U=function(t){var o=t.posts,e=void 0===o?[]:o,i=(0,a.UO)().query,l=(0,n.useState)(null),u=l[0],c=l[1];return(0,n.useEffect)((function(){Promise.all(e.map((function(t){return t.load()}))).then((function(t){for(var o=[],r=Y(i),n=0;n<t.length;n++)(Y(e[n].title).includes(r)||Y(t[n].html).includes(r))&&o.push(e[n]);c(o)}))}),[u]),null===u?(0,r.tZ)(q,null):(0,r.tZ)(L,{posts:u})},V=function(t){var o=t.post,e=void 0===o?{}:o,i=(0,n.useContext)(u),l=(0,n.useContext)(p).basename,c=(0,a.s0)();return(0,r.tZ)("div",null,"- ",(0,r.tZ)("button",{css:{cursor:"pointer",padding:"0",fontSize:"1rem",fontFamily:"inherit",border:"none",color:i.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:i.lightColor}},title:e.title,onClick:function(){c(l+"post/"+e.path)}},e.title))},$=function(t){var o=t.posts,e=void 0===o?[]:o,i=(0,n.useContext)(u),a=e.slice(0);return a.sort((function(t,o){return-t.date.getTime()+o.date.getTime()})),(0,r.tZ)("div",{css:{display:"inline-block",marginRight:"1rem",marginBottom:"1rem",color:i.defaultColor}},(0,r.tZ)("div",{css:{fontWeight:"bold"}},"Recent posts"),a.slice(0,3).map((function(t){return(0,r.tZ)(V,{post:t})})))},G=(H=function(t,o){return(H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}H(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),J=function(){for(var t=0,o=0,e=arguments.length;o<e;o++)t+=arguments[o].length;var r=Array(t),n=0;for(o=0;o<e;o++)for(var i=arguments[o],a=0,l=i.length;a<l;a++,n++)r[n]=i[a];return r},Q=function(){var t=(0,n.useContext)(u);return(0,r.tZ)("div",{css:{color:t.defaultColor}},"Wrong URL!")},X=function(t){function o(o){var e=o.children,r=void 0===e?{}:e,n=t.call(this,{children:r})||this;return n.state={hasError:!1},n}return G(o,t),o.prototype.componentDidCatch=function(t,o){console.error(null==t?void 0:t.toString()),console.error(null==o?void 0:o.componentStack)},o.prototype.render=function(){return this.props.children},o}(n.Component),tt=function(t){var o=t.basename,e=void 0===o?"/":o,n=t.routes,i=void 0===n?[]:n;return(0,a.V$)(i.map((function(t,o){var e=t.path,n=t.element;return{path:e,element:(0,r.tZ)(X,{key:o},n)}})),e)},ot=function(t){var o=t.posts,e=void 0===o?[]:o,i=t.categories,a=void 0===i?[]:i,l=(0,n.useContext)(p).basename;return(0,r.tZ)(tt,{basename:l,routes:J([{path:"/",element:(0,r.tZ)(L,{posts:e})}],e.map((function(t){return{path:"post/"+t.path,element:(0,r.tZ)(P,{post:t})}})),a.map((function(t){return{path:"category/"+t.toLowerCase(),element:(0,r.tZ)(L,{posts:e.filter((function(o){return o.category===t}))})}})),[{path:"search/:query",element:(0,r.tZ)(U,{posts:e})},{path:"*",element:(0,r.tZ)(Q,null)}])})},et=function(t){var o,e,i=t.children,a=void 0===i?{}:i,l=(0,n.useContext)(u),c="@media (min-width: 769px)";return(0,r.tZ)("div",{css:(o={overflowY:"auto",boxSizing:"border-box",width:"100%",height:"100%"},o[c]={paddingTop:"1.5rem"},o)},(0,r.tZ)("div",{css:(e={boxSizing:"border-box",maxWidth:"769px",margin:"0 auto",padding:"1.5rem"},e[c]={border:"1px solid "+l.darkColor},e)},a))},rt=document.getElementsByClassName("Temporary"),nt=0;nt<rt.length;nt++)null===(K=null===(I=rt[nt])||void 0===I?void 0:I.parentNode)||void 0===K||K.removeChild(rt[nt]);(0,n.render)((0,r.tZ)((function(){return(0,r.tZ)(i.VK,null,(0,r.tZ)(g,{basename:document.getElementsByTagName("base")[0].getAttribute("href")},(0,r.tZ)(c,{defaultColor:"#ffffff",lightColor:"#00f6ff",darkColor:"#00d3dc"},(0,r.tZ)(et,null,(0,r.tZ)(C,null),(0,r.tZ)(N,{categories:z,posts:_}),(0,r.tZ)($,{posts:_}),(0,r.tZ)(ot,{posts:_,categories:z})))))}),null),document.body)},204:function(t,o,e){e(799),String.prototype.startsWith||(String.prototype.startsWith=function(t,o){var e=o>0?0|o:0;return this.substring(e,e+t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,o){return(void 0===o||o>this.length)&&(o=this.length),this.substring(o-t.length,o)===t}),String.prototype.padStart||(String.prototype.padStart=function(t,o){return t>>=0,o=String(void 0!==o?o:" "),this.length>t?String(this):((t-=this.length)>o.length&&(o+=o.repeat(t/o.length)),o.slice(0,t)+String(this))}),String.prototype.includes||(String.prototype.includes=function(t,o){"use strict";if(t instanceof RegExp)throw TypeError("first argument must not be a RegExp");return void 0===o&&(o=0),-1!==this.indexOf(t,o)})}},n={};function i(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}};return r[t](o,o.exports,i),o.exports}i.m=r,i.x=function(){},i.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(o,{a:o}),o},o=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var n=Object.create(null);i.r(n);var a={};t=t||[null,o({}),o([]),o(o)];for(var l=2&r&&e;"object"==typeof l&&!~t.indexOf(l);l=o(l))Object.getOwnPropertyNames(l).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},i.d(n,a),n},i.d=function(t,o){for(var e in o)i.o(o,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},i.f={},i.e=function(t){return Promise.all(Object.keys(i.f).reduce((function(o,e){return i.f[e](t,o),o}),[]))},i.u=function(t){return t+"."+{6:"f3bd9bb14c926b571a42",131:"bdc89a469975a3790c50",264:"bd96dd9bb0a26ceb355d",630:"ad4c2119ab9b9f42f6cf",806:"b9f0c3a824e9e25eca0f"}[t]+".js"},i.miniCssF=function(t){return(179===t?"main":t)+".css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e={},i.l=function(t,o,r){if(e[t])e[t].push(o);else{var n,a;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==t){n=c;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.src=t),e[t]=[o];var s=function(o,r){n.onerror=n.onload=null,clearTimeout(d);var i=e[t];if(delete e[t],n.parentNode&&n.parentNode.removeChild(n),i&&i.forEach((function(t){return t(r)})),o)return o(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=s.bind(null,n.onerror),n.onload=s.bind(null,n.onload),a&&document.head.appendChild(n)}},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.p="dist/",function(){var t={179:0},o=[[721,447]];i.f.j=function(o,e){var r=i.o(t,o)?t[o]:void 0;if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=t[o]=[e,n]}));e.push(r[2]=n);var a=i.p+i.u(o),l=new Error;i.l(a,(function(e){if(i.o(t,o)&&(0!==(r=t[o])&&(t[o]=void 0),r)){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+o+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}}),"chunk-"+o)}};var e=function(){},r=function(r,n){for(var a,l,u=n[0],c=n[1],s=n[2],d=n[3],f=0,p=[];f<u.length;f++)l=u[f],i.o(t,l)&&t[l]&&p.push(t[l][0]),t[l]=0;for(a in c)i.o(c,a)&&(i.m[a]=c[a]);for(s&&s(i),r&&r(n);p.length;)p.shift()();return d&&o.push.apply(o,d),e()},n=self.webpackChunk=self.webpackChunk||[];function a(){for(var e,r=0;r<o.length;r++){for(var n=o[r],a=!0,l=1;l<n.length;l++){var u=n[l];0!==t[u]&&(a=!1)}a&&(o.splice(r--,1),e=i(i.s=n[0]))}return 0===o.length&&(i.x(),i.x=function(){}),e}n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n));var l=i.x;i.x=function(){return i.x=l||function(){},(e=a)()}}(),i.x()}();