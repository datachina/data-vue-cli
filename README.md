# dtcreate

## 基本介绍

你还为不同项目而下载不同的脚手架而烦恼吗？

你还为不同项目下载不同的UI框架而困扰吗？

不用担心！我们将一站式为您解决。

无论是vue还是react，不管你用的是element还是vant，只需一行命令，你将拥有一个包含一切的前端脚手架。



## 安装

``` 
npm install dtcreate -g
```



## 使用

### 命令列表

| 命令名称 | 描述               |
| -------- | ------------------ |
| init     | 创建一个脚手架     |
| list     | 查看当前脚手架列表 |
| add      | 新增一个脚手架     |
| delete   | 删除一个脚手架     |



### 示例

`dtcreate list`

`dtcreate`会内置三个脚手架

```
E:\data-vue-cli> dtcreate list
  vue-element
  vue-vant
  vue-ant-design-vue
```

`dtcreate add `

```
E:\data-vue-cli> dtcreate add 
? 请输入模板名称 react
? 请输入模板地址 https://gitlab.com:yanxiaos/myreact#main

新增成功
```

`dtcreate delete`

```
E:\data-vue-cli> dtcreate delete
? 请输入模板名称 react

删除成功
```

`dtcreate init  `

命令行输入以下命令会将项目创建在当前文件夹

```
E:\data-vue-cli> dtcreate init  
? 请输入项目名称 demo
? 请选择模板 (Use arrow keys)
> vue-element
  vue-vant
  vue-ant-design-vue
 
√ Downloading...

 下载成功!

 To get started

    cd demo
    npm install
```



## todo：

- 支持不同UI框架的选择
- 支持vue3脚手架的创建
- 支持react脚手架的创建
- 增加更多脚手架模板
