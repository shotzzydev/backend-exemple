require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB)
.then(() => {
    app.emit('pronto');
})
.catch((e => console.log(e)));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./src/routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { checkCsrfError, csrfMiddleware } = require('./src/middlewares/middelewares')

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'ddfff4+445gfgffga33ggrtr4341fm2f',
    store: MongoStore.create({ mongoUrl: process.env.MONGODB }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(csrf());
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(4000, () => {
        console.log("Acessar http://localhost:3000")
        console.log('Servidor executando na porta 3000')
    });
});