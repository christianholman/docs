"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1615],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||l;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),s=a(6550),i=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=f({queryString:a,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=i??p;return b({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),m(e)}),[c,m,l]),tabValues:l}}var g=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(p(t),i(n))},b=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:b,onClick:d},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=m(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},464:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.12.0","app-latest-sha":"1943735bdefc751ae98732760921d49a3534a70a","core-latest-tag":"v1.15.0-tm-v0.34.23","core-latest-sha":"77a1de71feadebaa89c5ecaef0309fd8b9f2f921","node-latest-tag":"v0.7.1","node-latest-sha":"c958fd3b3921ca993489d88530e59fe7f337bf4d"})},8842:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.12.1","app-latest-sha":"f2f855a62ee1533823fb2fe1819bc6873f108c35","core-latest-tag":"v1.17.0-tm-v0.34.27","core-latest-sha":"e3bad3d08ce3372fb7473b9e13be00cdaaa4fa91","node-latest-tag":"v0.8.0","node-latest-sha":"ef582655342c73384a66314972428b152227e428"})},8549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.11.1","app-latest-sha":"a1eb594d43137ded5f9c1062168d26139a251e16","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.6.4","node-latest-sha":"747c9e593542dfb32a933c731a9cd74b1fab897f"})},4475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var n=a(7462),r=(a(7294),a(3905)),l=a(8549),o=a(464),s=a(8842),i=a(4866),c=a(5162);const u={sidebar_label:"Installing celestia-app"},p="celestia-app",d={unversionedId:"nodes/celestia-app",id:"nodes/celestia-app",title:"celestia-app",description:"This tutorial will guide you through building celestia-app. This",source:"@site/docs/nodes/celestia-app.mdx",sourceDirName:"nodes",slug:"/nodes/celestia-app",permalink:"/pr-preview/pr-601/nodes/celestia-app",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-app.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installing celestia-app"},sidebar:"nodes",previous:{title:"Installing celestia-node",permalink:"/pr-preview/pr-601/nodes/celestia-node"},next:{title:"Deciding which node to run",permalink:"/pr-preview/pr-601/nodes/decide-node"}},b={},f=[{value:"Install celestia-app",id:"install-celestia-app",level:2}],m={toc:f},g="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"celestia-app"},"celestia-app"),(0,r.kt)("p",null,"This tutorial will guide you through building celestia-app. This\ntutorial presumes you completed the steps in setting up your\nown environment ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-601/nodes/environment"},"here"),"."),(0,r.kt)("h2",{id:"install-celestia-app"},"Install celestia-app"),(0,r.kt)("p",null,"The steps below will create a binary file named ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-appd"),"\ninside ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," folder which will be used later to run the node.\nBe sure to select the correct network to install the binary for."),(0,r.kt)(i.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME ",(0,r.kt)("br",null),"rm -rf celestia-app ",(0,r.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-app.git ",(0,r.kt)("br",null),"cd celestia-app/ ",(0,r.kt)("br",null),"APP_VERSION=",s.Z["app-latest-tag"]," ",(0,r.kt)("br",null),"git checkout tags/$APP_VERSION -b $APP_VERSION ",(0,r.kt)("br",null),"make install ",(0,r.kt)("br",null)))),(0,r.kt)(c.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME ",(0,r.kt)("br",null),"rm -rf celestia-app ",(0,r.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-app.git ",(0,r.kt)("br",null),"cd celestia-app/ ",(0,r.kt)("br",null),"APP_VERSION=",l.Z["app-latest-tag"]," ",(0,r.kt)("br",null),"git checkout tags/$APP_VERSION -b $APP_VERSION ",(0,r.kt)("br",null),"make install ",(0,r.kt)("br",null)))),(0,r.kt)(c.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME ",(0,r.kt)("br",null),"rm -rf celestia-app ",(0,r.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-app.git ",(0,r.kt)("br",null),"cd celestia-app/ ",(0,r.kt)("br",null),"APP_VERSION=",o.Z["app-latest-tag"]," ",(0,r.kt)("br",null),"git checkout tags/$APP_VERSION -b $APP_VERSION ",(0,r.kt)("br",null),"make install ",(0,r.kt)("br",null))))),(0,r.kt)("p",null,"To check if the binary was successfully compiled you can run the binary\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd --help\n")),(0,r.kt)("p",null,"You should see a similar output (with helpful example commands):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Start celestia-app\n\nUsage:\n  celestia-appd [command]\n\nAvailable Commands:\n  add-genesis-account Add a genesis account to genesis.json\n  collect-gentxs      Collect genesis txs and output a genesis.json file\n  config              Create or query an application CLI configuration file\n  debug               Tool for helping with debugging your application\n  export              Export state to JSON\n  gentx               Generate a genesis tx carrying a self delegation\n  help                Help about any command\n  init                Initialize private validator, p2p, genesis, and application configuration files\n  keys                Manage your application\'s keys\n  migrate             Migrate genesis to a specified target version\n  query               Querying subcommands\n  rollback            rollback tendermint state by one height\n  rollback            rollback cosmos-sdk and tendermint state by one height\n  start               Run the full node\n  status              Query remote node for status\n  tendermint          Tendermint subcommands\n  tx                  Transactions subcommands\n  validate-genesis    validates the genesis file at the default location or at the location passed as an arg\n  version             Print the application binary version information\n\nFlags:\n  -h, --help                help for celestia-appd\n      --home string         directory for config and data (default "/root/.celestia-app")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nUse "celestia-appd [command] --help" for more information about a command.\n')))}h.isMDXComponent=!0}}]);