'Use strict';

var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');
var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');
var Phone = require('./Phone.js');



var SmartPhone = function(phoneNumber) {
  Phone.call(this,phoneNumber);
  GameConsole.call(this, "Smart Phone");

};

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);


module.exports = SmartPhone;
