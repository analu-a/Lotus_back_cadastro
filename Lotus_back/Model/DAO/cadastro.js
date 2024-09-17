const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

const selectAllCadastrados = async function(){
try {
    let sql = 'select * from cadastro order by id_cadastro desc'

    let rsCadastro = await prisma.$queryRawUnsafe(sql)
    return rsCadastro

} catch (error) {

    console.log(error);

    return false
}
}

const inserirCadastro = async function(cadastro){
try {
    
    let sql = `insert into cadastro(
        nome,
        sobrenome,
        email,
        senha
    ) values(
        '${cadastro.nome}',
        '${cadastro.sobrenome}',
        '${cadastro.email}',
        '${cadastro.senha}'
    )`

    let result = await prisma.$executeRawUnsafe(sql)
    if (result) {
        return true
    } else {
        return false
    }
} catch (error) {
    return false
}
}

const editarCadastro = async function(dadosCadastro,id){
    try {
        let sql 

        sql = `update cms set 
       `
    } catch (error) {
        
    }
}

const returnId = async function (){

    try {

        let sql = 'select CAST(last_insert_id() AS DECIMAL) as id from cadastro limit 1'
        let rsId = await prisma.$queryRawUnsafe(sql)
        
        return rsId

    } catch (error) {
        
        return false
    }
  
}

const selectByIdCadastro = async function (id) {
    try {
        let sql = `select * from cadastro where id_cadastro = ${id}`
    
        let rsCadastro = await prisma.$queryRawUnsafe(sql)
        return rsCadastro
    
    } catch (error) {
        return false
    }
    
       
    }

module.exports={
    selectAllCadastrados,
    inserirCadastro,
    returnId,
    selectByIdCadastro

}
