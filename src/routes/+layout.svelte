<script lang="ts">
    import '../app.postcss';
    import {
        AddressBookRegular,
        ArrowDownUpLockSolid,
        BasketShoppingSolid
    } from 'svelte-awesome-icons';
</script>

<svelte:head>
    <title>S:KIT</title>
</svelte:head>
<main
    class="mx-auto mt-8 w-10/12 rounded-md bg-sky-200 p-4 sm:bg-gray-300 md:bg-teal-400 lg:bg-lime-500">
    <i class="fa-regular fa-lightbulb" />
    <AddressBookRegular />
    <ArrowDownUpLockSolid />
    <BasketShoppingSolid size="100" color="#fff" />
    <slot />
</main>
