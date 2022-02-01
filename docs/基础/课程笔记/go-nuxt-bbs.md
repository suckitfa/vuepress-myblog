### go语言
- 特点： 兼具Python等动态语言的开发速度和C/C++等编译型语言的性能和安全性。

```sh
# go的安装目录
export GOROOT=$HOME/go
# go可执行文件目录
export GOBIN=$GOROOT/bin
# 将go的可执行文件调价到path
export PATH=$GOBIN:$PATH
# go的工作目录
export GOPATH=$HOME/gopath
```
```sh
# 让上面配置文件生效
source ~/.bashrc
source ~/.zshrc
```

### 验证环境安装 Hello go
main.go文件中输入以下代码
```go
package main
import "fmt"
func main() {
    fmt.Println("Hello go!")
}
```
命令行中执行下面命令
```sh
#  执行main.go文件
go run main.go
# 编译可执行文件
go build main.go
```

### go的依赖管理工具简单使用
- `go mod` 是在开发者们经历混乱的第三方包管理工具割据后推出的, 从 go1.11开始支持
```sh
# 命令行中输入
go mod
# 以下为输出
# Go mod provides access to operations on modules.
# Note that support for modules is built into all the go commands,
# not just 'go mod'. For example, day-to-day adding, removing, upgrading,
# and downgrading of dependencies should be done using 'go get'.
# See 'go help modules' for an overview of module functionality.
# Usage:
# 	go mod <command> [arguments]
# The commands are:
# 	download    download modules to local cache
# 	edit        edit go.mod from tools or scripts
# 	graph       print module requirement graph
# 	init        initialize new module in current directory
# 	tidy        add missing and remove unused modules
# 	vendor      make vendored copy of dependencies
# 	verify      verify dependencies have expected content
# 	why         explain why packages or modules are needed

# Use "go help mod <command>" for more information about a command.
```
- 配置goproxy代理
> 官方的库为google管理，服务器在国外，因此需要代理
```sh
# 新版本的go
go env -w GOPROXY=https://goproxy.cn,direct
# 查看内容
go env

# 老版本的go
export GOPROXY=https://goproxy.cn,direct
```

### 使用`go mod` 初始化新的项目
1. 执行下面命令
```sh
go mod init github.com/mlogclub/GoBBS
```
生成 `go.mod` 文件 ， 类似于 前端npm管理工具生成的 package.json. 

2. 在 `go.md`声明第三方库
```go
module github/mlogclub/GoBBS
go 1.13
require(
    gopkg.in/resty.v1 v1.12.0
)
```
3. 执行 `go mod download` 将依赖下载到本地后,
```sh
# 命令行中执行该命令后，出现go.sum文件
go mod download
```
4. 代码import引入
```go
package main
import(
    "fmt"
    "gopkg.in/resty.v1"
)
func main() {
    resp, err := resty.R().Get("http://www.baidu.com")
    if err == nil {
        fmt.Println(string(resp.Body()))
    }
}
```
### Iris简单使用
- API & MVC开发模式-唯一一个拥有MVC架构模式的Go Web框架,性能成本接近零
- Iris构建微服务很容易
原生的问题： 
当您考虑构建web应用程序和Web API，或者只在Go中构建HTTP服务器时，您是否会考虑使用net/http包？然后您必须处理一些常见情况，如动态路由,安全性，身份验证，实时通信以及net/http无法解决的许多其他问题.

![image-20220201230349302](./img/image-20220201230349302.png)

### Iris使用

```sh
go mod init github.com/suckitfa/go-iris-demo
```

安装iris

```sh
go get github.com/kataras/iris@master
```

```go
package main
import(
  "github.com/kataras/iris"
  "github.com/kataras/iris/middleware/logger"
  "github.com/kataras/iris/middleware/recover"
)
func main() {
  app := iris.New()
  app.Logger().setLevel("debug")
  // 中间件的使用
  app.Use(recover.New())
  app.Use(logger.New())
  
  app.Handle("GET", "/html", func (ctx irix.Context) {
    ctx.HTML("<h1>Hello IRIS</h1>")
  })
  app.Get("/text", func(ctx iris.Context) {
    ctx.WriteString("Hello Iris!")
  })
  app.Get("/json", func(ctx iris.Context) {
    ctx.JSON(iris.Map{"message":"Hell Iris!"})
  })
  app.Run(iris.Addr(":8080"), iris.WithoutServerError(iris.ErrServerClosed))
}
```

### Iris控制器的概念

- 能够非常清晰，方便去定义和管理接口。 约定优于配置.

- `controller`的路由规则为：HttpMethod + FuncName（函数名会根据驼峰命名法进行分割），其中`HttpMethod`限定该接口的请求类型，`FuncName`限定接口的路径；
- `controller`中函数名以`Any`开头表示该接口不限定请求类型，任何类型的请求都可以正常访问。
- `controller`中函数名称结尾带`By`关键字的，接受一个输入参数，例如`GetBy`；

```go
```



### Iris中间件的概念

中间件可以将一些通用的操作全部抽象到中间件中去，而不必将这些通用的代码放到每个controller中，以此来减少重复代码和解耦代码。

- 权限控制
- 接口签名
- 访问统计
