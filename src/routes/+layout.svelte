<script lang="ts">
  import "/src/styles/index.css";
  import favicon from "$lib/assets/favicon.ico";

  let innerWidth = $state(0);
  const is_mobile_device = $derived(innerWidth < 600 ? true : false);

  $effect(() => {
    console.log(is_mobile_device);
    console.log(innerWidth);
  });

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<svelte:window bind:innerWidth />

<main>
  {@render children?.()}
</main>

<style>
  main {
    padding-bottom: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
