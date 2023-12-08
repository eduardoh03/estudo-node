//CommonJs => utiliza o require (pouco utilizad)
import http from 'node:http';
//ESModules =: import/export (modelo mais utilizado porém o node não suporta, para poder utilizar, deve-se adicionar
// "type": "module", ao package.json

// Aplicações HTTP -> API's
const server = http.createServer((req, res) => {
    return res.end("Hello World")
})
server.listen(3333)
