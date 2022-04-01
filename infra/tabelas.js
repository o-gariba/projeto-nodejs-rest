class Tabelas {
    init(conexao) {
        console.log('Tabelas foram chamadas')
        this.conexao = conexao

        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(11) NOT NULL, pet varchar(30), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro) throw erro
            else {
                console.log('Tabela "atendimentos" criada com sucesso!')
            }
        })
    }

    criarPets() {
        // id int, nome varchar, imagem varchar(200), primary key (id)
        const sql = 'CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, imagem varchar(200) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if (erro) throw erro
            else {
                console.log('Tabela "pets" criada com sucesso!')
            }
        })
    }
}

module.exports = new Tabelas