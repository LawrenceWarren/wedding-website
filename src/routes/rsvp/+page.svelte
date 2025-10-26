<script lang="ts">
  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import ImageBanner from "$lib/components/image_banner.svelte";
  import TextColumn from "$lib/components/text_column.svelte";
  import header_img from "$lib/assets/kiss-landscape.webp";

  import { fade } from "svelte/transition";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  const names = [
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

  let full_name = "";
  let email = "";
  let phone = "";

  type Attendance = "yes_whole" | "yes_some" | "no" | "";
  let attendance: Attendance = "";

  // Structured arrival/leaving info for "Yes (some)"
  let arrival_date = "";
  let arrival_time = "";
  let leave_date = "";
  let leave_time = "";

  let accommodation: "yes" | "no" | "" = "";
  let accommodation_comments = "";

  let meal: "beef" | "aubergine" | "" = "";

  let dietary_other = "";
  let selected_common: Record<string, boolean> = {};

  let coach: "yes" | "no" | "" = "";

  let success_message = "";
  let submission_error = "";
  let submitted = false;
  let past_success = false;
  let submitted_data: any = null;
  let form_error = "";

  const COMMON_DIETARY_REQUIREMENTS = ["Vegan", "Vegetarian", "Gluten free"];

  const AVAILABLE_DATES = [
    { label: "10 August 2026", value: "2026-08-10" },
    { label: "11 August 2026", value: "2026-08-11" },
    { label: "12 August 2026", value: "2026-08-12" },
  ];

  onMount(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("past_success") === "true") {
      past_success = true;
    }
    for (const item of COMMON_DIETARY_REQUIREMENTS)
      selected_common[item] = false;
  });

  function validate() {
    form_error = "";
    if (!full_name.trim())
      return (form_error = "Please select your name."), false;
    if (!email.trim())
      return (form_error = "Please enter your email address."), false;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return (form_error = "Please enter a valid email address."), false;
    if (!phone.trim())
      return (form_error = "Please enter your phone number."), false;
    if (!attendance)
      return (form_error = "Please select your attendance option."), false;

    if (attendance === "yes_some") {
      if (!arrival_date || !arrival_time || !leave_date || !leave_time) {
        return (
          (form_error =
            "Please select both arrival and leaving dates and times."),
          false
        );
      }

      const arrive_dt = new Date(`${arrival_date}T${arrival_time}`);
      const leave_dt = new Date(`${leave_date}T${leave_time}`);

      if (leave_dt <= arrive_dt) {
        return (
          (form_error = "Leaving date/time must be after arrival date/time."),
          false
        );
      }
    }

    if (attendance === "yes_whole" || attendance === "yes_some") {
      if (!accommodation)
        return (
          (form_error =
            "Please indicate whether you would like to book accommodation."),
          false
        );
      if (!meal)
        return (form_error = "Please choose a main meal option."), false;
      if (!coach)
        return (
          (form_error = "Please indicate whether you want the coach."), false
        );
    }

    return true;
  }

  async function handle_submit(e: Event) {
    e.preventDefault();
    if (!validate()) {
      submitted = false;
      return;
    }

    const SELECTED_COMMONS = Object.entries(selected_common)
      .filter(([, v]) => v)
      .map(([k]) => k);

    const DIETARY_REQUIREMENTS =
      attendance === "yes_whole" || attendance === "yes_some"
        ? [
            ...SELECTED_COMMONS,
            ...(dietary_other.trim() ? [dietary_other.trim()] : []),
          ]
        : null;

    submitted_data = {
      full_name,
      email,
      phone,
      attendance,
      arrive:
        attendance === "yes_some"
          ? { date: arrival_date, time: arrival_time }
          : null,
      leave:
        attendance === "yes_some"
          ? { date: leave_date, time: leave_time }
          : null,
      accommodation:
        attendance === "yes_whole" || attendance === "yes_some"
          ? accommodation
          : null,
      accommodationComments:
        (attendance === "yes_whole" || attendance === "yes_some") &&
        accommodation === "yes"
          ? accommodation_comments || null
          : null,
      meal:
        attendance === "yes_whole" || attendance === "yes_some" ? meal : null,
      dietaryRequirements: DIETARY_REQUIREMENTS,
      coach:
        attendance === "yes_whole" || attendance === "yes_some" ? coach : null,
    };

    try {
      const response = await fetch("/rsvp", {
        method: "PUT",
        body: JSON.stringify({ submitted_data }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      submitted = true;

      if (result.success) {
        success_message = `Your RSVP for ${full_name} was successfully submitted. Thank you!`;
        submission_error = "";
        const new_url = new URL(window.location.href);
        new_url.searchParams.set("past_success", "true");
        window.history.replaceState({}, "", new_url.toString());
      } else {
        success_message = "";
        submission_error =
          result.error ||
          "There was a problem submitting your RSVP. Please try again.";
      }
    } catch (err) {
      submitted = true;
      success_message = "";
      submission_error =
        "An unexpected error occurred while submitting your RSVP. Please try again later.";
      console.error(err);
    }
  }
</script>

<svelte:head>
  <title>RSVP - Jonas & Andy</title>
  <meta
    name="description"
    content="A form to let Jonas and Andy know if you will be able to attend their wedding, and any additional requirements you may have."
  />
</svelte:head>

<ImageBanner
  src={header_img}
  alt="Jonas and Andy kissing in front of a gorgeous vista"
  img_filter="brightness(0.8)"
  margin_bottom="2vh"
>
  <h1 class="banner">RSVP</h1>
  <h2 class="banner">Let us know if you will be there</h2>
</ImageBanner>

<TextColumn>
  <p>We look forward to seeing you! Fill out the form below.</p>
</TextColumn>

{#if !submitted && !past_success}
  <form
    class="form-container"
    on:submit|preventDefault={handle_submit}
    aria-labelledby="rsvp-heading"
  >
    {#if form_error}
      <div role="alert" class="error">{form_error}</div>
    {/if}

    <div class="form-group">
      <label class="legend_label" for="full_name">Name</label>
      <select id="full_name" bind:value={full_name} required>
        <option value="">Select a name</option>
        {#each names as name}
          <option value={name}>{name}</option>
        {/each}
      </select>
    </div>
    <div class="form-group">
      <label class="legend_label" for="email">Email address</label>
      <input id="email" type="email" bind:value={email} required />
    </div>
    <div class="form-group">
      <label class="legend_label" for="phone">Phone number</label>
      <input id="phone" type="tel" bind:value={phone} required />
    </div>

    <fieldset>
      <legend>Are you able to attend?</legend>
      <label
        ><input
          type="radio"
          name="attendance"
          value="yes_whole"
          on:change={() => (attendance = "yes_whole")}
          checked={attendance === "yes_whole"}
        /> Yes (whole time)</label
      >
      <label
        ><input
          type="radio"
          name="attendance"
          value="yes_some"
          on:change={() => (attendance = "yes_some")}
          checked={attendance === "yes_some"}
        /> Yes (some)</label
      >
      {#if attendance === "yes_some"}
        <div class="nested-group">
          <label>
            Arrival date
            <select bind:value={arrival_date}>
              <option value="">Select date</option>
              {#each AVAILABLE_DATES as d}
                <option value={d.value}>{d.label}</option>
              {/each}
            </select>
          </label>
          <label>
            Approximate arrival hour
            <input type="time" bind:value={arrival_time} />
          </label>
          <label>
            Leaving date
            <select bind:value={leave_date}>
              <option value="">Select date</option>
              {#each AVAILABLE_DATES as d}
                <option value={d.value}>{d.label}</option>
              {/each}
            </select>
          </label>
          <label>
            Approximate departure hour
            <input type="time" bind:value={leave_time} />
          </label>
        </div>
      {/if}
      <label
        ><input
          type="radio"
          name="attendance"
          value="no"
          on:change={() => (attendance = "no")}
          checked={attendance === "no"}
        /> No</label
      >
    </fieldset>

    {#if attendance === "yes_whole" || attendance === "yes_some"}
      <fieldset>
        <legend
          >Would you like to book accommodation at North Cadbury Court?</legend
        >

        {#if attendance === "yes_some"}
          <p class="note">
            Please note, guests who are able to stay both nights will be
            prioritised for accommodation.
          </p>
        {/if}
        <label
          ><input
            type="radio"
            name="accommodation"
            value="yes"
            on:change={() => (accommodation = "yes")}
            checked={accommodation === "yes"}
          /> Yes</label
        >
        {#if accommodation === "yes"}
          <label>
            Any extra requirements or comments
            <textarea bind:value={accommodation_comments} rows={3}></textarea>
          </label>
        {/if}
        <label
          ><input
            type="radio"
            name="accommodation"
            value="no"
            on:change={() => (accommodation = "no")}
            checked={accommodation === "no"}
          /> No</label
        >
      </fieldset>

      <fieldset>
        <legend
          >Which main meal option would you like for the wedding dinner?</legend
        >
        <label
          ><input
            type="radio"
            name="meal"
            value="beef"
            on:change={() => (meal = "beef")}
            checked={meal === "beef"}
          />Braised Beef Cheeks with Rainbow Carrots, Parsnip Puree & Truffle
          Jus</label
        >
        <label
          ><input
            type="radio"
            name="meal"
            value="aubergine"
            on:change={() => (meal = "aubergine")}
            checked={meal === "aubergine"}
          />Aubergine Parmigana Rolls with Spinach & Ricotta served with Tomato
          Compote and Pan-Fried Gnocchi</label
        >
      </fieldset>

      <fieldset>
        <legend>Please let us know of any dietary requirements</legend>
        {#each COMMON_DIETARY_REQUIREMENTS as item}
          <label
            ><input type="checkbox" bind:checked={selected_common[item]} />
            {item}</label
          >
        {/each}
        <label>
          Other (please specify)
          <input placeholder="Please specify" bind:value={dietary_other} />
        </label>
      </fieldset>

      <fieldset>
        <legend
          >Are you interested in booking a return journey on a coach from
          Cambridgeshire to North Cadbury Court (approximately £50)</legend
        >
        <label
          ><input
            type="radio"
            name="coach"
            value="yes"
            on:change={() => (coach = "yes")}
            checked={coach === "yes"}
          /> Yes</label
        >
        <label
          ><input
            type="radio"
            name="coach"
            value="no"
            on:change={() => (coach = "no")}
            checked={coach === "no"}
          /> No</label
        >
      </fieldset>
    {/if}

    <div class="form-actions">
      <button type="submit">Submit RSVP</button>
    </div>
  </form>
{:else if success_message}
  <div class="form-container" role="status" transition:fade>
    <p class="success">{success_message}</p>
  </div>
{:else if submission_error}
  <div class="form-container" role="alert" transition:fade>
    <p class="error">{submission_error}</p>
    <button
      on:click={() => {
        submitted = false;
        success_message = "";
        submission_error = "";
      }}
    >
      Go back to form
    </button>
  </div>
{:else if past_success}
  <div class="form-container" role="status" transition:fade>
    <p class="success">
      You've successfully submitted this form. Thanks! <a href="/"
        >Back to homepage</a
      >
    </p>
  </div>
{/if}

<BurgerMenu />

<style>
  .form-container {
    width: clamp(0px, 750px, 87vw);
    max-width: 700px;
    margin: 0 auto;
    padding: 10px;
    background: #fff; /*TODO: Choose a different white*/
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }

  fieldset {
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid #ccc; /*TODO: Choose a different color*/
    border-radius: 6px;
  }

  legend,
  .legend_label {
    font-weight: bold;
  }

  label {
    display: block;
    margin-top: 0.5rem;
  }

  input:not([type="radio"]):not([type="checkbox"]),
  select,
  textarea,
  button {
    margin-top: 0.25rem;
    padding: 0.5rem;
    border: 1px solid #ccc; /*TODO: Choose a different color*/
    border-radius: 6px;
    font-size: 1rem;
    line-height: 1.2;
    min-height: 2.5rem; /* fixes Safari iOS */
    box-sizing: border-box;
    background-color: #fff; /*TODO: Choose a different color*/
  }

  input[type="radio"],
  input[type="checkbox"] {
    margin-right: 0.5rem;
    transform: scale(1.1);
    vertical-align: middle;
    accent-color: var(--highlight-color);
  }

  textarea {
    width: 100%;
    resize: vertical;
  }

  select {
    width: 100%;
    appearance: none; /* removes inconsistent native arrows */
  }

  input[type="time"] {
    width: 100%; /* compact size */
    height: 1.5rem;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: var(--primary-color); /* TODO: Choose primary color */
    outline: none;
    box-shadow: 0 0 0 2px var(--highlight-color); /* TODO: Choose highlight color */
  }

  input:hover,
  select:hover,
  textarea:hover {
    border-color: var(--secondary-color);
  }

  .nested-group {
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  .nested-group label {
    display: flex;
    flex-direction: column;
  }

  fieldset > .nested-group {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  fieldset > .nested-group label {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    font-weight: 500;
    font-style: italic;
  }

  .form-actions {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
  }

  button {
    cursor: pointer;
    background: var(--highlight-color);
    color: #fff; /*TODO: Choose a different color*/
    border: none;
    border-radius: 6px;
    transition: background 0.2s ease;
  }

  button:hover {
    background: var(--primary-color);
  }

  .error {
    color: var(--highlight-color);
    margin-bottom: 1rem;
  }

  .note {
    font-size: 0.9rem;
    font-style: italic;
    color: #555; /* you can change this to fit your theme */
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
  }
</style>
