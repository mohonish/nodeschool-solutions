var mymodule = require('./program6_module.js')

var pathToFile = process.argv[2]
var extension = process.argv[3]

mymodule(pathToFile, extension, function(err, data) {

    if (err) {
        console.log(err)
    } else {
        //print result
        for(i = 0; i < data.length; i++) {
            console.log(data[i])
        }
    }

})
