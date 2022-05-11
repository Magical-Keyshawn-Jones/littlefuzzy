const express = require('express');
const Dog = require('./doggos');

// Storing express inside of server variable
const server = express()



// Using Magic to see raw data
server.use(express.json());

// Allows for any site to use the api
server.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    next()
})

// Testing api request
server.get('/', (request, response) => {
    console.log('Hello, Creature')
    response.status(200).send('<h1>Wassup kid!</h1><p>I am also not a creature</p>')
})

// Returns all the dogs from the api
server.get('/api/dogs', (request, response) => {
    Dog.findAll()
    .then(object => {
        response.json(object)
    })
})

// Deletes a doggo
server.delete('/api/dogs/:id', (req, res) => {
    // const id = req.params.id
    const { id } = req.params

    Dog.delete(id)
    .then(result => {
        res.json(result)
    })
})



module.exports = server;