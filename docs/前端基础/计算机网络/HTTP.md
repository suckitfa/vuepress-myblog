Network基本概念

- OSI(Open Systems Interconnction) 开放系统互连分层（top town）
  1. application 应用层：  (常见的应用协议：HTTP,FTP,EMIAL,SSH...)
  2. presentation 表示层
  3. session 会话层
  4. transport 传输层: TCP/UDP协议
  5. network 网络层:  IP协议 （定位主机）
  6. data link  数据链路层
  7. phisical 物理层: 电器信号传输, 网卡（mac地址.....)

### HTTP （**H**yper**T**ext **T**ransfer **P**rotocol）

http建立在TCP上的应用层协议

http1.0: client每次请求需要建立一个单独的TCP连接，处理完请求后，自动释放

http1.1：HTTP 1.1支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启Connection： keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。

http2.0: 支持多路复用，一个tcp可同时传输多个http请求，头部压缩

http3.0: quic, 开启多个 TCP 连接，在出现丢包的情况下，只有丢包的 TCP 等待重传，剩

余的 TCP 连接还可以正常传输数据

### HTTP常见方法

- GET 获取数据

- HEAD 响应只有头部

- POST 提交数据到服务器

- PUT 

- DELETE

- OPTIONS 预检测，查看服务端是否允许 "跨域" 

  > 跨域：协议，域名，端口，其中一个不同就是跨域（Cross Resourece Share）
  >
  > **非简单方法触发预**请求，
  >
  > 所谓简单方法，是指：
  >
  > - 只使用 GET, HEAD 或者 POST 请求方法。如果使用 POST 向服务器端传送数据，则数据类型(Content-Type)只能是 application/x-www-form-urlencoded, multipart/form-data 或 text/plain中的一种。
  > - 不会使用自定义请求头（类似于 X-Modified 这种）。

  服务端对 OPTIONS 预请求给出允许回应

- TRACE

- PATCH 

### HTTP与TCP区分

- HTTP是应用层协议定义的是传输数据的**内容和规范**，TCP是传输层协议定义的**是数据传输和连接方式的规范。**

- HTTTP协议建立在TCP协议之上，HTTP在发起请求通过TCP协议建立与服务器的通道。

  >  好比：A和B打电话，电话信道在这里类似于TCP，规定你们需要使用电话来通话； 至于你们讲中文，法语啥的这就是应用传递的是内容。



### HTTP各个版本协议的对比

- HTTP/1.1的性能缺陷

  1. 队头阻塞导致高延迟

     > HTTP/1.1引入了管道机制，也就是多同一个TCP连接中客户端可以同时发送多个请求
     >
     > 但是，服务端必须按要求发送的顺序返回响应，当顺序请求多个文件的时候，其中一个请求被阻塞，在后面排队的所有请求也会一并被阻塞，这就是：对头阻塞。

     HTTP/1.1下的优化：

     - 使用多个域名，突破浏览器对同域名连接的限制数。将页面的资源分布在不同的服务器中，使用不同的域名。

     - 减少资源网络请求的数量。将资源合并：雪碧图，小图片转为base64编码后内嵌到HTML或者CSS中, webpack打包将j s文件打包为一个，只需请求一次（问题：内容变化，全部加在）， 按需加载等等.......

       ```css
        
       .icon {
           background: url(data:image/png;base64,<data>) no-repeat;
       }
       ```

  2. 明文传输：不安全

  3. 无状态：头部巨大且重复

     > cookie, user-agent 等等头部字段重每次请求开销大

  4. 不支持服务器推送

     > 比如服务端数据更新了，客户端只能通过间断性的发送请求来查看数据是否更新，耗费大。
     >
     > 如果服务器可以推送，只要一次推送就可以将数据同步到客户端。

- HTTP/2新特性

  > 基于SPDY，专注于性能，最大的目标**用户和网站之间只有一个连接**

  1. 二进制传输

     在应用层HTTP/2和传输层（TCP or. UDP)之间增加一个二进制分帧

     ![image-20211111151514828](/Users/bobtang/Library/Application Support/typora-user-images/image-20211111151514828.png)




### TCP & UDP

| TCP（传输控制协议）       | UDP （用户数据报协议）                    |                                                              |
| ------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| 面向连接                  | 无连接                                    | 面向连接意味着可靠，同时开销（TCP三次握手，四次挥手）也大（取舍） |
| 同一个TCP连接只能是一对一 | 同一个UDP连接，支持一对一，一对多，多对多 |                                                              |
| 提供可靠交付服务          | 尽最大努力的交付                          |                                                              |
| 面向字节流                | 面向报文                                  | 面向报文意味着，应用层交付给UDP多长的报文，UDP就发送多长的报文。面向字节流意味着，TCP会把报文切分成合适大小的字节流数据块，每次发送一个数据块。 |
| 具备拥塞控制              | 无                                        |                                                              |
| 题从全双工通信            | 首部字段开销小                            | 全双工：一个TCP连接同时可以接受和发送数据                    |
|                           |                                           |                                                              |

### TCP连接过程 三次握手

> 目的：确保client和server都可以正常的接收和发送数据，做好前期准备

![image-20211111121947732](/Users/bobtang/Library/Application Support/typora-user-images/image-20211111121947732.png)



![image-20211111121935366](/Users/bobtang/Library/Application Support/typora-user-images/image-20211111121935366.png)

### TCP断开过程 四次挥手

![image-20211111122007909](/Users/bobtang/Library/Application Support/typora-user-images/image-20211111122007909.png)





 