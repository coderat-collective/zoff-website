(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{3099:function(e){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},9670:function(e,t,r){var n=r(111);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},1318:function(e,t,r){var n=r(5656),a=r(7466),i=r(1400),o=function(e){return function(t,r,o){var s,u=n(t),c=a(u.length),f=i(o,c);if(e&&r!=r){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},5417:function(e,t,r){var n=r(111),a=r(3157),i=r(5112)("species");e.exports=function(e,t){var r;return a(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!a(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},4326:function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},9920:function(e,t,r){var n=r(6656),a=r(3887),i=r(1236),o=r(3070);e.exports=function(e,t){for(var r=a(t),s=o.f,u=i.f,c=0;c<r.length;c++){var f=r[c];n(e,f)||s(e,f,u(t,f))}}},8880:function(e,t,r){var n=r(9781),a=r(3070),i=r(9114);e.exports=n?function(e,t,r){return a.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,r){var n=r(7293);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,r){var n=r(7854),a=r(111),i=n.document,o=a(i)&&a(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},8113:function(e,t,r){var n=r(5005);e.exports=n("navigator","userAgent")||""},7392:function(e,t,r){var n,a,i=r(7854),o=r(8113),s=i.process,u=s&&s.versions,c=u&&u.v8;c?a=(n=c.split("."))[0]<4?1:n[0]+n[1]:o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(a=n[1]),e.exports=a&&+a},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,r){var n=r(7854),a=r(1236).f,i=r(8880),o=r(1320),s=r(3505),u=r(9920),c=r(4705);e.exports=function(e,t){var r,f,l,d,p,g=e.target,h=e.global,m=e.stat;if(r=h?n:m?n[g]||s(g,{}):(n[g]||{}).prototype)for(f in t){if(d=t[f],l=e.noTargetGet?(p=a(r,f))&&p.value:r[f],!c(h?f:g+(m?".":"#")+f,e.forced)&&void 0!==l){if(typeof d==typeof l)continue;u(d,l)}(e.sham||l&&l.sham)&&i(d,"sham",!0),o(r,f,d,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},6790:function(e,t,r){"use strict";var n=r(3157),a=r(7466),i=r(9974),o=function(e,t,r,s,u,c,f,l){for(var d,p=u,g=0,h=!!f&&i(f,l,3);g<s;){if(g in r){if(d=h?h(r[g],g,t):r[g],c>0&&n(d))p=o(e,t,d,a(d.length),p,c-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[p]=d}p++}g++}return p};e.exports=o},9974:function(e,t,r){var n=r(3099);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,a){return e.call(t,r,n,a)}}return function(){return e.apply(t,arguments)}}},5005:function(e,t,r){var n=r(857),a=r(7854),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(n[e])||i(a[e]):n[e]&&n[e][t]||a[e]&&a[e][t]}},7854:function(e,t,r){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(e,t,r){var n=r(7908),a={}.hasOwnProperty;e.exports=function(e,t){return a.call(n(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,r){var n=r(9781),a=r(7293),i=r(317);e.exports=!n&&!a((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,r){var n=r(7293),a=r(4326),i="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?i.call(e,""):Object(e)}:Object},2788:function(e,t,r){var n=r(5465),a=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return a.call(e)}),e.exports=n.inspectSource},9909:function(e,t,r){var n,a,i,o=r(8536),s=r(7854),u=r(111),c=r(8880),f=r(6656),l=r(5465),d=r(6200),p=r(3501),g="Object already initialized",h=s.WeakMap;if(o||l.state){var m=l.state||(l.state=new h),v=m.get,y=m.has,b=m.set;n=function(e,t){if(y.call(m,e))throw new TypeError(g);return t.facade=e,b.call(m,e,t),t},a=function(e){return v.call(m,e)||{}},i=function(e){return y.call(m,e)}}else{var S=d("state");p[S]=!0,n=function(e,t){if(f(e,S))throw new TypeError(g);return t.facade=e,c(e,S,t),t},a=function(e){return f(e,S)?e[S]:{}},i=function(e){return f(e,S)}}e.exports={set:n,get:a,has:i,enforce:function(e){return i(e)?a(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!u(t)||(r=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},3157:function(e,t,r){var n=r(4326);e.exports=Array.isArray||function(e){return"Array"==n(e)}},4705:function(e,t,r){var n=r(7293),a=/#|\.prototype\./,i=function(e,t){var r=s[o(e)];return r==c||r!=u&&("function"==typeof t?n(t):!!t)},o=i.normalize=function(e){return String(e).replace(a,".").toLowerCase()},s=i.data={},u=i.NATIVE="N",c=i.POLYFILL="P";e.exports=i},111:function(e){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},1913:function(e){e.exports=!1},133:function(e,t,r){var n=r(7392),a=r(7293);e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())||!Symbol.sham&&n&&n<41}))},8536:function(e,t,r){var n=r(7854),a=r(2788),i=n.WeakMap;e.exports="function"==typeof i&&/native code/.test(a(i))},3070:function(e,t,r){var n=r(9781),a=r(4664),i=r(9670),o=r(7593),s=Object.defineProperty;t.f=n?s:function(e,t,r){if(i(e),t=o(t,!0),i(r),a)try{return s(e,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},1236:function(e,t,r){var n=r(9781),a=r(5296),i=r(9114),o=r(5656),s=r(7593),u=r(6656),c=r(4664),f=Object.getOwnPropertyDescriptor;t.f=n?f:function(e,t){if(e=o(e),t=s(t,!0),c)try{return f(e,t)}catch(r){}if(u(e,t))return i(!a.f.call(e,t),e[t])}},8006:function(e,t,r){var n=r(6324),a=r(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,r){var n=r(6656),a=r(5656),i=r(1318).indexOf,o=r(3501);e.exports=function(e,t){var r,s=a(e),u=0,c=[];for(r in s)!n(o,r)&&n(s,r)&&c.push(r);for(;t.length>u;)n(s,r=t[u++])&&(~i(c,r)||c.push(r));return c}},5296:function(e,t){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!r.call({1:2},1);t.f=a?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},3887:function(e,t,r){var n=r(5005),a=r(8006),i=r(5181),o=r(9670);e.exports=n("Reflect","ownKeys")||function(e){var t=a.f(o(e)),r=i.f;return r?t.concat(r(e)):t}},857:function(e,t,r){var n=r(7854);e.exports=n},1320:function(e,t,r){var n=r(7854),a=r(8880),i=r(6656),o=r(3505),s=r(2788),u=r(9909),c=u.get,f=u.enforce,l=String(String).split("String");(e.exports=function(e,t,r,s){var u,c=!!s&&!!s.unsafe,d=!!s&&!!s.enumerable,p=!!s&&!!s.noTargetGet;"function"==typeof r&&("string"!=typeof t||i(r,"name")||a(r,"name",t),(u=f(r)).source||(u.source=l.join("string"==typeof t?t:""))),e!==n?(c?!p&&e[t]&&(d=!0):delete e[t],d?e[t]=r:a(e,t,r)):d?e[t]=r:o(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||s(this)}))},4488:function(e){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},3505:function(e,t,r){var n=r(7854),a=r(8880);e.exports=function(e,t){try{a(n,e,t)}catch(r){n[e]=t}return t}},6200:function(e,t,r){var n=r(2309),a=r(9711),i=n("keys");e.exports=function(e){return i[e]||(i[e]=a(e))}},5465:function(e,t,r){var n=r(7854),a=r(3505),i="__core-js_shared__",o=n[i]||a(i,{});e.exports=o},2309:function(e,t,r){var n=r(1913),a=r(5465);(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.12.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(e,t,r){var n=r(9958),a=Math.max,i=Math.min;e.exports=function(e,t){var r=n(e);return r<0?a(r+t,0):i(r,t)}},5656:function(e,t,r){var n=r(8361),a=r(4488);e.exports=function(e){return n(a(e))}},9958:function(e){var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},7466:function(e,t,r){var n=r(9958),a=Math.min;e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},7908:function(e,t,r){var n=r(4488);e.exports=function(e){return Object(n(e))}},7593:function(e,t,r){var n=r(111);e.exports=function(e,t){if(!n(e))return e;var r,a;if(t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;if("function"==typeof(r=e.valueOf)&&!n(a=r.call(e)))return a;if(!t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},9711:function(e){var t=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+r).toString(36)}},3307:function(e,t,r){var n=r(133);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(e,t,r){var n=r(7854),a=r(2309),i=r(6656),o=r(9711),s=r(133),u=r(3307),c=a("wks"),f=n.Symbol,l=u?f:f&&f.withoutSetter||o;e.exports=function(e){return i(c,e)&&(s||"string"==typeof c[e])||(s&&i(f,e)?c[e]=f[e]:c[e]=l("Symbol."+e)),c[e]}},4944:function(e,t,r){"use strict";var n=r(2109),a=r(6790),i=r(7908),o=r(7466),s=r(9958),u=r(5417);n({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=i(this),r=o(t.length),n=u(t,0);return n.length=a(n,t,t,r,0,void 0===e?1:s(e)),n}})},1496:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var a,i=n(r(1506)),o=n(r(5354)),s=n(r(7316)),u=n(r(7154)),c=n(r(7294)),f=n(r(5697)),l=function(e){var t=(0,u.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},d=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=g(t||r||[]);return n&&n.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(d);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),m=function(e){var t=l(e),r=p(t);return h[r]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,S=new WeakMap;function x(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&c.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function j(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",f=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+c+o+s+r+n+t+i+a+u+f+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(k,(0,u.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,a(n),s):s})),k=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,f=e.onError,l=e.loading,d=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,u.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},g,{onLoad:o,onError:f,ref:t,loading:l,draggable:d,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));k.propTypes={style:f.default.object,onError:f.default.func,onLoad:f.default.func};var T=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!v&&b&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||y&&(v||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=l(e),(r=p(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=l(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,f=e.placeholderStyle,d=void 0===f?{}:f,p=e.placeholderClassName,h=e.fluid,m=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,S=e.itemProp,w=e.loading,j=e.draggable,L=h||m;if(!L)return null;var T=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,u.default)({opacity:T?1:0,transition:P?"opacity "+y+"ms":"none"},s),C="boolean"==typeof v?"lightgray":v,M={transitionDelay:y+"ms"},N=(0,u.default)({opacity:this.state.imgLoaded?0:1},P&&M,s,d),V={title:t,alt:this.state.isVisible?"":r,style:N,className:p,itemProp:S},H=this.state.isHydrated?g(L):L[0];if(h)return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),C&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&M)}),H.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:L,generateSources:O}),H.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:L,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,x(L),c.default.createElement(k,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,u.default)({alt:r,title:t,loading:w},H,{imageVariants:L}))}}));if(m){var _=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete _.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},C&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:C,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},P&&M)}),H.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:L,generateSources:O}),H.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:L,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,x(L),c.default.createElement(k,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,u.default)({alt:r,title:t,loading:w},H,{imageVariants:L}))}}))}return null},t}(c.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=f.default.shape({width:f.default.number.isRequired,height:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string,media:f.default.string}),z=f.default.shape({aspectRatio:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,sizes:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string,media:f.default.string,maxWidth:f.default.number,maxHeight:f.default.number});function C(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");f.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}T.propTypes={resolutions:P,sizes:z,fixed:C(f.default.oneOfType([P,f.default.arrayOf(P)])),fluid:C(f.default.oneOfType([z,f.default.arrayOf(z)])),fadeIn:f.default.bool,durationFadeIn:f.default.number,title:f.default.string,alt:f.default.string,className:f.default.oneOfType([f.default.string,f.default.object]),critical:f.default.bool,crossOrigin:f.default.oneOfType([f.default.string,f.default.bool]),style:f.default.object,imgStyle:f.default.object,placeholderStyle:f.default.object,placeholderClassName:f.default.string,backgroundColor:f.default.oneOfType([f.default.string,f.default.bool]),onLoad:f.default.func,onError:f.default.func,onStartLoad:f.default.func,Tag:f.default.string,itemProp:f.default.string,loading:f.default.oneOf(["auto","lazy","eager"]),draggable:f.default.bool};var M=T;t.Z=M},1757:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(18),a=(r(4944),r(7294)),i=r(5444);var o=r(1496),s=function(e){var t=e.name,r=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["name"]),n=(0,i.K2)("759297313").allImageSharp.images.find((function(e){return e.node.fluid.originalName===t}));return a.createElement(o.Z,Object.assign({},n.node,r))},u=r(7198),c=r(6179),f=function(e){var t=e.data,r=(0,a.useState)([]),o=r[0],f=r[1],l=(0,a.useState)([]),d=l[0],p=l[1],g=(0,a.useState)([]),h=g[0],m=g[1],v=function(e,t){return Math.floor(Math.random()*(t-e))+e};(0,a.useEffect)((function(){var e;e=t.allMarkdownRemark.edges.map((function(e){return[e.node.frontmatter.order,e.node.frontmatter.title]})).sort((function(e,t){return e[0]>t[0]?1:-1})).map((function(e){return e[1]})),f(e)}),[t]),(0,a.useEffect)((function(){!function(){if(o.length>0){var e,r={},a=[];t.allMarkdownRemark.edges.forEach((function(e){var t=e.node.frontmatter.title;r[t]=e.node.frontmatter.projects}));var i=Math.max.apply(Math,(0,n.Z)(Object.values(r).map((function(e){return e.length})))),s=Array(i).fill(o).flat(),u=v(0,4),c=s.slice(0,u);(e=s=s.slice(u,s.length)).push.apply(e,(0,n.Z)(c)),s.forEach((function(e){var t=v(0,r[e].length),n=r[e][t];a.push(n),r[e]=r[e].slice(0,t).concat(r[e].slice(t+1,r[e].length))})),(a=a.filter(Boolean).sort((function(e,t){return e.last_project>t.last_project?1:-1})).reverse()).length>0&&m([a.pop()]),p(a)}}()}),[t,o]);var y=function(){if(d.length>0){var e=d.pop();m((function(t){return[].concat((0,n.Z)(t),[e])}))}},b=function(){return h.map((function(e,t){var r=t===h.length-1,n=0!==d.length;return a.createElement("div",{key:"project-"+t,className:"project-container",role:"button",tabIndex:"0",onClick:r?y:void 0,onKeyPress:void 0,style:{width:e.scale+"%"}},a.createElement("div",{className:"project-inner-container"},a.createElement("div",{className:"image-container"},a.createElement(s,{className:r&&n?"first-image":"",name:e.image}),r&&n?a.createElement("div",{className:"image-cross-overlay",style:{fontSize:e.scale/2+"vw"}},"＋"):""),a.createElement("figcaption",null,e.caption)))})).reverse()};return a.createElement(u.Z,null,a.createElement(c.Z,{title:"Projects"}),a.createElement(b,null),a.createElement("p",null,a.createElement(i.rU,{className:"about-link",to:"/about/"},"zoff"),a.createElement("br",null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ccde3f963f9b116e64f0.js.map