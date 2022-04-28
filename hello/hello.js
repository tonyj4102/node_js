
/// server on port 3000

// ver 2_0 https://nodejs.org/en/docs/guides/getting-started-guide/
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

// get api

  // import node-fetch
// const axios = require('axios');
// // set url as constant
// const URL = 'https://api-v3.mbta.com/vehicles?filter[route]=1';

// axios
//   .get(URL)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });
