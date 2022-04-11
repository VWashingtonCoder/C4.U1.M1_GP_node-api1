// IMPORTS AT THE TOP

// INSTANCE OF EXPRESS APP

// GLOBAL MIDDLEWARE

// ENDPOINTS

// [GET]    /             (Hello World endpoint)
// [GET]    /api/dogs     (R of CRUD, fetch all dogs)
// [GET]    /api/dogs/:id (R of CRUD, fetch dog by :id)
// [POST]   /api/dogs     (C of CRUD, create new dog from JSON payload)
// [PUT]    /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES


// import express from 'express';
const express = require('express');

const Dog = require('./dog-model');

const server = express();

server.get('/', (req, res) => {
    res.end('<h1> Hello, world!</h1>');
});

server.get('/json', (req, res) => {
    res.json("blah blah blah");
});

// | Action                | URL                | Method | Response          |
// | :-------------------- | :----------------- | :----- | :---------------- |
// | Add a Dog             | /api/dogs          | POST   | the new Dog       |
// | View list of Dogs     | /api/dogs          | GET    | array of Dogs     |
// | View Dog details      | /api/dogs/{id}     | GET    | a Dog             |
// | Update Dog            | /api/dogs/{id}     | PUT    | updated Dog       |
// | Remove a Dog          | /api/dogs/{id}     | DELETE | deleted Dog       |


server.get('/api/dogs', (req, res) => {
    Dog.findAll()
        .then(dogs => {
            res.json(dogs);
        });
});

server.get('/api/dogs/:id', (req, res) => {
    Dog.findById(req.params.id)
        .then(dog => {
            res.status(12345).json(dog);
        });
});

server.post('/api/dogs', (req, res) => {
    res.end('unimplemented!');
});

server.put('/api/dogs/:id', (req, res) => {
    res.end('unimplemented!');
});

server.delete('/api/dogs/:id', (req, res) => {
    res.end('unimplemented!');
});


module.exports = server;
