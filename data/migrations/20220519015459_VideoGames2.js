
// Alter Video Games Table
exports.up = function(knex) {
  return knex.schema.table('VideoGames', table => {
    table.integer('Rating')
  })
};

exports.down = function(knex) {
  return knex.schema.table('VideoGames', table => {
      table.dropColumn('Rating')
  })
};
