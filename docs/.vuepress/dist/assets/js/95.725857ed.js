(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{475:function(t,e,s){"use strict";s.r(e);var a=s(45),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"media-typer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#media-typer"}},[t._v("#")]),t._v(" media-typer")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.org/package/media-typer",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/media-typer.svg?style=flat",alt:"NPM Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://npmjs.org/package/media-typer",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/dm/media-typer.svg?style=flat",alt:"NPM Downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://nodejs.org/download/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/node.js-%3E%3D_0.6-brightgreen.svg?style=flat",alt:"Node.js Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://travis-ci.org/jshttp/media-typer",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/travis/jshttp/media-typer.svg?style=flat",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://coveralls.io/r/jshttp/media-typer",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/coveralls/jshttp/media-typer.svg?style=flat",alt:"Test Coverage"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Simple RFC 6838 media type parser")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" media-typer\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" typer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'media-typer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"typer-parse-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typer-parse-string"}},[t._v("#")]),t._v(" typer.parse(string)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" typer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/svg+xml; charset=utf-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Parse a media type string. This will return an object with the following\nproperties (examples are shown for the string "),s("code",[t._v("'image/svg+xml; charset=utf-8'")]),t._v("):")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("type")]),t._v(": The type of the media type (always lower case). Example: "),s("code",[t._v("'image'")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("subtype")]),t._v(": The subtype of the media type (always lower case). Example: "),s("code",[t._v("'svg'")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("suffix")]),t._v(": The suffix of the media type (always lower case). Example: "),s("code",[t._v("'xml'")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("parameters")]),t._v(": An object of the parameters in the media type (name of parameter always lower case). Example: "),s("code",[t._v("{charset: 'utf-8'}")])])])]),t._v(" "),s("h3",{attrs:{id:"typer-parse-req"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typer-parse-req"}},[t._v("#")]),t._v(" typer.parse(req)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" typer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Parse the "),s("code",[t._v("content-type")]),t._v(" header from the given "),s("code",[t._v("req")]),t._v(". Short-cut for\n"),s("code",[t._v("typer.parse(req.headers['content-type'])")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"typer-parse-res"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typer-parse-res"}},[t._v("#")]),t._v(" typer.parse(res)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" typer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Parse the "),s("code",[t._v("content-type")]),t._v(" header set on the given "),s("code",[t._v("res")]),t._v(". Short-cut for\n"),s("code",[t._v("typer.parse(res.getHeader('content-type'))")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"typer-format-obj"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typer-format-obj"}},[t._v("#")]),t._v(" typer.format(obj)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" typer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subtype"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" suffix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xml'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Format an object into a media type string. This will return a string of the\nmime type for the given object. For the properties of the object, see the\ndocumentation for "),s("code",[t._v("typer.parse(string)")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[s("a",{attrs:{href:"LICENSE"}},[t._v("MIT")])])])}),[],!1,null,null,null);e.default=r.exports}}]);