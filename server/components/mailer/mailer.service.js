const nodemailer = require('nodemailer')
const debug = require('debug')('femergy:mailer')
const config = require('../../config/config')
const host = config.host
const transporter = nodemailer.createTransport(config.mailer.transport)

module.exports = {
  sendMail,
  notificationToAdmin,
  onRegistration,
  onForgotPassword,
  onAfterRegistration,
}

function sendMail(options) {
  transporter.sendMail(options, (error, info) => {
    if (error) { debug(error); console.log(error); return }
    console.log(options.to, options.from);
    debug('Sent email. Info: %s', info)
  })
}

function notificationToAdmin (email) {
  const mailOptions = {
    to: config.administration.email,
    from: config.mailer.defaultFromAddress,
    subject: 'New user registered',
    html: `The new user successfully activated his account. <br>
            Its email is: ${email} <br>`,
  }

  sendMail(mailOptions)
}

function onRegistration (email, token, host, protocol) {
  const mailOptions = {
    to: email,
    from: config.mailer.defaultFromAddress,
    subject: 'Activate your Femergy account.',
    text: `Thanks for signing up with Femergy! You must follow this link to activate your account:\n\n
    ${protocol}://${host}/api/auth/activate?token=${token}\n`,
  }
  sendMail(mailOptions)
  // notificationToAdmin(email)
}

function onForgotPassword (email, password) {
  const mailOptions = {
    to: email,
    from: config.mailer.defaultFromAddress,
    subject: 'Femergy Password Reset',
    html: `You are receiving this because you (or someone else) have requested the reset of the password for your account.<br>    
    Your new password: ${password}<br>
    The password will be active within 24 hours, after which you will have to reset the password again.`,
  }

  sendMail(mailOptions)
}

function onAfterRegistration (email) {
  const mailOptions = {
    to: email,
    from: config.mailer.defaultFromAddress,
    subject: 'Successfully activated your Femergy account.',
    html: 'You have successfully activated your account.',
  }

  sendMail(mailOptions)
}
