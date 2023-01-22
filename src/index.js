const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  await fs.writeFile(fileName, fileContent, (err) => {
    console.log("file written");
  });
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  let data = await fs.readFile(fileName, { encoding: "utf-8" });
  console.log(data);
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function nameclear

  await fs.appendFile(fileName, fileContent, (err) => {
    if (err) {
      console.log("there is a error");
    } else {
      console.log("content updated");
    }
  });
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  await fs.unlink(fileName, (err) => {
    console.log("file deleted");
  });
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
// myFileDeleter("newfile.js");
// myFileWriter("new.js", "new content created");
// myFileUpdater("readfile.js", "new content provided");
// myFileReader("filereader.js");
