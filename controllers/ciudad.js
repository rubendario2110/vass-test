var express = require("express");
var router = express.Router();
let CiudadService = require("../services/ciudad");

router.post("/registerCiudad", (req, res) => {
  new CiudadService()
    .create(req)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((responseError) => {
      res.status(500).json(responseError);
    });
});
module.exports = router;
