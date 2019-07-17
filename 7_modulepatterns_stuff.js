//we can write this as module.exports.counter=function(arr){ }; instead of exporting at the end
var counter=function(arr){
    return 'There are '+arr.length +'elements in this array'; 
};

function addr(a,b){
    return `The sum of the numbers is ${a+b}`;
};

pi=3.142;

module.exports.counter=counter;
module.exports.addr=addr;
module.exports.pi=pi;
/*
module.exports={
    counter: counter,
    addr: addr,
    pi: pi
};
*/