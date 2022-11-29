"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8499],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return d}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_label:"Scaffolding The Chain"},l="Ignite and Scaffolding the Wordle Chain",i={unversionedId:"developers/scaffold-wordle",id:"developers/scaffold-wordle",title:"Ignite and Scaffolding the Wordle Chain",description:"Ignite",source:"@site/docs/developers/scaffold-wordle.md",sourceDirName:"developers",slug:"/developers/scaffold-wordle",permalink:"/pr-preview/pr-296/zh/developers/scaffold-wordle",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/scaffold-wordle.md",tags:[],version:"current",frontMatter:{sidebar_label:"Scaffolding The Chain"},sidebar:"developers",previous:{title:"Wordle Overview",permalink:"/pr-preview/pr-296/zh/developers/wordle"},next:{title:"Run a Light Node",permalink:"/pr-preview/pr-296/zh/developers/wordle-node"}},c={},d=[{value:"Ignite",id:"ignite",level:2},{value:"Scaffolding the Wordle Chain",id:"scaffolding-the-wordle-chain",level:2},{value:"Wordle Directory",id:"wordle-directory",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ignite-and-scaffolding-the-wordle-chain"},"Ignite and Scaffolding the Wordle Chain"),(0,o.kt)("h2",{id:"ignite"},"Ignite"),(0,o.kt)("p",null,"Ignite is an amazing CLI tool to help us get started building\nour own blockchains for cosmos-sdk apps. It provides lots of\npower toolings and scaffoldings for adding messages, types,\nand modules with a host of cosmos-sdk libraries provided."),(0,o.kt)("p",null,"You can read more about Ignite ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ignite.com/"},"here"),"."),(0,o.kt)("p",null,"To install Ignite, you can run this command in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://get.ignite.com/cli | bash\nsudo mv ignite /usr/local/bin/\n")),(0,o.kt)("p",null,"This installs Ignite CLI in your local machine.\nThis tutorial uses a MacOS but it should work for Windows.\nFor Windows users, check out the Ignite docs on installation\nfor Windows machines."),(0,o.kt)("p",null,"Now, refresh your terminal using ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," or open a new terminal\nsession for the change to take place."),(0,o.kt)("p",null,"If you run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ignite --help\n")),(0,o.kt)("p",null,"You should see an output of help commands meaning Ignite\nwas installed successfully!"),(0,o.kt)("h2",{id:"scaffolding-the-wordle-chain"},"Scaffolding the Wordle Chain"),(0,o.kt)("p",null,"Now, comes the fun part, creating a new blockchain! With Ignite,\nthe process is pretty easy and straightforward."),(0,o.kt)("p",null,"Ignite CLI comes with several scaffolding commands that are\ndesigned to make development more straightforward by creating\neverything you need to build your blockchain."),(0,o.kt)("p",null,"First, we will use Ignite CLI to build the foundation of a fresh\nCosmos SDK blockchain. Ignite minimizes how much blockchain code\nyou must write yourself. If you are coming from the EVM-world, think of\nIgnite as a Cosmos-SDK version of Foundry or Hardhat but specifically\ndesigned to build blockchains."),(0,o.kt)("p",null,"We first run the following command to setup our project for\nour new blockchain, Wordle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold chain github.com/YazzyYaz/wordle --no-module\n")),(0,o.kt)("p",null,"This command scaffolds a new chain directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"wordle"),"\nin your local directory from which you ran the command. Notice\nthat we passed the ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-module")," flag, this is because we will be\ncreating the module after."),(0,o.kt)("h2",{id:"wordle-directory"},"Wordle Directory"),(0,o.kt)("p",null,"Now, it\u2019s time to enter the directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd wordle\n")),(0,o.kt)("p",null,"Inside you will see several directories and architecture for\nyour cosmos-sdk blockchain."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"File/directory"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"app/"),(0,o.kt)("td",{parentName:"tr",align:null},"Files that wire together the blockchain. The most important file is ",(0,o.kt)("inlineCode",{parentName:"td"},"app.go")," that contains type definition of the blockchain and functions to create and initialize it.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cmd/"),(0,o.kt)("td",{parentName:"tr",align:null},"The main package responsible for the CLI of compiled binary.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"docs/"),(0,o.kt)("td",{parentName:"tr",align:null},"Directory for project documentation. By default, an OpenAPI spec is generated.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"proto/"),(0,o.kt)("td",{parentName:"tr",align:null},"Protocol buffer files describing the data structure.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"testutil/"),(0,o.kt)("td",{parentName:"tr",align:null},"Helper functions for testing.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"vue/"),(0,o.kt)("td",{parentName:"tr",align:null},"A Vue 3 web app template.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"x/"),(0,o.kt)("td",{parentName:"tr",align:null},"Cosmos SDK modules and custom modules.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config.yml"),(0,o.kt)("td",{parentName:"tr",align:null},"A configuration file for customizing a chain in development.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"readme.md"),(0,o.kt)("td",{parentName:"tr",align:null},"A readme file for your sovereign application-specific blockchain project.")))),(0,o.kt)("p",null,"Going over each one is outside the scope of this guide, but we encourage you\nto read about it ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ignite.com/kb"},"here"),"."),(0,o.kt)("p",null,"Most of the tutorial work will happen inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," directory."))}u.isMDXComponent=!0}}]);