# node-ec2-publicip

Retrieve EC2 public-ipv4 from instance metadata.

Note: this assumes that a metadata service is available at http://169.254.169.254/. Thus it works on EC2 instances, behavior on other machines is undefined.

## Install

```bash
    npm install ec2-publicip
```

## Example

```javascript
    var ec2 = require("ec2-publicip");

    ec2.getPublicIP(function (error, ip) {
    	if (error) {
    		console.log(error);
    	}
        console.log("Instance Public IP: ", ip);
    });
```

## Details

Public IPV4 of Amazon EC2 instances can be retrieved via http GET calls to http://169.254.169.254/latest/meta-data
This module gets the public IPV4 from meta-data api.

## Change Log
- 1.0.3: Dependencies update.
- 1.0.2: Added [example](https://tonicdev.com/npm/ec2-publicip).
- 1.0.1: Added documentation.
- 1.0.0: Basic getPublicIP with timeout error.

## License

MIT
