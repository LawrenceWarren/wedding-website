<script>
  let { photos } = $props();
</script>

<div class="photo-grid">
  {#each photos as photo}
    <img src={photo.src} alt={photo.alt} />
  {/each}
</div>

<style>
  .photo-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .photo-grid > img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    object-fit: cover;
  }
</style>
