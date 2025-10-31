import { neon } from "@neondatabase/serverless";
import { env } from "$env/dynamic/private";
import { json } from "@sveltejs/kit";

const sql = neon(env.DATABASE_URL);

// Replace this with your actual 6-digit code
const ATTENDEE_DOWNLOAD_CODE = env.SIX_FIGURE_CODE;

// Helper to convert DB rows to CSV
function rowsToCSV(rows: any[]) {
  if (!rows.length) return "";

  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(","),
    ...rows.map((r) =>
      headers.map((h) => `"${String(r[h]).replace(/"/g, '""')}"`).join(",")
    ),
  ];
  return csv.join("\n");
}

export const POST = async ({ request }) => {
  const { code } = await request.json();

  if (code !== ATTENDEE_DOWNLOAD_CODE) {
    return json({ error: "Invalid code." }, { status: 401 });
  }

  try {
    const rows = await sql`SELECT * FROM wedding_rsvps ORDER BY full_name`;
    const csv = rowsToCSV(rows);

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="attendees.csv"`,
      },
    });
  } catch (err) {
    console.error(err);
    return json({ error: "Failed to fetch data." }, { status: 500 });
  }
};
