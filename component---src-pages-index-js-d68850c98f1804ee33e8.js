(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7tbW":function(e,t,r){var n=r("LGYb");e.exports=function(e){return e&&e.length?n(e):[]}},"8jRI":function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function i(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=a(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var a=i(n[0]);a!==n[0]&&(r[n[0]]=a)}n=o.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),u=0;u<c.length;u++){var s=c[u];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},"8yz6":function(e,t,r){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},J4zp:function(e,t,r){var n=r("wTVA"),o=r("m0LI"),a=r("ZhPi"),i=r("wkBT");e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},LGYb:function(e,t,r){var n=r("1hJj"),o=r("jbM+"),a=r("Xt/L"),i=r("xYSL"),c=r("dQpi"),u=r("rEGp");e.exports=function(e,t,r){var s=-1,l=o,f=e.length,p=!0,d=[],y=d;if(r)p=!1,l=a;else if(f>=200){var m=t?null:c(e);if(m)return u(m);p=!1,l=i,y=new n}else y=t?[]:d;e:for(;++s<f;){var v=e[s],g=t?t(v):v;if(v=r||0!==v?v:0,p&&g==g){for(var b=y.length;b--;)if(y[b]===g)continue e;t&&y.push(g),d.push(v)}else l(y,g,r)||(y!==d&&y.push(g),d.push(v))}return d}},O92f:function(e,t,r){},Pmem:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),i=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},RXBc:function(e,t,r){"use strict";r.r(t);var n,o=r("7tbW"),a=r.n(o),i=r("q1tI"),c=r.n(i),u=r("lbRd"),s=r("p3AD"),l=(r("O92f"),function(e){var t=e.title,r=e.selectedCategory,n=e.onClick,o=e.scrollToCenter,a=Object(i.useRef)(null),u=Object(i.useCallback)((function(){o(a),n(t)}),[a]);return Object(i.useEffect)((function(){r===t&&o(a)}),[r,a]),c.a.createElement("li",{ref:a,className:"item",role:"tab","aria-selected":r===t?"true":"false"},c.a.createElement("div",{onClick:u},t))}),f=function(e){var t=e.categories,r=e.category,n=e.selectCategory,o=Object(i.useRef)(null),a=Object(i.useCallback)((function(e){var t=e.current.offsetWidth,r=o.current,n=r.scrollLeft,a=r.offsetWidth,i=n+(e.current.getBoundingClientRect().left-o.current.getBoundingClientRect().left)-a/2+t/2;o.current.scroll({left:i,top:0,behavior:"smooth"})}),[o]);return c.a.createElement("ul",{ref:o,className:"category-container",role:"tablist",id:"category",style:{margin:"0 -"+Object(s.a)(3/4)}},c.a.createElement(l,{title:"All",selectedCategory:r,onClick:n,scrollToCenter:a}),t.map((function(e,t){return c.a.createElement(l,{key:t,title:e,selectedCategory:r,onClick:n,scrollToCenter:a})})))},p=(r("Z/JJ"),c.a.memo((function(e){var t=e.children;return c.a.createElement("div",{className:"thumbnail-container"},t)}))),d=r("Wbzz"),y=r("JqEL");function m(e){return e.filter((function(e){return e.isIntersecting})).forEach((function(e){var t=e.target;return y.a(t,"visible")}))}function v(){return y.e(".observed").forEach((function(e){return n.observe(e)}))}function g(){if(!n)throw Error("Not found IntersectionObserver instance");return Promise.resolve(n.disconnect())}r("aGs0");var b=function(e){var t=e.node;return c.a.createElement(d.Link,{className:"thumbnail observed",to:t.fields.slug},c.a.createElement("div",{key:t.fields.slug},c.a.createElement("h3",null,t.frontmatter.title||t.fields.slug),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))},h=r("WlAH"),x=function(e){var t=e.posts,r=e.countOfInitialPost,n=e.count,o=e.category,a=Object(i.useMemo)((function(){return t.filter((function(e){var t=e.node;return o===h.a.ALL||t.frontmatter.category===o})).slice(0,n*r)}));return c.a.createElement(p,null,a.map((function(e,t){var r=e.node;return c.a.createElement(b,{node:r,key:"item_"+t})})))},j=r("CC2r"),w=r("cr+I"),E=r.n(w),O=r("EXIE");function k(){var e=Object(i.useState)(h.a.ALL),t=e[0],r=e[1],n=function(){window.scrollY>316&&O.b(316)},o=Object(i.useCallback)((function(e){r(e),n(),window.history.pushState({category:e},"",window.location.pathname+"?"+E.a.stringify({category:e}))}),[]),a=Object(i.useCallback)((function(e){void 0===e&&(e=!0);var t=E.a.parse(location.search).category,o=null==t?h.a.ALL:t;r(o),e&&n()}),[]);return Object(i.useEffect)((function(){return O.c(),function(){O.a()}}),[]),Object(i.useEffect)((function(){return window.addEventListener("popstate",a),function(){window.removeEventListener("popstate",a)}}),[]),Object(i.useEffect)((function(){a(!1)}),[]),[t,o]}function I(){Object(i.useEffect)((function(){return n=new IntersectionObserver(m,{root:y.d("#___gatsby"),rootMargin:"20px",threshold:.8}),v(),function(){g(),n=null}}),[]),Object(i.useEffect)((function(){g().then(v)}))}var C=r("2w9V");var A=r("hpys");t.default=function(e){var t,r=e.data,n=e.location,o=r.site.siteMetadata,s=o.configs.countOfInitialPost,l=r.allMarkdownRemark.edges,p=Object(i.useMemo)((function(){return a()(l.map((function(e){return e.node.frontmatter.category})))}),[]),d=function(){var e=C.a(1),t=Object(i.useState)(e),r=t[0],n=t[1],o=Object(i.useRef)(r);return Object(i.useEffect)((function(){o.current=r,C.c(r)}),[r]),[r,o,function(){return n((function(e){return e+1}))}]}(),m=d[0],v=d[1],g=d[2],b=k(),w=b[0],E=b[1];return I(),t=function(){var e=window.scrollY+window.innerHeight,t=function(){return function(e){return y.c()-e}(e)<80};return function(e,t){var r=t.dismissCondition,n=void 0===r?function(){return!1}:r,o=t.triggerCondition,a=void 0===o?function(){return!0}:o;if(!e)throw Error("Invalid required arguments");var i=!1;return function(){if(!i)return i=!0,requestAnimationFrame((function(){if(!n())return a()?(i=!1,e()):void 0;i=!1}))}}(g,{dismissCondition:function(){return!t()},triggerCondition:function(){return t()&&l.length>v.current*s}})()},Object(i.useEffect)((function(){return window.addEventListener("scroll",t,{passive:!1}),function(){window.removeEventListener("scroll",t,{passive:!1})}}),[]),c.a.createElement(A.a,{location:n,title:o.title},c.a.createElement(j.a,{title:h.c,keywords:o.keywords}),c.a.createElement(u.a,null),c.a.createElement(f,{categories:p,category:w,selectCategory:E}),c.a.createElement(x,{posts:l,countOfInitialPost:s,count:m,category:w}))}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},"Xt/L":function(e,t){e.exports=function(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}},"Z/JJ":function(e,t,r){},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},aGs0:function(e,t,r){},c0go:function(e,t,r){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],c=e[i];(o?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},"cr+I":function(e,t,r){"use strict";var n=r("J4zp"),o=r("RIqP");function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r("ToJy"),r("E9XD");var c=r("Pmem"),u=r("8jRI"),s=r("8yz6"),l=r("c0go");function f(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function d(e,t){return t.decode?u(e):e}function y(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function m(e){var t=(e=y(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function v(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,t){f((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&d(r,e).includes(e.arrayFormatSeparator);r=a?d(r,e):r;var i=o||a?r.split(e.arrayFormatSeparator).map((function(t){return d(t,e)})):null===r?r:d(r,e);n[t]=i};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),o=Object.create(null);if("string"!=typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;var i,c=a(e.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value;if(""!==u){var l=s(t.decode?u.replace(/\+/g," "):u,"="),p=n(l,2),y=p[0],m=p[1];m=void 0===m?null:["comma","separator"].includes(t.arrayFormat)?m:d(m,t),r(d(y,t),m,o)}}}catch(O){c.e(O)}finally{c.f()}for(var g=0,b=Object.keys(o);g<b.length;g++){var h=b[g],x=o[h];if("object"==typeof x&&null!==x)for(var j=0,w=Object.keys(x);j<w.length;j++){var E=w[j];x[E]=v(x[E],t)}else o[h]=v(x,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(e,t){var r=o[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))}t.extract=m,t.parse=g,t.stringify=function(e,t){if(!e)return"";f((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[p(t,e),"[",a,"]"].join("")]:[[p(t,e),"[",p(a,e),"]=",p(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[p(t,e),"[]"].join("")]:[[p(t,e),"[]=",p(n,e)].join("")])}};case"comma":case"separator":return function(t){return function(r,n){return null==n||0===n.length?r:0===r.length?[[p(t,e),"=",p(n,e)].join("")]:[[r,p(n,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[p(t,e)]:[[p(t,e),"=",p(n,e)].join("")])}}}}(t),a={},i=0,c=Object.keys(e);i<c.length;i++){var u=c[i];r(u)||(a[u]=e[u])}var s=Object.keys(a);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var o=e[r];return void 0===o?"":null===o?p(r,t):Array.isArray(o)?o.reduce(n(r),[]).join("&"):p(r,t)+"="+p(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=s(e,"#"),o=n(r,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:g(m(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:d(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign({encode:!0,strict:!0},r);var n=y(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),i=Object.assign(a,e.query),c=t.stringify(i,r);c&&(c="?".concat(c));var u=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(p(e.fragmentIdentifier,r))),"".concat(n).concat(c).concat(u)},t.pick=function(e,r,n){n=Object.assign({parseFragmentIdentifier:!0},n);var o=t.parseUrl(e,n),a=o.url,i=o.query,c=o.fragmentIdentifier;return t.stringifyUrl({url:a,query:l(i,r),fragmentIdentifier:c},n)},t.exclude=function(e,r,n){var o=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,o,n)}},dQpi:function(e,t,r){var n=r("yGk4"),o=r("vN+2"),a=r("rEGp"),i=n&&1/a(new n([,-0]))[1]==1/0?function(e){return new n(e)}:o;e.exports=i},m0LI:function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-d68850c98f1804ee33e8.js.map