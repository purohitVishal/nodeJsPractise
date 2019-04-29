var fs = require('fs');

module.exports = function(){
					  var readData = fs.readFileSync('NewTextDocument.txt','utf8');
					 fs.writeFileSync('writeFile.txt',readData);
					 // return readData;
				}


