'use strict';

// simple express server
var express = require('express');
var app = express();
var nodemailer = require("nodemailer");
var router = express.Router();

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

var smtpTransport = nodemailer.createTransport({
    service: 'Mailgun',
    host: 'smtp.mailgun.org',
    port: 587,
    auth: {
        user: 'postmaster@sandboxe0d236096ec940a7880cf27f9daf2d8c.mailgun.org',
        pass: '67d31e3b1c8bf84ff2ee07458a146989'
    },
    tls: {rejectUnauthorized: false},
    debug:true
});


/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/


app.get('/send',function(req,res){
	var mailOptions={
		to:"almira1612@gmail.com",
		from : req.query.from,
		subject : "Contact from portfolio: " + req.query.subject,
		text : req.query.text
	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
   	 if(error){
        	console.log(error);
		res.end("error");
	 }else{
        	console.log("Message sent: " + response.message);
		res.end("sent");
    	 }
});
});

app.listen(3000,function(){
	console.log("Express Started on Port 3000");
});
