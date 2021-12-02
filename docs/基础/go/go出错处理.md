出错处理

```go
func writeFileWitheErrorHandler(filename string) {
	file, err := os.OpenFile(
		filename,
		os.O_EXCL|os.O_CREATE,
		0666)

	if err != nil {
		if pathError, ok := err.(*os.PathError); !ok {
			panic(err)
		} else {
			fmt.Printf("%s, %s, %s",
				pathError.Op,
				pathError.Path,
				pathError.Err)
		}
		return
	}
	defer file.Close()

	writer := bufio.NewWriter(file)
	defer writer.Flush()

	fmt.Fprintf(writer, "fuck you ")
}
```

- defer + panic + recover
- Type Assertion (类型断言)
- 函数式编程