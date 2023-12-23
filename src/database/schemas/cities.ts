import { text } from "drizzle-orm/pg-core";
import { mySchema } from "../schemasConfig";


const cities = mySchema.table("cities", {
    // citySlug: varchar("city_slug", { length: 25 }).primaryKey(),
    citySlug: text("city_slug").primaryKey(),
    cityName: text("city_name"),
    state: text("state"),
    metaTitle: text("meta_title"),
    metaDescription: text("meta_description"),
    h1: text("h1"),
    h2: text("h2"),
    subHeadingText: text("sub_heading_text"),
    tick1: text("tick_1"),
    tick2: text("tick_2"),
    tick3: text("tick_3"),
    aboutBookphysio: text("about_bookphysio"),
})

export default cities;
