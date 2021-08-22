const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ComprasAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.compras_api_url;    
  }

  async comprasByIdUser(userId){
      return await this.get(`/compras/${userId}`);
  }

  async listarCompras(){
    return await this.get(`/compras`);
  }
 
  async createCompra(compra){
    compra = new Object(JSON.parse(JSON.stringify(compra)));
    return await this.post(`/comprar`, compra);
  }

}

module.exports = ComprasAPI;