const { gql } = require('apollo-server');

const productsTypeDefs = gql`
    type Product {
        id: Int!
        name: String!
        description: String!
        price: Float!
        units: Int!
    }


    input ProductInput {
        name: String!
        description: String!
        price: Float!
        units: Int!
    }

    extend type Query {
        listarByIdProduct(id: Int!): Product
        listarProductos: [Product]
    }

    extend type Mutation {
        addProduct(product: ProductInput!): String
        deleteProduct(productId: Int!): String
    }


    `;

module.exports = productsTypeDefs; 