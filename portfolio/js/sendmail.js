var http = require('http');

http.createServer(function (req, res) 
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  mailfunction();
}).listen(8080);


function mailfunction()
{
  process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: 
    {
      user: 'srizv82@gmail.com',
      pass: ''
    }
  });

  var mailOptions = 
  {
    //from: 'srizv82@gmail.com',
    /*from: document.getElementById("useremail").value,
    to: 'srizv82@gmail.com',
    //subject: 'Sending Email using Node.js',
    subject: document.getElementById("subject").value,
    text: document.getElementById("message").value*/
    

    from: 'srizv82@gmail.com',
    to: 'srizv82@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) 
    {
      console.log(error);
      //document.getElementById("mailmessage").innerHTML = error;
    } 
    else
    {
      console.log('Email sent: ' + info.response);
      //document.getElementById("mailmessage").innerHTML = 'Email sent: ' + info.response;
    }
  });
}

//mailfunction();