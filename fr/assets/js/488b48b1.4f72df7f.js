"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,f=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Node API",description:"An overview of the Celestia Node API."},i="Node API",l={unversionedId:"developers/node-api",id:"developers/node-api",title:"Node API",description:"An overview of the Celestia Node API.",source:"@site/docs/developers/node-api.md",sourceDirName:"developers",slug:"/developers/node-api",permalink:"/fr/developers/node-api",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/node-api.md",tags:[],version:"current",frontMatter:{sidebar_label:"Node API",description:"An overview of the Celestia Node API."},sidebar:"developers",previous:{title:"Wallet with Celestia Node",permalink:"/fr/developers/celestia-node-key"},next:{title:"Node RPC CLI tutorial",permalink:"/fr/developers/node-tutorial"}},s={},p=[{value:"RPC API",id:"rpc-api",level:2},{value:"Library",id:"library",level:3},{value:"RPC",id:"rpc",level:3},{value:"RPC API tutorial",id:"rpc-api-tutorial",level:3},{value:"Gateway API",id:"gateway-api",level:2},{value:"Gateway API tutorial",id:"gateway-api-tutorial",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-api"},"Node API"),(0,a.kt)("p",null,"The Celestia Node API is made for interacting with ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node"),".\nThere are a two ways in which a user and developer can interact with\nthe API, the RPC API and the Gateway API. The API's documentation\ncan be found ",(0,a.kt)("a",{parentName:"p",href:"https://node-rpc-docs.celestia.org/"},"here"),"."),(0,a.kt)("h2",{id:"rpc-api"},"RPC API"),(0,a.kt)("p",null,"The RPC API primarily focuses on developers and projects building on\ntop of Celestia, who are willing to run their own DA nodes. The RPC API\nprovides a richer set of features and a superior user experience.\nUnlike the Gateway API, the RPC API allows access\nto the internal wallet and keyring of the DA node, as well as other\nsensitive and administrative capabilities."),(0,a.kt)("h3",{id:"library"},"Library"),(0,a.kt)("p",null,"The node can be used as a Golang library and designed for programmatic API access."),(0,a.kt)("h3",{id:"rpc"},"RPC"),(0,a.kt)("p",null,"The RPC API is also exposed to OpenRPC(JSON-RPC 2.0) for users wanting\nto run their DA node as a separate DA service. It provides the same\nset of features as the library with an additional authentication system\nwith different permissions levels to protect the wallet and\nsigning + providing RPC-level DOS protection."),(0,a.kt)("h3",{id:"rpc-api-tutorial"},"RPC API tutorial"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"../node-tutorial/"},"node tutorial"),", which uses the RPC CLI, is the\nrecommended way\nto get started interacting with your Celestia node."),(0,a.kt)("h2",{id:"gateway-api"},"Gateway API"),(0,a.kt)("p",null,"The gateway API is a REST API which is meant to be deployed by infra\nproviders to enable the public read-only gateway to the DA network for\nexternal users who don't want or can't run light nodes\n(like browsers currently) over HTTP. It has no wallet or signing\nfunctionality."),(0,a.kt)("h3",{id:"gateway-api-tutorial"},"Gateway API tutorial"),(0,a.kt)("p",null,"The Prompt scavenger gateway API tutorial can be found ",(0,a.kt)("a",{parentName:"p",href:"../prompt-scavenger/"},"here"),"."))}u.isMDXComponent=!0}}]);