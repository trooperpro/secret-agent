(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{"py+n":function(t,s,e){"use strict";e.r(s);var a=e("Ow4o"),n=e("vu0Y"),r=e("pLV6");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var p={VueRemarkRoot:n.a},c=function(t){var s=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?s[t]=p[t]:e[t]=function(){return p[t]}}))},u=r.a.config.optionMergeStrategies,i="__vueRemarkFrontMatter",l={excerpt:null,title:"Basic Concepts"};var v=function(t){t.options[i]&&(t.options[i]=l),r.a.util.defineReactive(t.options,i,l),t.options.computed=u.computed({$frontmatter:function(){return t.options[i]}},t.options.computed)},_=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("VueRemarkRoot",[e("h1",{attrs:{id:"basic-concepts"}},[e("a",{attrs:{href:"#basic-concepts","aria-hidden":"true"}},[t._v("#")]),t._v("Basic Concepts")]),e("h2",{attrs:{id:"each-secretagent-instance-has-a-unique-user"}},[e("a",{attrs:{href:"#each-secretagent-instance-has-a-unique-user","aria-hidden":"true"}},[t._v("#")]),t._v("Each SecretAgent Instance Has a Unique User")]),e("ul",[e("li",[t._v("user-agent")]),e("li",[t._v("ip address")]),e("li",[t._v("audio fingerprint")]),e("li",[t._v("fonts")]),e("li",[t._v("webgl / canvas")]),e("li",[t._v("cookies & storage")]),e("li",[t._v("screen details")]),e("li",[t._v("100s more")])]),e("p",[t._v("Node: IP addresses are set through UpstreamProxy.")]),e("h2",{attrs:{id:"the-dom-has-finally-been-awaited"}},[e("a",{attrs:{href:"#the-dom-has-finally-been-awaited","aria-hidden":"true"}},[t._v("#")]),t._v("The DOM Has Finally Been Awaited")]),e("p",[t._v("The easiest way to explain Dynamic DOM is with some comparison examples. Let's say you want to load a URL and loop through a list of items.")]),e("h3",{attrs:{id:"doing-it-with-secretagent"}},[e("a",{attrs:{href:"#doing-it-with-secretagent","aria-hidden":"true"}},[t._v("#")]),t._v("Doing It with SecretAgent")]),e("p",[t._v("Here's how you would do it with SecretAgent:")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret-agent'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" agent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecretAgent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token dom variable"}},[t._v("document")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elems "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token dom variable"}},[t._v("document")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelectorAll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ul'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elem "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" elems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT FROM items WHERE id=?'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("elem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ^^ WORKS")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),e("p",[t._v("SecretAgent's Dynamic DOM allows you to keep all calls within your script context. It also follows the W3C spec to a T. In fact, go ahead and copy lines 3 through 7 and run paste them into your browser's DevTools. They run perfectly.")]),e("h3",{attrs:{id:"doing-it-with-puppeteer"}},[e("a",{attrs:{href:"#doing-it-with-puppeteer","aria-hidden":"true"}},[t._v("#")]),t._v("Doing It with Puppeteer")]),e("p",[t._v("Here's how you would do it with Puppeteer:")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Puppeteer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'puppeteer'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" selector "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ul li'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("evaluate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("selector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elems "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token dom variable"}},[t._v("document")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelectorAll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elem "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" elems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT FROM items WHERE id=?'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("elem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ^^ BREAKS")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  selector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("p",[t._v("As you'll notice, the above example throws an error. Although you can pass arguments into a remote method, they must be serializable, which means you can only pass through simple types.")]),e("p",[t._v("When used in a simple example as show above, Puppeteer's approach seems okay. However, the reality is, most scraper scripts are complex, and your code becomes littered with multiple contexts, adding context to an already complex environment.")]),e("h2",{attrs:{id:"headless-browsers-need-not-always-render"}},[e("a",{attrs:{href:"#headless-browsers-need-not-always-render","aria-hidden":"true"}},[t._v("#")]),t._v("Headless Browsers Need Not Always Render")]),e("h2",{attrs:{id:"mice-and-keyboards-are-human-too"}},[e("a",{attrs:{href:"#mice-and-keyboards-are-human-too","aria-hidden":"true"}},[t._v("#")]),t._v("Mice and Keyboards Are Human Too")])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);s.default=_.exports},vu0Y:function(t,s,e){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);