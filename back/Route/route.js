const model = require('../Controllers/register.controller');
    // app.get('/register/:id', notes.findOne);

var express = require('express')
var app = express.Router();
//Henry
var Controller= require('../Controllers/postComment')
var ControllerComms= require('../Controllers/getComment')
//var Controllers= require('../Controllers/tchat.contolleur')
//henry
app.post('/postComment',Controller.PosteComment)
   .get('/getComment/:id', ControllerComms.getComment)
// //mi-pa
// app.post('/message', Controllers.create);
//     app.get('/message', Controllers.findAll);
//     app.get('/profil/:profilId', Controllers.findOne);
    
//nante    
app.post('/register', model.creerRegister);
    app.get('/register', model.findAll);
    app.post('/login', model.login);
//publish


    const pers = require('../Controllers/controller.article');
    
    app.post('/profil', pers.create);
    app.get('/profil', pers.findAll);
    app.get('/profil/:profilId', pers.findOne);
    app.get('/user/:photo_profil', pers.lireImage);

module.exports = app; 
