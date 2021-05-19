const { response } = require("express");

const institucionalController = {
    index: (request, response) => {
        return response.render('index');
},
    cadastro: (request, response) => {
        return response.render('cadastro');
    },
    contato: (request, response) => {
        return response.render('contato');
    },
    login: (request, response) => {
        return response.render('login');
    },
    servicos: (request, response) => {
        return response.render('servicos');
    },
    sobre: (request, response) => {
        return response.render('sobre');
    }
}
//     show: (request, response) => {
//         // console.log(request.params);
//         //pegando parametro nome da rota /pets/:nome
//         const {nome} = request.params;
//         return response.send(`exibindo detalhes do pet ${nome}`);
//     }
// }

module.exports = institucionalController;