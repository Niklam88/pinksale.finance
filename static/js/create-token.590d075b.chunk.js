(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[11],{1276:function(e,a,t){"use strict";t.r(a);var s=t(898),n=t(883),r=t(2);a.default=function(){return Object(r.jsx)("div",{className:"container py-6",children:Object(r.jsx)(s.a,{children:Object(r.jsx)(n.a,{})})})}},835:function(e,a,t){"use strict";var s=t(90),n=t(2);a.a=function(e){var a=e.primary,t=void 0!==a&&a,r=e.loading,c=void 0!==r&&r,l=e.fullwidth,i=void 0!==l&&l,o=e.disabled,d=void 0!==o&&o,u=e.danger,m=void 0!==u&&u,b=e.type,h=void 0===b?"button":b,j=e.icon,p=e.children,x=e.onClick;return Object(n.jsx)(s.a,{type:t?"primary":"default",icon:j,htmlType:h,loading:c,block:i,disabled:d,danger:m,onClick:x,children:p})}},836:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var s=t(17),n=t(1),r=t(4),c=t(25);function l(){var e=Object(n.useState)(),a=Object(s.a)(e,2),t=a[0],l=a[1],i=Object(c.c)();return Object(n.useEffect)((function(){switch(i){case r.a.BSC_TESTNET:l("https://testnet.bscscan.com");break;case r.a.BSC_MAINNET:l("https://bscscan.com");break;case r.a.MATIC_TESTNET:l("https://mumbai.polygonscan.com");break;case r.a.MATIC_MAINNET:l("https://polygonscan.com");break;case r.a.ETH_MAINNET:l("https://etherscan.io");break;case r.a.KCC_MAINNET:l("https://explorer.kcc.io/en");break;case r.a.AVAX:l("https://cchain.explorer.avax.network");break;default:l("https://bscscan.com")}}),[i]),t}},883:function(e,a,t){"use strict";var s=t(7),n=t.n(s),r=t(42),c=t(17),l=t(12),i=t.n(l),o=t(839),d=t(1),u=t(456),m=t(962),b=t(840),h=t(56),j=t.n(h),p=t(869),x=t(55),O=t(50),v=t(48),k=t(835),y=t(3),N=t(19),f=t(25);var g=t(836),F=t(155);function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"standard",a=Object(f.i)(),t=Object(F.A)(a),s=Object(F.k)(a),l=Object(F.e)(a),i=Object(F.f)(a),o=Object(d.useState)(),u=Object(c.a)(o,2),m=u[0],b=u[1],h=Object(d.useState)(!1),j=Object(c.a)(h,2),p=j[0],x=j[1];return Object(d.useEffect)((function(){t&&Object(r.a)(n.a.mark((function a(){var r,c,o,d;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(x(!0),a.prev=1,"standard"!==e){a.next=9;break}return a.next=5,t.methods.flatFee().call();case 5:r=a.sent,b(r),a.next=27;break;case 9:if("liquidity"!==e){a.next=16;break}return a.next=12,s.methods.flatFee().call();case 12:c=a.sent,b(c),a.next=27;break;case 16:if("buyback"!==e){a.next=23;break}return a.next=19,i.methods.flatFee().call();case 19:o=a.sent,b(o),a.next=27;break;case 23:return a.next=25,l.methods.flatFee().call();case 25:d=a.sent,b(d);case 27:a.next=31;break;case 29:a.prev=29,a.t0=a.catch(1);case 31:return a.prev=31,x(!1),a.finish(31);case 34:case"end":return a.stop()}}),a,null,[[1,29,31,34]])})))()}),[t,e,l,s,i]),{fee:m,loading:p}}var T=t(283),w=t(10),S=t(285),C=t(30),q=t(133),E=t(2),D=t(284),A=b.d().shape({tokenName:b.f().required().min(2).max(255),tokenSymbol:b.f().required().min(2).max(255),tokenDecimals:b.c().positive().min(2).max(64).test({test:function(e,a){return"standard"!==a.parent.tokenType||e&&e>0},message:"Invalid decimals"}),totalSupply:b.f().required(),taxFeeBps:b.c().positive().max(100).min(.01),liquidityFeeBps:b.c().positive().max(100).min(.01),tokenType:b.f(),router:b.f().test({test:function(e,a){return"standard"===a.parent.tokenType||e&&""!==e},message:"Invalid router"}),maxTxBps:b.c().positive().max(100).min(.01).test({test:function(e,a){return"standard"===a.parent.tokenType||"baby"===a.parent.tokenType||"buyback"===a.parent.tokenType||e&&e>=.01},message:"Invalid max tx percent"}),buybackFee:b.c().positive().max(100).min(.01).test({test:function(e,a){return"buyback"!==a.parent.tokenType||e&&e>=.01},message:"Invalid buyback fee"}),reflectionFee:b.c().positive().max(100).min(.01).test({test:function(e,a){return"buyback"!==a.parent.tokenType||e&&e>=.01},message:"Invalid reflection fee"}),charity:b.f().max(255).test({test:function(e,a){return"standard"===a.parent.tokenType||(!e||j.a.utils.isAddress(e)&&e!==y.a.ZERO_ADDRESS)},message:"Address is invalid"}),charityBps:b.c().positive().max(100).min(1).when("charity",(function(e){return e?b.c().positive().max(100).min(1).required():b.c().positive().max(100).min(1)})),rewardToken:b.f().test({test:function(e,a){return"standard"===a.parent.tokenType||"liquidity"===a.parent.tokenType||(!e||j.a.utils.isAddress(e)&&e!==y.a.ZERO_ADDRESS)},message:"Address is invalid"}),tokenRewardsFee:b.c().positive().max(100).min(.01).when("tokenType",(function(e){return"baby"===e?b.c().positive().max(100).min(.01).required("Token reward fee is a required field"):b.c().positive().max(100).min(.01)})),liquidityFee:b.c().positive().max(100).min(.01).when("tokenType",(function(e){return"baby"===e?b.c().positive().max(100).min(.01).required("Auto add liquidity is a required field"):b.c().positive().max(100).min(.01)})),marketingWallet:b.f().test({test:function(e,a){return"standard"===a.parent.tokenType||"liquidity"===a.parent.tokenType||(!e||j.a.utils.isAddress(e)&&e!==y.a.ZERO_ADDRESS)},message:"Address is invalid"}),marketingFee:b.c().positive().max(100).min(.01).when("tokenType",(function(e){return"baby"===e?b.c().positive().max(100).min(.01).required("Marketing fee is a required field"):b.c().positive().max(100).min(.01)})),minimumTokenBalanceForDividends:b.c().positive().min(1).when("tokenType",(function(e){return"baby"===e?b.c().positive().min(1).required("Minimum token balance for dividends is a required field"):b.c().positive().min(1)})),isImplementAntibot:b.a().defined("Using Anti-Bot system must be defined")});a.a=function(e){var a=e.onSuccess,t=Object(d.useState)(!1),s=Object(c.a)(t,2),l=s[0],b=s[1],h=Object(d.useState)(!1),R=Object(c.a)(h,2),M=R[0],I=R[1],_=Object(d.useState)(),P=Object(c.a)(_,2),W=P[0],H=P[1],K=Object(d.useState)(),L=Object(c.a)(K,2),Z=L[0],z=L[1],V=Object(d.useState)(),G=Object(c.a)(V,2),J=G[0],U=G[1],X=Object(d.useState)(),Y=Object(c.a)(X,2),$=Y[0],Q=Y[1],ee=Object(f.i)(),ae=Object(x.c)().account,te=Object(f.c)(),se=function(){var e=Object(f.c)();return Object(d.useMemo)((function(){return y.a.TOKEN_ROUTERS[e]||[]}),[e])}(),ne=Object(g.a)(),re=Object(S.a)(),ce=Object(q.a)(),le=Object(F.A)(ee),ie=Object(F.k)(ee),oe=Object(F.e)(ee),de=Object(F.f)(ee),ue=B("standard"),me=ue.fee,be=ue.loading,he=B("liquidity"),je=he.fee,pe=he.loading,xe=B("baby"),Oe=xe.fee,ve=xe.loading,ke=B("buyback"),ye=ke.fee,Ne=ke.loading,fe=Object(d.useCallback)((function(e,a,t,s,c){Object(r.a)(n.a.mark((function r(){var l;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(le&&ae&&me){n.next=3;break}return u.b.error("Connect web3 to continue."),n.abrupt("return");case 3:return b(!0),n.prev=4,n.next=7,le.methods.create(e,a,t,Object(v.d)(s,Number(t)).toString(),c).send({from:ae,value:me});case 7:l=n.sent,u.b.success("Create token success"),I(!0),z(l.transactionHash),we(le,l.transactionHash,l.blockNumber),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),n.t0&&n.t0.message&&u.b.error(n.t0.message);case 17:return n.prev=17,b(!1),n.finish(17);case 20:case"end":return n.stop()}}),r,null,[[4,14,17,20]])})))()}),[le,ae,me]),ge=Object(d.useCallback)((function(e,a,t,s,c,l,i,o,d,m){Object(r.a)(n.a.mark((function r(){var h;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(ie&&ae&&je){n.next=3;break}return u.b.error("Connect web3 to continue."),n.abrupt("return");case 3:return b(!0),n.prev=4,n.next=7,ie.methods.create(e,a,Object(v.d)(t,9).toString(),s,o,c,l,d,i,m).send({from:ae,value:je});case 7:h=n.sent,u.b.success("Create token success"),I(!0),z(h.transactionHash),we(ie,h.transactionHash,h.blockNumber),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),n.t0&&n.t0.message&&u.b.error(n.t0.message);case 17:return n.prev=17,b(!1),n.finish(17);case 20:case"end":return n.stop()}}),r,null,[[4,14,17,20]])})))()}),[ie,ae,je]),Fe=Object(d.useCallback)((function(e,a,t,s,c,l,i,o,d,m,h){Object(r.a)(n.a.mark((function r(){var j;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(oe&&ae&&Oe){n.next=3;break}return u.b.error("Connect web3 to continue."),n.abrupt("return");case 3:return b(!0),n.prev=4,n.next=7,oe.methods.create(e,a,Object(v.c)(t).toString(),s,c,l,i,o,d,Object(v.c)("".concat(m||0)).toString(),h).send({from:ae,value:Oe});case 7:j=n.sent,u.b.success("Create token success"),I(!0),z(j.transactionHash),we(oe,j.transactionHash,j.blockNumber),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),n.t0&&n.t0.message&&u.b.error(n.t0.message);case 17:return n.prev=17,b(!1),n.finish(17);case 20:case"end":return n.stop()}}),r,null,[[4,14,17,20]])})))()}),[oe,ae,Oe]),Be=Object(d.useCallback)((function(e,a,t,s,c,l,i){Object(r.a)(n.a.mark((function r(){var o;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(de&&ae&&Oe){n.next=3;break}return u.b.error("Connect web3 to continue."),n.abrupt("return");case 3:return b(!0),n.prev=4,n.next=7,de.methods.create(e,a,Object(v.d)(t,9).toString(),c,s,l,i).send({from:ae,value:Oe});case 7:o=n.sent,u.b.success("Create token success"),I(!0),z(o.transactionHash),we(de,o.transactionHash,o.blockNumber),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),n.t0&&n.t0.message&&u.b.error(n.t0.message);case 17:return n.prev=17,b(!1),n.finish(17);case 20:case"end":return n.stop()}}),r,null,[[4,14,17,20]])})))()}),[de,ae,Oe]),Te=Object(o.a)({initialValues:{tokenName:"",tokenSymbol:"",router:"",tokenType:"standard",isImplementAntibot:!1,buybackFee:3,reflectionFee:8},validateOnMount:!0,validationSchema:A,onSubmit:function(e){"standard"===e.tokenType?fe(e.tokenName,e.tokenSymbol,e.tokenDecimals||18,e.totalSupply||"0",e.isImplementAntibot?y.a.PINK_ANTI_BOT_ADDRESS[te]:y.a.ZERO_ADDRESS):"liquidity"===e.tokenType?ge(e.tokenName,e.tokenSymbol,e.totalSupply||"0",e.router||"",Math.floor(100*(Number(e.taxFeeBps)||0)),Math.floor(100*Number(e.liquidityFeeBps||0)),Math.floor(100*Number(e.maxTxBps||0)),e.charity||y.a.ZERO_ADDRESS,Math.floor(100*Number(e.charityBps||0)),e.isImplementAntibot?y.a.PINK_ANTI_BOT_ADDRESS[te]:y.a.ZERO_ADDRESS):"buyback"===e.tokenType?Be(e.tokenName,e.tokenSymbol,e.totalSupply||"0",e.rewardToken||"",e.router||"",e.isImplementAntibot?y.a.PINK_ANTI_BOT_ADDRESS[te]:y.a.ZERO_ADDRESS,[Math.floor(100*Number(e.liquidityFee||2)),Math.floor(100*Number(e.buybackFee||3)),Math.floor(100*Number(e.reflectionFee||8)),Math.floor(100*Number(e.marketingFee||1)),1e4]):Fe(e.tokenName,e.tokenSymbol,e.totalSupply||"0",e.rewardToken||"",e.router||"",e.marketingWallet||"",Number(e.tokenRewardsFee||0),Number(e.liquidityFee||0),Number(e.marketingFee||0),Number(e.minimumTokenBalanceForDividends||0),e.isImplementAntibot?y.a.PINK_ANTI_BOT_ADDRESS[te]:y.a.ZERO_ADDRESS)}}),we=function(e,t,s){e&&Object(r.a)(n.a.mark((function r(){return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.events.TokenCreated({fromBlock:s-1}).on("data",(function(e){var s=e.returnValues;e.transactionHash===t&&(U(s.token),null===a||void 0===a||a(s.token))}));case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),r,null,[[0,5]])})))()},Se=Object(d.useMemo)((function(){return!Te.values.charityBps||Number(Te.values.maxTxBps||0)+Number(Te.values.taxFeeBps||0)+Number(Te.values.charityBps)<=1e4}),[Te.values]),Ce=Object(d.useMemo)((function(){return"buyback"!==Te.values.tokenType||Math.floor(100*Number(Te.values.liquidityFee||2))+Math.floor(100*Number(Te.values.buybackFee||3))+Math.floor(100*Number(Te.values.reflectionFee||8))+Math.floor(100*Number(Te.values.marketingFee||1))<=2500}),[Te.values.tokenType,Te.values.liquidityFee,Te.values.buybackFee,Te.values.reflectionFee,Te.values.marketingFee]),qe=function(e){/[a-z0-9]/i.test(e.key)||e.preventDefault()},Ee=function(e){/[0-9]/i.test(e.key)||e.preventDefault()},De=function(e){e.preventDefault()};Object(d.useEffect)((function(){Te.values.marketingWallet&&ae&&Te.values.marketingWallet===ae&&Te.setFieldError("marketingWallet","Owner and marketing wallet cannot be the same")}),[Te.values.marketingWallet,ae]),Object(d.useEffect)((function(){Te.values.rewardToken&&j.a.utils.isAddress(Te.values.rewardToken)&&Object(r.a)(n.a.mark((function e(){var a,t,s,r,l,i,o,d,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=["name","symbol","decimals"].map((function(e){return{address:Te.values.rewardToken||"",name:e}})),e.next=4,Object(T.a)(D,a,{web3:ee},te);case 4:t=e.sent,s=Object(c.a)(t,3),r=Object(c.a)(s[0],1),l=r[0],i=Object(c.a)(s[1],1),o=i[0],d=Object(c.a)(s[2],1),u=d[0],H({name:l,symbol:o,decimals:u.toString()}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),H(void 0),Te.setFieldError("rewardToken","Cannot get token info");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))()}),[Te.values.rewardToken,ee,te]),Object(d.useEffect)((function(){Te.values.rewardToken&&Te.values.router&&j.a.utils.isAddress(Te.values.rewardToken)&&Object(r.a)(n.a.mark((function e(){var a,t,s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(F.d)(Te.values.router,ee),e.next=4,a.methods.WETH().call();case 4:return t=e.sent,e.next=7,a.methods.factory().call();case 7:return s=e.sent,r=Object(F.b)(s,ee),e.next=11,r.methods.getPair(Te.values.rewardToken,t).call();case 11:e.sent!==y.a.ZERO_ADDRESS?Q(void 0):Q("Reward token invalid"),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})))()}),[Te.values.rewardToken,ee,te,Te.values.router]);var Ae=Object(C.b)(Object(N.b)(N.a.CreateLauchpad),ce),Re=Object(C.b)(Object(N.b)(N.a.CreateFairLaunchPool),ce);return M?Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{className:"has-text-centered has-text-success is-size-5 my-4",children:"Your token was created!"}),Object(E.jsx)("div",{className:"table-container",children:Object(E.jsx)("table",{className:"table is-bordered is-fullwidth",children:Object(E.jsxs)("tbody",{children:[Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Name"}),Object(E.jsx)("td",{className:"has-text-primary",children:Te.values.tokenName})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Symbol"}),Object(E.jsx)("td",{className:"has-text-primary",children:Te.values.tokenSymbol})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Total supply"}),Object(E.jsx)("td",{className:"has-text-primary",children:Object(w.d)(Te.values.totalSupply||"0")})]}),J?Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Address"}),Object(E.jsx)("td",{className:"has-text-primary",children:J})]}):null,Te.values.taxFeeBps?Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"taxFee percent"}),Object(E.jsxs)("td",{children:[Number(Te.values.taxFeeBps||0),"%"]})]}):null,Te.values.liquidityFeeBps?Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"liquidityFee percent"}),Object(E.jsxs)("td",{children:[Number(Te.values.liquidityFeeBps||0),"%"]})]}):null,Te.values.maxTxBps?Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"maxTx percent"}),Object(E.jsxs)("td",{children:[Number(Te.values.maxTxBps||0),"%"]})]}):null]})})}),Object(E.jsxs)("div",{className:"has-text-centered mb-4 is-flex is-align-items-center is-flex-wrap-wrap",children:[Object(E.jsx)("a",{className:"button m-4 is-flex-grow-1",href:"".concat(ne,"/tx/").concat(Z),target:"_blank",rel:"nofollow noreferrer",children:"View transaction on BSCScan"}),J?Object(E.jsx)(p.CopyToClipboard,{text:J,onCopy:function(){return u.b.success("Copied!")},children:Object(E.jsx)("a",{className:"button m-4 is-flex-grow-1",children:"Copy address"})}):null,Object(E.jsx)(O.b,{className:"button is-primary m-4 is-flex-grow-1",to:"".concat(/\?/.test(Ae)?"".concat(Ae,"&"):"".concat(Ae,"?"),"token=").concat(J),children:"Create launchpad"}),Object(E.jsx)(O.b,{className:"button is-primary m-4 is-flex-grow-1",to:"".concat(/\?/.test(Re)?"".concat(Re,"&"):"".concat(Re,"?"),"token=").concat(J),children:"Create Fairlaunch"})]})]}):Object(E.jsxs)("form",{onSubmit:Te.handleSubmit,children:[Object(E.jsx)("p",{className:"has-text-primary is-size-7",children:"(*) is required field."}),Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"tokenType",className:"label",children:["Token Type",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsxs)("select",{name:"tokenType",id:"tokenType",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.tokenType,className:"input",children:[Object(E.jsx)("option",{value:"standard",children:"Standard Token"}),Object(E.jsx)("option",{value:"liquidity",children:"Liquidity Generator Token"}),Object(E.jsx)("option",{value:"baby",children:"Baby Token"})]}),Boolean(Te.touched.tokenType&&Te.errors.tokenType)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.tokenType}),"standard"===Te.values.tokenType&&me&&Object(E.jsxs)("p",{className:"help is-info",children:["Fee: ",Object(w.i)(me,re.decimals)," ",re.symbol]}),"liquidity"===Te.values.tokenType&&je&&Object(E.jsxs)("p",{className:"help is-info",children:["Fee: ",Object(w.i)(je,re.decimals)," ",re.symbol]}),"baby"===Te.values.tokenType&&Oe&&Object(E.jsxs)("p",{className:"help is-info",children:["Fee: ",Object(w.i)(Oe,re.decimals)," ",re.symbol]}),"buyback"===Te.values.tokenType&&ye&&Object(E.jsxs)("p",{className:"help is-info",children:["Fee: ",Object(w.i)(ye,re.decimals)," ",re.symbol]})]})]}),Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"tokenName",className:"label",children:["Name",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",Te.touched.tokenName&&Te.errors.tokenName?"is-danger":""),id:"tokenName",name:"tokenName",onChange:Te.handleChange,onBlur:Te.handleBlur,placeholder:"Ex: Ethereum",maxLength:255}),Boolean(Te.touched.tokenName&&Te.errors.tokenName)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.tokenName})]})]}),Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"tokenSymbol",className:"label",children:["Symbol",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",Te.touched.tokenSymbol&&Te.errors.tokenSymbol?"is-danger":""),id:"tokenSymbol",name:"tokenSymbol",onChange:Te.handleChange,onBlur:Te.handleBlur,placeholder:"Ex: ETH",maxLength:255,onPaste:De}),Boolean(Te.touched.tokenSymbol&&Te.errors.tokenSymbol)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.tokenSymbol})]})]}),"standard"===Te.values.tokenType&&Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"tokenDecimals",className:"label",children:["Decimals",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"number",className:i()("input",Te.touched.tokenDecimals&&Te.errors.tokenDecimals?"is-danger":""),id:"tokenDecimals",name:"tokenDecimals",onChange:Te.handleChange,onBlur:Te.handleBlur,placeholder:"Ex: 18",onKeyPress:Ee,onPaste:De}),Boolean(Te.touched.tokenDecimals&&Te.errors.tokenDecimals)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.tokenDecimals})]})]}),Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"totalSupply",className:"label",children:["Total supply",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",Te.touched.totalSupply&&Te.errors.totalSupply?"is-danger":""),id:"totalSupply",name:"totalSupply",onChange:Te.handleChange,onBlur:Te.handleBlur,placeholder:"Ex: 100000000000",onKeyPress:Ee,onPaste:De}),Boolean(Te.touched.totalSupply&&Te.errors.totalSupply)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.totalSupply})]})]}),"liquidity"===Te.values.tokenType&&Object(E.jsx)("div",{className:"field",children:Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("label",{htmlFor:"router",className:"label",children:"Router"}),Object(E.jsxs)("select",{name:"router",id:"router",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.router,className:"input",children:[Object(E.jsx)("option",{value:"",disabled:!0,children:"---Select Router Exchange---"}),se.map((function(e){var a=e.name,t=e.address;return Object(E.jsx)("option",{value:t,children:a},t)}))]}),Boolean(Te.touched.router&&Te.errors.router)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.router})]})}),("baby"===Te.values.tokenType||"buyback"===Te.values.tokenType)&&Object(E.jsx)("div",{className:"field",children:Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("label",{htmlFor:"router",className:"label",children:"Router"}),Object(E.jsxs)("select",{name:"router",id:"router",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.router,className:"input",children:[Object(E.jsx)("option",{value:"",disabled:!0,children:"---Select Router Exchange---"}),se.map((function(e){var a=e.name,t=e.address;return Object(E.jsx)("option",{value:t,children:a},t)}))]}),Boolean(Te.touched.router&&Te.errors.router)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.router})]})}),"buyback"===Te.values.tokenType&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"rewardToken",className:"label",children:["Reward token",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",Te.touched.rewardToken&&Te.errors.rewardToken||$?"is-danger":""),id:"rewardToken",name:"rewardToken",onChange:Te.handleChange,onBlur:Te.handleBlur,placeholder:"Ex: 0x....",maxLength:255,onKeyPress:qe,value:Te.values.rewardToken}),Object(E.jsx)("p",{className:"has-text-info mt-1 is-size-7",children:"If you want to reward DOGE, please enter 0xba2ae424d960c26247dd6c32edc70b295c744c43."}),$?Object(E.jsx)("p",{className:"help is-danger",children:$}):Object(E.jsx)(E.Fragment,{children:Boolean(Te.touched.rewardToken&&Te.errors.rewardToken)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.rewardToken})}),W?Object(E.jsxs)("div",{className:"mt-2 is-size-7",children:[Object(E.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(E.jsx)("div",{className:"is-flex-grow-1",children:"Name"}),Object(E.jsx)("div",{className:"has-text-info",children:W.name})]}),Object(E.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(E.jsx)("div",{className:"is-flex-grow-1",children:"Symbol"}),Object(E.jsx)("div",{className:"has-text-info",children:W.symbol})]}),Object(E.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(E.jsx)("div",{className:"is-flex-grow-1",children:"Decimals"}),Object(E.jsx)("div",{className:"has-text-info",children:W.decimals})]})]}):null]})]})}),Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{htmlFor:"liquidityFee",className:"label",children:"Liquidity Fee (%)"}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",Te.touched.liquidityFee&&Te.errors.liquidityFee?"is-danger":""),type:"number",id:"liquidityFee",name:"liquidityFee",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.liquidityFee||void 0}),Boolean(Te.touched.liquidityFee&&Te.errors.liquidityFee)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.liquidityFee})]})]})})]}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{htmlFor:"buybackFee",className:"label",children:"Buyback Fee (%)"}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",Te.touched.buybackFee&&Te.errors.buybackFee?"is-danger":""),type:"number",id:"buybackFee",name:"buybackFee",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.buybackFee||void 0}),Boolean(Te.touched.buybackFee&&Te.errors.buybackFee)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.buybackFee})]})]})}),Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{htmlFor:"reflectionFee",className:"label",children:"Reflection Fee (%)"}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",Te.touched.reflectionFee&&Te.errors.reflectionFee?"is-danger":""),type:"number",id:"reflectionFee",name:"reflectionFee",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.reflectionFee||void 0}),Boolean(Te.touched.reflectionFee&&Te.errors.reflectionFee)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.reflectionFee})]})]})})]}),Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"marketingFee",className:"label",children:["Marketing fee (%)",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",Te.touched.marketingFee&&Te.errors.marketingFee?"is-danger":""),type:"number",id:"marketingFee",name:"marketingFee",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.marketingFee||void 0}),Boolean(Te.touched.marketingFee&&Te.errors.marketingFee)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.marketingFee}),!Ce&&Object(E.jsx)("p",{className:"help is-danger",children:"Liquidity Fee + Buyback Fee + Reflection Fee + Marketing Fee must be less than 25%"})]})]})]}),"baby"===Te.values.tokenType&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"rewardToken",className:"label",children:["Reward token",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",Te.touched.rewardToken&&Te.errors.rewardToken||$?"is-danger":""),id:"rewardToken",name:"rewardToken",onChange:Te.handleChange,onBlur:Te.handleBlur,placeholder:"Ex: 0x....",maxLength:255,onKeyPress:qe,value:Te.values.rewardToken}),Object(E.jsx)("p",{className:"has-text-info mt-1 is-size-7",children:"If you want to reward DOGE, please enter 0xba2ae424d960c26247dd6c32edc70b295c744c43."}),$?Object(E.jsx)("p",{className:"help is-danger",children:$}):Object(E.jsx)(E.Fragment,{children:Boolean(Te.touched.rewardToken&&Te.errors.rewardToken)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.rewardToken})}),W?Object(E.jsxs)("div",{className:"mt-2 is-size-7",children:[Object(E.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(E.jsx)("div",{className:"is-flex-grow-1",children:"Name"}),Object(E.jsx)("div",{className:"has-text-info",children:W.name})]}),Object(E.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(E.jsx)("div",{className:"is-flex-grow-1",children:"Symbol"}),Object(E.jsx)("div",{className:"has-text-info",children:W.symbol})]}),Object(E.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(E.jsx)("div",{className:"is-flex-grow-1",children:"Decimals"}),Object(E.jsx)("div",{className:"has-text-info",children:W.decimals})]})]}):null]})]})}),Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"minimumTokenBalanceForDividends",className:"label",children:["Minimum token balance for dividends",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",Te.touched.minimumTokenBalanceForDividends&&Te.errors.minimumTokenBalanceForDividends?"is-danger":""),id:"minimumTokenBalanceForDividends",name:"minimumTokenBalanceForDividends",onChange:Te.handleChange,onBlur:Te.handleBlur,placeholder:"Ex: 100000000000",onKeyPress:Ee,onPaste:De,value:Te.values.minimumTokenBalanceForDividends}),Object(E.jsx)("p",{className:"has-text-info mt-1 is-size-7",children:"Min hold each wallet must be over $50 to receive rewards."}),Boolean(Te.touched.minimumTokenBalanceForDividends&&Te.errors.minimumTokenBalanceForDividends)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.minimumTokenBalanceForDividends})]})]})})]}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"tokenRewardsFee",className:"label",children:["Token reward fee (%)",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",Te.touched.tokenRewardsFee&&Te.errors.tokenRewardsFee?"is-danger":""),type:"number",id:"tokenRewardsFee",name:"tokenRewardsFee",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.tokenRewardsFee||void 0}),Boolean(Te.touched.tokenRewardsFee&&Te.errors.tokenRewardsFee)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.tokenRewardsFee})]})]})}),Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"liquidityFee",className:"label",children:["Auto add liquidity (%)",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",Te.touched.liquidityFee&&Te.errors.liquidityFee?"is-danger":""),type:"number",id:"liquidityFee",name:"liquidityFee",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.liquidityFee||void 0}),Boolean(Te.touched.liquidityFee&&Te.errors.liquidityFee)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.liquidityFee})]})]})})]}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"marketingFee",className:"label",children:["Marketing fee (%)",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",Te.touched.marketingFee&&Te.errors.marketingFee?"is-danger":""),type:"number",id:"marketingFee",name:"marketingFee",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.marketingFee||void 0}),Boolean(Te.touched.marketingFee&&Te.errors.marketingFee)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.marketingFee})]})]})}),Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"marketingWallet",className:"label",children:["Marketing wallet",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",Te.errors.marketingWallet||Te.values.marketingWallet===ae?"is-danger":""),id:"marketingWallet",name:"marketingWallet",onChange:Te.handleChange,onBlur:Te.handleBlur,placeholder:"Ex: 0x....",maxLength:255,onKeyPress:qe,value:Te.values.marketingWallet}),Te.values.marketingWallet===ae?Object(E.jsx)("p",{className:"help is-danger",children:"Owner and marketing wallet cannot be the same"}):Object(E.jsx)(E.Fragment,{children:Te.errors.marketingWallet&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.marketingWallet})})]})]})})]})]}),"liquidity"===Te.values.tokenType&&Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{htmlFor:"taxFeeBps",className:"label",children:"Transaction fee to generate yield (%)"}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",Te.touched.taxFeeBps&&Te.errors.taxFeeBps?"is-danger":""),type:"number",id:"taxFeeBps",name:"taxFeeBps",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.taxFeeBps||void 0}),Boolean(Te.touched.taxFeeBps&&Te.errors.taxFeeBps)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.taxFeeBps})]})]})}),Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{htmlFor:"liquidityFeeBps",className:"label",children:"Transaction fee to generate liquidity (%)"}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",Te.touched.liquidityFeeBps&&Te.errors.liquidityFeeBps?"is-danger":""),type:"number",id:"liquidityFeeBps",name:"liquidityFeeBps",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.liquidityFeeBps||void 0}),Boolean(Te.touched.liquidityFeeBps&&Te.errors.liquidityFeeBps)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.liquidityFeeBps})]})]})})]}),"liquidity"===Te.values.tokenType&&Object(E.jsx)("div",{className:"columns",children:Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"maxTxBps",className:"label",children:["Max transaction percent (%)",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",Te.touched.maxTxBps&&Te.errors.maxTxBps?"is-danger":""),type:"number",id:"maxTxBps",name:"maxTxBps",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.maxTxBps||void 0}),Boolean(Te.touched.maxTxBps&&Te.errors.maxTxBps)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.maxTxBps})]})]})})}),"liquidity"===Te.values.tokenType&&Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{htmlFor:"charity",className:"label",children:"Charity/Marketting address"}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",Te.touched.charity&&Te.errors.charity?"is-danger":""),id:"charity",name:"charity",value:Te.values.charity,onChange:Te.handleChange,onBlur:Te.handleBlur,placeholder:"Ex: 0x....."}),Boolean(Te.touched.charity&&Te.errors.charity)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.charity})]})]}),"liquidity"===Te.values.tokenType&&Object(E.jsx)("div",{className:"columns",children:Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{htmlFor:"charityBps",className:"label",children:"Charity percent (%)"}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",Te.touched.charityBps&&Te.errors.charityBps?"is-danger":""),type:"number",id:"charityBps",name:"charityBps",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:Te.handleChange,onBlur:Te.handleBlur,value:Te.values.charityBps||void 0}),Boolean(Te.touched.charityBps&&Te.errors.charityBps)&&Object(E.jsx)("p",{className:"help is-danger",children:Te.errors.charityBps})]})]})})}),Object(E.jsx)("div",{className:"field",children:Object(E.jsx)(m.a,{checked:Te.values.isImplementAntibot,onChange:function(e){Te.setFieldValue("isImplementAntibot",e.target.checked)},children:"Implement Pink Anti-Bot System?"})}),Te.values.isImplementAntibot&&Object(E.jsxs)("div",{className:"px-2 has-text-info",children:["Please visit"," ",Object(E.jsx)("a",{href:"https://www.pinksale.finance/#/antibot",target:"_blank",rel:"noreferrer",children:"https://www.pinksale.finance/#/antibot"})," ","to active Pink Anti-Bot after creating the token. ",Object(E.jsx)("br",{}),"Check out the tutorial here:"," ",Object(E.jsx)("a",{href:"https://docs.pinksale.finance/pink-anti-bot/pink-anti-bot-guide",target:"_blank",rel:"noreferrer",children:"https://docs.pinksale.finance/pink-anti-bot/pink-anti-bot-guide"})]}),Object(E.jsxs)("div",{className:"has-text-centered mt-6 mb-4",children:[!Se&&Object(E.jsx)("div",{className:"px-2 has-text-danger",children:"taxFee percent + liquidityFee percent + charity percent must be less than or equal 100%"}),Object(E.jsx)(k.a,{primary:!0,type:"submit",loading:l||be||pe||ve||Ne,disabled:!Te.isValid||!!$||"buyback"===Te.values.tokenType&&!Ce,children:"Create token"})]})]})}}}]);