const url = require('url');


const address ="http://localhost:1234/index.html?name=sasikumar&address=chennai&age=24";

const findhostname=url.parse(address,true);

console.log(findhostname.host);
console.log(findhostname.path);
console.log(findhostname.query.name);
console.log(findhostname.query.age);
console.log(findhostname.query.address);

