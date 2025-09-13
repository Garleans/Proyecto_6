const express = require('express');
const {  getAllbooks,  createbook,  updatebookById,  deletebookById,  getBookById} = require('../controllers/book.controller');

const bookRouter = express.Router();

bookRouter.get('/', getAllbooks); // https://proyecto-6-juan-opazo.onrender.com/api/v1/books
bookRouter.post('/', createbook); // https://proyecto-6-juan-opazo.onrender.com/api/v1/books
bookRouter.put('/:id', updatebookById); // https://proyecto-6-juan-opazo.onrender.com/api/v1/books/:id
bookRouter.delete('/:id', deletebookById); // https://proyecto-6-juan-opazo.onrender.com/api/v1/books/:id
bookRouter.get('/readone/:id', getBookById); // https://proyecto-6-juan-opazo.onrender.com/api/v1/books/readone/:id

module.exports = bookRouter;
