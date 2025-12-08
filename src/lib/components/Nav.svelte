<script>
  import { page } from "$app/stores";

  let mobileMenuOpen = false;

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<nav>
  <div class="nav-container">
    <a href="/" class="logo">
      <h1>Aikido Dojo e.V.</h1>
    </a>

    <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="nav-links" class:open={mobileMenuOpen}>
      <a href="/" class:active={$page.url.pathname === "/"}>Home</a>
      <a href="/blog" class:active={$page.url.pathname.startsWith("/blog")}
        >Blog</a
      >
      <a
        href="https://www.instagram.com/aikido_dojo_boberg/"
        target="_blank"
        rel="noopener noreferrer"
        class="instagram-link"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          />
        </svg>
        Instagram
      </a>
    </div>
  </div>
</nav>

<style>
  nav {
    background-color: #fcfcfc;
    color: #212121;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  .logo {
    text-decoration: none;
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .menu-toggle span {
    width: 25px;
    height: 3px;
    margin: 3px 0;
    transition: 0.3s;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-links a {
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .nav-links a:hover,
  .nav-links a.active {
    color: #ab0b0b;
    opacity: 1;
  }

  .instagram-link svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
    }

    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: #212121;
      flex-direction: column;
      padding: 1rem;
      gap: 1rem;
      display: none;
    }

    .nav-links.open {
      display: flex;
    }
  }
</style>
