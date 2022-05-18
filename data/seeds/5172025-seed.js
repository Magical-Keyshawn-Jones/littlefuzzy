exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Video Games').truncate()
  await knex('Video Games').insert([
    {Game: 'God of War'},
    {Game: 'Uncharted 4'},
    {Game: 'Infamous'}
  ]);
};
