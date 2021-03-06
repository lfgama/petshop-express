const express = require('express'); //chama modulo express
const multer = require('multer') //chama multer (modulo que gerencia upload de arquivos)
const path = require('path'); //chama modulo path (caminho de arquivos)
const router = express.Router(); //chama metodo que gerencia rotas
const servicosController = require('../controllers/servicosController')
const validaCadastroServico = require('../middlewares/validacao/servico');

const storage = multer.diskStorage({
    /** destino do upload */
    destination: (req, file, cb)=> {
        /** guarda arquivos na pasta uploads */
        cb(null, path.join('uploads'));
    },
    /** nome do upload */
    filename: (req, file, cb) => {
        /** salva arquivo com nome do campo + data + extensão */
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

/** htttp://localhost:3000/admin */
router.get('/', (request, response) => {
    response.render ('admin', { titulo: 'Painel Administrativo' });
});

// http://localhost:3000/admin/servicos
router.get('/servicos', servicosController.index);
router.get('/servicos/cadastro', servicosController.cadastro);
router.post('/servicos/cadastro', upload.single('ilustracao'), validaCadastroServico, servicosController.salvar);
router.get('/servicos/editar/:id', servicosController.editar);
// router.get('/servicos/editar/:id', upload.single('ilustracao'), servicosController.atualizar);

module.exports = router;