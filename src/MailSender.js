const nodemailer = require('nodemailer')

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })
  }

  sendMail(targetMail, content) {
    const message = {
      from: 'Notes Apps',
      to: targetMail,
      subject: 'Exported Notes',
      text: 'Your notes sir',
      attachments: [{ filename: 'notes.json', content }],
    }

    return this._transporter.sendMail(message)
  }
}

module.exports = MailSender
