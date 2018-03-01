const fs = require("fs");

function deleteFile(name) {
  try {
    fs.unlinkSync(__dirname + '/' + name);
    console.log('successfully deleted /tmp/hello');
  } catch (err) {
    console.log("wrong!");
    // handle the error
  }
}

// deleteFile('file');

function openFile(name){
  fs.open(__dirname + "/" + name, "r", (err,res) => {
    console.log(res);
    console.log(err);
  })
}

// readFile('file');

function readFile(name){
  fs.readFile(__dirname + "/" + name, "utf8", (err,res) => {
    console.log(res);
    console.log(err);
  })
}

// readFile('file');


function writeFile(name){
  fs.writeFile(__dirname + "/" + name, "helloWorld!", (err,res) => {
    console.log(res);
    console.log(err);
  })
}

// writeFile('file');
