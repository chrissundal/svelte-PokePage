<script>
    import { page } from "$app/state";
    import RouteTransition from "$lib/RouteTransition.svelte";
    $: email = page.params.email;
    export let data;
    $: pokemons = data.pokemons
</script>

<svelte:head>
    <title>Profil - PokePage</title>
</svelte:head>


<RouteTransition>
    <div class="hero min-h-screen bg-base-300">
        <div class="hero-content">
            <div class="max-w-2xl text-center">
                <h1 class="font-bold text-4xl">{email}'s side</h1>
                <p class="py-3 max-w-md mx-auto">Beskrivelse av bruker</p>
                <div class="grid grid-cols-3">
                    {#each pokemons as pokemon}
                        <a data-sveltekit-prefetch href="/pokemon/{pokemon.name}">
                            <div class="card bg-slate-700 m-4 shadow-lg shadow-blue-900">
                                <div class="card-body">
                                    <div class="text-center">
                                        <img src="{pokemon.sprites.other.home.front_default}" alt="Pokemon" class="w-32 h-32 mx-auto bg-gray-500 rounded-full object-cover">
                                        <h2 class="text-white text-2xl font-bold">{pokemon.name}</h2>
                                        <p class="text-info">{pokemon.types[0].type.name}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</RouteTransition>
