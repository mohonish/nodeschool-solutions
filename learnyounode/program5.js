var fs = require('fs')
var path = require('path')

var pathToFile = process.argv[2]
var extension = "." + process.argv[3]

fs.readdir(pathToFile, function callback (err, list) {

    for(i = 0; i < list.length; i++) {
        if(path.extname(list[i]) == extension) {
            console.log(list[i]);
        }
    }

})
