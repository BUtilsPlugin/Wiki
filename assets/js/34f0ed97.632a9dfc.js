"use strict";(self.webpackChunkbutils_wiki=self.webpackChunkbutils_wiki||[]).push([[863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,g=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},a="Install the plugin",l={unversionedId:"plugin/install",id:"plugin/install",title:"Install the plugin",description:"To install the BUtils Minecraft plugin, follow these steps.",source:"@site/docs/plugin/install.md",sourceDirName:"plugin",slug:"/plugin/install",permalink:"/docs/plugin/install",draft:!1,editUrl:"https://github.com/BUtilsPlugin/butils-wiki/tree/main/packages/create-docusaurus/templates/shared/docs/plugin/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"BUtils Minecraft Plugin",permalink:"/docs/category/butils-minecraft-plugin"},next:{title:"Register your license",permalink:"/docs/plugin/register-license"}},s={},p=[{value:"Step 1 \u2014 Upload file",id:"step-1--upload-file",level:2},{value:"Step 2 \u2014 Start and join the server",id:"step-2--start-and-join-the-server",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"The plugin is not enabled",id:"the-plugin-is-not-enabled",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-the-plugin"},"Install the plugin"),(0,i.kt)("p",null,"To install the BUtils Minecraft plugin, follow these steps."),(0,i.kt)("admonition",{title:"Requirements",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"You need to be verified on the Discord Server. ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../discord/verification"},"Click here to get verified")),"."),(0,i.kt)("li",{parentName:"ul"},"You need to download the plugin. ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../discord/download"},"Click here to download BUtils")),"."))),(0,i.kt)("h2",{id:"step-1--upload-file"},"Step 1 \u2014 Upload file"),(0,i.kt)("p",null,"Upload the plugin file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/plugins/")," folder of your ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://papermc.io/"},"Paper"))," server.\nCheck if you have the right Minecraft version.\nYou can find the supported version in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://discord.com/channels/565867543152033822/637987121671438346/"},(0,i.kt)("inlineCode",{parentName:"a"},"#information"))),"."),(0,i.kt)("h2",{id:"step-2--start-and-join-the-server"},"Step 2 \u2014 Start and join the server"),(0,i.kt)("p",null,"Start the Minecraft server and connect to it when it is online."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"the-plugin-is-not-enabled"},"The plugin is not enabled"),(0,i.kt)("p",null,"Is your server using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://papermc.io/"},"Paper")),"?\nPlease consider checking the supported version in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://discord.com/channels/565867543152033822/637987121671438346/"},(0,i.kt)("inlineCode",{parentName:"a"},"#information"))),"."))}d.isMDXComponent=!0}}]);