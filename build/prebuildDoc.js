const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

// 复制 `README.md` 到 `docs/` 内
fs.copyFileSync(path.resolve(__dirname, '../README.md'), path.resolve(__dirname, '../docs/README.md'))

console.log(chalk.green('Copied `README.md`'))
