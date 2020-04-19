<script>
  import page from 'page';

  import Main from './pages/Main.svelte';
  import Circle from './pages/Circle.svelte';

  // set default component
  let current = Circle;

  // Map routes to page. If a route is hit the current
  // reference is set to the route's component
  page('/main', () => (current = Main));
  page('/circle', () => (current = Circle));

  // activate router
  page.start();
</script>

<svelte:component this={current} />
