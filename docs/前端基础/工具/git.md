1. 配置用户的信息 (user,email)
配置信息的范围
- `local`  当前项目, git仓库
- `global` 全局，当前机器上的所有git仓库
- `system`
```js
git config --global user.name "your_name"
git config --global user.email "your_email"
```

### 初始化git
```sh
git init
cd .git 
```

### 加入文件
```sh
git add <filename>
git commit -m "commit message"
git log # 查看提交历史
```


### git的工作方式
- 工作目录
- stage 暂存区
- index

![image-20211121120638948](./img/img-git-workspacepng.png)

