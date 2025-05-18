<script>
    import { session } from '$lib/session.js'
    import { loginOpen, authView } from '$lib/AuthView.js';
    import Pokemon from "$lib/Pokemon.svelte";
    import RouteTransition from "$lib/RouteTransition.svelte";
    export let data;
    
    $: pokemons = [...data.pokemons].sort((a, b) => a.name.localeCompare(b.name))
    //$: pokemons = [...data.pokemons].sort((a, b) => a.name > b.name ? 1 : -1)
    
    $: if ($session) {
        loginOpen.set(false);
    }
    const openRegister = () => {
        authView.set('sign_up');
        loginOpen.set(true);
    }
</script>

<svelte:head>
    <title>Home - PokePage</title>
</svelte:head>

<RouteTransition>
    <main class="hero min-h-screen bg-base-300 flex items-center justify-center">
        <div class="hero-content">
            <div class="text-center">
                {#if $session}
                    <h1 class="text-white font-bold text-3xl mt-18">Velkommen til din PokePage {$session.user.email}!</h1>
                    {#if pokemons}
                        <Pokemon {pokemons}/>
                    {/if}
                {:else}
                    <h1 class="text-white font-bold text-4xl">Velkommen til PokePage!</h1>
                    <p class="py-6">Lag din egen PokePage i dag med egen URL.</p>
                    
                    <button class="btn btn-primary" on:click={openRegister}>Opprett en konto</button>
                {/if}
            </div>
        </div>
    </main>
</RouteTransition>

<style>
    
</style>