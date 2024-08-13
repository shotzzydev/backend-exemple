exports.pageHome = (req, res) => {
    res.render('index', {
        titulo: 'Este será o título da página',
        numeros: [1,2,3,4,5,6,7]
    });
}

exports.trataPost  = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.');
}

// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: "Outra coisa qualquer",
//     descricao: 'Outra descrição'
// })
// .then(dados => console.log(dados))
// .catch(e => console.log(e));
