const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
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
			<a href="https://ehealthcare-fitness-project.vercel.app"><img class="logo"
					src="https://res.cloudinary.com/dhjaydnfg/image/upload/v1731149137/jeet/Logo-removebg-preview_cztk2d.png" alt="E-Healthcare & Fitness Center Logo"></a>
			<div class="message">OTP Verification for Your Account</div>
			<div class="body">
				<p>Dear User,</p>
				<p>Thank you for joining the E-Healthcare & Fitness Center community. Please use the following OTP (One-Time Password) to complete your registration and gain access to a healthier lifestyle:</p>
				<h2 class="highlight">${otp}</h2>
				<p>This OTP is valid for 5 minutes. If you did not initiate this verification, please ignore this email. Once verified, you can explore a range of health and fitness resources on our platform.</p>
			</div>
			<div class="support">For assistance, please reach out to us at <a
					href="mailto:support@ehealthfitness.com">support@ehealthfitness.com</a>. We're here to support you on your wellness journey!</div>
		</div>
	</body>
	
	</html>`;
};
module.exports = otpTemplate;
