const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');
const dashboardController = require('./controllers/dashboardController');
const plansController = require('./controllers/plansController');

// Rotas da home
route.get('/', homeController.pageHome);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.pageHome);

// Rotas da Dashboard
route.get('/dashboard', dashboardController.pageHome);

// Rotas dos Planos
route.get('/plans', plansController.pageHome);

// Rotas da API 




module.exports = route;