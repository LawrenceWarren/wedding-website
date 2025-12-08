<script lang="ts">
  import Svelecte from "svelecte";

  let { value = $bindable<string | null>(null), options } = $props();

  const search_props = { startOnly: true };

  let hide_dropdown = $state(true);

  function input_listener(this: HTMLInputElement, ev: Event) {
    hide_dropdown = this.value.trim() == "";
  }

  function focus_event_handler(input: HTMLInputElement) {
    hide_dropdown = input.value.trim() == "";

    if (input?.matches(":focus")) {
      input["addEventListener"]("input", input_listener);
    } else {
      input["removeEventListener"]("input", input_listener);
    }
  }
</script>

<div class="wrapper" class:conditional-list={hide_dropdown}>
  <Svelecte
    name="search"
    placeholder="Please start typing your name"
    bind:value
    searchProps={search_props}
    required={true}
    {options}
    onFocus={focus_event_handler}
    onBlur={focus_event_handler}
  />
</div>

<style>
  :global(:root) {
    --vp-font-family-base: "Courier New" !important;
    --vp-font-family-mono: "Courier New" !important;
    width: 100%;
  }

  .wrapper.conditional-list :global(.sv_dropdown.is-open) {
    visibility: hidden !important;
  }
</style>
