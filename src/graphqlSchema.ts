import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import clinic from "./resolvers/Clinic";


/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */

const GraphQlClinicType = new GraphQLObjectType({
    name: "ClinicType",
    fields: () => ({
        slug: { type: GraphQLString },
        clinicName: { type: GraphQLString },
        fullAddress: { type: GraphQLString },
        website: { type: GraphQLString },
        phone: { type: GraphQLString },
        suburb: { type: GraphQLString },
        state: { type: GraphQLString },
        email: { type: GraphQLString },
    })
})



const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        healthCheck: {
            type: GraphQLString,
            resolve: (parent, args) => {
                // console.log(typeof parent,typeof args);
                return "healthy";
            }
        },
        getClinicsByCity: {
            type: new GraphQLList(GraphQlClinicType),
            args: {
                city: { type: GraphQLString }
            }
        },
        getClinicsByState: {
            type: new GraphQLList(GraphQlClinicType),
            args: {
                state: { type: GraphQLString }
            }
        },
        getClinicsByPostcode: {
            type: new GraphQLList(GraphQlClinicType),
            args: {
                postcode: { type: GraphQLString }
            }
        },
        getClinicsByClinicName: {
            type: new GraphQLList(GraphQlClinicType),
            args: {
                clinicName: { type: GraphQLString }
            }
        },
        getClinicsBySuburb: {
            type: new GraphQLList(GraphQlClinicType),
            args: {
                suburb: { type: GraphQLString }
            }
        },
        test: {
            type: GraphQLString,
            args: {
                test: { type: GraphQLString }
            },
            resolve: (parent, args) => {
                console.log(typeof args);
                return args.test;
            }
        }
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery
});
