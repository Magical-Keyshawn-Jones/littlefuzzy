
exports.up = function(knex) {
  return knex.schema.table('VideoGames', table => {
      table.text('Platform', 20).notNullable().default('Playstation 5')
      table.varchar('Comment', 150)
  })
};


exports.down = function(knex) {
  return knex.schema.table('VideoGames', table => {
      table.dropColumn('Comment')
      table.dropColumn('Platform')
  })
};
