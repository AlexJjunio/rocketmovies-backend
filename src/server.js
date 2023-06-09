require("express-async-errors");
const AppError = require("./utils/AppError");

const express = require("express");
const app = express();

const migrationsRun = require("./database/sqlite/migrations")

app.use(express.json())

const routes = require("./routes");
migrationsRun();

app.use(routes);


app.use((error, req, res, next) => {
  
  if(error instanceof AppError) {
    res.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }
  
  console.log(error);

  return res.status(500).json({
    status: "error",
    message: "internal server error"
  });
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));