//Se llama al typedef (esquema) de cada submodulo
const compraTypeDefs = require('./compras_type_defs');
const productosTypeDefs = require('./productos_type_defs');
const usersTypeDefs = require('./users_type_defs');


//Se unen
const schemasArrays = [compraTypeDefs, productosTypeDefs, usersTypeDefs];

//Se exportan
module.exports = schemasArrays; 