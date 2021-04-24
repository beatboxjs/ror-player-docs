const { description } = require('../../package')

module.exports = {
  title: 'RoR Player',
  description: description,
  head: [
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
	],
	dest: `${__dirname}/../../dist`,
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: './favicon.svg',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'User guide',
          collapsable: false,
          children: [
            'user/',
            "user/listen",
            "user/download",
            "user/compose",
            "user/share",
            "user/export"
          ]
        },
        {
          title: 'Technical guide',
          collapsable: false,
          children: [
            "technical/host",
            "technical/config"
          ]
        }
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'check-md'
  ]
}
