'use strict'

require('dotenv').config()

var dbName = 'iron-will'
var dbUsername = process.env.MONGODB_USER
var dbPassword = process.env.MONGODB_PASSWORD

module.exports = {
  name: 'iw-server',
  version: '0.0.1',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  db: {
    uri: 'mongodb://' + dbUsername + ':' + dbPassword + '@iron-will-cluster-shard-00-00-tvtym.mongodb.net:27017,iron-will-cluster-shard-00-01-tvtym.mongodb.net:27017,iron-will-cluster-shard-00-02-tvtym.mongodb.net:27017/' + dbName + '?ssl=true&replicaSet=iron-will-cluster-shard-0&authSource=admin',
  }
}
