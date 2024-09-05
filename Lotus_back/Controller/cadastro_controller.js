const message = require('../Modulo/config')
const cadastroDAO = require('../Model/DAO/cadastro')

const getListarCadastro = async function(){
let cadastroJSON= {}

let cadastro = await cadastroDAO.selectAllCadastrados()

if (cadastro) {

    if (cadastro.length) {
        cadastroJSON.cadastro = cadastro
        cadastroJSON.quantidade = cadastro.length
        cadastroJSON.status_code = 200
        return cadastroJSON
    } else {
        return message.ERROR_NOT_FOUND
    }
    
} else {
    return message.ERROR_INTERNAL_SERVER_DB
}
}

const setInserirNovoCadastro = async function(cadastro, contentType){
try {
 
    if (String(contentType).toLowerCase() == 'application/json') {
        let resultcadastro = {}
        
        
        
        if (cadastro.nome == "" || cadastro.nome == undefined || cadastro.nome.length> 80||
            cadastro.sobrenome == "" || cadastro.sobrenome == undefined || cadastro.sobrenome.length> 200||
            cadastro.email == "" || cadastro.email == undefined || cadastro.email.length> 100||
            cadastro.senha == "" || cadastro.senha == undefined || cadastro.senha.length> 200)
            {
                
                return message.ERROR_REQUIRED_FIELDS
            } else {
                console.log('aqui')
                let novoCadastro = await cadastroDAO.inserirCadastro(cadastro)
                
                if (novoCadastro) {
                    let returnId = await cadastroDAO.returnId()
                    resultcadastro.status = message.SUCESS_CREATED_ITEM.status
                    resultcadastro.status_code = message.SUCESS_CREATED_ITEM.status_code
                    resultcadastro.message = message.SUCESS_CREATED_ITEM.message
                    resultcadastro.cadastro = cadastro
                    
                    
                    resultcadastro.cadastro.id = await returnId
                    
                    return resultcadastro
                } else {
                    return message.ERROR_INTERNAL_SERVER_DB
                }
            }
        } else {
            // return message.ERROR_CONTENT_TYPE
        }
        
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER
    }
}

module.exports={
    getListarCadastro,
    setInserirNovoCadastro
}