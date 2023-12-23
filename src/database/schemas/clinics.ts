import { text, index, IndexColumn } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { mySchema } from "../schemasConfig";


const clinics = mySchema.table("clinics", {
    longNameVersion: text("long_name_version"),
    typeformRegistrationLink: text("typeform_registration_link"),
    pms: text("pms"),
    metaTitle: text("meta_title"),
    metaDescription: text("meta_description"),
    slug: text("slug").primaryKey(),
    website: text("website"),
    clinicName: text("clinic_name"),
    displayOnWeb: text("display_on_web"),
    linkToClinicSuburbPage: text("link_to_clinic_suburb_page"),
    fullAddress: text("full_address"),
    city: text("city"),
    suburb: text("suburb"),
    state: text("state"),
    postcode: text("postcode"),
    email: text("email"),
    phone: text("phone"),
    nearby1Txt: text("nearby1_txt"),
    nearby1Link: text("nearby1_link"),
    nearby2Txt: text("nearby2_txt"),
    nearby2Link: text("nearby2_link"),
    nearby3Txt: text("nearby3_txt"),
    nearby3Link: text("nearby3_link"),
    nearby4Txt: text("nearby4_txt"),
    nearby4Link: text("nearby4_link"),
    aboutClinic: text("about_clinic")
},
    (table) => ({
        // clinicsCityIdx: index("clinics_city_idx").on(sql`lower(${table.city})` as unknown as IndexColumn),
        // clinicsCityIdx: sql`CREATE INDEX clinics_city_idx ON clinincs (lower(city));`,
        // clinicsStateIdx: index("clinics_state_idx").on(table.state),
        // clinicsPostcodeIdx: index("clinics_postcode_idx").on(table.postcode),
        // clinicsClinicNameIdx: index("clinics_clinic_name_idx").on(table.clinicName),
        // clinicsSuburbIdx: index("clinics_suburb_idx").on(table.suburb),
    })
)

export default clinics;
