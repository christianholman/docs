"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3299],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),r=a(7294),l=a(4334),o=a(2389),u=a(7392),i=a(7094),s=a(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:o,defaultValue:p,values:m,groupId:f,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,u.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[N,T]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=f){const e=v[f];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,a=O.indexOf(t),n=k[a].value;n!==N&&(C(t),T(n),null!=f&&w(f,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:S},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},1309:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var n=a(3117),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const u={sidebar_label:"Full Storage Node"},i="Setting up a Celestia Full Storage Node",s={unversionedId:"nodes/full-storage-node",id:"nodes/full-storage-node",title:"Setting up a Celestia Full Storage Node",description:"This tutorial will guide you through setting up a Celestia Full Storage",source:"@site/docs/nodes/full-storage-node.mdx",sourceDirName:"nodes",slug:"/nodes/full-storage-node",permalink:"/nodes/full-storage-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/full-storage-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Full Storage Node"},sidebar:"nodes",previous:{title:"Bridge Node",permalink:"/nodes/bridge-node"},next:{title:"Consensus",permalink:"/category/consensus"}},c={},d=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your full storage node",id:"setting-up-your-full-storage-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Install Celestia node",id:"install-celestia-node",level:2},{value:"Run the full storage node",id:"run-the-full-storage-node",level:3},{value:"Initialize the full storage node",id:"initialize-the-full-storage-node",level:4},{value:"Start the full storage node",id:"start-the-full-storage-node",level:4},{value:"Optional: run the full storage node with a custom key",id:"optional-run-the-full-storage-node-with-a-custom-key",level:3},{value:"Optional: start the full storage node with SystemD",id:"optional-start-the-full-storage-node-with-systemd",level:3}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-celestia-full-storage-node"},"Setting up a Celestia Full Storage Node"),(0,r.kt)("p",null,"This tutorial will guide you through setting up a Celestia Full Storage\nNode, which is a Celestia node that doesn't connect to Celestia App\n(hence not a full node) but stores all the data."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"The following hardware minimum requirements are recommended for running\nthe full storage node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,r.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,r.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,r.kt)("h2",{id:"setting-up-your-full-storage-node"},"Setting up your full storage node"),(0,r.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,r.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,r.kt)("p",null,"You can follow the tutorial for setting up your dependencies ",(0,r.kt)("a",{parentName:"p",href:"/nodes/environment"},"here")),(0,r.kt)("h2",{id:"install-celestia-node"},"Install Celestia node"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Make sure that you have at least 250+ Gb of free space for\nCelestia Full Storage Node")),(0,r.kt)("p",null,"You can follow the tutorial for installing Celestia Node ",(0,r.kt)("a",{parentName:"p",href:"/nodes/celestia-node"},"here")),(0,r.kt)("h3",{id:"run-the-full-storage-node"},"Run the full storage node"),(0,r.kt)("h4",{id:"initialize-the-full-storage-node"},"Initialize the full storage node"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)(l.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full init --p2p.network arabica\n"))),(0,r.kt)(o.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full init\n")))),(0,r.kt)("h4",{id:"start-the-full-storage-node"},"Start the full storage node"),(0,r.kt)("p",null,"Start the Full Storage Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: In order for access to the ability to get/submit state-related\ninformation, such as the ability to submit PayForData transactions,\nor query for the node's account balance, a gRPC endpoint of a validator\n(core) node must be passed as directed below.")),(0,r.kt)("p",null,"A note on ports:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can add the port\nafter the IP address or use the  ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer.")),(0,r.kt)(l.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --core.grpc.port <port> --p2p.network arabica\n"))),(0,r.kt)(o.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip <ip-address>:<port>\n")))),(0,r.kt)("p",null,"If you would like to find example RPC endpoints, check out the list of\nresources ",(0,r.kt)("a",{parentName:"p",href:"./mocha-testnet"},"here"),"."),(0,r.kt)("p",null,"You can create your key for your node by following the ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,r.kt)("a",{parentName:"p",href:"/developers/celestia-node-key"},"here")),(0,r.kt)("p",null,"Once you start the Full Node, a wallet key will be generated for you.\nYou will need to fund that address with testnet tokens to pay for\nPayForData transactions.\nYou can find the address by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type full --keyring-backend test\n")),(0,r.kt)("p",null,"You have two networks to get testnet tokens from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./arabica-devnet"},"Arabica")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./mocha-testnet"},"Mocha"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: If you are running a full-storage node for your sovereign\nrollup, it is highly recommended to request Arabica devnet tokens\nas Arabica has the latest changes that can be used to\ntest for developing your sovereign rollup. You can still use\nMocha Testnet as well, it is just mostly used for Validator operations.")),(0,r.kt)("h3",{id:"optional-run-the-full-storage-node-with-a-custom-key"},"Optional: run the full storage node with a custom key"),(0,r.kt)("p",null,"In order to run a full storage node using a custom key:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The custom key must exist inside the celestia full storage node directory\nat the correct path (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.celestia-full/keys/keyring-test"),")"),(0,r.kt)("li",{parentName:"ol"},"The name of the custom key must be passed upon ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),", like so:")),(0,r.kt)(l.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --core.grpc.port <port> --keyring.accname <name-of-custom-key> --p2p.network arabica\n"))),(0,r.kt)(o.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip <ip-address>:<port> --keyring.accname <name-of-custom-key>\n")))),(0,r.kt)("h3",{id:"optional-start-the-full-storage-node-with-systemd"},"Optional: start the full storage node with SystemD"),(0,r.kt)("p",null,"Follow the tutorial on setting up the full storage node as a background\nprocess with SystemD ",(0,r.kt)("a",{parentName:"p",href:"./systemd"},"here"),"."),(0,r.kt)("p",null,"With that, you are now running a Celestia Full Storage Node."))}m.isMDXComponent=!0}}]);