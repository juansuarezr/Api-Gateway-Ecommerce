const comprasResolver = require('./compras_resolver');
const productResolver = require('./products_resolver');
const userResolver = require('./users_resolver');
const accountResolver = require('./account_resolver');
const transactionResolver = require('./transaction_resolver');


const lodash = require('lodash');

const resolvers = lodash.merge(comprasResolver, productResolver, userResolver, accountResolver, transactionResolver);

module.exports = resolvers;