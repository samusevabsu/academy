const fs = require('fs-extra');

fs.emptyDir('./folder1', err => {
    if (err) return console.error(err);
    console.log("Folder 1 is created");
    fs.appendFile('./folder1/file.txt', 'Hello content!', err => {
        if (err) return console.error(err);
        console.log("File is added to Folder 1");
        fs.emptyDir('./folder2', err => {
            if (err) return console.error(err);
            console.log("Folder 2 is created");
            fs.move('./folder1/file.txt', './folder2/file.txt', function (err) {
                if (err) return console.error(err)
                console.log("File is relocated into Folder 2");
                fs.remove('./folder2/file.txt', err => {
                    if (err) return console.error(err)
                    console.log('File is removed from Folder 2');
                    fs.remove('./folder2', err => {
                        if (err) return console.error(err)
                        console.log('Folder 2 is Removed')
                        fs.remove('./folder1', err => {
                            if (err) return console.error(err)
                            console.log('Folder 1 is Removed')
                        })
                    })
                })
            })
        })
    })
})