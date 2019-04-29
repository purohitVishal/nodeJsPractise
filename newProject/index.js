const express = require('express');
const app = express();
var readFile = require('./readFile');

app.get('/',(req,res)=>{
	res.send(readFile());

})


const port = process.env.PORT || 3000;

app.listen(port);

console.log(`listening on port=== ${port}`)