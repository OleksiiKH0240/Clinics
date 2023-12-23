import express, { Request, Response } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./graphqlSchema";
import initialRep from "../src/database/repositories/InitialRep";
import clinic from "./resolvers/Clinic";
import "dotenv/config";


const PORT = Number(process.env.PORT) || 80;

const app = express();

app.all("/graphql", createHandler({
    schema, 
    rootValue: clinic
}));

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("(((hello world!)))")
})

app.listen({ port: PORT }, async () => {
    console.log(`app is listening on port ${PORT}.`);
    await initialRep.init();
});
