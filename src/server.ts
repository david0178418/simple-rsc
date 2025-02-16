// import index from './index.html';
import Index from './index';
import { serve } from "bun";
import bar from './bar.json';
import App from './app.tsx';
import { createElement } from 'react';
import { renderToReadableStream } from 'react-dom/server';

console.log(111, bar);

const server = serve({
	// static: {
	// 	"/": index,
	// },
	fetch: async (req) => {
		const url = new URL(req.url);

		if(url.pathname === '/') {
			const stream = await renderToReadableStream(createElement(Index), {});
	
			return new Response(stream.pipeThrough(new TransformStream()), {
				headers: {
					"content-type": "text/html",
				},
			})
		}

		const stream = await renderToReadableStream(createElement(App), {
			
		});
		

		return new Response(stream.pipeThrough(new TransformStream()), {
			headers: {
				"content-type": "text/html",
			},
		})
	},
	development: true,
});

console.log(`Running server on port ${server.port}`);