<script>
  import TextColumn from "$lib/components/text_column.svelte";
  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import ImageBanner from "$lib/components/image_banner.svelte";
  import header_img from "$lib/assets/ring-on-table.webp";
</script>

<svelte:head>
  <title>FAQs - Jonas & Andrew</title>
  <meta
    name="description"
    content="Commonly asked questions, and their answers, for Jonas' and Andrew's wedding."
  />
</svelte:head>

<ImageBanner
  src={header_img}
  alt="Jonas and Andrew clinking glasses"
  img_filter="brightness(0.86)"
>
  <h1 class="banner">FAQs</h1>
  <h2 class="banner">Frequently asked questions</h2>
</ImageBanner>

<TextColumn>
  <h2>Will there be food?</h2>
  <p>
    Yes. We can provide everyone with a lunch and a dinner on the day of the
    ceremony, as well as a dinner on check in day, and a lunch on the day of
    checkout.
  </p>
  <p>
    For those staying overnight at North Cadbury Court, breakfast will also be
    provided.
  </p>
  <p>
    Every meal will have a vegetarian and vegan alternative, and we can cater to
    any dietary needs you may have. Just let us know what you need via the RSVP
    form.
  </p>

  <h2>Can I bring my own food and drinks?</h2>
  <p>
    Yes. There are no restrictions on bringing food and drinks (including
    alcohol) into North Cadbury Court.
  </p>

  <p>
    Feel free to bring your own snacks and beverages if you want something
    specific. All guests staying at North Cadbury Court will have access to
    fridges and cooking facilities.
  </p>

  <h2>Do I have to stay at North Cadbury Court?</h2>
  <p>
    No. We would love for you to stay at North Cadbury Court so that we can
    spend as much time together enjoying the activities as possible, but we
    understand this may not be possible for everyone.
  </p>

  <p>
    <a href="/accommodation">Please see the accommodation page</a> for a range of
    options.
  </p>

  <h2>Can I bring additional guests or plus ones?</h2>
  <p>
    Unfortunately not. While we would love to celebrate with everyone we know,
    due to venue capacity and catering arrangements, we are only able to welcome
    the guests named on each invitation.
  </p>

  <h2>What happens if I miss the RSVP deadline?</h2>

  <b
    >TODO: You need to define when the RSVP deadline is. This needs content.
    Also I suggest perhaps we add this question in after the RSVP deadline?</b
  >

  <h2>Who should I contact if I have any further questions?</h2>

  <p>Please contact us with any more queries!</p>
  <address>
    <b>Andrew</b> - <a href="tel:+447910678521">07910 678521</a>
  </address>
  <address>
    <b>Jonas</b> - <a href="tel:+447894563744">07894 563744</a>
  </address>
</TextColumn>

<BurgerMenu burgerColor="var(--bg-color)" />
