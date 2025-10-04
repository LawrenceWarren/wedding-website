<script>
  import TextColumn from "$lib/components/text_column.svelte";
</script>

<svelte:head>
  <title>Jonas' & Andrew's wedding 2026</title>
  <meta
    name="description"
    content="The website for the wedding of Jonas Pantaleon and Andrew George at North Cadbury Court, Somerset, from August 10th until August 12th 2026."
  />
</svelte:head>

<div>
  <h1>Jonas & Andrew</h1>

  <h2>10th-12th August, 2026 · Somerset, England</h2>

  <a href="/rsvp" class="rsvp-button">RSVP</a>
</div>

<TextColumn>
  <p>
    Please join us from <b><i>August the 10th until August the 12th 2026</i></b>
    for the wedding of Jonas Pantaleon and Andrew George.
  </p>
</TextColumn>

<style>
  div {
    width: 100%;
    height: 50vh;
    background-image: url("$lib/assets/random-header.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
  }

  h1,
  h2 {
    color: var(--font-light);
  }

  .rsvp-button {
    display: inline-block;
    color: var(--font-light);
    text-decoration: none;
    font-weight: 300;
    font-size: 1rem;
    border: 1px solid var(--bg-color);
    padding: 2vh 5vw; /* lots of padding (adjust as needed) */
  }
</style>
