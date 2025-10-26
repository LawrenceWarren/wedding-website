<script lang="ts">
  import { env } from "$env/dynamic/private";

  let code = "";
  let error = "";
  let downloading = false;

  async function fetchCSV() {
    error = "";
    if (!/^\d{6}$/.test(code)) {
      error = "Please enter a valid 6-digit code.";
      return;
    }

    downloading = true;

    try {
      const res = await fetch("/attendees/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        const data = await res.json();
        error = data.error || "Failed to fetch CSV.";
        downloading = false;
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "attendees.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      error = "An unexpected error occurred.";
    } finally {
      downloading = false;
    }
  }
</script>

<div class="container">
  <h1>Download Attendees</h1>
  <p>Enter the 6-digit code to download the attendee list.</p>

  {#if error}
    <div class="error">{error}</div>
  {/if}

  <div class="form-group">
    <input
      type="text"
      placeholder="6-digit code"
      bind:value={code}
      maxlength="6"
    />
    <button on:click={fetchCSV} disabled={downloading}>
      {downloading ? "Downloading..." : "Download CSV"}
    </button>
  </div>
</div>

<style>
  .container {
    max-width: 400px;
    margin: 3rem auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  .form-group {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .error {
    color: red;
    margin-top: 0.5rem;
  }
</style>
