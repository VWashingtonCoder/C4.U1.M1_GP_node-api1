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

server.use(express.json());

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
            if(!dog) {
                res.status(404).json({ message: 'dog not found' })
            } else {
                res.json(dog);
            }
        });
});

server.post('/api/dogs', (req, res) => {
    let dog = req.body;
    Dog.create(dog)
        .then(dog => {
            res.status(201).json(dog);
        });
});

server.put('/api/dogs/:id', (req, res) => {
    let id = req.params.id;
    let dog = req.body;

    Dog.update(id, dog)
        .then(updatedDog => {
            if(!updatedDog) {
                res.status(404).json({ message: 'dog not found' })
            } else {
                res.json(updatedDog);
            }
        })
});

server.delete('/api/dogs/:id', (req, res) => {
    Dog.delete(req.params.id)
        .then(dog => {
            if(!dog) {
                res.status(404).json({ message: 'dog not found' })
            } else {
                res.json(dog);
            }
        });
});


module.exports = server;
