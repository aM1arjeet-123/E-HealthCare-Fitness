exports.courseEnrollmentEmail = (courseName, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Course Enrollment Confirmation</title>
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
            <a href="https://yourprojecturl.com"><img class="logo" src="https://res.cloudinary.com/dhjaydnfg/image/upload/v1731149137/jeet/Logo-removebg-preview_cztk2d.png"
                    alt="Health and Fitness Center"></a>
            <div class="message">Course Enrollment Confirmation</div>
            <div class="body">
                <p>Dear ${name},</p>
                <p>Congratulations! You have successfully enrolled in the course <span class="highlight">"${courseName}"</span>. We are thrilled to be part of your fitness journey!</p>
                <p>Get started by logging into your dashboard to access course materials, videos, and resources.</p>
                <a class="cta" href="https://yourprojecturl.com/dashboard">Go to Dashboard</a>
            </div>
            <div class="support">If you have any questions, feel free to contact us at <a
                    href="mailto:support@yourproject.com">support@yourproject.com</a>. We’re here to help you achieve your goals!</div>
        </div>
    </body>
    
    </html>`;
  };
  