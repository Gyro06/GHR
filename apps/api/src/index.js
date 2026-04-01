import postgres from "postgres";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({ ok: true, env: env.APP_ENV || "unknown" });
    }

    if (url.pathname === "/db-check") {
      const sql = postgres(env.DATABASE_URL, { ssl: "require" });
      const result = await sql`select now() as now`;
      return Response.json({ ok: true, now: result[0].now });
    }

    return new Response("Not found", { status: 404 });
  }
};