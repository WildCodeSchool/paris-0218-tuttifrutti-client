const nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
const
 transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'userpass'
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Tutti Frutti ✔ <tuttifrutti@gmail.com>', // sender address
    to: 'user@tuttifrutti.com, user2@tuttifrutti.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});