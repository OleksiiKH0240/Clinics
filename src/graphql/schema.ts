import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLInt } from 'graphql';


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
        getClinicsBy: {
            type: new GraphQLList(GraphQlClinicType),
            args: {
                city: { type: GraphQLString},
                state: { type: GraphQLString },
                postcode: { type: GraphQLInt },
                clinicName: { type: GraphQLString },
                suburb: { type: GraphQLString }
            }
        }
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery
});
