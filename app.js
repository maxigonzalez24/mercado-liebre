//Requerimientos de modulos.
const express = require('express');
const app = express();

const path = require('path');

const publicFolderPath = path.resolve(__dirname, './public');
app.use( express.static(publicFolderPath) );

const PORT = 3000;

app.listen( PORT, () => console.log(`corriendo en el puerto: ${PORT}`))

app.get( '/' , (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'))
})

app.get( '/register' , (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'))
})

app.get( '/login' , (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'))
})

app.get( '/home' , (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'))
})

app.post( '/home' , (req, res) => {
    res.redirect('/home');
})