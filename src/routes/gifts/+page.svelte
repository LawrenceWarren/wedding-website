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

<BurgerMenu burgerColor="var(--bg-color)" />
