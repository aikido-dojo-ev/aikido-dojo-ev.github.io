<script>
	export let data;
</script>

<svelte:head>
	<title>Blog - Aikido Dojo Boberg</title>
	<meta name="description" content="Neuigkeiten und Beiträge vom Aikido Dojo Boberg" />
</svelte:head>

<div class="container">
	<h1>Blog & Neuigkeiten</h1>
	
	{#if data.posts && data.posts.length > 0}
		<div class="posts">
			{#each data.posts as post}
				<article class="post-card">
					<h2><a href="/blog/{post.slug}">{post.title}</a></h2>
					<p class="date">{new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
					<p class="excerpt">{post.excerpt}</p>
					<a href="/blog/{post.slug}" class="read-more">Weiterlesen →</a>
				</article>
			{/each}
		</div>
	{:else}
		<p>Keine Beiträge vorhanden.</p>
	{/if}
</div>

<style>
	.container {
		padding: 4rem 2rem;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 3rem;
		color: #212121;
	}

	.posts {
		display: grid;
		gap: 2rem;
	}

	.post-card {
		padding: 2rem;
		background-color: #f5f5f5;
		border-radius: 8px;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.post-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.post-card h2 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: #212121;
	}

	.post-card h2 a {
		color: #212121;
	}

	.post-card h2 a:hover {
		color: #ab0b0b;
	}

	.date {
		color: #666;
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}

	.excerpt {
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.read-more {
		color: #ab0b0b;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
