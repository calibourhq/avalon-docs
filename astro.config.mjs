// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightOpenAPI, { createOpenAPISidebarGroup } from 'starlight-openapi';
import starlightSidebarTopics from 'starlight-sidebar-topics';

const SITE = 'https://calibourhq.github.io';
const BASE = '/avalon-docs/';

const apiReference = createOpenAPISidebarGroup();
const adminReference = createOpenAPISidebarGroup();

export default defineConfig({
	site: SITE,
	base: BASE,
	integrations: [
		sitemap({ filter: (page) => !page.includes('/api/admin/') }),
		starlight({
			title: 'Avalon',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/calibourhq/avalon' }],
			editLink: { baseUrl: 'https://github.com/calibourhq/avalon-docs/edit/main/' },
			routeMiddleware: './src/routeData.ts',
			plugins: [
				starlightOpenAPI([
					{
						base: 'api/reference',
						schema: './openapi/customer/openapi.yaml',
						sidebar: { label: 'Endpoints', group: apiReference, operations: { badges: true } },
					},
					{
						base: 'api/admin/reference',
						schema: './openapi/admin/openapi.yaml',
						sidebar: { label: 'Endpoints', group: adminReference, operations: { badges: true } },
					},
				]),
				starlightSidebarTopics([
					{
						label: 'Docs',
						link: '/getting-started/introduction/',
						icon: 'open-book',
						items: [{ label: 'Getting started', items: [{ autogenerate: { directory: 'getting-started' } }] }],
					},
					{
						id: 'api',
						label: 'API',
						link: '/api/',
						icon: 'seti:json',
						items: [
							{ label: 'Overview', items: ['api', 'api/authentication', 'api/errors'] },
							apiReference,
						],
					},
					{
						id: 'admin-api',
						label: 'Admin API',
						link: '/api/admin/',
						icon: 'setting',
						items: [{ label: 'Overview', items: ['api/admin'] }, adminReference],
					},
				], {
					topics: {
						api: ['/api/reference', '/api/reference/**/*'],
						'admin-api': ['/api/admin/reference', '/api/admin/reference/**/*'],
					},
				}),
			],
		}),
	],
});
