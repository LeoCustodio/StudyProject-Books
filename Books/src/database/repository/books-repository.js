const bookModel = require('../models/bookModel');

class BookRepository {
    async AddBook({tittle, author, numberPages, publisher}){
        try{
            var book = new bookModel({
                tittle,
                author,
                numberPages,
                publisher
                });
            const bookResult = book.save();
            return bookResult;
        }catch(err){
            throw err;
        }
    }

    async GetBooks(){
        try{
            const bookResult = bookModel.find();
            return bookResult;
        }catch(err){
            throw err;
        }
    }

    async GetBookById(id){
        try{
            const bookResult = bookModel.findById(id);
            return bookResult;
        }catch(err){
            throw err;
        }
    }

    async DeleteBookById(id, data){
        try{
            bookModel.findById(data);
        }catch(err){
            throw err;
        }
    }
}

module.exports = BookRepository;