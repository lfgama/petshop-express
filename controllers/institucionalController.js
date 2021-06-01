/** módulo instalado para manipulação de arquivos */
const fs = require('fs');
/** modulo nativo para manipulação de arquivos */
const path = require('path');

/** caminho do arquivo json */
const servicosPath = path.join('servicos.json');
/** lê conteúdo do arquivo json */
let servicos = fs.readFileSync(servicosPath, { encoding: 'utf-8' });
/** converte JSON para array */
servicos = JSON.parse(servicos);


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
        return response.render('servicos', {titulo: 'Serviços', servicos });
    },
    sobre: (request, response) => {
        return response.render('sobre', { titulo: 'Sobre'});
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