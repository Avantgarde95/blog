!function(t){function e(e){for(var r,a,c=e[0],l=e[1],u=e[2],b=0,d=[];b<c.length;b++)a=c[b],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(s&&s(e);d.length;)d.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,c=1;c<o.length;c++){var l=o[c];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var r={},n={0:0},i=[];function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,r){o=n[t]=[e,r]}));e.push(o[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(t){return a.p+""+({}[t]||t)+"."+{2:"7645f483a28ed29011ab",3:"b56d3e2c729f23b459a3",4:"6696880398f3d2fd26af",5:"8e6fa4fe4f5570a238e3",6:"24fc05cf70a1303501c0"}[t]+".js"}(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,o[1](l)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="dist/",a.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;i.push([25,1]),o()}({16:function(t,e,o){o(17),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){var o=e>0?0|e:0;return this.substring(o,o+t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){return(void 0===e||e>this.length)&&(e=this.length),this.substring(e-t.length,e)===t}),String.prototype.padStart||(String.prototype.padStart=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),e.slice(0,t)+String(this))}),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";if(t instanceof RegExp)throw TypeError("first argument must not be a RegExp");return void 0===e&&(e=0),-1!==this.indexOf(t,e)})},25:function(t,e,o){"use strict";o.r(e);o(16);var r=o(1),n=o(0),i=o(2),a=o(4),c=o(14),l=Object(n.createContext)({}),u=function(t){var e=t.defaultColor,o=void 0===e?"#ffffff":e,n=t.lightColor,i=void 0===n?"#ffffff":n,a=t.darkColor,c=void 0===a?"#ffffff":a,u=t.children,s=void 0===u?{}:u;return Object(r.b)(l.Provider,{value:{defaultColor:o,lightColor:i,darkColor:c,textStyle:Object(r.a)({color:o}),boxStyle:Object(r.a)({backgroundColor:"rgba(0, 0, 0, 0)",border:"solid 1px "+o,borderRadius:0}),highlightStyle:Object(r.a)({"&:hover, &:active, &:focus":{color:i,border:"solid 1px "+i}})}},s)},s=o(13),b=function(){return(b=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},d=function(t){var e=t.definition,o=void 0===e?{}:e,n=t.className,i=void 0===n?"":n,a=Object(s.a)(o).abstract[0],c=a.attributes,l=a.children[0].attributes;return c.class+=" "+i,Object(r.b)("svg",b({},c),Object(r.b)("path",b({},l)))},f=Object(n.createContext)({}),p=function(t){var e=t.basename,o=void 0===e?null:e,n=t.children,i=void 0===n?{}:n;return Object(r.b)(f.Provider,{value:{basename:o,routesBasename:null===o?void 0:o,navigateBasename:null===o?"":"/"+o}},i)},g=function(){var t=Object(n.useContext)(l),e=Object(n.useContext)(f).navigateBasename,o=Object(i.e)();return Object(r.b)("button",{css:{cursor:"pointer",padding:0,fontFamily:"inherit",fontWeight:"bold",fontSize:"1.8rem",border:"none",color:t.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:t.lightColor}},onClick:function(){o(e+"/",{replace:!0})}},"Hunmin Park (Avantgarde95)")},h=function(){var t=Object(n.useContext)(l),e=Object(n.useContext)(f).navigateBasename,o=Object(n.useState)(""),a=o[0],u=o[1],s=Object(i.e)();return Object(r.b)(n.Fragment,null,Object(r.b)("input",{css:{fontFamily:"inherit",fontSize:"1rem",color:t.defaultColor,backgroundColor:"rgba(0, 0, 0, 0)",outline:"none",border:"solid 1px "+t.darkColor,borderRadius:0,"&:hover, &:active, &:focus":{border:"solid 1px "+t.lightColor}},type:"text",placeholder:"Search",onChange:function(t){u(t.target.value)}}),Object(r.b)("button",{css:{cursor:"pointer",fontFamily:"inherit",fontSize:"1rem",border:"none",color:t.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:t.lightColor}},onClick:function(){s(e+"/search/"+a,{replace:!0})}},Object(r.b)(d,{definition:c.faSearch})))},v=function(){var t,e,o=Object(n.useContext)(l);return Object(r.b)("div",{css:{width:"100%",color:o.defaultColor}},Object(r.b)("div",{css:(t={display:"block",marginBottom:"1rem"},t["@media (min-width: 769px)"]={display:"inline-block",width:"50%"},t)},Object(r.b)(g,null)),Object(r.b)("div",{css:(e={boxSizing:"border-box",display:"block",marginBottom:"1rem"},e["@media (min-width: 769px)"]={display:"inline-block",width:"50%",textAlign:"right"},e)},Object(r.b)(h,null)),Object(r.b)("div",{css:{color:o.defaultColor,marginBottom:"1rem"}},"블로그 - 아직 개발중입니다!",Object(r.b)("br",null),"Blog - Still in development!"))},m=o(15),O=o(5),j=o(26).Luminous,C=Object(r.c)({"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0}}),y=function(){var t=Object(n.useContext)(l);return Object(r.b)("div",{css:{paddingBottom:"1rem",marginBottom:"1rem",borderBottom:"1px solid "+t.darkColor,fontSize:"1.3rem",fontWeight:"bold",color:t.defaultColor}},"Loading... ",Object(r.b)(d,{css:{animation:C+" 0.5s infinite"},definition:O.faClock}))},x=function(t){var e=t.title,o=void 0===e?"":e,i=Object(n.useContext)(l);return Object(r.b)("span",{css:{color:i.defaultColor,fontSize:"1.8rem",fontWeight:"bold"}},o)},S=function(t){var e=t.date,o=void 0===e?{}:e,i=Object(n.useContext)(l),a=o.getFullYear().toString().padStart(4,"0"),c=(o.getMonth()+1).toString().padStart(2,"0"),u=o.getDate().toString().padStart(2,"0");return Object(r.b)("span",{css:{marginLeft:"0.5rem",fontSize:"1rem",color:i.defaultColor}},a,".",c,".",u)},k=function(t){var e=t.html,o=void 0===e?"":e,i=Object(n.useContext)(l),a=Object(n.createRef)();return Object(n.useEffect)((function(){var t=a.current;if(null!==t)for(var e=t.querySelectorAll(".PostImage"),o=0;o<e.length;o++)new j(e[o],{sourceAttribute:"src"})})),Object(r.b)("div",{css:{paddingBottom:"1rem",marginBottom:"0.5rem",borderBottom:"1px solid "+i.darkColor,color:i.defaultColor,"& h1":{fontSize:"1.5rem"},"& h2":{fontSize:"1.3rem"},"& h3":{fontSize:"1rem"},"& a":{cursor:"pointer",color:i.darkColor,"&:hover, &:active, &:focus":{color:i.lightColor}},"& table":{borderCollapse:"collapse",border:"1px solid "+i.darkColor,"& th, & td":{padding:"0.5rem",border:"1px solid "+i.darkColor}},"& .PostImage":{cursor:"zoom-in",maxWidth:"100%",border:"1px solid "+i.darkColor,"&:hover, &:active, &:focus":{border:"1px solid "+i.lightColor}},"& .PostYouTubeOuterContainer":{width:"100%",maxWidth:"560px"},"& .PostYouTubeInnerContainer":{position:"relative",height:0,paddingBottom:"56.25%"},"& .PostYouTube":{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"1px solid "+i.darkColor,"&:hover, &:active, &:focus":{border:"1px solid "+i.lightColor}},"& .hljs":{border:"1px solid "+i.darkColor,background:"none"}},ref:a,dangerouslySetInnerHTML:{__html:o}})},w=function(t){var e=t.category,o=void 0===e?"":e,a=Object(n.useContext)(l),c=Object(n.useContext)(f).navigateBasename,u=Object(i.e)();return Object(r.b)("div",{css:{marginBottom:"1rem",color:a.defaultColor}},"Category: ",Object(r.b)("button",{css:{cursor:"pointer",padding:"0",fontSize:"1rem",fontFamily:"inherit",border:"none",color:a.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:a.lightColor}},onClick:function(){u(c+"/category/"+o.toLowerCase(),{replace:!0})}},o))},B=function(t){var e=t.post,o=void 0===e?{}:e,i=Object(n.useContext)(l),a=Object(n.useState)(null),c=a[0],u=a[1];return Object(n.useEffect)((function(){o.load().then((function(t){u(t.default)})).catch((function(){u("Failed to load the post!")}))}),[c]),Object(r.b)("div",null,Object(r.b)("div",{css:{paddingBottom:"0.5rem",borderBottom:"1px solid "+i.darkColor}},Object(r.b)(x,{title:o.title}),Object(r.b)(S,{date:o.date})),null===c?Object(r.b)(y,null):Object(r.b)(k,{html:c}),Object(r.b)(w,{category:o.category}),Object(r.b)(m.DiscussionEmbed,{shortname:"Avantgarde95",config:{url:"https://avantgarde95.github.io/blog/"+o.path,identifier:o.title,title:o.title}}))},P=["Computer","Music","Misc"],z=[{path:"welcome",title:"Welcome",date:new Date("2020-09-15"),category:"Misc",load:function(){return o.e(6).then(o.t.bind(null,27,7))}},{path:"markdowntest",title:"Markdown test",date:new Date("2020-10-03"),category:"Computer",load:function(){return o.e(3).then(o.t.bind(null,28,7))}},{path:"myguitars",title:"My Guitars",date:new Date("2020-10-04"),category:"Music",load:function(){return o.e(4).then(o.t.bind(null,29,7))}},{path:"busantrip",title:"Busan trip",date:new Date("2020-10-05"),category:"Misc",load:function(){return o.e(2).then(o.t.bind(null,30,7))}},{path:"sieve",title:"Sieve of Eratosthenes",date:new Date("2020-10-05"),category:"Computer",load:function(){return o.e(5).then(o.t.bind(null,31,7))}}],M=function(t){var e=t.post,o=void 0===e?{}:e,a=Object(n.useContext)(l),c=Object(n.useContext)(f).navigateBasename,u=Object(i.e)();return Object(r.b)("button",{css:{cursor:"pointer",padding:"0",marginBottom:"0.5rem",fontFamily:"inherit",fontWeight:"bold",fontSize:"1.8rem",border:"none",color:a.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:a.lightColor}},onClick:function(){u(c+"/post/"+o.path,{replace:!0})}},o.title)},W=function(t){var e=t.date,o=void 0===e?{}:e,i=Object(n.useContext)(l),a=o.getFullYear().toString().padStart(4,"0"),c=(o.getMonth()+1).toString().padStart(2,"0"),u=o.getDate().toString().padStart(2,"0");return Object(r.b)("span",{css:{marginLeft:"0.5rem",fontSize:"1rem",color:i.defaultColor}},a,".",c,".",u)},E=Object(r.c)({"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0}}),L=function(){var t=Object(n.useContext)(l);return Object(r.b)("div",{css:{fontWeight:"bold",color:t.defaultColor}},"Loading... ",Object(r.b)(d,{css:{animation:E+" 0.5s infinite"},definition:O.faClock}))};var T=function(t){var e=t.post,o=void 0===e?{}:e,i=Object(n.useContext)(l),a=Object(n.useState)(null),c=a[0],u=a[1];return Object(n.useEffect)((function(){o.load().then((function(t){var e,o,r,n;u((r=t.default,(n=document.createElement("div")).innerHTML=r,e=n.innerText,o=100,e.length<=o?e:e.substr(0,o)+"..."))})).catch((function(){u("Failed to load the post!")}))}),[c]),Object(r.b)("div",{css:{color:i.defaultColor}},null===c?Object(r.b)(L,null):c)},F=function(t){var e=t.category,o=void 0===e?"":e,a=Object(n.useContext)(l),c=Object(n.useContext)(f).navigateBasename,u=Object(i.e)();return Object(r.b)("div",{css:{marginTop:"0.5rem",marginBottom:"1rem",color:a.defaultColor}},"Category: ",Object(r.b)("button",{css:{cursor:"pointer",padding:"0",fontSize:"1rem",fontFamily:"inherit",border:"none",color:a.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:a.lightColor}},onClick:function(){u(c+"/category/"+o.toLowerCase(),{replace:!0})}},o))},D=function(t){var e=t.posts,o=void 0===e?[]:e,i=Object(n.useContext)(l);return Object(r.b)("div",null,0===o.length?Object(r.b)("span",{css:{color:i.defaultColor}},"No posts!"):o.map((function(t){return Object(r.b)("div",{css:{paddingBottom:"0.5rem",marginBottom:"1.5rem",borderBottom:"1px solid "+i.darkColor}},Object(r.b)(M,{post:t}),Object(r.b)(W,{date:t.date}),Object(r.b)(T,{post:t}),Object(r.b)(F,{category:t.category}))})))},_=function(t){var e=t.category,o=void 0===e?{}:e,a=t.postCount,c=void 0===a?0:a,u=Object(n.useContext)(l),s=Object(n.useContext)(f).navigateBasename,b=Object(i.e)();return Object(r.b)("div",null,"- ",Object(r.b)("button",{css:{cursor:"pointer",padding:"0",fontSize:"1rem",fontFamily:"inherit",border:"none",color:u.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:u.lightColor}},onClick:function(){b(s+"/category/"+o,{replace:!0})}},o)," (",c,")")},A=function(t){var e=t.categories,o=void 0===e?[]:e,i=t.posts,a=void 0===i?[]:i,c=Object(n.useContext)(l);return Object(r.b)("div",{css:{marginBottom:"1rem",color:c.defaultColor}},Object(r.b)("div",{css:{fontWeight:"bold"}},"Category"),o.map((function(t){return Object(r.b)(_,{category:t,postCount:a.filter((function(e){return e.category===t})).length})})))},R=Object(r.c)({"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0}}),Y=function(){var t=Object(n.useContext)(l);return Object(r.b)("div",{css:{fontSize:"1.3rem",fontWeight:"bold",color:t.defaultColor}},"Searching... ",Object(r.b)(d,{css:{animation:R+" 0.5s infinite"},definition:O.faClock}))};function q(t){return t.trim().toLowerCase()}for(var I,N,H=function(t){var e=t.posts,o=void 0===e?[]:e,a=Object(i.f)().query,c=Object(n.useState)(null),l=c[0],u=c[1];return Object(n.useEffect)((function(){Promise.all(o.map((function(t){return t.load()}))).then((function(t){for(var e=[],r=q(a),n=0;n<t.length;n++)(q(o[n].title).includes(r)||q(t[n].default).includes(r))&&e.push(o[n]);u(e)}))}),[l]),null===l?Object(r.b)(Y,null):Object(r.b)(D,{posts:l})},J=function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var r=Array(t),n=0;for(e=0;e<o;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,n++)r[n]=i[a];return r},G=function(){return Object(r.b)(D,{posts:z})},U=function(){var t=Object(n.useContext)(l);return Object(r.b)("div",{css:{color:t.defaultColor}},"Wrong URL!")},K=function(){var t=Object(n.useContext)(f).routesBasename;return Object(i.h)(J([{path:"/",element:Object(r.b)(G,null)}],z.map((function(t){return{path:"post/"+t.path,element:Object(r.b)(B,{post:t})}})),P.map((function(t){return{path:"category/"+t.toLowerCase(),element:Object(r.b)(D,{posts:z.filter((function(e){return e.category===t}))})}})),[{path:"search/:query",element:Object(r.b)(H,{posts:z})},{path:"*",element:Object(r.b)(U,null)}]),t)},Q=document.getElementsByClassName("Temporary"),V=0;V<Q.length;V++)null===(N=null===(I=Q[V])||void 0===I?void 0:I.parentNode)||void 0===N||N.removeChild(Q[V]);Object(n.render)(Object(r.b)((function(){return Object(r.b)(a.a,null,Object(r.b)(p,{basename:"blog"},Object(r.b)(u,{defaultColor:"#ffffff",lightColor:"#00f6ff",darkColor:"#00d3dc"},Object(r.b)("div",{css:{overflowY:"auto",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem"}},Object(r.b)(v,null),Object(r.b)(A,{categories:P,posts:z}),Object(r.b)(K,null)))))}),null),document.body)}});