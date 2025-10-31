<script>
  import BurgerButton from "./burger_button.svelte";
  import SideMenu from "./side_menu.svelte";
  import { onDestroy } from "svelte";

  export let open = false;
  export let duration = 0.4;
  export let width = "300px";
  export let padding = "25px";
  export let paddingTop = "50px";
  export let backgroundColor = "rgb(1, 0, 74)";
  export let burgerColor = "rgb(18.4, 18.4, 18.4)";
  export let menuColor = "rgb(180, 180, 180)";

  let burgerProps = { duration, burgerColor, menuColor };
  let menuProps = {
    duration,
    width,
    padding,
    paddingTop,
    backgroundColor,
    menuColor,
  };

  let scroll_y = 0;

  // ✅ Top-level reactive block (valid Svelte)
  $: if (typeof document !== "undefined") {
    if (open) {
      scroll_y = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scroll_y}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      if (top) window.scrollTo(0, -parseInt(top));
    }
  }

  // ✅ Cleanup in case the component is destroyed while menu is open
  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
  });
</script>

<BurgerButton {...burgerProps} bind:open />
<SideMenu {...menuProps} bind:open>
  <slot></slot>
</SideMenu>
