var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "mailgun",
    auth: {
        user: "postmaster@sandboxe0d236096ec940a7880cf27f9daf2d8c.mailgun.org",
        pass: "67d31e3b1c8bf84ff2ee07458a146989"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "", // sender address
    to: "almira1612@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hello world ", // plaintext body
    html: "<b>Hello world </b>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});
