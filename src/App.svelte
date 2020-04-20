<script>
    import router from 'page';
    import qs from 'qs';

    import Main from './pages/Main.svelte';
    import Circle from './pages/Circle.svelte';
    import Controls from "./components/Controls.svelte";

    let component = Main;
    let params = {};

    router('/main', () => (component = Main));
    router('/main/:root', 
        // Before we set the component
        (ctx, next) => {
            params = ctx.params;
            console.log("params:");
            console.log(params);
            params = params;
            next();
        }, 
        // Finally set the component
        () => (component = Main)
    );
    router('/circle', () => (component = Circle));

    // activate router
    router.start();
</script>

{#if component === Circle}
    <svelte:component this={component} params={params} />
{:else}
    <Main />
{/if}
