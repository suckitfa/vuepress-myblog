```sh
# 下载install.sh文件
sudo wget --no-check-certificate https://raw.github.
com/Lozy/danted/master/install.sh -O install.sh 

# 安装sock5服务
sudo bash install.sh  --port=8888 --user=admin --passwd=admin888

# 卸载
sudo sh intall.sh --uninstall
```

### 常见参数
| 选项      | 描述                                        |
| --------- | ------------------------------------------- |
| --port=   | socks5 端口号码                             |
| --ip=;;   | 配置的IP地址，默认全部开启，使用;分格       |
| --user=   | pam认证用户名                               |
| --passwd= | pam认证用户密码                             |
| --master= | 免认证地址，例如 github.com 或者 8.8.8.8/32 |