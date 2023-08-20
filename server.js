const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/assets/db.json');
const middlewares = jsonServer.defaults();
const path = require('path');
const port = 8080;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/bot/startRsiBot', (req, res) => {
    const responseFilePath = path.join(__dirname, 'src/assets/startRsiBotResponse.json');
    const responseData = require(responseFilePath);
  res.jsonp(responseData);
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});