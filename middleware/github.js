/**
 * Fetch Github Details middleware
 */
const fetchGit = async (req, res, next) => {
    try {
        console.log("Fetching Github details for the account ", req.body.githubUser);
    }
    catch(e) {
        res.json({ "success" : false, "message" : "Github account not Found" }).status(404);
        return next(e);
    }
};

module.exports = {
    fetchGit
};