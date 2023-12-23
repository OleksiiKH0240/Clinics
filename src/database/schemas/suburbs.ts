import { serial, text } from "drizzle-orm/pg-core";
import { mySchema } from "../schemasConfig";


const suburbs = mySchema.table("suburbs", {
    suburbId: serial("suburb_id").primaryKey(),
    suburbSlug: text("suburb_slug"),
    suburbName: text("suburb_name"),
    city: text("city"),
    state: text("state"),
    postcode: text("postcode"),
    metaTitle: text("meta_title"),
    metaDescription: text("meta_description"),
    h1: text("h1"),
    h2: text("h2"),
    aboutBookphysio: text("about_bookphysio"),
    nearby1Link: text("nearby1_link"),
    nearby1Txt: text("nearby1_txt"),
    nearby1State: text("nearby1_state"),
    nearby1Postcode: text("nearby1_postcode"),
    nearby2Link: text("nearby2_link"),
    nearby2Txt: text("nearby2_txt"),
    nearby2State: text("nearby2_state"),
    nearby2Postcode: text("nearby2_postcode"),
    nearby3Link: text("nearby3_link"),
    nearby3Txt: text("nearby3_txt"),
    nearby3State: text("nearby3_state"),
    nearby3Postcode: text("nearby3_postcode"),
    nearby4Link: text("nearby4_link"),
    nearby4Txt: text("nearby4_txt"),
    nearby4State: text("nearby4_state"),
    nearby4Postcode: text("nearby4_postcode")
},
    // (table) => ({
    //     clinicsSlugIdx: index("clinics_slug_idx").on(table.slug),
    // })
)

export default suburbs;