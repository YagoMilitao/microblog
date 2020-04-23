const express = require('express');
const router = express.Router();

router.get('/postagem', (req, res) =>{
    res.json({
        titulo: 'Meu primeiro post',
        conteudo: 'Era uma vez, uma publicação',
        autor: 'Yago Militão'
    })
})


module.exports = router;
