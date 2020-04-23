const express = require('express');
const bodyParser = require('body-parser');
//axios responsavel por fazer chamadas http
const app = express();

const port = 3001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false}));




app.get('/', (req,res) =>{
    res.send('Hello World');
})

 //Sempre que for digitado /api na barra de endereço
//vai abrir rotas 
//que vai abrir o index
//No routes/index.js ele só está mandando usar dentro do /
const routes= require('../routes');
app.use('/api', routes);

/*dirname vai ser para o node o diretório atual
*/
app.use(express.static(_dirname + '/frontblog'))


app.listen(port, () =>{
    console.log('servidor esta rodando em http://localhost:', port)
})