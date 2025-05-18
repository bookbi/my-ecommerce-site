const express = require('express');
const path = require('path');
const app = express();
//serve static file from current project floder

app.use(express.static(__dirname));
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,"index.html"))
})
app.listen(5500,()=>{
    console.log("server is running at http://localhost:5500/")
})