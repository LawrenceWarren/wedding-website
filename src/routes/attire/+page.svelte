<script>
  import header_img from "$lib/assets/looking-back.webp";
  import ImageBanner from "$lib/components/image_banner.svelte";
  import TextColumn from "$lib/components/text_column.svelte";
  import BurgerMenu from "$lib/components/burger_menu.svelte";
</script>

<svelte:head>
  <title>Attire - Jonas & Andy</title>
  <meta
    name="description"
    content="Advice on what to wear for Jonas' and Andy's wedding."
  />
</svelte:head>

<ImageBanner
  src={header_img}
  alt="Jonas looking back into the camera in front of a beautiful vista"
  img_filter="brightness(0.8)"
  margin_bottom="2vh"
>
  <h1 class="banner">Attire</h1>
  <h2 class="banner">Guidance on what to wear</h2>
</ImageBanner>

<TextColumn>
  <p>
    We would love to see our family and friends get dressed up for our big day!
  </p>

  <h2>Filipino welcome dinner</h2>

  <p>
    We would love for you to dress in traditional cream Filipino wedding attire,
    which is Barong Tagalog and Bolero Filipinianas.
  </p>

  <p>
    If you would like to wear this and do not already have the items then a few
    online suppliers are listed below: <b>TODO list suppliers</b>: If not please
    wear cream/white dress or cream/white shirt with black trousers.
  </p>

  <h2>Ceremony</h2>

  <p>
    Please dress in suits or long dresses. Bright and summery for (fingers
    crossed) an outdoor wedding. <b>TODO: Colour palette and images</b>
  </p>

  <h2>The rest of the time</h2>

  <p>
    There will be plenty of downtime for you to partake in the activities and
    enjoy the greenery of North Cadbury Court, particularly in the afternoon
    before the Filipino welcome party, and the morning after the ceremony. Feel
    free to where whatever you feel comfortable in.
  </p>
</TextColumn>

<BurgerMenu />
