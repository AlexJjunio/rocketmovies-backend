const express = require("express");

const app = express();

app.get("/users", (request, response) => {
  const {page, limit} = request.query;

  response.send(`
    Page: ${page}. 
    Limit: ${limit} `)
});

app.get("/", (req, res) => {
  res.send('Testando')
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))