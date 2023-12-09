//CommonJs => utiliza o require (pouco utilizad)
import http from 'node:http';
//ESModules =: import/export (modelo mais utilizado, porém, o node não suporta, para poder utilizar, deve-se adicionar
// "type": "module", ao package.json
const users = [];
const routes = {
    GET: {
        '/': (req, res) => {
            return res.end('Hello World')
        },
        '/users': (req, res) => {
            return res
                .setHeader('Content-type','application/json')
                .writeHead(200)
                .end(JSON.stringify(users))
        }
    },
    POST: {
        '/users': (req, res) => {
            users.push({
                "id": "1",
                "name": "João",
                "email": "joao@email.com"
            });
            return res
                .setHeader('Content-type','application/json')
                .writeHead(200)
                .end('Criar usuário')
        }
    }
};


const server = http.createServer((req, res) => {
    const {method, url} = req;

    // Verifica se o método existe nas rotas
    if (routes[method]) {
        const handler = routes[method][url];
        // Verifica se o manipulador para a rota específica existe
        if (handler) {
            handler(req, res);
        } else {
            res
                .setHeader('Content-type','application/json')
                .writeHead(404)
                .end('Rota não encontrada');
        }
    } else {
        res
            .setHeader('Content-type','application/json')
            .end('Método não permitido');
    }
});

server.listen(3333);
console.log('Servidor iniciado na porta 3333');

