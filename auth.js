function isAuthenticated(req, res, next) {
    if (req.session.userId) {
      return next(); // User is authenticated, proceed to the next step
    } else {
      res.status(403).send('You need to be logged in to access this page.');
    }
  }
  
  module.exports = isAuthenticated;
  