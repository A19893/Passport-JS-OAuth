const login = async (req, res) => {
  res.render("login.ejs");
};

const authentication = async (req, res) => {
    if(req.isAuthenticated()){
        res.render("dashboard.ejs", {
            user: req.user
        })
    }
    else{
        res.render("login.ejs");
    }
};

const logout = async (req, res) => {
    req.session.destroy(); // Destroy the session
    // res.clearCookie("connect.sid", { path: "/" }); // Clear the "connect.sid" cookie
    res.render("login.ejs"); // Render the login page
}

module.exports = {
  login,
  authentication,
  logout
};
