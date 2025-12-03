<script lang="ts">
  import { onMount } from "svelte";
  import Svelecte from "svelecte";

  const names = [
    "Adam Russ",
    "Ahlen Lavaro",
    "Alexa Karnickis",
    "Andy George",
    "Anne Diangson",
    "Arch Diangson",
    "Audrey Butler",
    "Brea Priestly",
    "Caitlin Thompson",
    "Caroline Dent",
    "Cecille Pantaleon",
    "Charlie Peet",
    "Charlie Parrott",
    "Chhaya Tank",
    "Chris George",
    "Christine Labonete",
    "Claire Brown",
    "Claryn Labonete",
    "Dan Warr",
    "Darcey Bates",
    "Darian Graham",
    "David Butler",
    "David Purton",
    "Ella Hutchinson",
    "Ella Jackson",
    "Emilia Butler",
    "Emily Jacobs",
    "Emmanuel Hale",
    "Estella Meachin-Taylor",
    "Findlay Lennie",
    "Gemma Dyer",
    "Helen Butler",
    "Ivan Apiado",
    "Jack Brown",
    "Jai Patel",
    "Jaina Tank",
    "Jamie Tipple",
    "Janet Dent",
    "Jasmine Pantaleon",
    "Jem Pantaleon",
    "Jenna Holtom",
    "Jess Purton",
    "Jessica Pantaleon",
    "Joe Butler",
    "Joe Tibbles",
    "John Goodhead",
    "Jon Brown",
    "Jonas Pantaleon",
    "Jonee Doronilla",
    "Jonel Alegre",
    "Joseph Pantaleon",
    "Josh Pantaleon",
    "June Ponce",
    "Kenan Redif",
    "Laurence Dicks",
    "Lawrence Warren",
    "Leah Butler",
    "Lori Purton",
    "Lottie Brown",
    "Luana Frank",
    "Lucie Beaumont",
    "Luke Priestly",
    "Maria Thea Magnayon",
    "Marnelli Magnayon",
    "Martin George",
    "Mary Panganiban",
    "Mary Purton",
    "Masiey Greenhow",
    "Matteo Magnayon",
    "Mia Bartolomucci",
    "Mike Dent",
    "Nabil Kandar",
    "Olivia Diangson",
    "Oscar Brown",
    "Pamela Pantaleon",
    "Pauline Pantaleon",
    "Reyn Apiado",
    "Rodrigo Diangson",
    "Ron Deivid Magnayon",
    "Sam Mansfield",
    "Sophie Batchelor",
    "Tarah Butler",
    "Terrell Alegre",
    "Terry Alegre",
    "Tom Gelling",
    "Vadims Karnickis",
    "Valermia Pantaleon",
    "Victoria Fletcher",
    "Vina Pantaleon",
    "Vince Doronilla",
    "Will Flack",
    "Will Jones",
    "Zachariah Redif",
    "Zak Doronilla",
    "Zephyr Redif",
  ];

  const searchProps = { startOnly: true };

  let input: HTMLInputElement | null;
  let value: string | null = null;
  let hide_dropdown = true;

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

  onMount(() => {
    input = document.getElementById(
      "name-select-box"
    ) as HTMLInputElement | null;
  });
</script>

<br />
<br />
<br />
<br />

<div class="wrapper" class:conditional-list={hide_dropdown}>
  <Svelecte
    bind:value
    {searchProps}
    required={true}
    options={names}
    placeholder="Please start typing your name"
    inputId="name-select-box"
    onFocus={focus_event_handler}
    onBlur={focus_event_handler}
  />
</div>

<style>
  .wrapper {
    width: 90%;
  }

  .wrapper.conditional-list :global(.sv_dropdown.is-open) {
    visibility: hidden !important;
  }
</style>
