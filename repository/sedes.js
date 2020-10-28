const sequelize = require("../models/connection");
var initModels = require("../models/init-models").initModels;
var models = initModels(sequelize);
let sedesModel = models.sedes;

class SedesRepository {
  createSede(sede) {
    return new Promise((resolve, reject) => {
      const json = {
        nombre: sede.nombre,
        ciudad_idciudad: sede.ciudad
      };
      sedesModel
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

module.exports = SedesRepository;
