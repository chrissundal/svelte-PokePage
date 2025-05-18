<script>
	import '../app.css';
    import {goto} from "$app/navigation";
    import { session } from '$lib/session.js'
    import { supabase } from '$lib/supabase.js'
    import {Auth} from "@supabase/auth-ui-svelte";
    import { loginOpen, authView } from '$lib/AuthView.js';
    import {ThemeSupa} from "@supabase/auth-ui-shared";
    import {blur} from "svelte/transition";

    const logout = async () => {
        await supabase.auth.signOut();
        loginOpen.set(false);
        goto('/')
    }
    const goHome = () => {
        goto('/')
        loginOpen.set(false);
    }
    const toggleLogin = () => {
        authView.set('sign_in');
        loginOpen.set(!$loginOpen)
    }
    $: if ($session) {
        loginOpen.set(false);
    }
    
</script>

<nav class="fixed bg-base-100 justify-between top-0 left-0 right-0 z-60">
    <div class="navbar max-w-3xl mx-auto justify-between">
        <div>
            <button class="btn btn-ghost text-xl" on:click={goHome}>PokePage</button>
        </div>
        <div>
            {#if $session}
                <button class="btn btn-ghost" on:click={logout}>Logout</button>
                <a href="/{$session.user.email}">
                    <span class="btn btn-ghost">{$session.user.email}</span>
                </a>
            {:else}
                <button class="btn btn-ghost" on:click={toggleLogin}>Login</button>
            {/if}
        </div>
    </div>
</nav>
{#if $loginOpen}
    <div class="fixed inset-0 z-20 flex items-center justify-center bg-base-300 bg-opacity-80" transition:blur>
        <div class="card bg-base-100 p-8 shadow-lg z-20">
            <Auth 
                supabaseClient={supabase} 
                view={$authView} 
                appearance={{
                theme: ThemeSupa,
                style: {
                    input: "width: 400px"
                }
            }}/>
        </div>
    </div>
{/if}



<slot></slot>