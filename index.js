/*
Primary file for this APP

*/



//DEPENDENCIES

const http = require('http');
const url = require('url');

const server = http.createServer(
    function (req, res) {
        //res.end('Hello World');

        //GET the URL and PARCE

        //GET the PATH

        //LOG the REQUEST
        res.end('PIDIO ESTO EL USER');
    }
);

server.listen(3000, function () {
    console.log('Server up un running at PORT 3000')
});