<script>
  import img from "$lib/assets/north-cadbury.webp";
  import TextColumn from "$lib/components/text_column.svelte";
  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import ImageBanner from "$lib/components/image_banner.svelte";
</script>

<svelte:head>
  <title>Accommodation - Jonas & Andrew</title>
  <meta
    name="description"
    content="Information about where you can stay for Jonas' and Andrew's wedding."
  />
</svelte:head>

<ImageBanner
  src={img}
  alt="The facade of North Cadbury Court on a sunny day"
  width="100vw"
  height="90vh"
  margin_bottom="10vh"
  font_size="2rems"
  font_weight="bold"
>
  <h1 class="banner">Accommodation</h1>
  <h2 class="banner">Somerset, England</h2>
</ImageBanner>

<TextColumn>
  <h2>Accommodation at the venue</h2>
  <p>
    We would love for you to stay at the venue with us for the whole
    celebration.
  </p>

  <h3>Prices</h3>

  <p>
    The majority of rooms available are double en-suites. The prices provided
    are for a single room for both nights:
  </p>

  <ul>
    <li>Single en-suite: £200</li>
    <li>Double en-suite: £400</li>
  </ul>

  <p>
    This price covers accommodation, breakfast for both mornings, and access to
    all facilities at the venue such as:
  </p>

  <ul>
    <li>Swimming pool</li>
    <li>Sauna</li>
    <li>3-hole golf course</li>
    <li>Squash and tennis courts</li>
    <li>More!</li>
  </ul>

  <h3>How to book a room</h3>

  <p>
    The venue does not have a booking website so please let us know in your RSVP
    whether you would like to book a room.
  </p>
  <p>
    If you have additional requirements for your room, please say let us know
    via the RSVP form. Some rooms have unique features, such as wheelchair
    access, a bath or a walk-in shower, or space for extra beds, so hopefully we
    can cater to your needs.
  </p>
  <p>Rooms will be allocated on a first come first serve basis.</p>

  <h3>Paying for rooms</h3>

  <p>
    We'll confirm your room as soon as we can after receiving your RSVP, then
    send you bank details so you can make a transfer. If anything changes,
    please let us know.
  </p>

  <h2>Alternative accommodation</h2>

  <p>
    If you are unable to stay at the venue but would still like to be nearby, we
    have provided some alternative options below. Please note offsite guests are
    unable to stay at the venue beyond midnight.
  </p>

  <h3>The Queens Arms, Corton Denham</h3>
  <ul>
    <li>Country pub B&B</li>
    <li>3.5 miles from North Cadbury Court</li>
    <li><a href="https://www.thequeensarms.com/">Link to website</a></li>
  </ul>

  <h3>Travelodge, Wincanton</h3>

  <ul>
    <li>7.3 miles from North Cadbury Court</li>
    <li>
      <a href="https://www.travelodge.co.uk/hotels/561/Wincanton-hotel">
        Link to website
      </a>
    </li>
  </ul>
</TextColumn>

<BurgerMenu />
