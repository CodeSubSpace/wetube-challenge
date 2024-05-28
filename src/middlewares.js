import multer from "multer";
import multerS3 from "multer-s3";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Nomad Users";
  res.locals.loggedIn = Boolean(req.session.loggedIn) || false;
  res.locals.user = req.session.user || {};
  next();
};

export const videoUpload = multer({
  dest: "uploads",
  preservePath: true,
})