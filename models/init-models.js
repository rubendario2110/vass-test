var DataTypes = require("sequelize").DataTypes;
var _sedes = require("./sedes");
var _ciudad = require("./ciudad");
var _user = require("./user");

function initModels(sequelize) {
  var sedes = _sedes(sequelize, DataTypes);
  var ciudad = _ciudad(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  return {
    sedes,
    ciudad,
    user,
  };
}
module.exports = { initModels };
