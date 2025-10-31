<script>
  import TextColumn from "$lib/components/text_column.svelte";
  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import ImageBanner from "$lib/components/image_banner.svelte";
  import header_img from "$lib/assets/ring-on-table.webp";
</script>

<svelte:head>
  <title>FAQs - Jonas & Andy</title>
  <meta
    name="description"
    content="Commonly asked questions, and their answers, for Jonas' and Andy's wedding."
  />
</svelte:head>

<ImageBanner
  src={header_img}
  alt="Jonas and Andy clinking glasses"
  img_filter="brightness(0.86)"
>
  <h1 class="banner">FAQs</h1>
  <h2 class="banner">Frequently asked questions</h2>
</ImageBanner>

<TextColumn>
  <h2>Will there be food?</h2>
  <p>
    Yes. We will providing meals across the three days of the celebration:
    dinner on arrival night, lunch and dinner on the wedding day, and lunch on
    the day of departure.
  </p>
  <p>
    Guests staying overnight at the venue will also have breakfast each morning.
  </p>
  <p>
    Vegetarian, vegan and gluten-free choices will be available. Please share
    any dietary requirements in your RSVP.
  </p>

  <h2>Can I bring my own food and drinks?</h2>

  <p>
    Yes. There are no restrictions on bringing food and drinks (including
    alcohol) to the venue.
  </p>
  <p>
    Please feel free to bring your own food and drinks if you wanted something
    specific.
  </p>
  <p>
    All guests staying at the venue will have access to shared fridges and
    cooking facilities.
  </p>

  <h2>Do I have to stay at North Cadbury Court?</h2>

  <p>
    No. We would love for you to stay at the venue so we can spend as much time
    together enjoying the activities, but understand this may not be possible
    for everyone. Please see the accommodation page for other options.
  </p>
  <p>
    <a href="/accommodation">Please see the accommodation page</a> for a range of
    options.
  </p>

  <h2>Are there any rooms that have space for more than two people?</h2>

  <p>
    Yes. Some rooms have space for additional beds to be set up, subject to
    availability.
  </p>
  <ul>
    <li>Folding (Z beds) are £60 per person for both nights</li>
    <li>Travel cots are £25 for both nights</li>
  </ul>
  <p>
    If you are interested in this, please let us know in your RSVP or message
    us.
  </p>

  <h2>Can I bring additional guests or plus ones?</h2>

  <p>
    We'd love to celebrate with everyone we know, but due to venue capacity and
    catering arrangements, we're only able to welcome the guests named on each
    invitation.
  </p>

  <h2>Who should I contact if I have any further questions?</h2>

  <p>Please contact us with any more queries!</p>
  <address>
    <b>Andy</b> - <a href="tel:+447910678521">07910 678521</a>
  </address>
  <address>
    <b>Jonas</b> - <a href="tel:+447894563744">07894 563744</a>
  </address>
</TextColumn>

<BurgerMenu burgerColor="var(--bg-color)" />
