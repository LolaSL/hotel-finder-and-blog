
const adminPage = async (user) => {
    return (req, res, next) => {
        const isAdmin = req.body.is_admin
        if (user.includes(isAdmin)) {
            next()
        } else {
            return res.status(401).json('You do not have access')
        }
    };
}
module.exports =  adminPage ;