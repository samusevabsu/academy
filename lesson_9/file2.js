const fs = require('fs-extra');

fs.emptyDir('./folder1', createFile);


function createFile() {
    fs.appendFile('./folder1/file.txt', 'Hello content!', err => {
        if (err) return console.error(err);
        console.log("File is added into Folder 1");
        createFolder();
    })
}

function createFolder() {
    fs.emptyDir('./folder2', err => {
        if (err) return console.error(err);
        console.log("Folder 2 is created");
        moveFile();
    })
}

function moveFile() {
    fs.move('./folder1/file.txt', './folder2/file.txt', function (err) {
        if (err) return console.error(err)
        console.log("File is relocated into Folder 2");
        removeFolder('./folder2');
        removeFolder('./folder1');
        
    })
}

function removeFolder(url) {
    fs.remove(url, err => {
        if (err) return console.error(err);
        console.log(`${url} is Removed`);
    })
    
};