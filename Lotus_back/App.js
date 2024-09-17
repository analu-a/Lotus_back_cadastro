const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next)=> {

    response.header('Access-Control-allow-Origin', '*')

    response.header('Access-Control-allow-Methods', 'GET')

    app.use(cors())

    next()

})

const bodyParserJSON = bodyParser.json()

/* **************************** Imports de arquivos e bibliotecas do projeto **********/

const controllerCadastro = require('./Controller/cadastro_controller')
const { config } = require('process')
const { log } = require('console')

//************************************************************************************** 

app.get('/v1/Lotus/cadastro', cors(), async function(request, response,next){

    let dadosCadastro = await controllerCadastro.getListarCadastro()

        response.status(dadosCadastro.status_code)
        response.json(dadosCadastro)
        
   
})

app.post('/v1/Lotus/cadastro', cors(), bodyParserJSON, async function(request, response, next){

    let contentType = request.headers['content-type']

    let dadosBody = request.body
   

    let resultDados = await controllerCadastro.setInserirNovoCadastro(dadosBody, contentType)

    response.status(resultDados.status_code)
    response.json(resultDados)
})

app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')
})

