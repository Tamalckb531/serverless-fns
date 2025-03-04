export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response('Hello World from docker container!');
	},
} satisfies ExportedHandler<Env>;