### nginx
- 负载均衡
- 反向代理
- 代理配置和代理缓存
```sh
server {
    listen 80;
    server_name test.com
    location / {
        proxy_pass http://127.0.0.1:8888;

    }
}
```