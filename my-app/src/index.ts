console.log("Hi man");


export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log("Hola! Soy dora");
		
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
