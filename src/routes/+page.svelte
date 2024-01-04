<script>
    export let data;
    console.log(data.combinedArray);
    /* const { users, description, name, icon} = data; */

    import ServerCard from './ServerCard.svelte'
    import db from './db.json';
    

    //let invite = db.servers[counter].invite
    
    //console.log(invite)
</script>



<div class="subcontainer">
    <h1>Discord Communities</h1>
    <p>A list of communities dedicated to the CarX Drift Racing Online videogame</p>
    <button class="btn discord x" type="button" onclick="window.location.href='https://discord.gg/6G8VX4JnBr'"><i class="fa-brands fa-discord ix"></i>Join our official server</button>
</div>
<div class="container">
    {#each data.combinedArray as server}
    <ServerCard data="{server}"/>
    {/each}
</div>

<style>
    .container {
        column-count: auto;
        column-width: 18.75rem; /* 300px + 20px gap */
        column-gap: 1rem;
        width: 100%;
        max-width: 100%;
        padding: 0;
        box-sizing: border-box;
    }
    .subcontainer {
        margin-top: 2rem;
        margin-bottom: 3rem;
        text-align:center;
    }
    .subcontainer h1 {
        font-family: 'Inter';
        font-weight: 800;
        color: #FFFFFF;
        font-size: 2rem;
        margin: 0;
    }
    .subcontainer p {
        font-family: 'Inter';
        font-weight: 400;
        color: #737374;
        margin: 0;
    }
    .x {
        margin-top: 1rem;
    }
    .ix {
        margin-right: 0.5rem;
    }
</style>