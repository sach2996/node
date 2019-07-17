var events= require('events');
/*
//Basic Event Emitter-->
var myEmitter= new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'The evetn was emitted');
*/

var util=require('util');

var Person=function(name){
    this.name=name;
};

util.inherits(Person, events.EventEmitter);

var conor=new Person('conor');
var tracy=new Person('tracy');
var mary=new Person('mary');
var people=[conor,tracy,mary];

people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log( person.name +' said: '+mssg);
    });
});

conor.emit('speak','hello there');
