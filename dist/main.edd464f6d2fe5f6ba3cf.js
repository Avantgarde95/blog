!function(t){function e(e){for(var r,c,a=e[0],l=e[1],u=e[2],d=0,s=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&s.push(n[c][0]),n[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(b&&b(e);s.length;)s.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,a=1;a<o.length;a++){var l=o[a];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var r={},n={0:0},i=[];function c(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,r){o=n[t]=[e,r]}));e.push(o[2]=r);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=function(t){return c.p+""+({}[t]||t)+"."+{2:"4589ce4d7e5ec9d4fe77",3:"62378e9268f7506acb08",4:"2f5733550c2d0b987578",5:"35aae3db2391ff20d6a1"}[t]+".js"}(t);var l=new Error;i=function(e){a.onerror=a.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,o[1](l)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(o,r,function(e){return t[e]}.bind(null,r));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="dist/",c.oe=function(t){throw console.error(t),t};var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var b=l;i.push([25,1]),o()}({16:function(t,e,o){o(17),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){var o=e>0?0|e:0;return this.substring(o,o+t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){return(void 0===e||e>this.length)&&(e=this.length),this.substring(e-t.length,e)===t}),String.prototype.padStart||(String.prototype.padStart=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),e.slice(0,t)+String(this))}),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";if(t instanceof RegExp)throw TypeError("first argument must not be a RegExp");return void 0===e&&(e=0),-1!==this.indexOf(t,e)})},25:function(t,e,o){"use strict";o.r(e);o(16);var r=o(1),n=o(0),i=o(2),c=o(4),a=o(14),l=Object(n.createContext)({}),u=function(t){var e=t.defaultColor,o=void 0===e?"#ffffff":e,n=t.lightColor,i=void 0===n?"#ffffff":n,c=t.darkColor,a=void 0===c?"#ffffff":c,u=t.children,b=void 0===u?{}:u;return Object(r.b)(l.Provider,{value:{defaultColor:o,lightColor:i,darkColor:a,textStyle:Object(r.a)({color:o}),boxStyle:Object(r.a)({backgroundColor:"rgba(0, 0, 0, 0)",border:"solid 1px "+o,borderRadius:0}),highlightStyle:Object(r.a)({"&:hover, &:active, &:focus":{color:i,border:"solid 1px "+i}})}},b)},b=o(13),d=function(){return(d=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},s=function(t){var e=t.definition,o=void 0===e?{}:e,n=t.className,i=void 0===n?"":n,c=Object(b.a)(o).abstract[0],a=c.attributes,l=c.children[0].attributes;return a.class+=" "+i,Object(r.b)("svg",d({},a),Object(r.b)("path",d({},l)))},f=function(){var t=Object(n.useContext)(l),e=Object(i.f)();return Object(r.b)("button",{css:{cursor:"pointer",padding:0,fontFamily:"inherit",fontWeight:"bold",fontSize:"1.8rem",border:"none",color:t.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:t.lightColor}},onClick:function(){e("/",{replace:!0})}},"Hunmin Park (Avantgarde95)")},p=function(){var t=Object(n.useContext)(l);return Object(r.b)("input",{css:{fontFamily:"inherit",fontSize:"1rem",color:t.defaultColor,backgroundColor:"rgba(0, 0, 0, 0)",outline:"none",border:"solid 1px "+t.darkColor,borderRadius:0,"&:hover, &:active, &:focus":{border:"solid 1px "+t.lightColor}},type:"text",placeholder:"Search"})},g=function(){var t=Object(n.useContext)(l);return Object(r.b)("button",{css:{cursor:"pointer",fontFamily:"inherit",fontSize:"1rem",border:"none",color:t.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:t.lightColor}},onClick:function(){}},Object(r.b)(s,{definition:a.faSearch}))},h=function(){var t,e,o=Object(n.useContext)(l);return Object(r.b)("div",{css:{width:"100%",color:o.defaultColor}},Object(r.b)("div",{css:(t={display:"block",marginBottom:"1rem"},t["@media (min-width: 769px)"]={display:"inline-block",width:"50%"},t)},Object(r.b)(f,null)),Object(r.b)("div",{css:(e={boxSizing:"border-box",display:"block",marginBottom:"2rem"},e["@media (min-width: 769px)"]={display:"inline-block",width:"50%",textAlign:"right"},e)},Object(r.b)(p,null),Object(r.b)(g,null)))},m=o(15),v=o(5),O=Object(r.c)({"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0}}),j=function(){var t=Object(n.useContext)(l);return Object(r.b)("div",{css:{paddingBottom:"1rem",marginBottom:"1rem",borderBottom:"1px solid "+t.darkColor,fontSize:"1.3rem",fontWeight:"bold",color:t.defaultColor}},"Loading... ",Object(r.b)(s,{css:{animation:O+" 0.5s infinite"},definition:v.faClock}))},C=function(t){var e=t.title,o=void 0===e?"":e,i=Object(n.useContext)(l);return Object(r.b)("span",{css:{color:i.defaultColor,fontSize:"1.8rem",fontWeight:"bold"}},o)},y=function(t){var e=t.date,o=void 0===e?{}:e,i=Object(n.useContext)(l),c=o.getFullYear().toString().padStart(4,"0"),a=(o.getMonth()+1).toString().padStart(2,"0"),u=o.getDate().toString().padStart(2,"0");return Object(r.b)("span",{css:{marginLeft:"0.5rem",fontSize:"1rem",color:i.defaultColor}},c,".",a,".",u)},S=function(t){var e=t.html,o=void 0===e?"":e,i=Object(n.useContext)(l);return Object(r.b)("div",{css:{paddingBottom:"1rem",marginBottom:"0.5rem",borderBottom:"1px solid "+i.darkColor,color:i.defaultColor,"& h1":{fontSize:"1.5rem"},"& h2":{fontSize:"1.3rem"},"& h3":{fontSize:"1rem"},"& .hljs":{border:"1px solid "+i.darkColor,background:"none"}},dangerouslySetInnerHTML:{__html:o}})},x=function(t){var e=t.category,o=void 0===e?"":e,c=Object(n.useContext)(l),a=Object(i.f)();return Object(r.b)("div",{css:{marginBottom:"1rem",color:c.defaultColor}},"Category: ",Object(r.b)("button",{css:{cursor:"pointer",padding:"0",fontSize:"1rem",fontFamily:"inherit",border:"none",color:c.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:c.lightColor}},onClick:function(){a("/category/"+o,{replace:!0})}},o))},k=function(t){var e=t.post,o=void 0===e?{}:e,i=Object(n.useContext)(l),c=Object(n.useState)(null),a=c[0],u=c[1];return Object(n.useEffect)((function(){o.load().then((function(t){u(t.default)})).catch((function(){u("Failed to load the post!")}))})),Object(r.b)("div",null,Object(r.b)("div",{css:{paddingBottom:"0.5rem",borderBottom:"1px solid "+i.darkColor}},Object(r.b)(C,{title:o.title}),Object(r.b)(y,{date:o.date})),null===a?Object(r.b)(j,null):Object(r.b)(S,{html:a}),Object(r.b)(x,{category:o.category}),Object(r.b)(m.DiscussionEmbed,{shortname:"Avantgarde95",config:{url:"https://avantgarde95.github.io/blog/"+o.path,identifier:o.title,title:o.title}}))},w=["Computer","Music","Misc"],B=[{path:"welcome",title:"Welcome",date:new Date("2020-09-15"),category:"Misc",load:function(){return o.e(5).then(o.t.bind(null,26,7))}},{path:"test1",title:"Test1",date:new Date("2020-10-03"),category:"Computer",load:function(){return o.e(2).then(o.t.bind(null,27,7))}},{path:"test2",title:"Test2",date:new Date("2020-10-04"),category:"Computer",load:function(){return o.e(3).then(o.t.bind(null,28,7))}},{path:"test3",title:"Test3",date:new Date("2020-10-05"),category:"Computer",load:function(){return o.e(4).then(o.t.bind(null,29,7))}}],z=function(t){var e=t.post,o=void 0===e?{}:e,c=Object(n.useContext)(l),a=Object(i.f)();return Object(r.b)("button",{css:{cursor:"pointer",padding:"0",marginBottom:"0.5rem",fontFamily:"inherit",fontWeight:"bold",fontSize:"1.8rem",border:"none",color:c.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:c.lightColor}},onClick:function(){a("/post/"+o.path,{replace:!0})}},o.title)},P=function(t){var e=t.date,o=void 0===e?{}:e,i=Object(n.useContext)(l),c=o.getFullYear().toString().padStart(4,"0"),a=(o.getMonth()+1).toString().padStart(2,"0"),u=o.getDate().toString().padStart(2,"0");return Object(r.b)("span",{css:{marginLeft:"0.5rem",fontSize:"1rem",color:i.defaultColor}},c,".",a,".",u)},T=Object(r.c)({"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0}}),W=function(){var t=Object(n.useContext)(l);return Object(r.b)("div",{css:{fontWeight:"bold",color:t.defaultColor}},"Loading... ",Object(r.b)(s,{css:{animation:T+" 0.5s infinite"},definition:v.faClock}))};var E=function(t){var e=t.post,o=void 0===e?{}:e,i=Object(n.useContext)(l),c=Object(n.useState)(null),a=c[0],u=c[1];return Object(n.useEffect)((function(){o.load().then((function(t){var e,o,r,n;u((r=t.default,(n=document.createElement("div")).innerHTML=r,e=n.innerText,o=100,e.length<=o?e:e.substr(0,o)+"..."))})).catch((function(){u("Failed to load the post!")}))})),Object(r.b)("div",{css:{color:i.defaultColor}},null===a?Object(r.b)(W,null):a)},F=function(t){var e=t.category,o=void 0===e?"":e,c=Object(n.useContext)(l),a=Object(i.f)();return Object(r.b)("div",{css:{marginTop:"0.5rem",marginBottom:"1rem",color:c.defaultColor}},"Category: ",Object(r.b)("button",{css:{cursor:"pointer",padding:"0",fontSize:"1rem",fontFamily:"inherit",border:"none",color:c.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:c.lightColor}},onClick:function(){a("/category/"+o,{replace:!0})}},o))},L=function(t){var e=t.posts,o=void 0===e?[]:e,i=Object(n.useContext)(l);return Object(r.b)("div",null,0===o.length?Object(r.b)("span",{css:{color:i.defaultColor}},"No posts!"):o.map((function(t){return Object(r.b)("div",{css:{paddingBottom:"0.5rem",marginBottom:"1.5rem",borderBottom:"1px solid "+i.darkColor}},Object(r.b)(z,{post:t}),Object(r.b)(P,{date:t.date}),Object(r.b)(E,{post:t}),Object(r.b)(F,{category:t.category}))})))},M=function(t){var e=t.category,o=void 0===e?{}:e,c=t.postCount,a=void 0===c?0:c,u=Object(n.useContext)(l),b=Object(i.f)();return Object(r.b)("div",null,"- ",Object(r.b)("button",{css:{cursor:"pointer",padding:"0",fontSize:"1rem",fontFamily:"inherit",border:"none",color:u.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:u.lightColor}},onClick:function(){b("/category/"+o,{replace:!0})}},o)," (",a,")")},_=function(t){var e=t.categories,o=void 0===e?[]:e,i=t.posts,c=void 0===i?[]:i,a=Object(n.useContext)(l);return Object(r.b)("div",{css:{marginBottom:"1rem",color:a.defaultColor}},Object(r.b)("div",{css:{fontWeight:"bold"}},"Category"),o.map((function(t){return Object(r.b)(M,{category:t,postCount:c.filter((function(e){return e.category===t})).length})})))},D=Object(r.c)({"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0}}),A=function(){var t=Object(n.useContext)(l);return Object(r.b)("div",{css:{fontSize:"1.3rem",fontWeight:"bold",color:t.defaultColor}},"Searching... ",Object(r.b)(s,{css:{animation:D+" 0.5s infinite"},definition:v.faClock}))};function R(t){return t.trim().toLowerCase()}for(var N,q,H=function(t){var e=t.posts,o=void 0===e?[]:e,c=Object(i.g)().query,a=Object(n.useState)(null),l=a[0],u=a[1];return Object(n.useEffect)((function(){Promise.all(o.map((function(t){return t.load()}))).then((function(t){for(var e=[],r=R(c),n=0;n<t.length;n++)(R(o[n].title).includes(r)||R(t[n].default).includes(r))&&e.push(o[n]);u(e)}))})),null===l?Object(r.b)(A,null):Object(r.b)(L,{posts:l})},Y=function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var r=Array(t),n=0;for(e=0;e<o;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,n++)r[n]=i[c];return r},J=function(){return Object(r.b)(L,{posts:B})},I=w.map((function(t){return{path:t.toLowerCase(),element:Object(r.b)(L,{posts:B.filter((function(e){return e.category===t}))})}})),U=B.map((function(t){return{path:t.path,element:Object(r.b)(k,{post:t})}})),G=function(){return Object(i.i)([{path:"/",element:Object(r.b)(J,null)},{path:"category",element:Object(r.b)(i.a,null),children:Y([{path:"/",element:Object(r.b)(J,null)}],I)},{path:"post",element:Object(r.b)(i.a,null),children:Y([{path:"/",element:Object(r.b)(J,null)}],U)},{path:"search/:query",element:Object(r.b)(H,{posts:B})},{path:"*",element:Object(r.b)("div",null,"Wrong URL!")}])},K=document.getElementsByClassName("Temporary"),Q=0;Q<K.length;Q++)null===(q=null===(N=K[Q])||void 0===N?void 0:N.parentNode)||void 0===q||q.removeChild(K[Q]);Object(n.render)(Object(r.b)((function(){return Object(r.b)(c.a,null,Object(r.b)(u,{defaultColor:"#ffffff",lightColor:"#00f6ff",darkColor:"#00d3dc"},Object(r.b)("div",{css:{overflowY:"auto",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem"}},Object(r.b)(h,null),Object(r.b)(_,{categories:w,posts:B}),Object(r.b)(G,null))))}),null),document.body)}});