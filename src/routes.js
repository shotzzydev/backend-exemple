const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController')
const dashboardController = require('./controllers/dashboardController')

// Rotas da home
route.get('/', homeController.parginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.parginaInicial);

// Rotas da Dashboard
route.get('/dashboard', dashboardController.parginaInicial);

// Rotas da API 




module.exports = route;