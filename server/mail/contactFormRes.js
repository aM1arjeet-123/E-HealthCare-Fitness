exports.contactUsEmail = (
    email,
    firstname,
    lastname,
    message,
    phoneNo,
    countrycode
  ) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://yourprojecturl.com"><img class="logo"
                    src="https://res.cloudinary.com/dhjaydnfg/image/upload/v1731149137/jeet/Logo-removebg-preview_cztk2d.png" alt="Health and Fitness Center"></a>
            <div class="message">Contact Form Confirmation</div>
            <div class="body">
                <p>Dear ${firstname} ${lastname},</p>
                <p>Thank you for reaching out to the Health and Fitness Center. We have received your message and will respond to you shortly.</p>
                <p>Here are the details you provided:</p>
                <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> +${countrycode} ${phoneNo}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p>Your interest in improving health and fitness is appreciated, and we’re excited to assist you further.</p>
            </div>
            <div class="support">If you have any immediate concerns, please contact us at <a href="mailto:support@yourproject.com">support@yourproject.com</a>. We’re here to support you!</div>
        </div>
    </body>
    
    </html>`;
  };
  