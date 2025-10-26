<script>
  import header_img from "$lib/assets/cheersing.webp";

  import TextColumn from "$lib/components/text_column.svelte";
  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import ImageBanner from "$lib/components/image_banner.svelte";
</script>

<svelte:head>
  <title>Gifts - Jonas & Andy</title>
  <meta
    name="description"
    content="A registry of wedding gift ideas for Jonas and Andy."
  />
</svelte:head>

<ImageBanner
  src={header_img}
  alt="The ring on Jonas finger while the couple hold hands"
  img_filter="brightness(0.95)"
>
  <h1 class="banner">Gifts</h1>
</ImageBanner>

<TextColumn>
  <p>
    There's no expectations for gifts, we are just happy to celebrate with you.
    But if you'd like to give something, we'd love contributions towards our
    honeymoon (to make more memories!).
  </p>

  <a href="https://prezola.com/buy/view/260479"
    >Contribute here [Make this a sexy button]</a
  >

  <p>
    If a different gift feels more your style, we will of course treasure that
    too.
  </p>
</TextColumn>

<BurgerMenu burgerColor="var(--bg-color)" />
