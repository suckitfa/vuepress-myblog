defer调用

defer调用

- 确保在函数结束的时候执行

- `defer`调用先进后出，使用栈来管理。
- 被调用的函数中的参数在defer的时候被计算

`panic`也不会阻断defer执行

### 常见的调用情况

```go
Open/Close
Lock/Unlock
PrintHeader/PrintFooter
```





带`buffer`, 先写入内存，到达一定的是哦

