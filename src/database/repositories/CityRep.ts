import { db } from "../databaseConnection";


class CityRep {
    dbClient
    constructor(dbClient = db) {
        this.dbClient = dbClient;
    }

    getAllCities = async () => {

    }
}

export default new CityRep();
