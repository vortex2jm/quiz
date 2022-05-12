/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('questions', function(table){

        table.increments('id').primary();

        table.string('question').notNullable();
        
        table.string('answer1').notNullable();
        table.string('answer2').notNullable();
        table.string('answer3').notNullable();
        table.string('answer4').notNullable();

        table.string('right').notNullable();

    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
    return knex.schema.dropTable('questions');
};
