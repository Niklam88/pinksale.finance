(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[14],{1266:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n(99),c=n(17),s=n(886),i=n(871),o=n(804),l=n(1271),u=n(819),f=n(4),b=n(8),p=n(46),j=n(14),d=n(1),m=n(11),O=n.n(m),v=n(107),x=n(65),h=n(72),g=n(45),y=n(843),N=n(874),E=d.createContext("default"),w=function(e){var t=e.children,n=e.size;return d.createElement(E.Consumer,null,(function(e){return d.createElement(E.Provider,{value:n||e},t)}))},C=E,P=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},S=function(e,t){var n,a,r=d.useContext(C),c=d.useState(1),s=Object(j.a)(c,2),i=s[0],o=s[1],l=d.useState(!1),u=Object(j.a)(l,2),m=u[0],E=u[1],w=d.useState(!0),S=Object(j.a)(w,2),k=S[0],z=S[1],_=d.useRef(),D=d.useRef(),M=Object(x.a)(t,_),A=d.useContext(h.b).getPrefixCls,R=function(){if(D.current&&_.current){var t=D.current.offsetWidth,n=_.current.offsetWidth;if(0!==t&&0!==n){var a=e.gap,r=void 0===a?4:a;2*r<n&&o(n-2*r<t?(n-2*r)/t:1)}}};d.useEffect((function(){E(!0)}),[]),d.useEffect((function(){z(!0),o(1)}),[e.src]),d.useEffect((function(){R()}),[e.gap]);var I=e.prefixCls,L=e.shape,H=e.size,T=e.src,W=e.srcSet,F=e.icon,J=e.className,V=e.alt,B=e.draggable,G=e.children,K=P(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),U="default"===H?r:H,X=Object(N.a)(),q=d.useMemo((function(){if("object"!==Object(p.a)(U))return{};var e=y.b.find((function(e){return X[e]})),t=U[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:F?t/2:18}:{}}),[X,U]);Object(g.a)(!("string"===typeof F&&F.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(F,"` at https://ant.design/components/icon"));var Q,Y=A("avatar",I),Z=O()((n={},Object(b.a)(n,"".concat(Y,"-lg"),"large"===U),Object(b.a)(n,"".concat(Y,"-sm"),"small"===U),n)),$=d.isValidElement(T),ee=O()(Y,Z,(a={},Object(b.a)(a,"".concat(Y,"-").concat(L),!!L),Object(b.a)(a,"".concat(Y,"-image"),$||T&&k),Object(b.a)(a,"".concat(Y,"-icon"),!!F),a),J),te="number"===typeof U?{width:U,height:U,lineHeight:"".concat(U,"px"),fontSize:F?U/2:18}:{};if("string"===typeof T&&k)Q=d.createElement("img",{src:T,draggable:B,srcSet:W,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&z(!1)},alt:V});else if($)Q=T;else if(F)Q=F;else if(m||1!==i){var ne="scale(".concat(i,") translateX(-50%)"),ae={msTransform:ne,WebkitTransform:ne,transform:ne},re="number"===typeof U?{lineHeight:"".concat(U,"px")}:{};Q=d.createElement(v.a,{onResize:R},d.createElement("span",{className:"".concat(Y,"-string"),ref:function(e){D.current=e},style:Object(f.a)(Object(f.a)({},re),ae)},G))}else Q=d.createElement("span",{className:"".concat(Y,"-string"),style:{opacity:0},ref:function(e){D.current=e}},G);return delete K.onError,delete K.gap,d.createElement("span",Object(f.a)({},K,{style:Object(f.a)(Object(f.a)(Object(f.a)({},te),q),K.style),className:ee,ref:M}),Q)},k=d.forwardRef(S);k.displayName="Avatar",k.defaultProps={shape:"circle",size:"default"};var z=k,_=n(63),D=n(37),M=n(151),A=function(e){return e?"function"===typeof e?e():e:null},R=n(83),I=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},L=d.forwardRef((function(e,t){var n=e.prefixCls,a=e.title,r=e.content,c=I(e,["prefixCls","title","content"]),s=d.useContext(h.b).getPrefixCls,i=s("popover",n),o=s();return d.createElement(M.a,Object(f.a)({},c,{prefixCls:i,ref:t,overlay:function(e){return d.createElement(d.Fragment,null,a&&d.createElement("div",{className:"".concat(e,"-title")},A(a)),d.createElement("div",{className:"".concat(e,"-inner-content")},A(r)))}(i),transitionName:Object(R.b)(o,"zoom-big",c.transitionName)}))}));L.displayName="Popover",L.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var H=L,T=function(e){var t=d.useContext(h.b),n=t.getPrefixCls,a=t.direction,r=e.prefixCls,c=e.className,s=void 0===c?"":c,i=e.maxCount,o=e.maxStyle,l=e.size,u=n("avatar-group",r),f=O()(u,Object(b.a)({},"".concat(u,"-rtl"),"rtl"===a),s),p=e.children,j=e.maxPopoverPlacement,m=void 0===j?"top":j,v=Object(_.a)(p).map((function(e,t){return Object(D.a)(e,{key:"avatar-key-".concat(t)})})),x=v.length;if(i&&i<x){var g=v.slice(0,i),y=v.slice(i,x);return g.push(d.createElement(H,{key:"avatar-popover-key",content:y,trigger:"hover",placement:m,overlayClassName:"".concat(u,"-popover")},d.createElement(z,{style:o},"+".concat(x-i)))),d.createElement(w,{size:l},d.createElement("div",{className:f,style:e.style},g))}return d.createElement(w,{size:l},d.createElement("div",{className:f,style:e.style},v))},W=z;W.Group=T;var F=W,J=n(90),V=n(850),B=n.n(V),G=n(15),K=n(7),U=n.n(K),X=n(47),q=n(823),Q=n(28),Y=n(140);var Z=n(49),$=n(19),ee=n(280),te=n(205),ne=n(405),ae=n(30),re=n(2);t.default=function(){var e=Object(d.useState)(+new Date),t=Object(c.a)(e,2),n=t[0],f=t[1],b=function(e){var t=Object(Q.c)();return Object(q.a)(Object(X.a)(U.a.mark((function n(){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Y.a.pool.getLeaderboard(t,e));case 1:case"end":return n.stop()}}),n)}))),[e])}(n),p=b.loading,j=b.value,m=Object(ee.a)(),O=Object(Q.c)(),v=Object(te.a)(),x=Object(ne.a)(),h=Object(d.useMemo)((function(){return[].concat(Object(r.a)(x||[]),Object(r.a)(v||[]))}),[v,x]),g=(j&&j.docs&&Array.isArray(j.docs)?j.docs:[]).map((function(e){return Object(a.a)(Object(a.a)({},e),{},{pool_detail:Object(G.e)(e.pool_detail)})})).filter((function(e){return h.indexOf(e.pool_address)<0})),y=Object(G.s)(+new Date(2021,6,25),+new Date),N=function(e){return+new Date-7*Number(e)*24*60*60*1e3};return Object(re.jsx)("div",{className:"py-6 container",children:Object(re.jsxs)(s.a,{children:[Object(re.jsx)(i.a,{defaultActiveKey:"0",onChange:function(e){f(N(e))},children:B()(y).map((function(e){var t=new Date(N(e)),n=Object(G.p)(t),a=Object(c.a)(n,2),r=a[0],s=a[1];return Object(re.jsx)(i.a.TabPane,{tab:"Week ".concat(s,"/").concat(r)},e)}))}),Object(re.jsx)(o.a,{spinning:p,children:Object(re.jsx)(l.b,{itemLayout:"horizontal",dataSource:g,renderItem:function(e,t){return Object(re.jsxs)(l.b.Item,{children:[Object(re.jsx)("div",{className:"mr-4",children:Object(re.jsx)(u.a.Title,{level:4,children:t+1})}),Object(re.jsx)(l.b.Item.Meta,{avatar:Object(re.jsx)(F,{size:{xs:24,sm:32,md:36,lg:44,xl:44,xxl:44},src:e.pool_detail.logoUrl}),title:Object(re.jsxs)("div",{children:[Object(re.jsx)("span",{children:e.token_name}),Object(re.jsx)("span",{className:"ml-2 is-size-7",children:e.token_symbol})]}),description:Object(re.jsxs)("div",{className:"flex items-center",children:[Object(re.jsxs)("p",{children:[Object(re.jsx)("span",{children:"Hardcap: "}),Object(re.jsxs)("a",{children:[Object(G.g)(e.hard_cap,m.decimals||0)," ",m.symbol]})]}),Object(re.jsx)("p",{children:"\xa0\u2013\xa0"}),Object(re.jsxs)("p",{children:[Object(re.jsx)("span",{children:"Listing time: "}),Object(re.jsx)("a",{children:Object(G.i)(Object(G.n)(e.finish_time))})]})]})}),Object(re.jsx)("div",{className:"mr-2",children:Object(re.jsx)("div",{className:"flex-wrapper",children:Object(re.jsx)("div",{className:"single-chart",children:Object(re.jsxs)("svg",{viewBox:"0 0 36 36",className:"circular-chart green",children:[Object(re.jsx)("path",{className:"circle-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),Object(re.jsx)("path",{className:"circle",strokeDasharray:"".concat(e.raised_percent,", 100"),d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),Object(re.jsxs)("text",{x:"18",y:"20.35",className:"percentage",children:[e.raised_percent.toString().length>3?e.raised_percent.toFixed(1):e.raised_percent,"%"]})]})})})}),Object(re.jsx)(Z.b,{to:Object(ae.a)(Object($.b)($.a.LauchpadDetail).replace(":id",e.pool_address),O),children:Object(re.jsx)(J.a,{type:"primary",size:"middle",children:"View pool"})})]},e.pool_address)}})})]})})}},829:function(e,t,n){var a=n(837),r=n(450),c=n(452),s=n(236);e.exports=function(e,t,n){if(!s(n))return!1;var i=typeof t;return!!("number"==i?r(n)&&c(t,n.length):"string"==i&&t in n)&&a(n[t],e)}},830:function(e,t,n){var a=n(453),r=1/0;e.exports=function(e){return e?(e=a(e))===r||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}},837:function(e,t){e.exports=function(e,t){return e===t||e!==e&&t!==t}},850:function(e,t,n){var a=n(859)();e.exports=a},859:function(e,t,n){var a=n(860),r=n(829),c=n(830);e.exports=function(e){return function(t,n,s){return s&&"number"!=typeof s&&r(t,n,s)&&(n=s=void 0),t=c(t),void 0===n?(n=t,t=0):n=c(n),s=void 0===s?t<n?1:-1:c(s),a(t,n,s,e)}}},860:function(e,t){var n=Math.ceil,a=Math.max;e.exports=function(e,t,r,c){for(var s=-1,i=a(n((t-e)/(r||1)),0),o=Array(i);i--;)o[c?i:++s]=e,e+=r;return o}}}]);