let SedesRepository = require("../repository/sedes");
let jwt = require("jsonwebtoken");
let config = require("../config");
const log4js = require("log4js");
const resource = require("../resource/resource.json");
log4js.configure(resource.configLog4js);
const log = log4js.getLogger("app");

class SedesService {
  create(req) {
    return new Promise((resolve, reject) => {
      let token = req.headers["x-access-token"];
      if (!token) {
        log.error("No token provided.");
        reject({ auth: false, message: "No token provided." });
      }
      jwt.verify(token, config.secret, (err) => {
        if (err) {
          log.error("Failed to authenticate token.")
          reject({ auth: false, message: "Failed to authenticate token." });
        }
      });
      new SedesRepository()
        .createSede(req.body)
        .then((data) => {
          log.debug(data);
          resolve({ sede: "creada correctamente" });
        })
        .catch((error) => {
          log.error(error);
          reject({ user: null });
        });
    });
  }
}
module.exports = SedesService;