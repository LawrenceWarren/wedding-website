<script>
  import img from "$lib/assets/exterior-north-cadbury-court.webp";
  import TextColumn from "$lib/components/text_column.svelte";
</script>

<img src={img} alt="The exterior of North Cadbury Court" />

<TextColumn>
  <h1>Accommodation</h1>
  <p>
    We would love for you to stay at the venue with us. The majority of rooms
    are double/single en-suites which are £200/£100 per person for both nights.
    This also includes food.
  </p>

  <p>
    Unfortunately the venue do not have a booking website so please let us know
    in your RSVP whether you want to book.
    <b>Rooms will be allocated on a first come first serve basis.</b>
  </p>

  <p>
    Some rooms have unique features so please let us know if there is something
    important to you (eg wheelchair access, bath or shower etc) in your RSVP.
  </p>

  <p>
    We will be providing all food and drinks, from a hog roast at the Welcome
    party on Monday to a farewell pizza on the Wednesday. The venue has a
    swimming pool, sauna, three hole golf course, squash courts, tennis courts,
    and more, which will be accessible over the three days.
  </p>

  <p>
    If you are unable to stay at the venue but would still like to be nearby
    below are some alternative options. Please note offsite guests are unable to
    stay beyond midnight.
  </p>
</TextColumn>

<style>
  img {
    max-width: 100%;
  }
</style>
