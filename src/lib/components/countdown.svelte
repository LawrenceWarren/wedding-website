<script>
  let now = $state(Date.now());
  const target = new Date("2026-08-10T13:00:00+01:00").getTime();

  // total whole seconds remaining (never negative)
  let seconds_remaining = $derived(
    Math.max(0, Math.floor((target - now) / 1000))
  );

  // human-readable breakdown
  let days = $derived(Math.floor(seconds_remaining / 86400));
  let hours = $derived(Math.floor((seconds_remaining % 86400) / 3600));
  let minutes = $derived(Math.floor((seconds_remaining % 3600) / 60));
  let seconds = $derived(seconds_remaining % 60);

  // update `now` every second while component is mounted
  $effect(() => {
    const id = setInterval(() => {
      now = Date.now();
    }, 1000);

    return () => clearInterval(id);
  });
</script>

<div class="countdown" role="timer" aria-live="polite" aria-atomic="true">
  <div>Wedding begins in:</div>
  <div class="parts" aria-hidden="false">
    <div class="part">
      <div>{days}</div>
      <div class="label">days</div>
    </div>
    <div class="part">
      <div>{hours}</div>
      <div class="label">hours</div>
    </div>
    <div class="part">
      <div>{minutes}</div>
      <div class="label">minutes</div>
    </div>
    <div class="part">
      <div>{seconds.toString().padStart(2, "0")}</div>
      <div class="label">seconds</div>
    </div>
  </div>
</div>

<style>
  .countdown {
    font-family:
      system-ui,
      -apple-system,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial;
    display: inline-flex;
    gap: 1rem;
    align-items: center;
    padding: 0.6rem 1rem;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9),
      rgba(245, 245, 250, 0.9)
    );
  }
  .parts {
    display: flex;
    gap: 0.5rem;
    font-size: 0.95rem;
  }
  .part {
    text-align: center;
    min-width: 64px;
    padding: 0.4rem 0.6rem;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.02);
  }
  .label {
    font-size: 0.7rem;
    color: #555;
    margin-top: 0.18rem;
  }
</style>
