const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mustafaanasali@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'mustafaanasali@gmail.com',
        subject: 'We are sorry to see you go',
        text: `Hello ${name}. Please let me know why you are cancelling the product`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}