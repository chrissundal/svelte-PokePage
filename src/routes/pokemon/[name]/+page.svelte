<script>
import {capitalize} from "$lib/capitalize.js";
import RouteTransition from "$lib/RouteTransition.svelte";
export let data;
$: pokemon = data.pokemon;
$: console.log(data.pokemon)

</script>

<svelte:head>
    <title>{capitalize(pokemon.name)} - PokePage</title>
</svelte:head>

<RouteTransition>
    {#if pokemon}
        <div class="hero min-h-screen bg-base-300 flex items-center justify-center">
            <div class="card w-full max-w-md bg-base-100 shadow-xl">
                <figure class="bg-base-200 py-6">
                    <img src={pokemon.sprites.other.home.front_default} alt={capitalize(pokemon.name)} class="w-32 h-32 object-contain" />
                </figure>
                <div class="card-body">
                    <h1 class="card-title text-3xl mb-2">{capitalize(pokemon.name)}</h1>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <div class="badge badge-primary text-sm">{capitalize(pokemon.types[0].type.name)}</div>
                        <div class="badge badge-secondary text-sm">XP: {pokemon.base_experience}</div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mb-4 text-center">
                        <div>
                            <span class="font-semibold">Weight:</span> {pokemon.weight}
                        </div>
                        <div>
                            <span class="font-semibold">Height:</span> {pokemon.height}
                        </div>
                    </div>
                    <div>
                        <h3 class="font-semibold mb-1">Stats:</h3>
                        <ul class="grid grid-cols-2 gap-3">
                            {#each pokemon.stats as stat}
                                <div>
                                    <div class="flex justify-between border border-neutral-700 p-3 rounded">
                                        <span class="capitalize">{stat.stat.name}:</span>
                                        <span class="font-bold">{stat.base_stat}</span>
                                    </div>
                                </div>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {:else}
        <h1>Loading</h1>
    {/if}
</RouteTransition>

<style>

</style>

