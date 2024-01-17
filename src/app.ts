import express, { Request, Response, NextFunction, Router, response, request } from "express";
import { RequestContext, createHandler } from "graphql-http/lib/use/express";
import { ExecutionResult, GraphQLError } from 'graphql';
import initialRep from "../src/database/repositories/InitialRep";
import { schema } from "./graphql/schema";
import clinic from "./graphql/queriesResolvers";
import "dotenv/config";
import { OperationArgs } from "graphql-http";
import { error } from "console";


const PORT = Number(process.env.PORT) || 80;

const app = express();

const errorResponder = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("error handler-------------------------------");

    // console.log(err);
    res.status(500).send("something went wrong on the server side.");

}

const graphqlHandler = createHandler({
    schema,
    rootValue: clinic,
    formatError: (error: Error | GraphQLError) => {
        // console.log("formatError");
        if (error instanceof GraphQLError) {
            // console.log("Graphql Error",);
            // console.log("Original Error", error.originalError);
            if (error.originalError !== undefined) {
                // console.log("throw error origin");
                throw error.originalError;
            }
        }
        else {
            console.log("Error", error);
            // throw error;
        }

        return {
            ...error,
            message: error.message
        };
    },
    // onOperation: (req: any, args: OperationArgs, result: ExecutionResult) => {
        // console.log("req", req);
        // console.log("args", args);
        // console.log("req", req);
        // if (result.errors !== undefined) {
            // console.log(result.errors);
            // throw new Error();
            // req.raw.next(new Error());
            
            // req.context.res.status(500).send("error on server side.");
        // }
        // return result;
        
    // }  
})

// const clinicsRouter = Router();
// clinicsRouter.all("/graphql", graphqlHandler);

// clinicsRouter.all("/graphql", (req: Request, res: Response, next: NextFunction) => {
//     try {
//         graphqlHandler(req, res, next);
//     }
//     catch (error) {
//         console.log("error type", typeof error)
//         next(error);
//     }
// });


// app.use(clinicsRouter);

app.all("/graphql", graphqlHandler);



app.use(errorResponder);

app.listen({ port: PORT }, async () => {
    console.log(`app is listening on port ${PORT}.`);
    await initialRep.init();
});
