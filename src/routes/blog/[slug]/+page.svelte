<script>
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title} - Aikido Dojo Boberg</title>
	<meta name="description" content={data.metadata.excerpt || ''} />
</svelte:head>

<div class="container">
	<article class="post">
		<header>
			<h1>{data.metadata.title}</h1>
			<p class="date">
				{new Date(data.metadata.date).toLocaleDateString('de-DE', { 
					year: 'numeric', 
					month: 'long', 
					day: 'numeric' 
				})}
			</p>
		</header>
		
		<div class="content">
			<svelte:component this={data.content} />
		</div>

		<footer>
			<a href="/blog" class="back-link">← Zurück zum Blog</a>
		</footer>
	</article>
</div>

<style>
	.container {
		padding: 4rem 2rem;
		max-width: 800px;
	}

	.post {
		background-color: white;
	}

	header {
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 2px solid #f0f0f0;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: #212121;
	}

	.date {
		color: #666;
		font-size: 1rem;
	}

	.content {
		line-height: 1.8;
		font-size: 1.1rem;
	}

	.content :global(h2) {
		font-size: 2rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: #212121;
	}

	.content :global(h3) {
		font-size: 1.5rem;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		color: #212121;
	}

	.content :global(p) {
		margin-bottom: 1.5rem;
	}

	.content :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		margin: 2rem 0;
	}

	.content :global(a) {
		color: #ab0b0b;
		text-decoration: underline;
	}

	.content :global(ul), .content :global(ol) {
		margin-bottom: 1.5rem;
		padding-left: 2rem;
	}

	.content :global(li) {
		margin-bottom: 0.5rem;
	}

	footer {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 2px solid #f0f0f0;
	}

	.back-link {
		color: #ab0b0b;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.content {
			font-size: 1rem;
		}
	}
</style>
