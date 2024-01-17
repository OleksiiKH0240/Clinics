import { db, POSTGRES_DATABASE } from "../databaseConnection";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { sql } from "drizzle-orm";


class InitialRep {
    dbClient

    constructor(dbClient = db) {
        this.dbClient = dbClient;
    }
    init = async () => {
        await this.migrate();
        await this.createIndicesForClinics();
    }

    migrate = async () => {
        await this.dbClient.execute(sql.raw(`CREATE SCHEMA IF NOT EXISTS ${POSTGRES_DATABASE};`));
        await migrate(this.dbClient, { migrationsFolder: "./drizzle" });
        console.log("migrations were done successfully.");
    }

    createIndicesForClinics = async () => {
        await this.dbClient.execute(sql.raw(`create index if not exists clinics_city_idx ON ${POSTGRES_DATABASE}.clinics (lower(city));`));
        await this.dbClient.execute(sql.raw(`create index if not exists clinics_state_idx ON ${POSTGRES_DATABASE}.clinics (lower(state));`));
        await this.dbClient.execute(sql.raw(`create index if not exists clinics_postcode_idx ON ${POSTGRES_DATABASE}.clinics (postcode);`));
        await this.dbClient.execute(sql.raw(`create index if not exists clinics_clinic_name_idx ON ${POSTGRES_DATABASE}.clinics (lower(clinic_name));`));
        await this.dbClient.execute(sql.raw(`create index if not exists clinics_suburb_idx ON ${POSTGRES_DATABASE}.clinics (lower(suburb));`));
        console.log("indices for table clinics were created successfully.")
    }
}

export default new InitialRep();
