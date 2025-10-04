<script>
  let { children } = $props();
</script>

<div>
  {@render children?.()}
</div>

<style>
  div {
    margin: 0 auto;
    width: clamp(0px, 90vw, 75ch);
    position: relative;
  }
</style>
