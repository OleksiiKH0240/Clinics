import { db, POSTGRES_DATABASE } from "../databaseConnection";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { sql } from "drizzle-orm";


class InitialRep {
    dbClient

    constructor(dbClient = db) {
        this.dbClient = dbClient;
    }

    migrate = async () => {
        await this.dbClient.execute(sql.raw(`CREATE SCHEMA IF NOT EXISTS ${POSTGRES_DATABASE};`));
        await migrate(this.dbClient, { migrationsFolder: "./drizzle" });
        console.log("migrations were done successfully.");
    }
}

export default new InitialRep();
