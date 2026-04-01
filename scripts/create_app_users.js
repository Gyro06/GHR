#!/usr/bin/env node
const { Client } = require('pg');

const conn = process.env.DATABASE_URL;
if (!conn) {
  console.error('ERROR: Set the DATABASE_URL environment variable to your Neon connection string.');
  process.exit(1);
}

const client = new Client({
  connectionString: conn,
  ssl: conn.includes('sslmode=require') ? { rejectUnauthorized: false } : undefined,
});

const sql = `CREATE TABLE IF NOT EXISTS app_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);`;

(async () => {
  try {
    await client.connect();
    await client.query(sql);
    console.log('Table `app_users` created or already exists.');
  } catch (err) {
    console.error('Failed to create table:', err.message || err);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
})();
