export default function handler(req, res) {
    require('dotenv').config()
    console.log(process.env.PASSWORD);
    let nodeMailer = require('nodemailer')
    let transporter = nodeMailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'sharma.aryan.182282@gmail.com',
            pass: process.env.PASSWORD,
        },
        secure: true,
    });

    const mailData = {
        from: 'sharma.aryan.182282@gmail.com',
        to: 'aryan182282@gmail.com',
        subject: `Message From ${req.body.firstName} ${req.body.lastName}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p><br></br><p>Phone: ${req.body.number}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })  
    console.log(req.body)
    res.send('success')
}