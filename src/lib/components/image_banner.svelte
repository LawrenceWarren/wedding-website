<script>
  let {
    children,
    src,
    alt,
    width = "100%",
    height = "90vh",
    margin_bottom = "10vh",
    font_size = "2rems",
    font_weight = "bold",
    img_filter = "none",
  } = $props();
</script>

<div
  class="container"
  style="--width: {width}; --height: {height}; --margin-bottom: {margin_bottom}; --font-size: {font_size}; --font-weight: {font_weight};"
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
    font-size: var(--font-size);
    font-weight: var(--font-weight);
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
