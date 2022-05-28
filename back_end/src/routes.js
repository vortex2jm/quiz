const express = require("express");
const routes = express.Router();

const questionsController = require('./controllers/questionsController');

routes.post("/questions/register", questionsController.create);

routes.get("/questions/list", questionsController.index);

routes.delete("/questions/delete/:id", questionsController.delete);

module.exports = routes;