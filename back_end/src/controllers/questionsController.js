const QuestionServices = require("../services/questionsServices")
const QuestionModel = require("../models/questionsModel");

module.exports = class QuestionsController {

  async createQuestion(req, res){
    const qstSvc = new QuestionServices()
    const qst = new QuestionModel(
      req.body.question,
      req.body.answer1,
      req.body.answer2,
      req.body.answer3,
      req.body.answer4,
      req.body.right
    )

    try{
      const id = await qstSvc.create(qst)
      return res.json({id})

    }catch(error){
      console.log(error)
      return res.status(500).send("server error")
    }
  }


  async listQuestions(req, res){
    const qstSvc = new QuestionServices()

    try{
      const questions = await qstSvc.list()
      return res.json(questions)

    }catch(error){
      console.log(error)
      return res.status(400).send("Bad Request")
    }
  }


  async deleteQuestion(req, res){
    const qstSvc = new QuestionServices()

    try{
      await qstSvc.delete(req.params)
      return res.status(204).send()
    }catch(error){
      console.log(error)
      return res.status(400).send("Bad Request")
    }
  }
}
