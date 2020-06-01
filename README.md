# Nodejs-Core-Modules ( Built-in Modules )
  Node.js is a Javascript engine (Google's V8 engine for Chrome, written in C++) that allows to run Javascript outside the browser. While numerous libraries are available for extending Node's functionalities, the engine comes with a set of core modules implementing basic functionalities.
  
  There's currently 34 core modules included in Node:
  
  ```
   assert, buffer, c/c++_addons, child_process, cluster, console, crypto, deprecated_apis,  
   dns, domain, Events, fs, http, https, module, net, os, path, punycode, querystring, readline, 
   repl, stream, string decoder, timers, tls_(ssl), tracing, tty, dgram, url, util, v8, vm, zlib
  ```
  
## require(id)
 require is heart of all Modules in ES5 Specification.
  * id <string> module name or path
  * Returns: <any> exported module content
 Used to import modules, JSON, and local files. Modules can be imported from node_modules. Local modules and JSON files can be imported using a relative path (e.g. ./, ./foo, ./bar/baz, ../foo) that will be resolved against the directory named by __dirname (if defined) or the current working directory.
 
 ```
 // Importing a local module:
var myLocalModule = require('./path/myLocalModule');

// Importing a JSON file:
var jsonData = require('./path/filename.json');

// Importing a module from node_modules or Node.js built-in module:
var crypto = require('crypto');

 ```
 My reference [Node.js/modules_exports](https://nodejs.org/api/modules.html#modules_exports)
