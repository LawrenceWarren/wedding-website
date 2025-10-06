<script>
  import BurgerMenu from "svelte-burger-menu";
</script>

<BurgerMenu
  padding={"25px"}
  duration="0.25"
  width={"100vw"}
  backgroundColor="var(--bg-color)"
  burgerColor="var(--font-color)"
  menuColor="var(--font-color)"
>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <a style="font-size: 2em" href="/">Home</a>
    <a style="font-size: 2em" href="/faqs">FAQs</a>
    <a style="font-size: 2em" href="/rsvp">RSVP</a>
    <a style="font-size: 2em" href="/accommodation">Accommodation</a>
    <a style="font-size: 2em" href="/attire">Attire</a>
    <a style="font-size: 2em" href="/registry">Registry</a>
    <a style="font-size: 2em" href="/timeline">Timeline</a>
    <a style="font-size: 2em" href="/travel">Travel</a>
  </div>
</BurgerMenu>
