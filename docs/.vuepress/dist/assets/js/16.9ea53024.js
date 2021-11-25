(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{376:function(s,a,e){s.exports=e.p+"assets/img/image-cache.b4b8ebfe.png"},427:function(s,a,e){"use strict";e.r(a);var t=e(45),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"浏览器缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[s._v("#")]),s._v(" 浏览器缓存")]),s._v(" "),t("p",[s._v("适用于不常发生发生的资源，提高页面的加载速度")]),s._v(" "),t("h3",{attrs:{id:"强缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[s._v("#")]),s._v(" 强缓存")]),s._v(" "),t("p",[s._v("状态码：200")]),s._v(" "),t("blockquote",[t("p",[s._v("不需要发送请求到服务端，直接读取浏览器本地的缓存，在Chrome的network面板中显示的HTTP状态码为200，在Chrome中强缓存的位置分为Disk Cache和 Memory Cache，存放的位置由浏览器控制。是否使用强缓存由头部"),t("code",[s._v("Expires")]),s._v(", "),t("code",[s._v("Cache-Control")]),s._v(","),t("code",[s._v("Pragma")]),s._v("控制。")])]),s._v(" "),t("ol",[t("li",[s._v("Expires\n本地机器的时间和Expires比较；如果超出了"),t("code",[s._v("Expires")]),s._v("的值，缓存失效。\n本地机器的时间可以修改，可能会存在本地机器时间和服务器时间不一致问题。\n优先级：最低")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绝对值")]),s._v("\nExpires: Wed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" 08:41:00 GMT\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("Cache-control")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 相对值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Cache-Control 是一个相对时间，即使 客户端时间发生改变，相对时间也不会随之改变，这样可以保持服务器和客户端的时间一致性。而且 Cache-Control 的可配置性比较强大。")]),s._v("\nCache-control: max-age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# max-age取值如下")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:e(376),alt:"image-20211115081143715"}}),s._v("\n3. Pragma\n优先级最高,与"),t("code",[s._v("Cache-Control:no-cache;")]),s._v("效果一样")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不使用强缓存")]),s._v("\nPragma: no-cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[s._v("#")]),s._v(" 协商缓存")]),s._v(" "),t("p",[s._v("状态码：304")]),s._v(" "),t("blockquote",[t("p",[s._v("协商缓存: "),t("strong",[s._v("强缓存失效后")]),s._v("，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决 ，定是否使用缓存的过程。")]),s._v(" "),t("p",[s._v("协商：浏览器与服务器协商")])]),s._v(" "),t("ol",[t("li",[s._v("Last-Modified和If-Modified-Since\n值："),t("code",[s._v("表示文件最后修改的时间")]),s._v("，第一次请求服务端将资源最后修改的时间放入Last-Modified中，第二次发起请求的时候，请求头带上上一次响应头的Last-Modified中的值，放入If-Modified-Since请求头中。")])]),s._v(" "),t("ul",[t("li",[s._v("Etag和If-None-Match\n值： "),t("code",[s._v("根据文件的内容生成的hash值")]),s._v("\n文件的修改评率在秒级一下，"),t("code",[s._v("Last-Modified/If-Modified-Since")]),s._v("会没法正确作出响应\n文件修改了，但内容没有任何变化")])]),s._v(" "),t("h3",{attrs:{id:"浏览器的缓存过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的缓存过程"}},[s._v("#")]),s._v(" 浏览器的缓存过程")]),s._v(" "),t("p",[s._v("发起请求前，先看浏览器缓存中是否存在对应资源（），如果有直接返回，不发送网络请求，如果没有，发送网路请求加载资源，得到资源后根据返回的缓存策略来对资源缓存")])])}),[],!1,null,null,null);a.default=n.exports}}]);