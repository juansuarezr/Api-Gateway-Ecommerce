const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ProductsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.products_api_url;    
  }

  async listarProductos(){
      return await this.get(`/products`);
    }

  async listarByIdProduct(id){
      return await this.get(`/products/${id}`);
    }

  async deleteProduct(productId){
      return await this.delete(`/products/${productId}`);
    }

  async addProduct(product){
    product = new Object(JSON.parse(JSON.stringify(product)));
    return await this.post(`/products`, product);
  }

}

module.exports = ProductsAPI;