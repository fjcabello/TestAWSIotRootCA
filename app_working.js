var awsIot = require('aws-iot-device-sdk');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//

const BRAND = 99;
const MACHINE_ID = 'dsu_test_paco';

const THING_NAME = `${BRAND}_${MACHINE_ID}`;

var device = awsIot.device({
    keyPath: "certs/a30103a1ba-private.pem.key",
    certPath: "certs/a30103a1ba-certificate.pem.crt",
    caPath: "certs/AmazonRootCA1.pem",
    clientId: THING_NAME,
    host: "afkebd45li1ey-ats.iot.eu-west-1.amazonaws.com"
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device
    .on('connect', function() {
        console.log('connect');
    });

device
    .on('message', function(topic, payload) {
        console.log('message', topic, payload.toString());
    });


device.on('error', function(err) {
    console.error('Error ', err);
});

device.on('close', function() {
    console.log('Disconnect');
    connected = false;
});
