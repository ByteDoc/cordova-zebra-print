var exec = require('cordova/exec');

exports.echo = function(echoString, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraPrint', 'echo', [echoString]);
};

exports.discoverPrinters = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraPrint', 'discoverPrinters', []);
};

exports.printImage = function(base64, MACAddress, speed, time, number, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraPrint', 'printImage', [base64, MACAddress, speed, time, number]);
};

exports.getPrinterName = function(MACAddress, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraPrint', 'getPrinterName', [MACAddress]);
};