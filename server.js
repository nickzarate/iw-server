'use-strict'

/*
 *  Module Dependencies
 */
const config  = require('./config'),
      express = require('express'),
      mongodb = require('mongodb').MongoClient;


// Initialize server
const app = express();

// Run the server, connect to MongoDB, and require routes
app.listen(config.port, () => {
  mongodb.connect(config.db.uri, (err, db) => {
    
    if (err) {
      console.log('An error occurred while attempting to connect to MongoDB', err)
      process.exit(1)
    }

    console.log(
      '%s v%s ready to accept connections on port %s in %s environment.',
      config.name,
      config.version,
      config.port,
      config.env
    )

    require('./routes')({ db, app })
  })
})
