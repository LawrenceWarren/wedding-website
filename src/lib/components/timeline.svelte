<script>
  let line_width = "2px";
  let circle_border_width = "1px";
  let circle_diameter = "16px";

  export let timeline = [
    {
      date: "August 10th",
      events: [
        { time: "1:00pm", event: "Check in opens" },
        { time: "5:00pm", event: "Filipino welcome dinner" },
        { time: "8:30pm", event: "Games night" },
      ],
    },
    {
      date: "August 11th",
      events: [
        { time: "2:00pm", event: "Wedding Ceremony (to be seated by 2:30pm)" },
      ],
    },
    {
      date: "August 12th",
      events: [
        { time: "11:30am-1:00pm", event: "Farewell pizza lunch" },
        { time: "2:00pm", event: "Check out closes" },
      ],
    },
  ];
</script>

<ul
  style="--line-width: {line_width}; --circle-diameter: {circle_diameter}; --circle-border-width: {circle_border_width};"
>
  {#each timeline as day, i}
    <li>
      <div class="date">
        <b>{day.date}</b>
      </div>
      {#each day.events as events}
        <div class="event">
          <i class="fancy">{events.time}</i>
          <p class="dot">·</p>
          <p>
            {events.event}
          </p>
        </div>
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

  .dot {
    padding-left: 4px;
    padding-right: 4px;
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

  .date {
    width: fit-content;
    color: var(--font-color);
    font-weight: 500;

    position: relative;
    top: var(--top-adjustment);
  }

  .event {
    display: flex;
    flex-direction: row;
  }

  p,
  i {
    width: fit-content;
    color: var(--font-color);
    line-height: 1.5;
    margin-top: 0.4rem;

    position: relative;
    top: var(--top-adjustment);
  }
</style>
