export type ClinicSearchReturnType = {
    slug: string;
    clinicName: string | null;
    fullAddress: string | null;
    website: string | null;
    phone: string | null;
    suburb: string | null;
    state: string | null;
    email: string | null;
};

export type ClinicsSearchArgsType = {
    city?: string | null,
    state?: string | null,
    postcode?: number | null,
    clinicName?: string | null,
    suburb?: string | null
};
