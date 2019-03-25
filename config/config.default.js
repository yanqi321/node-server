const path = require('path')
module.exports = appInfo => {
  return {
    keys: 'server-demo-test', // TODO: UNIT TEST
    mysql: {
      clients: {
        local: {
          host: 'artdb-main-test',
          port: '3306',
          user: 'art_user',
          password: 'Happy_masala_2016',
          database: 'recdb'
        },
        rec: {
          host: 'artdb-main-test',
          port: '3306',
          user: 'art_user',
          password: 'Happy_masala_2016',
          database: 'recdb'
        }
      }
    },
    customLogger: {
      xxLogger: {
        file: path.join(appInfo.root, 'logs/xx.log'),
        filesRotateBySize: [
          path.join(appInfo.root, 'logs', appInfo.name, 'xx.log')
        ],
        maxFileSize: 2 * 1024 * 1024 * 1024
      }
    }
  }
}
