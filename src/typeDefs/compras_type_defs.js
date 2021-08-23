const { gql } = require('apollo-server');

const compraTypeDefs = gql`

    type Carrito {
        productId: String!
        cantidad: Int!
        valorUnidad: Float!
    }

    type Compra {
        id: String!
        userId: String!
        productos: [Carrito!]
        total: Float!
        fecha: String!
    }

    input CarritoInput {
        productId: String!
        cantidad: Int!
        valorUnidad: Float!
    }
    
    input CompraInput {
        userId: String!
        productos: [CarritoInput!]
        total: Float!
    }

    type Query {
        comprasByIdUser(userId: String!): [Compra]
        listarCompras: [Compra]
    }
    
    type Mutation {
        createCompra(compra: CompraInput!): Compra
    }
`;

module.exports = compraTypeDefs; 