var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,a=f||c||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return a.Date.now()};function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var f=r.test(t);return f||i.test(t)?u(t.slice(2),f?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o,r,i,u,f,c,a=0,l=!1,b=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function h(t){return a=t,f=setTimeout(T,e),l?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||b&&t-a>=i}function T(){var t=v();if(j(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-c);return b?d(n,i-(t-a)):n}(t))}function w(t){return f=void 0,m&&o?g(t):(o=r=void 0,u)}function E(){var t=v(),n=j(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return h(c);if(b)return f=setTimeout(T,e),g(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=y(e)||0,p(n)&&(l=!!n.leading,i=(b="maxWait"in n)?s(y(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},E.flush=function(){return void 0===f?u:w(v())},E};({inputEl:document.querySelector("#search-box"),countryListEl:document.querySelector(".country-list"),countryInfoEl:document.querySelector(".country-info")}).inputEl.addEventListener("input",e((function(t){var e;console.log(t.target.value),e=t.target.value,fetch(`https://restcountries.com/v2/${e}/${e}?fields=capital,currencies\n`).then((t=>t.json())).then((t=>console.log(t)))}),300));
//# sourceMappingURL=index.7bc09843.js.map