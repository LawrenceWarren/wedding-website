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

<BurgerMenu
  padding={"25px"}
  duration="0.1"
  width={"100vw"}
  backgroundColor="rgba(250,250,250,0.5)"
  burgerColor="black"
>
  <div class="inner_burger">
    <a href="/">Home</a>
    <a href="/faqs">FAQs</a>
    <a href="/rsvp">RSVP</a>
    <a href="/accommodation">Accommodation</a>
    <a href="/attire">Attire</a>
    <a href="/registry">Registry</a>
    <a href="/timeline">Timeline</a>
    <a href="/travel">Travel</a>
  </div>
</BurgerMenu>

<main>
  {@render children?.()}
</main>

<style>
  .inner_burger {
    display: flex;
    flex-direction: column; /* stack vertically */
    align-items: center; /* center horizontally */
  }

  a {
    font-size: 2em;
  }

  main {
    padding-bottom: 10vh;
  }
</style>
