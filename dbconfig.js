// dbconfig.js
const config = {
    user: 'nu-demo-data',
    password: 'HiR^U1^AExcIZ09t',
    server: 'nu-demo-data.database.windows.net',
    database: 'student-data',
    options: {
      encrypt: true, // for Azure
      trustServerCertificate: true // change to false for production
    }
  };
  
  module.exports = config;
  