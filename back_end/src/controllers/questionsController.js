const QuestionServices = require("../services/questionsServices")
 
module.exports = class QuestionsController {

  async createQuestion(req, res){
    const qstSvc = new QuestionServices()
    
    try{
      const id = await qstSvc.create(req.body)
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
      qstSvc.delete(req.params)
      return res.status(204).send()
    }catch(error){
      console.log(error)
      return res.status(400).send("Bad Request")
    }
  }
}
