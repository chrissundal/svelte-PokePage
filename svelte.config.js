import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            fallback: '200.html'
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/svelte-PokePage' : ''
        }
    }
}