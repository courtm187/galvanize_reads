var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.NODE_ENV]);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('books', {title: "Hello"});
});


router.get('/books', function(req, res, next) {
  knex('authors')
  .innerJoin('authors_books', 'authors.id', 'authors_books.authors_id')
  .innerJoin('books', 'authors_books.authors_id', 'books.id')
 .then(function(results){
   res.render('books', {title: "Hello", authors_and_books: results});
 })
});

router.get('/books/new', function(req, res, next) {
    res.render('new');
});

router.get('/authors', function(req, res, next) {
  knex('authors')
  .innerJoin('authors_books', 'authors.id', 'authors_books.authors_id')
  .innerJoin('books', 'authors_books.authors_id', 'books.id')
 .then(function(results){
   res.render('books', {title: "Hello", authors_and_books: results});
 })
});


module.exports = router;
