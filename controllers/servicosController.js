const servicosController = {
    index: (request, response) => {
        return response.send(`Exibindo lista de serviços`)
    },
    show: (request, response) => {
    const {servico} = request.params;
    return response.send(`Exibindo detalhes do serviço ${servico}`)
}
}
module.exports = servicosController