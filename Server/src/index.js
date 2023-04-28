
const express = require('express');
const server = express();
const morgan = require('morgan');
server.use(morgan('dev'));



server.use(express.json());
const router = require('./routes/index.js');
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});


server.use('/rickandmorty', router);
const PORT = 3001

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})