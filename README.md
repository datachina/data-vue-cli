# 基本介绍

你还为不同项目而下载不同的脚手架而烦恼吗？

你还为不同项目下载不同的`UI`框架而困扰吗？

不用担心！我们将一站式为您解决。

无论是`vue`还是`react`，不管你用的是`element`还是`vant`，只需一行命令，你将拥有一个包含一切的前端脚手架。

# 安装

``` 
npm install dtcreate -g
```

# 使用

### 命令列表

| 命令名称 | 描述               |
| -------- | ------------------ |
| `init`   | 创建一个脚手架     |
| `list`   | 查看当前脚手架列表 |
| `add`    | 新增一个脚手架     |
| `delete` | 删除一个脚手架     |



## 示例

##### 使用脚手架初始化项目

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

初始化完成后需要进入文件夹然后 `npm install` 下载依赖



##### 查看当前脚手架列表

`dtcreate list`

`dtcreate`会内置三个脚手架

```
E:\data-vue-cli> dtcreate list
  vue-element
  vue-vant
  vue-ant-design-vue
```



##### 新增脚手架地址

`dtcreate add `

```
E:\data-vue-cli> dtcreate add 
? 请输入模板名称 react
? 请输入模板地址 https://gitlab.com:yanxiaos/myreact#main

新增成功
```



##### 删除脚手架地址

`dtcreate delete`

```
E:\data-vue-cli> dtcreate delete
? 请输入模板名称 react

删除成功
```



## todo：

- 支持不同`UI`框架的选择
- 支持`vue3`脚手架的创建
- 支持react脚手架的创建
- 增加更多脚手架模板
- 实现依赖动态选择
