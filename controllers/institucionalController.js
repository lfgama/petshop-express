const { response } = require("express");

const institucionalController = {
    index: (request, response) => {
        return response.render('index', { titulo: 'Home' });
    },
    cadastro: (request, response) => {
        return response.render('cadastro', { titulo: 'Cadastro' });
    },
    contato: (request, response) => {
        return response.render('contato', { titulo: 'Contato'});
    },
    login: (request, response) => {
        return response.render('login', { titulo: 'Login' });
    },
    servicos: (request, response) => {
        return response.render('servicos', {titulo: 'Serviços' });
    },
    sobre: (request, response) => {
        return response.render('sobre', { titulo: 'Sobre' });
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