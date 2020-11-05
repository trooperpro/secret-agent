(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{Qn2u:function(e,t,r){"use strict";r.r(t);var a=r("Ow4o"),s=r("vu0Y"),o=r("pLV6");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var n={VueRemarkRoot:s.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(n).forEach((function(e){"object"===i(n[e])&&"function"==typeof n[e].render||"function"==typeof n[e]&&"function"==typeof n[e].options.render?t[e]=n[e]:r[e]=function(){return n[e]}}))},v=o.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",h={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> Storage"};var c=function(e){e.options[u]&&(e.options[u]=h),o.a.util.defineReactive(e.options,u,h),e.options.computed=v.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},_=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"awaiteddom-spanspan-storage"}},[r("a",{attrs:{href:"#awaiteddom-spanspan-storage","aria-hidden":"true"}},[e._v("#")]),r("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),r("span",[e._v("/")]),e._v(" Storage")]),r("div",{staticClass:"overview"},[e._v("The "),r("strong",[r("code",[e._v("Storage")])]),e._v(" interface of the "),r("a",{attrs:{href:"/en-US/docs/Web/API/Web_Storage_API"}},[e._v("Web Storage API")]),e._v(" provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items.")]),r("div",{staticClass:"overview"},[e._v("To manipulate, for instance, the session storage for a domain, a call to "),r("a",{attrs:{href:"/en-US/docs/Web/API/Window/sessionStorage",title:"The sessionStorage property accesses a session Storage object for the current origin. sessionStorage is similar to localStorage; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends."}},[r("code",[e._v("Window.sessionStorage")])]),e._v(" is made; whereas for local storage the call is made to "),r("a",{attrs:{href:"/en-US/docs/Web/API/Window/localStorage",title:"The read-only localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions."}},[r("code",[e._v("Window.localStorage")])]),e._v(".")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"length"}},[r("a",{attrs:{href:"#length","aria-hidden":"true"}},[e._v("#")]),e._v(".length "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns an integer representing the number of data items stored in the "),r("code",[e._v("Storage\n")]),e._v(" object.")]),r("h4",{attrs:{id:"type-number"}},[r("a",{attrs:{href:"#type-number","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("number")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"clear"}},[r("a",{attrs:{href:"#clear","aria-hidden":"true"}},[e._v("#")]),e._v(".clear"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("When invoked, will empty all keys out of the storage.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-true"}},[r("a",{attrs:{href:"#returns-promisevoid-true","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")]),e._v(" true")]),r("h3",{attrs:{id:"getItem"}},[r("a",{attrs:{href:"#getItem","aria-hidden":"true"}},[e._v("#")]),e._v(".getItem"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("When passed a key name, will return that key's value.")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-true-1"}},[r("a",{attrs:{href:"#returns-promisevoid-true-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")]),e._v(" true")]),r("h3",{attrs:{id:"key"}},[r("a",{attrs:{href:"#key","aria-hidden":"true"}},[e._v("#")]),e._v(".key"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("When passed a number "),r("code",[e._v("n\n")]),e._v(", this method will return the name of the nth key in the storage.")]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-true-2"}},[r("a",{attrs:{href:"#returns-promisevoid-true-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")]),e._v(" true")]),r("h3",{attrs:{id:"removeItem"}},[r("a",{attrs:{href:"#removeItem","aria-hidden":"true"}},[e._v("#")]),e._v(".removeItem"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("When passed a key name, will remove that key from the storage.")]),r("h4",{attrs:{id:"arguments-3"}},[r("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-true-3"}},[r("a",{attrs:{href:"#returns-promisevoid-true-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")]),e._v(" true")]),r("h3",{attrs:{id:"setItem"}},[r("a",{attrs:{href:"#setItem","aria-hidden":"true"}},[e._v("#")]),e._v(".setItem"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.")]),r("h4",{attrs:{id:"arguments-4"}},[r("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-true-4"}},[r("a",{attrs:{href:"#returns-promisevoid-true-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")]),e._v(" true")])])}),[],!1,null,null,null);"function"==typeof d&&d(_),"function"==typeof c&&c(_);t.default=_.exports},vu0Y:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);