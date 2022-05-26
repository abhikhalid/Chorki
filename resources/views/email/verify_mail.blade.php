<!DOCTYPE html>
<html>
<head>
	<title>Verify Email</title>
</head>
<body>
   
<div>
<h2 style="padding: 23px;background: #395bb8a1;border-bottom: 6px rgb(255, 255, 255) solid;">
	<a href="http://127.0.0.1:8000/api/auth/email-verify-{{$mail}}-{{$verify_token}}" style="color: #ffffff; text-decoration: none;">Click to verify your email address</a>
</h2>
</div>

  
<p>Hi, User</p>
<p>Verify token: {{$verify_token}}</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
<strong>Thank you. :)</strong>
  
</body>
</html>