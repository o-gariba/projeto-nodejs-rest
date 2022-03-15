module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send('Você está em ATENDIMENTOS e está realizando um GET.')
    })

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Vc está na rota de atendimentos e está realizando um POST')
    })
}