const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: '175.155.179.248',//69.171.68.134,localhost
  port: '3306',
  user: 'dbuser',
  password: 'meu2018',
  dateStrings: true
};
