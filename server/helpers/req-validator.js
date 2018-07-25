const Joi = require('joi')

module.exports = (schema) => (
  (req, res, next) => {
    if (!schema) return next()
    const value = {};
    ['files', 'body', 'query'].forEach((key) => { if (schema[key]) value[key] = req[key] })

    return Joi.validate(value, schema, (error) => {
      if (error) { error.status = 400; throw error }

      return next()
    })
  }
)
