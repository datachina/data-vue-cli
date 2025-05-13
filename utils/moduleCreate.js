const fs = require("fs");
const path = require('path');
const chalk = require("chalk");


function createDir(dir) {
  if (fs.existsSync(dir)) {
    console.log(chalk.red("目录已存在：", dir))
    return false
  }
  fs.mkdirSync(dir);
  return true
}

function createViews(moduleName) {
  const dir = path.resolve(process.cwd(), `./src/views/${moduleName}`)
  if (!createDir(dir)) return
  fs.cp(
    path.resolve(__dirname, "../template/views"),
    dir, { recursive: true },
    (err) => {
      if (err) {
        console.log(chalk.red(err))
      } else {
        console.log(chalk.green(`创建成功：/views/${moduleName}`, ))
      }
    }
  )
}

function createApi(moduleName) {
  const dir = path.resolve(process.cwd(), `./src/api/${moduleName}`)
  if (!createDir(dir)) return
  fs.cp(
    path.resolve(__dirname, "../template/api/demo"),
    dir, { recursive: true },
    (err) => {
      if (err) {
        console.log(chalk.red(err))
      } else {
        console.log(chalk.green(`创建成功：/api/${moduleName}`, ))
      }
    }
  )
}

const moduleMap = {
  views: createViews,
  api: createApi
}

function createModules(moduleName, modules) {
  modules.forEach(module => {
    moduleMap[module](moduleName)
  })
}

module.exports = {
  createModules
}
