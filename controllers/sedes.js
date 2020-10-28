var express = require("express");
var router = express.Router();
let SedesService = require("../services/sedes");

router.post("/registerSede", (req, res) => {
  new SedesService()
    .create(req)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((responseError) => {
      res.status(500).json(responseError);
    });
});
module.exports = router;
