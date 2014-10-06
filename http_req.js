var http = require('http');

//The url we want is: 'http://api.pushingbox.com/pushingbox?devid=v47699E76AEDB1CE'
var options = {
 
  host: 'api.pushingbox.com',
  path: '/pushingbox?devid=v47699E76AEDB1CE'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();

