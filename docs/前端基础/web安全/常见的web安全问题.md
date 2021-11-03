### XSS攻击
> Cross Site Script
白话：将代码 ‘注入’网页中，让客户端执行。 

### 防御XSS方式
- 转义字符
> 将容易引起浏览器解析混淆的字符转义
```js
function escape(str) {
    str = str.replace(/&/g,'&amp;')
    str = str.replace(/</g,'&lt;')
    str = str.replace(/>/g,'&gt;')
    str = str.replace(/"/g,'&quto;')
    str = str.replace(/'/g,'&#39;')
    str = str.str.replace(/\\/g,'&#x2F;')
    return str;
}
```
- 使用xss库
> Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist.
```js
const xss = require('xss')
const html = xss(`<script>alert(document.cookie)</script>`);
console.log(html);

```
- CSP
> 内容安全策略 Content Security Policy
CSP 的实质就是白名单制度，开发者明确告诉客户端，哪些外部资源可以加载和执行，等同于提供白名单。它的实现和执行全部由浏览器完成，开发者只需提供配置。
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy


### CSRF
> Cross Site Request Forgery 跨站请求`伪造`
重点是请求伪造， 白话：伪造执行有危害的操作，比如：修改密码.......

### 防御CSRF
1. Get请求不对数据进行修改 （后端关注）
2. 不让第三方网站访问到用户cookie
```js
Set-Cookie:SameSite=Lax;
// 设置了Strict或Lax以后，基本就杜绝了 CSRF 攻击。
```
3. 请求附带验证, csrf_token等
4. 验证refere字段


### 点击劫持
> iframe
```js
X-FAME-OPTIONS
DENY不允许iframe
```
### 中间人攻击
正常通信，客户端和服务端之间通信。而这个中间人可以简单理解为，在服务端和客户端之间的插入的第三者。
> 举个不恰当的例子，A国将军和B国将军如果都懂同一门语言，他们可以直接通话。而如果不懂的话，就需要翻译。这个翻译如果是个间谍........A,B两国最后爆发战争........

常见形式
- WIFI，钓鱼热点
- HTTPS欺骗
- SSL劫持
- DNS欺骗（'长城'）

