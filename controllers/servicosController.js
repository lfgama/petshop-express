// modulo instalado para manipulação de arquivos
const fs = require('fs');

// modulo nativo para manipulação de arquivos
const path = require('path');

// modulo instalado para gerar id
const { uuid } = require('uuidv4');

// caminho do arquivo json
const servicosPath = path.join('servicos.json');
// lê conteúdo do arquivo json
let servicos = fs.readFileSync(servicosPath, { encoding: 'utf-8' });
// converte json para array
servicos = JSON.parse(servicos);

const servicosController = {
    index: (request, response) => {
        return response.render('adminServicos', {titulo: 'Serviços', servicos });
    },
    cadastro: (request, response) => {
        return response.render('servicosCadastro', {titulo: 'Cadastrar serviço'} );
    },
    salvar: (request, response) => {
        let { nome, descricao, preco } = request.body;
        
        /** pegando o nome do arquivo */
        let ilustracao = request.file.path;

        // adiciona o novo serviço no array
        servicos.push({ id: uuid(), nome, descricao, preco, ilustracao });

        //converte array para json novamente
        let dadosJson = JSON.stringify(servicos);
        // salva json atualizado no arquivo
        fs.writeFileSync(servicosPath, dadosJson);

        return response.redirect('/admin/servicos');
    },
    show: (request, response) => {
    const {servico} = request.params;
    return response.send(`Exibindo detalhes do serviço ${servico}`)
}
}
module.exports = servicosController