let UsersRepository = require("../repository/user");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
let config = require("../config");
const log4js = require("log4js");
const resource = require("../resource/resource.json");
log4js.configure(resource.configLog4js);
const log = log4js.getLogger("app");

class UserService {
  login(req) {
    return new Promise((resolve, reject) => {
      new UsersRepository()
        .getUserById(req)
        .then((operation) => {
          let pass = req.password;
          let passwordIsValid = bcrypt.compareSync(pass, operation.password);
          if (!passwordIsValid) reject({ auth: false, token: null });
          let token = jwt.sign({ id: operation.iduser }, config.secret, {
            expiresIn: 86400,
          });
          resolve({ auth: true, token: token });
        })
        .catch((error) => {
          log.error(error);
          reject({ user: null });
        });
    });
  }
  register(req) {
    return new Promise((resolve, reject) => {
      new UsersRepository()
        .register(req)
        .then((data) => {
          log.debug(data);
          resolve({ user: "creado correctamente" });
        })
        .catch((error) => {
          log.error(error);
          reject({ user: null });
        });
    });
  }
}
module.exports = UserService;
