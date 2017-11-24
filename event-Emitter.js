var event = require('events');
var util = require('util');

var Person = function(name){
	this.name = name;
}

util.inherits(Person, event.EventEmitter);

var sri = new Person('srikanth');
var sarika = new Person('sarika');
var sindhu = new Person('sindhu');

var people = [sri,sarika,sindhu];

people.forEach(function(person){
	person.on('say', function(msg){
		console.log(person.name + ' said ' + msg);
	});
})

sri.emit('say',"movie");
sarika.emit('say',"party");
sindhu.emit('say',"chaco");
---------------------------------------------------------
var counter = function(arr){
  return 'There are ' + arr.length + ' elements available';
}

var adder = function(a,b){
  return ` The sum of two numbers is ${a+b}`;
}

var pi = 3.14;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
