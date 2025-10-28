<script>
  let {
    children,
    src,
    alt,
    width = "100%",
    height = "clamp(400px, 90vh, 1000px)",
    margin_bottom = "3vh",
    img_filter = "none",
  } = $props();
</script>

<div
  class="container"
  style="--width: {width}; --height: {height}; --margin-bottom: {margin_bottom};"
>
  <img {src} {alt} style="--img-filter: {img_filter};" />
  <div class="overlay">
    {@render children?.()}
  </div>
</div>

<style>
  .container {
    position: relative;
    display: inline-block;

    width: var(--width);
    height: var(--height);
    margin-bottom: var(--margin-bottom);
  }

  img {
    display: block;
    object-fit: cover;
    width: var(--width);
    height: var(--height);
    filter: var(--img-filter);
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
