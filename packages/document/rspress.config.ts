import path from 'path'
import { defineConfig } from 'rspress/config'
import { pluginPreview } from '@rspress/plugin-preview'

export default defineConfig({
  plugins: [pluginPreview()],
  builderConfig: {
    source: {
      alias: {
        '~': path.resolve(__dirname, 'demos') // 解析路径
      }
    }
  },
  root: path.resolve(__dirname, 'docs'),
  title: 'Yuuki Design',
  description: '基于Arco Design的业务组件库',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png'
  },
  themeConfig: {
    outlineTitle: '目录',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Yuuki-Yuuna/yuuki-design'
      }
    ],
    nav: [
      {
        text: '指南',
        link: '/guide',
        activeMatch: '/guide'
      },
      {
        text: '组件',
        link: '/components/button',
        activeMatch: '/components'
      }
    ],
    sidebar: {
      '/components': [
        {
          text: '通用',
          collapsed: false,
          collapsible: false,
          items: [
            {
              text: 'Button 按钮',
              link: '/components/button'
            }
          ]
        },
        {
          text: '数据输入',
          collapsed: false,
          collapsible: false,
          items: [
            {
              text: 'Select 选择器',
              link: '/components/select'
            }
          ]
        },
        {
          text: '数据展示',
          collapsed: false,
          collapsible: false,
          items: [
            {
              text: 'Table 表格',
              link: '/components/table'
            }
          ]
        }
      ]
    }
  }
})
