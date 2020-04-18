const mysql = require('mysql')

const config = {
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'test',
  port: 3306
}

let pool = mysql.createPool(config)
let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = {
  query
}