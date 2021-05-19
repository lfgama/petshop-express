const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController')
const servicosController = require('../controllers/servicosController')
const institucionalController = require('../controllers/institucionalController')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Petshop' });
// });

//rotas para páginas institucionais
router.get('/', institucionalController.index);
router.get('/cadastro', institucionalController.cadastro);
router.get('/contato', institucionalController.contato);
router.get('/login', institucionalController.login);
router.get('/servicos', institucionalController.servicos);
router.get('/sobre', institucionalController.sobre);

// rota para pets que retorna o método index da petsController
router.get('/pets', petsController.index);
router.get('/pets/:nome', petsController.show);
router.get('/servicos/:servico', servicosController.show);

module.exports = router;
