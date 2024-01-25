<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import NavBar from '$lib/components/NavBar.svelte'
    import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
    <script async src="http://162.248.103.8:3000/script.js" data-website-id="8834164c-90e5-487b-9c4d-869de7fe6ca4"></script>
</svelte:head>


<div class="disclaimer">We are not directly affiliated with CarX Technologies or their products. This website is still under development with a lot of features missing.</div>
<NavBar />
<div class="outside">
    <div class="inside"><slot/></div>
</div>
<Footer />
