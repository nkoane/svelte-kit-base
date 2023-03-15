<script lang="ts">
    import '../app.postcss';
    import * as feather from 'feather-icons';
    import { onMount } from 'svelte';
    onMount(() => feather.replace());
</script>

<svelte:head>
    <title>S:KIT</title>
</svelte:head>
<main class="mx-auto mt-8 w-10/12 rounded-md bg-gray-50 p-6">
    <header class="mb-4 flex items-center gap-2">
        <i data-feather="code" class="h-8 w-8 text-red-600" />
        <h1 class="my-2 text-4xl font-bold">S:KIT</h1>
    </header>
    <slot />
</main>
