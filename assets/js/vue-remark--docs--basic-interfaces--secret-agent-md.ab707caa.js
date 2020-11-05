(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{"2s6V":function(e,t,a){"use strict";a.r(t);var r=a("Ow4o"),s=a("vu0Y"),n=a("pLV6");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var i={VueRemarkRoot:s.a},v=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===o(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?t[e]=i[e]:a[e]=function(){return i[e]}}))},p=n.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",_={excerpt:null,title:"SecretAgent"};var u=function(e){e.options[c]&&(e.options[c]=_),n.a.util.defineReactive(e.options,c,_),e.options.computed=p.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},d=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"secretagent"}},[a("a",{attrs:{href:"#secretagent","aria-hidden":"true"}},[e._v("#")]),e._v("SecretAgent")]),a("p",[e._v("This is the primary entry point for launching SecretAgent. The following is a simple example:")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[e._v("SecretAgent")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'secret-agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("async")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SecretAgent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("goto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://www.google.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// other actions...")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])]),a("p",[e._v("Unlike most other browsers, SecretAgent is initialized with a single window that can spawn tabs. Only a single tab can be focused at a time, meaning clicks and other user interaction will go to the active tab.")]),a("p",[e._v("Each SecretAgent instance has its own cache, cookies, session data, and "),a("a",{attrs:{href:"../advanced-features/emulators"}},[e._v("emulator")]),e._v(". No data is shared between instances -- each operates within an airtight sandbox to ensure no identities leak across requests.")]),a("h2",{attrs:{id:"constructor"}},[a("a",{attrs:{href:"#constructor","aria-hidden":"true"}},[e._v("#")]),e._v("Constructor")]),a("h3",{attrs:{id:"constructor-1"}},[a("a",{attrs:{href:"#constructor-1","aria-hidden":"true"}},[e._v("#")]),e._v("new SecretAgent"),a("em",[e._v("(options)")])]),a("p",[e._v("Creates a new sandboxed browser instance with "),a("a",{attrs:{href:"../overview/basic-concepts"}},[e._v("unique user session and fingerprints")]),e._v(". Or pass in an existing UserProfile.")]),a("p",[e._v("You can optionally await an instance (or constructor) to cause the connection to the underlying SecretAgent to be initialized. If you don't await, the connection will be established on the first call.")]),a("p",[e._v("Note: If you provide a "),a("code",{pre:!0},[e._v("name")]),e._v(" that has already been used to name another instance then a counter will be appended to your string to ensure its uniqueness. However, it's only unique within a single NodeJs process (i.e., rerunning your script will reset the counter).")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[e._v("SecretAgent")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'secret-agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("async")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// connection established here")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SecretAgent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])]),a("h4",{attrs:{id:"arguments"}},[a("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("options "),a("code",{pre:!0},[e._v("object")]),e._v(" Accepts any of the following:"),a("ul",[a("li",[e._v("name "),a("code",{pre:!0},[e._v("string")]),e._v(". This is used to generate a unique sessionName.")]),a("li",[e._v("emulatorId "),a("code",{pre:!0},[e._v("string")]),e._v(" defaults to "),a("code",{pre:!0},[e._v("chrome-83")]),e._v(". Emulates a specific browser engine version.")]),a("li",[e._v("humanoidId "),a("code",{pre:!0},[e._v("string")]),e._v(". Drives human-like mouse/keyboard movements.")]),a("li",[e._v("timezoneId "),a("code",{pre:!0},[e._v("string")]),e._v(". Overrides the host timezone. A list of valid ids are available at "),a("a",{attrs:{href:"https://unicode-org.github.io/cldr-staging/charts/37/supplemental/zone_tzid.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("unicode.org")])]),a("li",[e._v("locale "),a("code",{pre:!0},[e._v("string")]),e._v(". Overrides the host languages settings (eg, en-US). Locale will affect navigator.language value, Accept-Language request header value as well as number and date formatting rules.")]),a("li",[e._v("viewport "),a("code",{pre:!0},[e._v("IViewport")]),e._v(". Sets the emulated screen size, window position in the screen, inner/outer width and height. If not provided, a random screen, position and viewport will be statistically sampled from data pulled from "),a("a",{attrs:{href:"https://gs.statcounter.com/screen-resolution-stats/desktop/united-states-of-america",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("statcounter.com")]),e._v(".")]),a("li",[e._v("renderingOptions "),a("code",{pre:!0},[e._v("string[]")]),e._v(". Controls browser functionality.")]),a("li",[e._v("userProfile "),a("code",{pre:!0},[e._v("IUserProfile")]),e._v(". Previous user's cookies, session, etc.")]),a("li",[e._v("showReplay "),a("code",{pre:!0},[e._v("boolean")]),e._v(". Whether or not to show the Replay UI. Can also be set with an env variable: "),a("code",{pre:!0},[e._v("SA_SHOW_REPLAY=true")]),e._v(".")])])])]),a("h2",{attrs:{id:"properties"}},[a("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),a("h3",{attrs:{id:"active-tab"}},[a("a",{attrs:{href:"#active-tab","aria-hidden":"true"}},[e._v("#")]),e._v("agent.activeTab")]),a("p",[e._v("Returns a reference to the currently active tab.")]),a("h4",{attrs:{id:"type-tab"}},[a("a",{attrs:{href:"#type-tab","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("Tab")])]),a("h3",{attrs:{id:"cookies"}},[a("a",{attrs:{href:"#cookies","aria-hidden":"true"}},[e._v("#")]),e._v("agent.cookies")]),a("p",[e._v("Returns an array of cookies across all open tabs.")]),a("h4",{attrs:{id:"type-promisecookie"}},[a("a",{attrs:{href:"#type-promisecookie","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<Cookie[]>")])]),a("h3",{attrs:{id:"document"}},[a("a",{attrs:{href:"#document","aria-hidden":"true"}},[e._v("#")]),e._v("agent.document "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("Returns a reference to the document that the active tab contains.")]),a("h4",{attrs:{id:"type-superdocument"}},[a("a",{attrs:{href:"#type-superdocument","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("SuperDocument")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#document"}},[e._v("activeTab.document")])]),a("h3",{attrs:{id:"lastCommandId"}},[a("a",{attrs:{href:"#lastCommandId","aria-hidden":"true"}},[e._v("#")]),e._v("agent.lastCommandId")]),a("p",[e._v("An execution point that refers to a command run on this instance ("),a("code",{pre:!0},[e._v("waitForElement")]),e._v(", "),a("code",{pre:!0},[e._v("click")]),e._v(", "),a("code",{pre:!0},[e._v("type")]),e._v(", etc). Command ids can be passed to select "),a("code",{pre:!0},[e._v("waitFor*")]),e._v(" methods to indicate a starting point to listen for changes.")]),a("h4",{attrs:{id:"type-promisenumber"}},[a("a",{attrs:{href:"#type-promisenumber","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<number>")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#lastCommandId"}},[e._v("activeTab.lastCommandId")])]),a("h3",{attrs:{id:"sessionId"}},[a("a",{attrs:{href:"#sessionId","aria-hidden":"true"}},[e._v("#")]),e._v("agent.sessionId")]),a("p",[e._v("An identifier used for storing logs, snapshots, and other assets associated with the current session.")]),a("h4",{attrs:{id:"type-promisestring"}},[a("a",{attrs:{href:"#type-promisestring","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<string>")])]),a("h3",{attrs:{id:"sessionName"}},[a("a",{attrs:{href:"#sessionName","aria-hidden":"true"}},[e._v("#")]),e._v("agent.sessionName")]),a("p",[e._v("A human-readable identifier of the current SecretAgent session.")]),a("p",[e._v("You can set this property when calling "),a("a",{attrs:{href:"./secret-agent#constructor"}},[e._v("new SecretAgent()")]),e._v(".")]),a("h4",{attrs:{id:"type-promisestring-1"}},[a("a",{attrs:{href:"#type-promisestring-1","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<string>")])]),a("h3",{attrs:{id:"storage"}},[a("a",{attrs:{href:"#storage","aria-hidden":"true"}},[e._v("#")]),e._v("agent.storage")]),a("p",[e._v("Returns a reference to the "),a("a",{attrs:{href:"./storage"}},[e._v("Storage")]),e._v(" instance controlling storage retrieval and manipulation for the agent.")]),a("h4",{attrs:{id:"type-storage"}},[a("a",{attrs:{href:"#type-storage","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("Storage")])]),a("h3",{attrs:{id:"tabs"}},[a("a",{attrs:{href:"#tabs","aria-hidden":"true"}},[e._v("#")]),e._v("agent.tabs")]),a("p",[e._v("Returns all open browser tabs.")]),a("h4",{attrs:{id:"type-promisetab"}},[a("a",{attrs:{href:"#type-promisetab","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<Tab[]>")])]),a("h3",{attrs:{id:"url"}},[a("a",{attrs:{href:"#url","aria-hidden":"true"}},[e._v("#")]),e._v("agent.url")]),a("p",[e._v("The url of the active tab.")]),a("h4",{attrs:{id:"type-promisestring-2"}},[a("a",{attrs:{href:"#type-promisestring-2","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<string>")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#url"}},[e._v("Tab.url")])]),a("h3",{attrs:{id:"request-type"}},[a("a",{attrs:{href:"#request-type","aria-hidden":"true"}},[e._v("#")]),e._v("agent.Request "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("Returns a constructor for a Request object bound to the "),a("code",{pre:!0},[e._v("activeTab")]),e._v(". Proxies to "),a("a",{attrs:{href:"./tab#request-type"}},[e._v("tab.Request(tab)")]),e._v(". These objects can be used to run browser-native "),a("a",{attrs:{href:"./tab#fetch"}},[e._v("tab.fetch")]),e._v(" requests from the context of the Tab document.")]),a("h4",{attrs:{id:"type-request"}},[a("a",{attrs:{href:"#type-request","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("Request")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#request-tab"}},[e._v("Tab.Request")])]),a("h2",{attrs:{id:"methods"}},[a("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),a("h3",{attrs:{id:"click"}},[a("a",{attrs:{href:"#click","aria-hidden":"true"}},[e._v("#")]),e._v("agent.click"),a("em",[e._v("(mousePosition)")])]),a("p",[e._v("Executes a click interaction. This is a shortcut for "),a("code",{pre:!0},[e._v("agent.interact({ click: mousePosition })")]),e._v(". See the "),a("a",{attrs:{href:"./interactions"}},[e._v("Interactions page")]),e._v(" for more details.")]),a("h4",{attrs:{id:"arguments-1"}},[a("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("mousePosition "),a("code",{pre:!0},[e._v("MousePosition")])])]),a("h4",{attrs:{id:"returns-promise"}},[a("a",{attrs:{href:"#returns-promise","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise")])]),a("h3",{attrs:{id:"close"}},[a("a",{attrs:{href:"#close","aria-hidden":"true"}},[e._v("#")]),e._v("agent.close"),a("em",[e._v("()")])]),a("p",[e._v("Closes the current instance and any open tabs.")]),a("h4",{attrs:{id:"returns-promise-1"}},[a("a",{attrs:{href:"#returns-promise-1","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise")])]),a("h3",{attrs:{id:"focus-tab"}},[a("a",{attrs:{href:"#focus-tab","aria-hidden":"true"}},[e._v("#")]),e._v("agent.closeTab"),a("em",[e._v("(tab)")])]),a("p",[e._v("Close a single Tab. The first opened Tab will become the focused tab.")]),a("h4",{attrs:{id:"arguments-2"}},[a("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("tab "),a("code",{pre:!0},[e._v("Tab")]),e._v(" The Tab to close.")])]),a("h4",{attrs:{id:"returns-promisevoid"}},[a("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<void>")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#close"}},[e._v("Tab.close()")])]),a("h3",{attrs:{id:"configure"}},[a("a",{attrs:{href:"#configure","aria-hidden":"true"}},[e._v("#")]),e._v("agent.configure"),a("em",[e._v("([options])")])]),a("p",[e._v("Update existing configuration settings.")]),a("h4",{attrs:{id:"arguments-3"}},[a("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("options "),a("code",{pre:!0},[e._v("object")]),e._v(" Accepts any of the following:"),a("ul",[a("li",[e._v("emulatorId "),a("code",{pre:!0},[e._v("string")]),e._v(". Emulate a specific browser version.")]),a("li",[e._v("humanoidId "),a("code",{pre:!0},[e._v("string")]),e._v(". Create human-like mouse/keyboard movements.")]),a("li",[e._v("timezoneId "),a("code",{pre:!0},[e._v("string")]),e._v(". Overrides the host timezone. A list of valid ids are available at "),a("a",{attrs:{href:"https://unicode-org.github.io/cldr-staging/charts/37/supplemental/zone_tzid.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("unicode.org")])]),a("li",[e._v("locale "),a("code",{pre:!0},[e._v("string")]),e._v(". Overrides the host languages settings (eg, en-US). Locale will affect navigator.language value, Accept-Language request header value as well as number and date formatting rules.")]),a("li",[e._v("viewport "),a("code",{pre:!0},[e._v("IViewport")]),e._v(". Sets the emulated screen size, window position in the screen, inner/outer width.")]),a("li",[e._v("renderingOptions "),a("code",{pre:!0},[e._v("string[]")]),e._v(". Controls enabled browser rendering features.")]),a("li",[e._v("showReplay "),a("code",{pre:!0},[e._v("boolean")]),e._v(". Whether or not to show the Replay UI. Can also be set with an env variable: "),a("code",{pre:!0},[e._v("SA_SHOW_REPLAY=true")]),e._v(".")])])])]),a("h4",{attrs:{id:"returns-promise-2"}},[a("a",{attrs:{href:"#returns-promise-2","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise")])]),a("p",[e._v("See the "),a("a",{attrs:{href:"../overview/configuration"}},[e._v("Configuration")]),e._v(" page for more details on "),a("code",{pre:!0},[e._v("options")]),e._v(" and its defaults. You may also want to explore "),a("a",{attrs:{href:"../advanced/emulators"}},[e._v("Emulators")]),e._v(" and "),a("a",{attrs:{href:"../advanced/humanoids"}},[e._v("Humanoids")]),e._v(".")]),a("h3",{attrs:{id:"export-profile"}},[a("a",{attrs:{href:"#export-profile","aria-hidden":"true"}},[e._v("#")]),e._v("agent.exportUserProfile"),a("em",[e._v("()")])]),a("p",[e._v("Returns a json representation of the underlying browser state for saving. This can later be restored into a new instance using "),a("code",{pre:!0},[e._v("new SecretAgent({ userProfile: serialized })")]),e._v(". See the "),a("a",{attrs:{href:"../advanced/user-profile"}},[e._v("UserProfile page")]),e._v(" for more details.")]),a("h4",{attrs:{id:"returns-promiseiuserprofile"}},[a("a",{attrs:{href:"#returns-promiseiuserprofile","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<IUserProfile>")])]),a("h3",{attrs:{id:"interact"}},[a("a",{attrs:{href:"#interact","aria-hidden":"true"}},[e._v("#")]),e._v("agent.interact"),a("em",[e._v("(interaction[, interaction, ...])")])]),a("p",[e._v("Executes a series of mouse and keyboard interactions.")]),a("h4",{attrs:{id:"arguments-4"}},[a("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("interaction "),a("code",{pre:!0},[e._v("Interaction")])])]),a("h4",{attrs:{id:"returns-promise-3"}},[a("a",{attrs:{href:"#returns-promise-3","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise")])]),a("p",[e._v("Refer to the "),a("a",{attrs:{href:"./interactions"}},[e._v("Interactions page")]),e._v(" for details on how to construct an interaction.")]),a("h3",{attrs:{id:"click-1"}},[a("a",{attrs:{href:"#click-1","aria-hidden":"true"}},[e._v("#")]),e._v("agent.scrollTo"),a("em",[e._v("(mousePosition)")])]),a("p",[e._v("Executes a scroll interaction. This is a shortcut for "),a("code",{pre:!0},[e._v("agent.interact({ scroll: mousePosition })")]),e._v(". See the "),a("a",{attrs:{href:"./interactions"}},[e._v("Interactions page")]),e._v(" for more details.")]),a("h4",{attrs:{id:"arguments-5"}},[a("a",{attrs:{href:"#arguments-5","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("mousePosition "),a("code",{pre:!0},[e._v("MousePosition")])])]),a("h4",{attrs:{id:"returns-promise-4"}},[a("a",{attrs:{href:"#returns-promise-4","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise")])]),a("h3",{attrs:{id:"type"}},[a("a",{attrs:{href:"#type","aria-hidden":"true"}},[e._v("#")]),e._v("agent.type"),a("em",[e._v("(keyboardInteraction[, keyboardInteraction, ...])")])]),a("p",[e._v("Executes a keyboard interactions. This is a shortcut for "),a("code",{pre:!0},[e._v("agent.interact({ type: string | KeyName[] })")]),e._v(".")]),a("h4",{attrs:{id:"arguments-6"}},[a("a",{attrs:{href:"#arguments-6","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("keyboardInteraction "),a("code",{pre:!0},[e._v("KeyboardInteraction")])])]),a("h4",{attrs:{id:"returns-promise-5"}},[a("a",{attrs:{href:"#returns-promise-5","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise")])]),a("p",[e._v("Refer to the "),a("a",{attrs:{href:"./interactions"}},[e._v("Interactions page")]),e._v(" for details on how to construct keyboard interactions.")]),a("h3",{attrs:{id:"focus-tab-1"}},[a("a",{attrs:{href:"#focus-tab-1","aria-hidden":"true"}},[e._v("#")]),e._v("agent.focusTab"),a("em",[e._v("(tab)")])]),a("p",[e._v("Bring a tab to the forefront. This will route all interaction ("),a("code",{pre:!0},[e._v("click")]),e._v(", "),a("code",{pre:!0},[e._v("type")]),e._v(", etc) methods to the tab provided as an argument.")]),a("h4",{attrs:{id:"arguments-7"}},[a("a",{attrs:{href:"#arguments-7","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("tab "),a("code",{pre:!0},[e._v("Tab")]),e._v(" The Tab which will become the "),a("code",{pre:!0},[e._v("activeTab")]),e._v(".")])]),a("h4",{attrs:{id:"returns-promisevoid-1"}},[a("a",{attrs:{href:"#returns-promisevoid-1","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<void>")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#focus"}},[e._v("Tab.focus()")])]),a("h3",{attrs:{id:"wait-for-new-tab"}},[a("a",{attrs:{href:"#wait-for-new-tab","aria-hidden":"true"}},[e._v("#")]),e._v("agent.waitForNewTab"),a("em",[e._v("()")])]),a("p",[e._v("Wait for a new tab to be created. This can occur either via a "),a("code",{pre:!0},[e._v("window.open")]),e._v(" from within the page javascript, or a Link with a target opening in a new tab or window.")]),a("h4",{attrs:{id:"returns-promisetab"}},[a("a",{attrs:{href:"#returns-promisetab","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<Tab>")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SecretAgent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://dataliberationfoundation.org/nopost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token dom variable"}},[e._v("document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" activeTab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("goto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// <a id="newTabLink" href="/newPage" target="_blank">Link to new target</a>')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token dom variable"}},[e._v("document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'#newTabLink'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" newTab "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("waitForNewTab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" newTab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("waitForAllContentLoaded")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])]),a("h2",{attrs:{id:"aliased-tab-methods"}},[a("a",{attrs:{href:"#aliased-tab-methods","aria-hidden":"true"}},[e._v("#")]),e._v("Aliased Tab Methods")]),a("p",[e._v("SecretAgent instances have aliases to all top-level Tab methods. They will be routed to the "),a("code",{pre:!0},[e._v("activeTab")]),e._v(".")]),a("h3",{attrs:{id:"fetch"}},[a("a",{attrs:{href:"#fetch","aria-hidden":"true"}},[e._v("#")]),e._v("agent.fetch"),a("em",[e._v("(requestInput, requestInit)")]),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v('Perform a native "fetch" request in the '),a("code",{pre:!0},[e._v("activeTab")]),e._v(" context.")]),a("h4",{attrs:{id:"returns-promiseresponse"}},[a("a",{attrs:{href:"#returns-promiseresponse","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<Response>")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#fetch"}},[e._v("Tab.fetch()")])]),a("h3",{attrs:{id:"get-js-value"}},[a("a",{attrs:{href:"#get-js-value","aria-hidden":"true"}},[e._v("#")]),e._v("agent.getJsValue"),a("em",[e._v("(path)")])]),a("p",[e._v("Extract any publicly accessible javascript value from the "),a("code",{pre:!0},[e._v("activeTab")]),e._v(" webpage context.")]),a("h4",{attrs:{id:"arguments-8"}},[a("a",{attrs:{href:"#arguments-8","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("path "),a("code",{pre:!0},[e._v("string")])])]),a("h4",{attrs:{id:"returns-promiseserializedvalue"}},[a("a",{attrs:{href:"#returns-promiseserializedvalue","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<SerializedValue>")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#get-js-value"}},[e._v("Tab.getJsValue()")])]),a("h3",{attrs:{id:"agentgoback"}},[a("a",{attrs:{href:"#agentgoback","aria-hidden":"true"}},[e._v("#")]),e._v("agent.goBack"),a("em",[e._v("()")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#back"}},[e._v("Tab.goBack")])]),a("h3",{attrs:{id:"agentgoforward"}},[a("a",{attrs:{href:"#agentgoforward","aria-hidden":"true"}},[e._v("#")]),e._v("agent.goForward"),a("em",[e._v("()")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#forward"}},[e._v("Tab.goForward")])]),a("h3",{attrs:{id:"goto"}},[a("a",{attrs:{href:"#goto","aria-hidden":"true"}},[e._v("#")]),e._v("agent.goto"),a("em",[e._v("(href)")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#goto"}},[e._v("Tab.goto")])]),a("h3",{attrs:{id:"agentiselementvisibleelement"}},[a("a",{attrs:{href:"#agentiselementvisibleelement","aria-hidden":"true"}},[e._v("#")]),e._v("agent.isElementVisible"),a("em",[e._v("(element)")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#is-element-visible"}},[e._v("Tab.isElementVisible")])]),a("h3",{attrs:{id:"agentwaitforallcontentloaded"}},[a("a",{attrs:{href:"#agentwaitforallcontentloaded","aria-hidden":"true"}},[e._v("#")]),e._v("agent.waitForAllContentLoaded"),a("em",[e._v("()")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#wait-for-load"}},[e._v("Tab.waitForLoad(AllContentLoaded)")])]),a("h3",{attrs:{id:"agentwaitforresourcefilter-options"}},[a("a",{attrs:{href:"#agentwaitforresourcefilter-options","aria-hidden":"true"}},[e._v("#")]),e._v("agent.waitForResource"),a("em",[e._v("(filter, options)")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#wait-for-resource"}},[e._v("Tab.waitForResource")])]),a("h3",{attrs:{id:"agentwaitforelementelement"}},[a("a",{attrs:{href:"#agentwaitforelementelement","aria-hidden":"true"}},[e._v("#")]),e._v("agent.waitForElement"),a("em",[e._v("(element)")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#wait-for-element"}},[e._v("Tab.waitForElement")])]),a("h3",{attrs:{id:"agentwaitforlocationtrigger"}},[a("a",{attrs:{href:"#agentwaitforlocationtrigger","aria-hidden":"true"}},[e._v("#")]),e._v("agent.waitForLocation"),a("em",[e._v("(trigger)")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#wait-for-location"}},[e._v("Tab.waitForLocation")])]),a("h3",{attrs:{id:"agentwaitformillismillis"}},[a("a",{attrs:{href:"#agentwaitformillismillis","aria-hidden":"true"}},[e._v("#")]),e._v("agent.waitForMillis"),a("em",[e._v("(millis)")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#wait-for-millis"}},[e._v("Tab.waitForMillis")])]),a("h3",{attrs:{id:"agentwaitforwebsocketfilename"}},[a("a",{attrs:{href:"#agentwaitforwebsocketfilename","aria-hidden":"true"}},[e._v("#")]),e._v("agent.waitForWebSocket"),a("em",[e._v("(filename)")])]),a("p",[e._v("Alias for "),a("a",{attrs:{href:"./tab#wait-for-websocket"}},[e._v("Tab.waitForWebSocket")])]),a("h2",{attrs:{id:"events"}},[a("a",{attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v("Events")]),a("p",[e._v("SecretAgent's "),a("a",{attrs:{href:"./event-target"}},[e._v("EventTarget")]),e._v(" interface deviates from the official W3C implementation in that it adds several additional method aliases such as "),a("code",{pre:!0},[e._v("on")]),e._v(" and "),a("code",{pre:!0},[e._v("off")]),e._v(". "),a("a",{attrs:{href:"./event-target"}},[e._v("Learn more")]),e._v(".")]),a("h3",{attrs:{id:"close-event"}},[a("a",{attrs:{href:"#close-event","aria-hidden":"true"}},[e._v("#")]),e._v("'close'")]),a("p",[e._v("Called after the instance is closed.")]),a("h2",{attrs:{id:"class-methods"}},[a("a",{attrs:{href:"#class-methods","aria-hidden":"true"}},[e._v("#")]),e._v("Class Methods")]),a("h3",{attrs:{id:"configure-1"}},[a("a",{attrs:{href:"#configure-1","aria-hidden":"true"}},[e._v("#")]),e._v("SecretAgent.configure"),a("em",[e._v("(options)")])]),a("p",[e._v("Update existing settings.")]),a("h4",{attrs:{id:"arguments-9"}},[a("a",{attrs:{href:"#arguments-9","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("options "),a("code",{pre:!0},[e._v("object")]),e._v(" Accepts any of the following:"),a("ul",[a("li",[e._v("maxConcurrentSessionsCount "),a("code",{pre:!0},[e._v("number")]),e._v(" defaults to "),a("code",{pre:!0},[e._v("10")]),e._v(". Limit concurrent SecretAgent sessions running at any given time.")]),a("li",[e._v("localProxyPortStart "),a("code",{pre:!0},[e._v("number")]),e._v(" defaults to "),a("code",{pre:!0},[e._v("10000")]),e._v(". Starting proxy port.")]),a("li",[e._v("sessionsDir "),a("code",{pre:!0},[e._v("string")]),e._v(" defaults to "),a("code",{pre:!0},[e._v("os.tmpdir()")]),e._v(". Where session files are stored.")]),a("li",[e._v("defaultRenderingOptions "),a("code",{pre:!0},[e._v("string[]")]),e._v(" defaults to "),a("code",{pre:!0},[e._v("[All]")]),e._v(". Controls enabled browser rendering features.")]),a("li",[e._v("defaultUserProfile "),a("code",{pre:!0},[e._v("IUserProfile")]),e._v(". Define user cookies, session, and more.")]),a("li",[e._v("replayServerPort "),a("code",{pre:!0},[e._v("number")]),e._v('. Port to start a live replay server on. Defaults to "any open port".')])])])]),a("h4",{attrs:{id:"returns-promise-6"}},[a("a",{attrs:{href:"#returns-promise-6","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise")])]),a("p",[e._v("See the "),a("a",{attrs:{href:"../overview/configuration"}},[e._v("Configuration")]),e._v(" page for more details on "),a("code",{pre:!0},[e._v("options")]),e._v(" and its defaults.")]),a("p",[e._v("Note: Changing any of these configurations options after "),a("code",{pre:!0},[e._v("new SecretAgent()")]),e._v(" has been called will not affect any instance already created. It only affects future instances.")]),a("h3",{attrs:{id:"shutdown"}},[a("a",{attrs:{href:"#shutdown","aria-hidden":"true"}},[e._v("#")]),e._v("SecretAgent.shutdown"),a("em",[e._v("()")])]),a("p",[e._v("Close SecretAgent and any SecretAgent instances that have been opened.")]),a("h4",{attrs:{id:"returns-promise-7"}},[a("a",{attrs:{href:"#returns-promise-7","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise")])]),a("p",[e._v("After shutdown, the SecretAgent object is considered to be disposed and cannot be used again unless you call SecretAgent.prewarm() to reinitialize.")]),a("p",[e._v("Note: Because Chromium is launched when you call "),a("code",{pre:!0},[e._v("prewarm/new SecretAgent()")]),e._v(", your NodeJS script cannot exit cleanly until "),a("code",{pre:!0},[e._v("shutdown()")]),e._v(" completes.")]),a("h3",{attrs:{id:"prewarm"}},[a("a",{attrs:{href:"#prewarm","aria-hidden":"true"}},[e._v("#")]),e._v("SecretAgent.prewarm"),a("em",[e._v("([options])")])]),a("p",[e._v("Initializes the library and launches any underlying Chromium engines based on which "),a("a",{attrs:{href:"./emulator"}},[e._v("Emulators")]),e._v(" are installed.")]),a("h4",{attrs:{id:"arguments-10"}},[a("a",{attrs:{href:"#arguments-10","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("options "),a("code",{pre:!0},[e._v("object")]),e._v(". Accepts any of the options in "),a("a",{attrs:{href:""}},[e._v("SecretAgent.configure")]),e._v(".")])]),a("h4",{attrs:{id:"returns-promise-8"}},[a("a",{attrs:{href:"#returns-promise-8","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise")])]),a("p",[e._v("Starting SecretAgent can take between 5 and 15 seconds. It must launch the Chromium engine, set up man-in-the-middle proxies, and prime the Emulators and Humanoids.")]),a("p",[e._v("Note: You are not required to call this method as a new instance will do so the first time it runs. Directly calling "),a("code",{pre:!0},[e._v("prewarm")]),e._v(" merely speeds up the response time of your first call to "),a("code",{pre:!0},[e._v("new SecretAgent()")]),e._v(".")])])}),[],!1,null,null,null);"function"==typeof v&&v(d),"function"==typeof u&&u(d);t.default=d.exports},vu0Y:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);