const petsController = {
    index: (request, response) => {
        return response.send(`Exibindo lista de pets`)
    },
    show: (request, response) => {
        // console.log(request.params);
        //pegando parametro nome da rota /pets/:nome
        const {nome} = request.params;
        return response.send(`exibindo detalhes do pet ${nome}`);
    }
}

module.exports = petsController;