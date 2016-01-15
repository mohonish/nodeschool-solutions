var fs = require('fs')

var pathToFile = process.argv[2] //passed as first argument.
var fileBuf = fs.readFileSync(pathToFile) //read file
var fileStr = fileBuf.toString() //filebuffer to string
var resultArr = fileStr.split("\n") //split string to array using delimiter.

console.log(resultArr.length + 1)
