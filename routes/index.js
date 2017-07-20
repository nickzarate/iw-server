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
    // console.log(req)
    db.collection('users').find({ email: req.query.email, password: req.query.password }).limit(1).next(function(err, user) {
      console.log(user)
      if (user) {
        res.send(user)
      } else {
        res.send({ error: 'Email and password not found in the database' })
      }
    })
  })
}
