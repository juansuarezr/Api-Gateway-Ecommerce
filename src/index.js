
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const ProductsAPI = require('./datasources/products_api');
const ComprasAPI = require('./datasources/compras_api');
const UsersAPI = require('./dataSources/users_api');
const AccountAPI = require('./dataSources/account_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        accountAPI: new AccountAPI(),
        usersAPI: new UsersAPI(),
        comprasAPI: new ComprasAPI(),
        productsAPI: new ProductsAPI()
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});