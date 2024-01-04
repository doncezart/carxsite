<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import './app.css'
</script>
<style>
    .inside{
        margin: 1rem;
        width: 68.75rem;        
        /* border: solid red; */
    }
    .outside{
        display: flex;
        justify-content: center;
        /* border: solid green; */
    }
    .disclaimer{
        top: 0;
        position: sticky;
        width: 100%;
        padding: 0.2rem 0 0.2rem 0;
        margin: 0;
        z-index: 1;
        
        background-color: #f1c232;
        text-align: center;
        font-family: 'Inter';
        font-weight: 600;
        color: #27272A;
    }
    body {
        margin: 0;
    }
</style>

<body>
<div class="disclaimer">We are not directly affiliated with CarX Technologies or their products. This website is still under development with a lot of features missing.</div>
<div class="outside">
    <div class="inside"><slot/></div>
</div>
</body>