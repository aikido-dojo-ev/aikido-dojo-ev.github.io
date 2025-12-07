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
		<p>&copy; {new Date().getFullYear()} Aikido Dojo Boberg e.V. Alle Rechte vorbehalten.</p>
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

	footer p {
		margin: 0;
		font-size: 0.9rem;
	}
</style>
