 const fs = require('fs')

 fs.readFile('../assets/salsicha.jpg', (erro, buffer) => {
    if (erro) throw new Error(erro)
    else {
        console.log('A imagem foi bufferizada')
        const imgBufferizada = buffer
        console.log(imgBufferizada)
                                                       //outro erro, outro escopo 
        fs.writeFile('../assets/salsicha2.jpg', buffer, erro => console.log('A imagem foi escrita com sucesso!'))
    }
 })
