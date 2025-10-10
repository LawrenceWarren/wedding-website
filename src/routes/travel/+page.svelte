<script>
  import TextColumn from "$lib/components/text_column.svelte";
  import BurgerMenu from "$lib/components/burger_menu.svelte";
</script>

<svelte:head>
  <title>Jonas' & Andrew's wedding - Travel</title>
  <meta
    name="description"
    content="Travel information and advice for Jonas' and Andrew's wedding."
  />
</svelte:head>

<TextColumn>
  <h1>Travel</h1>

  <p>The entire wedding and all of it's events will be held at:</p>

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
    points at the venue.
  </p>

  <h2>Travelling by rail</h2>
  <p>
    The nearest train station is Castle Cary, which is one and a half hours from
    London Paddington, and then a ten minute drive to the venue. <b
      >TODO: link to a taxi service</b
    >
  </p>

  <h2>Travel from Cambridgeshire</h2>
  <p>
    We are planning organise a coach from Cambridgeshire (likely Northstowe) to
    the venue and back to reduce the number of people driving. A rough quote
    suggested it would be a £50 return per-person. Please let us know if you are
    interested via the RSVP form.
  </p>
</TextColumn>

<BurgerMenu />

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
