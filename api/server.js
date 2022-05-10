const express = require('express');
const Dog = require('./doggos');

// Storing express inside of server variable
const server = express()



// Using Magic to see raw data
server.use(express.json());

server.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    next()
})

server.get('/', (request, response) => {
    console.log('Hello, Creature')
    // response.send('<h1>Wassup kid!</h1><p>I am also not a creature</p>')
})

server.get('/api/dogs', (request, response) => {
    Dog.findAll()
    .then(object => {
        response.json(object)
    })
})

module.exports = server;