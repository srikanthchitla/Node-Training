var fs = require('fs')


//sync
// var readFile = fs.readFileSync('readFile.txt', 'utf8');
// fs.writeFile('Async.txt', readFile);

// Asynronus
fs.readFile('readFile.txt', 'utf8', function(err, data){
		fs.writeFile('Async.txt',data);
});
