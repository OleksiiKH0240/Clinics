import { db } from "../databaseConnection";
import clinics from "../schemas/clinics";
import { ClinicSearchReturnType, ClinicsSearchArgsType } from "../../types/RepTypes";
import { eq, sql } from "drizzle-orm";


class ClinicRep {
    dbClient
    constructor(dbClient = db) {
        this.dbClient = dbClient;
    }

    getClinincsBy = async (args: ClinicsSearchArgsType): Promise<ClinicSearchReturnType[]> => {
        const querySelectFrom = this.dbClient.select({
            slug: clinics.slug,
            clinicName: clinics.clinicName,
            fullAddress: clinics.fullAddress,
            website: clinics.website,
            phone: clinics.phone,
            suburb: clinics.suburb,
            state: clinics.state,
            email: clinics.email,
        }).from(clinics);

        if (args.city !== undefined && args.city !== null) {
            return await querySelectFrom.where(sql.raw(`lower(city) like '${args.city.toLowerCase()}%'`));
        }
        else if (args.state !== undefined && args.state !== null) {
            return await querySelectFrom.where(sql.raw(`lower(state) like '${args.state.toLowerCase()}%'`));
        }
        else if (args.postcode !== undefined && args.postcode !== null) {
            return await querySelectFrom.where(eq(clinics.postcode, args.postcode));
        }
        else if (args.clinicName !== undefined && args.clinicName !== null) {
            return await querySelectFrom.where(sql.raw(`lower(clinic_name) like '${args.clinicName.toLowerCase()}%'`));
        }
        else if (args.suburb !== undefined && args.suburb !== null) {
            return await querySelectFrom.where(sql.raw(`lower(suburb) like $$${args.suburb.toLowerCase()}%$$`));
        }
        else {
            return await querySelectFrom;
        }
    }
}

export default new ClinicRep();
