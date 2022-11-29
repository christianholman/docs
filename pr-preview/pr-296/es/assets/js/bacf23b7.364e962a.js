"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6875],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9055:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var r=t(3117),o=(t(7294),t(3905));const l={sidebar_label:"Build a Sovereign Rollup"},a="\ud83d\uddde\xa0Building a Sovereign Rollup",i={unversionedId:"developers/gm-rollmint",id:"developers/gm-rollmint",title:"\ud83d\uddde\xa0Building a Sovereign Rollup",description:"The Ignite CLI comes with scaffolding commands to make development of",source:"@site/docs/developers/gm-rollmint.md",sourceDirName:"developers",slug:"/developers/gm-rollmint",permalink:"/pr-preview/pr-296/es/developers/gm-rollmint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-rollmint.md",tags:[],version:"current",frontMatter:{sidebar_label:"Build a Sovereign Rollup"},sidebar:"developers",previous:{title:"Run a Light Node",permalink:"/pr-preview/pr-296/es/developers/gm-node"},next:{title:"Query your Rollup",permalink:"/pr-preview/pr-296/es/developers/gm-query"}},c={},s=[{value:"\ud83d\udc8e\xa0Installing Rollmint",id:"installing-rollmint",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-a-sovereign-rollup"},"\ud83d\uddde\xa0Building a Sovereign Rollup"),(0,o.kt)("p",null,"The Ignite CLI comes with scaffolding commands to make development of\nblockchains quicker by creating everything that is needed to start a new\nCosmos SDK blockchain."),(0,o.kt)("p",null,"Open a new tab or window in your terminal and run this command to scaffold your rollup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold chain gm\n")),(0,o.kt)("p",null,"The response will look similar to below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jcs @ ~ % ignite scaffold chain gm\n\n\u2b50\ufe0f Successfully created a new blockchain 'gm'.\n\ud83d\udc49 Get started with the following commands:\n\n % cd gm\n % ignite chain serve\n\nDocumentation: https://docs.ignite.com\n")),(0,o.kt)("p",null,"This command has created a Cosmos SDK blockchain in the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," directory. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," directory contains a fully functional blockchain. The following standard\nCosmos SDK ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/modules/"},"modules")," have been\nimported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"staking")," - for delegated Proof-of-Stake (PoS) consensus mechanism"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bank")," - for fungible token transfers between accounts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gov")," - for on-chain governance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mint")," - for minting new units of staking token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nft")," - for creating, transferring, and updating NFTs"),(0,o.kt)("li",{parentName:"ul"},"and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/architecture/adr-043-nft-module.html"},"more"))),(0,o.kt)("p",null,"Change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd gm\n")),(0,o.kt)("p",null,"You can learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," directory\u2019s file structure ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ignite.com/guide/hello#blockchain-directory-structure"},"here"),".\nMost of our work in this tutorial will happen in the ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," directory."),(0,o.kt)("h2",{id:"installing-rollmint"},"\ud83d\udc8e\xa0Installing Rollmint"),(0,o.kt)("p",null,"To swap out Tendermint for Rollmint, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/celestiaorg/cosmos-sdk-rollmint@v0.46.3-rollmint-v0.4.0\ngo mod tidy\ngo mod download\n")))}u.isMDXComponent=!0}}]);