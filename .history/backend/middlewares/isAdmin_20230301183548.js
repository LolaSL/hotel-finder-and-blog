const isAdmin = (req, res, next) => {
    if (req.user && req.user.is_admin) {
      next();
      return;
    } else {
      res.status(401).send({ message: 'Invalid Admin Token' });
    }
};
  module.exports = isAdmin;