const BookService = require('../services/books-service');
// const userAuth = require('./middlewares/auth');
const mongo = require('mongodb');

module.exports = (app) => {
    const service = new BookService();

    app.get('/', async (req, res) => {
        res.send("Index Endpoint.");
    })

    //Get book
    app.get("/searchbooks", async (req,res) => {
        try{
            const books = await service.GetBooks();
            if(books){
                res.json(books);
            }
            else{
                res.sendStatus(404);
            }
        }catch(err){
            throw err;
        }
    })


    //Create Book
    app.post('/book/create', async (req, res, next) => {
        try{
            const {tittle, author,numberPages,publisher} = req.body;
            const{data} = await service.AddNewBook({tittle, author,numberPages,publisher});
            return res.json(data);
        }catch(err){
            next(err);
        }
    })

    //Get Book by id
    app.get("/searchbook/:id", async (req,res) => {
        try{
            const {id} = req.params;
            const o_id = new mongo.BSON.ObjectId(id);
            const book = await service.GetBookById(o_id);
            if(book){
                res.json(book);
            }
            else{
                res.sendStatus(404);
            }
        }catch(err){
            throw err;
        }

    })

    //Delete book by id
    app.delete("/deletebook/:id", async (req,res) => {
        try{
            const {_id } = req.user;
            const {id} = req.body;
            const data = await service.DeleteBookById(_id, id);
            if(data){
                res.json("Book has been removed!");
            }
            else{
                res.sendStatus(404);
            }
        }catch(err){
            throw err;
        }
    })
}



