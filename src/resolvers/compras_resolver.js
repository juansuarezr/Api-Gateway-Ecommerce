const comprasResolver = {
    Query: {
        comprasByIdUser: (_, { userId }, {dataSources, userIdToken}) => {
            if(userId == userIdToken) 
                return dataSources.comprasAPI.comprasByIdUser(userId)
            else
                return null
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