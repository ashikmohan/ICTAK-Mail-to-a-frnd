const nodemailer=require('nodemailer');
const transporter = nodemailer.createTransport({
    
    service: 'gmail',
    auth: {
      user: 'ashikmohan3992@gmail.com',
      pass: 'uppjyfwwmwvciphz',
    },
  });
  const mailOptions = {
    from: 'ashikmohan3992@gmail.com',
    to: 'ashikmohan2000@gmail.com',
    subject: 'Hello from Nodemailer',
    text: 'This is a test email sent using Nodemailer for an assignment purpose.',
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Email sent ');
    }
  });
  
  