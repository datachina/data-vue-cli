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

在当前文件夹创建项目

1. 命令行输入以下命令会将项目创建在当前文件夹

```
dtcreate vue
```

2. 输入项目名称

`? 请输入项目名称 demo`

3. 选择UI框架

`? 请选择UI框架 (Use arrow keys)`

> `Element`
> `Vant`
> `Ant Design Vue`

4. 进入项目文件夹下载依赖

```
cd demo

npm install
```

5. 修改package.json文件中的项目名（当前需手动修改，该步骤会在后续版本省略）



## todo：

- 支持不同UI框架的选择
- 支持vue3脚手架的创建
- 支持react脚手架的创建
- 增加更多脚手架模板
- 支持完全自定义的模板仓库