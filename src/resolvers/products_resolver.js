const productResolver = {
    Query: {
        listarProductos: (_, __, {dataSources}) => {
            return dataSources.productsAPI.listarProductos()
        },
        listarByIdProduct: (_, { id }, {dataSources}) => {
            return dataSources.productsAPI.listarByIdProduct(id)
        }
    }
    ,
    Mutation: {
        addProduct: (_, {product}, {dataSources}) => {
            return dataSources.productsAPI.addProduct(product)
        },
        deleteProduct: (_, {productId}, {dataSources}) => {
            return dataSources.productsAPI.deleteProduct(productId)
        }
    }

};


module.exports = productResolver;