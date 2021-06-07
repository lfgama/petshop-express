/** Middleware - validação de cadastro */
const servico = (request, response, next) => {
    let {nome, preco} = request.body;

    if ( nome == '' || preco == '' ) {
        /** retornar mensagem de erro */
        response.send("Preencha todos os campos obrigatórios!");
    } else {
        /** executa próxima função/controller */
        next();
    }
}

module.exports = servico;