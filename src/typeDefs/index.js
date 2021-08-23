//Se llama al typedef (esquema) de cada submodulo
const compraTypeDefs = require('./compras_type_defs');
const productosTypeDefs = require('./productos_type_defs');
const usersTypeDefs = require('./users_type_defs');
const accountTypeDefs = require('./account_type_def');
const transacctionTypeDefs = require('./transacction_type_def');

//Se unen
const schemasArrays = [compraTypeDefs, productosTypeDefs, usersTypeDefs, accountTypeDefs, transacctionTypeDefs];

//Se exportan
module.exports = schemasArrays; 