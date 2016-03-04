var ec2 = require("ec2-publicip");
 
ec2.getPublicIP(function (error, ip) {
	if (error) {
		console.log(error);
	}
	console.log("Instance Public IP: ", ip);
});
