module.exports = function downloadTemplate ({ appName, url, branch }) {
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
  try {
    download(
      `${url}#${branch}`,
      appName,
      { clone: true },
      err => {
        if (err) {
          spinner.fail();
          console.log(chalk.red(`下载失败！ ${err}`))
          // 退出命令行
          process.exit()
          return
        }
        // 结束加载图标
        spinner.succeed();
        console.log(chalk.green('\n 下载成功!'))
        console.log('\n To get started')
        console.log(`\n    cd ${appName} \n`)
        // 退出命令行
        process.exit()
      }
    )
  } catch (e) {
    console.log('eeee', e);
  }

}
