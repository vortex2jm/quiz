const connection = require('../database/connection.js');

module.exports = {

  //============================creating table

  async create(req, res) {

    const { question, answer1, answer2, answer3, answer4, right } = req.body;

    const [id] = await connection('questions').insert({

      question,
      answer1,
      answer2,
      answer3,
      answer4,
      right,

    })

    return res.json({ id });
  },

  //============================list

  async index(req, res) {

    const questions = await connection('questions').select('*');

    return res.json(questions);
  },


  //============================deleting questions

  async delete(req, res) {

    const { id } = req.params;

    await connection('questions').where('id', id).delete();

    return res.status(204).send();
  }

}
