const express = require("express");
const QuestionsController = require("./controllers/questionsController");

const qstCtrl = new QuestionsController()
const routes = express.Router();

routes.post("/questions/register", qstCtrl.createQuestion);
routes.get("/questions/list", qstCtrl.listQuestions);
routes.delete("/questions/delete/:id", qstCtrl.deleteQuestion);

module.exports = routes;