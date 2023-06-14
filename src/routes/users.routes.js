const { Router } = require("express");

const usersRoutes = Router();

const UsersController = require("../controllers/UsersController");

const usersController = new UsersController();

function myMiddleware(req, res, next) {
  console.log("Middleware está de olho em você")

  console.log(req.body.name)

  if(!req.body.isAdmin) {
    return res.json({ message : 'Você não é um Admin.'});
  }

  next();
}

usersRoutes.post("/",myMiddleware,usersController.create);

module.exports = usersRoutes;