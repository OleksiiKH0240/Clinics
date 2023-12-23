import { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DATABASE } from "./src/database/databaseConnection";
import { Config } from "drizzle-kit";


export default {
    schema: "./src/database/schemas/",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        host: POSTGRES_HOST!,
        port: Number(POSTGRES_PORT!),
        database: POSTGRES_DATABASE!,
        ssl: true
    }
} satisfies Config;

