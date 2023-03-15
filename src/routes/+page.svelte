<script lang="ts">
    import type { PageData, ActionData } from './$types';
    import Register from '$lib/form/Register.svelte';

    export let data: PageData;
    export let form: ActionData;

    console.log(data, form);
</script>

<Register {form} />
