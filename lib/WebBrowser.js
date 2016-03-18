'Use strict';

var WebBrowser  = function (open){
};
  WebBrowser.prototype.open = function (url){
    return "Browsing to" + ' ' + url;
   };

module.exports = WebBrowser;