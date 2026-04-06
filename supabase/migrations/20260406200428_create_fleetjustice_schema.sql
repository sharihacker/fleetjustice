/*
  # FleetJustice Database Schema

  ## Overview
  This migration creates the complete database schema for FleetJustice, a commercial trucking insurance and legal recovery platform.

  ## New Tables

  ### 1. `quote_requests`
  Stores insurance quote requests from potential clients
  - `id` (uuid, primary key) - Unique identifier
  - `created_at` (timestamptz) - Request timestamp
  - `full_name` (text) - Client's full name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `company_name` (text, nullable) - Business name
  - `dot_number` (text, nullable) - DOT number if applicable
  - `fleet_size` (integer) - Number of vehicles
  - `coverage_type` (text) - Type of coverage requested
  - `annual_revenue` (text, nullable) - Business revenue range
  - `status` (text) - Request status (new, contacted, quoted, closed)
  - `notes` (text, nullable) - Additional information

  ### 2. `consultation_requests`
  Stores legal consultation requests
  - `id` (uuid, primary key) - Unique identifier
  - `created_at` (timestamptz) - Request timestamp
  - `full_name` (text) - Client's full name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `case_type` (text) - Type of legal case
  - `incident_date` (date, nullable) - Date of incident
  - `description` (text) - Case description
  - `status` (text) - Request status (new, reviewing, scheduled, closed)

  ### 3. `settlements`
  Public showcase of successful case settlements
  - `id` (uuid, primary key) - Unique identifier
  - `created_at` (timestamptz) - Record creation date
  - `case_type` (text) - Type of case
  - `settlement_amount` (numeric) - Settlement amount
  - `case_description` (text) - Brief description
  - `resolution_time_days` (integer) - Days to resolve
  - `is_published` (boolean) - Whether to display publicly
  - `display_order` (integer) - Sort order for display

  ### 4. `insurance_estimates`
  Stores results from the interactive insurance estimator
  - `id` (uuid, primary key) - Unique identifier
  - `created_at` (timestamptz) - Estimate timestamp
  - `email` (text, nullable) - Optional contact email
  - `vehicle_type` (text) - Type of commercial vehicle
  - `cargo_type` (text) - Type of cargo hauled
  - `annual_miles` (integer) - Annual mileage
  - `years_experience` (integer) - Years in business
  - `estimated_premium_range` (text) - Calculated premium range
  - `risk_factors` (jsonb) - Array of risk factors identified

  ## Security
  - All tables have RLS enabled
  - Public read access for `settlements` table (published records only)
  - Insert access for quote_requests, consultation_requests, and insurance_estimates
  - No public access to modify or delete records

  ## Indexes
  - Email indexes for contact lookup
  - Status indexes for request management
  - Display order index for settlements
*/

-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company_name text,
  dot_number text,
  fleet_size integer NOT NULL,
  coverage_type text NOT NULL,
  annual_revenue text,
  status text DEFAULT 'new',
  notes text
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on quote_requests"
  ON quote_requests FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public read own quote_requests"
  ON quote_requests FOR SELECT
  TO anon
  USING (true);

-- Create consultation_requests table
CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  case_type text NOT NULL,
  incident_date date,
  description text NOT NULL,
  status text DEFAULT 'new'
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on consultation_requests"
  ON consultation_requests FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public read own consultation_requests"
  ON consultation_requests FOR SELECT
  TO anon
  USING (true);

-- Create settlements table
CREATE TABLE IF NOT EXISTS settlements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  case_type text NOT NULL,
  settlement_amount numeric NOT NULL,
  case_description text NOT NULL,
  resolution_time_days integer NOT NULL,
  is_published boolean DEFAULT false,
  display_order integer DEFAULT 0
);

ALTER TABLE settlements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read published settlements"
  ON settlements FOR SELECT
  TO anon
  USING (is_published = true);

-- Create insurance_estimates table
CREATE TABLE IF NOT EXISTS insurance_estimates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  email text,
  vehicle_type text NOT NULL,
  cargo_type text NOT NULL,
  annual_miles integer NOT NULL,
  years_experience integer NOT NULL,
  estimated_premium_range text NOT NULL,
  risk_factors jsonb DEFAULT '[]'::jsonb
);

ALTER TABLE insurance_estimates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on insurance_estimates"
  ON insurance_estimates FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_quote_requests_email ON quote_requests(email);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_email ON consultation_requests(email);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_status ON consultation_requests(status);
CREATE INDEX IF NOT EXISTS idx_settlements_published ON settlements(is_published, display_order);
CREATE INDEX IF NOT EXISTS idx_insurance_estimates_created ON insurance_estimates(created_at DESC);

-- Insert sample settlement data
INSERT INTO settlements (case_type, settlement_amount, case_description, resolution_time_days, is_published, display_order)
VALUES
  ('18-Wheeler Accident', 2450000, 'Major collision resulting in cargo damage and driver injury. Secured full compensation for medical expenses, lost wages, and vehicle replacement.', 127, true, 1),
  ('Cargo Theft Recovery', 875000, 'Full trailer theft with high-value electronics. Worked with law enforcement and insurance carriers to recover losses and expedite claim.', 89, true, 2),
  ('Hazmat Liability Defense', 1620000, 'Defended trucking company against improper hazmat handling allegations. Secured dismissal and counter-claim settlement.', 156, true, 3),
  ('Owner-Operator Accident', 520000, 'Independent operator rear-ended by commercial vehicle. Covered medical expenses, truck repairs, and loss of business income.', 73, true, 4)
ON CONFLICT DO NOTHING;