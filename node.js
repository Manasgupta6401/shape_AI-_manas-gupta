const express = require('express'); 
const bodyparser = require('body-parser');

const app = express(); 
app.use(bodyparser.urlencoded({extended: true}));

const port = 3000; 

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var res=n1+n2;
  res.send("The result is " + res);
});

app.listen(port, () => {  
  console.log(`Example app listening at http://localhost:${port}`) 
})