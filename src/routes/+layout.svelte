<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import NavBar from '$lib/components/NavBar.svelte'
    import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
    <script defer src="https://eu.umami.is/script.js" data-website-id="fdcfad69-c717-43b7-81e7-8fd6db41b7e5"></script>
</svelte:head>


<div class="disclaimer">We are not directly affiliated with CarX Technologies or their products. This website is still under development with a lot of features missing.</div>
<NavBar />
<div class="outside">
    <div class="inside"><slot/></div>
</div>
<Footer />
