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

export type ClinicsSearchReturnType = ClinicSearchReturnType[];
