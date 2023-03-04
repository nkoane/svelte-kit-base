<script lang="ts">
    import '../app.postcss';
    import * as feather from 'feather-icons';
    import { onMount } from 'svelte';
    onMount(() => feather.replace());
</script>

<svelte:head>
    <title>S:KIT</title>
</svelte:head>
<main
    class="mx-auto mt-8 w-10/12 rounded-md bg-sky-200 p-4 sm:bg-gray-300 md:bg-teal-400 lg:bg-lime-500">
    <i data-feather="video" color="#fff" class="h-16 w-16" />
    <slot />
</main>
