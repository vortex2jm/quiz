const QuestionsRepository = require("../repositories/questionRepository")

module.exports = class QuestionServices {

    constructor(){
        this.questRepo = new QuestionsRepository()
    }

    async create(qst){
        return await this.questRepo.create(qst);
    }

    async list(){
        return await this.questRepo.list()
    }

    async delete(param){
        const {id} = param
        await this.questRepo.delete(id)
    }
}
