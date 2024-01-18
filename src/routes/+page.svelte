<script>
    export let data;
    let current = 'all';
    
    import ServerCard from '$lib/components/ServerCard.svelte'

    import {shouldPolyfill} from '@formatjs/intl-segmenter/should-polyfill'
    (async function () { if (shouldPolyfill()) { await import('@formatjs/intl-segmenter/polyfill-force') } })()

    const items = data.combinedArray
    let filter_obj = {
		show: 'all',
	};
	$: displayList = createDisplayList(items, filter_obj);

	function createDisplayList(items, filters) {
		return items.filter(item => {
			switch(filters.show) {
				case 'all':
					return true;
					break;
				case 'off':
					return item.type == 'OFFICIAL SERVER';
					break;
                case 'race':
					return item.type == 'RACING TEAM';
					break;
                case 'drift':
					return item.type == 'DRIFTING TEAM';
					break;
                case 'hang':
					return item.type == 'HANGOUT';
					break;
                case 'mods':
					return item.type == 'MODDING';
					break;
			}
		});
	}
	
	function updateFilters(view) {
		filter_obj.show = view;
	}
</script>

<section class="hero scrolloffset" id="home">
    <div class="titletag"><span>CarX Drift Racing Online</span></div>
    <div class="title"><h1>Discover Teams, Mods and Lobbies<br/>All in One Place!</h1></div> 
    <button class="btn main" type="button" onclick="window.location.href='https://discord.gg/6G8VX4JnBr'"><i class="fa-brands fa-discord fa-fw"></i> Join our official server</button>
</section>

<section class="communities scrolloffset" id="servers">
    <h2>Discord Communities</h2>
    <p>A list of communities dedicated to the CarX Drift Racing Online videogame</p>
    <h3 style="margin-top: 2rem; margin-bottom: 0.5rem">Filters: </h3>
    <div class="filters">
        <button class="btn main-border" class:selected={current === 'all'} type="button" on:click={() => updateFilters('all')} on:click={() => (current = 'all')}>Show All</button>
        <button class="btn main-border" class:selected={current === 'race'} type="button" on:click={() => updateFilters('race')} on:click={() => (current = 'race')}>Racing Teams</button>
        <button class="btn main-border" class:selected={current === 'off'} type="button" on:click={() => updateFilters('off')} on:click={() => (current = 'off')}>Official Servers</button>
        <button class="btn main-border" class:selected={current === 'drift'} type="button" on:click={() => updateFilters('drift')} on:click={() => (current = 'drift')}>Drifting Teams</button>
        <button class="btn main-border" class:selected={current === 'hang'} type="button" on:click={() => updateFilters('hang')} on:click={() => (current = 'hang')}>Hangouts</button>
        <button class="btn main-border" class:selected={current === 'mods'} type="button" on:click={() => updateFilters('mods')} on:click={() => (current = 'mods')}>Modding</button>
    </div>
    <div class="servers">
        {#each displayList as server}
        <ServerCard data="{server}"/>
        {/each}
    </div>
</section>
