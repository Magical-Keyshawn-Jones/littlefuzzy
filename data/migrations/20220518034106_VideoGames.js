// Create a Completely new table
exports.up = function(knex) {
  return knex.schema.createTable('Video Games', table => {
      table.increments()
      table.varchar('Game')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Video Games')
};
