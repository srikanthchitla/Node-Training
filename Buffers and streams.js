// Buffers
-> Temporary storage spot for a chunk of data that is being transferred from one place to another.
-> The buffer is filled with data, then passed along.
-> Transfer small chunks of data at a time.

//streams
-> can create a streams in node.js to transfer data.
-> Increase performance.


// writable streams
/*
var fs =  require('fs');
var stream = fs.createReadStream(__dirname + '/readFile.txt', 'utf8');
stream.on('data', function(e){
    console.log('new chunk received');
    console.log(e);
}); 
*/
// END

// writable streams

var fs = require('fs');
var stream = fs.createReadStream(__dirname + '/readFile.txt','utf8');
var writeStream = fs.createWriteStream(__dirname + '/writeFile.txt');


stream.on('data', function(info){
    console.log('chunk created');
    writeStream.write(info);
});

//  END
