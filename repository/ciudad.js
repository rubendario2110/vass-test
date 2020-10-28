const sequelize = require("../models/connection");
var initModels = require("../models/init-models").initModels;
var models = initModels(sequelize);
let ciudadModel = models.ciudad;

class CiudadRepository {
  createCiudad(ciudad) {
    return new Promise((resolve, reject) => {
      const json = {
        nombre: ciudad.nombre,
      };
      ciudadModel
        .create(json)
        .then(() => {
          resolve({});
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = CiudadRepository;
