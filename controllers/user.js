var express = require("express");
var router = express.Router();
let UserService = require("../services/user");

router.post("/login", (req, res) => {
  new UserService()
    .login(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((responseError) => {
      res.status(500).json(responseError);
    });
});

router.post("/register", (req, res) => {
  new UserService()
    .register(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((responseError) => {
      res.status(500).json(responseError);
    });
});
module.exports = router;
