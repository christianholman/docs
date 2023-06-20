"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6118],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>g});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),p=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=l,g=c["".concat(i,".").concat(u)]||c[u]||m[u]||o;return a?t.createElement(g,r(r({ref:n},d),{},{components:a})):t.createElement(g,r({ref:n},d))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:l,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4349:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=a(7462),l=(a(7294),a(3905));const o={sidebar_label:"Helpful CLI commands",description:"Some of the most helpful Celestia App CLI commands."},r="Helpful CLI commands",s={unversionedId:"nodes/celestia-app-commands",id:"nodes/celestia-app-commands",title:"Helpful CLI commands",description:"Some of the most helpful Celestia App CLI commands.",source:"@site/docs/nodes/celestia-app-commands.md",sourceDirName:"nodes",slug:"/nodes/celestia-app-commands",permalink:"/pr-preview/pr-819/nodes/celestia-app-commands",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-app-commands.md",tags:[],version:"current",frontMatter:{sidebar_label:"Helpful CLI commands",description:"Some of the most helpful Celestia App CLI commands."},sidebar:"nodes",previous:{title:"Create a Celestia testnet",permalink:"/pr-preview/pr-819/nodes/instantiate-testnet"},next:{title:"SystemD",permalink:"/pr-preview/pr-819/nodes/systemd"}},i={},p=[{value:"Creating a wallet",id:"creating-a-wallet",level:2},{value:"Key management",id:"key-management",level:2},{value:"Importing and exporting keys",id:"importing-and-exporting-keys",level:3},{value:"Querying subcommands",id:"querying-subcommands",level:2},{value:"Token management",id:"token-management",level:2},{value:"Governance",id:"governance",level:2},{value:"Claim validator rewards",id:"claim-validator-rewards",level:2},{value:"Delegate &amp; undelegate tokens",id:"delegate--undelegate-tokens",level:2},{value:"Unjailing the validator",id:"unjailing-the-validator",level:2},{value:"How to export logs with SystemD",id:"how-to-export-logs-with-systemd",level:2},{value:"Signing genesis for a new network",id:"signing-genesis-for-a-new-network",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...a}=e;return(0,l.kt)(c,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"helpful-cli-commands"},"Helpful CLI commands"),(0,l.kt)("p",null,"View all options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia-appd --help\nStart celestia-app\n\nUsage:\n  celestia-appd [command]\n\nAvailable Commands:\n  add-genesis-account Add a genesis account to genesis.json\n  collect-gentxs      Collect genesis txs and output a genesis.json file\n  config              Create or query an application CLI configuration file\n  debug               Tool for helping with debugging your application\n  export              Export state to JSON\n  gentx               Generate a genesis tx carrying a self delegation\n  help                Help about any command\n  init                Initialize private validator, p2p, genesis, \n  and application configuration files\n  keys                Manage your application's keys\n  migrate             Migrate genesis to a specified target version\n  query               Querying subcommands\n  rollback            rollback tendermint state by one height\n  rollback            rollback cosmos-sdk and tendermint state by one height\n  start               Run the full node\n  status              Query remote node for status\n  tendermint          Tendermint subcommands\n  tx                  Transactions subcommands\n  validate-genesis    validates the genesis file at the default \n  location or at the location passed as an arg\n  version             Print the application binary version information\n")),(0,l.kt)("h2",{id:"creating-a-wallet"},"Creating a wallet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd config keyring-backend test\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"keyring-backend")," configures the keyring's backend, where the keys are stored."),(0,l.kt)("p",null,"Options are: ",(0,l.kt)("inlineCode",{parentName:"p"},"os|file|kwallet|pass|test|memory"),"."),(0,l.kt)("p",null,"You can learn more on the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/keyring.html"},"Cosmos documentation"),"\nor ",(0,l.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/crypto/keyring"},"Go Package documentation"),"."),(0,l.kt)("h2",{id:"key-management"},"Key management"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# listing keys\ncelestia-appd keys list\n\n# adding keys\ncelestia-appd keys add <KEY_NAME>\n\n# deleting keys\ncelestia-appd keys delete <KEY_NAME>\n\n# renaming keys\ncelestia-appd keys rename <CURRENT_KEY_NAME> <NEW_KEY_NAME>\n")),(0,l.kt)("h3",{id:"importing-and-exporting-keys"},"Importing and exporting keys"),(0,l.kt)("p",null,"Import an encrypted and ASCII-armored private key into the local keybase."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import <KEY_NAME> <KEY_FILE>\n")),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import amanda ./keyfile.txt\n")),(0,l.kt)("p",null,"Export a private key from the local keyring in encrypted and ASCII-armored format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys export <KEY_NAME>\n\n# you will then be prompted to set a password for the encrypted private key:\nEnter passphrase to encrypt the exported key:\n")),(0,l.kt)("p",null,"After you set a password, your encrypted key will be displayed."),(0,l.kt)("h2",{id:"querying-subcommands"},"Querying subcommands"),(0,l.kt)("p",null,"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd query <FLAGS> | <COMMAND>\n\n# alias q\ncelestia-appd q <FLAGS> | <COMMAND>\n")),(0,l.kt)("p",null,"To see all options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q --help\n")),(0,l.kt)("h2",{id:"token-management"},"Token management"),(0,l.kt)("p",null,"Get token balances:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q bank balances <ADDRESS> --node <NODE_URI>\n")),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q bank balances celestia1czpgn3hdh9sodm06d5qk23xzgpq2uyc8ggdqgw \\\n--node https://rpc-mocha.pops.one\n")),(0,l.kt)("p",null,"Transfer tokens from one wallet to another:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send <FROM_ADDRESS> <TO_ADDRESS> \\\n<amount> --node <NODE_URI> --chain-id <CHAIN_ID>\n")),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send <FROM_ADDRESS> <TO_ADDRESS> \\\n19000000utia --node https://rpc-mocha.pops.one/ --chain-id mocha\n")),(0,l.kt)("p",null,"To see options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send --help\n")),(0,l.kt)("h2",{id:"governance"},"Governance"),(0,l.kt)("p",null,"You can vote on a governance proposal with\nthe following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx gov vote <proposal id> <yes or no> --from <wallet> --chain-id <chain-id>\n")),(0,l.kt)("h2",{id:"claim-validator-rewards"},"Claim validator rewards"),(0,l.kt)("p",null,"You can claim your validator rewards with\nthe following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx distribution withdraw-rewards <validator valoper>\\\n    --commission --from=<validator wallet> --chain-id <chain-id> --gas auto -y\n")),(0,l.kt)("h2",{id:"delegate--undelegate-tokens"},"Delegate & undelegate tokens"),(0,l.kt)("p",null,"You can ",(0,l.kt)("inlineCode",{parentName:"p"},"delegate")," your tokens to a validator\nwith the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx staking delegate <validator valoper> <amount>\\\n    --from <wallet> --chain-id <chain-id>\n")),(0,l.kt)("p",null,"You can undelegate tokens to a validator\nwith the ",(0,l.kt)("inlineCode",{parentName:"p"},"unbond")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx staking unbond <validator valoper> <amount>\\\n    --from <wallet> --chain-id <chain-id>\n")),(0,l.kt)("h2",{id:"unjailing-the-validator"},"Unjailing the validator"),(0,l.kt)("p",null,"You can unjail your validator with the\nfollowing command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx slashing unjail --from <validator wallet>\\\n    --chain-id <chain-id> --gas auto -y\n")),(0,l.kt)("h2",{id:"how-to-export-logs-with-systemd"},"How to export logs with SystemD"),(0,l.kt)("p",null,"You can export your logs if you are running\na SystemD service with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo journalctl -u <your systemd service> -S yesterday > node_logs.txt\nsudo journalctl -u <your systemd service> -S today > node_logs.txt\n# This command outputs the last 1 million lines!\nsudo journalctl -u <your systemd service> -n 1000000 > node_logs.txt\n")),(0,l.kt)("h2",{id:"signing-genesis-for-a-new-network"},"Signing genesis for a new network"),(0,l.kt)("p",null,"You can first run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"VALIDATOR_NAME=validator1\nCHAIN_ID=testnet\ncelestia-appd init $VALIDATOR_NAME --chain-id $CHAIN_ID\nMONIKER=validator_name\n")),(0,l.kt)("p",null,"Next create a wallet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"KEY_NAME=validator\ncelestia-appd keys add $KEY_NAME\n")),(0,l.kt)("p",null,"Create or assign an EVM address:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"EVM_ADDRESS=<EVM_ADDRESS>\n")),(0,l.kt)("p",null,"Then add genesis account:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'CELES_AMOUNT="5000100000000utia"\ncelestia-appd add-genesis-account $KEY_NAME $CELES_AMOUNT\n')),(0,l.kt)("p",null,"Then generate your gentx:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"STAKING_AMOUNT=5000000000000utia\ncelestia-appd gentx $KEY_NAME $STAKING_AMOUNT --chain-id $CHAIN_ID \\\n    --pubkey=$(celestia-appd tendermint show-validator) \\\n    --moniker=$MONIKER \\\n    --commission-rate=0.1 \\\n    --commission-max-rate=0.2 \\\n    --commission-max-change-rate=0.01 \\\n    --min-self-delegation=1 \\\n    --evm-address=$EVM_ADDRESS \\\n")),(0,l.kt)("p",null,"You can then share your gentx JSON file on the networks\nrepo ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks"},"here")," in the respective\nnetwork directory you are participating in."))}m.isMDXComponent=!0}}]);