<script>
import {blur} from "svelte/transition";
</script>

<div in:blur={{duration: 600}}>
    <slot></slot>
</div>

<style>

</style>