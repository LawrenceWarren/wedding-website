<script lang="ts">
  import BurgerMenu from "$lib/components/burger_menu.svelte";
  import { onMount } from "svelte";

  let fullName = "";
  let email = "";
  let phone = "";

  type Attendance = "yes_whole" | "yes_some" | "no" | "";
  let attendance: Attendance = "";

  // Structured arrival/leaving info for "Yes (some)"
  let arriveDate = "";
  let arriveTime = "";
  let leaveDate = "";
  let leaveTime = "";

  let accommodation: "yes" | "no" | "" = "";
  let accommodationComments = "";

  let meal: "beef" | "aubergine" | "" = "";

  let dietaryOther = "";
  const commonDietaryRequirements = [
    "Vegan",
    "Vegetarian",
    "Pescatarian",
    "Halal",
    "Kosher",
    "Gluten free",
    "Nut allergy",
  ];
  let selectedCommon: Record<string, boolean> = {};
  onMount(() => {
    for (const item of commonDietaryRequirements) selectedCommon[item] = false;
  });

  let coach: "yes" | "no" | "" = "";

  let submitted = false;
  let submittedData: any = null;
  let formError = "";

  const availableDates = [
    { label: "10 August 2026", value: "2026-08-10" },
    { label: "11 August 2026", value: "2026-08-11" },
    { label: "12 August 2026", value: "2026-08-12" },
  ];

  function validate() {
    formError = "";
    if (!fullName.trim())
      return (formError = "Please enter your full name."), false;
    if (!email.trim())
      return (formError = "Please enter your email address."), false;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return (formError = "Please enter a valid email address."), false;
    if (!phone.trim())
      return (formError = "Please enter your phone number."), false;
    if (!attendance)
      return (formError = "Please select your attendance option."), false;

    if (attendance === "yes_some") {
      if (!arriveDate || !arriveTime || !leaveDate || !leaveTime) {
        return (
          (formError =
            "Please select both arrival and leaving dates and times."),
          false
        );
      }

      const arriveDT = new Date(`${arriveDate}T${arriveTime}`);
      const leaveDT = new Date(`${leaveDate}T${leaveTime}`);

      if (leaveDT <= arriveDT) {
        return (
          (formError = "Leaving date/time must be after arrival date/time."),
          false
        );
      }
    }

    if (attendance === "yes_whole" || attendance === "yes_some") {
      if (!accommodation)
        return (
          (formError =
            "Please indicate whether you would like to book accommodation."),
          false
        );
      if (!meal)
        return (formError = "Please choose a main meal option."), false;
      if (!coach)
        return (
          (formError = "Please indicate whether you want the coach."), false
        );
    }

    return true;
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (!validate()) {
      submitted = false;
      return;
    }

    const selectedCommons = Object.entries(selectedCommon)
      .filter(([, v]) => v)
      .map(([k]) => k);

    const dietaryRequirements =
      attendance === "yes_whole" || attendance === "yes_some"
        ? [
            ...selectedCommons,
            ...(dietaryOther.trim() ? [dietaryOther.trim()] : []),
          ]
        : null;

    submittedData = {
      fullName,
      email,
      phone,
      attendance,
      arrive:
        attendance === "yes_some"
          ? { date: arriveDate, time: arriveTime }
          : null,
      leave:
        attendance === "yes_some" ? { date: leaveDate, time: leaveTime } : null,
      accommodation:
        attendance === "yes_whole" || attendance === "yes_some"
          ? accommodation
          : null,
      accommodationComments:
        (attendance === "yes_whole" || attendance === "yes_some") &&
        accommodation === "yes"
          ? accommodationComments || null
          : null,
      meal:
        attendance === "yes_whole" || attendance === "yes_some" ? meal : null,
      dietaryRequirements,
      coach:
        attendance === "yes_whole" || attendance === "yes_some" ? coach : null,
    };

    console.log("RSVP payload:", submittedData);
    submitted = true;
  }
</script>

<svelte:head>
  <title>Jonas' & Andrew's wedding - RSVP</title>
  <meta
    name="description"
    content="A form to let Jonas and Andrew know if you will be able to attend their wedding, and any additional requirements you may have."
  />
</svelte:head>

<BurgerMenu />

<h1>RSVP</h1>

<form
  class="form-container"
  on:submit|preventDefault={handleSubmit}
  aria-labelledby="rsvp-heading"
>
  <h2 id="rsvp-heading">Wedding RSVP</h2>

  {#if formError}
    <div role="alert" class="error">{formError}</div>
  {/if}

  <div class="form-group">
    <label class="legend_label" for="fullName">Full name</label>
    <input id="fullName" bind:value={fullName} required />
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
          <select bind:value={arriveDate}>
            <option value="">Select date</option>
            {#each availableDates as d}
              <option value={d.value}>{d.label}</option>
            {/each}
          </select>
        </label>
        <label>
          Arrival time
          <input type="time" bind:value={arriveTime} />
        </label>
        <label>
          Leaving date
          <select bind:value={leaveDate}>
            <option value="">Select date</option>
            {#each availableDates as d}
              <option value={d.value}>{d.label}</option>
            {/each}
          </select>
        </label>
        <label>
          Leaving time
          <input type="time" bind:value={leaveTime} />
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
      <legend>Would you like to book accommodation at the venue?</legend>
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
          <textarea bind:value={accommodationComments} rows={3}></textarea>
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
        /> Beef</label
      >
      <label
        ><input
          type="radio"
          name="meal"
          value="aubergine"
          on:change={() => (meal = "aubergine")}
          checked={meal === "aubergine"}
        /> Aubergine</label
      >
    </fieldset>

    <fieldset>
      <legend>Please let us know of any dietary requirements</legend>
      {#each commonDietaryRequirements as item}
        <label
          ><input type="checkbox" bind:checked={selectedCommon[item]} />
          {item}</label
        >
      {/each}
      <label>
        Other (please specify)
        <input placeholder="Please specify" bind:value={dietaryOther} />
      </label>
    </fieldset>

    <fieldset>
      <legend
        >Are you interested in booking a return journey on a coach from
        Cambridgeshire to the venue (approximately £50)</legend
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

{#if submitted}
  <section class="submission-preview">
    <h3>Submission preview</h3>
    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
  </section>
{/if}

<style>
  .form-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 1.5rem;
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
    font-family: inherit;
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
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-right: 1.5rem;
  }

  .nested-group label {
    display: flex;
    flex-direction: column;
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

  .submission-preview {
    max-width: 700px;
    margin: 1.5rem auto;
    padding: 1rem;
    background: #f9f9f9; /*TODO: Pick other white*/
    border: 1px solid #ddd; /*TODO: Pick other white*/
    border-radius: 6px;
  }
</style>
