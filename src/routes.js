const express = require('express');
const routes = express.Router();
const apiController = require('./controller/apiController')


routes.get('/',(request, response) =>{
    response.send("API gerador")
})

routes.get("/codigos", apiController.get)
routes.post("/codigos", apiController.post);
routes.delete("/codigos",apiController.delete);


module.exports = routes