<script>
  import img from "$lib/assets/north-cadbury.webp";
  import TextColumn from "$lib/components/text_column.svelte";
  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import ImageBanner from "$lib/components/image_banner.svelte";
</script>

<svelte:head>
  <title>Accommodation - Jonas & Andy</title>
  <meta
    name="description"
    content="Information about where you can stay for Jonas' and Andy's wedding."
  />
</svelte:head>

<ImageBanner src={img} alt="The facade of North Cadbury Court on a sunny day">
  <h1 class="banner">Accommodation</h1>
  <h2 class="banner">Somerset, England</h2>
</ImageBanner>

<TextColumn>
  <h2>Accommodation at North Cadbury Court</h2>
  <p>
    We would love to invite you to stay with us at the venue for the whole
    celebration.
  </p>

  <h3>Prices</h3>

  <p>
    The majority of rooms available are double en-suites. Below are the prices
    for one room for both nights:
  </p>

  <ul>
    <li>Single en-suite: £200</li>
    <li>Double en-suite: £400 (£200 per person)</li>
  </ul>

  <p>
    This price covers accommodation, continental breakfast for both mornings,
    and access to all of the facilities at North Cadbury Court such as:
  </p>

  <ul>
    <li>Swimming pool</li>
    <li>Sauna</li>
    <li>3-hole golf course</li>
    <li>Squash and tennis courts</li>
    <li>Plus more!</li>
  </ul>

  <h3>How to book a room</h3>

  <p>
    North Cadbury Court does not have a booking website, so please let us know
    in your RSVP whether you would like to book a room.
  </p>

  <p>
    Some rooms have unique features so please let us know if there is something
    important to you (e.g. wheelchair access, bath or walk in shower, space for
    extra beds).
  </p>

  <p>Rooms will be allocated on a first-come, first-served basis.</p>

  <h3>Paying for rooms</h3>

  <p>
    We will confirm your room as soon as we can after receiving your RSVP. After
    confirming the room, we will send you the bank details so you can make a
    transfer. If anything changes, please let us know as soon as possible.
  </p>

  <h2>Alternative accommodation</h2>

  <p>
    If you are unable to stay at the venue but would still like to be nearby, we
    have provided some alternative options below. Please note, offsite guests
    are unable to stay at the venue beyond midnight.
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
