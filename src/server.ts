import Index from './index';
import { serve } from "bun";
import { createElement } from 'react';
import { renderToReadableStream } from 'react-dom/server';

const server = serve({
	fetch: async () => {
		const stream = await renderToReadableStream(createElement(Index));

		return new Response(stream.pipeThrough(new TransformStream()), {
			headers: {
				"content-type": "text/html",
			},
		})
	},
	development: true,
});

console.log(`Running server on port ${server.port}`);