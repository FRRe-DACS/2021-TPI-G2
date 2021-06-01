const logger = require("../loaders/logger/index");
const sequelize = require("../loaders/db/db");
const { Op } = require("sequelize");
const db = require("../loaders/db/db");

class ProductRepository {
  constructor() {}

  async createProduct(body) {
    try {
      const product = await db.productos.create({
        denominacion: body.deno,
        codigo_ean: body.ean,
        precio_unidad: body.precioU,
        unidad_medida: body.uMedida,
        emp_id: body.emp_id,
      });
      return product;
    } catch (err) {
      throw err;
    }
  }
  async getEmpresaByCuit(cuit) {
    try {
      const empresa = await db.empresas.findAll({
        raw: true,
        where: {
          CUIT: cuit,
        },
      });
      return empresa;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = ProductRepository;
