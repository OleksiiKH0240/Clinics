import { ClinicsSearchArgsType } from "../types/RepTypes";
import clinicRep from "../database/repositories/ClinicRep";


const getClinicsBy = async (args: ClinicsSearchArgsType) => {
    if (Object.values(args).includes(null)) {
        throw new Error("getClinicsBy argument can't be null");
    }
    return await clinicRep.getClinincsBy(args);
}

export default { getClinicsBy };
