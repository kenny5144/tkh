const { v4: uuidv4 } = require("uuid");
const getUserID = require("../libs/helper")

const anonymousAuth = (req, res, next) => {
  
  console.log("Middleware called");
  if (getUserID(req.headers) === 'undefined') {
    console.log("No userId cookie found. Setting new cookie.");
    res.cookie("userId", uuidv4(), {httpOnly:true, path: '/', maxAge: 365 * 24 * 60 * 60 * 1000,});
  } else {
    console.log("userId cookie already set:", req.cookies.userId);
  }
  next();
};

module.exports = anonymousAuth;