<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import rootAxisLogo from "/root-axis.svg";
  import "@root-axis/design-system";

  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<main>
  <div class="header">
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <a
      href="https://design-system.rodrigoantunes.dev"
      target="_blank"
      rel="noreferrer"
    >
      <img src={rootAxisLogo} class="logo root axis" alt="Root Axis Logo" />
    </a>
    <h1>Vite + Svelte + Root Axis</h1>
  </div>

  <div class="card">
    <ra-button dark onclick={increment}>
      count is {count}
    </ra-button>

    <p>Edit <code>src/App.svelte</code> and save to test HMR</p>
  </div>

  <div class="accordions">
    <ra-accordion dark>
      <span slot="summary">Is it accessible?</span>
      Yes.
    </ra-accordion>
    <ra-accordion dark>
      <span slot="summary">Is it styled?</span>
      Yes. It comes with default styles that matches the other components aesthetic.
    </ra-accordion>
    <ra-accordion dark>
      <span slot="summary">Is it animated?</span>
      Yes. It&lsquo;s animated by default
    </ra-accordion>
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
