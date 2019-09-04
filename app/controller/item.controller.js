const Book = require('../model/book.model.js');

exports.create = (req, res) => {
    // Create a Book
    const book = new Book ({title: req.body.title});

    // Save a Book into MongoDB
    book.save()
        .then(item => {
            res.send(item.toClient());
        }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.findAll= (req,res) => {
    Book.find()
        .then(books =>{
            let returnedBooks = [];
            for (let i = 0; i < books.length; i++) {
                returnedBooks.push(books[i].toClient());
            }
            res.send(returnedBooks);
        }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};