/******************************
***Primary file for this APP***
******************************/

//DEPENDENCIES
const http = require('http');
const url = require('url');

const server = http.createServer(
    function (req, res) {
        //res.end('Hello World');

        //GET the URL and PARSE
        let parseURL = url.parse(req.url, true);

        //GET the PATH
        let path = parseURL.pathname;
        const trimPath = path.replace(/^\/+|\/+$/g, '');

        //GET the HTTP METHOD
        const method = req.method.toLocaleLowerCase();

        //LOG the REQUEST
        res.end(`Veo el PATH ${trimPath} y tambien veo el METODO ${method}`);
        console.log(`Veo el PATH ${trimPath} y tambien veo el METODO ${method}`);
    }
);

server.listen(3000, function () {
    console.log('Server up un running at PORT 3000');
});