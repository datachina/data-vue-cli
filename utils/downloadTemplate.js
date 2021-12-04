const fs = require('fs')

module.exports = function downloadTemplate ({ appName, url }) {
  const program = require('commander')
  const chalk = require('chalk')
  const ora = require('ora')
  const download = require('download-git-repo')
  program.usage(`[Vue] [${appName}]`)
  program.parse(process.argv)

  // 出现加载图标
  const spinner = ora("Downloading...");
  spinner.start();

  // 执行下载方法并传入参数
  download(
    url,
    appName,
    { clone: true },
    err => {
      if (err) {
        spinner.fail();
        console.log(chalk.red(`下载失败！ ${err}`))
        // 退出命令行
        process.exit()
      }
      setAppName(appName, (err) => {
        console.log('errererere', err);
        // 结束加载图标
        spinner.succeed();
        console.log(chalk.green('\n 下载成功!'))
        console.log('\n To get started')
        console.log(`\n    cd ${appName}`)
        console.log(`    npm install \n`)
        // 退出命令行
        process.exit()
      })
    }
  )
}


// 将下载后的项目的package.json文件的name修改成永恒输入的appName
function setAppName (appName, callback) {
  let path = process.cwd()
  const appPackage = require(`${path}/${appName}/package.json`)

  appPackage.name = appName
  fs.writeFile(`${path}/${appName}/package.json`, JSON.stringify(appPackage, null, '\t'), 'utf-8', callback)
}