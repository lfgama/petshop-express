const express = require('express'); //chama modulo express
const router = express.Router(); //chama metodo que gerencia rotas
const servicosController = require('../controllers/servicosController')


// htttp://localhost:3000/admin
router.get('/', (request, response) => {
    response.render ('admin', { titulo: 'Painel Administrativo' });
});

// http://localhost:3000/admin/servicos
router.get('/servicos', servicosController.index);


module.exports = router;