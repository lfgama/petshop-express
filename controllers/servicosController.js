const servicosController = {
    index: (request, response) => {
        return response.render('adminServicos', {titulo: 'Serviços', servicos: [] });
    },
    show: (request, response) => {
    const {servico} = request.params;
    return response.send(`Exibindo detalhes do serviço ${servico}`)
}
}
module.exports = servicosController