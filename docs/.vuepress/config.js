const fs = require('fs')
const path = require('path')
const packageName = require('../../package.json').name
// 去除 `@isfe` scope
const projectName = packageName.split('/')[1]

const COMPONENTS = 'components'
const componentPath = path.resolve(__dirname, `../${COMPONENTS}`)
const componentsDirectories = fs.readdirSync(componentPath)
const componentLinks = componentsDirectories.filter((subDirectoryPath) => {
  const stat = fs.statSync(path.resolve(componentPath, subDirectoryPath))
  return stat.isDirectory()
}).map((name) => `/${COMPONENTS}/${name}/`)

module.exports = {
  base: `/${projectName}/`,
  title: 'Make biz happier',
  description: 'Common vue components for biz.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/isfe-team/vue-components' },
    ],
    sidebar: [
      '/',
      {
        title: 'Components',
        collapsable: false,
        children: [
          [ '/components/', 'Overview' ],
          ...componentLinks
        ]
      }
    ]
  }
}
