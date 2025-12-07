<script>
	import '$lib/styles/global.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<div class="app">
	<Nav />
	
	<main>
		<slot />
	</main>

	<footer>
		<div class="footer-content">
			<p>&copy; {new Date().getFullYear()} Aikido Dojo Boberg e.V. Alle Rechte vorbehalten.</p>
			<div class="footer-links">
				<a href="/impressum">Impressum</a>
				<span class="separator">|</span>
				<a href="/datenschutz">Datenschutz</a>
			</div>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		background-color: #212121;
		color: white;
		text-align: center;
		padding: 2rem;
		margin-top: 4rem;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	footer p {
		margin: 0;
		font-size: 0.9rem;
	}

	.footer-links {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.footer-links a {
		color: white;
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.footer-links a:hover {
		color: #ab0b0b;
		opacity: 1;
	}

	.separator {
		color: white;
		opacity: 0.5;
	}
</style>
