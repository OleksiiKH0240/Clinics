import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";


const { POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DATABASE } = process.env;

if (!POSTGRES_PASSWORD || !POSTGRES_USER || !POSTGRES_HOST || !POSTGRES_PORT || !POSTGRES_DATABASE) {
    console.log("some database credentials are missed.");
    throw new Error("db error");
}

export { POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DATABASE };

const pool = new Pool({
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DATABASE,
    ssl: true
});

export const db = drizzle(pool);
console.log("connection to database was established successfully.");

