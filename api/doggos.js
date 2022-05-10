// import { nanoid } from "@reduxjs/toolkit";
// const { nanoid } = require('@reduxjs/toolkit');

// Id Helpers
let id = 0

function getId(){
    return ++id
}

// Doggos information stored here
let dogs = [
    { id: getId(), name: 'Fitzgerald', weight: 150 },
    { id: getId(), name: 'Bellventus', weight: 100 },
    { id: getId(), name: 'Hermendez', weight: 200 },
]

module.exports = {
    async findAll() {
        return dogs
    },
}