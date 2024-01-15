<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import NavBar from '$lib/components/NavBar.svelte'
</script>

<div class="disclaimer">We are not directly affiliated with CarX Technologies or their products. This website is still under development with a lot of features missing.</div>
<NavBar />
<div class="outside">
    <div class="inside"><slot/></div>
</div>