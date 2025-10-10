<script>
  import img from "$lib/assets/exterior-north-cadbury-court.webp";
  import TextColumn from "$lib/components/text_column.svelte";
  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import ImageBanner from "$lib/components/image_banner.svelte";
</script>

<svelte:head>
  <title>Jonas' & Andrew's wedding - Accommodation</title>
  <meta
    name="description"
    content="Information about where you can stay for Jonas' and Andrew's wedding."
  />
</svelte:head>

<ImageBanner
  src={img}
  alt="Jonas and Andrew after getting engaged"
  width="100vw"
  height="90vh"
  margin_bottom="10vh"
  font_size="2rems"
  font_weight="bold"
>
  <h1 class="banner">Accommodation</h1>
  <h2 class="banner">Somerset, England</h2>
</ImageBanner>

<BurgerMenu />

<TextColumn>
  <p>
    We would love for you to stay at the venue with us. The majority of rooms
    are double/single en-suites which are £200/£100 per person for both nights.
    This also includes food. <b
      >TODO: The pricing needs clarification/I think generally this paragraph is
      a mess</b
    >
  </p>

  <p>
    Unfortunately the venue does not have a booking website, so please let us
    know if you want to book a suite when you fill out the
    <a href="/rsvp">RSVP form.</a> Rooms will be allocated on a first come first
    serve basis.
    <b>TODO: Perhaps add a section about how/when rooms will be paid for?</b>
  </p>

  <p>
    Some rooms have unique features so please let us know if there is something
    important to you (eg wheelchair access, bath or shower etc) in your RSVP. <b
      >TODO: I think clarify more specifically the types of unique features. Is
      a shower a unique feature to a suite?</b
    >
  </p>

  <h2>Venue activities</h2>
  <p>
    The venue has a swimming pool, sauna, three hole golf course, squash courts,
    tennis courts, and more, which will be accessible over the three days. We
    will be providing all food and drinks, from a hog roast at the welcome party
    on Monday to a farewell pizza on the Wednesday.<b
      >TODO: Maybe useful to provide a link to a page that has all venue
      activities (probably from the venues website) or to list them all here</b
    >
  </p>

  <h2>Alternatives accommodation</h2>
  <p>
    If you are unable to stay at the venue but would still like to be nearby
    below are some alternative options. Please note offsite guests are unable to
    stay beyond midnight.<b
      >TODO: List alternative accommodation if you can be bothered
    </b>
  </p>
</TextColumn>

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
</style>
