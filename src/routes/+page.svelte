<script>
    export let data;
    let current = 'all';
    
    import ServerCard from './ServerCard.svelte'

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
				case 'official':
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
<div class="landing">
    <div class="pre"><span>CarX Drift Racing Online</span></div>
    <div class="type"><h1>Discover Communities, Mods, and Lobbies, all in One Place!</h1></div> 
    <button class="btn main" type="button" onclick="window.location.href='https://discord.gg/6G8VX4JnBr'"><i class="fa-brands fa-discord fa-fw"></i> Join our official server</button>
</div>

<div class="subcontainer">
    <h3>Discord Communities</h3>
    <p>A list of communities dedicated to the CarX Drift Racing Online videogame</p>
    <p class="bold" style="margin-top: 2rem; margin-bottom: 0.5rem; color: white">Filters: </p>
    <div class="filters">
        <button
            class="btn main-border"
            class:selected={current === 'all'}
            type="button"
            on:click={() => updateFilters('all')}
            on:click={() => (current = 'all')}>
            Show All
        </button>
        <button
            class="btn main-border"
            class:selected={current === 'race'}
            type="button"
            on:click={() => updateFilters('race')}
            on:click={() => (current = 'race')}>
            Racing Teams
        </button>
        <button
            class="btn main-border"
            class:selected={current === 'official'}
            type="button"
            on:click={() => updateFilters('official')}
            on:click={() => (current = 'official')}>
            Official Servers
        </button>
        <button
            class="btn main-border"
            class:selected={current === 'drift'}
            type="button"
            on:click={() => updateFilters('drift')}
            on:click={() => (current = 'drift')}>
            Drifting Teams
        </button>
        <button
            class="btn main-border"
            class:selected={current === 'hang'}
            type="button"
            on:click={() => updateFilters('hang')}
            on:click={() => (current = 'hang')}>
            Hangouts
        </button>
        <button
            class="btn main-border"
            class:selected={current === 'mods'}
            type="button"
            on:click={() => updateFilters('mods')}
            on:click={() => (current = 'mods')}>
            Modding
        </button>
    </div>
</div>
<div class="container">
    {#each displayList as server}
    <ServerCard data="{server}"/>
    {/each}
</div>