
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table){
      table.increments();
      table.string("title");
      table.string("genre");
      table.string("cover_image_url");
      table.text("description");
  })
  .createTable('authors', function(table){
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.string("portrait_url");
    table.text("biography");
  })
  .createTable('authors_books', function(table){
    table.integer('authors_id').unsigned().references('authors.id').onDelete('CASCADE').onUpdate('CASCADE').index();
    table.integer('books_id').unsigned().references('books.id').onDelete('CASCADE').onUpdate('CASCADE').index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books').dropTable('authors').dropTable('authors_books');

};
