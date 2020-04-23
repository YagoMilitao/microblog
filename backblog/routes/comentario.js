const express = require('express');
const router = express.Router();

//postid pq só um usuario autenticado podera comentar(eu acho)
router.get('/comentario/:postid', (req, res) =>{
    res.json({
        conteudo: 'Parabens, gostei',
        autor: 'Unknow'
    })
})


module.exports = router;
