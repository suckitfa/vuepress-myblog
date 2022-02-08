# Docker

**Docker是容器技术的一种优秀实现。**

- 容器技术至隔离应用程序的运行时环境但容器 之间可以共享同一个操作系统。

**运行时环境指运行依赖的各种库以及配置。**

![image-20220208192721660](./img/image-20220208192721660.png)



### Docker的基本概念

- docker看成一个编译器

- dockerfile 看成image的源代码
- container 运行起来的程序
- image 理解为可执行程序

**我们编写dockerfile交给docker编译执行生成image, imageu运行后成为container**

### Docker的工作原理

1. docker build

![image-20220208193558399](./img/image-20220208193558399.png)

2. docker run

![image-20220208193701208](./img/image-20220208193701208.png)

3. docker pull

docker pull命令从docker hub中下载别人写好的程序， 类似于App Store， Docker Registry是本地的程序。

![image-20220208193815045](./img/image-20220208193815045.png)

### Docker中的底层实现原理

- NameSpace

Linux中PID, IPC, 网络等资源是全局的， NameSpace技术可将这些全局资源隔离。

- Control Groups

控制应用对物理机资源的访问

### Docker的基本使用命令

**Docker Hub查看与安装镜像**

```sh
# 在Docker Hub 中查看mysql
docker search mysql
# 安装mysql
docker pull mysql
```

**查看本地镜像**

```sh
# 查看Dokcer 安装好的images
docker images
```

**启动镜像**

```sh
docker run -it centos:latest /bin/bash
```

**查看Docker运行状态**

```sh
docker ps -a
```

![image-20220208202345287](./img/image-20220208202345287.png)

**容器转为镜像**

```sh
docker commmit -m "centos with git"
```



### 参考资料

- 知乎小辉： https://zhuanlan.zhihu.com/p/187505981
- 官方文档:  https://docs.docker.com/