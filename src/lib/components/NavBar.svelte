<div class="navbar-outside">
    <div class="navbar-inside">
        <h1 class="logo"><a href="/">CX<span style="color: #4717F6">S</span></a></h1>
        <button class="btn main navbtn" type="button" onclick="window.location.href='https://discord.gg/6G8VX4JnBr'"><i class="fa-brands fa-discord fa-fw"></i> Discord</button>
    </div>
</div>

<style>
    .logo {
        font-size: 2rem;
        font-family: 'Oceanic Drift Expanded'
    }
    .navbar-outside {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);

        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        margin: 0;
        display: flex;
        justify-content: center;
        position: sticky;
        top: 0;
        z-index: 9999;
    }
    .navbar-inside {
        margin-left: 1rem;
        margin-right: 1rem;
        width: 68.75rem;
        display: flex;
        align-items: center;
        position: relative;
    }
    .navbtn{
        position: absolute;
        right: 0;
    }
    a{
        color: #FFFFFF;
        text-decoration: none;
    }
</style>