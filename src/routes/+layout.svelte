<script lang="ts">
    import '../app.postcss';
    import '/fortawesome/fontawesome-free/css/all.css';
</script>

<svelte:head>
    <title>S:KIT</title>
</svelte:head>
<main
    class="mx-auto mt-8 w-10/12 rounded-md bg-sky-200 p-4 sm:bg-gray-300 md:bg-teal-400 lg:bg-lime-500">
    <slot />
</main>
