<script>
  let line_width = "2px";
  let circle_border_width = "1px";
  let circle_diameter = "16px";

  export let timeline = [
    {
      date: "August 10th",
      events: [
        "1:00pm · Check in opens",
        "5:00pm · Filipino welcome dinner",
        "8:30pm · Games night",
      ],
    },
    {
      date: "August 11th",
      events: ["2:00pm · Wedding Ceremony (to be seated by 2:30pm)"],
    },
    {
      date: "August 12th",
      events: [
        "11:30am-1:00pm · Farewell pizza lunch",
        "2:00pm · Check out closes",
      ],
    },
  ];
</script>

<ul
  style="--line-width: {line_width}; --circle-diameter: {circle_diameter}; --circle-border-width: {circle_border_width};"
>
  {#each timeline as day, i}
    <li>
      <div class="time">
        {day.date}
      </div>
      {#each day.events as events}
        <p>{events}</p>
      {/each}
    </li>
  {/each}
</ul>

<style>
  ul {
    --top-adjustment: calc(calc(var(--circle-diameter) / 2) - 12px);

    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-left: 5vw;
  }

  li {
    list-style: none;
    padding-bottom: 1vh;
    border-left: var(--line-width) solid var(--primary-color);
    position: relative;
    padding-left: 20px;
    margin-left: 10px;
  }

  /*The circles*/
  li:before {
    content: "";
    top: 0;
    border-radius: 100%;
    position: absolute;

    width: var(--circle-diameter);
    height: var(--circle-diameter);
    border: var(--circle-border-width) solid var(--primary-color);
    background-color: var(--bg-color);
    /*box-shadow: 3px 3px 0px var(--secondary-color);*/

    left: calc(
      -1 * calc(calc(var(--circle-diameter) / 2) + var(--circle-border-width) +
            calc(var(--line-width) / 2))
    );
  }

  /*Ensure the final circle has no line below it */
  li:last-child {
    border-left: var(--line-width) solid var(--bg-color);
    padding-bottom: 0;
  }

  .time {
    width: fit-content;
    color: var(--font-color);
    font-weight: 500;

    position: relative;
    top: var(--top-adjustment);
  }

  p {
    width: fit-content;
    color: var(--font-color);
    line-height: 1.5;
    margin-top: 0.4rem;

    position: relative;
    top: var(--top-adjustment);
  }
</style>
