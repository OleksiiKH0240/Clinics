CREATE INDEX IF NOT EXISTS "clinics_city_idx" ON "clinics"."clinics" ("city");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "clinics_state_idx" ON "clinics"."clinics" ("state");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "clinics_postcode_idx" ON "clinics"."clinics" ("postcode");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "clinics_clinic_name_idx" ON "clinics"."clinics" ("clinic_name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "clinics_suburb_idx" ON "clinics"."clinics" ("suburb");