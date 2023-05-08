"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9615],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),o=a(7294),r=a(6010),l=a(2466),i=a(6550),s=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function d(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,c]=m({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=s??p;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),k(e)}),[c,k,r]),tabValues:r}}var g=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},l,{className:(0,r.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},o.createElement(b,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return o.createElement(v,(0,n.Z)({key:String(t)},e))}},464:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.12.0","app-latest-sha":"1943735bdefc751ae98732760921d49a3534a70a","core-latest-tag":"v1.15.0-tm-v0.34.23","core-latest-sha":"77a1de71feadebaa89c5ecaef0309fd8b9f2f921","node-latest-tag":"v0.7.1","node-latest-sha":"c958fd3b3921ca993489d88530e59fe7f337bf4d"})},8842:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.13.2","app-latest-sha":"1c51eb36f5e733e7cd0eefef67d7da9202968b87","core-latest-tag":"v1.19.0-tm-v0.34.27","core-latest-sha":"2a26e7a5ffb5451bf12d09fe9a88a15c6f867b62","node-latest-tag":"v0.9.3","node-latest-sha":"7f556f06e175267e0dd60b444a68554f592710a0"})},8549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.11.1","app-latest-sha":"a1eb594d43137ded5f9c1062168d26139a251e16","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.6.4","node-latest-sha":"747c9e593542dfb32a933c731a9cd74b1fab897f"})},1846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=a(7462),o=(a(7294),a(3905)),r=a(8549),l=a(464),i=a(8842),s=a(4866),c=a(5162);const u={sidebar_label:"Docker images"},p="\ud83d\udc33 Docker setup",d={unversionedId:"nodes/docker-images",id:"nodes/docker-images",title:"\ud83d\udc33 Docker setup",description:"This page has instructions to run celestia-node using Docker. If you are",source:"@site/docs/nodes/docker-images.mdx",sourceDirName:"nodes",slug:"/nodes/docker-images",permalink:"/fr/nodes/docker-images",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/docker-images.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Docker images"},sidebar:"nodes",previous:{title:"Quick start",permalink:"/fr/nodes/quick-start"},next:{title:"Setting up environment",permalink:"/fr/nodes/environment"}},h={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Light node setup",id:"light-node-setup",level:2},{value:"Blockspace Race light node setup",id:"blockspace-race-light-node-setup",level:3},{value:"Mocha testnet setup",id:"mocha-testnet-setup",level:3},{value:"Arabica devnet setup",id:"arabica-devnet-setup",level:3},{value:"Bridge node setup",id:"bridge-node-setup",level:2},{value:"Blockspace Race bridge node setup",id:"blockspace-race-bridge-node-setup",level:3},{value:"Mocha bridge node setup",id:"mocha-bridge-node-setup",level:3},{value:"Arabica bridge node setup",id:"arabica-bridge-node-setup",level:3},{value:"Full node setup",id:"full-node-setup",level:2},{value:"Blockspace Race full node setup",id:"blockspace-race-full-node-setup",level:3},{value:"Mocha full node setup",id:"mocha-full-node-setup",level:3},{value:"Arabica full node setup",id:"arabica-full-node-setup",level:3},{value:"Persistent storage",id:"persistent-storage",level:2}],k={toc:m},g="wrapper";function f(e){let{components:t,...u}=e;return(0,o.kt)(g,(0,n.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-docker-setup"},"\ud83d\udc33 Docker setup"),(0,o.kt)("p",null,"This page has instructions to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," using Docker. If you are\nlooking for instructions to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," using a binary, please\nrefer to the ",(0,o.kt)("a",{parentName:"p",href:"/fr/nodes/celestia-node"},"celestia-node")," page."),(0,o.kt)("p",null,"Using Docker is the easiest way to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," for most\nusers. Docker is a containerization platform that allows you to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node"),"\nin an isolated environment."),(0,o.kt)("p",null,"This means that you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," on your machine without having\nto worry about installing and configuring all of the dependencies required\nto run the node."),(0,o.kt)("p",null,"If you would like to learn more about\nkey management in Docker, visit the ",(0,o.kt)("a",{parentName:"p",href:"../../developers/celestia-node-key/#docker-and-cel-key"},"Docker\nand ",(0,o.kt)("inlineCode",{parentName:"a"},"cel-key")," section"),"."),(0,o.kt)("p",null,"The easiest way to install Docker is to use the Docker Desktop installer or\nUbuntu. You can find the instructions for your operating system\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install"},"here"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker")," and basic understanding of Docker")),(0,o.kt)(s.Z,{groupID:"node",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,o.kt)("h2",{id:"light-node-setup"},"Light node setup"),(0,o.kt)(s.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,o.kt)("h3",{id:"blockspace-race-light-node-setup"},"Blockspace Race light node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=light -e P2P_NETWORK=blockspacerace ghcr.io/celestiaorg/celestia-node:",i.Z["node-latest-tag"]," celestia light start --core.ip https://rpc-blockspacerace.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network blockspacerace")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia light node running on the Blockspace Race testnet."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(c.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("h3",{id:"mocha-testnet-setup"},"Mocha testnet setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=light -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:sha-",r.Z["node-latest-sha"].slice(0,7)," celestia light start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia light node running on the Mocha testnet."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mocha_light_docker",src:a(3609).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(c.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("h3",{id:"arabica-devnet-setup"},"Arabica devnet setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=light -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:",l.Z["node-latest-tag"]," celestia light start --core.ip https://limani.celestia-devops.dev --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network arabica")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia light node running on the Arabica devnet."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"arabica_light_docker",src:a(8316).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")))),(0,o.kt)(c.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,o.kt)("h2",{id:"bridge-node-setup"},"Bridge node setup"),(0,o.kt)(s.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,o.kt)("h3",{id:"blockspace-race-bridge-node-setup"},"Blockspace Race bridge node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=bridge -e P2P_NETWORK=blockspacerace ghcr.io/celestiaorg/celestia-node:",i.Z["node-latest-tag"]," celestia bridge start --core.ip https://rpc-blockspacerace.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network blockspacerace")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia bridge node running on the Blockspace Race testnet."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(c.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("h3",{id:"mocha-bridge-node-setup"},"Mocha bridge node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=bridge -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:sha-",r.Z["node-latest-sha"].slice(0,7)," celestia bridge start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia bridge node running on the Mocha network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mocha_bridge_docker",src:a(3234).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(c.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("h3",{id:"arabica-bridge-node-setup"},"Arabica bridge node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=bridge -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:",l.Z["node-latest-tag"]," celestia bridge start --core.ip https://limani.celestia-devops.dev --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network arabica")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia bridge node running on the Arabica network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"arabica_bridge_docker",src:a(3415).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")))),(0,o.kt)(c.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,o.kt)("h2",{id:"full-node-setup"},"Full node setup"),(0,o.kt)(s.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,o.kt)("h3",{id:"blockspace-race-full-node-setup"},"Blockspace Race full node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=full -e P2P_NETWORK=blockspacerace ghcr.io/celestiaorg/celestia-node:",i.Z["node-latest-tag"]," celestia full start --core.ip https://rpc-blockspacerace.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network blockspacerace")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia full node running on the Blockspace Race testnet."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(c.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("h3",{id:"mocha-full-node-setup"},"Mocha full node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=full -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:sha-",r.Z["node-latest-sha"].slice(0,7)," celestia full start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia full storage node running on the Mocha network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mocha_full_docker",src:a(8965).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(c.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("h3",{id:"arabica-full-node-setup"},"Arabica full node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=full -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:",l.Z["node-latest-tag"]," celestia full start --core.ip https://limani.celestia-devops.dev --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network arabica")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia full storage node running on the Arabica network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"arabica_full_docker",src:a(1169).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page."))))),(0,o.kt)("h2",{id:"persistent-storage"},"Persistent storage"),(0,o.kt)("p",null,"If you delete a container that you started above, all data will be lost.\nTo avoid this, you can mount a volume to the container.\nThis will allow you to persist data even after the container is deleted."),(0,o.kt)("p",null,"First, you will need to create a directory on your host machine.\nThis directory will be used to store the data for the container.\nCreate a directory on your host machine and give it a name.\nFor example, you can name it ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-pwd"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nmkdir celestia-pwd\n")),(0,o.kt)("p",null,"Now, you can mount this directory to the container.\nBefore mounting a volume, you will need to set permissions for\nthe user on the host machine by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown 10001:10001 ./celestia-pwd\n")),(0,o.kt)("p",null,"In order to mount a volume to the container, you need to specify\nthe path to the volume. When you run your container, you can specify\nthe path to the volume using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--volume")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," for short) flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# --volume == -v [local path]:[container path]\ndocker run [...args] -v ./celestia-pwd:/home/celestia celestia <node-type> start [...args]\n")),(0,o.kt)("p",null,"A full start command will look similar to below. This is an example using\na light node on Blockspace Race:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e NODE_TYPE=light -e P2P_NETWORK=blockspacerace -v ./celestia-pwd:/home/celestia ghcr.io/celestiaorg/celestia-node:v0.8.1 celestia light start --core.ip https://rpc-blockspacerace.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network blockspacerace\n")))}f.isMDXComponent=!0},3415:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/arabica_bridge_docker-47ba2389bb4b625617e77167ff8b7bd0.gif"},1169:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/arabica_full_docker-c748dec2dba3b7d115df73be54ab1a90.gif"},8316:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/arabica_light_docker-7071bf5fb7ab8041c11c7160f651edfe.gif"},3234:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mocha_bridge_docker-7ec6c8a2acbfdbbf614a00271d3d54b6.gif"},8965:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mocha_full_docker-9d3884fe7f3e102362715e0100eb079e.gif"},3609:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mocha_light_docker-47b10985b0784499df40395e28023537.gif"}}]);