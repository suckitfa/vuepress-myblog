# git 

### git的本地配置
步骤一：本地机器生成公钥，并将公钥上传至GitHub

```sh
ssh-keygen -t rsa -C "git账户上的邮箱"
cat ~/.ssh/id_rsa.pub
# 复制输出的内容到GitHub上去

```
![上传公钥](./img/Untitled.png)


步骤二： 验证登入github
```sh
ssh -T git@github.com
# Hi suckitfa! You've successfully authenticated, but GitHub does not provide shell access.
```
接下来注意要点，我们是要通过ssh协议来上传代码到git远程仓库的。[选择中间这个]
![ssh-git](./img/ssh-git.png)
```sh
# 添加远程仓库 适合新项目添加远程地址
git remote origin add 仓库地址

# 修改：先删除后添加 以下命令适合老项目中切换为远程仓库
git remote rm origin
git remote origin add 仓库地址
```


### git的一些简单操作

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

