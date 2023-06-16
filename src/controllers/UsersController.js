const AppError = require("../utils/AppError")

class UsersController {
  create( req,res ) {
    const { name, email, password } = req.body;
    
    if(!name) {
      throw new AppError("Você não informou o nome.")
    }

    if(!password) {
      throw new AppError("Senha é obrigatório")
    }

    res.status(201).json({name, email, password})
  }
}

module.exports = UsersController;
