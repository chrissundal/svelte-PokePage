<script>
    import {capitalize} from "$lib/capitalize.js";
export let pokemons
</script>

<div class="flex justify-center w-full mt-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {#if pokemons.length > 0}
            {#each pokemons as pokemon (pokemon.name)}
                <a data-sveltekit-prefetch href="/pokemon/{pokemon.name}">
                <div class="card bg-slate-700 shadow-lg shadow-blue-900">
                    <div class="card-body">
                        <div class="text-center">
                            <img src={pokemon.sprites.other.home.front_default} alt="Pokemon" class="w-32 h-32 mx-auto bg-gray-500 rounded-full object-cover">
                            <h2 class="text-white text-2xl font-bold">{capitalize(pokemon.name)}</h2>
                            {#if pokemon.types && pokemon.types.length}
                                <p class="text-info">{capitalize(pokemon.types[0].type.name)}</p>
                            {/if}
                        </div>
                    </div>
                </div>
                </a>
            {/each}
        {:else}
            <p>Ingen pokemon funnet.</p>
        {/if}
    </div>
</div>

<style>

</style>