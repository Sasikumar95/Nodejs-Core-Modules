
// Read File opreation

var js = require('fs');
js.readFile('./hello.txt',function(err, data){
    if(!err){
        console.log(data.toString());
    }
});

// Write and Read File Opreation


// var js = require('fs');
// js.writeFile('./hello.txt', "Welcome My GitHub Account",function(err){
// if(!err){
//     js.readFile('./hello.txt',function(err, data){
//         if(!err){
//             console.log(data.toString());
//         }
//     });
// }
// });
