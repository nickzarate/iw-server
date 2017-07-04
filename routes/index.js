'use-strict'

/*
 *  Import routes
 */
// Import routes here...


module.exports = function(ctx) {
  
  // unpack the context
  const db  = ctx.db,
        app = ctx.app

  // require routes here (instead of defining them)

  app.get('/login', (req, res) => {
    db.collection('users').find({ email: req.headers.email, password: req.headers.password }).limit(1).next(function(err, user) {
      if (user) {
        res.send(user)
      }
    })
  })
}
