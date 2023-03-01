const isAdmin = (req, res, next) => {
    if (req.user && req.user.is_admin) {
      next();
      return;
    } 
    res.status(401).send('Not authorized');
   });
};
  module.exports = isAdmin;