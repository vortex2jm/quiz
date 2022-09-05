const dbConnection = require("../database/connection")

module.exports = class QuestionsRepository{

    async create(qst){
        const [id] = await dbConnection('questions').insert(qst)
        return id
    }

    async list(){
        const questions = await dbConnection('questions').select('*')
        return questions;
    }

    async delete(id){
        await dbConnection('questions').where('id', id).delete()
    }
}