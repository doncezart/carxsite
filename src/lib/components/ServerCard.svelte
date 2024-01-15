<script>
    export let data;
</script>

<style>
    .container{
        border-radius: 0.75rem;
        color: #FFFFFF;
        overflow: hidden;
        
        height: min-content;
        margin-bottom: 1rem;

        background: rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .banner{
        height: 10.5rem;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    .content{
        padding: 0.75rem;
    }
    .head {
        display: flex;
    }
    .icon {
        width: 2rem;
        height: 100%;
        margin-right: 0.5rem;
        border-radius: 2rem;
    }
    .title{
        font-family: 'Inter';
        font-size: 1.5rem;
        margin: 0;
        color: #FFFFFF;
    }
    .description {
        margin: 0;
        font-size: 1rem;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        font-family: 'Inter';
        color: #737374;
    }
    .top{
        position: relative;
    }
    .category{
        position: absolute;
        bottom: 0;
        left: 0 ;
        display: inline-block;
        margin: 0.75rem;
        border-radius: 0.5rem;
        padding: 0.15rem 0.75rem 0.15rem 0.75rem;
        border: solid #FFFFFF 0.1rem;
        background-color: #0C0C0D;
    }
    .tag{
        font-family: 'Inter';
        font-weight: bold;
        font-size: 0.5rem;
        margin: 0;
        color: #FFFFFF;
    }

    .bottom{
        display: flex;
        max-width: 100%;
        align-items: center;
        
    }

    .visit{
        margin-left: auto;
        margin-right: 0;
    }
    .stats{
        font-family: 'Inter';
        color: #737374;
        font-size: 0.75rem;
        margin: 0;
        bottom: 0;
    }
    .statsicon{
        font-size: 1rem;
        margin-right: 0.25rem;
    }
</style>
<div class="container">
    <div class="top">
        <img class="banner" src={data.banner} alt="Server Banner">
        <div class="category"><p class="tag"><span id="type">{data.type}</span></p></div>
    </div>
    <div class="content">
        <div class="head">
            <img class="icon" src='https://cdn.discordapp.com/icons/{data.id}/{data.icon_id}.webp?size=2048' alt="Server Icon">
            <h1 class="title">{data.title}</h1>
        </div>
        <p class="description">{data.description}</p>
        
        <div class="bottom">
            <p class="stats"><i class="fa-solid fa-user statsicon"></i>{data.users}</p>
            <button class="btn link visit" type="button">Visit Page</button>
            <button class="btn main" type="button" onclick="window.location.href='https://discord.gg/{data.invite}';"><i class="fa-brands fa-discord"></i>     Join Now</button>
            
            
        </div>
    </div>
</div>