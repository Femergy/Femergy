const multerZip = require('multer');
const path = require('path');

const fileFilter = (req, file, next) => {
  const isMimeTypeSupported = /zip/.test(file.mimetype);
  const isExtensionValid = /zip/.test(path.extname(file.originalname).toLowerCase());
  if (isMimeTypeSupported && isExtensionValid) return next(null, true);
  const error = new Error('File type not supported.');
  error.status = 400;
  next(error);
};

const storage = multerZip.diskStorage({
  destination: './extracted',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${req.user.id}${path.extname(file.originalname)}`);
  },
});

const uploadZip = multerZip({
  storage,
  fileFilter,
});

module.exports = uploadZip;
