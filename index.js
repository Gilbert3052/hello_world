const express = require('express')
//? import express from 'express'

const file = require('./package.json')
//? import file from './package.json'


const port = 9000

const app = express()


app.get('/hola', (peticion, respuesta) => {
    respuesta.json({
        message: 'hola mundo'
    })
})

app.delete('/hola', (peticion, respuesta) => {
    respuesta.json({
        message: 'hola mundo desde delete'
    })
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})