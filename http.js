const http = require('http') // chama o pacote http do node

// pedido e resposta
http.createServer((req, res) => {
res.end('Ola') // 
}).listen(5000)
console.log('O servidor foi criado')