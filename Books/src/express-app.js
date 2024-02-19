const express = require('express');
const cors = require('cors');
const {books} = require('./api');
// const book = require('../books/models/book');

module.exports = async (app) => {
    app.use(express.json({limit: 'lmb'}));
    app.use(express.urlencoded({extended: true, limit:'lmb'}));
    // app.cors(cors());
    app.use(express.static(__dirname + '/public'));


    //passing app to apis
    books(app);
}