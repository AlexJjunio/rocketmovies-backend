const { Router } = require("express");

const usersRoutes = Router();

const UsersController = require("../controllers/UsersController");

const usersController = new UsersController();

function myMiddleware(req, res, next) {
  console.log("Middleware está de olho em você")

  console.log(req.body.name)

  next();
}

usersRoutes.post("/",myMiddleware,usersController.create);

module.exports = usersRoutes;