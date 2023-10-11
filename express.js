const express = require('express')
const app = express()


// Cria uma rota para ele
app.get('/', (req,res)=> {
	res.send('Seja bem vindo, ao meu app!')
})

app.get('/sobre', (req, res) => {
	res.send('Ola  eu sou o sobre!')
})

app.get('/blog', (req, res) => {
	res.send('Bem vindo ao meu blog!')
})


// Inicia o servidor [ Codigo sempre a cima dele. ]
app.listen(8000, ()=> {
	console.log('Servidor rodando, na url https://localhost:8000')
})