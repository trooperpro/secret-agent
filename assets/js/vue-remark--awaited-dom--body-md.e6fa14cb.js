(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{695:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},995:function(e,t,r){"use strict";r.r(t);var s=r(1),a=r(695),o=r(0);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===n(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:r[e]=function(){return i[e]}}))},v=o.a.config.optionMergeStrategies,_="__vueRemarkFrontMatter",u={excerpt:null,title:"Body"};var h=function(e){e.options[_]&&(e.options[_]=u),o.a.util.defineReactive(e.options,_,u),e.options.computed=v.computed({$frontmatter:function(){return e.options[_]}},e.options.computed)},c=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"body"}},[r("a",{attrs:{href:"#body","aria-hidden":"true"}},[e._v("#")]),e._v("Body")]),r("div",{staticClass:"overview"},[r("span",{staticClass:"seoSummary"},[e._v("The "),r("strong",[r("code",[e._v("Body")])]),r("a",{attrs:{href:"/en-US/docs/Glossary/mixin"}},[e._v("mixin")]),e._v(" of the "),r("a",{attrs:{href:"/en-US/docs/Web/API/Fetch_API"}},[e._v("Fetch API")]),e._v(" represents the body of the response/request, allowing you to declare what its content type is and how it should be handled.")])]),r("div",{staticClass:"overview"},[r("code",[e._v("Body")]),e._v(" is implemented by both "),r("a",{attrs:{href:"/en-US/docs/Web/API/Request"}},[r("code",[e._v("Request")])]),e._v(" and "),r("a",{attrs:{href:"/en-US/docs/Web/API/Response"}},[r("code",[e._v("Response")])]),e._v(". This provides these objects with an associated "),r("dfn",[e._v("body")]),e._v(" (a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Streams_API"}},[e._v("stream")]),e._v("), a "),r("dfn",[e._v("used flag")]),e._v(" (initially unset), and a "),r("dfn",[e._v("MIME type")]),e._v(" (initially the empty byte sequence).")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"body-1"}},[r("a",{attrs:{href:"#body-1","aria-hidden":"true"}},[e._v("#")]),e._v(".body "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A simple getter used to expose a "),r("a",{attrs:{href:"/en-US/docs/Web/API/ReadableStream"}},[r("code",[e._v("ReadableStream")])]),e._v(" of the body contents.")]),r("h4",{attrs:{id:"type-null"}},[r("a",{attrs:{href:"#type-null","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"bodyUsed"}},[r("a",{attrs:{href:"#bodyUsed","aria-hidden":"true"}},[e._v("#")]),e._v(".bodyUsed "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"}},[r("code",[e._v("Boolean")])]),e._v(" that indicates whether the body has been read.")]),r("h4",{attrs:{id:"type-null-1"}},[r("a",{attrs:{href:"#type-null-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"arrayBuffer"}},[r("a",{attrs:{href:"#arrayBuffer","aria-hidden":"true"}},[e._v("#")]),e._v(".arrayBuffer"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Takes a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Response"}},[r("code",[e._v("Response")])]),e._v(" stream and reads it to completion. It returns a promise that resolves with an "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"}},[r("code",[e._v("ArrayBuffer")])]),e._v(".")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid"}},[r("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"blob"}},[r("a",{attrs:{href:"#blob","aria-hidden":"true"}},[e._v("#")]),e._v(".blob"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Takes a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Response"}},[r("code",[e._v("Response")])]),e._v(" stream and reads it to completion. It returns a promise that resolves with a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Blob"}},[r("code",[e._v("Blob")])]),e._v(".")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-1"}},[r("a",{attrs:{href:"#returns-promisevoid-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"formData"}},[r("a",{attrs:{href:"#formData","aria-hidden":"true"}},[e._v("#")]),e._v(".formData"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Takes a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Response"}},[r("code",[e._v("Response")])]),e._v(" stream and reads it to completion. It returns a promise that resolves with a "),r("a",{attrs:{href:"/en-US/docs/Web/API/FormData"}},[r("code",[e._v("FormData")])]),e._v(" object.")]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-2"}},[r("a",{attrs:{href:"#returns-promisevoid-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"json"}},[r("a",{attrs:{href:"#json","aria-hidden":"true"}},[e._v("#")]),e._v(".json"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Takes a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Response"}},[r("code",[e._v("Response")])]),e._v(" stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"}},[r("code",[e._v("JSON")])]),e._v(".")]),r("h4",{attrs:{id:"arguments-3"}},[r("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-3"}},[r("a",{attrs:{href:"#returns-promisevoid-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"text"}},[r("a",{attrs:{href:"#text","aria-hidden":"true"}},[e._v("#")]),e._v(".text"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Takes a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Response"}},[r("code",[e._v("Response")])]),e._v(" stream and reads it to completion. It returns a promise that resolves with a "),r("a",{attrs:{href:"/en-US/docs/Web/API/USVString"}},[r("code",[e._v("USVString")])]),e._v(" (text). The response is "),r("em",[e._v("always\n")]),e._v(" decoded using UTF-8.")]),r("h4",{attrs:{id:"arguments-4"}},[r("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-4"}},[r("a",{attrs:{href:"#returns-promisevoid-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])])])}),[],!1,null,null,null);"function"==typeof d&&d(c),"function"==typeof h&&h(c);t.default=c.exports}}]);