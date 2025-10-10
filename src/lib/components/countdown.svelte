<script>
  let now = $state(Date.now());
  const target_time = new Date("2026-08-10T13:00:00+01:00").getTime();

  // Remaining seconds
  let seconds_remaining = $derived(
    Math.max(0, Math.floor((target_time - now) / 1000))
  );

  // Time breakdown
  let days = $derived(Math.floor(seconds_remaining / 86400));
  let hours = $derived(Math.floor((seconds_remaining % 86400) / 3600));
  let minutes = $derived(Math.floor((seconds_remaining % 3600) / 60));
  let seconds = $derived(seconds_remaining % 60);

  // Update every second
  $effect(() => {
    const interval_id = setInterval(() => {
      now = Date.now();
    }, 1000);

    return () => clearInterval(interval_id);
  });
</script>

<div class="countdown" role="timer" aria-live="polite" aria-atomic="true">
  <div class="main_text">👰‍♀️ Time remaining 🤵‍♂️</div>
  <div class="sub_text">until 1pm, August 10, 2026</div>

  <div class="time_parts">
    <div class="time_part">
      <div class="time_value">{days}</div>
      <div class="time_label">days</div>
    </div>
    <div class="time_part">
      <div class="time_value">{hours}</div>
      <div class="time_label">hours</div>
    </div>
    <div class="time_part">
      <div class="time_value">{minutes}</div>
      <div class="time_label">minutes</div>
    </div>
    <div class="time_part">
      <div class="time_value">{seconds.toString().padStart(2, "0")}</div>
      <div class="time_label">seconds</div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.95),
      rgba(245, 245, 250, 0.95)
    );
    max-width: 95%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .main_text {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    word-break: break-word;
  }

  .sub_text {
    font-size: 0.9rem;
    color: #666;
    text-align: center;
  }

  .time_parts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
    width: 100%;
  }

  .time_part {
    flex: 1 1 70px;
    min-width: 64px;
    text-align: center;
    padding: 0.5rem 0.6rem;
    border-radius: 0.6rem;
    background: rgba(0, 0, 0, 0.03);
  }

  .time_value {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .time_label {
    font-size: 0.7rem;
    color: #555;
    margin-top: 0.1rem;
  }

  @media (max-width: 480px) {
    .main_text {
      font-size: 1.2rem;
    }
    .time_value {
      font-size: 1rem;
    }
    .time_part {
      flex: 1 1 40%;
    }
  }
</style>
