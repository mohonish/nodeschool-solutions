var fs = require('fs')

var pathToFile = process.argv[2] //passed as first argument.

var fileBuf = fs.readFile(pathToFile, 'utf8', function callback (err, str) {

    var resultLength = str.split('\n').length - 1//split string to array using delimiter.
    console.log(resultLength)

}) //read file
