(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{486:function(t,e,s){"use strict";s.r(e);var r=s(45),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-errors"}},[t._v("#")]),t._v(" http-errors")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.org/package/http-errors",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/npm/v/http-errors",alt:"NPM Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/npm/dm/http-errors",alt:"NPM Downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/npm/node/http-errors",alt:"Node.js Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://travis-ci.org/jshttp/http-errors",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/travis/jshttp/http-errors/master",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://coveralls.io/r/jshttp/http-errors?branch=master",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/coveralls/c/github/jshttp/http-errors/master",alt:"Test Coverage"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Create HTTP errors for Express, Koa, Connect, etc. with ease.")]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("p",[t._v("This is a "),s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1),t._v(" module available through the\n"),s("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm registry"),s("OutboundLink")],1),t._v(". Installation is done using the\n"),s("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("npm install")]),t._v(" command"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" http-errors\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" createError "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http-errors'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" express "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Please login to view this page.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("This is the current API, currently extracted from Koa and subject to change.")]),t._v(" "),s("h3",{attrs:{id:"error-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-properties"}},[t._v("#")]),t._v(" Error Properties")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("expose")]),t._v(" - can be used to signal if "),s("code",[t._v("message")]),t._v(" should be sent to the client,\ndefaulting to "),s("code",[t._v("false")]),t._v(" when "),s("code",[t._v("status")]),t._v(" >= 500")]),t._v(" "),s("li",[s("code",[t._v("headers")]),t._v(" - can be an object of header names to values to be sent to the\nclient, defaulting to "),s("code",[t._v("undefined")]),t._v(". When defined, the key names should all\nbe lower-cased")]),t._v(" "),s("li",[s("code",[t._v("message")]),t._v(" - the traditional error message, which should be kept short and all\nsingle line")]),t._v(" "),s("li",[s("code",[t._v("status")]),t._v(" - the status code of the error, mirroring "),s("code",[t._v("statusCode")]),t._v(" for general\ncompatibility")]),t._v(" "),s("li",[s("code",[t._v("statusCode")]),t._v(" - the status code of the error, defaulting to "),s("code",[t._v("500")])])]),t._v(" "),s("h3",{attrs:{id:"createerror-status-message-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createerror-status-message-properties"}},[t._v("#")]),t._v(" createError([status], [message], [properties])")]),t._v(" "),s("p",[t._v("Create a new error object with the given message "),s("code",[t._v("msg")]),t._v(".\nThe error object inherits from "),s("code",[t._v("createError.HttpError")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This video does not exist!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[s("code",[t._v("status: 500")]),t._v(" - the status code as a number")]),t._v(" "),s("li",[s("code",[t._v("message")]),t._v(" - the message of the error, defaulting to node's text for that status code.")]),t._v(" "),s("li",[s("code",[t._v("properties")]),t._v(" - custom properties to attach to the object")])]),t._v(" "),s("h3",{attrs:{id:"createerror-status-error-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createerror-status-error-properties"}},[t._v("#")]),t._v(" createError([status], [error], [properties])")]),t._v(" "),s("p",[t._v("Extend the given "),s("code",[t._v("error")]),t._v(" object with "),s("code",[t._v("createError.HttpError")]),t._v("\nproperties. This will not alter the inheritance of the given\n"),s("code",[t._v("error")]),t._v(" object, and the modified "),s("code",[t._v("error")]),t._v(" object is the\nreturn value.")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ENOENT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" httpError "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" expose"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" httpError "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("ul",[s("li",[s("code",[t._v("status")]),t._v(" - the status code as a number")]),t._v(" "),s("li",[s("code",[t._v("error")]),t._v(" - the error object to extend")]),t._v(" "),s("li",[s("code",[t._v("properties")]),t._v(" - custom properties to attach to the object")])]),t._v(" "),s("h3",{attrs:{id:"new-createerror-code-name-msg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-createerror-code-name-msg"}},[t._v("#")]),t._v(" new createError[code || name]([msg]))")]),t._v(" "),s("p",[t._v("Create a new error object with the given message "),s("code",[t._v("msg")]),t._v(".\nThe error object inherits from "),s("code",[t._v("createError.HttpError")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("createError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NotFound")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[s("code",[t._v("code")]),t._v(" - the status code as a number")]),t._v(" "),s("li",[s("code",[t._v("name")]),t._v(' - the name of the error as a "bumpy case", i.e. '),s("code",[t._v("NotFound")]),t._v(" or "),s("code",[t._v("InternalServerError")]),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"list-of-all-constructors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-all-constructors"}},[t._v("#")]),t._v(" List of all constructors")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Status Code")]),t._v(" "),s("th",[t._v("Constructor Name")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("400")]),t._v(" "),s("td",[t._v("BadRequest")])]),t._v(" "),s("tr",[s("td",[t._v("401")]),t._v(" "),s("td",[t._v("Unauthorized")])]),t._v(" "),s("tr",[s("td",[t._v("402")]),t._v(" "),s("td",[t._v("PaymentRequired")])]),t._v(" "),s("tr",[s("td",[t._v("403")]),t._v(" "),s("td",[t._v("Forbidden")])]),t._v(" "),s("tr",[s("td",[t._v("404")]),t._v(" "),s("td",[t._v("NotFound")])]),t._v(" "),s("tr",[s("td",[t._v("405")]),t._v(" "),s("td",[t._v("MethodNotAllowed")])]),t._v(" "),s("tr",[s("td",[t._v("406")]),t._v(" "),s("td",[t._v("NotAcceptable")])]),t._v(" "),s("tr",[s("td",[t._v("407")]),t._v(" "),s("td",[t._v("ProxyAuthenticationRequired")])]),t._v(" "),s("tr",[s("td",[t._v("408")]),t._v(" "),s("td",[t._v("RequestTimeout")])]),t._v(" "),s("tr",[s("td",[t._v("409")]),t._v(" "),s("td",[t._v("Conflict")])]),t._v(" "),s("tr",[s("td",[t._v("410")]),t._v(" "),s("td",[t._v("Gone")])]),t._v(" "),s("tr",[s("td",[t._v("411")]),t._v(" "),s("td",[t._v("LengthRequired")])]),t._v(" "),s("tr",[s("td",[t._v("412")]),t._v(" "),s("td",[t._v("PreconditionFailed")])]),t._v(" "),s("tr",[s("td",[t._v("413")]),t._v(" "),s("td",[t._v("PayloadTooLarge")])]),t._v(" "),s("tr",[s("td",[t._v("414")]),t._v(" "),s("td",[t._v("URITooLong")])]),t._v(" "),s("tr",[s("td",[t._v("415")]),t._v(" "),s("td",[t._v("UnsupportedMediaType")])]),t._v(" "),s("tr",[s("td",[t._v("416")]),t._v(" "),s("td",[t._v("RangeNotSatisfiable")])]),t._v(" "),s("tr",[s("td",[t._v("417")]),t._v(" "),s("td",[t._v("ExpectationFailed")])]),t._v(" "),s("tr",[s("td",[t._v("418")]),t._v(" "),s("td",[t._v("ImATeapot")])]),t._v(" "),s("tr",[s("td",[t._v("421")]),t._v(" "),s("td",[t._v("MisdirectedRequest")])]),t._v(" "),s("tr",[s("td",[t._v("422")]),t._v(" "),s("td",[t._v("UnprocessableEntity")])]),t._v(" "),s("tr",[s("td",[t._v("423")]),t._v(" "),s("td",[t._v("Locked")])]),t._v(" "),s("tr",[s("td",[t._v("424")]),t._v(" "),s("td",[t._v("FailedDependency")])]),t._v(" "),s("tr",[s("td",[t._v("425")]),t._v(" "),s("td",[t._v("UnorderedCollection")])]),t._v(" "),s("tr",[s("td",[t._v("426")]),t._v(" "),s("td",[t._v("UpgradeRequired")])]),t._v(" "),s("tr",[s("td",[t._v("428")]),t._v(" "),s("td",[t._v("PreconditionRequired")])]),t._v(" "),s("tr",[s("td",[t._v("429")]),t._v(" "),s("td",[t._v("TooManyRequests")])]),t._v(" "),s("tr",[s("td",[t._v("431")]),t._v(" "),s("td",[t._v("RequestHeaderFieldsTooLarge")])]),t._v(" "),s("tr",[s("td",[t._v("451")]),t._v(" "),s("td",[t._v("UnavailableForLegalReasons")])]),t._v(" "),s("tr",[s("td",[t._v("500")]),t._v(" "),s("td",[t._v("InternalServerError")])]),t._v(" "),s("tr",[s("td",[t._v("501")]),t._v(" "),s("td",[t._v("NotImplemented")])]),t._v(" "),s("tr",[s("td",[t._v("502")]),t._v(" "),s("td",[t._v("BadGateway")])]),t._v(" "),s("tr",[s("td",[t._v("503")]),t._v(" "),s("td",[t._v("ServiceUnavailable")])]),t._v(" "),s("tr",[s("td",[t._v("504")]),t._v(" "),s("td",[t._v("GatewayTimeout")])]),t._v(" "),s("tr",[s("td",[t._v("505")]),t._v(" "),s("td",[t._v("HTTPVersionNotSupported")])]),t._v(" "),s("tr",[s("td",[t._v("506")]),t._v(" "),s("td",[t._v("VariantAlsoNegotiates")])]),t._v(" "),s("tr",[s("td",[t._v("507")]),t._v(" "),s("td",[t._v("InsufficientStorage")])]),t._v(" "),s("tr",[s("td",[t._v("508")]),t._v(" "),s("td",[t._v("LoopDetected")])]),t._v(" "),s("tr",[s("td",[t._v("509")]),t._v(" "),s("td",[t._v("BandwidthLimitExceeded")])]),t._v(" "),s("tr",[s("td",[t._v("510")]),t._v(" "),s("td",[t._v("NotExtended")])]),t._v(" "),s("tr",[s("td",[t._v("511")]),t._v(" "),s("td",[t._v("NetworkAuthenticationRequired")])])])]),t._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[s("a",{attrs:{href:"LICENSE"}},[t._v("MIT")])])])}),[],!1,null,null,null);e.default=a.exports}}]);