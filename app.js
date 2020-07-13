//Create a Server to listen to the port 8888
var http = require("http");
var fs = require("fs");
const os = require("os");
const nodemailer = require("nodemailer");
var mailer = require('./mailer');
// const plist = require("plist");

var app = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.write("Welcome to Server");
      res.end();
      break;

// To return the server OS and arch
    case "/serverdetails":
      res.write(
        "Platform : " +
          os.platform() +
          "Operating system release: " +
          os.release() +
          " " +
          "Operating system type :" +
          os.type() +
          " " +
          "Operating System Architecture : " +
          os.arch()
      );

      //for mac OS
      //   var opsys = process.platform;
      //   if (opsys == "darwin") {
      //     let versionInfo = plist.parseFileSync(
      //       "/System/Library/CoreServices/Systemversion.plist"
      //     );
      //     let ver = JSON.stringify(versionInfo);
      // console.log(ver);

      res.end();
      break;

//API that is for showing any HTML page
    case "/html/page":
      res.writeHead(200, { "Content-Type": "text/html" });
      //   var file = fs.createReadStream("html/page.html");
      //   file.pipe(res);
      //   console.log("page rendered - verify the webpage");
      fs.readFile("html/page.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      break;

      // API to create a text file and updating it with a text content.
    case "/textme":
      let success =
        "Author : Shyam, \n" + " Writing to the text file is successful";
      fs.writeFile("textmeter.txt", success, (err) => {
        //   fs.writeFileSync('textmeter.txt',success,(err) =>{
        if (err) {
          throw "failed" + err;
        }

        console.log("file saved");
        // res.write("file saved, check your app.js location");
      });
      res.end();
      break;

// API for email creation and sending it to REMYA Madam
    case "/mailer":
      mailer.printer();
      res.end();
      break;


 // API for anyother condition will return bad request in console and in the page.     
     default : 
     res.write("Bad Request");
    //  console.log("Bad Request");
     res.end();
  }
});
app.listen(8888, "127.0.0.1");
console.log("NODE server started on Port :8888");
