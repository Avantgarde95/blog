!function(t){function e(e){for(var r,c,l=e[0],a=e[1],u=e[2],b=0,f=[];b<l.length;b++)c=l[b],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(d&&d(e);f.length;)f.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,l=1;l<o.length;l++){var a=o[l];0!==n[a]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var r={},n={0:0},i=[];function c(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,r){o=n[t]=[e,r]}));e.push(o[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=function(t){return c.p+""+({}[t]||t)+"."+{2:"e867897dcccc8346f001",3:"5269f3350aad8c9ddc77"}[t]+".js"}(t);var a=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",a.name="ChunkLoadError",a.type=r,a.request=i,o[1](a)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(o,r,function(e){return t[e]}.bind(null,r));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="dist/",c.oe=function(t){throw console.error(t),t};var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=a;i.push([29,1]),o()}({17:function(t,e,o){o(18),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){var o=e>0?0|e:0;return this.substring(o,o+t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){return(void 0===e||e>this.length)&&(e=this.length),this.substring(e-t.length,e)===t})},29:function(t,e,o){"use strict";o.r(e);o(17);var r,n,i=o(1),c=o(0),l=o(2),a=o(7),u=o(13),d=Object(c.createContext)({}),b=function(t){var e=t.defaultColor,o=void 0===e?"#ffffff":e,r=t.lightColor,n=void 0===r?"#ffffff":r,c=t.darkColor,l=void 0===c?"#ffffff":c,a=t.children,u=void 0===a?{}:a;return Object(i.b)(d.Provider,{value:{defaultColor:o,lightColor:n,darkColor:l,textStyle:Object(i.a)({color:o}),boxStyle:Object(i.a)({backgroundColor:"rgba(0, 0, 0, 0)",border:"solid 1px "+o,borderRadius:0}),highlightStyle:Object(i.a)({"&:hover, &:active, &:focus":{color:n,border:"solid 1px "+n}})}},u)},f=o(12),s=function(){return(s=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},p=function(t){var e=t.definition,o=void 0===e?{}:e,r=t.className,n=void 0===r?"":r,c=Object(f.a)(o).abstract[0],l=c.attributes,a=c.children[0].attributes;return l.class+=" "+n,Object(i.b)("svg",s({},l),Object(i.b)("path",s({},a)))},h=function(){var t=Object(c.useContext)(d),e=Object(l.e)();return Object(i.b)("button",{css:{cursor:"pointer",padding:0,fontFamily:"inherit",fontSize:"1.8rem",border:"none",color:t.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:t.lightColor}},onClick:function(){e("/",{replace:!0})}},"Hunmin Park (Avantgarde95)")},g=function(){var t=Object(c.useContext)(d);return Object(i.b)("input",{css:{fontFamily:"inherit",fontSize:"1rem",color:t.defaultColor,backgroundColor:"rgba(0, 0, 0, 0)",outline:"none",border:"solid 1px "+t.darkColor,borderRadius:0,"&:hover, &:active, &:focus":{border:"solid 1px "+t.lightColor}},type:"text",placeholder:"Search"})},m=function(){var t=Object(c.useContext)(d);return Object(i.b)("button",{css:{cursor:"pointer",fontFamily:"inherit",fontSize:"1rem",border:"none",color:t.darkColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{color:t.lightColor}},onClick:function(){}},Object(i.b)(p,{definition:u.faSearch}))},v=function(){var t,e,o=Object(c.useContext)(d);Object(l.e)();return Object(i.b)("div",{css:{width:"100%",color:o.defaultColor}},Object(i.b)("div",{css:(t={display:"block",marginBottom:"1rem"},t["@media (min-width: 769px)"]={display:"inline-block",width:"50%"},t)},Object(i.b)(h,null)),Object(i.b)("div",{css:(e={boxSizing:"border-box",display:"block",marginBottom:"1rem"},e["@media (min-width: 769px)"]={display:"inline-block",width:"50%",textAlign:"right"},e)},Object(i.b)(g,null),Object(i.b)(m,null)))},O=o(14),j=o(15),y=Object(i.c)({"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0}}),C=function(){var t=Object(c.useContext)(d);return Object(i.b)("div",{css:{paddingBottom:"1rem",marginTop:"1rem",marginBottom:"1rem",borderBottom:"1px solid "+t.darkColor,fontSize:"1.3rem",color:t.defaultColor}},"Loading... ",Object(i.b)(p,{css:{animation:y+" 0.5s infinite"},definition:j.faClock}))},x=function(t){var e=t.html,o=void 0===e?"":e,r=Object(c.useContext)(d);return Object(i.b)("div",{css:{paddingBottom:"1rem",marginBottom:"0.5rem",borderBottom:"1px solid "+r.darkColor,color:r.defaultColor,"& h1":{paddingBottom:"0.3rem",borderBottom:"1px solid "+r.darkColor,fontSize:"1.8rem"},"& h2":{fontSize:"1.3rem"},"& h3":{fontSize:"1rem"},"& .hljs":{border:"1px solid "+r.darkColor,background:"none"}},dangerouslySetInnerHTML:{__html:o}})},k=function(t){var e=t.category,o=void 0===e?"":e,r=Object(c.useContext)(d);return Object(i.b)("div",{css:{marginBottom:"1rem",color:r.defaultColor}},"Category: ",Object(i.b)("a",{css:{cursor:"pointer",color:r.darkColor,"&:hover, &:active, &:focus":{color:r.lightColor}},href:"#"},o))},S=function(t){var e=t.article,o=void 0===e?{}:e,r=(Object(c.useContext)(d),Object(c.useState)(null)),n=r[0],l=r[1];return Object(c.useEffect)((function(){o.load().then((function(t){setTimeout((function(){l(t.default)}),2e3)})).catch((function(){l("Failed to load the article!")}))})),Object(i.b)("div",null,null===n?Object(i.b)(C,null):Object(i.b)(x,{html:n}),Object(i.b)(k,{category:o.category}),Object(i.b)(O.DiscussionEmbed,{shortname:"Avantgarde95",config:{url:"https://avantgarde95.github.io/blog"+o.path,identifier:o.title,title:o.title}}))},w=[{path:"welcome",title:"Welcome",category:"Misc",load:function(){return o.e(3).then(o.t.bind(null,30,7))}},{path:"test",title:"Test",category:"Computer",load:function(){return o.e(2).then(o.t.bind(null,31,7))}}],B=function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var r=Array(t),n=0;for(e=0;e<o;e++)for(var i=arguments[e],c=0,l=i.length;c<l;c++,n++)r[n]=i[c];return r};o(26);for(var P=function(){return Object(l.g)(B([{path:"/",element:null}],w.map((function(t){return{path:t.path,element:Object(i.b)(S,{article:t})}}))))},z=document.getElementsByClassName("Temporary"),T=0;T<z.length;T++)null===(n=null===(r=z[T])||void 0===r?void 0:r.parentNode)||void 0===n||n.removeChild(z[T]);Object(c.render)(Object(i.b)((function(){return Object(i.b)(a.a,null,Object(i.b)(b,{defaultColor:"#ffffff",lightColor:"#00f6ff",darkColor:"#00d3dc"},Object(i.b)("div",{css:{overflowY:"auto",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem"}},Object(i.b)(v,null),Object(i.b)(P,null))))}),null),document.body)}});