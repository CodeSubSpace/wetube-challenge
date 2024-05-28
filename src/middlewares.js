import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Nomad Users";
  res.locals.loggedIn = Boolean(req.session.loggedIn) || false;
  res.locals.user = req.session.user || {};
  next();
};

export const txtUpload = multer({
  dest: "uploads/txt",
})