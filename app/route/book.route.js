module.exports = function(app) {

    const books = require('../controller/item.controller.js');

    // Create a new Book
    app.post('/api/books/create', books.create);
    app.get('/api/books', books.findAll);
    app.put('/api/books/:bookId', books.update);
    app.delete('/api/books/:bookId', books.delete);

    // Retrieve all Books
    // app.get('/api/books', items.findAll);
};