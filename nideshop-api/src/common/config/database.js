const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: '69.171.68.134',
  port: '3306',
  user: 'root',
  password: 'admin123',
  dateStrings: true
};
