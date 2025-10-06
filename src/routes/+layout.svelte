<script lang="ts">
  import "/src/styles/index.css";
  import favicon from "$lib/assets/favicon.ico";
  import BurgerMenu from "svelte-burger-menu";

  let innerWidth = $state(0);
  const is_mobile_device = $derived(innerWidth < 600 ? true : false);

  // TODO: Burger menu width is not reactive!!!
  let burger_width = $derived(is_mobile_device ? "100vw" : "25vw");

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
    z-index: 0;
  }
</style>
