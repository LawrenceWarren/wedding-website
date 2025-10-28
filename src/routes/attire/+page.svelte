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
    We would love to see our family and friends get dressed up for our
    celebrations!
  </p>

  <h2>Filipino Welcome Dinner</h2>

  <p>
    We would love for you to dress in traditional cream Filipino wedding attire,
    which is Barong Tagalog (usually worn on top of a cream/white T-shirt or
    vest) and Bolero Filipinianas (usually worn on top of a cream/white outfit).
  </p>

  <p>
    If you would like to wear this, but don't already have the items, then a few
    online suppliers are below.
  </p>

  <p>
    If not, please wear a cream/white dress or cream/white shirt with black
    trousers.
  </p>

  <h3>Suppliers</h3>

  <h4>Mestiza Filipina</h4>

  <p>If you are between sizes, we would recommend sizing up.</p>

  <ul>
    <li>
      <a href="https://mestizafilipina.co/collections/barong-tagalog"
        >Barong Tagalog</a
      >
    </li>
    <li>
      <a
        href="https://mestizafilipina.co/collections/modern-filipiniana-mestiza-boleros"
        >Bolero Filipiniana</a
      >
    </li>
  </ul>

  <i>Use coupon code: <b>JONASPANTALEON</b> for 10% off</i>

  <h4>Barongwold</h4>

  <ul>
    <li>
      <a href="https://barongworld.com/collections/pina-cocoon-barong"
        >Barong Tagalog</a
      >
    </li>
    <li>
      <a href="https://barongworld.com/collections/bolero-filipiniana"
        >Bolero Filipiniana</a
      >
    </li>
  </ul>

  <h2>Ceremony</h2>

  <p>
    Please dress in suits or long dresses. Bright and summery for (fingers
    crossed) an outdoor wedding.<b>TODO: Colour palette and images</b>
  </p>

  <p>
    For the rest of the time, please feel free to where whatever you feel
    comfortable in.
  </p>
</TextColumn>

<BurgerMenu />
