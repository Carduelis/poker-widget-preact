module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s="QfWi")}({"+/90":function(t,e,r){t.exports={wrapper:"wrapper__3rRYy",svg:"svg__3ZO0l",svgWrapper:"svgWrapper__1QLff"}},"+E3a":function(t,e,r){},"+TSP":function(t,e,r){t.exports=window.fetch||(window.fetch=r("YUY5").default||r("YUY5"))},"1ksb":function(t,e,r){},"5+HP":function(t,e,r){"use strict";r.r(e);var n=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){return e.reject(r)}))}))},o=setTimeout;function i(t){return Boolean(t&&void 0!==t.length)}function a(){}function c(t){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(t,this)}function u(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,c._immediateFn((function(){var r=1===t._state?e.onFulfilled:e.onRejected;if(null!==r){var n;try{n=r(t._value)}catch(t){return void s(e.promise,t)}l(e.promise,n)}else(1===t._state?l:s)(e.promise,t._value)}))):t._deferreds.push(e)}function l(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if(e instanceof c)return t._state=3,t._value=e,void p(t);if("function"==typeof r)return void d((n=r,o=e,function(){n.apply(o,arguments)}),t)}t._state=1,t._value=e,p(t)}catch(e){s(t,e)}var n,o}function s(t,e){t._state=2,t._value=e,p(t)}function p(t){2===t._state&&0===t._deferreds.length&&c._immediateFn((function(){t._handled||c._unhandledRejectionFn(t._value)}));for(var e=0,r=t._deferreds.length;e<r;e++)u(t,t._deferreds[e]);t._deferreds=null}function f(t,e,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=r}function d(t,e){var r=!1;try{t((function(t){r||(r=!0,l(e,t))}),(function(t){r||(r=!0,s(e,t))}))}catch(t){if(r)return;r=!0,s(e,t)}}c.prototype.catch=function(t){return this.then(null,t)},c.prototype.then=function(t,e){var r=new this.constructor(a);return u(this,new f(t,e,r)),r},c.prototype.finally=n,c.all=function(t){return new c((function(e,r){if(!i(t))return r(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(t);if(0===n.length)return e([]);var o=n.length;function a(t,i){try{if(i&&("object"==typeof i||"function"==typeof i)){var c=i.then;if("function"==typeof c)return void c.call(i,(function(e){a(t,e)}),r)}n[t]=i,0==--o&&e(n)}catch(t){r(t)}}for(var c=0;c<n.length;c++)a(c,n[c])}))},c.resolve=function(t){return t&&"object"==typeof t&&t.constructor===c?t:new c((function(e){e(t)}))},c.reject=function(t){return new c((function(e,r){r(t)}))},c.race=function(t){return new c((function(e,r){if(!i(t))return r(new TypeError("Promise.race accepts an array"));for(var n=0,o=t.length;n<o;n++)c.resolve(t[n]).then(e,r)}))},c._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){o(t,0)},c._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};e.default=c},HteQ:function(t,e){t.exports=require("preact")},L76c:function(t,e,r){t.exports={sidebar:"sidebar__U7KN2"}},QfWi:function(t,e,r){"use strict";r.r(e);r("+E3a");var n=r("HteQ"),o={};function i(t,e){for(var r in e)t[r]=e[r];return t}function a(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function c(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,u(e).map(l).join(""));var e}(t),t.props}function u(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var s=null,p=[],f=[],d={};function h(){var t;return""+((t=s&&s.location?s.location:s&&s.getCurrentLocation?s.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function v(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=p.length;e--;)if(p[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),s&&s[e]?s[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),y(t)}function y(t){for(var e=!1,r=0;r<p.length;r++)!0===p[r].routeTo(t)&&(e=!0);for(var n=f.length;n--;)f[n](t);return e}function m(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),r=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!r||r.match(/^_?self$/i)))return v(e)}}function b(t){if(0==t.button)return m(t.currentTarget||t.target||this),g(t)}function g(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function w(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(m(e))return g(t)}}while(e=e.parentNode)}}var _=!1;var O=function(t){function e(e){t.call(this,e),e.history&&(s=e.history),this.state={url:e.url||h()},_||("function"==typeof addEventListener&&(s||addEventListener("popstate",(function(){y(h())})),addEventListener("click",w)),_=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(n.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){p.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;s&&(this.unlisten=s.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),p.splice(p.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,r){return t.filter(c).sort(a).map((function(t){var a=function(t,e,r){var n,i=/(?:\?([^#]*))?(#.*)?$/,a=t.match(i),c={};if(a&&a[1])for(var l=a[1].split("&"),s=0;s<l.length;s++){var p=l[s].split("=");c[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=u(t.replace(i,"")),e=u(e||"");for(var f=Math.max(t.length,e.length),d=0;d<f;d++)if(e[d]&&":"===e[d].charAt(0)){var h=e[d].replace(/(^:|[+*?]+$)/g,""),v=(e[d].match(/[+*?]+$/)||o)[0]||"",y=~v.indexOf("+"),m=~v.indexOf("*"),b=t[d]||"";if(!b&&!m&&(v.indexOf("?")<0||y)){n=!1;break}if(c[h]=decodeURIComponent(b),y||m){c[h]=t.slice(d).map(decodeURIComponent).join("/");break}}else if(e[d]!==t[d]){n=!1;break}return(!0===r.default||!1!==n)&&c}(e,t.props.path,t.props);if(a){if(!1!==r){var c={url:e,matches:a};return i(c,a),delete c.ref,delete c.key,Object(n.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var r=t.children,o=t.onChange,i=e.url,a=this.getMatchingChildren(Object(n.toChildArray)(r),i,!0),c=a[0]||null,u=this.previousUrl;return i!==u&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:u,active:a,current:c})),c},e}(n.Component);O.subscribers=f,O.getCurrentUrl=h,O.route=v,O.Router=O,O.Route=function(t){return Object(n.createElement)(t.component,t)},O.Link=function(t){return Object(n.createElement)("a",i({onClick:b},t))};var j=r("YZ1H"),C=r.n(j),P=r("pvgs"),A=r.n(P),S=r("SyCT"),x=r.n(S),k=r("+/90"),L=r.n(k);var H=function(t){var e,r;function o(){for(var e,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).ref=Object(n.createRef)(),e}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=o.prototype;return i.componentDidMount=function(){this.ref.current&&(this.ref.current.innerHTML=x.a)},i.render=function(t){var e=t.title,r=t.description,o=t.children;return Object(n.h)("section",{class:L.a.wrapper},Object(n.h)("h2",{class:"miro-h2"},e),Object(n.h)("p",{class:"miro-p"},r),Object(n.h)("div",{class:L.a.svgWrapper},Object(n.h)("svg",{class:L.a.svg,ref:this.ref})),o)},o}(n.Component),R="3074457347007443177",M=[1,2,3,4,5,6],E=[{label:"0",value:0},{label:"½",value:.5},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"5",value:5},{label:"8",value:8},{label:"13",value:13},{label:"20",value:20},{label:"40",value:40},{label:"100",value:100},{label:"∞",value:"infinity"},{label:"?",value:"question"},{label:"☕",value:"coffee"}],T=E.reduce((function(t,e){return t[e.value]=e,t}),{});function W(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var I=function(){miro.board.openLibrary("Poker Planning","sidebar"),miro.board.ui.openBottomPanel("bottomPanel",{width:250})},U=function(t){var e,r;function o(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).handleInstall=function(){window.open(e.installationURL)},e}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i,a,c,u=o.prototype;return u.componentDidMount=function(){miro.onReady((function(){miro.initialize({extensionPoints:{toolbar:{title:"Poker Planning",toolbarSvgIcon:A.a,librarySvgIcon:x.a,onClick:function(){return new Promise((function(t,e){return Promise.resolve(miro.isAuthorized()).then(function(r){try{return r?(I(),n.call(this)):Promise.resolve(miro.board.ui.openModal("authorize")).then(function(t){try{return"success"===t&&I(),n.call(this)}catch(t){return e(t)}}.bind(this),e);function n(){return t()}}catch(t){return e(t)}}.bind(this),e)}))}}}})}))},u.render=function(){return Object(n.h)(H,{title:"Planning Poker"},Object(n.h)("button",{type:"button",class:"miro-btn miro-btn--primary miro-btn--medium",onClick:this.handleInstall},"Install the plugin"))},i=o,(a=[{key:"installationURL",get:function(){return"https://miro.com/oauth/authorize?response_type=code&client_id="+R+"&redirect_uri="+window.location.origin+"/authorize-success&external=true"}}])&&W(i.prototype,a),c&&W(i,c),o}(n.Component),B=r("L76c"),D=r.n(B),V=r("n5xL"),z=r.n(V),Z=r("duEm"),Y=r.n(Z);function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(r,!0).forEach((function(e){q(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function q(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var $=function(t,e){if(void 0===e&&(e=R),!e)throw new Error("No appId specified");return t.metadata[e]||{}},K=function(t,e,r){var n;return void 0===r&&(r=R),N({},t.metadata,((n={})[r]=N({},t.metadata[r],{},e),n))};function Q(){return new Promise((function(t,e){return Promise.resolve(miro.board.widgets.get()).then((function(r){try{return t(r.filter((function(t){return"card"===$(t).type})))}catch(t){return e(t)}}),e)}))}var X=function(t,e){return void 0===e&&(e=""),window.location.origin+"/assets/cards/"+t+e+".svg"};var J=function(t){var e,r;function o(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).handleReveal=function(t){return new Promise((function(r,n){var o,i;return"function"==typeof e.props.onBeforeReveal&&e.props.onBeforeReveal(t),Promise.resolve(Q()).then((function(t){try{return o=t.filter((function(t){return"back"===$(t).side})),i=o.map((function(t){var e=t.id,r=$(t).value;return{id:e,metadata:K(t,{side:"face"}),url:X("face",r)}})),Promise.resolve(miro.board.widgets.update(i)).then((function(t){try{return"function"==typeof e.props.onReveal&&e.props.onReveal(),r()}catch(t){return n(t)}}),n)}catch(t){return n(t)}}),n)}))},e.handleClear=function(t){return new Promise((function(r,n){var o,i;return"function"==typeof e.props.onBeforeClear&&e.props.onBeforeClear(t),Promise.resolve(Q()).then((function(t){try{return o=t.filter((function(t){return"card"===$(t).type})).map((function(t){return t.id})),i=miro.board.widgets.deleteById(o),console.log("deleted",i.length,"cards"),"function"==typeof e.props.onClear&&e.props.onClear(),r()}catch(t){return n(t)}}),n)}))},e.handleClose=function(){return new Promise((function(t,e){var r=function(){try{return t()}catch(t){return e(t)}},n=function(t){try{return console.error("Something went wrong"),r()}catch(t){return e(t)}};try{return Promise.resolve(miro.board.ui.closeBottomPanel()).then((function(t){try{return r()}catch(t){return n()}}),n)}catch(t){n()}}))},e}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(t){var e=t.showClose;return Object(n.h)("nav",{class:Y.a.wrapper},Object(n.h)("button",{type:"button",class:"miro-btn miro-btn--primary miro-btn--small",onClick:this.handleReveal},"Reveal all"),Object(n.h)("button",{class:"miro-btn miro-btn--secondary miro-btn--small",type:"button",onClick:this.handleClear},"Clear all"),Boolean(e)&&Object(n.h)("button",{class:"miro-btn miro-btn--secondary-flat miro-btn--small",type:"button",title:"Close panel",style:{width:"36px","margin-left":"6px"},onClick:this.handleClose},"✖"))},o}(n.Component);var G=6;function tt(){var t,e,r=(t=1,e=G,Math.floor(Math.random()*(e-t+1))+t);return X("back",r)}var et=function(t){var e,r;function o(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={loaded:!1},e.handleLoad=function(){e.setState({loaded:!0})},e}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(t){var e=t.value,r=t.disabled,o=t.label,i=t.index,a=t.cards,c=void 0===a?[]:a,u=X("face",e),l=50*(c.length-i);return Object(n.h)("div",{class:z.a.cardWrapper,style:{animationDelay:"-"+l+"ms"}},Object(n.h)("button",{class:z.a.card,title:o,disabled:Boolean(r),"data-loaded":this.state.loaded?"yes":"no","data-value":e,type:"button",style:{backgroundImage:"url("+u+")"},"data-image-url":u},Object(n.h)("span",null,o)),Object(n.h)("img",{class:z.a.hiddenImg,onLoad:this.handleLoad,src:u}))},o}(n.Component),rt=function(t){var e=t.disabled;return Object(n.h)(n.Fragment,null,E.map((function(t,r,o){var i=t.label,a=t.value;return Object(n.h)(et,{key:a,disabled:e,label:i,value:a,index:r,cards:o})})))};var nt=function(t){var e,r;function o(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).handleSwap=function(t){return new Promise((function(r,n){"function"==typeof e.props.onBeforeSwap&&e.props.onBeforeSwap(t);var o=function(){try{return r()}catch(t){return n(t)}},i=function(t){try{return console.error(e.props.chosenCardWidget.id),console.error(t),"function"==typeof e.props.onError&&e.props.onError(t),o()}catch(t){return n(t)}};try{return Promise.resolve(miro.board.widgets.deleteById([e.props.chosenCardWidget.id])).then((function(r){try{return"function"==typeof e.props.onSwap&&e.props.onSwap(t),o()}catch(t){return i(t)}}),i)}catch(t){i(t)}}))},e}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(t){var e=t.chosenCardWidget,r=T[$(e).value],o=r.value,i=r.label;return Object(n.h)("section",{class:z.a.chosenCardWrapper},Object(n.h)("h4",{class:"miro-h2"},"Your card"),Object(n.h)(et,{value:o,label:i,disabled:!0}),Object(n.h)("button",{onClick:this.handleSwap,type:"button",class:"miro-btn miro-btn--secondary miro-btn--small"},"Swap"))},o}(n.Component),ot=10,it=20,at=function(t,e){return Math.round(t/e)*e};var ct=r("uXYu"),ut=r.n(ct),lt=function(t){var e=t.severity,r=t.title,o=t.children;return Object(n.h)("section",{class:ut.a.wrapper,"data-severity":e},Object(n.h)("h4",{class:"miro-h4"},r),o)},st=function(){return Object(n.h)(n.Fragment,null,M.map((function(t){return Object(n.h)("img",{class:z.a.hiddenCard,key:t,src:X("back",t)})})))};var pt=1.5,ft=function(t){var e,r;function o(){for(var e,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).state={time:Date.now(),count:10,loading:!0,error:null,chosenCardWidget:null,showList:!0},e.ref=Object(n.createRef)(),e.onReady=function(){var t,r;miro.board.ui.initDraggableItemsContainer(e.ref.current,{draggableItemSelector:"."+z.a.card,onClick:function(e){t=e.dataset.value},getDraggableItemPreview:function(e){return r=tt(),t=e.dataset.value,{width:e.offsetWidth,height:e.offsetWidth*pt,url:r}},onDrop:function(n,o){return new Promise((function(i,a){var c,u;return e.hideList(),c={type:"card",side:"back",value:t,author:e.state.id},Promise.resolve(function(t){var e,r=t.x,n=t.y,o=t.url,i=t.metadata;return miro.board.widgets.create({type:"image",url:o,x:at(r,ot),y:at(n,it),capabilities:{editable:!1},metadata:(e={},e[R]=i,e)})}({x:n,y:o,url:r,metadata:c})).then((function(t){try{return u=t[0],e.setChosenCard(u),i()}catch(t){return a(t)}}),a)}))}})},e.setChosenCard=function(t,r){var n=t;e.setState({chosenCardWidget:n,showList:!1},r),e.checkCardExistence(t.id)},e.checkCardExistence=function(t){return new Promise((function(r,n){var o=function(){try{return r()}catch(t){return n(t)}},i=function(t){try{return e.clearChosenCard(),o()}catch(t){return n(t)}};try{return Promise.resolve(miro.board.widgets.update([{id:t}])).then((function(r){try{return setTimeout(e.checkCardExistence,1e3,t),o()}catch(t){return i()}}),i)}catch(t){i()}}))},e.hideList=function(){e.setState({showList:!1})},e.showList=function(){e.setState({showList:!0})},e.clearChosenCard=function(t){e.setState({chosenCardWidget:null,showList:!0},t)},e.handleBeforeClear=function(){return new Promise((function(t,r){return e.clearChosenCard(),t()}))},e.handleReveal=function(){return new Promise((function(t,e){return t()}))},e.init=function(){return new Promise((function(t,r){var n,o,i,a;if(!miro.currentUser)return t(e.setState({error:"Seems like the app is running not as a part of Miro board"}));var c=function(){try{return t()}catch(t){return r(t)}},u=function(t){try{return console.error(t),e.setState({error:t.toString()}),c()}catch(t){return r(t)}};try{return Promise.resolve(Promise.all([miro.currentUser.getId(),Q()])).then((function(t){try{return o=(n=t)[0],i=n[1],(a=i.find((function(t){return $(t).author===o})))&&e.setChosenCard(a),e.setState({id:o,loading:!1},(function(){miro.onReady(e.onReady)})),c()}catch(t){return u(t)}}),u)}catch(t){u(t)}}))},e.onWidgetsDeleted=function(t){var r=t.data,n=e.state.chosenCardWidget;if(!n)return!1;r.find((function(t){return t.id===n.id}))&&e.clearChosenCard()},e}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=o.prototype;return i.componentDidMount=function(){this.init()},i.render=function(t,e){!function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(t);var r=e.chosenCardWidget,o=e.showList,i=e.loading,a=e.error;return a?Object(n.h)(lt,{severity:"error",title:"Oooops..."},Object(n.h)("code",null,a)):Object(n.h)(n.Fragment,null,Object(n.h)("div",{class:z.a.controlsWrapper},Object(n.h)(J,{onReveal:this.handleReveal,onBeforeClear:this.handleBeforeClear})),Object(n.h)("div",{ref:this.ref,class:z.a.wrapper},!r&&!i&&Object(n.h)(rt,{disabled:!o})),Boolean(r)&&Object(n.h)(nt,{chosenCardWidget:r}),Object(n.h)(st,null))},o}(n.Component);var dt=function(t){var e,r;function o(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={time:Date.now(),count:10},e.updateTime=function(){e.setState({time:Date.now()})},e.increment=function(){e.setState({count:e.state.count+1})},e}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=o.prototype;return i.componentDidMount=function(){this.timer=setInterval(this.updateTime,1e3)},i.componentWillUnmount=function(){clearInterval(this.timer)},i.render=function(t,e){t.user,e.time,e.count;return Object(n.h)("div",{class:D.a.sidebar},Object(n.h)(ft,null))},o}(n.Component),ht=r("1ksb"),vt=r.n(ht);var yt=function(t){var e,r;function o(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={time:1},e}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){return Object(n.h)("div",{class:vt.a.sidebar},Object(n.h)(J,{showClose:!0}))},o}(n.Component);var mt={response_type:"token",redirect_uri:"https://"+window.location.host+"/authorize-success"},bt=function(t){var e,r;function o(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).handleAuthorize=function(){return new Promise((function(t,e){return Promise.resolve(miro.authorize(mt)).then((function(r){try{return Promise.resolve(miro.getToken()).then((function(r){try{return r?miro.board.ui.closeModal("success"):console.log("Something went wrong"),t()}catch(t){return e(t)}}),e)}catch(t){return e(t)}}),e)}))},e}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){return Object(n.h)(H,{title:"Planning poker widget",description:"To use the widget, please authorize it in your account"},Object(n.h)("button",{type:"button",class:"miro-btn miro-btn--primary miro-btn--medium",onClick:this.handleAuthorize},"Authorize app"))},o}(n.Component);var gt=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=o.prototype;return i.componentDidMount=function(){window.opener&&window.opener.miroAuthorized()},i.render=function(){return Object(n.h)(H,{title:"Planning poker widget",description:"You can use the plugin now!"},Object(n.h)("a",{href:"https://miro.com/app/dashboard/"},"Go to Miro dashboard"))},o}(n.Component);var wt=function(t){var e,r;function o(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).handleRoute=function(t){e.currentUrl=t.url},e}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=o.prototype;return i.componentDidMount=function(){var t=localStorage.getItem("path");t&&(localStorage.removeItem("path"),v(t,!0))},i.render=function(){return Object(n.h)("div",{class:C.a.wrapper},Object(n.h)(O,{onChange:this.handleRoute},Object(n.h)(U,{path:"/"}),Object(n.h)(dt,{path:"/sidebar/",user:"me"}),Object(n.h)(yt,{path:"/bottomPanel/",user:"me"}),Object(n.h)(bt,{path:"/authorize/"}),Object(n.h)(gt,{path:"/authorize-success/"})))},o}(n.Component);function _t(){return(_t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var Ot=function(t){var e,r=t.selector,n=t.inline,o=t.clientSpecified,i=[],a=document.currentScript||(e=document.getElementsByTagName("script"))[e.length-1];if(!0===n){var c=a.parentNode;i.push(c)}return!0!==o||r||(r=function(t){var e=t.attributes,r=null;return Object.keys(e).forEach((function(t){e.hasOwnProperty(t)&&("data-mount-in"===e[t].name&&(r=e[t].nodeValue))})),r}(a)),r&&[].forEach.call(document.querySelectorAll(r),(function(t){i.push(t)})),i},jt=function(t,e,r,o,i){e.forEach((function(e){var a=e;if(!a._habitat){a._habitat=!0;var c=function(t,e){void 0===e&&(e={});var r=t.attributes,n=_t({},e);return Object.keys(r).forEach((function(t){if(r.hasOwnProperty(t)){var e=r[t].name;if(!e||"string"!=typeof e)return!1;var o=e.split(/(data-props?-)/).pop()||"";if(e!==(o=o.replace(/-([a-z])/gi,(function(t,e){return e.toUpperCase()})))){var i=r[t].nodeValue;n[o]=i}}})),[].forEach.call(t.getElementsByTagName("script"),(function(t){var e={};if(t.hasAttribute("type")){if("text/props"!==t.getAttribute("type")&&"application/json"!==t.getAttribute("type"))return;try{e=JSON.parse(t.innerHTML)}catch(t){throw new Error(t)}_t(n,e)}})),n}(e,i)||i;return o&&(a.innerHTML=""),Object(n.render)(Object(n.h)(t,c),a,r)}}))},Ct=function(t){var e=t;return{render:function(t){void 0===t&&(t={});var r=t.selector;void 0===r&&(r=null);var n=t.inline;void 0===n&&(n=!1);var o=t.clean;void 0===o&&(o=!1);var i=t.clientSpecified;void 0===i&&(i=!1);var a=t.defaultProps;void 0===a&&(a={});var c=Ot({selector:r,inline:n,clientSpecified:i}),u=function(){if(c.length>0){var t=Ot({selector:r,inline:n,clientSpecified:i});return jt(e,t,null,o,a)}};u(),document.addEventListener("DOMContentLoaded",u),document.addEventListener("load",u)}}};r("Ve17");Ct(wt).render({selector:'[data-widget-host="habitat"]',clean:!0})},SyCT:function(t,e){t.exports='<rect fill="#fff9df" x="22" y="2" width="24" height="36" rx="2.7619" ry="2.7619"></rect><path fill="#3e52d8" d="M46.01,0H21.99A1.99,1.99,0,0,0,20,1.99V8h3V3H45V37H28v3H46.01A1.99,1.99,0,0,0,48,38.01h0V1.99A1.99,1.99,0,0,0,46.01,0Z"></path><path fill="none" d="M26.01,8H1.99A1.99,1.99,0,0,0,0,9.99V46.01A1.99,1.99,0,0,0,1.99,48H26.01A1.99,1.99,0,0,0,28,46.01h0V9.99A1.99,1.99,0,0,0,26.01,8Z"></path><path fill="#3e52d8" d="M26.01,8H1.99A1.99,1.99,0,0,0,0,9.99V46.01A1.99,1.99,0,0,0,1.99,48H26.01A1.99,1.99,0,0,0,28,46.01h0V9.99A1.99,1.99,0,0,0,26.01,8Z"></path><path fill="#050039" d="M.58,24.0005c-.1944-.0013-.3864.0074-.58.0107V46.01A1.99,1.99,0,0,0,1.99,48H24.6346A24.2268,24.2268,0,0,0,.58,24.0005Z"></path><path fill="#ffd02f" d="M.2225,33.33c-.0752,0-.1477.01-.2225.0112V46.01A1.99,1.99,0,0,0,1.99,48h13.3A15.0792,15.0792,0,0,0,.2225,33.33Z"></path><path fill="#ff6474" d="M26.01,8H12.4214A15.7832,15.7832,0,0,0,28,23.579V9.99A1.99,1.99,0,0,0,26.01,8Z"></path>'},Ve17:function(t,e,r){global.Promise||(global.Promise=r("5+HP").default),global.fetch||(global.fetch=r("+TSP"))},YUY5:function(t,e,r){"use strict";r.r(e),e.default=function(t,e){return e=e||{},new Promise((function(r,n){var o=new XMLHttpRequest,i=[],a=[],c={};for(var u in o.open(e.method||"get",t,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(t,e,r){i.push(e=e.toLowerCase()),a.push([e,r]),c[e]=c[e]?c[e]+","+r:r})),r(function t(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:t,headers:{keys:function(){return i},entries:function(){return a},get:function(t){return c[t.toLowerCase()]},has:function(t){return t.toLowerCase()in c}}}}())},o.onerror=n,o.withCredentials="include"==e.credentials,e.headers)o.setRequestHeader(u,e.headers[u]);o.send(e.body||null)}))}},YZ1H:function(t,e,r){t.exports={wrapper:"wrapper__3Coe5"}},duEm:function(t,e,r){t.exports={wrapper:"wrapper__18AHL"}},n5xL:function(t,e,r){t.exports={cardWrapper:"cardWrapper__1MWxn",appear:"appear__3Vz41",card:"card__3IJo5",floating:"floating__34mDX",hiddenImg:"hiddenImg__1BjkP",chosenCardWrapper:"chosenCardWrapper__3hGqt",wrapper:"wrapper__3uuSv",controlsWrapper:"controlsWrapper__1xvok",hiddenCard:"hiddenCard__33y6H"}},pvgs:function(t,e){t.exports='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M23.0049,0h-12.01A.9952.9952,0,0,0,10,.9951V4H.9951A.9952.9952,0,0,0,0,4.9951v18.01A.9952.9952,0,0,0,.9951,24h12.01A.9952.9952,0,0,0,14,23.0049V20h9.0049A.9952.9952,0,0,0,24,19.0049V.9951A.9952.9952,0,0,0,23.0049,0ZM12,22H2V6H12Zm10-4H14V4.9951A.9952.9952,0,0,0,13.0049,4H12V2H22ZM4,9H4A1,1,0,0,1,3,8H3A1,1,0,0,1,4,7H4A1,1,0,0,1,5,8H5A1,1,0,0,1,4,9Zm3,7H7a2,2,0,0,1-2-2H5a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2H9A2,2,0,0,1,7,16Zm3,5h0a1,1,0,0,1-1-1H9a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1h0A1,1,0,0,1,10,21Z"></path></svg>'},uXYu:function(t,e,r){t.exports={wrapper:"wrapper__jTLi2"}}});
//# sourceMappingURL=ssr-bundle.js.map