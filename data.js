 
//  user-define or Local Module

 const sayName= ()=>{
     console.log("Name : Sasikumar");
 }


 const sayAddress= ()=>{
    console.log("Address : Chennai");
}


// this Data send to the data.js file
module.exports.sayName= sayName;
module.exports.sayAddress= sayAddress;