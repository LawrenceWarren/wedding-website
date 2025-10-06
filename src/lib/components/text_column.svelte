<script>
  let { children, width = "clamp(0px, 90vw, 75ch)" } = $props();
</script>

<div style="--width: {width}">
  {@render children?.()}
</div>

<style>
  div {
    z-index: -1000;
    margin: 0 auto;
    width: var(--width);
    position: relative;
  }
</style>
