
exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.is_dmin) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Admin Token' });
    }
  };
  