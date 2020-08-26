var fs = require("fs");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const express=require("express");
const app=express();
const { exec } = require("child_process");
// #!/usr/bin/env node
const rockstar = require('./src/rockstar');
const { spawn } = require("child_process");
var flag=0;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// Required to support reading from stdin
const readlineSync = require('readline-sync');
var x="hi";
const output={
  output1:null
};

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


app.get('/',function(req,res){
  res.render('index', {output: output})
});

app.post("/",function(req,res){
  flag=0;
  //console.log(req.body);
  var title = req.body.postTitle1
  var title1 = req.body.postTitle
  //console.log(title1.length)
  title1 = title1.replace(/(\r\n|\n|\r)/gm, "\n");
  //title1=title1+"\n"
   console.log(title1);
   fs.writeFile("temp.rock", title1, (err) => {
     if (err) console.log(err);
     console.log("Successfully Written to File.");
   });
   fs.writeFile("test.txt", title, (err) => {
     if (err) console.log(err);
     console.log("Successfully Written to File.");
   });
   const filename = "temp.rock";

   promisify(fs.readFile, filename, 'utf-8')
   .then(rockstar.compile)
   .then(code => promisify(fs.writeFile, filename.replace('.rock', '.js'), code))
   .then(s =>{var contents = fs.readFileSync('temp.js', 'utf8');
   var start=contents.slice(0,7)
   if(start==="const $")
   {
   var contents1= contents.slice(344)
   contents1="const fs = require('fs');var x=0;function $readLineSync() {try {const data = fs.readFileSync('test.txt', 'UTF-8');const lines = data.split(/\\" + "r?\\" + "n/);return lines[x++];} catch (err) {console.error(err);}};\n"+contents1;
   console.log(contents1)
   fs.writeFile("temp.js", contents1, (err) => {
     if (err) console.log(err);
     console.log("Successfully Written to File.");
   });
 }
 })
   .then(null, e => {
   	//console.error(e)
    console.log(e);
    output.output1=e;
    flag=1;
    res.redirect("/");

   	//process.exit(0);

   })


   const ls = spawn("node",["temp.js"] );
   var i="hi\n";
   ls.stdout.on("data", data => {
       console.log(`${data}`);
      i=i+`${data}`
   });

   ls.stderr.on("data", data => {
       console.log(`stderr: ${data}`);
   });

   ls.on('error', (error) => {
       console.log(`error: ${error.message}`);
       output.output1=`${error.message}`;
       res.redirect("/");
   });

   ls.on("close", code => {
     console.log(i);
     output.output1=i;
       console.log(`child process exited with code ${code}`);
       if(flag==0)
         res.redirect("/");
   });
});

function promisify(fn, ...args) {
	return new Promise((resolve, reject) => fn(...args, (err, result) => {
		if (err) {
			reject(err)
		} else {
			resolve(result)
		}
	}))
}