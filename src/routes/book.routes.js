const express = require('express');
const { getAllbooks, createbook, updatebookById, deletebookById } = require('../controllers/book.controller');
const bookRouter = express.Router();

bookRouter.get('/', getAllbooks); // localhost:3000/api/v1/books
bookRouter.post('/', createbook); // localhost:3000/api/v1/books
bookRouter.put('/:id', updatebookById); // localhost:3000/api/v1/books/:id
bookRouter.delete('/:id', deletebookById); // localhost:3000/api/v1/books/:id

module.exports = bookRouter;