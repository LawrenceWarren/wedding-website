<script>
  let { children, image, alt_text } = $props();
</script>

<div>
  <img src={image} alt={alt_text} />
  {@render children?.()}
</div>
