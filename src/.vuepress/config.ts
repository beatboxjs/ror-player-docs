import { defineUserConfig } from 'vuepress';
import { description } from '../../package.json';
import backToTopPlugin from '@vuepress/plugin-back-to-top';
import mediumZoomPlugin from '@vuepress/plugin-medium-zoom';
//import checkMdPlugin from 'vuepress-plugin-check-md';
import { defaultTheme } from '@vuepress/theme-default';
import searchPlugin from '@vuepress/plugin-search';
import registerComponentsPlugin from '@vuepress/plugin-register-components';
import nprogressPlugin from '@vuepress/plugin-nprogress';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
	title: 'RoR Player',
	description: description,
	head: [
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
	],
	dest: `${__dirname}/../../dist`,
	bundler: viteBundler(),

	theme: defaultTheme({
		repo: '',
		editLink: false,
		docsDir: '',
		editLinkText: '',
		lastUpdated: false,
		contributors: false,
		logo: './favicon.svg',
		navbar: [
			{
				text: 'Guide',
				link: '/guide/user/',
			}
		],
		sidebar: {
			'/guide/': [
				{
					text: 'User guide',
					collapsible: false,
					children: [
						'/guide/user/',
						"/guide/user/listen",
						"/guide/user/download",
						"/guide/user/compose",
						"/guide/user/share",
						"/guide/user/export"
					]
				},
				{
					text: 'Technical guide',
					collapsible: false,
					children: [
						"/guide/technical/host",
						"/guide/technical/config"
					]
				}
			],
		}
	}),

	plugins: [
		backToTopPlugin(),
		mediumZoomPlugin(),
		//checkMdPlugin(), // Does not work with Vuepress 2 yet
		searchPlugin(),
		registerComponentsPlugin(),
		nprogressPlugin()
	]
});
