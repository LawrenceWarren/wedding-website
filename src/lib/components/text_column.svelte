<script>
  export let content; // snippet
</script>

<div>
  {@render content?.()}
</div>

<style>
  div {
    margin: 0 auto;
    width: clamp(0px, 90vw, 75ch);
  }
</style>
