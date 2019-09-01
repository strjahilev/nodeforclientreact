module.exports = function(app) {

    const books = require('../controller/item.controller.js');

    // Create a new Book
    app.post('/api/books/create', books.create);

    // Retrieve all Books
    // app.get('/api/books', items.findAll);
};