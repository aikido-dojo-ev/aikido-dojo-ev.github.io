<script>
	export let data;
</script>

<svelte:head>
	<title>Aikido Dojo Boberg - Home</title>
	<meta name="description" content="Willkommen beim Aikido Dojo Boberg e.V." />
</svelte:head>

<div class="hero">
	<div class="hero-content">
		<img src="/images/logo_main.png" alt="Aikido Dojo Boberg Logo" class="hero-logo" />
		<h1>Willkommen beim Aikido Dojo Boberg</h1>
		<p class="subtitle">Traditionelle Kampfkunst in Hamburg</p>
	</div>
</div>

<div class="container">
	<section class="about">
		<h2>Über uns</h2>
		<div class="about-content">
			<div class="about-text">
				<p>
					Aikido ist eine japanische Kampfkunst, die Körper und Geist in Einklang bringt. 
					In unserem Dojo in Hamburg-Boberg trainieren wir traditionelles Aikido mit Fokus 
					auf Technik, Respekt und persönlicher Entwicklung.
				</p>
				<p>
					Unser Training ist für alle Altersgruppen und Fitnesslevel geeignet. 
					Ob Anfänger oder Fortgeschrittener - bei uns findet jeder seinen Platz.
				</p>
				<p>
					Wir legen großen Wert auf eine freundliche und respektvolle Atmosphäre, 
					in der sich jeder wohlfühlen kann. Komm vorbei und erlebe Aikido selbst!
				</p>
			</div>
			<div class="about-image">
				<img src="/images/aikido-training.jpg" alt="Aikido Training mit Bokken" />
			</div>
		</div>
	</section>

	<section class="news">
		<h2>Aktuelles</h2>
		{#if data.posts && data.posts.length > 0}
			<div class="news-grid">
				{#each data.posts.slice(0, 3) as post}
					<article class="news-item">
						<h3><a href="/blog/{post.slug}">{post.title}</a></h3>
						<p class="date">{new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
						<p>{post.excerpt}</p>
						<a href="/blog/{post.slug}" class="read-more">Weiterlesen →</a>
					</article>
				{/each}
			</div>
			<div class="view-all">
				<a href="/blog" class="btn">Alle Beiträge anzeigen</a>
			</div>
		{:else}
			<p>Keine aktuellen Beiträge vorhanden.</p>
		{/if}
	</section>
</div>

<style>
	.hero {
		background: linear-gradient(135deg, #8a0909 0%, #ab0b0b 100%);
		color: white;
		padding: 4rem 2rem 3rem;
		text-align: center;
		margin-bottom: 4rem;
		position: relative;
		overflow: hidden;
	}

	.hero-logo {
		max-width: 200px;
		height: auto;
		margin-bottom: 2rem;
		filter: brightness(0) invert(1);
	}

	.hero-content {
		position: relative;
		z-index: 1;
	}

	.hero-content h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: white;
	}

	.subtitle {
		font-size: 1.3rem;
		color: white;
		opacity: 0.95;
	}

	.about {
		margin-bottom: 4rem;
	}

	.about h2 {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
		color: #212121;
	}

	.about-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.about-text p {
		font-size: 1.1rem;
		line-height: 1.8;
		margin-bottom: 1.5rem;
	}

	.about-image {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.about-image img {
		width: 100%;
		max-width: 300px;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.news {
		margin-bottom: 4rem;
	}

	.news h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: #212121;
	}

	.news-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.news-item {
		padding: 2rem;
		background-color: #f5f5f5;
		border-radius: 8px;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.news-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.news-item h3 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: #212121;
	}

	.news-item h3 a {
		color: #212121;
	}

	.news-item h3 a:hover {
		color: #ab0b0b;
	}

	.date {
		color: #666;
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}

	.read-more {
		color: #ab0b0b;
		font-weight: 600;
		display: inline-block;
		margin-top: 1rem;
	}

	.view-all {
		text-align: center;
	}

	@media (max-width: 768px) {
		.hero {
			padding: 3rem 2rem 2rem;
		}

		.hero-logo {
			max-width: 150px;
		}

		.hero-content h1 {
			font-size: 1.75rem;
		}

		.subtitle {
			font-size: 1.1rem;
		}

		.about-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.news-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
