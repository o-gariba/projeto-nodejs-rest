const fs = require('fs')
const path = require('path')

//  fs.readFile('../assets/salsicha.jpg', (erro, buffer) => {
//     if (erro) throw new Error(erro)
//     else {
//         console.log('A imagem foi bufferizada')
//         const imgBufferizada = buffer
//         console.log(imgBufferizada)
//                                                        //outro erro, outro escopo 
//         fs.writeFile('../assets/salsicha2.jpg', buffer, erro => console.log('A imagem foi escrita com sucesso!'))
//     }
//  })

module.exports = (caminhoDaImagem, nomeNovaImagem, callbackSucesso) => {

    const tipo = path.extname(caminhoDaImagem)
    const extValidas = ['.png', '.jpg', '.jpeg']

    if (!extValidas.includes(tipo)) {
        const erro = 'Erro! Tipo de arquivo inválido'
        callbackSucesso(erro);
    } else {
        const novoCaminho = `./assets/imagens/${nomeNovaImagem}${tipo}`;

        fs.createReadStream(caminhoDaImagem)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackSucesso(false, novoCaminho));
    }
}