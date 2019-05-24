const path = require('path');

const getfilepath = path.join(__dirname,"events.js");

console.log(getfilepath);

const getfilename= path.basename(getfilepath);

console.log(getfilename);

const getfileextname=path.extname(getfilename);

console.log(getfileextname);