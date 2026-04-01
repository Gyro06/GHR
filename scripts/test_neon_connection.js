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

(async () => {
  try {
    await client.connect();
    const r = await client.query('SELECT version() AS v');
    console.log('Connected — Postgres version:', r.rows[0].v);
  } catch (err) {
    console.error('Connection failed:', err.message || err);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
})();
