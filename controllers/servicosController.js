const servicosController = {
    index: (request, response) => {
        return response.render('adminServicos', {titulo: 'Serviços', servicos: [] });
    },
    cadastro: (request, response) => {
        return response.render('servicosCadastro', {titulo: 'Cadastrar serviço'} );
    },
    salvar: (request, response) => {
        let { nome, descricao, preco, ilustracao } = request.body;
        console.log({ nome, descricao, preco, ilustracao });
    },
    show: (request, response) => {
    const {servico} = request.params;
    return response.send(`Exibindo detalhes do serviço ${servico}`)
}
}
module.exports = servicosController