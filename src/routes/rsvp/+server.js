import { neon } from "@neondatabase/serverless";
import { env } from "$env/dynamic/private";
import { json } from "@sveltejs/kit";

const sql = neon(env.DATABASE_URL);

async function send_rsvp(submitted_data) {
  try {
    const {
      full_name,
      email,
      phone,
      attendance,
      partialAttendanceNotes,
      accommodation,
      accommodationComments,
      meal,
      dietaryRequirements,
      coach,
    } = submitted_data;

    const result = await sql`
      INSERT INTO wedding_rsvps (
        full_name,
        email,
        phone,
        attendance,
        partial_attendance_notes,
        accommodation,
        accommodation_comments,
        meal,
        dietary_requirements,
        coach
      )
      VALUES (
        ${full_name},
        ${email},
        ${phone},
        ${attendance},
        ${partialAttendanceNotes || null},
        ${accommodation},
        ${accommodationComments || null},
        ${meal},
        ${
          dietaryRequirements ? JSON.stringify(dietaryRequirements) : null
        }::jsonb,
        ${coach}
      )
      RETURNING id;
    `;

    return json(
      {
        success: true,
        id: result[0].id,
        message: "RSVP successfully saved!",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error inserting RSVP:", err);

    if (err.message.includes("unique constraint")) {
      return json(
        {
          success: false,
          error:
            "An RSVP for this name already exists. Please contact us if you need to make changes.",
        },
        { status: 409 }
      );
    }

    return json(
      {
        success: false,
        error: err.message || "Database insert failed",
      },
      { status: 500 }
    );
  }
}

export const PUT = async ({ request }) => {
  const { submitted_data } = await request.json();
  return await send_rsvp(submitted_data);
};
