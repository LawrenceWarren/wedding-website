<script>
  import ring_image from "$lib/assets/ring.webp";
  import smiling_image from "$lib/assets/andy-jonas-smiling.webp";
  import kiss_image from "$lib/assets/kiss.webp";
  import header_image from "$lib/assets/andy-and-jonas-cover.webp";

  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import ImageBanner from "$lib/components/image_banner.svelte";
</script>

<svelte:head>
  <title>Jonas' & Andrew's wedding 2026</title>
  <meta
    name="description"
    content="The website for the wedding of Jonas Pantaleon and Andrew George at North Cadbury Court, Somerset, from August 10th until August 12th 2026."
  />
  <meta property="og:image" content={header_image} />
</svelte:head>

<ImageBanner
  src={header_image}
  alt="Jonas and Andrew after getting engaged"
  width="100vw"
  height="90vh"
  margin_bottom="10vh"
  font_size="2rems"
  font_weight="bold"
>
  <h1 class="banner">Jonas & Andrew</h1>
  <h2 class="banner">10th-12th August, 2026 · Somerset, England</h2>
  <a class="banner" href="/rsvp">RSVP</a>
</ImageBanner>

<BurgerMenu burgerColor="var(--bg-color)" />

<div class="sub-banner">
  <h1>
    Please join Jonas and Andrew from August the 10th until August the 12th 2026
    for the wedding of Jonas Pantaleon and Andrew George.
  </h1>

  <div class="photo-grid">
    <img src={smiling_image} alt="Andy and Jonas smiling" />
    <img src={ring_image} alt="The wedding ring on Jonas' finger" />
    <img src={kiss_image} alt="Andy and Jonas kissing after getting engaged" />
  </div>
</div>

<style>
  h1.banner,
  h2.banner {
    color: var(--font-light);
    margin: 0;
    margin-bottom: 5vw;
  }

  h1.banner {
    font-size: 3.5rem;
  }

  a.banner {
    display: inline-block;
    color: var(--font-light);
    text-decoration: none;
    font-weight: 300;
    font-size: 1rem;
    border: 1px solid var(--bg-color);
    padding: 2vh 5vw; /* lots of padding (adjust as needed) */
  }

  .sub-banner {
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .sub-banner > h1 {
    font-weight: 500;
    font-size: 1.7rem;
  }

  .photo-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .photo-grid > img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    object-fit: cover;
  }
</style>
