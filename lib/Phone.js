'Use strict';

var Phone  = function (phoneNumber){
  this.phoneNumber = phoneNumber;
};
  Phone.prototype.callPhone = function (phoneNumber){
    return this.phoneNumber + ' ' + "calls" + ' ' + phoneNumber;
   };

// Phone.prototype = Object.create();

module.exports = Phone;