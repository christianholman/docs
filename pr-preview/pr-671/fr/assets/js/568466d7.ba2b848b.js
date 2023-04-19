"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),s=n(1980),p=n(7392),c=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,p]=m({queryString:n,groupId:a}),[u,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=s??u;return k({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),y(e)}),[p,y,l]),tabValues:l}}var h=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==i&&(u(t),s(a))},k=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:d},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=y(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={sidebar_label:"Wallet with Celestia Node"},s="Create a wallet with Celestia Node",p={unversionedId:"developers/celestia-node-key",id:"developers/celestia-node-key",title:"Create a wallet with Celestia Node",description:"This tutorial will go over using the cel-key utility",source:"@site/docs/developers/celestia-node-key.mdx",sourceDirName:"developers",slug:"/developers/celestia-node-key",permalink:"/pr-preview/pr-671/fr/developers/celestia-node-key",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-node-key.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Wallet with Celestia Node"},sidebar:"developers",previous:{title:"Wallet with Celestia App",permalink:"/pr-preview/pr-671/fr/developers/celestia-app-wallet"},next:{title:"Node API",permalink:"/pr-preview/pr-671/fr/category/node-api"}},c={},u=[{value:"Using the <code>cel-key</code> utility",id:"using-the-cel-key-utility",level:2},{value:"Installation",id:"installation",level:3},{value:"Steps for generating node keys",id:"steps-for-generating-node-keys",level:3},{value:"Steps for exporting node keys",id:"steps-for-exporting-node-keys",level:3},{value:"Steps for importing node keys",id:"steps-for-importing-node-keys",level:3},{value:"View all options for <code>cel-key</code>",id:"view-all-options-for-cel-key",level:3},{value:"Docker and <code>cel-key</code>",id:"docker-and-cel-key",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Running your node",id:"running-your-node",level:3},{value:"Mounting existing keys to container",id:"mounting-existing-keys-to-container",level:3}],d={toc:u},k="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-wallet-with-celestia-node"},"Create a wallet with Celestia Node"),(0,r.kt)("p",null,"This tutorial will go over using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," utility\nto generate a wallet on ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node"),"."),(0,r.kt)("p",null,"While this tutorial will go over installation process\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key"),", it is recommended that you complete\nthe following prerequisites first:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-671/fr/nodes/environment"},"Setting Up Your Environment"))),(0,r.kt)("p",null,"Once you completed the prerequisite, you can proceed with this\ntutorial."),(0,r.kt)("h2",{id:"using-the-cel-key-utility"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"cel-key")," utility"),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository is a utility called ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," that uses\nthe key utility provided by Cosmos-SDK under the hood. The utility can be\nused to ",(0,r.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),", and manage keys for any DA node\ntype ",(0,r.kt)("inlineCode",{parentName:"p"},"(bridge || full || light)"),", or just keys in general."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You need to first pull down the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\n")),(0,r.kt)("p",null,"It can be built using either of the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# dumps binary in current working directory, accessible via `./cel-key`\nmake cel-key\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# installs binary in GOBIN path, accessible via `cel-key`\nmake install-key\n")),(0,r.kt)("p",null,"For the purpose of this guide, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"make cel-key")," command."),(0,r.kt)("h3",{id:"steps-for-generating-node-keys"},"Steps for generating node keys"),(0,r.kt)(l.Z,{groupId:"node-type",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,r.kt)("p",null,"To generate a key for a Celestia bridge node, do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type bridge --p2p.network <network>\n")),(0,r.kt)("p",null,"This will load the key ",(0,r.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the bridge node.")),(0,r.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)("p",null,"To generate a key for a Celestia full node, do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type full --p2p.network <network>\n")),(0,r.kt)("p",null,"This will load the key ",(0,r.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the full node.")),(0,r.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,r.kt)("p",null,"To generate a key for a Celestia light node, do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type light --p2p.network <network>\n")),(0,r.kt)("p",null,"This will load the key ",(0,r.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the light node."))),(0,r.kt)("p",null,"Further flags you can use to customize your key are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--node.store"),": Specifies a different directory you can use to\nsave your node data and configurations. Expects a path to a directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--p2p.network"),": Specifies which network you want the key for. Values\nare ",(0,r.kt)("inlineCode",{parentName:"li"},"arabica")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mocha"),". Please note the default network will be ",(0,r.kt)("inlineCode",{parentName:"li"},"mocha"),".")),(0,r.kt)("p",null,"Keep in mind that your ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," will only pick up keys that\nare inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"node.store")," directory under ",(0,r.kt)("inlineCode",{parentName:"p"},"/keys")," so you should make\nsure to point ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," utility to the correct directory via the\n",(0,r.kt)("inlineCode",{parentName:"p"},"node.store")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"p2p.network")," flags if you have specified a custom\ndirectory or network other than Mocha."),(0,r.kt)("p",null,"Also keep in mind that if you do not specify a network with ",(0,r.kt)("inlineCode",{parentName:"p"},"--p2p.network"),",\nthe default one will always be ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha"),"."),(0,r.kt)("h3",{id:"steps-for-exporting-node-keys"},"Steps for exporting node keys"),(0,r.kt)(l.Z,{groupId:"node-type",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,r.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type bridge --p2p.network <network>\n"))),(0,r.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type full --p2p.network <network>\n"))),(0,r.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,r.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type light --p2p.network <network>\n")))),(0,r.kt)("h3",{id:"steps-for-importing-node-keys"},"Steps for importing node keys"),(0,r.kt)(l.Z,{groupId:"node-type",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,r.kt)("p",null,"Importing from a mnemonic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type bridge --p2p.network <network>\n")),(0,r.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type bridge --p2p.network <network>\n"))),(0,r.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)("p",null,"Importing from a mnemonic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type full --p2p.network <network>\n")),(0,r.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type full --p2p.network <network>\n"))),(0,r.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,r.kt)("p",null,"Importing from a mnemonic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type light --p2p.network <network>\n")),(0,r.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type light --p2p.network <network>\n")))),(0,r.kt)("h3",{id:"view-all-options-for-cel-key"},"View all options for ",(0,r.kt)("inlineCode",{parentName:"h3"},"cel-key")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key --help\n")),(0,r.kt)("h2",{id:"docker-and-cel-key"},"Docker and ",(0,r.kt)("inlineCode",{parentName:"h2"},"cel-key")),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker installed on your machine"),(0,r.kt)("li",{parentName:"ul"},"Understanding of the ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-671/fr/nodes/docker-images"},"guide"),"\non how to run ",(0,r.kt)("inlineCode",{parentName:"li"},"celestia-node")," with Docker.")),(0,r.kt)("h3",{id:"running-your-node"},"Running your node"),(0,r.kt)("p",null,"Run the Docker image (in this example, we are using a Light Node):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name celestia-node -e NODE_TYPE=light -e P2P_NETWORK=mocha -p 26659:26659 \\\nghcr.io/celestiaorg/celestia-node:sha-747c9e5 celestia light start \\\n--core.ip https://rpc-mocha.pops.one \\\n--gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("p",null,"List active containers in another window with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("p",null,"The response will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS          PORTS      NAMES\n<container_id>   celestia-node   "/entrypoint.sh cele\u2026"   22 seconds ago   Up 21 seconds   2121/tcp   docker-compose-test-celestia-1\n')),(0,r.kt)("p",null,"Interact with the container by replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"<container_id>")," for the container ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti <container_id> /bin/bash\n")),(0,r.kt)("p",null,"Now, interact with ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," to check for the key that was autogenerated when\nyou started the node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./cel-key list --keyring-backend test --node.type light\n")),(0,r.kt)("p",null,"You can also export your key from the container. In the next section, you'll\nlearn how to mount existing keys to the container."),(0,r.kt)("h3",{id:"mounting-existing-keys-to-container"},"Mounting existing keys to container"),(0,r.kt)("p",null,"In this example, we'll be mounting an existing key to the container. We're also\nusing an existing image called ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node"),". This will mount the entire\n",(0,r.kt)("inlineCode",{parentName:"p"},"/.celestia-light-<p2p_network>/keys")," directory to your image."),(0,r.kt)("p",null,"Write a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," to accomplish this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.8'\nservices:\n  celestia:\n    image: celestia-node\n    environment:\n      - NODE_TYPE=light\n    command: celestia light start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha --keyring.accname my_celes_key\n    volumes:\n      - ${PWD}/keys:/root/.celestia-light-mocha/keys\n    ports:\n      - 26659:26659\n")),(0,r.kt)("p",null,"Start the container by running the following command in the directory with your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,r.kt)("p",null,"List active containers in another window with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("p",null,"The response will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS          PORTS      NAMES\n<container_id>   celestia-node   "/entrypoint.sh cele\u2026"   22 seconds ago   Up 21 seconds   2121/tcp   docker-compose-test-celestia-1\n')),(0,r.kt)("p",null,"Interact with the container by replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"<container_id>")," for the container ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti <container_id> /bin/bash\n")),(0,r.kt)("p",null,"Now, interact with ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," to check your address matches the address you\nexpect with the key you mounted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'root@<container_id>:/# ./cel-key list --keyring-backend test --node.type light\nusing directory:  ~/.celestia-light-mocha/keys\n- address: celestia1wkhyhr7ngf0ayqlpnsnxg4d72hfs5453dvunm9\n  name: my_celes_key\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A1/NsoY0RGL7Hqt4VWLg441GQKJsZ2fBUnZXipgns8oV"}\'\n  type: local\n')))}m.isMDXComponent=!0}}]);