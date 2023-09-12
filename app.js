//User bata input lida follow these very steps:

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Enter your name:", (name) => {
//   console.log("You entered:", name);
//   rl.close();
// });
// rl.on("close", () => {
//   console.log("Interface closed!!");
//   process.exit(0);
// });

//*************Read and write on the file.********/

// const fs = require("fs");
// const content = fs.readFileSync("./Files/Hello.txt", "utf-8");
// console.log(content);
// const content1 = `This is content 1.`;
// fs.writeFileSync("./Files/callback.txt", content1);

/**********************Async exetcution of read and write file**************/
const { error } = require("console");
const fs = require("fs");
fs.readFile("./Files/Hello.txt", "utf-8", (error1, data1) => {
  console.log(data1);
  fs.readFile(`./Files/${data1}.txt`, "utf-8", (error2, data2) => {
    console.log(data2);
    fs.writeFile(
      `./Files/input.txt`,
      `${data1}\n\n${data2}\n\n${new Date()}`,
      () => {
        console.log("file written successfully!!");
      }
    );
  });
});
