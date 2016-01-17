var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback) {

    var pathToFile = dir
    var extension = "." + ext

    fs.readdir(pathToFile, function (err, list) {

        if (err) {
            return callback(err, null)
        } else {
            var newList = []
            for(i = 0; i < list.length; i++) {
                if(path.extname(list[i]) == extension) {
                    newList.push(list[i])
                }
            }
            return callback(null, newList)
        }


    })

}
