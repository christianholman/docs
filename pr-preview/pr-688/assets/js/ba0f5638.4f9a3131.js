"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Restart your node with metrics flags",s={unversionedId:"nodes/itn-enable-telemetry-nodes",id:"nodes/itn-enable-telemetry-nodes",title:"Restart your node with metrics flags",description:"Description",source:"@site/docs/nodes/itn-enable-telemetry-nodes.md",sourceDirName:"nodes",slug:"/nodes/itn-enable-telemetry-nodes",permalink:"/pr-preview/pr-688/nodes/itn-enable-telemetry-nodes",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-enable-telemetry-nodes.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"How to submit",id:"how-to-submit",level:2},{value:"Example",id:"example",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"restart-your-node-with-metrics-flags"},"Restart your node with metrics flags"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Add metrics flags to your node start command\nand restart your node to apply it."),(0,o.kt)("p",null,"The metrics endpoint will gather your node's data\nto track your uptime."),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"--metrics.tls=false --metrics --metrics.endpoint otel.celestia.tools:4318"),"\nto your node's start command and restart your node.")),(0,o.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are having troubles after a node\nrestart, please do the following:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Keep restarting the node process until\nit works."),(0,o.kt)("li",{parentName:"ul"},"Do not be afraid of warnings or occasional\nerrors - as long as blocks are syncing, it's fine"),(0,o.kt)("li",{parentName:"ul"},"Try using a different RPC from the list ",(0,o.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/blockspace-race/#rpc-endpoints"},"here")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points if we can see data from your Celestia Node"),(0,o.kt)("li",{parentName:"ol"},"No points if we cannot"),(0,o.kt)("li",{parentName:"ol"},"Note that we will keep track of your metrics throughout the whole\nITN so make sure you leave it connected throughout all phases."),(0,o.kt)("li",{parentName:"ol"},"Make sure you can see your Node ID on ",(0,o.kt)("a",{parentName:"li",href:"https://tiascan.com"},"Tiascan")," in\nyour respective node category. You can also check your node uptime\nstatus there.")),(0,o.kt)("h2",{id:"how-to-submit"},"How to submit"),(0,o.kt)("p",null,"Please submit your Node ID so that we can confirm it is pushing metrics."),(0,o.kt)("p",null,"Submission link can be found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"12D3KooWFXnqPbzeAEwMuuaxuEsBG1XV6xVDqzNZJyk8qYxEAVDw")))}d.isMDXComponent=!0}}]);