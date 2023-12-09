// Path: src/server.js
//CommonJs => utiliza o require (pouco utilizad)
import http from 'node:http';
//ESModules =: import/export (modelo mais utilizado, porém, o node não suporta, para poder utilizar, deve-se adicionar
// "type": "module", ao package.json

const routes = {
    GET: {
        '/': (req, res) => {
            return res.end('Hello World')
        },
        '/users': (req, res) => {
            return res.end('Listagem de usuários')
        }
    },
    POST: {
        '/users': (req, res) => {
            return res.end('Criar usuário')
        }
    }
};


const server = http.createServer((req, res) => {
    const { method, url } = req;
    console.log(method)
    // Verifica se o método existe nas rotas
    if (routes[method]) {
        const handler = routes[method][url];
        // Verifica se o manipulador para a rota específica existe
        if (handler) {
            handler(req, res);
        } else {
            res.end('Rota não encontrada');
        }
    } else {
        res.end('Método não permitido');
    }
});

server.listen(3333);
console.log('Servidor iniciado na porta 3333');

// Para rodar o servidor, basta abrir o terminal e digitar: node src/server.js
// Para parar o servidor, basta apertar o Ctrl + C no terminal
