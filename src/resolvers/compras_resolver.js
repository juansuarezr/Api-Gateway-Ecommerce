const comprasResolver = {
    Query: {
        comprasByIdUser: (_, { userId }, {dataSources}) => {
            return dataSources.comprasAPI.comprasByIdUser(userId)
        },
        listarCompras: (_, __, {dataSources}) => {
            return dataSources.comprasAPI.listarCompras()
        }
    },

    Mutation: {
        createCompra: (_, {compra}, {dataSources}) => {
            return dataSources.comprasAPI.createCompra(compra)
        }
    }

};


module.exports = comprasResolver;