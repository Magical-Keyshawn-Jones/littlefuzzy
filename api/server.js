const express = require('express');
const Dog = require('./doggos');

// Storing express inside of server variable
const server = express()

// Using Magic to see raw data
server.use(express.json());

server.get('/api/dogs', (request, response) => {
    Dog.findAll()
    .then(object => {
        response.json(object)
    })
})

module.exports = server;