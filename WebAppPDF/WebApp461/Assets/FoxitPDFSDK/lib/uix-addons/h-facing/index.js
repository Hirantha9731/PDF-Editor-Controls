!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("PDFViewCtrl"),require("UIExtension")):"function"==typeof define&&define.amd?define(["PDFViewCtrl","UIExtension"],e):"object"==typeof exports?exports.HFacingViewModeAddon=e(require("PDFViewCtrl"),require("UIExtension")):t.HFacingViewModeAddon=e(t.PDFViewCtrl,t.UIExtension)}(self,(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=90)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(53))},function(t,e,n){var r=n(31),o=Function.prototype,i=o.bind,s=o.call,c=r&&i.bind(s,s);t.exports=r?function(t){return t&&c(t)}:function(t){return t&&function(){return s.apply(t,arguments)}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"function"==typeof t}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(1),o=n(63),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},function(t,e,n){var r=n(0),o=n(13),i=r.String,s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not an object")}},function(t,e,n){var r=n(50);t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},function(e,n){e.exports=t},function(t,e,n){var r=n(31),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},function(t,n){t.exports=e},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(33),o=n(14);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(3);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},function(t,e,n){var r=n(0).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},function(t,e,n){var r=n(0),o=n(3),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},function(t,e,n){var r=n(0),o=n(19),i=n(5),s=n(39),c=n(37),u=n(36),a=o("wks"),f=r.Symbol,l=f&&f.for,d=u?f:f&&f.withoutSetter||s;t.exports=function(t){if(!i(a,t)||!c&&"string"!=typeof a[t]){var e="Symbol."+t;c&&i(f,t)?a[t]=f[t]:a[t]=u&&l?l(e):d(e)}return a[t]}},function(t,e,n){var r=n(4),o=n(22),i=n(32);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},function(t,e,n){var r=n(62),o=n(20);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.2",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"})},function(t,e,n){var r=n(0),o=n(21),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(0),o=n(4),i=n(40),s=n(42),c=n(6),u=n(34),a=r.TypeError,f=Object.defineProperty,l=Object.getOwnPropertyDescriptor;e.f=o?s?function(t,e,n){if(c(t),e=u(e),c(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=l(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return f(t,e,n)}:f:function(t,e,n){if(c(t),e=u(e),c(n),i)try{return f(t,e,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports={}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!=e||0===e?0:(e>0?r:n)(e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){"use strict";var r=n(29),o=n(27);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){"use strict";var r,o,i=n(9),s=n(1),c=n(28),u=n(77),a=n(78),f=n(19),l=n(79),d=n(45).get,p=n(83),h=n(84),v=f("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,m=g,x=s("".charAt),y=s("".indexOf),w=s("".replace),b=s("".slice),R=(o=/b*/g,i(g,r=/a/,"a"),i(g,o,"a"),0!==r.lastIndex||0!==o.lastIndex),I=a.BROKEN_CARET,S=void 0!==/()??/.exec("")[1];(R||S||I||p||h)&&(m=function(t){var e,n,r,o,s,a,f,p=this,h=d(p),E=c(t),P=h.raw;if(P)return P.lastIndex=p.lastIndex,e=i(m,P,E),p.lastIndex=P.lastIndex,e;var O=h.groups,_=I&&p.sticky,j=i(u,p),T=p.source,C=0,L=E;if(_&&(j=w(j,"y",""),-1===y(j,"g")&&(j+="g"),L=b(E,p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==x(E,p.lastIndex-1))&&(T="(?: "+T+")",L=" "+L,C++),n=new RegExp("^(?:"+T+")",j)),S&&(n=new RegExp("^"+T+"$(?!\\s)",j)),R&&(r=p.lastIndex),o=i(g,_?n:p,L),_?o?(o.input=b(o.input,C),o[0]=b(o[0],C),o.index=p.lastIndex,p.lastIndex+=o[0].length):p.lastIndex=0:R&&o&&(p.lastIndex=p.global?o.index+o[0].length:r),S&&o&&o.length>1&&i(v,o[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o&&O)for(o.groups=a=l(null),s=0;s<O.length;s++)a[(f=O[s])[0]]=o[f[1]];return o}),t.exports=m},function(t,e,n){var r=n(0),o=n(75),i=r.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},function(t,e,n){var r=n(0),o=n(30).f,i=n(17),s=n(43),c=n(21),u=n(66),a=n(73);t.exports=function(t,e){var n,f,l,d,p,h=t.target,v=t.global,g=t.stat;if(n=v?r:g?r[h]||c(h,{}):(r[h]||{}).prototype)for(f in e){if(d=e[f],l=t.noTargetGet?(p=o(n,f))&&p.value:n[f],!a(v?f:h+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof d==typeof l)continue;u(d,l)}(t.sham||l&&l.sham)&&i(d,"sham",!0),s(n,f,d,t)}}},function(t,e,n){var r=n(4),o=n(9),i=n(54),s=n(32),c=n(12),u=n(34),a=n(5),f=n(40),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=u(e),f)try{return l(t,e)}catch(t){}if(a(t,e))return s(!o(i.f,t,e),t[e])}},function(t,e,n){var r=n(2);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(0),o=n(1),i=n(2),s=n(18),c=r.Object,u=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?u(t,""):c(t)}:c},function(t,e,n){var r=n(55),o=n(35);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},function(t,e,n){var r=n(0),o=n(15),i=n(3),s=n(56),c=n(36),u=r.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&s(e.prototype,u(t))}},function(t,e,n){var r=n(37);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(57),o=n(2);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},function(t,e,n){var r=n(59);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},function(t,e,n){var r=n(1),o=0,i=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},function(t,e,n){var r=n(4),o=n(2),i=n(41);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(13),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},function(t,e,n){var r=n(4),o=n(2);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},function(t,e,n){var r=n(0),o=n(3),i=n(5),s=n(17),c=n(21),u=n(44),a=n(45),f=n(65).CONFIGURABLE,l=a.get,d=a.enforce,p=String(String).split("String");(t.exports=function(t,e,n,u){var a,l=!!u&&!!u.unsafe,h=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet,g=u&&void 0!==u.name?u.name:e;o(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||f&&n.name!==g)&&s(n,"name",g),(a=d(n)).source||(a.source=p.join("string"==typeof g?g:""))),t!==r?(l?!v&&t[e]&&(h=!0):delete t[e],h?t[e]=n:s(t,e,n)):h?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||u(this)}))},function(t,e,n){var r=n(1),o=n(3),i=n(20),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},function(t,e,n){var r,o,i,s=n(64),c=n(0),u=n(1),a=n(13),f=n(17),l=n(5),d=n(20),p=n(46),h=n(23),v=c.TypeError,g=c.WeakMap;if(s||d.state){var m=d.state||(d.state=new g),x=u(m.get),y=u(m.has),w=u(m.set);r=function(t,e){if(y(m,t))throw new v("Object already initialized");return e.facade=t,w(m,t,e),e},o=function(t){return x(m,t)||{}},i=function(t){return y(m,t)}}else{var b=p("state");h[b]=!0,r=function(t,e){if(l(t,b))throw new v("Object already initialized");return e.facade=t,f(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw v("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(19),o=n(39),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(1),o=n(5),i=n(12),s=n(69).indexOf,c=n(23),u=r([].push);t.exports=function(t,e){var n,r=i(t),a=0,f=[];for(n in r)!o(c,n)&&o(r,n)&&u(f,n);for(;e.length>a;)o(r,n=e[a++])&&(~s(f,n)||u(f,n));return f}},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports=null},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e,r)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){},function(t,e,n){"use strict";var r=n(29),o=n(1),i=n(33),s=n(12),c=n(74),u=o([].join),a=i!=Object,f=c("join",",");r({target:"Array",proto:!0,forced:a||!f},{join:function(t){return u(s(this),void 0===t?",":t)}})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(9),i=n(13),s=n(35),c=n(38),u=n(61),a=n(16),f=r.TypeError,l=a("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,r=c(t,l);if(r){if(void 0===e&&(e="default"),n=o(r,t,e),!i(n)||s(n))return n;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},function(t,e,n){var r=n(1);t.exports=r({}.isPrototypeOf)},function(t,e,n){var r,o,i=n(0),s=n(58),c=i.process,u=i.Deno,a=c&&c.versions||u&&u.version,f=a&&a.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},function(t,e,n){var r=n(15);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(0),o=n(3),i=n(60),s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not a function")}},function(t,e,n){var r=n(0).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},function(t,e,n){var r=n(0),o=n(9),i=n(3),s=n(13),c=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!s(r=o(n,t)))return r;if(i(n=t.valueOf)&&!s(r=o(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!s(r=o(n,t)))return r;throw c("Can't convert object to primitive value")}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(14),i=r.Object;t.exports=function(t){return i(o(t))}},function(t,e,n){var r=n(0),o=n(3),i=n(44),s=r.WeakMap;t.exports=o(s)&&/native code/.test(i(s))},function(t,e,n){var r=n(4),o=n(5),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,a=c&&(!r||r&&s(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:a}},function(t,e,n){var r=n(5),o=n(67),i=n(30),s=n(22);t.exports=function(t,e,n){for(var c=o(e),u=s.f,a=i.f,f=0;f<c.length;f++){var l=c[f];r(t,l)||n&&r(n,l)||u(t,l,a(e,l))}}},function(t,e,n){var r=n(15),o=n(1),i=n(68),s=n(72),c=n(6),u=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(c(t)),n=s.f;return n?u(e,n(t)):e}},function(t,e,n){var r=n(47),o=n(25).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(12),o=n(70),i=n(71),s=function(t){return function(e,n,s){var c,u=r(e),a=i(u),f=o(s,a);if(t&&n!=n){for(;a>f;)if((c=u[f++])!=c)return!0}else for(;a>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,n){var r=n(24),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(48);t.exports=function(t){return r(t.length)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2),o=n(3),i=/#|\.prototype\./,s=function(t,e){var n=u[c(t)];return n==f||n!=a&&(o(e)?r(e):!!e)},c=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=s.data={},a=s.NATIVE="N",f=s.POLYFILL="P";t.exports=s},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){return 1},1)}))}},function(t,e,n){var r=n(0),o=n(76),i=n(3),s=n(18),c=n(16)("toStringTag"),u=r.Object,a="Arguments"==s(function(){return arguments}());t.exports=o?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=u(t),c))?n:a?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},function(t,e,n){var r={};r[n(16)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){"use strict";var r=n(6);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(2),o=n(0).RegExp,i=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),s=i||r((function(){return!o("a","y").sticky})),c=i||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:s,UNSUPPORTED_Y:i}},function(t,e,n){var r,o=n(6),i=n(80),s=n(25),c=n(23),u=n(82),a=n(41),f=n(46),l=f("IE_PROTO"),d=function(){},p=function(t){return"<script>"+t+"<\/script>"},h=function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,e;v="undefined"!=typeof document?document.domain&&r?h(r):((e=a("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):h(r);for(var n=s.length;n--;)delete v.prototype[s[n]];return v()};c[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(d.prototype=o(t),n=new d,d.prototype=null,n[l]=t):n=v(),void 0===e?n:i.f(n,e)}},function(t,e,n){var r=n(4),o=n(42),i=n(22),s=n(6),c=n(12),u=n(81);e.f=r&&!o?Object.defineProperties:function(t,e){s(t);for(var n,r=c(e),o=u(e),a=o.length,f=0;a>f;)i.f(t,n=o[f++],r[n]);return t}},function(t,e,n){var r=n(47),o=n(25);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(15);t.exports=r("document","documentElement")},function(t,e,n){var r=n(2),o=n(0).RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},function(t,e,n){var r=n(2),o=n(0).RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},function(t,e,n){"use strict";var r=n(9),o=n(86),i=n(6),s=n(48),c=n(28),u=n(14),a=n(38),f=n(87),l=n(89);o("match",(function(t,e,n){return[function(e){var n=u(this),o=null==e?void 0:a(e,t);return o?r(o,e,n):new RegExp(e)[t](c(n))},function(t){var r=i(this),o=c(t),u=n(e,r,o);if(u.done)return u.value;if(!r.global)return l(r,o);var a=r.unicode;r.lastIndex=0;for(var d,p=[],h=0;null!==(d=l(r,o));){var v=c(d[0]);p[h]=v,""===v&&(r.lastIndex=f(o,s(r.lastIndex),a)),h++}return 0===h?null:p}]}))},function(t,e,n){"use strict";n(26);var r=n(1),o=n(43),i=n(27),s=n(2),c=n(16),u=n(17),a=c("species"),f=RegExp.prototype;t.exports=function(t,e,n,l){var d=c(t),p=!s((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=p&&!s((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!p||!h||n){var v=r(/./[d]),g=e(d,""[t],(function(t,e,n,o,s){var c=r(t),u=e.exec;return u===i||u===f.exec?p&&!s?{done:!0,value:v(e,n,o)}:{done:!0,value:c(n,e,o)}:{done:!1}}));o(String.prototype,t,g[0]),o(f,d,g[1])}l&&u(f[d],"sham",!0)}},function(t,e,n){"use strict";var r=n(88).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(1),o=n(24),i=n(28),s=n(14),c=r("".charAt),u=r("".charCodeAt),a=r("".slice),f=function(t){return function(e,n){var r,f,l=i(s(e)),d=o(n),p=l.length;return d<0||d>=p?t?"":void 0:(r=u(l,d))<55296||r>56319||d+1===p||(f=u(l,d+1))<56320||f>57343?t?c(l,d):r:t?a(l,d,d+2):f-56320+(r-55296<<10)+65536}};t.exports={codeAt:f(!1),charAt:f(!0)}},function(t,e,n){var r=n(0),o=n(9),i=n(6),s=n(3),c=n(18),u=n(27),a=r.TypeError;t.exports=function(t,e){var n=t.exec;if(s(n)){var r=o(n,t,e);return null!==r&&i(r),r}if("RegExp"===c(t))return o(u,t,e);throw a("RegExp#exec called on incompatible receiver")}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return F}));var r,o=n(7),i=n.n(o),s=n(10),c=(n(51),n(49)),u=n.n(c),a=n(11),f=n.n(a),l=(n(52),n(8)),d=(n(26),n(85),navigator.userAgent.toLowerCase()),p=/opera|opr/.test(d),h=/msie/.test(d),v=/trident/.test(d),g=/\sapplewebkit\//.test(d),m=/chrome/.test(d),x=/safari/.test(d),y=(/firefox/.test(d),/edg\//.test(d)),w=(v||h)&&!p&&"msSaveBlob"in navigator,b=(w&&(!!(r=d.match(/msie ([\d\.]+)/))&&parseInt(r[1])),d.indexOf("edge"),p),R=g,I=(!b&&m&&window.chrome,/crios/.test(d)||!b&&m&&window.chrome,!/huawei/.test(d)&&!b&&x&&!m),S=(navigator.product,/maxthon/.test(d)),E=(document.CompactMode,/tencenttraveler/.test(d)||/qqbrowser/.test(d)),P=(/wechat/.test(d),/metasr/.test(d)||/sogou/.test(d)),O=(/baidubrowser/.test(d),/ucbrowser/.test(d)),_=/liebao/.test(d),j=/miuibrowser/.test(d),T=(/huaweibrowser/.test(d)||/huaweialp/.test(d),/crios/.test(d),function(){if(E||O||P||j||_||S)return!1;if(-1===d.indexOf("chrome"))return!1;var t=function(t,e){var n=navigator.mimeTypes;for(var r in n)if(n[r][t]==e)return!0;return!1}("type","application/vnd.chromium.remoting-viewer");window.chrome}(),!!document.documentMode&&document.documentMode,document.documentMode,document.documentMode,document.documentMode,l.keyboard.BuiltinShortcutCommand),C=function(t){function e(){return t.apply(this,arguments)||this}i()(e,t);var n=e.prototype;return n.onKeyPressed=function(t){var e=this.getPDFDocRender();switch(t.command){case T.ARROW_LEFT:case T.ARROW_RIGHT:return this.viewMode.start(),!1;case T.JUMP_TO_FIRST_PAGE:return this.executor.exec((function(){return e.goToPage(0,{x:0,y:0})})),!1;case T.JUMP_TO_LAST_PAGE:var n=this.getPageCount(),r=n%2==0?n:n-1;return this.executor.exec((function(){return e.goToPage(r,{x:0,y:0})})),!0;case T.SCROLL_TO_NEXT_VISIBLE_AREA:return this.viewMode.toNext(),!0;case T.SCROLL_TO_PREVIOUS_VISIBLE_AREA:return this.viewMode.toPrev(),!0}return!1},n.onKeyReleased=function(t){switch(t.command){case T.ARROW_LEFT:case T.ARROW_RIGHT:return this.viewMode.end(),!0}return!1},e}(l.viewMode.ViewModeShortcutHandler),L=l.ViewerEvents,M=l.vendors,V=M.jQuery,A=M.Hammer,W=function(t){function e(e){var n;return(n=t.call(this,e)||this).pdfViewer=e.pdfViewer,n.start=n.start.bind(f()(n)),n.end=n.end.bind(f()(n)),n.mousedown=n.mousedown.bind(f()(n)),n.mouseup=n.mouseup.bind(f()(n)),n.panning=!1,n.panType=null,n.animating=!1,n.lastElement=null,n.appendLast=n.appendLast.bind(f()(n)),n}i()(e,t),e.getName=function(){return"h-facing-view-mode"};var n=e.prototype;return n.getJQItems=function(){return V(this.getItems())},n.disableScroll=function(){this.docRender.pdfViewer.eventEmitter.emit(L.disableScroll)},n.enableScroll=function(){this.docRender.pdfViewer.eventEmitter.emit(L.enableScroll)},n.into=function(e,n){var r=this;t.prototype.into.call(this,e,n),this.renderSize(),this.disableScroll();var o=this.constructor.getName(),i=["<style>",".fv__pdf-viewer,.fv__pdf-viewer-layout,.fv__pdf-viewer-container,.fv__pdf-doc-layout{","height:100%;","}","."+o+"{","display:flex;","width:fit-content;","min-height:100%;","}","."+o+" .fv__pdf-view-mode-item{","display: -webkit-box;","display: -ms-flexbox;","display: -webkit-flex;","display: flex;","align-items:center;","}","."+o+" .fv__pdf-view-mode-item:nth-child(2n+1){","margin-right:10px;","-ms-justify-content: end;","-webkit-justify-content: end;","justify-content: end;","}","."+o+" .fv__pdf-view-mode-item:nth-child(2n){","-ms-justify-content: flex-start;","-webkit-justify-content: flex-start;","justify-content: flex-start;","}","."+o+" .fv__pdf-page-layout{","margin:0;","}","."+o+" .fv__pdf-page-layout.fv__rendering{","min-width:128px;","}","</style>"].join("");this.appendLast(),this.$style=V(i),this.docRender.pagesRender.$ui.append(this.$style),this.docRender.$container.addClass(this.constructor.getName()),this.docRender.$ui.parents(".fv__ui-pdfviewer").css({"overflow-y":"unset","overflow-x":"scroll"});var s=this.docRender.viewerRender.scrollWrap;this.scrollHost=s.getScrollHost(),this.scrollHost.addEventListener("mousedown",this.mousedown),V(window).on("mouseup",this.mouseup),this.pdfViewer.eventEmitter.on(L.fitWidthResizeViewport,this.resize=function(){r.renderSize()}),this.pdfViewer.eventEmitter.on(L.zoomToSuccess,this.zoom=function(){r.renderSize()}),this.pdfViewer.eventEmitter.on(L.pageAdded,this.appendLast),this.pdfViewer.eventEmitter.on(L.insertPages,this.appendLast),this.pdfViewer.eventEmitter.on(L.pageRemoved,this.appendLast),this.pdfViewer.eventEmitter.on(L.pagesRemoved,this.appendLast);var c=this.hammer=new A.Manager(this.scrollHost,{recognizers:[[A.Pan,{direction:A.DIRECTION_ALL}]]}),u=0,a=0;c.on("panstart",(function(){var t=r.allInVisible();r.leftIn=t.leftIn,r.rightIn=t.rightIn,r.panning=!0})),c.on("panmove",(function(t){if(r.panning){var e=t.deltaX,n=t.deltaY,o=r.docRender.doc.getPageCount(),i=r.docRender.viewerRender.scrollWrap,s=i.getScrollLeft(),c=r.scrollHost.clientWidth+s,f=(i.getScrollTop(),r.docRender.getCurrentPageIndex()),l=f%2==0?f:f-1,d=l+1,p=r.getJQItems(),h=p.get(l).offsetLeft,v=null,g=u-e,m=a-n;v=o%2==1&&d>=o?r.lastElement.get(0).offsetLeft+r.lastElement.width():p.get(d).offsetLeft+p.eq(d).width(),u=e,a=n;var x=v-c,y=h-s;g>=0&&g>x&&(g=x),g<0&&g<y&&(g=y),i.scrollBy(g,m)}})),c.on("panend",(function(){1===r.panType?r.toNext():2===r.panType&&r.toPrev(),r.panning=!1,r.panType=null,u=0,a=0})),c.on("panleft",(function(){r.panning&&r.rightIn&&!r.animating&&(r.panType=1)})),c.on("panright",(function(){r.panning&&r.leftIn&&!r.animating&&(r.panType=2)})),this._unwatchScrollEvent=s.addScrollEventListener((function(){clearTimeout(r.scrollEventTimer),r.scrollEventTimer=setTimeout((function(){var t=r.docRender.pagesRender;t&&t.renderVisiblePages().then((function(){r.docRender.setCurrentPageIndex(r.getCurrentPageIndex())}),(function(){}))}),30)}))},n.appendLast=function(){var t=this.docRender.doc.getPageCount();t%2==1?(this.lastElement=V("<div class='fv__pdf-view-mode-item-blank'></div>"),this.getJQItems().eq(t-1).after(this.lastElement)):this.lastElement&&(this.lastElement.remove(),this.lastElement=null)},n.renderViewMode=function(t,e,n,r,o){var i=this.docRender.pagesRender.$ui.height(),s=t.index,c=this.scrollHost,u=c.clientWidth;c.clientHeight;if(s%2==0){var a=this.docRender.doc.getPageCount()-1,f=r,l=this.getJQItems().eq(s),d=this.getJQItems().eq(s+1),p=this.pdfViewer.getPDFPageRender(s+1),h=p?p.getShowWidth():0;this.lastElement&&s===a&&(h=r),u-(f+h+10)>0?(l.css({width:u/2-5}),d.css({width:u/2-5}),s===a&&this.lastElement&&this.lastElement.css({width:u/2-5})):(l.css({width:""}),d.css({width:""}),s===a&&this.lastElement&&this.lastElement.css({width:r}))}},n.renderSize=function(){var t=this.docRender.getCurrentPageIndex();this.getVisibleIndexes().length>1&&t%2==1&&this.docRender.goToPage(t-1,{x:0,y:0}),this.docRender.goToPage(t,{x:0,y:0})},n.mousedown=function(t){var e=this.scrollHost,n=V(e).offset(),r=n.top,o=n.left,i=o+e.clientWidth,s=r+e.clientHeight;this.dragging=!0;var c=t.clientX,u=t.clientY;return this.scrollType=o<=c&&c<=i&&r<=u&&u<=s?0:i<c&&r<u?1:2,this.client={x:c,y:u},this.start(),!1},n.mouseup=function(t){this.dragging,this.client,this.panning;2===this.scrollType&&this.end()},n.start=function(){this.scrollPageIndex=this.docRender.getCurrentPageIndex()},n.end=function(){var t=this.getVisibleIndexes();if(!(t.length<=2&&t[0]%2==0)){var e=t.indexOf(this.scrollPageIndex),n=t.length-1,r=null;e>-1?e<n/2?(r=(r=t[n])%2==0?r:r-1,this.docRender.goToPage(r,{x:0,y:0})):(r=(r=t[0])%2==0?r:r-1,this.docRender.goToPage(r,{x:0,y:0})):t[0]>e?(r=(r=t[n])%2==0?r:r-1,this.docRender.goToPage(r,{x:0,y:0})):t[n]<e&&(r=(r=t[0])%2==0?r:r-1,this.docRender.goToPage(r,{x:0,y:0}))}},n.toNext=function(){var t=this.docRender.getCurrentPageIndex();this.animation(t+1,!1)},n.toPrev=function(){var t=this.docRender.getCurrentPageIndex();this.animation(t-1,!0)},n.animation=function(t,e){var n=this.docRender,r=n.doc.getPageCount();if(!(t<0||t>=r)){var o=null,i=null;t%2==0?(o=t,i=t+1):(o=t-1,i=t);var s=n.viewerRender.scrollWrap,c=this.scrollHost.clientWidth,u=this.getJQItems(),a=(u.get(o).offsetLeft,u.get(i).offsetLeft+u.eq(i).width()),f=s.getScrollLeft(),l=s.getScrollTop(),d=e?-c:c,p=30,h=a-f;!e&&h>c&&(d=h),e&&h<0&&(d-=h);var v=d/p;this.animating=!0;var g=this,m=setInterval((function(){p>0?(f+=v,s.scrollTo(f,l),p--):(clearInterval(m),g.animating=!1,n.setCurrentPageIndex(t))}),10)}},n.allInVisible=function(){var t=this.docRender.doc.getPageCount(),e=this.docRender.getCurrentPageIndex(),n=null,r=null;e%2==0?(n=e,r=e+1):(n=e-1,r=e);var o=this.getJQItems(),i=this.docRender.viewerRender.scrollWrap,s=this.scrollHost.clientWidth,c=this.scrollHost.clientHeight,u=(i.getScrollTop(),i.getScrollLeft()),a=u+s,f=o.get(n).offsetLeft,l=null;l=t%2==1&&r>=t?this.lastElement.get(0).offsetLeft+this.lastElement.width():o.get(r).offsetLeft+o.eq(r).width();var d=!1,p=!1;return Math.abs(u-f)<=1&&(d=!0),Math.abs(a-l)<=1&&(p=!0),{leftIn:d,rightIn:p}},n.jumpToPage=function(t,e){var n=e.x,r=void 0===n?0:n,o=e.y,i=void 0===o?0:o,s=this.getJQItems();t>=s.length?t=s.length-1:t<0&&(t=0);var c=s[t],u=c.offsetLeft+r,a=c.offsetTop+i;this.docRender.viewerRender.scrollWrap.scrollTo(u,a)},n.getCurrentPageIndex=function(){for(var t,e=this.docRender.$ui,n=this.getJQItems(),r=this.docRender.viewerRender.scrollWrap,o=(r.getScrollTop(),e.height(),r.getScrollLeft()),i=o+e.width(),s=[],c=0;c<n.length;c++){var u=n[c],a=u.offsetLeft,f=V(u).width(),l=a+f;a<=o&&l>o&&l<i?s.push({index:c,width:l-o}):a>=o&&l<i?s.push({index:c,width:f}):a<=o&&l>i?t=c:a>=o&&a<i&&l>i&&s.push({index:c,width:i-a})}if(null==t)for(var d=0,p=0;p<s.length;p++)s[p].width>d&&(d=s[p].width,t=s[p].index);return t},n.getFitHeight=function(t){var e=this.docRender.viewerRender.scrollWrap;return e.getHeight()-e.getScrollOffsetTop()},n.getFitWidth=function(t){var e=this.docRender.viewerRender.scrollWrap;return(e.getWidth()-e.getScrollOffsetLeft())/2-5},n.getVisibleIndexes=function(){var t=this.docRender.viewerRender.scrollWrap,e=this.docRender.$ui.width(),n=e/2;I&&(n=0);var r=t.getScrollLeft()-t.getScrollOffsetLeft(),o=r+e+n,i=[];return this.getJQItems().each((function(t,e){var s=e.offsetLeft,c=e.offsetWidth+s;r-n<c&&o>s&&i.push(t)})),i},n.getNextPageIndex=function(){var t=this.docRender.doc.getPageCount()-1,e=this.docRender.getCurrentPageIndex(),n=this.getVisibleIndexes(),r=0;return r=e%2==1||1===n.length?e+1:e+2,Math.min(t,Math.max(0,r))},n.getPrevPageIndex=function(){var t=this.docRender.doc.getPageCount()-1,e=this.docRender.getCurrentPageIndex(),n=this.getVisibleIndexes(),r=0;return r=e%2==0?1===n.length?e-1:e-2:1===n.length?e-1:e-3,Math.min(t,Math.max(0,r))},n.out=function(){this.enableScroll(),this.lastElement&&(this.lastElement.remove(),this.lastElement=null),this.scrollHost.removeEventListener("mousedown",this.mousedown),V(window).off("mouseup",this.mouseup),this.hammer.destroy(),this.pdfViewer.eventEmitter.off(L.zoomToSuccess,this.zoom),this.pdfViewer.eventEmitter.off(L.fitWidthResizeViewport,this.resize),this.docRender.$container.removeClass(this.constructor.getName()),this.docRender.$ui.parents(".fv__ui-pdfviewer").css({"overflow-x":"","overflow-y":""}),this.$style&&this.$style.remove();for(var t=this.getJQItems(),e=0;e<t.length;e++)t.eq(e).css({width:""})},n.generateShortcutEventHandler=function(){return new C(this)},e}(l.IViewMode),F=(s.Controller,s.PDFViewCtrl.Events,function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.getName=function(){return"h-facing"},e.getLoader=function(){return u.a},e.initOnLoad=function(){s.modular.module("h-facing",[]).registerPreConfiguredComponent("h-facing-button",{template:'\n            <xbutton @tooltip name="h-facing-button" icon-class="fv__icon-toolbar-h-facing-page">h-facing:buttons.title</xbutton>\n            ',config:[{target:"h-facing-button",tooltip:{title:"h-facing:buttons.title"},callback:function(t){function e(e){return t.call(this,e,W.getName())||this}return i()(e,t),e}(s.controllers.ViewModeController)}]})},e.prototype.init=function(e,n){t.prototype.init.call(this,e,n),n.getViewModeManager().register(W)},e}(s.UIXAddon))}]).default}));