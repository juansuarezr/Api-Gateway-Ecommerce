const { gql } = require('apollo-server');

const productosTypeDefs = gql`
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

    type Query {
        listarProductos: [Product]
        listarByIdProduct(id: Int!): Product
    }

    extend type Mutation {
        addProduct(product: ProductInput!): Product
        deleteProduct(productId: Int!): String
    }


    `;

module.exports = productosTypeDefs; 