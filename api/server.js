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

const server = express();

server.get('/', (req, res) => {
    res.end('<h1> Hello, world!</h1>');
});

server.get('/json', (req, res) => {
    res.json({ hello: "world" });
});

module.exports = server;
