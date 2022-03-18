const conexao = require('../infra/conexao')
const moment = require('moment')

class Atendimento {
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const nomeValido = atendimento.cliente.length >= 3

        const validacoes = [{
            nome: 'data',
            valido: dataValida,
            mensagemErro: 'Data deve ser posterior ou igual a data de cadastro.'
        },
        {
            nome: 'cliente',
            valido: nomeValido,
            mensagemErro: 'O nome da pessoa (cliente) deve ter mais de 2 caracteres.'
        }
    ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) res.status(400).json(erros)
        else {
            const atendimentoDatado = {...atendimento, dataCriacao, data}

            const sql = 'INSERT INTO atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultado) => {
                if (erro) res.status(400).json(erro)
                else res.status(201).json(atendimento)
            })
        }

    }

    lista(res) {
        const sql = 'SELECT * FROM atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) res.status(400).json(erro)
            else res.status(200).json(resultados)
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM atendimentos WHERE id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]

            if (erro) res.status(400).json(erro)
            else res.status(200).json(atendimento)
        })
    }

    altera(id, valores, res) {
        if (valores.data) valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const sql = 'UPDATE atendimentos SET ? WHERE id = ?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) res.status(400).json(erro)
            else res.status(200).json(resultados)
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM atendimentos WHERE id = ?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) res.status(400).json(erro)
            else res.status(200).json({...valores, id})
        })
    }
}

module.exports = new Atendimento