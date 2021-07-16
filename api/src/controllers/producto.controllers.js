const express = require("express");
const ProductRepository = require("../repositories/productoRepository");
const repository = new ProductRepository();
const sequelize = require("../loaders/db/db");
const logger = require("winston");
const empresaRepository = require("../repositories/empresaRepository");
const { Console } = require("winston/lib/winston/transports");
const getAllProducts = async (req = Request, res = Response) => {
  return await repository.allProductos();
};

const createProduct = async (req = Request, res = Response) => {
  try {
    const empresa = await repository.getEmpresaByCuit(req.body.cuit);

    const body = {
      emp_id: empresa[0].id,
      ean: req.body.ean,
      deno: req.body.deno,
      u_medida: req.body.uMedida,
      precioU: req.body.precioU,
    };

    const producto = await repository.createProduct(body);
    if (!producto) {
      res.status(400).send("error");
    }
    res.status(201).json(producto);
  } catch (err) {
    throw err;
  }
};



module.exports = {
  createProduct,
};
