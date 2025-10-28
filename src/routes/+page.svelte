<script>
  import ring_image from "$lib/assets/ring.webp";
  import smiling_image from "$lib/assets/andy-jonas-smiling.webp";
  import kiss_image from "$lib/assets/kiss.webp";
  import header_image from "$lib/assets/andy-and-jonas-cover.webp";

  import Timeline from "$lib/components/timeline.svelte";
  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import ImageBanner from "$lib/components/image_banner.svelte";
  import TextColumn from "$lib/components/text_column.svelte";
  import Countdown from "$lib/components/countdown.svelte";
</script>

<svelte:head>
  <title>Jonas & Andy</title>
  <meta
    name="description"
    content="The website for the wedding of Jonas Pantaleon and Andy George at North Cadbury Court, Somerset, from August 10th until August 12th 2026."
  />
</svelte:head>

<ImageBanner
  src={header_image}
  alt="Jonas and Andy after getting engaged"
  img_filter="brightness(0.95)"
  margin_bottom="10vh"
>
  <div class="row">
    <h1 class="banner">Jonas <i>&</i> Andy</h1>
    <!--
      <h1 class="banner">Jonas</h1>
      <h1 class="banner fancy">
        <i
        style="font-size: 1.6rem; top: 5px; position: relative; padding-left: 6px; padding-right: 5px;"
        >and</i
        >
      </h1>
      <h1 class="banner">Andy</h1>
      -->
  </div>
  <h2 class="banner">10th-12th August, 2026 · North Cadbury Court, Somerset</h2>
  <a class="banner" href="/rsvp">RSVP</a>
</ImageBanner>

<div class="sub-banner">
  <h1>
    Please join us from August the 10th-12th 2026 as we celebrate our wedding in
    Somerset.
  </h1>

  <div class="photo-grid">
    <img src={smiling_image} alt="Jonas and Andy smiling" />
    <img src={ring_image} alt="The wedding ring on Jonas' finger" />
    <img src={kiss_image} alt="Jonas and Andy kissing after getting engaged" />
  </div>
</div>

<TextColumn>
  <h1>Timeline</h1>

  <p>We are really looking forward to celebrating our wedding with you.</p>
  <p>
    We have exclusive use of North Cadbury Court from 1pm on Monday 10th August
    to 2pm on Wednesday 12th August.
  </p>
  <p>
    Below are some of the main events; around these times we are hoping everyone
    can relax and enjoy the activities at the venue together.
  </p>
  <p class="bottom-p">
    We will be providing the food and drinks, from a hog roast at the welcome
    dinner on Monday through to a farewell pizza on Wednesday
    <i>(v, vg, and gf options are available for every meal)</i>.
  </p>

  <Timeline />
</TextColumn>

<Countdown />

<BurgerMenu burgerColor="var(--bg-color)" />

<style>
  .row {
    display: flex;
    flex-direction: row;
  }

  .bottom-p {
    margin-bottom: 0;
  }

  h1.banner {
    width: 80vw;
  }

  .banner > i {
    font-weight: 400;
    font-size: 2rem;
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
    margin-bottom: 10vh;
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
