<script>
  let { children } = $props();
</script>

<div>
  {@render children?.()}
</div>

<style>
  div {
    z-index: -1000;
    margin: 0 auto;
    width: clamp(0px, 90vw, 75ch);
    position: relative;
  }
</style>
