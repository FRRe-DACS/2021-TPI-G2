const express = require("express");
const empresaRepository = require("../repositories/empresaRepository");
const repository = new empresaRepository();
const sequelize = require("../loaders/db/db");
const logger = require("winston");

const getProductsByCuit = async (req = Request, res = Response) => {
  try {
    if (!req.params.cuit) {
      res.status(400).send("cuit vacio");
    }
    const products = await repository.getProductsByCuit(req.params.cuit);

    res.status(200).json(products);
  } catch (err) {
    res.status(500).send(err);
  }
};
const regimen = async (req = Request, res = Response) => {
  try {
    console.log(req.body);
  } catch (err) {
    res.send({ message: err });
  }
};

module.exports = {
  getProductsByCuit,
  regimen,
};
