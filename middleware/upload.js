const util = require("util");
const multer = require("multer");
const maxSize = 8 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);

module.exports = {
  uploadFileMiddleware
};