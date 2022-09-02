const dbConnection = require("../database/connection")

module.exports = class QuestionServices {

    async create({question,answer1,answer2,answer3,answer4,right}){

        const [id] = await dbConnection('questions').insert({
            question,
            answer1,
            answer2,
            answer3,
            answer4,
            right,
        })

        return id
    }

    async list(){
        const questions = await dbConnection('questions').select('*')
        return questions
    }

    async delete(param){
        const {id} = param
        await dbConnection('questions').where('id', id).delete()
    }
}
