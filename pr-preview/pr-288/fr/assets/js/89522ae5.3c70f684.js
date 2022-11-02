"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5293],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(4334),o=n(2389),i=n(7392),s=n(7094),c=n(2466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:b,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=b){const e=y[b];null!=e&&e!==N&&h.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==N&&(E(t),T(a),null!=b&&w(b,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},v)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:C},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},5166:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={sidebar_label:"Installing Celestia Node"},s="Celestia Node",c={unversionedId:"developers/celestia-node",id:"developers/celestia-node",title:"Celestia Node",description:"This tutorial goes over building and installing celestia-node. This",source:"@site/docs/developers/celestia-node.mdx",sourceDirName:"developers",slug:"/developers/celestia-node",permalink:"/pr-preview/pr-288/fr/developers/celestia-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Celestia Node"},sidebar:"developers",previous:{title:"Celestia Node",permalink:"/pr-preview/pr-288/fr/category/celestia-node"},next:{title:"Node Tutorial",permalink:"/pr-preview/pr-288/fr/developers/node-tutorial"}},u={},d=[{value:"Install Celestia Node",id:"install-celestia-node",level:2},{value:"Network Selection",id:"network-selection",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"celestia-node"},"Celestia Node"),(0,r.kt)("p",null,"This tutorial goes over building and installing celestia-node. This\ntutorial assumes you completed the steps in setting up your development\nenvironment ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-288/fr/developers/environment"},"here"),"."),(0,r.kt)("h2",{id:"install-celestia-node"},"Install Celestia Node"),(0,r.kt)(l.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("p",null,"Installing celestia-node for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,r.kt)("p",null,"Install the celestia-node binary by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.4.2\nmake install\n")),(0,r.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-output"},"celestia version\nSemantic version: v0.4.2\nCommit: 75b122f736d0db758ef840a4bf3b2e6635e823bd\nBuild Date: Thu Oct 20 22:48:39 EDT 2022\nSystem version: arm64/darwin\nGolang version: go1.19.1\n"))),(0,r.kt)(o.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)("p",null,"Installing celestia-node for Mamaki Testnet means installing a specific version\nto be compatible with the network."),(0,r.kt)("p",null,"Install the celestia-node binary by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.0-rc2\nmake install\n")),(0,r.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia version\nSemantic version: v0.3.0-rc2\nCommit: 89892d8b96660e334741987d84546c36f0996fbe\n")))),(0,r.kt)("h2",{id:"network-selection"},"Network Selection"),(0,r.kt)(l.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("p",null,"You can perform network selection in celestia-node between Arabica and\nMamaki. However, you should note that networks work best on the celestia-node\nversions mentioned above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init\ncelestia light start --node.network arabica\n"))),(0,r.kt)(o.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)("p",null,"Network selection on v0.3.0-rc2 is not available."))))}m.isMDXComponent=!0}}]);