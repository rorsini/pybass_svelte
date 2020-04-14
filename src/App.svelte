<script>
    import Controls from "./components/Controls.svelte";
</script>

<div class="container">
    <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-logo" href="https://svelte.pybass.com">
                <img src="/images/pybass_logo.svg" alt="PyBass logo">
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end navbar-item">
                <a href="http://www.pybass.com">PyBass (ReactJS)</a>
            </div>
            <div class="navbar-item">
                <a href="https://github.com/rorsini/pybass_svelte">GitHub</a>
            </div>
            <div class="navbar-item">
                <img src="/images/profile_mockup.png" alt="User Profile">
            </div>
        </div>
    </nav>
</div>
<div class="secton">
    <div class="pybass-content">
        <br /><br />
        <Controls />
    </div>
</div>
<footer class="footer">
    <div class="content has-text-centered">
        <p class="is-size-6">
            <strong>PyBass</strong> by <a href="https://www.tupleshop.com">TupleShop</a>. The source code is licensed under
            <a href="https://github.com/rorsini/pybass_svelte/blob/master/LICENSE">GPL-3.0</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
    </div>
</footer>

<style>
    .pybass-content {
        padding-left: 30px;
    }
    .navbar {
        padding: 10px;
        box-shadow: 0 3px 5px rgba(88, 88, 88, 0.3);
    }
</style>
