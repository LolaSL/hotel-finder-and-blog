const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
   }
  
   next();
   
};
  module.exports = isAdmin;