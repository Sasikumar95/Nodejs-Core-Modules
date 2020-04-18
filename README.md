# Nodejs-Core-Modules ( Built-in Modules )
  Node.js is a Javascript engine (Google's V8 engine for Chrome, written in C++) that allows to run Javascript outside the browser. While numerous libraries are available for extending Node's functionalities, the engine comes with a set of core modules implementing basic functionalities.
  
  There's currently 34 core modules included in Node:
  
  ```
   assert, buffer, c/c++_addons, child_process, cluster, console, crypto, deprecated_apis,  
   dns, domain, Events, fs, http, https, module, net, os, path, punycode, querystring, readline, 
   repl, stream, string decoder, timers, tls_(ssl), tracing, tty, dgram, url, util, v8, vm, zlib
  ```
  they are, 
### assert
 The assert module provides a simple set of assertion tests that can be used to test invariants.
<details>
  <summary>Ex</summary>
  A system funcationality based unwanted information coming. that system will throw the error.
  <code>
    var assert = require("assert");

var everyDay = "time to eat"  relavant information
<! –– var everyDay = "not time to eat"  irrelavant information ––> 
function onhabit(goodHabit) {
  return goodHabit===everyDay
}

var expected = onhabit("time to eat");
console.log("expected", expected)
assert(expected, "health is not good");
assert.ok(expected, "health is not good");
  </code>
</details>
 
### buffer
 Prior to the introduction of TypedArray in ECMAScript 2015 (ES6), the JavaScript language had no mechanism for reading or manipulating streams of binary data. The Buffer class was introduced as part of the Node.js API to make it possible to interact with octet streams in the context of things like TCP streams and file system operations.

 Now that TypedArray has been added in ES6, the Buffer class implements the Uin t8Array API in a manner that is more optimized and suitable for Node.js' use cases.

### c/c++_addons
 Node.js Addons are dynamically-linked shared objects, written in C or C++, that can be loaded into Node.js using the require() function , and used just as if they were an ordinary Node.js module. They are used primarily to provide an interface between JavaScript running in Node.js and C/C++ libraries.

### child_process
 The child_process module provides the ability to spawn child processes in a manner that is similar, but not identical, to popen(3).
 
### cluster
 A single instance of Node.js runs in a single thread. To take advantage of multi-core systems the user will sometimes want to launch a cluster of Node.js processes to handle the load. The cluster module allows you to easily create child processes that all share server ports.

### console
 The console module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.

### crypto
 The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions.

### deprecated_apis
 Node.js may deprecate APIs when either: 
 (a) use of the API is considered to be unsafe, 
 (b) an improved alternative API has been made available,
 (c) breaking changes to the API are expected in a future major release.

### dns
 The dns module contains functions belonging to two different categories:
    Functions that use the underlying operating system facilities to perform name resolution, and that do not necessarily perform any network communication. This category contains only one function: dns.lookup().
Functions that connect to an actual DNS server to perform name resolution, and that always use the network to perform DNS queries. This category contains all functions in the dns module except dns.lookup().

### domain
 This module is pending deprecation. Once a replacement API has been finalized, this module will be fully deprecated. Most end users should not have cause to use this module. Users who absolutely must have the functionality that domains provide may rely on it for the time being but should expect to have to migrate to a different solution in the future.

### Events
 Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") periodically emit named events that cause Function objects ("listeners") to be called.

### fs
 File I/O is provided by simple wrappers around standard POSIX functions. To use this module do require('fs'). All the methods have asynchronous and synchronous forms.

### http
 The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses--the user is able to stream data.

###https
 HTTPS is the HTTP protocol over TLS/SSL. In Node.js this is implemented as a separate module.

### module
 Node.js has a simple module loading system. In Node.js, files and modules are in one-to-one correspondence (each file is treated as a separate module).

### net
 The net module provides you with an asynchronous network wrapper. It contains functions for creating both servers and clients (called streams). You can include this module with require('net');.

### os
 The os module provides a number of operating system-related utility methods.

### path
 The path module provides utilities for working with file and directory paths.

### punycode
 The version of the punycode module bundled in Node.js is being deprecated.

### querystring
 The querystring module provides utilities for parsing and formatting URL query strings.

### readline
 The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

### repl
 The repl module provides a Read-Eval-Print-Loop (REPL) implementation that is available both as a standalone program or includible in other applications.

### stream
 A stream is an abstract interface for working with streaming data in Node.js. The stream module provides a base API that makes it easy to build objects that implement the stream interface.

 There are many stream objects provided by Node.js. For instance, a request to an HTTP server and process.stdout are both stream instances.

### string_decoder
 The string_decoder module provides an API for decoding Buffer objects into strings in a manner that preserves encoded multi-byte UTF-8 and UTF-16 characters.

### timers
 The timer module exposes a global API for scheduling functions to be called at some future period of time. Because the timer functions are globals, there is no need to call require('timers') to use the API.

 The timer functions within Node.js implement a similar API as the timers API provided by Web Browsers but use a different internal implementation that is built around the Node.js Event Loop.

### tls_(ssl)
 The tls module provides an implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL) protocols that is built on top of OpenSSL.

### tracing
 Trace Event provides a mechanism to centralize tracing information generated by V8, Node core, and userspace code.

 Tracing can be enabled by passing the --trace-events-enabled flag when starting a Node.js application.

### tty
 The tty module provides the tty.ReadStream and tty.WriteStream classes. In most cases, it will not be necessary or possible to use this module directly.

### dgram
 The dgram module provides an implementation of UDP Datagram sockets.

### url
 The url module provides utilities for URL resolution and parsing.

### util
 The util module is primarily designed to support the needs of Node.js' own internal APIs. However, many of the utilities are useful for application and module developers as well.

### v8
 The v8 module exposes APIs that are specific to the version of V8 built into the Node.js binary.
 
Note: The APIs and implementation are subject to change at any time.

### vm
 The vm module provides APIs for compiling and running code within V8 Virtual Machine contexts. JavaScript code can be compiled and run immediately or compiled, saved, and run later.
 
Note: The vm module is not a security mechanism. Do not use it to run untrusted code.

### zlib
 The zlib module provides compression functionality implemented using Gzip and Deflate/Inflate.
 
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
