const sequelize = require("../models/connection");
var bcrypt = require("bcryptjs");
var initModels = require("../models/init-models").initModels;
var models = initModels(sequelize);
let userModel = models.user;
class UsersRepository {
  getUserById(user) {
    return new Promise((resolve, reject) => {
      userModel
        .findOne({ where: { email: user.email } })
        .then((data) => {
          if (data === null) {
            reject(null);
          } else {
            resolve(data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  register(user) {
    return new Promise((resolve, reject) => {
      let hashedPassword = bcrypt.hashSync(user.password, 8);
      const json = {
        username: user.username,
        rol: user.rol,
        email: user.email,
        password: hashedPassword,
        sedes_idsedes: user.sede,
        ciudad_idciudad: user.ciudad,
      };
      userModel
        .create(json)
        .then(() => {
          resolve({});
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getUserBySede(user) {
    return new Promise((resolve, reject) => {
      userModel
        .findOne({ where: { sedes_idsedes: user.sede } })
        .then((data) => {
          if (data === null) {
            reject(null);
          } else {
            resolve(data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
module.exports = UsersRepository;
