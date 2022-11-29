"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1747],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4229:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_label:"Run The Wordle Chain"},i="Run the Wordle Chain",l={unversionedId:"developers/run-wordle",id:"developers/run-wordle",title:"Run the Wordle Chain",description:"Building and Running Wordle Chain",source:"@site/docs/developers/run-wordle.md",sourceDirName:"developers",slug:"/developers/run-wordle",permalink:"/pr-preview/pr-296/zh/developers/run-wordle",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/run-wordle.md",tags:[],version:"current",frontMatter:{sidebar_label:"Run The Wordle Chain"},sidebar:"developers",previous:{title:"Keeper",permalink:"/pr-preview/pr-296/zh/developers/wordle-keeper"},next:{title:"CosmWasm",permalink:"/pr-preview/pr-296/zh/category/cosmwasm"}},s={},u=[{value:"Building and Running Wordle Chain",id:"building-and-running-wordle-chain",level:2},{value:"Extending in the Future",id:"extending-in-the-future",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-the-wordle-chain"},"Run the Wordle Chain"),(0,o.kt)("h2",{id:"building-and-running-wordle-chain"},"Building and Running Wordle Chain"),(0,o.kt)("p",null,"We have a handy ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh")," found in this repo\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/devrel-tools"},"here"),"."),(0,o.kt)("p",null,"We can copy it over to our directory with the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# From inside the `wordle` directory\ncd ..\ngit clone https://github.com/celestiaorg/devrel-tools\ncp devrel-tools/wordle/init.sh wordle/\ncd wordle/\n")),(0,o.kt)("p",null,"This copies over our ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh")," script to initialize our\nWordle Rollup."),(0,o.kt)("p",null,"You can view the contents of the script to see how we\ninitialize the Wordle Rollup."),(0,o.kt)("p",null,"You can initialize the script with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bash init.sh\n")),(0,o.kt)("p",null,"With that, we have kickstarted our ",(0,o.kt)("inlineCode",{parentName:"p"},"wordled")," network!"),(0,o.kt)("p",null,"In another window, run the following to submit a Wordle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wordled tx wordle submit-wordle giant --from alice --keyring-backend test --chain-id wordle -b async -y\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: We are submitting a transaction asynchronously due to avoiding\nany timeout errors. With Rollmint as a replacement to Tendermint, we\nneed to wait for Celestia's Data-Availability network to ensure a block\nwas included from Wordle, before proceeding to the next block. Currently,\nin Rollmint, the single aggregator is not moving forward with the next block\nproduction as long as it is trying to submit the current block to the DA network.\nIn the future, with leader selection, block production and sync logic improves\ndramatically.")),(0,o.kt)("p",null,"This will ask you to confirm the transaction with the following message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body":{\n    "messages":[\n       {\n          "@type":"/YazzyYaz.wordle.wordle.MsgSubmitWordle",\n          "creator":"cosmos17lk3fgutf00pd5s8zwz5fmefjsdv4wvzyg7d74",\n          "word":"giant"\n       }\n    ],\n    "memo":"",\n    "timeout_height":"0",\n    "extension_options":[\n    ],\n    "non_critical_extension_options":[\n    ]\n  },\n  "auth_info":{\n    "signer_infos":[\n    ],\n    "fee":{\n       "amount":[\n       ],\n       "gas_limit":"200000",\n       "payer":"",\n       "granter":""\n    }\n  },\n  "signatures":[\n  ]\n}\n')),(0,o.kt)("p",null,"Cosmos-SDK will ask you to confirm the transaction here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"confirm transaction before signing and broadcasting [y/N]:\n")),(0,o.kt)("p",null,"Confirm with a Y."),(0,o.kt)("p",null,"You will then get a response with a transaction hash as shown here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'code: 19\ncodespace: sdk\ndata: ""\nevents: []\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: ""\ntimestamp: ""\ntx: null\ntxhash: F70C04CE5E1EEC5B7C0E5050B3BEDA39F74C33D73ED504E42A9E317E7D7FE128\n')),(0,o.kt)("p",null,"Note, this does not mean the transaction was included in the block yet.\nLet's query the transaction hash to check whether it has been included in\nthe block yet or if there are any errors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wordled query tx --type=hash F70C04CE5E1EEC5B7C0E5050B3BEDA39F74C33D73ED504E42A9E317E7D7FE128 --chain-id wordle --output json | jq -r '.raw_log'\n")),(0,o.kt)("p",null,"This should display an output like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[{"events":[{"type":"message","attributes":[{"key":"action","value":"submit_wordle"\n}]}]}]\n')),(0,o.kt)("p",null,"Test out a few things for fun:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wordled tx wordle submit-guess 12345 --from alice --keyring-backend test --chain-id wordle -b async -y\n")),(0,o.kt)("p",null,"After confirming the transaction, query the ",(0,o.kt)("inlineCode",{parentName:"p"},"txhash"),"\ngiven the same way you did above. You will see the response shows\nan Invalid Error because you submitted integers."),(0,o.kt)("p",null,"Now try:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wordled tx wordle submit-guess ABCDEFG --from alice --keyring-backend test --chain-id wordle -b async -y\n")),(0,o.kt)("p",null,"After confirming the transaction, query the ",(0,o.kt)("inlineCode",{parentName:"p"},"txhash")," given the same\nway you did above. You will see the response shows\nan Invalid Error because you submitted a word larger than 5 characters."),(0,o.kt)("p",null,"Now try to submit another wordle even though one was already submitted"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wordled tx wordle submit-wordle meter --from bob --keyring-backend test --chain-id wordle -b async -y\n")),(0,o.kt)("p",null,"After submitting the transactions and confirming, query the ",(0,o.kt)("inlineCode",{parentName:"p"},"txhash"),"\ngiven the same way you did above. You will get an error that a wordle\nhas already been submitted for the day."),(0,o.kt)("p",null,"Now let\u2019s try to guess a five letter word:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wordled tx wordle submit-guess least --from bob --keyring-backend test --chain-id wordle -b async -y\n")),(0,o.kt)("p",null,"After submitting the transactions and confirming, query the ",(0,o.kt)("inlineCode",{parentName:"p"},"txhash"),"\ngiven the same way you did above. Given you didn\u2019t guess the correct\nword, it will increment the guess count for Bob\u2019s account."),(0,o.kt)("p",null,"We can verify this by querying the list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wordled q wordle list-guess --output json\n")),(0,o.kt)("p",null,"This outputs all Guess objects submitted so far, with the index\nbeing today\u2019s date and the address of the submitter."),(0,o.kt)("p",null,"With that, we implemented a basic example of Wordle using\nCosmos-SDK and Ignite and Rollmint. Read on to how you can\nextend the code base."),(0,o.kt)("h2",{id:"extending-in-the-future"},"Extending in the Future"),(0,o.kt)("p",null,"You can extend the codebase and improve this tutorial by checking\nout the repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/wordle"},"here"),"."),(0,o.kt)("p",null,"There are many ways this codebase can be extended:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can improve messaging around when you guess the correct word."),(0,o.kt)("li",{parentName:"ol"},"You can hash the word prior to submitting it to the chain,\nensuring the hashing is local so that it\u2019s not revealed via\nfront-running by others monitoring the plaintext string when\nit\u2019s submitted on-chain."),(0,o.kt)("li",{parentName:"ol"},"You can improve the UI in terminal using a nice interface for\nWordle. Some examples are ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nimblebun/wordle-cli"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},"You can improve current date to stick to a specific timezone."),(0,o.kt)("li",{parentName:"ol"},"You can create a bot that submits a wordle every day at a specific time."),(0,o.kt)("li",{parentName:"ol"},"You can create a vue.js front-end with Ignite using example open-source\nrepositories ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/yyx990803/vue-wordle"},"here")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/xudafeng/wordle"},"here"),".")))}c.isMDXComponent=!0}}]);