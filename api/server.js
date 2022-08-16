const express = require("express");

const server = express();

const accountsRouter = require('./accounts/accounts-router');

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.use('*', (req, res) => {
  res.status(404).json({ message: 'invalid path' })
});

// server.use((err, req, res, next) => {
//   const { status = 500, message = "something went wrong with the server" } = err;
//   res.status(status).json({ message: message })
// })

module.exports = server;
