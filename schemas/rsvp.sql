CREATE TABLE IF NOT EXISTS wedding_rsvps (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(50) NOT NULL,

  attendance TEXT CHECK (attendance IN ('yes_whole', 'yes_some', 'no')) NOT NULL,

  arrival_date DATE,
  arrival_time TIME,
  leave_date DATE,
  leave_time TIME,

  accommodation TEXT CHECK (accommodation IN ('yes', 'no')),
  accommodation_comments TEXT,

  meal TEXT CHECK (meal IN ('beef', 'aubergine')),

  dietary_requirements JSONB,  -- e.g. ["Vegan", "Gluten free", "No onions"]

  coach TEXT CHECK (coach IN ('yes', 'no')),

  submitted_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
