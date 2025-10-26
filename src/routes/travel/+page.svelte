<script>
  import TextColumn from "$lib/components/text_column.svelte";
  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import ImageBanner from "$lib/components/image_banner.svelte";
  import header_img from "$lib/assets/somerset-stock.webp";
</script>

<svelte:head>
  <title>Travel - Jonas & Andy</title>
  <meta
    name="description"
    content="Travel information and advice for Jonas' and Andy's wedding."
  />
</svelte:head>

<ImageBanner
  src={header_img}
  alt="Glastonbury Tor on a sunny day"
  img_filter="brightness(0.85)"
>
  <h1 class="banner">Travel</h1>
  <h2 class="banner">How to join us in Somerset</h2>
</ImageBanner>

<TextColumn>
  <p>The entire wedding and all events will be held at:</p>

  <address class="site-address">
    <a
      href="https://maps.google.com/?q=North+Cadbury+Court,+North+Cadbury,+Somerset,+BA22+7DR"
      target="_blank"
      rel="noopener"
    >
      North Cadbury Court<br />
      North Cadbury<br />
      Somerset<br />
      BA22 7DR<br />
      United Kingdom
    </a>
  </address>

  <h2>Travelling by car</h2>
  <p>
    There is a car park with ample free parking and four free electric charging
    points.
  </p>

  <h2>Travelling by rail</h2>
  <p>
    The nearest train station is Castle Cary, which is one and a half hours from
    London Paddington, and then a ten minute drive to the venue.
  </p>

  <h2>Travelling from Cambridgeshire</h2>
  <p>
    To reduce the number of people driving, we are planning to organise a coach
    from Cambridgeshire (likely Northstowe) to the venue and back. A rough quote
    suggested it would be around £50 return per-person. Please let us know if
    you are interested in your RSVP.
  </p>

  <h2>Local taxi services</h2>
  <h3>Target Taxis - Wincanton</h3>
  <ul>
    <li>24-hour service, advance booking required</li>
    <li>07703 565754</li>
    <li><a href="mailto:info@targettaxis.co.uk">info@targettaxis.co.uk</a></li>
  </ul>

  <h3>Destination Travel - Wincanton</h3>
  <ul>
    <li>Service - until midnight, advance booking preferred</li>
    <li>01963 34441</li>
    <li>
      <a href="https://destinationtravelwincanton.co.uk/">Link to website</a>
    </li>
  </ul>

  <p>
    We have a longer taxi service list from the venue, please contact us if you
    would like us to share it with you.
  </p>
</TextColumn>

<BurgerMenu burgerColor="var(--bg-color)" />

<style>
  .site-address {
    font-style: normal;
    line-height: 1.6;
    background: #f9f9f9;
    border-left: 4px solid #ccc;
    padding: 1em;
    border-radius: 6px;
    max-width: 300px; /* optional, keeps it compact */
  }

  .site-address a {
    text-decoration: none; /* remove default underline */
    color: inherit; /* use normal text colour */
    display: block; /* makes the whole block clickable */
  }

  .site-address a:hover {
    color: #0056b3; /* highlight on hover */
  }
</style>
