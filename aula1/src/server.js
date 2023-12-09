// Path: src/server.js
//CommonJs => utiliza o require (pouco utilizad)
import http from 'node:http';
//ESModules =: import/export (modelo mais utilizado, porém, o node não suporta, para poder utilizar, deve-se adicionar
// "type": "module", ao package.json

// Aplicações HTTP -> APIs
const server = http.createServer((req, res) => {
    const {method, url} = req
    console.log(method, url)
    if (method === 'GET' && url === '/users') {
        return res.end('Listagem de usuários')
    }
    if (method === 'POST' && url === '/users') {
        return res.end('Criar usuário')
    }
    return res.end("Hello World")
})
server.listen(3333)
console.log('Server started at port 3333')

// Para rodar o servidor, basta abrir o terminal e digitar: node src/server.js
// Para parar o servidor, basta apertar o Ctrl + C no terminal
