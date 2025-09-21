<script>
  import TextColumn from "$lib/components/text_column.svelte";
</script>

<div>
  <h1>Jonas & Andy</h1>

  <h2>10th-12th August 2026</h2>
  <h2>Somerset, UK</h2>
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
</style>
