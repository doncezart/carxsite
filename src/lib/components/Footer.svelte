<div class="footer-outside glass">
   <div class="footer-inside">
        <div class="about" style="overflow: hidden">
            <h1 class="logo"><a href="/" style="color: #FFFFFF; text-decoration: none;">CX<span style="color: #4717F6">S</span></a></h1>
            <p class="bold">About us</p>
            <p><br>CarX Site is an independent project developed by <a href="https://ceza.ro" style="color: #FFFFFF; text-decoration: none;">Don Cezar</a> and not directly affiliated with <a href="https://carx-online.com" style="color: #FFFFFF; text-decoration: none;">CarX Technologies</a> or their products.</p>
            <p><br>Copyright © 2024 CarX Site. All rights reserved.</p>
        </div>
            <div class="links" style="overflow: hidden; text-align: right">
                <h2 style="margin-bottom: 1rem">Pages</h2>
                <div class="footbtns">
                    <p class="footbtn"><a href="/#home" class="foothref">Home</a></p>
                    <p class="footbtn"><a href="/#servers" class="foothref">Servers</a></p>
                    <p class="footbtn"><a href="/" class="foothref">Events</a></p>
                    <p class="footbtn"><a href="/" class="foothref">Mods</a></p>
                </div>
            </div>
            <div class="something" style="overflow: hidden; text-align: right">
                <h2 style="margin-bottom: 1rem">Posts</h2>
                <div class="footbtns">
                    <p class="footbtn"><a href="/how-to-join" class="foothref">Join the project</a></p>
                    <p class="footbtn"><a href="https://github.com/doncezart/carxsite" class="foothref">Source code</a></p>
                    <p class="footbtn"><a href="/styling" class="foothref">Styling</a></p>
                    <p class="footbtn"><a href="https://discord.gg/6G8VX4JnBr" class="foothref">Discord</a></p>
                </div>
        </div>
   </div>
</div>

<style>
    .footer-outside {
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        bottom: 0;
        display: flex;
        justify-content: center;
    }

    .footer-inside {
        padding-top: 3rem;
        padding-bottom: 3rem;
        margin-left: 1rem;
        margin-right: 1rem;
        width: 68.75rem;
        overflow: hidden;
        column-count: auto;
        column-width: 18.75rem; /* 300px + 20px gap */
        column-gap: 1rem;
    }

    @media (max-width: 647px) {
    .links, .something {
        display: none;
    }
    }

    .logo {
        font-size: 2rem;
        font-family: 'Oceanic Drift Expanded';
        margin-bottom: 1rem;
    }

    .footbtn:hover {
        text-decoration:underline;
        
    }

    .foothref {
        color: #737374;
        text-decoration: none;
    }

    .foothref:hover {
        color: white;
    }

    .footbtns > p {
        margin-bottom: 1rem;
    }
</style>