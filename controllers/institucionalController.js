const institucionalController = {
    index: (request, response) => {
        return response.render('index');
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