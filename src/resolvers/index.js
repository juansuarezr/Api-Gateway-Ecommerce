const comprasResolver = require('./compras_resolver');
const productResolver = require('./products_resolver');
const userResolver = require('./users_resolver');



const lodash = require('lodash');

const resolvers = lodash.merge(comprasResolver, productResolver, userResolver);

module.exports = resolvers;