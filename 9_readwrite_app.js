var fs= require('fs');

/*Synchronous 
var readMe=fs.readFileSync('readMe.txt','utf8');
//console.log(readMe);
fs.writeFileSync('write.txt',readMe);
*/
//Asynchronous
var readMe=fs.readFile('readMe.txt','utf8',function(err,data){
    fs.writeFile('write.txt', data, function(err,data){ //by not using callback function will throw an error
        console.log("written successfully");
        });
});

