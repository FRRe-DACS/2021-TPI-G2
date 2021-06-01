const logger = require("../loaders/logger/index");
const sequelize = require("../loaders/db/db");
const db = require("../loaders/db/db");

class empresaRepository {
  constructor() {}

  async getProductsByCuit(cuit) {
    try {
      const response = await db.empresas.findAll({
        raw: true,
        attributes: ["id", "razon_social"],
        where: {
          CUIT: cuit,
        },
        include: [
          {
            model: db.productos,
          },
        ],
      });
      return response;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = empresaRepository;


