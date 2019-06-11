function restricted(req, res, next) {
  //Checks if there is a session and if user has a session
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "No credentials provided" });
  }
}

module.exports = restricted;
