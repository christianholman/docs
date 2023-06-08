"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Integrate Celestia",description:"Learn how you can integrate with the Celestia network."},o="Integrate Celestia",s={unversionedId:"developers/integrate-celestia",id:"developers/integrate-celestia",title:"Integrate Celestia",description:"Learn how you can integrate with the Celestia network.",source:"@site/docs/developers/integrate-celestia.md",sourceDirName:"developers",slug:"/developers/integrate-celestia",permalink:"/pr-preview/pr-789/developers/integrate-celestia",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/integrate-celestia.md",tags:[],version:"current",frontMatter:{sidebar_label:"Integrate Celestia",description:"Learn how you can integrate with the Celestia network."},sidebar:"developers",previous:{title:"IBC Relaying Guide",permalink:"/pr-preview/pr-789/developers/ibc-relayer"}},l={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"Celestia service provider notes",id:"celestia-service-provider-notes",level:2},{value:"Custody and key management",id:"custody-and-key-management",level:3},{value:"RPC and querying",id:"rpc-and-querying",level:3},{value:"Compatibility",id:"compatibility",level:3},{value:"Syncing",id:"syncing",level:3},{value:"Notable exceptions relative to other blockchains",id:"notable-exceptions-relative-to-other-blockchains",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrate-celestia"},"Integrate Celestia"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document is for third-party service providers, such as custodians and\nexplorers, integrating the Celestia network.")),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"When getting started Celestia, we recommend checking out these resources first:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-789/concepts/how-celestia-works/introduction"},"Introduction to Celestia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-789/concepts/how-celestia-works/monolithic-vs-modular"},"Monolithic v. Modular")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-789/concepts/how-celestia-works/data-availability-layer"},"Celestia's DA Layer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia.org/learn.md"},"Learn Modular")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-789/nodes/overview"},"Overview to running nodes on Celestia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-789/developers/build-modular"},"Build Moduar"))),(0,r.kt)("h2",{id:"celestia-service-provider-notes"},"Celestia service provider notes"),(0,r.kt)("p",null,"Celestia is a fairly standard Cosmos-SDK based chain. We use the latest version\nof Tendermint and the Cosmos-SDK, with only minor modifications to each. This\nmeans that we are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the default Cosmos-SDK modules: auth, bank, distribution, staking,\nslashing, mint, crisis, ibchost, genutil, evidence, ibctransfer, params, gov\n(limited in some TBD capacities), upgrade, vesting, feegrant, capability, and\npayment."),(0,r.kt)("li",{parentName:"ul"},"Use the standard digital keys schemes provided by the Cosmos-SDK and\nTendermint, those being secp256k1 for user transactions, and tm-ed25519 for\nsigning and verifying consensus messages.")),(0,r.kt)("p",null,"While exactly which modules used is subject to change, Celestia aims to be as\nminimal as possible."),(0,r.kt)("h3",{id:"custody-and-key-management"},"Custody and key management"),(0,r.kt)("p",null,"Celestia supports many already existing key management systems, as we rely on\nthe Cosmos-SDK and Tendermint libraries for signing and verifying transactions.\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/basics/accounts.html#keys-accounts-addresses-and-signatures"},"Cosmos-SDK documentation")),(0,r.kt)("h3",{id:"rpc-and-querying"},"RPC and querying"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app"),", only the standard RPC endpoints for Tendermint and the\nCosmos-SDK are exposed. We do not currently add or subtract any core\nfunctionality, but this could change in the future. The same goes for querying\ndata from the chain."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node"),", the Data Availability node client, there is a JSON-RPC API\nthat allows you to interact directly with Celestia's Data Availability layer.\nThe guide for it can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/node-tutorial"},"here"),"."),(0,r.kt)("h3",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Linux, particularly Ubuntu 20.04 LTS, is the most well tested. Potentially\ncompatible with other OSs, but they are currently untested. Some of the\ncryptography libraries used for erasure data are not guaranteed to work on\nother platforms."),(0,r.kt)("h3",{id:"syncing"},"Syncing"),(0,r.kt)("p",null,"Since we utilize Tendermint and the Cosmos-SDK, syncing the chain can be\nperformed by any method that is supported by those libraries. This includes\nfast-sync, state sync, and quick sync."),(0,r.kt)("h3",{id:"notable-exceptions-relative-to-other-blockchains"},"Notable exceptions relative to other blockchains"),(0,r.kt)("p",null,"Relative to other Tendermint based chains, Celestia will have significantly\nlonger blocktimes of around 15* seconds. The reason behind this block time is to\noptimize the bandwidth used by light clients that are sampling the chain, and\nis not because we have modified Tendermint consensus in any meaningful way.\nValidators will likely download/upload relatively large blocks. It should be\nnoted that while these blocks are large, very little typical blockchain state\nexecution is actually occurring on Celestia. Meaning that the bandwidth\nrequirements will likely be larger than that of a typical Cosmos-SDK based\nblockchain full node, the computing requirements should be similar in\nmagnitude."),(0,r.kt)("p",null,"*Subject to Change"))}u.isMDXComponent=!0}}]);