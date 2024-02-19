const { BookRepository } = require('../database');

//Business logic
class BookService {
    constructor(){
        this.repository = new BookRepository();
    }    

    async AddNewBook(id, data){
        const {tittle, author,numberPages,publisher} = data;
        try{
            return await this.repository.AddBook({tittle, author,numberPages,publisher});
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    async GetBooks(){
        try{
            return await this.repository.GetBooks();
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    async GetBookById(data){
        try{
            return await this.repository.GetBookById(data);
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    async DeleteBookById(id, data){
        try{
            await this.repository.DeleteBookById(data);
            return true;
        }catch(err){
            console.log(err);
            throw err;
        }
    }
}

module.exports = BookService;