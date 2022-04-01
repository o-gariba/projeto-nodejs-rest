const conexao = require('../infra/conexao')
const uploadDeArquivos = require('../arquivos/uploadDeArquivos')

class Pet {
    adiciona(pet, res) {
        const sql = 'INSERT INTO pets SET ?'

       

        uploadDeArquivos(pet.imagem, pet.nome, (erro, novoCaminho) => {

            if (erro) res.status(400).json({erro: erro}) 
            else {
                const novoPet = {
                    nome: pet.nome,
                    imagem: novoCaminho
                }       

                conexao.query(sql, novoPet, () => res.status(201).json(novoPet))
            }
        })
    }
}

module.exports = new Pet();