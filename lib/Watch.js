'Use strict';

var Watch  = function (){
  this.bodyPart = "";
};
  Watch.prototype.wear = function (bodyPart){
    this.bodyPart = bodyPart;
  };

module.exports = Watch;