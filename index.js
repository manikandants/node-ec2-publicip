var request = require('request');
var async = require('async');
var ip = require('ip');

exports.getPublicIP = function(callback) {
	var url = 'http://169.254.169.254/latest/meta-data';
	var count = 5;
	var publicIP;
	if (!callback) {
		return;
	}
	async.doWhilst(function(fn) {
		request.get(url, function(err, response, body) {
			count--;
			if (count < 0) {
				return fn('timedout');
			}
			if (!err && response.statusCode == 200) {
				console.log(body);
			} else {
				return fn(null);
			}
		});
	},
	function() {
		return !(publicIP !== undefined && ip.isV4Format(publicIP));
	},
	function(err) {
		callback(err, publicIP)
	});
};

exports.getPublicIP(function(err, ip) {
	console.log(err, ip);
});
