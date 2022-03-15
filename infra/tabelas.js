class Tabelas {
    init(conexao) {
        console.log('Tabelas foram chamadas')
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(30), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro) throw erro
            else {
                console.log('Tabela criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas