const multer = require('multer')
const path = require('path')

const fileFilter = (req, file, next) => {
  const isMimeTypeSupported = /jpeg|jpg|png|gif/.test(file.mimetype)
  const isExtensionValid = /jpeg|jpg|png|gif/.test(path.extname(file.originalname).toLowerCase())
  if (isMimeTypeSupported && isExtensionValid) return next(null, true)
  const error = new Error('File type not supported.')
  error.status = 400
  next(error)
}

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter,
});

module.exports = upload
