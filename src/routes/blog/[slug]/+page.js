export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);
		
		return {
			content: post.default,
			metadata: post.metadata
		};
	} catch (e) {
		throw new Error(`Could not load post: ${params.slug}`);
	}
}
