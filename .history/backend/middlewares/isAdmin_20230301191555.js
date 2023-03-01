const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.is_dmin) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
   }
  
   next();
   
};
  module.exports = isAdmin;