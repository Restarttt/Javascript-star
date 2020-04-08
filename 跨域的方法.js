// 向不同的服务器请求数据的行为
// 只有当协议、域名、端口其中一种不同就是跨域
// 浏览器的同源策略限制 ==》sop（same origin policy）浏览器很容易受到XSS、CSFR等攻击
// 同源策略限制以下几种行为：
// 1、 Cookie、 LocalStorage 和 IndexDB 无法读取
// 2、 DOM 和 Js对象无法获得
// 3、 AJAX 请求不能发送




// 解决跨域的问题
// 通过jsonp跨域(只能实现get一种请求)
创建动态的script标签
调用请求数据的函数
返回y一串JSON字符串代码
当作js代码执行
// 2、 document.domain + iframe跨域
// 3、 location.hash + iframe
// 4、 window.name + iframe跨域
// 5、 postMessage跨域
// 6、 跨域资源共享（ CORS）
// 7、 nginx代理跨域
// 8、 nodejs中间件代理跨域
// 9、 WebSocket协议跨域