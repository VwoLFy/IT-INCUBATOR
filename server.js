const http = require('http');

const server = http.createServer( (request, response) => {
    response.write('Vvv');
    response.end;
})

server.listen(3003);