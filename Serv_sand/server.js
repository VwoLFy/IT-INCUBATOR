const http = require('http');
const fs = require('fs');

let requestsCount = 0;

const server = http.createServer((request, response) => {

    switch (request.url) {
        case '/1':
            response.write(`---------- ${(request.url)} ----------\n\n\t`);
            break;
        case '/it':
            response.write(`---------- ${request.url} ----------\n\n\t`);
            break;
        case '/favicon.ico':
            fs.readFile(__dirname + '\\favicon.ico', function (error, data) {
                if (error) {
                  response.statusCode = 404;
                  response.end('Resource not found!?');
                } else {
                  response.end(data);
                }
              })
            break;
        default:
            response.write('Vvv - Please look!\n\n\t');
            break;
    }

    if (request.url != '/favicon.ico') {
        response.write(String(requestsCount++));
        response.end();
    }
})

server.listen(3003, console.log('Server started 3003'));