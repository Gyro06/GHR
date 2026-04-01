# Neon Onboarding

Org: `org-young-cake-70992955`
Project: `shiny-mouse-61327638`

Quick start:

1. Store your Neon connection string in an environment variable. Do NOT commit secrets to the repo.

   - Example: set `DATABASE_URL` to your Neon connection string (provided separately).

2. Test locally using `psql` or the provided Node test script.

   - With psql:

     - Install `psql` and run:

       ```bash
       psql "$DATABASE_URL"
       ```

   - With Node (from repo root):

     ```bash
     npm install pg
     node scripts/test_neon_connection.js
     ```

3. Neon CLI: use `neonctl` (via npx) for project/branch management.

   - Example: `npx neonctl@latest projects list --org org-young-cake-70992955`

4. Optional: provision Neon Auth or the Neon Data API depending on your app needs. See Neon docs for guidance:

   - https://neon.com/docs

Notes and best practices

- Never commit production credentials. Use a secrets manager or CI/CD secret injection.
- For serverless or edge runtimes, prefer Neon serverless drivers or Neon JS SDK as documented.
- If you need me to provision Neon Auth or the Data API for `shiny-mouse-61327638`, tell me and I will proceed.
