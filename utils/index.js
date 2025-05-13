const chalk = require("chalk");


module.exports = {
  handlerError(error) {
    console.log(chalk.red(error));
  },
  validateRequired(value, name) {
    if (!value) {
      return `${name}不能为空!`
    } else {
      return true
    }
  }
}
