'use strict'

var dbName = 'iron-will'
var dbUsername = 'username'
var dbPassword = 'password'

module.exports = {
  name: 'iw-server',
  version: '0.0.1',
  env: 'development', // || process.env.NODE_ENV
  port: 3000, // || process.env.PORT
  db: {
    uri: 'mongodb://' + dbUsername + ':' + dbPassword + '@iron-will-cluster-shard-00-00-tvtym.mongodb.net:27017,iron-will-cluster-shard-00-01-tvtym.mongodb.net:27017,iron-will-cluster-shard-00-02-tvtym.mongodb.net:27017/' + dbName + '?ssl=true&replicaSet=iron-will-cluster-shard-0&authSource=admin',
  }
}
