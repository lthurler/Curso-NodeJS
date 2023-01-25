import express from 'express'

const app = express()

//indica p o express ler body com json
app.use(express.json())

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]

//cria rota padrão ou raiz
app.get('/', (req,res) => {
    res.send('curso NodeJS')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.post('/selecoes',(req,res) => {
    selecoes.push(req.body)
    res.status(201).send('seleção cadastrada com sucesso')
})

export default app
