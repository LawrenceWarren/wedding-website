<script>
  import header_image from "$lib/assets/ring-on-table.webp";

  import TextColumn from "$lib/components/text_column.svelte";
  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import ImageBanner from "$lib/components/image_banner.svelte";
</script>

<svelte:head>
  <title>Gifts - Jonas & Andrew</title>
  <meta
    name="description"
    content="A registry of wedding gift ideas for Jonas and Andrew."
  />
</svelte:head>

<ImageBanner
  src={header_image}
  alt="The ring on Jonas finger while the couple hold hands"
  width="100vw"
  height="90vh"
  margin_bottom="10vh"
  font_size="2rems"
  font_weight="bold"
>
  <h1 class="banner">Gifts</h1>
  <h2 class="banner">Contribute to our honeymoon fund</h2>
</ImageBanner>

<TextColumn>
  <p>
    There is absolutely no expectations of gifts, we are just happy to be
    celebrating with you. However, if you would like to gift anything, we would
    most appreciate any contributions towards our honeymoon so that we can make
    more memories. <b>TODO: Link to funding/donation site</b>
  </p>

  <p>
    If a different gift feels more your style, we will of course treasure that
    too.
  </p>
</TextColumn>

<BurgerMenu />
