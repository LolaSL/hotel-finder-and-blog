
const adminPage = async (users) => { }
return (req, res, next) => {
    const isAdmin = req.body.is_admin
    if (users.includes(isAdmin === true)) {
        next()
    } else {
        return res.status(401).json('You do not have access')
    }
};

module.exports = { adminPage }