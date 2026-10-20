import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

// The admin API is only reachable by link: not in the topic switcher outside
// of it, not in search, not indexed.
export const onRequest = defineRouteMiddleware((context) => {
	const route = context.locals.starlightRoute;

	if (route.id.startsWith('api/admin')) {
		route.entry.data.pagefind = false;
		route.head.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } });
		return;
	}

	const topics = context.locals.starlightSidebarTopics;
	if (topics) topics.topics = topics.topics.filter((t) => t.label !== 'Admin API');
});
