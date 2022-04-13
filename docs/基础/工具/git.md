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



### Missing semester

**文件夹：tree , 文件：blob**

```sh
<root> (tree)
|
+- foo (tree)
|  |
|  + bar.txt (blob, contents = "hello world")
|
+- baz.txt (blob, contents = "git is wonderful")
```

**commit :提交， 也就是git系统中的文件快照**

```sh
o <-- o <-- o <-- o
            ^  
             \
              --- o <-- o
```

**git的相关数据结构定义**

```ts
// 文件就是一组数据
type blob = array<byte>

// 一个包含文件和目录的目录
type tree = map<string,tree|blob>

// 每个提交都包含一个父辈，元数据和顶层
type commit = struct {
  parent: array<commit>,
   author:string,
     message:string,
       snapshot:tree
}
```

对象和内存的寻址 

git中的对象可以是blob， 树，或提交

```ts
type object = blob | tree | commit
```

git在存数据的时候，所有的对象会基于他们的**SHA-1哈希**进行寻址

```ts
objects = map<string,object>;
def store(object):
		// sha1哈希算法
  	id = sha1(object)
		objects[id] = object
def load(id):
	return objects[id]
```

Blobs树和提交都一样，他们都是对象。当引用其他对象时，他们并没真正的在硬盘上保存这些对象，而是保存了他们的哈希值作为引用。



- **引用，指向提交的指针，与对象不同的是，他是可变的。**

```python
references = map<string,string>
def update_reference(name,id):
  references[name] = id
  
def read_reference(name):
  return references[name]

def load_reference(name_or_id):
  if name_or_id in reference:
    return load(reference[name_or_id])
  else:
    return load(name_or_id)
```

- **HEAD当前所指的位置**



- 分支
- 分支合并：将这两个父节点本身及他们所有的祖先包含进来。

Git merge合并创建一个新的提交



#### git rebase

Rebase实际上就是取出一些列的提交纪录，复制他们，然后再另外一个地方放下去。创造线型的提交历史。

### git相关资源

- https://ohshitgit.com/
- https://jwiegley.github.io/git-from-the-bottom-up/
- https://xosh.org/explain-git-in-simple-words/
